<script lang="ts" setup>
import {h, ref, onMounted, nextTick, onBeforeUnmount} from "vue";
import {TreeOption, TreeDropInfo, NIcon, NBadge, NEllipsis} from "naive-ui";
import {SunnyOutline, PlanetOutline} from '@vicons/ionicons5';
import {t} from "@/language";
import {useAddSignal, useRemoveSignal} from "@/hooks/useSignal";
import {escapeHTML, findSiblingsAndIndex} from "@/utils/common/utils";
import {getMaterialName} from "@/utils/common/scenes";
import { MoveObjectCommand, RemoveObjectCommand, AddObjectCommand } from "@/core/commands/Commands";
import EsContextmenu from "@/components/es/EsContextmenu.vue";

const sceneTreeRef = ref();
const pattern = ref("");
const sceneTreeData = ref<TreeOption[]>([]);
const sceneTreeSelected = ref<Array<string | number>>([]);
const renderSwitcherIconWithExpaned = ({expanded}: { expanded: boolean }) =>
    h(NIcon, null, {
      default: () => h(expanded ? SunnyOutline : PlanetOutline)
    })
const sceneTreeExpandedKeys = ref<number[]>([]);

onMounted(async () => {
  await nextTick();
  refreshUI();

  useAddSignal("editorCleared", refreshUI);
  useAddSignal("objectAdded", refreshUI);
  useAddSignal("objectChanged", refreshUI);
  useAddSignal("objectRemoved", refreshUI);
  useAddSignal("objectSelected", objectSelected);
})

onBeforeUnmount(()=>{
  useRemoveSignal("editorCleared", refreshUI);
  useRemoveSignal("objectAdded", refreshUI);
  useRemoveSignal("objectChanged", refreshUI);
  useRemoveSignal("objectRemoved", refreshUI);
  useRemoveSignal("objectSelected", objectSelected);
})

// 注册相关的signal
function objectSelected(object) {
  if (object !== null && object.parent !== null) {
    sceneTreeSelected.value = [object.id];
    // 将此id父级递归展开
    sceneTreeExpandedKeys.value = [window.editor.scene.id];
    function getParentId(obj){
      if(obj.parent.id !== window.editor.scene.id){
        sceneTreeExpandedKeys.value.push(obj.parent.id);
        getParentId(obj.parent);
      }
    }
    getParentId(object)

    //在虚拟滚动模式下滚动到某个节点
    sceneTreeRef.value?.scrollTo({key: object.id})
  } else {
    sceneTreeSelected.value = [];
  }
}

// 更新树
function refreshUI() {
  const camera = window.editor.camera;
  const scene = window.editor.scene;

  sceneTreeData.value = [];
  sceneTreeData.value.push({
    label: window.$cpt("core.editor['Default Camera']"),
    key: camera.id,
    isLeaf: true
  });
  sceneTreeData.value.push({
    label: window.$cpt("core.editor['Default Scene']"),
    key: scene.id,
    isLeaf: false,
    children: addObjects(scene)
  });

  if(sceneTreeExpandedKeys.value.length === 0){
    sceneTreeExpandedKeys.value = [scene.id];
  }

  function addObjects(object3D) {
    const childArr: TreeOption[] = [];

    if (object3D.ignore) return childArr;

    //for循环 为大场景提升遍历效率
    for (let i = 0, l = object3D.children.length; i < l; i++) {
      const child = object3D.children[i];

      if (child.ignore) continue;

      const data: TreeOption = {
        label: escapeHTML(child.name),
        key: child.id,
        // isLeaf: child.children.length === 0 && child.type !== "Group"
        isLeaf: child.children.length === 0
      }
      if (child.children.length > 0) {
        data.children = addObjects(child);
      }

      if (child.isMesh) {
        const geometry = child.geometry;
        const material = child.material;

        data.suffix = () => {
          return h('div', {class: "ml-4 text-12px"}, [
            h(
                NBadge,
                {dot: true, type: 'success'},
                {},
            ),
            h(NEllipsis, {class: "!max-w-100px"}, {
              default: () => h("span", {class: 'ml-1 mr-2'}, {default: () => escapeHTML(geometry.name)})
            }),
            h(
                NBadge,
                {dot: true, type: 'warning'},
                {},
            ),
            h(NEllipsis, {class: "!max-w-100px"}, {
              default: () => h("span", {class: 'ml-1 mr-2'}, {default: () => escapeHTML(getMaterialName(material))})
            }),

          ])
        }
      }
      childArr.push(data);
    }
    return childArr;
  }

  if (window.editor.selected !== null) {
    sceneTreeSelected.value = [window.editor.selected.id];
  }
}

//移动模型
function moveObject(object, newParent, nextObject) {
  if (nextObject === null) nextObject = undefined;

  let newParentIsChild = false;

  object.traverse(function (child) {
    if (child === newParent) newParentIsChild = true;
  });

  if (newParentIsChild) return;

  window.editor.execute(new MoveObjectCommand(object, newParent, nextObject));
}

/**
 * 处理树节点拖动
 * @param node 拖动到的目标位置节点
 * @param dragNode 被拖动的节点
 * @param dropPosition 拖动到的相对于目标节点的位置
 */
function handleSceneTreeDrop({node, dragNode, dropPosition}: TreeDropInfo) {
  //无法移动到默认场景之外
  if (node.label === window.$t("core.editor['Default Camera']") || node.label === window.$t("core.editor['Default Scene']")) return;
  // 要拖动到的目标模型
  const targetParentObject3D = window.editor.scene.getObjectById(Number(node.key));
  // 被拖动的模型
  const dragObject3D = window.editor.scene.getObjectById(Number(dragNode.key));

  const [dragNodeSiblings, dragNodeIndex] = findSiblingsAndIndex(dragNode, sceneTreeData.value);
  if (dragNodeSiblings === null || dragNodeIndex === null) return;
  //在被拖动节点的父级中删除该节点
  dragNodeSiblings.splice(dragNodeIndex, 1);

  switch (dropPosition) {
    case "inside":
      if (node.children) {
        node.children.unshift(dragNode)
      } else {
        node.children = [dragNode]
      }
      // 移动模型
      moveObject(dragObject3D, targetParentObject3D, null);
      break;
    case "before":
      // 寻找目标位置节点的父级及该节点的索引
      const [_nodeSiblings, _nodeIndex] = findSiblingsAndIndex(node, sceneTreeData.value);
      if (_nodeSiblings === null || _nodeIndex === null) return;
      _nodeSiblings.splice(_nodeIndex, 0, dragNode);
      // 移动模型
      moveObject(dragObject3D, targetParentObject3D.parent, targetParentObject3D);
      break;
    case "after":
      const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(node, sceneTreeData.value);
      if (nodeSiblings === null || nodeIndex === null) return
      nodeSiblings.splice(nodeIndex + 1, 0, dragNode);
      // 移动模型
      moveObject(dragObject3D, targetParentObject3D.parent, targetParentObject3D.parent.children[targetParentObject3D.parent.children.indexOf(targetParentObject3D) + 1]);
      break;
  }

  sceneTreeData.value = Array.from(sceneTreeData.value);
}

// 判断树节点是否可拖动到对应选择位置（拖动到内部时只能是Group / Scene）
function allowDrop({dropPosition, node}) {
  if (dropPosition === "inside") {
    // 要拖动到的目标模型
    const targetParentObject3D = window.editor.scene.getObjectById(Number(node.key));

    if (targetParentObject3D?.type !== "Group" && targetParentObject3D?.type !== "Scene") {
      return false
    }
  }

  return true;
}

//场景树节点选中/取消选中事件
function handlerTreeSelectChange(keys: Array<number>, option: Array<TreeOption>, meta: {
  node: TreeOption,
  action: 'select' | 'unselect'
}) {
  sceneTreeSelected.value = keys;
  if (meta.action === "select") {
    window.editor.selectById(keys[0]);
  } else {
    window.editor.deselect();
  }
}

// 场景树节点点击事件，主要用于配合右键菜单
function nodeProps({ option }: { option: TreeOption }) {
  return {
    onContextmenu(e: MouseEvent): void {
      e.preventDefault();
      if([window.editor.camera.id,window.editor.scene.id].includes(option.key)) return;

      contextmenuRef.value?.show(e.clientX, e.clientY);

      contextmenuTreeOption.value = option;
    }
  }
}

/* 右键菜单 */
const contextmenuRef = ref();
const contextmenuOptions = [
  {
    label: t("other.Focus"),
    key: 'focus'
  },
  {
    label: t("home.Delete"),
    key: 'delete'
  },
  {
    label: t("layout.header.Clone"),
    key: 'clone'
  }
];
const contextmenuTreeOption = ref<TreeOption | null>(null);

function handleContextmenuSelect(key: string) {
  if (!contextmenuTreeOption) return;

  const object = window.editor.scene.getObjectById(contextmenuTreeOption.value?.key as number);

  switch (key) {
    case "focus":
      window.editor.focus(object);
      break;
    case "delete":
      const parent = object.parent;
      if (parent !== null) window.editor.execute(new RemoveObjectCommand(object));
      break;
    case "clone":
      const _object = object.clone();

      window.editor.execute(new AddObjectCommand(_object));
      break;
  }
}
</script>

<template>
  <n-input v-model:value="pattern" :placeholder="t('layout.sider.scene.search')"/>
  <n-tree ref="sceneTreeRef" :pattern="pattern"
          :data="sceneTreeData"
          v-model:selected-keys="sceneTreeSelected"
          :show-irrelevant-nodes="false"
          :render-switcher-icon="renderSwitcherIconWithExpaned"
          v-model:expanded-keys="sceneTreeExpandedKeys"
          draggable
          :allow-drop="allowDrop"
          :node-props="nodeProps"
          @drop="handleSceneTreeDrop"
          @update:selected-keys="handlerTreeSelectChange"
          block-line virtual-scroll
  />

  <EsContextmenu ref="contextmenuRef" placement="right-start" trigger="manual" size="small"
                 :options="contextmenuOptions" @select="handleContextmenuSelect" />
</template>

<style lang="less" scoped>
  .n-input {
    margin-bottom: 10px;
    height: 34px;
  }

  .n-tree {
    height: calc(100% - 44px);
    width: 100%;
    overflow-x: auto;

    :deep(.n-tree-node-wrapper) {
      white-space: nowrap;
    }

    :deep(.n-tree-node-content__text) {
      flex-grow: unset;
    }
  }
</style>

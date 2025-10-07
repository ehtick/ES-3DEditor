<script setup lang="ts">
import {onBeforeUnmount, onMounted, reactive} from "vue";
import {CaretForwardOutline} from "@vicons/ionicons5";
import {App,Utils,Hooks,getDefault3DTilesOptions} from "@astral3d/engine";
import {t} from "@/language";
import Debug from "@/views/editor/layouts/sidebar/tiles/Sidebar.3DTiles.Debug.vue";

const tilesData = reactive(getDefault3DTilesOptions());

function updateUI() {
  const object = App.selected;
  if(!object) return;

  if (!Utils.is3DTilesObject(object)) return;

  Utils.deepAssign(tilesData, object.options);
}

function update(key:string): void {
  const object = App.selected;
  if(!object) return;

  if (!Utils.is3DTilesObject(object)) return;

  switch (key) {
    case "debug":
      object.setDebug(tilesData.debug);
      break;
  }
}

onMounted(() => {
  Hooks.useAddSignal("objectSelected", updateUI);

  updateUI();
})
onBeforeUnmount(() => {
  Hooks.useRemoveSignal("objectSelected", updateUI);
})

</script>

<template>
  <n-collapse display-directive="show" :default-expanded-names="['debug']">
    <template #arrow>
      <n-icon>
        <CaretForwardOutline />
      </n-icon>
    </template>

    <!--  Debug  -->
    <n-collapse-item :title="t('other.Debug')" name="debug">
      <Debug :data="tilesData.debug" @update="update" />
    </n-collapse-item>
  </n-collapse>
</template>

<style scoped lang="less">

</style>
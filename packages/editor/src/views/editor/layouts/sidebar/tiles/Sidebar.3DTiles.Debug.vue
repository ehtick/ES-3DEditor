<script setup lang="ts">
import {t} from "@/language";
import {getDefault3DTilesOptions,TILES_DEBUG_COLOR_MODE} from "@astral3d/engine";

withDefaults(defineProps<{
  data: {
    enabled: boolean,
    colorMode: string,
    displayBoxBounds:boolean,
    displaySphereBounds:boolean,
  }
}>(), {
  data: () => getDefault3DTilesOptions().debug
})

const emits = defineEmits(['update']);

function update(){
  emits('update', "debug");
}
</script>

<template>
  <div class="sidebar-config-item">
    <span>{{ t(`other.Enable`) }}</span>
    <div>
      <n-checkbox size="small" v-model:checked="data.enabled" @update:checked="update()"/>
    </div>
  </div>

  <!-- 颜色模式 -->
  <div class="sidebar-config-item">
    <span>{{ t(`layout.sider.tiles.Color mode`) }}</span>
    <n-select v-model:value="data.colorMode" size="small" :options="[
        {label: 'None', value: TILES_DEBUG_COLOR_MODE.None },
        {label: 'Screen error', value: TILES_DEBUG_COLOR_MODE['Screen error']},
        {label: 'Geometric error', value: TILES_DEBUG_COLOR_MODE['Geometric error']},
        {label: 'Distance', value: TILES_DEBUG_COLOR_MODE.Distance},
        {label: 'Depth', value: TILES_DEBUG_COLOR_MODE.Depth},
        {label: 'Relative depth', value: TILES_DEBUG_COLOR_MODE['Relative depth']},
        {label: 'Is leaf', value: TILES_DEBUG_COLOR_MODE['Is leaf']},
        {label: 'Random color', value: TILES_DEBUG_COLOR_MODE['Random color']},
        {label: 'Random node color', value: TILES_DEBUG_COLOR_MODE['Random node color']},
        {label: 'Load order', value: TILES_DEBUG_COLOR_MODE['Load order']},
    ]" :disabled="!data.enabled" @update:value="update()" />
  </div>

  <div class="sidebar-config-item">
    <span>{{ t(`layout.sider.tiles.Box bounds`) }}</span>
    <div>
      <n-checkbox size="small" v-model:checked="data.displayBoxBounds" @update:checked="update()" :disabled="!data.enabled"/>
    </div>
  </div>

  <div class="sidebar-config-item">
    <span>{{ t(`layout.sider.tiles.Sphere bounds`) }}</span>
    <div>
      <n-checkbox size="small" v-model:checked="data.displaySphereBounds" @update:checked="update()" :disabled="!data.enabled"/>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
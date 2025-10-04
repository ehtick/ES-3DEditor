<script lang="ts" setup>
import {inject} from "vue";
import NavigationOperation from '@/components/header/NavigationOperation.vue';
import RightOperation from '@/components/header/RightOperation.vue';
import Logo from "@/components/header/Logo.vue";

const sceneInfo = inject<ISceneInfo>("sceneInfo");
</script>

<template>
  <div class="flex items-center">
    <Logo class="w-36px h-36px mr-15px" />

    <NavigationOperation />
  </div>

  <h3>{{sceneInfo?.sceneName}}</h3>

  <RightOperation />
</template>

<style lang="less" scoped>
.n-menu.n-menu--horizontal {
  width: auto;

  :deep(.n-menu-item-content) {
    padding: 0 0.5rem;
  }
}
</style>

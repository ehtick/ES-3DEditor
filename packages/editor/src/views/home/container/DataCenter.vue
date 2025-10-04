<template>
  <div class="data-center-container">
    <n-tabs type="line" class="h-full">
      <n-tab-pane name="dataSources" :tab="t('home.Data sources')">
        <DataSource />
      </n-tab-pane>

      <n-tab-pane name="dataSets" :tab="t('home.Data sets')">
        <DataSet />
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script lang="ts" setup>
import { t } from "@/language";
import DataSource from '../dataCenter/DataSource.vue';
import DataSet from '../dataCenter/DataSet.vue';
</script>

<style scoped lang="less">
.data-center-container {
  padding: 1rem;
  height: calc(100vh - var(--header-height) - 2rem);
}

.n-tab-pane{
  height: calc(100% - 42px - var(--n-pane-padding-top));
}
</style>

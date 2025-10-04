<template>
  <n-modal :show="show" @mask-click="handleClose">
    <n-card class="w-100 max-w-600px" :title="t('home.Data source config')">
      <n-form :model="model" :rules="rules" ref="formRef" label-placement="left" label-width="auto">
        <n-form-item :label="t('home.Data source name')" path="name">
          <n-input v-model:value="model.name" :disabled="testLinkLoading" />
        </n-form-item>
        <n-form-item :label="t('home.Data source type')">
          <n-select v-model:value="model.type" :options="dbTypes" :disabled="testLinkLoading" />
        </n-form-item>
        <n-form-item :label="t('home.Connection string')">
          <n-input v-model:value="model.connectionString" :disabled="testLinkLoading" />
        </n-form-item>
        <n-form-item :label="t('home.Username')">
          <n-input v-model:value="model.username" :disabled="testLinkLoading" />
        </n-form-item>
        <n-form-item :label="t('home.Password')">
          <n-input v-model:value="model.password" :disabled="testLinkLoading" type="password"
            show-password-on="mousedown" />
        </n-form-item>
        <div class="flex justify-between mt-4">
          <n-button type="primary" :loading="testLinkLoading" @click="handleTestLink">{{ t("home.Test the connection") }}</n-button>

          <div>
            <n-button @click="handleClose" class="mr-2">{{ t("other.Cancel") }}</n-button>
            <n-button type="primary" @click="saveDataSource">{{ t("other.Ok") }}</n-button>
          </div>

        </div>
      </n-form>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, useTemplateRef } from "vue";
import type { FormInst } from 'naive-ui'
import { t } from "@/language";

const props = withDefaults(defineProps<{
  show: boolean,
  model: IDataSource.Item
}>(), {
  show: false,
  model: () => ({
    id: '',
    name: '',
    type: 'MySQL',
    connectionString: '',
    username: "",
    password: ""
  })
})
const emits = defineEmits(["update:show", "refresh"]);

const formRef = useTemplateRef<FormInst>("formRef");
const rules = {
  name: { required: true, message: t("prompt.Please enter a data source name"), trigger: 'blur' }
};
// 数据源类型
const dbTypes = [
  { label: 'MySQL', value: 'MySQL' },
  { label: 'SQL Server', value: 'SQL Server' },
  { label: 'PostgreSQL', value: 'PostgreSQL' },
  { label: 'Oracle', value: 'Oracle' }
]
const testLinkLoading = ref(false);

function handleClose() {
  emits("update:show", false);
}

function handleTestLink(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      testLinkLoading.value = true;
    }
  })
}

function saveDataSource(e: MouseEvent) {
  e.preventDefault()

  formRef.value?.validate((errors) => {
    if (!errors) {
      if (!props.model.id) {
        // 新增

      } else {
        // 更新

      }

      // 刷新父页面表格
      emits("refresh");

      handleClose();
    }
  })
}

</script>

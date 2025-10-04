<template>
    <n-modal :show="show" @mask-click="handleClose">
        <n-card class="w-200 max-w-1200px" :title="t('home.Data set config')">
            <n-form :model="model" :rules="rules" ref="formRef" label-placement="left" label-width="auto">
                <n-grid :cols="24" :x-gap="24">
                    <n-form-item-gi :span="12" :label="t('home.Data set name')" path="name">
                        <n-input v-model:value="model.name" />
                    </n-form-item-gi>
                    <n-form-item-gi :span="12" :label="t('home.Data set group')">
                        <n-cascader v-model:value="model.groupId" expand-trigger="hover" :options="groupOptions"
                            check-strategy="child" show-path filterable clearable label-field="name" value-field="id" />
                    </n-form-item-gi>
                    <n-form-item-gi :span="12" :label="t('home.Data set type')">
                        <n-select v-model:value="model.type" :options="setTypes" />
                    </n-form-item-gi>

                    <template v-if="model.type === 'API'">
                        <n-form-item-gi :span="12" :label="t('home.Method')">
                            <n-select v-model:value="model.type" :options="[
                                { label: 'GET', value: 'GET' },
                                { label: 'POST', value: 'POST' },
                            ]" />
                        </n-form-item-gi>
                        <n-form-item-gi :span="24" :label="t('home.API interface')">
                            <n-input v-model:value="model.api" type="textarea" />
                        </n-form-item-gi>
                    </template>

                    <template v-else-if="model.type === 'SQL'">
                        <n-form-item-gi :span="12" :label="t('home.Data sources')">
                            <n-select v-model:value="model.dataSource" :options="dataSourceOptions" />
                        </n-form-item-gi>
                        <n-form-item-gi :span="24" :label="`SQL(${t('home.Query only')})`">
                            <SQLEditor v-model:value="model.sql as string" />
                        </n-form-item-gi>
                        <n-form-item-gi :span="24" label=" ">
                            <n-blockquote>
                                {{  t('home.Parameter is passed as ') }}
                                 '${id}' ,
                                {{  t('home.For example:') }}
                                SELECT * FROM table WHERE id='${id}'
                            </n-blockquote>
                        </n-form-item-gi>
                    </template>

                    <template v-else-if="model.type === 'JSON'">
                        <n-form-item-gi :span="24" label="JSON">
                            <JSONEditor v-model:value="model.json as string" />
                        </n-form-item-gi>
                    </template>

                    <n-gi :span="24">
                        <div class="flex justify-end mt-4">
                            <n-button @click="handleClose" class="mr-2">{{ t("other.Cancel") }}</n-button>
                            <n-button type="primary" @click="saveDataSet">{{ t("other.Ok") }}</n-button>
                        </div>
                    </n-gi>
                </n-grid>
            </n-form>
        </n-card>
    </n-modal>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";
import type { FormInst } from 'naive-ui'
import { t } from "@/language";
import SQLEditor from "@/components/code/SQLEditor.vue";
import JSONEditor from "@/components/code/JSONEditor.vue";

const props = withDefaults(defineProps<{
    show: boolean,
    model: IDataSet.Item
}>(), {
    show: false,
    model: () => ({
        id: '',
        groupId: "",
        name: '',
        type: 'SQL',
    })
})
const emits = defineEmits(["update:show", "refresh"]);

const formRef = useTemplateRef<FormInst>("formRef");
const rules = {
    name: { required: true, message: t("prompt.Please enter a name for the dataset"), trigger: 'blur' }
};
const groupOptions = [];
const setTypes = [
    { label: 'API', value: 'API' },
    { label: 'SQL', value: 'SQL' },
    { label: 'JSON', value: 'JSON' },
];
const dataSourceOptions = [];

function handleClose() {
    emits("update:show", false);
}

function saveDataSet(e: MouseEvent) {
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
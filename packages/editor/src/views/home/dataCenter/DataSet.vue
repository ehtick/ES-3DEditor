<template>
    <!-- <n-split direction="horizontal" :default-size="0.2" :max="0.8" :min="0.2" style="height: 100%" class="h-full">
        <template #1>
            <DataSetGroup />
        </template>
<template #2>
            <div class="pl-4">
                <div class="flex justify-between mb-3">
                    <n-input :placeholder="t('prompt.Please enter a name for the dataset')" class="max-w-64"
                        show-count :maxlength="25" @update:value="handleSearch">
                        <template #prefix>
                            <n-icon :component="Search" />
                        </template>
</n-input>

<n-button type="primary" @click="showDataSetModal = true">{{ t('home.Add data set') }}</n-button>
</div>
<n-data-table ref="tableRef" :columns="dataSetColumns" :data="dataSets" :pagination="pagination" />
</div>
</template>
</n-split> -->

    <n-flex  class="h-full w-full">
        <DataSetGroup class="w-50 min-w-300px max-w-500px" />

        <n-divider vertical class="!h-full" />

        <div class="flex-1">
            <div class="flex justify-between mb-3">
                <n-input :placeholder="t('prompt.Please enter a name for the dataset')" class="max-w-64" show-count
                    :maxlength="25" @update:value="handleSearch">
                    <template #prefix>
                        <n-icon :component="Search" />
                    </template>
                </n-input>

                <n-button type="primary" @click="showDataSetModal = true">{{ t('home.Add data set') }}</n-button>
            </div>
            <n-data-table ref="tableRef" :columns="dataSetColumns" :data="dataSets" :pagination="pagination" />
        </div>
    </n-flex>

    <!-- 数据集模态框 -->
    <DataSetModal v-model:show="showDataSetModal" :model="currentDataSet" @refresh="getList" />
</template>

<script lang="ts" setup>
import { ref, reactive, h, onMounted, useTemplateRef } from 'vue';
import { NButton, NPopconfirm } from 'naive-ui';
import type { DataTableInst } from 'naive-ui';
import { Search } from '@vicons/carbon';
import { t } from "@/language";
import DataSetModal from "./DataSetModal.vue";
import DataSetGroup from "./DataSetGroup.vue";

const tableRef = useTemplateRef<DataTableInst>("tableRef");
const dataSets = ref<IDataSet.Item[]>([
    {
        id: '',
        groupId:"1",
        name: '323324234',
        type: 'SQL'
    }
])
const showDataSetModal = ref(false)
const currentDataSet = reactive<IDataSet.Item>({
    id: '',
    groupId:"1",
    name: '',
    type: 'SQL'
})
const dataSetColumns = [
    {
        title: t("home.Data set name"),
        key: 'name',
        defaultSortOrder: 'ascend',
        sorter: 'default',
        resizable: true,
        minWidth: 120,
        maxWidth: 400,
        ellipsis: {
            tooltip: true
        },
        filter(value, row) {
            return ~row.name.indexOf(value);
        }
    },
    {
        title: t("home.Data set type"),
        key: 'type',
        defaultSortOrder: 'ascend',
        sorter: 'default',
        resizable: true,
        width: 180,
        minWidth: 120,
        maxWidth: 260
    },
    {
        title: t("other.Action"),
        key: 'actions',
        resizable: true,
        minWidth: 120,
        maxWidth: 300,
        render: (row) => h('div', [
            h(NButton, {
                size: 'small',
                onClick: () => editDataSet(row),
                style: { marginRight: '0.4rem' }
            }, t("layout.sider.script.Edit")),
            h(NPopconfirm, {
                onPositiveClick: () => deleteDataSet(row)
            }, {
                default: () => t("prompt.Are you sure you want to delete it?"),
                trigger: () => h(NButton, {
                    size: 'small'
                }, t("home.Delete"))
            })
        ])
    }
]
// 分页配置
const pagination = { pageSize: 10 }

function getList() { }

function handleSearch(searchText: string) {
    tableRef.value?.filter({
        name: [searchText]
    })
}

function editDataSet(item) {
    Object.assign(currentDataSet, item)
    showDataSetModal.value = true
}

function deleteDataSet(item) {
    dataSets.value = dataSets.value.filter(ds => ds.id !== item.id)
}

onMounted(() => {
    getList();
})
</script>
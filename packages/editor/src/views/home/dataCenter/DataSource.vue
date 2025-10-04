<template>
    <div class="flex justify-between mb-3">
        <n-input :placeholder="t('prompt.Please enter a data source name')" class="max-w-64" show-count
            :maxlength="25" @update:value="handleSearch">
            <template #prefix>
                <n-icon :component="Search" />
            </template>
        </n-input>

        <n-button type="primary" @click="showDataSourceModal = true">{{ t('home.Add data source') }}</n-button>
    </div>
    <n-data-table ref="tableRef" :columns="dataSourceColumns" :data="dataSources" :pagination="pagination" striped />

    <!-- 数据源模态框 -->
    <DataSourceModal v-model:show="showDataSourceModal" :model="currentDataSource" @refresh="getList" />
</template>

<script lang="ts" setup>
import { ref, reactive, h, onMounted, useTemplateRef } from 'vue';
import { NButton, NPopconfirm } from 'naive-ui';
import type { DataTableInst } from 'naive-ui';
import { Search } from '@vicons/carbon';
import { t } from "@/language";
import DataSourceModal from "./DataSourceModal.vue";

const tableRef = useTemplateRef<DataTableInst>("tableRef");
const dataSources = ref<IDataSource.Item[]>([])
const showDataSourceModal = ref(false)
const currentDataSource = reactive({
    id: '',
    name: '',
    type: 'MySQL',
    connectionString: '',
    username: "",
    password: ""
})
const dataSourceColumns = [
    {
        title: t("home.Data source name"),
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
            return ~row.name.indexOf(value)
        }
    },
    {
        title: t("home.Data source type"),
        key: 'type',
        defaultSortOrder: 'ascend',
        sorter: 'default',
        resizable: true,
        width: 180,
        minWidth: 120,
        maxWidth: 260
    },
    {
        title: t("home.Connection string"),
        key: 'connectionString',
        resizable: true,
        minWidth: 120,
        maxWidth: 600,
        ellipsis: {
            tooltip: true
        }
    },
    {
        title: t("home.Username"),
        key: 'username',
        resizable: true,
        minWidth: 120,
        maxWidth: 300,
        ellipsis: {
            tooltip: true
        }
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
                onClick: () => editDataSource(row),
                style: { marginRight: '0.4rem' }
            }, t("layout.sider.script.Edit")),
            h(NPopconfirm, {
                onPositiveClick: () => deleteDataSource(row)
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

function editDataSource(item) {
    Object.assign(currentDataSource, item)
    showDataSourceModal.value = true
}

function deleteDataSource(item) {
    dataSources.value = dataSources.value.filter(ds => ds.id !== item.id)
}

onMounted(() => {
    getList();
})
</script>
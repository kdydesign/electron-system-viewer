<template>
  <q-page>
    <q-page-sticky position="top"
                   expand>
      <q-toolbar>
        <q-toolbar-title>Memory</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>

    <q-table
        title="Memory 사용률"
        :data="memData"
        :columns="memColumns"
        :rows-per-page-options="[0]"
        :pagination.sync="serverPagination"
        row-key="name"
        hide-header
        hide-bottom/>
  </q-page>
</template>

<script>
  export default {
    name: 'Memory',
    data () {
      return {
        interval: void 0,
        memData: [],
        memColumns: [
          {field: 'name', label: '이름', align: 'left'},
          {field: 'used', label: '값', align: 'left', format: val => val.toLocaleString()}
        ],
        serverPagination: {
          page: 1,
          rowsNumber: 10,
          rowsPerPage: 0
        }
      }
    },
    created () {
      this.getMemData()
      this.interval = setInterval(() => this.getMemData(), 1000)
    },
    beforeDestroy () {
      clearInterval(this.interval)
      this.interval = void 0
    },
    methods: {
      getMemData () {
        const memUsed = process.memoryUsage()

        this.memData = []

        this.memData.push({name: 'external', used: memUsed.external})
        this.memData.push({name: 'heapTotal', used: memUsed.heapTotal})
        this.memData.push({name: 'heapUsed', used: memUsed.heapUsed})
        this.memData.push({name: 'rss', used: memUsed.rss})
      }
    }
  }
</script>

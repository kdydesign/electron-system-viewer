<template>
  <q-page>
    <q-page-sticky position="top"
                   expand>
      <q-toolbar color="indigo-6">
        <q-toolbar-title>System</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>

    <div class="basic-sys-info">
      <q-table
          title="기본 정보"
          :data="sysData"
          :columns="sysColumns"
          :rows-per-page-options="[0]"
          :pagination.sync="serverPagination"
          row-key="name"
          hide-header
          hide-bottom
      />
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'System',
    data () {
      return {
        sysData: [],
        sysColumns: [
          {field: 'name', label: '이름', align: 'left'},
          {field: 'sysData', label: '값', align: 'left', format: val => val.toLocaleString()}
        ],
        serverPagination: {
          page: 1,
          rowsNumber: 10,
          rowsPerPage: 0
        }
      }
    },
    created () {
      this.getSysData()
    },
    methods: {
      getSysData () {
        import('os').then((result) => {
          this.sysData.push({name: 'Free Memory', sysData: result.freemem()})
          this.sysData.push({name: 'Home Directory', sysData: result.homedir()})
          this.sysData.push({name: 'Host Name', sysData: result.hostname()})
          this.sysData.push({name: 'Release', sysData: result.release()})
          this.sysData.push({name: 'User Name', sysData: result.userInfo().username})
          this.sysData.push({name: 'Endianness', sysData: result.endianness()})
          this.sysData.push({name: 'arch', sysData: result.arch()})
        })
      }
    }
  }
</script>

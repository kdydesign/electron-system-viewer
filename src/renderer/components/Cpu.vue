<template>
  <q-page>
    <q-page-sticky position="top"
                   expand>
      <q-toolbar>
        <q-toolbar-title>CPU</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>

    <div>
      <div class="basic-sys-info">
        <q-table grid
                 hide-header
                 hide-bottom
                 :rows-per-page-options="[0]"
                 :pagination.sync="serverPagination"
                 :data="cpuData"
                 :columns="cpuColumns"
                 row-key="name"
        >
          <div slot="item"
               slot-scope="props"
               class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 transition-generic"
          >
            <q-card class="transition-generic">
              <q-card-title class="relative-position">
                {{props.row.name}}
              </q-card-title>

              <q-card-separator/>

              <q-card-main class="q-pa-none">
                <q-list no-border>
                  <q-item v-for="col in props.cols"
                          :key="col.name">
                    <q-item-main>
                      <q-item-tile label>{{ col.label }}</q-item-tile>
                    </q-item-main>
                    <q-item-side right>
                      <q-item-tile>{{ col.value }}</q-item-tile>
                    </q-item-side>
                  </q-item>
                </q-list>
              </q-card-main>
            </q-card>
          </div>
        </q-table>
      </div>

      <div class="cpu-sys-info">
        <q-table title="CPU 사용률"
                 :data="useCpuData"
                 :columns="useCpuColumns"
                 :rows-per-page-options="[0]"
                 :pagination.sync="serverPagination"
                 row-key="name"
                 hide-header
                 hide-bottom/>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'Cpu',
    data () {
      return {
        interval: void 0,
        useCpuData: [],
        useCpuColumns: [
          { field: 'name', label: '이름', align: 'left' },
          { field: 'used', label: '값', align: 'left', format: val => val.toLocaleString() }
        ],
        cpuData: [],
        cpuColumns: [
          {
            name: 'speed',
            align: 'center',
            label: 'speed',
            field: 'speed',
            sortable: true,
            format: val => val.toLocaleString()
          },
          { name: 'idle', label: 'idle', field: 'idle', format: val => val.toLocaleString() },
          { name: 'irq', label: 'irq', field: 'irq', format: val => val.toLocaleString() },
          { name: 'nice', label: 'nice', field: 'nice', format: val => val.toLocaleString() },
          { name: 'sys', label: 'sys', field: 'sys', format: val => val.toLocaleString() },
          { name: 'user', label: 'user', field: 'user', format: val => val.toLocaleString() }
        ],
        serverPagination: {
          page: 1,
          rowsNumber: 10,
          rowsPerPage: 0
        }
      }
    },
    created () {
      this.getCpuData()
      this.interval = setInterval(() => this.getCpuData(), 1000)
    },
    beforeDestroy () {
      clearInterval(this.interval)
      this.interval = void 0
    },
    methods: {
      getCpuData () {
        const cpuUsed = process.cpuUsage()

        this.useCpuData = []
        this.cpuData = []

        this.useCpuData.push({ name: 'System', used: cpuUsed.system })
        this.useCpuData.push({ name: 'User', used: cpuUsed.user })

        import('os').then((result) => {
          result.cpus().forEach((v, i) => {
            this.cpuData.push({
              name: v.model,
              speed: v.speed,
              idle: v.times.idle,
              irq: v.times.irq,
              nice: v.times.nice,
              sys: v.times.sys,
              user: v.times.user
            })
          })
        })
      }
    }
  }
</script>

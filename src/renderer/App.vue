<template>
  <div id="app">
    <q-layout view="hHh LpR fFf">
      <q-layout-header :reveal="true">
        <q-toolbar color="light-blue-6">
          <q-btn flat
                 round
                 dense
                 icon="menu"
                 @click="left = !left"
          />

          <q-toolbar-title>System Dashboard</q-toolbar-title>

          <q-btn round
                 dense
                 flat
                 class="relative-position q-mr-md"
                 icon="announcement"
                 to="/"
          >
            <q-chip dense
                    square
                    floating
                    color="red">
              1
            </q-chip>
          </q-btn>
        </q-toolbar>
      </q-layout-header>


      <q-page-container>
        <q-layout-drawer side="left"
                         :overlay="false"
                         v-model="left"
                         behavior="default"
                         :width="150"
                         :content-style="{'font-size': '14px'}"
        >
          <q-list link
                  no-border
          >
            <q-item to="/System"
                    replace>
              <q-item-side icon="desktop_windows"
                           inverted
                           color="indigo-6"/>
              <q-item-main>
                <q-item-tile label>System</q-item-tile>
              </q-item-main>
            </q-item>

            <q-item to="/Cpu"
                    replace>
              <q-item-side icon="developer_board"
                           inverted
                           color="primary"/>
              <q-item-main>
                <q-item-tile label>CPU</q-item-tile>
              </q-item-main>
            </q-item>

            <q-item to="/Memory"
                    replace>
              <q-item-side icon="memory"
                           inverted
                           color="secondary"/>
              <q-item-main>
                <q-item-tile label>Memory</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-layout-drawer>

        <transition enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"
                    mode="out-in">
          <router-view></router-view>
        </transition>
      </q-page-container>

      <q-layout-footer :reveal="true">
        <q-toolbar>
          <q-toolbar-title>
            Dev.DY
            <span slot="subtitle">https://kdydesign/github.io</span>
          </q-toolbar-title>
        </q-toolbar>
      </q-layout-footer>
    </q-layout>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        left: false
      }
    },
  }
</script>

<style>
  main {
    padding: 70px 20px 20px 20px;
  }

  .cpu-sys-info {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .q-page-sticky {
    z-index: 100
  }
</style>

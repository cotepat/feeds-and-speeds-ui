<template>
  <el-row>
    <el-tabs type="border-card">
      <el-tab-pane label="Router"><router-config /></el-tab-pane>
      <el-tab-pane label="Config">Config</el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RouterConfig from "@/components/RouterConfig.vue";

@Component({
  components: {
    RouterConfig,
  },
})
export default class Home extends Vue {}
</script>

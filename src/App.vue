<template>
  <div id="app">
    <el-row>
      <router-view />
    </el-row>
  </div>
</template>

<script>
import RouterConfig from "@/components/RouterConfig";
import { Component } from "vue-class-component";
import Vue from "vue";

export default class App extends Vue {}
</script>
<style></style>

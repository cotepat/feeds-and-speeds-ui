<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{equation}}</div>
    <div>hi</div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import * as nerdamer from 'nerdamer'
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  equation = ""
  created() {
    this.equation = nerdamer.convertToLaTeX('x^2+2*(cos(x)+x*x)')
    console.log(this.equation)
  }
}
</script>

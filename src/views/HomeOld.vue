<template>

  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <div v-katex="equation" style="font-size:3em"></div>
    <br /><br />
    <div v-katex="equation2"></div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { adjusted_chipload_latex, chip_thinning_chipload } from "@/utils/calculator";
import nerdamer from "nerdamer";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  equation = "";
  equation2 = "";
  solved = "";
  created() {
    const parsed = nerdamer(chip_thinning_chipload);
    this.equation = parsed.toTeX();
    this.equation2 = `adjusted\\_chipload = ${adjusted_chipload_latex}`
    // const equation_parsed = nerdamer(chip_thinning_chipload);
    // // console.log(equation_parsed);
    // this.equation = equation_parsed.toTeX();
    // this.equation2 = chip_thinning_condition.toTeX()
    // nerdamer(equation_parsed, { woc: "0.25" }).evaluate().toTeX();

    //
    // const test = equation_parsed.evaluate({ woc: ".25" })
    // console.log(test)
  }
}
</script>

<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <div v-katex="equation"></div>
    <br /><br />
    <div v-katex="equation2"></div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import * as mathjs from "mathjs";
import { adjusted_chipload } from "@/utils/calculator";

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
    const equation_parsed = mathjs.parse(adjusted_chipload(1, 2));
    console.log(equation_parsed);
    this.equation = equation_parsed.toTex();
    this.equation2 = mathjs.simplify(equation_parsed).toTex();
    console.log(this.equation);

    this.solved = equation_parsed.compile().evaluate({
      cutter_diameter: 1,
      chipload: 0.001,
      woc: 0.22,
    });

    this.solved = mathjs.simplify(
      equation_parsed,
      `adjusted_chipload = ${adjusted_chipload(1, 2)}`,
      { cutter_diameter: 1, chipload: 0.001 }
    );

    console.log(this.solved);
  }
}
</script>

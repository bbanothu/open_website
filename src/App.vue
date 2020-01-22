<template>
  <div class="body" id="inner-body" style="height:95%;">
    <div id="app" style="height:100%;">
      <div id="card sticky-top">
        <logo></logo>
      </div>
      <div style="height:100%;margin-right:0px">
        <router-view></router-view>
      </div>
    </div>
        <div>
      <foot></foot>
    </div>
  </div>
</template>
<script>
import logo from "./components/logo";
import foot from "./components/foot";

export default {
  name: "app",
  components: {
    logo: logo,
    foot: foot
  }
};
</script>

<style>
.content,
html,
body {
  height: 100%;
}

.center {
  text-align: center;
  text-decoration: none;
}

.left {
  text-align: left;
  text-decoration: none;
}
.right {
  text-align: right;
}

.gray {
  color: gray;
  display: inline-block;
  padding-left: 10px;
}

.body {
  position: relative;
  box-sizing: border-box;
  min-width: 900px; /* Suppose you want minimum width of 1000px */
  width: auto !important; /* Firefox will set width as auto */
  width: 1000px; /* As IE6 ignores !important it will set width as 1000px; */
  height: 100%;
}
</style>

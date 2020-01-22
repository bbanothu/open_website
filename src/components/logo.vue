<template>
  <div class="logo" id="logo" style="background: black;">
    <div class="card card-outline-primary" style="background: black;">
      <div class="card-block" style="background: black;">
        <div class="display-4 row white hidden-md">
          <span class="col-1 letter-o">O</span>
          <span class="col-2 letter-p">p</span>
          <span class="col-3 letter-e">e</span>
          <span class="col-6 letter-n">n</span>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang = "css">
span.style {
  display: block;
}
.myrow {
  color: white;
  display: flex;
  flex-wrap: nowrap;
}

.letter-n {
  text-align: right;
  color: white;
}

.letter-e {
  text-align: center;
  padding: 0px 150px;
  color: white;
}

.letter-p {
  text-align: center;
  padding: 0px 150px;
  color: white;
}

.letter-o {
  text-align: left;
  padding: 0px 30px;
  color: white;
}

.logo {
  margin-bottom: 100px;
  display: block;
  background: black;
}
</style>

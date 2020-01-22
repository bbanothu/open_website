<template>
  <div class="row" style="height:80%;margin-right:0px;">
    <div class="col-sm-6 col-md-6 col-lg-6 left" style="padding: 0 28px;height: 100%" >
                    <img class="center hidden-sm"  src="../assets/logo.png" >
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6 right" style=" padding-bottom: 4.5px;">
      <div class="container1 description" id="view_classes" style="
    top: 30%;height:80%;">
        <!-- // Main Details -->
        <hr />
        <div class="row desc_row">
          <div class="col-sm-6 col-md-6 col-md-6">
            <div class="row">
              <h5>{{$route.params.style}}</h5>
            </div>
            <div class="row">
              <h4>{{$route.params.full_date}}</h4>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-md-6">
            <div class="row">
              <small class="small_text">LED BY</small>
              <br />
              <p style="padding-left:75px;">{{$route.params.full_name}}</p>
            </div>
          </div>
        </div>
        <hr />
        <!-- // Description -->
        <div class="col-sm-12 col-md-12 col-md-12" style="padding-top: 50px;padding-bottom: 50px;">
          <p style="text-align:center;">{{$route.params.description_line1}}</p>
          <p style="text-align:center;">{{$route.params.description_line2}}</p>
          <p style="text-align:center;">{{$route.params.description_line3}}</p>
        </div>
        <hr />
        <!-- // Additional Details -->
        <div class="row desc_row" style="text-align:center;">
          <div class="col-sm-4 col-md-4 col-md-4" >
            <small class="small_text_1">DURATION</small>
            <br />
            <p>{{$route.params.length}}</p>
          </div>
          <div class="col-sm-4 col-md-4 col-md-4">
            <small class="small_text_1">LOCATION</small>
            <br />
            <p>{{$route.params.location}}</p>
          </div>
          <div class="col-sm-4 col-md-4 col-md-4">
            <small class="small_text_1">COST</small>
            <br />
            <p>{{$route.params.cost}}</p>
          </div>
        </div>
        <!-- // Extra -->
        <div class="row desc_row" style="text-align:left;">
          <div class="col-sm-12 col-md-12 col-md-12">
            <small class="small_text_1">OPEN TOGETHER</small>
            <br />
            <p>{{$route.params.description_1}}</p>
          </div>
        </div>
        <div class="row desc_row" style="text-align:left;">
          <div class="col-sm-12 col-md-12 col-md-12">
            <small class="small_text_1">Description</small>
            <br />
            <p>{{$route.params.description_2}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
<style lang = "css">
.vertical-center-parent {
  vertical-align: middle;
}
.description {
  color: white;
}

.desc_row {
  padding-left: 35px;
}

.small_text {
  padding-left: 75px;
  margin-top: 10px;
  margin-bottom: 0px;
  color: grey;
}
.small_text_1 {
  margin-top: 10px;
  margin-bottom: 0px;
  color: grey;
}

.left_text {
  text-align: left;
  color: white;
  resize: none;
  min-width: 400px;
  opacity: 0.7;
}
.right_text {
  text-align: left;
  color: white;
  resize: none;
  min-width: 400px;
  height: 100%;
}

.left_text:hover {
  opacity: 1;
  text-decoration: none;
  color: white;
}

.gray {
  color: gray;
  display: inline-block;
  padding-left: 10px;
}

.mycol {
  display: inline-block;
}

hr {
  border: 0;
  clear: both;
  display: block;
  width: 96%;
  background-color: white;
  height: 1px;
}

hr.new1 {
  border-top: 1px solid white;
}

.left {
  float: left;
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
}
.right {
  float: right;
  width: 50%;
  overflow: scroll;
  overflow-x: hidden;
  height: 100%;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  vertical-align: center;
  /* position: relative;
left: 10%; */
}
@media (min-width: 400px) {
  .container {
    width: 400px !important;
  }
}

.container1 {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  vertical-align: center;
}
@media (min-width: 450px) {
  .container1 {
    width: 550px !important;
  }

  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
}
</style>

<template>
  <div class="row" style="height:80%;margin-right:0px;">
    <div class="col-sm-12 col-md-6 col-lg-6 left" style="padding: 0 28px;height:80%;margin-right:0px; ">
      <div class="container" id="view_classes" >
        <div
          v-on:click="class_info(obj)"
          id="view_classes"
          v-for="obj in classesJSON"
          :key="obj"
        >

        <!-- //sends the object as params -- has bugs -- class_description becomes empty on refresh  -->
          <router-link
            class="row left_text"
            :to="{name: 'class_description', 
          params: { style: obj.style , full_date: obj.full_date, full_name: obj.full_name, 
          description_line1 : obj.description_line1, description_line2: obj.description_line2,
          description_line3: obj.description_line3, length:obj.length , location:obj.location , 
          cost: obj.cost , description_1: obj.description_1 , description_2: obj.description_2 
          } }"
          >
            <div class="col-sm-2 mycol">
              <div class="row">
                <p class="gray">{{obj.time}}</p>
              </div>
              <div class="row">
                <p class="gray">{{obj.length}}</p>
              </div>
            </div>
            <div class="col-sm-9">
              <h4 class="date">{{obj.day}}</h4>
              <p>{{obj.style}}</p>
            </div>
            <hr />
          </router-link>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-6 hidden-sm-down right " style=" padding-bottom: 4.5px; height:80%">
                    <img class="center hidden-sm-down vertCenter"  src="../assets/logo.png" >
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    classesJSON: [
      {
        time: "7pm",
        length: "60 min",
        day: "Tomorrow",
        style: "Breath + Sound w/ Julie",
        full_date: "Tuesday 1/21, 7:00 PM",
        full_name: "Julie Aiello",
        description_line1: "A MELODY AND A BEAT, A BOOMING GONG.",
        description_line2: "BREATHE IN. BREATHE OUT. ",
        description_line3: "A SWIRL OF COLOR, A BURST OF INSIGHT.",
        location: "66 Sanchez St",
        cost: "$30",
        description_1:
          "For a limited time, when you book a spot, we'll hold an extra space for a friend.",
        description_2:
          "Embark on a powerful bodymind journey in our signature breathwork + sound class. We breathe together to freshly curated music and meditate on the sound of resonant instruments played live. Designed for all levels to access a sensorial state of mind and deeper insight."
      },
      {
        time: "7pm",
        length: "60 min",
        day: "Tomorrow",
        style: "Breath + Sound w/ Erin",
        full_date: "Tuesday 1/23, 7:00 PM",
        full_name: "Erin Gilmore",
        description_line1: "A MELODY AND A BEAT, A BOOMING GONG.",
        description_line2: "BREATHE IN. BREATHE OUT. ",
        description_line3: "A SWIRL OF COLOR, A BURST OF INSIGHT.",
        location: "66 Sanchez St",
        cost: "$30",
        description_1:
          "For a limited time, when you book a spot, we'll hold an extra space for a friend.",
        description_2:
          "Embark on a powerful bodymind journey in our signature breathwork + sound class. We breathe together to freshly curated music and meditate on the sound of resonant instruments played live. Designed for all levels to access a sensorial state of mind and deeper insight."
      },
      {
        time: "6pm",
        length: "60 min",
        day: "Tomorrow",
        style: "Breath + Sound w/ Hailey ",
        full_date: "Tuesday 1/27, 6:00 PM",
        full_name: "Hailey Lott",
        description_line1: "A MELODY AND A BEAT, A BOOMING GONG.",
        description_line2: "BREATHE IN. BREATHE OUT. ",
        description_line3: "A SWIRL OF COLOR, A BURST OF INSIGHT.",
        location: "66 Sanchez St",
        cost: "$30",
        description_1:
          "For a limited time, when you book a spot, we'll hold an extra space for a friend.",
        description_2:
          "Embark on a powerful bodymind journey in our signature breathwork + sound class. We breathe together to freshly curated music and meditate on the sound of resonant instruments played live. Designed for all levels to access a sensorial state of mind and deeper insight."
      },
      {
        time: "10pm",
        length: "60 min",
        day: "Tomorrow",
        style: "Breath + Sound w/ Julie",
        full_date: "Tuesday 1/27, 7:00 PM",
        full_name: "Julie Aiello",
        description_line1: "A MELODY AND A BEAT, A BOOMING GONG.",
        description_line2: "BREATHE IN. BREATHE OUT. ",
        description_line3: "A SWIRL OF COLOR, A BURST OF INSIGHT.",
        location: "66 Sanchez St",
        cost: "$30",
        description_1:
          "For a limited time, when you book a spot, we'll hold an extra space for a friend.",
        description_2:
          "Embark on a powerful bodymind journey in our signature breathwork + sound class. We breathe together to freshly curated music and meditate on the sound of resonant instruments played live. Designed for all levels to access a sensorial state of mind and deeper insight."
      }
    ]
  })
};
</script>



<style lang = "css">
.center {

    display: block;
    max-width:180px;
    max-height:180px;

    margin-left: auto;
    margin-right: auto;


}
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
}

</style>


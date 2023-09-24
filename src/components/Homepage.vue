<script setup lang="ts">
// import { ref } from 'vue'
// defineProps<{ msg: string }>()
// const count = ref(0)
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

  <!-- <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>  
  </div> -->
  

  <div class="item00 col-12">
    <div class="col-5 box-login-mb">
      <div class="container box-login" id="content">
        <form>
          <div class="mb-3 t-login">Login</div>
          <div class="input">
            <input
              class="form-control t-email"
              type="text"
              name="email"
              placeholder="email@adress.com"
            />
          </div>
          <div class="input">
            <input
              class="form-control t-email"
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <div
            class="d-flex"
            style="align-items: flex-end; justify-content: space-between"
          >
            <div class="mt-3 al-center">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              <div class="f-gray-14">Remember</div>
            </div>
            <div class="f-red-13">Forgot Password</div>
          </div>

          <div class="d-flex" style="padding-top: 2rem">
            <!-- <button class="btn-signup" style="margin-right: 1rem">Sign up</button> -->
            <button class="btn-login">Login</button>
          </div>
          <div class="d-flex j-space-center">
            <div class="t-blue-13">Don't have any account ?</div>
            <div class="t-blue-underline">Signup</div>
          </div>
        </form>
      </div>
    </div>

    <div class="img01 col-6">
      <img src="src/assets/petpng01.png" alt="" class="imgpng00" />
    </div>
  </div>
 

</template>

<script lang="ts">

export default {
  // name: "Homepage",
  // props:{
  //   msg: String
  // },
  // methods:{
  //   Service(){
  //     console.log ("going to service page");
  //     this.$router.push({name:"Service"});
  //   }
  // }
  data() {
    return {
      text4: `Record your pet's health and daily details of your pet. Never miss an important appointment. And there are always important details notified. There is no need for you to look at notes anymore, just have our application.`,
      text: `
      Vaccinating pets is very important. The notification system is therefore important because if it is missing it will cause the vaccine to lose its effectiveness.
       Vaccinations protect your pet from highly contagious and deadly diseases and improve your pet's overall quality of life. Experts agree that widespread use of vaccinations within the last century has prevented death and disease in millions of animals.
        `,
      text2: `We recommend food that is appropriate for your pet's age. Without adequate nutrition, your pet would not be able to maintain muscle tone, 
      build and repair muscles, teeth, and bone, perform normal daily activities with ease or fight-off infection. Proteins provide a source of energy 
      and help with muscle function and growth.`,
      text3: `We have a bath recording system and will recommend the next bath time for your pet. ust like humans, a pet’s skin and coat will experience a buildup of dirt and oils over time. Keeping your pet on a regular bathing schedule will ensure that they are maintaining a healthy coat, and, as a result, keeping your shared spaces free from excess pet dander. `,
    };
  },
};


</script>


<style scoped>

.read-the-docs {
  color: #888;
}

.search-container {
  float: right;
}
.search-container button {
  float: right;
  padding: 5px 8px;
  /* margin-top: 8px; */
  /* margin-right: 16px; */
  background: #6db6ff;
  font-size: 15px;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  color: #fff;
}
.input-search {
  width: -webkit-fill-available;
  border-radius: 5rem;
  padding: 0px 1rem;
  border-block-style: unset;
  background-color: #fff;
  border-style: unset;
}
.input-search:focus-visible {
  outline: unset !important;
}
.form-search {
  box-shadow: 2px 1px 6px 0px #8f8f8fb3;
  border-radius: 5rem;
  background-color: #fff;
}
.head-text {
  justify-content: space-around;
  display: flex;
  align-items: center;
  font-weight: 500;
}
.t-call {
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  display: flex;
  align-items: center;
}
.head-icon {
  height: 3rem;
  width: fit-content;
}
.head-login {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0px 4px 6px #00000021;
  max-width: -webkit-fill-available;
}
.gruop-text-title {
  font-size: 35px;
  font-weight: 500;
  color: rgb(66, 66, 66);
  padding-top: 2rem;
}
.title-sm {
  padding-top: 1.5rem;
  text-align: start;
  padding-left: 1rem;
}
.item00 {
  display: flex;
  padding: 2rem 4rem 0rem 4rem;
  background-image: url(src/assets/bg02.PNG);
  background-size: cover;
  background-repeat: no-repeat;
}
.item01 {
  display: flex;
  padding: 2rem 2rem 2rem 2rem;
 
}
.item02 {
  padding: 1rem;
  /* background-image: url(src/assets/bg03.png);  */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  display: flex;
}
.item03{
  background-image: url(src/assets/bg01.jpg); 
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.item04 {
  padding: 2rem 4rem 2rem 4rem;
  /* background-image: url(src/assets/bg04.png);  */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
}
.img01 {
  margin-left: auto;
}
.imgpng01 {
  height: auto;
  width:70%;
}
.img00 {
  margin-left: auto;
}
.imgpng00 {
  height: auto;
  width: auto;
}.imgpng02{
  width: -webkit-fill-available;
  display: flex;
    align-items: center;
}.imgpng03-2{
  width: fit-content;
    margin: auto;
}
.icon-logo {
  width: 10rem;
}
.collap-menu {
  padding: 0.75rem;
  /* border: 1px solid #f3f3f3; */
  border-radius: 5px;
  background: #f7f7f7;
  margin: 1rem;
  box-shadow: 3px 3px 8px 0px #0000002e;
}
.btn-collap {
  width: -webkit-fill-available;
  border: 2px solid #e7e7e7;
  color: #2752a3;
  background: #fff;
  font-weight: 500;
  text-align: start;
  font-size: 22px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-collap:hover {
  color: #000000;
  background: #68acef;
  border: 2px solid #68acef;
}
.btn-collap:active {
  color: #000000;
  background: #57abff;
  border: 2px solid #57abff;
}
.btn:first-child:active {
  background: #6bb5ff;
  border: 2px solid #6bb5ff;
}
.icon-updown {
  height: 20px;
  color: #fff;
}
.text-detail-item02 {
  padding: 0;
  background: #f7f7f7;
  border-radius: 5px;
}
/*boxscroll */
.head-scroll {
  font-size: 26px;
  font-weight: 500;
  padding-top: 2rem;
  text-align: start;
  margin-left: 2rem;
}
.box-scroll {
  display: flex;
  padding: 1rem;
  overflow-y: hidden;
  width: max-content;
  overflow-x: scroll;
  max-width: 100%;
  flex-wrap: nowrap;
}
.box-detail {
  width: 18rem;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background: #f7f7f7;
  border-radius: 5px;
  margin: 1rem;
  border: 1px solid #e7e7e7;
  flex: 0 0 auto;
  cursor: pointer;
}
.box-detail:hover {
  background: #c3dfff;
  border: 1px solid #e7e7e7;
}
.box-img {
  width: 40%;
  margin: 1rem;
}
.box-texthead {
  font-size: 25px;
  font-weight: 500;
  color: #2752a3;
}
.box-textdetail {
  font-size: 18px;
  margin: 0.5rem;
  font-weight: 500;
}
.scrolling-wrapper {
  -webkit-overflow-scrolling: touch;
}
.item03 {
  background-color: #fff9ee;
}
.item04 {
  padding: 3rem;
}
.text-thk {
  font-size: 25px;
  font-weight: 500;
}
.img-thk {
  width: 16rem;
  padding: 2rem;
}
.t-login {
  font-size: 22px;
  font-weight: 500;
  color: #469aee;
  text-align: left;
}
.t-email {
  text-align: left;
  display: block;
  margin-top: 10px;
  color: #469aee;
  border: 1px solid #bedeff;
}
.box-login {
  border: 1px solid #e6e6e6;
  padding: 3rem 3rem;
  border-radius: 2rem;
  background: #ffffff;
  width: 400px;
  max-width: 95%;
  box-shadow: 3px 3px 7px 0px #0000002e;
  margin-top: 7rem;
}
.al-center {
  display: flex;
  align-items: center;
}
.f-gray-14 {
  font-size: 14px;
  color: #7f7f7f;
  font-weight: 500;
}
.f-red-13 {
  font-size: 13px;
  color: #de3535;
  font-weight: 500;
}
.t-blue-13 {
  font-size: 13px;
  color: #469aee;
  font-weight: 500;
  padding-top: 10px;
}
.t-blue-underline {
  font-size: 13px;
  color: #2752a3;
  font-weight: 500;
  padding-top: 10px;
  text-decoration: underline 1px solid;
  cursor: pointer;
  padding-left: 5px;
}
.icon-box{
  padding: 1.5rem;
  border: 1px solid #c1e0ff;
  background: #fff;
  margin: 0.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 3px 3px 7px 0px #0000002e;
  border-radius: 2rem;
}
.icon-box:hover{
background:#c1e0ff ;
  border: 1px solid #ffffff;
}
.icon-size{
  width: 8rem;
  color :#469AEE;
}
.icon-head-t{
  color: #2752a3;
  font-weight: 500;
  font-size:large;
}
.icon-t{
  color: #7f7f7f;
  font-size:medium;
}.box-icon{
  display: flex;
  justify-content: space-evenly
}

.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
  margin-right: 10px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.form-control:focus {
  border-color: #86b7fe;
  box-shadow: 0 0 1px 2px rgb(13 110 253 / 9%);
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #469aee;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #469aee;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #469aee;
}
::-webkit-scrollbar-thumb {
  background: #2752a3;
  border-radius: 5px;
}
::-webkit-scrollbar-track {
  background: #c3dfff;
  border-radius: 5px;
}
::-webkit-scrollbar {
  width: 0px;
  height: 10px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 599px) {
  .box-login-mb {
    margin: auto;
    max-width: none;
    width: auto;
  }
  .imgpng00 {
    display: none;
  }
  .box-login {
    margin-top: 0rem;

    padding: 1rem 1rem;
  }
  .f-red-13 {
    font-size: 10px;
  }
  .f-gray-14 {
    font-size: 10px;
  }
  .item00 {
    display: block;
    padding: 2rem;
  }
  .img00 {
    margin: unset;
  }
  .search-container{
    display: none;
  }.t-call{
    display: none;
  }.head-text{
    width: -webkit-fill-available;
  }.item01{
    display: block;
    padding: 15px;
  }.img03{
    display: none;
  }.img03-2{
    width: auto;
  }.icon-size{
  width: 5rem;
}.icon-head-t{
  font-size:medium;
}.icon-t{
  font-size:small;
}.icon-logo{
  display: none;
}.icon-box{
 padding: 15px;
 margin-bottom: 15px;
}

.item02{
  padding: 15px;
  display: block;
}.gruop-text-title{
  font-size: 18px;
    font-weight: 500;
    color: rgb(66, 66, 66);
    padding-top: 0;
}.title-sm {
    padding-top: 5px;
    text-align: center;
    padding-left: 0;
    font-size: small;
}.btn-collap{
  font-size: medium;
    padding: 10px;
}.collap-menu{
  padding: 10px;
  margin: 10px;
}.head-scroll{
  font-size: large;
    font-weight: 500;
    padding-top: 10px;
    text-align: center;
    margin-left: 0;
}.box-detail{
  width: 10rem;
    padding: 5px;
    margin: 5px;
}
.box-texthead {
    font-size: large;
}.box-textdetail {
    font-size: small;
    margin: 5px;
}.box-img {
    width: 40%;
    margin: 10px;
}.box-scroll {
    padding: 10px;
}.img-thk{
  width: 7rem;
  padding: 10px;
}.text-thk{
  font-size: large;
}.item04{
  padding: 15px;
}.imgpng01{
    width: 70%;
}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) and (max-width: 767px) {
  .box-login-mb {
    margin: auto;
    max-width: none;
    width: auto;
  }
  .imgpng00 {
    display: none;
  }
  .box-login {
    margin-top: 0rem;
    padding: 2rem 1.5rem;
  }
  .f-red-13 {
    font-size: 11px;
  }
  .f-gray-14 {
    font-size: 11px;
  }
  .item00 {
    display: block;
    padding-bottom: 3rem;
  }
  .img00 {
    margin: unset;
  }
 .search-container{
    display: none;
  }.t-call{
    display: none;
  }.item01{
    display: block;
  }.img03{
    display: none;
  }.imgpng02{
    margin: auto;
    width: auto;
  }.icon-size{
  width: 5rem;
}.icon-head-t{
  font-size:medium;
}.icon-t{
  font-size:small;
}.icon-logo{
  display: none;
}.icon-box{
 padding: 15px;
 margin-bottom: 15px;
}
.item02{
  padding: 15px;
  display: block;
}.gruop-text-title{
  font-size: 18px;
    font-weight: 500;
    color: rgb(66, 66, 66);
    padding-top: 0;
}.title-sm {
    padding-top: 5px;
    text-align: center;
    padding-left: 0;
    font-size: small;
}.btn-collap{
  font-size: medium;
    padding: 10px;
}.collap-menu{
  padding: 10px;
  margin: 10px;
}.head-scroll{
  font-size: large;
    font-weight: 500;
    padding-top: 10px;
    text-align: center;
    margin-left: 0;
}.box-detail{
  width: 10rem;
    padding: 5px;
    margin: 5px;
}
.box-texthead {
    font-size: large;
}.box-textdetail {
    font-size: small;
    margin: 5px;
}.box-img {
    width: 40%;
    margin: 10px;
}.box-scroll {
    padding: 10px;
}.img-thk{
  width: 7rem;
  padding: 10px;
}.text-thk{
  font-size: large;
}.item04{
  padding: 15px;
}.imgpng01{
    width: 70%;
}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .imgpng00 {
    display: none;
  }
  .box-login-mb {
    margin: auto;
    max-width: none;
    width: auto;
  }
  .box-login {
    margin-top: 0rem;
  }
  .item00 {
    display: block;
    padding-bottom: 3rem;
  }
  .img00 {
    margin: unset;
  }
.search-container{
    display: none;
  }.item01{
    display: block;
    padding: 0;
  }.img03{
    display: none;
  }.imgpng02{
    margin: auto;
    width: auto;
  }.icon-size{
  width: 5rem;
}.icon-head-t{
  font-size:medium;
}.icon-t{
  font-size:small;
}.icon-logo{
  display: none;
}.icon-box{
 padding: 15px;
 margin-bottom: 15px;
}

.item02{
  padding: 15px;
  display: block;
}.gruop-text-title{
  font-size: 18px;
    font-weight: 500;
    color: rgb(66, 66, 66);
    padding-top: 0;
}.title-sm {
    padding-top: 5px;
    text-align: center;
    padding-left: 0;
    font-size: small;
}.btn-collap{
  font-size: medium;
    padding: 10px;
}.collap-menu{
  padding: 10px;
  margin: 10px;
}.head-scroll{
  font-size: large;
    font-weight: 500;
    padding-top: 10px;
    text-align: center;
    margin-left: 0;
}.box-detail{
  width: 10rem;
    padding: 5px;
    margin: 5px;
}
.box-texthead {
    font-size: large;
}.box-textdetail {
    font-size: small;
    margin: 5px;
}.box-img {
    width: 40%;
    margin: 10px;
}.box-scroll {
    padding: 10px;
}.img-thk{
  width: 7rem;
  padding: 10px;
}.text-thk{
  font-size: large;
}.item04{
  padding: 15px;
}.imgpng01{
    width: 70%;
}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .imgpng00 {
    height: 70%;
  }
  .box-login {
    margin-top: 5rem;
  }
  .box-login {
    margin-top: 1rem;
  }.search-container{
    display: none;
  }.img03-2{
    display: none;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .imgpng00 {
    height: 90%;
  }.img03-2{
    display: none;
  }

}
</style>

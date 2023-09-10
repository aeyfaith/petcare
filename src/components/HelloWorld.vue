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
  <div class="head-login col-12 container bg-white">
    <div class="head-text col-4 m-auto">
      <img src="src/assets/icon01.png" class="head-icon" />
      <div>Home</div>
      <div>Service</div>
      <div>About Us</div>
      <div>Blog</div>
    </div>
    <div class="search-container col-4">
      <form action="" class="d-flex form-search">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          class="input-search"
        />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
    <div class="col-2 t-call m-auto">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          fill="currentColor"
          class="bi bi-telephone-fill"
          viewBox="0 0 16 16"
          color="#264971"
        >
          <path
            fill-rule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          />
        </svg>
      </div>
      <div style="margin-left: 1rem">
        <div>Call me</div>
        <div>080-123-4567</div>
      </div>
    </div>
  </div>
  <div class="item01 col-12 d-flex">
    <div class="col-5">
      <img src="src/assets/icon01.png" alt="" class="icon-logo" />
      <div class="gruop-text-title">
        The more<font color="#2752a3"> people </font>I meet, the more I love my
        <font color="#2752a3">pet </font>for all life.
      </div>
      <div class="title-sm">
        Take care of your pets with us. One of the best pet care apps You can
        easily view appointment schedules and care for all aspects of your pet.
        And there are many friends who are ready to give you advice.
      </div>
      <div class=" " style="padding-top: 3rem">
        <button class="btn-signup" style="margin-right: 1rem">Sign up</button>
        <button class="btn-login">Login</button>
      </div>
    </div>
    <div class="img01 col-6">
      <img src="src/assets/petpng01.png" alt="" class="imgpng01" />
    </div>
  </div>
  <div>
    <div class="item02 col-12 d-flex">
      <div class="col-6">
        <div class="gruop-text-title">Pet Care Service</div>
        <div class="title-sm">
          A complete range of services for your pets is available on our app.
        </div>
      </div>
      <div class="col-6">
        
      
      </div>
    </div>
  </div>

</template>

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
  padding-top: 3rem;
}
.title-sm {
  padding-top: 1.5rem;
  text-align: start;
  padding-left: 1rem;
}
.item01 {
  padding: 4rem 4rem 0rem 4rem;
  background-image: url(src/assets/bg02.PNG);
  background-size: cover;
  background-repeat: no-repeat;
}
.item02 {
  padding: 2rem 4rem 2rem 4rem;
  background-size: cover;
  background-repeat: no-repeat;
}
.img01 {
  margin-left: auto;
}
.imgpng01 {
  height: auto;
  width: auto;
}
.icon-logo {
  width: 10rem;
}

/* collap card*/



/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .imgpng01 {
    height: 40%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .imgpng01 {
    height: 50%;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .imgpng01 {
    height: 60%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .imgpng01 {
    height: 80%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .imgpng01 {
    height: 90%;
  }
}
</style>

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
  <div class="head-login col-12 container">
    <div class="head-text col-5">
      <img src="src/assets/icon01.png" class="head-icon">
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
    <div class="col-2 t-call">
      <div>Call me</div>
      <div>080-123-4567</div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.head-login {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}
.input-search {
  width: -webkit-fill-available;
  border-radius: 5rem;
  padding: 0px 10px;
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
}.t-call{
  font-size: 13px;
    font-weight: 500;
    text-align: left;
}.head-icon{
  height: 3rem;
    width: fit-content;
}
</style>

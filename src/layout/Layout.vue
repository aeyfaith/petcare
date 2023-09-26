<template>
    <div class="head-login col-12 container bg-white">
    <div class="head-text m-auto col-md-6 col-lg-4 col-sm-8">
      <img src="src/assets/icon01.png" class="head-icon" />      
      <!-- <router-link :to="{path:'/'}">Home</router-link> -->
      <router-link :to="{name:'Home'}">Home</router-link>
      <router-link to="/blog">Blog</router-link>   
      <router-link to="/about">About Us</router-link>
      <router-link to="/service">Service</router-link>
    </div>
    <div class="search-container col-4 col-md-3 col-lg-4">
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
    <div class="col-2 t-call m-auto col-md-3 col-sm-3 col-lg-2">
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
  <router-view></router-view>
</template>
<style scoped>
.head-login {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0px 4px 6px #00000021;
  max-width: -webkit-fill-available;
}.head-text {
  justify-content: space-around;
  display: flex;
  align-items: center;
  font-weight: 500;
}.head-icon {
  height: 3rem;
  width: fit-content;
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
}a{
  color:#2752a3 ;
  text-decoration:none;
}
a:hover{
  color:#469AEE ;
  text-decoration:none;
}.t-call {
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 349px){
  .head-text{
    width: -webkit-fill-available;
    font-size: small;
  }
  .search-container{
    display: none;
  }
  .t-call{
    display: none;
  }
}
@media only screen and (min-width: 350px) and (max-width: 599px) {
.head-text{
    width: -webkit-fill-available;
  }
  .search-container{
    display: none;
  }
  .t-call{
    display: none;
  }
}@media only screen and (min-width: 600px) and (max-width: 767px) {
  .search-container{
    display: none;
  }.t-call{
    display: none;
  }
}@media only screen and (min-width: 768px) and (max-width: 991px) {
  .search-container{
    display: none;
  }
}@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .search-container{
    display: none;
  }
}
@media only screen and (min-width: 1200px) {

}
</style>
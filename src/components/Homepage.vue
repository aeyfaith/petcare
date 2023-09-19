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
    <div class="head-text m-auto col-md-6 col-lg-4 col-sm-8">
      <img src="src/assets/icon01.png" class="head-icon" />
      <div>Home</div>
      <div>Service</div>
      <div>About Us</div>
      <div>Blog</div>
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
  <div class="img03-2 col-6  col-sm-12 col-md-12 col-lg-6">
      <img src="src/assets/petpng03.png" alt="" class="imgpng02" />
    </div>

  <div class="item01 col-12  ">
    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
      <div class="img01">
      <img src="src/assets/icon01.png" alt="" class="icon-logo col-12  " />
    </div>
      <div class="col-12 box-icon  ">
        
        <div class="col-6 col-sm-6 col-md-5 col-lg-5 icon-box"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          class="icon-size" viewBox="0 0 24 24"><circle cx="4.5" cy="9.5" r="2.5" fill="currentColor"></circle><circle cx="9" cy="5.5" r="2.5" fill="currentColor"></circle><circle cx="15" cy="5.5" r="2.5" fill="currentColor"></circle><circle cx="19.5" cy="9.5" r="2.5" fill="currentColor"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91c-.46-.54-1.05-1.08-1.75-1.32c-.11-.04-.22-.07-.33-.09c-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09c-.7.24-1.28.78-1.75 1.32c-.87 1.02-1.6 1.89-2.48 2.91c-1.31 1.31-2.92 2.76-2.62 4.79c.29 1.02 1.02 2.03 2.33 2.32c.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44c1.31-.29 2.04-1.31 2.33-2.32c.31-2.04-1.3-3.49-2.61-4.8z" fill="currentColor"></path></svg>
         <div class="icon-head-t">Help take care of pets</div> 
         <div class="icon-t">Help and facilitate you to take care of your pets closely.</div>
        </div>
        <div class="col-6 col-sm-6 col-md-5 col-lg-5  icon-box"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          class="icon-size" viewBox="0 0 32 32"><path d="M14 16.59L11.41 14L10 15.41l4 4l8-8L20.59 10L14 16.59z" fill="currentColor"></path><path d="M16 30l-6.176-3.293A10.982 10.982 0 0 1 4 17V4a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v13a10.982 10.982 0 0 1-5.824 9.707zM6 4v13a8.985 8.985 0 0 0 4.766 7.942L16 27.733l5.234-2.79A8.985 8.985 0 0 0 26 17V4z" fill="currentColor"></path></svg>
          <div class="icon-head-t" >Safe and reliable</div>
          <div class="icon-t">Personal information is not leaked. Has an advanced security system</div>
        </div>
      </div>
      <div class="col-12  box-icon">
        <div class="col-6 col-sm-6 col-md-5 col-lg-5  icon-box"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
             class="icon-size"  viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" fill="currentColor"></path></svg>      .
            <div class="icon-head-t">Suitable for all devices</div>
            <div class="icon-t">Supports all devices, easy to use</div>
          </div>
        <div class="col-6 col-sm-6 col-md-5 col-lg-5  icon-box"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
             class="icon-size"   viewBox="0 0 20 20"><g fill="none"><path d="M9 9.564c0-1.237-.618-3.037-1.834-5.276c-.208-.384-.753-.38-.987-.015c-.326.507-.811 1.026-1.459 1.555l-.287.227l-.657.507c-1.344 1.082-1.874 2.043-1.757 3.464c.102 1.256.855 2.155 2.147 2.567c-.456.537-1.056.96-1.806 1.274a.591.591 0 0 0-.316.77c.124.3.465.442.762.318c1.425-.595 2.448-1.551 3.041-2.853c.222-.486.4-.966.532-1.439l.033-.122l.08-.324l.053-.26l.032-.185l.052-.374c.033-.297.047-.59.043-.88L6.669 8.5a.586.586 0 0 1 .573-.562a.586.586 0 0 1 .592.58c.018 1.146-.212 2.315-.688 3.504l-.02.07a.36.36 0 0 0 .026.21c.08.18.29.26.467.178l.09-.045a.932.932 0 0 0 .151-.107C8.422 11.838 9 10.801 9 9.564zm6.994-2.21A2.5 2.5 0 0 0 13.498 5H9.534c-.313 0-.536.14-.536.498s.2.496.536.496h4.22l.12.006a1.25 1.25 0 0 1 1.13 1.244v5.506l-.006.12A1.25 1.25 0 0 1 13.754 14H5.998c-.301 0-.502.193-.502.495c0 .303.2.5.502.505h7.5l.147-.004a2.5 2.5 0 0 0 2.353-2.496v-.819h1.167l.112-.007a.833.833 0 0 0 .721-.826V9.182l-.006-.102a.834.834 0 0 0-.827-.732l-1.167-.015V7.5l-.004-.147z" fill="currentColor"></path></g></svg>
             <div class="icon-head-t">Save battery</div>
             <div class="icon-t">Save battery Doesn't take up much memory space.</div>
            </div>
      </div>
    </div>
    <div class="img03 col-12  col-sm-12 col-md-12 col-lg-6">
      <img src="src/assets/petpng03.png" alt="" class="imgpng02" />
    </div>
  </div>



  <div class="item02 col-12 d-flex">
    <div class="img01 col-6">
      <img src="src/assets/petpng02.png" alt="" class="imgpng01" />
    </div>
    <div class="col-5 m-auto">
      <div class="gruop-text-title">Pet Care Service</div>
      <div class="title-sm">
        Our app offers a complete range of services for your pet. People who
        want to take care of their pet's health closely should use it. We track
        results at every stage of your pet's life.
      </div>

      <div class="accordion collap-menu" role="tablist">
        <div no-body class="mb-1 text-detail-item02">
          <div header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle.accordion-1
              variant="info"
              class="btn-collap"
              >Dairy
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 16 16"
                class="icon-updown"
              >
                <g fill="none">
                  <path
                    d="M4.22 6.53a.75.75 0 0 0 1.06 0L8 3.81l2.72 2.72a.75.75 0 1 0 1.06-1.06L8.53 2.22a.75.75 0 0 0-1.06 0L4.22 5.47a.75.75 0 0 0 0 1.06zm0 2.94a.75.75 0 0 1 1.06 0L8 12.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 0-1.06z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </b-button>
          </div>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <card-body>
              <card-text>{{ text4 }}</card-text>
            </card-body>
          </b-collapse>
        </div>
        <div no-body class="mb-1 text-detail-item02">
          <div header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle.accordion-2
              variant="info"
              class="btn-collap"
              >Vaccine
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 16 16"
                class="icon-updown"
              >
                <g fill="none">
                  <path
                    d="M4.22 6.53a.75.75 0 0 0 1.06 0L8 3.81l2.72 2.72a.75.75 0 1 0 1.06-1.06L8.53 2.22a.75.75 0 0 0-1.06 0L4.22 5.47a.75.75 0 0 0 0 1.06zm0 2.94a.75.75 0 0 1 1.06 0L8 12.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 0-1.06z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </b-button>
          </div>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <card-body>
              <card-text>{{ text }}</card-text>
            </card-body>
          </b-collapse>
        </div>
        <div no-body class="mb-1 text-detail-item02">
          <div header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle.accordion-3
              variant="info"
              class="btn-collap"
              >Grooming
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 16 16"
                class="icon-updown"
              >
                <g fill="none">
                  <path
                    d="M4.22 6.53a.75.75 0 0 0 1.06 0L8 3.81l2.72 2.72a.75.75 0 1 0 1.06-1.06L8.53 2.22a.75.75 0 0 0-1.06 0L4.22 5.47a.75.75 0 0 0 0 1.06zm0 2.94a.75.75 0 0 1 1.06 0L8 12.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 0-1.06z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </b-button>
          </div>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <card-body>
              <card-text>{{ text3 }}</card-text>
            </card-body>
          </b-collapse>
        </div>

        <div no-body class="mb-1 text-detail-item02">
          <div header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle.accordion-4
              variant="info"
              class="btn-collap"
              >Food
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 16 16"
                class="icon-updown"
              >
                <g fill="none">
                  <path
                    d="M4.22 6.53a.75.75 0 0 0 1.06 0L8 3.81l2.72 2.72a.75.75 0 1 0 1.06-1.06L8.53 2.22a.75.75 0 0 0-1.06 0L4.22 5.47a.75.75 0 0 0 0 1.06zm0 2.94a.75.75 0 0 1 1.06 0L8 12.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 0-1.06z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </b-button>
          </div>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <card-body>
              <card-text>{{ text2 }}</card-text>
            </card-body>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
  <div class="item03">
    <div class="head-scroll">
      Why is it necessary to have app <font color="#2752a3">Petcare</font>?
    </div>

    <div class="box-scroll row">
      <div class="box-detail">
        <img src="src/assets/box_petfriend.png" alt="" class="box-img" />
        <div class="box-texthead">Pet friends</div>
        <div class="box-textdetail">
          There are many friends of many who are ready to give advice and create
          new friendships animal lovers
        </div>
      </div>
      <div class="box-detail">
        <img src="src/assets/box_health.png" alt="" class="box-img" />
        <div class="box-texthead">Health is important</div>
        <div class="box-textdetail">
          Always take care and pay attention to your pet's health. There is a
          care system specifically suited for your pet.
        </div>
      </div>
      <div class="box-detail">
        <img src="src/assets/box_hot.png" alt="" class="box-img" />
        <div class="box-texthead">Hot Ternds</div>
        <div class="box-textdetail">
          Hot new trends, updated every day. Keep your pet from falling out of
          trend in both social and health matters.
        </div>
      </div>
      <div class="box-detail">
        <img src="src/assets/box_webcam.png" alt="" class="box-img" />
        <div class="box-texthead">View your pet 24 Hrs</div>
        <div class="box-textdetail">
          Keep an eye on your safety at all times with 24-hour CCTV when you're
          not at home.
        </div>
      </div>

      <div class="box-detail">
        <img src="src/assets/box_location.png" alt="" class="box-img" />
        <div class="box-texthead">Your pet's location</div>
        <div class="box-textdetail">
          Track your pet's location There is always a tracking device sending
          signals. Don't worry about your pet getting lost.
        </div>
      </div>

      <div class="box-detail">
        <img src="src/assets/box_doctor.png" alt="" class="box-img" />
        <div class="box-texthead">Doctor</div>
        <div class="box-textdetail">
          There are doctors and experts available to give appropriate advice. If
          there is a problem, you can call the staff.
        </div>
      </div>

      <div class="box-detail">
        <img src="src/assets/box_appo.png" alt="" class="box-img" />
        <div class="box-texthead">Help organize appointments</div>
        <div class="box-textdetail">
          Help organize your pet's appointments. both medical appointments and
          appointments with friends
        </div>
      </div>
    </div>
  </div>
  <div class="item04">
    <img src="src/assets/mawthank.png" alt="" class="img-thk" />
    <div class="text-thk">Thank you for interest in Petcare</div>
    <div>Sameanmart Aooppathum</div>
    <div>Email : Sameanmart@gmail.com</div>
  </div>
</template>

<script lang="ts">
export default {
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
  padding: 4rem 4rem 0rem 4rem;
  background-image: url(src/assets/bg02.PNG);
  background-size: cover;
  background-repeat: no-repeat;
}
.item01 {
  display: flex;
  padding: 2rem 2rem 2rem 2rem;
 
}
.item02 {
  padding: 2rem 4rem 2rem 4rem;
  /* background-image: url(src/assets/bg03.png);  */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
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
  width:-webkit-fill-available;
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
@media only screen and (max-width: 600px) {
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

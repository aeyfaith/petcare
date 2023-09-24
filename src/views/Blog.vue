<template>
    <div class="blog-head">
        <img src="src/assets/cover02.jpg" alt="" class="img-cover-lg">
        <img src="src/assets/cover01.jpg" alt="" class="img-cover-md">
    </div>
</template>



<script lang="ts">
export default {
    name: 'Blog',
    props:{
        msg: String
    }
}
</script>

<style scoped>
.img-cover-lg{
    width: -webkit-fill-available;
}
.img-cover-md{
    width: -webkit-fill-available;
}


@media only screen and (max-width: 349px){
    .img-cover-lg{
    display: none;
}
}
@media only screen and (min-width: 350px) and (max-width: 599px) {
    .img-cover-lg{
    display: none;
}
}
@media only screen and (min-width: 600px) and (max-width: 767px) {
    .img-cover-lg{
    display: none;
}
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .img-cover-md{
    display: none;
}
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .img-cover-md{
    display: none;
}
}
@media only screen and (min-width: 1200px) {
    .img-cover-md{
    display: none;
}
}
</style>
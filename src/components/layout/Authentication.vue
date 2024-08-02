<template>
  <div class=" h-screen">
    <div class="text-center text-3xl pt-10 pb-5">
      <button @click.prevent="onLogoClick()">Planics Store</button>
    </div>
    <div class="flex justify-center items-center ">
      <div class="bg-primary rounded-3xl">
        <div class="h-8 font-medium font-poppins text-2xl text-center pt-10 pb-6">
          {{ header }}
        </div>

        <!-- first part -->
        <div class="flex justify-between">
          <form class="" action="">
            <slot> </slot>
          </form>

          <!-- middle line -->
          <div class="hw mt-10 md:h-72 lg:h-full">
            <img class="!lg:h-96 !md:h-72" :src="Line"  alt="" />
          </div>

          <!-- second part -->
          <div  class="hw md:visible mt-16 lg:pl-16 md:pl-7 lg:mr-20 md:mr-8 ">
            <div class=" h-12 px-5 font-medium font-poppins">
              <p class=" text-center">Get access to your Orders,</p>
              <p class="">Wishlist and Recommendations</p>
            </div>
            <div class="lg:w-72 lg:h-80 md:w-56 md:h-56 mt-9 ">
              <img class="ml-10" :src="SignInImage" alt="1" />
            </div>
          </div>
          <!--end of second part  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignInImage from "@/assets/img/signIn/signIn.png";
import Line from "@/assets/img/signIn/line.png";

export default {
  name: "SignUp",
  data() {
    return {
      Line,
      SignInImage,
    };
  },
  props: {
    header: {
      type: String,
      required: false,
      default: "",
    },
  },
  methods: {
    onLogoClick() {
      this.$router.replace("/");
    },
  },
};
</script>
<style >
@media (max-width: 1023px ) {
    .hw {
        display: none;
    }
}
  
</style>

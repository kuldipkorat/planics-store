<template>
  <Authentication header="create a new account">
    <div class="ml-24 mr-20">
      <!-- <form> -->
      <div class="">
        <span class="block font-medium text-base mt-16 font-roboto"> Your Name </span>
        <input
          type="text"
          name="userName"
          id="userName"
          v-model="userName"
          @input="onInputField"
          @keyup.enter="onProceedButtonClick()"
          autocomplete="off"
          class="w-96 mt-2 pl-1 border-x-0 text-base text-lightGray-400 border-t-0 font-roboto bg-primary border-b-2 border-black hover:border-blue-900 focus:outline-none"
          autofocus
        />
        <ErrorMsg
          v-if="validationMsg.userName.title !== ''"
          :title="this.validationMsg.userName.title"
          :description="this.validationMsg.userName.description"
          class="w-48 -mt-24 ml-72 absolute"
        ></ErrorMsg>
      </div>
      <div class="">
        <span class="block font-medium text-base mt-5 font-roboto">
          Email or Mobile Number
        </span>
        <input
          type="text"
          name="email"
          id="email"
          v-model="userEmail"
          @input="onInputField"
          @keyup.enter="onProceedButtonClick()"
          autocomplete="off"
          class="w-96 mt-2 pl-1 border-x-0 text-base text-lightGray-400 border-t-0 font-roboto bg-primary border-b-2 border-black hover:border-blue-900 focus:outline-none"
        />
        <ErrorMsg
          v-if="validationMsg.userEmail.title !== ''"
          :title="this.validationMsg.userEmail.title"
          :description="this.validationMsg.userEmail.description"
          class="w-60 -mt-24 ml-72 absolute"
        ></ErrorMsg>
      </div>
      <div class="">
        <span class="block font-medium text-base mt-5 font-roboto"> Enter Password </span>
      </div>
      <input
        :type="fieldType"
        name="password"
        autocomplete="off"
        v-model="userPassword"
        @keyup.enter="onProceedButtonClick()"
        @input="onInputField"
        class="w-96 mt-2 pl-1 text-base text-lightGray-400 border-x-0 border-t-0 font-roboto bg-primary border-b-2 border-black hover:border-blue-900 focus:outline-none"
      />
      <ErrorMsg
        v-if="validationMsg.userPassword.title !== ''"
        :title="this.validationMsg.userPassword.title"
        :description="this.validationMsg.userPassword.description"
        class="w-48 -mt-24 ml-72 absolute"
      ></ErrorMsg>
      <div class="text-end -mt-6">
        <button @click.prevent="switchFieldType()">
          <img v-if="showPassword" class="" :src="EyeOpen" alt="" />
          <img v-else class="" :src="EyeClose" alt="" />
        </button>
      </div>
      <div>
        <span
          v-bind:class="{ validPassword: isvalidPassword }"
          class="font-roboto text-xs"
        >
          Password must be at least 6 characters.
        </span>
      </div>
      <div class="mt-8">
        <CustomButton
          extraClass="bg-blue-300 w-96 h-9"
          :imageUrl="ShieldIcon"
          @onButtonClick="onProceedButtonClick()"
        />
      </div>
      <div class="w-96 h-9 text-sm mt-2 font-roboto font-normal">
        By continuing you agree to planics store
        <a href="#" class="text-blue-900 font-roboto font-normal">conditions of use </a>
        <span>
          and
          <a href="#" class="text-blue-900 font-roboto font-normal">Privacy Notice </a>
        </span>
      </div>
      <div class="pb-12 mt-6 text-sm text-blue-900 font-roboto font-normal">
        <span class="">Already have an account? </span>
        <span
          ><button class="text-blue-900 underline" @click.prevent="onSignInClick()">
            Sign in
          </button></span
        >
      </div>
      <!-- </form> -->
    </div>
  </Authentication>
</template>

<script>
import CustomButton from "@/components/common/CustomButton.vue";
import Authentication from "@/components/layout/Authentication.vue";
import ErrorMsg from "@/components/common/ErrorMsg.vue";
import SignInImage from "@/assets/img/signIn/signIn.png";
import ShieldIcon from "@/assets/img/signIn/shield.svg";
import EyeOpen from "@/assets/img/signIn/eyeOpen.png";
import EyeClose from "@/assets/img/signIn/eyeClose.png";
import Line from "@/assets/img/signIn/line.png";

export default {
  name: "SignUp",
  data() {
    return {
        userName: "",
        userEmail: "",
        userPassword: "",
      validationMsg: {
        userName: {
          title: "",
          description: "",
        },
        userEmail: {
          title: "",
          description: "",
        },
        userPassword: {
          title: "",
          description: "",
        },
      },
      fieldType: "password",
      showPassword: false,
      isvalidPassword: false,
      SignInImage,
      ShieldIcon,
      Line,
      EyeOpen,
      EyeClose,
    };
  },
  components: {
    CustomButton,
    Authentication,
    ErrorMsg,
  },
  methods: {
    onInputField() {
      this.validationMsg.userName.title = "";
      this.validationMsg.userName.description = "";
      this.validationMsg.userEmail.title = "";
      this.validationMsg.userEmail.description = "";
      this.validationMsg.userPassword.title = "";
      this.validationMsg.userPassword.description = "";
    },
    //click to sign up
    onProceedButtonClick() {
      if (this.userName.trim() == "") {
        this.validationMsg.userName.title = "Enter User Name";
        this.validationMsg.userName.description = "Field can not empty";
      } else {
        this.validationMsg.userName.title = "";
        this.validationMsg.userName.description = "";
        if (this.userEmail.trim() == "") {
          this.validationMsg.userEmail.title = "Enter Email or Number";
          this.validationMsg.userEmail.description = "Field can not empty";
        } else {
          if (
            /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.userEmail)
             ||
            /^\d{10}$/.test(this.userEmail)
          ) {
            this.validationMsg.userEmail.title = "";
            this.validationMsg.userEmail.description = "";
            if (this.userPassword.trim() == "") {
              this.validationMsg.userPassword.title = "Enter password";
              this.validationMsg.userPassword.description = "Field can not empty";
            } else {
              if (this.userPassword.length < 6) {
                this.isvalidPassword = true;
              } else {
                this.isvalidPassword = false;
                this.$store.commit("NEW_USER_DATA",{email:this.userEmail,password:this.userPassword})
                this.$store.commit("VALID_USER")
                this.$router.push("/");
              }
              this.validationMsg.userPassword.title = "";
              this.validationMsg.userPassword.description = "";
            }
            // alert("enter valid number")
          } else {
            this.validationMsg.userEmail.title = "Enter valid Email or Number";
            this.validationMsg.userEmail.description = "Enter valid email or number";
          }
        }
      }
    },
    switchFieldType() {
      this.fieldType = this.fieldType === "password" ? "text" : "password";
      this.showPassword = !this.showPassword;
    },
    onSignInClick() {
      this.$router.push("/sign-in");
    },
  },
};
</script>

<style>
.validPassword {
  color: red;
}
</style>

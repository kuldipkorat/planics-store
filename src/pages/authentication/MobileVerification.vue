<template>
  <Authentication header="Sign in to Planics Store">
    <div class="lg:pl-20 md:pl-12 pl-10 pr-10 mx-auto">
      <div class="md:w-full w-96">
        <span class="block font-medium text-base mt-16 font-roboto">
          Email or mobile phone number
        </span>
        <input
          type="text"
          name="email"
          id="email"
          v-model="email"
          @input="onInputField"
          autocomplete="off"
          class="lg:w-96 md:w-full w-96  mt-4 pl-1 border-x-0 text-base border-t-0 font-roboto text-lightGray-400 bg-primary border-b-2 border-black focus:outline-none hover:border-blue-900 relative"
          autofocus
        />
        <div class="flex justify-end">
          <ErrorMsg
            v-if="validationMsg.email.title !== ''"
            :title="this.validationMsg.email.title"
            :description="this.validationMsg.email.description"
            class="w-72 -mt-24 -mr-36 absolute"
          ></ErrorMsg>
        </div>
      </div>
      <div class="mt-9">
        <CustomButton
          extraClass="bg-blue-300 w-full h-9"
          :imageUrl="ShieldIcon"
          @onButtonClick="onProceedButtonClick()"
        />
      </div>
      <div class="lg:w-96 md:w-64 w-96 h-9 text-base mt-11 font-roboto font-normal">
        By continuing you agree to planics store
        <a href="#" class="text-blue-900 font-roboto font-normal">conditions of use </a>
        <span>
          and
          <a href="#" class="text-blue-900 font-roboto font-normal">Privacy Notice </a>
        </span>
      </div>
      <div class="lg:pb-24 md:pb-12 mt-16 text-base text-blue-900 font-roboto font-normal">
        <span class="text-base">New to Planics Store? </span>
        <span>
          <button class="underline" @click.prevent="onCreateAccountButtonClick()">
            Create an account
          </button>
        </span>
      </div>
    </div>
  </Authentication>
</template>

<script>
import Authentication from "@/components/layout/Authentication.vue";
import CustomButton from "@/components/common/CustomButton.vue";
import ErrorMsg from "@/components/common/ErrorMsg.vue";
import ShieldIcon from "@/assets/img/signIn/shield.svg";

export default {
  name: "MobileVerification",
  data() {
    return {
      email: "",
      validationMsg: {
        email: {
          title: "",
          description: "",
        },
      },
      ShieldIcon,
    };
  },
  components: {
    Authentication,
    ErrorMsg,
    CustomButton,
  },
  methods: {
    onInputField() {
      (this.validationMsg.email.title = ""), (this.validationMsg.email.description = "");
    },
    onProceedButtonClick() {
      this.$emit("onProceedButtonClick");
      if (this.email == "") {
        this.validationMsg.email.title = "Enter Mobile Number or Email";
        this.validationMsg.email.description = "Field can not empty";
      } else {
        if (
          this.email == this.$store.getters.USER_INFO_EMAIL
        ) {
          this.validateMobileNumber();
        } else {
          this.validationMsg.email.title = "Enter valid Mobile Number or Email";
          this.validationMsg.email.description =
            "We cannot find an account with that mobile number";
        }
      }
    },
    validateMobileNumber() {
      this.$emit("validateMobileNumber");
    },
    onCreateAccountButtonClick() {
      this.$router.replace("/sign-up");
    },
  },
};
</script>

<style>
.editClass {
  color: slategray;
}
</style>

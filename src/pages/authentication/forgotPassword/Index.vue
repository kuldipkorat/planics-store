<template>
  <Authentication>
    <div class="mt-16 ml-20 mr-20">
      <div>
        <div>
          <span class="font-roboto font-medium text-2xl">Find your account</span>
        </div>
        <div class="w-96 mt-5">
          <span class="font-poppins text-base text-lightGray-400"
            >Enter the email address or mobile phone number associated with your Planics
            Store.</span
          >
        </div>
        <div class="mt-8">
          <span class="block font-medium text-base mt-4 font-roboto">
            Email or mobile phone number
          </span>
          <input
            type="text"
            name="email"
            id="email"
            v-model="email"
            @input="onInputField"
            autocomplete="off"
            class="w-96 mt-4 pl-1 text-lightGray-400 border-x-0 text-base border-t-0 font-roboto bg-primary border-b-2 border-black focus:outline-none hover:border-blue-900"
          />
          <ErrorMsg
            v-if="validationMsg.email.title !== ''"
            :title="this.validationMsg.email.title"
            :description="this.validationMsg.email.description"
            class="w-72 -mt-24 ml-64 absolute"
          ></ErrorMsg>
        </div>
        <div class="mt-11 pb-20">
          <CustomButton
            extraClass="bg-primary w-96 h-9"
            btnText="Continue"
            @onButtonClick="onContinueButtonClick()"
          />
        </div>
      </div>
    </div>
  </Authentication>
</template>

<script>
import Authentication from "@/components/layout/Authentication.vue";
import CustomButton from "@/components/common/CustomButton.vue";
import ErrorMsg from "@/components/common/ErrorMsg.vue";

export default {
  name: "FindAccount",
  data() {
    return {
      email: "",
      validationMsg: {
        email: {
          title: "",
          description: "",
        },
      },
    };
  },
  components: {
    Authentication,
    CustomButton,
    ErrorMsg,
  },
  methods: {
    onInputField() {
      this.validationMsg.email.title = "";
      this.validationMsg.email.description = "";
    },
    onContinueButtonClick() {
      this.$emit("onContinueButtonClick");
      if (this.email == "") {
        this.validationMsg.email.title = "Enter Mobile Number or Email";
        this.validationMsg.email.description = "Field can not empty";
      } else {
        if (
          this.email == this.$store.getters.USER_INFO_MOBILENUMBER ||
          this.email == this.$store.getters.USER_INFO_EMAIL
        ) {
          this.validMobileNumber();
        } else {
          this.validationMsg.email.title = "Enter valid Mobile Number or Email";
          this.validationMsg.email.description =
            "We cannot find an account with that mobile number";
        }
      }
    },
    validMobileNumber() {
      this.$emit("validMobileNumber");
    },
  },
};
</script>

<style></style>

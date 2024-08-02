<template>
  <!-- It's for mobile verification -->
  <MobileVerification
    v-if="!isVisible"
    @onProceedButtonClick="onProceedButtonClick()"
    @validateMobileNumber="validateMobileNumber()"
  ></MobileVerification>
  <!-- It's for sign in -->
  <SignIn
    v-if="!isMobileNumberVerified"
    @onSignWithCodeButtonClick="onSignWithCodeButtonClick()"
    @onClickForgotPassword="onClickForgotPassword()"
  ></SignIn>
  <!-- It's for sign in with code(Four digit) -->
  <OtpVerification
    v-if="!isSignWithCode"
    @onEditIconClick="onEditIconClick()"
    @onWithPasswordButtonClick="onWithPasswordButtonClick()"
  ></OtpVerification>
  <!-- It's for forgot password  mobile verification -->
  <ForgotPassword
    v-if="!isForgotPassword"
    @onContinueButtonClick="onContinueButtonClick()"
    @validMobileNumber="validMobileNumber()"
  ></ForgotPassword>
  <!-- It's for forgot password (six digit) code verification -->
  <CodeVerification
    v-if="!isFindAccount"
    @onContinueWithCode="onContinueWithCode()"
    @onSixDigitCodematch="onSixDigitCodematch()"
  ></CodeVerification>
  <!-- It's for create new password -->
  <CreateNewPassword
    v-if="!isConfirmAccount"
    @onSaveChangeButtonClick="onSaveChangeButtonClick()"
    @onPasswordChange="onPasswordChange()"
  ></CreateNewPassword>
    <!-- <footer>
    <FooterSection></FooterSection>
  </footer> -->
</template>

<script>
import MobileVerification from "@/pages/authentication/MobileVerification.vue";
import SignIn from "@/pages/authentication/SignIn.vue";
import OtpVerification from "@/pages/authentication/CodeVerification.vue";
import ForgotPassword from "@/pages/authentication/forgotPassword/Index.vue";
import CodeVerification from "@/pages/authentication/forgotPassword/CodeVerification.vue";
import CreateNewPassword from "@/pages/authentication/forgotPassword/CreateNewPassword.vue";

export default {
  name: "IndexPage",
  data() {
    return {
      isVisible: false, // main
      isMobileNumberVerified: true,
      isForgotPassword: true,
      isFindAccount: true,
      isConfirmAccount: true,
      isSignWithCode: true,
    };
  },
  components: {
    OtpVerification,
    MobileVerification,
    SignIn,
    ForgotPassword,
    CodeVerification,
    CreateNewPassword,
  },
  methods: {
    onProceedButtonClick() {
    },
    validateMobileNumber() {
      this.isVisible = !this.isVisible;
      this.isMobileNumberVerified = !this.isMobileNumberVerified;
    },
    onSignWithCodeButtonClick() {
      this.isMobileNumberVerified = !this.isMobileNumberVerified;
      this.isSignWithCode = !this.isSignWithCode;
    },
    onEditIconClick() {
      this.isSignWithCode = !this.isSignWithCode;
      this.isVisible = !this.isVisible;
    },
    onWithPasswordButtonClick() {
      this.isSignWithCode = !this.isSignWithCode;
      this.isMobileNumberVerified = !this.isMobileNumberVerified;
    },
    onClickForgotPassword() {
      this.isMobileNumberVerified = !this.isMobileNumberVerified;
      this.isForgotPassword = !this.isForgotPassword;
    },
    onContinueButtonClick() {},
    validMobileNumber() {
      this.isForgotPassword = !this.isForgotPassword;
      this.isFindAccount = !this.isFindAccount;
    },
    onContinueWithCode() {},
    onSixDigitCodematch() {
      this.isFindAccount = !this.isFindAccount;
      this.isConfirmAccount = !this.isConfirmAccount;
    },
    onSaveChangeButtonClick() {},
    onPasswordChange() {
      this.isConfirmAccount = !this.isConfirmAccount;
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style></style>

<template>
  <Authentication >
    <div class="w-80 ml-20 mr-20 mt-8">
      <div class="text-center">
        <span class="font-poppins font-medium text-2xl">Verify With OTP</span>
      </div>
      <div class="mt-5 text-center">
        <span class="font-poppins text-base">Please enter the 4-digit code sent to:</span>
      </div>
      <div class="w-56 pl-20 text-center text-lightGray-400">
        {{ $store.getters.USER_INFO_EMAIL }}
        <div class="flex justify-end -mt-5">
          <button type="button" class="mb-5" @click.prevent="onEditIconClick()">
            <img class="" :src="EditMark" alt="" />
          </button>
        </div>
      </div>
      <div class="mt-8 pl-8 flex flex-row justify-between w-72 place-items-center">
        <ErrorMsg
          v-if="validationMsg.code.title !== ''"
          :title="validationMsg.code.title"
          :description="validationMsg.code.description"
          class="w-72 -mt-32 ml-48 absolute"
        ></ErrorMsg>
        <input
          class="w-12 h-10 flex flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-[#ffff] text-xl bg-primary focus:ring-1 ring-blue-900 hover:border-blue-900"
          v-model="inputFourDigitCode[idx]"
          @keyup="onInputFocus"
          @focus="checked($event)"
          @change="handleChanged(idx, $event)"
          v-for="(inp, idx) in fourInputCount"
          @input="onInputField"
          :key="idx"
          maxlength="1"
          autocomplete="off"
        />
      </div>
      <div class="mt-4 text-center">
        <CustomButton
          extraClass="bg-primary w-72 h-9 font-roboto "
          btnText="Verify OTP"
          @onButtonClick="onVerifyOtpButtonClick()"
        />
      </div>
      <div class="mt-7 w-[303px] pl-4 text-center">
        <img :src="OrTitle" alt="" />
      </div>
      <div class="mt-7 text-center pb-20">
        <CustomButton
          extraClass="bg-primary w-72 h-9 font-roboto"
          btnText="With Password"
          @onButtonClick="onWithPasswordButtonClick()"
        />
      </div>
    </div>
  </Authentication>
</template>

<script>
import Authentication from "@/components/layout/Authentication.vue";
import CustomButton from "@/components/common/CustomButton.vue";
import ErrorMsg from "@/components/common/ErrorMsg.vue";

import EditMark from "@/assets/img/signIn/editMark.svg";
import OrTitle from "@/assets/img/signIn/orTitle.png";

export default {
  name: "CodeVerification",
  data() {
    return {
      inputFourDigitCode: Array(4).fill(null),
      fourInputCount: 4,
      currentKey: 0,
      fourDigitCode: "",
      validationMsg: {
        code: {
          title: "",
          description: "",
        },
      },
      EditMark,
      OrTitle,
    };
  },
  components: { Authentication, CustomButton, ErrorMsg },
  methods: {
    onEditIconClick() {
      this.$emit("onEditIconClick");
    },
    onInputField() {
      this.validationMsg.code.title = "";
      this.validationMsg.code.description = "";
    },
    onVerifyOtpButtonClick() {
      this.$emit("onVerifyOtpButtonClick");
      let otp = this.inputFourDigitCode.join("");
      if (
        this.inputFourDigitCode.includes(null) ||
        this.inputFourDigitCode.includes("")
      ) {
        this.validationMsg.code.title = "Enter Code";
        this.validationMsg.code.description = "Field Can Not Empty";
      } else {
        if (this.fourDigitCode == otp) {
          this.$router.push("/");
        } else {
          this.validationMsg.code.title = "Incorrect Code";
          this.validationMsg.code.description = "Enter valid Code";
        }
      }
    },
    generateFourDigitCode() {
      this.fourDigitCode = Math.floor(1000 + Math.random() * 9000);
      alert("generated four digit code: "+ this.fourDigitCode)
    },
    ////////for otp/////////
    handleChanged(key, event) {
      this.inputFourDigitCode[key] = event.target.value;
    },
    getChildren(event) {
      return event.target.parentElement.children;
    },
    checked(event) {
      const inputFourDigitCode = this.getChildren(event);

      if (inputFourDigitCode[this.currentKey]) {
        inputFourDigitCode[this.currentKey].focus();
      }
    },
    onInputFocus(event) {
      const inputFourDigitCode = this.getChildren(event);
      if (event.key === "Delete" || event.key === "Backspace") {
        this.currentKey--;
        if (this.currentKey <= 0) {
          this.currentKey = 0;
        }
        if (inputFourDigitCode[this.currentKey]) {
          inputFourDigitCode[this.currentKey].focus();
        }
      } else {
        this.currentKey++;
        if (this.currentKey >= this.fourInputCount) {
          this.currentKey = this.fourInputCount;
        }
        if (inputFourDigitCode[this.currentKey]) {
          inputFourDigitCode[this.currentKey].focus();
        }
      }
    },
    onWithPasswordButtonClick() {
      this.$emit("onWithPasswordButtonClick");
    },
  },
  mounted() {
    this.generateFourDigitCode();
  },
};
</script>

<style></style>

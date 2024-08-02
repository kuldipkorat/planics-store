<template>
  <Authentication>
    <div class="ml-20 mr-20 mt-16">
      <div>
        <span class="font-roboto font-medium text-2xl">Confirm your account</span>
      </div>
      <div class="w-96 mt-5">
        <span class="font-poppins text-base text-lightGray-400"
          >We sent a code via SMS. Enter that code to confirm your account.</span
        >
      </div>
      <div class="my-8">
        <span class="text-roboto text-base">
          Please enter the 6-digit code sent to your number
        </span>
      </div>
      <div class="flex flex-row justify-between">
        <input
          class="w-12 h-10 flex flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-[#ffff] text-xl bg-primary focus:ring-1 ring-blue-900 hover:border-blue-900"
          v-model="inputSixDigitCode[idx]"
          @keyup="inputFocus"
          @focus="check($event)"
          @change="handleChange(idx, $event)"
          v-for="(inp, idx) in sixInputCount"
          @input="onInputField"
          :key="idx"
          maxlength="1"
          autocomplete="off"
        />
        <ErrorMsg
          v-if="validationMsg.code.title !== ''"
          :title="validationMsg.code.title"
          :description="validationMsg.code.description"
          class="w-72 -mt-20 ml-72 absolute"
        ></ErrorMsg>
      </div>
      <div class="mt-11 pb-20">
        <CustomButton
          extraClass="bg-primary w-96 h-9"
          btnText="Continue"
          @onButtonClick="onContinueWithCode()"
        />
      </div>
    </div>
  </Authentication>
</template>

<script>
import Authentication from "@/components/layout/Authentication.vue";
import CustomButton from "@/components/common/CustomButton.vue";
import ErrorMsg from "@/components/common/ErrorMsg.vue";

export default {
  name: "CodeVerification",
  data() {
    return {
      inputSixDigitCode: Array(6).fill(null), //for six digit code that user enter
      sixInputCount: 6,
      sixDigitCode: "",
      currentKey: 0,
      validationMsg: {
        code: {
          title: "",
          description: "",
        },
      },
    };
  },
  components: { Authentication, CustomButton, ErrorMsg },
  methods: {
    onInputField() {
      this.validationMsg.code.title = "";
      this.validationMsg.code.description = "";
    },
    onContinueWithCode() {
      this.$emit("onContinueWithCode");
      let code = this.inputSixDigitCode.join("");
      if (this.inputSixDigitCode.includes(null) || this.inputSixDigitCode.includes("")) {
        alert("generated sixDigitCode code: " + this.inputSixDigitCode);

        this.validationMsg.code.title = "Enter Code";
        this.validationMsg.code.description = "Field Can Not Empty";
      } else {
        if (this.sixDigitCode == code) {
          this.onSixDigitCodematch();
        } else {
          this.validationMsg.code.title = "Incorrect Code";
          this.validationMsg.code.description = "Enter valid Code";
        }
      }
    },
    onSixDigitCodematch() {
      this.$emit("onSixDigitCodematch");
    },
    //////////for six digit code input////////////
    handleChange(key, event) {
      this.inputSixDigitCode[key] = event.target.value;
    },
    getChildren(event) {
      return event.target.parentElement.children;
    },
    check(event) {
      const inputSixDigitCode = this.getChildren(event);
      if (inputSixDigitCode[this.currentKey]) {
        inputSixDigitCode[this.currentKey].focus();
      }
    },
    inputFocus(event) {
      const inputSixDigitCode = this.getChildren(event);
      if (event.key === "Delete" || event.key === "Backspace") {
        this.currentKey--;
        if (this.currentKey <= 0) {
          this.currentKey = 0;
        }
        if (inputSixDigitCode[this.currentKey]) {
          inputSixDigitCode[this.currentKey].focus();
        }
      } else {
        this.currentKey++;
        if (this.currentKey >= this.sixInputCount) {
          this.currentKey = this.sixInputCount;
        }
        if (inputSixDigitCode[this.currentKey]) {
          inputSixDigitCode[this.currentKey].focus();
        }
      }
    },
    // for generate six digit code
    generateSixDigitCode() {
      this.sixDigitCode = Math.floor(100000 + Math.random() * 900000);
      alert("generated code: " + this.sixDigitCode);
    },
  },
  created() {
    this.generateSixDigitCode();
  },
};
</script>

<style></style>

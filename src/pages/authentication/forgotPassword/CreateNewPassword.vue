<template>
  <Authentication>
    <div class="ml-20 mr-20 mt-16">
      <div class="font-roboto font-medium text-2xl drop-shadow-lg">
        Create new Password
      </div>
      <div class="w-[400px] mt-1">
        <span class="font-poppins text-base text-lightGray-400 drop-shadow-lg"
          >We’ll ask for this password whenever you Sign in.</span
        >
      </div>
      <div class="mt-8">
        <span class="block font-medium text-base mt-4 font-roboto"> New Password </span>
        <input
          type="text"
          name="newPassword"
          id="newPassword"
          v-model="newPassword"
          @input="onInputField"
          autocomplete="off"
          class="w-96 mt-4 pl-1 text-lightGray-400 border-x-0 text-base border-t-0 font-roboto bg-primary border-b-2 border-black focus:outline-none hover:border-blue-900"
        />
        <ErrorMsg
          v-if="validationMsg.newPassword.title !== ''"
          :title="validationMsg.newPassword.title"
          :description="validationMsg.newPassword.description"
          class="w-56 -mt-20 ml-72 absolute"
        ></ErrorMsg>
      </div>
      <div
        class="font-roboto text-lightGray-400 text-sm"
        v-bind:class="{ validPassword: isvalidPassword }"
      >
        Password must be at least 6 characters.
      </div>
      <div class="mt-6">
        <span class="block font-medium text-base mt-4 font-roboto">
          Re-enter Password
        </span>
        <input
          type="password"
          name="reEnterPassword"
          id="reEnterPassword"
          v-model="reEnterPassword"
          @input="onInputField"
          autocomplete="off"
          class="w-96 mt-4 pl-1 border-x-0 text-lightGray-400 text-base border-t-0 font-roboto bg-primary border-b-2 border-black focus:outline-none hover:border-blue-900"
        />
        <ErrorMsg
          v-if="validationMsg.reEnterPassword.title !== ''"
          :title="validationMsg.reEnterPassword.title"
          :description="validationMsg.reEnterPassword.description"
          class="w-56 -mt-20 ml-72 absolute"
        ></ErrorMsg>
      </div>
      <div class="mt-11 mb-20">
        <CustomButton
          extraClass="bg-primary w-96 h-9"
          btnText="Save changes and Sign-in"
          @onButtonClick="onSaveChangeButtonClick()"
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
  name: "CreateNewPassword",
  data() {
    return {
      newPassword: "",
      reEnterPassword: "",
      validationMsg: {
        newPassword: {
          title: "",
          description: "",
        },
        reEnterPassword: {
          title: "",
          description: "",
        },
      },
      isvalidPassword: false,
    };
  },
  components: {
    Authentication,
    CustomButton,
    ErrorMsg,
  },
  methods: {
    onInputField() {
      this.isvalidPassword = false;
      this.validationMsg.newPassword.title = "";
      this.validationMsg.newPassword.description = "";
      this.validationMsg.reEnterPassword.title = "";
      this.validationMsg.reEnterPassword.description = "";
    },
    onSaveChangeButtonClick() {
      this.$emit("onSaveChangeButtonClick");
      if (this.newPassword == "" || this.reEnterPassword == "") {
        this.validationMsg.newPassword.title = "Enter Password In Both Field";
        this.validationMsg.newPassword.description = "Field can not empty";
      } else {
        if (this.newPassword.length >= 6) {
          if (this.newPassword !== "" && this.reEnterPassword !== "") {
            if (this.newPassword == this.reEnterPassword) {
              this.updateChangedPassword();
              this.onPasswordChange();
              this.newPassword = "";
              this.reEnterPassword = "";
            } else {
              this.validationMsg.reEnterPassword.title = "Password Doesn't Match";
              this.validationMsg.reEnterPassword.description =
                "Enter same password in both field";
            }
          } else {
            // alert("fill new password field");
          }
        } else {
          this.isvalidPassword = true;
        }
      }
    },
    onPasswordChange() {
      this.$emit("onPasswordChange");
    },
    updateChangedPassword() {
      this.$store.commit("CHANGED_PASSWORD", this.reEnterPassword);
    },
  },
};
</script>

<style>
.validPassword {
  color: red;
}
</style>

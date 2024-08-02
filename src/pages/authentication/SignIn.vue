<template>
  <Authentication header="Sign in to Planics Store">
    <div class="ml-24 flex justify-between">
      <!-- <form class="mr-20" action=""> -->
      <div class="mr-20 mb-16">
        <div class="mt-14">
          <input
            :disabled="!disabled"
            type="text"
            name="email"
            v-model="email"
            @input="onInputField"
            @keyup.enter="signIn()"
            autocomplete="off"
            class="w-96 mt-4 pl-1 border-x-0 text-base border-t-0 font-roboto bg-primary border-b-2 border-black focus:outline-none hover:border-blue-900"
            :class="{ editClass: !disabled }"
          />
          <ErrorMsg
            v-if="validationMsg.email.title !== ''"
            :title="this.validationMsg.email.title"
            :description="this.validationMsg.email.description"
            class="w-72 -mt-24 ml-72 absolute"
          ></ErrorMsg>
          <div class="text-end -mt-6">
            <button class="mb-5" @click.prevent="onEditField()">
              <img class="" :src="EditMark" alt="" />
            </button>
          </div>
        </div>
        <div class="flex justify-between">
          <div>
            <span class="block font-medium text-base mt-7 font-roboto">
              Enter Password
            </span>
          </div>
          <div>
            <button
              class="block text-sm mt-7 font-roboto underline text-blue-900 pr-4"
              @click.prevent="onClickForgotPassword()"
            >
              Forgot Password
            </button>
          </div>
        </div>
        <input
          :type="fieldType"
          name="password"
          autocomplete="off"
          v-model="password"
          @input="onInputField"
          @keyup.enter="signIn()"
          class="w-96 text-lightGray-400 mt-4 pl-1 text-base border-x-0 border-t-0 font-roboto bg-primary border-b-2 border-black focus:outline-none hover:border-blue-900"
        />
        <div class="text-end -mt-6">
          <button class="mb-5" @click.prevent="switchFieldType">
            <img v-if="showPassword" class="" :src="EyeOpen" alt="" />
            <img v-else class="" :src="EyeClose" alt="" />
          </button>
        </div>
        <ErrorMsg
          v-if="validationMsg.password.title !== ''"
          :title="this.validationMsg.password.title"
          :description="this.validationMsg.password.description"
          class="w-72 -mt-28 ml-72 absolute"
        ></ErrorMsg>
        <div class="mt-7">
          <!-- email and password page buttons -->
          <CustomButton
            extraClass="bg-blue-300 w-96 h-9"
            :imageUrl="ShieldIcon"
            @onButtonClick="signIn()"
          />
        </div>
        <div class="mt-3">
          <input
            class="w-4 h-4 accent-blue-200 border-2 border-white"
            type="checkbox"
            id="check"
            name="check"
            value="Bike"
          />
          <label for="check" class="font-roboto">
            Keep Sign in with Planics Store.
          </label>
        </div>
        <div class="mt-7">
          <img class="w-96" :src="OrTitle" alt="" />
        </div>
        <div class="mt-7">
          <CustomButton
            extraClass="bg-primary w-96 h-9"
            btnText="Sign in With a code"
            @onButtonClick="onSignWithCodeButtonClick()"
          />
        </div>
      </div>
      <!-- </form> -->
    </div>
  </Authentication>
</template>

<script>
import Authentication from "@/components/layout/Authentication.vue";
import CustomButton from "@/components/common/CustomButton.vue";
import ErrorMsg from "@/components/common/ErrorMsg.vue";
import OrTitle from "@/assets/img/signIn/orTitle.png";
import EyeOpen from "@/assets/img/signIn/eyeOpen.png";
import EyeClose from "@/assets/img/signIn/eyeClose.png";
import EditMark from "@/assets/img/signIn/editMark.svg";
import ShieldIcon from "@/assets/img/signIn/shield.svg";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      fieldType: "password",
      validationMsg: {
        email: {
          title: "",
          description: "",
        },
        password: {
          title: "",
          description: "",
        },
      },
      disabled: false,
      showPassword: false,
      OrTitle,
      EyeOpen,
      EyeClose,
      EditMark,
      ShieldIcon,
    };
  },
  components: {
    Authentication,
    CustomButton,
    ErrorMsg,
  },
  methods: {
    onInputField() {
      this.validationMsg.password.title = "";
      this.validationMsg.password.description = "";
      this.validationMsg.email.title = "";
      this.validationMsg.email.description = "";
    },
    signIn() {
      if (this.email.trim() == "") {
        this.validationMsg.email.title = "Enter email";
        this.validationMsg.email.description = "Field can not empty";
      } else {
        this.validationMsg.email.title = "";
        this.validationMsg.email.description = "";
      }
      if (this.password.trim() == "") {
        this.validationMsg.password.title = "Enter Password";
        this.validationMsg.password.description = "Field can not empty";
      } else {
        if (
          (
            this.email == this.$store.getters.USER_INFO_EMAIL) &&
          this.password == this.$store.getters.USER_INFO_PASSWORD
        ) {
          this.$store.commit("VALID_USER")
          this.$router.replace('/')
        } else {
          this.validationMsg.password.title = "Incorrect password or userID";
          this.validationMsg.password.description = "Enter valid password or userID";
        }
      }
    },
    onSignWithCodeButtonClick() {
      this.$emit("onSignWithCodeButtonClick");
    },
    onClickForgotPassword() {
      this.$emit("onClickForgotPassword");
    },
    onEditField() {
      this.disabled = true
    },
    //password field switch
    switchFieldType() {
      this.fieldType = this.fieldType === "password" ? "text" : "password";
      this.showPassword = !this.showPassword;
    },
    getUserdata() {
      this.email = this.$store.getters.USER_INFO_EMAIL;
    },
  },
  mounted() {
    this.getUserdata();
  },
};
</script>


<template>
  <button
    type="submit"
    :class="extraClass"
    :disabled="disableBtn"
    class="font-normal text-base rounded-md border-2 border-white relative shadow-lg font-roboto hover:border-blue-900 disabled:opacity-55 disabled:cursor-not-allowed disabled:border-none"
    @click.prevent="onButtonClick()"
  >
    <img v-if="imageUrl" class="w-4 h-4 absolute ml-[118px] mt-1 " :src="imageUrl" alt="" />
    <span class="pl-5"> {{ btnText }}</span>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  data() {
    return {};
  },
  props: {
    imageUrl: {
      type: String,
      required: false,
      default: ""
    },
    btnText: {
      type: String,
      required: false,
      default: "Proceed Securely",
    },
    extraClass: {
      type: String,
      required: false,
      default: "bg-blue-300",
    },
    disableBtn: {
      Type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    onButtonClick() {
      this.$emit("onButtonClick");
    },
  },
};
</script>

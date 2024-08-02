<template>
  <button
    class=" rounded-full w-8 h-8 text-center disabled:opacity-55"
    :disabled="disableBtn"
    @click.prevent="onPreviousBtnClick"
  >
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Arrow pointing to the left"
    >
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
    </svg>
  </button>
</template>

<script>
export default {
  name: "PreviousScrollButton",
  props: {
    disableBtn: {
      Type: Boolean,
      required: false,
      default: "",
    },
  },
  methods: {
    onPreviousBtnClick() {
      this.$emit("onPreviousBtnClick");
    },
  },
};
</script>

<style></style>

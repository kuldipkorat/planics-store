<template>
  <button
    class="rounded-full w-8 h-8 text-center disabled:opacity-55"
    :disabled="disableBtn"
    @click.prevent="onNextBtnClick"
  >
    <svg class="" viewBox="0 0 24 24" role="img" aria-label="Arrow pointing to the right">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
    </svg>
  </button>
</template>

<script>
export default {
  name: "NextScrollButton",
  props: {
    disableBtn: {
      Type: Boolean,
      required: false,
      default: "",
    },
  },
  methods: {
    onNextBtnClick() {
      this.$emit("onNextBtnClick");
    },
  },
};
</script>

<style></style>

<template>
  <div class="">
    <div class="flex lg:gap-7 md:gap-4 sm:gap-7">
      <p
        class="font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-lg font-mulish border-b-2 border-blue-800"
      >
        {{ title }}
      </p>
      <button
        class="flex items-center text-blue-900"
        @click.prevent="onClickViewAllProduct()"
      >
        {{ btnName }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewAllProduct",
  methods: {
    onClickViewAllProduct() {
      this.$emit("onClickViewAllProduct");
    },
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "here is the default title",
    },
    btnName: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>


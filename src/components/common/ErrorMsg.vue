<template>
  <div :class="extraClass" class="mx-auto rounded-xl">
    <div  :class="extraClass" class="flex px-3 py-2 rounded-xl">
      <div class="ml-3 ">
        <h2 :class="type" class="font-normal text-sm font-roboto">{{ title }}</h2>
        <p
          class="text-start text-xs text-gray-600 leading-relaxed font-roboto font-normal"
        >
          {{ description }}
        </p>
      </div>
    </div>
      <div :class="extraColor"  class="absolute bottom-1 transform -mb-3 ml-10 rotate-45 w-4 h-4 rounded-sm"></div>
  </div>
</template>

<script>
export default {
  name: "ErrorMsg",
  props: {
    title: {
      type: String,
      require: false,
      default: "title",
    },
    description: {
      type: String,
      require: false,
      default: "",
    },
    extraClass:{
      type: String,
      require: false,
      default: "bg-white",
    },
    extraColor:{
      type: String,
      require: false,
      default: "bg-white",
 
    },
      type:{
      type: String,
      require: false,
      default: "text-red-900",
 
    },
  },
};
</script>


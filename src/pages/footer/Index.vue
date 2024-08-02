<template>
  <footer class="bg-blue-300 mt-10">
    <div class="w-auto px-4 pt-6 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-12">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div class="">
          <h1
            class="font-poppins font-semibold text-3xl mx-auto leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left"
          >
            Planics Store
          </h1>
          <p
            class="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3 md:grid-cols-3">
          <div v-for="item in main" :key="item" class="text-center sm:text-left">
            <p class="text-lg font-medium text-black">{{ item.title }}</p>
            <nav class="mt-8">
              <ul class="space-y-4 text-sm">
                <li v-for="innerItem in item.subTitles" :key="innerItem">
                  <a class="text-black transition hover:text-lightGray-500" href="">
                    {{ innerItem }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="text-center sm:text-left" v-for="item in info" :key="item">
            <p class="text-lg font-medium text-black">{{ item.title }}</p>
            <ul class="mt-8 space-y-4 text-sm">
              <li
                v-for="innerItem in item.subTitles"
                :key="innerItem"
                class="flex items-start justify-center gap-1.5 sm:justify-start group"
              >
                <img class="w-5 h-5 text-black shrink-0" :src="innerItem.url" alt="" />
                <span class="text-black transition group-hover:text-lightGray-500">
                  {{ innerItem.description }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pt-6 mt-12 border-t border-gray-800">
        <div class="text-center sm:flex sm:justify-between sm:text-left">
          <p class="text-sm text-gray-400">
            <span class="block sm:inline">All rights reserved.</span>
          </p>
          <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
            &copy; 2024 Planics Store
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { main, info } from "@/data/footer/footer";
export default {
  name: "FooterSection",
  data() {
    return {
      main: main,
      info: info,
      // email:"demo@demo.com",
      // number:"0123456789",
      // address:"213 street, Xyz, Abc"
    };
  },
};
</script>

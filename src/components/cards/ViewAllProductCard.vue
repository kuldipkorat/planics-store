<template>
  <div
        class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        @click.prevent='onProductClick()'
      >
        <div class="flex justify-center items-center bg-primary h-48 ">
          <img :src="url" class="py-2 h-40 w-48 object-contain rounded-t-xl" />
        </div>
        <div class="px-4 py-3 w-72">
          <!-- <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> -->
          <p class="text-lg font-semibold text-black truncate block capitalize">
            {{ name }}
          </p>
          <p class="text-sm font-normal text-black truncate block">
            {{ description }}
          </p>
           <span
              v-if="stock > 0 && stock <= 10"
              class="text-xl text-yellow-400"
            >
              Low Stock
            </span>
            <span v-if="stock == 0" class="text-red-900  text-xl"
              >Out Of Stock</span
            >
          <div class="flex items-center">
            <p class="text-2xl font-semibold text-black cursor-auto my-3">
              ${{ afterDiscountPrice }}
            </p>
            <del>
            <p class="text-sm cursor-auto ml-2">${{price}}</p>
          </del>
           <p class="text-red-900 text-sm pl-2">({{discount}}% off)</p>
         
            <button :disabled="stock == 0" class="ml-auto cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed" @click.stop='addToCart()'>
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name:"ViewAllProduct",
    methods:{
        onProductClick(){
            this.$emit('onProductClick');
        },
        addToCart(){
            this.$emit('addToCart');
        }
    },
    props:{
        url:{
            Type:String,
            required:true,
            default:""
        },
        name:{
            Type:String,
            required:true,
            default:""
        },
        price:{
            Type:String,
            required:true,
            default:""
        },
        stock:{
          Type:String,
            required:true,
            default:""
        },
        description:{
          Type:String,
            required:true,
            default:""
        },
        discount:{
          Type:String,
            required:true,
            default:""
        },
        afterDiscountPrice:{
          Type:String,
            required:true,
            default:""
        },
    }
}
</script>

<style>

</style>
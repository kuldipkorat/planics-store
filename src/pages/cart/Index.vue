<template>
<Header />
  <div>
    <div v-if="items.length == 0" class="pt-10">
      <p
        class="flex justify-center items-center mx-auto mb-16 font-roboto text-4xl font-medium"
      >
        cart is Empty.....
      </p>
      <div class="flex justify-center items-center">
        <CustomButton
          btnText="Back To Home Page"
          extraClass="bg-blue-300 px-32 py-2"
          @onButtonClick="onButtonClick()"
        ></CustomButton>
      </div>
    </div>
    <!-------------------------->
    <div v-else class="py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div class="flex flex-col lg:flex-row gap-4">
          <!-- cart items  -->
          <div class="lg:w-3/4">
            <div class="bg-white rounded-lg shadow-md p-6 mb-4">
              <table class="w-full">
                <thead>
                  <tr>
                    <th class="text-left font-semibold"></th>
                    <th class="text-left font-semibold text-xl">Product</th>
                    <th class="text-left font-semibold text-xl">Price</th>
                    <th class="text-left font-semibold text-xl">Quantity</th>
                    <th class="text-left font-semibold text-xl">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" :key="item">
                    <td class="py-4 text-center">
                      <font-awesome-icon
                        class="w-5 h-5"
                        :icon="['fas', 'xmark']"
                        @click="removeFromCart(item.id)"
                      />
                    </td>
                    <td class="py-4" @click.prevent="onProductClick(item)">
                      <div class="flex items-center">
                        <img class="h-16 w-16 mr-4 bg-primary" :src="item.url" alt="" />
                        <span class="font-semibold"> {{ item.name }}</span>
                      </div>
                    </td>
                    <td class="py-4 font-medium">${{ item.price }}</td>
                    <td class="py-4">
                      <div class="flex items-center">
                        <button
                          class="border rounded-md py-2 px-4 mr-2"
                          @click="reduceQuantity(item)"
                        >
                          -
                        </button>
                        <span class="text-center w-8">{{ item.quantity }}</span>
                        <ErrorMsg
                        v-if="item.quantity == item.stock"
                          title="Maximum stock Reached"
                          description="you reach at maximum stock"
                          extraClass="w-60 -mt-14 bg-primary absolute"
                          extraColor="bg-primary"
                        ></ErrorMsg>
                        <button
                          class="border rounded-md py-2 px-4 ml-2"
                          @click="updateQuantity(item)"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td class="py-4 font-medium">${{ item.price * item.quantity }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- cart total section  -->
          <div class="lg:w-1/4">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-lg font-semibold mb-4">Summary</h2>
              <div class="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${{ subTotal }}</span>
              </div>
              <hr class="my-2" />
              <div class="flex justify-between mb-2">
                <span class="font-semibold">Total</span>
                <span class="font-semibold">${{ subTotal }}</span>
              </div>
              <CustomButton
                btnText="CHECK OUT"
                extraClass="bg-blue-500 py-2 px-4 rounded-lg mt-4 w-full"
                @onButtonClick="onBuyNowBtnClick()"
              >
              </CustomButton>
            </div>
          </div>
          <!-- cart end -->
        </div>
      </div>
    </div>
  </div>
  <footer><Footer /></footer>
</template>

<script>
import Header from "@/components/common/Header.vue";
import CustomButton from "@/components/common/CustomButton.vue";
import ErrorMsg from "@/components/common/ErrorMsg.vue"
import Footer from "@/pages/footer/Index.vue";

export default {
  name: "CartPage",
  data() {
    return {
      currentId: [],
    };
  },
  components: {
    Header,
    CustomButton,
    ErrorMsg,
    Footer
  },
  methods: {
    onButtonClick() {
      this.$router.push("/");
    },
    removeFromCart(id) {
      this.$store.commit("REMOVE_FROM_CART", id);
    },
    updateQuantity(item) {
      if (item.quantity > item.stock - 1) {
        // console.log(item)
      } else {
        item.quantity++;
      }
    },
    reduceQuantity(item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.items.splice(this.items.indexOf(item), 1);
      }
    },
    onBuyNowBtnClick() {
      if(this.$store.getters.IS_VALID_USER == true){
        this.$store.commit("BUY_PRODUCT", this.items);
      }else{
        this.$router.replace("/sign-in")
      }
    },
    onProductClick(item) {
      this.$router.push(`/product-detail/${item.id}`);
    },
  },
  computed: {
    items() {
      return this.$store.getters.PRODUCT_IN_CART;
    },
    subTotal() {
      var subTotal = 0;
      for (var item in this.items) {
        var individualItem = this.items[item];
        subTotal += individualItem.quantity * individualItem.price;
      }
      return subTotal;
    },
    total() {
      return this.items.reduce((quantity, item) => quantity + item.price, 0);
    },
  },
  mounted() {
  },
};
</script>

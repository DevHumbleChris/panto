<script setup>
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
const products = useState("products", () => {
  return [
    {
      id: 1,
      name: "Sakarias Armchair",
      rating: 5,
      type: "chair",
      price: "392",
      imgURL: "/images/sakarias-armchair-black.jpg",
    },
    {
      id: 2,
      name: "Baltsar Chair",
      rating: 5,
      type: "chair",
      price: "299",
      imgURL: "/images/Balstar-Chair.png",
    },
    {
      id: 3,
      name: "Anjay Chair",
      rating: 5,
      type: "chair",
      price: "519",
      imgURL: "/images/Anjay-Chair.png",
    },
    {
      id: 4,
      name: "Nyantuy Chair",
      rating: 5,
      type: "chair",
      price: "921",
      imgURL: "/images/Nyantuy-Chair.png",
    },
  ];
});

const tabName = useState("tabName", () => "chair");
const cart = computed(() => {
  return cartStore?.cart;
});

const toggleTabs = (openTabName) => {
  tabName.value = openTabName;
};

const addToCart = (prod) => {
  cartStore?.addToCart(prod);
};

const checkIfQuantityExists = (prod) => {
  const isAddedToCart = cart?.value.filter(
    (cartProd) => cartProd?.id === prod?.id
  );
  if (isAddedToCart.length > 0) {
    console.log(cart?.value);
    return true;
  }
  return false;
};

const getProdQuantity = (prod) => {
  let quantity;
  const filteredCart = cart?.value.filter(
    (cartProd) => cartProd?.id === prod?.id
  );
  quantity = filteredCart[0]?.quantity;
  return quantity;
};

const incCartQuantity = (prod) => {
  cartStore?.incCartQuantity(prod);
};

const decCartQuantity = (prod) => {
  cartStore?.decCartQuantity(prod);
};
</script>

<template>
  <section class="bg-[#F7F7F7]">
    <div class="p-6 sm:p-12 space-y-4">
      <h2 class="text-3xl text-center font-bold">Best Selling Product</h2>
      <div class="flex items-center justify-center">
        <div class="bg-[#EEEEEE] flex space-x-3 rounded-full p-2">
          <button
            @click="toggleTabs('chair')"
            class="block hover:bg-white p-1 rounded-full px-3 py-1"
            :class="{ 'bg-white': tabName === 'chair' }"
          >
            Chair
          </button>
          <button
            @click="toggleTabs('beds')"
            class="block hover:bg-white transition duration-700 p-1 rounded-full px-3 py-1"
            :class="{ 'bg-white': tabName === 'beds' }"
          >
            Beds
          </button>
          <button
            @click="toggleTabs('sofa')"
            class="block hover:bg-white transition duration-700 p-1 rounded-full px-3 py-1"
            :class="{ 'bg-white': tabName === 'sofa' }"
          >
            Sofa
          </button>
          <button
            @click="toggleTabs('lamp')"
            class="block hover:bg-white transition duration-700 p-1 rounded-full px-3 py-1"
            :class="{ 'bg-white': tabName === 'lamp' }"
          >
            Lamp
          </button>
        </div>
      </div>
      <div>
        <div
          v-if="tabName === 'chair'"
          class="flex items-center overflow-x-scroll py-3 space-x-3 scrollbar-hide sm:justify-center"
        >
          <div
            v-for="(product, index) in products"
            :key="index"
            class="shrink-0"
          >
            <div
              v-if="product?.type === 'chair'"
              class="shrink-0 bg-white px-3 py-4 rounded-2xl shadow space-y-3"
            >
              <nuxt-img
                :src="product?.imgURL"
                class="h-60 w-full object-cover"
              />
              <div class="space-y-1">
                <p class="text-[#8D8D8D] capitalize">{{ product?.type }}</p>
                <p class="text-[#0D1B39] font-semibold text-xl">
                  {{ product?.name }}
                </p>
                <div>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9727 9.90814C12.7754 10.0993 12.6848 10.3758 12.7297 10.6469L13.4068 14.3941C13.4639 14.7117 13.3299 15.0331 13.0641 15.2166C12.8036 15.407 12.4571 15.4299 12.173 15.2775L8.79981 13.5182C8.68252 13.4557 8.55228 13.4222 8.419 13.4184H8.21261C8.14101 13.4291 8.07095 13.4519 8.00697 13.487L4.63304 15.2547C4.46625 15.3385 4.27737 15.3682 4.0923 15.3385C3.64142 15.2532 3.34059 14.8236 3.41446 14.3705L4.0923 10.6233C4.13723 10.3499 4.0466 10.0719 3.84934 9.87767L1.09917 7.21201C0.869163 6.98886 0.789194 6.65375 0.894296 6.35138C0.996352 6.04978 1.25682 5.82968 1.57137 5.78017L5.35657 5.23105C5.64446 5.20134 5.89731 5.02617 6.02678 4.76722L7.69471 1.34756C7.73431 1.2714 7.78534 1.20133 7.84703 1.14192L7.91558 1.08861C7.95137 1.04901 7.9925 1.01626 8.0382 0.989601L8.12121 0.959136L8.25069 0.905823H8.57132C8.85769 0.935526 9.10978 1.10689 9.24154 1.36279L10.9316 4.76722C11.0534 5.01627 11.2903 5.18916 11.5637 5.23105L15.3489 5.78017C15.6688 5.82587 15.9361 6.04674 16.042 6.35138C16.1417 6.65679 16.0557 6.9919 15.8211 7.21201L12.9727 9.90814Z"
                      fill="#F6B76F"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-[##0D1B39] font-bold">
                  <sup>$</sup>{{ product?.price }}
                </p>
                <div class="flex items-center">
                  <div
                    v-if="checkIfQuantityExists(product) === true"
                    class="flex items-center space-x-2"
                  >
                    <button
                      @click="decCartQuantity(product)"
                      class="bg-[#0D1B39] text-white py-1 px-2 rounded-md"
                    >
                      -
                    </button>
                    <p class="text-[#F6B76F] font-bold">
                      {{ getProdQuantity(product) }}
                    </p>
                    <button
                      @click="incCartQuantity(product)"
                      class="bg-[#0D1B39] text-white py-1 px-2 rounded-md"
                    >
                      +
                    </button>
                  </div>

                  <button
                    v-if="checkIfQuantityExists(product) === false"
                    @click="addToCart(product)"
                    class="bg-[#0D1B39] group flex items-center text-white rounded-full p-2 space-x-2"
                  >
                    <Icon name="ion:plus-round" class="group-hover:hidden" />
                    <span
                      class="hidden group-hover:block transition-opacity duration-700 ease-in-out delay-150"
                      >Add To Cart</span
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="tabName === 'beds'"
          class="flex items-center overflow-x-scroll py-3 space-x-3 scrollbar-hide sm:justify-center"
        >
          <div
            v-for="(product, index) in products"
            :key="index"
            class="shrink-0"
          >
            <div
              v-if="product?.type === 'beds'"
              class="shrink-0 bg-white px-3 py-4 rounded-2xl shadow space-y-3"
            >
              <nuxt-img src="/images/sakarias-armchair-black.jpg" />
              <div class="space-y-1">
                <p class="text-[#8D8D8D] capitalize">{{ product?.type }}</p>
                <p class="text-[#0D1B39] font-semibold text-xl">
                  {{ product?.name }}
                </p>
                <div>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9727 9.90814C12.7754 10.0993 12.6848 10.3758 12.7297 10.6469L13.4068 14.3941C13.4639 14.7117 13.3299 15.0331 13.0641 15.2166C12.8036 15.407 12.4571 15.4299 12.173 15.2775L8.79981 13.5182C8.68252 13.4557 8.55228 13.4222 8.419 13.4184H8.21261C8.14101 13.4291 8.07095 13.4519 8.00697 13.487L4.63304 15.2547C4.46625 15.3385 4.27737 15.3682 4.0923 15.3385C3.64142 15.2532 3.34059 14.8236 3.41446 14.3705L4.0923 10.6233C4.13723 10.3499 4.0466 10.0719 3.84934 9.87767L1.09917 7.21201C0.869163 6.98886 0.789194 6.65375 0.894296 6.35138C0.996352 6.04978 1.25682 5.82968 1.57137 5.78017L5.35657 5.23105C5.64446 5.20134 5.89731 5.02617 6.02678 4.76722L7.69471 1.34756C7.73431 1.2714 7.78534 1.20133 7.84703 1.14192L7.91558 1.08861C7.95137 1.04901 7.9925 1.01626 8.0382 0.989601L8.12121 0.959136L8.25069 0.905823H8.57132C8.85769 0.935526 9.10978 1.10689 9.24154 1.36279L10.9316 4.76722C11.0534 5.01627 11.2903 5.18916 11.5637 5.23105L15.3489 5.78017C15.6688 5.82587 15.9361 6.04674 16.042 6.35138C16.1417 6.65679 16.0557 6.9919 15.8211 7.21201L12.9727 9.90814Z"
                      fill="#F6B76F"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-[##0D1B39] font-bold">
                  <sup>$</sup>{{ product?.price }}
                </p>
                <button
                  class="bg-[#0D1B39] text-white rounded-full p-2 w-8 h-8"
                >
                  <Icon name="ion:plus-round" class="-mt-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="tabName === 'sofa'"
          class="flex items-center overflow-x-scroll py-3 space-x-3 scrollbar-hide sm:justify-center"
        >
          <div
            v-for="(product, index) in products"
            :key="index"
            class="shrink-0"
          >
            <div
              v-if="product?.type === 'sofa'"
              class="shrink-0 bg-white px-3 py-4 rounded-2xl shadow space-y-3"
            >
              <nuxt-img src="/images/sakarias-armchair-black.jpg" />
              <div class="space-y-1">
                <p class="text-[#8D8D8D] capitalize">{{ product?.type }}</p>
                <p class="text-[#0D1B39] font-semibold text-xl">
                  {{ product?.name }}
                </p>
                <div>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9727 9.90814C12.7754 10.0993 12.6848 10.3758 12.7297 10.6469L13.4068 14.3941C13.4639 14.7117 13.3299 15.0331 13.0641 15.2166C12.8036 15.407 12.4571 15.4299 12.173 15.2775L8.79981 13.5182C8.68252 13.4557 8.55228 13.4222 8.419 13.4184H8.21261C8.14101 13.4291 8.07095 13.4519 8.00697 13.487L4.63304 15.2547C4.46625 15.3385 4.27737 15.3682 4.0923 15.3385C3.64142 15.2532 3.34059 14.8236 3.41446 14.3705L4.0923 10.6233C4.13723 10.3499 4.0466 10.0719 3.84934 9.87767L1.09917 7.21201C0.869163 6.98886 0.789194 6.65375 0.894296 6.35138C0.996352 6.04978 1.25682 5.82968 1.57137 5.78017L5.35657 5.23105C5.64446 5.20134 5.89731 5.02617 6.02678 4.76722L7.69471 1.34756C7.73431 1.2714 7.78534 1.20133 7.84703 1.14192L7.91558 1.08861C7.95137 1.04901 7.9925 1.01626 8.0382 0.989601L8.12121 0.959136L8.25069 0.905823H8.57132C8.85769 0.935526 9.10978 1.10689 9.24154 1.36279L10.9316 4.76722C11.0534 5.01627 11.2903 5.18916 11.5637 5.23105L15.3489 5.78017C15.6688 5.82587 15.9361 6.04674 16.042 6.35138C16.1417 6.65679 16.0557 6.9919 15.8211 7.21201L12.9727 9.90814Z"
                      fill="#F6B76F"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-[##0D1B39] font-bold">
                  <sup>$</sup>{{ product?.price }}
                </p>
                <button
                  class="bg-[#0D1B39] text-white rounded-full p-2 w-8 h-8"
                >
                  <Icon name="ion:plus-round" class="-mt-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="tabName === 'lamp'"
          class="flex items-center overflow-x-scroll py-3 space-x-3 scrollbar-hide sm:justify-center"
        >
          <div
            v-for="(product, index) in products"
            :key="index"
            class="shrink-0"
          >
            <div
              v-if="product?.type === 'lamp'"
              class="shrink-0 bg-white px-3 py-4 rounded-2xl shadow space-y-3"
            >
              <nuxt-img src="/images/sakarias-armchair-black.jpg" />
              <div class="space-y-1">
                <p class="text-[#8D8D8D] capitalize">{{ product?.type }}</p>
                <p class="text-[#0D1B39] font-semibold text-xl">
                  {{ product?.name }}
                </p>
                <div>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9727 9.90814C12.7754 10.0993 12.6848 10.3758 12.7297 10.6469L13.4068 14.3941C13.4639 14.7117 13.3299 15.0331 13.0641 15.2166C12.8036 15.407 12.4571 15.4299 12.173 15.2775L8.79981 13.5182C8.68252 13.4557 8.55228 13.4222 8.419 13.4184H8.21261C8.14101 13.4291 8.07095 13.4519 8.00697 13.487L4.63304 15.2547C4.46625 15.3385 4.27737 15.3682 4.0923 15.3385C3.64142 15.2532 3.34059 14.8236 3.41446 14.3705L4.0923 10.6233C4.13723 10.3499 4.0466 10.0719 3.84934 9.87767L1.09917 7.21201C0.869163 6.98886 0.789194 6.65375 0.894296 6.35138C0.996352 6.04978 1.25682 5.82968 1.57137 5.78017L5.35657 5.23105C5.64446 5.20134 5.89731 5.02617 6.02678 4.76722L7.69471 1.34756C7.73431 1.2714 7.78534 1.20133 7.84703 1.14192L7.91558 1.08861C7.95137 1.04901 7.9925 1.01626 8.0382 0.989601L8.12121 0.959136L8.25069 0.905823H8.57132C8.85769 0.935526 9.10978 1.10689 9.24154 1.36279L10.9316 4.76722C11.0534 5.01627 11.2903 5.18916 11.5637 5.23105L15.3489 5.78017C15.6688 5.82587 15.9361 6.04674 16.042 6.35138C16.1417 6.65679 16.0557 6.9919 15.8211 7.21201L12.9727 9.90814Z"
                      fill="#F6B76F"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-[##0D1B39] font-bold">
                  <sup>$</sup>{{ product?.price }}
                </p>
                <button
                  class="bg-[#0D1B39] text-white rounded-full p-2 w-8 h-8"
                >
                  <Icon name="ion:plus-round" class="-mt-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink to="#" class="block flex items-center justify-center space-x-3">
        <p class="text-[#E58411] font-semibold">View All</p>
        <svg
          width="48"
          height="24"
          viewBox="0 0 48 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 12.4002H42M42 12.4002C42 12.4002 37.5119 9.44867 36.6 7.00024M42 12.4002C42 12.4002 38.0324 15.1736 36.6 17.8002"
            stroke="#E58411"
            stroke-linecap="square"
          />
        </svg>
      </NuxtLink>
    </div>
  </section>
</template>

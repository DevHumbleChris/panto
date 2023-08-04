<template>
  <section class="bg-[#F7F7F7]">
    <div class="p-12 space-y-4">
      <h2 class="text-3xl text-center font-bold">Best Selling Product</h2>
      <div class="flex items-center justify-center">
        <div class="bg-[#EEEEEE] flex space-x-3 rounded-full p-2">
          <button class="block bg-white p-1 rounded-full px-3 py-1">
            Chair
          </button>
          <button class="block p-1 rounded-full px-3 py-1 hover:bg-white">
            Beds
          </button>
          <button class="block p-1 rounded-full px-3 py-1 hover:bg-white">
            Sofa
          </button>
          <button class="block p-1 rounded-full px-3 py-1 hover:bg-white">
            Lamp
          </button>
        </div>
      </div>
      <div class="flex items-center">
        <div class="bg-white px-3 py-4 rounded-2xl">
          <nuxt-img src="/images/sakarias-armchair-black.jpg" />
          <div class="space-y-1">
            <p class="text-[#8D8D8D]">Chair</p>
            <p class="text-[#0D1B39] font-semibold text-xl">Sakaris Armchair</p>
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
          <div>
            <p><sup>$</sup>392</p>
            <button class="bg-[#0D1B39] text-white rounded-full p-2 w-8 h-8">
                <Icon name="ion:plus-round" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

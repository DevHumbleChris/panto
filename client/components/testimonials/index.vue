<template>
  <section class="my-2 p-6 sm:p-12 space-y-8 -mt-6">
    <div class="text-center space-y-3">
      <h3 class="text-[#E58411] uppercase font-semibold">Testimonials</h3>
      <h2 class="font-bold text-[#1E1E1E] text-3xl">Our Client Reviews</h2>
    </div>
    <div class="flex items-center space-x-10 justify-center overflow-x-scroll py-3 scrollbar-hide">
      <div class="relative shrink-0">
        <nuxt-img
          src="/images/Bang-Upin.png"
          alt="Bang-Upin-img"
          class="h-[23rem] w-full object-cover object-center"
        />
        <div
          class="w-[16.5rem] ml-2.5 p-5 rounded-2xl absolute bg-white text-xs text-center space-y-3 bottom-3 right-0 left-0"
        >
          <div>
            <nuxt-img
              src="/images/profile/Bang-Upin.png"
              alt="profile/Bang-Upin"
              class="w-12 h-12 mx-auto absolute -top-4 right-0 left-0 mb-3 border-4 border-white rounded-full"
            />
          </div>
          <div>
            <p class="font-bold text-lg">Bang Upin</p>
            <p class="text-gray-400">Pedagang Asongan</p>
          </div>
          <p class="text-gray-600">
            “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat
            mahal“
          </p>
        </div>
      </div>
      <div class="relative shrink-0">
        <nuxt-img
          src="/images/Ibuk-Sukijan.png"
          alt="Ibuk-Sukijan"
          class="h-[23rem] w-full object-cover object-center"
        />
        <div
          class="w-[16.5rem] ml-2.5 p-5 rounded-2xl absolute bg-white text-xs text-center space-y-3 bottom-3 right-0 left-0"
        >
          <div>
            <nuxt-img
              src="/images/profile/Ibuk-Sukijan.png"
              alt="profile/Ibuk-Sukijan"
              class="w-12 h-12 mx-auto absolute -top-4 right-0 left-0 mb-3 border-4 border-white rounded-full"
            />
          </div>
          <div>
            <p class="font-bold text-lg">Ibuk Sukijan</p>
            <p class="text-gray-400">Ibu Rumah Tangga</p>
          </div>
          <p class="text-gray-600">
            “Makasih Panto, aku sekarang berasa tinggal di apartment karena
            barang-barang yang terlihat mewah“
          </p>
        </div>
      </div>
      <div class="relative shrink-0">
        <nuxt-img
          src="/images/Mpok-Ina.png"
          alt="Mpok-Ina"
          class="h-[23rem] w-full object-cover object-center"
        />
        <div
          class="w-[16.5rem] ml-2.5 p-5 rounded-2xl absolute bg-white text-xs text-center space-y-3 bottom-3 right-0 left-0"
        >
          <div>
            <nuxt-img
              src="/images/profile/Mpok-Ina.png"
              alt="profile/Mpok-Ina"
              class="w-12 h-12 mx-auto absolute -top-4 right-0 left-0 mb-3 border-4 border-white rounded-full"
            />
          </div>
          <div>
            <p class="font-bold text-lg">Mpok Ina</p>
            <p class="text-gray-400">Karyawan Swasta</p>
          </div>
          <p class="text-gray-600">
            “Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

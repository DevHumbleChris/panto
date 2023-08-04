<script setup></script>

<template>
  <section class="absolute top-0 right-0 left-0 text-white">
    <nav class="px-6 py-5 flex items-center justify-between">
      <NuxtLink to="/" class="font-bold text-4xl">Panto</NuxtLink>
      <ul class="hidden md:flex items-center space-x-12 text-xl">
        <li>
          <NuxtLink to="#">Furniture</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Shop</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">About Us</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Contact</NuxtLink>
        </li>
      </ul>
      <div class="flex items-center space-x-4">
        <button class="block">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.007 2.83325C20.8036 2.83325 23.9249 5.81662 24.0833 9.59688H24.0463C24.0508 9.70676 24.0296 9.81618 23.9846 9.91659H24.2058C25.9299 9.91659 27.7353 11.1116 28.4592 13.9963L28.5378 14.3367L29.6271 23.1125C30.411 28.7097 27.3487 31.0636 23.1713 31.1633L22.8912 31.1666H11.1471C6.90168 31.1666 3.63027 29.6196 4.34956 23.4933L4.39861 23.1125L5.50041 14.3367C6.0437 11.2301 7.86761 10.0048 9.625 9.92121L9.81993 9.91659H9.93067C9.912 9.81083 9.912 9.70263 9.93067 9.59688C10.0891 5.81662 13.2104 2.83325 17.007 2.83325ZM12.8874 14.6331C12.1959 14.6331 11.6354 15.21 11.6354 15.9217C11.6354 16.6334 12.1959 17.2104 12.8874 17.2104C13.5789 17.2104 14.1394 16.6334 14.1394 15.9217L14.1297 15.7601C14.0524 15.1247 13.5257 14.6331 12.8874 14.6331ZM21.0882 14.6331C20.3968 14.6331 19.8362 15.21 19.8362 15.9217C19.8362 16.6334 20.3968 17.2104 21.0882 17.2104C21.7797 17.2104 22.3403 16.6334 22.3403 15.9217C22.3403 15.21 21.7797 14.6331 21.0882 14.6331ZM16.9515 4.6783C14.2257 4.6783 12.0159 6.88042 12.0159 9.59688C12.0346 9.70263 12.0346 9.81083 12.0159 9.91659H21.9487C21.9093 9.81451 21.8884 9.70625 21.887 9.59688C21.887 6.88042 19.6773 4.6783 16.9515 4.6783Z"
              fill="white"
            />
          </svg>
        </button>
        <button class="block text-white md:hidden">
          <Icon name="charm:menu-hamburger" class="w-10 h-auto" />
        </button>
      </div>
    </nav>
    <!-- Main Hero Content -->
    <div
      class="container max-w-sm py-1 sm:py-16 px-3 mx-auto mt-px text-left sm:max-w-md md:max-w-lg sm:px-4 md:max-w-none md:text-center"
    >
      <h1
        class="text-3xl font-bold leading-10 tracking-tight text-center text-white md:text-center sm:text-4xl md:text-7xl lg:text-8xl"
      >
        Make Your Interior More <br class="hidden sm:block" />
        Minimalistic & Modern
      </h1>
      <div
        class="mx-auto mt-5 text-white md:mt-8 md:max-w-lg text-center md:text-xl"
      >
        Turn your room with Panto into a lot more minimalist and modern with
        ease and speed.
      </div>
      <div
        class="flex flex-col items-center justify-center mt-8 space-y-4 text-center sm:flex-row sm:space-y-0 sm:space-x-4"
      >
        <div class="relative inline-flex w-full md:w-auto">
          <div
            class="flex items-center justify-between w-full px-4 py-4 text-base font-medium leading-6 text-white bg-gray-900 border border-transparent rounded-full xl:px-6 md:w-auto hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            <input
              type="text"
              class="bg-transparent border-0 outline-none w-full placeholder:text-white placeholder:font-medium"
              placeholder="Search furniture"
            />
            <svg
              class="bg-[#E58411] p-1 w-8 h-auto rounded-full cursor-pointer"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 15.75L12.3855 12.3795M14.25 7.875C14.25 9.56576 13.5784 11.1873 12.3828 12.3828C11.1873 13.5784 9.56576 14.25 7.875 14.25C6.18424 14.25 4.56274 13.5784 3.36719 12.3828C2.17165 11.1873 1.5 9.56576 1.5 7.875C1.5 6.18424 2.17165 4.56274 3.36719 3.36719C4.56274 2.17165 6.18424 1.5 7.875 1.5C9.56576 1.5 11.1873 2.17165 12.3828 3.36719C13.5784 4.56274 14.25 6.18424 14.25 7.875Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- End Main Hero Content -->
  </section>
</template>

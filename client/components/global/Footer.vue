<template>
  <footer class="bg-[#F7F7F7]">
    <div class="grid grid-cols-1 sm:grid-cols-6 p-12 items-center gap-6 sm:gap-20">
      <div class="col-span-2 space-y-3">
        <h2 class="text-3xl font-bold">Panto</h2>
        <p>
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
      </div>
      <div class="col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div class="space-y-3">
          <p class="font-bold text-[#E58411] text-xl">Services</p>
          <ul class="space-y-2">
            <li><NuxtLink to="#">Email Marketing</NuxtLink></li>
            <li><NuxtLink to="#">Campaigns</NuxtLink></li>
            <li><NuxtLink to="#">Branding</NuxtLink></li>
          </ul>
        </div>
        <div class="space-y-3">
          <p class="font-bold text-[#E58411] text-xl">Furniture</p>
          <ul class="space-y-2">
            <li><NuxtLink to="#">Beds</NuxtLink></li>
            <li><NuxtLink to="#">Chair</NuxtLink></li>
            <li><NuxtLink to="#">All</NuxtLink></li>
          </ul>
        </div>
        <div class="space-y-3">
          <p class="font-bold text-[#E58411] text-xl">Follow Us</p>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="#" class="block flex items-center space-x-6">
                <svg
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14971 3.29509H9.96139V0.139742C9.64884 0.0967442 8.5739 0 7.32201 0C4.70992 0 2.92057 1.643 2.92057 4.66274V7.44186H0.0380859V10.9693H2.92057V19.845H6.45462V10.9701H9.22052L9.65958 7.44269H6.4538V5.01251C6.45462 3.99297 6.72915 3.29509 8.14971 3.29509Z"
                    fill="#1E2833"
                  />
                </svg>
                <span>Facebook</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="block flex items-center space-x-3">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5556 1.881C18.8283 2.2 18.0534 2.41144 17.2456 2.51411C18.0767 2.01789 18.711 1.23811 19.0092 0.298222C18.2343 0.760222 17.3788 1.08656 16.467 1.26867C15.7312 0.485222 14.6826 0 13.5386 0C11.319 0 9.53211 1.80156 9.53211 4.01011C9.53211 4.32789 9.559 4.63344 9.625 4.92433C6.292 4.76178 3.34278 3.16433 1.36156 0.730889C1.01567 1.331 0.812778 2.01789 0.812778 2.75733C0.812778 4.14578 1.52778 5.37656 2.59356 6.08911C1.94944 6.07689 1.31756 5.88989 0.782222 5.59533C0.782222 5.60756 0.782222 5.62344 0.782222 5.63933C0.782222 7.58756 2.17189 9.20578 3.99422 9.57856C3.66789 9.66778 3.31222 9.71056 2.94311 9.71056C2.68644 9.71056 2.42733 9.69589 2.18411 9.64211C2.70356 11.2298 4.17756 12.397 5.93022 12.4349C4.56622 13.5019 2.83433 14.1448 0.959444 14.1448C0.630667 14.1448 0.315333 14.1301 0 14.0898C1.77589 15.235 3.88056 15.8889 6.15022 15.8889C13.5276 15.8889 17.5609 9.77778 17.5609 4.48067C17.5609 4.30344 17.5548 4.13233 17.5462 3.96244C18.3419 3.39778 19.0104 2.69256 19.5556 1.881Z"
                    fill="#1E2833"
                  />
                </svg>
                <span>Twitter</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="block flex items-center space-x-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.25 0H13.75C17.2013 0 20 2.79875 20 6.25V13.75C20 17.2013 17.2013 20 13.75 20H6.25C2.79875 20 0 17.2013 0 13.75V6.25C0 2.79875 2.79875 0 6.25 0ZM13.75 18.125C16.1625 18.125 18.125 16.1625 18.125 13.75V6.25C18.125 3.8375 16.1625 1.875 13.75 1.875H6.25C3.8375 1.875 1.875 3.8375 1.875 6.25V13.75C1.875 16.1625 3.8375 18.125 6.25 18.125H13.75Z"
                    fill="#1E2833"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 10C5 7.23875 7.23875 5 10 5C12.7613 5 15 7.23875 15 10C15 12.7613 12.7613 15 10 15C7.23875 15 5 12.7613 5 10ZM6.875 10C6.875 11.7225 8.2775 13.125 10 13.125C11.7225 13.125 13.125 11.7225 13.125 10C13.125 8.27625 11.7225 6.875 10 6.875C8.2775 6.875 6.875 8.27625 6.875 10Z"
                    fill="#1E2833"
                  />
                  <circle
                    cx="15.3752"
                    cy="4.62499"
                    r="0.66625"
                    fill="#1E2833"
                  />
                </svg>
                <span>Instagram</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

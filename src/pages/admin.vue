<template>
  <client-only>
    <div class="admin-wrapper">
      <div v-if="loggedIn" class="font-sans bg-grey-lighter flex flex-col min-h-screen w-full">
        <div>
          <div class="bg-gray-100">
            <div class="container mx-auto px-4">
              <div class="flex items-center md:justify-between py-4">
                <div class="w-1/4 md:hidden">
                  <svg class="fill-current text-white h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z" /></svg>
                </div>
                <div class="w-1/2 md:w-auto text-center text-gray-800 text-2xl font-semibold border-b-2 border-blue-500">
                  PTR Admin
                </div>
                <div class="w-1/4 md:w-auto md:flex text-right">
                  <div>
                    <img :src="require('~/static/audilogot.png')" class="inline-block h-10 w-10 rounded-full object-contain object-center overflow-hidden bg-gray-100 border-2 border-gray-700 focus:border-green-600" alt="">
                  </div>
                  <div class="hidden md:block md:flex md:items-center ml-2">
                    <span class="text-gray-800 font-medium text-base mr-1">Dillon Twilley</span>
                    <div>
                      <svg class="fill-current text-gray-800 h-4 w-4 block opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden bg-blue-600 md:block md:bg-gray-900 md:border-b">
            <div class="container mx-auto px-4">
              <div class="md:flex">
                <div class="flex -mb-px mr-8">
                  <a href="#" class="no-underline text-white md:text-blue-dark flex items-center py-4 border-b border-blue-dark">
                    <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.889 3h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H3.89A.9.9 0 0 1 3 12.09V3.91A.9.9 0 0 1 3.889 3zM3.889 15h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H3.89C3.398 21 3 20.616 3 20.143v-4.286c0-.473.398-.857.889-.857zM13.889 11h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H13.89a.9.9 0 0 1-.889-.91v-8.18a.9.9 0 0 1 .889-.91zM13.889 3h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H13.89C13.398 9 13 8.616 13 8.143V3.857c0-.473.398-.857.889-.857z" /></svg>Dashboard
                  </a>
                </div>
                <div class="flex -mb-px mr-8">
                  <a href="#" class="no-underline text-white opacity-50 md:text-grey-dark md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark">
                    <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 7h10V5l4 3.5-4 3.5v-2H8V7zm-6 8.5L6 12v2h10v3H6v2l-4-3.5z" fill-rule="nonzero" /></svg> Orders
                  </a>
                </div>
                <div class="flex -mb-px mr-8">
                  <a href="#" class="no-underline text-white opacity-50 md:text-grey-dark md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark">
                    <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 8H5.5v-.5l11-.88v.88H18V6c0-1.1-.891-1.872-1.979-1.717L5.98 5.717C4.891 5.873 4 6.9 4 8v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-1.5 7.006a1.5 1.5 0 1 1 .001-3.001 1.5 1.5 0 0 1-.001 3.001z" fill-rule="nonzero" /></svg>Ad Center
                  </a>
                </div>
                <div class="flex -mb-px mr-8">
                  <a href="#" class="no-underline text-white opacity-50 md:text-grey-dark md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark">
                    <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 12h2v2h9s-.149-4.459-.2-5.854C21.75 6.82 21.275 6 19.8 6h-3.208l-1.197-2.256C15.064 3.121 14.951 3 14.216 3H9.783c-.735 0-.847.121-1.179.744-.165.311-.7 1.318-1.196 2.256H4.199c-1.476 0-1.945.82-2 2.146C2.145 9.473 2 14 2 14h9v-2zM9.649 4.916c.23-.432.308-.516.817-.516h3.067c.509 0 .588.084.816.516L14.924 6h-5.85l.575-1.084zM13 17h-2v-2H2.5s.124 1.797.199 3.322c.031.633.218 1.678 1.8 1.678H19.5c1.582 0 1.765-1.047 1.8-1.678.087-1.568.2-3.322.2-3.322H13v2z" fill-rule="nonzero" /></svg>Tools & Data
                  </a>
                </div>
                <div class="flex -mb-px">
                  <a href="#" class="no-underline text-white opacity-50 md:text-grey-dark md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark">
                    <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.783 12c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 0 0-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 0 0-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615-.58.172-1.14.403-1.671.691.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 0 0 3.6 9.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643.173.58.404 1.14.691 1.672 1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711.532.288 1.092.52 1.672.693.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 0 0 1.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883.287-.532.52-1.092.692-1.672-.973-.569-1.619-1.395-1.619-2.442zM12 15.652a3.653 3.653 0 1 1 0-7.306 3.653 3.653 0 0 1 0 7.306z" fill-rule="nonzero" /></svg>              Settings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
          <div class="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
            <div class="border-b px-6">
              <div class="flex justify-between -mb-px">
                <div class="lg:hidden text-blue-dark py-4 text-lg">
                  Price Charts
                </div>
                <div class="hidden lg:flex">
                  <button type="button" class="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-6">
                    Dec 19th, 2019 &middot; Thursday
                  </button>
                </div>
                <div class="flex text-sm">
                  <button type="button" class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3">
                    1M
                  </button>
                  <button type="button" class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3">
                    1D
                  </button>
                  <button type="button" class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3">
                    1W
                  </button>
                  <button type="button" class="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-3">
                    1M
                  </button>
                  <button type="button" class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3">
                    1Y
                  </button>
                  <button type="button" class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark">
                    ALL
                  </button>
                </div>
              </div>
            </div>
            <div class="flex items-center px-6 lg:hidden">
              <div class="flex-grow flex-no-shrink py-6">
                <div class="text-grey-darker mb-2">
                  <span class="text-3xl align-top">CA$</span>
                  <span class="text-5xl">21,404</span>
                  <span class="text-3xl align-top">.74</span>
                </div>
                <div class="text-green-light text-sm">
                  &uarr; CA$12,955.35 (154.16%)
                </div>
              </div>
              <div class="flex-shrink w-32 inline-block relative">
                <select class="block appearance-none w-full bg-white border border-grey-light px-4 py-2 pr-8 rounded">
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>LTC</option>
                </select>
                <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div class="hidden lg:flex">
              <div class="w-1/3 text-center py-8">
                <div class="border-r">
                  <div class="text-grey-darker mb-2">
                    <span class="text-3xl align-top">$</span>
                    <span class="text-5xl">21,404</span>
                    <span class="text-3xl align-top">.74</span>
                  </div>
                  <div class="text-sm uppercase text-grey tracking-wide">
                    Total Revenue
                  </div>
                </div>
              </div>
              <div class="w-1/3 text-center py-8">
                <div class="border-r">
                  <div class="text-grey-darker mb-2">
                    <span class="text-3xl align-top"><span class="text-green-500 align-center">+</span>$</span>
                    <span class="text-5xl">12,998</span>
                    <span class="text-3xl align-top">.48</span>
                  </div>
                  <div class="text-sm uppercase text-grey tracking-wide">
                    Revenue Since last month (USD)
                  </div>
                </div>
              </div>
              <div class="w-1/3 text-center py-8">
                <div>
                  <div class="text-grey-darker mb-2">
                    <span class="text-3xl align-top"><span class="text-blue-600 align-top">+</span></span>
                    <span class="text-5xl">154.47</span>
                    <span class="text-3xl align-top">%</span>
                  </div>
                  <div class="text-sm uppercase text-grey tracking-wide">
                    Since last month (%)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
              <div class="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
                <div class="border-b">
                  <div class="flex justify-between px-6 -mb-px">
                    <h3 class="text-blue-dark py-4 font-normal text-lg">
                      Recent Notifications
                    </h3>
                    <div class="flex">
                      <button type="button" class="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-3">
                        List
                      </button>
                      <button type="button" class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark">
                        Chart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                  <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
                    <div class="rounded-full bg-orange inline-flex mr-3">
                      <svg class="fill-current text-white h-8 w-8 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="evenodd"><path d="M21.78 15.37c.51-.61.83-1.4.83-2.26 0-2.74-1.6-4.38-4.24-4.38V5.45c0-.12-.1-.22-.22-.22h-1.27c-.11 0-.2.1-.2.21v3.3h-1.7V5.44c0-.12-.1-.22-.22-.22H13.5c-.12 0-.2.1-.21.21v3.3H9.67c-.12 0-.21.09-.21.21v1.31c0 .12.1.22.21.22h.21c.94 0 1.7.79 1.7 1.75v7c0 .92-.68 1.67-1.55 1.75a.21.21 0 0 0-.18.16l-.33 1.32c-.01.06 0 .13.04.19.04.05.1.08.17.08h3.55v3.3c0 .1.1.2.2.2h1.28c.12 0 .21-.1.21-.22v-3.28h1.7v3.3c0 .1.1.2.21.2h1.27c.12 0 .22-.1.22-.22v-3.28h.85c2.65 0 4.24-1.64 4.24-4.37 0-1.28-.68-2.39-1.68-3zm-6.8-4.01h2.54c.94 0 1.7.78 1.7 1.75 0 .96-.76 1.75-1.7 1.75h-2.55v-3.5zm3.39 8.75h-3.4v-3.5h3.4c.93 0 1.7.78 1.7 1.75 0 .96-.77 1.75-1.7 1.75z" /></g></svg>
                    </div>
                    <span class="text-blue-500 underline">Order</span>
                  </div>
                  <div class="hidden md:flex lg:hidden xl:flex w-1/3 px-4 items-center text-sm">
                    <div class="bg-orange h-2 rounded-full flex-grow mr-2" />
                    Aberdine A6204 x 2
                  </div>
                  <div class="flex w-3/5 md:w-1/2">
                    <div class="w-1/2 px-4">
                      <div class="text-center text-sm bg-green-600 rounded-lg font-semibold text-white">
                        Completed
                      </div>
                    </div>
                    <div class="w-1/2 px-4">
                      <div class="text-right text-green-700">
                        $2100.28
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                  <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
                    <div class="rounded-full bg-orange inline-flex mr-3">
                      <svg class="fill-current text-white h-8 w-8 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="evenodd"><path d="M21.78 15.37c.51-.61.83-1.4.83-2.26 0-2.74-1.6-4.38-4.24-4.38V5.45c0-.12-.1-.22-.22-.22h-1.27c-.11 0-.2.1-.2.21v3.3h-1.7V5.44c0-.12-.1-.22-.22-.22H13.5c-.12 0-.2.1-.21.21v3.3H9.67c-.12 0-.21.09-.21.21v1.31c0 .12.1.22.21.22h.21c.94 0 1.7.79 1.7 1.75v7c0 .92-.68 1.67-1.55 1.75a.21.21 0 0 0-.18.16l-.33 1.32c-.01.06 0 .13.04.19.04.05.1.08.17.08h3.55v3.3c0 .1.1.2.2.2h1.28c.12 0 .21-.1.21-.22v-3.28h1.7v3.3c0 .1.1.2.21.2h1.27c.12 0 .22-.1.22-.22v-3.28h.85c2.65 0 4.24-1.64 4.24-4.37 0-1.28-.68-2.39-1.68-3zm-6.8-4.01h2.54c.94 0 1.7.78 1.7 1.75 0 .96-.76 1.75-1.7 1.75h-2.55v-3.5zm3.39 8.75h-3.4v-3.5h3.4c.93 0 1.7.78 1.7 1.75 0 .96-.77 1.75-1.7 1.75z" /></g></svg>
                    </div>
                    <span class="text-blue-500 underline">Order</span>
                  </div>
                  <div class="hidden md:flex lg:hidden xl:flex w-1/3 px-4 items-center text-sm">
                    <div class="bg-orange h-2 rounded-full flex-grow mr-2" />
                    Aberdine A6204 x 2
                  </div>
                  <div class="flex w-3/5 md:w-1/2">
                    <div class="w-1/2 px-4">
                      <div class="text-center text-sm bg-green-600 rounded-lg font-semibold text-white">
                        Completed
                      </div>
                    </div>
                    <div class="w-1/2 px-4">
                      <div class="text-right text-green-700">
                        $2100.28
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                  <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
                    <div class="rounded-full bg-orange inline-flex mr-3">
                      <svg class="fill-current text-white h-8 w-8 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="evenodd"><path d="M21.78 15.37c.51-.61.83-1.4.83-2.26 0-2.74-1.6-4.38-4.24-4.38V5.45c0-.12-.1-.22-.22-.22h-1.27c-.11 0-.2.1-.2.21v3.3h-1.7V5.44c0-.12-.1-.22-.22-.22H13.5c-.12 0-.2.1-.21.21v3.3H9.67c-.12 0-.21.09-.21.21v1.31c0 .12.1.22.21.22h.21c.94 0 1.7.79 1.7 1.75v7c0 .92-.68 1.67-1.55 1.75a.21.21 0 0 0-.18.16l-.33 1.32c-.01.06 0 .13.04.19.04.05.1.08.17.08h3.55v3.3c0 .1.1.2.2.2h1.28c.12 0 .21-.1.21-.22v-3.28h1.7v3.3c0 .1.1.2.21.2h1.27c.12 0 .22-.1.22-.22v-3.28h.85c2.65 0 4.24-1.64 4.24-4.37 0-1.28-.68-2.39-1.68-3zm-6.8-4.01h2.54c.94 0 1.7.78 1.7 1.75 0 .96-.76 1.75-1.7 1.75h-2.55v-3.5zm3.39 8.75h-3.4v-3.5h3.4c.93 0 1.7.78 1.7 1.75 0 .96-.77 1.75-1.7 1.75z" /></g></svg>
                    </div>
                    <span class="text-blue-500 underline">Order</span>
                  </div>
                  <div class="hidden md:flex lg:hidden xl:flex w-1/3 px-4 items-center text-sm">
                    <div class="bg-orange h-2 rounded-full flex-grow mr-2" />
                    Aberdine A6204 x 2
                  </div>
                  <div class="flex w-3/5 md:w-1/2">
                    <div class="w-1/2 px-4">
                      <div class="text-center text-sm bg-green-600 rounded-lg font-semibold text-white">
                        Completed
                      </div>
                    </div>
                    <div class="w-1/2 px-4">
                      <div class="text-right text-green-700">
                        $2100.28
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-6 py-4">
                  <div class="text-center text-grey">
                    Total Balance &asymp; $6100.28
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <div class="bg-white border-t border-b sm:rounded sm:border shadow">
                <div class="border-b">
                  <div class="flex justify-between px-6 -mb-px">
                    <h3 class="text-blue-dark py-4 font-normal text-lg">
                      Recent Activity
                    </h3>
                  </div>
                </div>
                <div>
                  <div class="text-center px-6 py-4">
                    <div class="py-8">
                      <div class="mb-4">
                        <svg class="inline-block fill-current text-grey h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z" /></svg>
                      </div>
                      <p class="text-2xl text-grey-darker font-medium mb-4">
                        No unfufilled orders
                      </p>
                      <p class="text-grey max-w-xs mx-auto mb-6">
                        All orders have been successfully fufilled.
                      </p>
                      <div>
                        <button type="button" class="bg-blue-600 hover:bg-blue-800 text-white border border-blue-dark rounded px-6 py-2">
                          Ad Center
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white border-t">
          <div class="container mx-auto px-4">
            <div class="md:flex justify-between items-center text-sm">
              <div class="text-center md:text-left py-3 md:py-4 border-b md:border-b-0">
                <nuxt-link to="/" class="no-underline text-grey-dark mr-4">
                  Home
                </nuxt-link>
                <nuxt-link to="/" class="no-underline text-grey-dark mr-4">
                  Rugs
                </nuxt-link>
                <nuxt-link to="/" class="no-underline text-grey-dark mr-4">
                  Sales
                </nuxt-link>
              </div>
              <div class="md:flex md:flex-row-reverse items-center py-4">
                <div class="text-center mb-4 md:mb-0 md:flex">
                  <div>
                    <a href="#" class="inline-block leading-tight bg-blue-600 border border-blue-dark hover:bg-blue-dark px-3 py-2 text-white no-underline rounded">Need help?</a>
                  </div>
                </div>
                <div class="text-gray-700 text-center md:mr-4">
                  &copy; 2019 Pool Table Rugs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!loggedIn" class="flex flex-col h-screen w-screen items-center justify-center text-center">
        <h3 class="text-2xl font-semibold text-gray-700 w-full">
          Hey, you're not supposed to be here!
        </h3>
        <div class="w-1/3 mt-4">
          <nuxt-link to="/" class="px-3 py-2 text-white bg-blue-500 font-medium rounded text-sm inline-block">
            Log In
          </nuxt-link>
          <nuxt-link to="/rugs" class="px-3 py-2 text-gray-800 bg-gray-400 font-medium rounded text-sm inline-block ml-3">
            Go Shopping
          </nuxt-link>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'Admin',
  layout: 'admin',
  computed: {
    loggedIn () {
      return this.$store.state.user !== null
    }
  }
}
</script>

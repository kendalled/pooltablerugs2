<template>
  <div class="px-16 pt-4 pb-12 bg-gray-800">
    <h1 class="text-3xl mt-6 text-green-400 text-center px-10">
      Equal height boxes using Tailwind CSS
    </h1>

    <h2 class="text-lg mb-8 mt-2 px-10 text-center text-gray-100">
      An equal height grid with content that grows, aligning links at bottom
    </h2>

    <ul class="flex flex-wrap">
      <li class="w-full sm:w-1/2 flex flex-col">
        <div class="flex flex-col h-full bg-gray-100 rounded shadow m-2 py-6 px-8">
          <h2 class="text-2xl mb-2">
            Pool table rugs are a necessity for any game room.
          </h2>
          <p class="flex-grow border">
            Most importantly, they’ll protect your floor against scratches and scuff marks. They serve to highlight your pool table, softening stone or wood floors, as well as balancing color and pattern in a room.
          </p>
          <a href="" class="my-4 underline">Link</a>
        </div>
      </li>

      <li class="w-full sm:w-1/2 flex flex-col">
        <div class="flex flex-col h-full bg-gray-100 rounded shadow m-2 py-6 px-8">
          <h2 class="text-2xl mb-2">
            Rugs help reduce noise drastically.
          </h2>
          <p class="flex-grow">
            Soft materials such as rugs can absorb the sound of clacking pool balls. Footsteps around the game tables are reduced drastically as well. Don't underestimate the impact!
          </p>
          <a href="" class="my-4 underline">Link</a>
        </div>
      </li>

      <li class="w-full sm:w-1/2 flex flex-col">
        <div class="flex flex-col h-full bg-gray-100 rounded shadow m-2 py-6 px-8">
          <h2 class="text-2xl mb-2">
            Our Goal
          </h2>
          <p class="flex-grow">
            Our mission is to provide our customers with a high-quality, durable, and stylish rug that they are guaranteed to love. From traditional to more modern and psychedelic designs, we have curated a selection of rugs that will make the perfect addition to any game room. We are here to help you choose a rug that will not only look good, but will keep your game room safe from spills, scratches, and any other damage.
          </p>
          <a href="" class="my-4 underline">Link</a>
        </div>
      </li>

      <li class="w-full sm:w-1/2 flex flex-col">
        <div class="flex flex-col h-full bg-gray-100 rounded shadow m-2 py-6 px-8">
          <h2 class="text-2xl mb-2">
            24/7 Support
          </h2>
          <p class="flex-grow">
            Our 24/7 support is available anytime you need help with the ordering process. Ask any time for design assistance, sizing recommendations, and order tracking. Get started with a livechat message, e-mail, or phone call. We have designers in-house to help you find the perfect rug.
          </p>
          <a href="" class="my-4 underline">Link</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContentSection'
}
</script>

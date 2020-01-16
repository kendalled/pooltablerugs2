<template>
  <div class="bg-gray-100 min-h-screen antialiased text-gray-900 p-6">
    <div class="max-w-sm mx-auto">
      <div class="">
        <form action="#" method="POST">
          <div class="rounded-md shadow overflow-hidden">
            <div class="p-6 bg-white">
              <h3 class="text-lg font-medium leading-tight text-gray-900">
                Checkboxes are the worst
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                But I'm here to help make them better.
              </p>
              <div class="mt-4">
                <div>
                  <!--
                  Here we just use flexbox and `align-items: center` to center the checkbox with the label
                -->
                  <div class="flex items-center">
                    <input id="option1" type="checkbox" class="form-checkbox border-gray-400 h-4 w-4 text-indigo-600">
                    <label for="option1" class="ml-3 text-sm font-medium text-gray-700">Short item</label>
                  </div>
                  <p class="mt-1 ml-4 pl-3 block text-sm text-gray-600">
                    So far so good with just a short label, right?
                  </p>
                </div>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input id="option2" type="checkbox" class="form-checkbox border-gray-400 h-4 w-4 text-indigo-600">
                    <label for="option2" class="ml-3 text-sm font-medium text-gray-700">Longer checkbox item that unfortunately wraps on to two separate lines</label>
                  </div>
                  <p class="mt-1 ml-4 pl-3 block text-sm text-gray-600">
                    But here, the naive solution causes the checkbox to be centered <em>between</em> the two lines.
                  </p>
                </div>

                <div class="mt-4">
                  <!--
                  Here we use a zero-width space character to trick the container for the checkbox into being
                  the same height as a single line of label text by adopting the text's line-height.

                  Then we center the checkbox inside of its own container.
                -->
                  <div class="flex items-start text-sm">
                    <div class="flex items-center">
                      <!-- Zero-width space character, used to align checkbox properly -->
                      &#8203;
                      <input id="option3" type="checkbox" class="form-checkbox border-gray-400 h-4 w-4 text-indigo-600">
                    </div>
                    <label for="option3" class="ml-3 font-medium text-gray-700">Longer checkbox item that unfortunately wraps on to two separate lines</label>
                  </div>
                  <p class="mt-1 ml-4 pl-3 block text-sm text-gray-600">
                    This solution always centers the checkbox with the first line of text, no matter the text size or checkbox size.
                  </p>
                </div>
                <div class="mt-4">
                  <div class="flex items-start text-lg leading-tight">
                    <div class="flex items-center">
                      <!-- Zero-width space character, used to align checkbox properly -->
                      &#8203;
                      <input id="option4" type="checkbox" class="form-checkbox border-gray-400 h-4 w-4 text-indigo-600">
                    </div>
                    <label for="option4" class="ml-3 font-medium text-gray-700">Longer checkbox item that unfortunately wraps on to two separate lines</label>
                  </div>
                  <p class="mt-1 ml-4 pl-3 block text-sm text-gray-600">
                    Here I've made the text bigger and the checkbox is still perfectly aligned, how incredible!
                  </p>
                </div>
              </div>
            </div>
            <div class="px-6 py-4 bg-gray-50 text-right">
              <button class="py-1 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline focus:bg-indigo-500 active:bg-indigo-600">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdamForm'
}
</script>

<template>
  <div id="background" class="pb-24">
    <HeroSmall bg="samplerug.jpg" />
    <h2 class="text-3xl text-center font-semibold mt-12 mb-6 text-gray-100">
      Our Most Popular Rugs
    </h2>

    <div class="flex flex-wrap px-12 xl:px-32">
      <Card
        v-for="item in doc"
        :key="item"
        :sku="item.SKU"
        :shaping="item.shape"
        :group="item.group"
        :collection="item.collection"
        :price="item.MSRP"
        :styling="item.style"
        :romance="truncateString(item.romance, 175)"
        class="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4"
      />
    </div>
    <!-- test checkout card -->
    <!--    <div id="content" class="min-h-screen flex justify-center text-center bg-gray-100 mx-auto">-->
    <!--      <h3 class="text-3xl mt-4 text-gray-800">-->
    <!--        Heading goes here-->
    <!--      </h3>-->
    <!--    </div>-->
  </div>
</template>

<script>
import HeroSmall from '~/components/HeroSmall'
import Card from '~/components/Card'
import { fireDb } from '~/plugins/firebase.js'

export default {
  components: {
    HeroSmall,
    Card
  },
  data () {
    return {
      doc: []
    }
  },
  head () {
    return {
      title: 'Rug Catalog - Pool Table Rugs'
    }
  },
  async asyncData ({ app, params, error }) {
    let data
    try {
      data = []
      await fireDb.collection('Rugs').limit(4).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, ' => ', doc.data())
          data.push({ SKU: doc.data().SKU, image: doc.data().imageURL, MSRP: doc.data().MSRP, style: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, shape: doc.data().Shape, group: doc.data()['Size Name'] })
        })
      })
    } catch (e) {
      // TODO: error handling
      alert(e)
    }
    return {
      doc: data
    }
  },
  methods: {
    truncateString (str, num) {
      // If the length of str is less than or equal to num
      // just return str--don't truncate it.
      if (str.length <= num) {
        return str
      }
      // Return str truncated with '...' concatenated to the end of str.
      return str.slice(0, num) + '...'
    }
  }
}
</script>

<style scoped>
  #background {
    background-color: #38a168;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232a724b' fill-opacity='0.19'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>

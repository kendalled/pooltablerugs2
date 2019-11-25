<template>
  <div class="rugroot bg-gray-100 antialiased xl:flex xl:flex-col">
    <!-- <SiteHeader  /> -->
    <div class="w-full h-auto flex absolute justify-end items-start pr-6">
      <Cart />
    </div>
    <div class="xl:flex-1 xl:flex xl:overflow-y-hidden">
      <SearchFilters :show="shown" />
      <main class="pt-8 pb-6 px-4 xl:flex-1 xl:overflow-x-hidden">
        <div v-for="(style, i) in styles" :key="i" :class="{'mt-6': i > 0}">
          <div class="px-4 xl:px-8">
            <h3 class="text-gray-900 font-bolder text-xl">
              {{ style.title }} Rugs
            </h3>
            <p class="text-gray-700">
              {{ style.description }}
            </p>
          </div>
          <div class="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
            <div class="px-4 sm:inline-flex items-center sm:pt-2 sm:pb-8 xl:px-8">
              <div v-for="item in doc" v-show="i === 0" :key="item.sku" :class="{'mt-10 sm:ml-4': i >= 0 }" class="sm:mt-0 sm:w-80 sm:flex-shrink-0 xl:mx-5">
                <!--  <PropertyCard :property="item" /> -->
                <RugCard :info="item" />
              </div>

              <div v-for="item in doc2" v-show="i === 1" :key="item.sku" :class="{'mt-10 sm:ml-4': i >= 0 }" class="sm:mt-0 sm:w-80 sm:flex-shrink-0 xl:mx-5">
                <!--  <PropertyCard :property="item" /> -->
                <RugCard :info="item" />
              </div>

              <div v-for="item in doc3" v-show="i === 2" :key="item.sku" :class="{'mt-10 sm:ml-4': i >= 0 }" class="sm:mt-0 sm:w-80 sm:flex-shrink-0 xl:mx-5">
                <!--  <PropertyCard :property="item" /> -->
                <RugCard :info="item" />
              </div>

              <!-- see more -->
              <svg
                id="Capa_1"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                class="h-12 w-auto mb-40 ml-8 hidden lg:block hover:cursor-pointer shadow-lg rounded-full"
                viewBox="0 0 54 54"
                style="enable-background:new 0 0 54 54;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      style="fill:#38a168;"
                      d="M27,53L27,53C12.641,53,1,41.359,1,27v0C1,12.641,12.641,1,27,1h0c14.359,0,26,11.641,26,26v0C53,41.359,41.359,53,27,53z"
                    />
                    <path
                      style="fill:#38a168;"
                      d="M27,54C12.112,54,0,41.888,0,27S12.112,0,27,0s27,12.112,27,27S41.888,54,27,54z M27,2C13.215,2,2,13.215,2,27s11.215,25,25,25s25-11.215,25-25S40.785,2,27,2z"
                    />
                  </g>
                  <path
                    style="fill:#FFFFFF;"
                    d="M22.294,40c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L32.88,27L21.587,15.707c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l11.498,11.498c0.667,0.667,0.667,1.751,0,2.418L23.001,39.707C22.806,39.902,22.55,40,22.294,40z"
                  />
                </g>
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import RugCard from '~/components/RugCard'
import { firebase, fireDb } from '~/plugins/firebase'
import SearchFilters from '~/components/SearchFilters'
import Cart from '~/components/Cart'

export default {
  name: 'App',
  components: {
    RugCard,
    SearchFilters,
    Cart
  },
  head () {
    return {
      title: 'Pool Table Rugs: Search Our Catalog.'
    }
  },
  data () {
    return {
      shown: false,
      doc: [],
      doc2: [],
      doc3: [],
      styles: [
        {
          title: 'Traditional',
          description: 'Vivid colors, bold designs, and sharp lines. Our traditional rugs will match any 21st century space.'
        },
        {
          title: 'Shag',
          description: 'Neutral colors, classy designs, and sharp lines. Our shag rugs will make you feel like hamilton.'
        },
        {
          title: 'Modern',
          description: 'Vivid colors, bold designs, and sharp lines. Our modern rugs will match any 21st century space.'
        }
      ]
    }
  },
  async asyncData ({ app, params, error }) {
    const rugRef = fireDb.collection('Rugs').where('Style', '==', 'Traditional').limit(4)
    const rugRef2 = fireDb.collection('Rugs').where('Style', '==', 'Shag').limit(4)
    const rugRef3 = fireDb.collection('Rugs').where('Style', '==', 'Modern').limit(4)
    let data, data2, data3
    try {
      data = []
      await rugRef.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, ' => ', doc.data())
          data.push({ sku: doc.data().SKU, foldURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/Fold/' + doc.data().SKU.toLowerCase() + '-fold.jpg', MSRP: doc.data().MSRP, styling: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, rating: 5, reviewCount: 12, group: doc.data()['Size Group'] })
        })
      })
    } catch (e) {
      // TODO: error handling
      console.log(e)
    }
    //  https://storage.googleapis.com/pooltablerugs.appspot.com/Fold/a177-fold.jpg
    try {
      data2 = []
      await rugRef2.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, ' => ', doc.data())
          data2.push({ sku: doc.data().SKU, foldURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/Fold/' + doc.data().SKU.toLowerCase() + '-fold.jpg', MSRP: doc.data().MSRP, styling: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, rating: 4, reviewCount: 11, group: doc.data()['Size Group'] })
        })
      })
    } catch (e) {
      // TODO: error handling
      alert(e)
    }
    try {
      data3 = []
      await rugRef3.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, ' => ', doc.data())
          data3.push({ sku: doc.data().SKU, foldURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/Fold/' + doc.data().SKU.toLowerCase() + '-fold.jpg', MSRP: doc.data().MSRP, styling: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, rating: 5, reviewCount: 10, group: doc.data()['Size Group'] })
        })
      })
    } catch (e) {
      // TODO: error handling
      alert(e)
    }
    return {
      doc: data,
      doc2: data2,
      doc3: data3
    }
  },
  mounted () {
    this.signInAnon()
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
    },
    signInAnon () {
      firebase.auth().signInAnonymously().then((result) => {
        // Save User here.
        this.$store.commit('user/authUser', result.user.uid)
        this.shown = true
        // ...
      }).catch((e) => {
        console.log(e)
      })
      // this.$store.commit('user/authUser', firebase.auth().currentUser.uid)
    },
    async saveUser () {
      const uid = await firebase.auth().currentUser.uid
      this.$store.commit('user/authUser', uid)
    }
  }
}
</script>

<style scoped>
@media (min-width: 1280px) {
  .rugroot {
    height: 92vh !important;
  }
}
</style>

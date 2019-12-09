<template>
  <div class="rugroot bg-white antialiased xl:flex xl:flex-col">
    <!-- <SiteHeader  /> -->
    <div class="w-full h-auto flex absolute justify-end items-start pr-6">
      <Cart />
    </div>
    <div class="xl:flex-1 xl:flex xl:overflow-y-hidden">
      <SearchFilters :show="shown" />
      <main class="pt-8 pb-6 px-4 xl:flex-1 xl:overflow-x-hidden">
        <div v-for="(style, i) in styles" :key="i" :class="{'mt-6': i > 0}">
          <div class="px-4 xl:px-8">
            <h3 class="text-gray-900 font-semibold text-xl">
              {{ style.title }} Rugs
            </h3>
            <p class="text-gray-600">
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
              <!-- See more -->
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
      title: 'Pool Table Rugs: Search Our Catalog.',
      link: [
        { rel: 'preconnect', href: 'https://firebasestorage.googleapis.com' },
        { rel: 'preconnect', href: 'https://storage.googleapis.com/pooltablerugs.appspot.com' },
        {
          rel: 'stylesheet',
          href: 'https://firebasestorage.googleapis.com/v0/b/pooltablerugs.appspot.com/o/Images%2Fhooper.css?alt=media&token=41885b27-3eb4-48c9-83d7-3a17fcedf9b9'
        }
      ]
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
          data.push({ sku: doc.data().SKU, foldURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/FoldTest/thumbs/' + doc.data().SKU.toLowerCase() + '-fold_300x300.jpg', frontURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/skus/ath5111-24hm.jpg', MSRP: doc.data().MSRP, styling: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, rating: 5, reviewCount: 12, group: doc.data()['Size Group'] })
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
          data2.push({ sku: doc.data().SKU, foldURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/FoldTest/thumbs/' + doc.data().SKU.toLowerCase() + '-fold_300x300.jpg', frontURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/skus/ath5111-24hm.jpg', MSRP: doc.data().MSRP, styling: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, rating: 4, reviewCount: 11, group: doc.data()['Size Group'] })
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
          data3.push({ sku: doc.data().SKU, foldURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/FoldTest/thumbs/' + doc.data().SKU.toLowerCase() + '-fold_300x300.jpg', frontURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/skus/ath5111-24hm.jpg', MSRP: doc.data().MSRP, styling: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, rating: 4, reviewCount: 11, group: doc.data()['Size Group'] })
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
        this.shown = true
        // ...
      }).catch((e) => {
        console.log(e)
      })
      // this.$store.commit('user/authUser', firebase.auth().currentUser.uid)
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

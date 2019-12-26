<template>
  <div class="rugroot bg-white xl:flex xl:flex-col">
    <div class="xl:flex-1 xl:flex xl:overflow-y-hidden">
      <SearchFilters :show="shown" @changeCats="changeCats" />
      <main class="pt-10 pb-6 px-0 sm:pl-2 md:pl-6 lg:pl-8 xl:flex-1 xl:overflow-x-hidden">
        <transition v-for="(style, i) in styles" v-if="style.visible" :key="i" name="fade">
          <div :class="{'mt-6': i > 0}" class="w-full">
            <div class="px-4 xl:px-8">
              <h3 class="antialiased text-gray-800 font-semibold text-xl">
                {{ style.title }} Rugs
              </h3>
              <p class="text-gray-700">
                {{ style.description }}
              </p>
            </div>
            <div class="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
              <div class="px-4 sm:inline-flex items-center sm:pt-2 sm:pb-8 xl:px-8">
                <div v-for="item in traditional" v-show="i === 0" :key="item.sku" :class="{'mt-10 sm:ml-4': i >= 0 }" class="sm:mt-0 sm:w-80 sm:flex-shrink-0 md:inline-block xl:mx-6">
                  <RugCard :info="item" />
                </div>

                <div v-for="item in shag" v-show="i === 1" :key="item.sku" :class="{'mt-10 sm:ml-4': i >= 0 }" class="sm:mt-0 sm:w-80 sm:flex-shrink-0 md:inline-block xl:mx-6">
                  <RugCard :info="item" />
                </div>

                <div v-for="item in modern" v-show="i === 2" :key="item.sku" :class="{'mt-10 sm:ml-4': i >= 0 }" class="sm:mt-0 sm:w-80 sm:flex-shrink-0 md:inline-block xl:mx-6">
                  <RugCard :info="item" />
                </div>

                <!-- See more -->
              </div>
            </div>
          </div>
        </transition>
        <transition v-for="(row, i) in doc2" v-if="true" :key="i" name="fade">
          <div :class="{'mt-6': i > 0}" class="w-full">
            <div :class="{'hidden': i > 0}" class="px-4 xl:px-8">
              <h3 class="antialiased text-gray-800 font-semibold text-xl">
                Your Personalized Rugs
              </h3>
              <p class="text-gray-700">
                Infinite scroll, baby. Take a look at all of our extra rugs. Kendall is the goat.
              </p>
            </div>
            <div class="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
              <div class="px-4 sm:inline-flex items-center sm:pt-2 sm:pb-8 xl:px-8">
                <div v-for="(item, j) in doc2[i]" :key="j" :class="{'mt-10 sm:ml-4': i >= 0 }" class="sm:mt-0 sm:w-80 sm:flex-shrink-0 md:inline-block xl:mx-6">
                  <RugCard :info="item" />
                </div>
              </div>
            </div>
          </div>
        </transition>
        <client-only>
          <infinite-loading @infinite="infiniteHandler" spinner="spiral">
            <div slot="no-more" class="text-center lg:mr-10 text-gray-800 mb-4">
              No more rugs to show.
            </div>
          </infinite-loading>
        </client-only>
      </main>
    </div>
  </div>
</template>

<script>
import RugCard from '~/components/RugCard'
// import { firebase, fireDb }
import { fireDb } from '~/plugins/firebase'
import SearchFilters from '~/components/SearchFilters'

export default {
  name: 'App',
  components: {
    RugCard,
    SearchFilters
  },
  head () {
    return {
      title: 'Pool Table Rugs: Search Our Catalog.'
    }
  },
  data () {
    return {
      lastVisible: null,
      isStarted: false,
      scrollPosY: 0,
      shown: true,
      traditional: [ { 'sku': 'A108-23', 'foldURL': '/traditional/fold/a108-23-fold.jpg', 'frontURL': '/traditional/room/roomrug.jpg', 'MSRP': 255, 'styling': 'Traditional', 'romance': 'The Ancient Treasures Collection showcases traditional inspired designs that exemplify timeless styles of elegance, comfort, and sophistication. With their hand tufted construction, these rugs offer an affordable alternative to other handmade constructions while perserving the same natural demeanor and charm. Made with NZ Wool in India, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Ancient Treasures', 'rating': 5, 'reviewCount': 12, 'group': "2' x 3'" }, { 'sku': 'A108-268', 'foldURL': '/traditional/fold/a108-268-fold.jpg', 'frontURL': '/traditional/room/roomrug.jpg', 'MSRP': 900, 'styling': 'Traditional', 'romance': 'The Ancient Treasures Collection showcases traditional inspired designs that exemplify timeless styles of elegance, comfort, and sophistication. With their hand tufted construction, these rugs offer an affordable alternative to other handmade constructions while perserving the same natural demeanor and charm. Made with NZ Wool in India, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Ancient Treasures', 'rating': 5, 'reviewCount': 12, 'group': "2'6\" x 8'" }, { 'sku': 'A108-3353', 'foldURL': '/traditional/fold/a108-3353-fold.jpg', 'frontURL': '/traditional/room/roomrug.jpg', 'MSRP': 765, 'styling': 'Traditional', 'romance': 'The Ancient Treasures Collection showcases traditional inspired designs that exemplify timeless styles of elegance, comfort, and sophistication. With their hand tufted construction, these rugs offer an affordable alternative to other handmade constructions while perserving the same natural demeanor and charm. Made with NZ Wool in India, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Ancient Treasures', 'rating': 5, 'reviewCount': 12, 'group': "3' x 5' - 4' x 6'" }, { 'sku': 'A108-58', 'foldURL': '/traditional/fold/a108-58-fold.jpg', 'frontURL': '/traditional/room/roomrug.jpg', 'MSRP': 1555, 'styling': 'Traditional', 'romance': 'The Ancient Treasures Collection showcases traditional inspired designs that exemplify timeless styles of elegance, comfort, and sophistication. With their hand tufted construction, these rugs offer an affordable alternative to other handmade constructions while perserving the same natural demeanor and charm. Made with NZ Wool in India, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Ancient Treasures', 'rating': 5, 'reviewCount': 12, 'group': "5' x 8'" } ],
      shag: [ { 'sku': 'AAS2300-23', 'foldURL': '/shag/fold/aas2300-23-fold.jpg', 'frontURL': '/shag/room/roomrug.jpg', 'MSRP': 85, 'styling': 'Shag', 'romance': 'The shag pieces from our Alaska Shag Collection emanate comfortability, merging both vintage and contemporary thought to create timeless works that both your eyes and feet can appreciate! The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polyester in Turkey, and has Plush Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Alaska Shag', 'rating': 4, 'reviewCount': 11, 'group': "2' x 3'" }, { 'sku': 'AAS2300-2773', 'foldURL': '/shag/fold/aas2300-2773-fold.jpg', 'frontURL': '/shag/room/roomrug.jpg', 'MSRP': 220, 'styling': 'Shag', 'romance': 'The shag pieces from our Alaska Shag Collection emanate comfortability, merging both vintage and contemporary thought to create timeless works that both your eyes and feet can appreciate! The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polyester in Turkey, and has Plush Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Alaska Shag', 'rating': 4, 'reviewCount': 11, 'group': "2'6\" x 8'" }, { 'sku': 'AAS2300-5373', 'foldURL': '/shag/fold/aas2300-5373-fold.jpg', 'frontURL': '/shag/room/roomrug.jpg', 'MSRP': 375, 'styling': 'Shag', 'romance': 'The shag pieces from our Alaska Shag Collection emanate comfortability, merging both vintage and contemporary thought to create timeless works that both your eyes and feet can appreciate! The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polyester in Turkey, and has Plush Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Alaska Shag', 'rating': 4, 'reviewCount': 11, 'group': "5' x 8'" }, { 'sku': 'AAS2300-710103', 'foldURL': '/shag/fold/aas2300-710103-fold.jpg', 'frontURL': '/shag/room/roomrug.jpg', 'MSRP': 780, 'styling': 'Shag', 'romance': 'The shag pieces from our Alaska Shag Collection emanate comfortability, merging both vintage and contemporary thought to create timeless works that both your eyes and feet can appreciate! The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polyester in Turkey, and has Plush Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Alaska Shag', 'rating': 4, 'reviewCount': 11, 'group': "8' x 10'" } ],
      modern: [ { 'sku': 'ABE8003-223', 'foldURL': '/modern/fold/abe8003-223-fold.jpg', 'frontURL': '/modern/room/roomrug.jpg', 'MSRP': 80, 'styling': 'Modern', 'romance': 'The simplistic yet compelling rugs from the Aberdine Collection effortlessly serve as the exemplar representation of modern decor. The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polypropylene in Turkey, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Aberdine', 'rating': 4, 'reviewCount': 11, 'group': "2' x 3'" }, { 'sku': 'ABE8003-5276', 'foldURL': '/modern/fold/abe8003-5276-fold.jpg', 'frontURL': '/modern/room/roomrug.jpg', 'MSRP': 325, 'styling': 'Modern', 'romance': 'The simplistic yet compelling rugs from the Aberdine Collection effortlessly serve as the exemplar representation of modern decor. The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polypropylene in Turkey, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Aberdine', 'rating': 4, 'reviewCount': 11, 'group': "5' x 8'" }, { 'sku': 'ABE8003-679', 'foldURL': '/modern/fold/abe8003-679-fold.jpg', 'frontURL': '/modern/room/roomrug.jpg', 'MSRP': 595, 'styling': 'Modern', 'romance': 'The simplistic yet compelling rugs from the Aberdine Collection effortlessly serve as the exemplar representation of modern decor. The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polypropylene in Turkey, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Aberdine', 'rating': 4, 'reviewCount': 11, 'group': "6' x 9' - 8' x 10'" }, { 'sku': 'ABE8003-76106', 'foldURL': '/modern/fold/abe8003-76106-fold.jpg', 'frontURL': '/modern/room/roomrug.jpg', 'MSRP': 645, 'styling': 'Modern', 'romance': 'The simplistic yet compelling rugs from the Aberdine Collection effortlessly serve as the exemplar representation of modern decor. The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polypropylene in Turkey, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Aberdine', 'rating': 4, 'reviewCount': 11, 'group': "8' x 10'" } ],
      doc: [],
      doc2: [],
      styles: [
        {
          title: 'Traditional',
          description: 'Vivid colors, bold designs, and sharp lines. Our traditional rugs will match any 21st century space.',
          visible: true
        },
        {
          title: 'Shag',
          description: 'Bright colors, psychedelic designs, and timeless shapes. Our shag rugs will make you feel like it\'s 1975.',
          visible: true
        },
        {
          title: 'Modern',
          description: 'Vivid colors, bold designs, and sharp lines. Our modern rugs will match any 21st century space.',
          visible: true
        }
      ],
      newRugs: [
        {
          title: 'sample',
          visible: true
        }
      ]
    }
  },
  // async asyncData ({ app, params, error }) {
  //   const rugRef = fireDb.collection('Rugs').where('Style', '==', 'Traditional').where('Size Group', '==', '5\' x 8\'').limit(4)
  //   const rugRef2 = fireDb.collection('Rugs').where('Style', '==', 'Shag').limit(4)
  //   const rugRef3 = fireDb.collection('Rugs').where('Style', '==', 'Modern').limit(4)
  //   let data, data2, data3
  //   try {
  //     data = []
  //     await rugRef.get().then(function (querySnapshot) {
  //       querySnapshot.forEach(function (doc) {
  //         // doc.data() is never undefined for query doc snapshots
  //         // console.log(doc.id, ' => ', doc.data())
  //         data.push({ sku: doc.data().SKU, foldURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/FoldTest/thumbs/' + doc.data().SKU.toLowerCase() + '-fold_300x300.jpg', frontURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/skus/ath5111-24hm.jpg', MSRP: doc.data().MSRP, styling: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, rating: 5, reviewCount: 12, group: doc.data()['Size Group'] })
  //       })
  //     })
  //   } catch (e) {
  //     // TODO: error handling
  //     console.log(e)
  //   }
  //   try {
  //     data2 = []
  //     await rugRef2.get().then(function (querySnapshot) {
  //       querySnapshot.forEach(function (doc) {
  //         // doc.data() is never undefined for query doc snapshots
  //         // console.log(doc.id, ' => ', doc.data())
  //         data2.push({ sku: doc.data().SKU, foldURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/FoldTest/thumbs/' + doc.data().SKU.toLowerCase() + '-fold_300x300.jpg', frontURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/skus/ath5111-24hm.jpg', MSRP: doc.data().MSRP, styling: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, rating: 4, reviewCount: 11, group: doc.data()['Size Group'] })
  //       })
  //     })
  //   } catch (e) {
  //     // TODO: error handling
  //     alert(e)
  //   }
  //   try {
  //     data3 = []
  //     await rugRef3.get().then(function (querySnapshot) {
  //       querySnapshot.forEach(function (doc) {
  //         // doc.data() is never undefined for query doc snapshots
  //         // console.log(doc.id, ' => ', doc.data())
  //         data3.push({ sku: doc.data().SKU, foldURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/FoldTest/thumbs/' + doc.data().SKU.toLowerCase() + '-fold_300x300.jpg', frontURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/skus/ath5111-24hm.jpg', MSRP: doc.data().MSRP, styling: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, rating: 4, reviewCount: 11, group: doc.data()['Size Group'] })
  //       })
  //     })
  //   } catch (e) {
  //     // TODO: error handling
  //     alert(e)
  //   }
  //   return {
  //     doc: data,
  //     doc2: data2,
  //     doc3: data3
  //   }
  // },
  methods: {
    infiniteHandler ($state) {
      // Firestore index
      const rugRef = fireDb.collection('Rugs').where('Style', '==', 'Traditional').orderBy('MSRP').startAfter(this.lastVisible ? this.lastVisible : 0).limit(8)
      // let rugRef = fireDb.collection('Rugs').where('Style', '==', 'Traditional').orderBy('MSRP').limit(8)
      const vm = this
      rugRef.get().then(function (documentSnapshots) {
        vm.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
        console.log('last', vm.lastVisible)
        let results
        results = null
        results = []
        let collection
        collection = null
        collection = []
        documentSnapshots.forEach(function (doc) {
          collection.push({ sku: doc.data().SKU, foldURL: 'https://firebasestorage.googleapis.com/v0/b/pooltablerugs.appspot.com/o/FoldTest%2Fthumbs%2Faas2300-2773-fold_300x300.jpg?alt=media&token=1433d11f-bd8a-49a5-8668-76b8bde077b6' + doc.data().SKU.toLowerCase() + '-fold_300x300.jpg', frontURL: 'https://storage.googleapis.com/pooltablerugs.appspot.com/skus/ath5111-24hm.jpg', MSRP: doc.data().MSRP, styling: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, rating: 4, reviewCount: 11, group: doc.data()['Size Group'] })
        })
        for (let i = 0; i < collection.length; i++) {
          results.push(collection.splice(0, 4))
        }
        for (let i = 0; i < results.length; i++) {
          console.log('working')
          vm.doc2.push(results[i])
        }
        results = null
        vm.isStarted = true
        $state.loaded()
      })
      if (this.doc2.length > 5) {
        $state.complete()
      }
    },
    truncateString (str, num) {
      // If the length of str is less than or equal to num
      // just return str--don't truncate it.
      if (str.length <= num) {
        return str
      }
      // Return str truncated with '...' concatenated to the end of str.
      return str.slice(0, num) + '...'
    },
    changeCats (val) {
      if (val.includes('traditional')) {
        this.styles[0].visible = true
      } else {
        this.styles[0].visible = false
      }
      if (val.includes('shag')) {
        this.styles[1].visible = true
      } else {
        this.styles[1].visible = false
      }
      if (val.includes('modern')) {
        this.styles[2].visible = true
      } else {
        this.styles[2].visible = false
      }
    }
  }
}
</script>

<style scoped>
@media (min-width: 1280px) {
  .rugroot {
    height: calc(99vh - 61px) !important;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

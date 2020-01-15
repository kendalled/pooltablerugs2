<template>
  <div class="rugroot bg-gray-100 xl:flex xl:flex-col">
    <div class="xl:flex-1 xl:flex xl:overflow-y-hidden">
      <SearchFilters :show="shown" @changeCats="changeCats" @changeSize="changeSize" />
      <main class="pt-10 pb-6 px-0 sm:pl-2 md:pl-6 lg:pl-8 xl:flex-1 xl:overflow-x-hidden">
        <transition-group name="fade">
          <div :class="{'mt-6': i > 0}" v-for="(style, i) in styles" v-if="style.visible && (val === '' || includesVal(style) )" :key="style.title" class="w-full fade">
            <div class="px-4 xl:px-8">
              <h3 class="antialiased text-gray-800 font-semibold text-xl">
                {{ style.title }} Rugs {{ tableSize }}
              </h3>
              <p class="text-gray-700">
                {{ style.description }}
              </p>
            </div>
            <!-- todo: fix shit architecture -->
            <div class="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
              <div class="px-4 sm:inline-flex items-center sm:pt-2 sm:pb-8 xl:px-8">
                <div v-for="item in styles[i].rugs" :key="item.sku" :class="{'mt-10 sm:ml-4': i >= 0 }" v-show="val === '' || val === item.sku" class="sm:mt-0 sm:w-80 sm:flex-shrink-0 md:inline-block xl:mx-6">
                  <RugCard @flip="showFlip" :info="item" />
                </div>

                <!-- See more -->
              </div>
            </div>
          </div>
        </transition-group>
        <transition-group name="fade">
          <div v-for="(row, i) in doc2" :key="row[3].sku" class="mt-6 w-full fade">
            <!-- todo: hide conditionally -->
            <div v-if="i === 0" class="px-4 xl:px-8">
              <h3 class="antialiased text-gray-800 font-semibold text-xl">
                Your Personalized Rugs
              </h3>
              <p class="text-gray-700">
                Infinite scroll, baby. Take a look at all of our extra rugs. Kendall is the goat.
              </p>
            </div>
            <div class="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
              <div class="px-4 sm:inline-flex items-center sm:pt-2 sm:pb-8 xl:px-8">
                <div v-for="(rug, x) in doc2[i]" :key="rug.sku" :class="{'mt-10 sm:ml-4': x >= 0 }" class="sm:mt-0 sm:w-80 sm:flex-shrink-0 md:inline-block xl:mx-6">
                  <RugCard :info="rug" />
                </div>
              </div>
            </div>
          </div>
        </transition-group>
        <client-only>
          <infinite-loading @infinite="infiniteHandler" spinner="spiral">
            <div slot="no-more" class="mx-auto lg:-ml-16 mb-4">
              <button class="text-lg bg-blue-500 text-gray-100 px-4 py-2 rounded shadow text-center hover:bg-blue-600 transition-bg">
                See More
              </button>
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
      val: '',
      loaded: 0,
      tableSize: null,
      lastVisible: null,
      isStarted: false,
      scrollPosY: 0,
      shown: true,
      doc: [],
      doc2: [],
      styles: [
        {
          title: 'Traditional',
          description: 'Vivid colors, bold designs, and sharp lines. Our traditional rugs will match any 21st century space.',
          visible: true,
          rugs: [ { 'sku': 'A108-23', 'foldURL': '/traditional/fold/a108-23-fold.jpg', 'frontURL': '/traditional/room/roomrug.jpg', 'MSRP': 255, 'styling': 'Traditional', 'romance': 'The Ancient Treasures Collection showcases traditional inspired designs that exemplify timeless styles of elegance, comfort, and sophistication. With their hand tufted construction, these rugs offer an affordable alternative to other handmade constructions while perserving the same natural demeanor and charm. Made with NZ Wool in India, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Ancient Treasures', 'rating': 5, 'reviewCount': 12, 'group': "2' x 3'" }, { 'sku': 'A108-268', 'foldURL': '/traditional/fold/a108-268-fold.jpg', 'frontURL': '/traditional/room/roomrug.jpg', 'MSRP': 900, 'styling': 'Traditional', 'romance': 'The Ancient Treasures Collection showcases traditional inspired designs that exemplify timeless styles of elegance, comfort, and sophistication. With their hand tufted construction, these rugs offer an affordable alternative to other handmade constructions while perserving the same natural demeanor and charm. Made with NZ Wool in India, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Ancient Treasures', 'rating': 5, 'reviewCount': 12, 'group': "2'6\" x 8'" }, { 'sku': 'A108-3353', 'foldURL': '/traditional/fold/a108-3353-fold.jpg', 'frontURL': '/traditional/room/roomrug.jpg', 'MSRP': 765, 'styling': 'Traditional', 'romance': 'The Ancient Treasures Collection showcases traditional inspired designs that exemplify timeless styles of elegance, comfort, and sophistication. With their hand tufted construction, these rugs offer an affordable alternative to other handmade constructions while perserving the same natural demeanor and charm. Made with NZ Wool in India, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Ancient Treasures', 'rating': 5, 'reviewCount': 12, 'group': "3' x 5' - 4' x 6'" }, { 'sku': 'A108-58', 'foldURL': '/traditional/fold/a108-58-fold.jpg', 'frontURL': '/traditional/room/roomrug.jpg', 'MSRP': 1555, 'styling': 'Traditional', 'romance': 'The Ancient Treasures Collection showcases traditional inspired designs that exemplify timeless styles of elegance, comfort, and sophistication. With their hand tufted construction, these rugs offer an affordable alternative to other handmade constructions while perserving the same natural demeanor and charm. Made with NZ Wool in India, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Ancient Treasures', 'rating': 5, 'reviewCount': 12, 'group': "5' x 8'" } ]
        },
        {
          title: 'Shag',
          description: 'Bright colors, psychedelic designs, and timeless shapes. Our shag rugs will make you feel like it\'s 1975.',
          visible: true,
          rugs: [ { 'sku': 'AAS2300-23', 'foldURL': '/shag/fold/aas2300-23-fold.jpg', 'frontURL': '/shag/room/roomrug.jpg', 'MSRP': 85, 'styling': 'Shag', 'romance': 'The shag pieces from our Alaska Shag Collection emanate comfortability, merging both vintage and contemporary thought to create timeless works that both your eyes and feet can appreciate! The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polyester in Turkey, and has Plush Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Alaska Shag', 'rating': 4, 'reviewCount': 11, 'group': "2' x 3'" }, { 'sku': 'AAS2300-2773', 'foldURL': '/shag/fold/aas2300-2773-fold.jpg', 'frontURL': '/shag/room/roomrug.jpg', 'MSRP': 220, 'styling': 'Shag', 'romance': 'The shag pieces from our Alaska Shag Collection emanate comfortability, merging both vintage and contemporary thought to create timeless works that both your eyes and feet can appreciate! The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polyester in Turkey, and has Plush Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Alaska Shag', 'rating': 4, 'reviewCount': 11, 'group': "2'6\" x 8'" }, { 'sku': 'AAS2300-5373', 'foldURL': '/shag/fold/aas2300-5373-fold.jpg', 'frontURL': '/shag/room/roomrug.jpg', 'MSRP': 375, 'styling': 'Shag', 'romance': 'The shag pieces from our Alaska Shag Collection emanate comfortability, merging both vintage and contemporary thought to create timeless works that both your eyes and feet can appreciate! The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polyester in Turkey, and has Plush Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Alaska Shag', 'rating': 4, 'reviewCount': 11, 'group': "5' x 8'" }, { 'sku': 'AAS2300-710103', 'foldURL': '/shag/fold/aas2300-710103-fold.jpg', 'frontURL': '/shag/room/roomrug.jpg', 'MSRP': 780, 'styling': 'Shag', 'romance': 'The shag pieces from our Alaska Shag Collection emanate comfortability, merging both vintage and contemporary thought to create timeless works that both your eyes and feet can appreciate! The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polyester in Turkey, and has Plush Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Alaska Shag', 'rating': 4, 'reviewCount': 11, 'group': "8' x 10'" } ]

        },
        {
          title: 'Modern',
          description: 'Vivid colors, bold designs, and sharp lines. Our modern rugs will match any 21st century space.',
          visible: true,
          rugs: [ { 'sku': 'ABE8003-223', 'foldURL': '/modern/fold/abe8003-223-fold.jpg', 'frontURL': '/modern/room/roomrug.jpg', 'MSRP': 80, 'styling': 'Modern', 'romance': 'The simplistic yet compelling rugs from the Aberdine Collection effortlessly serve as the exemplar representation of modern decor. The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polypropylene in Turkey, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Aberdine', 'rating': 4, 'reviewCount': 11, 'group': "2' x 3'" }, { 'sku': 'ABE8003-5276', 'foldURL': '/modern/fold/abe8003-5276-fold.jpg', 'frontURL': '/modern/room/roomrug.jpg', 'MSRP': 325, 'styling': 'Modern', 'romance': 'The simplistic yet compelling rugs from the Aberdine Collection effortlessly serve as the exemplar representation of modern decor. The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polypropylene in Turkey, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Aberdine', 'rating': 4, 'reviewCount': 11, 'group': "5' x 8'" }, { 'sku': 'ABE8003-679', 'foldURL': '/modern/fold/abe8003-679-fold.jpg', 'frontURL': '/modern/room/roomrug.jpg', 'MSRP': 595, 'styling': 'Modern', 'romance': 'The simplistic yet compelling rugs from the Aberdine Collection effortlessly serve as the exemplar representation of modern decor. The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polypropylene in Turkey, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Aberdine', 'rating': 4, 'reviewCount': 11, 'group': "6' x 9' - 8' x 10'" }, { 'sku': 'ABE8003-76106', 'foldURL': '/modern/fold/abe8003-76106-fold.jpg', 'frontURL': '/modern/room/roomrug.jpg', 'MSRP': 645, 'styling': 'Modern', 'romance': 'The simplistic yet compelling rugs from the Aberdine Collection effortlessly serve as the exemplar representation of modern decor. The meticulously woven construction of these pieces boasts durability and will provide natural charm into your decor space. Made with Polypropylene in Turkey, and has Medium Pile. Spot Clean Only, One Year Limited Warranty.', 'collection': 'Aberdine', 'rating': 4, 'reviewCount': 11, 'group': "8' x 10'" } ]
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
  methods: {
    showFlip (val) {
      if (this.val !== '') {
        this.val = ''
      } else {
        this.val = val
      }
      console.log('flipped!: ' + this.val)
    },
    includesVal (value) {
      let element
      const vm = this
      for (let i = 0; i < value.rugs.length; i++) {
        element = value.rugs[i]
        if (element.sku === vm.val) {
          console.log('done')
          return true
        }
      }
      console.log('donefalse')
      return false
    },
    infiniteHandler ($state) {
      // Firestore index
      const rugRef = fireDb.collection('Rugs').orderBy('Size Group').startAfter(this.lastVisible ? this.lastVisible : 0).limit(8)
      // `this` out of scope
      const vm = this
      rugRef.get().then(function (documentSnapshots) {
        vm.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
        vm.loaded += 1
        console.log('last', vm.lastVisible)
        let results
        results = null
        results = []
        let collection
        collection = null
        collection = []
        // Check if data loaded
        if (vm.loaded >= 4) {
          $state.complete()
        }
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
    },
    changeSize (val) {
      this.tableSize = val || null
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
/* base */
.fade {
  z-index: 1;
}

/* moving */
.fade-move {
  transition: all 500ms ease-in-out 50ms;
}

/* appearing */
.fade-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.fade-leave-active {
  transition: all 200ms ease-in;
  position: fixed;
  z-index: 0;
}

/* appear at / disappear to */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* .fade {
  backface-visibility: hidden;
  z-index: 1;
  transform-origin: 10% 50%;
  -webkit-transform-origin: 10% 50%;
}
.fade-move {
  -webkit-transition: all 300ms ease-out;
  transition: all 600ms ease-in-out 50ms;
}
.fade-enter-active {
  -webkit-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
}
.fade-leave-active {
  -webkit-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter {
  -webkit-transform: translate3d(0, 30px, 0);
  transform: translate3d(0, 30px, 0);
}
.fade-leave {
  -webkit-transform: translate3d(0, -30px, 0);
  transform: translate3d(0, -30px, 0);
} */
</style>

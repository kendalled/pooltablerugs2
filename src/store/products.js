// // import Vue from 'vue'
// // let items

// // if (process.client) {
// //   items = window.localStorage.getItem('items')
// // }

// // export const state = () => ({
// //   items: {}
// // })

// // export const actions = {
// //   fetchItem ({ commit }, id) {
// //   // return the Promise via `store.dispatch()` so that we know
// //   // when the data has been fetched
// //     return fetchItem(id).then(function (item) {
// //       commit('setItem', { id, item })
// //     })
// //   }
// // }
// // export const mutations = {
// //   setItem (state, { id, item }) {
// //     Vue.set(state.items, id, item)
// //   }
// // }
// import { fireDb, firebase } from '~/plugins/firebase'

// export const state = () => ({
//   list: [],
//   data: {}
// })

// export const actions = {
//   async get () {
//     const getImageURL = function (sku) {
//       const storage = firebase.storage()
//       storage.refFromURL('gs://pooltablerugs.appspot.com/FoldTest/thumbs/' + sku + '-fold_300x300.jpg').getDownloadURL().then(function (url) {
//         console.log(url)
//         return (url)
//       }).catch(function (error) {
//         // Handle any errors
//         console.log(error)
//       })
//     }
//     const rugRef = fireDb.collection('Rugs').where('Style', '==', 'Traditional').limit(4)
//     const rugRef2 = fireDb.collection('Rugs').where('Style', '==', 'Shag').limit(4)
//     const rugRef3 = fireDb.collection('Rugs').where('Style', '==', 'Modern').limit(4)
//     let data, data2, data3
//     try {
//       data = []
//       await rugRef.get().then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//           // doc.data() is never undefined for query doc snapshots
//           // console.log(doc.id, ' => ', doc.data())
//           data.push({ mainImageURL: require(getImageURL(doc.data().SKU)), sku: doc.data().SKU, MSRP: doc.data().MSRP, styling: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, rating: 5, reviewCount: 12, group: doc.data()['Size Group'] })
//         })
//       })
//     } catch (e) {
//       // TODO: error handling
//       console.log(e)
//     }
//     try {
//       data2 = []
//       await rugRef2.get().then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//           // doc.data() is never undefined for query doc snapshots
//           // console.log(doc.id, ' => ', doc.data())
//           data2.push({ mainImageURL: require(this.getImageURL(doc.data().SKU)), sku: doc.data().SKU, MSRP: doc.data().MSRP, styling: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, rating: 4, reviewCount: 11, group: doc.data()['Size Group'] })
//         })
//       })
//     } catch (e) {
//       // TODO: error handling
//       alert(e)
//     }
//     try {
//       data3 = []
//       await rugRef3.get().then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//           // doc.data() is never undefined for query doc snapshots
//           // console.log(doc.id, ' => ', doc.data())
//           data3.push({ mainImageURL: require(this.getImageURL(doc.data().SKU)), sku: doc.data().SKU, MSRP: doc.data().MSRP, styling: doc.data().Style, romance: doc.data()['Romance Copy'], collection: doc.data().Collection, rating: 5, reviewCount: 10, group: doc.data()['Size Group'] })
//         })
//       })
//     } catch (e) {
//       // TODO: error handling
//       alert(e)
//     }
//     return {
//       doc: data,
//       doc2: data2,
//       doc3: data3
//     }
//   }
// }

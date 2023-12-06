import { defineStore } from 'pinia'
// import { mergeArray } from '../utils/utiles'


// interface ICartStore {
//   getCart: any[]
// }

export const useCartStore = defineStore('cart.store', {
  // other options...
  state: (): { data: any[] } => ({
    data: []
  }),
  getters: {
    getData: (state) => {
      return state.data
    },
    total: (state) => {
      let pro = 0
      if (state.data && state.data.length) {

        pro = state.data.reduce((pv, cv) => {
          return pv + (cv ? (cv.price * cv.cantidad): 0)
        }, 0)
      }
      return "" + pro
    }
  },
  actions: {
    setData(newdata: any) {
      let cantidad = 1
      const idxOldData = this.data.findIndex(({ id }) => id === newdata.id);
      if (idxOldData > -1) {
        const oldData = this.data[idxOldData]
        oldData["cantidad"] = oldData["cantidad"] + cantidad
        this.data[idxOldData] = oldData
      } else {
        newdata["cantidad"] = cantidad
        this.data.push(newdata)
      }
    }
  },
  persist: true
})
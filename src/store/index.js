import { createStore } from 'vuex'

export default createStore({
  state:{
    products:[]
  },
  getters: {
    getProducts(state){
      return state.products;
    }
  },
  mutations: {
    UPDATEPRODUCTS:(state, updateproducts)=>{
      state.products = updateproducts;
    }
  },
  actions: {
    async Updateproducts({commit}, updateproducts){
      commit("UPDATEPRODUCTS", updateproducts);
    }
  }
})

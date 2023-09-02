<template>
  <div id="wrapper">
    <div id="mainBlock">
      <addProduct />
      <listProduct />
    </div>
  </div>
</template>

<script>
import listProduct from '../components/listsProduct/listsProduct.vue'
import addProduct from '../components/addProduct/addProduct.vue'

export default({
  name:'mainpage',
  components:{
    listProduct,
    addProduct
},
})
</script>

<style lang="scss" scoped>
#wrapper{
  width: 60%;
  min-width: 320px;
  margin:10% auto;
}
#mainBlock{
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 300px;
  margin:0 auto;
}
</style>

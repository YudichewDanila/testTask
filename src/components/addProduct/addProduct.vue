<template>
  <div id="inputWrapper">
    <input v-model="textProduct" placeholder="Новый продукт" />
    <button v-on:click="addProducts">Добавить</button>
  </div>
</template>

<script>
export default {
  name: "addProduct",
  data() {
    return {
      textProduct: "",
    };
  },
  methods: {
    addProducts() {
    if(this.textProduct.length > 0){
        let products = [];
        if (localStorage.getItem("storedProduct")) {
        products = JSON.parse(localStorage.getItem("storedProduct"));
      }

      products.push({
        id: products.length + 1,
        name: this.textProduct,
        isDifine: true,
      });
      products = this.sortIsDifine(products);
      localStorage.setItem("storedProduct", JSON.stringify(products));
      this.$store.dispatch("Updateproducts", products);

    }
     
    },

    sortIsDifine(listProduct) {
      return listProduct.sort((x, y) => {
        return x.isDifine === y.isDifine ? 0 : x.isDifine ? -1 : 1;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#inputWrapper {
  display: flex;
  align-items: center;
  width: 100%;

  height: 30px;
  input {
    width: 80%;
    height: 100%;
    font-size: 24px;
  }

  button {
    width: 20%;
    height: 100%;
    font-size: 12px;
  }
}
</style>
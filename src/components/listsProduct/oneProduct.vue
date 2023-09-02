<template>
  <div class="oneProduct">
    <button v-on:click="onthrough(id)" class="oneProduct_button">
      Вычеркнуть
    </button>
    <div
      :class="{ oneProduct_name_active: !productisDifine }"
      class="oneProduct_name"
    >
      {{ productName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "oneProduct",
  data() {
    return {};
  },
  props: ["id", "productName", "productisDifine"],
  methods: {
    onthrough(idd) {
      let listProduct = JSON.parse(localStorage.getItem("storedProduct"));
      let newListProduct = listProduct.reduce((acc, product) => {
        if (product.id === idd) {
          return [...acc, { ...product, isDifine: !product.isDifine }];
        }
        return [...acc, product];
      }, []);
      newListProduct = this.sortIsDifine(newListProduct);
      localStorage.setItem("storedProduct", JSON.stringify(newListProduct));
      this.$store.dispatch("Updateproducts", newListProduct);
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
.oneProduct {
  display: flex;
  padding: 2%;
  border: solid 2px gray;
  margin-top: 1%;
  .oneProduct_name {
    margin-left: 2%;
    font-size: 20px;
    width: 80%;
  }
  .oneProduct_name_active {
    text-decoration: line-through;
    animation-name: strike;
    animation-duration: 1s;
    color:red;
  }
  @keyframes strike {
    0% {
        animation-name: none;
        color:silver;
    }
    100% {
        width: 100%;
        color:red;
    }
  }
}
</style>
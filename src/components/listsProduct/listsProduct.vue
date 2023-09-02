<template>
    <div>
        <div v-for="item in listProduct" :key="item.id">
            <oneProduct :id="item.id" :productName="item.name" :productisDifine="item.isDifine"  />
        </div>
    </div>
</template>

<script>
import oneProduct from './oneProduct.vue';

export default {
    name: 'listsProduct',
    components:{
        oneProduct
    },
    data(){
        return {
            listProduct: []
    }
    },
    computed: {
        getProducts(){
            return this.$store.getters.getProducts;
        },
    },
    watch: {
        getProducts() {
            this.listProduct = this.$store.getters.getProducts;
        },
    },
   
    mounted(){
        if (localStorage.getItem('storedProduct')){
                let listProduct = JSON.parse(localStorage.getItem('storedProduct'));
                this.$store.dispatch('Updateproducts', listProduct);
            }
    },




}
</script>

<template>
  <div class="container">
    <div class="row">
      <Sidebar />
      <div class="col-lg-9 content py-4 mb-2 mb-sm-0 pb-sm-5">
        <h1 class="mb-2 text-start">Tienda</h1>
        <Breadcrumb />
        <div class="row">
          <ProductCard v-for="item in products" :key="item.id" :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/ui/Breadcrumb.vue";
import Sidebar from "@/components/ui/Sidebar.vue";
import ProductCard from "@/components/ui/ProductCard.vue";

export default {
  name: "Shop",
  components: {
    Sidebar,
    Breadcrumb,
    ProductCard,
  },
  data() {
    return {
      filter: "",
    };
  },
  mounted() {
    this.handleGetProducts();
  },
  methods: {
    handleGetProducts() {
      this.$store.dispatch("getProducts");
    },
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
    // loadingProducts() {
    //   return this.$store.getters.loadingProducts;
    // },
    // filteredProducts() {
    //   if (!this.filter) {
    //     return this.products;
    //   }
    //   return this.products.filter(
    //     (a) =>
    //       a.title.toLowerCase().includes(this.filter.toLowerCase()) ||
    //       a.description.toLowerCase().includes(this.filter.toLowerCase())
    //   );
    // },
  },
};
</script>
<style lang="sass" scoped>
</style>
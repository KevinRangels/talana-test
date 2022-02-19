<template>
  <div class="sidebar-enabled">
    <div class="container">
      <div class="row">
        <Sidebar />
        <div class="col-lg-9 content py-4 mb-2 mb-sm-0 pb-sm-5">
          <h1 class="mb-2 text-start">
            Tienda
            <span
              class="shop__categorySelected text-muted"
              v-if="categorySelected"
              >({{ categorySelected.name }})</span
            >
          </h1>
          <Breadcrumb />
          <div class="row" v-if="loadingProducts">
            <div
              class="col-md-4 col-sm-6 mb-grid-gutter"
              v-for="item in [1, 2, 3, 4, 5, 6]"
              :key="item"
            >
              <PuSkeleton height="200px" />
            </div>
          </div>
          <div class="row">
            <ProductCard
              v-for="item in pageOfItems"
              :key="item.id"
              :data="item"
            />
            <div class="text-center" v-if="products.length === 0">
              <p>No se encontraron productos</p>
            </div>
          </div>
          <div class="card-footer pb-0 pt-3">
            <jw-pagination
              :items="products"
              @changePage="onChangePage"
              :pageSize="3"
              :labels="customLabels"
            ></jw-pagination>
          </div>
        </div>
      </div>
      <ModalProductDetails />
      <button
        class="btn btn-primary btn-sm sidebar-toggle"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#shop-sidebar"
      >
        <i class="fas fa-filter fs-base me-2"></i>Filters
      </button>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/ui/Breadcrumb.vue";
import Sidebar from "@/components/ui/Sidebar.vue";
import ProductCard from "@/components/ui/ProductCard.vue";
import ModalProductDetails from "@/components/ui/ModalProductDetails.vue";

export default {
  name: "Shop",
  components: {
    Sidebar,
    Breadcrumb,
    ProductCard,
    ModalProductDetails,
  },
  data() {
    return {
      filter: "",
      pageOfItems: [],
      customLabels: {
        first: "<<",
        last: ">>",
        previous: "<",
        next: ">",
      },
    };
  },
  mounted() {
    this.handleGetProducts();
  },
  methods: {
    handleGetProducts() {
      this.$store.dispatch("getProducts");
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
    loadingProducts() {
      return this.$store.getters.loadingProducts;
    },
    categorySelected() {
      return this.$store.getters.categorySelected;
    },
  },
};
</script>
<style lang="sass" scoped>
.shop__categorySelected
  font-size: .8rem
</style>
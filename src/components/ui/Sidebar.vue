<template>
  <div class="sidebar col-lg-3 pt-lg-5">
    <div class="offcanvas offcanvas-collapse" id="shop-sidebar">
      <div class="offcanvas-header navbar-shadow px-4 mb-3">
        <h5 class="mt-1 mb-0">Filtros</h5>
        <button
          class="btn-close lead"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          id="sidebar__btnClose"
        ></button>
      </div>
      <div
        class="offcanvas-body px-4 pt-3 pt-lg-0 ps-lg-0 pe-lg-2 pe-xl-4"
        data-simplebar
      >
        <div class="widget mb-5">
          <h3 class="widget-title text-start">Buscar producto</h3>
          <div class="d-flex">
            <div class="col-10 col-md-12">
              <input
                type="text"
                class="form-control"
                v-model="search"
                placeholder="Nombre del producto"
              />
            </div>
            <div class="col-2 d-md-none">
              <button
                class="btn btn-primary mx-2"
                @click="btnSearch()"
                :disabled="!search"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="widget mb-5">
          <h3 class="widget-title text-start">Categorías</h3>

          <div v-if="loadingCategories">
            <div class="" v-for="item in [1, 2, 3, 4, 5, 6]" :key="item">
              <PuSkeleton height="30px" />
            </div>
          </div>

          <div v-else>
            <div class="sidebar__btn form-check mb-2 d-flex">
              <label
                class="form-check-label text-nav text-start"
                @click="handleSelectCategory(null)"
                >Todas</label
              >
            </div>
            <div
              class="sidebar__btn form-check mb-2 d-flex"
              v-for="item in categories"
              :key="item.id"
            >
              <label
                class="form-check-label text-nav text-start"
                v-bind:class="[active === item.id && 'sidebar__btnActive']"
                @click="handleSelectCategory(item)"
                >{{ item.name }}</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      search: "",
      active: null,
    };
  },
  mounted() {
    this.handleGetCategories();
  },
  methods: {
    handleGetCategories() {
      this.$store.dispatch("getCategories");
    },
    handleSelectCategory(category) {
      this.$store.dispatch("selectCategory", category);
      if (category) {
        this.active = category.id;
      } else {
        this.active = null;
      }
      document.getElementById("sidebar__btnClose").click();
    },
    btnSearch() {
      document.getElementById("sidebar__btnClose").click();
    },
  },
  computed: {
    categories() {
      return this.$store.getters.allCategories;
    },
    loadingCategories() {
      return this.$store.getters.loadingCategories;
    },
    categorySelected() {
      return this.$store.getters.categorySelected;
    },
  },
  watch: {
    search(newValue) {
      console.log("search", newValue);
      this.$store.dispatch("getFilterSearch", newValue);
    },
  },
};
</script>
<style lang="sass" scoped>
.sidebar__btn label
  cursor: pointer
  &:hover
    color: #493ef0 !important
.sidebar__btnActive
  color: #493ef0 !important
</style>
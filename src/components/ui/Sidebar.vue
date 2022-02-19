<template>
  <div class="col-lg-3">
    <div class="" id="shop-sidebar">
      <div class="offcanvas-header navbar-shadow px-4 mb-3">
        <h5 class="mt-1 mb-0">Categorias</h5>
        <button
          class="btn-close lead"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div
        class="offcanvas-body px-4 pt-3 pt-lg-0 ps-lg-0 pe-lg-2 pe-xl-4"
        data-simplebar
      >
        <!-- Brand (checkboxes)-->
        <div class="widget mb-5">
          <!-- <h3 class="widget-title">Brand</h3> -->
          <div
            class="form-check mb-2"
            v-for="item in categories"
            :key="item.id"
          >
            <input class="form-check-input" type="checkbox" :id="item.id" />
            <label class="form-check-label text-nav" for="adidas">{{
              item.name
            }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  mounted() {
    this.handleGetCategories();
  },
  methods: {
    handleGetCategories() {
      this.$store.dispatch("getCategories");
    },
  },
  computed: {
    categories() {
      return this.$store.getters.allCategories;
    },
  },
};
</script>
<style lang="sass" scoped>
</style>
<template>
  <fragment>
    <ShoppingCart />
    <header class="header">
      <div class="topbar topbar-dark bg-dark">
        <div class="container d-md-flex align-items-center px-0 px-xl-3">
          <div class="d-none d-md-block text-nowrap me-3">
            <i class="fas fa-phone fs-base text-muted me-1 align-middle"></i
            ><span class="text-muted me-2">Soporte</span
            ><a class="topbar-link me-1" href="tel:3228329136">322-832-9136</a>
          </div>
        </div>
      </div>
      <div
        class="
          navbar navbar-expand-lg navbar-light
          bg-light
          navbar-shadow navbar-sticky
        "
      >
        <div class="container px-0 px-xl-3">
          <button
            class="navbar-toggler ms-n2 me-4"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#primaryMenu"
          >
            <span class="navbar-toggler-icon"></span></button
          ><a
            class="
              navbar-brand
              flex-shrink-0
              order-lg-1
              mx-auto
              ms-lg-0
              pe-lg-2
              me-lg-4
              d-flex
              align-items-center
            "
            @click="goView('/')"
            ><img
              class="d-none d-lg-block mx-2 img-fluid"
              src="https://talana.com/static/www2/images/talana-logo.svg"
              alt="Around"
            /><img
              class="d-lg-none img-fluid"
              src="https://talana.com/static/www2/images/talana-logo.svg"
              alt="Around"
            />
          </a>
          <div class="d-flex align-items-center order-lg-3 ms-lg-auto">
            <div class="border-start me-2" style="height: 30px"></div>
            <div class="navbar-tool me-2">
              <a
                class="navbar-tool-icon-box"
                href="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#shoppingCart"
                ><i class="fas fa-shopping-cart"></i
                ><span class="navbar-tool-badge">{{
                  shoppingCart.length
                }}</span></a
              >
            </div>
          </div>
          <div class="offcanvas offcanvas-collapse order-lg-2" id="primaryMenu">
            <div class="offcanvas-header navbar-shadow">
              <h5 class="mt-1 mb-0">Menu</h5>
              <button
                class="btn-close lead"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body"></div>
          </div>
        </div>
      </div>
    </header>
  </fragment>
</template>

<script>
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart.vue";

export default {
  name: "Navbar",
  components: {
    ShoppingCart,
  },
  computed: {
    shoppingCart() {
      return this.$store.getters.shoppingCart;
    },
  },
  methods: {
    // goView(route) {
    //   if (route === "/cart" && this.shoppingCart.length === 0) {
    //     this.$notify({
    //       group: "app",
    //       type: "warn",
    //       title: "Agregar productos",
    //       text: "No tienes productos en tu carrito",
    //     });
    //     return;
    //   }
    //   this.$router.push(route);
    // },
  },
};
</script>
<style lang="sass" scoped>
.header
  position: sticky
  top: 0
.navbar-brand
  cursor: pointer
.fa-shopping-cart
  cursor: pointer
.dropdown-toggle:not(.dropdown-toggle-split)::after
  display: none
</style>
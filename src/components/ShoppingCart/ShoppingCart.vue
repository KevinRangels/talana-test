<template>
  <div class="offcanvas offcanvas-end" id="shoppingCart">
    <div class="offcanvas-header navbar-shadow px-4 mb-2">
      <h5 class="mt-1 mb-0">Tu carrito</h5>
      <button
        class="btn-close lead"
        type="button"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        id="shoppingCart__btnClose"
      ></button>
    </div>
    <div class="offcanvas-body p-4" data-simplebar>
      <ItemShoppingCart
        v-for="item in shoppingCart"
        :key="item.id"
        :data="item"
      />
    </div>
    <div class="d-flex justify-content-center" v-if="shoppingCart.length === 0">
      <p>No tienes productos en tu carrito</p>
    </div>
    <div class="offcanvas-footer d-block border-top px-4 mb-2">
      <div class="d-flex justify-content-between mb-4">
        <span>Total:</span><span class="h6 mb-0">$ {{ total | currency }}</span>
      </div>
      <a class="btn btn-primary btn-sm d-block w-100" @click="goToCheckout()"
        ><i class="fas fa-credit-card fs-base me-2"></i>Checkout</a
      >
    </div>
  </div>
</template>

<script>
import ItemShoppingCart from "@/components/ShoppingCart/ItemShoppingCart.vue";
export default {
  name: "ShoppingCart",
  components: {
    ItemShoppingCart,
  },
  computed: {
    shoppingCart() {
      return this.$store.getters.shoppingCart;
    },
    total() {
      let totalAmount = this.shoppingCart.reduce(
        (sum, value) => parseFloat(sum) + value.price * value.quantity,
        0
      );
      return totalAmount;
    },
  },
  methods: {
    goToCheckout() {
      if (this.shoppingCart.length === 0) {
        this.$notify({
          group: "app",
          type: "warn",
          title: "Agrega productos",
          text: "No tienes productos en el carrito",
        });
        return;
      }
      document.getElementById("shoppingCart__btnClose").click();
      this.$router.push("/checkout");
    },
  },
  filters: {
    titleCut(text) {
      if (text && text.length > 20) {
        return text.substr(0, 20) + "...";
      }
      return text;
    },
    currency(number) {
      let numberFormated = number;
      numberFormated = numberFormated.toLocaleString("de-DE", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return numberFormated;
    },
  },
};
</script>

<style>
#shoppingCart .simplebar-mask {
  display: none;
}
</style>
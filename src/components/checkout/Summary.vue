<template>
  <div class="col-lg-4 sidebar bg-secondary pt-5 ps-lg-4 pb-md-2">
    <div class="ps-lg-4 mb-3 p-5 card">
      <h2 class="h4 pb-3">Tu carrito</h2>
      <div
        class="d-flex justify-content-between mb-3"
        v-for="item in shoppingCart"
        :key="item.id"
        :data="item"
      >
        <span class="h6 mb-0"
          >{{ item.name | titleCut }} <small>x{{ item.quantity }}</small> </span
        ><span class="text-nav"
          >$ {{ (item.quantity * item.price) | currency }}</span
        >
      </div>
      <hr />
      <div class="d-flex justify-content-between mb-3">
        <span class="h6 mb-0">Subtotal:</span
        ><span class="text-nav">$ {{ subTotal | currency }}</span>
      </div>
      <div class="d-flex justify-content-between mb-3">
        <span class="h6 mb-0">Envío:</span
        ><span class="text-nav">$ {{ shipping | currency }}</span>
      </div>
      <div class="d-flex justify-content-between mb-3">
        <span class="h6 mb-0">Total:</span
        ><span class="h6 mb-0">$ {{ total | currency }}</span>
      </div>
      <button
        @click="goToPay"
        v-if="showBtn"
        class="btn btn-primary d-block w-100"
        type="submit"
        :disabled="shoppingCart.length === 0"
      >
        Pagar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  data() {
    return {
      shipping: 10000,
      showBtn: false,
    };
  },
  computed: {
    shoppingCart() {
      return this.$store.getters.shoppingCart;
    },
    subTotal() {
      let totalAmount = this.shoppingCart.reduce(
        (sum, value) => sum + value.price * value.quantity,
        0
      );
      return totalAmount;
    },
    total() {
      let totalAmount = this.shoppingCart.reduce(
        (sum, value) => sum + value.price * value.quantity,
        0
      );
      totalAmount = totalAmount + this.shipping;
      return totalAmount;
    },
  },
  methods: {
    goToPay() {
      this.$router.push("/checkout");
    },
    showBtnPay() {
      const route = this.$route.path;
      if (route === "/cart") {
        this.showBtn = true;
      }
    },
  },
  mounted() {
    this.showBtnPay();
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
</style>
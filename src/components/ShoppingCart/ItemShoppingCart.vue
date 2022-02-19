<template>
  <div class="d-flex align-items-center mb-3">
    <a class="d-block flex-shrink-0" href="shop-single.html"
      ><img class="rounded" :src="data.photo" alt="Product" width="60"
    /></a>
    <div class="w-100 ps-2 ms-1">
      <div class="d-flex align-items-center justify-content-between">
        <div class="me-3">
          <h4 class="nav-heading fs-md mb-1">
            <a class="fw-medium" href="shop-single.html">{{
              data.name | titleCut
            }}</a>
          </h4>
          <div class="d-flex align-items-center fs-sm">
            <span class="me-2">$ {{ totalItem | currency }}</span
            ><span class="me-2">x</span>
            <input
              class="form-control form-control-sm px-2"
              type="number"
              style="max-width: 3.5rem"
              min="1"
              :max="data.stock"
              :value="data.quantity"
              @change="handleChangeValue($event)"
            />
          </div>
        </div>
        <div class="ps-3 border-start">
          <a
            class="d-block text-danger text-decoration-none fs-xl"
            @click="handleDeleteItem(data.id)"
            data-bs-toggle="tooltip"
            title="Eliminar"
            ><i class="fas fa-trash"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemShoppingCart",
  props: {
    data: {},
  },
  computed: {
    totalItem() {
      let value = parseFloat(this.data.price * this.data.quantity);
      return value;
    },
  },
  methods: {
    handleChangeValue(e) {
      let product = {
        id: this.data.id,
        quantity: e.target.value,
      };
      this.$store.dispatch("changeQuantityProduct", product);
    },
    handleDeleteItem(id) {
      this.$store.dispatch("deleteProduct", id).then((e) => {
        this.$notify({
          group: "app",
          type: "success",
          title: "Eliminado",
          text: "Producto eliminado del carrito",
        });
      });
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
</style>
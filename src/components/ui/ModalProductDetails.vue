<template>
  <b-modal
    v-model="modalProduct"
    size="md"
    centered
    hide-footer
    hide-header
    @hide="closeModal"
    content-class="modalContent"
    body-class="modalBody"
  >
    <div>
      <div class="modalProduct__header">
        <h3>{{ product.name }}</h3>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <img :src="product.photo" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <p>Codigo: {{ product.code }}</p>
          <p>Precio: {{ product.price }}</p>
          <div class="row mb-2">
            <div class="col-6 d-flex align-items-center">
              <p class="mb-0">Cantidad</p>
            </div>
            <div class="col-6">
              <input
                type="number"
                class="form-control productCard__input"
                min="1"
                :max="product.stock"
                v-model="quantity"
              />
            </div>
          </div>
          <p>Subtotal: $ {{ subTotal }}</p>
        </div>
      </div>
      <h4>Descripcion</h4>
      <p>
        {{ product.description }}
      </p>
      <div class="row">
        <div class="d-flex justify-content-between align-items-center">
          <a @click="closeModal()" class="d-block">Seguir comprando</a>
          <button class="btn btn-primary" @click="addProductToCart(product)">
            Agregar al carro
          </button>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "ModalProductDetails",
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    modalProduct() {
      return this.$store.getters.modalProduct;
    },
    product() {
      return this.$store.getters.detailProduct;
    },
    subTotal() {
      let value = this.product.price * this.quantity;
      return value;
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch("showModalProductDetails", false);
    },
    addProductToCart(product) {
      if (product.stock === 0) {
        this.$notify({
          group: "app",
          type: "warn",
          title: "Lo sentimos",
          text: "No tenemos disponible el producto",
        });
        return;
      }
      product.quantity = parseInt(this.quantity);
      this.$store.dispatch("addProduct", product).then((e) => {
        if (e) {
          this.$notify({
            group: "app",
            type: "success",
            title: "Agregado",
            text: "Producto agregado al carrito",
          });
        } else {
          this.$notify({
            group: "app",
            type: "warn",
            title: "Ya lo tienes",
            text: "Tienes este producto en tu carrito",
          });
        }
      });
      this.closeModal();
    },
  },
};
</script>

<style>
.modal-backdrop {
  background: rgba(0, 0, 0, 0.541) !important;
}
.modalContent {
  background: none;
  width: 100%;
  align-items: center;
  border: none;
}
.modalBody {
  background: #fafafa !important;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 8px;
  width: 100%;
}
</style>
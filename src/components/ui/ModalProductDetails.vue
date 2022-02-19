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
    <div v-if="product">
      <div class="modalProduct__header">
        <h3>{{ product.name }}</h3>
      </div>
      <hr />
      <div class="row mb-3">
        <div class="col-md-6">
          <img :src="product.photo" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <p><strong>Codigo:</strong> {{ product.code }}</p>
          <p><strong>Precio:</strong> $ {{ product.price | currency }}</p>
          <div class="row mb-3">
            <div class="col-6 d-flex align-items-center">
              <p class="mb-0"><strong>Cantidad:</strong></p>
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
          <p><strong>Subtotal:</strong> $ {{ subTotal | currency }}</p>
          <button
            class="btn btn-primary btn-sm"
            @click="addProductToCart(product)"
          >
            Agregar al carro
          </button>
        </div>
      </div>
      <h4>Descripción</h4>
      <p>
        {{ product.description }}
      </p>
      <div class="row">
        <div class="d-flex justify-content-between align-items-center">
          <a @click="closeModal()" class="d-block modalProduct__keep"
            >Seguir comprando</a
          >
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
  filters: {
    currency(number) {
      let numberFormated = number;
      numberFormated = numberFormated.toLocaleString("de-DE", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return numberFormated;
    },
  },
  watch: {
    product() {
      this.quantity = 1;
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
.modalProduct__keep {
  cursor: pointer;
}
</style>
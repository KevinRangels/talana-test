<template>
  <div class="col-md-4 col-sm-6 mb-grid-gutter">
    <div class="card card-product card-hover">
      <span
        class="badge badge-floating badge-pill bg-success"
        v-if="data.stock > 0"
        >Disponible</span
      >
      <span class="badge badge-floating badge-pill bg-danger" v-else
        >Sin Stock</span
      >
      <a class="card-img-top" href="#">
        <img :src="data.photo" alt="Product thumbnail" />
      </a>
      <div class="card-body">
        <a class="meta-link fs-xs mb-1" href="#">{{ data.category.name }}</a>
        <h3 class="fs-md fw-medium mb-2">
          <a class="meta-link" href="#">{{ data.name | titleCut }}</a>
        </h3>
        <span class="text-heading fw-semibold">$ {{ data.price }}</span>
      </div>
      <div class="card-footer">
        <div class="star-rating mt-n1">
          <star-rating
            :read-only="true"
            :show-rating="false"
            :max-rating="5.0"
            :increment="0.5"
            :star-size="16"
            :v-model="3"
            :rounded-corners="true"
            :border-width="2"
            :active-color="activeStar"
            :padding="3"
            :border-color="borderStart"
            :active-border-color="starBorder"
            :inactive-color="starInactive"
          />
        </div>
        <div class="d-flex align-items-center">
          <input
            type="number"
            class="form-control productCard__input"
            min="1"
            value="1"
          />
          <span class="btn-divider"></span>
          <a class="btn-addtocart">
            <i class="fas fa-shopping-cart"></i>
            <span class="btn-tooltip">Al Carrito</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "ProductCard",
  props: {
    data: {},
  },
  components: {
    StarRating,
  },
  data() {
    return {
      favorive: false,
    };
  },
  methods: {},
  computed: {
    borderStart() {
      return "#d8d8d8";
    },
    activeStar() {
      return "#FFAF19";
    },
    starBorder() {
      return "#d8d8d8";
    },
    starInactive() {
      return "#D4D4D4";
    },
  },
  filters: {
    titleCut(text) {
      if (text && text.length > 20) {
        return text.substr(0, 30) + "...";
      }
      return text;
    },
  },
};
</script>
<style lang="sass" scoped>
.card-img-top img
    max-height: 250px
    min-height: 250px
    padding: 30px
.fa-shopping-cart
    cursor: pointer
.favorie__active
    color: red
.fa-heart
    cursor: pointer
.productCard__input
    width: 50px
    height: 40px
    padding: 0
    padding-left: 20px
</style>
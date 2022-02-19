<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 content py-4">
        <h1 class="mb-3 pb-4 text-start">Checkout</h1>
        <FormTDC />
      </div>
      <Summary />
    </div>
    <ModalTransaction />
  </div>
</template>

<script>
import FormTDC from "@/components/checkout/FormTDC.vue";
import Summary from "@/components/checkout/Summary.vue";
import ModalTransaction from "@/components/checkout/ModalTransaction.vue";
export default {
  name: "Checkout",
  components: {
    FormTDC,
    Summary,
    ModalTransaction,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style lang="sass" scoped>
</style>
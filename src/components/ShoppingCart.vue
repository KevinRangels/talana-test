<template>
  <div class="offcanvas offcanvas-end" id="shoppingCart">
    <div class="offcanvas-header navbar-shadow px-4 mb-2">
      <h5 class="mt-1 mb-0">Your cart</h5>
      <button
        class="btn-close lead"
        type="button"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body p-4" data-simplebar>
      <div class="d-flex align-items-center mb-3">
        <a class="d-block flex-shrink-0" href="shop-single.html"
          ><img
            class="rounded"
            src="img/demo/shop-homepage/thumbnails/05.jpg"
            alt="Product"
            width="60"
        /></a>
        <div class="w-100 ps-2 ms-1">
          <div class="d-flex align-items-center justify-content-between">
            <div class="me-3">
              <h4 class="nav-heading fs-md mb-1">
                <a class="fw-medium" href="shop-single.html"
                  >Smart Watch Series 5</a
                >
              </h4>
              <div class="d-flex align-items-center fs-sm">
                <span class="me-2">$364.99</span><span class="me-2">x</span>
                <input
                  class="form-control form-control-sm px-2"
                  type="number"
                  style="max-width: 3.5rem"
                  min="1"
                  value="1"
                />
              </div>
            </div>
            <div class="ps-3 border-start">
              <a
                class="d-block text-danger text-decoration-none fs-xl"
                href="#"
                data-bs-toggle="tooltip"
                title="Remove"
                ><i class="ai-x-circle"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center mb-3">
        <a class="d-block flex-shrink-0" href="shop-single.html"
          ><img
            class="rounded"
            src="img/demo/shop-homepage/thumbnails/02.jpg"
            alt="Product"
            width="60"
        /></a>
        <div class="w-100 ps-2 ms-1">
          <div class="d-flex align-items-center justify-content-between">
            <div class="me-3">
              <h4 class="nav-heading fs-md mb-1">
                <a class="fw-medium" href="shop-single.html"
                  >Running Sneakers, Collection</a
                >
              </h4>
              <div class="d-flex align-items-center fs-sm">
                <span class="me-2">$145.00</span><span class="me-2">x</span>
                <input
                  class="form-control form-control-sm px-2"
                  type="number"
                  style="max-width: 3.5rem"
                  min="1"
                  value="1"
                />
              </div>
            </div>
            <div class="ps-3 border-start">
              <a
                class="d-block text-danger text-decoration-none fs-xl"
                href="#"
                data-bs-toggle="tooltip"
                title="Remove"
                ><i class="ai-x-circle"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center mb-3">
        <a class="d-block flex-shrink-0" href="shop-single.html"
          ><img
            class="rounded"
            src="img/demo/shop-homepage/thumbnails/06.jpg"
            alt="Product"
            width="60"
        /></a>
        <div class="w-100 ps-2 ms-1">
          <div class="d-flex align-items-center justify-content-between">
            <div class="me-3">
              <h4 class="nav-heading fs-md mb-1">
                <a class="fw-medium" href="shop-single.html"
                  >Wireless Bluetooth Headset</a
                >
              </h4>
              <div class="d-flex align-items-center fs-sm">
                <span class="me-2">$258.00</span><span class="me-2">x</span>
                <input
                  class="form-control form-control-sm px-2"
                  type="number"
                  style="max-width: 3.5rem"
                  min="1"
                  value="1"
                />
              </div>
            </div>
            <div class="ps-3 border-start">
              <a
                class="d-block text-danger text-decoration-none fs-xl"
                href="#"
                data-bs-toggle="tooltip"
                title="Remove"
                ><i class="ai-x-circle"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="offcanvas-footer d-block border-top px-4 mb-2">
      <div class="d-flex justify-content-between mb-4">
        <span>Total:</span><span class="h6 mb-0">$776.99</span>
      </div>
      <a class="btn btn-primary btn-sm d-block w-100" href="checkout.html"
        ><i class="ai-credit-card fs-base me-2"></i>Checkout</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
};
</script>

<style>
</style>
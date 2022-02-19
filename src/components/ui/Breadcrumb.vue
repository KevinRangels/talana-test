<template>
  <nav aria-label="breadcrumb">
    <ol class="py-1 my-2 breadcrumb">
      <li class="breadcrumb-item">
        <a href="https://talana.com/es/" target="_blank">Inicio</a>
      </li>
      <div class="mx-2">/</div>
      <li class="breadcrumb-item active" aria-current="page">Tienda</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumb",
};
</script>

<style>
.breadcrumb-item + .breadcrumb-item::before {
  content: none;
}
</style>
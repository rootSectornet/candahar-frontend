<script>

export default {
  data() {
    return {
      isMenuCondensed: false,
    };
  },
  methods: {
  }
};
</script>

<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="white">
    <b-navbar-brand href="/">
      <img src="@/assets/images/companies/logo.jpg" alt="Kitten">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
        <template v-slot:default="{ expanded }">
          <i v-if="expanded" class="fas fa-times"></i>
          <i v-else class="fa fa-fw fa-bars"></i>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item active href="/">Berita</b-nav-item>
        <b-nav-item href="/tentang-kami">Tentang Kami</b-nav-item>
        <b-nav-item href="#">Kontak</b-nav-item>
        <b-nav-item href="#">Produk Kami</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- App Search-->
        <form class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input type="text" class="form-control" placeholder="Search..." />
            <span class="bx bx-search-alt"></span>
          </div>
        </form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

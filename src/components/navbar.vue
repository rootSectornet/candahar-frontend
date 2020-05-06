<script>

export default {
  data() {
    return {
      isMenuCondensed: false
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
      <img src="https://instagram.fcgk1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/69560589_382664182420809_568466125948452864_n.jpg?_nc_ht=instagram.fcgk1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Ktdp0eNMMKgAX_Myk-G&oh=15e404df5ca5623dbd9adb93cc205810&oe=5EB96C7E" alt="Kitten">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

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

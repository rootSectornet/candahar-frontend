<script>

export default {
  data() {
    return {
      mainProps: { blank: false, blankColor: '#777',  width: 100, height: 70, class: 'm1' }
    };
  },
  methods: {
  }
};
</script>

<template>
    <div class="card">
        <div class="card-body">
        <h1 class="card-title text-primary">Berita Menarik Lainnya</h1>
        <p class="card-title-desc">Beberapa Menarik Lainnya.</p>
        <div class="my-4" v-for="item in 8" :key="item">
            <div class="d-flex mb-2">
            <div class="d-flex flex-column px-1">
                <router-link tag="a" :to="{name:'detail',params:{slug:'robot-gantikan'}}" class="card-title px-1 text-dark">
                  Robot Gantikan Acara Kelulusan Wisuda Di Jepang
                </router-link>
                <p class="text-muted px-1 my-0">April 10, 2020</p>
            </div>
            <b-img v-bind="mainProps"  src="https://picsum.photos/1024/480/?image=58" rounded alt="Rounded image"></b-img>
            </div>
        </div>
        </div>
    </div>
</template>

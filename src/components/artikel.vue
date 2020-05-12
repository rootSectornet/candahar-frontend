<script>

export default {
  data() {
    return {
      post :[],
      mainProps: { blank: false, blankColor: '#777', width: 300, height: 250, class: 'm1' }
    };
  },
  created(){
      this.loadData();
  },
  methods: {
      loadData(){
        this.axios.get("http://localhost:8000/api/post").then(response => {
        this.post = response.data;
      })
    }
  }
};
</script>

<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4 class="font-size-24 text-primary font-poppins">Berita Terbaru</h4>
                <p class="card-title-desc">Beberapa berita terbaru seputar teknologi informasi.</p>
                <hr>
                <div class="my-3 d-flex" v-for="n in 6" :key="n">
                    <div class="d-flex flex-column pr-4">
                        <a href="/detail" class="mb-2 text-primary"><h3 class="font-poppins">Robot Gantikan Acara Kelulusan Wisuda Di Jepang</h3></a>
                        <p class="text-muted artikel-indent mb-4 font-size-16 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum at voluptate vel. Non porro, autem sequi vero obcaecati minima ut magnam repellendus voluptatibus, quaerat veritatis enim beatae similique mollitia.
                        </p>
                        <div class="d-flex">
                            <p class="text-muted pr-2 font-size-14">
                                <i class="far fa-clock"></i>
                                April 10, 2020
                            </p>
                            |
                            <a href="javascript:void(0);" class="d-flex text-primary px-2">
                                <i class="fas fa-comments"></i>
                                <p class="text-muted pl-1">3</p>
                            </a>
                        </div>
                        <div class="d-flex">  
                            <b-button variant="primary" size="sm">Baca Selengkapnya <i class="fas fa-arrow-right ml-1"></i> </b-button>
                        </div>
                    </div>
                    <div class="ml-auto">
                        <b-img v-bind="mainProps"  src="https://picsum.photos/1024/480/?image=58" rounded alt="Rounded image"></b-img>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center mt-4 pt-4">
                    <b-button variant="primary" pill size="md">Lihat Selanjutnya  </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

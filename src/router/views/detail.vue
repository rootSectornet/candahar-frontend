<script>
import Layout from "../layouts/main";
import Related from "@/components/related";
import Kategori from "@/components/category";
import appConfig from "@/app.config";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Berita",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout,Related,Kategori },
  data() {
    return {
      slug : this.$route.params.slug,
      detail_post : {},
      count_data : [],
      title: "Dashboard",
      mainProps: { blank: false, blankColor: '#777', width: 100, height: 70, class: 'm1' }
    };
  },
  
  mounted(){
    this.detailData();
  },
  methods : {
    detailData(){
        this.axios.get("http://localhost:8000/api/post/" + this.slug).then(response => {
        this.detail_post = response.data;
      })
    },
  }
};
</script>

<template>
  <Layout>
    <div class="row mt-4">
      <div class="col-md-8">
        <div class="card p-0">
          <div class="card-body p-0" v-for="data in detail_post" :key="data.id">
            <div class="my-3 d-flex flex-column">
                <div class="d-flex flex-column pr-4">
                    <h3 class="font-poppins mb-2 font-size-24">{{data.judul}}</h3>
                    <div class="d-flex">
                        <p class="text-muted pr-2 font-size-14">
                            <i class="far fa-clock"></i>
                            {{data.created_at}}
                        </p>
                        |
                        <a href="javascript:void(0);" class="d-flex text-primary px-2">
                            <i class="fas fa-comments"></i>
                            <p class="text-muted pl-1">3</p>
                        </a>
                    </div>
                    <b-img  src="https://picsum.photos/1024/480/?image=58" rounded alt="Rounded image"></b-img>

                    <p class="text-muted artikel-indent mb-4 mt-4 font-size-16 text-justify">
                        {{data.content}}
                    </p>
                    <div class="d-flex" v-for="tag in data.tag" :key="tag.id">
                        <a href="/detail" class="text-primary px-1 mx-1">{{tag.name}}</a>
                    </div>
                    <div class="d-flex">
                        <b-dropdown
                        class="d-none d-lg-inline-block noti-icon"
                        menu-class="dropdown-menu-lg"
                        toggle-class="header-item"
                        variant="black"
                        text="Share"
                        >
                        <template v-slot:button-content>
                            <div class="d-flex justify-content-center align-items-center">
                                <i class="bx bx-share-alt"></i> <span class="text-muted font-poppins">Share</span>
                            </div>
                        </template>

                        <div class="">
                            <div class="row no-gutters">
                            <div class="col">
                                <a class="dropdown-icon-item" href="javascript: void(0);">
                                <img src="@/assets/images/brands/github.png" alt="Github" />
                                <span>GitHub</span>
                                </a>
                            </div>
                            <div class="col">
                                <a class="dropdown-icon-item" href="javascript: void(0);">
                                <img src="@/assets/images/brands/bitbucket.png" alt="bitbucket" />
                                <span>Bitbucket</span>
                                </a>
                            </div>
                            <div class="col">
                                <a class="dropdown-icon-item" href="javascript: void(0);">
                                <img src="@/assets/images/brands/dribbble.png" alt="dribbble" />
                                <span>Dribbble</span>
                                </a>
                            </div>
                            </div>

                            <div class="row no-gutters">
                            <div class="col">
                                <a class="dropdown-icon-item" href="javascript: void(0);">
                                <img src="@/assets/images/brands/dropbox.png" alt="dropbox" />
                                <span>Dropbox</span>
                                </a>
                            </div>
                            <div class="col">
                                <a class="dropdown-icon-item" href="javascript: void(0);">
                                <img src="@/assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                                <span>Mail Chimp</span>
                                </a>
                            </div>
                            <div class="col">
                                <a class="dropdown-icon-item" href="javascript: void(0);">
                                <img src="@/assets/images/brands/slack.png" alt="slack" />
                                <span>Slack</span>
                                </a>
                            </div>
                            </div>
                        </div>
                        </b-dropdown>
                    </div>
                </div>
            </div>
            <h1 class="card-title mb-4" >{{data.comment.length}} Komentar</h1>
            <hr style="height:1px;background-color:#f9f9f9;">
            <div class="comment" v-for="comment in data.comment" :key="comment.id">
                <div class="d-flex justify-content-start align-content-center align-items-center">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <b-img src="https://picsum.photos/1024/480/?image=58" height="75px" width="75px"  rounded="circle" alt="Circle image"></b-img>
                    </div>
                    <div class="d-flex flex-column pl-4">
                        <p class="text-primary mb-0">Anonymous</p>
                        <p class="text-muted font-size-10 mt-0 mb-0">
                            <i class="far fa-clock"></i>
                            {{comment.created_at | formatDate}}
                        </p>
                        <p class="text-dark mt-1 artikel-indent">
                            {{comment.body}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center mt-1 pt-4">
                <b-button variant="primary" pill size="md">Lihat Selanjutnya  </b-button>
            </div>
            <div class="comment-form mt-4">
                <h1 class="card-title mb-4">Tinggalkan Komentar</h1>
                <div class="form-group">
                    <textarea class="form-control" rows="5" placeholder="Berikan Komentar Anda"></textarea> 
                </div>
                <b-button variant="primary" size="sm">Kirim Komentar</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card card-muted my-4">
          <div class="card-body">
            <h1 class="card-title text-primary">Berlangganan</h1>
            <p class="card-title-desc">Masukan Email anda untuk berlanggan berita berita terbaru.</p>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Email">
            </div>
            <b-button variant="dark" size="sm">Kirim</b-button>
          </div>
        </div>
        <Related/>
        <div class="my-4">
          <Kategori/>
        </div>
      </div>
    </div>
  </Layout>
</template>

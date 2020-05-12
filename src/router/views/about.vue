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
    title: "Tentang Kami",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout,Related,Kategori },
};
</script>

<template>
  <Layout>
    <div class="row mt-4">
      <div class="col-md-8">
          <div class="card my-4">
              <div class="card-body">
                <div class="transparent py-4 justify-content-center text-center">
                    <img src="@/assets/images/about.png" alt class="center" style="width:100%" />
                </div>              
                <h1 class="card-title text-dark mt-0">Tentang Kami</h1>
                <p class="text-muted">
                    Candahar.com adalah Media tempat kami berbagi berita dan informasi seputar teknologi dan juga Software House.
                </p>
                <p class="text-muted">
                    Menurut kami, kami adalah ini,
                </p>
                <p class="text-muted">
                     Sisanya anda simpulkan saja sendiri kami itu apa ?
                </p>
              </div>
          </div>
          <div class="card my-4">
              <div class="card-body">
                <h1 class="card-title text-dark mt-0">Jasa yang Kami Tawarkan.</h1>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card m-2 card-jasa">
                            <div class="card-body text-center">
                                <div class="mb-4">
                                    <img src="@/assets/images/it.png" class=" avatar-md img-jasa" alt="Informasi Teknologi"/>
                                </div>
                                <h5 class="font-size-15">
                                    Informasi Teknologi
                                </h5>
                                <p class="text-muted">
                                    Kami Berbagi berita dan juga informasi seputar teknologi informasi.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card m-2 card-jasa">
                            <div class="card-body text-center">
                                <div class="mb-4">
                                    <img src="@/assets/images/it.png" class=" avatar-md img-jasa" alt="Informasi Teknologi"/>
                                </div>
                                <h5 class="font-size-15">
                                    Web Development
                                </h5>
                                <p class="text-muted">
                                    Kami Berbagi berita dan juga informasi seputar teknologi informasi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
      <div class="col-md-4">
        <Related/>
        <div class="my-4">
          <Kategori/>
        </div>
      </div>
    </div>
  </Layout>
</template>

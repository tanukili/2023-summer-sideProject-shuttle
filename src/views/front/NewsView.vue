<template>
  <div class="bg-white">
    <BackgroundBanner :bannerImg="bannerImg"></BackgroundBanner>
    <div class="container block-spacing-sm">
      <nav>
        <ol class="breadcrumb fs-8 fs-lg-7">
          <li class="breadcrumb-item">
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">最新消息</li>
        </ol>
      </nav>
      <h2 class="title fs-3 fs-lg-2 mb-md-5">
        <span class="border-primary pb-2 pb-lg-3">最新消息</span>
      </h2>
      <div class="row gx-lg-5">
        <div class="nav-sticky col-md-3 mb-4 mb-md-0 fs-8 fs-lg-7">
          <nav class="nav nav-underline flex-md-column bg-primary-light rounded-1 p-3 p-lg-4">
            <a
              v-for="(name, index) in categories"
              :key="index"
              class="flex-fill text-center nav-link"
              :class="{ active: nowCategory === index }"
              href="#"
              @click.prevent="nowCategory = index"
            >
              {{ name }}
            </a>
          </nav>
        </div>
        <div class="col">
          <ul class="list-unstyled mb-0">
            <li class="card mb-3" v-for="article in articles" :key="article">
              <div class="row g-0">
                <div class="col-md-5 col-xxl-4">
                  <div class="pt-4 py-md-3 py-xxl-4 px-4 pe-md-0">
                    <img
                      :src="article.image"
                      class="border-dashed border-gray-500 rounded-2"
                      :alt="article.title"
                      style="height: 192px"
                    />
                  </div>
                </div>
                <div class="col-md-7 col-xxl-8">
                  <div class="card-body h-100 d-flex flex-column py-4 py-xxl-5">
                    <h3 class="card-title fs-6 fs-xl-5">{{ article.title }}</h3>
                    <ul class="list-unstyled mb-2">
                      <li
                        class="badge bg-light me-2 rounded-1"
                        v-for="tag in article.tag"
                        :key="tag"
                      >
                        {{ tag }}
                      </li>
                    </ul>
                    <p class="card-text flex-grow-1 fs-8 fs-lg-7">
                      {{ article.description }}
                    </p>
                    <router-link to="/new" class="text-muted align-self-end fs-8 fs-xl-7 mt-3">
                      閱讀全文
                      <i class="bi bi-caret-right-fill"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import getDataStore from '../../stores/getDataStore';

import BackgroundBanner from '../../components/BackgroundBanner.vue';

export default {
  components: { BackgroundBanner },

  data() {
    return {
      bannerImg: 'banner/banner-contact.png',
      categories: ['全部文章', '課程公告', '優惠活動', '展覽與競賽'],
      nowCategory: 0,
      articles: [],
    };
  },
  methods: {
    ...mapActions(getDataStore, ['getFontData']),
  },
  computed: {
    ...mapState(getDataStore, ['remoteData']),
  },
  watch: {
    nowCategory(newValue) {
      if (newValue) {
        this.articles = this.remoteData.filter((article) => article.category === newValue);
      } else {
        this.articles = [...this.remoteData];
      }
      window.scrollTo(0, 220);
    },
    remoteData(data) {
      this.articles = [...data];
    },
  },
  mounted() {
    this.getFontData('articles');
    // this.getFontData('article', '-NyAAeekgJAq6eEG8QkT');
  },
};
</script>

<style lang="scss">
.nav-sticky {
  position: sticky;
  z-index: 4;
  top: 110px;
  @media (min-width: 786px) {
    nav {
      position: sticky;
      top: 126px;
      @media (min-width: 992px) {
        top: 136px;
      }
    }
  }
}
</style>

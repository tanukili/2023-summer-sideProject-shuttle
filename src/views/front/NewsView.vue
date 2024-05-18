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
              class="flex-fill text-center nav-link"
              :class="{ active: nowClass === 'all' }"
              href="#"
              @click.prevent="nowClass = 'all'"
            >
              全部文章
            </a>
            <a
              class="flex-fill text-center nav-link"
              :class="{ active: nowClass === 'course' }"
              href="#"
              @click.prevent="nowClass = 'course'"
            >
              課程公告
            </a>
            <a
              class="flex-fill text-center nav-link"
              :class="{ active: nowClass === 'discount' }"
              @click.prevent="nowClass = 'discount'"
              href="#"
            >
              優惠活動
            </a>
            <a
              class="flex-fill text-center nav-link"
              :class="{ active: nowClass === 'exhibiton' }"
              @click.prevent="nowClass = 'exhibiton'"
              href="#"
            >
              展覽與競賽
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
                      :src="article.imgUrl"
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
                        v-for="tag in article.tags"
                        :key="tag"
                      >
                        {{ tag }}
                      </li>
                    </ul>
                    <p class="card-text flex-grow-1 fs-8 fs-lg-7">
                      {{ article.content }}
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
      <FrontPagination :pages="pagination" @updatePage="getProducts"></FrontPagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import useProductsStore from '../../stores/useProductsStore';

import BackgroundBanner from '../../components/BackgroundBanner.vue';
import FrontPagination from '../../components/FrontPagination.vue';

export default {
  components: { BackgroundBanner, FrontPagination },

  data() {
    return {
      bannerImg: 'banner/banner-contact.png',
      article: {
        title: '2024春季 織心好友揪團趣',
        tags: ['優惠活動', '現折優惠'],
        content: '活動期間（ 2023.06.01 至 2023.08.31 止）同一課程報名人數滿兩人，即可現打 85 折。',
        imgUrl: 'activity/2023-spring.jpg',
      },
      nowClass: 'all',
    };
  },
  methods: {
    ...mapActions(useProductsStore, ['getProducts']),
  },
  computed: {
    ...mapState(useProductsStore, ['products', 'pagination']),

    articles() {
      const arr = [];
      for (let i = 1; i < 4; i += 1) {
        arr.push(this.article);
      }
      return arr;
    },
  },
  mounted() {},
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

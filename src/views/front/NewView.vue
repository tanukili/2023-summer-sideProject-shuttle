<template>
  <div class="bg-white">
    <div class="container block-spacing-sm" style="max-width: 960px">
      <nav>
        <ol class="breadcrumb fs-8 fs-lg-7 mb-4">
          <li class="breadcrumb-item">
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/news">最新消息</RouterLink>
          </li>
          <li class="breadcrumb-item active" v-if="singleInfo" aria-current="page">
            {{ article.title }}
          </li>
        </ol>
      </nav>
      <div v-if="singleInfo" class="d-flex flex-column mx-auto">
        <h2 class="fs-3 fs-lg-2">{{ article.title }}</h2>
        <div class="d-flex align-items-center">
          <ul class="list-unstyled mb-0 fs-7 fs-md-6">
            <li class="badge bg-light me-2 rounded-1" v-for="tag in article.tag" :key="tag">
              {{ tag }}
            </li>
          </ul>
          <small class="ms-auto fs-md-8">{{ dateFormat }}</small>
        </div>
        <small class="text-end fs-md-8">作者：{{ article.author }}</small>
        <div class="row mb-4 mt-md-4">
          <div class="col-md-1">
            <small class="fs-5 d-flex align-items-center flex-md-column mb-2">
              <span class="write-md-lr fw-semibold fs-8 fs-md-7 fs-lg-6 my-md-3">分享文章</span>
              <a href="#" @click.prevent class="mx-2 mb-md-2">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" @click.prevent class="me-2 me-md-0 mb-md-1">
                <i class="bi bi-messenger"></i>
              </a>
              <a href="#" @click.prevent class="me-2 me-md-0 mb-md-1">
                <i class="bi bi-link-45deg"></i>
              </a>
              <a href="#" @click.prevent>
                <i class="bi bi-envelope-fill"></i>
              </a>
            </small>
          </div>
          <div class="col-md">
            <img
              :src="article.image"
              class="rounded-3"
              :alt="article.title"
              style="max-height: 340px"
            />
          </div>
        </div>
        <div v-html="article.content" class="article-style"></div>
        <RouterLink class="text-end fs-8 pt-5" to="/news">
          <span class="material-symbols-outlined icon-semibold me-1">undo</span>
          <span class="align-middle border-bottom">返回消息列表</span>
        </RouterLink>
      </div>
      <div v-else>資料取得中</div>
    </div>
  </div>
  <BackToTop />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import BackToTop from '@/components/BackToTop.vue';
import getDataStore from '@/stores/getDataStore';

export default {
  components: { BackToTop },
  data() {
    return {};
  },
  methods: {
    ...mapActions(getDataStore, ['getFontData']),
  },
  computed: {
    ...mapState(getDataStore, ['singleInfo']),
    article() {
      return this.singleInfo;
    },
    dateFormat() {
      const date = new Date(this.article.create_at);
      const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      const weekends = ['日', '一', '二', '三', '四', '五', '六'];
      return `${date.getFullYear()}年${months[date.getMonth()]}月${date.getDate()}日 週${
        weekends[date.getDay()]
      }`;
    },
  },
  mounted() {
    this.getFontData('article', this.$route.params.id);
  },
};
</script>

<style lang="scss">
.article-style {
  p {
    --base-fz: 14px;
    font-size: var(--base-fz);
    margin-bottom: 16px;
    text-indent: calc(var(--base-fz) * 2);
    line-height: 1.5;
  }
  h3 {
    font-size: 24px;
    text-align: center;
  }
  h4 {
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: 600;
  }
  @media (min-width: 768px) {
    p {
      --base-fz: 16px;
      line-height: 1.6;
    }
    h3 {
      font-size: 32px;
    }
    h4 {
      font-size: 24px;
    }
  }
}

@media (min-width: 768px) {
  .write-md-lr {
    writing-mode: vertical-lr;
  }
}
</style>

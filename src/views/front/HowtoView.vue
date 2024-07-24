<template>
  <div class="bg-white">
    <BackgroundBanner :bannerImg="bannerImg"></BackgroundBanner>
    <div class="block-spacing-sm pb-0">
      <nav class="container">
        <ol class="breadcrumb fs-8 fs-md-7">
          <li class="breadcrumb-item">
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">認識手織</li>
        </ol>
      </nav>
      <div class="container block-spacing-sm pt-0 fs-8 fs-md-7 fs-xl-6">
        <h2 class="title fs-3 fs-lg-2 mt-4 mb-4 mb-xl-5">
          <span class="border-primary pb-2 pb-lg-3">「編」與「織」</span>
        </h2>
        <p class="text-lg-center px-3 mb-4 mb-xl-5 lh-lg">
          編織，是一個日常中常見的詞彙，包含了兩種工藝類型。它們涉及各種技巧，簡單來說，可以依表現分成下列兩類。
        </p>
        <div class="row g-2 gx-lg-4">
          <div class="col-md">
            <div class="card">
              <img
                src="how-to/knitting.png"
                class="card-img rounded-2"
                style="max-height: 300px"
                alt="weaving"
              />
              <div
                class="card-img-overlay bottom-0 bg-dark bg-opacity-50 rounded-top-0"
                style="top: unset"
              >
                <h3 class="card-title mb-2 text-white">編</h3>
                <p class="card-text text-white">大多使用「一條」線材，經反覆勾纏製作而成。</p>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card">
              <img
                src="how-to/weaving.jpg"
                class="card-img rounded-2"
                alt="weaving"
                style="max-height: 300px"
              />
              <div
                class="card-img-overlay bottom-0 bg-dark bg-opacity-50 rounded-top-0"
                style="top: unset"
              >
                <h3 class="card-title mb-2 text-white">織</h3>
                <p class="card-text text-white">
                  使用「兩條」線材，垂直的為「經」，水平者的「緯」，經兩者交錯而成。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-primary-light">
        <div
          class="container block-spacing-sm d-flex flex-column align-items-center"
          style="max-width: 760px"
        >
          <h2 class="title fs-3 fs-lg-2 text-primary mb-4 mb-xl-5">
            <span class="border-primary pb-2 pb-lg-3">開始織布吧！</span>
          </h2>
          <div class="px-4 mb-4 mb-xl-5">
            <p class="fs-8 fs-lg-7 lh-lg mb-2">
              傳統上，織布是一件大工程。先別擔心，工具與織布技巧經歷現代化後，延伸出簡單輕鬆的織布方法。雖然會因應使用技術而有差別，但是基本的步驟大致相同，就讓我們來一窺究竟吧。
            </p>
            <small class="text-primary">
              友善提醒：下方部分圖片是由 AI
              繪圖工具生成（Midjourney），僅用來示意用，與實際情況有所落差。
            </small>
          </div>
          <ol class="list-unstyled">
            <li class="how-to-card card mb-4" v-for="(howTo, index) in howToData" :key="index">
              <div class="row g-0" :class="{ 'flex-row-reverse': index % 2 }">
                <div class="col-sm-5">
                  <img
                    :src="howTo.imgUrl"
                    class="rounded-top-2 border-dashed-b border-primary"
                    :alt="howTo.title"
                  />
                </div>
                <div class="col-sm">
                  <div class="card-body pb-4 d-sm-flex flex-column justify-content-center h-100">
                    <small class="font-order text-secondary me-3">0{{ index + 1 }}</small>
                    <h3
                      class="card-title fs-3 fs-lg-2 d-inline-block text-black mt-2 mt-xl-3 mb-xl-4"
                    >
                      {{ howTo.title }}
                    </h3>
                    <p class="fs-7 fs-lg-6 lh-lg">{{ howTo.content }}</p>
                  </div>
                </div>
              </div>
            </li>
          </ol>
          <RouterLink
            to="/products"
            class="btn btn-primary my-4 d-inline-block text-center"
            style="width: 280px"
          >
            立即上課
            <span class="icon-e icon-east"></span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundBanner from '../../components/BackgroundBanner.vue';

export default {
  components: { BackgroundBanner },
  data() {
    return {
      bannerImg: 'banner/banner-how-to.png',
      howToData: [
        {
          imgUrl: 'how-to/how-to-01.png',
          title: '事前規劃',
          content: '思考圖案花樣、成品尺寸等，並依設計圖回推，計算需要的經線長度與根數。',
        },
        {
          imgUrl: 'how-to/how-to-02.png',
          title: '整經與上機',
          content: '依需求整理出經線，再將經線固定在織布機的後方木軸上。',
        },
        {
          imgUrl: 'how-to/how-to-03.png',
          title: '穿綜',
          content: '將經線穿過綜片（提起經線用）後，固定在織布機另一端。',
        },
        {
          imgUrl: 'how-to/how-to-04.png',
          title: '織作',
          content:
            '把緯線纏好在梭子上，當分別提起綜片時，將梭子穿過交錯的經線。一來一往逐漸完成作品。',
        },
        {
          imgUrl: 'how-to/how-to-05.png',
          title: '收尾，完成！',
          content: '織布兩端作完收尾處理，就可以從織布機取下來，恭喜完成作品！',
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
.how-to-card {
  img {
    height: 220px;
    @media (min-width: 576px) {
      border-bottom: unset;
      height: 240px;
    }
    @media (min-width: 992px) {
      height: 320px;
    }
  }
  @media (min-width: 576px) {
    &:nth-child(2n + 1) {
      img {
        border-radius: 16px 0 0 16px !important;
        border-right: 2px dashed #595455;
      }
    }
    &:nth-child(2n) {
      img {
        border-radius: 0 16px 16px 0 !important;
        border-left: 2px dashed #595455;
      }
    }
  }
}
</style>

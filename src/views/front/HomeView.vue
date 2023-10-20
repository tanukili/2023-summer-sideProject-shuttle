<script>
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
  data() {
    return {
      // isLoading: false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
  },
  setup() {
    return {
      modules: [Autoplay, Navigation, Pagination],
    };
  },
  mounted() {
    // // 進入時觸發
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1200);
  },
};
</script>

<template>
  <!-- <LoadingOverlay v-model:active="isLoading">
    <div class="loadingio-spinner-pulse-1iwbsd99pb">
      <div class="ldio-dcvhkke5k">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingOverlay> -->
  <!-- banner -->
  <div
    class="bg-banner d-flex flex-column justify-content-center"
    style="height: 680px"
  >
    <div class="container">
      <div class="banner-content">
        <h1
          class="fs-2 fw-bold text-white pb-3"
        >
          一封真摯的邀請函<br />
          <span class="py-3 d-inline-block">
            給予手織
            <span class="select-icon align-bottom">
              <select
                class="form-select fs-5 fw-bold d-inline-block w-auto text-primary py-2"
                aria-label="Default select example"
              >
                <option selected>無經驗</option>
                <option value="beginner">初學者</option>
                <option value="amateur">愛好者</option>
                <option value="artist">創作者</option>
              </select>
            </span>
          </span>
          的你
        </h1>
        <button class="btn btn-secondary w-100 fs-5 py-3 mt-3" type="button">
          現在開啟
          <span class="material-symbols-outlined align-top ms-1">east</span>
        </button>
      </div>
    </div>
  </div>
  <!-- promotions -->
  <div class="bg-cricle overflow-hidden">
    <!-- content -->
    <div class="block-spacing container">
      <h2 class="title-style"><span>現正優惠</span></h2>
      <div class="row mt-5 pt-md-3">
        <div class="col-md-6" data-aos="zoom-in-up">
          <div class="promotions left img-mask card text-white mb-3 mb-md-0">
            <img
              src="../../assets/images/promotions01.jpg"
              class="card-img h-100"
              alt="promotions01"
            />
            <div
              class="card-img-overlay d-flex flex-column justify-content-between"
            >
              <div class="fw-bold">
                <h5 class="fs-3 mb-2">2023 夏季織心好友揪團趣</h5>
                <p class="card-text fs-4 lh-sm">兩人同行，現打 85 折</p>
              </div>
              <button
                class="btn btn-lg btn-white align-self-md-end"
                type="button"
              >
                瞭解更多
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div
            class="promotions right img-mask card text-white mb-3 mb-md-4"
            data-aos="zoom-in-up"
            data-aos-delay="500"
          >
            <img
              src="../../assets/images/promotions02.jpg"
              class="card-img h-100"
              alt="promotions02"
            />
            <div
              class="card-img-overlay d-flex flex-column justify-content-between"
            >
              <div class="fw-bold">
                <h5 class="fs-3 mb-2">秋季新色 課程預購中</h5>
                <p class="card-text fs-4 lh-sm">秋季課程改版，早鳥預購享優惠</p>
              </div>
              <button
                class="btn btn-lg btn-white align-self-md-end"
                type="button"
              >
                瞭解更多
              </button>
            </div>
          </div>
          <div
            class="promotions right img-mask card text-white"
            data-aos="zoom-in-up"
          >
            <img
              src="../../assets/images/promotions03.jpg"
              class="card-img h-100"
              alt="promotions03"
            />
            <div
              class="card-img-overlay d-flex flex-column justify-content-between"
            >
              <div class="fw-bold">
                <h5 class="fs-3 mb-2">新註冊會員 贈 50 元折價券</h5>
                <p class="card-text fs-4 lh-sm">新會員招募中，填寫推薦再加碼</p>
              </div>
              <button
                class="btn btn-lg btn-white align-self-md-end"
                type="button"
              >
                瞭解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- promotions-background -->
    <div class="w-100 position-absolute top-0 z-n1">
      <div class="bg-design">
        <div
          class="bg-white border border-2 border-dashed border-gray-500 d-none d-md-block animation-rotate"
          style="bottom: 2022px"
        ></div>
      </div>
    </div>
  </div>
  <!-- feature -->
  <div class="bg-img position-relative overflow-hidden">
    <!-- content -->
    <div class="block-spacing container d-flex flex-column align-items-center">
      <h2 class="title-style text-white">
        <span class="border-white">課程亮點</span>
      </h2>
      <div class="mt-5 pt-md-3 mx-lg-5 px-lg-3">
        <div
          class="card rounded-5 rounded-lg-7 p-md-4 mb-4"
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="d-md-flex m-lg-6">
            <img
              src="../../assets/images/feature01.jpg"
              class="rounded-top-5 rounded-md-6 border-gray-500 feature-img"
              alt="feature01"
            />
            <div
              class="d-flex flex-column justify-content-center ms-md-4 ms-xl-5"
            >
              <div class="pt-2 pb-3 px-3 p-md-0">
                <small class="big fw-bold lh-sm text-secondary">01</small>
                <h5
                  class="card-title fs-3 fs-lg-2 text-deep mt-2 mt-xl-3 mb-xl-4"
                >
                  從入門到應用
                </h5>
                <p class="card-text fw-medium">
                  完全沒接觸過織補的初學者，我們推薦一日課程，體驗從縣道面的樂趣；想要挑戰大型創作的學生，則可以參考落地織布機課程，獲得更全面、密集的學習。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card rounded-5 rounded-lg-7 p-md-4 mb-4"
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="d-md-flex flex-md-row-reverse m-lg-6">
            <img
              src="../../assets/images/feature02.jpg"
              class="rounded-top-5 rounded-md-6 border-gray-500 feature-img"
              alt="feature02"
            />
            <div
              class="d-flex flex-column justify-content-center me-md-4 me-xl-5"
            >
              <div class="pt-2 pb-3 px-3 p-md-0">
                <small class="big fw-bold lh-sm text-secondary">02</small>
                <h5
                  class="card-title fs-3 fs-lg-2 text-deep mt-2 mt-xl-3 mb-xl-4"
                >
                  免裝備報到
                </h5>
                <p class="card-text fw-medium">
                  基本器材及耗材由我們提供，不用擔心有沒有織布機，您只需要準備紙筆等文既即可，輕鬆無負擔。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card rounded-5 rounded-lg-7 p-md-4"
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="d-md-flex m-lg-6">
            <img
              src="../../assets/images/feature03.jpg"
              class="rounded-top-5 rounded-md-6 border-gray-500 feature-img"
              alt="feature03"
            />
            <div
              class="d-flex flex-column justify-content-center ms-md-4 ms-xl-5"
            >
              <div class="pt-2 pb-3 px-3 p-md-0">
                <small class="big fw-bold lh-sm text-secondary">03</small>
                <h5
                  class="card-title fs-3 fs-lg-2 text-deep mt-2 mt-xl-3 mb-xl-4"
                >
                  多樣化輔助課程
                </h5>
                <p class="card-text fw-medium">
                  用膩了現成素材？我們另有準備輔助課程，包含異材質、進階織紋、染色、布料加工等主題。您可以依照需求選購，增添創作靈感。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="btn btn-white fs-6 mt-5"
        type="button"
        style="width: 280px"
      >
        開始上課
        <span class="material-symbols-outlined align-top fs-5 ms-1">east</span>
      </button>
    </div>
    <!-- feature-background -->
    <div
      class="bg-oval d-none d-xl-block"
      style="top: 40px; left: 8.3%"
      data-aos="fade-left"
    ></div>
    <div
      class="bg-oval sec d-none d-xl-block"
      style="top: 890px; right: 8.3%"
      data-aos="fade-right"
      data-aos-delay="300"
    ></div>
  </div>
  <!-- reviews -->
  <div class="bg-cricle overflow-hidden">
    <!-- content -->
    <div class="block-spacing container">
      <h2 class="title-style">
        <span>織友推薦</span>
      </h2>
      <swiper
        class="reviews-swiper mt-5 pt-3"
        data-aos="fade-left"
        data-aos-duration="1000"
        :slides-per-view="1"
        :spaceBetween="24"
        :pagination="{ clickable: true }"
        :breakpoints="{
          '768': {
            slidesPerView: 2,
          },
          '992': {
            slidesPerView: 3,
          },
          '1200': {
            slidesPerView: 3,
            spaceBetween: 36,
          },
          '1400': {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }"
        :modules="modules"
        @swiper="onSwiper"
      >
        <swiper-slide>
          <div class="card bg-white fs-6 fw-medium position-relative pt-4">
            <div class="d-flex pb-3 mx-4">
              <img
                src="../../assets/images/avatar01.png"
                alt="avatar01"
                class="rounded-circle me-3"
                style="max-width: 64px; max-height: 64px"
              />
              <div>
                <small class="fs-7"
                  >Ada Wang<br /><span class="fs-6">桌上型織布機</span></small
                >
              </div>
            </div>
            <div class="border-top-base border-secondary py-4 mx-4 flex-grow-1">
              <p class="card-text">
                原本以為織布機製做很複雜，但講師教學方式十分簡單明瞭，而且十分有耐心，五星推薦！
              </p>
            </div>
            <div class="card-footer py-4">
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
            </div>
          </div>
          <div class="reviews-card bg-pale rounded-5 position-absolute"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="card bg-white fs-6 fw-medium position-relative pt-4">
            <div class="d-flex pb-3 mx-4">
              <img
                src="../../assets/images/avatar02.png"
                alt="avatar02"
                class="rounded-circle me-3"
                style="max-width: 64px; max-height: 64px"
              />
              <div>
                <small class="fs-7"
                  >Miyako Kajiro<br /><span class="fs-6"
                    >一日綴織體驗</span
                  ></small
                >
              </div>
            </div>
            <div class="border-top-base border-secondary py-4 mx-4 flex-grow-1">
              <p class="card-text">
                第一次接觸織布，比想像中還有趣。這次一日課程只能做小作品，下次想挑戰進階課程。
              </p>
            </div>
            <div class="card-footer py-4">
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
            </div>
          </div>
          <div class="reviews-card bg-pale rounded-5 position-absolute"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="card bg-white fs-6 fw-medium position-relative pt-4">
            <div class="d-flex pb-3 mx-4">
              <img
                src="../../assets/images/avatar03.png"
                alt="avatar03"
                class="rounded-circle me-3"
                style="max-width: 64px; max-height: 64px"
              />
              <div>
                <small class="fs-7"
                  >Li-Fang Gong<br /><span class="fs-6">織帶機</span></small
                >
              </div>
            </div>
            <div class="border-top-base border-secondary py-4 mx-4 flex-grow-1">
              <p class="card-text">
                跟女兒一起報名課程，互相幫對方選色跟圖案，好有成就感。
              </p>
            </div>
            <div class="card-footer py-4">
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
            </div>
          </div>
          <div class="reviews-card bg-pale rounded-5 position-absolute"></div>
        </swiper-slide>
        <swiper-slide class="d-none d-md-block">
          <div class="card bg-white fs-6 fw-medium position-relative pt-4">
            <div class="d-flex pb-3 mx-4">
              <img
                src="../../assets/images/avatar04.png"
                alt="avatar04"
                class="rounded-circle me-3"
                style="max-width: 64px; max-height: 64px"
              />
              <div>
                <small class="fs-7"
                  >Guertena<br /><span class="fs-6">織紋設計</span></small
                >
              </div>
            </div>
            <div class="border-top-base border-secondary py-4 mx-4 flex-grow-1">
              <p class="card-text">
                以往課程都是基礎的平織紋，沒想到織紋能有這麼多變化，再加上配色，有無限組合。
              </p>
            </div>
            <div class="card-footer py-4">
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
            </div>
          </div>
          <div class="reviews-card bg-pale rounded-5 position-absolute"></div>
        </swiper-slide>
        <swiper-slide class="d-none d-md-block">
          <div class="card bg-white fs-6 fw-medium position-relative pt-4">
            <div class="d-flex pb-3 mx-4">
              <img
                src="../../assets/images/avatar01.png"
                alt="avatar01"
                class="rounded-circle me-3"
                style="max-width: 64px; max-height: 64px"
              />
              <div>
                <small class="fs-7"
                  >Ada Wang<br /><span class="fs-6">桌上型織布機</span></small
                >
              </div>
            </div>
            <div class="border-top-base border-secondary py-4 mx-4 flex-grow-1">
              <p class="card-text">
                原本以為織布機製做很複雜，但講師教學方式十分簡單明瞭，而且十分有耐心，五星推薦！
              </p>
            </div>
            <div class="card-footer py-4">
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
            </div>
          </div>
          <div class="reviews-card bg-pale rounded-5 position-absolute"></div>
        </swiper-slide>
        <swiper-slide class="d-none d-xl-block">
          <div class="card bg-white fs-6 fw-medium position-relative pt-4">
            <div class="d-flex pb-3 mx-4">
              <img
                src="../../assets/images/avatar02.png"
                alt="avatar02"
                class="rounded-circle me-3"
                style="max-width: 64px; max-height: 64px"
              />
              <div>
                <small class="fs-7"
                  >Miyako Kajiro<br /><span class="fs-6"
                    >一日綴織體驗</span
                  ></small
                >
              </div>
            </div>
            <div
              class="border-top border-2 border-dashed border-secondary py-4 mx-4 flex-grow-1"
            >
              <p class="card-text">
                第一次接觸織布，比想像中還有趣。這次一日課程只能做小作品，下次想挑戰進階課程。
              </p>
            </div>
            <div class="card-footer py-4">
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
              <span class="material-symbols-outlined icon-fill">star</span>
            </div>
          </div>
          <div class="reviews-card bg-pale rounded-5 position-absolute"></div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- reviews-background -->
    <div class="w-100 position-absolute top-0 z-n1">
      <div class="bg-design" data-aos="fade-up" data-aos-duration="2000">
        <div class="bg-secondary d-none d-md-block" style="top: 40px"></div>
      </div>
    </div>
  </div>
  <!-- popular -->
  <div class="bg-secondary position-relative overflow-hidden">
    <!-- content -->
    <div class="block-spacing container d-flex flex-column">
      <h2 class="title-style">
        <span>本季熱門</span>
      </h2>
      <div class="swiper-box position-relative">
        <swiper
          class="mt-5 mobile-style popular-swiper"
          :spaceBetween="0"
          :noSwiping="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            '768': {
              slidesPerView: 2,
              spaceBetween: 20,
              noSwiping: false,
            },
            '992': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '1200': {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            '1400': {
              slidesPerView: 3,
              spaceBetween: 48,
            },
          }"
          :modules="modules"
          @swiper="onSwiper"
        >
          <swiper-slide>
            <div class="card w-100 rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product01.jpg"
                  alt="product01"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1">
                <h3 class="card-title fs-5">一日綴織體驗</h3>
                <span class="badge bg-light">入門</span>
                <span class="badge bg-light">綴織</span>
                <span class="badge bg-light">一日</span>
                <span class="badge bg-light">入門</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-lg-row align-items-lg-end pb-3"
              >
                <small class="d-inline-block fs-4 text-deep mb-3 mb-lg-0"
                  >$850</small
                >
                <button
                  class="btn btn-primary fs-md-7 fs-xl-6 ms-lg-auto"
                  style="button"
                >
                  立即購買
                </button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card w-100 rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product02.jpg"
                  alt="product02"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <span
                  class="badge bg-danger text-white fs-6 py-2 px-6 position-absolute start-0"
                  style="top: 24px"
                  >早鳥優惠</span
                >
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1">
                <h3 class="card-title fs-5">暖色羊毛圍巾</h3>
                <span class="badge bg-light">簡易織布機</span>
                <span class="badge bg-light">兩日</span>
                <span class="badge bg-light">秋冬</span>
                <span class="badge bg-light">Top 3</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-lg-row align-items-lg-end pb-3"
              >
                <small
                  class="d-flex align-items-center fs-4 text-danger mb-3 mb-lg-0"
                >
                  $1,800
                  <span
                    class="fs-6 text-gray-400 text-decoration-line-through ms-2"
                  >
                    $2,000</span
                  >
                </small>
                <button
                  class="btn btn-primary fs-md-7 fs-xl-6 ms-lg-auto"
                  style="button"
                >
                  立即購買
                </button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card w-100 rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product03.jpg"
                  alt="product03"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1">
                <h3 class="card-title fs-5">段染實驗營</h3>
                <span class="badge bg-light">進階</span>
                <span class="badge bg-light">輔助</span>
                <span class="badge bg-light">四日</span>
                <span class="badge bg-light">Top 3</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-lg-row align-items-lg-end pb-3"
              >
                <small class="d-inline-block fs-4 text-deep mb-3 mb-lg-0"
                  >$850</small
                >
                <button
                  class="btn btn-primary fs-md-7 fs-xl-6 ms-lg-auto"
                  style="button"
                >
                  立即購買
                </button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="d-none d-md-flex">
            <div class="card w-100 rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product01.jpg"
                  alt="product01"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1">
                <h3 class="card-title fs-5">一日綴織體驗</h3>
                <span class="badge bg-light">入門</span>
                <span class="badge bg-light">綴織</span>
                <span class="badge bg-light">一日</span>
                <span class="badge bg-light">入門</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-lg-row align-items-lg-end pb-3"
              >
                <small class="d-inline-block fs-4 text-deep mb-3 mb-lg-0"
                  >$850</small
                >
                <button
                  class="btn btn-primary fs-md-7 fs-xl-6 ms-lg-auto"
                  style="button"
                >
                  立即購買
                </button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="d-none d-md-flex">
            <div class="card w-100 rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product02.jpg"
                  alt="product02"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <span
                  class="badge bg-danger text-white fs-6 py-2 px-6 position-absolute start-0"
                  style="top: 24px"
                  >早鳥優惠</span
                >
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1">
                <h3 class="card-title fs-5">暖色羊毛圍巾</h3>
                <span class="badge bg-light">簡易織布機</span>
                <span class="badge bg-light">兩日</span>
                <span class="badge bg-light">秋冬</span>
                <span class="badge bg-light">Top 3</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-lg-row align-items-lg-end pb-3"
              >
                <small
                  class="d-flex align-items-center fs-4 text-danger mb-3 mb-lg-0"
                >
                  $1,800
                  <span
                    class="fs-6 text-gray-400 text-decoration-line-through ms-2"
                  >
                    $2,000</span
                  >
                </small>
                <button
                  class="btn btn-primary fs-md-7 fs-xl-6 ms-lg-auto"
                  style="button"
                >
                  立即購買
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev d-none d-lg-flex"></div>
        <div class="swiper-button-next d-none d-lg-flex"></div>
      </div>
      <button
        class="btn btn-white fs-6 z-1 mx-auto"
        type="button"
        style="width: 280px"
      >
        了解更多課程
        <span class="material-symbols-outlined align-top fs-5 ms-1">east</span>
      </button>
    </div>
    <!-- popular-packground -->
    <div
      class="bg-position bg-dashed-left border-primary d-none d-md-block start-0 z-0"
      style="width: 30%; height: 340px; top: 120px"
    ></div>
    <div
      class="bg-position bg-dashed-right border-primary d-none d-md-block end-0 z-0"
      style="width: 70%; height: 340px; top: 460px"
    ></div>
  </div>
</template>

<style>
.bg-banner {
  /* 加上半透明遮罩 */
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(../../assets/images/banner.jpg);
  /* padding: 235px 0 240px 0; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
/* 可優化 */
.banner-content {
  max-width: 432px;
  margin-left: 120px;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
}
/* promotions 圖片 */
.promotions {
  height: 300px !important;
}
@media (min-width: 768px) {
  .promotions.right {
    height: 288px !important;
  }
  .promotions.left {
    height: 600px !important;
  }
}
/* feature 圖片 */
.feature-img {
  width: 100%;
  height: 220px;
}
@media (min-width: 768px) {
  .feature-img {
    width: 50%;
    height: 240px;
    border: 2px dashed var(--bs-border-color) !important;
  }
}
@media (min-width: 1200px) {
  .feature-img {
    width: 43.8%;
    height: 360px;
  }
}

/* reviews 卡片 */
.reviews-card {
  width: 275px;
  height: 360px;
  transform: translate(1%, -100%) rotate(5deg);
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  z-index: -1;
}
/* popular swiper */
.popular-swiper {
  .card-body {
    margin-bottom: 0;
    @media (min-width: 768px) {
      margin-bottom: 49px;
    }
  }
}
</style>

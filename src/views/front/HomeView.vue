<template>
  <div class="home-banner d-flex flex-column justify-content-center" style="height: 680px">
    <div class="container">
      <div class="w-md-50 w-xl-33 ms-xl-8">
        <h1 class="fs-2 text-white" style="line-height: 64px">
          一封真摯的邀請函
          <br />
          給予手織
          <select
            v-model="nowCategory"
            class="form-select fs-5 fw-bold d-inline-block text-primary align-text-bottom"
            style="max-width: 160px"
          >
            <option
              v-for="(name, index) in categories"
              :value="index"
              :key="index"
              :hidden="!index"
            >
              {{ name }}
            </option>
          </select>
          的你
        </h1>
        <RouterLink
          to="/products"
          class="btn btn-primary-light w-100 fs-5 py-3 mt-3"
          @click="setProductCategory"
        >
          現在開啟
          <span class="icon-e icon-east"></span>
        </RouterLink>
      </div>
    </div>
  </div>
  <!-- promotions -->
  <div class="bg-cricle overflow-hidden">
    <!-- content -->
    <div class="block-spacing container">
      <h2 class="title fs-1"><span>現正優惠</span></h2>
      <div class="promotions row pt-5">
        <div class="col-md-6" data-aos="zoom-in-up">
          <div class="card-mask card text-white mb-3 mb-md-0">
            <img
              :src="discounts.first.imgUrl"
              class="card-img h-100"
              :alt="`promotions0${discounts.first.id}`"
            />
            <div class="card-img-overlay d-flex flex-column justify-content-between">
              <div>
                <h5 class="fs-3 mb-2">{{ discounts.first.title }}</h5>
                <h6 class="fs-4">{{ discounts.first.subtitle }}</h6>
              </div>
              <RouterLink
                to="/new/-NyAAeekgJAq6eEG8QkT"
                class="btn btn-lg btn-white align-self-md-end"
              >
                瞭解更多
              </RouterLink>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 d-md-flex flex-md-column justify-content-md-between"
          data-aos="zoom-in-up"
        >
          <div
            class="card-mask card text-white mb-3 mb-md-0"
            v-for="activity in discounts.other"
            :key="activity.id"
          >
            <img :src="activity.imgUrl" class="card-img h-100" :alt="`promotions0${activity.id}`" />
            <div class="card-img-overlay d-flex flex-column justify-content-between">
              <div>
                <h5 class="fs-3 mb-2">{{ activity.title }}</h5>
                <h6 class="fs-4">{{ activity.subtitle }}</h6>
              </div>
              <RouterLink
                to="/new/-NyAAeekgJAq6eEG8QkT"
                class="btn btn-lg btn-white align-self-md-end"
              >
                瞭解更多
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- promotions-background -->
    <div class="w-100 position-absolute top-0 z-n1">
      <div class="bg-design">
        <div
          class="bg-white border-dashed border-gray-500 d-none d-md-block animation-rotate"
          style="bottom: 2022px"
        ></div>
      </div>
    </div>
  </div>
  <!-- feature -->
  <div class="bg-img position-relative overflow-hidden">
    <!-- content -->
    <div class="block-spacing container d-flex flex-column align-items-center">
      <h2 class="title fs-1 text-white">
        <span class="border-white">課程亮點</span>
      </h2>
      <div class="mt-5 mx-lg-5 px-lg-3">
        <div
          class="card rounded-2 rounded-md-5 p-md-4 mb-4"
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="d-md-flex m-lg-6">
            <img
              src="/home-page/feature01.jpg"
              class="rounded-top-2 rounded-md-3 border-dashed border-gray-500 feature-img"
              alt="feature01"
            />
            <div class="d-flex flex-column justify-content-center ms-md-4 ms-xl-5">
              <div class="pt-2 pb-3 px-3 p-md-0">
                <small class="font-order text-secondary">01</small>
                <h5 class="card-title fs-3 fs-lg-2 text-black mt-2 mt-xl-3 mb-xl-4">
                  從入門到應用
                </h5>
                <p class="fs-7 fs-lg-6 lh-lg">
                  完全沒接觸過織補的初學者，我們推薦一日課程，體驗從縣道面的樂趣；想要挑戰大型創作的學生，則可以參考落地織布機課程，獲得更全面、密集的學習。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card rounded-2 rounded-md-5 p-md-4 mb-4"
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="d-md-flex flex-md-row-reverse m-lg-6">
            <img
              src="/home-page/feature02.jpg"
              class="rounded-top-2 rounded-md-3 border-dashed border-gray-500 feature-img"
              alt="feature02"
            />
            <div class="d-flex flex-column justify-content-center me-md-4 me-xl-5">
              <div class="pt-2 pb-3 px-3 p-md-0">
                <small class="font-order text-secondary">02</small>
                <h5 class="card-title fs-3 fs-lg-2 text-black mt-2 mt-xl-3 mb-xl-4">免裝備報到</h5>
                <p class="fs-7 fs-lg-6 lh-lg">
                  基本器材及耗材由我們提供，不用擔心有沒有織布機，您只需要準備紙筆等文既即可，輕鬆無負擔。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card rounded-2 rounded-md-5 p-md-4"
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="d-md-flex m-lg-6">
            <img
              src="/home-page/feature03.jpg"
              class="rounded-top-2 rounded-md-3 border-dashed border-gray-500 feature-img"
              alt="feature03"
            />
            <div class="d-flex flex-column justify-content-center ms-md-4 ms-xl-5">
              <div class="pt-2 pb-3 px-3 p-md-0">
                <small class="font-order text-secondary">03</small>
                <h5 class="card-title fs-3 fs-lg-2 text-black mt-2 mt-xl-3 mb-xl-4">
                  多樣化輔助課程
                </h5>
                <p class="fs-7 fs-lg-6 lh-lg">
                  用膩了現成素材？我們另有準備輔助課程，包含異材質、進階織紋、染色、布料加工等主題。您可以依照需求選購，增添創作靈感。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RouterLink to="/products" class="btn btn-white mt-5" style="width: 280px">
        開始上課
        <span class="icon-e icon-east"></span>
      </RouterLink>
    </div>
    <!-- feature-background -->
    <div class="bg-oval d-none d-xl-block" style="top: 40px; left: 8.3%" data-aos="fade-left"></div>
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
      <h2 class="title fs-1 text-primary">
        <span class="border-primary">織友推薦</span>
      </h2>
      <swiper
        class="reviews-swiper mt-5 py-3"
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
          },
          '1400': {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }"
        :modules="modules"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="review in reviews" :key="review.id">
          <div class="reviews-card card lh-lg p-4">
            <div class="d-flex pb-3 border-dashed-b border-primary-light">
              <img
                :src="review.avatarUrl"
                alt="avatar01"
                class="rounded-circle me-3"
                style="max-width: 64px; max-height: 64px"
              />
              <div>
                <small class="fs-7">
                  {{ review.name }}
                  <br />
                  <span class="fs-6">{{ review.course }}</span>
                </small>
              </div>
            </div>
            <div class="py-4 flex-grow-1">
              <p class="card-text fs-6">
                {{ review.comment }}
              </p>
            </div>
            <div>
              <span
                :class="{
                  'material-symbols-outlined': review.starts,
                  'icon-fill': review.starts,
                }"
              >
                star
              </span>
              <span
                :class="{
                  'material-symbols-outlined': review.starts,
                  'icon-fill': review.starts > 1,
                }"
              >
                star
              </span>
              <span
                :class="{
                  'material-symbols-outlined': review.starts,
                  'icon-fill': review.starts > 2,
                }"
              >
                star
              </span>
              <span
                :class="{
                  'material-symbols-outlined': review.starts,
                  'icon-fill': review.starts > 3,
                }"
              >
                star
              </span>
              <span
                :class="{
                  'material-symbols-outlined': review.starts,
                  'icon-fill': review.starts > 4,
                }"
              >
                star
              </span>
            </div>
          </div>
          <div
            class="reviews-card bg-secondary-light rounded-5 position-absolute z-n1"
            style="transform: translate(1%, -100%) rotate(5deg)"
          ></div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- reviews-background -->
    <div class="w-100 position-absolute top-0 z-n1">
      <div class="bg-design" data-aos="fade-up" data-aos-duration="2000">
        <div class="bg-primary-light d-none d-md-block" style="top: 40px"></div>
      </div>
    </div>
  </div>
  <!-- popular -->
  <div class="bg-primary-light position-relative overflow-hidden">
    <!-- content -->
    <div class="block-spacing container d-flex flex-column">
      <h2 class="title fs-1 text-primary">
        <span class="border-primary">本季熱門</span>
      </h2>
      <div class="position-relative">
        <swiper
          class="my-5 mobile-style pop-swiper position-static"
          :spaceBetween="0"
          :noSwiping="true"
          :navigation="true"
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
          <swiper-slide v-for="course in popProducts" :key="course.id">
            <div class="card w-100">
              <div class="card-mask position-relative">
                <img
                  :src="course.imageUrl"
                  :alt="`product${course.id}`"
                  class="rounded-top"
                  style="height: 240px"
                />
                <span
                  v-if="unlimitedActivities[course.state.promotion]"
                  class="badge badge-sale position-absolute start-0"
                  style="top: 24px"
                >
                  {{ unlimitedActivities[course.state.promotion].badge }}
                </span>
                <span
                  v-else-if="numActivities[course.state.promotion]"
                  class="badge badge-sale bg-success position-absolute start-0"
                  style="top: 24px"
                >
                  {{ numActivities[course.state.promotion].badge }}
                </span>
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                  >
                    favorite
                  </span>
                </a>
              </div>
              <div class="card-body flex-grow-1 pb-5">
                <h3 class="card-title fs-5">{{ course.title }}</h3>
                <span
                  class="badge bg-light me-2"
                  v-for="tag in course.info.tags"
                  :key="course.info.tags.indexOf(tag)"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="card-footer d-flex flex-column flex-lg-row align-items-lg-end pt-4 pb-3">
                <div class="d-flex align-items-center">
                  <small
                    v-if="unlimitedActivities[course.state.promotion]"
                    class="fs-4 fw-bold text-danger"
                  >
                    ${{
                      course.origin_price * unlimitedActivities[course.state.promotion].percentOff
                    }}
                  </small>
                  <small
                    :class="[
                      !unlimitedActivities[course.state.promotion]
                        ? 'fs-4 fw-bold text-black'
                        : 'fs-6 text-gray-400 text-decoration-line-through ms-2',
                    ]"
                  >
                    ${{ course.origin_price }}
                  </small>
                </div>
                <RouterLink
                  :to="`/product/${course.id}`"
                  class="btn btn-primary fs-md-7 fs-xl-6 ms-lg-auto mt-3"
                >
                  立即購買
                </RouterLink>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <RouterLink to="/products" class="btn btn-white z-1 mx-auto" style="width: 280px">
        了解更多課程
        <span class="icon-e icon-east"></span>
      </RouterLink>
    </div>
    <!-- popular-packground -->
    <div
      class="bg-position bg-dashed-left border-primary d-none d-md-block start-0 z-0"
      style="width: 30%; height: 360px; top: 120px"
    ></div>
    <div
      class="bg-position bg-dashed-right border-primary d-none d-md-block end-0 z-0"
      style="width: 70%; height: 360px; top: 460px"
    ></div>
  </div>
  <BackToTop></BackToTop>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { mapActions, mapState } from 'pinia';
import useProductsStore from '@/stores/useProductsStore';
import useActivitiesStore from '@/stores/useActivitiesStore';
import BackToTop from '@/components/BackToTop.vue';

export default {
  components: { Swiper, SwiperSlide, BackToTop },
  data() {
    return {
      categories: ['', '無經驗', '初學者', '創作家'],
      nowCategory: 1,
      discounts: {
        first: {
          title: '2023 歲末全館回饋季',
          subtitle: '滿 3000 折 300，可累折（排除優惠券折扣）',
          imgUrl: '/2023-summer-sideProject-shuttle/activity/2023-year-end01-sm.jpg',
          id: 3,
        },
        other: [
          {
            title: '2023 春季織心好友揪團趣',
            subtitle: '兩人同行，現打 85 折',
            imgUrl: '/2023-summer-sideProject-shuttle/activity/2023-spring-sm.jpg',
            id: 1,
          },
          {
            title: '2023 秋冬新色早鳥優惠',
            subtitle: '新色上架！指定課程打九折',
            imgUrl: '/2023-summer-sideProject-shuttle/activity/2023-winter-sm.jpg',
            id: 2,
          },
        ],
      },
      reviews: [
        {
          avatarUrl: '/2023-summer-sideProject-shuttle/avatar/avatar01.png',
          name: 'Ada Wang',
          course: '桌上型織布機',
          comment:
            '原本以為織布機製做很複雜，但講師教學方式十分簡單明瞭，而且十分有耐心，五星推薦！',
          starts: 5, // value: 1~5
          id: 1,
        },
        {
          avatarUrl: '/2023-summer-sideProject-shuttle/avatar/avatar02.png',
          name: 'Miyako Kajiro',
          course: '一日綴織體驗',
          comment: '第一次接觸織布，比想像中還有趣。這次一日課程只能做小作品，下囃想挑戰進階課程。',
          starts: 5, // value: 1~5
          id: 2,
        },
        {
          avatarUrl: '/2023-summer-sideProject-shuttle/avatar/avatar03.png',
          name: 'Li-Fang Gong',
          course: '織帶機',
          comment: '跟女兒一起報名課程，互相幫對方選色跟圖案，好有成就感。',
          starts: 5, // value: 1~5
          id: 3,
        },
        {
          avatarUrl: '/2023-summer-sideProject-shuttle/avatar/avatar04.png',
          name: 'Guertena',
          course: '織紋設計',
          comment: '以往課程都是基礎的平織紋，沒想到織紋能有這麼多變化，再加上配色，有無限組合。',
          starts: 5, // value: 1~5
          id: 1,
        },
        {
          avatarUrl: '/2023-summer-sideProject-shuttle/avatar/avatar01.png',
          name: 'Ada Wang',
          course: '桌上型織布機',
          comment:
            '原本以為織布機製做很複雜，但講師教學方式十分簡單明瞭，而且十分有耐心，五星推薦！',
          starts: 5, // value: 1~5
          id: 5,
        },
        {
          avatarUrl: '/2023-summer-sideProject-shuttle/avatar/avatar02.png',
          name: 'Miyako Kajiro',
          course: '一日綴織體驗',
          comment: '第一次接觸織布，比想像中還有趣。這次一日課程只能做小作品，下囃想挑戰進階課程。',
          starts: 5, // value: 1~5
          id: 6,
        },
      ],
      modules: [Autoplay, Navigation, Pagination],
    };
  },
  computed: {
    ...mapState(useProductsStore, ['popProducts']),
    ...mapState(useActivitiesStore, ['numActivities', 'unlimitedActivities']),
  },
  methods: {
    ...mapActions(useProductsStore, ['getAllProducts']),
    ...mapActions(useActivitiesStore, ['getActivities']),
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    setProductCategory() {
      document.cookie = `productCategory=${this.nowCategory}; max-age=86400;Secure`;
    },
  },
  mounted() {
    this.getAllProducts();
    this.getActivities();
  },
};
</script>

<style lang="scss">
.home-banner {
  /* 加上半透明遮罩 */
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(banner/banner.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

/* promotions 高度 */
.promotions > div {
  .card {
    height: 300px;
  }
  @media (min-width: 768px) {
    .card {
      height: 288px;
    }
    &:first-child > .card {
      height: 600px;
    }
  }
}
/* feature 圖片 */
.feature-img {
  width: 100%;
  height: 220px;
}
@media (max-width: 768px) {
  .feature-img {
    border: none !important;
  }
}
@media (min-width: 768px) {
  .feature-img {
    height: auto;
  }
}
@media (min-width: 768px) {
  .feature-img {
    max-width: 280px;
    height: 210px;
  }
}
@media (min-width: 992px) {
  .feature-img {
    max-width: 320px;
    height: 360px;
  }
}
@media (min-width: 1200px) {
  .feature-img {
    max-width: 480px;
  }
}

/* reviews 卡片 */
.reviews-card {
  width: 306px;
  height: 360px;
}
/* reviews swiper-pagination */
.reviews-swiper {
  .swiper-pagination-bullet {
    @media (max-width: 768px) {
      background: #dddcd6;
    }
  }
  .swiper-pagination {
    position: unset;
    padding-top: 48px;
  }
}
</style>

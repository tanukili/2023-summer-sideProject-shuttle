<template>
  <div class="bg-white">
    <BackgroundBanner :bannerImg="bannerImg"></BackgroundBanner>
    <div class="container block-spacing-sm">
      <nav>
        <ol class="breadcrumb fs-8 fs-md-7">
          <li class="breadcrumb-item">
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">聯絡我們</li>
        </ol>
      </nav>
      <h2 class="title fs-3 fs-lg-2 pb-3 pb-xl-5">
        <span class="border-primary pb-2 pb-lg-3">聯絡我們</span>
      </h2>
      <div class="row gx-lg-5">
        <div class="col col-xl-5 mb-5 mb-md-0">
          <small class="fs-8 fs-lg-7 pb-3 d-inline-block w-100 text-center">
            亦提供團體授課，歡迎企業、學校等團體來電詢問。
          </small>
          <div class="d-flex flex-column align-items-center border-dashed rounded-3 py-xxl-4">
            <ul class="list-unstyled my-auto mb-0 fs-8 fs-lg-7 p-4 py-md-5">
              <li class="py-2">
                <span class="me-3 fw-bold">連絡電話</span>
                <a class="link-primary" href="tel:0312-345-678">0312-345-678</a>
              </li>
              <li class="py-2">
                <span class="me-3 fw-bold">電子信箱</span>
                <a class="link-primary" href="mailto:Shuttle2023@gmail.com">
                  Shuttle2023@gmail.com
                </a>
              </li>
              <li class="py-2">
                <span class="me-3 fw-bold">服務據點</span>
                桃園市某某區某某里某某路777號
              </li>
              <li class="py-2">
                <span class="me-3 fw-bold">營業時間</span>
                固定每周一、四休息
                <ul>
                  <li class="pt-2 pb-1">平日 18:00 ~ 21:00</li>
                  <li class="pt-1">假日 09:00 ~ 18:00</li>
                </ul>
              </li>
              <li class="py-2 d-flex align-items-center">
                <span class="me-3 fw-bold">追蹤動態</span>
                <ul class="list-unstyled d-flex">
                  <li class="mx-2 mx-lg-2" v-for="icon in snsIcons" :key="icon">
                    <a href="#" class="icon" :class="`icon-${icon}`"></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="col d-flex flex-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4059.0563498755155!2d121.30792436402058!3d24.993060812082106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681f2e4ee0d01f%3A0xbb2a481042e7304a!2z5qGD5ZySNzfol53mlofnlLo!5e0!3m2!1szh-TW!2stw!4v1715946353884!5m2!1szh-TW!2stw"
            style="border: 0; min-height: 275px"
            class="flex-grow-1 rounded-3 shadow"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div class="d-flex align-items-center py-3 justify-content-center">
            <i class="bi bi-geo-alt-fill fs-6 me-2"></i>
            <small class="fs-8">334 000 桃園市某某區某某里某某路777號</small>
          </div>
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
      bannerImg: 'banner/banner-contact.png',
      snsIcons: ['facebook', 'messager', 'instagram', 'pinterest'],
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
.icon {
  display: inline-block;
  width: 28px;
  height: 28px;
  &::before {
    display: inline-block;
    content: '';
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &-facebook::before {
    background-image: url('icon/Facebook.svg');
  }
  &-messager::before {
    background-image: url('icon/Messager.svg');
  }
  &-instagram::before {
    background-image: url('icon/Instagram.svg');
  }
  &-pinterest::before {
    background-image: url('icon/Pinterest.svg');
  }
}
</style>

<template>
  <div class="modal fade" id="commentModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-primary border-dashed border-white border-bottom-0 pb-3">
          <h4 class="modal-title fs-6 text-white">課程名稱：{{ clickedCourse?.product?.title }}</h4>
        </div>
        <div class="modal-body p-5">
          <VForm
            novalidate
            @submit="postComment({ ...comment }, modal)"
            v-slot="{ errors }"
            class="contanier overflow-hidden"
            ref="commentForm"
          >
            <div class="row gy-7">
              <div class="col-lg-6 d-flex flex-column justify-content-between">
                <div class="d-flex align-items-end mb-2">
                  <h5 class="mb-0" :class="{ required: !clickedCourse.isCommented }">
                    {{ clickedCourse.isCommented ? '您的評價' : '滿意度調查' }}
                  </h5>
                  <span class="ms-3 text-danger" v-if="Object.keys(errors).length">
                    請確認是否填寫完整
                  </span>
                </div>
                <p class="fs-8 mb-3">1 為「非常不滿意」，5 為「非常滿意」。</p>
                <table class="table text-center mb-0">
                  <thead>
                    <tr class="border-gray-200">
                      <th scope="col" width="86" class="fw-normal">選項</th>
                      <th scope="col">{{ clickedCourse.isCommented ? '滿意度' : '1' }}</th>
                      <template v-if="!clickedCourse.isCommented">
                        <th scope="col">2</th>
                        <th scope="col">3</th>
                        <th scope="col">4</th>
                        <th scope="col">5</th>
                      </template>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="option in satisfactionOption" :key="option.id" class="border-light">
                      <th scope="row">
                        <label class="form-check-label" :for="option.id">
                          {{ option.label }}
                        </label>
                      </th>
                      <template v-if="!clickedCourse.isCommented">
                        <td v-for="num in 5" :key="num">
                          <VField
                            rules="required"
                            :name="option.id"
                            type="radio"
                            :value="num"
                            :id="num === 5 ? option.id : ''"
                            class="form-check-input"
                            v-model="comment.satisfaction[option.id]"
                          />
                        </td>
                      </template>
                      <td v-else>
                        <i
                          class="bi mx-1 text-warning"
                          :class="[
                            num <= comment.satisfaction[option.id] ? 'bi-star-fill' : 'bi-star',
                          ]"
                          v-for="num in 5"
                          :key="num"
                        ></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-lg-6">
                <h5 class="mb-2">{{ clickedCourse.isCommented ? '您的意見' : '意見反饋' }}</h5>
                <label class="fs-8 mb-3" for="feedback">自由填寫課後心得或建議</label>
                <VField
                  v-if="!clickedCourse.isCommented"
                  as="textarea"
                  class="form-control fs-7 bg-white"
                  name="feedback"
                  id="feedback"
                  style="height: 180px"
                  v-model="comment.describe"
                />
                <p v-else class="px-4 py-3 border border-gray-200 rounded-1" style="height: 180px">
                  {{ comment.describe ? comment.describe : '無相關評論' }}
                </p>
              </div>
              <div class="col-lg-10">
                <h5 class="mb-0 mb-2">
                  {{ clickedCourse.isCommented ? '照片集' : '分享照片' }}
                </h5>
                <div v-if="!clickedCourse.isCommented" class="d-flex aling-items-center ms-2 mb-3">
                  <input
                    class="form-check-input fs-8 me-1"
                    type="checkbox"
                    id="agreeShare"
                    v-model="comment.agreeToShare"
                  />
                  <label class="fs-8" for="agreeShare">
                    我同意提供分享的照片，作為 Shuttle 宣傳之用。
                  </label>
                </div>
                <div v-show="!clickedCourse.isCommented" class="input-group fs-7 ms-2">
                  <VField
                    name="imgUrl"
                    type="file"
                    id="addImgInput"
                    class="form-control fs-7 bg-white py-2"
                    accept="image/*"
                    @change="imgToFormData"
                  />
                  <button
                    class="btn btn-primary fs-7 fw-medium py-2 px-4 rounded-end-1 shadow-none"
                    type="button"
                    @click="userAddImg"
                    :disabled="!comment.imgUrls.some((url) => url.startsWith('blob'))"
                  >
                    上傳檔案
                  </button>
                </div>
              </div>
              <div class="col-12 mt-3">
                <swiper
                  v-if="comment.imgUrls.length"
                  class="comment-swiper"
                  :class="{
                    'pb-7': comment.imgUrls.length > 2,
                    'pb-lg-0': comment.imgUrls.length > 2 && comment.imgUrls.length <= 4,
                  }"
                  :spaceBetween="12"
                  :noSwiping="true"
                  :pagination="true"
                  :modules="modules"
                  @swiper="onSwiper"
                  :slidesPerView="2"
                  :breakpoints="{
                    '992': {
                      slidesPerView: 4,
                    },
                  }"
                >
                  <template v-if="comment.imgUrls.length">
                    <swiper-slide v-for="(imgUrl, index) in comment.imgUrls" :key="index">
                      <img
                        :src="imgUrl"
                        :alt="`課程照片${index + 1}`"
                        style="height: 105px"
                        class="shadow-sm bg-white"
                        referrerpolicy="no-referrer"
                        id="123"
                      />
                    </swiper-slide>
                  </template>
                </swiper>
                <div v-else class="bg-dark bg-opacity-25 rounded-1 d-flex justify-content-center">
                  <span class="py-5">沒有上傳任何圖片</span>
                </div>
              </div>
            </div>
            <button type="submit" class="d-none" ref="submitBtn"></button>
          </VForm>
        </div>
        <div class="modal-footer bg-white border-0 pt-3 text-center">
          <button type="button" class="btn btn-outline-secondary fs-7 py-2" data-bs-dismiss="modal">
            關閉
          </button>
          <button
            v-if="!clickedCourse.isCommented"
            @click="this.$refs.submitBtn.click()"
            type="button"
            class="btn btn-primary fs-7 py-2 ms-2"
          >
            送出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import * as bootstrap from 'bootstrap';

import { mapActions, mapState } from 'pinia';
import memberStore from '@/stores/front/memberStore';
import alertStore from '@/stores/alertStore';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ['clickedCourse'],
  data() {
    return {
      url: import.meta.env.VITE_API_PATH,
      modal: null,
      comment: {
        orderId: '',
        productId: '',
        imgUrls: [],
        agreeToShare: false,
        satisfaction: {
          content: null,
          process: null,
          quality: null,
          recommend: null,
        },
        describe: '',
      },
      imgFile: null,
      swiper: null,
      modules: [Pagination],
      satisfactionOption: [
        {
          label: '課程內容',
          id: 'content',
        },
        {
          label: '流程設計',
          id: 'process',
        },
        {
          label: '教學品質',
          id: 'quality',
        },
        {
          label: '值得推薦',
          id: 'recommend',
        },
      ],
    };
  },
  computed: {
    ...mapState(memberStore, ['userComments']),
    ...mapState(alertStore, ['alertstyles']),
  },
  methods: {
    ...mapActions(memberStore, ['postComment']),
    ...mapActions(alertStore, ['baseContent']),
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    // 將圖片使用 fomDate 封裝
    imgToFormData(event) {
      const file = event.target.files[0];
      this.imgFile = file;
      this.comment.imgUrls.push(URL.createObjectURL(file)); // 新增圖片預覽
    },
    // 前台使用者新增圖片
    userAddImg() {
      // 圖片檔案資訊
      const formData = new FormData();
      const timestamp = new Date().getTime();
      formData.append('image', this.imgFile);
      formData.append('type', 'image');
      formData.append('title', `心得圖片-${timestamp}`);
      formData.append('description', 'Shuttle side project 儲存用戶端上傳圖片');
      formData.append('album', 'TtjzDJS');
      // 上傳
      this.axios
        .post('https://api.imgur.com/3/image', formData, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_IMGUR_CLIENT_TOKEN}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          this.alertstyles.toast.fire(this.baseContent('新增成功'));
          const { link } = res.data.data;
          const imgNum = this.comment.imgUrls.length;
          this.comment.imgUrls[imgNum - 1] = link;
          document.querySelector('#addImgInput').value = '';
        })
        .catch((err) => {
          this.alertstyles.toast_danger.fire(
            this.baseContent(`新增失敗 問題${err.response.status}`),
          );
        });
    },
  },
  watch: {
    clickedCourse(newValue) {
      if (newValue.isCommented) {
        this.comment = { ...this.userComments.find((comment) => comment.orderId === newValue.id) };
      } else {
        this.comment.orderId = newValue.id;
        this.comment.productId = newValue.product_id;
      }
    },
  },
  mounted() {
    // 監聽 modal 關閉
    this.modal = new bootstrap.Modal(document.getElementById('commentModal'));
    const danglingStr = '_element';
    this.modal[danglingStr].addEventListener('hidden.bs.modal', () => {
      const { comment } = this.$options.data();
      if (!this.clickedCourse.isCommented) {
        this.$refs.commentForm.resetForm();
        // 需手動調整的 checkbox 與 file
        this.comment.imgUrls = [...comment.imgUrls];
        this.comment.agreeToShare = comment.agreeToShare;
      } else {
        this.comment = { ...comment };
      }
      document.querySelector('#addImgInput').value = '';
    });
  },
};
</script>

<style lang="scss">
.comment-swiper.swiper-horizontal {
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    border: 1px dashed #47585c;
  }
}
</style>

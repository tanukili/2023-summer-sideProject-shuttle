<template>
  <div class="modal fade" id="productInfo" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-primary border-dashed border-white border-bottom-0 pb-3">
          <h3 class="modal-title fs-6 text-white" id="exampleModalLabel">
            課程編號：{{ product.id }}
          </h3>
        </div>
        <div class="modal-body py-5">
          <div class="contanier mx-4">
            <h3 class="title mb-7">
              <span class="pb-2">{{ product.title }}</span>
            </h3>
            <div class="row gx-3">
              <div class="col-lg">
                <table class="table">
                  <thead>
                    <tr class="d-none">
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-light">
                      <th scope="row" class="text-center w-25">類型</th>
                      <td>{{ product.category }}</td>
                    </tr>
                    <tr class="border-light">
                      <th scope="row" class="text-center">上課日期</th>
                      <td>
                        <span
                          v-for="unix in info.classTime"
                          :key="unix"
                          class="bg-primary-light me-2 px-1"
                        >
                          {{ unixToStr(unix[0], false) }}
                        </span>
                      </td>
                    </tr>
                    <tr class="border-light">
                      <th scope="row" class="text-center">上課時間</th>
                      <td>
                        {{ `${unixToTime(time[0])} ~ ${unixToTime(time[1])}` }}
                      </td>
                    </tr>
                    <tr class="border-light">
                      <th scope="row" class="text-center pt-3">上課內容</th>
                      <td>
                        <ul class="mb-0">
                          <li v-for="item in info?.detail?.study" :key="item" class="my-2">
                            {{ item }}
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr class="border-light">
                      <th scope="row" class="text-center">成品大小</th>
                      <td>{{ info?.detail?.size }} (cm)</td>
                    </tr>
                    <tr class="border-light">
                      <th scope="row" class="text-center">課程簡述</th>
                      <td class="fs-8">{{ info.summary }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-lg">
                <img
                  :src="product.imageUrl"
                  :alt="product.title"
                  class="mb-3 shadow"
                  style="height: 200px"
                />
                <div v-for="img in product.imagesUrl" :key="img" class="w-50">
                  <template v-if="img !== product.imageUrl">
                    <img :src="img" alt="產品照片" style="height: 110px" />
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer bg-white border-0 pt-3 text-center">
          <button type="button" class="btn btn-outline-secondary fs-7 py-2" data-bs-dismiss="modal">
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import utilitiesStore from '@/stores/utilitiesStore';

export default {
  props: ['clickedCourse'],
  data() {
    return {
      product: {},
      info: {},
      time: [],
    };
  },
  methods: {
    ...mapActions(utilitiesStore, ['unixToStr', 'unixToTime']),
  },
  watch: {
    clickedCourse() {
      this.product = { ...this.clickedCourse.product };
      this.info = { ...this.clickedCourse.product.info };
      this.time = this.info.classTime.flat().filter((unix, i) => i < 2);
    },
  },
};
</script>

<style></style>

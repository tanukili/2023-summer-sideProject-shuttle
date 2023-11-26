<script>
import MemberNavs from '../../../components/MemberNavs.vue';

export default {
  components: {
    MemberNavs,
  },
  data() {
    return {
      orderOption: [
        {
          name: '全部訂單',
          sort: 'all',
          isClicked: true,
        },
        {
          name: '未付款',
          sort: 'unpaid',
          isClicked: false,
        },
        {
          name: '即將開課',
          sort: 'comingSoon',
          isClicked: false,
        },
        {
          name: '授課中',
          sort: 'teaching',
          isClicked: false,
        },
        {
          name: '已完課',
          sort: 'completed',
          isClicked: false,
        },
      ],
      satisfactions: [
        {
          name: 'contentStars',
          labelName: '課程內容',
          id: 'courseContent',
          max: 5,
        },
        {
          name: 'processStars',
          labelName: '流程設計',
          id: 'courseProcess',
          max: 5,
        },
        {
          name: 'qualityStars',
          labelName: '教學品質',
          id: 'courseQuality',
          max: 5,
        },
        {
          name: 'recommendStars',
          labelName: '值得推薦',
          id: 'courseRecommend',
          max: 5,
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <MemberNavs :options="orderOption" />
    <div class="pb-5 p-4 border-dashed-b border-gray-100 bg-white">
      <div class="d-flex justify-content-between py-2 bg-light">
        <h2 class="fs-7 mb-0 ms-2">訂單編號：</h2>
        <h4 class="fs-7 mb-0 me-2">成立日期：2023.08.19</h4>
      </div>
      <table class="table table-white text-center align-middle">
        <thead>
          <tr class="d-none">
            <th scope="col">開課狀態</th>
            <th scope="col">預覽圖片</th>
            <th scope="col">課程名稱</th>
            <th scope="col">報名人數</th>
            <th scope="col">小計</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">已完課</td>
            <td>
              <img
                src="/product/product01.jpg"
                alt=""
                class="img-fluid"
                style="max-width: 100px"
              />
            </td>
            <td><h3 class="fs-7 mb-0">一日綴織體驗</h3></td>
            <td>2 位</td>
            <td>NT$ 1445</td>
            <td>
              <div class="d-flex flex-column">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm shadow-none mb-2"
                >
                  課程資訊
                </button>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm shadow-none"
                  data-bs-toggle="modal"
                  data-bs-target="#experienceModal"
                >
                  填寫心得
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-between">
        <router-link
          class="btn btn-outline-primary py-2 fs-7 shadow-none"
          to="/member/order"
          >檢視訂單</router-link
        >
        <p>折扣完總額：NT$ 6,395</p>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="experienceModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div
          class="modal-header bg-primary border-dashed border-white border-bottom-0 py-3"
        >
          <h5 class="modal-title fs-6 text-white" id="exampleModalLabel">
            課程編號：
          </h5>
        </div>
        <div class="modal-body">
          <div class="contanier">
            <div class="row mb-3">
              <div class="col d-flex flex-column justify-content-between">
                <div>
                  <h6 class="mb-2 required">滿意度調查</h6>
                  <p class="fs-9 mb-1">
                    1 為「非常不滿意」，3 為「普通」，5 為「非常滿意」
                  </p>
                  <table class="table text-center">
                    <thead>
                      <tr class="border-gray-200">
                        <th scope="col"></th>
                        <th scope="col">1</th>
                        <th scope="col">2</th>
                        <th scope="col">3</th>
                        <th scope="col">4</th>
                        <th scope="col">5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="option in satisfactions"
                        :key="option.id"
                        class="border-gray-200"
                      >
                        <th scope="row">
                          <label class="form-check-label" :for="option.id">
                            {{ option.labelName }}
                          </label>
                        </th>
                        <td v-for="num in option.max" :key="num">
                          <input
                            class="form-check-input"
                            :name="option.name"
                            type="radio"
                            :value="num"
                            :id="num === 5 ? option.id : ''"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col">
                <h6 class="mb-2">
                  <lebel for="feedback"> 意見反饋 </lebel>
                </h6>
                <textarea
                  class="form-control fs-7 bg-white"
                  name="feedback"
                  id="feedback"
                  style="height: 200px"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <h6 class="mb-2">分享圖片</h6>
            <div class="input-group w-75 mb-2">
              <input
                type="file"
                class="form-control fs-7 py-2"
                id="addimage"
                aria-describedby="addimage"
                aria-label="Upload"
              />
              <button
                class="btn btn-outline-primary fs-8 fw-medium p-2 rounded-end-1 shadow-none"
                type="button"
                id="addimage"
              >
                上傳檔案
              </button>
            </div>
            <div class="d-flex aling-items-center">
              <input
                class="form-check-input fs-8 me-1"
                type="checkbox"
                id="agreeShare"
              />
              <label class="fs-8" for="agreeShare"
                >我同意提供分享的照片，作為 Shuttle 宣傳之用。</label
              >
            </div>
          </div>
        </div>
        <div class="modal-footer border-secondary py-3">
          <button
            type="button"
            class="btn btn-secondary py-2"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button type="button" class="btn btn-primary py-2">送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

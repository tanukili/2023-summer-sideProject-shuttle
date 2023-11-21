<script>
const hexApi = import.meta.env.VITE_HEX_API_PATH;
const apiPath = '2023shuttle';

export default {
  emits: ['updateUserId', 'nowCarts'], // 聲明事件避免錯誤
  data() {
    return {
      orderInfo: { user: {} },
    };
  },
  methods: {
    getOrder(id) {
      this.axios
        .get(`${hexApi}api/${apiPath}/order/${id}`)
        .then((res) => {
          this.orderInfo = res.data.order;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  mounted() {
    // 進入時觸發
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1200);
    this.getOrder('-NjlsGb-9yeuLflbzQU4'); // 之後要換成取得新訂單id
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
  <div class="bg-white">
    <div class="block-spacing-sm container">
      <nav aria-label="breadcrumb" class="mb-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/products">購買課程</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/carts">購物車</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">訂單完成</li>
        </ol>
      </nav>
      <!-- 訂單進度 -->
      <div class="w-100 w-md-75 d-flex flex-column mx-auto my-5">
        <ol class="d-flex justify-content-around ps-0 fs-6 fw-bold">
          <li>訂單確認</li>
          <li>填寫資料</li>
          <li>訂單完成</li>
        </ol>
        <div class="progress border-dashed border-secondary">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 100.5%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <!-- 訂單內容 -->
      <div class="row justify-content-center">
        <div class="modal-body text-center fs-4 fs-md-3 py-3">訂單已成立</div>
        <div class="col-6 mt-5">
          <div class="bg-secondary rounded-2 px-5 py-4 shadow">
            <h4 class="text-center py-4">
              <span class="border-dashed-b pb-2">訂單資訊</span>
            </h4>
            <ul class="list-group list-group-flush pt-2 pb-4">
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0">成立日期</h5>
                  <div class="col-7">
                    <p>{{ orderInfo.create_at }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0">付款狀態</h5>
                  <div class="col-7">
                    <p>{{ orderInfo.is_paid ? '付款完成' : '未付款' }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0">應付金額</h5>
                  <div class="col-7">
                    <p>NT$ {{ orderInfo.total }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0">訂單編號</h5>
                  <div class="col-7">
                    <p>{{ orderInfo.id }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0">訂購者</h5>
                  <div class="col-7">
                    <p>{{ orderInfo.user.name }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0">連絡電話</h5>
                  <div class="col-7">
                    <p>{{ orderInfo.user.tel }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0">聯絡信箱</h5>
                  <div class="col-7">
                    <p>{{ orderInfo.user.email }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0">訂單備註</h5>
                  <div class="col-7">
                    <p>{{ orderInfo.message }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

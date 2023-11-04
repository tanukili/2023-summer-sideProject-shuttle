<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    // 進入時觸發
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1200);
  },
};
</script>

<template>
  <LoadingOverlay v-model:active="isLoading">
    <div class="loadingio-spinner-pulse-1iwbsd99pb">
      <div class="ldio-dcvhkke5k">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingOverlay>
  <div class="bg-white">
    <div class="block-spacing-sm container">
      <nav aria-label="breadcrumb" class="mb-3">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/products">購買課程</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">購物車</li>
        </ol>
      </nav>
      <!-- 訂單進度 -->
      <div class="w-100 w-md-75 d-flex flex-column mx-auto my-5">
        <ol class="d-flex justify-content-around ps-0">
          <li>訂單確認</li>
          <li>填寫資料</li>
          <li>訂單完成</li>
        </ol>
        <div class="progress border-dashed border-secondary">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 66.66%"
            aria-valuenow="66.66"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <!-- 訂單內容 -->
      <div class="row">
        <div class="col-lg-6">
          <div class="d-flex flex-column h-100">
            <h4 class="text-center pt-4 pb-5">
              <span class="border-dashed-b pb-2">確認訂單內容</span>
            </h4>
            <div class="table-responsive-sm">
              <table
                class="table align-middle table-white text-center fs-8 fs-lg-7"
              >
                <thead>
                  <tr class="table-light bg-light">
                    <th scope="col">預覽</th>
                    <th scope="col">課程名稱</th>
                    <th scope="col">人數</th>
                    <th scope="col">小計</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="../../assets/images/product/product05.jpg"
                        alt="product05"
                        class="img-fluid"
                        style="max-width: 150px"
                      />
                    </td>
                    <td>一日綴織體驗</td>
                    <td>2</td>
                    <td>1,445</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="../../assets/images/product/product02.jpg"
                        alt="product02"
                        class="img-fluid"
                        style="max-width: 150px"
                      />
                    </td>
                    <td>暖色羊毛圍巾</td>
                    <td>2</td>
                    <td class="text-danger">1,800</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="../../assets/images/product/product03.jpg"
                        alt="product03"
                        class="img-fluid"
                        style="max-width: 150px"
                      />
                    </td>
                    <td>段染實驗營</td>
                    <td>1</td>
                    <td>3,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul class="list-group list-group-flush fs-7 px-3">
              <li
                class="list-group-item bg-white py-1 border-0 d-flex justify-content-between"
              >
                目前總金額<span class="fw-bold">NT$ 6,445</span>
              </li>
              <li
                class="list-group-item bg-white py-1 border-0 d-flex justify-content-between"
              >
                優惠券折扣<span class="text-danger fw-bold">NT$ -50</span>
              </li>
              <li
                class="list-group-item bg-white py-1 border-0 d-flex justify-content-between"
              >
                折扣後金額<span class="fw-bold">NT$ 6,395</span>
              </li>
            </ul>
            <RouterLink
              class="text-decoration-underline fs-8 d-lg-inline-block mt-auto d-none"
              to="/carts"
            >
              <span
                class="material-symbols-outlined icon-semibold align-top fs-7 lh-sm"
              >
                undo
              </span>
              返回購物車
            </RouterLink>
          </div>
        </div>
        <div class="col-lg-6 mt-5 mt-lg-0">
          <div class="bg-secondary px-5 py-4">
            <h4 class="text-center pb-5">
              <span class="border-dashed-b border-light pb-2"
                >填寫訂單資料</span
              >
            </h4>
            <form action="#" class="d-flex flex-column">
              <div class="mb-3">
                <label for="name" class="form-label fs-6 fw-semibold"
                  >姓名<span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control rounded-1 fs-7 ps-3"
                  id="name"
                  placeholder="請輸入真實姓名"
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label fs-6 fw-semibold"
                  >手機<span class="text-danger">*</span></label
                >
                <input
                  type="tel"
                  class="form-control rounded-1 fs-7 ps-3"
                  id="phone"
                  placeholder="請輸入聯繫電話"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label fs-6 fw-semibold"
                  >信箱<span class="text-danger">*</span></label
                >
                <input
                  type="email"
                  class="form-control rounded-1 fs-7 ps-3"
                  id="email"
                  placeholder="請輸入聯繫信箱"
                />
              </div>
              <div class="mb-3">
                <label for="pay-way" class="form-label fs-6 fw-semibold"
                  >付款方式<span class="text-danger">*</span></label
                >
                <div class="select-icon">
                  <select class="form-select rounded-1 bg-pale fs-7">
                    <option value="現金" selected>現金</option>
                    <option value="信用卡">信用卡</option>
                    <option value="信用卡分期">信用卡分期</option>
                    <option value="行動支付">行動支付</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <label for="remark" class="form-label fs-6 fw-semibold"
                  >備註</label
                >
                <textarea
                  class="form-control rounded-1"
                  id="remark"
                  style="height: 150px"
                ></textarea>
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="order-agree"
                />
                <label class="form-check-label" for="order-agree"
                  >我已閱讀並同意課程注意事項</label
                >
              </div>
              <RouterLink
                class="btn btn-primary w-75 mx-auto my-3"
                to="/order-established"
                >訂單送出</RouterLink
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

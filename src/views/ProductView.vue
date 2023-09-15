<template>
  <div class="position-relative overflow-hidden">
    <!-- content -->
    <div class="">
      <div class="block-spacing-sm container">
        <nav aria-label="breadcrumb" class="mb-3">
          <ol class="breadcrumb mb-0 fw-semibold">
            <li class="breadcrumb-item">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink to="/products">購買課程</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              一日綴織體驗
            </li>
          </ol>
        </nav>
        <!-- 課程內容 -->
        <div class="card bg-white rounded-5 mb-5">
          <div class="row g-0">
            <div class="col-md-6 position-relative mb-3 mb-md-0">
              <img
                src="../assets/images/product/product05.jpg"
                class="img-fluid rounded-top-5 rounded-start-md-5 h-100"
                alt="prodcut05"
              />
              <a href="#">
                <span
                  class="icon-favorite material-symbols-outlined position-absolute"
                  style="top: 24px; left: 24px"
                  >favorite</span
                >
              </a>
            </div>
            <div class="col-md-6 px-4">
              <div class="card-body pt-4">
                <h2 class="card-title fs-4 fs-xl-3 text-center">一日綴織體驗</h2>
                <p class="card-text border-bottom-base border-secondary pb-4">
                  簡單入門的織布技巧，只需要木框與線材就能開始創作，學員們可以如繪圖般，自由地增添各式各樣的線材，讓畫面富有個性。
                </p>
                <ul class="list-group list-group-flush fs-8 pt-2">
                  <li class="list-group-item bg-white py-1 border-0">
                    <span class="fw-bold">日期</span>&emsp;2023.08.19
                  </li>
                  <li class="list-group-item bg-white py-1 border-0">
                    <span class="fw-bold">時間</span>&emsp;13:00~16:00
                  </li>
                  <li class="list-group-item bg-white py-1 border-0">
                    <span class="fw-bold">名額</span>&emsp;15 位
                  </li>
                  <li class="list-group-item bg-white py-1 border-0">
                    <span class="fw-bold">使用技巧</span>&emsp;綴織
                  </li>
                  <li class="list-group-item bg-white py-1">
                    <span class="fw-bold">推薦對象</span>&emsp;無經驗者、親子
                  </li>
                </ul>
              </div>
              <div class="card-footer pb-4">
                <div class="d-flex align-items-center mb-3">
                  <small class="fs-5 fs-xl-4 fw-semibold text-danger"
                    >NT 850</small
                  >
                  <div class="d-flex align-items-center ms-auto">
                    <label
                      for="filter-select"
                      class="fw-medium flex-shrink-0 fs-8 fs-lg-7 me-2"
                      >報名人數</label
                    >
                    <div class="select-icon">
                      <select class="form-select form-select-sm fs-7 pe-4">
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row gx-2">
                  <div class="col-lg-6 mb-2">
                    <RouterLink
                      class="btn btn-outline-primary rounded-1 fs-7 w-100"
                      to="/carts"
                    >
                      加入購物車
                    </RouterLink>
                  </div>
                  <div class="col-lg-6">
                    <RouterLink
                      class="btn btn-primary rounded-1 fs-7 w-100"
                      to="/carts"
                    >
                      立即購買
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 說明 -->
        <ul class="nav nav-tabs" id="productTab" role="tablist">
          <li class="nav-item w-33 w-md-25 me-md-1" role="presentation">
            <button
              class="nav-link py-2 border-dashed fs-lg-6 w-100 active"
              id="introduction-tab"
              data-bs-toggle="tab"
              data-bs-target="#introduction"
              type="button"
              role="tab"
              aria-controls="introduction"
              aria-selected="true"
            >
              課程介紹
            </button>
          </li>
          <li class="nav-item w-33 w-md-25 me-md-1" role="presentation">
            <button
              class="nav-link py-2 border-dashed fs-lg-6 w-100"
              id="precaution-tab"
              data-bs-toggle="tab"
              data-bs-target="#precaution"
              type="button"
              role="tab"
              aria-controls="precaution"
              aria-selected="false"
            >
              注意事項
            </button>
          </li>
          <li class="nav-item w-33 w-md-25" role="presentation">
            <button
              class="nav-link py-2 border-dashed fs-lg-6 w-100"
              id="FAQ-tab"
              data-bs-toggle="tab"
              data-bs-target="#FAQ"
              type="button"
              role="tab"
              aria-controls="FAQ"
              aria-selected="false"
            >
              常見問題
            </button>
          </li>
        </ul>
        <div class="tab-content bg-white fs-8 fs-lg-7 p-4" id="productTabContent">
          <!-- 課程介紹內容 -->
          <div
            class="tab-pane mb-3 p-md-2 fade show active"
            id="introduction"
            role="tabpanel"
            aria-labelledby="introduction-tab"
          >
            <ul class="list-group list-group-flush fw-bold">
              <li class="list-group-item bg-white py-1 border-0">
                <span>課程耗時：</span>3 小時
              </li>
              <li class="list-group-item bg-white py-1 border-0 mb-3">
                <span>成品大小：</span>15 x 15 cm
              </li>
              <li class="list-group-item bg-white py-1 border-0 mb-3">
                <span>學習技巧：</span>
                <ul class="fw-normal">
                  <li>認識織框</li>
                  <li>線材計算與整經</li>
                  <li>圖案設計</li>
                  <li>收邊方法</li>
                </ul>
              </li>
              <li class="list-group-item bg-white py-1 border-0">
                <span>貼心提醒：</span>
                <ul class="fw-normal">
                  <li>織框由課程單位提供</li>
                  <li>
                    本課程提供學員們棉線作為織作素材，學員們也可以自備喜愛線材，經由老師討論後使用在作品上。
                  </li>
                  <li>
                    教學空間內有器材與素材，因此教室禁止飲食，有蓋容器盛裝的飲品除外。
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!-- 注意事項內容 -->
          <div
            class="tab-pane mb-3 p-md-2 fade"
            id="precaution"
            role="tabpanel"
            aria-labelledby="precaution-tab"
          >
            <ul class="mb-0">
              <li class="my-1 my-md-2">
                輔助類課程屬於進階課程，故不建議初學者購買，推薦擁有手織經驗的學員參與。
              </li>
              <li class="my-1 my-md-2">
                上課空間有限，為保障學員們學習權益，請準時到達課程地點，以便充分利用課程時間。
              </li>
              <li class="my-1 my-md-2">
                課前將會寄出「上課提醒」信件，麻煩各位學員確認地點、時間日期與準備事項。
              </li>
              <li class="my-1 my-md-2">
                部分課程會有需要自備的基本工具和材料，學員們可以按照「上課提醒」的清單提前準備。
              </li>
            </ul>
          </div>
          <!-- 常見問題內容 -->
          <div
            class="tab-pane mb-3 p-md-2 py-0 fade"
            id="FAQ"
            role="tabpanel"
            aria-labelledby="FAQ-tab"
          >
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item bg-white py-2 my-md-2 border-bottom-base border-mellow"
              >
                <span class="fw-bold lh-lg"
                  >Q. 課程購買後，能延後或取消課程嗎？ </span
                ><br />
                開課 7 日前可以免費調整課程時間或取消，7日內則需支付取消費用， 3
                日前為課程費用 30% ， 1 日前為課程費用 50% 。
              </li>
              <li
                class="list-group-item bg-white py-2 my-md-2 border-bottom-base border-mellow"
              >
                <span class="fw-bold lh-lg"
                  >Q. 錯過了這次報名時間，之後還會再開設課程嗎？ </span
                ><br />
                需要視課程類型而定，體驗類課程的開課間隔約 1 ~ 2
                月；初學者課程的開課間隔約一季；進階課程則約一年 1 次。<br />
                開課標準會依課程熱門度進行調整，歡迎聯絡我們，告知您的需求。
              </li>
              <li
                class="list-group-item bg-white py-2 my-md-2 border-bottom-base border-mellow"
              >
                <span class="fw-bold lh-lg"
                  >Q. 如果上課人數超過 10 人該如何報名？ </span
                ><br />
                人數超過 10
                人的團體，我們能專門為您開設新課程，有需求者歡迎聯絡我們。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- background-style -->
    <div
      class="bg-position bg-white border-base rounded-circle d-none d-md-block"
      style="width: 1400px; height: 1400px; top: -900px; left: -20%"
    ></div>
    <div
      class="bg-position bg-secondary rounded-circle"
      style="width: 1400px; height: 1400px; bottom: -900px; right: -20%"
    ></div>
  </div>
</template>

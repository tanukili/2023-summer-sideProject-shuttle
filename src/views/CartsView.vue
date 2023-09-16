<template>
  <div class="bg-white">
    <div class="block-spacing-sm container">
      <nav aria-label="breadcrumb" class="mb-3">
        <ol class="breadcrumb mb-0 fw-semibold">
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
        <div class="progress border-base border-secondary">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 33.33%"
            aria-valuenow="33.33"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <!-- 訂單內容 -->
      <div class="d-flex align-items-center mb-2">
        <RouterLink
          class="text-decoration-underline fs-9 d-inline-block me-auto"
          to="/products"
        >
          <span
            class="material-symbols-outlined icon-semibold align-top fs-8 lh-sm"
          >
            undo
          </span>
          返回課程列表
        </RouterLink>
        <a
          class="btn btn-sm btn-outline-gray-400 fs-9 px-3 fw-normal d-inline-block shadow-none"
          href="#"
        >
          清空購物車
        </a>
      </div>
      <div class="table-responsive-sm">
        <table
          class="table align-middle table-white text-center fs-9 fs-md-8 fs-lg-7"
        >
          <thead>
            <tr class="table-light bg-light">
              <th scope="col"></th>
              <th scope="col">
                <div class="d-none d-md-flex flex-column">預覽</div>
              </th>
              <th scope="col">課程名稱</th>
              <th scope="col">價格</th>
              <th scope="col">人數</th>
              <th scope="col">小計</th>
              <th scope="col">
                <div class="d-none d-md-flex flex-column px-md-3">適用優惠</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <a href="#">
                  <span
                    class="material-symbols-outlined icon-fill fs-6 fs-md-5"
                  >
                    delete_forever
                  </span>
                </a>
              </th>
              <td>
                <div class="d-none d-md-flex flex-column align-items-center">
                  <img
                    src="../assets/images/product/product05.jpg"
                    alt="product05"
                    class="img-fluid"
                    style="max-width: 150px"
                  />
                </div>
              </td>
              <td>一日綴織體驗</td>
              <td>850</td>
              <td>
                <div class="select-icon">
                  <select class="form-select form-select-sm fs-lg-7 pe-4">
                    <option value="1">1</option>
                    <option value="2" selected>2</option>
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
              </td>
              <td class="text-danger">
                <span class="text-mellow text-decoration-line-through"
                  >1,700</span
                ><br />1,445
              </td>
              <td class="fs-8 text-gray-400 px-md-3">
                <div class="d-none d-md-flex flex-column">
                  2023夏季-織心好友揪團趣
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <a href="#">
                  <span
                    class="material-symbols-outlined icon-fill fs-6 fs-md-5"
                  >
                    delete_forever
                  </span>
                </a>
              </th>
              <td>
                <div class="d-none d-md-flex flex-column align-items-center">
                  <img
                    src="../assets/images/product/product02.jpg"
                    alt="product02"
                    class="img-fluid"
                    style="max-width: 150px"
                  />
                </div>
              </td>
              <td>暖色羊毛圍巾</td>
              <td>
                <span class="text-mellow text-decoration-line-through"
                  >2,000</span
                ><br />1,800
              </td>
              <td>
                <div class="select-icon">
                  <select class="form-select form-select-sm fs-lg-7 pe-4">
                    <option value="1">1</option>
                    <option value="2" selected>2</option>
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
              </td>
              <td class="text-danger">1,800</td>
              <td class="fs-8 text-gray-400 px-md-3">
                <div class="d-none d-md-flex flex-column">
                  2023秋冬-早鳥優惠
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <a href="#">
                  <span
                    class="material-symbols-outlined icon-fill fs-6 fs-md-5"
                  >
                    delete_forever
                  </span>
                </a>
              </th>
              <td>
                <div class="d-none d-md-flex flex-column align-items-center">
                  <img
                    src="../assets/images/product/product03.jpg"
                    alt="product03"
                    class="img-fluid"
                    style="max-width: 150px"
                  />
                </div>
              </td>
              <td>段染實驗營</td>
              <td>3,200</td>
              <td>
                <div class="select-icon">
                  <select class="form-select form-select-sm fs-lg-7 pe-4">
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
              </td>
              <td>3,200</td>
              <td class="fs-8 px-md-3">
                <div class="d-none d-md-flex flex-column">
                  <span
                    ><span class="fw-bold text-danger">再 1 位</span
                    >，即可適用</span
                  >「2023夏季-織心好友揪團趣」
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 訂單底部 -->
      <div class="row mb-4 pb-md-3">
        <div class="col-md-5">
          <div class="input-group pt-2 mb-3 mb-lg-4">
            <input
              type="text"
              class="form-control form-control-sm fs-7"
              placeholder="請輸入折扣碼"
              aria-label="coupon number"
              aria-describedby="coupon-btn"
            />
            <button
              class="btn btn-secondary fs-7 py-2 px-4"
              type="button"
              id="coupon-btn"
            >
              確認使用
            </button>
          </div>
        </div>
        <div class="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 ms-auto">
          <ul class="list-group list-group-flush fs-7">
            <li
              class="list-group-item bg-white border-0 text-mellow d-flex justify-content-between"
            >
              <span class="fw-bold">目前總金額</span>NT$ 6,445
            </li>
            <li
              class="list-group-item bg-white py-1 border-0 d-flex justify-content-between"
            >
              <span class="fw-bold">優惠券折扣</span><span class="text-danger">NT$ 50</span>
            </li>
            <li
              class="list-group-item bg-white py-1 border-0 d-flex justify-content-between"
            >
              <span class="fw-bold">折扣後金額</span>NT$ 6,395
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex">
        <RouterLink
          class="btn btn-primary rounded-1 fs-7 fs-lg-6 fw-normal w-75 w-md-50 w-lg-25 mx-auto"
          to="/order"
        >
          訂單確認
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import Flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

const hexApi = import.meta.env.VITE_HEX_API_URL;
const apiPath = '2023shuttle';
const config = {
  headers: {
    Authorization: document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1'),
  },
};

export default {
  data() {
    return {
      products: [],
      newProduct: {
        title: '', // 必須
        category: '', // 必須
        origin_price: null, // 必須
        price: null, // 必須
        unit: '堂', // 必須
        is_enabled: 1, // 必須在外層，沒權限的get才取得到
        info: {
          classes: null,
          dateTime: {
            date: '',
            from: '',
            to: '',
          },
          capacity: null,
          studentNum: 0,
          tags: [],
          skills: '',
          summary: '',
          detail: {
            perSpendTime: null,
            size: '',
            study: [],
          },
        },
        state: {
          nowStatus: '準備中',
          promotion: [],
        },
        imageUrl: '',
        imagesUrl: [],
      },
    };
  },
  methods: {
    getProuducts() {
      this.axios
        .get(`${hexApi}api/${apiPath}/admin/products`, config)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    addProdct() {
      // 符合 api 要求格式
      const obj = { data: { ...this.newProduct } };
      this.axios
        .post(`${hexApi}api/${apiPath}/admin/product`, obj, config)
        .then((res) => {
          this.getProuducts();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    deleteProdct(id) {
      this.axios
        .delete(`${hexApi}api/${apiPath}/admin/product/${id}`, config)
        .then((res) => {
          this.getProuducts();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  mounted() {
    this.getProuducts();
    this.flatpickr = new Flatpickr(this.$refs.flatpickrDate, {
      dateFormat: 'Y-m-d',
      minDate: 'today',
      mode: 'multiple',
    });
    this.flatpickr = new Flatpickr(this.$refs.flatpickrFrom, {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true,
      minTime: '11:00',
    });
    this.flatpickr = new Flatpickr(this.$refs.flatpickrTo, {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true,
      minTime: '11:00',
      maxTime: '21:00',
    });
  },
};
</script>

<template>
  <div class="about">
    <div class="container">
      <h1>後台產品列表</h1>
      <form>
        <div class="mb-3">
          <label for="1" class="form-label">課程標題</label>
          <input v-model="newProduct.title" type="text" class="form-control" id="1" />
        </div>
        <div class="mb-3">
          <label for="2" class="form-label">定價</label>
          <input v-model="newProduct.origin_price" type="number" class="form-control" id="2" />
        </div>
        <div class="mb-3">
          <label for="2" class="form-label">售價</label>
          <input v-model="newProduct.price" type="number" class="form-control" id="2" />
        </div>
        <div class="mb-3">
          <label for="3" class="form-label">開課日期</label>
          <small>可複選</small>
          <input
            v-model="newProduct.info.dateTime.data"
            ref="flatpickrDate"
            class="form-control"
            id="3"
          />
          <label for="3" class="form-label">上課時間</label>
          <div class="d-flex">
            <input
              v-model="newProduct.info.dateTime.from"
              ref="flatpickrFrom"
              class="form-control"
              id="3"
            />
            <input
              v-model="newProduct.info.dateTime.to"
              ref="flatpickrTo"
              class="form-control"
              id="3"
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="3.5" class="form-label">課堂數</label>
          <input v-model="newProduct.info.classes" type="number" class="form-control" id="3.5" />
        </div>
        <div class="mb-3">
          <label for="3.75" class="form-label">名額</label>
          <input v-model="newProduct.info.capacity" type="number" class="form-control" id="3.75" />
        </div>
        <div class="mb-3">
          <label for="4" class="form-label">使用技巧</label>
          <input v-model="newProduct.info.skills" type="text" class="form-control" id="4" />
        </div>
        <div class="mb-3">
          <label for="5" class="form-label">推薦對象</label>
          <select v-model="newProduct.category" class="form-select" id="5">
            <option value="體驗" selected>體驗</option>
            <option value="初階">初階</option>
            <option value="進階">進階</option>
            <option value="輔助">輔助</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="6" class="form-label">課程簡介</label>
          <input v-model="newProduct.info.summary" type="textarea" class="form-control" id="6" />
        </div>
        <div class="mb-3">
          <h6>課程描述</h6>
          <div class="d-flex">
            <div>
              <label for="7" class="form-label">單堂課程時數</label>
              <input
                v-model="newProduct.info.detail.perSpendTime"
                type="number"
                class="form-control"
                id="7"
              />
            </div>
            <div>
              <label for="7.5" class="form-label">成品大小(單位cm)</label>
              <input
                v-model="newProduct.info.detail.size"
                type="text"
                class="form-control"
                id="7.5"
              />
            </div>
            <div>
              <label for="7.75" class="form-label">學習內容</label>
              <small>可複選</small>
              <select v-model="newProduct.info.detail.study" class="form-select" id="7.75" multiple>
                <optgroup label="前置作業">
                  <option value="線材計算與整經">線材計算與整經</option>
                  <option value="圖案設計">圖案設計</option>
                </optgroup>

                <optgroup label="綴織">
                  <option value="認識織框">認識織框</option>
                  <option value="織框製作">織框製作</option>
                </optgroup>

                <optgroup label="收尾">
                  <option value="收邊方法">收邊方法</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-3 form-check form-check-inline">
            <input
              v-model="newProduct.info.tags"
              type="checkbox"
              value="入門"
              class="form-check-input"
              id="8"
            />
            <label class="form-check-label" for="8">入門</label>
          </div>
          <div class="mb-3 form-check form-check-inline">
            <input
              v-model="newProduct.info.tags"
              type="checkbox"
              value="綴織"
              class="form-check-input"
              id="9"
            />
            <label class="form-check-label" for="9">綴織</label>
          </div>
          <div class="mb-3 form-check form-check-inline">
            <input
              v-model="newProduct.info.tags"
              type="checkbox"
              value="一日"
              class="form-check-input"
              id="10"
            />
            <label class="form-check-label" for="10">一日</label>
          </div>
          <div class="mb-3 form-check form-check-inline">
            <input
              v-model="newProduct.info.tags"
              type="checkbox"
              value="兩日"
              class="form-check-input"
              id="11"
            />
            <label class="form-check-label" for="11">兩日</label>
          </div>
          <div class="mb-3 form-check form-check-inline">
            <input
              v-model="newProduct.info.tags"
              type="checkbox"
              value="四日"
              class="form-check-input"
              id="12"
            />
            <label class="form-check-label" for="12">四日</label>
          </div>
          <div class="mb-3 form-check form-check-inline">
            <input
              v-model="newProduct.info.tags"
              type="checkbox"
              value="簡易織布機"
              class="form-check-input"
              id="13"
            />
            <label class="form-check-label" for="13">簡易織布機</label>
          </div>
          <div class="mb-3 form-check form-check-inline">
            <input
              v-model="newProduct.info.tags"
              type="checkbox"
              value="秋冬"
              class="form-check-input"
              id="14"
            />
            <label class="form-check-label" for="14">秋冬</label>
          </div>
        </div>
        <div class="mb-3">
          <label for="15" class="form-label">適用優惠</label>
          <select v-model="newProduct.state.promotion" class="form-select" id="15" multiple>
            <option value="promotion01">秋冬早鳥</option>
            <option value="promotion02">周年慶</option>
            <option value="promotion03">夏季折扣</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="16" class="form-label">課程圖片</label>
          <input v-model="newProduct.imageUrl" type="text" class="form-control" id="16" />
        </div>
        <button @click.prevent="addProdct" type="submit" class="btn btn-primary">新增課程</button>
      </form>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">類別</th>
            <th scope="col">課程名稱</th>
            <th scope="col">上課日期</th>
            <th scope="col">堂數</th>
            <th scope="col">定價</th>
            <th scope="col">售價</th>
            <th scope="col">報名狀況</th>
            <th scope="col">剩餘名額</th>
            <th scope="col">報名人數</th>
            <th scope="col">開課狀況</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <th scope="row">
              <small>{{ product.id }}</small>
            </th>
            <td>{{ product.category }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.info.dateTime.date }}</td>
            <td>{{ product.info.classes }}</td>
            <td>{{ product.origin_price }}</td>
            <td>{{ product.price }}</td>
            <td>
              {{ product.is_enabled ? '開放中' : '關閉' }}
            </td>
            <td>{{ product.info.capacity - product.info.studentNum }}</td>
            <td>{{ product.info.studentNum }}</td>
            <td>{{ product.state.nowStatus }}</td>
            <td>
              <button type="button" class="btn btn-secondary btn-sm">詳細</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

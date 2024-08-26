<template>
  <div class="form-check form-switch mt-2 mb-3 ms-3">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="displaySwitch"
      @click="switchMode()"
    />
    <label class="form-check-label" for="displaySwitch">
      {{ `切換成「${isOrdersMode ? '個別課程' : '訂單編號'}」模式` }}
    </label>
  </div>
  <MemberNavs :options="navsOption" :now-option="nowOption" @get-option="getOption" />
  <div class="bg-white py-2 px-5">
    <div v-if="!orders?.length" class="d-flex flex-column align-items-center py-5 lh-1">
      <i
        class="bi bi-journal-x text-gray-200 p-4 rounded-circle my-4"
        style="font-size: 92px; border: 6px solid var(--bs-gray-100)"
      ></i>
      <h3>目前沒有任何訂單</h3>
      <RouterLink to="/products" class="btn btn-primary-light mt-3" style="width: 280px">
        選購課程
        <span class="icon-e icon-east"></span>
      </RouterLink>
    </div>
    <ul v-if="isOrdersMode" class="list-unstyled">
      <li
        class="py-4 border-dashed-b border-gray-100"
        v-for="order in filteredList"
        :key="order.id"
      >
        <h2 class="fs-7 mb-0 p-3 bg-light">
          訂單編號：{{ order.id }}
          <span
            class="badge text-white ms-2 rounded-1"
            :class="[order.is_paid ? 'bg-success' : 'bg-danger']"
          >
            {{ order.is_paid ? '付款完成' : '未付款' }}
          </span>
        </h2>
        <table class="table table-white text-center align-middle mb-0">
          <thead class="d-none">
            <tr>
              <th scope="col">預覽圖片</th>
              <th scope="col">課程名稱</th>
              <th scope="col">報名人數</th>
              <th scope="col">小計</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in order.products" :key="product.id">
              <td width="180">
                <img
                  :src="product.product.imageUrl"
                  :alt="product.product.title"
                  style="height: 100px"
                />
              </td>
              <td>
                <h3 class="fs-7 mb-0 text-start">{{ product.product.title }}</h3>
              </td>
              <td>{{ product.qty }} 位</td>
              <td class="text-end">NT$ {{ fixSubtotal(product) }}</td>
              <td width="160">
                <button
                  type="button"
                  class="btn btn-outline-primary p-2 mx-2 w-75 fs-8 shadow-none"
                  data-bs-toggle="modal"
                  data-bs-target="#productInfo"
                  @click="clickedCourse = { ...product }"
                >
                  課程資訊
                </button>
                <button
                  v-if="product.recentCourse.stateCode === 3"
                  type="button"
                  class="btn p-2 mx-2 w-75 fs-8 shadow-none mt-2"
                  :class="[product.isCommented ? 'btn-primary-light' : 'btn-primary']"
                  data-bs-toggle="modal"
                  data-bs-target="#commentModal"
                  @click="clickedCourse = { ...product }"
                >
                  {{ product.isCommented ? '查看心得' : '填寫心得' }}
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-start">
                <router-link
                  class="btn btn-primary-light py-2 fs-8 shadow-none"
                  :to="`/member/order/${order.id}`"
                >
                  前往訂單明細
                  <span class="icon-e icon-east"></span>
                </router-link>
              </td>
              <td colspan="3" class="text-end">
                <span
                  v-if="
                    order.user.cartOverview.couponDiscount || order.user.cartOverview.fullDiscount
                  "
                  class="badge bg-danger bg-opacity-25 text-danger rounded-1 fs-9 fw-bold me-1"
                >
                  已扣除額外折扣：-
                  {{
                    order.user.cartOverview.couponDiscount + order.user.cartOverview.fullDiscount
                  }}
                </span>
                訂單總金額：NT$ {{ order?.user?.cartOverview?.finalBill }}
              </td>
            </tr>
          </tfoot>
        </table>
      </li>
    </ul>
    <table v-else class="last-tr-borderless table my-4 table-white text-center align-middle">
      <thead>
        <tr>
          <th scope="col">近期開課</th>
          <th scope="col">預覽圖片</th>
          <th scope="col">課程名稱</th>
          <th scope="col">人數</th>
          <th scope="col">小計</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in filteredList" :key="index">
          <td>
            <small class="d-flex flex-column align-items-center fs-7">
              <span
                class="badge rounded-1 mb-2"
                style="letter-spacing: 1.2px"
                :class="{
                  'bg-success text-white': product.recentCourse.stateCode === 0,
                  'bg-primary text-white': product.recentCourse.stateCode === 1,
                  'bg-warning': product.recentCourse.stateCode === 2,
                  'bg-primary-light': product.recentCourse.stateCode === 3,
                }"
              >
                {{ product.recentCourse.caption }}
              </span>
              <span v-if="product.recentCourse.stateCode !== 3" class="fs-6">
                {{ product.recentCourse.date }}
              </span>
            </small>
          </td>
          <td width="120">
            <img
              :src="product.product.imageUrl"
              :alt="product.product.title"
              style="height: 100px"
            />
          </td>
          <td>
            <h2 class="fs-7 mb-0">{{ product.product.title }}</h2>
          </td>
          <td>{{ product.qty }} 位</td>
          <td class="text-end">NT$ {{ fixSubtotal(product) }}</td>
          <td width="160">
            <button
              type="button"
              class="btn btn-outline-primary p-2 mx-2 w-75 fs-8 shadow-none"
              data-bs-toggle="modal"
              data-bs-target="#productInfo"
              @click="clickedCourse = { ...product }"
            >
              課程資訊
            </button>
            <button
              v-if="product.recentCourse.stateCode === 3"
              type="button"
              class="btn p-2 mx-2 w-75 fs-8 shadow-none mt-2"
              :class="[product.isCommented ? 'btn-primary-light' : 'btn-primary']"
              data-bs-toggle="modal"
              data-bs-target="#commentModal"
              @click="clickedCourse = { ...product }"
            >
              {{ product.isCommented ? '查看心得' : '填寫心得' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <ProductModal :clicked-course="clickedCourse" />
  <CommentModal :clicked-course="clickedCourse" />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import getDataStore from '@/stores/getDataStore';
import useProductsStore from '@/stores/useProductsStore';
import utilitiesStore from '@/stores/utilitiesStore';
import memberStore from '@/stores/front/memberStore';
import useActivitiesStore from '@/stores/useActivitiesStore';
import MemberNavs from '@/components/front/member/MemberNavs.vue';
import CommentModal from '@/components/front/member/CommentModal.vue';
import ProductModal from '@/components/front/member/ProductModal.vue';

export default {
  components: {
    MemberNavs,
    CommentModal,
    ProductModal,
  },
  data() {
    return {
      isOrdersMode: true,
      clickedCourse: {},
      orders: null,
      courses: null,
      orderOption: ['全部訂單', '未付款訂單'],
      courseOption: ['所有課程', '未開課', '授課中', '已完課'],
      nowOption: '全部訂單',
    };
  },
  methods: {
    ...mapActions(getDataStore, ['getFontData']),
    ...mapActions(memberStore, ['getUserCommits']),
    ...mapActions(useProductsStore, ['getProduct']),
    ...mapActions(utilitiesStore, ['unixToStr']),
    getOption(value) {
      this.nowOption = value;
    },
    switchMode() {
      this.isOrdersMode = !this.isOrdersMode;
      if (this.isOrdersMode) {
        this.nowOption = '全部訂單';
      } else {
        this.nowOption = '所有課程';
      }
    },
    findRecentCourse(unixArr) {
      const nowDate = 1720098000 + 2; // demo 使用
      // const nowDate = Math.floor(+new Date() / 1000);
      const flatUnixArr = unixArr.flat();
      const [firstUnix] = flatUnixArr;
      let stateCode = 0;
      let targetUnix = null;
      const captions = ['開課日', '今日上課', '下節課程', '完課'];
      // 判斷開始
      if (firstUnix <= nowDate && flatUnixArr[flatUnixArr.length - 1] >= nowDate) {
        const unixIndex = flatUnixArr.findIndex(
          (unix, index) => unix <= nowDate && flatUnixArr[index + 1] >= nowDate,
        );
        stateCode = unixIndex % 2 ? 2 : 1;
        targetUnix = unixIndex % 2 ? flatUnixArr[unixIndex + 1] : flatUnixArr[unixIndex];
      }
      if (flatUnixArr.every((unix) => unix < nowDate)) {
        stateCode = 3;
        targetUnix = flatUnixArr[flatUnixArr.length - 1];
      }
      if (flatUnixArr.every((unix) => unix > nowDate)) {
        targetUnix = firstUnix;
      }
      // 判斷結束
      return { stateCode, caption: captions[stateCode], date: this.unixToStr(targetUnix, false) };
    },
    // 滿人數優惠的小計修正
    fixSubtotal(product) {
      const { promotion } = product.product.state;
      const activityName = Object.keys(this.numActivities)[0];
      const { percentOff } = this.numActivities[activityName];
      if (promotion === activityName) return product.final_total * percentOff;
      return product.final_total;
    },
  },
  computed: {
    ...mapState(useProductsStore, ['singleProduct']),
    ...mapState(getDataStore, ['remoteData']),
    ...mapState(memberStore, ['userComments']),
    ...mapState(useActivitiesStore, ['numActivities']),
    navsOption() {
      return this.isOrdersMode ? this.orderOption : this.courseOption;
    },
    filteredList() {
      switch (this.nowOption) {
        case this.orderOption[1]: // 未付款訂單
          return this.orders.filter((order) => !order.is_paid);
        case this.courseOption[0]: // 全部課程
          return this.courses;
        case this.courseOption[1]: // 未開課
          return this.courses.filter((course) => course.recentCourse.stateCode === 0);
        case this.courseOption[2]: // 授課中
          return this.courses.filter(
            (course) => course.recentCourse.stateCode > 1 && course.recentCourse.stateCode < 3,
          );
        case this.courseOption[3]: // 已完課
          return this.courses.filter((course) => course.recentCourse.stateCode === 3);
        default:
          return this.orders;
      }
    },
  },
  watch: {
    remoteData(newValue) {
      // 在單一產品 obj 新增需要屬性
      this.orders = [...newValue].map((order) => {
        const updatedOrder = { ...order };
        const products = Object.values(order.products);
        products.forEach((product) => {
          // 新增：最近開課時間（以 id 取得訂單中的產品 Obj 後，新增屬性）
          const { classTime } = product.product.info;
          updatedOrder.products[product.id].recentCourse = this.findRecentCourse(classTime);
          // 新增：是否已評論
          updatedOrder.products[product.id].isCommented = this.userComments.some(
            (comment) => comment.orderId === product.id,
          );
        });
        return updatedOrder;
      });
      console.log(this.orders);
      this.courses = newValue.map((order) => Object.values(order.products)).flat();
    },
  },
  mounted() {
    this.getFontData('orders');
    this.getUserCommits();
  },
};
</script>

<style lang="scss">
.last-tr-borderless tbody {
  tr:last-child td {
    border: unset;
  }
}
</style>

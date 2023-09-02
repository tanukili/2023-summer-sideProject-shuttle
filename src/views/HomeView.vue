<script>
import HeaderNavbar from '../components/HeaderNavbar.vue';

export default {
  // data() {
  //   return {
  //     data: {},
  //   };
  // },
  // mounted() {
  //   this.$http.get('https://randomuser.me/api/').then((response) => {
  //     console.log(response.data);
  //   });
  // },
  comments: {
    HeaderNavbar,
  },
};
</script>

<template>
  <div>
    <h1>首頁內容</h1>
    <small>小字</small>
    <button type="button" class="btn btn-secondary me-3">Primary</button>
    <button type="button" class="btn btn-secondary me-3 disabled">
      Primary
    </button>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="width: 400px">
      <img
        src="../assets/images/product01.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <p>BS5 結束</p>
  </div>
</template>

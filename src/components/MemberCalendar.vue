<script>
// FullCalendar Vue
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from '@fullcalendar/multimonth';
// import zhCnLocale from '@fullcalendar/core/locales/zh-cn';
import { mapState, mapActions } from 'pinia';
import useOrderStore from '../stores/useOrderStore';

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [multiMonthPlugin, interactionPlugin, dayGridPlugin],
        initialView: 'dayGridMonth',
        // locale: zhCnLocale,
        // handleWindowResize: true,
        multiMonthTitleFormat: { month: 'long' },
        aspectRatio: 2,
        expandRows: true,
        showNonCurrentDates: true,
        fixedWeekCount: false,
        headerToolbar: {
          start: 'prev,next',
          center: 'title',
          end: 'today dayGridMonth,multiMonthYear',
        },
        buttonText: {
          today: '返回',
          month: '月',
          year: '年',
        },
        dayMaxEvents: true,
        eventMouseEnter: this.handleEventMouseEnter, // hover 事件
        events: [],
      },
      tooltipOptions: {
        title: 'This is a tooltip',
        placement: 'top',
        trigger: 'hover',
      },
    };
  },
  methods: {
    ...mapActions(useOrderStore, ['getOrders']),

    handleEventMouseEnter(info) {
      const event = info.event._def;
      // console.log(info);
      this.$swal({
        title: `${event.title}`,
        html: `<p>上課人數：${event.extendedProps.description}</p><p>上課時間：${event.extendedProps.startStr}</p>`,
      });
    },
  },
  mounted() {
    this.getOrders();
  },
  beforeUpdate() {
    this.calendarOptions.events = this.calenderEvents;
  },
  computed: {
    ...mapState(useOrderStore, ['orders', 'calenderEvents']),
  },
};
</script>

<template>
  <div class="d-none">{{ calenderEvents }}</div>
  <div class="calendar-h mb-3 shadow bg-white">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<style>
.fc-header-toolbar {
  margin: 8px !important;
  .fc-toolbar-title {
    padding: 0 8px;
    font-size: calc(var(--bs-body-font-size) * 1.25);
  }
  .fc-toolbar-chunk {
    display: flex;
    font-size: var(--bs-body-font-size);
  }
  .fc-prev-button,
  .fc-next-button {
    padding: 4px;
  }
}
.fc-multimonth-title {
  background-color: var(--bs-secondary-light);
}
@media (max-width: 576px) {
  .fc-toolbar-chunk {
    order: 0;
  }
  .fc-header-toolbar {
    flex-wrap: wrap;
    .fc-toolbar-chunk:nth-child(2) {
      order: 1;
      padding-top: 8px;
      width: 100%;
      .fc-toolbar-title {
        margin: 0 auto;
      }
    }
  }
}
</style>

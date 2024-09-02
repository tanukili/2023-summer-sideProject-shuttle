<template>
  <div class="d-none">{{ calenderEvents }}</div>
  <div class="calendar-h mb-3 shadow bg-white">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
// FullCalendar Vue
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from '@fullcalendar/multimonth';
import { mapState, mapActions } from 'pinia';
import useOrderStore from '@/stores/useOrderStore';
import alertStore from '@/stores/alertStore';

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [multiMonthPlugin, interactionPlugin, dayGridPlugin],
        initialView: 'dayGridMonth',
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
  computed: {
    ...mapState(useOrderStore, ['orders', 'calenderEvents']),
    ...mapState(alertStore, ['alertstyles']),
  },
  methods: {
    ...mapActions(useOrderStore, ['getOrders']),
    ...mapActions(alertStore, ['baseContent', 'btns']),
    handleEventMouseEnter(info) {
      const event = info.event._def;
      this.alertstyles.alert_btns.fire({
        ...this.baseContent(`${event.title}`, 0, '關閉'),
        // ...this.btns('課程詳細', false),
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
};
</script>

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

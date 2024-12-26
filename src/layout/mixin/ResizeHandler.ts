import { useAppStore } from '@/store/modules/app'
import defaultSettings from '@/settins'
const appStore = useAppStore()

const { body } = document
const WIDTH = defaultSettings.sidebarMoblie // refer to Bootstrap's responsive design

export default {
  watch: {
    $route(route) {
      if (appStore.getDevice === 'mobile' && appStore.getSidebarOpened) {
        appStore.setSidebarOpened(true)
      }
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    this.$_resizeHandler()
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandler() {
      // 判断页面是否可见
      if (!document.hidden) {
        const isMobile = this.$_isMobile()
        appStore.setDevice(isMobile ? 'mobile' : 'desktop')
        appStore.setWithoutAnimation(true)
        if (isMobile) {
          appStore.setSidebarOpened(true)
        }
      }
    },
  },
}

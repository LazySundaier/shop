export default {
  data () {
    return {

    }
  },
  methods: {
    loginCorfirm () {
      if (!this.$store.getters.getToken) {
        this.$dialog
          .confirm({
            title: '温馨提示',
            message: '此时需要登录才能继续操作!',
            confirmButtonText: '去登录',
            cancelButtonText: '再逛逛'
          })
          .then(() => {
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {})
        return true
      }
      return false
    }
  }
}

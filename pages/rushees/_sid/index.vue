<template>
  <section class="rushee-view">
    <div class="content">
      <div class="subsection">
        <span class="rushee-sid" style="padding: 10px 0 10px 10px; margin: 10px 0 10px 0;">{{ rushee.sid }}</span>
        <span class="rushee-rid" style="padding: 10px 10px; margin: 10px 0 10px 0;">{{ `(${rushee.rid})` }}</span>
        <nuxt-link :to="{ path: `/rushees/${rushee.sid}/update`, params: { sid: rushee.sid }}">Update</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'sid',
  asyncData ({ params, error }) {
    return axios.get('/api/rushees/' + params.sid)
      .then((res) => {
        return { rushee: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Rushee not found' })
      })
  },
  head () {
    return {
      title: `Rushee: ${this.rushee.sid}`
    }
  }
}
</script>

<style lang="stylus" scoped>
.rushee-view
  padding-top 0

.content
  position absolute
  width 100%

.subsection
  background-color #fff
  border-radius 2px
  margin 25px 0
  transition all .5s cubic-bezier(.55,0,.1,1)
  padding 10px 30px 10px 30px
  position relative
  line-height 20px
  .subsection-title
    margin 25px 10px
    font-size 26px
    font-weight 500
  .rushee-sid
    font-size 24px
    font-weight 500
  .rushee-rid
    font-size 24px
    font-weight 500
    color #707070
  a
    text-decoration underline
    &:hover
      color #515ec4

</style>

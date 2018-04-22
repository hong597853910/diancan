<template>
<div>
    <div class="Dheader">{{title}}</div>
</div>
</template>

<script>

export default {
    props:{
        title:''
    }
}


</script>
<style scoped lang="stylus">
    .Dheader
      line-height 32px
      width 100%
      background #fff
      font-size 15px
      font-weight 600
      text-align center
      color #07111b
      border-bottom 2px solid #eee
</style>

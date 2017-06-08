<template>
  <div class="hello">
    <nav ref="nav"></nav>
  </div>
</template>

<script>
import swiper from "../assets/newswiper.js";
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    // console.info(this.$refs.nav)
    EnabelSwipe.EnabelSwipe(
				this.$refs.nav,
				{
					left:function(){
						alert("left"+Date.now());
					},
					right:function(){
						alert("right"+Date.now());
					},
					up:function(){
						alert("up"+Date.now());
					},
					down:function(){
						alert("down"+Date.now());
					},
					
				}
			);
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body,html{
  width:100%;
  height:100%;
}
nav{
  background:deepskyblue;
  width:100%;
  height:3800px;
}
</style>

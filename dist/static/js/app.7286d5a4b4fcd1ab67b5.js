webpackJsonp([13],{113:function(t,n){},117:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view",{staticClass:"view"})],1)},staticRenderFns:[]}},24:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"h",function(){return a}),e.d(n,"b",function(){return o}),e.d(n,"c",function(){return u}),e.d(n,"d",function(){return r}),e.d(n,"i",function(){return c}),e.d(n,"e",function(){return s}),e.d(n,"f",function(){return p}),e.d(n,"j",function(){return f}),e.d(n,"g",function(){return d}),e.d(n,"k",function(){return h}),e.d(n,"l",function(){return l});var i="UPLOAD_GUESS",a="SET_BOOK_ID",o="GET_DETAIL_DATA",u="GET_CATELOG_DATA",r="GET_CHAPTER_DATA",c="GET_CHAPTER_INDEX",s="USER_LOGIN",p="USER_MINE",f="KEYBOARD_POPUP",d="GET_FAVORITE_DATA",h="CHANGE_FAVORITE_LIST",l="CHANGE_GUIDE_STATE"},43:function(t,n,e){"use strict";var i=e(9),a=e(118),o=function(t){e.e(0).then(function(){var n=[e(126)];t.apply(null,n)}.bind(this)).catch(e.oe)},u=function(t){e.e(6).then(function(){var n=[e(125)];t.apply(null,n)}.bind(this)).catch(e.oe)},r=function(t){e.e(11).then(function(){var n=[e(133)];t.apply(null,n)}.bind(this)).catch(e.oe)},c=function(t){e.e(1).then(function(){var n=[e(124)];t.apply(null,n)}.bind(this)).catch(e.oe)},s=function(t){e.e(3).then(function(){var n=[e(123)];t.apply(null,n)}.bind(this)).catch(e.oe)},p=function(t){e.e(9).then(function(){var n=[e(122)];t.apply(null,n)}.bind(this)).catch(e.oe)},f=function(t){e.e(2).then(function(){var n=[e(131)];t.apply(null,n)}.bind(this)).catch(e.oe)},d=function(t){e.e(5).then(function(){var n=[e(128)];t.apply(null,n)}.bind(this)).catch(e.oe)},h=function(t){e.e(7).then(function(){var n=[e(129)];t.apply(null,n)}.bind(this)).catch(e.oe)},l=function(t){e.e(4).then(function(){var n=[e(130)];t.apply(null,n)}.bind(this)).catch(e.oe)},v=function(t){e.e(8).then(function(){var n=[e(127)];t.apply(null,n)}.bind(this)).catch(e.oe)},g=function(t){e.e(10).then(function(){var n=[e(132)];t.apply(null,n)}.bind(this)).catch(e.oe)};a.a.prototype.goBack=function(){this.isBack=!0,this.go(-1)},i.default.use(a.a),n.a=new a.a({scrollBehavior:function(t,n,e){return{x:0,y:0}},routes:[{path:"/",redirect:"/home/content"},{path:"/home",component:o,children:[{path:"content",component:u}]},{path:"/search",name:"search",component:r},{path:"/detail",component:c},{path:"/bookrack",component:s},{path:"/catelog",component:p},{path:"/mine",component:f,children:[{path:"login",name:"login",component:d},{path:"personal",name:"personal",component:h},{path:"register",component:l},{path:"forget",component:v}]},{path:"/reader",component:g}]})},44:function(t,n,e){"use strict";var i=e(9),a=e(50),o=e(75),u=e(76),r=e(74);i.default.use(a.a);var c={bookId:null,favoriteList:[],chapterList:[],chapterListIds:[],chapterIndex:0,guessContent:{},userInfo:{},isLogin:!1,isKeyboardPopup:!1,isFirstLoadFav:!0,guideInfo:{isShowGuide:!0,GuideHref:"login"}};n.a=new a.a.Store({state:c,getters:o.a,mutations:u.a,actions:r.a})},45:function(t,n){},48:function(t,n,e){e(113);var i=e(49)(e(72),e(117),"data-v-796ebbe6",null);t.exports=i.exports},54:function(t,n,e){"use strict";var i=e(23),a=e.n(i),o="tf_webapp=1&c_av=4.3.0";n.a={bannerApi:function(){return a.a.get("https://api.doufu.la/index.php/banner/get?place=home.novel&"+o)},contentApi:function(){return a.a.get("https://api.doufu.la/index.php/topics/novel_entrance?"+o)},guessApi:function(t){return a.a.get("https://api.doufu.la/index.php/novel/personal_recommend?last="+t+"&"+o)},firstGuessApi:function(){return a.a.get("https://api.doufu.la/index.php/novel/personal_recommend?last=&"+o)},detailApi:function(t){return a.a.get("https://api.doufu.la/index.php/topic/novel?topic_id="+t+"&"+o)},catelogDate:function(t){return a.a.get("https://api.doufu.la/index.php/novel/chapter_list?novel_id="+t+"&"+o)},chapterApi:function(t){return a.a.get("https://api.doufu.la/index.php/post/view/"+t+"?type=read&"+o)},userLoginApi:function(t,n){return a.a.get("https://api.doufu.la/index.php/member/user_login?account="+t+"&password="+n+"&"+o)},userMineApi:function(){return a.a.get("https://api.doufu.la/index.php/member/mine?"+o)},favoriteApi:function(){return a.a.get("https://api.doufu.la/index.php/favorite?fav_type=18&last=0&size=20&new=1&"+o)},forgetApi:function(t){return a.a.get("https://api.doufu.la/index.php/member/reset_passwords?account="+t+"&"+o)},removeCollectApi:function(t){return a.a.get("https://api.doufu.la/index.php/favorite/remove?id="+t+"&object_type=5&"+o)},addCollectApi:function(t){return a.a.get("https://api.doufu.la/index.php/favorite/add?id="+t+"&object_type=5&"+o)},searchApi:function(t){return a.a.get("https://api.doufu.la/index.php/search/content?types=18&keyword="+t+"&size=20&start=0&"+o)}}},72:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{transitionName:"slide-left"}},beforeRouteUpdate:function(t,n,e){console.log(this.$router.isBack);var i=this.$router.isBack;this.transitionName=i?"slide-right":"slide-left",this.$router.isBack=!1,e()}}},73:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(9),a=e(48),o=e.n(a),u=e(43),r=e(46),c=e.n(r),s=e(45),p=(e.n(s),e(23)),f=e.n(p),d=e(44),h=e(47),l=e.n(h);f.a.defaults.withCredentials=!0,i.default.use(l.a,{error:"../static/img/error.jpg",loading:"../static/img/loding.gif",try:3}),i.default.use(c.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:u.a,template:"<App/>",components:{App:o.a},store:d.a})},74:function(t,n,e){"use strict";var i,a=e(31),o=e.n(a),u=e(78),r=e.n(u),c=e(24),s=e(54);n.a=(i={},o()(i,c.a,function(t){var n=t.commit,e=t.state;return new r.a(function(t,i){e.guessContent.last?s.a.guessApi(e.guessContent.last).then(function(e){0===e.data.status?(n(c.a,e.data),t()):i()}):s.a.firstGuessApi().then(function(e){0===e.data.status?(n(c.a,e.data),t()):i()})})}),o()(i,c.b,function(t){var n=t.commit,e=t.state;return new r.a(function(t,i){s.a.detailApi(e.bookId).then(function(e){0===e.data.status?(n(c.a,e.data),t(e.data)):i()})})}),o()(i,c.c,function(t){var n=t.commit,e=t.state;return new r.a(function(t,i){s.a.catelogDate(e.bookId).then(function(e){0===e.data.status?(n(c.c,e.data.data.list),t(e.data)):i()})})}),o()(i,c.d,function(t){var n=t.getters;return new r.a(function(t,e){s.a.chapterApi(n.chapterId).then(function(n){0===n.data.status?t(n.data):e()})})}),o()(i,c.e,function(t,n){t.commit;return new r.a(function(t,e){s.a.userLoginApi(n.phoneNumber,n.password).then(function(n){t(n.data)})})}),o()(i,c.f,function(t){var n=t.commit;return new r.a(function(t,e){s.a.userMineApi().then(function(i){var a=!1;if(0===i.data.status){a=!0;var o=i.data.data.user;n(c.f,{userInfo:o,isLogin:a}),t()}else(i.data.status=-244)&&(n(c.f,{isLogin:a}),e(i))})})}),o()(i,c.g,function(t,n){var e=t.commit;return new r.a(function(t){s.a.favoriteApi().then(function(i){0===i.data.status&&(e(c.g,{list:i.data.data.list,isFirstLoadFav:n.isFirstLoadFav}),t(i.data.data.list))})})}),i)},75:function(t,n,e){"use strict";n.a={chapterId:function(t){return t.chapterListIds[t.chapterIndex]}}},76:function(t,n,e){"use strict";var i,a=e(31),o=e.n(a),u=e(24);n.a=(i={},o()(i,u.h,function(t,n){n&&(t.bookId=n)}),o()(i,u.a,function(t,n){0===n.status&&(t.guessContent=n.data)}),o()(i,u.c,function(t,n){t.chapterListIds=[],t.chapterList=n,n.forEach(function(n){t.chapterListIds.push(n.id)})}),o()(i,u.i,function(t,n){t.chapterIndex=n}),o()(i,u.j,function(t,n){n?t.isKeyboardPopup=n:setTimeout(function(){t.isKeyboardPopup=n},300)}),o()(i,u.f,function(t,n){n.userInfo&&(t.userInfo=n.userInfo),t.isLogin=n.isLogin}),o()(i,u.g,function(t,n){t.favoriteList=n.list,t.isFirstLoadFav=n.isFirstLoadFav}),o()(i,u.k,function(t,n){n.isAddFav||(t.favoriteList=t.favoriteList.filter(function(t){return n.bookID!==t.id}))}),o()(i,u.l,function(t,n){t.isLogin?t.guideInfo.isShowGuide=!1:(t.guideInfo.GuideHref=n.GuideHref,t.guideInfo.isShowGuide=n.isShowGuide)}),i)}},[73]);
//# sourceMappingURL=app.7286d5a4b4fcd1ab67b5.js.map
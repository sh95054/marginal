!function(t){var o=location.protocol.split(":")[0]+"://"+"api.zhuishushenqi.com",n={ctrip:{cp:{img:"img/ctrip.png",context:""},rule:["本次活动兑换码红包仅限新用户兑换使用","登录追书神器APP—进入个人资料页面—点击兑换中心—输入兑换码—点击右边箭头，即可领取20元追书券，开始享受全站百万书籍畅读吧；","赠送的追书券有效期为30天；","活动时间为6月9日-6月16日，请在活动期间完成兑换；","如有疑问，请联系「追书神器」微信客服；","本次活动的最终解释权归追书神器所有。"]},ddsp:{cp:{img:"",context:"咚咚食品用户专享"},rule:["本活动抢到的兑换码红包，仅限购买咚咚食品的用户使用,多购多得，可累加使用；","登录追书神器APP—进入个人资料页面—点击兑换中心—输入兑换码—点击右边箭头，即可领取5元追书券，开始享受全站百万书籍畅读吧；","赠送的追书券有效期为15天；","活动时间：即日起至2017年12月31日24点截止，请在活动期间完成兑换；","如有疑问，请联系「追书神器」微信客服：zssqxs；","本次活动的最终解释权归追书神器所有。"]}},e={showLoading:function(o){t("html")[o?"addClass":"removeClass"]("hidden"),t("#c-load").css("display",o?"block":"none")},showConfirm:function(o,n){t("#c-confirm .code span").text(n||""),t("html")[o?"addClass":"removeClass"]("hidden"),t("#c-mask").css("display",o?"block":"none")},showModal:function(o,n){var e=t("#c-modal");e.text(o),e.css("display","block"),n||setTimeout(function(){e.css("display","none")},2e3)},GetQueryString:function(t){var o=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(o);return null!=n?unescape(decodeURI(n[2])):null}},s={state:{lost:!window.sessionStorage.getItem("fctco")&&"ddsp"==e.GetQueryString("tag")},Init:function(){this.paintData(),this.evtSet()},paintData:function(){var o=e.GetQueryString("tag"),i=n[o],c=i.cp.img?"<img src='"+i.cp.img+"'/>":"<div class='text'>"+i.cp.context+"</div>";t("#cpType").html(c),t("#rule").html(function(){for(var t=i.rule,o=[],n=0,e=t.length;n<e;n++)o.push("<p><em>"+(n+1)+"、</em>"+t[n]+"</p>");return o.join("")}()),s.state.lost&&e.showModal("活动地址失效了哦",!0)},evtSet:function(){t("#receive").on("click",function(){1!=s.state.lost&&(_czc.push(["_trackEvent","书券","领取","M",1,"receive"]),e.showLoading(!0),t.ajax({type:"get",url:o+"/activity/code",data:{tag:e.GetQueryString("tag")},success:function(t){e.showLoading(!1);var o=JSON.parse(t);o.ok?(e.showConfirm(!0,o.code),window.sessionStorage.removeItem("fctco")):e.showModal(o.msg)},error:function(){e.showLoading(!1),e.showModal("网络错误")}}))}),t("#confirm-close").on("click",function(){e.showConfirm(!1)})}};s.Init()}(window.Zepto);
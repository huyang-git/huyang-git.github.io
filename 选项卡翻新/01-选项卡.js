var current = 0;
var x = 0;

function showItem(n) {
  $(".content").siblings().css("opacity", 0);
  $(".title").css("background", "linear-gradient(145deg, #ffffff, #dcdcdc");
  $(".content").eq(n).css("opacity", 1);
  $(".title").eq(n).css({"background": "gray"});
  return n;
}
showItem(0);


$(".title").click(function () {
 showItem($(this).index());
})

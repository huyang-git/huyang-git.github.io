let y = Math.random() * 10;

function test() {
   if (y > 9) {
      document.getElementById("miji").innerHTML = ("吞天决")
   } else if (y > 8) {
      document.getElementById("miji").innerHTML = ("帝皇剑典")
   } else if (y > 7) {
      document.getElementById("miji").innerHTML = ("轮回功")
   } else if (y > 6) {
      document.getElementById("miji").innerHTML = ("惊涛魔气")
   } else if (y > 5) {
      document.getElementById("miji").innerHTML = ("大荒掌")
   } else if (y > 4) {
      document.getElementById("miji").innerHTML = ("无字经")
   } else if (y > 3) {
      document.getElementById("miji").innerHTML = ("斩龙道")
   } else if (y > 2) {
      document.getElementById("miji").innerHTML = ("秘运神决")
   } else if (y > 1) {
      document.getElementById("miji").innerHTML = ("佛怒红莲")
   } else {
      document.getElementById("miji").innerHTML = ("焚决")
   }
}

let k = Math.random() * 10;

function test2() {
   if (k > 9) {
      document.getElementById("tizhi").innerHTML = ("吞天体")
   } else if (k > 8) {
      document.getElementById("tizhi").innerHTML = ("帝皇剑体")
   } else if (k > 7) {
      document.getElementById("tizhi").innerHTML = ("轮回体")
   } else if (k > 6) {
      document.getElementById("tizhi").innerHTML = ("海神体")
   } else if (k > 5) {
      document.getElementById("tizhi").innerHTML = ("大荒圣体")
   } else if (k > 4) {
      document.getElementById("tizhi").innerHTML = ("道体")
   } else if (k > 3) {
      document.getElementById("tizhi").innerHTML = ("青龙体")
   } else if (k > 2) {
      document.getElementById("tizhi").innerHTML = ("幸运之体")
   } else if (k > 1) {
      document.getElementById("tizhi").innerHTML = ("佛心通透")
   } else {
      document.getElementById("tizhi").innerHTML = ("焚神体")
   }
}
let j = Math.random() * 10;

function test3() {
   if (j > 9) {
      document.getElementById("bingqi").innerHTML = ("吞天剑")
   } else if (j > 8) {
      document.getElementById("bingqi").innerHTML = ("帝皇剑")
   } else if (j > 7) {
      document.getElementById("bingqi").innerHTML = ("轮回枪")
   } else if (j > 6) {
      document.getElementById("bingqi").innerHTML = ("水神弓")
   } else if (j > 5) {
      document.getElementById("bingqi").innerHTML = ("大荒拳套")
   } else if (j > 4) {
      document.getElementById("bingqi").innerHTML = ("无字天书")
   } else if (j > 3) {
      document.getElementById("bingqi").innerHTML = ("斩龙刀")
   } else if (j > 2) {
      document.getElementById("bingqi").innerHTML = ("聚运塔")
   } else if (j > 1) {
      document.getElementById("bingqi").innerHTML = ("红莲盘")
   } else {
      document.getElementById("bingqi").innerHTML = ("焚天刀")
   }
}

   let z = Math.random() * 20;
function test4() {


   if (z > 18) {
      document.getElementById("BOSS").innerHTML = ("秦广王")
   } else if (z > 16) {
      document.getElementById("BOSS").innerHTML = ("玉麒麟")
   } else if (z > 14) {
      document.getElementById("BOSS").innerHTML = ("宋帝王")
   } else if (z > 12) {
      document.getElementById("BOSS").innerHTML = ("剑皇")
   } else if (z >10) {
      document.getElementById("BOSS").innerHTML = ("大荒拳圣")
   } else if (z > 8) {
      document.getElementById("BOSS").innerHTML = ("无名老贼")
   } else if (z > 6) {
      document.getElementById("BOSS").innerHTML = ("楚江王")
   } else if (z > 4) {
      document.getElementById("BOSS").innerHTML = ("上古魔猿")
   } else if (z > 2) {
      document.getElementById("BOSS").innerHTML = ("妖尘")
   } else {
      document.getElementById("BOSS").innerHTML = ("坤帝")
   }
}
let sum = 0;

function yunsuan() {
   sum = y + k + j;
   if (sum < z) {
      document.getElementById("end").innerHTML = ("打不过,去氪金吧")
    }
    if (sum == z) {
      document.getElementById("end").innerHTML = ("打个平手,可是没用")
    }
    if (sum > z) {
      document.getElementById("end").innerHTML = ("打过了,再试一次吧")
    }
}

function chonglai() {
   location.reload();
}

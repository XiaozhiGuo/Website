/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 
 Function: mail_to 发送邮件
 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* */
function mail_to() {
  eval(String.fromCharCode(
    108,111, 99, 97,116,105,111,110, 46,104,
    114,101,102, 32, 61, 32, 39,109, 97,105,
    108,116,111, 58, 90, 45, 80, 84, 82, 69,
     69, 64,106, 97,120, 97, 46,106,112, 39
  ));
}

/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 
  jQuery功能使用
 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* */
$(function(){
  // 页内滚动
  $('a[href^=#]').click(function() {
     // 滚动的速度
     var speed = 400; 
     // アンカーの値取得
     var href= $(this).attr("href");
     // 移動先を取得
     var target = $(href == "#" || href == "" ? 'html' : href);
     // 移動先を数値で取得
     var position = target.offset().top;
     // スムーススクロール
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
  });

  // ページ内TOPに戻る
  var returnTop = $('#page-top');
  returnTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      returnTop.fadeIn();
    } else {
      returnTop.fadeOut();
    }
  });
  //スクロール->トップ
  returnTop.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  // 規約同意ボタン
  var tgdiv = $('#acceptArea');
  //画面下位置を取得

  var bottomPos = $(window).height();
  var showFlug = false;
  //acceptAreaを画面下へ配置
  tgdiv.css('top', bottomPos+100+'px');
  // フラグがONの時のみ、規約同意ボタンを表示
  if(termsCheck()) {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= bottomPos) {
        if (showFlug == false) {
          showFlug = true;
          tgdiv.stop().animate({'top' : bottomPos-100+'px'}, 200); 
        }
      } else {
        if (showFlug) {
          showFlug = false;
          tgdiv.stop().animate({'top' : bottomPos+100+'px'}, 200); 
        }
      }
    });
    //一旦窗口大小调整宽度改变，
    $(window).resize(function(){
      bottomPos = $(window).height();
    });
  }

  // 表单输入
  var tgdiv1 = $('#inputform');
  var tgdiv2 = $('#caution');
  tgdiv1.css('display', 'none');
  tgdiv2.css('display', 'block');
  if(termsCheck()) {
    tgdiv1.css('display', 'block');
    tgdiv2.css('display', 'none');
  }
});

/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 
 Function: termsCheck
   規約のみの表示かどうかを確認
 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* */
function termsCheck() {
  url = location.href;
  flg = url.substr(url.length-1,1);
  if (flg=='1') {
    return true;
  } else {
    return false;
  }
}
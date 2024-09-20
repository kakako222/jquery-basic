$(function () {
    $(window).on('load', function () {
        //HTMLが読み込まれた時
        console.log('loadイベントが発生しました');
    });
    //スクロールがされたとき
    $(window).on('scroll', function () {
        console.log('scrollイベントが発生しました');
    });
});

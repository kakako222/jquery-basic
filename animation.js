$(function () {
    //id属性がfadeinの要素がクリックされたら
    $('#slideUp').on('click', function () {
        //フェードインする
        $('.box').slideUp();
    });
    //id属性がfadeinの要素がクリックされたら
    $('#slideDown').on('click', function () {
        //フェードインする
        $('.box').slideDown();
    }); //id属性がfadeinの要素がクリックされたら
    $('#slideToggle').on('click', function () {
        //フェードインする
        $('.box').slideToggle();
    });
});
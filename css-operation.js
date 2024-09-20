$(function () {
    //id属性がred要素がクリックされたら
    $('#red').on('click', function () {
        //id属性がtargetの要素のカラープロパティをredにする
        $('#target').css('color', 'red');
    });
    //id属性がblue要素がクリックされたら
    $('#blue').on('click', function () {
        //id属性がtargetの要素のカラープロパティをredにする
        $('#target').css('color', 'blue');
    });

});
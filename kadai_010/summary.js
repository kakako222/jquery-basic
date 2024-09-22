$(function () {
    //1.ボタンがクリックされたら文字が赤くなる
    $('#change-color').on('click', function () {
        $('#target').css('color', 'red');
    });
    //2.ボタンがクリックされたら文字が変化する
    $('#change-text').on('click', function () {
        $('#target').text('Hello!');
        $('#target').css('color', 'red');
    });
    //3.ボタンがクリックされたらフェードアウトする
    $('#fade-out').on('click', function () {
        $('#target').fadeOut();
    });
    //4.ボタンがクリックされたらフェードインする
    $('#fade-in').on('click', function () {
        $('#target').fadeIn();
    });
});
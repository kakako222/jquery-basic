$(function () {
    // id属性がtaggleの要素がクリックされたら
    $('#toggle').on('click', function () {
        // id属性がtaggleの要素にclass属性'sample'を追加/削除
        $('#target').toggleClass('sample');
    });
    // id属性がhasの要素がクリックされたら
    $('#has').on('click', function () {
        //id属性がtargetの要素にclass属性sampleがあるか取得する
        let result = $('#target').hasClass('sample');
        //条件分岐してコンソールを表示する
        if (result) {
            console.log('sampleクラスがあります');
        } else {
            console.log('sampleクラスがありません');
        }
    });
});

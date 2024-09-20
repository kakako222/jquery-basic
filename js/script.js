$(function () {
    //class属性値の先頭がsampleの要素だけを抽出する
    const text = $('li[class^="sample"]').text();
    console.log(text);
});


// hàm này sẽ trả về chuỗi truy vấn trong Urls, ví dụ:
// https://kodelang.dev/test%key=value
// thì trong trường hợp input="key" thì hàm sẽ trả về "value"
function getUrlVar(input){
    var queryString =  window.location.search;
    var urlParams = new URLSearchParams(queryString);
    return urlParams.get(input);
}
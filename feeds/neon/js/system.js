/*
    this script use for system process
    Author: Võ Quốc Thịnh
    Email: quocthinhvo0@gmail.com
    GitHub: quocthinhvo
*/

function system_convert(md){
    var converter = new showdown.Converter();
    converter.setOption("parseImgDimensions", true);
    converter.setOption("tables", true);
    converter.setOption("simplifiedAutoLink", true);
    converter.setOption("tasklists", true);
    converter.setOption("ghMentions", true);
    //converter.setOption("ghMentionsLink", true);
    var html = converter.makeHtml(md);
    return html;
}

function system_url(key){
    var queryString =  window.location.search;
    var urlParams = new URLSearchParams(queryString);
    return urlParams.get(key);
}
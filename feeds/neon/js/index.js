// This file is script for index.html 
/*
    Author: Võ Quốc Thịnh
    GitHub: quocthinhvo
    Email: quocthinhvo0gmail.com
*/
function init(){
    /*
        init is the first function run when page loaded.
    */
    //load title
    document.title = config_title;
    document.getElementById("tweet").href = "https://www.github.com/" + config_parent + "/" + config_repo + "/issues/new";
    info_create();
    event_get();
}

window.onscroll = function(){
    //console.log("Đang cuộn tới " + window.pageYOffset + " trong " + $(document).height());
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        event_get();
    }
}
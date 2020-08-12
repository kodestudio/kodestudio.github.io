////////////////////
//
// Khởi hàm init này chạy đầu tiên sau khi page load xong :v
//
//////////////////////////
function addList(input){
    var tag = document.createElement("div");
    //var text = document.createTextNode(input);
    //console.log(input);
    //tag.appendChild(text);
    tag.className = "list-group-item list-group-item-action"; 
    tag.innerHTML = input;
    var element = document.getElementById("listview_repos");
    element.appendChild(tag);
}



function init(){
    var listrepos_string = GitHub_listRepos();
    var listrepos = JSON.parse(listrepos_string);
    // lấy được tên các repo mở
    for (var i = 0; i< listrepos.length; i++){
        var content = '<div class="card shadow"><div class="card-header"><strong id="name">NameRepoValue</strong> <i id="language" style="float: right;">LanguageRepoValue</i></div><div class="card-body"><p id="des" class="card-text">DesRepoValue</p></div><div class="card-footer"><a id="viewFeeds"><button class="btn btn-primary">Feeds</button></a><a id="viewGithub" href="UrlGitHubValue"><button class="btn btn-primary">GitHub</button></a><button class="btn btn-outline-danger"><i id="star" class="fas fa-star">StarRepoValue</i></button><button class="btn btn-outline-danger"><i id="watch" class="fas fa-eye">WatchRepoValue</i></button><button class="btn btn-outline-danger"><i id="fork" class="fas fa-share">ForkRepoValue</i></button></div></div>';
        // Đổi tên của repo
        content = content.replace("NameRepoValue", listrepos[i].name);
        content = content.replace("DesRepoValue", listrepos[i].description);
        content = content.replace("UrlGitHubValue", listrepos[i].html_url);
        content = content.replace("StarRepoValue",listrepos[i].stargazers_count);
        content = content.replace("WatchRepoValue", listrepos[i].watchers_count);
        content = content.replace("ForkRepoValue", listrepos[i].forks_count);
        content = content.replace("LanguageRepoValue", listrepos[i].language);
        addList(content);
        //console.log(content);
    }
}
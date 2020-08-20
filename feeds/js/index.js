//////////////////////////
//
// Hàm này tạo một đối tượng mới trong list
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
    page = 1;
    listrepos_string = GitHub_listRepos(page);
    var listrepos = JSON.parse(listrepos_string);
    // lấy được tên các repo mở
    for (var i = 0; i< listrepos.length; i++){
        //var content = '<div><div class="card"><div class="card-header"><strong id="name">NameRepoValue</strong> <i id="language" style="float: right;">LanguageRepoValue</i></div><div class="card-body"><p id="des" class="card-text">DesRepoValue</p></div><div class="card-footer"><a id="viewFeeds" href="FeedsValue"><button class="btn btn-primary">Feeds</button></a><button style="margin-left: 10px;" class="btn btn-outline-danger"><i id="star" class="fas fa-star">StarRepoValue</i></button><button style="margin-left: 10px;" class="btn btn-outline-danger"><i id="watch" class="fas fa-eye">WatchRepoValue</i></button><button style="margin-left: 10px;" class="btn btn-outline-danger"><i id="fork" class="fas fa-share">ForkRepoValue</i></button></div></div></div>';
        var content = '<div class="card"><div class="card-header"><strong id="name">NameRepoValue</strong> <i id="language" style="float: right;">LanguageRepoValue</i></div><div class="card-body"><p id="des" class="card-text">DesRepoValue</p><i>UpdateValue</i></div><div class="card-footer"><a id="viewFeeds" href="FeedsValue"><button class="btn btn-primary">Feeds</button></a><button style="margin-left: 10px;" class="btn btn-outline-danger"><i id="star" class="fas fa-star">StarRepoValue</i></button><button style="margin-left: 10px;" class="btn btn-outline-danger"><i id="fork" class="fas fa-share">ForkRepoValue</i></button></div></div>';
        content = content.replace("NameRepoValue", listrepos[i].name);
        content = content.replace("DesRepoValue", listrepos[i].description);
        //content = content.replace("UrlGitHubValue", listrepos[i].html_url);
        content = content.replace("StarRepoValue",listrepos[i].stargazers_count);
        //content = content.replace("WatchRepoValue", listrepos[i].watchers_count);
        content = content.replace("ForkRepoValue", listrepos[i].forks_count);
        content = content.replace("LanguageRepoValue", listrepos[i].language);
        content = content.replace("FeedsValue","neon/index.html?repo="+  listrepos[i].name);
        content = content.replace("UpdateValue", listrepos[i].updated_at)
        addList(content);
        //console.log(content);
    }
}

// hàm này để load thêm kết quả 

function loadMore(){
    page++;
    //console.log(page);
    listrepos_string = GitHub_listRepos(page);
    var listrepos = JSON.parse(listrepos_string);
    //console.log(listrepos.length);
    if (listrepos.length > 0){
        for (var i = 1; i< listrepos.length; i++){
            console.log(listrepos[i].name);
            //var content = '<div><div class="card"><div class="card-header"><strong id="name">NameRepoValue</strong> <i id="language" style="float: right;">LanguageRepoValue</i></div><div class="card-body"><p id="des" class="card-text">DesRepoValue</p></div><div class="card-footer"><a id="viewFeeds" href="FeedsValue"><button class="btn btn-primary">Feeds</button></a><button style="margin-left: 10px;" class="btn btn-outline-danger"><i id="star" class="fas fa-star">StarRepoValue</i></button><button style="margin-left: 10px;" class="btn btn-outline-danger"><i id="watch" class="fas fa-eye">WatchRepoValue</i></button><button style="margin-left: 10px;" class="btn btn-outline-danger"><i id="fork" class="fas fa-share">ForkRepoValue</i></button></div></div></div>';
            var content = '<div class="card"><div class="card-header"><strong id="name">NameRepoValue</strong> <i id="language" style="float: right;">LanguageRepoValue</i></div><div class="card-body"><p id="des" class="card-text">DesRepoValue</p><i>UpdateValue</i></div><div class="card-footer"><a id="viewFeeds" href="FeedsValue"><button class="btn btn-primary">Feeds</button></a><button style="margin-left: 10px;" class="btn btn-outline-danger"><i id="star" class="fas fa-star">StarRepoValue</i></button><button style="margin-left: 10px;" class="btn btn-outline-danger"><i id="fork" class="fas fa-share">ForkRepoValue</i></button></div></div>';
            content = content.replace("NameRepoValue", listrepos[i].name);
            content = content.replace("DesRepoValue", listrepos[i].description);
            //content = content.replace("UrlGitHubValue", listrepos[i].html_url);
            content = content.replace("StarRepoValue",listrepos[i].stargazers_count);
            //content = content.replace("WatchRepoValue", listrepos[i].watchers_count);
            content = content.replace("ForkRepoValue", listrepos[i].forks_count);
            content = content.replace("LanguageRepoValue", listrepos[i].language);
            content = content.replace("FeedsValue","neon/index.html?repo="+  listrepos[i].name);
            addList(content);
        }   
    } else {
        //console.log("full");
        setAlert("You have watched all of the content");
        document.getElementById("alert").style.visibility = "visible";
    }
    
}

// bắt sự kiện cuộn 
window.onscroll = function(){
    //console.log("Đang cuộn tới " + window.pageYOffset + " trong " + $(document).height());
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        loadMore();
    }
}

function setAlert(input){
    document.getElementById("title").innerHTML = input;
}
/*
    This script use for get and add event of repo to listview
    Author: Võ Quốc Thịnh
    GitHub: quocthinhvo
    Email: quocthinhvo0@gmail.com
*/
var page = 0;
function addList(input){
    var tag = document.createElement("div");
    tag.className = "list-group-item";
    tag.innerHTML = input;
    document.getElementById("list_events").appendChild(tag);
}

function event_get(){
    if (page < 9){
        page++;
        var obj_events = JSON.parse(GitHub_getEvents.text(page));
        for (var i = 0; i < obj_events.length; i++){
            switch (obj_events[i].type){
                case "IssuesEvent":
                    if (config_show_issues) event_Issue(obj_events, i);
                break;
                case "PushEvent":
                    if (config_show_push) event_Push(obj_events, i);
                break;
                case  "IssueCommentEvent":
                    if (config_show_isuecomment) event_CommentIssue(obj_events, i);
                break;
                case "PullRequestEvent":
                    if (config_show_pull) event_Pull(obj_events, i);
                break;
                case "ForkEvent":
                    if (config_show_fork) event_Fork(obj_events, i);
                break;
                case "GollumEvent":
                    if (config_show_wiki) event_Gollum(obj_events, i);
                break;
                case "ReleaseEvent":
                    if (config_show_release) event_Release(obj_events, i);
                break;  
                case "WatchEvent":
                    if (config_show_watch) event_Watch(obj_events, i);
                break;
            }
        }
        //console.log(obj_events.length);
        if (obj_events.length == 0){
            document.getElementById("alert_all").style.display = "block";
        }
        //document.querySelector('img').style.width = "100%" 
    } else {
        //console.log("full load");
        /*document.getElementById("dialog_title").innerHTML = "You only can see 10page events";
        document.getElementById("dialog_content").innerHTML = "hmm";
        $("#dialog").modal("show");*/
        document.getElementById("alert_all").style.display = "block";
    }
    
}

function event_Issue(input, i){
    switch (input[i].payload.action){
        case "opened":
            var content = config_style_issue;
            content = content.replace("AvatarUrl", input[i].actor.avatar_url);
            content = content.replace("UserNameValue", ' ' + input[i].actor.login + ' ');
            content = content.replace("TitleValue", input[i].payload.issue.title);
            content = content.replace("BodyValue", system_convert(input[i].payload.issue.body));
            content = content.replace("GitHubValue", input[i].payload.issue.html_url);
            content = content.replace("20/20/20", input[i].payload.issue.created_at);
            content = content.replace("UserUrlValue", input[i].payload.issue.user.html_url);
            content = content.replace("UserUrlValue", input[i].payload.issue.user.html_url);
            content = content.replace("ActionValue", "opened this issue");
            addList(content);
        break;
        case "closed":
            var content = config_style_issue;
            content = content.replace("AvatarUrl", input[i].actor.avatar_url);
            content = content.replace("UserNameValue", ' ' + input[i].actor.login + ' ');
            content = content.replace("TitleValue", input[i].payload.issue.title);
            content = content.replace("BodyValue", "");
            content = content.replace("GitHubValue", input[i].payload.issue.html_url);
            content = content.replace("20/20/20", input[i].payload.issue.created_at);
            content = content.replace("UserUrlValue", input[i].payload.issue.user.html_url);
            content = content.replace("UserUrlValue", input[i].payload.issue.user.html_url);
            content = content.replace("ActionValue", "closed this issue");
            addList(content);
        break;
    }
}

function event_CommentIssue(input, i){
    switch (input[i].payload.action){
        case "created":
            var content = config_style_issue;
            content = content.replace("AvatarUrl", input[i].actor.avatar_url);
            content = content.replace("UserNameValue", ' ' + input[i].actor.login + ' ');
            content = content.replace("TitleValue", input[i].payload.issue.title);
            content = content.replace("BodyValue", system_convert(input[i].payload.comment.body));
            content = content.replace("GitHubValue", input[i].payload.comment.html_url);
            content = content.replace("20/20/20", input[i].created_at);
            content = content.replace("UserUrlValue", input[i].payload.comment.user.html_url);
            content = content.replace("UserUrlValue", input[i].payload.comment.user.html_url);
            content = content.replace("ActionValue", "commented");
            addList(content);
        break;
        case "closed":
            
        break;
    }
}

function event_Pull(input, i){
    switch (input[i].payload.action){
        case "opened":
            var content = config_style_issue;
            content = content.replace("AvatarUrl", input[i].actor.avatar_url);
            content = content.replace("UserNameValue", ' ' + input[i].actor.login + ' ');
            content = content.replace("TitleValue", input[i].payload.pull_request.title);
            content = content.replace("BodyValue", system_convert(input[i].payload.pull_request.body));
            content = content.replace("GitHubValue", input[i].payload.pull_request.html_url);
            content = content.replace("20/20/20", input[i].payload.pull_request.created_at);
            content = content.replace("UserUrlValue", input[i].payload.pull_request.user.html_url);
            content = content.replace("UserUrlValue", input[i].payload.pull_request.user.html_url);
            content = content.replace("ActionValue", "opened pull request");
            addList(content);
        break;
        case "closed":
            var content = config_style_issue;
            content = content.replace("AvatarUrl", input[i].actor.avatar_url);
            content = content.replace("UserNameValue", ' ' + input[i].actor.login + ' ');
            content = content.replace("TitleValue", input[i].payload.pull_request.title);
            //content = content.replace("BodyValue", system_convert(input[i].payload.pull_request.body));
            content = content.replace("BodyValue", "");
            content = content.replace("GitHubValue", input[i].payload.pull_request.html_url);
            content = content.replace("20/20/20", input[i].payload.pull_request.created_at);
            content = content.replace("UserUrlValue", input[i].payload.pull_request.user.html_url);
            content = content.replace("UserUrlValue", input[i].payload.pull_request.user.html_url);
            content = content.replace("ActionValue", "closed pull request");
        break;
    }
}

function event_Fork(input,i){
    var content = config_style_issue;
    content = content.replace("AvatarUrl", input[i].actor.avatar_url);
    content = content.replace("UserNameValue", ' ' + input[i].actor.login + ' ');
    content = content.replace("TitleValue", "");
    content = content.replace("BodyValue", "");
    content = content.replace("GitHubValue", "");
    content = content.replace('<hr class="my-4">', "");
    content = content.replace('<div class="card-footer"><a href="GitHubValue"><button class="btn btn-outline-primary"><i class="fab fa-github"></i></button></a></div>','');
    content = content.replace("20/20/20", input[i].payload.forkee.updated_at);
    content = content.replace("UserUrlValue", input[i].payload.forkee.owner.html_url);
    content = content.replace("UserUrlValue", input[i].payload.forkee.owner.html_url);
    content = content.replace("ActionValue", "forked this repository");
    addList(content);
}

function event_Gollum(input,i){

}

function event_Release(input,i){
    var content = config_style_issue;
    content = content.replace("AvatarUrl", input[i].actor.avatar_url);
    content = content.replace("UserNameValue", ' ' + input[i].actor.login + ' ');
    content = content.replace("TitleValue", input[i].payload.release.name);
    content = content.replace("BodyValue", system_convert(input[i].payload.release.body));
    content = content.replace("GitHubValue", input[i].payload.release.html_url);
    content = content.replace("20/20/20", input[i].payload.release.published_at);
    content = content.replace("UserUrlValue", "");
    content = content.replace("UserUrlValue", "");
    if (input[i].payload.release.prerelease == false){
        content = content.replace("ActionValue", "published new release "+ input[i].payload.release.tag_name);
    } else {
        content = content.replace("ActionValue", "published new pre release "+ input[i].payload.release.tag_name);
    }
    addList(content);
}

function event_Push(input, i){
    var content = config_style_issue;
    content = content.replace("AvatarUrl", input[i].actor.avatar_url);
    content = content.replace("UserNameValue", ' ' + input[i].actor.login + ' ');
    //content = content.replace("TitleValue", input[i].payload.commits[0].message);
    //content = content.replace("UserUrlValue", input[i].payload.user.html_url);
    //content = content.replace("UserUrlValue", input[i].payload.pull_request.user.html_url);
    content = content.replace("GitHubValue", "https://www.github.com");
    content = content.replace("20/20/20", input[i].created_at);
    //content = content.replace("UserUrlValue", input[i].payload.issue.user.html_url);
    //content = content.replace("UserUrlValue", input[i].payload.issue.user.html_url);
    content = content.replace("ActionValue", "pushed new code");
    content = content.replace("TitleValue", "Added " + input[i].payload.commits.length + " commits in this push");
    var temp;
    for (var j = 0; j < input[i].payload.commits.length; j++){
        var  li = '<div class="alert alert-success">' + system_convert(input[i].payload.commits[j].message) + '</div>';
        temp = temp + li;
        //console.log(input[i].payload.commits[j].message);
    }  
    content = content.replace("BodyValue", temp);
    addList(content);
}

function event_Watch(input, i){
    var content = config_style_issue;
    content = content.replace("AvatarUrl", input[i].actor.avatar_url);
    content = content.replace("UserNameValue", ' ' + input[i].actor.login + ' ');
    content = content.replace("TitleValue", "");
    content = content.replace("BodyValue", "");
    content = content.replace("GitHubValue", "");
    content = content.replace('<hr class="my-4">', "");
    content = content.replace("20/20/20", input[i].created_at);
    content = content.replace("UserUrlValue","");
    content = content.replace("UserUrlValue", "");
    content = content.replace('<div class="card-footer"><a href="GitHubValue"><button class="btn btn-outline-primary"><i class="fab fa-github"></i></button></a></div>','');
    switch (input[i].payload.action ) {
        case "started":
            content = content.replace("ActionValue", "gives star");
        break;
    }
    addList(content);
}
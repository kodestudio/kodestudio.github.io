function addList(input){
    /*var tag = document.createElement("div");
    tag.innerHTML = input;
    tag.className = "card list-group-item list-group-item-action";
    var element = document.getElementById("listview_events");
    element.appendChild(tag);*/

    var tag = document.createElement("div");
    //var text = document.createTextNode(input);
    //console.log(input);
    //tag.appendChild(text);
    tag.className = "card list-group-item list-group-item-action"; 
    tag.innerHTML = input;
    var element = document.getElementById("listview_feeds");
    element.appendChild(tag);
}


function init(){
    var page = 1;
    var query = getUrlVar("repo");
    var listevents_string = GitHub_listEvents(query, page);
    // chuyển qua object
    var listevents = JSON.parse(listevents_string);
    for (var i = 0; i < listevents.length; i++){
        switch (listevents[i].type){
            case "IssuesEvent":
                // convert
                var converter = new showdown.Converter();
                var body_md = listevents[i].payload.issue.body;
                var body_html = converter.makeHtml(body_md);
                var content = '<div class="card-header"><img class="img-thumbnail rounded-circle" src="UserAvatarValue" style="width: 50px; height: 50px;"><strong>UserNameValue</strong><i>ActionValue</i></div><div class="card-body"><strong>TitleIssueValue</strong><p>BodyIssueValue</p></div><div class="card-footer"><a href="UrlIssuesValue"><button class="btn btn-primary"><i class="fab fa-github"></i></button></a></div>';
                //content = content.replace()
                content = content.replace("ActionValue", " "  + listevents[i].payload.action + " an issue.");
                content = content.replace("UserNameValue", " " + listevents[i].actor.display_login);
                content = content.replace("UserAvatarValue", listevents[i].actor.avatar_url);
                content = content.replace("TitleIssueValue", listevents[i].payload.issue.title);
                content = content.replace("BodyIssueValue", body_html);
                content = content.replace("UrlIssuesValue", listevents[i].payload.issue.html_url);
                addList(content);
            break;
        }
    }

}

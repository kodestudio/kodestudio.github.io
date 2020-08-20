/* 
The struct of config 
[key] = [value]
you should embled config.js first of all
Example:
<srcipt src="config.js"></script>
<script src="..js"></script>
Is true way
*/
/*
Author config.js
Võ Quốc Thịnh
GitHub: quocthinhvo
Email: quocthinhvo0@gmail.com
*/

const config_key = "value";

// Name of org or owner repo
// if url to repo = "https://www.github.com/kodestudio/neon" then parent = "kodestudio" and repo="neon"
const config_parent = "kodestudio";
const config_repo = system_url("repo");
const config_title = "Neon - event timeline";
const config_homepage = "";
// you can add nottification here
const config_notification = "";
// config type event load

const config_show_issues = true;
const config_show_isuecomment = true;
const config_show_release = true;
const config_show_push = true;
const config_show_pull = true;
const config_show_wiki = true;
const config_show_fork = true;
const config_show_watch = true;

// config of custom Data
const config_customapi = "";

/*
config style button info
*/
const config_button_stars = ' <i class="fas fa-star"></i>';
const config_button_watchers = ' <i class="fas fa-eye"></i>';
const config_button_size = ' <i class="fas fa-file"></i>';
const config_button_forks = ' <i class="fab fa-creative-commons-share"></i>';
const config_button_issues = ' <i class="far fa-comment-dots"></i>';

/*
config style
*/
const config_style_issue = '<div class="card"><div class="card-header"><a href="UserUrlValue"><img class="img-thumbnail rounded-circle" src="AvatarUrl" style="width: 50px; height: 50px;"></a><a href="UserUrlValue"><strong>UserNameValue</strong></a><i>ActionValue</i></div><div class="card-body"><h3>TitleValue</h3><i>20/20/20</i><hr class="my-4"><div style="overflow: auto">BodyValue</div></div><div class="card-footer"><a href="GitHubValue"><button class="btn btn-outline-primary"><i class="fab fa-github"></i></button></a></div></div>';

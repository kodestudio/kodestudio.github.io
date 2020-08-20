/*
    this script use for create info (quick and more)
    Author: Võ Quốc Thịnh
    GitHub: quocthinhvo
    Email: quocthinhvo0@gmail.com
*/

function info_create(){
    // first: get json of github about this repo
    var obj_repo = JSON.parse(GitHub_getInfo.text());
    // change img of repo
    document.getElementById("owner_avatar").src = obj_repo.owner.avatar_url;
    // change repo name
    document.getElementById("repo_name").innerHTML = obj_repo.full_name;
    //change description of repo
    document.getElementById("repo_desc").innerHTML = obj_repo.description;
    // load num
    document.getElementById("repo_stars").innerHTML = obj_repo.stargazers_count + config_button_stars;
    document.getElementById("repo_watchers").innerHTML = obj_repo.watchers_count + config_button_watchers;
    document.getElementById("repo_size").innerHTML = obj_repo.size + config_button_size;
    document.getElementById("repo_forks").innerHTML = obj_repo.forks_count + config_button_forks;
    document.getElementById("repo_issues").innerHTML = obj_repo.open_issues + config_button_issues;
    // change value of more info
    document.getElementById("repo_lang").innerHTML = obj_repo.language;
    document.getElementById("repo_created").innerHTML = obj_repo.created_at;
    document.getElementById("repo_updated").innerHTML = obj_repo.updated_at;
    document.getElementById("repo_pushed").innerHTML = obj_repo.pushed_at;
    document.getElementById("repo_defaultbranch").innerHTML = obj_repo.default_branch;
    //show notification here
    if (config_notification != ""){
        document.getElementById("repo_noti").innerHTML = config_notification;
        document.getElementById("div_noti").style.display = "block";
    }
}
// This file to get data from GitHub API
// GitHubRepoGet class can replace all the rest of the function. However still kept to debug and backup.
/*
    Author: võ Quốc Thịnh
    GitHub: quocthinhvo
    Email: quocthinhvo0@gmail.com
*/

// var GitHub_api = new XMLHttpRequest();

var parent_value = config_parent;
var repo_value = config_repo;


class GitHubRepoGet{
    constructor(url){
        // defaulf url = https://api.github.com/repos/
        this.url = url;
    }
    get(input){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/" + input, false);
        api.send(null);
        return api.responseText;
    }
    code(input){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/" + input, false);
        api.send(null);
        return api.status;
    }
}


var GitHub_getCustom = {
    code: function (type, url, ex) {
        var api = new XMLHttpRequest();
        api.open(type, url, ex);
        api.send(null);
        return api.status;
    },
    text: function (type, url, ex) {
        var api = new XMLHttpRequest();
        api.open(type, url, ex);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getInfo = {
    code: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value, false);
        api.send(null);
        return api.status;
    },
    text: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value, false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getEvents = {
    code: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/events?page=" + page, false);
        api.send(null);
        return api.status;
    },
    text: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/events?page=" + page, false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getContents = {
    code: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/contents?page="+page, false);
        api.send(null);
        return api.status;
    },
    text: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/contents?" + page, false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getForks = {
    code: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/forks?page=" + page , false);
        api.send(null);
        return api.status;
    },
    text: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/forks?page="+page, false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getTeams = {
    code: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/teams?page=" + page, false);
        api.send(null);
        return api.status;
    },
    text: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/teams?page=" + page, false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getHooks = {
    code: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/hooks?page=" + page, false);
        api.send(null);
        return api.status;
    },
    text: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/hooks?page="+page, false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getTags = {
    code: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/tags?page="+page, false);
        api.send(null);
        return api.status;
    },
    text: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/tags?page="+page, false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getLanguages = {
    code: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/languages?page="+page, false);
        api.send(null);
        return api.status;
    },
    text: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/languages?page="+page, false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getStars = {
    code: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/stargazers?page="+page, false);
        api.send(null);
        return api.status;
    },
    text: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/stargazers?page="+page, false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getContributors = {
    code: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/contributors?page="+page, false);
        api.send(null);
        return api.status;
    },
    text: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/contributors?page="+page, false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getSubs = {
    code: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/subscribers?page="+page, false);
        api.send(null);
        return api.status;
    },
    text: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/subscribers?page="+page, false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getDownloads = {
    code: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/downloads?page="+page, false);
        api.send(null);
        return api.status;
    },
    text: function(page){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/downloads?page="+page, false);
        api.send(null);
        return api.responseText;
    }
}
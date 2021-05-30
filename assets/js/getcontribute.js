var api = new XMLHttpRequest();
api.open("GET", "https://api.github.com/orgs/kodestudio/events", false);
api.send(null);
var content = api.responseText;


var objectContribure = JSON.parse(content);

var strContribute = 'Cảm ơn <img style="width:30px; height:30px; border-radius: 50%" src="' + objectContribure[0].actor.avatar_url + '"> <a href="https://www.github.com/' + objectContribure[0].actor.display_login + '">' +  objectContribure[0].actor.display_login + '</a> đã đóng góp cho Kode ❤';
console.log(strContribute) 

document.getElementById("h5_contribute").innerHTML = strContribute;
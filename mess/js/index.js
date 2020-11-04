function loading(){
    document.getElementById("input_name").value = localStorage.getItem("tempName");
    document.getElementById("input_roomid").value = localStorage.getItem("tempCode");
}
function jump(){

    if (document.getElementById("input_name").value != ""){
        if (document.getElementById("input_roomid").value != ""){
            document.getElementById("button_jump").disabled = true;
            var room = {
                from: document.getElementById("input_name").value,
                code: document.getElementById("input_roomid").value,
                message: "Joined this room"
            }
            firebase.database().ref("rooms/" + room.code).push(room);

            document.getElementById("input_name").value = "";
            document.getElementById("input_roomid").value = "";

            localStorage.setItem("tempName", room.from);
            localStorage.setItem("tempCode", room.code);

            window.open("chat.html", "_self");
        } else {
            console.log("fail");
            document.getElementById("dialogTitleText").innerHTML = "Please input code again";
            document.getElementById("dialogContentText").innerHTML = "Enter full information including name (anonymous), chat room code and try again";
            $("#dialog_ask").modal("show");
        }
    } else {
        console.log("fail");
        document.getElementById("dialogTitleText").innerHTML = "Please input name again";
        document.getElementById("dialogContentText").innerHTML = "Enter full information including name (anonymous), chat room code and try again";

        $("#dialog_ask").modal("show");
    }
}

function getrandomRoom(){
    var text; text = firebase.database().ref('rooms').push().key; document.getElementById("input_roomid").value = text;
}
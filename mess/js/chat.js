firebase.database().ref("rooms/" + localStorage.getItem("tempCode")).on("child_added", function(data){
    //console.log(data.val());
    /*
        <div class="card">
                <div class="card-header">
                    <strong>quocthinhvo</strong>
                </div>
                <div class="card-body">
                    <p>cc</p>
                </div> 
            </div>
    */
    var text = 
            '<div class="card-header">' +
                '<strong>' + data.val().from + '</strong>' +
            '</div>' +
            '<div class="card-body">' +
                '<p>' + data.val().message + '</p>' +
            '<div>';
            
    var ele = document.createElement("div");
    if (data.val().from == localStorage.getItem("tempName")){
        ele.class = "card bg-info";
    } else {
        ele.class = "card";
    }
    ele.innerHTML = text;

    document.getElementById("area_messages").appendChild(ele);
});



function send(text){
    var mess = {
        from: localStorage.getItem("tempName"),
        code: localStorage.getItem("tempCode"),
        message: text
    }

    document.getElementById("input_message").value = "";

    firebase.database().ref("rooms/" + mess.code).push(mess);
}

function loading(){
    // document.getElementById("area_messages").style.height = "100%";
 
 }
 

function press(e){
    if(e.keyCode == 13){
       // return false; // returning false will prevent the event from bubbling up.
        //console.log('press');
        send(document.getElementById("input_message").value);
    }
}

function stopchat(){
    send("Left the room");
}


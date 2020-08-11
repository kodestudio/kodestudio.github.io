function dialog_setup(color, typebutton, button, title, content){
    document.getElementById("dialog_title").innerHTML = title;
    document.getElementById("dialog_content").innerHTML = content;
    document.getElementById("dialog_button").innerHTML = button;
    document.getElementById("dialog_button").className = typebutton;
    document.getElementById("dialog_header").style.backgroundColor = color;
}
function save(){
    //$("#dialog").modal({show : true});
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    //console.log(title, content);
    if (title != ""){
        if (title != "system"){
            localStorage.setItem(title, content);
            dialog_setup("", "btn btn-primary", "OK", "Hoàn tất", "Đã lưu ghi chú của bạn");
            document.getElementById("title").value = "";
            document.getElementById("content").value = "";
            //console.log(document.getElementById("private").checked);
            if (document.getElementById("private").checked == false){
                var list = localStorage.getItem("system");
                list = title + "|" + list;
                localStorage.setItem("system", list);
            }
            $("#dialog").modal({show: true});
        } else {
            dialog_setup("red", "btn btn-danger", "Đóng", "Lỗi rồi", "Ai cho bạn đặt tiêu đề là 'system'. Đây là tên mặc định và bạn không thể dùng nó. Thử một tên khác đi.");  
            $("#dialog").modal({show: true});
        }
    } else {
        dialog_setup("red", "btn btn-danger", "Đóng", "Lỗi rồi", "Bạn chưa nhập tiêu đề ghi chú");
        $("#dialog").modal({show: true});
    }
}

function read(){
    title = document.getElementById("read_title").value;
    if (title != ""){
        content = localStorage.getItem(title);
        if (content == null){
            dialog_setup("primary", "btn btn-primary", "Tạo","Ghi chú này trống", "Ghi chú bạn vừa nhập không có nội dung. Bạn có thể tạo nó!");
            $("#dialog").modal({show: true});
        }
        else {
            document.getElementById("read_content").innerHTML = content;
        }
    } else {
        dialog_setup("red", "btn btn-danger", "Đóng", "Lỗi rồi", "Bạn chưa nhập tiêu đề ghi chú");
        $("#dialog").modal({show: true});
    }
}
function opennote(){
    document.getElementById("appname").innerHTML = sessionStorage.getItem("temp");
    document.getElementById("content").innerHTML = localStorage.getItem(sessionStorage.getItem("temp"));
}

function additem(input){
    var tag = document.createElement("a");
    //tag.href = "#";
    tag.className = "list-group-item list-group-item-action";
    //tag.addEventListener("click", opennote());
    var text = document.createTextNode(input);
    tag.appendChild(text);
    var elemement = document.getElementById("listview");
    elemement.appendChild(tag);
}

function init(){
    //kiểm tra hỗ trợ của trình duyệt
    if (typeof(localStorage) == "undefined"){
        document.getElementById("appname").innerHTML = "Không hỗ trợ trên thiết bị của bạn";
        open("error.html","_self");
    } else {
        document.getElementById("appname").innerHTML = "Mini Notes";
    }
    // kiểm tra truy cập và dữ liệu
    if (localStorage.getItem("system") == null){
        //khởi tạo 
        localStorage.setItem("system", "");
    }
    list_string = localStorage.getItem("system");
    var list = list_string.split("|");
    for (var i = 0; i < list.length-1; i++){
        //console.log(list[i]);
        additem(list[i]);
    }
    
    //thêm sự kiện
    document.querySelectorAll('.list-group-item').forEach(item => {
        item.addEventListener('click', event => {
          //handle 
          console.log(item.innerText);
          sessionStorage.setItem("temp",item.innerText);
          open('read.html', '_self');
        })
      });
}

function edit(){

}
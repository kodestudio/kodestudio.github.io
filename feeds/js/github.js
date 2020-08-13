var api = new XMLHttpRequest();


///////////////////////////////////
//
//
// Lấy giá trị là chuỗi json
//
//
//////////////////////////////////
function GitHub_getCustom(type, url, ex, send){
    //hàm này trả về chuỗi json nhưng với các thuộc tính tự do
    // type là loại: GET/PUT/...
    // url là liên kết đến json/api
    // ex là xử lí bất đồng bộ (gọi đại chứ không rõ :V). (true/false)
    // send là giá trị gửi về server (thường là null)
    api.open(type , url , ex);
    api.send(send);
    return api.responseText;
}
//Tất cả những hàm trên trả về String thuộc định dạng JSON.
function GitHub_KodeStatus(){
    // Hàm này lấy thông tin trực tiếp từ tệp trong repo. Có tác dụng thông báo đến user khi có bảo trì và tự custom
    api.open("GET", "https://github.com/kodestudio/kodestudio.github.io/raw/master/api/status.json", false);
    api.send(null);
    return api.responseText;
}

function GitHub_infoKode(){
    // Lấy thông tin cơ bản về Kode Studio trên GitHub
    api.open("GET", "https://api.github.com/orgs/kodestudio", false);
    api.send(null);
    return api.responseText;
}

function GitHub_listRepos(page){
    // Trả về danh sách các repo mở trong Kode Studio
    api.open("GET", "https://api.github.com/orgs/kodestudio/repos?page=" + page, false);
    api.send(null);
    return api.responseText;
}

function GitHub_infoRepo(name){
    // iển thị thông tin chi tiết một repo trong Kode Studio với tên "name"
    api.open("GET", "https://api.github.com/repos/kodestudio/" + name, false);
    api.send(null);
    return api.responseText;
}

function GitHub_listMembers(page){
    // Lấy danh sách các thành viên công khai
    api.open("GET", "https://api.github.com/orgs/kodestudio/members?page=" + page, false);
    api.send(null);
    return api.responseText;
}

function GitHub_listEvents(name, page){
    // lấy các sự kiện đến từ một repo
    api.open("GET", "https://api.github.com/repos/kodestudio/" + name + "/events?page=" + page, false);
    api.send(null);
    return api.responseText;
}

function GitHub_getCommit(name, sha){
    // lấy thông tin một commit theo sha và tên repo
    api.open("GET", "https://api.github.com/repos/kodestudio/" + name + "/git/commits/" + sha, false);
    api.send(null);
    return api.responseText;
}


/////////////////////////////////
//
// 
// Cái dưới này trả về giá trị là đoạn code Status
//
//
/////////////////////////////////

function GitHubCode_getCustom(type, url, ex, send){
    //hàm này trả về chuỗi json nhưng với các thuộc tính tự do
    // type là loại: GET/PUT/...
    // url là liên kết đến json/api
    // ex là xử lí bất đồng bộ (gọi đại chứ không rõ :V). (true/false)
    // send là giá trị gửi về server (thường là null)
    api.open(type , url , ex);
    api.send(send);
    return api.status;
}
//Tất cả những hàm trên trả về String thuộc định dạng JSON.
function GitHubCode_KodeStatus(){
    // Hàm này lấy thông tin trực tiếp từ tệp trong repo. Có tác dụng thông báo đến user khi có bảo trì và tự custom
    api.open("GET", "https://github.com/kodestudio/kodestudio.github.io/raw/master/api/status.json", false);
    api.send(null);
    return api.status;
}

function GitHubCode_infoKode(){
    // Lấy thông tin cơ bản về Kode Studio trên GitHub
    api.open("GET", "https://api.github.com/orgs/kodestudio", false);
    api.send(null);
    return api.status;
}

function GitHubCode_listRepos(page){
    // Trả về danh sách các repo mở trong Kode Studio
    api.open("GET", "https://api.github.com/orgs/kodestudio/repos?page=" +page, false);
    api.send(null);
    return api.status;
}

function GitHubCode_infoRepo(name){
    // iển thị thông tin chi tiết một repo trong Kode Studio với tên "name"
    api.open("GET", "https://api.github.com/repos/kodestudio/" + name, false);
    api.send(null);
    return api.status;
}

function GitHubCode_listMembers(){
    // Lấy danh sách các thành viên công khai
    api.open("GET", "https://api.github.com/orgs/kodestudio/members", false);
    api.send(null);
    return api.status;
} 

function GitHubCode_listEvents(name){
    // lấy các sự kiện đến từ một repo
    api.open("GET", "https://api.github.com/repos/kodestudio/" + name + "/events", false);
    api.send(null);
    return api.status;
}

function GitHubCode_getCommit(name, sha){
    // lấy thông tin một commit theo sha và tên repo
    api.open("GET", "https://api.github.com/repos/kodestudio/" + name + "/git/commits/" + sha, false);
    api.send(null);
    return api.status;
}

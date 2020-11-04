unit kodefirebase;
interface 
    uses 
        js,
        sysutils,
        browserapp;
    type 
        firebase = class 
            private 
                _apiKey: string;
                _authDomain: string;
                _databaseURL: string;
                _projectId: string;
                _storageBucket: string;
                _messagingSenderID: string;
                _appId: string;
                _measurementId: string;
            public 
                // set 
                procedure setApiKey(key: string);
                procedure setauthDomain(key: string);
                procedure setDatabaseUrl(key: string);
                procedure setprojectId(key: string);
                procedure setstorageBucket(key: string);
                procedure setMessagingSenderID(key: string);
                procedure setAppId(key: string);
                procedure setMeasurementId(key: string);

                //get
                function getApiKey:string;
                function getauthDomain: string;
                function getDatabaseUrl: string;
                function getprojectId:string;
                function getstorageBucket: string;
                function getMessagingSenderID: string;
                function getAppId: string;
                function getMeasurementId: string;

                //init firebase 
                procedure init;

                //auth
                procedure createUserWithEmailAndPassword(email, pass: string);
                procedure signInWithEmailAndPassword(email, pass: string);
                procedure signOut;

                // realtime database
                procedure setData(path: string;map: TObject);
                procedure pushData(path: string; map: TObject);
                procedure removeData(path: string; map: TObject);
                function childAdded(path: string): TObject;
                function childChanged(path:string):TObject;
                function childMoved(path: string): TObject;
                function childRemoved(path: string): TObject;
        end;
implementation 
    procedure firebase.setApiKey(key: string);
    begin 
        _apiKey := key;
    end;
    procedure firebase.setAppId(key: string);
    begin 
        _appId := key;
    end;
    procedure firebase.setauthDomain(key: string);
    begin 
        _authDomain := key;
    end;
    procedure firebase.setDatabaseUrl(key: string);
    begin 
        _databaseURL := key;
    end;
    procedure firebase.setMeasurementId(key: string);
    begin 
        _measurementId := key;
    end;
    procedure firebase.setMessagingSenderID(key : string);
    begin 
        _messagingSenderID := key;
    end;
    procedure firebase.setprojectId(key: string);
    begin 
        _projectId := key;
    end;
    procedure firebase.setstorageBucket(key : string);
    begin 
        _storageBucket := key;
    end;

    function firebase.getAppId: string;
    begin 
        exit(_appId);
    end;
    function firebase.getauthDomain: string;
    begin
        exit(_authDomain);
    end;
    function firebase.getDatabaseUrl: string;
    begin 
        exit(_databaseURL);
    end;
    function firebase.getMeasurementId: string;
    begin 
        exit(_measurementId);
    end;
    function firebase.getMessagingSenderID: string;
    begin 
        exit(_messagingSenderID);
    end;
    function firebase.getprojectId: string;
    begin 
        exit(_projectId);
    end;
    function firebase.getstorageBucket: string;
    begin 
        exit(_storageBucket);
    end;
    function firebase.getApiKey: string;
    begin 
        exit(_ApiKey);
    end;
    
    procedure firebase.init;
    var 
        _apikey_, _authDomain_, _databaseURL_, _projectId_, _storageBucket_, _measurementId_, _messagingSenderID_, _appId_: string;
    begin 
        _apiKey_ := _ApiKey;
        _authDomain_ := _authDomain;
        _databaseURL_ := _databaseURL;
        _projectId_ := _projectId;
        _storageBucket_ := _storageBucket;
        _messagingSenderID_ := _messagingSenderID;
        _appId_ := _appId;
        _messagingSenderID_ := _measurementId;
        asm 
            var firebaseConfig = {
                apiKey: _apiKey_,
                authDomain: _authDomain_,
                databaseURL: _databaseURL_,
                projectId: _projectId_,
                storageBucket: _storageBucket_,
                messagingSenderId: _messagingSenderId_,
                appId: appId_,
                measurementId: _measurementId_ 
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
        end;
    end;

    procedure firebase.createUserWithEmailAndPassword(email, pass: string);
    begin 
        asm
            firebase.auth().createUserWithEmailAndPassword(email, pass);
        end;
    end;

    procedure firebase.signInWithEmailAndPassword(email, pass: string);
    begin 
        asm 
            firebase.auth().signInWithEmailAndPassword(email, pass);
        end;
    end;

    procedure firebase.signOut;
    begin 
        asm 
            firebase.auth().signOut();
        end;
    end;    

    procedure firebase.setData(path: string; map: TObject);
    begin 
        asm 
            firebase.database().ref(path).set(map);
        end;
    end;

    procedure firebase.pushData(path: string; map: TObject);
    begin 
        asm 
            firebase.database().ref(path).push(map);
        end;
    end;
    
    procedure firebase.removeData(path: string; map: TObject);
    begin 
        asm 
            firebase.database().ref(path).remove(map);
        end;
    end;

    function firebase.childAdded(path: string): TObject;
    var 
        temp : TObject;
    begin 
        temp := TObject.create;
        asm 
            firebase.database().ref(path).on('child_added',function (data){
                //console.log(data.val());
                temp = data.val();
            });
        end;
        exit(temp);
    end;

    function firebase.childRemoved(path: string): TObject;
    var 
        temp : TObject;
    begin 
        temp := TObject.create;
        asm 
            firebase.database().ref(path).on('child_removed',function (data){
                //console.log(data.val());
                temp = data.val();
            });
        end;
        exit(temp);
    end;

    function firebase.childChanged(path: string): TObject;
    var 
        temp : TObject;
    begin 
        temp := TObject.create;
        asm 
            firebase.database().ref(path).on('child_changed',function (data){
                //console.log(data.val());
                temp = data.val();
            });
        end;
        exit(temp);
    end;

    function firebase.childMoved(path: string): TObject;
    var 
        temp : TObject;
    begin 
        temp := TObject.create;
        asm 
            firebase.database().ref(path).on('child_moved',function (data){
                //console.log(data.val());
                temp = data.val();
            });
        end;
        exit(temp);
    end;
end.
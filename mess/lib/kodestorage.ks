unit kodestorage;
interface  
    uses 
        js, 
        sysutils,
        browserapp,
        kodedom in 'kodedom.ks';
    type 
        localStorage = class 
            public 
                procedure setKeyValue(key, value: string);
                function getValue(key: string): string;
        end;

        sessionStorage = class 
            public 
                procedure setKeyValue(key, value: string);
                function getValue(key: string): string;
        end;    
    
implementation 
    procedure localStorage.setKeyValue(key, value: string);
    begin 
        asm 
            localStorage.setItem(key, value);
        end;
    end;

    function localStorage.getValue(key: string): string;
    var temp: string;
    begin 
        temp := '';
        asm 
            temp = localStorage.getItem(key);
        end;
        exit(temp);
    end;

    procedure sessionStorage.setKeyValue(key, value: string);
    begin 
        asm 
            sessionStorage.setItem(key, value);
        end;
    end;

    function sessionStorage.getValue(key: string): string;
    var temp: string;
    begin 
        temp := '';
        asm 
            temp = sessionStorage.getItem(key);
        end;
        exit(temp);
    end;
end.
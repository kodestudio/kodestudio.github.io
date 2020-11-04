program chat;
uses 
    sysutils,
    js, 
    browserapp,
    kodefirebase in 'kodefirebase.ks',
    kodestorage in 'kodestorage.ks',
    kodedom in 'kodedom.ks';

type 
    message = class(TObject)
        from: string;
        code: string;
        message: string;
    end;    
var 
    mess: message;
    fire: firebase;
    storage: localStorage;
    obj: dom;

procedure loading(code: string);
begin 
    case code of
        'init': writeln('Loading()');
        'run': 
            begin 

            end;
        else 
            begin 
                writeln('Code not found');
            end;
    end;
end;   

procedure stopchat(code: string);
begin 
    case code of
        'init': writeln('stopchat()');
        'run': 
            begin 

            end;
        else 
            begin 
                writeln('Code not found');
            end;
    end;
end;

procedure send(code, text: string);
begin 
    case code of
        'init': writeln('send()');
        'run': 
            begin 
                mess.code := storage.getValue('tempCode');
                mess.from := storage.getValue('tempName');
                mess.message := text;
                fire.pushData('rooms/' + mess.code, mess);

                obj.setValueHtml('input_message','');
            end;
        else 
            begin 
                writeln('Code not found');
            end;
    end;
end;

BEGIN 
    // init object
    mess := message.create;
    fire := firebase.create;
    storage:= localStorage.create;
    obj := dom.create;

    // init function
    loading('init');
    loading('run');
    send('init' ,'');
    stopchat('init');
END.
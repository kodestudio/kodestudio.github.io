program main;
uses 
    sysutils,
    js,
    browserapp,
    kodedom in 'kodedom.ks',
    kodefirebase in 'kodefirebase.ks',
    kodestorage in 'kodestorage.ks';

type 
    message = class(TObject)
        from: string;
        code: string;
        message: string;
    end;
var 
    obj: dom;
    fire: firebase;
    storage: localStorage;
    mess: message;
procedure loading(code: string);
begin 
    case code of 
        'init': 
            begin 
                writeln('Loading()'); exit;
            end;
        'run': 
            begin 
                obj.setValueHtml('input_name', storage.getValue('tempName')); 
                obj.setValueHtml('input_roomid', storage.getValue('tempCode')); 
            end;
        'stop': exit;
        else 
            begin 
                writeln('No code to start function');
                exit;
            end;
    end;
end;

procedure jump(code: string);
begin 
    case code of 
        'init': 
            begin 
                writeln('Jump()'); exit;
            end;
        'run': 
            begin 
                if (obj.getValueHtml('input_name') <> '') then 
                begin 
                    if (obj.getValueHtml('input_roomid') <> '') then 
                    begin 
                        //writeln('true all');
                        asm 
                            document.getElementById("button_jump").disabled = true;
                        end;
                        mess.from := obj.getValueHtml('input_name');
                        mess.message := obj.getValueHtml('input_roomid');
                        mess.code := obj.getValueHtml('input_roomid');
                        fire.pushData('rooms/'+mess.code,mess);

                        storage.setKeyValue('tempName', mess.from);
                        storage.setKeyValue('tempCode', mess.code);
                        asm  window.open("chat.html", "_self"); end;
                    end else 
                    begin 
                        //writeln('fail at input room id');
                         obj.setInnerHtml('dialogTitleText', 'Please input name again');
                        obj.setInnerHtml('dialogContentText', 'Enter full information including name (anonymous), chat room code and try again');
                        asm 
                            $("#dialog_ask").modal("show");
                        end;
                    end
                end else 
                begin 
                    //writeln('Fail at input_name');
                    obj.setInnerHtml('dialogTitleText', 'Please input name again');
                    obj.setInnerHtml('dialogContentText', 'Enter full information including name (anonymous), chat room code and try again');
                    asm 
                         $("#dialog_ask").modal("show");
                    end;
                end;
            end;
        'stop': exit;
        else 
            begin 
                writeln('No code to start function');
                exit;
            end;
    end;
end;
BEGIN 
    // init object
    obj := dom.create;
    fire := firebase.create;
    storage := localStorage.create;
    mess := message.create;

    // init function 
    loading('init');
    loading('run');

    jump('init');

END.    
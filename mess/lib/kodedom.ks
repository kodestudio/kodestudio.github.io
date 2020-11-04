unit kodedom;
interface 
    uses 
        js, 
        sysutils,
        browserapp; 
    type dom = class 
        public
            procedure setInnerHtml(id: string; content: string);
            function getInnerHtml(id: string):string;
            function getValueHtml(id: string): string;
            procedure setValuehtml(id: string; content: string);
    end;
implementation 
    procedure dom.setInnerHtml(id: string; content: string);
    begin 
        asm 
            document.getElementById(id).innerHTML = content;
        end;
    end;

    function dom.getInnerHtml(id: string):string;
    var 
        temp: string;
    begin 
        temp := '';
        asm 
            temp = document.getElementById(id).innerHTML;
        end;

        exit(temp);
    end;

    function dom.getValueHtml(id: string): string;
    var 
        temp: string;
    begin 
        temp := '';
        asm 
            temp = document.getElementById(id).value;
        end;

        exit(temp);
    end;

    procedure dom.setValuehtml(id: string; content: string);
    begin 
        asm
            document.getElementById(id).value = content;
        end;
    end;
end.
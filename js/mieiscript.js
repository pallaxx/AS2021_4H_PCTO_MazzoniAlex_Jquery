jQuery
(function()
    {

        $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    }
);

var i=0, m=0;
var CognomeNomeVerifica=[];

jQuery("#miobottone").on("click",function() 
{
    var nome=jQuery("#nome").val();
    var cognome=jQuery("#cognome").val();

    CognomeNomeVerifica[i]=nome + " " + cognome;
    flag=0;
    if(i>=1)
    {
        var f=0;
        for(var j=0; j<i;j++)
        {
            if(CognomeNomeVerifica[j]==CognomeNomeVerifica[i])
            {
                f=1;
                testo=("Hai inserito un altro "+ CognomeNomeVerifica[i]);
                flag=1;
                    
                //il modal funziona ma scompare subito
                    
                $('#messaggino').click();         
                jQuery('#bottoneprimario').prop("hidden", true);
                jQuery("#staticBackdropLabel").html("Attenzione!");
                jQuery("#corpomessagino").html(testo);     
                jQuery("#bottonesecondario").html("Ho capito!");
            }
        }
        if(f==0)
        {
            m++;
        }
    
    }
    if(flag==0)
    {
        $('#messaggino').click();
        jQuery("#staticBackdropLabel").html("Nominativo inserito!");
        var testo=("Hai inserito il nominativo "+ nome + " " + cognome+"<br> confermare?");;
        jQuery("#corpomessagino").html(testo);
        jQuery("#bottoneprimario").removeAttr("hidden");
        jQuery("#bottonesecondario").html("Chiudi");
        jQuery("#bottoneprimario").html("Confermare!");

        $("#bottoneprimario").on("click",
        function() 
        {
            if(m==i)
            {
                var blocco=jQuery("<div><p>"+CognomeNomeVerifica[i]+"</p></div>");
                blocco.addClass("blocconomi");
                blocco.appendTo("#nomi");
                i++;
            }
        });

    }
});
});
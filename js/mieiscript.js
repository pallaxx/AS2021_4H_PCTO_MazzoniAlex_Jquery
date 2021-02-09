jQuery
(function()
    {

        $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    }
);
var i=0, flag=0, testo;
var CognomeNomeVerifica=[];

jQuery("#miobottone").on("click",function() 
    {
    var nome=jQuery("#nome").val();
    var cognome=jQuery("#cognome").val();

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

                CognomeNomeVerifica[i]=nome+" "+cognome;

                    if(i>=1)
                    {
                        for(var j=0; j<i;j++)
                        {
                            if(CognomeNomeVerifica[j]==CognomeNomeVerifica[i])
                            {
                                testo=("Hai inserito un altro "+ CognomeNomeVerifica[i]);
                                flag=1;
                                i--;

                                //il modal funziona ma scompare subito
                                
                                $('#messaggino').click();         
                                jQuery('#bottoneprimario').prop("hidden", true);
                                jQuery("#staticBackdropLabel").html("Attenzione!")
                                jQuery("#corpomessagino").html(t)
                                jQuery("#bottonesecondario").html("Ho capito!")
                            }
                        }
                    }

                    if(flag==0)
                    {
                        var blocco=jQuery("<div><p>"+CognomeNomeVerifica[i]+"</p></div>");
                        blocco.addClass("blocconomi");
                        blocco.appendTo("#nomi");
                    }


                    i++;
                    }
                );
            }
        );
    }
);
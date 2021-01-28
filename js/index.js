$(document).ready(function () { 
    $.getJSON("https://my-json-server.typicode.com/maliszek97/json-server/db",  function(data) {
        $(".soldier1").append(data.druzyna[0].stanowisko);
        $(".soldier1img").attr("src", data.druzyna[0].image);
        $("#s11").append(data.druzyna[0].nazwa_operacyjna);
        $("#s12").append(data.druzyna[0].dlugosc_sluzby);
        $("#s13").append(data.druzyna[0].natychmiastowa_gotowosc);
        $("#s14").append(data.druzyna[0].rejon_rozlokowania);
        $("#s15").append(data.druzyna[0].posiadana_bron);
        $("#s16").append(data.druzyna[0].status_medyczny);
        $("#s17").append(data.druzyna[0].status_zaszczepienia);
        $("#s18").append(data.druzyna[0].id_karty);
        $("#s19").append(data.druzyna[0].amunicja);
        $(".adres1").append(data.druzyna[0].adres.ulica);                       
        $.each(data.druzyna[0].adres, function(i, value){
        $(".adres1").append('<p>ul. ' + value.ulica + ' ' + value.numer_bloku + '/' + value.numer_mieszkania + '<br />' + value.kod_pocztowy + ' ' + value.miejscowosc +'<br />' +
                       '<strong>Koordynaty:</strong><br />' + value.dlugosc_geograficzna + ', ' + value.szerokosc_geograficzna + '<br /></p>');
        })
        $.each(data.druzyna[0].wyposazenie, function(i, value){
        $(".wyposazenie1").append('<p>Maska przeciwgazowa --- ' + value.maska_przeciwgazowa + '</p>' + '<p>Kamizelka --- ' + value.kamizelka + '</p>' + 
                             '<p>Hełm --- ' + value.helm + '</p>' + '<p>Noktowizor --- ' + value.noktowizor + '</p>' + '<p>Celownik laserowy --- ' + value.calownik_laserowy + '</p>' + '<p>HWS --- ' + value.hws + '</p>' + '<p>Latarka --- ' + value.latarka + '</p>' + '<p>Łoparka piechoty --- ' + value.lopatka + '</p>' + '<p>Plecak medyczny --- ' + value.plecak_medyczny + '</p>' + '<p>Okulary --- ' + value.okulary + '</p>' + '<p>Lornetka --- ' + value.lornetka + '</p>');
        })                       
        
        $(".soldier2").append(data.druzyna[1].stanowisko);
        $(".soldier2img").attr("src", data.druzyna[1].image);
        $("#s21").append(data.druzyna[1].nazwa_operacyjna);
        $("#s22").append(data.druzyna[1].dlugosc_sluzby);
        $("#s23").append(data.druzyna[1].natychmiastowa_gotowosc);
        $("#s24").append(data.druzyna[1].rejon_rozlokowania);
        $("#s25").append(data.druzyna[1].posiadana_bron);
        $("#s26").append(data.druzyna[1].status_medyczny);
        $("#s27").append(data.druzyna[1].status_zaszczepienia);
        $("#s28").append(data.druzyna[1].id_karty);
        $("#s29").append(data.druzyna[1].amunicja);
        $(".adres2").append(data.druzyna[1].adres.ulica);                       
        $.each(data.druzyna[1].adres, function(i, value){
        $(".adres2").append('<p>ul. ' + value.ulica + ' ' + value.numer_bloku + '/' + value.numer_mieszkania + '<br />' + value.kod_pocztowy + ' ' + value.miejscowosc +'<br />' +
                       '<strong>Koordynaty:</strong><br />' + value.dlugosc_geograficzna + ', ' + value.szerokosc_geograficzna + '<br /></p>');
        })
        $.each(data.druzyna[1].wyposazenie, function(i, value){
        $(".wyposazenie2").append('<p>Maska przeciwgazowa --- ' + value.maska_przeciwgazowa + '</p>' + '<p>Kamizelka --- ' + value.kamizelka + '</p>' + 
                             '<p>Hełm --- ' + value.helm + '</p>' + '<p>Noktowizor --- ' + value.noktowizor + '</p>' + '<p>Celownik laserowy --- ' + value.calownik_laserowy + '</p>' + '<p>HWS --- ' + value.hws + '</p>' + '<p>Latarka --- ' + value.latarka + '</p>' + '<p>Łoparka piechoty --- ' + value.lopatka + '</p>' + '<p>Plecak medyczny --- ' + value.plecak_medyczny + '</p>' + '<p>Okulary --- ' + value.okulary + '</p>' + '<p>Lornetka --- ' + value.lornetka + '</p>');
        })
        
        $(".soldier3").append(data.druzyna[2].stanowisko);
        $(".soldier3img").attr("src", data.druzyna[2].image);
        $("#s31").append(data.druzyna[2].nazwa_operacyjna);
        $("#s32").append(data.druzyna[2].dlugosc_sluzby);
        $("#s33").append(data.druzyna[2].natychmiastowa_gotowosc);
        $("#s34").append(data.druzyna[2].rejon_rozlokowania);
        $("#s35").append(data.druzyna[2].posiadana_bron);
        $("#s36").append(data.druzyna[2].status_medyczny);
        $("#s37").append(data.druzyna[2].status_zaszczepienia);
        $("#s38").append(data.druzyna[2].id_karty);
        $("#s39").append(data.druzyna[2].amunicja);
        $(".adres3").append(data.druzyna[2].adres.ulica);                       
        $.each(data.druzyna[2].adres, function(i, value){
        $(".adres3").append('<p>ul. ' + value.ulica + ' ' + value.numer_bloku + '/' + value.numer_mieszkania + '<br />' + value.kod_pocztowy + ' ' + value.miejscowosc +'<br />' +
                       '<strong>Koordynaty:</strong><br />' + value.dlugosc_geograficzna + ', ' + value.szerokosc_geograficzna + '<br /></p>');
        })
        $.each(data.druzyna[2].wyposazenie, function(i, value){
        $(".wyposazenie3").append('<p>Maska przeciwgazowa --- ' + value.maska_przeciwgazowa + '</p>' + '<p>Kamizelka --- ' + value.kamizelka + '</p>' + 
                             '<p>Hełm --- ' + value.helm + '</p>' + '<p>Noktowizor --- ' + value.noktowizor + '</p>' + '<p>Celownik laserowy --- ' + value.calownik_laserowy + '</p>' + '<p>HWS --- ' + value.hws + '</p>' + '<p>Latarka --- ' + value.latarka + '</p>' + '<p>Łoparka piechoty --- ' + value.lopatka + '</p>' + '<p>Plecak medyczny --- ' + value.plecak_medyczny + '</p>' + '<p>Okulary --- ' + value.okulary + '</p>' + '<p>Lornetka --- ' + value.lornetka + '</p>');
        })
        
        $(".soldier4").append(data.druzyna[3].stanowisko);
        $(".soldier4img").attr("src", data.druzyna[3].image);
        $("#s41").append(data.druzyna[3].nazwa_operacyjna);
        $("#s42").append(data.druzyna[3].dlugosc_sluzby);
        $("#s43").append(data.druzyna[3].natychmiastowa_gotowosc);
        $("#s44").append(data.druzyna[3].rejon_rozlokowania);
        $("#s45").append(data.druzyna[3].posiadana_bron);
        $("#s46").append(data.druzyna[3].status_medyczny);
        $("#s47").append(data.druzyna[3].status_zaszczepienia);
        $("#s48").append(data.druzyna[3].id_karty);
        $("#s49").append(data.druzyna[3].amunicja);
        $(".adres4").append(data.druzyna[3].adres.ulica);                       
        $.each(data.druzyna[3].adres, function(i, value){
        $(".adres4").append('<p>ul. ' + value.ulica + ' ' + value.numer_bloku + '/' + value.numer_mieszkania + '<br />' + value.kod_pocztowy + ' ' + value.miejscowosc +'<br />' +
                       '<strong>Koordynaty:</strong><br />' + value.dlugosc_geograficzna + ', ' + value.szerokosc_geograficzna + '<br /></p>');
        })
        $.each(data.druzyna[3].wyposazenie, function(i, value){
        $(".wyposazenie4").append('<p>Maska przeciwgazowa --- ' + value.maska_przeciwgazowa + '</p>' + '<p>Kamizelka --- ' + value.kamizelka + '</p>' + 
                             '<p>Hełm --- ' + value.helm + '</p>' + '<p>Noktowizor --- ' + value.noktowizor + '</p>' + '<p>Celownik laserowy --- ' + value.calownik_laserowy + '</p>' + '<p>HWS --- ' + value.hws + '</p>' + '<p>Latarka --- ' + value.latarka + '</p>' + '<p>Łoparka piechoty --- ' + value.lopatka + '</p>' + '<p>Plecak medyczny --- ' + value.plecak_medyczny + '</p>' + '<p>Okulary --- ' + value.okulary + '</p>' + '<p>Lornetka --- ' + value.lornetka + '</p>');
        })
        
        $(".soldier5").append(data.druzyna[4].stanowisko);
        $(".soldier5img").attr("src", data.druzyna[4].image);
        $("#s51").append(data.druzyna[4].nazwa_operacyjna);
        $("#s52").append(data.druzyna[4].dlugosc_sluzby);
        $("#s53").append(data.druzyna[4].natychmiastowa_gotowosc);
        $("#s54").append(data.druzyna[4].rejon_rozlokowania);
        $("#s55").append(data.druzyna[4].posiadana_bron);
        $("#s56").append(data.druzyna[4].status_medyczny);
        $("#s57").append(data.druzyna[4].status_zaszczepienia);
        $("#s58").append(data.druzyna[4].id_karty);
        $("#s59").append(data.druzyna[4].amunicja);
        $(".adres5").append(data.druzyna[4].adres.ulica);                       
        $.each(data.druzyna[4].adres, function(i, value){
        $(".adres5").append('<p>ul. ' + value.ulica + ' ' + value.numer_bloku + '/' + value.numer_mieszkania + '<br />' + value.kod_pocztowy + ' ' + value.miejscowosc +'<br />' +
                       '<strong>Koordynaty:</strong><br />' + value.dlugosc_geograficzna + ', ' + value.szerokosc_geograficzna + '<br /></p>');
        })
        $.each(data.druzyna[4].wyposazenie, function(i, value){
        $(".wyposazenie5").append('<p>Maska przeciwgazowa --- ' + value.maska_przeciwgazowa + '</p>' + '<p>Kamizelka --- ' + value.kamizelka + '</p>' + 
                             '<p>Hełm --- ' + value.helm + '</p>' + '<p>Noktowizor --- ' + value.noktowizor + '</p>' + '<p>Celownik laserowy --- ' + value.calownik_laserowy + '</p>' + '<p>HWS --- ' + value.hws + '</p>' + '<p>Latarka --- ' + value.latarka + '</p>' + '<p>Łoparka piechoty --- ' + value.lopatka + '</p>' + '<p>Plecak medyczny --- ' + value.plecak_medyczny + '</p>' + '<p>Okulary --- ' + value.okulary + '</p>' + '<p>Lornetka --- ' + value.lornetka + '</p>');
        })   
        
        $(".soldier6").append(data.druzyna[5].stanowisko);
        $(".soldier6img").attr("src", data.druzyna[5].image);
        $("#s61").append(data.druzyna[5].nazwa_operacyjna);
        $("#s62").append(data.druzyna[5].dlugosc_sluzby);
        $("#s63").append(data.druzyna[5].natychmiastowa_gotowosc);
        $("#s64").append(data.druzyna[5].rejon_rozlokowania);
        $("#s65").append(data.druzyna[5].posiadana_bron);
        $("#s66").append(data.druzyna[5].status_medyczny);
        $("#s67").append(data.druzyna[5].status_zaszczepienia);
        $("#s68").append(data.druzyna[5].id_karty);
        $("#s69").append(data.druzyna[5].amunicja);
        $(".adres6").append(data.druzyna[5].adres.ulica);                       
        $.each(data.druzyna[5].adres, function(i, value){
        $(".adres6").append('<p>ul. ' + value.ulica + ' ' + value.numer_bloku + '/' + value.numer_mieszkania + '<br />' + value.kod_pocztowy + ' ' + value.miejscowosc +'<br />' +
                       '<strong>Koordynaty:</strong><br />' + value.dlugosc_geograficzna + ', ' + value.szerokosc_geograficzna + '<br /></p>');
        })
        $.each(data.druzyna[5].wyposazenie, function(i, value){
        $(".wyposazenie6").append('<p>Maska przeciwgazowa --- ' + value.maska_przeciwgazowa + '</p>' + '<p>Kamizelka --- ' + value.kamizelka + '</p>' + 
                             '<p>Hełm --- ' + value.helm + '</p>' + '<p>Noktowizor --- ' + value.noktowizor + '</p>' + '<p>Celownik laserowy --- ' + value.calownik_laserowy + '</p>' + '<p>HWS --- ' + value.hws + '</p>' + '<p>Latarka --- ' + value.latarka + '</p>' + '<p>Łoparka piechoty --- ' + value.lopatka + '</p>' + '<p>Plecak medyczny --- ' + value.plecak_medyczny + '</p>' + '<p>Okulary --- ' + value.okulary + '</p>' + '<p>Lornetka --- ' + value.lornetka + '</p>');
        })   
        
        $(".soldier7").append(data.druzyna[6].stanowisko);
        $(".soldier7img").attr("src", data.druzyna[6].image);
        $("#s71").append(data.druzyna[6].nazwa_operacyjna);
        $("#s72").append(data.druzyna[6].dlugosc_sluzby);
        $("#s73").append(data.druzyna[6].natychmiastowa_gotowosc);
        $("#s74").append(data.druzyna[6].rejon_rozlokowania);
        $("#s75").append(data.druzyna[6].posiadana_bron);
        $("#s76").append(data.druzyna[6].status_medyczny);
        $("#s77").append(data.druzyna[6].status_zaszczepienia);
        $("#s78").append(data.druzyna[6].id_karty);
        $("#s79").append(data.druzyna[6].amunicja);
        $(".adres7").append(data.druzyna[6].adres.ulica);                       
        $.each(data.druzyna[6].adres, function(i, value){
        $(".adres7").append('<p>ul. ' + value.ulica + ' ' + value.numer_bloku + '/' + value.numer_mieszkania + '<br />' + value.kod_pocztowy + ' ' + value.miejscowosc +'<br />' +
                       '<strong>Koordynaty:</strong><br />' + value.dlugosc_geograficzna + ', ' + value.szerokosc_geograficzna + '<br /></p>');
        })
        $.each(data.druzyna[6].wyposazenie, function(i, value){
        $(".wyposazenie7").append('<p>Maska przeciwgazowa --- ' + value.maska_przeciwgazowa + '</p>' + '<p>Kamizelka --- ' + value.kamizelka + '</p>' + 
                             '<p>Hełm --- ' + value.helm + '</p>' + '<p>Noktowizor --- ' + value.noktowizor + '</p>' + '<p>Celownik laserowy --- ' + value.calownik_laserowy + '</p>' + '<p>HWS --- ' + value.hws + '</p>' + '<p>Latarka --- ' + value.latarka + '</p>' + '<p>Łoparka piechoty --- ' + value.lopatka + '</p>' + '<p>Plecak medyczny --- ' + value.plecak_medyczny + '</p>' + '<p>Okulary --- ' + value.okulary + '</p>' + '<p>Lornetka --- ' + value.lornetka + '</p>');
        })   
        
        $(".soldier8").append(data.druzyna[7].stanowisko);
        $(".soldier8img").attr("src", data.druzyna[7].image);
        $("#s81").append(data.druzyna[7].nazwa_operacyjna);
        $("#s82").append(data.druzyna[7].dlugosc_sluzby);
        $("#s83").append(data.druzyna[7].natychmiastowa_gotowosc);
        $("#s84").append(data.druzyna[7].rejon_rozlokowania);
        $("#s85").append(data.druzyna[7].posiadana_bron);
        $("#s86").append(data.druzyna[7].status_medyczny);
        $("#s87").append(data.druzyna[7].status_zaszczepienia);
        $("#s88").append(data.druzyna[7].id_karty);
        $("#s89").append(data.druzyna[7].amunicja);
        $(".adres8").append(data.druzyna[7].adres.ulica);                       
        $.each(data.druzyna[7].adres, function(i, value){
        $(".adres8").append('<p>ul. ' + value.ulica + ' ' + value.numer_bloku + '/' + value.numer_mieszkania + '<br />' + value.kod_pocztowy + ' ' + value.miejscowosc +'<br />' +
                       '<strong>Koordynaty:</strong><br />' + value.dlugosc_geograficzna + ', ' + value.szerokosc_geograficzna + '<br /></p>');
        })
        $.each(data.druzyna[7].wyposazenie, function(i, value){
        $(".wyposazenie8").append('<p>Maska przeciwgazowa --- ' + value.maska_przeciwgazowa + '</p>' + '<p>Kamizelka --- ' + value.kamizelka + '</p>' + 
                             '<p>Hełm --- ' + value.helm + '</p>' + '<p>Noktowizor --- ' + value.noktowizor + '</p>' + '<p>Celownik laserowy --- ' + value.calownik_laserowy + '</p>' + '<p>HWS --- ' + value.hws + '</p>' + '<p>Latarka --- ' + value.latarka + '</p>' + '<p>Łoparka piechoty --- ' + value.lopatka + '</p>' + '<p>Plecak medyczny --- ' + value.plecak_medyczny + '</p>' + '<p>Okulary --- ' + value.okulary + '</p>' + '<p>Lornetka --- ' + value.lornetka + '</p>');
        })   
        
        $(".soldier9").append(data.druzyna[8].stanowisko);
        $(".soldier9img").attr("src", data.druzyna[8].image);
        $("#s91").append(data.druzyna[8].nazwa_operacyjna);
        $("#s92").append(data.druzyna[8].dlugosc_sluzby);
        $("#s93").append(data.druzyna[8].natychmiastowa_gotowosc);
        $("#s94").append(data.druzyna[8].rejon_rozlokowania);
        $("#s95").append(data.druzyna[8].posiadana_bron);
        $("#s96").append(data.druzyna[8].status_medyczny);
        $("#s97").append(data.druzyna[8].status_zaszczepienia);
        $("#s98").append(data.druzyna[8].id_karty);
        $("#s99").append(data.druzyna[8].amunicja);
        $(".adres9").append(data.druzyna[8].adres.ulica);                       
        $.each(data.druzyna[8].adres, function(i, value){
        $(".adres9").append('<p>ul. ' + value.ulica + ' ' + value.numer_bloku + '/' + value.numer_mieszkania + '<br />' + value.kod_pocztowy + ' ' + value.miejscowosc +'<br />' +
                       '<strong>Koordynaty:</strong><br />' + value.dlugosc_geograficzna + ', ' + value.szerokosc_geograficzna + '<br /></p>');
        })
        $.each(data.druzyna[8].wyposazenie, function(i, value){
        $(".wyposazenie9").append('<p>Maska przeciwgazowa --- ' + value.maska_przeciwgazowa + '</p>' + '<p>Kamizelka --- ' + value.kamizelka + '</p>' + 
                             '<p>Hełm --- ' + value.helm + '</p>' + '<p>Noktowizor --- ' + value.noktowizor + '</p>' + '<p>Celownik laserowy --- ' + value.calownik_laserowy + '</p>' + '<p>HWS --- ' + value.hws + '</p>' + '<p>Latarka --- ' + value.latarka + '</p>' + '<p>Łoparka piechoty --- ' + value.lopatka + '</p>' + '<p>Plecak medyczny --- ' + value.plecak_medyczny + '</p>' + '<p>Okulary --- ' + value.okulary + '</p>' + '<p>Lornetka --- ' + value.lornetka + '</p>');
        })   
        
        $(".soldier10").append(data.druzyna[9].stanowisko);
        $(".soldier10img").attr("src", data.druzyna[9].image);
        $("#s101").append(data.druzyna[9].nazwa_operacyjna);
        $("#s102").append(data.druzyna[9].dlugosc_sluzby);
        $("#s103").append(data.druzyna[9].natychmiastowa_gotowosc);
        $("#s104").append(data.druzyna[9].rejon_rozlokowania);
        $("#s105").append(data.druzyna[9].posiadana_bron);
        $("#s106").append(data.druzyna[9].status_medyczny);
        $("#s107").append(data.druzyna[9].status_zaszczepienia);
        $("#s108").append(data.druzyna[9].id_karty);
        $("#s109").append(data.druzyna[9].amunicja);
        $(".adres10").append(data.druzyna[9].adres.ulica);                       
        $.each(data.druzyna[9].adres, function(i, value){
        $(".adres10").append('<p>ul. ' + value.ulica + ' ' + value.numer_bloku + '/' + value.numer_mieszkania + '<br />' + value.kod_pocztowy + ' ' + value.miejscowosc +'<br />' +
                       '<strong>Koordynaty:</strong><br />' + value.dlugosc_geograficzna + ', ' + value.szerokosc_geograficzna + '<br /></p>');
        })
        $.each(data.druzyna[9].wyposazenie, function(i, value){
        $(".wyposazenie10").append('<p>Maska przeciwgazowa --- ' + value.maska_przeciwgazowa + '</p>' + '<p>Kamizelka --- ' + value.kamizelka + '</p>' + 
                             '<p>Hełm --- ' + value.helm + '</p>' + '<p>Noktowizor --- ' + value.noktowizor + '</p>' + '<p>Celownik laserowy --- ' + value.calownik_laserowy + '</p>' + '<p>HWS --- ' + value.hws + '</p>' + '<p>Latarka --- ' + value.latarka + '</p>' + '<p>Łoparka piechoty --- ' + value.lopatka + '</p>' + '<p>Plecak medyczny --- ' + value.plecak_medyczny + '</p>' + '<p>Okulary --- ' + value.okulary + '</p>' + '<p>Lornetka --- ' + value.lornetka + '</p>');
        })   
    });
});  

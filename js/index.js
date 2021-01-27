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

    });
});  

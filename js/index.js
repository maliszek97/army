<script> 
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
  $(".soldier3").append(data.druzyna[2].stanowisko); 
  $(".soldier4").append(data.druzyna[3].stanowisko); 
  $(".soldier5").append(data.druzyna[4].stanowisko); 
  $(".soldier6").append(data.druzyna[5].stanowisko); 
  $(".soldier7").append(data.druzyna[6].stanowisko); 
  $(".soldier8").append(data.druzyna[7].stanowisko); 
  $(".soldier9").append(data.druzyna[8].stanowisko); 
  $(".soldier10").append(data.druzyna[9].stanowisko); 

  $.each(data.druzyna[0], function(i, value){
    $(".users-list").append('<li>' + value.data.druzyna[0].amunicja + '</li>');
  })
});
                }); 
</script> 

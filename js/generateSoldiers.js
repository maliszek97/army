function getJson(jsonFile){
    $.getJson("jsonFile"), function(data){
        $(".soldier1").append(data.druzyna[0].stanowisko);
    }
}

$(document).ready(getJson("https://my-json-server.typicode.com/maliszek97/json-server/db"));
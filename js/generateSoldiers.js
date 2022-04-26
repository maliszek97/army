function generateSoliers(jsonSrc){
    $.getJSON(jsonSrc), function(data){
        let soldierId = [];
        let soldierNum = Object.keys(data.druzyna).length;
        let x = 4;
        console.log(x);
        // console.log(soldierNum);
    }
}

$(document).ready(function(){
    generateSoliers("https://my-json-server.typicode.com/maliszek97/json-server/db");
})
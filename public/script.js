
function obj() {

    $.ajax({
        url:'http://localhost:8080/csvtojson',
        type: 'get',
        dataType: 'json',
        success: function (data, http, status) {

                $('#text_p').html(data[4]['38']);




        }

    });

}

setInterval(obj, 2000);
$(function(){
 
    var showCity = function(selectedState){
     $('#licencia option').hide();
        $('#licencia').find('option').filter(function(){
            var city = $(this).text();
            return city.indexOf(selectedState)!=-1;
        }).show();
        //set default value
        var defaultCity = $('#licencia option:visible:first').text();
        $('#licencia').val(defaultCity);
    };

    //set default state
    var state = $('#modelo').val();
    showCity(state);
    $('#modelo').change(function(){
       showCity($(this).val());
    });
});
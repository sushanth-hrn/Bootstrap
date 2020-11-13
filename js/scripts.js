$(document).ready(function(){
    $("#mycarousel").carousel({interval : 2000});
    $("#button").click(function(){
        if ($('#button').children('i').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#button').children('i').removeClass('fa-pause');
            $('#button').children('i').addClass('fa-play');   
        }
        else if ($('#button').children('i').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#button').children('i').removeClass('fa-play');
            $('#button').children('i').addClass('fa-pause');   
        }
    });
});

$(document).ready(function () {
    $('#loginbtn').click(function () {
       $('#loginmodal').modal('show');
   }); 
});

var smoking = document.querySelector('#yes');
var notSmoking = document.querySelector('#no');

smoking.addEventListener('click', () => {
    smoking.setAttribute("disabled", "disabled");
    notSmoking.removeAttribute("disabled");
});

notSmoking.addEventListener('click', () => {
    notSmoking.setAttribute("disabled", "disabled");
    smoking.removeAttribute("disabled");
});
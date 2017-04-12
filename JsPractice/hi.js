$(document).ready(function(){
    var $fish=$("#fish");
    
    $("#btncheck").click(function(){
        var x=300;
        var y=200;
        
        if((x>=0 && x<=500) && (y>=0 && y<300)){
            $fish.css({
                left: x,
                top: y
            });
        }else{
            alert("입력된 값이 큽니다!");
        }
    });
});
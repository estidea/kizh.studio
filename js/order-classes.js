$(".caption-interface").filter(function(index, element){
    return index % 2 == 0;
}).addClass("left-pointer");
$(".caption-interface").filter(function(index, element){
    return index % 2 == 1;
}).addClass("right-pointer");
$(".iterface-block").filter(function(index, element){
    return index % 2 == 0; 
}).addClass("mobile-reverse");
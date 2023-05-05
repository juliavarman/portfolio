$(function() {
	$(".button").click(function(){
var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
$(".number").html(randomNumber);
});

});


$(function() {
	$(".button2").hover(function() {
		$("body").toggleClass("hypnotize");



});
});

$(function() {
	$(".button3").hover(function() {
		$("body").toggleClass("Lightsoff");


});
});

$(function() {
	$(".button4").hover(function() {
		$("body").toggleClass("Stretch");


});
});

$(function() {
	$(".button5").hover(function() {
		$("body").toggleClass("SpringBreak");

});
});

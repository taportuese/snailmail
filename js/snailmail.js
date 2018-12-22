$(document).ready(function() {
    
//    THIS IS THE RANDOM FUNCTION FOR PROMPT GENERATION
    
    function shuffle(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    $('.random').each(function(){
    $(this).css({'top' : shuffle(0,h), 'left' : shuffle(0,w),'transform' : 'rotate(' + shuffle(0,w) + 'deg)'});
    });

    $('.random').mouseenter(function(){
    $(this).css({'top' : shuffle(0,h), 'left' : shuffle(0,w),'transform' : 'rotate(' + shuffle(0,w) + 'deg)'
    ,'transition' : 'all 0.5s'});
    });
    
    var one = ["WRITE TO A TEACHER OR ROLE MODEL YOU HAD LONG AGO", "WRITE A LETTER WITH YOUR NON-DOMINANT HAND", "WRITE A FOLLOW-UP THANK-YOU LETTER ABOUT A PAST GIFT", "COLLAGE A LETTER USING MAGAZINE CLIPPINGS AND FOUND PAPER", "FIND A PENPAL SITE ONLINE. HERE'S ONE: PENPAL-GATE.NET", "WRITE AN ANONYMOUS COMPLEMENT TO SOMEONE YOU DON'T KNOW WELL", "WRITE IN A CODE AND SEND A CYPHER ALONG WITH THE LETTER", "WRITE TO A FAMILY MEMBER WHO YOU DON'T USUALLY SEND MAIL TO", "WRITE ON A LOCAL POSTCARD AS IF YOU ARE ON VACATION", "WRITE ABOUT THE SHOWS/BOOKS THAT YOU ARE INTO RIGHT NOW"];    
    
    function shuffle(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    $(".button").click(function() {
		$(".one").html(one[Math.floor(Math.random() * one.length)]);
    });
    
//    THIS IS THE CURSOR EFFECTS ON HOME PAGE
    
    $(".returnaddress").mouseenter(function() {
		$(".cursor1").show();
		$("html").css("cursor", "none");
	});

	$(".returnaddress").mouseleave(function() {
		$(".cursor1").hide();
		$("html").css("cursor", "auto");
	});
    
    $(".seal").mouseenter(function() {
		$(".cursor2").show();
		$("html").css("cursor", "none");
	});

	$(".seal").mouseleave(function() {
		$(".cursor2").hide();
		$("html").css("cursor", "auto");
	});
    
    $(".stamp").mouseenter(function() {
		$(".cursor3").show();
		$("html").css("cursor", "none");
	});

	$(".stamp").mouseleave(function() {
		$(".cursor3").hide();
		$("html").css("cursor", "auto");
	});
    
//    THESE ARE THE STAMP COLLECTION'S INFORMATION
    
    $("#invertedjenny").mouseenter(function() {
		$("#invertedjennyp").show();
	});

	$("#invertedjenny").mouseleave(function() {
		$("#invertedjennyp").hide();
	});
    
    $("#wpa").mouseenter(function() {
		$("#wpap").show();
	});

	$("#wpa").mouseleave(function() {
		$("#wpap").hide();
	});
    
    $("#redmercury").mouseenter(function() {
		$("#redmercuryp").show();
	});

	$("#redmercury").mouseleave(function() {
		$("#redmercuryp").hide();
	});
    
    $("#forever").mouseenter(function() {
		$("#foreverp").show();
	});

	$("#forever").mouseleave(function() {
		$("#foreverp").hide();
	});
    
    $("#pacific97").mouseenter(function() {
		$("#pacific97p").show();
	});

	$("#pacific97").mouseleave(function() {
		$("#pacific97p").hide();
	});
    
    $("#brontosaurus").mouseenter(function() {
		$("#brontosaurusp").show();
	});

	$("#brontosaurus").mouseleave(function() {
		$("#brontosaurusp").hide();
	});
	
});

$(document).on('mousemove', function(e){

    $('.cursor1').css({
       left:  e.pageX + 5, 
       top:   e.pageY + 0
    });
    
    $('.cursor2').css({
       left:  e.pageX + 5, 
       top:   e.pageY + 0
    });
    
    $('.cursor3').css({
       left:  e.pageX + 5,  // Set "0" to any other integer to offset its position 
       top:   e.pageY + 0   // Ditto
    });

});
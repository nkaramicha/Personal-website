$(document).ready(function () {
	$('.nav li a').click(function(e) {
		$('.nav li.active').removeClass('active');
		var $parent = $(this).parent();
		$parent.addClass('active');
		e.preventDefault();
		var tabid = $(this).attr("href");
		console.log(tabid);
		if(tabid!="/CV.pdf")
		{
			$(".main").hide();   // hiding open tab
			$(tabid).fadeIn(500);    // show tab
			if($(window).width() < 1025 ) {
				$(".sidenav").slideUp(300);
				$(".main2").css("display", "block");
			}
		}
		else
		{
			window.open('PATH_TO_CV');
		}
	});
});

function myFunction(btnID, divID) {
	var moreText = document.getElementById(btnID);
	var btnText = document.getElementById(divID);

	if (btnText.innerHTML === "Read more") {
		btnText.innerHTML = "Read less"; 
		$(moreText).slideDown(500);
	}
	else {
		btnText.innerHTML = "Read more"; 
		$(moreText).slideUp(500);
	}
}

function openNav() {
	$(".sidenav").slideDown(300);
	$(".sidenav").css("width", "100%");
	$(".main-menu").css("display", "block");
	$(".social-menu-mobile").css("display", "block");
	$(".social-menu-desktop").css("display", "none");
	$(".main-menu").css("text-align", "center");
	$(".main-menu").css("margin-top", "20px");
	$(".main-menu a").css("font-size", "30px");
	$(".main2").css("display", "none");
}

$(function () {
	new TypeIt('#element', {
		speed: 250
	})
		.type('TITLE')
});

function sendContact() {
	jQuery.ajax({
		url: "mailer.php",
		data:'name='+$("#name").val()+'&email='+$("#email").val()+$("#email").val()+'&content='+$("#content").val(),
		type: "POST",
		success:function(data){
			Swal.fire({
				icon: 'success',
				title: "Message has been sent!"
			});
		},
		error:function (data){
			Swal.fire({
				icon: 'error',
				title: "Message could not be sent :( try to contact me with another way"
			});
		}
	});
}

$(document).ready(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('#back-to-top').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	$('#back-to-top').tooltip('show');

});
$(document).ready(function() {

	// Удаление площадки ajax
	$(".btn-popup-delete-area").on("click", function() {
		console.log("ajax-delete-area-id");
	});
	$(".btn-popup-cancel").on("click", function() {
		$.fancybox.close();
	});
	
	// customSelect
	// http://adam.co/lab/jquery/customselect/
	// https://github.com/adamcoulombe/jquery.customSelect
	$("select").customSelect();

	// show messages
	$(".sidebarleft__header__controls__item .icon-message").on("click", function() {
		$(".sidebarleft__header__controls__item").removeClass("active");
		$(".content").addClass("move");
		$(".sidebarleft").addClass("move");
		$(".sidebarright").addClass("move");
	});
	// hide messages
	$(".sidebarright__close").on("click", function() {
		$(".content").removeClass("move");
		$(".sidebarleft").removeClass("move");
		$(".sidebarright").removeClass("move");
	});
	$(".sidebarleft__header__controls__item i").on("click", function() {
		if ( !$(this).parent().hasClass("active") ) {
			$(".sidebarleft__header__controls__item").removeClass("active");
			$(this).parent().addClass("active");
			$(".content").on("click", function() {
				$(".sidebarleft__header__controls__item").removeClass("active");
			});
		} else {
			$(this).parent().removeClass("active");
		}
	});

	// Bootstrap: tooltip.js v3.3.6 http://getbootstrap.com/javascript/#tooltip
	$('[data-toggle="tooltip"]').tooltip();

	//Placeholder
	//Doc: https://github.com/NV/placeholder.js/
	$("[placeholder]").textPlaceholder();

	//Попап менеджер FancyBox
	//Документация: http://fancyapps.com/fancybox/
	//<a class="fancybox" rel="group" href="big_image_1.jpg"><img src="small_image_1.jpg" alt="" /></a>
	//<a class="fancybox" rel="group" href="big_image_2.jpg"><img src="small_image_2.jpg" alt="" /></a>
	$(".fancybox").fancybox();

	//Плавный скролл до блока
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.howitworkslnk").on("click", function() {
		$.scrollTo($("#howitworks"), 800, {
			offset: 0
		});
	});
	$("a.helplnk").on("click", function() {
		$.scrollTo($("#help"), 800, {
			offset: 0
		});
	});

	//Expand FAQ on index page
	$(".question").on("click", function() {
		var e = $(this).parent().find(".answer");
		if ( e.hasClass("js-expand") ) {
			e.slideUp();
			e.removeClass("js-expand");
		} else {
			e.slideDown();
			e.addClass("js-expand");
		}
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form#login").submit(function() {

		var	email = $(this).find("input[name='email']").val(),
			pass = $(this).find("input[name='pass']").val();

		if (!email || !pass) {
			$(".form-message").html("Заполните поля формы.");
			$(".form-message").addClass("error");
			$(".form-message").slideDown();
			return false;
		}

		var email_regexp = /.+@.+\..+/i;
		var email_test = email_regexp.test(email);
		if (!email_test) {
			$(".form-message").html("Введен некоректный Email-адрес.");
			$(".form-message").addClass("error");
			$(".form-message").slideDown();
			return false;
		}

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("form").serialize(),
			success: function(response) {
				$(".form-message").html("OK message");
				$(".form-message").removeClass("error");
				$(".form-message").slideDown();
			},
			error:  function(xhr, str){
				$(".form-message").html("Error message");
				$(".form-message").addClass("error");
				$(".form-message").slideDown();
			}
		}).done(function() {
			// alert("Спасибо за заявку!");
			// setTimeout(function() {
			// 	$.fancybox.close();
			// }, 1000);
		});
		return false;
	});
	$("form#registration").submit(function() {

		var name = $(this).find("input[name='name']").val(),
			email = $(this).find("input[name='email']").val(),
			pass = $(this).find("input[name='pass']").val();

		if (!name || !email|| !pass) {
			$(".form-message").html("Заполните поля формы.");
			$(".form-message").addClass("error");
			$(".form-message").slideDown();
			return false;
		}

		var email_regexp = /.+@.+\..+/i;
		var email_test = email_regexp.test(email);
		if (!email_test) {
			$(".form-message").html("Введен некоректный Email-адрес.");
			$(".form-message").addClass("error");
			$(".form-message").slideDown();
			return false;
		}

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("form").serialize(),
			success: function(response) {
				$(".form-message").html("OK message");
				$(".form-message").removeClass("error");
				$(".form-message").slideDown();
			},
			error:  function(xhr, str){
				$(".form-message").html("Error message");
				$(".form-message").addClass("error");
				$(".form-message").slideDown();
			}
		}).done(function() {
			// alert("Спасибо за заявку!");
			// setTimeout(function() {
			// 	$.fancybox.close();
			// }, 1000);
		});
		return false;
	});
	$("form#resetpass").submit(function() {

		var email = $(this).find("input[name='email']").val();

		if (!email) {
			$(".form-message").html("Заполните поля формы.");
			$(".form-message").addClass("error");
			$(".form-message").slideDown();
			return false;
		}

		var email_regexp = /.+@.+\..+/i;
		var email_test = email_regexp.test(email);
		if (!email_test) {
			$(".form-message").html("Введен некоректный Email-адрес.");
			$(".form-message").addClass("error");
			$(".form-message").slideDown();
			return false;
		}

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("form").serialize(),
			success: function(response) {
				$(".form-message").html("Запрос отправлен, загляните на почту!");
				$(".form-message").removeClass("error");
				$(".form-message").slideDown();
			},
			error:  function(xhr, str){
				$(".form-message").html("Пользователь с таким email не найден!");
				$(".form-message").addClass("error");
				$(".form-message").slideDown();
			}
		}).done(function() {
			// alert("Спасибо за заявку!");
			// setTimeout(function() {
			// 	$.fancybox.close();
			// }, 1000);
		});
		return false;
	});

});
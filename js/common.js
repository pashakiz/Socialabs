$(document).ready(function() {

	// Native scroll with custom scrollbar
	// init in HTML: data-simplebar-direction="vertical"
	// https://github.com/Grsmto/simplebar
	$(".content").simplebar({ autoHide: false });
	$(".sidebarright__inner").simplebar();
	$(".chain-messages-dialog__messages").simplebar();
	// $(".chain-messages-dialog__textarea").simplebar();

	// Расширенные настройки поиска площадок
	$(".btn-advanced-settings").on("click", function() {
		$(".search-areas__row_hidden").slideToggle();
	});

	// Удаление площадки ajax
	$(".btn-popup-delete-area").on("click", function() {
		console.log("ajax-delete-area-id");
	});
	$(".btn-popup-cancel").on("click", function() {
		$.fancybox.close();
	});

	//Custom RadioButtons
	$(".radiobutton").on("click", function() {
		// обнуляем все радиобатоны и кастомные иконки
		$(".radiobutton").children(":radio").prop("checked", false);
		$(".radiobutton").children(".icon-radiobutton").removeClass("checked");
		// устанавливаем текущий RB в checked
		$(this).children(":radio").prop("checked", true);
		$(this).children(".icon-radiobutton").addClass("checked");
		//show additional input for Google+
		if ( $(this).hasClass("add-input") ) {
			$(".area-add__added-input").slideDown();
		} else {
			$(".area-add__added-input").slideUp();
		}
	});

	// Custom CheckBoxes (default)
	$(".checkbox_default").on("click", function() {
		// var current_checkbox = $(this).children(":checkbox");
		// if (current_checkbox.prop("checked")) {
		// 	// Снимаем отметку с checkbox'а
		// 	current_checkbox.prop("checked", false);
		// 	// добавляем нужный класс иконке
		// 	$(this).children(".checkbox__icon").removeClass("icon-check-box");
		// 	$(this).children(".checkbox__icon").addClass("icon-check-box-unchecked");
		// } else {
		// 	// Снимаем отметку с checkbox'а
		// 	current_checkbox.prop("checked", true);
		// 	// добавляем нужный класс иконке
		// 	$(this).children(".checkbox__icon").removeClass("icon-check-box-unchecked");
		// 	$(this).children(".checkbox__icon").addClass("icon-check-box");
		// };
	});

	// Select areatopics: Custom CheckBoxes (multiselect)
	$(".checkbox_multiselect").on("click", function() {
		var current_checkbox = $(this).children(":checkbox");
		if (current_checkbox.prop("checked")) {
			// Снимаем отметку с checkbox'а
			current_checkbox.prop("checked", false);
			// remove icon
			$(this).children(".checkbox__icon").removeClass("icon-accept");
		} else {
			// Снимаем отметку с checkbox'а
			current_checkbox.prop("checked", true);
			// add icon
			$(this).children(".checkbox__icon").addClass("icon-accept");
		};
	});
	// Add areatopics: Custom CheckBoxes multiselect submit
	$(".areatopics-popup__btn-ok").on("click", function() {
		var html1 = "<div class='checkbox checkbox_multiselect-true' data-checkbox-multiselect-value='",
			html2 = "'><span class='checkbox__title'>",
			html3 = "</span><i class='checkbox__icon icon-close'></i></div>",
			out = "";

		$(".checkbox_multiselect").children(":checkbox:checked").each(function(){ // only checked checkboxes
			var value = $(this).val(),
				text = $(this).parent().children(".checkbox__title").text();

			out += html1 + value + html2 + text + html3;
		});

		$(".search-areas__row-inner_cbms-true").html(out);
		$.fancybox.close();
	});
	// Remove areatopics: Custom CheckBoxes .checkbox_multiselect-true (multiselect remove)
	$(".search-areas__row-inner_cbms-true").on("click", ".checkbox_multiselect-true", function() {
		var chekbox_value = $(this).attr('data-checkbox-multiselect-value');
		$("input[value='"+chekbox_value+"']").prop("checked", false);
		$("input[value='"+chekbox_value+"']").parent().children(".checkbox__icon").removeClass("icon-accept");
		$(this).remove();
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
	// Показ диалога сообщений
	$(".chain-messages").on("click", function() {
		console.log("ajax-show-chain-messages-id");
		$(".chain-messages-dialog").show();
	});
	// Скрыть диалог сообщений
	$(".btn-dialog-close").on("click", function() {
		$(".chain-messages-dialog").hide();
	});
	// Удаление цепочки сообщений
	$(".chain-messages__del").on("click", function() {
		console.log("ajax-delete-chain-messages-id");
		$(this).parent().slideUp();
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
	$(".fancybox").fancybox({
		padding: 0
	});

	//Плавный скролл до блока on index page
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
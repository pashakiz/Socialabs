$(document).ready(function() {

	//Placeholder
	//Doc: https://github.com/NV/placeholder.js/
	$("[placeholder]").textPlaceholder();

	//Попап менеджер FancyBox
	//Документация: http://fancyapps.com/fancybox/
	//<a class="fancybox" rel="group" href="big_image_1.jpg"><img src="small_image_1.jpg" alt="" /></a>
	//<a class="fancybox" rel="group" href="big_image_2.jpg"><img src="small_image_2.jpg" alt="" /></a>
	$(".fancybox").fancybox();

	//Плавный скролл до блока .div по клику на .scroll
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
	$("form").submit(function() {

		var name = $(this).find("input[name='name']").val(),
			email = $(this).find("input[name='email']").val();

		if (!name || !email) {
			alert("Заполните поля формы.");
			return false;
		}

		var email_regexp = /.+@.+\..+/i;
		var email_test = email_regexp.test(email);
		if (!email_test) {
			alert("Введен некоректный Email-адрес.");
			return false;
		}

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("form").serialize(),
			success: function(response) {
				//$('#order_status').html(response);
				$('#order_status').html('Спасибо, Ваша заявка отправлена!');
				console.log("jquery-ajax-mail-success");
				console.log('response: ' + response);
			},
			error:  function(xhr, str){
				alert('Возникла ошибка: ' + xhr.responseCode);
				console.log('response: ' + xhr);
			}
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});
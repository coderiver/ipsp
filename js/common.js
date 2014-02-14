$(document).ready(function() {
function select() {
	$(".js-select").each(function(){
		var select_list = $(this).parent().find(".js-select-list");
		var text = select_list.find("li").first().text();
		$(this).find(".js-select-text").text(text);
		$(this).click(function(event){
				if ($(this).hasClass("is-active")) {
					$(this).removeClass("is-active");
					select_list.slideUp("fast");
				}
				else {
					$(".js-select").removeClass("is-active");
					$(".js-select-list").hide();
					select_list.slideDown("fast");
					$(this).addClass("is-active");
				}
				event.stopPropagation();
			});
			select_list.find("li").click(function(event) {
				var id = $(this).attr("data-id");
				var text = $(this).text();
				$(this).parent().parent().find(".js-select-text").text(text);
				$(this).parent().parent().find(".js-select-input").val(id);
				$(this).parent().hide();
				$(this).parents(".js-select").removeClass("is-active");
				event.stopPropagation();
			});
		});
	}
	select();
	$('.js-select').click(function(event){
		event.stopPropagation();
	});

	// function choose() {
	// 	var number = $(".js-choose");
	// 	number.each(function(){
	// 		var max_number = +($(this).attr("data-max-number"));
	// 		var input = $(this).find("input");
	// 		var plus = $(this).find(".js-plus");
	// 		var minus = $(this).find(".js-minus");
	// 		plus.bind("click", function(){
	// 			var val = +(input.val());
	// 			if (val >= max_number) {
	// 					return false
	// 			}
	// 			else {
	// 				val += 1;
	// 				input.val(val);
	// 			}
	// 		});
	// 		minus.bind("click", function(){
	// 			var val = +(input.val());
	// 			if (val > 1) {
	// 					val -= 1;
	// 					input.val(val);
	// 			}
	// 			else {
	// 						return false;
	// 			}
	// 		});
	// 	});
	// }
	// choose(); 

});
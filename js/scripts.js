	(function($){
		$(document).ready(function() {	

			// Scroll to Top
			jQuery('.scrolltotop').click(function(){
				jQuery('html').animate({'scrollTop' : '0px'}, 400);
				return false;
			});
			
			jQuery(window).scroll(function(){
				var upto = jQuery(window).scrollTop();
				if(upto > 500) {
					jQuery('.scrolltotop').fadeIn();
				} else {
					jQuery('.scrolltotop').fadeOut();
				}
			});

			$("#owl-csel1").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 3000,
				startPosition: 0,
				rtl: false,
				loop: true,
				margin: 15,
				dots: true,
				nav: true,	
				navContainer: '.main-content .custom-nav',
				responsive:{
					0: {
						items: 1,						
					},
					767: {
						items: 1,						
					},
					1200: {
						items: 1,						
					}
				}

			});



			// Wrap every letter in a span
			var textWrapper = document.querySelector('.ml3');
			textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

			anime.timeline({loop: true})
			.add({
				targets: '.ml3 .letter',
				opacity: [0,1],
				easing: "easeInOutQuad",
				duration: 250,
				delay: (el, i) => 150 * (i+1)
			}) 
			.add({
				targets: '.ml3',
				opacity: 0,
				duration: 500,
				easing: "easeOutExpo",
				delay: 1000
			});


				// Wrap every letter in a span
				var textWrapper = document.querySelector('.ml4');
				textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
		
				anime.timeline({loop: true})
				.add({
					targets: '.ml4 .letter',
					opacity: [0,1],
					easing: "easeInOutQuad",
					duration: 250,
					delay: (el, i) => 150 * (i+1)
				}) 
				.add({
					targets: '.ml4',
					opacity: 0,
					duration: 500,
					easing: "easeOutExpo",
					delay: 1000
				});

				// Wrap every letter in a span
				var textWrapper = document.querySelector('.ml5');
				textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
		
				anime.timeline({loop: true})
				.add({
					targets: '.ml5 .letter',
					opacity: [0,1],
					easing: "easeInOutQuad",
					duration: 250,
					delay: (el, i) => 150 * (i+1)
				}) 
				.add({
					targets: '.ml5',
					opacity: 0,
					duration: 500,
					easing: "easeOutExpo",
					delay: 1000
				});


				$(function() {  
					$('.btn-6')
					.on('mouseenter', function(e) {
							var parentOffset = $(this).offset(),
								relX = e.pageX - parentOffset.left,
								relY = e.pageY - parentOffset.top;
							$(this).find('span').css({top:relY, left:relX})
					})
					.on('mouseout', function(e) {
							var parentOffset = $(this).offset(),
								relX = e.pageX - parentOffset.left,
								relY = e.pageY - parentOffset.top;
						$(this).find('span').css({top:relY, left:relX})
					});
				});
			

				$(function() {  
					$('.btn-7')
					.on('mouseenter', function(e) {
							var parentOffset = $(this).offset(),
								relX = e.pageX - parentOffset.left,
								relY = e.pageY - parentOffset.top;
							$(this).find('span').css({top:relY, left:relX})
					})
					.on('mouseout', function(e) {
							var parentOffset = $(this).offset(),
								relX = e.pageX - parentOffset.left,
								relY = e.pageY - parentOffset.top;
						$(this).find('span').css({top:relY, left:relX})
					});
				});
			

			
		});
	})(jQuery);


		
	$(function() {  
		$('.btn-6')
		.on('mouseenter', function(e) {
				var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('span').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
				var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		});
	});




	//form

	function showError(conteinerParentNode, errorMessage) {
		conteinerParentNode.className = 'error';
		var spanElem = document.createElement('span');
		spanElem.className = "error-message";
		spanElem.innerHTML = errorMessage;
		conteinerParentNode.appendChild(spanElem);
	}

	function resetError(conteinerParentNode) {
		conteinerParentNode.className = '';
		if (conteinerParentNode.lastChild.className == "error-message") {
			conteinerParentNode.removeChild(conteinerParentNode.lastChild);
		}
	}

	function validate(form) {
		var elems = form.elements;
		var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

			resetError(elems.firstname.parentNode);
			if (!elems.firstname.value) {
				showError(elems.firstname.parentNode, ' Please enter your first name.');
				return false;
			}
			else if (elems.firstname.value.length < 3 ) {
				showError(elems.firstname.parentNode, ' At least 3 characters.');
				return false;
			}

			resetError(elems.lastname.parentNode);
			if (!elems.lastname.value) {
				showError(elems.lastname.parentNode, ' Please enter your last name.');
				return false;
			}
			else if (elems.lastname.value.length < 3 ) {
				showError(elems.lastname.parentNode, ' At least 3 characters.');
				return false;
			}

			resetError(elems.email.parentNode);
			if(!elems.email.value) {
				showError(elems.email.parentNode, ' Please enter your Email.');
				return false;
			}
			else if (!regEmail.test(elems.email.value) == true){
				showError(elems.email.parentNode, ' Please enter a valid Email.');
				return false;
			}

			resetError(elems.phone.parentNode);
			if (!elems.phone.value) {
				showError(elems.phone.parentNode, ' Please enter your phone number');
				return false;
			}
			else if (elems.phone.value.length < 11 ) {
				showError(elems.phone.parentNode, ' At least 11 characters.');
				return false;
			}

			resetError(elems.Address.parentNode);
			if (!elems.Address.value) {
				showError(elems.Address.parentNode, ' Please enter your Address');
				return false;
			}
			else if (elems.Address.value.length < 20 ) {
				showError(elems.Address.parentNode, ' At least 20 characters.');
				return false;
			}

			resetError(elems.citys.parentNode);
			if (!elems.citys.value) {
				showError(elems.Addcitysress.parentNode, ' Please enter your City');
				return false;
			}
			else if (elems.citys.value.length < 3 ) {
				showError(elems.citys.parentNode, ' At least 3 characters.');
				return false;
			}

			resetError(elems.zpicode.parentNode);
			if (!elems.zpicode.value) {
				showError(elems.zpicode.parentNode, ' Please enter your zpicode');
				return false;
			}
			else if (elems.zpicode.value.length < 4 ) {
				showError(elems.zpicode.parentNode, ' At least 4 characters.');
				return false;
			}

			resetError(elems.onlinecard.parentNode);
			if (!elems.onlinecard.value) {
				showError(elems.onlinecard.parentNode, ' Please enter your card number');
				return false;
			}
			else if (elems.onlinecard.value.length < 16 ) {
				showError(elems.onlinecard.parentNode, ' At least 16 characters.');
				return false;
			}

			alert('YOU ARE ALL SET & THANK YOU FOR JOINING US!');


	}






















// function validatePhoneNumber(input_str) {
//     var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//     return re.test(input_str);
// }

// function validateForm(event) {
//     var phone = document.getElementById('myform_phone').value;
//     if (!validatePhoneNumber(phone)) {
//         document.getElementById('phone_error').classList.remove('hidden');
//     } else {
//         document.getElementById('phone_error').classList.add('hidden');
       
//     }
//     event.preventDefault();
// }
	$(function() {
			   
				/* @reload captcha
				------------------------------------------- */			   
				function reloadCaptcha(){
					$("#captcha").attr("src","php/captcha.php?r=" + Math.random());
				}
				
				$('.captcode').click(function(e){
					e.preventDefault();
					reloadCaptcha();
				});				
			   
				$( "#smart-form" ).validate({
				
						/* @validation states + elements 
						------------------------------------------- */
						errorClass: "error",
						validClass: "state-success",
						errorElement: "em",
						onkeyup: false,
						onclick: false,
						
						/* @validation rules 
						------------------------------------------ */
						rules: {
								sendername: {
										required: true,
										minlength: 3
								},		
								senderemail: {
										required: false,
										email: false
								},
								sendersubject: {
										required: true,
										minlength: 1
								},								
								sendermessage: {
										required: false,
										minlength: 10
								},
								securitycode:{
										required:true
								}
						},
						
					
						messages:{
								sendername: {
										required: 'Dont forget your name',
										minlength: 'Fill it up'
								},				
								senderemail: {
										required: 'Oh... email address needed',
										email: 'dont forget your email address'
								},
								sendersubject: {
										required: 'RSVP to Mugdha & Rishi Wedding'
										minlength: 'Subject must be at least 4 characters'
								},														
								sendermessage: {
										required: 'Oops you forgot your message',
										minlength: 'Message must be at least 10 characters'
								},															
								securitycode:{
										required: 'Beep beetp. Security code'
								}
						},

						
						/* @ajax form submition 
						---------------------------------------------------- */						
						submitHandler:function(form) {
							$(form).ajaxSubmit({
								    target:'.result',			   
									beforeSubmit:function(){ 
											$('.form-footer').addClass('progress');
									},
									error:function(){
											$('.form-footer').removeClass('progress');
									},
									 success:function(){
											$('.form-footer').removeClass('progress');
											$('.alert-success').show().delay(10000).fadeOut();
											$('.field').removeClass("error, state-success");
											if( $('.alert-error').length == 0){
												$('#smart-form').resetForm();
												reloadCaptcha();
											}
									 }
							  });
						}
						// end submitHandler:
				});		
		
	});				
    
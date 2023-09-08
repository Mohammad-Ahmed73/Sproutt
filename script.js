function addchat (type, message, gender) {
	if (type == 'Q') {
		var html = `<div class="chat-item">
						<div class="image">
							<img src="images/bot-image.png">
						</div>
						<div class="message-box">
							<div class="message question-msg first-question-msg">
								<div id="wave">
								    <span class="dot"></span>
								    <span class="dot"></span>
								    <span class="dot"></span>
								</div>
								<span>`+message+`</span>
							</div>
						</div>
					</div>`;
		$(".chat-box-main-inner").append(html);
	} else if (type == 'A') {
		var gender_html = '';
		var gender_class = '';
		if(gender == 'Male'){
			gender_html = `<div class="gender-image">
								<img src="images/male-img.png">
							</div>`;
			gender_class = 'gender-message';
		} else if (gender == 'Female') {
			gender_html = `<div class="gender-image">
									<img src="images/female-img1.png">
								</div>`;
			gender_class = 'gender-message';
		}
		var html = `<div class="chat-item text-right `+gender_class+`">
						<div class="message-box">
							<div class="message answer-msg">
								`+gender_html+`
								`+message+`
							</div>
						</div>
						<div class="image">
							<img src="images/me-image.png">
						</div>
					</div>`;
		$(".chat-box-main-inner").append(html);
	}
}




$(".name-main-wrap .custom-btn").on("click", function() {
	var name = $(".name-main-wrap .name-field input").val();
	var self = $(this);
	addchat('A', name);
	setTimeout(function() {
        self.parents(".name-main-wrap").addClass("display-none");
        $(".chat-items-container .chat-box-main").css("padding-bottom", "180px");
        self.parents(".name-main-wrap").next().removeClass("display-none");
        $("html, body, .chat-items-container").scrollTop( 10000 );
        addchat('Q',"What's your gender?",'');
        $(".chat-box-main .chat-item").find('.question-msg').eq(2).addClass("loader");
    }, 500);

    setTimeout(function() {
    	$(".chat-box-main .chat-item .message").removeClass("loader");
    }, 3000);
});

$(".gender-wrap .gender-option input").change(function() { 

	var gender_select = $(".gender-wrap .gender-option input:checked").val();
	var self = $(this);
	addchat('A', 'I m ' +gender_select, gender_select);

	setTimeout(function() { 
        self.parents(".gender-wrap").addClass("display-none");
        $(".chat-items-container .chat-box-main").css("padding-bottom", "120px");
		
        self.parents(".gender-wrap").next().removeClass("display-none");
        $("html, body, .chat-items-container").scrollTop( 10000 );
        addchat('Q','When were you born?','');
        $(".chat-box-main .chat-item").find('.question-msg').eq(3).addClass("loader");
    }, 500);

    setTimeout(function() {
    	$(".chat-box-main .chat-item .message").removeClass("loader");
    }, 3000);

});

$(".born-field-wrap .submit").on("click", function() {

	var birthday = $(".born-field-wrap input").val();
	var self = $(this);
	addchat('A', birthday, '');

	setTimeout(function() { 
        self.parents(".born-field-wrap").addClass("display-none");
        $(".chat-items-container .chat-box-main").css("padding-bottom", "325px");
        self.parents(".born-field-wrap").next().removeClass("display-none");
        $("html, body, .chat-items-container").scrollTop( 10000 );
        addchat('Q',"The last time you used tobacco, nicotine or vaping product was:",'');
        $(".chat-box-main .chat-item").find('.question-msg').eq(4).addClass("loader");
    }, 500);

    setTimeout(function() {
    	$(".chat-box-main .chat-item .message").removeClass("loader");
    }, 3000);
});

$(".option-wrapper-list .option-wrapper-item input").change(function() { 

	var select = $(".option-wrapper-list .option-wrapper-item input:checked").val();
	var self = $(this);
	addchat('A', select , '');

	setTimeout(function() {
        self.parents(".option-wrapper-list").addClass("display-none");
        $(".chat-items-container .chat-box-main").css("padding-bottom", "158px");
        self.parents(".option-wrapper-list").next().removeClass("display-none");
        $("html, body, .chat-items-container").scrollTop( 10000 );
        addchat('Q',"Let's talk health. How would you describe yourself?",'');
        $(".chat-box-main .chat-item").find('.question-msg').eq(5).addClass("loader");
    }, 500);

    setTimeout(function() {
    	$(".chat-box-main .chat-item .message").removeClass("loader");
    }, 3000);

});

$(".multiple-options-list .multiple-options-item input").change(function() { 

	var select = $(".multiple-options-list .multiple-options-item input:checked").val();
	var self = $(this);
	addchat('A', select , '');

	setTimeout(function() { 
        self.parents(".multiple-options-list").addClass("display-none");
        $(".chat-items-container .chat-box-main").css("padding-bottom", "148px");
        self.parents(".multiple-options-list").next().removeClass("display-none");
        $("html, body, .chat-items-container").scrollTop( 10000 );
        addchat('Q','In the last 5 years have you applied for or received disability benefits (not including short-term disability for childbirth)?','');
        $(".chat-box-main .chat-item").find('.question-msg').eq(6).addClass("loader");
    }, 500);

    setTimeout(function() {
    	$(".chat-box-main .chat-item .message").removeClass("loader");
    }, 3000);

});

$(".yes-no-option-wrap .yes-no-option input").change(function() { 

	var select = $(".yes-no-option-wrap .yes-no-option input:checked").val();
	var self = $(this);
	addchat('A', select , '');

	setTimeout(function() { 
        self.parents(".yes-no-option-wrap").addClass("display-none");
        $(".chat-items-container .chat-box-main").css("padding-bottom", "130px");
		$("html, body, .chat-items-container").scrollTop( 10000 );
        self.parents(".yes-no-option-wrap").next().removeClass("display-none");
        addchat('Q',"What's your height?",'');
        $(".chat-box-main .chat-item").find('.question-msg').eq(7).addClass("loader");
    }, 500);

    setTimeout(function() {
    	$(".chat-box-main .chat-item .message").removeClass("loader");
    }, 3000);

});

$(".range-field-main-wrap .custom-btn").on('click', function() { 

	var select = $("#rs-bullet").text();
	var self = $(this);
	addchat('A', select + ' Ibs', '');

	setTimeout(function() { 
		$(".chat-items-container .chat-box-main").css("padding-bottom", "176px");
		$("html, body, .chat-items-container").scrollTop( 10000 );
        self.parents(".yes-no-option-wrap").addClass("display-none");
        self.parents(".yes-no-option-wrap").next().removeClass("display-none");
        addchat('Q',"What's your height?",'');
        $(".chat-box-main .chat-item").find('.question-msg').eq(7).addClass("loader");
    }, 500);

    setTimeout(function() {
    	$(".chat-box-main .chat-item .message").removeClass("loader");
    }, 3000);

});
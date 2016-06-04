function ask_questions() {
	random_question = get_random_question();
	set_question_content(random_question);
	current_question = random_question;
}

function get_random_int(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function get_random_question() {
	min = 0;
	max = active_questions.length;
	random_index = get_random_int(min, max);
	console.log(active_questions);
	console.log(random_index);
	return active_questions[random_index];
}

function set_question_content(question) {
	console.log(question);
	$('.main-content-container .question-question').html('<span class="question-content-label">Translate:</span> ' + question.question);
	$('.main-content-container .question-info').html('<span class="question-content-label">Info:</span> ' + question.info);
	$('.main-content-container .question-answer').html('<span class="question-content-label">Answer:</span> ' + question.answer);
}

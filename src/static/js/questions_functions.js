function set_available_questions(question_set) {
	// remove all old options
	$('.available-questions-container select').empty();

	_.each(question_set.questions, (question, index) => {
		// add all new options
		$('.available-questions-container select').append(
			'<option value="' + index + '">' + shorten_text(question.question) + '</option>'
		);
	});
}

function shorten_text(text) {
	if (text.length > 20) {
		return text.substring(0, 20) + '...';
	}
	return text;
}

function set_available_questions(questions) {
	// remove all old options
	$('.available-questions-container select').empty();

	_.each(questions, (question, index) => {
		// add all new options
		$('.available-questions-container select').append(
			'<option value="' + question.identifier + '" title="' + question.question + '">' + shorten_text(question.question) + '</option>'
		);
	});
}

function set_active_questions(questions) {
	// remove all old options
	$('.active-questions-container select').empty();

	_.each(questions, (question, index) => {
		// add all new options
		$('.active-questions-container select').append(
			'<option value="' + question.identifier + '" title="' + question.question + '">' + shorten_text(question.question) + '</option>'
		);
	});
}

function set_deactived_questions(questions) {
	// remove all old options
	$('.deactived-questions-container select').empty();

	_.each(questions, (question, index) => {
		// add all new options
		$('.deactived-questions-container select').append(
			'<option value="' + question.identifier + '" title="' + question.question + '">' + shorten_text(question.question) + '</option>'
		);
	});
}

function shorten_text(text) {
	var max_length = 16
	if (text.length > max_length) {
		return text.substring(0, max_length) + '...';
	}
	return text;
}

function newline_text(text) {
	var max_length = 16
	if (text.length > max_length) {
		lines = [];
		while(text.length > 0) {
			lines.push(text.substring(0, max_length))
			text = text.substring(max_length);  // to the end of the string
		}
		return lines.join('\n');
	}
	return text;
}

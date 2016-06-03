function update_view() {
	// remove all old options
	$('.active-questions-container select').empty();
	$('.deactivated-questions-container select').empty();

	// sort new values so that the order remains
	// active_questions = _.sortBy(active_questions, function(question) {
	// 	return question.identifier;
	// });
	// deactivated_questions = _.sortBy(deactivated_questions, function(question) {
	// 	return question.identifier;
	// });
	active_questions = sort_questions(active_questions);
	deactivated_questions = sort_questions(deactivated_questions);

	// add html elements for new state of questions
	_.each(active_questions, (question, index) => {
		// add all new options
		$('.active-questions-container select').append(
			'<option value="' + question.identifier + '" title="' + question.question + '">' + shorten_text(question.question) + '</option>'
		);
	});
	_.each(deactivated_questions, (question, index) => {
		// add all new options
		$('.deactivated-questions-container select').append(
			'<option value="' + question.identifier + '" title="' + question.question + '">' + shorten_text(question.question) + '</option>'
		);
	});
}

function sort_questions(questions) {
	return _.sortBy(questions, function(question) {
		return question.identifier;
	});
}

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

function get_selected_questions(element) {
	var selectec_question_indices = element.val();
	var selected_questions = _.map(selectec_question_indices, function(index) {
		return available_questions[index];
	});
	return selected_questions;
}

function get_active_questions() {
	var options = $('.active-questions-container select option');
	var active_questions = _.map(options, function(option) {
		return available_questions[option.value];
	});
	return active_questions;
}

function remove_questions_from_container(element, questions) {
	var options = element.children('option');
	console.log('options to be removed');
	console.log(options);

	_.each(questions, function(question, index) {
		_.each(options, function(option, index) {
			if (option.value == question.identifier) {
				option.remove();
			}
		});
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

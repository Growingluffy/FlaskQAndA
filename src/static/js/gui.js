$(document).ready(function() {
	// selects
	available_questions_select = $('.available-questions-container select');
	enabled_questions_select = $('.enabled-questions-container select');
	active_questions_select = $('.active-questions-container select');
	deactivated_questions_select = $('.deactivated-questions-container select');

	// buttons
	activate_selected_button = $('.activate-selected-available-questions-button');
	activate_all_button = $('.activate-all-available-questions-button');
	deactivate_selected_button = $('.deactivate-selected-available-questions-button');
	deactivate_all_button = $('.deactivate-all-available-questions-button');

	enable_selected_button = $('.enable-selected-available-questions-button');
	enable_all_button = $('.enable-all-available-questions-button');
	disable_selected_button = $('.disable-selected-available-questions-button');
	disable_all_button = $('.disable-all-available-questions-button');

	start_button = $('.start-training-button');

	question_show_info_button = $('.question-show-info-button');
	question_show_answer_button = $('.question-show-answer-button');
	question_correct_button = $('.question-correct-button');
	question_wrong_button = $('.question-wrong-button');
	question_deactivate_button = $('.question-deactivate-button');
	question_disable_button = $('.question-disable-button');
});

function update_view() {
	console.log('updating the view');
	// remove all old options
	$('.enabled-questions-container select').empty();
	$('.active-questions-container select').empty();
	$('.deactivated-questions-container select').empty();

	enabled_questions = sort_questions(enabled_questions);
	active_questions = sort_questions(active_questions);
	deactivated_questions = sort_questions(deactivated_questions);

	// add html elements for new state of questions
	_.each(enabled_questions, (question, index) => {
		// add all new options
		enabled_questions_select.append(
			'<option value="' + question.identifier + '" title="' + question.question + '">' +
			shorten_text(question.question, 48) +
			'</option>'
		);
	});
	_.each(active_questions, (question, index) => {
		// add all new options
		active_questions_select.append(
			'<option value="' + question.identifier + '" title="' + question.question + '">' +
			shorten_text(question.question, 16) +
			'</option>'
		);
	});
	_.each(deactivated_questions, (question, index) => {
		// add all new options
		deactivated_questions_select.append(
			'<option value="' + question.identifier + '" title="' + question.question + '">' +
			shorten_text(question.question, 16) +
			'</option>'
		);
	});

	if (active_questions.length > 0) {
		start_button.prop('disabled', false);
		start_button.attr('disabled', false);
	} else {
		start_button.prop('disabled', true);
		start_button.attr('disabled', true);
	}

	if (current_question !== null) {
		console.log('the current_question is not null');
		question_show_info_button.removeClass('invisible');
		question_show_answer_button.removeClass('invisible');
		question_correct_button.removeClass('invisible');
		question_wrong_button.removeClass('invisible');
		question_deactivate_button.removeClass('invisible');
		question_disable_button.removeClass('invisible');
	} else {
		question_show_info_button.addClass('invisible');
		question_show_answer_button.addClass('invisible');
		question_correct_button.addClass('invisible');
		question_wrong_button.addClass('invisible');
		question_deactivate_button.addClass('invisible');
		question_disable_button.addClass('invisible');
	}
}

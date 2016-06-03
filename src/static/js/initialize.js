$(document).ready(function() {
	// data
	question_set_identifier = 'HSK1';

	available_questions = [];
	active_questions = [];
	deactivated_questions = [];

	// selects
	available_questions_select = $('.available-questions-container select');
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

	// get data
	get_question_list(question_set_identifier).done(
		(question_set) => {
			available_questions = question_set.questions;

			// add identifiers to the questions
			_.each(available_questions, function(question, index) {
				question.identifier = index;
			});

			question_set_identifier = question_set.identifier;
			set_available_questions(available_questions);

			set_main_content($('<p>You are working on ' + question_set_identifier + '.</p>'));
		}
	).fail(
		(result) => {
			console.log('AJAX request failed.');
		}
	);
});

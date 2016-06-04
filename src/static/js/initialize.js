$(document).ready(function() {
	// data
	question_set_identifier = 'HSK1';

	available_questions = [];
	enabled_questions = [];
	active_questions = [];
	deactivated_questions = [];

	current_question = null;

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
			update_view();
		}
	).fail(
		(result) => {
			console.log('AJAX request failed.');
		}
	);
});

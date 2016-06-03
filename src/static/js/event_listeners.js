$(document).ready(function() {
	var questions = [];
	var question_set_identifier = 'HSK1';

	get_question_list(question_set_identifier).done(
		(question_set) => {
			questions = question_set.questions;

			// add identifiers to the questions
			_.each(questions, function(question, index) {
				question.identifier = index;
			});

			question_set_identifier = question_set.identifier;
			set_available_questions(questions);
			set_deactived_questions(questions);
			set_main_content($('<p>You are working on ' + question_set_identifier + '.</p>'));
		}
	).fail(
		(result) => {
			console.log('AJAX request failed.');
		}
	);

	$('.activate-selected-available-questions-button').on('click', function(event) {
		var active_questions = get_active_questions();
		var select = $('.available-questions-container select')
		var selected_questions = get_selected_questions(select);

		updated_active_questions = _.union(selected_questions, active_questions);
		updated_active_questions_sorted = _.sortBy(updated_active_questions, function(question) {
			return question.identifier;
		});

		set_active_questions(updated_active_questions_sorted);
	});

	$('.activate-all-available-questions-button').on('click', function(event) {
		set_active_questions(questions);
	});

	function get_selected_questions(element) {
		var selectec_question_indices = element.val();
		var selected_questions = _.map(selectec_question_indices, function(index) {
			return questions[index];
		});
		return selected_questions;
	}

	function get_active_questions() {
		var options = $('.active-questions-container select option');
		var active_questions = _.map(options, function(option) {
			return questions[option.value];
		});
		return active_questions;
	}
});

// TODO
// * remove questions from deactivated questions if they're activated
// * deactivate questions buttons

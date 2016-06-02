$(document).ready(function() {

	console.log('doc ready');

	var question_set = [];
	var question_set_identifier = 'HSK1';

	get_question_list(question_set_identifier).done(
		(question_set) => {
			question_set = question_set;
			set_available_questions(question_set);
		}
	).fail(
		(result) => {

		}
	);

	$('.activate-selected-available-questions-button').on('click', function(event) {
		var clicked_button = this;
		var selectec_questions = $('.available-questions-container select').val();

		_.each(selectec_questions, (question) => {
			console.log(question.question);
		});

		var target = $(event.target);
		event.preventDefault();
		event.stopPropagation();
	});

});

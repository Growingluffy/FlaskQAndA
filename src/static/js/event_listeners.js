$(document).ready(function() {
	// event listeners
	enable_selected_button.on('click', function(event) {
		console.log('enable selected');

		var selected_questions = get_selected_questions(available_questions_select);

		enabled_questions = _.union(selected_questions, enabled_questions);
		active_questions = _.union(selected_questions, active_questions);

		deactivated_questions = _.difference(deactivated_questions, active_questions);
		update_view();
	});

	enable_all_button.on('click', function(event) {
		console.log('enable all');

		enabled_questions = available_questions;
		active_questions = available_questions;
		deactivated_questions = [];
		update_view();
	});

	disable_selected_button.on('click', function(event) {
		console.log('disable selected');

		var selected_questions = get_selected_questions(enabled_questions_select);
		enabled_questions = _.difference(enabled_questions, selected_questions);
		active_questions = _.difference(active_questions, selected_questions);
		deactivated_questions = _.difference(deactivated_questions, selected_questions);
		update_view();
	});

	disable_all_button.on('click', function(event) {
		console.log('disable all');
		enabled_questions = [];
		active_questions = [];
		deactivated_questions = [];
		update_view();
	});

	activate_selected_button.on('click', function(event) {
		console.log('activate selected');

		var selected_questions = get_selected_questions(deactivated_questions_select);

		active_questions = _.union(active_questions, selected_questions);
		deactivated_questions = _.difference(deactivated_questions, selected_questions);
		update_view();
	});

	activate_all_button.on('click', function(event) {
		console.log('activate all');

		active_questions = _.union(active_questions, deactivated_questions);
		deactivated_questions = [];
		update_view();
	});

	deactivate_selected_button.on('click', function(event) {
		console.log('deactivate selected');

		var selected_questions = get_selected_questions(active_questions_select);

		active_questions = _.difference(active_questions, selected_questions);
		deactivated_questions = _.union(deactivated_questions, selected_questions);
		update_view();
	});

	deactivate_all_button.on('click', function(event) {
		console.log('deactivate all');

		deactivated_questions = _.union(active_questions, deactivated_questions);
		active_questions = [];
		update_view();
	});

	start_button.on('click', function(event) {
		console.log('start training');
		ask_questions();
		update_view();
	});

	question_show_info_button.on('click', function(event) {
		console.log('question show info');
		$('.question-info').removeClass('invisible');
	});

	question_show_answer_button.on('click', function(event) {
		console.log('question show answer');
		$('.question-answer').removeClass('invisible');
	});
});

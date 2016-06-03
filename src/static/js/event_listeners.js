$(document).ready(function() {
	// event listeners
	enable_selected_button.on('click', function(event) {
		console.log('enable selected');

		var selected_questions = get_selected_questions(available_questions_select);

		active_questions = _.union(selected_questions, active_questions);
		active_questions = _.sortBy(active_questions, function(question) {
			return question.identifier;
		});
		deactivated_questions = _.difference(deactivated_questions, active_questions);
		update_view();
	});

	enable_all_button.on('click', function(event) {
		console.log('enable all');

		active_questions = available_questions;
		deactivated_questions = [];
		update_view();
	});

	disable_selected_button.on('click', function(event) {
		console.log('disable selected');

		var selected_questions = get_selected_questions(available_questions_select);
		active_questions = _.difference(active_questions, selected_questions);
		deactivated_questions = _.difference(deactivated_questions, selected_questions);
		update_view();
	});

	disable_all_button.on('click', function(event) {
		console.log('disable all');
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
		start_button.prop('disabled', true);
		start_button.attr('disabled', true);
	});
});

function get_question_list(question_set_identifier) {
	return $.ajax({
		type: "GET",
		url: "/questions/" + question_set_identifier,
		dataType: "json"
	});
}

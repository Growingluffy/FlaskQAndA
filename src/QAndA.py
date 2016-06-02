from flask import Flask
app = Flask(__name__)


from flask import render_template


from Question import Question

@app.route("/")
def hello():
	list_of_questions = []
	for i in range(10):
		list_of_questions.append(Question('q1', 'i1', 'a1'))

	return render_template('index.j2', title='Q & A', questions=list_of_questions)

if __name__ == "__main__":
	app.run(debug=True, host='127.0.0.1', port=5000)

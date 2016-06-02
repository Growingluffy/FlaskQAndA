class Question(object):
	def __init__(self, question, info, answer):
		super(Question, self).__init__()
		self.question = question
		self.info = info
		self.answer = answer

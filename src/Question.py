class Question(object):
	def __init__(self, question, info, answer, identifier):
		super(Question, self).__init__()
		self.identifier = identifier
		self.question = question
		self.info = info
		self.answer = answer

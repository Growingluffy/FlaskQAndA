import os

from JSONLoader import JSONLoader

from helper.file_system_helper import static_file_path
from helper.file_system_helper import get_all_files_in_folder

current_file_directory = os.path.dirname(__file__)


class QuestionsLoader:
	def __init__(self):
		super(QuestionsLoader, self).__init__()
		self.question_sets = {}
		self.json_loader = JSONLoader()

	def get_question_set(self, identifier):
		try:
			question_set = self.question_sets[identifier]
		except KeyError as error:
			question_set = self.load_question_set(identifier)
			self.question_sets[identifier] = question_set
		return question_set

	def load_question_set(self, identifier):
		question_set = None

		all_question_set_files = get_all_files_in_folder(
			static_file_path(current_file_directory, 'res/data/questions/')
		)

		for questions_file in all_question_set_files:
			complete_relative_path = static_file_path(current_file_directory, 'res/data/questions/') + questions_file
			print('questions_file:', complete_relative_path)
			json_content = self.json_loader.load_json(complete_relative_path)

			if json_content['identifier'] == identifier:
				print('QUESTION SET FOUND:', identifier)
				question_set = json_content
				break

		return question_set

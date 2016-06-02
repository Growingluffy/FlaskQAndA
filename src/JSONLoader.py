import json

class JSONLoader:
	def __init__(self):
		super(JSONLoader, self).__init__()

	def load_json(self, path_to_file):
		json_content = {}
		with open(path_to_file, 'r') as input_file:
			json_content = json.load(input_file)
		return json_content

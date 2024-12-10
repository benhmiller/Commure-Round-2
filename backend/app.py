from flask import Flask
from flask_cors import CORS

# Initializing flask app
app = Flask(__name__)

CORS(app)  # This will allow all cross-origin requests

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/data')
def get_data():
    return { 'name': 'ben' }

# Running app
if __name__ == '__main__':
    app.run(debug=True)
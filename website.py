from flask import Flask, render_template, jsonify, request
import json

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    with open('database/db.json', 'r') as file:
        data = json.load(file)
    if request.method == 'POST':
        data1 = request.json
        data.append(dict(data1))
        with open('database/db.json', 'w') as file2:
            json.dump(
                data,
                file2,
                indent=4
            )
    return render_template('index.html', data=data)
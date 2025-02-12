from flask import Flask, request, jsonify
from flask_cors import CORS
import csv

app = Flask(__name__)
CORS(app)


@app.route('/api/get_items', methods=['GET'])
def get_items():
    try:
        with open('data/amazon_products.csv', mode='r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            data = [row for i, row in enumerate(reader) if i < 100]
            return jsonify({"items": data}), 200
    except FileNotFoundError:
        print('File not found')
    except Exception as e:
        print(e)


@app.route('/api/recommendation', methods=['GET'])
def get_recommendations():
    id = request.get_json()['id']
    return jsonify({"recommendations": [id]}), 200

if __name__ == '__main__':
    app.run(debug=True)

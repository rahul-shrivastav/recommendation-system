from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load('model/knn_model.pkl')
data = joblib.load('model/original_data.pkl')

@app.route('/api/get_items', methods=['GET'])
def get_items():
    try:
        with open('data/amazon_products.csv', mode='r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            data = [row for i, row in enumerate(reader) if i < 10]
            return jsonify({"items": data}), 200
    except FileNotFoundError:
        print('File not found')
    except Exception as e:
        print(e)


@app.route('/api/recommendations', methods=['POST'])
def get_recommendations():
    try:
        item = request.json

        print([i for i in item.keys()])
        sample = [item['stars'], item['reviews'], item['price'],
                  item['isBestSeller'], item['boughtInLastMonth']]

        print(sample)

        return jsonify({"items": []}), 200
    except Exception as e:
        print('Error:\n', e)


if __name__ == '__main__':
    app.run(debug=True)

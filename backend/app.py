from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load('../models/knn_model.pkl')
data = joblib.load('../models/original_data.pkl')

@app.route('/api/recommendations', methods=['POST'])
def get_recommendations():
    try:
        item = request.json

        sample = [float(item['stars']), int(item['reviews']), float(item['price']),
                  item['isBestSeller'] == 'True']

        encoded_category = [0.0] * 270
        encoded_category[int(item['category_id'])-1] = 10.0
        sample.extend(encoded_category)

        recommendations = model.kneighbors(
            [sample], n_neighbors=11, return_distance=False)
        response = []
        print(data.iloc[0, :10])
        for i in recommendations[0][1:]:
            if data.iloc[i, :]['asin'] == item['asin']:
                continue
            obj = {}
            obj['imgUrl'] = (data.iloc[i, :]['imgUrl'])
            obj['stars'] = float(data.iloc[i, :]['stars'])
            obj['reviews'] = int(data.iloc[i, :]['reviews'])
            obj['title'] = data.iloc[i, :]['title']
            obj['asin'] = data.iloc[i, :]['asin']
            obj['price'] = float(data.iloc[i, :]['price'])
            obj['isBestSeller'] = (data.iloc[i, :]['isBestSeller'] == 'True')

            for ind, i in enumerate(list(data.iloc[i, 7:])):
                if i:
                    obj['category_id'] = float(ind+1)
                    break

            response.append(obj)

        return jsonify({"items": response}), 200

    except Exception as e:
        print('Error:\n', e)


if __name__ == '__main__':
    app.run(debug=True)

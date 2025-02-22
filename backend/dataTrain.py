from sklearn.neighbors import NearestNeighbors
from sklearn.model_selection import train_test_split

import pandas as pd
import joblib

# m = joblib.load('model/knn_model.pkl')
# print(m.kneighbors([[0]*253], 15, return_distance=False))


data = pd.read_csv('training.csv')
data.dropna(inplace=True)
data.drop_duplicates(inplace=True)
data = data[data['category_id_134'] != 1.0]

# train_df, test_df = train_test_split(data, test_size=0, random_state=42)

X = data.drop(['asin', 'imgUrl', 'title'], axis=1)
X.iloc[:, 4:] *= 10  # Multiply all categorical columns

knn = NearestNeighbors(n_neighbors=15, metric='cosine', n_jobs=-1)
knn.fit(X)

joblib.dump(knn, '../models/knn_model.pkl', compress=3)
joblib.dump(data, '../models/original_data.pkl', compress=7)

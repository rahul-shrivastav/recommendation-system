# from sklearn.neighbors import NearestNeighbors
# from sklearn.model_selection import train_test_split

# import pandas as pd
import joblib

m = joblib.load('model/knn_model.pkl')
print(m.kneighbors([[0]*253], 15, return_distance=False))


# data = pd.read_csv('data/training.csv')

# train_df, test_df = train_test_split(data, test_size=0.34, random_state=42, shuffle=True)


# X = train_df.drop(['asin','title','imgUrl'],axis = 1)
# X.iloc[:, 5:] *= 10  # Multiply all categorical columns


# knn = NearestNeighbors(n_neighbors=15, metric='cosine',n_jobs=-1)
# knn.fit(X)

# joblib.dump(knn, 'model/knn_model.pkl')
# joblib.dump(train_df, 'model/original_data.pkl')

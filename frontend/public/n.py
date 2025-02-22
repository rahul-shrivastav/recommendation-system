from sklearn.model_selection import train_test_split

import pandas as pd

data = pd.read_csv('dataset2.csv')
data.dropna(inplace=True)
data.drop_duplicates(inplace=True)

train_df, test_df = train_test_split(
    data, test_size=0.5, random_state=12, shuffle=True)

# train_df.to_csv('dataset3.csv', index=False)
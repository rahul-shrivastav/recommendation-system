from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Flask server!"

@app.route('/api/greet', methods=['GET'])
def greet():
    name = request.args.get('name', 'Guest')
    return jsonify({"message": f"Hello, {name}!"})

@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.json
    return jsonify({"received": data}), 201

if __name__ == '__main__':
    app.run(debug=True)

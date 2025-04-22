from flask import Flask, render_template, jsonify
import json
import os

app = Flask(__name__)

# Функция для загрузки данных из JSON
def load_data(filename):
    with open(os.path.join('data', filename), 'r', encoding='utf-8') as f:
        return json.load(f)

@app.route('/')
@app.route('/home')
def index():
    return render_template("index.html")

@app.route('/register')
def register():
    return render_template("register.html")

@app.route('/log')
def log():
    return render_template("log.html")

@app.route('/films')
def films():
    return render_template("films.html")

@app.route('/api/films')
def get_films():
            return jsonify(load_data('films.json'))

@app.route('/anime')
def anime():
    return render_template("anime.html")

@app.route('/api/anime')
def get_anime():
    return jsonify(load_data('anime.json'))

@app.route('/serials')
def serials():
    return render_template("serials.html")

@app.route('/api/serials')
def get_serials():
    return jsonify(load_data('serials.json'))

if __name__ == "__main__":
    app.run(debug=True)
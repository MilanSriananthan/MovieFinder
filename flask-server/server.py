from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv, find_dotenv
import os
import pprint
from pymongo import MongoClient


def searchDb(movieName):
    load_dotenv(find_dotenv())

    password = os.environ.get("MONGODB_PWD")

    connection_string = f"mongodb+srv://MilanSriananthan:{password}@moviedb.aikgqqd.mongodb.net/?retryWrites=true&w=majority&appName=MovieDB"

    client = MongoClient(connection_string)

    db = client.PersonalDB
    collection = db.Personal
    result = collection.find_one({"title": movieName})
    if result:     
        return result.get("rating")
    return "NOT FOUND"

def addDB(movieName, rating):
    load_dotenv(find_dotenv())

    password = os.environ.get("MONGODB_PWD")

    connection_string = f"mongodb+srv://MilanSriananthan:{password}@moviedb.aikgqqd.mongodb.net/?retryWrites=true&w=majority&appName=MovieDB"

    client = MongoClient(connection_string)

    db = client.PersonalDB
    collection = db.Personal

    new_entry = {
    "title": movieName,
    "rating": rating,
    # Add more fields as needed
    }
    insert_result = collection.insert_one(new_entry)
    if insert_result.inserted_id:
        print("Entry added successfully. Inserted ID:", insert_result.inserted_id)
    else:
        print("Failed to add entry.")


def searchWeb(movieName):
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
    url = "https://www.google.com/search?q=" + movieName + "+movie"
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "lxml")
    rating = 0
    try:
        result = soup.find('div', {'class':'a19vA'}).text 
        rating = result.split("%")[0]
        addDB(movieName, rating)
        return rating
    except:
        print("error")
    

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route("/members")
def members():
    movieName = request.args.get('movieName')
    result = searchDb(movieName)
    if result == "NOT FOUND":
        result = searchWeb(movieName)
    return {"members": [result]}   

if __name__ == "__main__":
    app.run(debug=True)






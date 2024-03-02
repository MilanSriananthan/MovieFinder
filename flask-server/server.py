from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv, find_dotenv
import os
import pprint
from pymongo import MongoClient
import ratingFunction
import loginFunction


    

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route("/members")
def members():
    movieName = request.args.get('movieName')
    result = ratingFunction.searchDb(movieName)
    if result == "NOT FOUND":
        result = ratingFunction.searchWeb(movieName)
    return {"members": [result]}   


@app.route("/login")
def login():
    username = request.args.get('username')
    password = request.args.get('password')
    result = loginFunction.validLogin(username, password)
    response = {"login": result}   
    return response   


@app.route("/signup")
def signup():
    email = request.args.get('email')
    username = request.args.get('username')
    password = request.args.get('password')
    Netflix = request.args.get('Netflix')
    Prime = request.args.get('Prime')
    Disney = request.args.get('Disney')
    alreadyExists = loginFunction.alreadyExists(email, username)
    if alreadyExists:
        return {"Signup": "Exists"}
    result = loginFunction.validSignup(email, username, password, Netflix, Prime, Disney)
    response = {"Signup": result}   
    return response   

if __name__ == "__main__":
    app.run(debug=True)






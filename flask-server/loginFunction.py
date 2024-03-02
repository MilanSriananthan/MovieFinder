import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv, find_dotenv
import os
from pymongo import MongoClient

def validLogin(username, UserPassword):
    load_dotenv(find_dotenv())

    password = os.environ.get("MONGODB_PWD")

    connection_string = f"mongodb+srv://MilanSriananthan:{password}@moviedb.aikgqqd.mongodb.net/?retryWrites=true&w=majority&appName=MovieDB"

    client = MongoClient(connection_string)

    db = client.PersonalDB
    collection = db.Accounts
    result = collection.find_one({"username": username, "password" : UserPassword})
    if result:     
        return True
    return False

def validSignup(email, username, UserPassword, Netflix, Prime, Disney):
    load_dotenv(find_dotenv())

    password = os.environ.get("MONGODB_PWD")

    connection_string = f"mongodb+srv://MilanSriananthan:{password}@moviedb.aikgqqd.mongodb.net/?retryWrites=true&w=majority&appName=MovieDB"

    client = MongoClient(connection_string)

    db = client.PersonalDB
    collection = db.Accounts

    new_entry = {
    "email": email,
    "username": username,
    "password": UserPassword,
    "Netflix": Netflix,
    "Prime": Prime,
    "Disney": Disney,
    }

    insert_result = collection.insert_one(new_entry)
    if insert_result.inserted_id:
        return True
    return False


def alreadyExists(email, username):
    load_dotenv(find_dotenv())

    password = os.environ.get("MONGODB_PWD")

    connection_string = f"mongodb+srv://MilanSriananthan:{password}@moviedb.aikgqqd.mongodb.net/?retryWrites=true&w=majority&appName=MovieDB"

    client = MongoClient(connection_string)

    db = client.PersonalDB
    collection = db.Accounts
    result = collection.find_one({"$or": [{"username": username}, {"email": email}]})
    if result:     
        return True
    return False
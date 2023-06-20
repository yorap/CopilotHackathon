# create a FastAPI server that will expose a method call "get" that will return the value of the key passed in the query string
# example: http://localhost:5000/get?key=hello
# example response: {"key": "hello", "value": "world"}
import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

class Item(BaseModel):
    key: str
    value: str

# add method to validate swiss phonenumber using a library
# https://pypi.org/project/phonenumbers/
from phonenumbers import carrier
from phonenumbers import parse
def validate_phone_number(number: str):
    try:
        parsed_number = parse(number, "CH")
        return carrier.name_for_number(parsed_number, "en")
    except:
        return None

# add a method to parse a vcard file and return the data as json
# https://pypi.org/project/vobject/
from vobject import vCard
def parse_vcard(file: str):
    with open(file, 'r') as f:
        vcard = vCard(f.read())
        return vcard.contents

# add a method to replace method strtobool from distutils.util
def strtobool(val: str):
    if val.lower() in ("yes", "true", "t", "y", "1"):
        return True
    elif val.lower() in ("no", "false", "f", "n", "0"):
        return False
    else:
        raise ValueError("invalid truth value %r" % (val,))



@app.get("/get")
def get(key: str):
    print(validate_phone_number("0791234567"))
    print(validate_phone_number("0781234567"))
    print(validate_phone_number("0771234567"))
    print(validate_phone_number("0761234567"))
    print(validate_phone_number("0751234567"))
    print(validate_phone_number("0741234567"))


    return {"key": key, "value": "world"}

@app.post("/post")
def post(item: Item):
    return item

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)

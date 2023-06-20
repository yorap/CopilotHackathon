# add test using pytest and fastapi.testclient
# How to set PYTHONPATH wih pytest
# https://stackoverflow.com/questions/10253826/path-issue-with-pytest-importerror-no-module-named-yadayadayada
# https://stackoverflow.com/questions/3402168/permanently-add-a-directory-to-pythonpath

from app import app
from fastapi.testclient import TestClient

client = TestClient(app)


def test_read_main():
    response = client.get("/get?key=hello")
    assert response.status_code == 200
    assert response.json() == {"key": "hello", "value": "world"}

# add test for post
def test_post_main():
    response = client.post("/post", json={"key": "hello", "value": "world"})
    assert response.status_code == 200
    assert response.json() == {"key": "hello", "value": "world"}

# add test for post with invalid json
def test_post_main_invalid_json():
    response = client.post("/post", json={"key": "hello"})
    assert response.status_code == 422
    assert response.json() == {
        "detail": [
            {
                "loc": [
                    "body",
                    "value"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            }
        ]
    }



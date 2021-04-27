#!/bin/bash
export FLASK_APP=./lab_manager.py
source $(pipenv --venv)/bin/activate
flask run -h 0.0.0.0

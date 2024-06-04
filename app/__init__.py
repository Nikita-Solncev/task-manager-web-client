from flask import Flask
from flask_cors import CORS
from .views import configure_routes


def create_app():
    app = Flask(__name__)
    cors = CORS(app, origins="*")
    configure_routes(app)
    
    return app
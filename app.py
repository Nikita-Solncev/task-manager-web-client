from flask import Flask, render_template, request, redirect, url_for
from wtforms import Form, BooleanField, StringField, PasswordField, validators
import requests

app = Flask(__name__)
# app.secret_key = 1234

class RegistrationForm(Form):
    username = StringField('Имя пользователя', [validators.Length(min=4, max=25)])
    email = StringField('Email-адрес', [validators.Length(min=6, max=35)])
    password = PasswordField('Пароль', [
        validators.DataRequired()
    ])


class LoginForm(Form):
    username = StringField('Имя пользователя')
    password = PasswordField('Пароль')


@app.route("/")
def index():
    return redirect(url_for("home"))

@app.route("/home")
def home():
    return render_template("home.html")


@app.route("/register")
def register():
    form = RegistrationForm(request.form)
    return render_template("register.html", form=form)


@app.route("/login")
def login():
    form = LoginForm(request.form)
    return render_template("login.html", form=form)


@app.route("/profile")
def profile():
    return render_template("profile.html")


@app.route("/project")
def projects():
    return render_template("project.html")


@app.route("/project/<id>")
def projects_id(id):
    pass




if __name__ == "__main__":
    app.run(port=5012, debug=True)
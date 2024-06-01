from flask import redirect, url_for, render_template, request
from .forms import RegistrationForm, LoginForm


def configure_routes(app):
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
    def project():
        return render_template("project.html")

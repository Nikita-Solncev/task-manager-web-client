from wtforms import Form, BooleanField, StringField, PasswordField, validators


class RegistrationForm(Form):
    username = StringField('Имя пользователя', [validators.Length(min=4, max=25)])
    email = StringField('Email-адрес', [validators.Length(min=6, max=35)])
    password = PasswordField('Пароль', [
        validators.DataRequired()
    ])


class LoginForm(Form):
    username = StringField('Имя пользователя')
    password = PasswordField('Пароль')
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/registerService.js';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export function Register() {
    
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [formValid, setFormValid] = useState(false);
    const [error, setError] = useState('');

    function validateForm(event) {
        const username = event.target.form.username.value;
        const password = event.target.form.password.value;
        const confirmation = event.target.form.password_confirmation.value;
        
        const isValid = username.trim() !== '' && 
                       password.trim() !== '' && 
                       confirmation.trim() !== '';
        
        setFormValid(isValid);
        checkPasswords(event);
    }

    function checkPasswords(event) {
        const password = event.target.form.password.value;
        const confirmation = event.target.form.password_confirmation.value;
        setPasswordMatch(password === confirmation);
    }

    function sendRegisterForm(event) {
        event.preventDefault();
        setError('');

        const username = event.target.username.value;
        const password = event.target.password.value;
        
        if (password !== event.target[2].value) {
            setPasswordMatch(false);
            return;
        }
        
        registerUser(username, password)
            .then((response) => {
                if (response.status === 401) {
                    throw new Error('Username already taken');
                }
                if (!response.ok) {
                    throw new Error('Registration failed');
                }
                return response.json();
            })
            .then((data) => {
                localStorage.setItem("token", data.token);
                setIsAuthenticated(true);
                navigate("/");
            }) 
            .catch(error => {
                console.error('Registration error:', error);
                if (error.message === 'Username already taken') {
                    setError('This username is already taken. Please choose another one.');
                } else {
                    setError('Registration failed. Please try again.');
                }
            });
    }
    return (
        <>
<section className="bg-white dark:bg-gray-900">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1553034545-32d4cd2168f1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Welcome to Task Manager
        </h2>

        <p className="mt-4 leading-relaxed text-white/90 text-2xl">
          Description yo
              {/* TODO: придумать нормальное описание */}
        </p> 
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-5xl">
        <form onSubmit={sendRegisterForm} className="mt-8 grid grid-cols-6 gap-12 bg-[#0d1b2a] rounded-2xl p-12">
          <div className="col-span-6">
            <label
              htmlFor="Username"
              className="block text-3xl font-medium text-white dark:text-gray-200 mb-3"
            >
              Username
            </label>

            <input
              type="text"
              id="Username"
              name="username"
              onChange={validateForm}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-2xl text-gray-700 shadow-xs dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-4"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-3xl font-medium text-white dark:text-gray-200 mb-3"
            >
              Password
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              onChange={validateForm}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-2xl text-gray-700 shadow-xs dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-4"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="PasswordConfirmation"
              className="block text-3xl font-medium text-white dark:text-gray-200 mb-3"
            >
              Password Confirmation
            </label>

            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              onChange={validateForm}
              className={`mt-1 w-full rounded-md border-gray-200 bg-white text-2xl text-gray-700 shadow-xs dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-4 ${!passwordMatch ? 'border-red-500' : ''}`}
            />
            {!passwordMatch && (
                <p className="text-red-500 text-xl mt-2">Passwords do not match</p>
            )}
          </div>
          {error && (
              <div className="col-span-6">
                  <p className="text-red-500 text-xl text-center">{error}</p>
              </div>
          )}
          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              type="submit"
              disabled={!passwordMatch || !formValid}
              className={`inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-20 py-6 text-3xl font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus-outline-hidden dark:hover:bg-blue-700 dark:hover:text-white ${(!passwordMatch || !formValid) ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Create an account
            </button>

            <p className="mt-4 text-2xl text-gray-500 sm:mt-0 dark:text-gray-400">
              Already have an account?
              <a href="http://localhost:5173/login" className="text-2xl text-gray-700 underline dark:text-gray-200"> Log in</a>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
        </>
    )
}
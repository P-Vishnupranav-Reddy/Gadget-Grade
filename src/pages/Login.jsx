import React, { useState } from 'react';

const Login = () => {
  const [state, setstate] = useState("Login"); // "Login" or "Sign Up"
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login function executed", formData);
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responsedata = await response.json();

      if (responsedata.success) {
        localStorage.setItem('auth-token', responsedata.token);
        localStorage.setItem('user', JSON.stringify({
          id: responsedata.user.id,
          name: responsedata.user.name,
          email: responsedata.user.email,
        }));      
        
        console.log("User details saved in local storage:", responsedata.user);
        alert("Login successful!");
        window.location.replace('/'); // Redirect to the home page or dashboard
      } else {
        alert(responsedata.errors);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const signup = async () => {
    console.log("Sign Up function executed", formData);
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responsedata = await response.json();

      if (responsedata.success) {
        localStorage.setItem('auth-token', responsedata.token);
        localStorage.setItem('user', JSON.stringify({
          id: responsedata.user.id,
          name: responsedata.user.name,
          email: responsedata.user.email,
        }));      
        
        console.log("User details saved in local storage:", responsedata.user);
        alert("Sign Up successful!");
        window.location.replace('/'); // Redirect to the home page or dashboard
      } else {
        alert(responsedata.errors);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="flexCenter flex-col pt-32 px-4">
      <div className="w-full max-w-md bg-white px-8 py-10 rounded-md shadow-md">
        <h3 className="h3 text-center">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up" && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              placeholder="Your Name"
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Your Email Address"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Password"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
        </div>
        <button
          onClick={() => (state === "Login" ? login() : signup())}
          className="btn_dark_rounded my-5 w-full !rounded-md"
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="text-black font-bold text-center">
            Already have an account?{' '}
            <span
              onClick={() => setstate("Login")}
              className="text-secondary underline cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <p className="text-black font-bold text-center">
            Create an account?{' '}
            <span
              onClick={() => setstate("Sign Up")}
              className="text-secondary underline cursor-pointer"
            >
              Click Here
            </span>
          </p>
        )}
        <div className="mt-6 flex items-start gap-3">
          <input type="checkbox" name="terms" id="terms" className="mt-1" />
          <p className="text-sm">
            By continuing, you agree to our terms of use and privacy policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;

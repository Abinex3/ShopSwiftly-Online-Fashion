import { useForm } from "react-hook-form";
import "../CSS/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  return (
    <div id="login-container">
      <div className="login-content">
        <Link to="/home">
          <i className="fa-solid fa-xmark"></i>
        </Link>
        <p className="content-title">
          Shop<span className="span-">Swiftly</span>
        </p>
        <p className="greetings">Welcome Back!</p>

        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="inputs">
            <p className="full--name">User name</p>
            <input
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 4,
                  message: "Mininum 4 characters",
                },
              })}
              type="type"
              placeholder="Enter Your User name"
              className="login-input"
              ></input>
              {errors?.username && (
                <p className="error-message">{errors.username.message}</p>
              )}
            
           
            <br />
          </div>

          <div className="inputs">
            <p className="full--name">password</p>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Mininum 8 characters",
                },
              })}
              type="password"
              placeholder="Passcode"
              className="login-input"
            ></input>
            {errors?.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
            <p className="forget-password">Forget Your Password?</p>
          </div>

          <br />
          <button className="login-button">Log in</button>
          <p className="signup-link">
            Don't have an account?
            <Link to="/Signup">
              <span className="register">Register</span>
            </Link>
          </p>
          <div className="or-">
            <p className="or">OR</p>
          </div>
        </form>
        <i className="fa-brands fa-google"></i>
        <i className="fa-brands fa-x-twitter"></i>
      </div>
    </div>
  );
};

export default Login;

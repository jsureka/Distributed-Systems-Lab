import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector  } from "react-redux";
import { clearErrors, register } from "../../../redux/actions/userActions";

function Register({ location }) {
  const dispatch = useDispatch();
  // const alert = useAlert();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      // reader.onload = () => {
      //   if (reader.readyState === 2) {
      //     setAvatarPreview(reader.result);
      //     setAvatar(reader.result);
      //   }
      // };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  // const redirect = "/account";

  useEffect(() => {
    if (error) {
      // alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error/* , alert */, navigate, isAuthenticated]);

  return (
    <div className="container pb-5">
      <div className="row m-5  shadow-lg">
        <div className="col-md-6 d-none d-md-block">
          {/* <img
            src={require("../../assets/register.jpg")}
            className="img-fluid"
            alt="register"
          /> */}
        </div>
        <div className="col-md-6 bg-white p-4">
          <h3 className="pb-3 text-center fw-bold mt-5">REGISTER</h3>
          <div className="form-style p-5">
            <form onSubmit={registerSubmit}>
              <div className="form-group pb-3">
                <input
                  type="text"
                  className=" form-control"
                  placeholder="Name"
                  required
                  name="name"
                  value={name}
                  onChange={registerDataChange}
                />
              </div>
              <div className="form-group pb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className=" form-control"
                  required
                  name="email"
                  value={email}
                  onChange={registerDataChange}
                />
              </div>
              {/* <div className="form-group pb-3">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div> */}
              <div className="form-group pb-3">
                <input
                  type="password"
                  className=" form-control"
                  placeholder="Password"
                  required
                  name="password"
                  value={password}
                  onChange={registerDataChange}
                />
              </div>
              {/* <div className="form-group pb-3">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div> */}

              <div className="pb-2 text-center mt-4">
                <button type="submit" className="btn btn-success w-50">
                  Register
                </button>
              </div>
            </form>
            <div className="pt-4 text-center">
              Already have an Account?{" "}
              <Link
                to="/login"
                className=" text-success text-decoration-none fw-bold"
              >
                Sign In
              </Link>
            </div>
            <div className=" text-center pt-3"> 
                <Link to={'/'} className='text-decoration-none fw-bolder'>Return to Home</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

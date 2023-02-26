import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";

import AdminLayout from "../layout/AdminLayout";

import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../admin-user/adminUserAction";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef("");
  const passRef = useRef("");

  const { admin } = useSelector((state) => state.adminInfo);

  useEffect(() => {
    admin?._id && navigate("/dashboard");
  }, [admin?._id, navigate]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    console.log(obj);
    dispatch(loginAdmin(obj));
  };

  // const inputs = [
  //   {
  //     label: "Email",
  //     name: "email",
  //     type: "type",
  //     placeholder: "smith ",
  //     required: true,
  //     // forwardRef: emailRef,
  //   },
  //   {
  //     label: "Password",
  //     name: "password",
  //     type: "password",
  //     placeholder: "xxxxx ",
  //     required: true,
  //     // forwardRef: passRef,
  //   },
  // ];

  return (
    <AdminLayout>
      <div className="reg-page">
        <Form
          onSubmit={handleOnSubmit}
          className="border mt-5 p-3 rounded shadow-lg pt-5"
        >
          <h3 className="mb-3 text-center">Welcome Back!</h3>
          <hr className="mb-5" />

          {/* {inputs.map((item) => (
            <CustomInpute key={item.name} {...item} />
          ))} */}

          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              ref={emailRef}
              name="email"
              placeholder="smith "
              required
              type="text"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              ref={passRef}
              name="password"
              placeholder="***** "
              required
              type="password"
              class="form-control"
            />
          </div>

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Login
            </Button>
            <div className="text-end mt-5">
              Forgot password? <a href="/reset-password">Reset</a> now.
            </div>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default LoginPage;

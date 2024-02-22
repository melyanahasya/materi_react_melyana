import axios from "axios";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    axios.get(" http://localhost:5000/users").then(({ data }) => {
      const admin = data.find(
        (x) => x.email === email && x.password === password
      );
      if (admin) {
        localStorage.setItem("email", admin.email);
        localStorage.setItem("id", admin.id);
        history.push("/data");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        console.log("Username atau password tidak valid");
      }
    });
  };

  return (
    <div
      style={{ width: "500px" }}
      className="container border my-5 pt-3 pb-5 px-5 login "
    >
      <div style={{ fontFamily: "public-sans", fontSize: "17px" }}>
        <h1 className="mb-5">Form Login </h1>
        <Form onSubmit={login} method="POST">
          <div className="mb-3">
            <Form.Label>
              <strong>Email</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                placeholder="Masukkan Email Anda..."
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="mb-3">
            <Form.Label>
              <strong>Password</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                placeholder="Masukkan Password Anda..."
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </div>
          <button variant="primary" type="submit" className="mx-1 buton btn">
            Login
          </button>
          <p>
            Jika belum punya akun silahkan{" "}
            <a style={{ textDecoration: "none" }} href="/register">
              Register
            </a>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;

import axios from "axios";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        email: email,
        password: password,
      });
      history.push("/login");
      window.location.reload();
    } catch (error) {
      alert("Terjadi Kesalahan " + error);
    }
  };

  return (
    <div
      style={{ width: "500px" }}
      className="container border my-5 pt-3 pb-5 px-5 login "
    >
      <div style={{ fontFamily: "public-sans", fontSize: "17px" }}>
        <h1 className="mb-5">Form Register </h1>
        <Form onSubmit={register} method="POST">
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
            Register
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Register;

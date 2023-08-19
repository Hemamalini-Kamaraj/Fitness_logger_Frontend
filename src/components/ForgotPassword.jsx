import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import logo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import baseUrl from "../api/api";

function ForgotPassword() {

  let [email, setEmail] = useState("");
  const navigate = useNavigate("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const forgotEmail = email;
// console.log(email)
    let users = await baseUrl.get("/user");
    users = users.data;
    users = users.find((user) => user.email === forgotEmail);
    if (users) {
      try {
        baseUrl.put("/user/forgot-password", { email: forgotEmail });
        setEmail("");
        alert(
          "Mail has been sent to reset the password.Kindly check your email!"
        );
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("User does not exist. Kindly register!");
    }
  };

  return (
    <Container fluid className="login">
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h1 className="fw-bold  text-uppercase text-center" style={{color:"#6f4db0"}}><img src={logo} style={{width:"40px", marginTop:"-9px"}}></img> Fitness Logger</h1>
                  <p className="mb-4 fs-6 fw-bold text-center" style={{color:"#6f4db0"}}>CHANGE YOUR PASSWORD HERE..!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleForgotPassword}>   
                                 
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                      </Form.Group>
                                      
                      <div className="d-grid">
                        <Button type="submit" className="fs-5 fw-bold" style={{backgroundColor:"#866abd"}}>
                          Continue
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already Registered?{" "}
                        <Link to='/' className="fw-bold" style={{color:"#866abd"}}>
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default ForgotPassword
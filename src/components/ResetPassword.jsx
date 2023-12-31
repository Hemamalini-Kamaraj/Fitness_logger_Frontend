import React, { useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import logo from "../assets/logo.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import baseUrl from "../api/api";


function ResetPassword() {
  let [password, setPassword] = useState("");
  let [cPassword, setcPassword] = useState("");
  let [resetToken, setResetToken] = useState("");

  const navigate = useNavigate();

  let { id } = useParams();
  useEffect(() => {
    setResetToken(id);
  }, [id]);

  const handleReset = async (e) => {
    e.preventDefault();

  
      if (password === cPassword) {
        baseUrl.patch(`/user/reset-password/${resetToken}`, {
          password: password,
        });
        alert("Password changed Successfully!");
        navigate("/")
      } else {
        alert("Password not matching");
      }
    } 
  ;
  return (
    <Container fluid className="login">
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h1 className="fw-bold  text-uppercase text-center" style={{color:"#6f4db0"}}><img src={logo} style={{width:"40px", marginTop:"-9px"}}></img> Fitness Logger</h1>
                  <p className="mb-4 fs-6 fw-bold text-center" style={{color:"#6f4db0"}}>RESET YOUR PASSWORD HERE..!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleReset}>   
                                 
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                      </Form.Group>
                     
                      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Reenter Password" value={cPassword} onChange={(e)=>setcPassword(e.target.value)}/>
                      </Form.Group>
                                      
                      <div className="d-grid">
                        <Button type="submit" className="fs-5 fw-bold" style={{backgroundColor:"#866abd"}}>
                          Reset Password
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

export default ResetPassword
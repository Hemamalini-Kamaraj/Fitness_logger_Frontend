import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import logo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import baseUrl from "../api/api";


function Signup() {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    const userDetails = {
      name,
      email,
      password,
      height,
      weight
    };

    let users = await baseUrl.get("/user");
    users = users.data;
    users = users.find((user) => user.email === userDetails.email);
    if (!users) {
      try {
        await baseUrl.post("/user/signup", userDetails);
        alert("Account registered successfully.Kindly login");
      } catch (error) {
        console.error("Error Signing Up", error);
      }
      navigate("/");
    } else {
      alert("User Email already exists");
    }
  };
  return (
    <Container fluid className="login">
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card>
              <Card.Body>
                <div className="mb-3 mt-md-2">
                  <h1 className="fw-bold  text-uppercase text-center" style={{color:"#6f4db0"}}><img src={logo} style={{width:"40px", marginTop:"-9px"}}></img> Fitness Logger</h1>
                  <p className="mb-2 fs-4 fw-bold text-center" style={{color:"#6f4db0"}}>SIGN UP HERE..!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSignUp}>
                      <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className="text-center">
                          Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"  value={name} onChange={(e)=>setName(e.target.value)}/>
                      </Form.Group>
                                      
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                     </Form.Group>
                     
                     <Form.Group className="mb-3" controlId="formBasicHeight">
                        <Form.Label className="text-center">
                          Height
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter your height in cms" value={height} onChange={(e)=>setHeight(e.target.value)}/>
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formBasicWeight">
                        <Form.Label className="text-center">
                          Weight
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter your weight in kg" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                      </Form.Group>
                                      
                      <div className="d-grid">
                        <Button type="submit" className="fs-5 fw-bold" style={{backgroundColor:"#866abd"}}>
                          Signup
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-2">
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

export default Signup
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Login() {
    const initialvalues = {email:"",password:""}
    const [logValues, setLogValues] = useState(initialvalues);
    const [logErrors, setLogErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
              setLogErrors(validate(logValues));
              setIsSubmit(true);
    }
  
  
    const handleChange = (e) =>{
      const{name,value} = e.target;
      setLogValues({...logValues, [name]:value});
    }
  
    const validate = (values) =>{
        const userData = JSON.parse(localStorage.getItem("login"));
        console.log(userData.email);
      const errors = {}
  
    if(!values.email){
        errors.email = "Email Address is required";
    }else if(values.email !== userData.email){
        errors.email = "Email Address is Invalid";
    }
    
  
    if(!values.password){
      errors.password = "Password is required";
    }else if(values.password !== userData.password){
          errors.password = "Password is wrong"
    }
    
    return errors;
      
  };



  return (
    <Container style={{ marginTop: '100px' }}>
      <Row>
      <Col md={{ span: 6, offset: 3 }}>
      <Card style={{ padding: '30px' }}>
        <h2 style={{ paddingBottom: '30px' }}>Login</h2>
        <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={logValues.email} onChange={handleChange}  placeholder="Enter email" />
                {logErrors.email && <div className="errorMsg">{logErrors.email}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={logValues.password} onChange={handleChange}  placeholder="Password" />
                {logErrors.password && <div className="errorMsg">{logErrors.password}</div>}
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
        </Card>
        </Col>
    </Row>
    </Container>
  );
}

export default Login;
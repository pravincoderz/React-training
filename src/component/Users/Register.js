import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Register() {

  const initialvalues = {name:"",email:"",password:"",cpassword:""}
  const [regValues, setRegValues] = useState(initialvalues);
  const [regErrors, setRegErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [register, setRegister] = useState();
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
            setRegErrors(validate(regValues));
            setIsSubmit(true);
            localStorage.setItem("login", JSON.stringify(regValues));
  }

  const handleChange = (e) =>{
    const{name,value} = e.target;
    setRegValues({...regValues, [name]:value});
  }

  const validate = (values) =>{
    const errors = {}
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  if(!values.name){
    errors.name = "Name is required";
  }

  if (!(values.name).match(/^[a-zA-Z ]*$/)) {
    errors.name = "Please enter alphabet characters only";
  }

  if(!values.email){
      errors.email = "Email Address is required";
  }
  if (!pattern.test(values.email)) {
    errors.email = "Please enter valid email-ID.";
  }

  if(!values.password){
        errors.password = "Password is required";
  }else if(values.password.length > 10){
        errors.password = "Password must be 10 digits"
  }

  if(!values.cpassword){
    errors.cpassword = "Password is required";
  }else if(values.cpassword.length > 10){
        errors.cpassword = "Password must be 10 digits"
  }else if(values.password !== values.cpassword){
    errors.cpassword = "Password is not match"
  }
  return errors;
    
};


  return (
    <Container style={{ marginTop: '100px' }}>
      <Row>
      <Col md={{ span: 6, offset: 3 }}>
      <Card style={{ padding: '30px' }}>
        <h2 style={{ paddingBottom: '30px' }}>Register</h2>
        <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" name="name" value={regValues.name} onChange={handleChange} placeholder="Enter name" />
            {regErrors.name && <div className="errorMsg">{regErrors.name}</div>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={regValues.email} onChange={handleChange}  placeholder="Enter email" />
            {regErrors.email && <div className="errorMsg">{regErrors.email}</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password"value={regValues.password} onChange={handleChange}  placeholder="Password" />
            {regErrors.password && <div className="errorMsg">{regErrors.password}</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password"  name="cpassword" value={regValues.cpassword} onChange={handleChange}  placeholder="Confirm Password" />
            {regErrors.cpassword && <div className="errorMsg">{regErrors.cpassword}</div>}
        </Form.Group>
        
        <Button variant="primary" type="submit">
            Register
        </Button>
        {isSubmit ? <div>Registered successfully..!</div> : null}
        </Form>
        </Card>
        </Col>
    </Row>
    </Container>
  );
}

export default Register;
import React from 'react'
import {Form, Button, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignIn = ({setAuthenticate}) => {

  const navigate = useNavigate();
  const signInUser =(event)=>{
    //form태그의 자동 새로고침 현상을 막는 것 - form 사용할 경우 아래 코드 항상 쓰기
    //form이기 때문에 버튼의 onClick이 아닌 onSubmit 사용
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container>
      <Form onSubmit={(event)=>signInUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Sign In
      </Button>
    </Form>
    </Container>
  )
}

export default SignIn;

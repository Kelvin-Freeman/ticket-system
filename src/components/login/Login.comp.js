import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export const Login = () => {
    return(
        <Container className="myform">
            <Row>
                <Col>
                <h1 className='test-info text-center'>Client Login</h1>
                <hr />
                <Form>
                    <Form.Group className="formemail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                        type="email" 
                        name="email"
                        placeholder="Enter Email"
                        required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password" 
                        name="password"
                        placeholder="Enter password"
                        required
                        />
                    </Form.Group>

                    <Button type="submit">Login</Button>
                </Form>
                <hr />
                </Col>
            </Row>
                <Col>
                    <a href="#!">Forgot Your Password?</a>
                </Col>
            <Row>

            </Row>
        </Container>
    )
}
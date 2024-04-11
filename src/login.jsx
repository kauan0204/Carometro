import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    return (
    <>
    <div class="">

    </div>
    
        <div class="from">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label><br></br>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label><br></br>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button id="botao" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </div>
        </>
    );
};

export default Login;
import React, { Component } from 'react';
import { Header, Segment, Form, Button, Grid, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;
    return (
      <Grid>
        <Grid.Column width={5}>
        </Grid.Column>
        <Grid.Column width={6}>
          <Card centered color='violet' fluid>
            <Card.Content>
              <Card.Header textAlign='center'>
                Login
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label htmlFor='email'>Email</label>
                  <input
                    required
                    id='email'
                    value={email}
                    placeholder='Email'
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor='password'>Password</label>
                  <input
                    required
                    id='password'
                    value={password}
                    placeholder='Password'
                    type='password'
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Segment textAlign='center' basic>
                  <Button primary type='submit'>Submit</Button>
                </Segment>
              </Form>
            </Card.Content>
          </Card>
          <br />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect()(Login);

import React, { Component } from 'react';
import { Header, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/products';

class AddProductForm extends Component {
  defaults = { name: '', price: 0.0, style: '', size: '', description: '' };
  state = { ...this.defaults };

  handleChange = (e, data) => {
    const { name, value } = data;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { type, dispatch } = this.props;
    dispatch(addProduct(this.state))
    this.setState(this.defaults);
  }

  render() {
    const { name, price, style, size, description } = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              label='Name of Product'
              placeholder='Product'
              name='name'
              value={name}
              onChange={ (e, data) => this.handleChange(e, data)}
            />
            <Form.Input
              label='Price of Product'
              placeholder='Price'
              name='price'
              value={price}
              onChange={ (e, data) => this.handleChange(e, data)}
            />
            <Form.Input
              label='Product Style'
              placeholder='Style'
              name='style'
              value={style}
              onChange={ (e, data) => this.handleChange(e, data)}
            />
          </Form.Group>
          <Form.Group inline>
            <Form.Input
              label='Size'
              placeholder='Size'
              name='size'
              value={size}
              onChange={ (e, data) => this.handleChange(e, data)}
            />
          </Form.Group>
            <Form.TextArea
              label='Product Description'
              placeholder='Description'
              name='description'
              value={description}
              onChange={ (e, data) => this.handleChange(e, data)}
            />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default connect()(AddProductForm);
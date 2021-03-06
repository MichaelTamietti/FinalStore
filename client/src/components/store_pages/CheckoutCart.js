import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {deleteFromCart, updateItemUnits} from '../../actions/cartActions';
import CheckoutCartItem from "./CheckoutCartItem";
import { Container, Grid, Label, Header, Button, Segment, Card, Image } from 'semantic-ui-react';

class CheckoutCart extends React.Component {


    renderCart() {
        return (
            <Container>
              <Header as="h4" textAlign="center" >Your Cart</Header>
                {this.cartList()}
            </Container>
        );
    }
    handleDeleteFromCart(id) {
        this.props.deleteFromCart({id})
    }
    handleDeductUnit(id) {
        let units = -1;
        this.props.updateItemUnits({id, units})
    }
    handleAddUnit(id) {
        let units = 1;
        this.props.updateItemUnits({id, units})
    }

    cartList() {
      return (
        this.props.cart.map(cartItem => {
          return (
           
       
            <Container>
                  <CheckoutCartItem 
                    key={cartItem.id}
                    cartItem={cartItem}
                    onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
                    onDeductUnit={this.handleDeductUnit.bind(this, cartItem.id)}
                    handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)}
                  />
                  </Container>
        
          );
        })
      );
    }

    cartTotal() {
        return (
            <Container textAlign='right'>
         
                        <h3>TOTAL: ${this.totalAmount(this.props.cart)}</h3>
                
            </Container>
        );
    }

    totalAmount(cartArray) {
        return cartArray.reduce((acum, item) => {
            acum += item.price * item.units;
            return acum;
        }, 0);
    }
    

    render() {
        if (this.props.cart.length !== 0) {
            return (
                <aside className='cart'>
                    <Segment>
                        {this.renderCart()}
                        {this.cartTotal()}
                    </Segment>
                </aside>
            );
        }

        return (
            <Header as="h4" textAlign="center">Your Cart Is Empty</Header>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        product: state.products
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        deleteFromCart,
        updateItemUnits
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(CheckoutCart);
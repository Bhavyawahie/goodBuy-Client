import React, { useState, } from 'react'
import { Form, Button, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'


const ShippingScreen = ({history}) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart


    const [ address, setAddress ] = useState(shippingAddress.address || null)
    const [ city, setCity ] = useState(shippingAddress.city || null)
    const [ state, setState ] = useState(shippingAddress.state || null)
    const [ pincode, setPincode ] = useState(shippingAddress.pincode || null)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, state, pincode }))
        history.push('/payment')
    }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2/>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type='text' placeholder='Enter address' value={address} required onChange={(e) => setAddress(e.target.value)}/>
                </Form.Group>  
                <Form.Group controlId='city'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type='text' placeholder='Enter city' value={city} required onChange={(e) => setCity(e.target.value)}/>
                </Form.Group>  
                <Form.Group controlId='state'>
                        <Form.Label>State</Form.Label>
                        <Form.Control type='text' placeholder='Enter state' value={state} required onChange={(e) => setState(e.target.value)}/>
                </Form.Group>  
                <Form.Group controlId='pincode'>
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control type='text' placeholder='Enter pincode' value={pincode} required onChange={(e) => setPincode(e.target.value)}/>
                </Form.Group> 
                <Button type='submit' variant='primary' className="mt-3">Continue</Button>
            </Form>   
        </FormContainer>
    )
}

export default ShippingScreen

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct, uploadProductImage } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const ProductEditScreen = ({ history, match }) => {
    const productId = match.params.id
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState("")

    const dispatch = useDispatch()
    
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    
    const productUpdate = useSelector(state => state.productUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = productUpdate

    const productPictureUpdate = useSelector(state => state.productPictureUpdate)
    const {loading: loadingImageUpdate, error: errorImageUpdate, success: successImageUpdate, imageURL } = productPictureUpdate

    useEffect(() => {
        if(successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            history.push('/admin/productlist')
        } else {
            if(!product.name || product._id !== productId){
                dispatch(listProductDetails(productId))
            }
            else{
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)
            }
        }
    }, [dispatch, product, productId, history, successUpdate])

    useEffect(() => {
        setImage(imageURL)
    }, [successImageUpdate, imageURL])

    function validateFileType(extFile) {
        return new Promise((resolve, reject) => {
            if (extFile==="image/jpg" || extFile==="image/jpeg" || extFile==="image/png"){
                resolve(true)
            }else{
                alert("Only jpg/jpeg and png files are allowed!");
            }   
        })
    }
    
    const uploadFileHandler = async (image) => {
        const fileExt = image && image.type
        if(await validateFileType(fileExt)){
            dispatch(uploadProductImage(productId, image))
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            description,
        }))
    } 
    return (
        <> 
            <Link to="/admin/productList" className="btn btn-outline-secondary my-3">
                <i className="fas fa-chevron-left"></i>
            </Link>
        <FormContainer>
            <h2>Edit Product</h2>
            {loadingUpdate && <Loader/>}
            {(errorUpdate || errorImageUpdate) && <Message variant='danger'>{errorUpdate || errorImageUpdate}</Message>}
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
            <Form onSubmit={submitHandler} className='mt-4'>
                <Form.Group controlId='name'>
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} className='m-2'/>
                </Form.Group>
                <Form.Group controlId='price'>
                    <Form.Label>
                        Price
                    </Form.Label>
                    <Form.Control type='number' placeholder='Enter price' value={price} onChange={(e) => setPrice(e.target.value)} className='m-2'/>
                </Form.Group>
                <Form.Group controlId='image'>
                    <Form.Label>
                        Image URL
                    </Form.Label>
                    <Form.Control type='text' placeholder='Enter image URL' value={image} onChange={(e) => setImage(e.target.value)} className='m-2'/>
                    <Form.File type="file" id='image-file' className='form-control' accept='image/*' custom onChange={(e) => uploadFileHandler(e.target.files[0])}>
                    </Form.File>
                        { loadingImageUpdate && <Loader/> }
                </Form.Group>
                <Form.Group controlId='brand'>
                    <Form.Label>
                        Brand
                    </Form.Label>
                    <Form.Control type='text' placeholder='Enter Brand' value={brand} onChange={(e) => setBrand(e.target.value)} className='m-2'/>
                </Form.Group>
                <Form.Group controlId='category'>
                    <Form.Label>
                        Category
                    </Form.Label>
                    <Form.Control type='text' placeholder='Enter category' value={category} onChange={(e) => setCategory(e.target.value)} className='m-2'/>
                </Form.Group>
                <Form.Group controlId='countInStock'>
                    <Form.Label>
                        Count in Stock
                    </Form.Label>
                    <Form.Control type='number' placeholder='Enter count in stock' value={countInStock} onChange={(e) => setCountInStock(e.target.value)} className='m-2'/>
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.Label>
                        Description
                    </Form.Label>
                    <Form.Control type='text' placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)} className='m-2'/>
                </Form.Group>
                
                <Button type='submit' variant='secondary' className='mt-3'>Update</Button>
            </Form>
            )}
        </FormContainer>
        </>
    )
}

export default ProductEditScreen

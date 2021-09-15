import React from 'react'
import './Productcard.css'
import { useStateValue } from './StateProvider'
function Productcard(id, title, image, price, rating) {

    const [{ basket }, dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return (
        <div className="productcart">
            <img className="productcart__image" src={image} alt="" />
            <div className="productcart__info">
                <p className="productcart__image">{title}</p>
                <p className="productcart__price">${price}</p>
            </div>
            <div className="productcart__rating">
                {
                    Array(rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))
                }
            </div>
            <button onClick={removeItem}>Remove from the Cart</button>
        </div>
    )
}

export default Productcard

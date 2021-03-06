import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import ProductCard from './Productcard'

function Checkout() {

  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">

        {
          basket.lenght === 0 ? (
            <div>
              <h2 className="checkout__title">Your shopping basket is empty.</h2>
              <p>You have no items in your basket. Add one</p>
            </div>
          ) : (
            <div>
              <h2 className="shopingbaskettitle">Items in the shopping basket</h2>
              {
                basket.map(item => (
                  <ProductCard
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))
              }
            </div>
          )
        }

        <div>
          <h2 className="checkout__title">Your shopping basket is empty.</h2>
          <p>You have no items in your basket. Add one</p>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout

import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://sm.pcmag.com/t/pcmag_in/how-to/4/4-ways-to-/4-ways-to-avoid-paying-119-for-amazon-prime-free-shipping_w2f3.1920.jpg" 
            alt=""/>

            <div className="home__row">
                <Product 
                    id = "121314"
                    title="The Lean Startup: How Contant Innovation"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61a9RYXjqzL._AC_SL1000_.jpg"
                />
                <Product 
                    id = "121314"
                    title="The Lean Startup: How Contant Innovation"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61a9RYXjqzL._AC_SL1000_.jpg"
                />
                <Product 
                    id = "121314"
                    title="The Lean Startup: How Contant Innovation"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61a9RYXjqzL._AC_SL1000_.jpg"
                />
            </div>
        </div>
    )
}

export default Home

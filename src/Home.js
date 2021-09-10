import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className="home">
      <img className="home__image"
        src="https://sm.pcmag.com/t/pcmag_in/how-to/4/4-ways-to-/4-ways-to-avoid-paying-119-for-amazon-prime-free-shipping_w2f3.1920.jpg"
        alt="" />

      <div className="home__row">
        <Product
          id="121314"
          title="SentrySafe SFW123GDC Fireproof Waterproof Safe with Digital Keypad, 1.23 Cubic Feet, Gun Metal Gray"
          price={300.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/61a9RYXjqzL._AC_SL1000_.jpg"
        />
        <Product
          id="121314"
          title="Yootech Wireless Charger, Qi-Certified 10W Max Fast Wireless Charging Pad Compatible with iPhone"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/5177CYC1XVL._AC_SL1466_.jpg"
        />
        <Product
          id="121314"
          title="Dreamiracle Ice Maker Machine for Countertop, 33 lbs Bullet Ice Cube in 24H"
          price={101.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/71C9KLjYi3L._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="121314"
          title="Soundance Laptop Stand, Aluminum Computer Riser, Ergonomic Laptops Elevator for Desk"
          price={25.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/81MN9l2nl2S._AC_SL1500_.jpg"
        />
        <Product
          id="121314"
          title="Ergonomic Office Chair, Tribesigns High Back Desk Chair with Lumbar Support, Breathable Mesh Back"
          price={178.92}
          rating={4}
          image="https://m.media-amazon.com/images/I/711o-GXbvbS._AC_SL1500_.jpg"
        />
        <Product
          id="121314"
          title="Allguest Office Chair Home Computer Chair White High Back Armrest Ergonomic Adjustable Lumbar Support Mesh Nylon AG-876FH-W"
          price={239.74}
          rating={4}
          image="https://m.media-amazon.com/images/I/61yBtZrvDyL._AC_SL1500_.jpg"
        />
        <Product
          id="121314"
          title="SMAGREHO 3-Tier Standing Baker's Racks，Rolling Serving Bar Cart on Wheels with Storage Industrial"
          price={59.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61kGhLyR+gL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="121314"
          title="Dreametech T10 Cordless Vacuum Cleaner, Long Runtime, 20Kpa Powerful Suction Vacuum Cleaner, 8-Layer Noise Reduction Handheld"
          price={297.52}
          rating={4}
          image="https://m.media-amazon.com/images/I/51Wl1yrFZYL._AC_SL1000_.jpg"
        />
        <Product
          id="121314"
          title="Power Strip with 6 Feet, Yintar Surge Protector with 6 AC Outlets and 3 USB Ports, 6 Ft Extension Cord for for Home"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/71qE6chtx+L._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="121314"
          title='LG UHD TV 65" Real 4K LED Display, ThinQ AI with Magic Remote'
          price={796.72}
          rating={4}
          image="https://m.media-amazon.com/images/I/A19cnsdWQlL._AC_SL1500_.jpg"
        />
        <Product
          id="121314"
          title="Yool Handheld Precision Massager Gun Deep Tissue Muscle Pain"
          price={99.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61vvlsDXJdL._AC_SL1500_.jpg"
        />
        <Product
          id="121314"
          title="Universal Remote Control for Samsung TV Replacement for LCD LED HDTV 3D Smart Samsung TVs Remote"
          price={11.16}
          rating={4}
          image="https://m.media-amazon.com/images/I/51GxgHSNolL._AC_SL1000_.jpg"
        />
      </div>
    </div>
  )
}

export default Home

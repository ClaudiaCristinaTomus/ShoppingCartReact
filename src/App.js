import { useState } from "react";
import { data } from "./data";
import logo from "./images/logo.svg";
import avatar from "./images/image-avatar.png"
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-4">
          <img src={logo} alt="" />
          <nav>
            <ul className="flex items-center justify-start gap-4">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        <div>
          <ul className="flex items-center justify-start gap-4">
            <li><button>
              <FaShoppingCart />

            </button></li>
            <li><img src={avatar} alt="" className="w-12" /></li>
          </ul>
        </div>
      </header>
    </>
  )
}
function App() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage } = products[value]
  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <article>
          <img src={mainImage} alt="" className="w-9/12 rounded-2xl" />
          <ul className="flex items-center justify-start gap-5 flex-wrap mt-5">
            {products.map((item, index) => (
              <li key={item.id}
                onClick={() => setValue(index)}
                className={`${index === value && "border-2 border-orange-400 opacity-80"
                  } border-2 rounded-2xl overflow-hidden cursor-pointer`}>
                <img src={item.thumbnail} alt="" className="w-20 rounded-xl" />
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Sneaker Company</h2>
          <h1>Fall Limited Edition Sneakers</h1>
          <p> These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div>
            <ul>
              <li>$125.00</li>
              <li>50%</li>
            </ul>
            <p><s>$250.00</s></p>
          </div>

          <div>
            <ul>
              <li>
                <img src={minus} alt="" />
              </li>
              <li>{amount}</li>
              <li>{plus}</li>
            </ul>
          </div>
          </article>
      </section>
    </>
  );
}

export default App;

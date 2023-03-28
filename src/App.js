import { useState } from "react";
import { data } from "./data";
import logo from "./images/logo.svg";
import avatar from "./images/image-avatar.png"
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from "react-icons/fa";
import minus from "./images/icon-minus.svg"
import plus from "./images/icon-plus.svg"


function Header() {
  return (
    <>
      <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-4">
          <img src={logo} alt="" />
          <nav className="hidden">
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
              <FaShoppingCart className="text-2xl text-slate-600" />

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
  const [amount, setAmount] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);

  const { mainImage } = products[value]

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === products.length) {
      setSlideIndex(1)
    }
  }

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(products.length)
    }
  }

  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount <= 0)
      setAmount(0);
  };

  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-10">
        <article>
          <div>
            {products.map((item, index) => (
          <div key={index} className={slideIndex ===
                index + 1 ? "relative" : "hidden"}
          >
                <img src={mainImage} alt="" className="w-full rounded-2xl" />

                <ul>
                  <li><button
                    onClick={previousSlide}
                    className="bg-white rounded-full p-5 shadow absolute left-2 top-1/2 -translate-y-1/2"><FaChevronLeft /></button></li>
                  <li><button
                    onClick={nextSlide}
                    className="bg-white rounded-full p-5 shadow absolute right-2 top-1/2 -translate-y-1/2"><FaChevronRight /></button></li>
                </ul>

        
                </div>
            ))}
           
              <ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
                  {products.map((item, index) => (
                    <li key={item.id}
                      onClick={() => setValue(index)}
                      className={`${index === value && "border-2 border-orange-400 opacity-80"} border-2 rounded-2xl overflow-hidden cursor-pointer`}>
                      <img src={item.thumbnail} alt="" className="w-20 rounded-xl" />
                    </li>
                  ))}
                </ul>
                </div>
             
            
       
            </article>


        <article className="px-8 pb-10">
          <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase traking-wide text-sm
          font-bold inline-block rounded shadow mb-10">Sneaker Company</h2>
          <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">Fall Limited Edition Sneakers</h1>
          <p className="text-slate-600 mb-10 leading-relaxed"> These low-profile sneakers are your perfect casual wear
            companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className="flex flex-wrap items-center justify-between">
            <ul className="flex items-center gap-2">
              <li className="text-slate-900 font-bold text-2xl">$125.00</li>
              <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block
               rounded shadow">50%</li>
            </ul>
            <p className="text-slate-600 text-sm"><s>$250.00</s></p>
          </div>

          <div className="mt-10">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow">
              <li onClick={handleMinus}>
                <img src={minus} alt="" />
              </li>
              <li>{amount}</li>
              <li onClick={() => setAmount(amount + 1)}><img src={plus} alt="" /></li>
            </ul>
            <div>
              <button className="flex items-center gap-4 bg-orange-500 py-2 px-4 w-full text-white font-bold rounded-lg shadow mt-5 w-full">
                <FaShoppingCart />Add to cart
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import React from 'react'
import "../app/globals.css"

const tshirts = () => {
  return (
    <>
        <Navbar />
      <div>
        <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://m.media-amazon.com/images/I/61KtrldtmeL._AC_UY550_.jpg" />
            </a>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://m.media-amazon.com/images/I/61KtrldtmeL._AC_UY550_.jpg" />
            </a>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              <p className="mt-1">$21.15</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://m.media-amazon.com/images/I/61KtrldtmeL._AC_UY550_.jpg" />
            </a>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
              <p className="mt-1">$12.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://m.media-amazon.com/images/I/61KtrldtmeL._AC_UY550_.jpg" />
            </a>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
              <p className="mt-1">$18.40</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://m.media-amazon.com/images/I/61KtrldtmeL._AC_UY550_.jpg" />
            </a>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://m.media-amazon.com/images/I/61KtrldtmeL._AC_UY550_.jpg" />
            </a>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              <p className="mt-1">$21.15</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://m.media-amazon.com/images/I/61KtrldtmeL._AC_UY550_.jpg" />
            </a>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
              <p className="mt-1">$12.00</p>  
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://m.media-amazon.com/images/I/61KtrldtmeL._AC_UY550_.jpg" />
            </a>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
              <p className="mt-1">$18.40</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    <Footer />
    </>
    
  )
}

export default tshirts;
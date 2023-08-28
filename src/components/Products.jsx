import React from 'react'
import img1 from '../assets/arrow.png';
import img2 from '../assets/arrow.png';
import img3 from '../assets/black-leather-jacket.jpg';
import img4 from '../assets/brown-jacket.jpg';
import img5 from '../assets/comfy-gray-pants.jpg';
import img6 from '../assets/knitted-top.jpg';
import img7 from '../assets/pink-trousers.jpg';
import img8 from '../assets/short-skirt.jpg';
import img9 from '../assets/sporty-smartwatch.jpg';
import img10 from '../assets/white-tshirt.jpg';

export const Products = () => {
    return (
        <>
            <h1 >Featured Categories</h1>
            <div class="line-mf"></div>
            <section className='product-categories'>
                <div className="product-filter">

                    <div id="buttons">
                        <button className="button-value" onclick="filterProduct('all')">All</button>
                        <button className="button-value" onclick="filterProduct('Topwear')">
                            Topwear
                        </button>
                        <button className="button-value" onclick="filterProduct('Bottomwear')">
                            Bottomwear
                        </button>
                        <button className="button-value" onclick="filterProduct('Jacket')">
                            Jacket
                        </button>
                        <button className="button-value" onclick="filterProduct('Watch')">
                            Watch
                        </button>
                    </div>
                </div>
                <section class="product">

                    <button class="pre-btn">
                        <img src={img1} /></button>
                    <button class="nxt-btn">
                        <img src={img2} /></button>
                    <div class="product-container">
                        <div class="product-card">
                            <div class="product-image">
                                <img src={img3} class="product-thumb" alt="" />
                                <button class="card-btn">buy now</button>
                            </div>
                            <div class="product-info">
                                <h2 class="product-brand">brand</h2>
                                <p class="product-short-description">a short line about the product..</p>
                                <span class="price">Rs 200</span><span class="actual-price">Rs 250</span>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image">
                                <img src={img4} class="product-thumb" alt="" />
                                <button class="card-btn">buy now</button>
                            </div>
                            <div class="product-info">
                                <h2 class="product-brand">brand</h2>
                                <p class="product-short-description">a short line about the product..</p>
                                <span class="price"> Rs 200</span><span class="actual-price">Rs 250</span>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image">
                                <img src={img5} class="product-thumb" alt="" />
                                <button class="card-btn">buy now</button>
                            </div>
                            <div class="product-info">
                                <h2 class="product-brand">brand</h2>
                                <p class="product-short-description">a short line about the product..</p>
                                <span class="price"> Rs 200</span><span class="actual-price">Rs 250</span>
                            </div>
                        </div >
                        <div class="product-card">
                            <div class="product-image">
                                <img src={img6} class="product-thumb" alt="" />
                                <button class="card-btn">buy now</button>
                            </div>
                            <div class="product-info">
                                <h2 class="product-brand">brand</h2>
                                <p class="product-short-description">a short line about the product..</p>
                                <span class="price"> Rs 200</span><span class="actual-price">Rs 250</span>
                            </div>
                        </div >
                        <div class="product-card">
                            <div class="product-image">
                                <img src={img7} class="product-thumb" alt="" />
                                <button class="card-btn">buy now</button>
                            </div>
                            <div class="product-info">
                                <h2 class="product-brand">brand</h2>
                                <p class="product-short-description">a short line about the product..</p>
                                <span class="price" >Rs 200</span><span class="actual-price">Rs 250</span>
                            </div>
                        </div >
                        <div class="product-card">
                            <div class="product-image">
                                <img src={img8} class="product-thumb" alt="" />
                                <button class="card-btn">buy now</button>
                            </div>
                            <div class="product-info">
                                <h2 class="product-brand">brand</h2>
                                <p class="product-short-description">a short line about the product..</p>
                                <span class="price" >Rs 200</span><span class="actual-price">Rs 250</span>
                            </div>
                        </div >
                        <div class="product-card">
                            <div class="product-image">
                                <img src={img9} class="product-thumb" alt="" />
                                <button class="card-btn">buy now</button>
                            </div>
                            <div class="product-info">
                                <h2 class="product-brand">brand</h2>
                                <p class="product-short-description">a short line about the product..</p>
                                <span class="price"> Rs 200</span><span class="actual-price">Rs 250</span>
                            </div>
                        </div >
                        <div class="product-card">
                            <div class="product-image">
                                <img src={img10} class="product-thumb" alt="" />
                                <button class="card-btn">buy now</button>
                            </div>
                            <div class="product-info">
                                <h2 class="product-brand">brand</h2>
                                <p class="product-short-description">a short line about the product..</p>
                                <span class="price"> Rs 200</span><span class="actual-price">Rs 250</span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

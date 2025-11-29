import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="productdisplay-right">
                <h1 class="two-lines">{product.name}</h1>

                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>

                <div className="productdisplay-right-prices">
                   <div className="productdisplay-right-price-old"> ${product.old_price}</div>
                    <div className="productdisplay-right-price-new">  ${product.new_price} </div>
                </div>

               
                <div className="productdisplay-right-description">
                    A Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magni
                    id nobis officiis ut hic quod sit quibusdam, minus autem commodi delectus quidem?
                </div>

                <div className="productdisplay-right-size">
                    <h2>Select size</h2>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>

                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

                <p className='productdisplay-right-category'>
                    <span>Category :</span> Women , T-Shirt , Crop Top
                </p>

                <p className='productdisplay-right-category'>
                    <span>Tags :</span> Women , T-Shirt , Crop Top
                </p>
            </div>
        </div>
    );
};

export default ProductDisplay;

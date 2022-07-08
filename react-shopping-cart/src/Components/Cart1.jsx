import React from 'react';

const Cart1 = (props) => {
    return(
        <>
            <div class="row">
                <div class="col-md-2">
                    <div class="size-section">
                        <div class="shirt-sizes">
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="XS" />
                                    <span id="XS" class="checkmark">XS</span>
                                </label>
                            </div>
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="S" />
                                    <span id="S" class="checkmark">S</span>
                                </label>
                            </div>
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="M" />
                                    <span id="M" class="checkmark">M</span>
                                </label>
                            </div>
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="ML" />
                                    <span id="ML" class="checkmark">ML</span>
                                </label>
                            </div>
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="L" />
                                    <span id="L" class="checkmark">L</span>
                                </label>
                            </div>
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="XL" />
                                    <span id="XL" class="checkmark">XL</span>
                                </label>
                            </div>
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="XXL" />
                                    <span id="XXL" class="checkmark">XXL</span>
                                </label>
                            </div>
                            <div class="star-container">
                                <small>Leave a star on Github if this repository was useful :)</small>
                            </div>
                            <div class="star-rating">
                                <button class="star-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill star" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>Star</button>
                                  <span>
                                     <button class="num">848</button>
                                  </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-10">
                    <div className="row">
                        <div class="col-md-3">
                            <div class="cart">
                                <div class="free-shipping">Free shipping</div>
                                <img src="https://azmadeu.github.io/react-shopping-cart/static/media/Cat-Tee-Black-T-shirt.4edb5154.jpg" alt="model" />
                                <div class="title">Cat Tee Black T-Shirt</div>
                                <div class="bar"></div>
                                <div class="price">
                                    <div>
                                        <small>$</small>
                                        <b>10</b>
                                        <span>.90</span>
                                    </div>
                                    <div class="break-down">
                                        or 9x<span style={{'font-weight': "bold"}}> $ 1.21</span>
                                    </div>
                                    <div class="add-btn" id="0">Add to cart</div>
                                </div>
                            </div>
                        </div>
                            <div class="col-md-3">
                                <div class="cart">
                                    <div class="free-shipping">Free shipping</div>
                                    <img src="https://azmadeu.github.io/react-shopping-cart/static/media/DarkThug.8da09d0b.jpg" alt="model" />
                                    <div class="title">Dark Thug Blue-Navy T-Shirt</div>
                                    <div class="bar"></div>
                                    <div class="price">
                                        <div>
                                            <small>$</small>
                                            <b>29</b>
                                            <span>.45</span>
                                        </div>
                                        <div class="break-down">
                                            or 5x<span style={{'font-weight': "bold"}}> $ 5.89</span>
                                        </div>
                                        <div class="add-btn" id="1">Add to cart</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="cart">
                                    <div class="free-shipping">Free shipping</div>
                                    <img src="https://azmadeu.github.io/react-shopping-cart/static/media/Sphynx.b047a598.jpg" alt="model" />
                                    <div class="title">Sphynx Tie Dye Wine T-Shirt</div>
                                    <div class="bar"></div>
                                    <div class="price">
                                        <div>
                                            <small>$</small>
                                            <b>9</b>
                                            <span>.00</span>
                                        </div>
                                        <div class="break-down">
                                            or 3x<span style={{'font-weight': "bold"}}> $ 3.00</span>
                                        </div>
                                        <div class="add-btn" id="2">Add to cart</div>
                                    </div>
                                </div>
                            </div>
                        <div class="col-md-3">
                            <div class="cart">
                                <div class="free-shipping">Free shipping</div>
                                <img src="https://azmadeu.github.io/react-shopping-cart/static/media/Skuul.cb8727d9.jpg" alt="model" />
                                <div class="title">Skuul</div>
                                <div class="bar"></div>
                                <div class="price">
                                    <div>
                                        <small>$</small>
                                        <b>14</b>
                                        <span>.00</span>
                                    </div>
                                    <div class="break-down">
                                        or 5x<span style={{'font-weight': "bold"}}> $ 2.80</span>
                                    </div>
                                    <div class="add-btn" id="3">Add to cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cart1;
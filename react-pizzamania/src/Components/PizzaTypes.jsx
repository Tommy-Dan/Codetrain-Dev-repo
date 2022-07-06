import React from "react";

const PizzaTypes = ({title}) => {
    return(
        <>
            <div class="container pizza-types">
                <div class="row">
                    <h3 class="text-center">Pizza Types</h3>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <img src="images/alan-duran.jpeg" alt="pepperoni" />
                        <div class="caption">
                            <h3>Pepperoni Pizza</h3>
                            <p>
                                Pepperoni is an American variety of spicy salami made from 
                                cured pork and beef seasoned with paprika or other chili pepper. 
                                Prior to cooking, pepperoni is characteristically soft, slightly 
                                smoky, and bright red. Thinly sliced pepperoni is one of the most 
                                popular pizza topping.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <img src="images/brenan-greene.jpeg" alt="veg pizza" />
                        <div class="caption">
                            <h3>Vegetable Pizza</h3>
                            <p>
                                It’s fresh and full of flavor, featuring cherry tomatoes, artichoke, 
                                bell pepper, olives, red onion and some hidden (and optional) baby spinach. 
                                You’ll find a base of rich tomato sauce and golden, bubbling mozzarella underneath, 
                                of course. Truly fantastic veggie pizzas are few and far between. 
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <img src="images/ivan-torres-unsplash.jpg" alt="veg pizza" />
                        <div class="caption">
                            <h3>Cheese Pizza</h3>
                            <p>
                                Pizza cheese encompasses several varieties and types of cheeses and dairy 
                                products that are designed and manufactured for use specifically on pizza. 
                                These include processed and modified cheese such as mozzarella-like processed 
                                cheeses and mozzarella variants.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <img src="images/sheri-silver.jpeg" alt="veg pizza" />
                        <div class="caption">
                            <h3>Sheri-Silver Pizza</h3>
                            <p>
                                I made this pizza frittata recently, and it made me realize that I don’t 
                                make frittatas nearly often enough. And I don’t know why because they are 
                                the BEST.What’s a frittata? Think quiche, but without the crust.
                                I’m a fan of this “pizza” version, but feel free to riff at will. 
                                And as I do every week, I added a few drops of Oregano essential 
                                oil to beautifully
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PizzaTypes;
import React from 'react';

const AboutPizza = ({title}) =>{
    return(
        <>
        <div class="container about-pizz">
          <div class="row">
              <h2 class="text-center">About {title}</h2>
          </div>

          <div class="col-md-6">
              <img src="images/tanya-patrikeyeva.jpeg" alt="about pizza" class="img-responsive evelyn-img" />
          </div>

          <div class="col-md-6">
              <h3>Pizza is awesome</h3>
              <p>
                pizza, dish of Italian origin consisting of a flattened disk 
                of bread dough topped with some combination of olive oil, 
                oregano, tomato, olives, mozzarella or other cheese, and many 
                other ingredients.
              </p>
              <p>
                It's baked quickly—usually, in a commercial setting, using a 
                wood-fired oven heated to a very high temperature—and served hot.
                One of the simplest and most traditional pizzas is the Margherita, 
                which is topped with tomatoes or tomato sauce, mozzarella, and basil.
              </p>
              <p>
                A person who makes pizza is known as a pizzaiolo.
                In Italy, pizza served in a restaurant is presented unsliced, 
                and is eaten with the use of a knife and fork.
                In casual settings, however, it is cut into wedges to be eaten 
                while held in the hand.
              </p>
              <p>
                The term pizza was first recorded in the 10th century in a Latin 
                manuscript from the Southern Italian town of Gaeta in Lazio, on 
                the border with Campania. Modern pizza was invented in Naples, 
                and the dish and its variants have since become popular in many countries.
             </p>
             <p>
                It has become one of the most popular foods in the world and a common fast 
                food item in Europe, North America and Australasia; available at pizzerias 
                (restaurants specializing in pizza), restaurants offering Mediterranean cuisine, 
                via pizza delivery, and as street food. 
             </p>
             <p>
                Various food companies sell ready-baked pizzas, which may be frozen, in grocery stores,
                to be reheated in a home oven.
             </p>
             <p>
                In 2017, the world pizza market was US$128 billion, and in the US it was $44 billion 
                spread over 76,000 pizzerias. Overall, 13% of the U.S. population aged 2 years 
                and over consumed pizza on any given day.
             </p>
          </div>
      </div>
    </>
    );
}
export default AboutPizza;
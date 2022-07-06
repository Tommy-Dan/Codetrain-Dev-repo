import React from "react";

const Hero = (props) => {
    return(
        <>
         <div class="container-fluid">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="images/codetrainOffice.jpg" class="d-block w-100 carousel-height" alt="Codetrain building" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Codetrain Campus</h5>
                      <p>We are pleased to inform you that Codetrain has relocated to a new Campus [15a Parsnip Street, East Legon]</p>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img src="images/codetrain-teaching.jpeg" class="d-block w-100 carousel-height" alt="Live Lectures" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Live Lectures</h5>
                      <p>Codetrain most powerful Tuitor in action.</p>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img src="images/codetrain-IntWomen.jpeg" class="d-block w-100 carousel-height" alt="International women" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Celebrating International women</h5>
                      <p>Women in Tech celebrating International Women's day.</p>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img src="images/codetrain-students-2.jpeg" class="d-block w-100 carousel-height" alt="new gen" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>New Gen</h5>
                      <p>Welcome to 2022 Gen.</p>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img src="images/accra-img-5.jpg" class="d-block w-100 carousel-height" alt="accra @ 57" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Ghana @ 57</h5>
                      <p>Ghana celebrating 57 of Freedom.</p>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img src="images/codetrain-students.jpeg" class="d-block w-100 carousel-height" alt="Codetrain students" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Gen22</h5>
                      <p>Orientation of the 2022 Gen</p>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img src="images/codetrain-training-hall.jpg" class="d-block w-100 carousel-height" alt="codetrain hall" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Training Hall</h5>
                      <p>Codetrain Training Hall</p>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </button>
            </div>
          </div>
        </>
    );
}
export default Hero;
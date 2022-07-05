import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid nav-margin">
              <a class="navbar-brand navbar-size" href="#">
                <img src="images/Codetrain-logo.png" alt="Logo" class="logo-resize" />
              </a>
            <div class="country-flags">
              <a href="#">
                <img src="images/GhanaFlag.png" alt="Ghana flag" class="g-sflag-resize" />
              </a>
              <a href="#">
                <img src="images/NigeriaFlag.png" alt="Nigeria flag" class="nflag" />
              </a>
              <a href="#">
                <img src="images/Kenya-flag.png" alt="S/Leone flag" class="g-sflag-resize" />
              </a>
            </div>
              <a class="navbar-brand abt-us" href="#">ABOUT US</a>
          </div>
      </nav>

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
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="text-center plans-mr">PLANS</h2>
                </div>
            </div>
            <div class="row thumb-margin">
                <div class="col-lg-3">
                    <div class="thumbnail">
                        <img src="images/codetrain-training-hall.jpg" class="img-thumbnail" alt="Codetrain training hall" />
                        <div class="caption text-center">
                            <h6 class="thumbnail-h">Training Hall</h6>
                            <p class="txt-italic">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Ipsum sit earum quae.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="thumbnail">
                        <img src="images/codetrain-IntWomen.jpeg" class="img-thumbnail" alt="Women in Coding" />
                        <div class="caption text-center">
                            <h6 class="thumbnail-h">Women in Coding</h6>
                            <p class="txt-italic">
                               Qui sunt consequuntur alias molestias. Lorem ipsum, 
                               dolor sit amet. Qui sunt consequuntur alias molestias
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="thumbnail">
                        <img src="images/coding.jpeg" class="img-thumbnail" alt="image of lecturer" />
                        <div class="caption text-center">
                            <h6 class="thumbnail-h">Interactive Teaching</h6>
                            <p class="txt-italic">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Ipsum sit earum quae. Qui sunt consequuntur alias molestias 
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="thumbnail">
                        <img src="images/codetrain-flyer.jpg" class="img-thumbnail" alt="Flyer" />
                        <div class="caption text-center">
                            <h6 class="thumbnail-h">App Development Bootcamp</h6>
                            <p class="txt-italic"> 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row footer">
                <div class="col-lg-3 text-center">
                    <h6 class="visit-us">Visit us in Kenya</h6>
                    <a href="#" class="country-branch">Nairobi.Kenya</a>
                    <p class="counry-address">Belgravia Centre, 14 Riverside drive,
                        <br />4th floor, Off Riverside drive
                        <br />Hanover Center, 14 Riverside Drive,
                        <br />6th floor, Off Riverside Drive
                    </p>
                </div>
                <div class="col-lg-3 text-center margin-space">
                    <h6 class="visit-us">Visit us in Ghana</h6>
                    <a href="#" class="country-branch">Accra.Ghana</a>
                    <p class="counry-address">One Airport Square, Airport City
                       <br />8th Floor
                    </p>
                </div>
                <div class="col-lg-3 text-center margin-space">
                    <h6 class="visit-us">Visit us in Nigeria</h6>
                    <a href="#" class="country-branch">Lagos.Nigeria</a>
                    <p class="counry-address">Sterling Bank Building</p>
                </div>
            </div>
        </div> 
    </>
  );
}

export default App;

import React from "react";

const Plans = (props) => {
    return(
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="text-center plans-mr">
                        {props.name}
                        </h2>
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
                            <img src="images/coding.jpeg" class="img-thumbnail" alt="lecturers" />
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
        </>
    );
}
export default Plans;
    
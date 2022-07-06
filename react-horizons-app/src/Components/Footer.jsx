import React from "react";

const Footer = () => {
    return(
        <>
            <div class="container-fluid">
                <div class="row footer">
                    <div class="col-lg-3 text-center">
                        <h6 class="visit-us">Visit us in Kenya</h6>
                        <a href="#cbranch" class="country-branch">Nairobi.Kenya</a>
                        <p class="counry-address">Belgravia Centre, 14 Riverside drive,
                            <br />4th floor, Off Riverside drive
                            <br />Hanover Center, 14 Riverside Drive,
                            <br />6th floor, Off Riverside Drive
                        </p>
                    </div>
                    <div class="col-lg-3 text-center margin-space">
                        <h6 class="visit-us">Visit us in Ghana</h6>
                        <a href="#cbranch" class="country-branch">Accra.Ghana</a>
                        <p class="counry-address">One Airport Square, Airport City
                            <br />8th Floor
                        </p>
                    </div>
                    <div class="col-lg-3 text-center margin-space">
                        <h6 class="visit-us">Visit us in Nigeria</h6>
                        <a href="#cbranch" class="country-branch">Lagos.Nigeria</a>
                        <p class="counry-address">Sterling Bank Building</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;
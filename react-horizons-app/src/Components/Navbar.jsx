import React from "react";

const Navbar = (props) => {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid nav-margin">
                    <a class="navbar-brand navbar-size" href="#logo">
                        <img src="images/Codetrain-logo.png" alt="Logo" class="logo-resize" />
                    </a>
                    <div class="country-flags">
                        <a href="#ghana">
                            <img src="images/GhanaFlag.png" alt="Ghana flag" class="g-sflag-resize" />
                        </a>
                        <a href="#nigeria">
                            <img src="images/NigeriaFlag.png" alt="Nigeria flag" class="nflag" />
                        </a>
                        <a href="#slone">
                            <img src="images/Kenya-flag.png" alt="S/Leone flag" class="g-sflag-resize" />
                        </a>
                    </div>
                    <a class="navbar-brand abt-us" href="#about">
                        {props.about}
                    </a>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
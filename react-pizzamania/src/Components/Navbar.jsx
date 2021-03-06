import React from "react";

const Navbar = (props) => {
    return(
        <>
            <nav class="navbar navbar-default navbar-home">
                <div class="container-fluid">

                    {/* Brand and toggle get grouped for better mobile display */}
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#home">
                            {props.name}
                        </a>
                    </div>

                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Pizza</a></li>
                            <li><a href="#types">Pizza Types</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
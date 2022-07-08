import React from 'react';

const Navbar = (props) => {
    return(
        <>
            <div class="row">
                <div class="col-md-2">
                    <div class="size-section">
                        <h3 class="title">Sizes:</h3>
                    </div>
                </div>      
                <div class="col-md-10">
                    <div class="nav-bar">
                        <div class="col-md-6">
                            <small>
                                <span class="thick">
                                    16 Product(s) found.
                                </span>
                            </small>
                        </div>
                        <div class="col-md-6">
                            <div class="sorter">
                                <span class="thick">Order by</span>
                                    <select name="select" id="select">
                                        <option value="select">Select</option>
                                        <option value="lowestprice">Lowest to highest</option>
                                        <option value="highestprice">Highest to lowest</option>
                                    </select>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;
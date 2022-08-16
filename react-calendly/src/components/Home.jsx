import React from 'react';



function Home() {
  return (
    <>
    <section>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="easy-schedule">
                        Easy <br/> Scheduling 
                        <span className="ahead-col">ahead</span>
                    </h1>
                    <p className="h5 mt-4 calendly-p">
                        Calendly is your hub for scheduling meetings professionally
                        and efficiently, elimating the hassle of back-and-forth
                        emails so you can get bac to work.
                    </p>
                    <form className="email-container">
                        <input type="email" name="email" className="email-holder" placeholder="Enter your email" />
                        <input type="submit" value="Sign Up" className="submit-btn" />
                        <p className="pt-2">Create your free account. No credit card required</p>
                    </form>
                    
                </div>
                <div className="col-md-6">
                    <img src="https://trafft.com/wp-content/uploads/2021/11/calendly-header.jpg" alt="Calendly-header" className="p-onzoom p-3" />
                </div>
            </div>
        </div>
    </section>
    <section className="w-users">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mx-auto text-center">
                    <p className="users">
                        Simplified scheduling for more than <span className="amt-color">
                        10,000,000</span>  users worldwide
                    </p>
                </div>
                <div className="row mx-auto partners">
                    <div className="col">
                        <div>
                            <img src="https://images.ctfassets.net/k0lk9kiuza3o/2hDXRTJ8GBvGvFew8TZLSM/f15bee8de363080dd1ae486f246c7242/Compass.svg" alt="Partners-Logo" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <img src="https://images.ctfassets.net/k0lk9kiuza3o/rexKRdC9CB00Jh616eiD5/82174ec98a18d6a40478868e2a8521bf/drop.svg" alt="Partners-Logo" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <img src="https://images.ctfassets.net/k0lk9kiuza3o/2ck9ANAgxoASegsTLVaTLW/c3e53db0a0a7e0dad8b73ba75525d7ee/ebay.svg" alt="Partners-Logo" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <img src="https://images.ctfassets.net/k0lk9kiuza3o/2uC8mx63tSkNEh1Kt2Fnn3/e11a46ad74d725b2b9b68080d50b0733/Lazboy.svg" alt="Partners-Logo" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <img src="https://images.ctfassets.net/k0lk9kiuza3o/1kEJVQrmrXOhTKiZbNpGWV/d71c4890960ea1e7fbe9977f90dd7c9c/twilio.svg" alt="Partners-Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="create-share">
        <div className="container">
            <div className="row mx-auto">
                <div className="col-md-3 mx-auto">
                    <div className="v-line"></div>
                    <span className="v-line-color">1.</span>
                    <h3>Create simple rules</h3>
                    <p>Let Calendly know your availability preferences and it'll do the work for you.</p>
                </div>
                <div className="col-md-3 mx-auto">
                    <div className="v-line"></div>
                    <span className="v-line-color">2.</span>
                    <h3>Share your link</h3>
                    <p>Send guests your Calendly link or embed it on your website.</p>
                </div>
                <div className="col-md-3 mx-auto">
                    <div className="v-line"></div>
                    <span className="v-line-color">3.</span>
                    <h3>Get booked</h3>
                    <p>They pick a time and the event is added to your calendar</p>
                </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Home;
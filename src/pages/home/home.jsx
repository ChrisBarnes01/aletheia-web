import React, {Component} from 'react';
import './home.css';
import Footer from '../../components/footer/footer.jsx'
import Navbar from '../../components/navbar/navbar.jsx'


class Home extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <span class="centerJumbo">
                        <h1 class="main-title">Empowering Everyone.</h1>
                        <p class="main-subheader">We're universalizing access to the world’s information.</p>
                        <a class="btn btn-default2 btn-lg focused" data-toggle="modal" data-target="#myModal">Get a Demo</a>
                        </span>

                    </div>
                </div>
                <div class="container-fluid div-height">
                    <div class="row">
                        <div class="col-sm-4">
                        <img id="dots" src={require('./aletheia_dots.png')}></img>               
                        </div>
                        <div class="col-sm-8">
                        <div class="container-fluid">
                            <h2>Delivering Connectivity</h2>
                            <p>Less than 60% of people around the world have access to the internet. At Aletheia, we're building
                                novel technologies that allow people, around the world, to access the internet's information using devices that they already have. 
                            </p>
                            <p></p>
                            <a class="btn btn-default2 btn-lg" href="/blog">Learn how</a>
                            <p></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid bg-gray div-height">
                <div><h2 class="bg-gray">Our Platform</h2></div>
                <div class="row">
                <div class="col-sm-6">
                        <div class="container-fluid">
                            <h3>SMS delivery</h3>
                            <p>We utilize SMS technology to deliver key components of information to people. From a user standpoint, they'll text a number, and get an answer. It's that simple. 
                            </p>
                            <p></p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                        <img id="dots" src={require('./noun_cp.png')}></img>               
                        </div>
            
                    </div>
                </div>

                <div class="container-fluid bg-gray div-height">

                <div class="row">
                <div class="col-sm-6">
                        <img id="dots" height="400" src={require('./noun_db.png')}></img>               
                        </div>
                <div class="col-sm-6">
                        <div class="container-fluid">
                            <h3>Intelligent Databasing</h3>
                            <p>Our backend servers take in each text message, process it, and return the answer that people want. By combining local information within communities with global data, we 
                                make sure to always deliver the right messages. We store information that is sent to us, and allow for efficient community processing </p>
                            <p></p>
                            <a class="btn btn-default2 btn-lg" href="/blog">Learn how</a>
                            <p></p>
                            </div>
                        </div>
                        
            
                    </div>
                </div>

                <h2>Our Core Pillars</h2>
                    <div class="row text-center">
                        <div class="col-sm-3"></div>


                        <div class="col-sm-2">
                        <div class="thumbnail">
                            <img src={require('./noun_cl.png')}  height="200"></img>
                            <p><strong>Information</strong></p>
                            <p>We want to grant every individual access to the basic, simplified information that they need.</p>
                        </div>
                        </div>
                        
                        <div class="col-sm-2">
                        <div class="thumbnail">
                            <img src={require('./noun_c.png')} alt="Noun_communication" height="200"></img>
                            <p><strong>Communication </strong></p>
                                <p>We want to improve communication between community
                                members, businesses, and organizations given any environmental conditions.</p>
                        </div>
                        </div>
                        <div class="col-sm-2">
                        <div class="thumbnail">
                            <img src={require('./noun_p.png')} alt="San Francisco"  height="200"></img>
                            <p><strong>Integration </strong></p>
                            <p>We want to integrate into and interface with existing societal
                            frameworks, rather than creating new ones that are dependent upon the platform.
                        </p>
                        </div>
                        </div>
                        <div class="col-sm-3"></div>

                    </div>

                    <div class="container-fluid bg-gray">
                    <p></p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OrjSWajBGg0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <p></p>
                    </div>


                    <div class="container-fluid div-height">
                    <div class="container-fluid">
                            <h2>Partner with us</h2>
                            <p>We're working with non-profit and for-profit organizations to roll this technology out in South Africa, Guyana, Uganda, and Kenya. If your organization would like to 
                                work with us and deliver information, give us a call.
                            </p>
                            <p></p>
                            <a class="btn btn-default2 btn-lg" data-toggle="modal" data-target="#myModal">Reach out</a>
                            <p></p>

                            </div>
                </div>


                




                <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Let's Get in Touch</h4>
        </div>
        <div class="modal-body">
          <p>Enter in your email address, and we'll reach out to you</p>
          <form action="https://formspree.io/pebbletossresponse@gmail.com"
          method="POST">



            <div class="form-group">
              <label for="enterName">Your Name</label>
              <input type="text" name="name" class="form-control" id="enterName" placeholder="Name"></input>
            </div>

            <div class="form-group">
              <label for="enterEmail">Email Address</label>
              <input type="email" name="_replyto" class="form-control" id="enterEmail" placeholder="Email Address"></input>
            </div>

            <div class="form-group">
              <label for="enterEmail">Organization Name</label>
              <input type="email" name="_replyto" class="form-control" id="enterEmail" placeholder="Organization Name"></input>
            </div>

            <div class="form-group">
              <label for="enterEmail">Organization Website</label>
              <input type="email" name="_replyto" class="form-control" id="enterEmail" placeholder="Org Website(Optional)"></input>
            </div>

            <input type="submit" class="btn btn-default" value="Submit"></input>



          </form>

        </div>
        <div class="modal-footer">
        </div>
      </div>
      
    </div>
  </div>



















            </div>
        )
    }

}

export default Home;
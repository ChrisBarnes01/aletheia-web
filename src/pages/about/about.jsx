import React, {Component} from 'react';
import './about.css';
import Footer from '../../components/footer/footer.jsx'
import Navbar from '../../components/navbar/navbar.jsx'



class About extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div class="container-fluid center">
                <h2>Our Mission</h2>
                <p>At Aletheia, we're working hard to empower the world's most disconnected people,
                    and the organizations who serve them, by providing them with tools that allow for effective 
                    information excange, connection, and communication.  
                </p>
                </div>
                <div class="container-fluid center">
                <h2>About Us</h2>
                <p>
                Aletheia is a social business that is working to develop a platform that enables people around the world to connect with information and each-other in meaningful ways. We aim to create simplistic and accessible applications that re-define the ways that individuals around the world can connect with the Internet. </p>
                
                <p>The Internet is an important and necessary tool for our modern world. However, although it is critical to the lives of many, less than 50% of people around the globe have regular access to internet connectivity. Many of these individuals live in impoverished areas that have not been touched by traditional market-driven companies and services, and their quality of life could be dramatically improved by opportunities and information that are provided by the internet.  As a company, our basic  goal is to improve lives by providing novel ways to access the internet’s information. 
</p><p>There are three specific problem areas that we hope to solve with our platform. Two are focused on individuals, and are the facts that 1.) people without access to the internet lack effective knowledge of local information and ways to retrieve that information, and that they 2.) lack the ability to access global information accessible from and provided by the internet. 
	The third problem deals with organizations- namely business and nonprofits - that aspire to connect with people with limited internet access . We hope to increase the efficiency and effectiveness through which these organizations connect and communicate with the populations which they serve. Currently, these organizations rely on a variety of ineffective ways of communication; for example, Akshaya Patra, in India, utilizes hand-written mail to organize themselves and communicate externally, while Digital Green in Ethiopia utilizes technology in some places, but primarily relies on a combination of radio and in-person trained representatives. We hope that our intervention will help these organizations communicate more effectively.
    </p>
                </div>

                <div class="container-fluid center">
                <h2>Team</h2>

                 <div class="row text-center">
                        <div class="col-sm-4">
                        <div class="thumbnail">
                            <div class="crop">
                            <img class="circleImage" src={require('./rui.jpg')}  height="200"></img>
                            </div>
                            <p><strong>Rui Auigar</strong></p>
                            <p>Co-Founder</p>
                        </div>
                        </div>
                        
                        <div class="col-sm-4">
                        <div class="thumbnail">
                            <div class="crop">
                            <img class="circleImage" src={require('./austin.jpg')} alt="Noun_communication" height="200"></img>
                            </div>
                            <p><strong>Austin Bushree </strong></p>
                                <p>Co-Founder</p>
                        </div>
                        </div>
                        <div class="col-sm-4">
                        <div class="thumbnail">
                            <div class="crop">
                            <img class="circleImage" src={require('./chris.jpg')} alt="San Francisco"  height="200"></img>
                            </div>
                            <p><strong>Christain Barnes </strong></p>
                            <p>Co-Founder
                        </p>
                        </div>
                        </div>
                    </div>
                </div>


                <Footer/>







            </div>
        )
    }
}

export default About;
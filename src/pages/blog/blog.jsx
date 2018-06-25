import React, {Component} from 'react';
import './blog.css';
import Footer from '../../components/footer/footer.jsx'
import Navbar from '../../components/navbar/navbar.jsx'



class Blog extends Component{
    render(){
        return(
            <div class="background">
                <Navbar/>

                <div>
                <h2>Aletheia Blog</h2>
                </div>

                <div class="row">
                <div class="leftcolumn">
                    <div class="card">
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div class="fakeimg">
                    <img src=""></img>
                    </div>
                    <p>Some text..</p>
                    </div>
                    <div class="card">
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div class="fakeimg">Image</div>
                    <p>Some text..</p>
                    </div>
                </div>
                
                </div>

                
                <Footer/>
            </div>
        )
    }
}

export default Blog;
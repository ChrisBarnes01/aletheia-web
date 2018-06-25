import React, {Component} from 'react';
import './navbar.css';


class Navbar extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><a id="logo" href="/"><img class="img-responsive" src="https://image.ibb.co/gH3Rsy/aletheia_white.png"></img></a></li>
                    <span flex></span>
                    <li class="right entry"><a href="/blog">Blog</a></li>
                    <li class="right entry"><a href="/parnter">Partner</a></li>
                    <li class="right entry"><a href="/about">About</a></li>
                </ul>

            </div>
        )
    }
}

export default Navbar;
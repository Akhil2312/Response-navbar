import React, { Component } from 'react'
import './Footer.css'
export class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <div class="container-foot">
                    <div class="row">
                        {/* Column1 */}
                        <div className="col">
                            <h4>Contact</h4>
                            <ul className='list-unstyled'>
                                <li>Peek-Boo
                                </li>
                                <li>500 Terry Francois Street</li>
                                <li>San Francisco, CA 94158</li>
                            </ul>
                        </div>
                        {/* Column2 */}
                        <div className="col">

                            <ul className='list-unstyled'>
                                <li>Tel 123-456-7890</li>
                                <li>Email: info@peekboo.com</li>
                                <li>Book a Table</li>
                                <div class="sociallink">
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-twitter-square"></i>
                                </div>
                            </ul>
                        </div>
                        {/* Column3 */}

                        <div className="col">
                            <h4>For Foodies</h4>
                            <ul className='list-unstyled'>
                                <li>Code Of Contact</li>
                                <li>Community</li>
                                <li>Blogger Help</li>
                                <li>Mobile App</li>
                            </ul>
                        </div>

                    </div>
                        <hr/>
                        <div className='row'>
                        <p className="col-sm">
                             By continuing past this page, you agree to our Terms of Service, Cookie Policy, 
                             Privacy Policy and Content Policies.
                            All trademarks are properties of their respective owners. 2008-
                            {new Date().getFullYear()} &copy; Peek-Boo<sup>TM</sup> Ltd.All rights reserved.
                        </p>
                        </div>
                </div>
            </div>
        )
    }
}

export default Footer



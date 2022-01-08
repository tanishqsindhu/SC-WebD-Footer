import React from 'react'
import footer from './footer.module.css';
import logo from './logo-footer.png';

const Footertop = () => {
    return(
        <div className = {footer.body}>
            <footer>
                <div className={footer.container}>
                    <div className={footer.sec,footer.aboutus}>
                        <a href="#"><img src={logo} className={footer.logo} alt ="logo"/></a>
                        <p>Ladidapp is a design studio founded in London and expanded our
                            services, and offering solutions Worldwide.</p>
                        <ul className={footer.sci}>
                            <li><a href="#" class="fa fa-twitter"></a></li>
                            <li><a href="#" class="fa fa-facebook"></a></li>
                            <li><a href="#" class="fa fa-instagram"></a></li>
                        </ul>
                    </div>
                    <div className={footer.sec,footer.quickLinks}>
                        <h2>Important Links</h2>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Compare Services</a></li>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div class={footer.sec,footer.quickLinks}>
                        <h2>Learning Lessons</h2>
                        <ul>
                            <li><a href="#">Tutorials</a></li>
                            <li><a href="#">Compare Services</a></li>
                            <li><a href="#">How It Works</a></li>
                            <li><a href="#">F.A.Q</a></li>
                        </ul>
                    </div>
                    <div className={footer.sec,footer.quickLinks}>
                        <h2>Our Policy</h2>
                        <ul>
                            <li><a href="#">Application Security</a></li>
                            <li><a href="#">Software Principles</a></li>
                            <li><a href="#">Responsible Supply Chain</a></li>
                            <li><a href="#">Software Policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
                <div className={footer.copyrightText}>
                    <hr/>
                    <p>2021 © Zytheme.All Rights Reserved.</p>
                </div>
        </div>
    )
}
export default Footertop
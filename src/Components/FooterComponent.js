import React from 'react';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <footer className = "site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link className="linkBlack" to='/home'>Home</Link></li>
                            <li><Link className="linkBlack" to='/markets'>Markets</Link></li>
                            <li><Link className="linkBlack" to='/analysis'>Analysis</Link></li>
                            <li><Link className="linkBlack" to='/crypto'>Crypto</Link></li>
                        </ul>     
                    </div>
                    <div className="col-6 col-sm-5 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://www.instagram.com/captains_tavern"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/captainstavernodessa/"><i className="fa fa-facebook" /></a>{' '}
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="linkBlack " href="tel:+8133284835"><i className="fa fa-phone" /> 813.328.4835</a><br />
                        <a role="button" className="linkBlack" href="mailto:staff@captainstavern.pub"><i className="fa fa-envelope-o" /> staff@captainstavern.pub</a>
                    </div>         
                </div>
            </div>
        </footer>
    );
}

export default Footer;
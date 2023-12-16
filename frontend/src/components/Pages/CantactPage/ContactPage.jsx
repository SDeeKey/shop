import React, {Component} from 'react';
import cerved from '../../../img/lines/curved line.svg'
import whypointIcon from '../../../img/icon/whypointIcon.svg'
import phoneIcon from '../../../img/icon/PhoneIcon.svg'
import mailIcon from '../../../img/icon/mailIcon.svg'
import BoorivaImage from '../../../img/randimg/booriva_location.png'
import GoogleMap from "../../GoogleMap/GoogleMap";
import {Link} from "react-router-dom";
import locationButton from "../../../img/btn/locationButton.svg";
import './ContactPage.scss'
import Usp from "../../Usp/Usp";
import Instagram from "../../Instagram/Instagram";


const ContactPage = () => {

    // Функция для построения маршрута
    const buildRoute = () => {
        const destination = "50.468271506989495,30.514615626985847";
        const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
        window.open(routeUrl, '_blank');
    };

    return (
        <section className='contact'>
            <div className="contentContacts">

                <div className="mainContent">
                    <div className="leftSideBar">
                        <h2>Контакты</h2>
                        <div className="secondLine">
                            <p>КОНТАКТЫ</p>
                            <img className='cerved' src={cerved} alt="cerved"/>
                        </div>
                        <div className="address">
                            <img src={whypointIcon} alt="whypointIcon"/>
                            <p>г.Киев, ул. Нижний вал, 37 <br/>
                                Ежедневно с 11:00 до 21:00</p>
                        </div>
                        <div className="phone">
                            <img src={phoneIcon} alt="phoneIcon"/>
                            <p>+38 063 843 34 71</p>
                        </div>
                        <div className="mail">
                            <img src={mailIcon} alt="mailIcon"/>
                            <p>hello@www.booriva.com</p>
                        </div>
                    </div>

                    <div className="button" onClick={buildRoute}>
                        <img className='locationButton' src={locationButton} alt=""/>
                    </div>

                    <div className="map">
                        <GoogleMap size="large"/>
                    </div>

                    <div className="image">
                        <img className='BoorivaImage' src={BoorivaImage} alt="BoorivaImage"/>
                    </div>

                </div>

            </div>
            <div className="usp">
                <Usp/>
            </div>
            <div className="instagram">
                <Instagram/>
            </div>
        </section>
    );
}

export default ContactPage;
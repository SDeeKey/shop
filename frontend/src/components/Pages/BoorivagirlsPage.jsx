import React from 'react';
import cerved from './../../img/lines/curved line.svg'
import boorivaFirstImage from './../../img/randimg/boorivaFirstImage.png'
import boorivaSecondImage from './../../img/randimg/boorivaSecondImage.png'
import boorivaThirdImage from './../../img/randimg/boorivaThirdImage.png'
import boorivaFourthImage from './../../img/randimg/boorivaFourthImage.png'
import boorivaFifthImage from './../../img/randimg/boorivaFifthImage.png'
import boorivaSixthImage from './../../img/randimg/boorivaSixthImage.png'
import boorivaEighthImage from './../../img/randimg/boorivaEighthImage.png'
import boorivaNinthImage from './../../img/randimg/boorivaNinthImage.png'


import instagram from "./../../img/btn/Instagram.svg";

import './BoorivagirlsPage.scss'


const BoorivagirlsPage = () => {
    return (
        <section className="booriva">
            <div className="contentBooriva">
                <div className="upperTextBar">
                    <h2>BOORIVAGIRLS</h2>
                    <div className="secondLine">
                        <p>#BOORIVAGIRLS</p>
                        <img src={cerved} alt=""/>
                    </div>
                    <p className='description'>Мы обожаем встречать booriva на улице. <br/>
                        Так как всех не встретишь, отмечай нас в соц.сетях <br/>
                        и мы внутри взорвемся и закричим УРА!</p>
                    <div className="imagesFirstColumn">
                        <img className='boorivaFirstImage' src={boorivaFirstImage} alt="boorivaFirstImage"/>
                        <img className='boorivaFourthImage' src={boorivaFourthImage} alt="boorivaFourthImage"/>
                        <div className="lowerTextBar">
                            <p>Ставь тэг <span className="colortext">#boorivagirls </span> чтобы быть <br/>
                                в нашей тусовке.</p>

                            <button className="instagram">
                                <a href="https://www.instagram.com/">
                                    <img src={instagram} alt=""/>
                                </a>
                            </button>

                        </div>
                    </div>
                </div>

                <div className="imagesSecondColumn">
                    <img className='boorivaSecondImage' src={boorivaSecondImage} alt="boorivaSecondImage"/>
                    <img className='boorivaFifthImage' src={boorivaFifthImage} alt="boorivaFifthImage"/>
                    <img className='boorivaEighthImage' src={boorivaEighthImage} alt="boorivaEighthImage"/>
                </div>
                <div className="imagesThirdColumn">
                    <img className='boorivaThirdImage' src={boorivaThirdImage} alt="boorivaThirdImage"/>
                    <img className='boorivaSixthImage' src={boorivaSixthImage} alt="boorivaSixthImage"/>
                    <img className='boorivaNinthImage' src={boorivaNinthImage} alt="boorivaNinthImage"/>
                </div>
            </div>
        </section>
    );
}

export default BoorivagirlsPage;
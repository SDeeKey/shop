import React, {useEffect} from 'react';
import './EmptyWishlistModal.scss';
import brokenHeart from './../../img/lines/brokenHeart.svg'
import toHome from './../../img/btn/toHome.svg'
import redCross from './../../img/btn/red cross.svg'
import {ROUTES} from "../../utils/routes";
import {Link} from "react-router-dom";

const EmptyWishlistModal = ({onClose}) => {


    return (
        <div className="emptyWishlistModal" onClick={onClose}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                <button className="closeButton" onClick={onClose}>
                    <img src={redCross} alt="Закрыть"/>
                </button>
                <h2>Список желаний</h2>
                <p className='secretWishlist'>Твой тайный список желаний</p>
                <div className="modalBody">
                    <img className='brokenHeart' src={brokenHeart} alt="Broken Heart"/>
                    <p className='textUnderHeart'>Похоже тебе еще ничего не запало в сердечко...</p>
                    <Link className='toHome' to={ROUTES.HOME}>
                        <img src={toHome} alt="На главную"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmptyWishlistModal;

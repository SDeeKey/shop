import './footer.scss'
import logo_footer from '../../img/icon/logo_red.png'
import inst_Icon from '../../img/icon/instagram_Icon 1.svg'
import facebook_Icon from '../../img/icon/facebook_Icon 1.svg'
import feedback_img from '../../img/icon/feedback_img.png'
import {ROUTES} from "../../utils/routes";
import {Link} from "react-router-dom";


function Footer() {
    return <footer className='footer'>
        <div className="container_footer">
            <div className="content_footer">
                <Link to={ROUTES.HOME}>
                    <img className='logo_footer' src={logo_footer} alt="logo_footer"/>
                </Link>
                <div className="info">
                    <span>Инфо</span>
                    <Link to={ROUTES.CONTACTS}>
                        <p>Контакты</p>
                    </Link>
                    <Link to={ROUTES.LOYALSYSTEM}>
                        <p>Система лояльности</p>
                    </Link>
                    <Link to={ROUTES.REFUND}>
                        <p>Обмен и возврат</p>
                    </Link>
                    <Link to={ROUTES.DELIVERY}>
                        <p>Доставка и оплата</p>
                    </Link>
                </div>
                <div className="address">
                    <span>НАШ АДРЕС</span>
                    <p>г.Киев, ул. Нижний Вал, 37</p>
                    <p>Пн — Вс: с 11:00 до 21:00</p>
                </div>
                <div className="media">
                    <span>СОЦ.СЕТИ</span>
                    <div className="icons">
                        <a href="https://www.instagram.com/">
                            <img className='inst_Icon' src={inst_Icon} alt="inst_Icon"/>
                        </a>
                        <a href="https://facebook.сом">
                            <img className='facebook_Icon' src={facebook_Icon} alt="facebook_Icon"/>
                        </a>
                    </div>
                </div>
                <div className="feedback">
                    <img className="feedback_img" src={feedback_img} alt="feedback_img"/>
                    <div className="feedback_text">
                        <p>Нам важно знать,<br/>что ты думаешь про нас! <br/>Просто напиши мне!</p>
                        <a href="https://vk.com/00sdk" className="text_me">Написать Иванке</a>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="rights">
                    Deleveped by {""}
                    <a href="https://vk.com/00sdk"
                       target="_blank"
                       rel="noreferrer"
                    >
                        Denis Shmelew
                    </a>
                </div>
            </div>
        </div>
    </footer>

}

export default Footer;
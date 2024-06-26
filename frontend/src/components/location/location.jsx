import './location.scss'
import booriva from '../../img/randimg/booriva_location.png'
import Line_S from '../../img/lines/line_S.svg'
import Line from '../../img/lines/Line.svg'
import Heart_location from '../../img/lines/heart_location.svg'
import Wavy_line from '../../img/lines/wavy_line.svg'
import Arrow from '../../img/lines/arrow.svg'
import Arc from '../../img/lines/arc.svg'
import locationButton from '../../img/btn/locationButton.svg'

import GoogleMap from "../GoogleMap/GoogleMap.jsx";


function Location() {
    // Функция для построения маршрута
    const buildRoute = () => {
        const destination = "50.468271506989495,30.514615626985847";
        const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
        window.open(routeUrl, '_blank');
    };

    return (
        <section className='Location'>
            <div className='container_location'>
                <div className="content_location">
                    <div className="firstLine">
                        <p className='BOORIVA_STORE'>BOORIVA <br/>STORE</p>
                        <p className='address'>г.Киев, ул. Нижний вал, 37 <br/>Ежедневно с 11:00 до 21:00</p>
                        <img className='booriva' src={booriva} alt="booriva"/>
                        <p className='info'>Ты можешь заказать примерку понравившейся вещи или просто заглянуть, гуляя
                            по
                            Подолу, и примерять что-то из в наличии</p>
                        <img className='Line_S' src={Line_S} alt="Line_S"/>
                        <img className='Line' src={Line} alt="Line"/>
                        <img className='Heart_location_1' src={Heart_location} alt="Heart_location"/>
                        <img className='Wavy_line' src={Wavy_line} alt="Wavy_line"/>
                        <img className='Arc_1' src={Arc} alt="Arc_1"/>
                        <img className='Arc_2' src={Arc} alt="Arc_2"/>

                    </div>
                    <div className="secondLine">
                        <img className='Arrow_1' src={Arrow} alt="Arrow"/>
                        <img className='Arrow_2' src={Arrow} alt="Arrow"/>
                        <img className='Heart_location_2' src={Heart_location} alt="Heart_location"/>
                        <div className='button' onClick={buildRoute}>
                            <img className='locationButton' src={locationButton} alt="locationButton"/>
                        </div>
                        <div className="map">
                            <GoogleMap size="small"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Location;
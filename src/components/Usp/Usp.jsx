import './Usp.scss'
import Cat from './../../img/icon/Cat.png'
import Box from './../../img/icon/wing_box.png'
import Needle_heart from './../../img/icon/needle_heart.png'


function Usp() {
    return (
        <section className="Usp">
            <div className="container_Usp">
                <div className="content_Usp">
                    <div className="first_block">
                        <img src={Cat} alt="Cat"/>
                        <div className="underline_block_1">
                            <span className='Cat_line_1'>Отправка <br/>день в день</span>
                            <span className='Cat_line_2'>При заказе до 18<sup>oo</sup></span>
                        </div>
                    </div>
                    <div className="second_block">
                        <img src={Box} alt="Box"/>
                        <div className="underline_block_2">
                            <span className='Box_line_1'> Легкий <br/>возврат/обмен</span>
                            <span className='Box_line_2'>В течении 14 дней</span>
                        </div>
                    </div>
                    <div className="third_block">
                        <img src={Needle_heart} alt="Needle_heart"/>
                        <div className="underline_block_3">
                            <span className='Heart_line_1'>Сделано <br/>в Украине</span>
                            <span className='Heart_line_2'>Прям в Киеве</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Usp;
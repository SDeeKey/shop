import './Instagram.scss'
import ForInst_1 from '../../img/randimg/ForInst_1.png'
import ForInst_2 from '../../img/randimg/ForInst_2.png'
import ForInst_3 from '../../img/randimg/ForInst_3.png'
import ForInst_4 from '../../img/randimg/ForInst_4.png'
import ForInst_5 from '../../img/randimg/ForInst_5.png'


function Instagram() {
    return (
        <section className='Instagram'>
            <div className="container_Instagram">
                <div className="content_Instagram">
                    <div className="header_instagram">
                        <span className='upperText_header'>Instagram</span>
                        <span
                            className='lowerText_header'>Мы в экстазе, когда ты нас отмечаешь) <br/>Отмечай плз чаще</span>
                    </div>
                    <img className='ForInst_1' src={ForInst_1} alt="ForInst_1"/>
                    <img className='ForInst_2' src={ForInst_2} alt="ForInst_2"/>
                    <img className='ForInst_3' src={ForInst_3} alt="ForInst_3"/>
                    <img className='ForInst_4' src={ForInst_4} alt="ForInst_4"/>
                    <img className='ForInst_5' src={ForInst_5} alt="ForInst_5"/>
                    <div className="footer_instagram">
                        <span className='upperText_footer'>#boorivagirls</span>
                        <span className='lowerText_footer'>Ставь тэг чтобы быть в нашей <br/>тусовке.</span>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Instagram;
import './categories.css';
import t_shirt from './../../img/clothes/T_shirt.svg';
import dress from './../../img/clothes/dress.svg';
import suit from './../../img/clothes/suit.svg';
import bottom from './../../img/clothes/bottom.svg';
import outerwear from './../../img/clothes/outerwear.svg';
import hoodie from './../../img/clothes/hoodie.svg';
import brush_t_shirt from './../../img/clothes/brush_effect_t_shirt.svg'
import brush_dress from './../../img/clothes/brush_effect_dress.svg'
import brush_suit from './../../img/clothes/brush_effect_suit.svg'
import brush_bottom from './../../img/clothes/brush_effect_bottom.svg'
import brush_outerwear from './../../img/clothes/brush_effect_outerwear.svg'
import brush_hoodie from './../../img/clothes/brush_effect_hoodie.svg'

function Categories () { 

    return <section className='categories'>
        <div className='container__categories'>
            <div className='categories_content'>
                <div className='img_T_Shirt'>
                    <p>Футболки</p>
                    <img className='brush_t_shirt' src={brush_t_shirt} alt='brush_t_shirt'></img>
                    <img src={t_shirt} alt='t_shirt'></img>
                </div>
                <div className='img_Dresses'>
                    <p>Платья</p>
                    <img className='brush_dress' src={brush_dress} alt='brush_dress'></img>
                    <img src={dress} alt='dress'></img>
                </div>
                <div className='img_Suits'>
                    <p>Костюмы</p>
                    <img className='brush_suit' src={brush_suit} alt='brush_suit'></img>
                    <img src={suit} alt='suit'></img>
                </div>
                <div className='img_Bottom'>
                    <p>Низ</p>
                    <img className='brush_bottom' src={brush_bottom} alt='brush_bottom'></img>
                    <img src={bottom} alt='bottom'></img>
                </div>
                <div className='img_Outerwear'>
                    <p>Верх</p>
                    <img className='brush_outerwear' src={brush_outerwear} alt='brush_outerwear'></img>
                    <img src={outerwear} alt='outerwear'></img>
                </div>
                <div className='img_Hoodie'>
                    <p>Худи</p>
                    <img className='brush_hoodie' src={brush_hoodie} alt='brush_hoodie'></img>
                    <img src={hoodie} alt='hoodie'></img>
                </div>

            </div>
        </div>
    </section>
}
export default Categories;
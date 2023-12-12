import './categories.scss';
import t_shirt from '../../img/clothes/T_shirt.svg';
import dress from '../../img/clothes/dress.svg';
import suit from '../../img/clothes/suit.svg';
import bottom from '../../img/clothes/bottom.svg';
import outerwear from '../../img/clothes/outerwear.svg';
import hoodie from '../../img/clothes/hoodie.svg';
import T_shirtsBrush from '../../img/clothes/T-shirts(Brush).png'
import DressBrush from '../../img/clothes/Dresses(Brush).png'
import SuitBrush from '../../img/clothes/Suits(Brush).png'
import BottomBrush from '../../img/clothes/Bottom(Brush).png'
import OuterwearBrush from '../../img/clothes/Top(Brush).png'
import HoodieBrush from '../../img/clothes/Hoodies(Brush).png'

function Categories() {

    return <section className='categories'>
        <div className='container__categories'>
            <div className='categories_content'>
                <div className='img_T_Shirt'>
                    <img className='textT_shirt' src={T_shirtsBrush}/>
                    <img src={t_shirt} alt='t_shirt'></img>
                </div>
                <div className='img_Dresses'>
                    <img className='textDress' src={DressBrush}/>
                    <img src={dress} alt='dress'></img>
                </div>
                <div className='img_Suits'>
                    <img className='textSuit' src={SuitBrush}/>
                    <img src={suit} alt='suit'></img>
                </div>
                <div className='img_Bottom'>
                    <img className='textBottom' src={BottomBrush}/>
                    <img src={bottom} alt='bottom'></img>
                </div>
                <div className='img_Outerwear'>
                    <img className='textOuterwear' src={OuterwearBrush}/>
                    <img src={outerwear} alt='outerwear'></img>
                </div>
                <div className='img_Hoodie'>
                    <img className='textHoodie' src={HoodieBrush}/>
                    <img src={hoodie} alt='hoodie'></img>
                </div>
            </div>
        </div>
    </section>
}

export default Categories;
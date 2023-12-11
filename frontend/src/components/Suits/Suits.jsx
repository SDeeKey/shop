import './Suits.scss'
import curved_line from "../../img/lines/curved line.svg";
import Suit_1 from '../../img/randimg/Suit_1.png'
import Suit_2 from '../../img/randimg/Suit_2.png'
import Suit_3 from '../../img/randimg/Suit_3.png'
import Suit_4 from '../../img/randimg/Suit_4.png'
import SeeAll from "../../img/btn/SeeAll.png";
import Price1899 from '../../img/icon/1899.png'
import Price899 from '../../img/icon/899.png'


function Suits() {
    return (
        <section className='Suits'>
            <div className='container__Suits'>
                <div className="suits_content">
                    <div className="titleBlock">
                        <p className='first_line'>Костюмы</p>
                        <div className="underTitle">
                            <p className='second_line'>Костюмы</p>
                            <img className='curved_line' src={curved_line} alt='curved line'></img>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="Suit_1" style={{backgroundImage: Suit_1}}>
                            <img className='Image_Suit_1' src={Suit_1} alt="Suit_1"/>
                            <img className='Price1899_suit_1' src={Price1899} alt="Price1899"/>
                            <img className='Price899_suit_1' src={Price899} alt="Price899"/>
                        </div>
                        <div className="Suit_2" style={{backgroundImage: Suit_2}}>
                            <img className='Image_Suit_2' src={Suit_2} alt="Suit_2"/>
                            <img className='Price1899_suit_2' src={Price1899} alt="Price1899"/>
                            <img className='Price899_suit_2' src={Price899} alt="Price899"/>
                        </div>
                        <div className="Suit_3" style={{backgroundImage: Suit_3}}>
                            <img className='Image_Suit_3' src={Suit_3} alt="Suit_3"/>
                            <img className='Price1899_suit_3' src={Price1899} alt="Price1899"/>
                            <img className='Price899_suit_3' src={Price899} alt="Price899"/>
                        </div>
                        <div className="Suit_4" style={{backgroundImage: Suit_4}}>
                            <img className='Image_Suit_4' src={Suit_4} alt="Suit_4"/>
                            <img className='Price1899_suit_4' src={Price1899} alt="Price1899"/>
                            <img className='Price899_suit_4' src={Price899} alt="Price899"/>
                        </div>

                    </div>
                    <div className='button'>
                        <img src={SeeAll} alt="SeeAll"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Suits;
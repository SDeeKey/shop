import Card from '../card/Card.jsx';
import curved_line from './../../img/lines/curved line.svg'
import SeeAll from './../../img/btn/SeeAll.png'
import Sweatshirt from './../../img/clothes/Sweatshirt.png'
import sheer_dress from './../../img/clothes/sheer_dress.png'
import bomber_jacket from './../../img/clothes/bomber_jacket.png'
import T_shirt_dress from './../../img/clothes/T-shirt_dress.png'
import './novelties.scss';

function Novelties() {
    return <section className='novelties'>
        {/* Cамый большой контейнер, поторый вмещает всю информацию про новинки */}
        <div className='container__novelties'>
            {/* Контейнер, который вмещает название(Новинки и кривулю) */}
            <div className="titleBlock">
                <p className='first_novelties'>НОВИНКИ</p>
                <div className="underTitle">
                    <p className='second_novelties'>Новинки</p>
                    <img className='curved_line' src={curved_line} alt='curved line'></img>
                </div>
            </div>
            {/* Контейнер, который вмещет все карточки */}
            <div className='novelties_card'>
                {/* Конкретные карточки */}

                <Card title="Cвитшот вставка клетка" price="1099" img={Sweatshirt} width="360px" height="530px"/>
                <Card title="Платье прозрачное в цветочек черное" price="1299" img={sheer_dress} width="360px"
                      height="530px"/>
                <Card title="Бомбер Gone Crazy хаки" price="2499" img={bomber_jacket} width="360px" height="530px"/>
                <Card title="Платье-футболка рыбы в аквариуме" price="899" img={T_shirt_dress} width="360px"
                      height="530px"/>
            </div>
            <div className='button'>
                <img src={SeeAll} alt="SeeAll"/>
            </div>
        </div>
    </section>
}

export default Novelties;
import './NewCollection.scss'
import Banner from './../../img/randimg/Banner.svg'

function NewCollection() {
    return (
        <section className='NewCollection'>
            <div className='container__NewCollection'>
                <img className='NewCollection_content' src={Banner} alt="Banner"/>
            </div>
        </section>
    )
}

export default NewCollection;
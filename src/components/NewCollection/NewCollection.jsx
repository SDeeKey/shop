import './NewCollection.css'
import Banner from './../../img/randimg/Banner.svg'

function NewCollection() {
    return (
        <section className='NewCollection'>
            <div className='container__NewCollection'>
                <div className='NewCollection_content'>
                    <img src={Banner} alt="Banner"/>
                </div>
            </div>
        </section>
    )
}

export default NewCollection;
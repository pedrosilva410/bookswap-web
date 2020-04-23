import React from 'react';
import './styles.css'
import search from '../../assets/SVG/search.svg'

export default function Home() {
    return(
        <main>
            <section className="section1">
                <form className='home__form'>
                    <input placeholder="Seach Book" className='search__input' type="text"/>
                    <input placeholder="Location" className='location__input' type="select"/>
                    <div className="vline"></div>
                    <button className="search__btn"><img className='search__img' src={search} alt="search button"/></button>
                </form>
                <p className='p__cat'>categories</p>
            </section>
            <section></section>
        </main>
    )
}
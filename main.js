import React from 'react';
import SearchIcon from './searchIcon';
import Card from './card';

const cards = [
    {fillColor: "#BB86FC", name: 'Name', species: 'Species'},
    {fillColor: "#BB86FC", name: 'Name', species: 'Species'},
    {fillColor: "#01A39D", name: 'Name', species: 'Species'},
    {fillColor: "#4B01D1", name: 'Name', species: 'Species'},
    {fillColor: "#BB86FC", name: 'Name', species: 'Species'},
    {fillColor: "#01A39D", name: 'Name', species: 'Species'},
    {fillColor: "#4B01D1", name: 'Name', species: 'Species'},
    {fillColor: "#BB86FC", name: 'Name', species: 'Species'},
    {fillColor: "#01A39D", name: 'Name', species: 'Species'},
    {fillColor: "#4B01D1", name: 'Name', species: 'Species'},
]
const Main = () => {
    return <div className="main__container">
            <div className="form__group">
                <div className="input__form">
                    <label>
                        <input type="text" required className="search"/>
                        <div className="label__text">Search by name</div>
                        <SearchIcon/>
                    </label>
                </div>
            </div>
        <section className="cards" data-modal="#modal__project">
        {cards.map(elem => <Card {...elem}/>)}
        </section>
    </div>
}

export default Main
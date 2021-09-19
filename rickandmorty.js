import React from 'react'
import Rickandmortycard from './rickandmortycard';
import Rickandmortyfooter from './rickandmortyfooter';
import Rickandmortyheader from './rickandmortyheader';

class RickandMorty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],

        }
    }

    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character")
            .then(rep => rep.json())
            .then(data =>
                this.setState({
                    characters: data.results
                })
            )
    }

    render() {
        return (
            <React.Fragment>
                <div className='main-container'>
                    <main>
                        <Rickandmortyheader />
                        <section className='card-section'>
                            {this.state.characters.map((items) => {
                                return <Rickandmortycard item={items} />
                            })}
                        </section >
                        <Rickandmortyfooter />
                    </main>
                </div>
            </React.Fragment >
        )
    }
}
export default RickandMorty;
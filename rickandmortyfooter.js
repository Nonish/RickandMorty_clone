import React from 'react'
import githubLogo from "./git_mammal.png"
import heartLogo from "./heart_like.png"
import twitterLogo from "./twitter.png"
import netlifyLogo from "./netlify.png"

export default class Rickandmortyfooter extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <footer className='footer'>
                <ul className='footer-list_1'>
                    <a href="https://rickandmortyapi.com/api/character">CHARACTER:671</a>
                    <a href="https://rickandmortyapi.com/api/location">LOCATIONS:108</a>
                    <a href="https://rickandmortyapi.com/api/epiosde">EPISODES:41</a>
                </ul>

                <a href="">SERVER STATUS</a>

                <ul className='footer-list_2'>
                    <a href="https://github.com/afuh/rick-and-morty-api">
                        <img src={githubLogo} alt="Github" />
                    </a>
                    <a href="https://twitter.com/rickandmortyapi">
                        <img src={twitterLogo} alt="Twitter" />
                    </a>
                    <a href="https://rickandmortyapi.com/help-us/">
                        <img src={heartLogo} alt="Like" />
                    </a>
                </ul>

                <div href='https://axelfuhrmann.com/'>
                    <img src={netlifyLogo} alt="netlify" />
                </div>
                <p>❮❯ by<a href='https://axelfuhrmann.com/'>Axel Furhmann</a>2021</p>
            </footer>
        )
    }
}


import React from 'react'
import logo from "./rick-and-morty-logo.jpg";

export default class Rickandmortyheader extends React.Component {

    render() {
        return (
            <header className='header'>
                <nav className='nav-bar'>
                    <a href='http://localhost:3000/#'>
                        <img src={logo} alt="logo" />
                    </a>
                    <ul className='nav-ul'>
                        <a href='#'>
                            Docs
                        </a>
                        <a href='#'>
                            About
                        </a>
                        <a href='#'>
                            HELP US
                        </a>
                    </ul>
                </nav>
                <div className='header-article'>
                    <article className='header-article'>
                        <h1>
                            The Rick and Morty API
                        </h1>
                    </article>
                </div>
            </header>
        )
    }
}


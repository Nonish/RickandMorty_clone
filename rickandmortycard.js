import React from 'react'

export default class Rickandmortycard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    componentDidMount() {

        fetch(this.props.item.episode[0])
            .then(resp => resp.json())
            .then(epiArr =>
                this.setState({
                    name: epiArr.name
                }))
    }

    render() {
        // console.log(this.props.item.episode);

        return (

            <div className='card'>
                <img src={this.props.item.image} />
                <div className='card-left'>
                    <div className='left-box'>
                        <h2>
                            <a href='#'>{this.props.item.name}</a>
                        </h2>
                        <span></span><span>{this.props.item.status}-{this.props.item.species}</span>
                    </div>
                    <div>
                        <p>Last Known Location:</p>
                        <h3>
                            <a href='#'>{this.props.item.location.name}</a>
                        </h3>
                    </div>
                    <div>
                        <p>First seen in:</p>
                        <h3>
                            <a href='#'>{this.state.name}</a>
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}


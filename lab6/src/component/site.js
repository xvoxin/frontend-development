import React, { Component } from 'react';


class Titles extends Component {

    constructor(items) {
        super()
        this.items = items
    }

    render() {
        return<ul>{this.props.items}</ul>
    }

}

// class Details extends Component {

//     componentDidMount() {
//         this.timerId = setInterval( handler () => {
//             this.tick()
//         }), timeout 1000)
//     }

//     tick() {
//         this.setState( state: {
//             date: new Date()
//         })
//     }

// }

export default Titles
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class componentName extends Component {
    render() {
        return (
            <div>
                <h1>Finance Manager</h1>
                <Link to="/login">Login</Link>
            </div>
        )
    }
}

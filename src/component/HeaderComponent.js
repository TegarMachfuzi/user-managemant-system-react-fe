import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    constructor(proops){
        super(proops)

        this.state = {

        }
    }
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div><a href='https://personal-portofolio-tegar.netlify.app/' className='navbar-brand'>User Managemant App</a></div>
        </nav>
        
      </div>
    )
  }
}

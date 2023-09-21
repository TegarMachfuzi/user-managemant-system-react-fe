import React, { Component } from 'react'

export default class FooterComponent extends Component {

    constructor(proops){
        super(proops)

        this.state = {

        }
    }
  render() {
    return (
      <div>
        <footer className='footer'>
            <span className='text-muted'>All Rights Reserved 2023 @Tegar</span>
            </footer>   
      </div>
    )
  }
}

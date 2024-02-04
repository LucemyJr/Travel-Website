import React, { Component } from 'react'
import './Destination.css'

class DestinationData extends Component {
  render(){
    return(
        <div className="destination">
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="des-image">
                    <img src={this.props.img1} alt="Image of Pernambuco 1" />
                    <img src={this.props.img2} alt="Image of Pernambuco 2" />
                </div>
            </div>
        </div>
    )
  }
}

export default DestinationData
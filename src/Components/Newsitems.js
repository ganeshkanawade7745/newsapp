import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {

     let {title,description} = this.props;


    return (
     <>
      <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="US intel assess 'major' strategy shift by Russia as it moves some forces away from Kyiv - CNN"alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
     </>
    )
  }
}

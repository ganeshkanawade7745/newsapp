import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {

     let {title,description} = this.props;


    return (
     <>
       <div className="card" style={{width: '18rem'}}>
          <img src="https://gaadiwaadi.com/wp-content/uploads/2020/03/2020-Maruti-Suzuki-Dzire-Facelift-2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
     </>
    )
  }
}
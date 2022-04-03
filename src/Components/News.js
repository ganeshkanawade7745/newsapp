import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
  render() {
    return (
        <>
        <div className="Container my-4">
          <div className="row">
            <div className="col-md-4">
                <Newsitems title="News" description="this is discription"/>
            </div>
            <div className="col-md-4">
                <Newsitems title="News" description="this is discription"/>
            </div>
            <div className="col-md-4">
                <Newsitems title="News" description="this is discription"/>
           </div>
          </div>
          <div className="row">
            <div className="col-md-4">
                <Newsitems title="News" description="this is discription"/>
            </div>
            <div className="col-md-4">
                <Newsitems title="News" description="this is discription"/>
            </div>
            <div className="col-md-4">
                <Newsitems title="News" description="this is discription"/>
           </div>
          </div>
          <div className="row">
            <div className="col-md-4">
                <Newsitems title="News" description="this is discription"/>
            </div>
            <div className="col-md-4">
                <Newsitems title="News" description="this is discription"/>
            </div>
            <div className="col-md-4">
                <Newsitems title="News" description="this is discription"/>
           </div>
          </div>

       
      
      </div> 
      </>
    )
  }
}


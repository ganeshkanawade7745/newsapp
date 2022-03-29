import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
  render() {
    return (
        <>
        < div className="container">
            <div className="rows">
                <div className="col-nd-4">
                <Newsitems title="main news" description="this is news description"/>
 
                </div>
                <div className="col-nd-4">
                <Newsitems title="main news" description="this is news description"/>
 
                </div>
                <div className="col-nd-4">
                <Newsitems title="main news" description="this is news description"/>
 
                </div>
            </div>
        
      <div>this is news component</div>
      <Newsitems title="main news" description="this is news description"/>
      <Newsitems/>
      <Newsitems/>
      </div>
      </>
    )
  }
}

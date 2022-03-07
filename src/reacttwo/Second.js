import React, { Component } from 'react'

export default class Second extends Component {
  render() {
    return (
      <>
         <div className="body">
         <div className="heading">Employee Feedback Page</div>
             <br /><br />

            <div className="container3">
             {this.props.feedback.map((item,index)=>{
                return(
               <div key={index} className='container4' >
               Name : {item.name} || Department :  {item.dept} || Rating {item.rating}
      
              </div>
                ) 
                })}
            </div> 
            <div>
                <button onClick={this.props.toggleFunc} className='btn2'> Go Back</button>
            </div>
            </div>
      </>
    )
  }
}


import React, { Component } from 'react';
import Second from "./Second";
import "./style.css"




    class Forms extends Component {
       
        state={
            name:"",
            dept:"",
            rating:"",
            user:[],
            showDetails: true,
        }
    
    
        handleChange=(event)=>{
            this.setState({
            [event.target.name]:event.target.value
        })
        }
    
        handleSubmit=(event)=>{
            event.preventDefault()
            console.log(this.state);
    
            var tempArr=[]
            console.log(tempArr);
            var tempObj={
            name: this.state.name,
            dept: this.state.dept,
            rating: this.state.rating
            }
    
            tempArr=this.state.user
            tempArr.push(tempObj)
            this.setState({user:tempArr})
            this.setState({name:'',dept:'',rating:''})
            this.setState({showDetails: !this.state.showDetails})
            console.log(this.state.user);
        }
    
         SecondForm = ()=>{
          this.setState({showDetails: !this.state.showDetails});
        }
    
      render() {
        return (
          <>    
            {this.state.showDetails?
             <div className='maincontainer'>
             <h1>Employee Feedback Form :</h1>
             <form>
                 <div>
             <label for="name" className='cont'>Name :</label>
             <input className="hold" type="text" id="name" name="name" placeholder="name" onChange={this.handleChange} value={this.state.name} />
                 </div>

             <div>
             <label for="dept" className='cont'>Dept :</label>
               <input className="hold"  type="text" id="dept" name="dept" placeholder="dept" onChange={this.handleChange}  value={this.state.dept} />
             </div>
      
             <div>
             <label for="rating" className='cont'>Rating :</label>
             <input className="hold" type="text" id="rating" name="rating" placeholder="rating" onChange={this.handleChange}  value={this.state.rating} />
             </div>
             <button className='btn' onClick={this.handleSubmit}>Submit</button>
                    </form>
              </div>
    
           
          : <Second feedback={this.state.user}  toggleFunc={this.SecondForm} />
          }
    
          </>
        )
      }
    }
  export default Forms
  
import React from 'react'
import axios from 'axios'

export default class Form extends React.Component{
    constructor(props){
      super(props) 
       
    }
    
    body;
    title;

        addData = (e) => {
            e.preventDefault()
          axios.post('https://jsonplaceholder.typicode.com/posts', {
             body: this.body.value,
             title: this.title.value      
          })  
               console.log(this.body.value);
            
        }     
           

    render(){
      return(
        <div>
          <form>
            <input type='text' ref={element => this.body = element} />
            <input type='text' ref={element => this.title = element}/>  
            <button onClick={(e) => this.addData(e)}>Add</button>
          </form>  
        </div>  
      )  
    }
}
import React from "react"
import axios from "axios"

export default class C2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response.data)
            this.setState({posts:response.data })
        })
    }
    
    render(){

        return(
            <div>
             {/* {JSON.stringify(this.state.posts)}    */}
            <ul>
                {this.state.posts.map((val) =>  <li>{val.title}</li>
                )}
            </ul>
            </div>
        )
        
    }
}

import React, { Component } from 'react'
import Input from "./Input"
 class Focusinput extends Component {
     constructor(props) {
         super(props)
         this.compRef = React.createRef()
     }

     ClickRef = () =>{
         this.compRef.current.FocusRef()
     }
    render() {
        return (
            <div>
                <Input ref={this.compRef}/>
                <button onclick={this.ClickRef}>Focus Input</button>
            </div>
        )
    }
}

export default Focusinput

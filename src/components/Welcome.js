
import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        return (
            <div>
                <h1>Hi {this.props.name}, {this.props.position}</h1>
            </div>
        )
       
    }
}

export default Welcome;
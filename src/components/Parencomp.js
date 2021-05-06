
import React, { Component} from 'react'
import Childcomp from './Childcomp'
class Parencomp extends Component {
    constructor(props) {
        super(props)
        this.state= {
            person:'hello'
        }
    }

    Getperson() {
        alert(`thiraphat, ${this.state.person}`)
    }
    render() {
        return (
            <div>
             <Childcomp Getperson={()=> this.Getperson()}/>
            </div>   
        )
    }
}
export default Parencomp;


import React, { Component } from 'react';
import Register from './RegisterComponent'
import Purecomponent from './Purecomponent'
import Memocomp from './Memocomp'

class ParenTComp extends Component {
        constructor(props) {
        super(props)
        this.state = {
            name:'thiraphat',
            age:20,
            school:'NangRong'
        }   
    }

    componentDidMount() {
        setInterval( 
            this.setState({
                name:"boaty",
                age:18,
                school:'home'
            })
        , 3000);
    }

    
    render() {
        return (
            <div>
                <Memocomp age={this.state.age}/>
                {/* Parent Component
                <Register name={this.state.name} age={this.state.age} school={this.state.school}/>
                <Purecomponent name={this.state.name} age={this.state.age} school={this.state.school}/> */}
            </div>
        );
    }
}

export default ParenTComp;
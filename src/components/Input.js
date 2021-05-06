
import React, { Component } from 'react'


 class Input extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    


    }
    FocusRef() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} placeholder="Please INPUT TEXT"/>
            </div>
        )
    }
}

export default Input

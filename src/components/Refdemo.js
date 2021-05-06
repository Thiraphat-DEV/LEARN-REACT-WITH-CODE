
import React, { Component } from 'react';

class Refdemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef() //สั่งให้ React สร้างตัว Referent
        this.cbRef = null

        this.setCbRef = (elem) =>{
            this.cbRef =  elem
        }
    }
    
    componentDidMount() {
        this.inputRef.current.focus()


        if(this.cbRef) {
            this.cbRef.focus();
        }
    }
        Clickenter() {
            alert(this.inputRef.current.value)
        }
    render() {
        return (
            <div>
               <input type="text" placeholder="กรอกเข้าไป" ref={this.inputRef}/>
               <input type="text" placeholder="ว่าไงไอ่สอง" ref={this.setCbRef}/>
               <button onClick={this.Clickenter}>Click Here</button>  
            </div>
        );
    }
}

export default React.memo(Refdemo);
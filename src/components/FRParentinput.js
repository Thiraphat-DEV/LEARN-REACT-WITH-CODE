import React, { Component } from 'react'
import FRinput from "./FRinput"
class FRParentinput extends Component {
    constructor(props) {
        super(props)
        this.InputRef = React.createRef();//referent ทั้งก้อนใน FRinput
    }

    clickHandler = () =>{
        this.InputRef.current.focus();//ให้มีการ focus ไปที่กล่องของ FRinput
    }
    render() {
        return (
            <div>
                {/* ดึง FRinput มาเเสดงโดยดึงจากตัวแปรInput Ref*/}
                <FRinput ref={this.InputRef}/>
                {/* เมื่อกดคลิกให้ focus ไปที่กล่องของ FRinput */}
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentinput
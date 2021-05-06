import React, {Component} from "react";

class EventB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg:'hello boaty'
        }
        this.Clickhere = this.Clickhere.bind(this);
    }

    Clickhere() {
        this.setState({
            msg:'hello chorakhe'
        })

    }
    render() {
    return (
    <div>
        <div>{this.state.msg}</div>
        {/* วิธีเเรก  ควรเรียกใช้ method bind() เมื่อมีการใช้ this เเล้วส่งค่าเป็น function*/}
        {/* <button onClick={this.Clickhere.bind(this)}>Click</button>  */}
        {/* วิธีสอง  ควร return เป็น callback function ไปเลย*/}
        {/* <button onClick={()=> this.Clickhere()}>Click</button>  */}
        {/* วิธีสาม  ควร ผูกค่า this ไว้ใน constructor เเต่เเรก*/}
        <button onClick={this.Clickhere}>Click</button> 
    </div>);
  }
}

export default EventB;


import React, {Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
            comment:'',
            choice:'Gsap'
        }
    }

    HandleChangeUsername = (event) =>{
        this.setState ({
            username: event.target.value
           
        })
    }    
    HandlePass= (event) =>{
        this.setState ({
            password: event.target.value
           
        })
    }
    HandleComment = (event) =>{
        this.setState ({
            comment: event.target.value
           
        })
    };


    HandleChange = (event) =>{
        this.setState({
            choice: event.target.value
        })
    }
    HandleSubmit = (event) => {
            //จะไม่มีการRefresh ของหน้า page จะมีผลก็ต่อเมื่อ scroll ยาวมากๆมันจะทำให้ scroll นั้นถูกเลื่อน
        event.preventDefault()
    
       alert(`${this.state.username}, ${this.state.password}, ${this.state.comment}, ${this.state.choice}`)

    }
    render() {
        const { username, password, comment} = this.state//ควรเก็บค่าที่ได้จากการทำเป็น function เป็น object เพื่อชีวิตที่ดี
    return (
        <form onSubmit={this.HandleSubmit}>
            <div>
            <label>UserName</label>
            <input type="text" value={username} onChange={this.HandleChangeUsername}/>  
            </div>          
            <div>
            <label>PassWord</label>
            <input type="password" value={password} onChange={this.HandlePass} />            
            </div>
            <div>
            <label>Comment</label>
            <textarea value={comment} onChange={this.HandleComment}></textarea>            
            </div>
            <div>
                <label>CHOICE LANG</label>
                <select value={this.state.choice} onChange={this.HandleChange}>
                    <option value="React">React</option>
                    <option value="Gsap">Gsap</option>
                    <option value="FlexBox">FlexBox</option>
                    <option value="Vue JS">Vue JS</option>
                </select>
            </div>
            <div>
                <button type="submit" >SEND TO LANGUAGE</button>
            </div>
        </form>
    )
    }
}
export default Form

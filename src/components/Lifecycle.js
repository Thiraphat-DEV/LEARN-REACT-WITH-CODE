
import React, {Component} from 'react'
import Lifecycle1 from "./Lifecycle1"

class lifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'thiraphat',
            age:19

        }
        console.log('this state')
    }


    static getDerivedStateForProps(props, state) {
        console.log('Hello Boaty')
        return null
    }

    componentDidMount(){
        console.log('HI BRO')
    }
    shouldComponentUpdate() {
        console.log('update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('getSnapshortupdate')
        return null
    }
    componentDidUpdate() {
        console.log('Component Did Update')
    }
      changeState = ()=> {
        this.setState ({
            name:'chorakhe',
            age:20
        })
    }
    render()  {
    console.log('render')

        return (
        <div>
            <div>
            LifeCycle Thiraphat
            </div>
            <button onChange={ this.changeState}>Change State</button>
            <Lifecycle1 />
        </div>
    )
}
  
}
export default lifecycle

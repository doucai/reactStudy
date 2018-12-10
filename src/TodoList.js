import React ,{Component} from 'react'
import {connect} from 'react-redux'


class TodoList extends Component{
    constructor(props){
        super(props)
        this.handleButtonClick=this.handleButtonClick.bind(this)
    }

    render(){
        return (
            <div>
                <input 
                value={this.props.inputValue}  
                onChange={this.props.handleInputChange.bind(this)}
                />
                <button onClick={this.handleButtonClick}>提交</button>
                <ul>
                    <li>123</li>
                </ul>
            </div>
        )
    }
    
    handleButtonClick(){
        console.log(123)
    }

   
}

const mapStateToProps =(state)=>{
    return {
        inputValue:state.inputValue
    }
}

//dispatch = store.dispatch
const mapDispachToProps = (dispatch)=>{
    return{
        handleInputChange(e){
            console.log(e.target.value)
            const action ={
                type:"change_input_value",
                value:e.target.value
            }
            dispatch(action)
        }
    }
}

//connect功能是连接,TodoList与mapStateToProps,mapDispachToProps相互关联
export default connect(mapStateToProps,mapDispachToProps)(TodoList);
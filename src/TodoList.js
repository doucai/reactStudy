import React ,{Component} from 'react'
import {connect} from 'react-redux'

const TodoList = (props)=>{
    const {inputValue,handleInputChange,handleButtonClick,list} =props;
    return (
        <div>
            <input 
            value={inputValue}  
            onChange={handleInputChange.bind(this)}
            />
            <button onClick={handleButtonClick.bind(this)}>提交</button>
            <ul>
                {
                list.map((item,index)=>{
                    return (
                        <li key={index}>{item}</li>
                    )
                })
                }
            </ul>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

//dispatch = store.dispatch
const mapDispachToProps = (dispatch)=>{
    return{
        handleInputChange(e){
            const action ={
                type:"change_input_value",
                value:e.target.value
            }
            dispatch(action)
        },
        handleButtonClick(){
            const action ={
                type:"add_item"
            }
            dispatch(action)
        }
    }
}

//connect功能是连接,TodoList与mapStateToProps,mapDispachToProps相互关联/映射
export default connect(mapStateToProps,mapDispachToProps)(TodoList);
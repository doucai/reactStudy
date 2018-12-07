import React,{Component} from 'react'
import {Input,List,Button} from 'antd'
import store from './store'
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'
import {getInputChangeAction,getAddTodoItem,getDeleteTodoItem} from './store/actionCreators'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state=store.getState()
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleStoreChange=this.handleStoreChange.bind(this)
        this.handleButclick = this.handleButclick.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    handleInputChange(e){
        const action=getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleStoreChange(){
        this.setState(store.getState())
    }

    handleButclick(){
        const action=getAddTodoItem()
        store.dispatch(action)
    }

    onhandleClick(index){
        const action=getDeleteTodoItem(index)
        store.dispatch(action)
    }
    
    render () {
        return(
            <div>
                <Input 
                value={this.state.inputValue} 
                placeholder="Basic usage" 
                size="large" 
                style={{width:'30vw'}}
                onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleButclick}>Primary</Button>
                <List
                bordered
                style={{width:'30vw'}}
                dataSource={this.state.list}
                renderItem={(item,index) => (<List.Item onClick={this.onhandleClick.bind(this,index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList
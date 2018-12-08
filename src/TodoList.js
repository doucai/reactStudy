import React,{Component} from 'react'
import store from './store'
import {getInputChangeAction,getAddTodoItem,getDeleteTodoItem} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state=store.getState()
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleStoreChange=this.handleStoreChange.bind(this)
        this.handleButclick = this.handleButclick.bind(this)
        this.onhandleClick=this.onhandleClick.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    render () {
        return(
          <TodoListUI 
          inputValue={this.state.inputValue}
          list={this.state.list}
          handleInputChange={this.handleInputChange}
          handleButclick={this.handleButclick}
          onhandleClick={this.onhandleClick}
          />
        )
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
}

export default TodoList
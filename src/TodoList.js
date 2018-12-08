import React,{Component} from 'react'
import store from './store'
import {getInputChangeAction,getAddTodoItem,getDeleteTodoItem,initListDataaction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

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
    //数据获取
    componentDidMount(){
      axios.get('https://www.easy-mock.com/mock/5ae2b3c4ab5bad29ce810a51/example/reactdemo')
      .then((res)=>{
        console.log(res)
        const data=res.data
        this.getInitListDataAction(data)
      })
      .catch()
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

    getInitListDataAction(data){
      const action=initListDataaction(data)
      store.dispatch(action)
    }
}

export default TodoList
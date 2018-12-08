import React,{Component} from 'react'
import {Input,List,Button} from 'antd'

class TodoListUI extends Component{
    render(){
        return(
            <div>
            <Input 
            value={this.props.inputValue} 
            placeholder="Basic usage" 
            size="large" 
            style={{width:'30vw'}}
            onChange={this.props.handleInputChange}
            />
            <Button type="primary" onClick={this.props.handleButclick}>Primary</Button>
            <List
            bordered
            style={{width:'30vw'}}
            dataSource={this.props.list}
            renderItem={(item,index) => (<List.Item onClick={(index)=>{this.props.onhandleClick(index)}}>{item}</List.Item>)}
            />
        </div>
        )
    }
}

export default TodoListUI ;
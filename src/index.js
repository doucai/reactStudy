import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux'
import store from './store'

const App =(
    //Provider内的所有的组件都有能力拿到store的功能
    <Provider store={store}>
        <TodoList />
    </Provider>
)
    

ReactDOM.render(App, document.getElementById('root'));

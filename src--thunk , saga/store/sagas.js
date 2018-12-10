import {takeEvery,put} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes'
import {initListDataaction} from './actionCreators'
import axios from 'axios'

function* getInitList() {
    try{
        const res=yield axios.get('https://www.easy-mock.com/mock/5ae2b3c4ab5bad29ce810a51/example/reactdemo')
        const action = initListDataaction(res.data)
        yield put(action)
    }catch(e){
        console.log("失败")
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
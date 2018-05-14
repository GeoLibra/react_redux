import ajax from '../services/ajax';
//命名空间,对普通action做划分
const prefix='apple/';

let actions={
    pickApple:()=>(dispatch,getState)=>{
        //如果正在摘苹果,则结束这个thunk,不执行摘苹果
        if(getState().isPicking){
            return;
        }
        //通知开始摘苹果
        dispatch(actions.beginPickApple());
        //发送摘苹果请求
        ajax({
            url:'/appleBasket/pickApple',
            method:'GET'
        }).done(data=>{
            dispatch(actions.donePickApple(data.weight));
        }).fail(error=>{
            dispatch(actions.failPickApple(error));
        });
    },
    beginPickApple:()=>({
        type:'apple/BEGIN_PICK_APPLE'
    }),
    donePickApple:appleWeight=>({
        type:'apple/DONE_PICK_APPLE',
        payload:appleWeight
    }),
    failPickApple:errMsg=>({
        type:'apple/FAIL_PICK_APPLE',
        payload:new Error(errMsg),
        error:true
    }),
    eatApple:appleId=>({
        type:'apple/EAT_APPLE',
        payload:appleId
    })
};
export default actions;
/**
 *
 * let FSA = {
    type: 'ACTION_NAME',
    payload: <bool | number | string | object>, //action的负载，可以是数据或 error 对象
    error: <bool>, // 指明该action是否是一个以 error 为负载的action
    meta: <string> // action元数据， 包含解释该action含义的信息
        }
 */



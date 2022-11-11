import service from '../service.js'
import qs from 'qs'

export function login(data){
    return service({
        method:'post',
        url:'/login',
        data
    })
}

export function students(params){
    return service({
        method:'get',
        url:'/students',
        params
    })
}

export function studentDel(id){
    return service({
        method:'delete',
        url:`/students/${id}`
    })
}

//信息列表新增 和修改
export function info(type,data){
    data =qs.stringify(data)
    let obj ={method: type,url:'/info',data}
    return service(obj)
}
// export function updateInfo(data){
//     data =qs.stringify(data)
//     return service({
//         method:'put',
//         url:'/info',
//         data
//     })
// }
export function getInfo(){
    return service({
        method:'get',
        url:'/info',
    })
}
export function infoDel(id){
    return service({
        method:'delete',
        url:`/info/${id}`
    })
}

// 数据概览接口
export function dataview() {
    return service({
        method: 'get',
        url: '/dataview'
    })
}

// 旅游地图接口
export function travel() {
    return service({
        method: 'get',
        url: '/travel'
    })
}
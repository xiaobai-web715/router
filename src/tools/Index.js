export function localParam(search , hash){
    // search如果是传值的话就用传来的值计算，如果没有传值，就默认window.location.search也就是url后面的？后面的那部分
    search = search || window.location.search
    // hash的话没有传值就默认通过window.location.hash获取url#后面的那部分不包括？后面的
    hash = hash || window.location.hash
    //下面这个函数是吧？后面的那部分通过正则转化成一个json对象，这样就可以去使用了
    var fn = function(str , reg){
        if(str){
            var data = {};
            str.replace(reg , function($0 , $1 , $2 , $3){
                data[$1] = $3
            })
            return data
        }
    }
    return{
        search : fn(search , new RegExp("([^?=&]+)(=([^&]*))?" , "g")) || {},
        hash : fn(hash , new RegExp("([^#=&]+)(=([^&]*))?" , "g")) || {}
    }
}
import request from  "./index.js";


export function getTopBanners(){
    return request({
        url: "/banner"
    })
}
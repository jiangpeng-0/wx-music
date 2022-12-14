const BASE_URL="http://123.207.32.32:9001";
class WXRequest{
  request(url,method,params){
    return new Promise((resolve,reject)=>{
      wx.request({
        url: BASE_URL+url,
        method,
        data:params,
        success(res){
          resolve(res.data)
        },
        fail:reject
      })
    })
  }
  get(url,params){
    return this.request(url,"GET",params)
  }
  post(url,data){
    return this.request(url,"POST",data)
  }
}
const wsRequest = new WXRequest()
export default wsRequest;
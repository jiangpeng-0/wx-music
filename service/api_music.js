import wxRequest from "./index"

export const getBanners=()=>{
  return wxRequest.get("/banner",{type:1})
}

export const getTopList=(idx)=>{
  return wxRequest.get("/top/list",{idx})
}

export const getSongMenu=(cat="全部",limit=8,offset=0)=>{
  return wxRequest.get("/top/playlist",{
    cat,
    limit,
    offset
  })
}
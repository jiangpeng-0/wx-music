import wxRequest from "./index"

export const getMvData=(offset,limit=10)=>{
  return wxRequest.get("/top/mv",{offset,limit})
}

export const getMvUrl=(id)=>{
  return wxRequest.get("/mv/url",{id})
}

export const getMvDetail=(id)=>{
  return wxRequest.get("/mv/detail",{id})
}

export const getAllMv=(id)=>{
  return wxRequest.get("/related/allvideo",{id})
}
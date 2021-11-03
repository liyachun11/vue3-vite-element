import axios from 'axios'

//字典--分类
export const getTypeList = params => {
  return axios.get(`${axios.MSG_BASE_CENTER}/dic/typeList`).then(res => res)
};
//字典项
export const getTypeItemList = params => {
  return axios.get(`${axios.MSG_BASE_CENTER}/dic/typeItemList?typeCode=${params}`).then(res => res.data)
}
//渠道--下拉列表
export const getChannelAllChannel = params => {
  return axios.get(`${axios.MSG_BASE_CENTER}/channel/getAllChannel?orgId=${params}`).then(res => res.data)
}
//增--渠道
export const addChannelSave = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/channel/save`, params).then(res => res)
};
//改--渠道
export const addChannelupdate = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/channel/update`, params).then(res => res)
};
//删--渠道
export const getDelete = params => {
  return axios.get(`${axios.MSG_BASE_CENTER}/channel/delete/${params}`).then(res => res)
};
//查--渠道
export const getDetail = params => {
  return axios.get(`${axios.MSG_BASE_CENTER}/channel/detail/${params}`).then(res => res)
};
//列表
export const getchannelList = params => {
  console.log(99999, axios.MSG_BASE_CENTER)
  return axios.post(`${axios.MSG_BASE_CENTER}/channel/list`, params).then(res => res)
};
//模板--列表
export const getTemplateList = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/template/list`, params).then(res => res)
}
//模板--增
export const addTempalte = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/template/save`, params).then(res => res)
}
//模板--详
export const getTemplateDetail = params => {
  return axios.get(`${axios.MSG_BASE_CENTER}/template/detail/${params}`).then(res => res)
}
//模板--改
export const updateTemplate = params => {
  return axios.get(`${axios.MSG_BASE_CENTER}/template/updateStatus?status=${params.status}&id=${params.id}`).then(res => res)
}
//模板--编辑
export const gettemplateupdate = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/template/update`, params).then(res => res)
}
//模板--删
export const templateDelete = params => {
  return axios.get(`${axios.MSG_BASE_CENTER}/template/delete/${params}`).then(res => res)
}
//应用--列表
export const getAppList = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/app/list`, params).then(res => res)
}
//应用--增
export const getAppSave = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/app/save`, params).then(res => res)
}
//应用--详情
export const getAppdetail = params => {
  return axios.get(`${axios.MSG_BASE_CENTER}/app/detail/${params}`).then(res => res)
}
//应用--编
export const getAppUpdate = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/app/update`, params).then(res => res)
}
//应用--启/停
export const getAppUpdateStatus = params => {
  return axios.get(`${axios.MSG_BASE_CENTER}/app/updateStatus?id=${params.id}&status=${params.status}`).then(res => res)
}
//应该--模板选择
export const gettemplateSelectAll = params => {
  return axios.get(`${axios.MSG_BASE_CENTER}/template/selectAll/${params}`).then(res => res)
}
//柱子--统计图
export const getChannelAnalysis = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/channel/channelAnalysis`, params).then(res => res)
}
//饼状图
export const getpieChartChannel = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/channel/pieChartChannel`, params).then(res => res)
}
//表格
export const gettableChannel = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/channel/tableChannel`, params).then(res => res)
}
//数据总览---数据
export const getDataStatistics = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/screening/dataStatistics`, params).then(res => res)
}
//数据总览---趋势图
export const getchartStatistics = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/screening/chartStatistics`, params).then(res => res)
}
//数据总览---表格
export const gettableStatistics = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/screening/tableStatistics`, params).then(res => res)
}
//应用分析--图
export const getApplicationMessage = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/application/applicationMessage`, params).then(res => res)
}
//应用分析--表格
export const getApplicationTable = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/application/applicationTable`, params).then(res => res)
}
//消息记录
export const getmessagePage = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/message/page`, params).then(
    res => res
  )
}
//消息记录--详情
export const getmessagePageDetail = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/message/pageDetail`, params).then(
    res => res
  )
}
//消息--全部
export const getOffLineMes = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/message/getOffLineMes`, params).then(res => res)
}
//消息--未读
export const getUnRead = params => {
  return axios.post(`${axios.MSG_BASE_CENTER}/message/getUnRead`, params).then(res => res)
}
//消息--已读
export const updateStatus = params => {
  return axios.get(`${axios.MSG_BASE_CENTER}/message/updateStatus?msgId=${params.msgId}&userId=${params.userId}`, params).then(res => res)
}

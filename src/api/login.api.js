import axios from 'axios'
import qs from 'qs';
//登录相关接口
//获取验证码
export const getQrCode = params => {
  return axios.get(`${axios.VERIFY_BASE_API}/captcha`, params).then(res => res)
}
//登录验证
export const login = params => {
  return axios.post(`${axios.AUTH_BASE_API}/oauth/token`, qs.stringify(params)
  // ,{
  //   transformRequest: [function (data) {
  //     let params = '';
  //     for(let key in data){
  //       params += key+'='+data[key]+'&';
  //     }
  //     return params.substr(0, params.length-1);
  //   }]
  // }
  ,{
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }
  ).then(res => res)
}
//根据用户id获取密码修改提示
export const getPassWordInfoPoint = params => {
  return axios.get(`${axios.MANAGE_BASE_API}/passWordInfoPoint/getPoint?userId=`+params).then(res => res)
}
//获取用户功能模块
export const getUserApplys = params => {
  return axios.get(`${axios.MANAGE_BASE_API}/sysUsers/userApplys?id=`+params).then(res => res)
}
//获取菜单
export const sysUsersfindUserRes = params => {
  return axios.post(`${axios.MANAGE_BASE_API}/sysUsers/findUserResTree`,params).then(res => res)
}
//修改密码
export const sysUsersupdateUserPassword = params => {
  return axios.post(`${axios.MANAGE_BASE_API}/sysUsers/updateUserPassword`,params).then(res => res)
}
// 企业注册
export const registerCompany = params => {
  return axios({
    method: 'post',
    url: `${axios.ENTERPRISE_BASE_API}/safetyEnterprise/save`,
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: params
  })
}
// 获取token
export const getToken = params => {
  return axios.get(`${process.env.API_ROOT}/sso/auth/checkOauth/${params.userId}/${params.code}`).then(res => res)
}
// 获取用户拥有的资源
export const getQueryResource = params => {
  return axios.post(`${axios.CONTROL_BASE_API}/sso/queryResource`, params).then(res => res)
}
// 获取当前用户下的组织信息
export const getCurUserOrgList = params => {
  return axios.get(`${axios.CONTROL_BASE_API}/sso/getOrgList`).then(res => res)
}
// 切换组织
export const changeOrg = params => {
  return axios.get(`${axios.CONTROL_BASE_API}/sso/changeCurrentOrg?orgId=${params.orgId}`).then(res => res)
}
// 获取机构、项目、部门
export const getOrgList = params => {
  return axios.post(`${axios.CONTROL_BASE_API}/sso/getChildrens`, params).then(res => res)
}
// 获取机构(仅机构)
export const getOnlyOrgList = params => {
  return axios.get(`${axios.CONTROL_BASE_API}/sso/getOrgListByPid?pid=${params.pid}`).then(res => res)
}
// 获取机构/父项目下所有的标准项目
export const getProjectList = params => {
  return axios.get(`${axios.CONTROL_BASE_API}/sso/getAllStandardProject?orgId=${params.orgId}`).then(res => res)
}
// 获取标准WBS
export const getWbsList = params => {
  return axios.post(`${axios.CONTROL_BASE_API}/workunit/getWBSTree`, params).then(res => res)
}

// 获取组织下人员
export const getOrgUserList = params => {
  return axios.post(`${axios.CONTROL_BASE_API}/sso/getOrgUser`, params).then(res => res)
}

// 获取通讯录 根据组织id获取子级（机构获取子机构与部门/项目获取子项目）
export const getAddressList = params => {
  return axios.post(`${axios.CONTROL_BASE_API}/sso/getAddressList`, params).then(res => res)
}

// 获取通讯录 根据组织id获取下列人员（部门获取人员/项目获取人员）
export const getAddressListPerson = params => {
  return axios.post(`${axios.CONTROL_BASE_API}/sso/getAddressListPerson`, params).then(res => res)
}

// 获取接口调用token，用于校验重复提交
export const getApiToken = params => {
  return axios.get(`${axios.CONTROL_BASE_API}/token/apiToken`, params).then(res => res)
}

// 获取文件名称
export const getFile = params => {
  return axios.post(`${axios.CONTROL_BASE_API}/file/queryByFileId`, params).then(res => res)
}

// 根据项目id获取行业类型
export const getIndustryTypeCode = params => {
  return axios.get(`${axios.CONTROL_BASE_API}/sso/getIndustryTypeCode?projectId=${params.projectId}`).then(res => res)
}

// 获取组织详情
export const getPorjectInfo = params => {
  return axios.get(`${axios.CONTROL_BASE_API}/sso/getPorjectInfo?projectId=${params.projectId}`).then(res => res)
}

// 获取当前节点到根节点组织信息
export const getUpOrgList = params => {
  return axios.get(`${axios.CONTROL_BASE_API}/sso/getUpOrgList?orgId=${params.orgId}`).then(res => res)
}
import { get, post } from './http';


/**
 * @param {String} code
 * @param {String} nick
 * @param {String} headImg
 * @description 微信登录 
 */
export const wxLogin = async (code,nick,headImg)=>{
    try {
        return await post('/wx/wxlogin',{code,nick,headImg},true);
    } catch (error) {
        return error
    }
};

/**
 * @param {String} userId 举报人Id
 * @param {String} address 省市区地址
 * @param {String} addressDetail 详细地址
 * @param {String} happenDate 发生时间
 * @param {String} personReported 举报的人或者事儿
 * @param {String} content 举报的内容
 * @param {String} requirement 受理要求
 * @param {String} soundRecord 录音
 * @param {String} imgUrl 附件图片
 * @param {String} name 实名举报姓名
 * @param {String} idCard 实名举报身份证号
 * @param {String} mobile 实名举报手机
 * @param {String} type 举报类型  1 匿名举报  2  实名举报
 * @description 举报
 */
export const addAccusation = async (userId,address,addressDetail,happenDate,personReported,content,requirement,soundRecord,imgUrl,name,idCard,mobile,type)=>{
    try {
        return await post('/wx/addAccusation',{
            userId,
            address,addressDetail,
            happenDate,personReported,
            content,requirement,
            soundRecord,imgUrl,
            name,idCard,mobile,type
        },true);
    } catch (error) {
        return error;
    }
};

/**
 * @param {Number} pageNum 页数
 * @param {Number} pageSize 大小
 * @param {Number} userId 用户id
 * @description 查询举报列表
 */
export const getAccusations = async (pageNum,pageSize,userId)=>{
    try {
        return await post('/wx/queryAccusation',{pageNum,pageSize,userId},true)
    } catch (error) {
        return error;
    }
};

/**
 * 
 * @param {Number} pageNum 
 * @param {Number} pageSize 
 * @description 查询法律法规
 */
export const getLaws = async (pageNum,pageSize) =>{
    try {
        return await post('/wx/queryPolicy',{pageNum,pageSize},true)
    } catch (error) {
        return error
    }
};

/**
 * 
 * @param {Number} pageNum 
 * @param {Number} pageSize
 * @description 查询市域治理 
 */
export const getAreas = async (pageNum,pageSize) => {
    try {
        return await post('/wx/queryGover',{pageNum,pageSize},true);
    } catch (error) {
        return error;
    }
};

/**
 * 
 * @param {Number} pageNum 
 * @param {Number} pageSize
 * @description 查询反邪防邪 
 */
export const getXieJiaos = async (pageNum,pageSize) => {
    try {
        return await post('/wx/queryEvil',{pageNum,pageSize},true)        
    } catch (error) {
        return error
    }
};

/**
 * 
 * @param {String} name 
 * @param {String} nameUrl 
 * @param {Number} userId 
 * @description 添加签名
 */
export const addSign = async (name,nameUrl,userId) => {
    try {
        return await post('/wx/addAutograph',{name,nameUrl,userId},true)
    } catch (error) {
        return error
    }
};

/**
 * @description 查询签名信息
 */
export const getSigns = async () => {
    try {
        return await post('/wx/queryAutograph',{},false)
    } catch (error) {
        return error
    }
};

/**
 * 
 * @param {Number} userId 
 * @description 查询签到积分
 */
export const getScores = async(userId)=>{
    try {
        return await post('/wx/getSignInInfo',{userId},true);
    } catch (error) {
        return error
    }
};

/**
 * 
 * @param {Number} integralRuleId 
 * @param {Number} userId 
 * @description 签到
 */
export const signNote = async (integralRuleId,userId) =>{
    try {
        return await post('/wx/addRecord',{integralRuleId,userId},true);
    } catch (error) {
        return error;
    }
};
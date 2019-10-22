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
 * @param {Number} pageNum 
 * @param {Number} pageSize 
 * @description 查询维护稳定
 */
export const getWeiWeng = async (pageNum,pageSize) => {
    try {
        return await post('/wx/querySteady',{pageNum,pageSize},true)        
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
 * @description 查询自己的签名信息
 * @param {Number} userId 
 */
export const getMySelfSign = async (userId) => {
    try {
        return await post('/wx/queryAutographById',{userId},true)
    } catch (error) {
        return error;
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

/**
 * 
 * @param {Number} pageNum 
 * @param {Number} pageSize 
 * @param {Number} userId
 * @param {String} startTime 
 * @description 查询积分来源
 */
export const getScoreHistory = async (pageNum,pageSize,userId,startTime) => {
    try {
        return await post('/wx/queryIntegralRecord',{pageNum,pageSize,userId,startTime},true)
    } catch (error) {
        return error
    }
};

/**
 * @description 查询积分消费记录
 * @param {Number} pageNum 
 * @param {Number} pageSize 
 * @param {Number} userId 
 * @param {Number} startTime 
 */
export const getScoreConsum = async (pageNum,pageSize,userId,startTime) => {
    try {
        return await post('/wx/queryIntegralConsum',{pageNum,pageSize,userId,startTime},true)
    } catch (error) {
        return error
    }
};

/**
 * @description 查询个人积分总额
 * @param {Number} userId 
 */
export const getTotalScore = async (userId) => {
    try {
        return await get('/wx/getIntegralTotal',{userId},false);
    } catch (error) {
        return error
    }
};

/**
 * @description 查询消费总额
 * @param {Number} userId 
 */
export const getTotalConsum = async (userId) => {
    try {
        return await get('/wx/getConsumIntegralInfo',{userId},true)
    } catch (error) {
        return error
    }
};

/**
 * @description 查询奖励内容
 * @param {Number} pageNum 
 * @param {Number} pageSize 
 * @param {Number} userId 
 */
export const getRewards = async (pageNum,pageSize,userId) => {
    try {
        return await post('/wx/queryUserRewardInfo',{pageNum,pageSize,userId},true)
    } catch (error) {
        return error
    }
};

/**
 * @description 查询举报反馈
 * @param {Number} pageNum 
 * @param {Number} pageSize 
 * @param {Number} userId 
 */
export const getFeedback = async (pageNum,pageSize,userId) => {
    try {
        return await post('/wx/queryFeedback',{pageNum,pageSize,userId},true)
    } catch (error) {
        return error
    }
};

/**
 * @description 查询扫黑除恶内容
 * @param {*} pageNum 
 * @param {*} pageSize 
 * @param {*} type 类型 1 以案说法 2 庭审现场 3 知识点
 */
export const getBlacks = async (pageNum,pageSize,type) => {
    try {
        return await post('/wx/queryBlack',{pageNum,pageSize,type},true)
    } catch (error) {
        return error
    }
};


/**
 * @description 查询扫黑除恶内容
 * @param {*} pageNum 
 * @param {*} pageSize 
 * @param {String} title 关键字查询
 * @param {*} type 类型 1 以案说法 2 庭审现场 3 知识点
 */
export const getBlacksBySearch = async (pageNum,pageSize,title,type) => {
    try {
        return await post('/wx/queryBlack',{pageNum,pageSize,title,type},true)
    } catch (error) {
        return error
    }
};
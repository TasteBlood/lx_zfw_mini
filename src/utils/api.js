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
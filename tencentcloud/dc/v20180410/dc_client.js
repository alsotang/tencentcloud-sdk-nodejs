const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const Filter = models.Filter;
const CreateDirectConnectTunnelResponse = models.CreateDirectConnectTunnelResponse;
const DeleteDirectConnectTunnelRequest = models.DeleteDirectConnectTunnelRequest;
const DeleteDirectConnectTunnelResponse = models.DeleteDirectConnectTunnelResponse;
const DescribeDirectConnectTunnelsRequest = models.DescribeDirectConnectTunnelsRequest;
const BgpPeer = models.BgpPeer;
const DescribeDirectConnectTunnelsResponse = models.DescribeDirectConnectTunnelsResponse;
const ModifyDirectConnectTunnelAttributeRequest = models.ModifyDirectConnectTunnelAttributeRequest;
const RouteFilterPrefix = models.RouteFilterPrefix;
const RejectDirectConnectTunnelRequest = models.RejectDirectConnectTunnelRequest;
const AcceptDirectConnectTunnelRequest = models.AcceptDirectConnectTunnelRequest;
const ModifyDirectConnectTunnelAttributeResponse = models.ModifyDirectConnectTunnelAttributeResponse;
const CreateDirectConnectTunnelRequest = models.CreateDirectConnectTunnelRequest;
const RejectDirectConnectTunnelResponse = models.RejectDirectConnectTunnelResponse;
const DirectConnectTunnel = models.DirectConnectTunnel;
const AcceptDirectConnectTunnelResponse = models.AcceptDirectConnectTunnelResponse;


/**
 * dc client
 * @class
 */
class DcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dc.tencentcloudapi.com", "2018-04-10", credential, region, profile);
    }
    
    /**
     * 用于创建专线通道的接口
     * @param {CreateDirectConnectTunnelRequest} req
     * @param {function(string, CreateDirectConnectTunnelResponse):void} cb
     * @public
     */
    CreateDirectConnectTunnel(req, cb) {
        let resp = new CreateDirectConnectTunnelResponse();
        this.request("CreateDirectConnectTunnel", req, resp, cb);
    }

    /**
     * 用于查询专线通道列表。
     * @param {DescribeDirectConnectTunnelsRequest} req
     * @param {function(string, DescribeDirectConnectTunnelsResponse):void} cb
     * @public
     */
    DescribeDirectConnectTunnels(req, cb) {
        let resp = new DescribeDirectConnectTunnelsResponse();
        this.request("DescribeDirectConnectTunnels", req, resp, cb);
    }

    /**
     * 接受专线通道申请
     * @param {AcceptDirectConnectTunnelRequest} req
     * @param {function(string, AcceptDirectConnectTunnelResponse):void} cb
     * @public
     */
    AcceptDirectConnectTunnel(req, cb) {
        let resp = new AcceptDirectConnectTunnelResponse();
        this.request("AcceptDirectConnectTunnel", req, resp, cb);
    }

    /**
     * 删除专线通道
     * @param {DeleteDirectConnectTunnelRequest} req
     * @param {function(string, DeleteDirectConnectTunnelResponse):void} cb
     * @public
     */
    DeleteDirectConnectTunnel(req, cb) {
        let resp = new DeleteDirectConnectTunnelResponse();
        this.request("DeleteDirectConnectTunnel", req, resp, cb);
    }

    /**
     * 拒绝专线通道申请
     * @param {RejectDirectConnectTunnelRequest} req
     * @param {function(string, RejectDirectConnectTunnelResponse):void} cb
     * @public
     */
    RejectDirectConnectTunnel(req, cb) {
        let resp = new RejectDirectConnectTunnelResponse();
        this.request("RejectDirectConnectTunnel", req, resp, cb);
    }

    /**
     * 修改专线通道属性
     * @param {ModifyDirectConnectTunnelAttributeRequest} req
     * @param {function(string, ModifyDirectConnectTunnelAttributeResponse):void} cb
     * @public
     */
    ModifyDirectConnectTunnelAttribute(req, cb) {
        let resp = new ModifyDirectConnectTunnelAttributeResponse();
        this.request("ModifyDirectConnectTunnelAttribute", req, resp, cb);
    }


}
module.exports = DcClient;

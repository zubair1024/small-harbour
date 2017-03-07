angular.module('starter.services',[])
.service('WC', function(){
    return {
        WC: function(){
             var Woocommerce = new WooCommerceAPI.WooCommerceAPI({
                    url: 'http://fashion-harbour.com',
                    consumerKey: 'ck_02a2d396a1800ce631b134bc67804f8bae762fda',
                    consumerSecret: 'cs_3dbb216f50b9a2df01af4e2eff0dee21ac273f41'
                });
                return Woocommerce;
        }
}});
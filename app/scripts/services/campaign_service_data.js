angular.module('App2')
    .factory('campaignServiceData', function($filter){
        
     var campaign_service_data = {};
     campaign_service_data.all_campaign_data = [];
     campaign_service_data.current_campaign_data = [];
     campaign_service_data.start = 0;
     campaign_service_data.end = 10;
    
    function loadCampaignData(){
        if(campaign_service_data.all_campaign_data.length == 0){
            for (var i=0; i < 100 ; i++){
                campaign_service_data.all_campaign_data.push({name: 'Campaign ' + (i+1), created: '12 DEC 2014', updated: '18 DEC 2014', total_views: '5 K', sales: '1000 units', end_date: '31 DEC 2014' });
            }                
        }
        return campaign_service_data.all_campaign_data;
    };
    
    campaign_service_data.all_campaigns = function(){
        return loadCampaignData();
    };
    
    campaign_service_data.getCampaigns = function(query){
        if(query){            
            campaign_service_data.current_campaign_data = $filter('filter')(campaign_service_data.all_campaigns(), {name: query})
            return campaign_service_data.current_campaign_data;
        }
        else{           
           campaign_service_data.current_campaign_data = campaign_service_data.all_campaigns().slice(campaign_service_data.start, campaign_service_data.end);        
           campaign_service_data.start = campaign_service_data.start + 10;
           campaign_service_data.end = campaign_service_data.end + 10;
           return campaign_service_data.current_campaign_data;
       }
    };
        
    
    return campaign_service_data;
});
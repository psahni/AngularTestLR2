'use strict';
angular.module('App2')
  .controller('MainCtrl', function ($scope, $timeout, $filter, campaignServiceData) {
      
    $scope.campaign_data = [];
    $scope.campaignServiceData = campaignServiceData;
    
    $scope.update_page = function(){  
        $scope.campaignServiceData.getCampaigns();
    };   
            
   $scope.campaignServiceData.getCampaigns();
   
      
  });

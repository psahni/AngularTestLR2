'use strict';
angular.module('App2')
  .controller('MainCtrl', function ($scope, $timeout, $filter, campaignServiceData) {
      
    $scope.campaign_data = [];
    $scope.campaignServiceData = campaignServiceData;
    
    $scope.update_page = function(){  
        $scope.loading = true;
        $timeout(function(){  // Added just for better user experience. 
            $scope.campaignServiceData.getCampaigns();
            $scope.loading = false;
        }, 900);        
        return false;
    };   
    
   $scope.campaignServiceData.getCampaigns();         
  });

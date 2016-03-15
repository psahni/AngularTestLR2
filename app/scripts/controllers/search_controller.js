'use strict';
angular.module('App2')
    .controller('SearchController', function($scope, $filter, campaignServiceData){
    $scope.campaignServiceData = campaignServiceData;
    $scope.search = function(){      
        if($scope.q)
            $scope.campaignServiceData.getCampaigns($scope.q);        
        else
           return;
    };
    
});
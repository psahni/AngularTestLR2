'use strict';
angular.module('App2')
    .controller('SearchController', function($scope, $filter, campaignServiceData){
    $scope.campaignServiceData = campaignServiceData;
    $scope.search = function(){      
        $scope.campaignServiceData.getCampaigns($scope.q);        
    };
    
});
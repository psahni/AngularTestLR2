'use strict';
angular.module('App2')
  .controller('MainCtrl', function ($scope, $timeout) {
      
    $scope.start = 0;
    $scope.end = 10;
    
    var all_campaign_data = [];    
    function loadCampaignData(){
        for (var i=0; i < 100 ; i++){
            all_campaign_data.push({name: 'Campaign ' + (i+1), created: '12 DEC 2014', updated: '18 DEC 2014', total_views: '5 K', sales: '1000 units', end_date: '31 DEC 2014' });
        }                
    };
    
    loadCampaignData();    
    
    $scope.update_page = function(){  
        $scope.loading = true;
        //Timeout added, just for user exp.
        $timeout(function(){
            $scope.campaign_data = all_campaign_data.slice($scope.start, $scope.end);        
            $scope.start = $scope.start + 10;
            $scope.end = $scope.end + 10;
            $scope.loading = false ;
        }, 1000);        
        return false;
    }    
    
    $scope.update_page();
    
  });

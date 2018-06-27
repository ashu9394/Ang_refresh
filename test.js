var app = angular.module('testFilters',[])


app.controller('personController',function($scope){
  $scope.name = 'ashu';
  $scope.friends = [{
    name: 'Andrew'
  }, {
    name: 'Will'
  }, {
    name: 'Mark'
  }, {
    name: 'Alice'
  }, {
    name: 'Todd'
  }];
})

app.filter('makeUpperCase',function(){
  return function(item){
    return item.toUpperCase()
  }
})

app.filter('filterName',function(){
  return function(items,value){
    var collection = []
    angular.forEach(items,function(item){
      if(item.name.startsWith(value)){
        collection.push(item)
      }
    })
    return collection
  }
})

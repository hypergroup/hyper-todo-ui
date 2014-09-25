module.exports = [
  '$scope',
  '$document',
  function($scope, $document) {
    $document.on('click',function(e) {
      if (e.toElement.nodeName === 'INPUT') return;
      if (!$scope.$root.editingItem) return;
      $scope.$root.editingItem.editing = false;
      $scope.$root.$digest();
    });
  }
];

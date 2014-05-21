function MessageController($scope){
  $scope.descricao = "";

  $scope.naoTemQuantidadeMinimaDeCaracteres = function(){
    return $scope.descricao.length < 10;
  }
}
function OutroController($scope){
  $scope.descricao = "";
  $scope.usuario = {nome: "Alessandro", idade: 21}
  $scope.cidades = ["Jaragua do Sul", "Florianopolis"]
  $scope.produto = new Produto();
}
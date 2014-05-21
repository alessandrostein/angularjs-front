function EmpresaController($scope){
  $scope.novoEmpregado = new Empregado();

  $scope.empregados = obterListaDeEmpregados();

  $scope.adicionarEmpregado = function(){
    $scope.empregados.push($scope.novoEmpregado);
    $scope.novoEmpregado = new Empregado({});
  }
}

function obterListaDeEmpregados(){
  var lista = [
    new Empregado({nome: 'Alessandro', idade: 21}),
    new Empregado({nome: 'Luciane', idade: 20})
  ];

  return lista;
}

function Empregado(args){
  this.nome = args.nome || undefined;
  this.idade = args.idade || undefined;

}
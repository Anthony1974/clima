var myweb = angular.module("myweb",[]);

myweb.controller("as",function($scope,$http) {
	//listado de los pokemon
	
	
	$http({
		method:"GET",
		url:"http://openweathermap.org/data/2.5/weather?q=Guatemala City,GT&appid=b6907d289e10d714a6e88b30761fae22"
		//exitoa la funcion en la consola
	}).then(function successcallback(objeto){
		//$scope.Listado.push(objeto.data)
		console.log(objeto)
      
		})
	
});

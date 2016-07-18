var app = angular.module('material', []);
app.controller('MainCtrl', [
	'$scope',
	function($scope, $filter){
		// Pretend Data
		$scope.posts = [
		{title: 'Cardboard Box', price: "FREE", image: "cardboardbox.jpg", daysago: 3, description: "I am a description!"},
		{title: 'Markers', price: 20, image: "markers.jpg", daysago: 1, description: "I am a description!"},
		{title: 'Screws', price: 10, image: "screws.jpg", daysago: 4, description: "I am a description!"},
		{title: 'Spraypaint', price: "FREE", image: "spraypaint.jpg", daysago: 6, description: "I am a description!"},
		{title: 'Wood', price: 5, image: "wood.jpg", daysago: 7, description: "I am a description!"},	
		{title: 'Crayons', price: 15, image: "crayons.jpg", daysago: 5, description: "I am a description!"}
		];


	}]);


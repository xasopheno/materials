var myApp = angular.module('myApp', ['wu.masonry']);
myApp.controller('DemoController', function($scope) {


  $scope.images = [
  {num: 1, height:400, title: "Cardboard Box", price: 'FREE', color: {bg: "859994", text: "ffffff"}}, {num: 2, height:250, title: "Colored Pencils", price: 'FREE', color: {bg: "EBE2C7", text: "ffffff"}}, 
  {num: 3, height:225, title: "Wood!", price: 25, color: {bg: "C3D9C6", text: "ffffff"}}, {num: 4, height:200, title: "Fencing", price: 10, color: {bg: "51C0C4", text: "ffffff"}}, 
  {num: 5, height:200, title: "Picture frame", price: 'FREE', color: {bg: "859994", text: "ffffff"}}, {num: 6, height:225, title: "Hammer time", price: 23, color: {bg: "C3D9C6", text: "ffffff"}}, 
  {num: 7, height:300, title: "Cool thing!", price: 'FREE', color: {bg: "51C0C4", text: "ffffff"}}, {num: 8, height:250, title: "Saw", price: 12, color: {bg: "EBE2C7", text: "ffffff"}}, 
  {num: 9, height:275, title: "Ether", price: 20, color: {bg: "EBE2C7", text: "ffffff"}}, {num: 10, height:350, title: "Snow", price: 1, color: {bg: "859994", text: "ffffff"}}, 
  {num: 11, height:450, title: "Magic Beans", price: 5, color: {bg: "F5E6D3", text: "ffffff"}}, {num: 12, height:275, title: "Screws", price: 'FREE', color: {bg: "51C0C4", text: "ffffff"}}, 
  {num: 13, height:225, title: "Two nails", price: 10, color: {bg: "859994", text: "ffffff"}}, {num: 14, height:250, title: "Nuts", price: 15, color: {bg: "F5E6D3", text: "ffffff"}}, 
  {num: 15, height:250, title: "Dirt", price: 'FREE', color: {bg: "C3D9C6", text: "ffffff"}}, {num: 16, height:225, title: "Good Wood!!", price: 20, color: {bg: "51C0C4", text: "ffffff"}}]

  $scope.getRandomPrice = function(){
      return Math.floor(((Math.random()*10)+1)-1);
  }


//   $scope.loadMore = function() {
//     var title = "Title"
//     var last = $scope.images[$scope.images.length - 1].num;
//     var heights = [200, 225, 250, 275, 300, 350, 400, 450]
//     var colors = ["859994", "51C0C4", "C3D9C6", "EBE2C7", "F5E6D3"]
//     var textColor = "ffffff";
//     for(var i = 1; i <= 8; i++) {
//       var randColor = colors[Math.floor(Math.random()*colors.length)];
//       $scope.images.push({num: last + i, title: title, height: (heights[Math.floor(Math.random()*heights.length)]), color: {bg: randColor, text: textColor}});
//   }
// };
});

// myApp.directive('scrollTrigger', function($window) {
//     return {
//         link : function(scope, element, attrs) {
//             var offset = parseInt(attrs.threshold) || 0;
//             var e = jQuery(element[0]);
//             var doc = jQuery(document);
//             angular.element(document).bind('scroll', function() {
//                 if (doc.scrollTop() + $window.innerHeight + offset > e.offset().top) {
//                     scope.$apply(attrs.scrollTrigger);
//                 }
//             });
//         }
//     };
// });

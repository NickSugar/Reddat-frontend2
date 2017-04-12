(function () {

  angular
    .module('reddat')
    .factory('postsService', postsService);

    postsService.$inject = ['$http'];

    function postsService($http) {
      const vm = this;
      vm.service = {}


//===============================
//  Posts routes
//===============================
      vm.service.getPosts = function () {
        return $http.get('http://localhost:7000/api/posts/')
      }

      vm.service.postPost = function (post) {
        return $http.post('http://localhost:7000/api/posts/', post)
      }

      vm.service.getPost = function (post_id) {
        return $http.get('http://localhost:7000/api/posts/'+post_id)
      }

      vm.service.updatePost = function (post_id, post) {
        return $http.patch('http://localhost:7000/api/posts/'+post_id, post)
      }

//===============================
//  Vote routes
//===============================

      vm.service.postVote = function (post_id) {
        return $http.post('http://localhost:7000/api/posts/'+post_id+'/votes')
      }

      vm.service.deleteVote = function (post_id) {
        return $http.delete('http://localhost:7000/api/posts/'+post_id+'/votes')
      }

//===============================
//  Comments routes
//===============================

      vm.service.postComment = function (post_id, comment) {
        return $http.post('http://localhost:7000/api/comments/'+post_id+'/comments', comment)
      }



      return vm.service;
      }
})();

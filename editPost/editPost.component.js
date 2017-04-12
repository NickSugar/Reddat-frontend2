(function() {
  'use strict'

  angular.module('reddat')
    .component('editPost', {
      templateUrl: '../editPost/editPost.html',
      controller: ['postsService', '$stateParams', '$state', EditCtrl]
    });

  function  EditCtrl(postsService, $stateParams, $state) {
        const vm = this

        vm.post = {}
        vm.updatePost = updatePost

        postsService.getPost($stateParams.post_id)
        .then(post=>{
          vm.post = post.data
        })

        function updatePost() {
          postsService.updatePost($stateParams.post_id, vm.post)
          .then(()=>{
            $state.go('posts')
          })
        }
    }
}())

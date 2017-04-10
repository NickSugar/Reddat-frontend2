(function() {
  'use strict'

  angular.module('reddat')
    .component('post', {
      templateUrl: '../postComp/post.html',
      controller: PostCtrl,
      bindings: {post: '='}
    });

  function  PostCtrl() {
        const vm = this

        vm.addProp = addProp
        vm.removeProp = removeProp
        vm.toggleComments = toggleComments
        vm.addComment = addComment

        vm.newComment = ''

        function addProp(post) {
          post.props += 1
        }

        function removeProp(post) {
          if (!!post.props) {
            post.props -= 1
          }
        }

        function toggleComments(post) {
          post.displayComments = !post.displayComments
        }

        function addComment(post) {
          post.comments.push(vm.newComment)
          vm.newComment = ''
        }
    }
}())

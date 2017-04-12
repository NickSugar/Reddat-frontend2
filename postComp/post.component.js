(function() {
  'use strict'

  angular.module('reddat')
    .component('post', {
      templateUrl: '../postComp/post.html',
      controller: ['postsService', PostCtrl],
      bindings: {post: '='}
    });

  function  PostCtrl(postsService) {
        const vm = this

        vm.addProp = addProp
        vm.removeProp = removeProp
        vm.toggleComments = toggleComments
        vm.addComment = addComment

        vm.newComment = ''

        function addProp(post) {
          postsService.postVote(post.id)
          .then(()=>{
            post.vote_count += 1
          })
        }

        function removeProp(post) {
          if (!!post.vote_count) {
            postsService.deleteVote(post.id)
            .then(()=>{
              post.vote_count -= 1              
            })
          }
        }

        function toggleComments(post) {
          post.displayComments = !post.displayComments
        }

        function addComment(post) {
          var newCommentObj = {}
          newCommentObj.content = vm.newComment

          postsService.postComment(post.id, newCommentObj)
          .then((newComment)=>{
            post.comments.push(newComment.data)
            vm.newComment = ''
          })
        }
    }
}())

(function() {
  'use strict'

  angular.module('reddat')
    .component('postsPage', {
      templateUrl: '../posts/posts.html',
      controller: ['postsService', PostCtrl]
    })







  function  PostCtrl(postsService) {
        const vm = this

        vm.showProgress = true
        vm.posts = []
        vm.togglePostForm = togglePostForm
        vm.postNew = postNew
        vm.showPostForm = false
        vm.orderBy = '-created_at'


        postsService.getPosts()
          .then(posts=>{
            console.log(posts.data[0]);
            vm.posts = posts.data
            vm.showProgress = false
          })




        function togglePostForm() {
          vm.showPostForm = !vm.showPostForm
        }

        function postNew() {
          var newPost = {}

          newPost.image_url = vm.image_url
          newPost.title = vm.title
          newPost.author = vm.author
          newPost.body = vm.body
          newPost.timeStamp = new Date()
          newPost.vote_count = 0
          newPost.comments = []

          postsService.postPost(newPost)
          .then(post=>{
            vm.posts.push(newPost)
            togglePostForm()
          })
        }
    }
}())

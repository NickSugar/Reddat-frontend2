(function() {
  'use strict'

  angular.module('reddat')
    .component('postsPage', {
      templateUrl: '../posts/posts.html',
      controller: PostCtrl
    });







  function  PostCtrl() {
        const vm = this

        vm.togglePostForm = togglePostForm
        vm.postNew = postNew
        vm.showPostForm = false
        vm.orderBy = '-timeStamp'

        vm.posts = [
          {
            id:0,
            img_url: 'https://68.media.tumblr.com/9cee12f711ded603eb5970d19923141b/tumblr_o7lvdbfmky1tt4oz9o1_500.jpg',
            title: 'Game of Thrones',
            author: 'Brad',
            post: 'Hodor dies holding door',
            timeStamp: new Date('2017-04-05T21:31:19.835Z'),
            props: 2,
            comments: [
              'Dick!',
              'Spoiler alert how bout?!?!',
              'You suck!'
            ]
          },
          {
            id:1,
            img_url: 'https://s-media-cache-ak0.pinimg.com/736x/16/a3/e2/16a3e2b1505f24e34564ab1af9b1ad56.jpg',
            title: 'Dark Tower',
            author: 'Nate',
            post: "I don't know how to explain this book...",
            timeStamp: new Date('2017-04-01T08:20:19.835Z'),
            props: 0,
            comments: [
              'You are no good at this.',
              'Go home yer drunk',
              "Kill you're self!"
            ]
          },
          {
            id:2,
            img_url: 'http://2.bp.blogspot.com/-IQARMsz3njM/UNU7coy1cQI/AAAAAAAAA0U/swwTQSMZhH0/s1600/color+vision+test.gif',
            title: 'Colors',
            author: 'Tom',
            post: "I don't believe in colors, especially red and green!",
            timeStamp: new Date('2017-03-09T23:45:19.835Z'),
            props: 1,
            comments: []
          },
          {
            id:3,
            // https://daily.jstor.org/wp-content/uploads/2016/02/Fetch_1050x700.jpg
            img_url: 'https://media.giphy.com/media/Y2KuqRqdCsxYk/giphy.gif',
            title: 'Fetch',
            author: 'Ryan',
            post: 'I like fetching stuff',
            timeStamp: new Date('2013-04-05T21:31:19.835Z'),
            props: 5,
            comments: [
              "Fetch this..."
            ]
          }
        ]

        function togglePostForm() {
          vm.showPostForm = !vm.showPostForm
        }

        function postNew() {
          var newPost = {}

          newPost.id = vm.posts.length
          newPost.img_url = vm.img_url
          newPost.title = vm.title
          newPost.author = vm.author
          newPost.post = vm.post
          newPost.timeStamp = new Date()
          newPost.props = 0
          newPost.comments = []

          vm.posts.push(newPost)
          togglePostForm()
        }
    }
}())

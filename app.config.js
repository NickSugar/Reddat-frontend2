(function() {

  'use strict';

  angular
    .module('reddat')
      .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
        .state('posts', {
          url: '/',
          template: '<posts-page></posts-page>'
        })
        .state('editPost', {
          url: '/posts/{post_id}/edit',
          template: '<edit-post></edit-post>'
        })
        $urlRouterProvider.otherwise('/')
        // $locationProvider.html5Mode(true)
    });
})();

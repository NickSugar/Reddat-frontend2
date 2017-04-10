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
        // .state('recipe', {
        //   url: '/recipe/{recipeID}',
        //   template: '<recipe-page></recipe-page>'
        // })
        // .state('edit', {
        //   url: '/edit',
        //   template: '<edit-recipe></edit-recipe>'
        // })
        $urlRouterProvider.otherwise('/')
        // $locationProvider.html5Mode(true)
    });
})();

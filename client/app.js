// Ionic Starter App

function onReady() {
    angular.bootstrap(document, ['starter']);

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
    }
}

if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
}
else {
    angular.element(document).ready(onReady);
}


// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'angular-meteor'])

//.run(function($ionicPlatform) {
//  $ionicPlatform.ready(function() {
//    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//    // for form inputs)
//    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//    }
//    if (window.StatusBar) {
//      // org.apache.cordova.statusbar required
//      StatusBar.styleLightContent();
//    }
//  });
//})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "client/tabs.ng.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'client/templates/tab-dash.ng.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/tab-chats.ng.html',
          controller: 'ChatsCtrl'
        }
      }
    })
      .state('tab.projects', {
          url: '/projects',
          views: {
              'tab-projects': {
                  templateUrl: 'client/templates/tab-projects.ng.html',
                  controller: 'ProjectsCtrl'
              }
          }
      })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/chat-detail.ng.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'client/templates/tab-account.ng.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

Meteor.subscribe('Projects');
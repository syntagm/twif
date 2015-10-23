angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('home', {
      url: '/page1',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
        
      
    
      
        
    .state('about', {
      url: '/page2',
      templateUrl: 'templates/about.html',
      controller: 'aboutCtrl'
    })
        
      
    
      
        
    .state('tWIFNews', {
      url: '/page3',
      templateUrl: 'templates/tWIFNews.html',
      controller: 'tWIFNewsCtrl'
    })
        
      
    
      
        
    .state('frequentlyAskedQuestions', {
      url: '/page4',
      templateUrl: 'templates/frequentlyAskedQuestions.html',
      controller: 'frequentlyAskedQuestionsCtrl'
    })
        
      
    
      
        
    .state('aboutTUE', {
      url: '/page5',
      templateUrl: 'templates/aboutTUE.html',
      controller: 'aboutTUECtrl'
    })
        
      
    
      
        
    .state('links', {
      url: '/page6',
      templateUrl: 'templates/links.html',
      controller: 'linksCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});
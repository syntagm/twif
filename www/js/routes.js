angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.home', {
      url: '/page1',
      views: {
        'tab1': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
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
        
      
    
      
        
    .state('admin', {
      url: '/page8',
      templateUrl: 'templates/admin.html',
      controller: 'adminCtrl'
    })
        
      
    
      
        
    .state('tabsController.fAQ', {
      url: '/page9',
      views: {
        'tab2': {
          templateUrl: 'templates/fAQ.html',
          controller: 'fAQCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.resources', {
      url: '/page10',
      views: {
        'tab3': {
          templateUrl: 'templates/resources.html',
          controller: 'resourcesCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page7',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('extra1', {
      url: '/page11',
      templateUrl: 'templates/extra1.html',
      controller: 'extra1Ctrl'
    })
        
      
    
      
        
    .state('extra2', {
      url: '/page12',
      templateUrl: 'templates/extra2.html',
      controller: 'extra2Ctrl'
    })
        
      
    
      
        
    .state('extra3', {
      url: '/page13',
      templateUrl: 'templates/extra3.html',
      controller: 'extra3Ctrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page7/page1');

});
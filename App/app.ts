
let app = angular.module('app', ['ui.router']);


module MyConfig{
    export class Config{
        
        private $stateProvider: angular.ui.IStateProvider;
        private $urlRouterProvider: angular.ui.IUrlRouterProvider;

        static $inject = ["$stateProvider", "$urlRouterProvider"]

        constructor($stateProvider, $urlRouterProvider){
            this.$stateProvider = $stateProvider;
            this.$urlRouterProvider = $urlRouterProvider;

            this.init();
        }

        public init = (): void =>{
            this.$urlRouterProvider.otherwise('/test');

            let testState = {
                url: '/test',
                name : 'test',
                template: '<div class="container"><h1>hello test</h1></div>'
            }
            let crudState = {
                url: '/crud',
                name : 'crud',
                controller: 'UserCtrl',
                controllerAs: 'vm',
                templateUrl: './App/Template/crud.html'
            }
            
            this.$stateProvider.state(testState);
            this.$stateProvider.state(crudState);
        }
    }
    
    app.config(MyConfig.Config)
}

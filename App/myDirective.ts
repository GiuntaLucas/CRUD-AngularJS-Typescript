module Directives {
    class myDirectiveCtrl {

        private name: string;
        private items: Array<string>;
        private $q: ng.IQService;
        static $inject = ['$scope','$window','$q'];

        constructor($scope: ImyDirectiveScope, $window) {
            this.name = $scope.name;
            this.items = ['salut', 'hello', 'hi', 'good morning'];
        }

        clickMe = ():void => {
            console.log('dssff');
            this.items.push('yo');
        }

    }
    export interface ImyDirectiveScope {
        name: string
    }



    //-------------------------------------------------------
    //----------------DIRECTIVES-----------------------------
    //-------------------------------------------------------

    // export class myDirective implements ng.IDirective {
    //     restrict = 'E';
    //     template = '<div><h1>{{vm.name}}</h1><div ng-repeat="i track by $index in vm.items">{{i}}</div><hr/><button type="button" ng-click="vm.clickMe()">Click Me</button></div>';
    //     replace = true;
    //     scope = {
    //         name: '@'
    //     };
    //     controller = myDirectiveCtrl;
    //     controllerAs = 'vm';

    //     link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: ng.IAttributes, controller: myDirectiveCtrl) => {

    //     };

    //     constructor() { };
    //     static factory(): ng.IDirectiveFactory {
    //         var directive = () => new myDirective();
    //         return directive;
    //     }

    // }
    export function myDirective(): ng.IDirective {
        return {
            restrict: 'E',
            template: '<div><h1>Directive | {{vm.name}}</h1><div ng-repeat="i  in vm.items track by $index">{{i}}</div><hr/><button type="button" ng-click="vm.clickMe()">Click Me</button></div>',
            replace: true,
            scope: {
                name : '@'
            },
            controller: myDirectiveCtrl,
            controllerAs: 'vm',

            link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: ng.IAttributes, controller: myDirectiveCtrl): void => {
                element.attr('style','color: red; border: 1px solid black;');
                
            }
        }
    }

    app.directive('myDirective', Directives.myDirective);


    
    
}

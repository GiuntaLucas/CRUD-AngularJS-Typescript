//-------------------------------------------------------
//----------------COMPONENT-----------------------------
//-------------------------------------------------------

module Directives {

    class myComponentCtrl{
        public name: string;
        public items: Array<string>;
        constructor(){
            this.items = ['salut', 'hello', 'hi', 'good morning'];
        }

        clickMe = () :void =>{
            this.items.push('yo');
        }
    }
    class myComponent implements ng.IComponentOptions {

        public bindings: any;
        public controller: any;
        public controllerAs : string;
        public template: string;

        constructor() {
            this.bindings = {
                name: '@'
            };

            this.controller = myComponentCtrl;
            this.controllerAs = 'vm';
            this.template = '<div><h1>Component | {{vm.name}}</h1><div ng-repeat="i  in vm.items track by $index">{{i}}</div><hr/><button type="button" ng-click="vm.clickMe()">Click Me</button></div>';

        }

    }
    app.component('myComponent', new myComponent());
}
var Controller;
(function (Controller) {
    var User = Model.User;
    var UserCtrl = (function () {
        function UserCtrl($scope, UserService) {
            var _this = this;
            this.remove = function (id) {
                _this.UserService.remove(id);
            };
            this.save = function () {
                _this.UserService.save(_this.user);
                _this.user = new User(0, "", "", 0);
            };
            this.preEdit = function (id) {
                _this.isEdit = true;
                _this.user = _this.UserService.preEdit(id);
            };
            this.edit = function () {
                _this.UserService.edit(_this.user);
                _this.user = new User(0, '', '', 0);
                _this.isEdit = false;
            };
            this.isEdit = false;
            this.UserService = UserService;
            this.users = this.UserService.loadData();
        }
        Object.defineProperty(UserCtrl.prototype, "user", {
            //---------------------
            //------GET | SET------
            //---------------------
            get: function () {
                return this._user;
            },
            set: function (v) {
                this._user = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserCtrl.prototype, "users", {
            get: function () {
                return this._users;
            },
            set: function (v) {
                this._users = v;
            },
            enumerable: true,
            configurable: true
        });
        return UserCtrl;
    }());
    UserCtrl.$inject = ['$scope', 'UserService'];
    Controller.UserCtrl = UserCtrl;
    app.controller('UserCtrl', Controller.UserCtrl);
})(Controller || (Controller = {}));
//# sourceMappingURL=UserController.js.map
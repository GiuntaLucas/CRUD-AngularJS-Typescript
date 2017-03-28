

module Controller {

    import User = Model.User;
    import UserService = Services.UserService;
    export class UserCtrl {

        private UserService: Services.IUserService;
        private _user: User;
        private _users: Array<User>;

        private isEdit: boolean;
        static $inject = ['$scope','UserService'];

        constructor($scope, UserService) {
            this.isEdit = false;
            this.UserService = UserService;
            this.users = this.UserService.loadData();
        }

        public remove = (id) =>{
            this.UserService.remove(id);
        }
        public save = () => {
            this.UserService.save(this.user);
            this.user = new User(0,"","",0);
        }
        public preEdit = (id) =>{
            this.isEdit = true;
            this.user = this.UserService.preEdit(id);
        }
        public edit = () =>{
            this.UserService.edit(this.user);
            this.user = new User(0,'','',0);
            this.isEdit = false;
        }

        //---------------------
        //------GET | SET------
        //---------------------

        public get user(): User {
            return this._user;
        }
        public set user(v: User) {
            this._user = v;
        }
        public get users(): Array<User> {
            return this._users;
        }
        public set users(v: Array<User>) {
            this._users = v;
        }
    }
    app.controller('UserCtrl', Controller.UserCtrl);
    
}

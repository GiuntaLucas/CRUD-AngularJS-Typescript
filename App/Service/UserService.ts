
module Services{

    import User = Model.User;

    export interface IUserService{
        loadData: () => Array<User>;
        save: (user:User) => void;
        edit:(user:User) => void;
        preEdit:(id: number) => User;
        remove: (id:number) => void;
    }
    export class UserService implements IUserService{
        private users: Array<User>;

        constructor(){
            this.users = [];
            this.users.push(
                new User(1,"Giunta", "Lucas", 27),
                new User(2,"Giunta", "Bruno", 25),
                new User(3,"Giunta", "Ugo", 17),
                new User(4,"Rousselet", "Céline", 27),
                new User(5,"Inconnu", "beuh"))
        }
        public loadData = () => {
            return this.users;
        }

        public remove = (id) =>{
            var i = 0;
            for(let u of this.users){
                if(u.id === id){
                    this.users.splice(i,1);
                    break;
                }
                i++;
            }
        }
        public save = (user) => {
            this.users.push(user);
        }
        public edit = (user) =>{
            for(let u of this.users){
                if(u.id === user.id){
                    u.age = user.age;
                    u.name = user.name;
                    u.firstname = user.firstname;
                    break;
                }
            }
        }
        public preEdit = (id) => {
            for(let u of this.users){
                if(u.id === id){
                    return new User(u.id, u.name, u.firstname, u.age);                   
                }
            }
        }
    }

    app.service('UserService', Services.UserService);
}

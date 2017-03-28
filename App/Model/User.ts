module Model {
    export class User {
        
        private _id : number;
        
        
        private _name: string;
        private _firstname: string;
        private _age: number;


        constructor(id:number, name: string, firstname: string, age?: number) {
            this._id = id;
            this._age = age || 0;
            this._firstname = firstname;
            this._name = name;
        }
        public get id() : number {
            return this._id;
        }
        public set id(v : number) {
            this._id = v;
        }
        public get age(): number {
            return this._age;
        }
        public set age(v: number) {
            this._age = v;
        }
        public get firstname(): string {
            return this._firstname;
        }
        public set firstname(v: string) {
            this._firstname = v;
        }
        public get name(): string {
            return this._name;
        }
        public set name(v: string) {
            this._name = v;
        }
    }
}

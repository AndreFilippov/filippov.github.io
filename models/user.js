export class User{
    #name;

    setName(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
}
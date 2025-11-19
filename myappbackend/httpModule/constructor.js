class User {
    constructor(){
        this.a = 10;
        this.b = 20;
    }
    getAdd(){
       return this.a + this.b;
    }
    getMul(){
        return this.a * this.b;
    }
    getDiv(){
        return this.a / this.b;
    }
    getSub(){
        return this.a - this.b;
    }
}


const obj = new User();
console.log(obj.getAdd());
console.log(obj.getMul());
console.log(obj.getDiv());
console.log(obj.getSub());
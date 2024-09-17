class MyClass {
    constructor(data = []){
        this.data = data;
    }
    method() {
        this.data.forEach(element => {
            console.log(element.title);
        });
        console.log("Метод вызван!");
    }
}

export default MyClass;
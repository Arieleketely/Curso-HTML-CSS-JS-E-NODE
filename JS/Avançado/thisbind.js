function speackGeneric(){
    console.log(this.sound);
}


let dog={
    sound:"Au Au",
    speak:function(){
        console.log(this.sound);
    }
}

let cat={
    sound:"Miau",
    speak:function(){
        console.log(this.sound);
    }
}
dog.speak();
cat.speak();

let bindedFuntion=speackGeneric.bind(dog);

bindedFuntion();
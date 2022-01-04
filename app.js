new Vue({
    el: "#app",
    data:{
        title: "Sabit",
        isItTrue: true,
        cars: ['Ford','Toyota'],
        robot:{
            name:"Lirab"
        },
        greeting: ()=>{
            return "Hello World";
        }
    }
});
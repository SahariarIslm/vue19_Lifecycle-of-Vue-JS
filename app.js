new Vue({
    el: "#app",
    data:{
        title: "Sabit",
        isItTrue: true,
        cars: ['Ford','Toyota'],
        robot:{
            name:"Lirab"
        }
    },
    methods: {
        greeting(){
            return this.title; //this refers the values from DATA property
        }
    }
});
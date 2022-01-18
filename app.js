new Vue({
    el: "#app",
    data:{
        name: 'Mahi',
        x: 0,
        y: 0
    },
    methods: {
        updateName(){
            this.name = 'Rafee'
        },
        getCoord(event){
            this.x = event.clientX;
            this.y = event.clientY
        }
    }
});
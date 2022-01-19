new Vue({
    el: "#app",
    data:{
        name: 'Mahi',
    },
    methods: {
        updateName(newName,event){
            this.name = newName;
            console.log(event);
        },
        // handleForm(event){
        //     event.preventDefault();
        //     console.log('submit form');
        // },
        handleForm(){
            console.log('submit form');
        },
        
    }
});
new Vue({
    el: "#app",
    data:{
        formData: {
            firstName:'',
            lastName :''
        },
    },
    methods: {
        handleForm(){
            console.log(this.formData);
        }, 
    }
});
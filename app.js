new Vue({
    el: "#app",
    data:{
        user: "Luffy",
        userAge: 16,
        allowedAge: 18,
        
    },
    methods: {
        changeuser() {
            return this.user==="Luffy" ? true : false;
        },
    },
});
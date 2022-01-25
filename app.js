new Vue({
    el: "#app",
    data:{
        a:0,
        b:0,
        salary:10
    },
    methods: {
        // addToA(){
        //     console.log('add a');
        //     return this.a + this.salary;
        // },
        // addToB(){
        //     console.log('add b');
        //     return this.b + this.salary;
        // }
    },
    computed: {
        caddToA(){
            console.log('add a');
            return this.a + this.salary;
        },
        caddToB(){
            console.log('add b');
            return this.b + this.salary;
        }
    }
});                        
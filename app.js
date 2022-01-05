new Vue({
    el: "#app",
    data:{
        src: "https://picsum.photos/id/273/200/300",
        alt: "This is a Dog",
        link:"https://www.facebook.com/sahariar.sabit/"
    },
    methods: {
        greeting(){
            return this.title; //this refers the values from DATA property
        }
    }
});
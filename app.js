

new Vue({
  el:'#app',
  data:{
    name: "Luffy"
  },
  methods: {
    updateName(){
      this.name = "Rafee";
    },
    killIt(){
      this.$destroy();
    }
  },
  mounted(){
    console.log('Mounted');
  },
  beforeCreate() {
    console.log('running before create');
  },
  created(){
    console.log('running created');
  },
  beforeMount(){
    console.log('running before mount');
  },
  beforeUpdate(){
    console.log('before update');
  },
  updated(){
    console.log('updated');
  },
  beforeDestroy(){
    console.log('before destroy');
  },
  destroyed(){
    console.log('destroyed');
  }
  
});



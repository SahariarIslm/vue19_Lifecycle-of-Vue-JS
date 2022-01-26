const temp = `<p>My name is {{name}}</p>`; //for larger scale html and dynamic contents

const app1 = new Vue({
  data: {
    name: "Luffy",
  },
  template: temp
});

setTimeout(()=>{
  app1.$mount('#app'); //1.builtin method, 2.it mounts the whole vue instense 
},2000) //builtin method for controlling time ****

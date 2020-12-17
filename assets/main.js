let root = new Vue({
    el: "#root",
    data: {
        frasiPreImpostate: ["esempio 1", "esempio 2", "esempio 3"],
        frase: "",
    },
    methods: {
      invioMessaggio(){
       this.frasiPreImpostate.push(this.frase)
     },
     cancella(index){
       this.frasiPreImpostate.splice(index, 1)
     },
   },
});

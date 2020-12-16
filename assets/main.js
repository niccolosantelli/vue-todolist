let root = new Vue({
    el: "#root",
    data: {
        frasiPreImpostate: ["esempio 1", "esempio 2", "esempio 3"],
        frase: "",
        contenitore: [],
    },
    methods: {
      invioMessaggio(){
       this.contenitore.push(this.frase)
     },
     rimuovi(index){
       this.contenitore.splice(index, 1)
     },
     cancella(index){
       this.frasiPreImpostate.splice(index, 1)
     },
   },

});

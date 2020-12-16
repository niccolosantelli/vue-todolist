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
       this.$delete(this.contenitore, index)
     },
     rimuovi(index){
       this.$delete(this.frasiPreImpostate, index)
     },
   },

});

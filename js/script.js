const { createApp } = Vue;

createApp({
    data(){
        return{
            logo: "./img/logo.png",
            todo_list: [
                {
                    text: "Fare la spesa",
                    done: true,
                },
                {
                    text: "Fare i compiti",
                    done: false,
                },
                {
                    text: "Portare a spasso il cane",
                    done: true,
                },
                {
                    text: "Dare da mangiare ai polli",
                    done: false,
                },
                {
                    text: "Cucinare la carbonara",
                    done: true,
                },
                {
                    text: "Pulire casa",
                    done: false,
                }
            ]
        }
    },
    methods:{
        toggleDone(index){
            this.todo_list[index].done = !todo_list[index].done;
        }
        
    }
}).mount("#app");
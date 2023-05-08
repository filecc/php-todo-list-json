const { createApp } = Vue

  createApp({
    data() {
      return {
        todos: null,
        apiUrl: './server.php',
        newTask: ''
      }
    },
    methods: {
        getData(){
            axios.get(this.apiUrl).then((res) => {
               this.todos = res.data;
            })
        },
    },
    mounted(){
        this.getData();
    }
  }).mount('#app')
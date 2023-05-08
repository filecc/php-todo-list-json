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
        addTask(){
            console.log(this.newTask)
            const data = {
                content: this.newTask,
                completed: false
            }

            axios.post(this.apiUrl, data, {headers: {
                'Content-Type': 'mmultipart/form-data'
              }}).then((res) => {
                this.newTask = '';
                this.getData();
              });
        },
        removeTask(){
            
        }
    },
    mounted(){
        this.getData();
    }
  }).mount('#app')
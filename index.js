const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: null,
      apiUrl: "./server.php",
      newTask: "",
      todo: []
    };
  },
  methods: {
    getData() {
        this.todo = [];
      axios.get(this.apiUrl).then((res) => {
        this.todos = res.data;
        // ordering
        this.todos.sort((a, b) => {
          if (a.completed === "0" && b.completed === "1") {
            return -1;
          }
          if (a.completed === "1" && b.completed === "0") {
            return 1;
          }
          return 0;
        });

        
        // getnot completed
        this.todos.forEach(element => {
            if (element.completed === '0'){
                this.todo.push(element)
            }
        });
      });
      
    },
    addTask() {
      const data = {
        content: this.newTask,
      };

      axios
        .post(this.apiUrl, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.newTask = "";
          this.getData();
        });
    },
    removeTask(e) {
      id = e.currentTarget.id;
      const found = this.todos.find((element) => element.id === id);
      if (found.completed === "1") {
        found.completed = "0";
      } else {
        found.completed = "1";
      }
      axios
        .post(this.apiUrl, this.todos, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.getData();
        });
    },
    deleteCompleted(){
        this.todo = [];
        this.todos.forEach(element => {
            if (element.completed === '0'){
                this.todo.push(element)
            }
        });
        console.log(this.todo)
        
        axios
        .post(this.apiUrl, this.todo, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.getData();
        });
      
    }
  },
  mounted() {
    this.getData();
  },
}).mount("#app");

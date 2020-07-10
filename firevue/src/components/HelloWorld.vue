<template>
  <div class="hello">
    <input type="text" v-model="movie" @keyup.enter="addMovie">
    <ul>
      <li v-for="(movieName,key) in movies" :key='key'>
        {{movieName.name}}
        <button @click="editMovie(key) ">Edit</button>
        <button @click="deleteMovie(key) ">Delete</button>
        <input type="text" v-model="editForm[key]"  @keyup.enter="editMovie(key)">
      </li>
    </ul>
  </div>
</template>

<script>
 export default {
    name: 'HelloWorld',
    data () {
      return {
        movie:null,
        movies:[],
        editForm:[]
      }
    },
    methods:{
      addMovie(){
        firebase.database().ref('movies').push({name:this.movie})
        .then((data)=>{console.log(data)})
        .catch((error)=>{console.log(error)})
        
    },
    editMovie(key){
      firebase.database().ref('movies/'+key).set({
        name:this.editForm[key]
      })
    },
     deleteMovie(key){
      firebase.database().ref('movies/'+key).remove();
    }
  },
  created(){
    firebase.database().ref('movies').on('value',(snapshot)=>{
      this.movies=snapshot.val();
    })
  }
 }
</script>
 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
    <div>
        <form class="" name="XYZ" action="index.html" method="post">
          <div>
            <label for="docName">Ajoutez les objets nécessaire à votre expéditions !</label>
            <input type="textarea" name="docName" v-model="name"></input>
          </div>
          <div>
            <button @click.prevent="addDocName">Ajouter</button>
          </div>
        </form>
        <ul>
          <li v-for="doc in nameFields">
            <div>
              <p>{{doc}}</p>
            </div>
          </li>
        </ul>
      <button type="button" @click="redirect">suivant</button>
    </div>
</template>

<script>
import docUpload from './components/docUpload.vue'
// const xhr = require("../public/javascripts/ajaxForRedirect.js")
export default {
  data: function() {
    return {
      name:''
      ,nameFields:[]
    };
  }
  ,methods: {
    addDocName: function () {
      this.nameFields.push(this.name)
    }
    ,redirect: function(){
      return this.askingForRedirect("toinv")
    }
    ,askingForRedirect: function(path){
      const req = new XMLHttpRequest();
      let url = '/task-flow/redirect/' + path

      req.onreadystatechange = function() {
        if (req.status === 200 && req.readyState === 4) {
          console.log("Réponse reçue: %s", req.responseText);
          location.href = "/task-flow/invitations";
        }
      }

      req.open('GET', url, true);
      req.send();
    }
    // ,redirect: function(){
    //   return xhr("toinv")
    // }
  }
}
</script>

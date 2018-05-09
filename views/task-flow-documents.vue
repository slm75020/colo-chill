<template>
    <div>
        <form class="" name="XYZ" action="index.html" method="post">
          <div>
            <label for="docName">Ajoutez le titre du document</label>
            <input type="textarea" name="docName" v-model="name"></input>
          </div>
          <div>
            <button @click.prevent="addDocName">Ajouter</button>
          </div>
        </form>
        <ul>
          <docUpload v-for="doc in nameFields" :docTitle="doc"></docUpload>
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
      console.log('somethings')
      this.nameFields.push(this.name)
      // const name = document.forms["XYZ"].elements["docName"].value
      // nameFields.push({name:name})
      // console.log(name)
    }
    ,redirect: function(){
      return this.askingForRedirect("toess")
    }
    ,askingForRedirect: function(path){
      const req = new XMLHttpRequest();
      let url = '/task-flow/redirect/' + path

      req.onreadystatechange = function() {
        if (req.status === 200 && req.readyState === 4) {
          console.log("Réponse reçue: %s", req.responseText);
          location.href = "/task-flow/essentials";
        }
      }

      req.open('GET', url, true);
      req.send();
    }
    // ,redirect: function(){
    //   return xhr("toess")
    // }
  }
  ,components: {
      docUpload:docUpload
    }
}
</script>

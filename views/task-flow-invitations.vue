<template>
    <div>
        <form class="" name="XYZ" action="index.html" method="post">
          <div>
            <label for="docName">Ajoutez les mails des participants</label>
            <input type="email" name="mail" v-model="mail"></input>
          </div>
          <div>
            <button @click.prevent="addDocName">Ajouter</button>
          </div>
        </form>
        <ul>
          <li v-for="doc in mailList">
            <div>
              <p>{{doc}}</p>
            </div>
          </li>
        </ul>
        <button>Soumettre</button>
    </div>
</template>

<script>
import docUpload from './components/docUpload.vue'
export default {
  data: function() {
    return {
      mail:'',
      mailList:[]
    };
  }
  ,methods: {
    addDocName: function () {
      console.log('somethings')
      this.mailList.push(this.mail)
    }
  }
}
</script>

<template>
  <li>
    <div>
      <p>{{docTitle}}</p>
      <button @click.prevent="showDocUploader">Uploader un document?</button>
    </div>
    <template v-if="show" :show="show" class="">
      <form method="post" enctype="multipart/form-data">
        <div>
          <label for="file">Sélectionner le fichier à envoyer</label>
          <input type="file" id="file" name="file" multiple>
          <input type="submit">Envoyer</button>
        </div>
        <div>
          <button @click.prevent="hideDocUploader">Annuler</button>
        </div>
      </form>
    </template>
  </li>
</template>

<script type="text/javascript">
  export default {
    props:['docTitle','show']
    ,data: function(){
      let show = true
    }
    ,methods:{
      showDocUploader:function(){
        this.show = true
        console.log(this.show)
      }
      ,hideDocUploader:function(){
        this.show = false
      }

    }
  }
</script>

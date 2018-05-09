<template>
    <div class="test">
        <form class="" action="index.html" method="post">
          <label for="event_title">Titre de l'événement</label>
          <input type="text" name="event_title"></input>
          <div >
            <label for="event_dep">Date de Départ</label>
            <input type="date" name="event_dep"></input>
            <label for="event_arr">Date de Retour</label>
            <input type="date" name="event_arr"></input>
          </div>
          <label for="event_place">Lieu</label>
          <input type="text" name="event_place"></input>
          <label for ="msg">Le petit mot</label>
          <textarea name="msg" rows="8" cols="50"></textareas>
          <input type="submit" value="Soumettre"></input>
        </form>
        <button type="button" @click="redirect">suivant</button>
    </div>
</template>

<script>
export default {
  data: function() {
    return{
    }
  }
  ,methods:{
    redirect: function(){
      return this.askingForRedirect("todoc")
    }
    ,askingForRedirect: function(path){
      const req = new XMLHttpRequest();
      let url = '/task-flow/redirect/' + path

      req.onreadystatechange = function() {
        if (req.status === 200 && req.readyState === 4) {
          console.log("Réponse reçue: %s", req.responseText);
          location.href = "/task-flow/documents";
        }
      }

      req.open('GET', url, true);
      req.send();
    }
  }
}
</script>

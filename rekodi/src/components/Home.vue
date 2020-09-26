<template>
  <div class="home">
     <nav class="navbar navbar-expand-lg navbar-light"> <span style="font-size:33px;margin-top:-10px;"> Rekodi Meetings</span>
  <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">

     </ul>
    <span class="navbar-text">
    <i class="fas fa-plus" style="color:#fff;"><router-link :to="{ name: 'AddRecord' }" style="text-decoration:none;color:#fff;">Add Record</router-link></i>
    </span>
  </div>
</nav>
    <!-- cards-->
    <div class="card border-primary mb-3" v-for="meeting in meetings" :key="meeting.id">
      <i class="material-icons delete" @click="deleteMeeting(meeting.id)">delete</i>
      <div class="card-header" style="text-transform:uppercase;">{{ meeting.type}}</div>
      <div class="card-body text-primary">
         <h5 class="card-title">Department: {{meeting.department}}</h5>
         <p class="card-text">Summary: {{meeting.summary}}</p>
         <p class="card-text">Attendees: {{meeting.attendees}}</p>
         <p class="card-text">Date: {{ meeting.date }}</p>
      </div>
    </div>
    <!-- card end -->
</div>
</template>

<script>
import firestoreDb from '@/firebase/init';

export default {
  name: 'Home',
  data() {
    return {
      meetings: [],
    };
  },
  methods: {
    deleteMeeting(id) {
      firestoreDb.collection('r_meetings').doc(id).delete()
        .then(() => {
          this.meetings = this.meetings.filter((meeting) => {
            return meeting.id !== id;
          });
        });
    },
  },
  created() {
    firestoreDb.collection('r_meetings').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const meeting = doc.data();
          meeting.id = doc.id;
          this.meetings.push(meeting);
        });
      });
  },
};
</script>

<style scoped>
.navbar {
  background:#1a237e;
  color:aliceblue;
  height: 120px;
}

.card{
    margin: 100px auto;

  }
  .material-icons {
    display: flex;
    justify-content: flex-end;
    color: red;
    cursor: pointer;
  }
  /* smaller devices */
    @media(max-width:768px) {
    .card{
      margin-top:px;
      max-width: 20em;
    }
  }

  /* large devices */
  @media(min-width:1100px) {
    .card{
      max-width: 50em;
    }
  }
</style>

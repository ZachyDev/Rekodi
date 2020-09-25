<template>
  <div class="home">
      <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">Rekodi Meetings</router-link>
      <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
          </li>
        </ul>
        <span class="navbar-text">
          Add Record<router-link :to="{ name: 'AddRecord' }">  <i class="fas fa-plus-circle"></i></router-link>
        </span>
      </div>
    </nav>
    <!-- cards-->
    <div class="card border-primary mb-3" v-for="(meeting,index) in meetings" :key="index">
      <div class="card-header" style="text-transform:uppercase;">{{ meeting.type}}</div>
      <div class="card-body text-primary">
         <h5 class="card-title">Department: {{meeting.department}}</h5>
         <p class="card-text">Summary: {{meeting.summary}}</p>
         <p class="card-text">Attendees: {{meeting.attendees}}</p>
         <p class="card-text">Date: {{date}}</p>
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
      date: '',
    };
  },
  created() {
    firestoreDb.collection('r_meetings').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const fetchedMeetings = doc.data();
          this.meetings.push(fetchedMeetings);
          this.date = fetchedMeetings.date.toDate();
        });
      });
  },
};
</script>

<style scoped>
  .navbar{
    max-width: 100%;
    width: 100%;
    padding: 28px;
    background: #1a237e;
    overflow: hidden;
  }
  .navbar a{
    color: #fff;
    font-size: 30px;
  }
  .navbar-text{
    color: #fff;
  }
  .card{
    margin: 30px auto;

  }
  /* smaller devices */
    @media(max-width:768px) {
    .card{
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

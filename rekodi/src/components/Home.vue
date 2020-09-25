<template>
  <div class="home">
      <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    <!-- cards-->
    <div class="card border-primary mb-3" v-for="(meeting,index) in meetings" :key="index">
      <div class="card-header" style="text-transform:uppercase;">{{ meeting.type}}</div>
      <div class="card-body text-primary">
         <h5 class="card-title">Department: {{meeting.department}}</h5>
         <p class="card-text">Summary: {{meeting.summary}}</p>
         <p class="card-text">Attendees: {{meeting.attendees}}</p>
         <p class="card-text">Date:</p>
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
      // date: '',
    };
  },
  created() {
    firestoreDb.collection('r_meetings').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const fetchedMeetings = doc.data();
          this.meetings.push(fetchedMeetings);
          // this.date = fetchedMeetings.date.toDate();
        });
      });
  },
};
</script>

<style scoped>
  .navbar {
    background-color: aqua;
  }
  /* smaller devices */
    @media(max-width:768px) {
    .card{
      margin-top:40px;
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

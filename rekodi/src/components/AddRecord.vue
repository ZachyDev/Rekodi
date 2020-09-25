<template>
  <div class="add-meeting container">
    <h2 class="center-align indigo-text">Add New Meeting Record</h2>
    <form>
      <div class="field title">
        <label for="type">Meeting Type:</label>
        <input type="text" name="type" v-model="type">
      </div>

      <div>
        <label for="dept">Department:</label>
        <input type="text" name="dept" v-model="dept">
      </div>

      <div>
        <label for="attendees">Attendees:</label>
        <input type="number" name="attendees" v-model="attendees">
      </div>

      <div>
        <label for="summary">Summary:</label>
        <input type="text" name="summary" v-model="summary">
      </div>

      <div>
        <label for="date">Date:</label>
        <input type="date" name="date" v-model="date">
      </div>

      <div class="field center-align">
        <button class="btn pink">Add Record</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddRecord',
  data() {
    return {
      type: '',
      dept: '',
      attendees: '',
      summary: '',
      date: '',
    };
  },
};
</script>
<style scoped>
  .add-meeting{
    margin-top:60px;
    padding: 20px;
    max-width: 500px;
  }
  .add-meeting h2{
    font-size: 2em;
    font-weight: 900;
    margin: 20px auto;
  }
  .add-meeting .field {
    margin: 20px auto;
  }
  label {
    font-size: 14px;
  }
</style>

<template>
  <div class="container-fluid p-4">
    <div class="row">
      <div class="col-md-6">
        <h1>Welcome to admin portal</h1>
        <DataTable :value="users" sortMode="multiple">
          <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" sortable></Column>
        </DataTable>
<!--        <table class="table table-striped">-->
<!--          <tbody>-->
<!--          <tr>-->
<!--            <th>ID</th>-->
<!--            <th>Name</th>-->
<!--            <th>Email Address</th>-->
<!--          </tr>-->
<!--          <tr v-for="user of users" :key="user.username">-->
<!--            <td>{{ user.id }}</td>-->
<!--            <td>{{ user.username }}</td>-->
<!--            <td>{{ user.email }}</td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->
        <h3>Testing file upload in VueJs</h3>
        <form>
          <input type="file" class="form-control" @change="onFileSelected">
          <button class="btn btn-outline-primary" type="submit" @click="uploadImage">Upload</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script src="../admin/adminScript.js"></script>
<link rel="stylesheet" href="../admin/admin.scss">

<template>
  <div class="container">
    <div class="row pt-4">
      <div class="col-md-12 d-flex justify-content-end">
        <button class="btn btn-primary" @click="navigateToNew()">+ Add New Record</button>
      </div>
    </div>
    <div class="row pt-4">
      <div class="col-md-12 ">
        <div class="employee-cards-wrapper bg-light p-5">
          <div class="row">
            <div v-for="s of skeletons" :key="s" class="col-md-4">
              <Skeleton height="20rem" width="15rem" v-if="loader" />
            </div>
          </div>

          <div class="row" v-if="!loader">
            <div class="col-md-3 single-emp-card p-1" v-for="employee of employees" :key="employee.id">
              <Card>
                <template #header>

                  <div class="p-3">
                    <img :src="employee.img" alt="Profile Picture" height="200px" width="100px">
                  </div>
                </template>
                <template #title>
                  {{ employee.name }}
                </template>
                <template #content>
                  <h6> Dept: {{ employee.department }}</h6>
                  <h6 class="company-name">{{ employee.position }}</h6>
                  <span class="company-name">Company: {{ employee.company }}</span>
                </template>
                <template #footer>
                  <div class="btn-wrapper">
                    <div class="btn-wrapper-single">
                      <Button icon="pi pi-info-circle" class="btn-outline-info" label="Details" title="View Details"
                              @click="viewEmployeeDetails(employee.id)" />
                    </div>
                    <div class="btn-wrapper-single">
                      <Button icon="pi pi-trash" class="p-button-danger" label="Delete" title="Delete Record"
                              @click="confirmDelete(employee.id)" />
                    </div>
                  </div>
                </template>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../employees/employeeScript.js">

</script>

<style scoped>
.employee-cards-wrapper{
  padding: 20px
}
.skeleton-container{
  display: flex;
}
.company-name{
  font-size:14px
}
.btn-wrapper{
  display: flex;
}
.btn-wrapper-single{
  padding: 0 20px 0 0;
}

</style>

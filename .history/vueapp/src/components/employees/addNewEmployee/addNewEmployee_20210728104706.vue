<template>
  <div class="container p-5">
    <div class="row p-4">
      <div class="col-md-12">
        <h3>Register Employee</h3>

        <div class="form-wrapper">
          <form ref="employeeForm" @submit.prevent="addNewEmployee">
            <div class="row">
              <div class="col-md-5">
                <h5>Personal Information</h5>
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Name" class="form-control"
                         v-model="employee?.name" required>
                </div>
                <div class="form-group">
                  <label>Email Address</label>
                  <input type="text" placeholder="example@gmail.com" class="form-control" v-model="employee.email" required>
                </div>
                <div class="form-group">
                  <label>Gender</label>
                  <Dropdown v-model="employee.gender" :options="genders" optionLabel="value" placeholder="Select gender"
                  class="form-control p-0"/>
                </div>
                <div class="form-group">
                  <label>Upload Picture</label>
                  <input type="file" class="form-control mt-1" @change="onFileSelected" >
                </div>
                <div class="form-group pt-4 ">
                  <button class="btn btn-outline-secondary ml-2 w-50"  @click="backToDetails">
                    Back
                  </button>
                  <button class="btn btn-outline-success w-50"  type="submit"  >Save</button>
                </div>
              </div>
              <div class="col-md-2 ">
                <Divider layout="vertical"/>

              </div>
              <div class="col-md-5">
                <h5>Work Information</h5>
                <div class="form-group">
                  <label>Department</label>
                  <Dropdown v-model="employee.department" :options="departments" optionLabel="value" placeholder="Select department"
                            class="form-control p-0" required/>
                </div>
                <div class="form-group">
                  <label>Designation</label>
                  <input type="text" placeholder="Designation" class="form-control" v-model="employee.position" required>
                </div>
                <div class="form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Company" class="form-control" v-model="employee.company" required>
                </div>
                <div class="form-group">
                  <label>Joining Date</label>
                  <input type="date" placeholder="Company" class="form-control" v-model="employee.start" required>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../addNewEmployee/addNewEmpScript.js">

</script>

<style scoped>

</style>

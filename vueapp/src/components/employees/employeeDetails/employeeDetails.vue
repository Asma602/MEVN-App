<template>

  <div class="container p-5">
    <div class="row">
      <div class="col-md-12">
        <div class="employee-details-container">
          <div class="detail-header">
            <div class="row">
              <div class="col-md-10">
                <h3>{{ employee.name }}</h3>
                <h6>{{ employee.position }} at {{ employee.company }}</h6>
              </div>
              <div class="col-md-2">
                <div class="detail-footer">
                  <div class="btn-wrapper">
                    <button class="btn btn-outline-secondary" label="Back" @click="back">Back</button>
                  </div>
                  <div class="btn-wrapper">
                    <button class="btn btn-outline-warning" label="Edit" @click="editEmployeeView(employee.id)">Edit</button>
                  </div>

                </div>
              </div>
            </div>

          </div>
          <div class="detail-body">
            <div class="row">
              <div class="col-md-6">
                <p>{{ employee.gender === 'Male'?'Mr. ':'Miss. ' }}{{ employee.name }} is a {{ employee.position }}
                  at {{ employee.company }} since {{ employee.start }}. {{ employee.gender === 'Male'?'He':'She' }} has always been a
                  hard worker and an asset to company. Lorem ipsum dolor sit amet, consectetur adipisicing el
                  Lorem ipsum dolor sit amet, consectetur adipisicing el Lorem ipsum dolor sit amet, consectetur adipisicing el
                  Lorem ipsum dolor sit amet, consectetur adipisicing el Lorem ipsum dolor sit amet, consectetur adipisicing el
                  Lorem ipsum dolor sit amet, consectetur adipisicing el Lorem ipsum dolor sit amet, consectetur adipisicing el
                  Lorem ipsum dolor sit amet, consectetur adipisicing el</p>
                <h6>Email Address : {{ employee.email }}</h6>

              </div>
              <div class="col-md-6">
                <img :src="employee.img" alt="Profile Picture Not Found"  />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </div>

</template>

<script src="../employeeDetails/employeeDetailsScript.js"></script>

<style scoped>
.employee-details-container{
  border: 1px solid #eeeeee;
  padding: 20px;
}
.detail-footer{
  display: flex;
}
.btn-wrapper{
  padding: 10px 10px 10px 0;
}

</style>

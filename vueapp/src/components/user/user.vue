<template>
  <div class="container  p-4">

    <Dialog header="Header" :visible.sync="display" :modal="true" :style="{width: '50vw'}">
      {{ content }}
    </Dialog>

    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <div class="pt-3 ">
              <h3>Add a new task</h3>

              <app-input></app-input>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="row pt-2">
          <div class="col-md-12">
            <h3>To Do List</h3>
            <ul class="list-group">
              <li v-for="(task, index) of tasks"  v-bind:key="index"
                  class="list-group-item  align-content-center">
                <div class="row">
                  <div class="col-md-2 flex-and-center">
                    <input type="checkbox" @input="updateTaskStatus(task)" :completed="task.completed"
                           :disabled="task.completed === true" :title="task.completed?'Done':'Mark as done'">
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="p-2 form-control border-none" :id="task.id"
                           @keypress.enter="updateTaskValue($event,task)"
                           :value="task.title" />
                  </div>

                  <div class="col-md-2 flex-and-center">
                    <button class="btn btn-danger"
                            title="Remove Task" @click="removeTask(task.id)">X
                    </button>
                  </div>
                  <div class="col-md-2 flex-and-center">
                    <button class="btn btn-info"
                            title="View Details" @click="viewDetails(task.id)"><i>i</i>
                    </button>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>

    </div>
  </div>


</template>

<script src="../user/userScript.js"></script>

<link rel="stylesheet" href="../user/user.scss">

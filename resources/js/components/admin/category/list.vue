<template>
  <div>
       <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <div class="row justify-content-center">
          <div class="col-md-7">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Category List</h3>
                  <div class="text-right">
                    <router-link to="/addCategory" class="btn btn-sm btn-primary">Add</router-link>
                 </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Category Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Update software</td>
                      <td>
                         <div class="">
                             <router-link to="" class="btn btn-xs btn-info"><i class="fas fa-edit"></i></router-link>
                             <router-link to="" class="btn btn-xs btn-info"><i class="fas fa-trash"></i></router-link>
                         </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>


    </div><!--/. container-fluid -->
  </section>
  <!-- /.content -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

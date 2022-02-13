<template>
    <div>
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <!-- left column -->
                    <div class="col-md-7">
                        <!-- general form elements -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Add Category</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form role="form" @submit.prevent="categorySave">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="cat_name"
                                            >Category Name</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="form.cat_name"
                                            name="cat_name"
                                            id="cat_name"
                                            placeholder="Enter The Category Name"
                                        />
                                    </div>
                                    <div
                                        v-if="form.errors.has('cat_name')"
                                        v-html="form.errors.get('cat_name')"
                                    />
                                </div>
                                <!-- /.card-body -->

                                <div class="card-footer text-center">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="submit"
                                        class="btn btn-secondary"
                                        @click="goBack"
                                    >
                                        Back
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!--/. container-fluid -->
        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
</template>

<script>
export default {
    name: "Save",
    data: () => ({
        form: new Form({
            cat_name: '',
        }),
    }),

    methods: {
        categorySave() {
           this.form.post("/categorycreate")
           .then(response => {
               this.$router.push("/category");
                Toast.fire({
                    icon: 'success',
                    title: 'Category Created successfully'
                })
            }).catch(error => {

            });
        },

        goBack() {
            this.$router.push("/category");
        },
    },
};
</script>

<style></style>

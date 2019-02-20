<template>
   <div class="jumbotron">
      <div class="container">
          <div class="row">
              <div class="col-sm-8 offset-sm-2">
                  <div>
                      <h2>Vue.js Form Validation</h2>
                      <form >
                          <div v-if="step == true">
                          <div class="form-group">
                              <label for="firstName">First Name</label>
                              <input type="text" v-model="user.firstName" v-validate="'required|alpha'" name="firstName" class="form-control" :class="{ 'is-invalid':  errors.has('firstName') }" />
                              <div v-if="errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div>
                          </div>
                          <div class="form-group">
                              <label for="lastName">Last Name</label>
                              <input type="text" v-model="user.lastName" v-validate="'required|alpha'" name="lastName" class="form-control" :class="{ 'is-invalid':  errors.has('lastName') }" />
                              <div v-if=" errors.has('lastName')" class="invalid-feedback">{{ errors.first('lastName') }}</div>
                          </div>
                          <div class="form-group">
                              <label for="email">Email</label>
                              <input type="email" v-model="user.email" v-validate="'required|email'" name="email" class="form-control" :class="{ 'is-invalid':  errors.has('email') }" />
                              <div v-if=" errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
                          </div>
                          <div class="form-group">
                              <label htmlFor="password">Password</label>
                              <input type="password" v-model="user.password" v-validate="{ required: true, min: 6 }"  name="password" class="form-control" :class="{ 'is-invalid':  errors.has('password') }" />
                              <div v-if=" errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
                          </div>
                           <div class="form-group">
                              <label htmlFor="cpassword">Confirm Password</label>
                              <input type="password" v-model="user.cpassword" v-validate="'required|confirmed:password|min:6'" name="cpassword" class="form-control" :class="{ 'is-invalid':  errors.has('cpassword') }" />
                              <div v-if=" errors.has('cpassword')" class="invalid-feedback">{{ errors.first('cpassword') }}</div>
                          </div>
                          </div>
<div v-else>
                          <div class="form-group">
                              <label for="accountNo">Account No</label>
                              <input type="text" v-model="user.accountNo" v-validate="'required'" name="accountNo" class="form-control" :class="{ 'is-invalid':  errors.has('accountNo') }" />
                              <div v-if="submitted && errors.has('accountNo')" class="invalid-feedback">{{ errors.first('accountNo') }}</div>
                          </div>
                          <div class="form-group">
                              <label for="iafc">IAFC</label>
                              <input type="text" v-model="user.iafc" v-validate="'required'" name="iafc" class="form-control" :class="{ 'is-invalid':  errors.has('iafc') }" />
                              <div v-if="submitted && errors.has('iafc')" class="invalid-feedback">{{ errors.first('iafc') }}</div>
                          </div>
                          
                          
                         
</div>

                          <div class="form-group">
                              <button class="btn btn-primary" v-on:click="onSubmitEvent">{{ buttonName }}</button>
                              &nbsp;
                              <button class="btn btn-primary" v-on:click="onSubmitEvent1">{{ buttonName1 }}</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
   data () {
        return {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                cpassword:'',
                accountNo:'',
                iafc:''
            },
            submitted: false,
            step : true,
            buttonName : 'Next',
            buttonName1 : 'Cancel'
        }
    },
    methods: {
      
        onSubmitEvent(e){
          e.preventDefault();
         // if(this.step){
              this.$validator.validate().then(valid => {
                if (valid) {
                    this.buttonName = 'Register';
                    this.buttonName1 = 'Back';
                    this.step = false;
                }
                else{
                  console.log('Else');
                }
            });
          // }
          // else {
          // }
        },
        onSubmitEvent1(e){
            e.preventDefault();
           this.$validator.validate().then(valid => {
                if (valid) {
                    this.buttonName = 'Next';
                    this.buttonName1 = 'Cancel';
                    this.step = true;
                }
                else{
                  console.log('Else');
                }
            });
  
        }

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

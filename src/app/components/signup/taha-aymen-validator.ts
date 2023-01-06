
// <!-- **************** MAIN CONTENT START **************** -->
// <main>
// 	<section class="p-0 d-flex align-items-center position-relative overflow-hidden">
	
// 		<div class="container-fluid">
// 			<div class="row">
// 				<!-- left -->
// 				<div class="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
// 					<div class="p-3 p-lg-5">
// 						<!-- Title -->
// 						<div class="text-center">
// 							<h2 class="fw-bold">Welcome to our largest community</h2>
// 							<p class="mb-0 h6 fw-light">Let's learn something new today!</p>
// 						</div>
// 						<!-- SVG Image -->
// 						<img src="assets/images/element/02.svg" class="mt-5" alt="">
// 						<!-- Info -->
// 						<div class="d-sm-flex mt-5 align-items-center justify-content-center">
// 							<ul class="avatar-group mb-2 mb-sm-0">
// 								<li class="avatar avatar-sm"><img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar"></li>
// 								<li class="avatar avatar-sm"><img class="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar"></li>
// 								<li class="avatar avatar-sm"><img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar"></li>
// 								<li class="avatar avatar-sm"><img class="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar"></li>
// 							</ul>
// 							<!-- Content -->
// 							<p class="mb-0 h6 fw-light ms-0 ms-sm-3">4k+ Students joined us, now it's your turn.</p>
// 						</div>
// 					</div>
// 				</div>

// 				<!-- Right -->
// 				<div class="col-12 col-lg-6 m-auto">
// 					<div class="row my-5">
// 						<div class="col-sm-10 col-xl-8 m-auto">
// 							<!-- Title -->
// 							<img src="assets/images/element/03.svg" class="h-40px mb-2" alt="">
// 							<h2>Sign up for your account!</h2>
// 							<p class="lead mb-4">Nice to see you! Please Sign up with your account.</p>

// 							<!-- Form START -->
// 							<form  #srm" (ngSubmit)="signUpForm.form.valid && signUp()" [mustMatch]="['password', 'confirmPassword']" novalidate>
//                                 <!-- first Name -->
// 								<div class="mb-4">
// 									<label for="exampleInputEmail1" class="form-label">First Name *</label>
// 									<div class="input-group input-group-lg">
										
// 										<input type="email" class="form-control border-0 bg-light rounded-end ps-1" name="firstName"placeholder="First Name" [(ngModel)]="user.fistName"
//                                         [ngModelOptions]="{standalone:true}" #firstName="ngModel" [ngClass]="{ 'is-invalid': signUpForm.submitted }" firstName required
//                                         >
// 									</div>
//                                     <div *ngIf="signUpForm.submitted && firstName.invalid" class="invalidfeedback" >
//                                         <div *ngIf="firstName.errors.required" style="color: red;">First Name is required</div>
                                        
//                                       </div>
// 								</div>
//                                 <!-- Last Name -->
// 								<div class="mb-4">
// 									<label for="exampleInputEmail1" class="form-label">Last Name *</label>
// 									<div class="input-group input-group-lg">
										
// 										<input type="email" class="form-control border-0 bg-light rounded-end ps-1" name="lastName" placeholder="Last Name" [(ngModel)]="user.lastName"
//                                         [ngModelOptions]="{standalone:true}" #lastName="ngModel" [ngClass]="{ 'is-invalid': signUpForm.submitted }" lastName required
//                                         >
// 									</div>
//                                     <div *ngIf="signUpForm.submitted && lastName.invalid" class="invalidfeedback" >
//                                         <div *ngIf="lastName.errors.required" style="color: red;">Last Name is required</div>
                                        
//                                       </div>
// 								</div>

// 								<!-- Email -->
// 								<div class="mb-4">
// 									<label for="exampleInputEmail1" class="form-label">Email  *</label>
// 									<div class="input-group input-group-lg">
										
// 										<input type="email" class="form-control border-0 bg-light rounded-end ps-1" name="email" placeholder="E-mail" [(ngModel)]="user.email"
//                                         [ngModelOptions]="{standalone:true}"  #email="ngModel"
//                                         [ngClass]="{ 'is-invalid': signUpForm.submitted && email.invalid }" email required>
                                        
// 									</div>
                                    
//                                         <div *ngIf="signUpForm.submitted && email.invalid" class="invalidfeedback" >
//                                           <div *ngIf="email.errors.required" style="color: red;">Email is required</div>
//                                           <div *ngIf="email.errors.email" style="color: red;">Email format is invalid </div>
//                                         </div>
// 								</div>
//                                    <!-- Tél -->
// 								<div class="mb-4">
// 									<label for="exampleInputEmail1" class="form-label">Phone *</label>
// 									<div class="input-group input-group-lg">
										
// 										<input type="email" class="form-control border-0 bg-light rounded-end ps-1" name="phone"placeholder="11 111 111" [(ngModel)]="user.phone"
//                                         [ngModelOptions]="{standalone:true}" #phone="ngModel" [ngClass]="{ 'is-invalid': signUpForm.submitted }" phone required minlength="8" maxlength="8"
//                                         >

// 									</div>
//                                     <div *ngIf="signUpForm.submitted && phone.invalid" class="invalidfeedback" >
//                                         <div *ngIf="phone.errors.required" style="color: red;">Phone is required</div>
//                                         <div *ngIf="phone.errors.minlength" style="color: red;">Phone number must have 8 numbers</div>
                                       
                                        
//                                       </div>
// 								</div>
//                                 <!-- CIN -->
// 								<div class="mb-4">
// 									<label for="exampleInputEmail1" class="form-label">CIN *</label>
// 									<div class="input-group input-group-lg">
									
// 										<input type="email" class="form-control border-0 bg-light rounded-end ps-1" name="cin" placeholder="12345678" [(ngModel)]="user.cin" 
//                                         [ngModelOptions]="{standalone:true}" #cin="ngModel" [ngClass]="{ 'is-invalid': signUpForm.submitted }" cin required minlength="8" maxlength="8"
//                                         >
// 									</div>
//                                     <div *ngIf="signUpForm.submitted && cin.invalid" class="invalidfeedback" >
//                                         <div *ngIf="cin.errors.required" style="color: red;">CIN is required</div>
//                                         <div *ngIf="cin.errors.minlength" style="color: red;">CIN must have 8 numbers</div>
                                       
                                        
//                                       </div>
// 								</div> 
//                                    <!-- Spécialité -->
//                                    <div class="row">
//                                     <div class="col-lg-6">
//                                         <label for="exampleInputEmail1" class="form-label">Specialities *</label>
//                                         <select  [(ngModel)]='user.Speciality'  class="col-lg-12 border-0 bg-light rounded-end " name="specialité">
                                            
//                                             <option value="Informatique">Informatique</option>
//                                             <option value="Science">Science</option>
//                                             <option value="Math">Math</option>
                                            
//                                         </select>
//                                     </div>
//                                     <div class="col-lg-6">
//                                         <label for="exampleInputEmail1" class="form-label">Levels *</label>
//                                         <select [(ngModel)]='user.level' class="col-lg-12 border-0 bg-light rounded-end " name="level">
                                            
//                                             <option value="level 1">Level 1</option>
//                                             <option value="level 2">Level 2</option>
//                                             <option value="level 3">Level 3</option>
                                            
//                                         </select>
//                                     </div>
//                                    </div><br>
								
//                                    <div class="mb-4">
//                                     <div class="col-lg-12">
//                                         <label for="exampleInputEmail1" class="form-label">Rôles *</label>
//                                         <select [(ngModel)]='user.role' class="col-lg-12 border-0 bg-light rounded-end " name="role">
                                            
//                                             <option value="Teacher">Teacher</option>
//                                             <option value="Student">Student</option>
                                           
                                            
//                                         </select>
//                                     </div>
//                                    </div>
// 								<!-- Password -->
// 								<div class="mb-4">
// 									<label for="inputPassword5" class="form-label">Password *</label>
// 									<div class="">
										
// 										<input name="password" type="password" class="form-control border-0 bg-light rounded-end ps-1" placeholder="*********" [(ngModel)]="user.password"
//                                         [ngModelOptions]="{standalone:true}" #password="ngModel"   pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
//                                             [ngClass]="{ 'is-invalid': signUpForm.submitted && password.invalid }"  required>
// 									</div>
//                                     <div *ngIf="signUpForm.submitted && password.invalid" class="invalidfeedback" >
//                                          <div *ngIf="password.errors.required" style="color: red;">Password is required</div>
                                        
//                                         <div  *ngIf="password.errors.pattern" style="color: red;">Password must have one special char,one number,one char in upperCase and must have 8 chars </div>
//                                       </div>
// 								</div>
                             
// 								<!-- Confirm Password -->
// 								<!-- <div class="mb-4">
// 									<label for="inputPassword6" class="form-label">Confirm Password *</label>
// 									<input type="password" class="form-control" name="confirm_password" 
// 									placeholder="*********" [(ngModel)]="user.confirmPassword" #confirmPassword="ngModel"
									 
// 									[appConfirmEqualValidator]="user.password" />
// 									<div *ngIf="confirmPassword.errors?.notEqual">Password Mismatch</div>
									
// 								</div> -->
								
// 								<div class="form-group col">
// 									<label>Confirm Password</label>
// 									<input type="password" name="confirmPassword" class="form-control" [(ngModel)]="user.confirmPassword" #confirmPassword="ngModel" [ngClass]="{ 'is-invalid': signUpForm.submitted && confirmPassword.invalid }" required>
// 									<div *ngIf="signUpForm.submitted && confirmPassword.invalid" class="invalid-feedback">
// 										<div *ngIf="confirmPassword.errors.required">Confirm Password is required</div>
// 										<div *ngIf="confirmPassword.errors.mustMatch">Passwords must match</div>
// 									</div>
// 								</div>
// 								{{confirmPassword.errors | json}}
// 								<!-- Check box -->
						
// 								<!-- Button -->
// 								<div class="align-items-center mt-0">
// 									<div class="d-grid">
// 										<button class="btn btn-primary mb-0" type="submit">Sign Up</button>
// 									</div>
// 								</div>
// 							</form>
// 							<!-- Form END -->

// 							<!-- Social buttons -->
// 							// <div class="row">
// 							// 	<!-- Divider with text -->
// 							// 	<div class="position-relative my-4">
// 							// 		<hr>
// 							// 		<p class="small position-absolute top-50 start-50 translate-middle bg-body px-5">Or</p>
// 							// 	</div>
// 							// 	<!-- Social btn -->
// 							// 	<div class="col-xxl-6 d-grid">
// 							// 		<a href="#" class="btn bg-google mb-2 mb-xxl-0"><i class="fab fa-fw fa-google text-white me-2"></i>Signup with Google</a>
// 							// 	</div>
// 							// 	<!-- Social btn -->
// 							// 	<div class="col-xxl-6 d-grid">
// 							// 		<a href="#" class="btn bg-facebook mb-0"><i class="fab fa-fw fa-facebook-f me-2"></i>Signup with Facebook</a>
// 							// 	</div>
// 							// </div>

// 							// <!-- Sign up link -->
// 							// <div class="mt-4 text-center">
// 							// 	<span>Already have an account?<a routerLink=""> Sign in here</a></span>
// 							// </div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>

// 	</section>
// </main>
// <!-- **************** MAIN CONTENT END **************** -->

// <!-- Back to top -->



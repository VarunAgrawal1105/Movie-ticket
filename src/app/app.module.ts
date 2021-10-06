import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmPasswordValidator } from './Shared/custom-validator.directive';
import { LoginComponent } from './user/login/login/login.component';
import { UserDashboardComponent } from './movie/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddEditMovieComponent } from './admin/add-edit-movie/add-edit-movie.component';
import { MovieBookingComponent } from './movie/movie-booking/movie-booking.component';
import { AdminComponent } from './admin/admin.component';
import { MovieComponent } from './movie/movie.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyBookingsComponent } from './movie/my-bookings/my-bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ConfirmPasswordValidator,
    LoginComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    AddEditMovieComponent,
    MovieBookingComponent,
    AdminComponent,
    MovieComponent,
    MyBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

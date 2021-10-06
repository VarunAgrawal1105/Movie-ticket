import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditMovieComponent } from './admin/add-edit-movie/add-edit-movie.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { MovieBookingComponent } from './movie/movie-booking/movie-booking.component';
import { MovieComponent } from './movie/movie.component';
import { MyBookingsComponent } from './movie/my-bookings/my-bookings.component';
import { UserDashboardComponent } from './movie/user-dashboard/user-dashboard.component';
import { LoginComponent } from './user/login/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'edit/movie/:MovieId',component:AddEditMovieComponent},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: "", component: AdminDashboardComponent, pathMatch: 'full' },
      { path: "dashboard", component:  AdminDashboardComponent },
      { path: "addMovie", component: AddEditMovieComponent}
    ]
  },
  {
    path: 'movie',
    component: MovieComponent,
    children: [
      { path: "", component: UserDashboardComponent, pathMatch: 'full' },
      { path: "userDashboard", component: UserDashboardComponent},
      { path: "booking/:MovieId", component: MovieBookingComponent },
      { path: "myBookings", component: MyBookingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

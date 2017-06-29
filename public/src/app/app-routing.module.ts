import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { WallComponent } from './wall/wall.component'
import { NewmessageComponent } from './newmessage/newmessage.component'
import { MessagedetailsComponent } from './messagedetails/messagedetails.component'
import { CommentmessageComponent } from './commentmessage/commentmessage.component'

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'wallpage', component:WallComponent},
  {path:'newMessage', component: NewmessageComponent},
  {path:"details/:messid", component:MessagedetailsComponent},
  {path:"commentmessage", component: CommentmessageComponent },
  {path:"answer/:messid", component: CommentmessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddEditUserComponent } from './add-edit-user-component/add-edit-user-component.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HelloComponent } from './hello.component';
import { TestCanActivate } from './GUARD/guards';
import { ChildActivate } from './GUARD/guard.childActivate';
import { CanDeActivate } from './GUARD/deActivate';
import { TestResolve } from './GUARD/Resolve';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddEditUserComponent,HelloComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers: [AppService,TestCanActivate,ChildActivate,CanDeActivate,TestResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }

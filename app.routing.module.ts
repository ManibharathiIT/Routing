import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { AddEditUserComponent } from "./add-edit-user-component/add-edit-user-component.component";
import { TestCanActivate } from "./GUARD/guards";
import { ChildActivate } from "./GUARD/guard.childActivate";
import { HelloComponent } from "./hello.component";
import { CanDeActivate } from "./GUARD/deActivate";
import { TestResolve } from "./GUARD/Resolve";
const routes:Routes=[
    {
        path:"users",
        component:UsersComponent,
        children:[{
            path:"test",
            component:HelloComponent,
    }],
    canActivateChild:[ChildActivate],
        canActivate:[TestCanActivate]
    },
    {
        path:"users/add",
        component:UsersComponent
    },
    {
        path:"users/:id",
        component:AddEditUserComponent,
        canDeactivate:[CanDeActivate],
        resolve:{
            resolvedData:TestResolve
        }

    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "../register/register.component";
import { BaseTemplateComponent } from "./base-template.component";

const routes: Routes = [
  {
    path: "",
    component: BaseTemplateComponent,
    children: [
      {
        path: "",
        redirectTo: "register",
        pathMatch: "full",
      },
      { path: "register", component: RegisterComponent },
      // {
      //   path: "register",
      //   loadChildren: () =>
      //     import("../register/register.component").then(
      //       (m) => m.RegisterComponent
      //     ),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseTemplateRoutingModule {}

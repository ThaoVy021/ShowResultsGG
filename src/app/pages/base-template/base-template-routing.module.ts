import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FindKeywordsComponent } from "../find-keywords/find-keywords.component";
import { BaseTemplateComponent } from "./base-template.component";

const routes: Routes = [
  {
    path: "",
    component: BaseTemplateComponent,
    children: [
      {
        path: "",
        redirectTo: "find-keywords",
        pathMatch: "full",
      },
      { path: "find-keywords", component: FindKeywordsComponent },
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

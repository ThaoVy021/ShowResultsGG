import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./core/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/base-template/base-template.module").then(
        (m) => m.BaseTemplateModule
      ),
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

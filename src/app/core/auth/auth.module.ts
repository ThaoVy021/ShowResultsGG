import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { NgZorroAntdModule } from "src/app/ng-zorro-antd.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { LogInComponent } from "./log-in/log-in.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [LogInComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}

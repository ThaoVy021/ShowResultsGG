import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseTemplateRoutingModule } from "./base-template-routing.module";
import { RegisterComponent } from "../register/register.component";
import { NgZorroAntdModule } from "src/app/ng-zorro-antd.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    BaseTemplateRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BaseTemplateModule {}

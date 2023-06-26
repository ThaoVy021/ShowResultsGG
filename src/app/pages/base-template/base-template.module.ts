import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseTemplateRoutingModule } from "./base-template-routing.module";
import { NgZorroAntdModule } from "src/app/ng-zorro-antd.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FindKeywordsComponent } from "../find-keywords/find-keywords.component";

@NgModule({
  declarations: [FindKeywordsComponent],
  imports: [
    CommonModule,
    BaseTemplateRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BaseTemplateModule {}

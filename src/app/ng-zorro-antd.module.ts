import { NgModule } from "@angular/core";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzCardModule } from "ng-zorro-antd/card";

@NgModule({
  exports: [
    NzFormModule,
    NzButtonModule,
    NzTypographyModule,
    NzIconModule,
    NzInputModule,
    NzCardModule,
  ],
})
export class NgZorroAntdModule {}

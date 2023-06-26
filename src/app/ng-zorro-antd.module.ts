import { NgModule } from "@angular/core";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzIconModule } from "ng-zorro-antd/icon";

@NgModule({
  exports: [NzFormModule, NzButtonModule, NzTypographyModule, NzIconModule],
})
export class NgZorroAntdModule {}

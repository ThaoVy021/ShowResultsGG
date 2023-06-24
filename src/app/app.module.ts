import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "./ng-zorro-antd.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PagesComponent } from "./pages/pages.component";
import { LogInComponent } from "./pages/log-in/log-in.component";

@NgModule({
  declarations: [AppComponent, PagesComponent, LogInComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}

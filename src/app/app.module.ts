import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { WordHttpService } from './service/word.http.service';
import { WordService } from './service/word.service';

import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { ListComponent } from './page/list/list.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,

		AppRoutingModule
	],
	declarations: [
		AppComponent,
		FormComponent,
		ListComponent
	],
	providers: [
		WordHttpService,
		WordService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}

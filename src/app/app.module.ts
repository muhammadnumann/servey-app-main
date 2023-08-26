import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ServeyOneComponent } from './Component/servey-one/servey-one.component';
import { ServeyTwoComponent } from './Component/servey-two/servey-two.component';
import { ServeyThreeComponent } from './Component/servey-three/servey-three.component';
import { ServeyFourComponent } from './Component/servey-four/servey-four.component';
import { ServeyFiveComponent } from './Component/servey-five/servey-five.component';
import { ServeySixComponent } from './Component/servey-six/servey-six.component';
import { ServeySevenComponent } from './Component/servey-seven/servey-seven.component';
import { ServeyEightComponent } from './Component/servey-eight/servey-eight.component';
import { ServeyNineComponent } from './Component/servey-nine/servey-nine.component';
import { ServeyElevenComponent } from './Component/servey-eleven/servey-eleven.component';
import { ServeyTenComponent } from './Component/servey-ten/servey-ten.component';
import { ServeyTwelveComponent } from './Component/servey-twelve/servey-twelve.component';
import { ServeyThirteenComponent } from './Component/servey-thirteen/servey-thirteen.component';
import { ServeyFourteenComponent } from './Component/servey-fourteen/servey-fourteen.component';
import { ServeyFifteenComponent } from './Component/servey-fifteen/servey-fifteen.component';
import { ServeySixteenComponent } from './Component/servey-sixteen/servey-sixteen.component';
import { ServeySeventeenComponent } from './Component/servey-seventeen/servey-seventeen.component';
import { ServeyEighteenComponent } from './Component/servey-eighteen/servey-eighteen.component';
import { ServeyNineteenComponent } from './Component/servey-nineteen/servey-nineteen.component';
import { ServeyTwentyComponent } from './Component/servey-twenty/servey-twenty.component';
import { ServeyTwentyoneComponent } from './Component/servey-twentyone/servey-twentyone.component';
import { ServeyTwentytwoComponent } from './Component/servey-twentytwo/servey-twentytwo.component';
import { ServeyTwentythreeComponent } from './Component/servey-twentythree/servey-twentythree.component';
import { ServeyTwentyfourComponent } from './Component/servey-twentyfour/servey-twentyfour.component';
import { ServeyLeftImageComponent } from './Component/servey-left-image/servey-left-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ServeyOneComponent,
    ServeyTwoComponent,
    ServeyThreeComponent,
    ServeyFourComponent,
    ServeyFiveComponent,
    ServeySixComponent,
    ServeySevenComponent,
    ServeyEightComponent,
    ServeyNineComponent,
    ServeyElevenComponent,
    ServeyTenComponent,
    ServeyTwelveComponent,
    ServeyThirteenComponent,
    ServeyFourteenComponent,
    ServeyFifteenComponent,
    ServeySixteenComponent,
    ServeySeventeenComponent,
    ServeyEighteenComponent,
    ServeyNineteenComponent,
    ServeyTwentyComponent,
    ServeyTwentyoneComponent,
    ServeyTwentytwoComponent,
    ServeyTwentythreeComponent,
    ServeyTwentyfourComponent,
    ServeyLeftImageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecaptchaModule,
    HttpClientModule, 
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

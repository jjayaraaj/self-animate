import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MainPage } from '../pages/main/main';
import { TemplatePage } from '../pages/template/template';
import { TemplateVideoPage } from '../pages/template-video/template-video';
import { CustomizationPage } from '../pages/customization/customization';
import { LoginPage } from '../pages/login/login';
import { Youtube } from '../pages/videos/youtube';
import { CategoryPopoverPage } from '../pages/category-popover/category-popover';

import { ColorPickerPage } from '../pages/color-picker/color-picker';
import { CustomizationStep2Page } from '../pages/customization-step2/customization-step2';
import { CustomizationStep3Page } from '../pages/customization-step3/customization-step3';
import { EnterPage } from '../pages/enter/enter';
import { RenderPage } from '../pages/render/render';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { GeneratePreviewPage } from '../pages/generate-preview/generate-preview';
import { TemplateService } from '../services/template-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainPage,
    TemplatePage,
    TemplateVideoPage,
    CustomizationPage,
    LoginPage,
    Youtube,
    CategoryPopoverPage,
    ColorPickerPage,
    CustomizationStep2Page,
    CustomizationStep3Page,
    EnterPage,
    RenderPage,
    DashboardPage,
    GeneratePreviewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: false
    }),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainPage,
    TemplatePage,
    TemplateVideoPage,
    CustomizationPage,
    LoginPage,
    Youtube,
    CategoryPopoverPage,
    ColorPickerPage,
    CustomizationStep2Page,
    CustomizationStep3Page,
    EnterPage,
    RenderPage,
    DashboardPage,
    GeneratePreviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TemplateService,
    InAppBrowser,
    Network

  ]
})
export class AppModule {}

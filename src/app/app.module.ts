import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CumulusComponent } from './case-study/cumulus/cumulus.component';
import { DailyflowfitnessComponent } from './case-study/dailyflowfitness/dailyflowfitness.component';
import { MobileAppComponent } from './case-study/mobile-app/mobile-app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { LegoComponent } from './case-study/lego/lego.component';
import { KfogComponent } from './case-study/kfog/kfog.component';
import { KgoradioComponent } from './case-study/kgoradio/kgoradio.component';
import { BridgetobridgeComponent } from './case-study/bridgetobridge/bridgetobridge.component';
import { ColossalComponent } from './case-study/colossal/colossal.component';
import { LevisComponent } from './case-study/levis/levis.component';
import { FanfestComponent } from './case-study/fanfest/fanfest.component';
import { YosemiteComponent } from './case-study/yosemite/yosemite.component';
import { SobekComponent } from './case-study/sobek/sobek.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColossalComponent,
    DailyflowfitnessComponent,
    MobileAppComponent,
    NavigationComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent,
    LegoComponent,
    KfogComponent,
    KgoradioComponent,
    BridgetobridgeComponent,
    CumulusComponent,
    LevisComponent,
    FanfestComponent,
    YosemiteComponent,
    SobekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Font Awesome icon imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { HomeComponent } from './home/home.component';
import { CumulusComponent } from './case-study/cumulus/cumulus.component';
import { DailyflowfitnessComponent } from './case-study/dailyflowfitness/dailyflowfitness.component';
import { MobileAppComponent } from './case-study/mobile-app/mobile-app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { LegoComponent } from './case-study/lego/lego.component';
import { KfogComponent } from './case-study/kfog/kfog.component';
import { KgoradioComponent } from './case-study/kgoradio/kgoradio.component';
import { BridgetobridgeComponent } from './case-study/bridgetobridge/bridgetobridge.component';
import { ColossalComponent } from './case-study/colossal/colossal.component';
import { LevisComponent } from './case-study/levis/levis.component';
import { FanfestComponent } from './case-study/fanfest/fanfest.component';
import { YosemiteComponent } from './case-study/yosemite/yosemite.component';
import { SobekComponent } from './case-study/sobek/sobek.component';
import { WebmediaComponent } from './case-study/webmedia/webmedia.component';

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
    LegoComponent,
    KfogComponent,
    KgoradioComponent,
    BridgetobridgeComponent,
    CumulusComponent,
    LevisComponent,
    FanfestComponent,
    YosemiteComponent,
    SobekComponent,
    WebmediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    library.add(fas, fab, far);
    library.add(faGithub, faLinkedin, faEnvelope);
  }
}

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './home/home.component';
import { ContactComponent }      from './contact/contact.component';

import { WebmediaComponent } from './case-study/webmedia/webmedia.component';
import { MobileAppComponent }      from './case-study/mobile-app/mobile-app.component';
import { DailyflowfitnessComponent }      from './case-study/dailyflowfitness/dailyflowfitness.component';
import { LegoComponent }      from './case-study/lego/lego.component';

import { KfogComponent }      from './case-study/kfog/kfog.component';
import { KgoradioComponent }      from './case-study/kgoradio/kgoradio.component';

import { BridgetobridgeComponent }      from './case-study/bridgetobridge/bridgetobridge.component';
import { ColossalComponent }      from './case-study/colossal/colossal.component';

import { CumulusComponent }      from './case-study/cumulus/cumulus.component';
import { LevisComponent } from './case-study/levis/levis.component';
import { FanfestComponent } from './case-study/fanfest/fanfest.component';
import { YosemiteComponent } from './case-study/yosemite/yosemite.component';
import { SobekComponent } from './case-study/sobek/sobek.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'case-study/webmedia', component: WebmediaComponent },
  { path: 'case-study/mobile-app', component: MobileAppComponent },
  { path: 'case-study/dailyflowfitness', component: DailyflowfitnessComponent },  
  { path: 'case-study/lego', component: LegoComponent },
  { path: 'case-study/kfog', component: KfogComponent },
  { path: 'case-study/kgoradio', component: KgoradioComponent },
  { path: 'case-study/bridgetobridge', component: BridgetobridgeComponent },
  { path: 'case-study/cumulus', component: CumulusComponent },
  { path: 'case-study/colossal', component: ColossalComponent },
  { path: 'case-study/microsites/levis', component: LevisComponent },
  { path: 'case-study/microsites/fanfest', component: FanfestComponent },
  { path: 'case-study/microsites/yosemite', component: YosemiteComponent },
  { path: 'case-study/microsites/sobek', component: SobekComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
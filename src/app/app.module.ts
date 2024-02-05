import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './Shared/shared.module';
import { CareerModule } from './Career/career.module';
import { AdminModule } from './Admin/admin.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './Core/interceptors/auth.interceptor';
import { BusinessModule } from './Business/business.module';
import { SocialservicesModule } from './SocialService/socialservices.module';
import { MarketplaceModule } from './MarketPlace/marketplace.module';
import { RealestateModule } from './RealEstate/realestate.module';
import { MatrimonyModule } from './Matrimony/matrimony.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CareerModule,
    AdminModule,
    BusinessModule,
    SocialservicesModule,
    MarketplaceModule,
    RealestateModule,
    MatrimonyModule,
    HttpClientModule
  ],
  exports:[
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, 
      useClass : AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

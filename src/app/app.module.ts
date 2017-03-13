import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';

import { HomeService } from './home.service';
import { TreeAddService } from './shared/tree-add.service';
import { ChangeColorDirective } from './tree/tree.directive';
import { AddTreeComponent } from './add-tree/add-tree.component';
import { EditTreeComponent } from './edit-tree/edit-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TreeComponent,

    ChangeColorDirective,

    AddTreeComponent,
    EditTreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [HomeService, TreeAddService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArticleComponent } from "./article/article.component";
import { HomeComponent } from './home/home.component';
import { ArticleLinkComponent } from './article-link/article-link.component';
import { ArticleHomeComponent } from './article-home/article-home.component';

@NgModule({
  declarations: [AppComponent, ArticleComponent, HomeComponent, ArticleLinkComponent, ArticleHomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

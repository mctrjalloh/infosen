import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { FlexLayoutModule } from "@angular/flex-layout";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatPaginatorModule } from "@angular/material/paginator";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArticleComponent } from "./article/article.component";
import { HomeComponent } from "./home/home.component";
import { ArticleLinkComponent } from "./article-link/article-link.component";
import { ArticleHomeComponent } from "./article-home/article-home.component";
import { ArticleTitleComponent } from "./article-title/article-title.component";
import { TopicArticlesComponent } from "./topic-articles/topic-articles.component";
import { ArticleDetailsPageComponent } from "./article-details-page/article-details-page.component";
import { ArticlesHomePageComponent } from "./articles-home-page/articles-home-page.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ArticleCommentComponent } from "./article-comment/article-comment.component";
import { ArticleReactionsComponent } from "./article-reactions/article-reactions.component";
import { ArticleContentComponent } from "./article-content/article-content.component";
import { HeadArticleComponent } from "./head-article/head-article.component";
import { TopicHeadComponent } from "./topic-head/topic-head.component";
import { HomeTopicComponent } from "./home-topic/home-topic.component";

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    ArticleLinkComponent,
    ArticleHomeComponent,
    ArticleTitleComponent,
    TopicArticlesComponent,
    ArticleDetailsPageComponent,
    ArticlesHomePageComponent,
    NavbarComponent,
    ArticleCommentComponent,
    ArticleReactionsComponent,
    ArticleContentComponent,
    HeadArticleComponent,
    TopicHeadComponent,
    HomeTopicComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    MatGridListModule,
    MatDividerModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

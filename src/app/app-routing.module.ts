import { ArticleDetailsPageComponent } from "./article-details-page/article-details-page.component";
import { ArticlesHomePageComponent } from "./articles-home-page/articles-home-page.component";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ArticlesHomePageComponent
  },
  {
    path: "article-details-page",
    component: ArticleDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

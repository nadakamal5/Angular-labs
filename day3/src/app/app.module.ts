import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { TodosComponent } from './component/todos/todos.component';
import { TableComponent } from './component/table/table.component';
import { BranchesComponent } from './component/branches/branches.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    TodosComponent,
    TableComponent,
    BranchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

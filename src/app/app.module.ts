import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatRadioModule
} from '@angular/material';
import { SquareComponent } from './components/square/square.component';
import { BoardComponent } from './components/board/board.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const Material = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
  MatSortModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatRadioModule
];

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent
  ],
  imports: [
    Material,
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

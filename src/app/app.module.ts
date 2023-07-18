import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxCheckboxModule } from '@aposin/ng-aquila/checkbox';
import { NxDocumentationIconModule } from '@aposin/ng-aquila/documentation-icons';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxFooterModule } from '@aposin/ng-aquila/footer';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NxMessageModule } from '@aposin/ng-aquila/message';
import { NxModalModule } from '@aposin/ng-aquila/modal';
import { NxOverlayModule } from '@aposin/ng-aquila/overlay';
import { NxPopoverModule } from '@aposin/ng-aquila/popover';
import { NxSmallStageModule } from '@aposin/ng-aquila/small-stage';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { NxTabsModule } from '@aposin/ng-aquila/tabs';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxImageModule } from '@aposin/ng-aquila/image';
import { NxBadgeModule } from '@aposin/ng-aquila/badge';
import { NgOptimizedImage } from '@angular/common';

import { AppComponent } from './app.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ScheduleGridComponent } from './schedule-grid/schedule-grid.component';
import { PresenterProfileComponent } from './presenter-profile/presenter-profile.component';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleGridComponent,
    PresenterProfileComponent,
    CustomDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    NxButtonModule,
    NxCheckboxModule,
    NxDropdownModule,
    NxFooterModule,
    NxFormfieldModule,
    NxGridModule,
    NxHeadlineModule,
    NxIconModule,
    NxInputModule,
    NxLinkModule,
    NxMessageModule,
    NxModalModule,
    NxOverlayModule,
    NxPopoverModule,
    NxSmallStageModule,
    NxSpinnerModule,
    NxHeaderModule,
    CommonModule,
    NxTabsModule,
    NxBadgeModule,
    NxCardModule,
    NxImageModule,
    NgOptimizedImage,
    NxDocumentationIconModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

/** Copyright Allianz 2023 */

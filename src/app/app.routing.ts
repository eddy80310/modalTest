import { ImportCsvComponent } from './import-csv/import-csv.component';
import { ImportComponent } from './import/import.component';
import { SettingsComponent } from './settings/settings.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { TimeSheetComponent } from './timesheet/timesheet.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTE: Routes = [
    { path: '', redirectTo: '/timesheet', pathMatch : 'full'},
    { path: 'timesheet', component: TimeSheetComponent },
    { path: 'approvals', component: ApprovalsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'import', component: ImportComponent },
    { path: 'import-csv', component: ImportCsvComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTE);
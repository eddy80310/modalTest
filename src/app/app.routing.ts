import { ApprovalsTwoComponent } from './approvals-two/approvals-two.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTE: Routes = [
    { path: '', component: ApprovalsTwoComponent },
]

export const routing = RouterModule.forRoot(APP_ROUTE);
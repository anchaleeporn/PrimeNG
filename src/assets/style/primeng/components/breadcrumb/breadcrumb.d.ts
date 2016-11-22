import { OnDestroy } from '@angular/core';
import { MenuItem } from '../common/api';
import { Router } from '@angular/router';
export declare class Breadcrumb implements OnDestroy {
    router: Router;
    model: MenuItem[];
    style: any;
    styleClass: string;
    constructor(router: Router);
    itemClick(event: any, item: MenuItem): void;
    ngOnDestroy(): void;
}
export declare class BreadcrumbModule {
}

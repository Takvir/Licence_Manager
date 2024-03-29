import { ChangeDetectorRef } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
export declare class MatSidenavContent extends MatDrawerContent {
    constructor(changeDetectorRef: ChangeDetectorRef, container: MatSidenavContainer);
}
export declare class MatSidenav extends MatDrawer {
    /** Whether the sidenav is fixed in the viewport. */
    fixedInViewport: boolean;
    private _fixedInViewport;
    /**
     * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
     * mode.
     */
    fixedTopGap: number;
    private _fixedTopGap;
    /**
     * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
     * fixed mode.
     */
    fixedBottomGap: number;
    private _fixedBottomGap;
}
export declare class MatSidenavContainer extends MatDrawerContainer {
    _drawers: any;
    _content: any;
}

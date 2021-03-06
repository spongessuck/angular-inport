import { OnInit, OnDestroy, ElementRef, NgZone, AfterViewInit } from '@angular/core';
import { ScrollObservable } from './utils/scroll-observable';
import { ElementBoundingPositions } from './utils/models';
import { WindowRuler } from './utils/viewport-ruler';
export declare class InviewDirective implements OnInit, OnDestroy, AfterViewInit {
    private _scrollObservable;
    private _element;
    private _zone;
    private _windowRuler;
    private _throttleType;
    private _offset;
    private _viewPortOffset;
    private _throttle;
    private _scrollElement;
    private _lazy;
    private _tooLazy;
    private _previous_state;
    private _data;
    offset: Array<number> | number;
    viewPortOffset: Array<number> | number;
    throttle: number;
    scrollELement: HTMLElement;
    lazy: boolean;
    tooLazy: boolean;
    data: any;
    private inview;
    private _scrollerSubscription;
    constructor(_scrollObservable: ScrollObservable, _element: ElementRef, _zone: NgZone, _windowRuler: WindowRuler);
    ngAfterViewInit(): void;
    private _getViewPortRuler();
    ngOnInit(): void;
    ngOnDestroy(): void;
    handleOnScroll(containersBounds: ElementBoundingPositions): void;
}

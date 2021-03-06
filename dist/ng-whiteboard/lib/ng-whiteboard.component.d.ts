import { AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import { NgWhiteboardService } from './ng-whiteboard.service';
import { WhiteboardOptions } from './ng-whiteboard.types';
export declare class NgWhiteboardComponent implements AfterViewInit, OnDestroy {
    private whiteboardService;
    private svgContainer;
    whiteboardOptions: WhiteboardOptions;
    color: string;
    backgroundColor: string;
    size: string;
    linejoin: 'miter' | 'round' | 'bevel' | 'miter-clip' | 'arcs';
    linecap: 'butt' | 'square' | 'round';
    init: EventEmitter<any>;
    clear: EventEmitter<any>;
    undo: EventEmitter<any>;
    redo: EventEmitter<any>;
    save: EventEmitter<any>;
    imageAdded: EventEmitter<any>;
    private selection;
    private subscriptionList;
    private undoStack;
    private redoStack;
    constructor(whiteboardService: NgWhiteboardService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private initSvg;
    private addImage;
    private eraseSvg;
    private saveSvg;
    private undoDraw;
    private redoDraw;
    private drawLine;
    private drawImage;
    private _unsubscribe;
    private svgString2Image;
    private saveAsSvg;
    private download;
    /**
     * convertir base64 a blob
     * @param b64DataUrl
     * @param contentType
     * @param sliceSize
     */
    b64toBlob: (b64DataUrl: any, sliceSize?: number) => Blob;
}

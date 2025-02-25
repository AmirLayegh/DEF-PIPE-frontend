﻿export interface ApiResult<T> {
    success: boolean;
    errorMessage: string;
    data: T
}

export interface ICanvasElement {
    id: string;
    type: ICanvasElementType;
}

export interface ICanvasPosition {
    x: number;
    y: number;
}

export interface ICanvasShape extends ICanvasElement {
    type: ICanvasElementType.Shape;
    name: string;
    icon?: string;
    width: number; 
    height: number;
    shape?: string;
    templateId?: string;
    properties: Array<ICanvasElementProperty>;
    position: ICanvasPosition;
    connectionPoints: Array<ICanvasShapeConnectionPoint>;
    canHaveChildren?: boolean;
    elements?: Array<ICanvasElement>;
}

export interface ICanvasShapeConnectionPoint {
    id: string;
    position: ICanvasPosition,
    type: ICanvasConnectionPointType
}

export interface ICanvasConnector extends ICanvasElement {
    type: ICanvasElementType.Connector;
    sourceShapeId: string;
    sourceConnectionPointId: string;
    destShapeId: string;
    destConnectionPointId: string;
}

export interface ICanvasShapeTemplate {
    id: string;
    name: string;
    description: string;
    category: string;
    width: number;
    height: number;
    shape?: string;
    properties: Array<ICanvasElementProperty>;
    connectionPoints: Array<ICanvasShapeConnectionPoint>;
    isContainer?: boolean;
    elements?: Array<ICanvasElement>
}

export interface ICanvasShapeTemplateGroup {
    name: string;
    items: Array<ICanvasShapeTemplate>;
}

export interface ICanvasElementProperty {
    name: string;
    value?: string | number;
    type: ICanvasElementPropertyType;
    options?: Array<string>;
    allowEditing?: boolean;
}

export enum ICanvasElementType {
    Shape = 0,
    Connector = 1
}

export enum ICanvasElementPropertyType {
    singleLineText = 0,
    multiLineText = 1,
    select = 2,
}

export enum ICanvasConnectionPointType {
    input = 0,
    output = 1
}

export enum ICanvasShapeSide {
    left = 0,
    right = 1,
    up = 2,
    down = 3
}


export interface IDSLInfo {
    name: string;
    templateProperties: Array<string>;
}
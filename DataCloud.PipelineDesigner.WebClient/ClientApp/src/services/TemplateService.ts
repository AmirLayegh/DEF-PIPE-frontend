import { ICanvasShapeTemplateGroup, ICanvasShapeTemplate, ICanvasShape, ICanvasElementType } from '../models';
import { v4 as uuidv4 } from 'uuid';

export class TemplateService {
    static saveTemplateTimeoutHandle = null;

    public createNewRootShape() {
        let rootShape: ICanvasShape = {
            id: uuidv4(),
            name: "Root",
            type: ICanvasElementType.Shape,
            canHaveChildren: true,
            elements: [],
            position: null,
            properties: [],
            connectionPoints: [],
            width: 0,
            height: 0
        }

        return rootShape;
    }

    public getTemplateGroups(templates: Array<ICanvasShapeTemplate>, filterText?: string)  {
        filterText = (filterText || '').toLowerCase();
        templates = templates.filter(template => !filterText || template.name.toLowerCase().indexOf(filterText) > -1);

        let categories = templates
            .map(x => x.category)
            .filter((val, index, self) => self.indexOf(val) === index); // get unique values

        let templateGroups: Array<ICanvasShapeTemplateGroup> = categories.map(x => {
            return { name: x, items: templates.filter(template => template.category === x) }
        });

        return templateGroups;
    }

    public saveTemplate(template: ICanvasShapeTemplate) {
        if (TemplateService.saveTemplateTimeoutHandle) {
            clearTimeout(TemplateService.saveTemplateTimeoutHandle)
        }
        TemplateService.saveTemplateTimeoutHandle = setTimeout(() => {
            TemplateService.saveTemplateTimeoutHandle = null;
            fetch("/api/templates", {
                method: "POST",
                body: JSON.stringify(template),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }, 500);
    }
   
    public persistTemplate(templates: Array<ICanvasShapeTemplate>) {
        
        localStorage.setItem("datacloud-templates", JSON.stringify(templates));
    }
}
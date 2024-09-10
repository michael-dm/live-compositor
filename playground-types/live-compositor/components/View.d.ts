import * as Api from '../api';
import LiveCompositorComponent, { SceneBuilder } from '../component';
import { Transition } from './common';
export type ViewProps = {
    /**
     * Id of a component.
     */
    id?: Api.ComponentId;
    /**
     * Width of a component in pixels. Exact behavior might be different based on the parent
     * component:
     * - If the parent component is a layout, check sections "Absolute positioning" and "Static
     * positioning" of that component.
     * - If the parent component is not a layout, then this field is required.
     */
    width?: number;
    /**
     * Height of a component in pixels. Exact behavior might be different based on the parent
     * component:
     * - If the parent component is a layout, check sections "Absolute positioning" and "Static
     * positioning" of that component.
     * - If the parent component is not a layout, then this field is required.
     */
    height?: number;
    /**
     * Direction defines how static children are positioned inside a View component.
     */
    direction?: Api.ViewDirection;
    /**
     * Distance in pixels between this component's top edge and its parent's top edge.
     * If this field is defined, then the component will ignore a layout defined by its parent.
     */
    top?: number;
    /**
     * Distance in pixels between this component's left edge and its parent's left edge.
     * If this field is defined, this element will be absolutely positioned, instead of being
     * laid out by its parent.
     */
    left?: number;
    /**
     * Distance in pixels between the bottom edge of this component and the bottom edge of its parent.
     * If this field is defined, this element will be absolutely positioned, instead of being
     * laid out by its parent.
     */
    bottom?: number;
    /**
     * Distance in pixels between this component's right edge and its parent's right edge.
     * If this field is defined, this element will be absolutely positioned, instead of being
     * laid out by its parent.
     */
    right?: number;
    /**
     * Rotation of a component in degrees. If this field is defined, this element will be
     * absolutely positioned, instead of being laid out by its parent.
     */
    rotation?: number;
    /**
     * Defines how this component will behave during a scene update. This will only have an
     * effect if the previous scene already contained a View component with the same id.
     */
    transition?: Transition;
    /**
     * (**default=`"hidden"`**) Controls what happens to content that is too big to fit into an area.
     */
    overflow?: Api.Overflow;
    /**
     * (**default=`"#00000000"`**) Background color in a `"#RRGGBBAA"` format.
     */
    backgroundColorRgba?: Api.RGBAColor;
};
declare class View extends LiveCompositorComponent<ViewProps> {
    builder: SceneBuilder<ViewProps>;
}
export default View;

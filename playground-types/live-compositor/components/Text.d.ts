import * as Api from '../api';
import LiveCompositorComponent, { SceneBuilder } from '../component';
export type TextProps = {
    children?: (string | number)[] | string | number;
    /**
     * Id of a component.
     */
    id?: Api.ComponentId;
    /**
     * Width of a texture that text will be rendered on. If not provided, the resulting texture
     * will be sized based on the defined text but limited to `max_width` value.
     */
    width?: number;
    /**
     * Height of a texture that text will be rendered on. If not provided, the resulting texture
     * will be sized based on the defined text but limited to `max_height` value.
     * It's an error to provide `height` if `width` is not defined.
     */
    height?: number;
    /**
     * (**default=`7682`**) Maximal `width`. Limits the width of the texture that the text will be rendered on.
     * Value is ignored if `width` is defined.
     */
    maxWidth?: number;
    /**
     * (**default=`4320`**) Maximal `height`. Limits the height of the texture that the text will be rendered on.
     * Value is ignored if height is defined.
     */
    maxHeight?: number;
    /**
     * Font size in pixels.
     */
    fontSize: number;
    /**
     * Distance between lines in pixels. Defaults to the value of the `font_size` property.
     */
    lineHeight?: number;
    /**
     * (**default=`"#FFFFFFFF"`**) Font color in `#RRGGBBAA` format.
     */
    colorRgba?: Api.RGBAColor;
    /**
     * (**default=`"#00000000"`**) Background color in `#RRGGBBAA` format.
     */
    backgroundColorRgba?: Api.RGBAColor;
    /**
     * (**default=`"Verdana"`**) Font family. Provide [family-name](https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#family-name-value)
     * for a specific font. "generic-family" values like e.g. "sans-serif" will not work.
     */
    fontFamily?: string;
    /**
     * (**default=`"normal"`**) Font style. The selected font needs to support the specified style.
     */
    style?: Api.TextStyle;
    /**
     * (**default=`"left"`**) Text align.
     */
    align?: Api.HorizontalAlign;
    /**
     * (**default=`"none"`**) Text wrapping options.
     */
    wrap?: Api.TextWrapMode;
    /**
     * (**default=`"normal"`**) Font weight. The selected font needs to support the specified weight.
     */
    weight?: Api.TextWeight;
};
declare class Text extends LiveCompositorComponent<TextProps> {
    builder: SceneBuilder<TextProps>;
}
export default Text;

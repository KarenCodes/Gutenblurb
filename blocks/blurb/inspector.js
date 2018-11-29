/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls,
    PanelColorSettings
} = wp.editor;
const {
    TextControl,
    TextareaControl,
    PanelBody,
    PanelRow,
    RangeControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: { 
          moreText, moreTextHeading, colorHeading, colorHeadingBkg, opacityHeadingBkg,colorMoreText, colorOverlay, opacityOverlay
        }, 
          setAttributes } = this.props;

        return (
            <InspectorControls>
                <PanelBody
                    title={ __( 'Blurb Settings', 'gutenblurb' ) }
                    initialOpen={ true }
                >
                    <PanelRow>
                        <p>{ __( 'Enter text below that will appear when hovering over the block.', 'gutenblurb' ) }</p>
                    </PanelRow>
                </PanelBody>

                <PanelBody>
                    <TextControl
                        label={ __( 'More Text Heading', 'gutenblurb' ) }
                        help={ __( 'Heading for text shown on hover', 'gutenblurb' ) }
                        value={ moreTextHeading }
                        onChange={ moreTextHeading => setAttributes( { moreTextHeading } ) }
                    />
                </PanelBody>

                <PanelBody>
                    <TextareaControl
                        label={ __( 'More Text', 'gutenblurb' ) }
                        help={ __( 'Text to show on hover', 'gutenblurb' ) }
                        value={ moreText }
                        onChange={ moreText => setAttributes( { moreText } ) }
                    />
                </PanelBody>
                
                <PanelBody
                    title={__( 'Color Settings', 'gutenblurb' ) }
                    initialOpen= { false }
                >
                  <PanelColorSettings
                      title={ __( 'Color for Heading', 'gutenblurb' ) }
                      colorSettings={[
                        {
                          label: __("Color Picker"),
                          value: colorHeading,
                          onChange: colorHeading => {
                            setAttributes({ colorHeading });
                          }
                        }
                      ]}
                      />
                  
                  <PanelColorSettings
                      title={ __( 'Color for Heading Background', 'gutenblurb' ) }
                      colorSettings={[
                        {
                          label: __("Color Picker"),
                          value: colorHeadingBkg,
                          onChange: colorHeadingBkg => {
                            setAttributes({ colorHeadingBkg });
                          }
                        }
                      ]}
                      />
                  
                  <RangeControl
                    beforeIcon="arrow-left-alt2"
                    afterIcon="arrow-right-alt2"
                    label={ __( 'Heading Background Opacity Percentage', 'gutenblurb' ) }
                    value={ opacityHeadingBkg }
                    onChange={ opacityHeadingBkg => setAttributes( { opacityHeadingBkg } ) }
                    initialPosition= {100}
                    min={ 1 }
                    max={ 100 }
                    />
              
                  <PanelColorSettings
                      title={ __( 'Color for More Text', 'gutenblurb' ) }
                      colorSettings={[
                        {
                          label: __("Color Picker"),
                          value: colorMoreText,
                          onChange: colorMoreText => {
                            setAttributes({ colorMoreText });
                          }
                        }
                      ]}
                      />

                  <PanelColorSettings
                      title={ __( 'Color for More Text Overlay', 'gutenblurb' ) }
                      colorSettings={[
                        {
                          label: __("Color Picker"),
                          value: colorOverlay,
                          onChange: colorOverlay => {
                            setAttributes({ colorOverlay });
                          }
                        }
                      ]}
                      />
                  <RangeControl
                    beforeIcon="arrow-left-alt2"
                    afterIcon="arrow-right-alt2"
                    label={ __( 'Overlay Opacity Percentage', 'gutenblurb' ) }
                    value={ opacityOverlay }
                    onChange={ opacityOverlay => setAttributes( { opacityOverlay } ) }
                    initialPosition= {100}
                    min={ 1 }
                    max={ 100 }
                    />

                </PanelBody>

            </InspectorControls>
        );
    }
}

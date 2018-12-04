/**
 * Internal block libraries
 */
import icons from './icons';
import compute from './compute';
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    RichText,
    MediaUpload
} = wp.editor;
const {
    Button
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Edit extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
      const {
          attributes: { heading, colorHeading, colorHeadingBkg,opacityHeadingBkg, moreText, moreTextHeading, colorMoreText, colorOverlay, opacityOverlay, backgroundImage, backgroundImageID 
          },
          className, setAttributes, isSelected  } = this.props;
          const onChangeHeading = heading => { setAttributes( { heading } ) };

          const onSelectImage = img => {
            setAttributes( {
                backgroundImageID: img.id,
                backgroundImage: img.url,
            });
          };
          const onRemoveImage = () => {
            setAttributes({
                backgroundImageID: null,
                backgroundImage: null,
            });
          };
        
        return (
            <div 
              className={ className }
              style={ 
                {backgroundImage: compute.backgroundImage( backgroundImage ) }
                }
            >
              
            { ! backgroundImageID &isSelected ? (

              <MediaUpload
                  onSelect={ onSelectImage }
                  type="image"
                  value={ backgroundImageID }
                  render={ ( { open } ) => (
                      <Button
                          className={ "button button-large" }
                          onClick={ open }
                      >
                          { icons.upload }
                          { __( ' Upload Image', 'gutenblurb' ) }
                      </Button>
                  ) }
              >
              </MediaUpload>

              ) : (

              <div class="button-wrapper">

                  { isSelected ? (

                      <Button
                          className="remove-image"
                          onClick={ onRemoveImage }
                      >
                          { icons.remove }
                      </Button>

                  ) : null }

              </div>
              )}

              <RichText
                tagName="h3"
                placeholder={ __( 'Add your heading', 'gutenblurb' ) }
                keepPlaceholderOnFocus={ true }
                onChange={ onChangeHeading }
                value={ heading }
                // if the block is selected show the heading even if hovering
                  style={ { color: colorHeading, 
                    backgroundColor: compute.rgba( colorHeadingBkg,       opacityHeadingBkg ),
                    opacity: isSelected && 1 
                    } } 
                className= { "heading" }
              />

              {/* on hover (from style.scss) show More Text if block is selected  */}
              { isSelected ? null  : (
                  <div className ="overlay"
                    style={{
                      backgroundColor: compute.rgba( colorOverlay, opacityOverlay )
                    }}                  
                    >
                      <div 
                        className = "more-text" 
                        > 
                        <h4
                          style={ {
                            color: colorMoreText 
                          } }
                        >
                          { moreTextHeading }
                        </h4>
                        <p
                        style={ {
                          color: colorMoreText 
                        } }
                        >
                          { moreText }
                        </p>
                      </div>
                    </div> 
                )}

            </div>
        );
    }
}

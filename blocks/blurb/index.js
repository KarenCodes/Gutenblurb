/**
 * Block dependencies
 */
import Inspector from './inspector';
import Edit from './edit';
import attributes from './attributes';
import './style.scss';
import './editor.scss';
import compute from './compute';

const { __ } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;

/**
 * Register blurb block
 */
export default registerBlockType(
    'gutenblurb/blurb',
    {
        title: __('Blurb', 'gutenblurb'),
        description: __('Enter info for a Blurb block', 'gutenblurb'),
        category: 'common',
        icon: {

        // ** revisit this
            background: 'rgba(0, 255, 233, 0.9)',
            src: 'smiley',
        },
        // ** revisit this
        keywords: [
            __('Palette', 'gutenblurb'),
            __('Settings', 'gutenblurb'),
            __('Scheme', 'gutenblurb'),
        ],
        attributes,
        
        edit: props => {
            const { setAttributes } = props;
            
            return [
                <Inspector {...{ setAttributes, ...props }} />,
                <Edit {...{ setAttributes, ...props }} />
            ];
        },
        save: props => {
            const { attributes: { heading, moreText, moreTextHeading,colorHeading, colorHeadingBkg, opacityHeadingBkg, colorMoreText, colorOverlay, opacityOverlay, backgroundImage } } = props;
           
            return (
                
              <div 
                className = "blurb"
                style={ 
                  { backgroundImage: compute.backgroundImage( backgroundImage ) }
                  }
              >
                <h3 
                  className="heading" 
                  style={ { 
                    color: colorHeading,
                    backgroundColor: compute.rgba( colorHeadingBkg, opacityHeadingBkg )
                    } }
                    > 
                  { heading }
                </h3>
                <div className = "overlay"
                  style={ {
                  backgroundColor: compute.rgba( colorOverlay, opacityOverlay )
                  } }
                  >
                  <div 
                    className = "more-text" 
                    style={ {
                      color: colorMoreText 
                    } }
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

            </div>
          );
        },
        deprecated: [ 
          {
            attributes: attributes,
            
            save: props => {
              const { attributes: { heading, moreText, moreTextHeading,colorHeading, colorHeadingBkg, opacityHeadingBkg, colorMoreText, colorOverlay, opacityOverlay, backgroundImage } } = props;
              
              return (
                  
                  <div 
                    className = "blurb"
                    style={ 
                      { backgroundImage: compute.backgroundImage( backgroundImage ) }
                      }
                  >
                    <h3 
                      className="heading" 
                      style={ { 
                        color: colorHeading,
                        backgroundColor: compute.rgba( colorHeadingBkg, opacityHeadingBkg )
                        } }
                        > 
                      { heading }
                    </h3>
                    <div className = "overlay"
                      style={ {
                      backgroundColor: compute.rgba( colorOverlay, opacityOverlay )
                      } }
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

                </div>
              );
            }, 
          }
        ]
    },
);

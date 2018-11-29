const compute = {};

// convert colorOverlay and opacityOverlay to RGBA
compute.rgba = (hex, opacity) => {
  if ( !hex) hex = "#000";
  if (!opacity) opacity = 50;
  var h=hex.replace('#', '');
  h =  h.match(new RegExp('(.{'+h.length/3+'})', 'g'));

  for(var i=0; i<h.length; i++)
      h[i] = parseInt(h[i].length==1? h[i]+h[i]:h[i], 16);
 
      //opacityOverload is a percentage so divide by 100
  if (typeof opacity != 'undefined')  h.push(opacity/100);

  return 'rgba('+h.join(',')+')';
}

// to avoid a 404 error, only set background image if an image has been selected
compute.backgroundImage = ( backgroundImage ) => {
  const bkgImg = backgroundImage ? (
    `url(${ backgroundImage })` 
    ) : (
    "none"
    );
    return bkgImg;
}

export default compute;
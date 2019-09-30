import { Dimensions, PixelRatio } from 'react-native';

//Guideline sizes are based on iphone 6/7
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

let dims = Dimensions.get("window");
const handler = (newDims) => (dims = newDims);
Dimensions.addEventListener("change", handler);
const isLandscape = () => (dims.width > dims.height);
let screenWidth = dims.width;
let screenHeight = dims.height;
const [shortDimension, longDimension] = screenWidth < screenHeight ? [screenWidth, screenHeight] : [screenHeight, screenWidth];

const scaleFactor = shortDimension / guidelineBaseWidth;
const verticalScaleFactor = longDimension / guidelineBaseHeight;

const scale = size => PixelRatio.roundToNearestPixel(size * scaleFactor);
const verticalScale = size => PixelRatio.roundToNearestPixel(size * verticalScaleFactor);
const moderateScale = (size, factor = 0.5) => PixelRatio.roundToNearestPixel(size + (scale(size) - size) * factor);
const sm25 = (size, factor = 0.25) => PixelRatio.roundToNearestPixel(size + (scale(size) - size) * factor);

const widthPercentageToDP = widthPercent => {
  // Parse string percentage input and convert it to number.
  const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(dims.width * elemWidth / 100);
};

const heightPercentageToDP = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(dims.height * elemHeight / 100);
};

const sc = scale;
const sm = moderateScale;

export { sc, scale, verticalScale, moderateScale, sm, sm25, widthPercentageToDP, heightPercentageToDP, isLandscape };
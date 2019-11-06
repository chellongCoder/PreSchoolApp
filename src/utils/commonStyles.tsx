import { StyleSheet } from "react-native";
import commonColor from "./commonColor";
import { Platform } from "react-native";
import { moderateScale, verticalScale } from './scale';

const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAlign: {
    textAlign: 'center'
  },
  appBar: {
    backgroundColor: "#79B45D",
    height: APPBAR_HEIGHT
  },
  imageContain: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  choiceButton: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  inputStyle: {
    backgroundColor: "transparent",
    borderColor: commonColor.cardBorderColor,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    height: moderateScale(40),
    borderRadius: 5,
  },

  cardHeader: {
    // marginTop: moderateScale(10),
  },
  defaultText: {
    fontSize: moderateScale(commonColor.fontSizeBase),
    color: commonColor.defaultTextColor,
  },
  boldText : {
    fontSize: moderateScale(commonColor.DefaultFontSize*1.2),
    color: commonColor.defaultTextColor,
    fontWeight : "bold",
  },
  headerText: {
    fontSize: moderateScale(commonColor.fontSizeH1),
    // color: commonColor.whitebackground,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: moderateScale(35)
  },
  buttonText: {
    fontSize: moderateScale(commonColor.DefaultFontSize),
    color: commonColor.textButton,
  },
  lightText: {
    fontSize: moderateScale(commonColor.DefaultFontSize),
    color: commonColor.textColorWhite,
  },
  dangerText: {
    fontSize: moderateScale(commonColor.DefaultFontSize),
    color: commonColor.textDanger
  },
  textHeader: {
    fontSize: moderateScale(commonColor.fontSizeHeader),
    color: commonColor.textHeader
  },
  textTitle: {
    fontSize: moderateScale(24),
    color: commonColor.whitebackground
  },
  textButton: {
    fontSize: verticalScale(commonColor.DefaultFontSize),
    color: commonColor.textButton,
    lineHeight: moderateScale(20)
  },
  textLargeButton: {
    fontSize: verticalScale(commonColor.fontSizeH3),
    color: commonColor.textButton
  },
  textNote: {
    fontSize: verticalScale(commonColor.getTextSizeNote),
    color: commonColor.textNote,
  },
  textTag: {
    fontSize: verticalScale(commonColor.DefaultFontSize),
    backgroundColor: commonColor.textButton,
    color: commonColor.defaultTextColor
  },
  imageSmall: {
    width: moderateScale(commonColor.iconSizeSmall),
    height: moderateScale(commonColor.iconSizeSmall),
    resizeMode: "contain"
  },
  imageNormal: {
    width: moderateScale(commonColor.iconSizeNormal),
    height: moderateScale(commonColor.iconSizeNormal),
    resizeMode: "contain"
  },
  imageMedium: {
    width: moderateScale(commonColor.iconSizeMedium),
    height: moderateScale(commonColor.iconSizeMedium),
    resizeMode: "contain"
  },
  imageLarge: {
    width: moderateScale(commonColor.iconSizeLarge),
    height: moderateScale(commonColor.iconSizeLarge),
    resizeMode: "contain"
  },
  imageHuge: {
    width: moderateScale(commonColor.iconSizeHuge),
    height: moderateScale(commonColor.iconSizeHuge),
    resizeMode: "contain"
  },
  commonButton: {
    height: moderateScale(40)
  },
  leftIcon: {
    position: 'absolute',
    alignSelf: 'center',
    left: 0,
  },
  rightIcon: {
    position: 'absolute',
    alignSelf: 'center',
    right: 0,
  },
  badge: {
    position: 'absolute',
    right: moderateScale(-15),
    top: moderateScale(-15),
  },
  badgeText: {
    fontSize: commonColor.DefaultFontSize,
    color: commonColor.badgeColor,
  }
});

export default commonStyles;

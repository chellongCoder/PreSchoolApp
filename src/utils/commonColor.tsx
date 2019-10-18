
import { Platform, Dimensions, PixelRatio } from "react-native";
import { moderateScale } from './scale';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = undefined;

export default {
    platformStyle,
    platform,
    // AndroidRipple
    androidRipple: true,
    androidRippleColor: 'rgba(256, 256, 256, 0.3)',
    androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',

    // Badge
    badgeBg: '#ED1727',
    badgeColor: '#fff',
    // New Variable
    badgePadding: platform === 'ios' ? 3 : 0,

    // Button
    btnFontFamily: platform === 'ios' ? 'System' : 'Roboto_medium',
    btnDisabledBg: '#b5b5b5',
    btnDisabledClr: '#F7F7F6',
    btnDialpad: '#3694EE',
    btnFullWidthButton: '#3694EE',
    choiceButton: '#3694EE',
    btnDisable: '#AFAFAF',
    // CheckBox
    CheckboxRadius: platform === 'ios' ? 13 : 0,
    CheckboxBorderWidth: platform === 'ios' ? 1 : 2,
    CheckboxPaddingLeft: platform === 'ios' ? 4 : 2,
    CheckboxPaddingBottom: platform === 'ios' ? 0 : 5,
    CheckboxIconSize: platform === 'ios' ? 21 : 14,
    CheckboxIconMarginTop: platform === 'ios' ? undefined : 1,
    CheckboxFontSize: platform === 'ios' ? 23 / 0.9 : 18,
    DefaultFontSize: 13,
    checkboxBgColor: '#039BE5',
    checkboxSize: 20,
    checkboxTickColor: '#fff',

    // Segment
    segmentBackgroundColor: '#F7F7F6',
    segmentActiveBackgroundColor: '#F7F7F6',
    segmentTextColor: '#fff',
    segmentActiveTextColor: '#3F51B5',
    segmentBorderColor: '#CFCFCF',
    segmentBorderColorMain: '#3F51B5',

    // New Variable
    get defaultTextColor() {
        return this.textColor;
    },

    get btnPrimaryBg() {
        return this.brandPrimary;
    },
    get btnPrimaryColor() {
        return this.inverseTextColor;
    },
    get btnInfoBg() {
        return this.brandInfo;
    },
    get btnInfoColor() {
        return this.inverseTextColor;
    },
    get btnSuccessBg() {
        return this.brandSuccess;
    },
    get btnSuccessColor() {
        return this.inverseTextColor;
    },
    get btnDangerBg() {
        return this.brandDanger;
    },
    get btnDangerColor() {
        return this.inverseTextColor;
    },
    get btnWarningBg() {
        return this.brandWarning;
    },
    get btnWarningColor() {
        return this.inverseTextColor;
    },
    get btnTextSize() {
        return platform === 'ios'
            ? this.fontSizeBase * 1.1
            : this.fontSizeBase - 1;
    },
    get btnTextSizeLarge() {
        return this.fontSizeBase * 1.5;
    },
    get btnTextSizeSmall() {
        return this.fontSizeBase * 0.8;
    },
    get getTextSizeNote() {
        return this.fontSizeBase * 0.7;
    },
    get borderRadiusLarge() {
        return this.fontSizeBase * 3.8;
    },

    buttonPadding: 6,
    get iconSizeNormal() {
        return this.iconFontSize * 1.5;
    },
    get iconSizeLarge() {
        return this.iconFontSize * 1.8;
    },
    get iconSizeHuge() {
        return this.iconFontSize * 2.5;
    },
    get iconSizeMedium() {
        return this.iconFontSize * 0.7;
    },
    get iconSizeSmall() {
        return this.iconFontSize * 0.5;
    },
    //background
    tabbarBackground: '#FFFFFF',
    commonBackground: '#FFFFFF',
    partBackground: '#E28A22',
    questionBackground: '#FF833E',
    scoreColor: '#E84E27',
    buttonBackground: '#FFFFFF',
    headerBackground: '#00918C',
    whitebackground: '#FFFFFF',
    footerBackground: '#FFFFFF',
    defaultBackground: '#F7F7F6',
    brownBackground: '#CDCED2',
    disableBackground: '#E8E8E8',
    finishedBackground: '#00D936',
    //textWhite
    placeholderText: '#FFFFFF',

    textButton: '#3694EE',
    textHeader: "#454F63",

    // Card
    cardDefaultBg: '#fff',
    // label
    backgroundLabel: '#E1E1E1',
    manTelLabel: {
        width: 160,
        height: 80,
    },
    //slider
    imageSlider: {
        width: 305,
        height: 320,
    },
    //image term
    imageTermScreen: {
        width: 248,
        height: 221,
    },
    //note :
    noteBackgroundColor: '#FFF7D5',
    commonImageStyle: {
        resizeMode: 'contain',
        width: moderateScale(this.iconSizeNormal),
        height: moderateScale(this.iconSizeNormal),
    },
    messageButton: '#FDC006',
    // Color
    brandPrimary: '#2874F0',
    brandInfo: '#62B1F6',
    brandSuccess: '#5cb85c',
    brandDanger: '#F86C6C',
    brandWarning: '#f0ad4e',
    brandSidebar: '#252932',

    // Font
    fontFamily: platform === 'ios' ? 'System' : 'Roboto',
    fontSizeBase: 14,
    //border
    noteBorder: '#FFE470',
    inputBlurBorderColor: '#47DE99',
    get fontSizeH1() {
        return this.fontSizeBase * 1.8;
    },
    get fontSizeH2() {
        return this.fontSizeBase * 1.6;
    },
    get fontSizeH3() {
        return this.fontSizeBase * 1.4;
    },
    get fontSizeHeader() {
        return this.fontSizeBase * 2.5;
    },

    // Footer
    footerHeight: 55,
    footerDefaultBg: '#3694EE',

    // FooterTab
    tabBarTextColor: '#8bb3f4',
    tabBarTextSize: platform === 'ios' ? 14 : 11,
    activeTab: platform === 'ios' ? '#007aff' : '#fff',
    sTabBarActiveTextColor: '#007aff',
    tabBarActiveTextColor: '#fff',
    tabActiveBgColor: platform === 'ios' ? '#1569f4' : undefined,

    // Tab
    tabDefaultBg: '#F7F7F6',
    topTabBarTextColor: '#b3c7f9',
    topTabBarActiveTextColor: '#fff',
    topTabActiveBgColor: platform === 'ios' ? '#1569f4' : undefined,
    topTabBarBorderColor: '#707070',
    topTabBarActiveBorderColor: '#fff',

    // Header
    toolbarBtnColor: '#fff',
    toolbarDefaultBg: '#2874F0',
    toolbarHeight: platform === 'ios' ? 64 : 56,
    toolbarIconSize: platform === 'ios' ? 20 : 22,
    toolbarSearchIconSize: platform === 'ios' ? 20 : 23,
    toolbarInputColor: platform === 'ios' ? '#CECDD2' : '#fff',
    searchBarHeight: platform === 'ios' ? 30 : 40,
    toolbarInverseBg: '#222',
    toolbarTextColor: '#fff',
    iosStatusbar: 'light-content',
    toolbarDefaultBorder: '#2874F0',

    // Icon
    iconFamily: 'Ionicons',
    iconFontSize: platform === 'ios' ? 30 : 28,
    iconMargin: 7,
    iconHeaderSize: platform === 'ios' ? 33 : 24,

    // InputGroup
    inputFontSize: 17,
    inputBorderColor: '#0081F6',
    inputBorderNormal: '#E4E7F1',
    inputSuccessBorderColor: '#2b8339',
    inputErrorBorderColor: '#ed2f2f',

    get inputColor() {
        return this.textColor;
    },
    get inputColorPlaceholder() {
        return '#575757';
    },

    inputGroupMarginBottom: 10,
    inputHeightBase: 50,
    inputPaddingLeft: 5,

    get inputPaddingLeftIcon() {
        return this.inputPaddingLeft * 8;
    },

    // Line Height
    btnLineHeight: 19,
    lineHeightH1: 32,
    lineHeightH2: 27,
    lineHeightH3: 22,
    iconLineHeight: platform === 'ios' ? 37 : 30,
    lineHeight: platform === 'ios' ? 20 : 24,

    // List
    listBorderColor: '#ECECEC',
    listDividerBg: '#f4f4f4',
    listItemHeight: 45,
    listBtnUnderlayColor: '#DDD',

    // Card
    cardBorderColor: '#D1D1D1',

    // Changed Variable
    listItemPadding: platform === 'ios' ? 10 : 12,

    listNoteColor: '#808080',
    listNoteSize: 13,

    // Progress Bar
    defaultProgressColor: '#E4202D',
    inverseProgressColor: '#1A191B',

    // Radio Button
    radioBtnSize: platform === 'ios' ? 25 : 23,
    radioSelectedColorAndroid: '#5067FF',

    // New Variable
    radioBtnLineHeight: platform === 'ios' ? 29 : 24,

    radioColor: '#7e7e7e',

    // Spinner
    defaultSpinnerColor: '#45D56E',
    inverseSpinnerColor: '#1A191B',

    // Tabs
    tabBgColor: '#F8F8F8',
    tabFontSize: 15,
    tabTextColor: '#222222',

    // Text
    textColor: '#000',
    textColorWhite: '#FFFFFF',
    blurTextColor: '#C4C4C4',
    inverseTextColor: '#F7F7F6',
    noteFontSize: 14,
    textType: '#7B7B7B',
    textNote: '#808080',
    textDanger: '#d9534f',
    // Title
    titleFontfamily: platform === 'ios' ? 'System' : 'Roboto_medium',
    titleFontSize: platform === 'ios' ? 17 : 19,
    subTitleFontSize: platform === 'ios' ? 12 : 14,
    subtitleColor: '#FFF',

    // New Variable
    titleFontColor: '#FFF',

    // Other
    borderRadiusBase: platform === 'ios' ? 5 : 2,
    borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    contentPadding: 10,

    dropdownBg: '#000',
    dropdownLinkColor: '#414142',
    inputLineHeight: 24,
    jumbotronBg: '#C9C9CE',
    jumbotronPadding: 30,
    deviceWidth,
    deviceHeight,

    // New Variable
    inputGroupRoundedBorderRadius: 30,
};

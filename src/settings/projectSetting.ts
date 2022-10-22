import type { ProjectConfig } from '/#/config';
import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum, TopMenuAlignEnum } from '/@/enums/menuEnum';
import { CacheTypeEnum } from '/@/enums/cacheEnum';
import {
  ContentEnum,
  PermissionModeEnum,
  ThemeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum,
} from '/@/enums/appEnum';
import { SIDE_BAR_BG_COLOR_LIST, HEADER_PRESET_BG_COLOR_LIST } from './designSetting';
import { primaryColor } from '../../build/config/themeConfig';

// ! You need to clear the browser cache after the change
const setting: ProjectConfig = {
  "showSettingButton": false,
  "showDarkModeToggle": true,
  "settingButtonPosition": SettingButtonPositionEnum.AUTO,
  "permissionMode": PermissionModeEnum.ROUTE_MAPPING,
  "permissionCacheType": CacheTypeEnum.LOCAL,
  "sessionTimeoutProcessing": SessionTimeoutProcessingEnum.ROUTE_JUMP,
  "themeColor": primaryColor,
  "grayMode": false,
  "colorWeak": false,
  "fullContent": false,
  "contentMode": ContentEnum.FIXED,
  "showLogo": false,
  "showFooter": false,
  "headerSetting": {
    "bgColor": HEADER_PRESET_BG_COLOR_LIST[1],
    "fixed": true,
    "show": true,
    "theme": ThemeEnum.DARK,
    "useLockPage": true,
    "showFullScreen": true,
    "showDoc": true,
    "showNotice": true,
    "showSearch": false
  },
  "menuSetting": {
    "bgColor": SIDE_BAR_BG_COLOR_LIST[0],
    "fixed": true,
    "collapsed": false,
    "siderHidden": false,
    "collapsedShowTitle": false,
    "canDrag": false,
    "show": true,
    "hidden": false,
    "menuWidth": 210,
    "mode": MenuModeEnum.HORIZONTAL,
    "type": MenuTypeEnum.TOP_MENU,
    "theme": ThemeEnum.DARK,
    "topMenuAlign": TopMenuAlignEnum.CENTER,
    "trigger": TriggerEnum.HEADER,
    "accordion": true,
    "closeMixSidebarOnChange": false,
    "mixSideTrigger": MixSidebarTriggerEnum.CLICK,
    "mixSideFixed": false,
    "split": false
  },
  "multiTabsSetting": {
    "cache": false,
    "show": false,
    "canDrag": true,
    "showQuick": true,
    "showRedo": true,
    "showFold": true
  },
  "transitionSetting": {
    "enable": true,
    "basicTransition": RouterTransitionEnum.FADE_SIDE,
    "openPageLoading": true,
    "openNProgress": false
  },
  "openKeepAlive": true,
  "lockTime": 0,
  "showBreadCrumb": false,
  "showBreadCrumbIcon": false,
  "useErrorHandle": false,
  "useOpenBackTop": true,
  "canEmbedIFramePage": true,
  "closeMessageOnSwitch": true,
  "removeAllHttpPending": false
};

export default setting;

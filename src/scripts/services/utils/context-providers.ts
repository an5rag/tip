export const isMobile = () => {
  // return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|
  // blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|
  // kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone
  // |p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|
  // vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent));
  return window.screen.width <= 640;
};

export enum DeviceType {
  mobile,
  tablet,
  desktop
}

export const getDeviceType = (): DeviceType => {
  const windowWidth = window.screen.width;
  if (windowWidth <= 640) {
    return DeviceType.mobile;
  } else if (windowWidth <= 720) {
    return DeviceType.tablet;
  } else {
    return DeviceType.desktop;
  }
};

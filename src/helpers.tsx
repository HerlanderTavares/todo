export const viewPortHeight = () => {
  const resize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  resize();
  window.addEventListener('resize', resize);
};

export const checkProp = (prop: any, defaultValue: any = null) => (prop ? prop : defaultValue);

export const checkClass = (classNameProp: string) => (classNameProp ? ' ' + classNameProp : '');

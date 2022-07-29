const getValue = (key) => {
  if (typeof window != "undefined" && window.localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return null;
  }
};

const SetValue = (key, value) => {
 if (typeof window != "undefined") window.localStorage.setItem(key, JSON.stringify(value));
};

export { getValue, SetValue };

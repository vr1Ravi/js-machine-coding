window.localStorageWithExpiry = {
  setItem: function (key, value, expiryTime) {
    let result = {
      value,
      expired: Date.now() + expiryTime,
    };
    localStorage.setItem(key, JSON.stringify(result));
  },
  getItem: function (key) {
    const entry = JSON.parse(localStorage.getItem(key));
    if (!entry) return;
    if (entry.expired >= Date.now()) {
      localStorage.removeItem(key);
      return;
    }
    return entry.value;
  },
  clear: function () {
    localStorage.clear();
  },
};

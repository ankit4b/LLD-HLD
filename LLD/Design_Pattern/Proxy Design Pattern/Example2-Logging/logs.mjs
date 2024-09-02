const logs = {
  latestLogs: null,
  history: [],
};

const proxy = new Proxy(logs, {
  get(target, property) {
    // console.log("-> get", { target, property });
    console.log(`-> get : ${property}`);

    return target[property];
  },
  set(target, property, value) {
    // console.log("-> set", { target, property, value });
    console.log(`-> set : ${property}`);
    const latestRelease = value[value.length - 1];
    const { version } = latestRelease;
    if (version.split(".").length !== 3) {
      return false;
    }
    target[property] = value;
    target["latestLogs"] = latestRelease;
    return true;
  },
});

export default proxy;

(() => {
  var __webpack_modules__ = {
    "./src/message.js": (module) => {
      eval(
        'module.exports = "Hi there";\n\n\n//# sourceURL=webpack://bundler/./src/message.js?'
      );
    },
  };

  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    if (__webpack_module_cache__[moduleId]) {
      return __webpack_module_cache__[moduleId].exports;
    }

    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  (() => {
    eval(
      'const message = __webpack_require__(/*! ./message */ "./src/message.js");\n\nconsole.log(message);\n\n\n//# sourceURL=webpack://bundler/./src/index.js?'
    );
  })();
})();

// Simplified

(() => {
  // rewritten without eval
  // eval is used for safety as to not crash the entire program because of bad code

  const webpackModules = {
    "./src/message.js": (module) => {
      module.exports = "Hi there";
    },
  };

  const webpackModuleCache = {};

  function webpackRequire(moduleId) {
    if (webpackModuleCache[moduleId])
      return webpackModuleCache[moduleId].exports;

    webpackModuleCache[moduleId] = {
      exports: {},
    };
    const module = webpackModuleCache[moduleId];

    webpackModules[moduleId](module);

    return module.exports;
  }

  (() => {
    const message = webpackRequire("./src/message.js");
    console.log(message);
  })();
})();

// Simplified more

(() => {
  const webpackModules = {
    "./src/message.sj": "Hi there",
  };

  const webpackModuleCache = {};

  function webpackRequire(moduleId) {
    if (webpackModuleCache[moduleId]) return webpackModuleCache[moduleId];
    webpackModuleCache[moduleId] = webpackModules[moduleId];
    return webpackModules[moduleId];
  }

  (() => {
    const message = webpackRequire("./src/message.js");
    console.log(message);
  })();
})();

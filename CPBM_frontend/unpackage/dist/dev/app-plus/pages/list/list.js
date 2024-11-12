"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // vuex-ns:vuex
  var require_vuex = __commonJS({
    "vuex-ns:vuex"(exports, module) {
      module.exports = uni.Vuex;
    }
  });

  // ../../../../CoHub/CoHub/unpackage/dist/dev/.nvue/uni-search-bar.js
  var import_vue = __toESM(require_vue());

  // ../../../../CoHub/CoHub/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../CoHub/CoHub/unpackage/dist/dev/.nvue/uni-search-bar.js
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  var pages = [
    {
      path: "pages/list/list",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/list/grid/grid",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/list/gridmul/gridmul",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/list/search/search",
      style: {
        navigationBarTitleText: "\u641C\u7D22"
      }
    },
    {
      path: "pages/list/archived/archived",
      style: {
        navigationBarTitleText: "Archived"
      }
    },
    {
      path: "pages/list/all/all",
      style: {
        navigationBarTitleText: "All"
      }
    },
    {
      path: "pages/list/delete/delete",
      style: {
        navigationBarTitleText: "Recently Deleted Folder"
      }
    },
    {
      path: "pages/list/detail",
      style: {
        "app-plus": {
          titleNView: {
            buttons: [
              {
                type: "share"
              }
            ],
            type: "transparent"
          }
        },
        h5: {
          titleNView: {
            type: "transparent"
          }
        },
        navigationBarTitleText: "\u6587\u7AE0\u8BE6\u60C5"
      }
    },
    {
      path: "pages/ucenter/ucenter",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/uni-agree/uni-agree",
      style: {
        navigationStyle: "custom",
        "app-plus": {
          popGesture: "none"
        }
      }
    },
    {
      path: "pages/ucenter/settings/settings",
      style: {
        navigationBarTitleText: "Account"
      }
    },
    {
      path: "pages/ucenter/read-news-log/read-news-log",
      style: {
        navigationBarTitleText: "\u9605\u8BFB\u8BB0\u5F55",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/ucenter/about/about",
      style: {
        navigationBarTitleText: "\u5173\u4E8E",
        "app-plus": {
          titleNView: {
            buttons: [
              {
                type: "share"
              }
            ]
          }
        }
      }
    },
    {
      path: "uni_modules/uni-upgrade-center-app/pages/upgrade-popup",
      style: {
        disableScroll: true,
        "app-plus": {
          backgroundColorTop: "transparent",
          background: "transparent",
          titleNView: false,
          scrollIndicator: false,
          popGesture: "none",
          animationType: "fade-in",
          animationDuration: 200
        }
      }
    },
    {
      path: "pages/ucenter/invite/invite",
      style: {
        navigationStyle: "custom",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/list/gridmul/friends/friends",
      style: {
        navigationBarTitleText: "Friends under the folder"
      }
    }
  ];
  var subPackages = [
    {
      root: "uni_modules/uni-feedback",
      pages: [
        {
          path: "pages/opendb-feedback/opendb-feedback",
          style: {
            navigationBarTitleText: "\u610F\u89C1\u53CD\u9988",
            enablePullDownRefresh: false
          }
        }
      ]
    },
    {
      root: "uni_modules/uni-id-pages/pages",
      pages: [
        {
          path: "userinfo/userinfo",
          style: {
            navigationBarTitleText: "\u4E2A\u4EBA\u8D44\u6599"
          }
        },
        {
          path: "userinfo/realname-verify/realname-verify",
          style: {
            enablePullDownRefresh: false,
            navigationBarTitleText: "\u5B9E\u540D\u8BA4\u8BC1"
          }
        },
        {
          path: "login/login-withoutpwd"
        },
        {
          path: "login/login-withpwd"
        },
        {
          path: "userinfo/deactivate/deactivate",
          style: {
            navigationBarTitleText: "\u6CE8\u9500\u8D26\u53F7"
          }
        },
        {
          path: "userinfo/bind-mobile/bind-mobile",
          style: {
            navigationBarTitleText: "\u7ED1\u5B9A\u624B\u673A\u53F7\u7801"
          }
        },
        {
          path: "login/login-smscode",
          style: {
            navigationBarTitleText: "\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55"
          }
        },
        {
          path: "register/register",
          style: {
            navigationBarTitleText: "\u6CE8\u518C"
          }
        },
        {
          path: "retrieve/retrieve",
          style: {
            navigationBarTitleText: "\u91CD\u7F6E\u5BC6\u7801"
          }
        },
        {
          path: "common/webview/webview",
          style: {
            enablePullDownRefresh: false,
            navigationBarTitleText: ""
          }
        },
        {
          path: "userinfo/change_pwd/change_pwd",
          style: {
            enablePullDownRefresh: false,
            navigationBarTitleText: "\u4FEE\u6539\u5BC6\u7801"
          }
        },
        {
          path: "register/register-by-email",
          style: {
            navigationBarTitleText: "\u90AE\u7BB1\u9A8C\u8BC1\u7801\u6CE8\u518C"
          }
        },
        {
          path: "retrieve/retrieve-by-email",
          style: {
            navigationBarTitleText: "\u901A\u8FC7\u90AE\u7BB1\u91CD\u7F6E\u5BC6\u7801"
          }
        },
        {
          path: "userinfo/set-pwd/set-pwd",
          style: {
            enablePullDownRefresh: false,
            navigationBarTitleText: "\u8BBE\u7F6E\u5BC6\u7801"
          }
        }
      ]
    }
  ];
  var globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "uni-starter",
    navigationBarBackgroundColor: "#FFFFFF",
    backgroundColor: "#F8F8F8",
    enablePullDownRefresh: false,
    rpxCalcMaxDeviceWidth: 375,
    rpxCalcBaseDeviceWidth: 375
  };
  var condition = {
    list: [
      {
        path: "pages/list/detail"
      },
      {
        path: "pages/list/list"
      },
      {
        path: "pages/ucenter/settings/settings"
      }
    ],
    current: 1
  };
  var tabBar = {
    color: "#7A7E83",
    selectedColor: "#007AFF",
    borderStyle: "black",
    backgroundColor: "#FFFFFF",
    list: [
      {
        pagePath: "pages/list/list",
        iconPath: "static/tabbar/list.png",
        selectedIconPath: "static/tabbar/list_active.png",
        text: "list"
      },
      {
        pagePath: "pages/ucenter/ucenter",
        iconPath: "static/tabbar/me.png",
        selectedIconPath: "static/tabbar/me_active.png",
        text: "mine"
      }
    ]
  };
  var uniIdRouter = {
    loginPage: "uni_modules/uni-id-pages/pages/login/login-withoutpwd",
    needLogin: [
      "/uni_modules/uni-id-pages/pages/userinfo/userinfo"
    ],
    resToLogin: true
  };
  var e = {
    pages,
    subPackages,
    globalStyle,
    condition,
    tabBar,
    uniIdRouter
  };
  var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];
  function t$1(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t2, n2) {
    return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || /* @__PURE__ */ function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, l2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = h2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += i3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(l3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  });
  var r = s;
  var i = (n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k2 = e4[t4 + 13], A2 = e4[t4 + 14], P2 = e4[t4 + 15], T2 = i3[0], C2 = i3[1], x2 = i3[2], O2 = i3[3];
        T2 = u2(T2, C2, x2, O2, o3, 7, a2[0]), O2 = u2(O2, T2, C2, x2, c3, 12, a2[1]), x2 = u2(x2, O2, T2, C2, p2, 17, a2[2]), C2 = u2(C2, x2, O2, T2, f2, 22, a2[3]), T2 = u2(T2, C2, x2, O2, g2, 7, a2[4]), O2 = u2(O2, T2, C2, x2, m2, 12, a2[5]), x2 = u2(x2, O2, T2, C2, y2, 17, a2[6]), C2 = u2(C2, x2, O2, T2, _2, 22, a2[7]), T2 = u2(T2, C2, x2, O2, w2, 7, a2[8]), O2 = u2(O2, T2, C2, x2, v2, 12, a2[9]), x2 = u2(x2, O2, T2, C2, I2, 17, a2[10]), C2 = u2(C2, x2, O2, T2, S2, 22, a2[11]), T2 = u2(T2, C2, x2, O2, b2, 7, a2[12]), O2 = u2(O2, T2, C2, x2, k2, 12, a2[13]), x2 = u2(x2, O2, T2, C2, A2, 17, a2[14]), T2 = h2(T2, C2 = u2(C2, x2, O2, T2, P2, 22, a2[15]), x2, O2, c3, 5, a2[16]), O2 = h2(O2, T2, C2, x2, y2, 9, a2[17]), x2 = h2(x2, O2, T2, C2, S2, 14, a2[18]), C2 = h2(C2, x2, O2, T2, o3, 20, a2[19]), T2 = h2(T2, C2, x2, O2, m2, 5, a2[20]), O2 = h2(O2, T2, C2, x2, I2, 9, a2[21]), x2 = h2(x2, O2, T2, C2, P2, 14, a2[22]), C2 = h2(C2, x2, O2, T2, g2, 20, a2[23]), T2 = h2(T2, C2, x2, O2, v2, 5, a2[24]), O2 = h2(O2, T2, C2, x2, A2, 9, a2[25]), x2 = h2(x2, O2, T2, C2, f2, 14, a2[26]), C2 = h2(C2, x2, O2, T2, w2, 20, a2[27]), T2 = h2(T2, C2, x2, O2, k2, 5, a2[28]), O2 = h2(O2, T2, C2, x2, p2, 9, a2[29]), x2 = h2(x2, O2, T2, C2, _2, 14, a2[30]), T2 = l2(T2, C2 = h2(C2, x2, O2, T2, b2, 20, a2[31]), x2, O2, m2, 4, a2[32]), O2 = l2(O2, T2, C2, x2, w2, 11, a2[33]), x2 = l2(x2, O2, T2, C2, S2, 16, a2[34]), C2 = l2(C2, x2, O2, T2, A2, 23, a2[35]), T2 = l2(T2, C2, x2, O2, c3, 4, a2[36]), O2 = l2(O2, T2, C2, x2, g2, 11, a2[37]), x2 = l2(x2, O2, T2, C2, _2, 16, a2[38]), C2 = l2(C2, x2, O2, T2, I2, 23, a2[39]), T2 = l2(T2, C2, x2, O2, k2, 4, a2[40]), O2 = l2(O2, T2, C2, x2, o3, 11, a2[41]), x2 = l2(x2, O2, T2, C2, f2, 16, a2[42]), C2 = l2(C2, x2, O2, T2, y2, 23, a2[43]), T2 = l2(T2, C2, x2, O2, v2, 4, a2[44]), O2 = l2(O2, T2, C2, x2, b2, 11, a2[45]), x2 = l2(x2, O2, T2, C2, P2, 16, a2[46]), T2 = d2(T2, C2 = l2(C2, x2, O2, T2, p2, 23, a2[47]), x2, O2, o3, 6, a2[48]), O2 = d2(O2, T2, C2, x2, _2, 10, a2[49]), x2 = d2(x2, O2, T2, C2, A2, 15, a2[50]), C2 = d2(C2, x2, O2, T2, m2, 21, a2[51]), T2 = d2(T2, C2, x2, O2, b2, 6, a2[52]), O2 = d2(O2, T2, C2, x2, f2, 10, a2[53]), x2 = d2(x2, O2, T2, C2, I2, 15, a2[54]), C2 = d2(C2, x2, O2, T2, c3, 21, a2[55]), T2 = d2(T2, C2, x2, O2, w2, 6, a2[56]), O2 = d2(O2, T2, C2, x2, P2, 10, a2[57]), x2 = d2(x2, O2, T2, C2, y2, 15, a2[58]), C2 = d2(C2, x2, O2, T2, k2, 21, a2[59]), T2 = d2(T2, C2, x2, O2, g2, 6, a2[60]), O2 = d2(O2, T2, C2, x2, S2, 10, a2[61]), x2 = d2(x2, O2, T2, C2, p2, 15, a2[62]), C2 = d2(C2, x2, O2, T2, v2, 21, a2[63]), i3[0] = i3[0] + T2 | 0, i3[1] = i3[1] + C2 | 0, i3[2] = i3[2] + x2 | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t2) {
    e2.exports = r.HmacMD5;
  }));
  var o = n(function(e2, t2) {
    e2.exports = r.enc.Utf8;
  });
  var a = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  var c = "FUNCTION";
  var u = "OBJECT";
  var h = "CLIENT_DB";
  var l = "pending";
  var d = "fulfilled";
  var p = "rejected";
  function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f(e2);
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  function y(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  var _ = "REJECTED";
  var w = "NOT_PENDING";
  var v = class {
    constructor({ createPromise: e2, retryRule: t2 = _ } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
    exec() {
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then((e2) => (this.status = d, Promise.resolve(e2)), (e2) => (this.status = p, Promise.reject(e2))), this.promise) : this.promise;
    }
  };
  function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  var S = true;
  var b = "app";
  var A = I(define_process_env_UNI_SECURE_NETWORK_CONFIG_default);
  var P = b;
  var T = I('{\n    "address": [\n        "127.0.0.1",\n        "26.26.26.1",\n        "172.29.0.1",\n        "172.20.10.4",\n        "192.168.1.5",\n        "172.24.64.1"\n    ],\n    "debugPort": 9000,\n    "initialLaunchType": "local",\n    "servePort": 7000,\n    "skipFiles": [\n        "<node_internals>/**",\n        "D:/Download/HBuilderX.4.15.2024050802/HBuilderX/plugins/unicloud/**/*.js"\n    ]\n}\n');
  var C = I('[{"provider":"alipay","spaceName":"cohub","spaceId":"env-00jxgxdwrzi6","spaceAppId":"2021004154616649","accessKey":"iMPGheIwD0SLH4Ix","secretKey":"2UolQdH3T1sdiqcj"}]') || [];
  var O = "";
  try {
    O = "__UNI__8301740";
  } catch (e2) {
  }
  var E = {};
  function L(e2, t2 = {}) {
    var n2, s2;
    return n2 = E, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (E[e2] = t2), E[e2];
  }
  E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  var R = ["invoke", "success", "fail", "complete"];
  var U = L("_globalUniCloudInterceptor");
  function N(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) && Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = U[e3][t3];
        s2 || (s2 = U[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function D(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) ? Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = U[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete U[e2];
  }
  function M(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function q(e2, t2) {
    return U[e2] && U[e2][t2] || [];
  }
  function F(e2) {
    N("callObject", e2);
  }
  var K = L("_globalUniCloudListener");
  var j = "response";
  var $ = "needLogin";
  var B = "refreshToken";
  var W = "clientdb";
  var H = "cloudfunction";
  var z = "cloudobject";
  function J(e2) {
    return K[e2] || (K[e2] = []), K[e2];
  }
  function G(e2, t2) {
    const n2 = J(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function V(e2, t2) {
    const n2 = J(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Y(e2, t2) {
    const n2 = J(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  var Q;
  var X = false;
  function Z() {
    return Q || (Q = new Promise((e2) => {
      X && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (X = true, e2());
        }
        X || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), Q);
  }
  function ee(e2) {
    const t2 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      m(s2) && (t2[n2] = y(s2));
    }
    return t2;
  }
  var te = class extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || e2.errMsg || "unknown system error", this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  };
  var ne = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync() };
  function se(e2) {
    return e2 && se(e2.__v_raw) || e2;
  }
  function re() {
    return { token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"), tokenExpired: ne.getStorageSync("uni_id_token_expired") };
  }
  function ie({ token: e2, tokenExpired: t2 } = {}) {
    e2 && ne.setStorageSync("uni_id_token", e2), t2 && ne.setStorageSync("uni_id_token_expired", t2);
  }
  var oe;
  var ae;
  function ce() {
    return oe || (oe = uni.getSystemInfoSync()), oe;
  }
  function ue() {
    let e2, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t2 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t2 };
  }
  function he() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ae)
      return __spreadProps(__spreadValues({}, ae), { locale: e2, LOCALE: e2 });
    const t2 = ce(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e3 = 0; e3 < o2.length; e3++) {
      delete t2[o2[e3]];
    }
    return ae = __spreadValues(__spreadValues({ PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2 }, ue()), t2), __spreadProps(__spreadValues({}, ae), { locale: e2, LOCALE: e2 });
  }
  var le = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400) {
          const n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
          return s2(new te({ code: n3, message: r3, requestId: t3 }));
        }
        const r2 = e3.data;
        if (r2.error)
          return s2(new te({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var de = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new te({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: w });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return le.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t2 = Object.assign({}, e2);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = le.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = le.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    authorize() {
      return __async(this, null, function* () {
        yield this.getAccessToken();
      });
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFile(_0) {
      return __async(this, arguments, function* ({ filePath: e2, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
        if ("string" !== f(t2))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
        if (!(t2 = t2.trim()))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
        if (/:\/\//.test(t2))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
        const o2 = i2 && i2.envType || this.config.envType;
        if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
          throw new te({ code: "INVALID_PARAM", message: "\u4F7F\u7528cloudPath\u4F5C\u4E3A\u8DEF\u5F84\u65F6\uFF0CcloudPath\u4E0D\u53EF\u5305\u542B\u201C\\\u201D" });
        const a2 = (yield this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: h2, signature: l2, host: d2, ossPath: p2, id: g2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: h2, Signature: l2, host: d2, id: g2, key: p2, policy: m2, success_action_status: 200 };
        if (u2 && (_2["x-oss-security-token"] = u2), y2) {
          const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: g2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
          _2.callback = le.toBase64(e3);
        }
        const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
        if (yield this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
          return { success: true, filePath: e2, fileID: c2 };
        if ((yield this.reportOSSUpload({ id: g2 })).success)
          return { success: true, filePath: e2, fileID: c2 };
        throw new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" });
      });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new te({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t2({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
    getFileInfo() {
      return __async(this, arguments, function* ({ fileList: e2 } = {}) {
        if (!Array.isArray(e2) || 0 === e2.length)
          throw new te({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" });
        const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
        return { fileList: (yield this.request(this.setupRequest(t2))).result };
      });
    }
  };
  var pe = { init(e2) {
    const t2 = new de(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  var fe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var ge;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(ge || (ge = {}));
  var me = function() {
  };
  var ye = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], h2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], h3 = n3[5], l2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & h3 ^ ~a3 & l2) + c2[p2] + u2[p2];
          d2 = l2, l2 = h3, h3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + h3 | 0, n3[6] = n3[6] + l2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(h2), t3.HmacSHA256 = i2._createHmacHelper(h2);
    }(Math), n2.SHA256);
  });
  var _e = ye;
  var we = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
  });
  var ve = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new te({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function Ie(e2) {
    return void 0 === e2;
  }
  function Se(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  var be;
  function ke(e2) {
    const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(be || (be = {}));
  var Ae = { adapter: null, runtime: void 0 };
  var Pe = ["anonymousUuidKey"];
  var Te = class extends me {
    constructor() {
      super(), Ae.adapter.root.tcbObject || (Ae.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      Ae.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return Ae.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Ae.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Ae.adapter.root.tcbObject;
    }
  };
  function Ce(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Te();
      case "none":
        return new Te();
      default:
        return t2.sessionStorage || new Te();
    }
  }
  var xe = class {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Ae.adapter.primaryStorage || e2.persistence, this._storage = Ce(this._persistence, Ae.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = Ce(e2, Ae.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Pe.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Ie(r2) || Se(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  };
  var Oe = {};
  var Ee = {};
  function Le(e2) {
    return Oe[e2];
  }
  var Re = class {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  };
  var Ue = class extends Re {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  };
  var Ne = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t2) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t2, this._listeners), this;
    }
    off(e2, t2) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof Ue)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new Re(e2, t2 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function De(e2, t2) {
    Ne.on(e2, t2);
  }
  function Me(e2, t2 = {}) {
    Ne.fire(e2, t2);
  }
  function qe(e2, t2) {
    Ne.off(e2, t2);
  }
  var Fe = "loginStateChanged";
  var Ke = "loginStateExpire";
  var je = "loginTypeChanged";
  var $e = "anonymousConverted";
  var Be = "refreshAccessToken";
  var We;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(We || (We = {}));
  var He = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"];
  var ze = { "X-SDK-Version": "1.3.5" };
  function Je(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = __spreadValues(__spreadValues({}, o2), r2);
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = __spreadValues(__spreadValues({}, t3.headers || {}), i2), s2.call(e2, t3);
    };
  }
  function Ge() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: __spreadProps(__spreadValues({}, ze), { "x-seqid": e2 }) };
  }
  var Ve = class {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new Ae.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = Le(this.config.env), this._localCache = (t2 = this.config.env, Ee[t2]), Je(this._reqClass, "post", [Ge]), Je(this._reqClass, "upload", [Ge]), Je(this._reqClass, "download", [Ge]);
    }
    post(e2) {
      return __async(this, null, function* () {
        return yield this._reqClass.post(e2);
      });
    }
    upload(e2) {
      return __async(this, null, function* () {
        return yield this._reqClass.upload(e2);
      });
    }
    download(e2) {
      return __async(this, null, function* () {
        return yield this._reqClass.download(e2);
      });
    }
    refreshAccessToken() {
      return __async(this, null, function* () {
        let e2, t2;
        this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
        try {
          e2 = yield this._refreshAccessTokenPromise;
        } catch (e3) {
          t2 = e3;
        }
        if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
          throw t2;
        return e2;
      });
    }
    _refreshAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
        this._cache.removeStore(e2), this._cache.removeStore(t2);
        let i2 = this._cache.getStore(n2);
        if (!i2)
          throw new te({ message: "\u672A\u767B\u5F55CloudBase" });
        const o2 = { refresh_token: i2 }, a2 = yield this.request("auth.fetchAccessTokenWithRefreshToken", o2);
        if (a2.data.code) {
          const { code: e3 } = a2.data;
          if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
            if (this._cache.getStore(s2) === We.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
              const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = yield this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
              return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
            }
            Me(Ke), this._cache.removeStore(n2);
          }
          throw new te({ code: a2.data.code, message: `\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}` });
        }
        if (a2.data.access_token)
          return Me(Be), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
        a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
      });
    }
    getAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
        if (!this._cache.getStore(n2))
          throw new te({ message: "refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38" });
        let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
        return this._shouldRefreshAccessTokenHook && !(yield this._shouldRefreshAccessTokenHook(s2, r2)) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
      });
    }
    request(e2, t2, n2) {
      return __async(this, null, function* () {
        const s2 = `x-tcb-trace_${this.config.env}`;
        let r2 = "application/x-www-form-urlencoded";
        const i2 = __spreadValues({ action: e2, env: this.config.env, dataVersion: "2019-08-16" }, t2);
        if (-1 === He.indexOf(e2)) {
          const { refreshTokenKey: e3 } = this._cache.keys;
          this._cache.getStore(e3) && (i2.access_token = (yield this.getAccessToken()).accessToken);
        }
        let o2;
        if ("storage.uploadFile" === e2) {
          o2 = new FormData();
          for (let e3 in o2)
            o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
          r2 = "multipart/form-data";
        } else {
          r2 = "application/json", o2 = {};
          for (let e3 in i2)
            void 0 !== i2[e3] && (o2[e3] = i2[e3]);
        }
        let a2 = { headers: { "content-type": r2 } };
        n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
        const c2 = this._localCache.getStore(s2);
        c2 && (a2.headers["X-TCB-Trace"] = c2);
        const { parse: u2, inQuery: h2, search: l2 } = t2;
        let d2 = { env: this.config.env };
        u2 && (d2.parse = true), h2 && (d2 = __spreadValues(__spreadValues({}, h2), d2));
        let p2 = function(e3, t3, n3 = {}) {
          const s3 = /\?/.test(t3);
          let r3 = "";
          for (let e4 in n3)
            "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
          return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
        }(fe, "//tcb-api.tencentcloudapi.com/web", d2);
        l2 && (p2 += l2);
        const f2 = yield this.post(__spreadValues({ url: p2, data: o2 }, a2)), g2 = f2.header && f2.header["x-tcb-trace"];
        if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
          throw new te({ code: "NETWORK_ERROR", message: "network request error" });
        return f2;
      });
    }
    send(_0) {
      return __async(this, arguments, function* (e2, t2 = {}) {
        const n2 = yield this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
        if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === He.indexOf(e2)) {
          yield this.refreshAccessToken();
          const n3 = yield this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
          if (n3.data.code)
            throw new te({ code: n3.data.code, message: n3.data.message });
          return n3.data;
        }
        if (n2.data.code)
          throw new te({ code: n2.data.code, message: n2.data.message });
        return n2.data;
      });
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  };
  var Ye = {};
  function Qe(e2) {
    return Ye[e2];
  }
  var Xe = class {
    constructor(e2) {
      this.config = e2, this._cache = Le(e2.env), this._request = Qe(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
    }
    refreshUserInfo() {
      return __async(this, null, function* () {
        const { data: e2 } = yield this._request.send("auth.getUserInfo", {});
        return this.setLocalUserInfo(e2), e2;
      });
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2);
    }
  };
  var Ze = class {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Le(this._envId), this._request = Qe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    getLinkedUidList() {
      return __async(this, null, function* () {
        const { data: e2 } = yield this._request.send("auth.getLinkedUidList", {});
        let t2 = false;
        const { users: n2 } = e2;
        return n2.forEach((e3) => {
          e3.wxOpenId && e3.wxPublicId && (t2 = true);
        }), { users: n2, hasPrimaryUid: t2 };
      });
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    update(e2) {
      return __async(this, null, function* () {
        const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = yield this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
        this.setLocalUserInfo(a2);
      });
    }
    refresh() {
      return __async(this, null, function* () {
        const { data: e2 } = yield this._request.send("auth.getUserInfo", {});
        return this.setLocalUserInfo(e2), e2;
      });
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t2[e3];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2), this.setUserInfo();
    }
  };
  var et = class {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Le(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new Ze(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === We.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === We.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === We.WECHAT || this.loginType === We.WECHAT_OPEN || this.loginType === We.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  };
  var tt = class extends Xe {
    signIn() {
      return __async(this, null, function* () {
        this._cache.updatePersistence("local");
        const { anonymousUuidKey: e2, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = yield this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
        if (r2.uuid && r2.refresh_token) {
          this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), yield this._request.refreshAccessToken(), Me(Fe), Me(je, { env: this.config.env, loginType: We.ANONYMOUS, persistence: "local" });
          const e3 = new et(this.config.env);
          return yield e3.user.refresh(), e3;
        }
        throw new te({ message: "\u533F\u540D\u767B\u5F55\u5931\u8D25" });
      });
    }
    linkAndRetrieveDataWithTicket(e2) {
      return __async(this, null, function* () {
        const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = yield this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
        if (i2.refresh_token)
          return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), yield this._request.refreshAccessToken(), Me($e, { env: this.config.env }), Me(je, { loginType: We.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
        throw new te({ message: "\u533F\u540D\u8F6C\u5316\u5931\u8D25" });
      });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, We.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  };
  var nt = class extends Xe {
    signIn(e2) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new te({ code: "PARAM_ERROR", message: "ticket must be a string" });
        const { refreshTokenKey: t2 } = this._cache.keys, n2 = yield this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
        if (n2.refresh_token)
          return this.setRefreshToken(n2.refresh_token), yield this._request.refreshAccessToken(), Me(Fe), Me(je, { env: this.config.env, loginType: We.CUSTOM, persistence: this.config.persistence }), yield this.refreshUserInfo(), new et(this.config.env);
        throw new te({ message: "\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25" });
      });
    }
  };
  var st = class extends Xe {
    signIn(e2, t2) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new te({ code: "PARAM_ERROR", message: "email must be a string" });
        const { refreshTokenKey: n2 } = this._cache.keys, s2 = yield this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
        if (r2)
          return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : yield this._request.refreshAccessToken(), yield this.refreshUserInfo(), Me(Fe), Me(je, { env: this.config.env, loginType: We.EMAIL, persistence: this.config.persistence }), new et(this.config.env);
        throw s2.code ? new te({ code: s2.code, message: `\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new te({ message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25" });
      });
    }
    activate(e2) {
      return __async(this, null, function* () {
        return this._request.send("auth.activateEndUserMail", { token: e2 });
      });
    }
    resetPasswordWithToken(e2, t2) {
      return __async(this, null, function* () {
        return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
      });
    }
  };
  var rt = class extends Xe {
    signIn(e2, t2) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
        "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
        const { refreshTokenKey: n2 } = this._cache.keys, s2 = yield this._request.send("auth.signIn", { loginType: We.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
        if (r2)
          return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : yield this._request.refreshAccessToken(), yield this.refreshUserInfo(), Me(Fe), Me(je, { env: this.config.env, loginType: We.USERNAME, persistence: this.config.persistence }), new et(this.config.env);
        throw s2.code ? new te({ code: s2.code, message: `\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new te({ message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25" });
      });
    }
  };
  var it = class {
    constructor(e2) {
      this.config = e2, this._cache = Le(e2.env), this._request = Qe(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), De(je, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new tt(this.config);
    }
    customAuthProvider() {
      return new nt(this.config);
    }
    emailAuthProvider() {
      return new st(this.config);
    }
    usernameAuthProvider() {
      return new rt(this.config);
    }
    signInAnonymously() {
      return __async(this, null, function* () {
        return new tt(this.config).signIn();
      });
    }
    signInWithEmailAndPassword(e2, t2) {
      return __async(this, null, function* () {
        return new st(this.config).signIn(e2, t2);
      });
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new rt(this.config).signIn(e2, t2);
    }
    linkAndRetrieveDataWithTicket(e2) {
      return __async(this, null, function* () {
        this._anonymousAuthProvider || (this._anonymousAuthProvider = new tt(this.config)), De($e, this._onAnonymousConverted);
        return yield this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
      });
    }
    signOut() {
      return __async(this, null, function* () {
        if (this.loginType === We.ANONYMOUS)
          throw new te({ message: "\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C" });
        const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
        if (!s2)
          return;
        const r2 = yield this._request.send("auth.logout", { refresh_token: s2 });
        return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), Me(Fe), Me(je, { env: this.config.env, loginType: We.NULL, persistence: this.config.persistence }), r2;
      });
    }
    signUpWithEmailAndPassword(e2, t2) {
      return __async(this, null, function* () {
        return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
      });
    }
    sendPasswordResetEmail(e2) {
      return __async(this, null, function* () {
        return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
      });
    }
    onLoginStateChanged(e2) {
      De(Fe, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      De(Ke, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      De(Be, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      De($e, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      De(je, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    getAccessToken() {
      return __async(this, null, function* () {
        return { accessToken: (yield this._request.getAccessToken()).accessToken, env: this.config.env };
      });
    }
    hasLoginState() {
      const { refreshTokenKey: e2 } = this._cache.keys;
      return this._cache.getStore(e2) ? new et(this.config.env) : null;
    }
    isUsernameRegistered(e2) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
        const { data: t2 } = yield this._request.send("auth.isUsernameRegistered", { username: e2 });
        return t2 && t2.isRegistered;
      });
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    signInWithTicket(e2) {
      return __async(this, null, function* () {
        return new nt(this.config).signIn(e2);
      });
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : __spreadProps(__spreadValues({}, e2.data), { requestId: e2.seqId }));
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t2 } = e2.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t2, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  };
  var ot = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t2(null, { fileID: h2, requestId: d2 }) : t2(new te({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  };
  var at = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  };
  var ct = function({ fileList: e2 }, t2) {
    if (t2 = t2 || ve(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e2 };
    return Qe(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  };
  var ut = function({ fileList: e2 }, t2) {
    t2 = t2 || ve(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return Qe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  };
  var ht = function(_0, _1) {
    return __async(this, arguments, function* ({ fileID: e2 }, t2) {
      const n2 = (yield ut.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
      if ("SUCCESS" !== n2.code)
        return t2 ? t2(n2) : new Promise((e3) => {
          e3(n2);
        });
      const s2 = Qe(this.config.env);
      let r2 = n2.download_url;
      if (r2 = encodeURI(r2), !t2)
        return s2.download({ url: r2 });
      t2(yield s2.download({ url: r2 }));
    });
  };
  var lt = function({ name: e2, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || ve();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new te({ code: "PARAM_ERROR", message: "\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: a2 };
    return Qe(this.config.env).send("functions.invokeFunction", c2).then((e3) => {
      if (e3.code)
        o2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), o2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            o2(new te({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e3) => {
      o2(e3);
    }), o2.promise;
  };
  var dt = { timeout: 15e3, persistence: "session" };
  var pt = {};
  var ft = class _ft {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Ae.adapter || (this.requestClient = new Ae.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e2.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = __spreadValues(__spreadValues({}, dt), e2), true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new _ft(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || Ae.adapter.primaryStorage || dt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        Oe[t3] = new xe(e3), Ee[t3] = new xe(__spreadProps(__spreadValues({}, e3), { persistence: "local" }));
      }(this.config), n2 = this.config, Ye[n2.env] = new Ve(n2), this.authObj = new it(this.config), this.authObj;
    }
    on(e2, t2) {
      return De.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return qe.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return lt.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return ct.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return ut.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return ht.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return ot.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return at.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      pt[e2.name] = e2;
    }
    invokeExtension(e2, t2) {
      return __async(this, null, function* () {
        const n2 = pt[e2];
        if (!n2)
          throw new te({ message: `\u6269\u5C55${e2} \u5FC5\u987B\u5148\u6CE8\u518C` });
        return yield n2.invoke(t2, this);
      });
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = ke(e2) || {};
      t2 && (Ae.adapter = t2), n2 && (Ae.runtime = n2);
    }
  };
  var gt = new ft();
  function mt(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  var yt = class {
    post(e2) {
      const { url: t2, data: n2, headers: s2 } = e2;
      return new Promise((e3, r2) => {
        ne.request({ url: mt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e3(t3);
        }, fail(e4) {
          r2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ne.uploadFile({ url: mt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  };
  var _t = { setItem(e2, t2) {
    ne.setStorageSync(e2, t2);
  }, getItem: (e2) => ne.getStorageSync(e2), removeItem(e2) {
    ne.removeStorageSync(e2);
  }, clear() {
    ne.clearStorageSync();
  } };
  var wt = { genAdapter: function() {
    return { root: {}, reqClass: yt, localStorage: _t, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  gt.useAdapters(wt);
  var vt = gt;
  var It = vt.init;
  vt.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = It.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = ee(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var St = vt;
  var bt = class extends de {
    getAccessToken() {
      return new Promise((e2, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e2(n2);
      });
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = le.sign(n2, this.config.clientSecret);
      const r2 = he();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = re();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new te({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e2, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(this.setupRequest(t2)).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new te({ code: "DELETE_FILE_FAILED", message: "\u5220\u9664\u6587\u4EF6\u5931\u8D25" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t2 }) };
      return this.request(this.setupRequest(n2)).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new te({ code: "GET_TEMP_FILE_URL_FAILED", message: "\u83B7\u53D6\u4E34\u65F6\u6587\u4EF6\u94FE\u63A5\u5931\u8D25" });
      });
    }
  };
  var kt = { init(e2) {
    const t2 = new bt(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  var At = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
  });
  function Pt(e2 = "", t2 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t2, c2 = Date.now(), u2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e3) {
      var t3 = 16 * Math.random() | 0;
      return ("x" === e3 ? t3 : 3 & t3 | 8).toString(16);
    }), h2 = Object.assign({}, i2, { "x-from-app-id": a2.spaceAppId, "x-from-env-id": a2.spaceId, "x-to-env-id": a2.spaceId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2, "x-trace-id": u2 }), l2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = _e(e3.body).toString(At), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = _e(r3).toString(At), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = we(o3, e3.secretKey).toString(At);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: h2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.accessKey, secretKey: a2.secretKey, signedHeaders: l2.sort() });
    return { url: `${a2.endpoint}${e2}`, headers: Object.assign({}, h2, { Authorization: f2 }) };
  }
  function Tt({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {} }) {
    return new Promise((r2, i2) => {
      ne.request({ url: e2, method: n2, data: t2, header: s2, dataType: "json", complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return i2(new te({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        r2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function Ct(e2, t2) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Pt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2 });
    return Tt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function xt(e2 = "") {
    const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0)
      throw new te({ code: "INVALID_PARAM", message: "fileID\u4E0D\u5408\u6CD5" });
    const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function Ot(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  var Et = class {
    constructor(e2) {
      if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), e2.endpoint) {
        if ("string" != typeof e2.endpoint)
          throw new Error("endpoint must be string");
        if (!/^https:\/\//.test(e2.endpoint))
          throw new Error("endpoint must start with https://");
        e2.endpoint = e2.endpoint.replace(/\/$/, "");
      }
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${e2.spaceId}.api-hz.cloudbasefunction.cn` });
    }
    callFunction(e2) {
      return function(e3, t2) {
        const { name: n2, data: s2 } = e3, r2 = "POST", { url: i2, headers: o2 } = Pt("/functions/invokeFunction", { functionName: n2, data: s2, method: r2, headers: { "x-to-function-name": n2 }, signHeaderKeys: ["x-to-function-name"], config: t2 });
        return Tt({ url: i2, data: s2, method: r2, headers: o2 }).then((e4) => ({ errCode: 0, success: true, requestId: e4.requestId, result: e4.data })).catch((e4) => {
          throw new te({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t2, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = ne.uploadFile({ url: e2, filePath: t2, fileType: n2, formData: s2, name: "file", success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e3) {
          o2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile(_0) {
      return __async(this, arguments, function* ({ filePath: e2, cloudPath: t2 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
        if ("string" !== f(t2))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
        if (!(t2 = t2.trim()))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
        if (/:\/\//.test(t2))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
        const r2 = yield Ct({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
        return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
      });
    }
    getTempFileURL(_0) {
      return __async(this, arguments, function* ({ fileList: e2 }) {
        return new Promise((t2, n2) => {
          (!e2 || e2.length < 0) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList\u4E0D\u80FD\u4E3A\u7A7A\u6570\u7EC4" })), e2.length > 50 && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList\u6570\u7EC4\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC750" }));
          const s2 = [];
          for (const t3 of e2) {
            "string" !== f(t3) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" }));
            const e3 = xt.call(this, t3);
            s2.push({ file_id: e3, expire: 600 });
          }
          Ct({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
            const { file_list: n3 = [] } = e3;
            t2({ fileList: n3.map((e4) => ({ fileID: Ot.call(this, e4.file_id), tempFileURL: e4.download_url })) });
          }).catch((e3) => n2(e3));
        });
      });
    }
  };
  var Lt = { init: (e2) => {
    e2.provider = "alipay";
    const t2 = new Et(e2);
    return t2.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t2;
  } };
  function Rt({ data: e2 }) {
    let t2;
    t2 = he();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = re();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  function Ut() {
    return __async(this, arguments, function* ({ name: e2, data: t2 } = {}) {
      yield this.__dev__.initLocalNetwork();
      const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e2}`;
      return new Promise((t3, n3) => {
        ne.request({ method: "POST", url: o2, data: { name: e2, platform: P, provider: r2, spaceId: i2 }, timeout: 3e3, success(e3) {
          t3(e3);
        }, fail() {
          t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
        } });
      }).then(({ data: e3 } = {}) => {
        const { code: t3, message: n3 } = e3 || {};
        return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
      }).then(({ code: n3, message: s3 }) => {
        if (0 !== n3) {
          switch (n3) {
            case "MODULE_ENCRYPTED":
              console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e2}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
              break;
            case "FUNCTION_ENCRYPTED":
              console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e2}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
              break;
            case "ACTION_ENCRYPTED":
              console.error(s3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
              break;
            case "NETWORK_ERROR": {
              const e3 = "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B";
              throw console.error(e3), new Error(e3);
            }
            case "SWITCH_TO_CLOUD":
              break;
            default: {
              const e3 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${s3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
              throw console.error(e3), new Error(e3);
            }
          }
          return this._callCloudFunction({ name: e2, data: t2 });
        }
        return new Promise((e3, n4) => {
          const s4 = Rt.call(this, { data: t2 });
          ne.request({ method: "POST", url: a2, data: { provider: r2, platform: P, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new te({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e3({ result: s5 }), fail(e4) {
            n4(new te({ code: e4.code || e4.errCode || "SYS_ERR", message: e4.message || e4.errMsg || "request:fail" }));
          } });
        });
      });
    });
  }
  var Nt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var Dt = /[\\^$.*+?()[\]{}|]/g;
  var Mt = RegExp(Dt.source);
  function qt(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && Mt.test(s2) ? s2.replace(Dt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  var Kt = "request";
  var jt = "response";
  var $t = "both";
  var An = { code: 2e4, message: "System error" };
  var Pn = { code: 20101, message: "Invalid client" };
  function xn(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new te({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || An.code, message: r2 || o2, cause: a2 });
  }
  var En;
  function Dn({ secretType: e2 } = {}) {
    return e2 === Kt || e2 === jt || e2 === $t;
  }
  function Mn({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function qn({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ce();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = A;
      if (!n3)
        return {};
      e3 = /* @__PURE__ */ function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const h2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!h2)
      return false;
    if ((c2[h2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`\u6B64\u5E94\u7528[appId: ${s2}, platform: ${o2}]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), xn(Pn);
  }
  function Fn({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Kn(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Rt.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay" }[this.config.provider], i2 = Dn(n3), o2 = Mn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && Fn.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && Fn.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = qt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = qt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: Nt, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && C ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Ut), o2 = Ut) : o2 = n2, o2 = o2.bind(e2), Mn(t3))
        a2 = n2.call(e2, t3);
      else if (Dn(t3)) {
        a2 = new En({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (qn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new En({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => ("undefined" != typeof UTSJSONObject && (e3.result = new UTSJSONObject(e3.result)), e3));
    };
  }
  En = class {
    constructor() {
      throw xn({ message: `Platform ${P} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  var jn = Symbol("CLIENT_DB_INTERNAL");
  function $n(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = jn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function Bn(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  var Wn = ["db.Geo", "db.command", "command.aggregate"];
  function Hn(e2, t2) {
    return Wn.indexOf(`${e2}.${t2}`) > -1;
  }
  function zn(e2) {
    switch (f(e2 = se(e2))) {
      case "array":
        return e2.map((e3) => zn(e3));
      case "object":
        return e2._internalType === jn || Object.keys(e2).forEach((t2) => {
          e2[t2] = zn(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function Jn(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  var Gn = class {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: zn(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Jn(e2), n2 = Jn(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === Jn(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Jn(e2), n2 = Jn(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return Vn({ $method: e2, $param: zn(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: zn(t2) }), S) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("\u68C0\u6D4B\u5230\u4F7F\u7528JQL\u8BED\u6CD5\u8054\u8868\u67E5\u8BE2\u65F6\uFF0C\u672A\u4F7F\u7528getTemp\u5148\u8FC7\u6EE4\u4E3B\u8868\u6570\u636E\uFF0C\u5728\u4E3B\u8868\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u67E5\u8BE2\u7F13\u6162\u3002\n- \u5982\u4F55\u4F18\u5316\u8BF7\u53C2\u8003\u6B64\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- \u5982\u679C\u4E3B\u8868\u6570\u636E\u91CF\u5F88\u5C0F\u8BF7\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u9879\u76EE\u53D1\u884C\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  };
  function Vn(e2, t2, n2) {
    return $n(new Gn(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), Hn(s2, t3) ? Vn({ $method: t3 }, e3, n2) : function() {
        return Vn({ $method: t3, $param: zn(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function Yn({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function Qn(e2, t2 = {}) {
    return $n(new e2(t2), { get: (e3, t3) => Hn("db", t3) ? Vn({ $method: t3 }, null, e3) : function() {
      return Vn({ $method: t3, $param: zn(Array.from(arguments)) }, null, e3);
    } });
  }
  var Xn = class extends class {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t2 || (this.auth = Bn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, Bn(this._dbCallBacks)), this.env = $n({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = $n({}, { get: (e3, t3) => Yn({ path: ["Geo"], method: t3 }) }), this.serverDate = Yn({ path: [], method: "serverDate" }), this.RegExp = Yn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t2) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    _callbackAuth(e2, t2) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t2 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), M(q(o2, "fail"), e3).then(() => M(q(o2, "complete"), e3)).then(() => (r2(null, e3), Y(j, { type: W, content: e3 }), Promise.reject(e3)));
      }
      const c2 = M(q(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: h, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new te({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ie({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Y(B, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3" }, { prop: "code", tips: "code\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errCode\u66FF\u4EE3" }, { prop: "message", tips: "message\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errMsg\u66FF\u4EE3" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return M(q(o2, "success"), e4).then(() => M(q(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Y(j, { type: W, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB");
        return a2(new te({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  };
  var Zn = "token\u65E0\u6548\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762";
  var es = "token\u8FC7\u671F\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762";
  var ts = { TOKEN_INVALID_TOKEN_EXPIRED: es, TOKEN_INVALID_INVALID_CLIENTID: Zn, TOKEN_INVALID: Zn, TOKEN_INVALID_WRONG_TOKEN: Zn, TOKEN_INVALID_ANONYMOUS_USER: Zn };
  var ns = { "uni-id-token-expired": es, "uni-id-check-token-failed": Zn, "uni-id-token-not-exist": Zn, "uni-id-check-device-feature-failed": Zn };
  function ss(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function rs(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(ss(t2, e3.path)) : false === e3.needLogin && s2.push(ss(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function is(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function os() {
    return function(e2) {
      let t2 = e2 && e2.$page && e2.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function as() {
    return is(os());
  }
  function cs(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = is(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  var us = !!e.uniIdRouter;
  var { loginPage: hs, routerNeedLogin: ls, resToLogin: ds, needLoginPage: ps, notNeedLoginPage: fs, loginPageInTabBar: gs } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = rs(t2), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = rs(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: cs(i2, r2) };
  }();
  if (ps.indexOf(hs) > -1)
    throw new Error(`Login page [${hs}] should not be "needLogin", please check your pages.json`);
  function ms(e2) {
    const t2 = as();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function ys(e2) {
    const t2 = is(ms(e2));
    return !(fs.indexOf(t2) > -1) && (ps.indexOf(t2) > -1 || ls.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function _s({ redirect: e2 }) {
    const t2 = is(e2), n2 = is(hs);
    return as() !== n2 && t2 !== n2;
  }
  function ws({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !_s({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(hs, t2);
    gs ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    }, 0);
  }
  function vs({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = re();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: ns[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: ns[e4] };
      }
      return n3;
    }();
    if (ys(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (J($).length > 0)
        return setTimeout(() => {
          Y($, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function Is() {
    !function() {
      const e3 = os(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = vs({ url: e3 });
      t2 || n2 && ws({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = vs({ url: e3.url });
        return t3 ? e3 : s2 ? (ws({ api: n2, redirect: ms(e3.url) }), false) : e3;
      } });
    }
  }
  function Ss() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ns;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ts;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = J($);
        Z().then(() => {
          const n3 = os();
          if (n3 && _s({ redirect: n3 }))
            return t3.length > 0 ? Y($, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (hs && ws({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function bs(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        G(j, e4);
      }, e3.offResponse = function(e4) {
        V(j, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        G($, e4);
      }, e3.offNeedLogin = function(e4) {
        V($, e4);
      }, us && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = true, Z().then(() => {
        Is.call(e3);
      }), ds && Ss.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        G(B, e4);
      }, e3.offRefreshToken = function(e4) {
        V(B, e4);
      };
    }(e2);
  }
  var ks;
  var As = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var Ps = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Ts() {
    const e2 = re().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(ks(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  ks = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !Ps.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t2 = As.indexOf(e2.charAt(i2++)) << 18 | As.indexOf(e2.charAt(i2++)) << 12 | (n2 = As.indexOf(e2.charAt(i2++))) << 6 | (s2 = As.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var Cs = n(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ provider: u2.provider, filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  });
  var xs = t$1(Cs);
  var Os = "manual";
  function Es(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === Os)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, this.mixinDatacomError = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2;
      t2 = t2 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function Ls(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "\u52A0\u8F7D\u4E2D...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get(s3, c2) {
        switch (c2) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
          return function(...s4) {
            return __async(this, null, function* () {
              const r3 = n3 ? n3({ params: s4 }) : {};
              let i3, o3;
              try {
                return yield M(q(t3, "invoke"), __spreadValues({}, r3)), i3 = yield e3(...s4), yield M(q(t3, "success"), __spreadProps(__spreadValues({}, r3), { result: i3 })), i3;
              } catch (e4) {
                throw o3 = e4, yield M(q(t3, "fail"), __spreadProps(__spreadValues({}, r3), { error: o3 })), o3;
              } finally {
                yield M(q(t3, "complete"), o3 ? __spreadProps(__spreadValues({}, r3), { error: o3 }) : __spreadProps(__spreadValues({}, r3), { result: i3 }));
              }
            });
          };
        }({ fn: function s4(...h2) {
          return __async(this, null, function* () {
            let l2;
            a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
            const d2 = { name: t2, type: u, data: { method: c2, params: h2 } };
            "object" == typeof n2.secretMethods && function(e3, t3) {
              const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
              r3 && (t3.secretType = r3);
            }(n2, d2);
            let p2 = false;
            try {
              l2 = yield e2.callFunction(d2);
            } catch (e3) {
              p2 = true, l2 = { result: new te(e3) };
            }
            const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = l2.result || {};
            if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ie(y2), Y(B, __spreadValues({}, y2))), g2) {
              let e3 = m2;
              if (p2 && o2) {
                e3 = (yield o2({ objectName: t2, methodName: c2, params: h2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
              }
              if (a2)
                if ("toast" === i2.type)
                  uni.showToast({ title: e3, icon: "none" });
                else {
                  if ("modal" !== i2.type)
                    throw new Error(`Invalid errorOptions.type: ${i2.type}`);
                  {
                    const { confirm: t3 } = yield function() {
                      return __async(this, arguments, function* ({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                        return new Promise((i3, o3) => {
                          uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                            i3(e5);
                          }, fail() {
                            i3({ confirm: false, cancel: true });
                          } });
                        });
                      });
                    }({ title: "\u63D0\u793A", content: e3, showCancel: i2.retry, cancelText: "\u53D6\u6D88", confirmText: i2.retry ? "\u91CD\u8BD5" : "\u786E\u5B9A" });
                    if (i2.retry && t3)
                      return s4(...h2);
                  }
                }
              const n3 = new te({ subject: f2, code: g2, message: m2, requestId: l2.requestId });
              throw n3.detail = l2.result, Y(j, { type: z, content: n3 }), n3;
            }
            return Y(j, { type: z, content: l2.result }), l2.result;
          });
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t2, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function Rs(e2) {
    return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  function Us() {
    return __async(this, arguments, function* ({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
      Rs(this);
      throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${P}\``);
    });
  }
  function Ns(e2) {
    return __async(this, null, function* () {
      const t2 = Rs(this);
      return t2.initPromise || (t2.initPromise = Us.call(this, e2).then((e3) => e3).catch((e3) => {
        throw delete t2.initPromise, e3;
      })), t2.initPromise;
    });
  }
  function Ds(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return Ns.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Ms(e2) {
    const t2 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t2[e2](__spreadProps(__spreadValues({}, n2), { success(e3) {
          s2(e3);
        }, fail(e3) {
          r2(e3);
        } }));
      });
    };
  }
  var qs = class extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t2) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
    }
    on(e2, t2) {
      return this.addListener(e2, t2);
    }
    removeListener(e2, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e2, t2) {
      return this.removeListener(e2, t2);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t2) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([Ms("getSystemInfo")(), Ms("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    open() {
      return __async(this, null, function* () {
        return this.init();
      });
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t2 = e2 && e2.data && e2.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t2, messageId: n2, message: s2 } = e2;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e2, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  };
  function Fs(e2, t2) {
    return __async(this, null, function* () {
      const n2 = `http://${e2}:${t2}/system/ping`;
      try {
        const e3 = yield (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
          ne.request(__spreadProps(__spreadValues({}, s2), { success(t4) {
            e4(t4);
          }, fail(e5) {
            t3(e5);
          } }));
        }));
        return !(!e3.data || 0 !== e3.data.code);
      } catch (e3) {
        return false;
      }
      var s2;
    });
  }
  function Ks(e2) {
    return __async(this, null, function* () {
      {
        const { osName: e3, osVersion: t3 } = ce();
        "ios" === e3 && function(e4) {
          if (!e4 || "string" != typeof e4)
            return 0;
          const t4 = e4.match(/^(\d+)./);
          return t4 && t4[1] ? parseInt(t4[1]) : 0;
        }(t3) >= 14 && console.warn("iOS 14\u53CA\u4EE5\u4E0A\u7248\u672C\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u9700\u8981\u5141\u8BB8\u5BA2\u6237\u7AEF\u67E5\u627E\u5E76\u8FDE\u63A5\u5230\u672C\u5730\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF08\u4EC5\u5F00\u53D1\u671F\u95F4\u9700\u8981\uFF0C\u53D1\u884C\u540E\u4E0D\u9700\u8981\uFF09");
      }
      const t2 = e2.__dev__;
      if (!t2.debugInfo)
        return;
      const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = yield function(e3, t3) {
        return __async(this, null, function* () {
          let n3;
          for (let s3 = 0; s3 < e3.length; s3++) {
            const r3 = e3[s3];
            if (yield Fs(r3, t3)) {
              n3 = r3;
              break;
            }
          }
          return { address: n3, port: t3 };
        });
      }(n2, s2);
      if (r2)
        return t2.localAddress = r2, void (t2.localPort = s2);
      const i2 = console["error"];
      let o2 = "";
      if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002") : o2 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002", o2 += "\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs\n- \u68C0\u67E5\u662F\u5426\u9519\u8BEF\u7684\u4F7F\u7528\u62E6\u622A\u5668\u4FEE\u6539uni.request\u65B9\u6CD5\u7684\u53C2\u6570", 0 === P.indexOf("mp-") && (o2 += "\n- \u5C0F\u7A0B\u5E8F\u4E2D\u5982\u4F55\u4F7F\u7528uniCloud\uFF0C\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
        throw new Error(o2);
      i2(o2);
    });
  }
  function js(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  var $s = { tcb: St, tencent: St, aliyun: pe, private: kt, alipay: Lt };
  var Bs = new class {
    init(e2) {
      let t2 = {};
      const n2 = $s[e2.provider];
      if (!n2)
        throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      t2 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === P;
        const n3 = T;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Ks(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), js(t2), Kn(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = Qn(Xn, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = Qn(Xn, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = Ts, e3.chooseAndUploadFile = xs.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Es(e3);
        } }), e3.SSEChannel = qs, e3.initSecureNetworkByWeixin = Ds(e3), e3.importObject = Ls(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = (/* @__PURE__ */ function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = ee(n4), h2 = i2.then(() => s2 ? Promise.resolve() : M(q(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : M(q(t3, "success"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (r2 && Y(j, { type: H, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : M(q(t3, "fail"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (Y(j, { type: H, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return h2;
            h2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            });
          };
        }(t2[e3], e3)).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = C;
    let t2 = {};
    if (e2 && 1 === e2.length)
      t2 = e2[0], Bs = Bs.init(t2), Bs._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e3) => {
        Bs[e3] = function() {
          return console.error(n2), Promise.reject(new te({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Bs, { get mixinDatacom() {
      return Es(Bs);
    } }), bs(Bs), Bs.addInterceptor = N, Bs.removeInterceptor = D, Bs.interceptObject = F;
  })();
  var Ws = Bs;
  var fontData = [
    {
      "font_class": "arrow-down",
      "unicode": "\uE6BE"
    },
    {
      "font_class": "arrow-left",
      "unicode": "\uE6BC"
    },
    {
      "font_class": "arrow-right",
      "unicode": "\uE6BB"
    },
    {
      "font_class": "arrow-up",
      "unicode": "\uE6BD"
    },
    {
      "font_class": "auth",
      "unicode": "\uE6AB"
    },
    {
      "font_class": "auth-filled",
      "unicode": "\uE6CC"
    },
    {
      "font_class": "back",
      "unicode": "\uE6B9"
    },
    {
      "font_class": "bars",
      "unicode": "\uE627"
    },
    {
      "font_class": "calendar",
      "unicode": "\uE6A0"
    },
    {
      "font_class": "calendar-filled",
      "unicode": "\uE6C0"
    },
    {
      "font_class": "camera",
      "unicode": "\uE65A"
    },
    {
      "font_class": "camera-filled",
      "unicode": "\uE658"
    },
    {
      "font_class": "cart",
      "unicode": "\uE631"
    },
    {
      "font_class": "cart-filled",
      "unicode": "\uE6D0"
    },
    {
      "font_class": "chat",
      "unicode": "\uE65D"
    },
    {
      "font_class": "chat-filled",
      "unicode": "\uE659"
    },
    {
      "font_class": "chatboxes",
      "unicode": "\uE696"
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": "\uE692"
    },
    {
      "font_class": "chatbubble",
      "unicode": "\uE697"
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": "\uE694"
    },
    {
      "font_class": "checkbox",
      "unicode": "\uE62B"
    },
    {
      "font_class": "checkbox-filled",
      "unicode": "\uE62C"
    },
    {
      "font_class": "checkmarkempty",
      "unicode": "\uE65C"
    },
    {
      "font_class": "circle",
      "unicode": "\uE65B"
    },
    {
      "font_class": "circle-filled",
      "unicode": "\uE65E"
    },
    {
      "font_class": "clear",
      "unicode": "\uE66D"
    },
    {
      "font_class": "close",
      "unicode": "\uE673"
    },
    {
      "font_class": "closeempty",
      "unicode": "\uE66C"
    },
    {
      "font_class": "cloud-download",
      "unicode": "\uE647"
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": "\uE646"
    },
    {
      "font_class": "cloud-upload",
      "unicode": "\uE645"
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": "\uE648"
    },
    {
      "font_class": "color",
      "unicode": "\uE6CF"
    },
    {
      "font_class": "color-filled",
      "unicode": "\uE6C9"
    },
    {
      "font_class": "compose",
      "unicode": "\uE67F"
    },
    {
      "font_class": "contact",
      "unicode": "\uE693"
    },
    {
      "font_class": "contact-filled",
      "unicode": "\uE695"
    },
    {
      "font_class": "down",
      "unicode": "\uE6B8"
    },
    {
      "font_class": "bottom",
      "unicode": "\uE6B8"
    },
    {
      "font_class": "download",
      "unicode": "\uE68D"
    },
    {
      "font_class": "download-filled",
      "unicode": "\uE681"
    },
    {
      "font_class": "email",
      "unicode": "\uE69E"
    },
    {
      "font_class": "email-filled",
      "unicode": "\uE69A"
    },
    {
      "font_class": "eye",
      "unicode": "\uE651"
    },
    {
      "font_class": "eye-filled",
      "unicode": "\uE66A"
    },
    {
      "font_class": "eye-slash",
      "unicode": "\uE6B3"
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": "\uE6B4"
    },
    {
      "font_class": "fire",
      "unicode": "\uE6A1"
    },
    {
      "font_class": "fire-filled",
      "unicode": "\uE6C5"
    },
    {
      "font_class": "flag",
      "unicode": "\uE65F"
    },
    {
      "font_class": "flag-filled",
      "unicode": "\uE660"
    },
    {
      "font_class": "folder-add",
      "unicode": "\uE6A9"
    },
    {
      "font_class": "folder-add-filled",
      "unicode": "\uE6C8"
    },
    {
      "font_class": "font",
      "unicode": "\uE6A3"
    },
    {
      "font_class": "forward",
      "unicode": "\uE6BA"
    },
    {
      "font_class": "gear",
      "unicode": "\uE664"
    },
    {
      "font_class": "gear-filled",
      "unicode": "\uE661"
    },
    {
      "font_class": "gift",
      "unicode": "\uE6A4"
    },
    {
      "font_class": "gift-filled",
      "unicode": "\uE6C4"
    },
    {
      "font_class": "hand-down",
      "unicode": "\uE63D"
    },
    {
      "font_class": "hand-down-filled",
      "unicode": "\uE63C"
    },
    {
      "font_class": "hand-up",
      "unicode": "\uE63F"
    },
    {
      "font_class": "hand-up-filled",
      "unicode": "\uE63E"
    },
    {
      "font_class": "headphones",
      "unicode": "\uE630"
    },
    {
      "font_class": "heart",
      "unicode": "\uE639"
    },
    {
      "font_class": "heart-filled",
      "unicode": "\uE641"
    },
    {
      "font_class": "help",
      "unicode": "\uE679"
    },
    {
      "font_class": "help-filled",
      "unicode": "\uE674"
    },
    {
      "font_class": "home",
      "unicode": "\uE662"
    },
    {
      "font_class": "home-filled",
      "unicode": "\uE663"
    },
    {
      "font_class": "image",
      "unicode": "\uE670"
    },
    {
      "font_class": "image-filled",
      "unicode": "\uE678"
    },
    {
      "font_class": "images",
      "unicode": "\uE650"
    },
    {
      "font_class": "images-filled",
      "unicode": "\uE64B"
    },
    {
      "font_class": "info",
      "unicode": "\uE669"
    },
    {
      "font_class": "info-filled",
      "unicode": "\uE649"
    },
    {
      "font_class": "left",
      "unicode": "\uE6B7"
    },
    {
      "font_class": "link",
      "unicode": "\uE6A5"
    },
    {
      "font_class": "list",
      "unicode": "\uE644"
    },
    {
      "font_class": "location",
      "unicode": "\uE6AE"
    },
    {
      "font_class": "location-filled",
      "unicode": "\uE6AF"
    },
    {
      "font_class": "locked",
      "unicode": "\uE66B"
    },
    {
      "font_class": "locked-filled",
      "unicode": "\uE668"
    },
    {
      "font_class": "loop",
      "unicode": "\uE633"
    },
    {
      "font_class": "mail-open",
      "unicode": "\uE643"
    },
    {
      "font_class": "mail-open-filled",
      "unicode": "\uE63A"
    },
    {
      "font_class": "map",
      "unicode": "\uE667"
    },
    {
      "font_class": "map-filled",
      "unicode": "\uE666"
    },
    {
      "font_class": "map-pin",
      "unicode": "\uE6AD"
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": "\uE6AC"
    },
    {
      "font_class": "medal",
      "unicode": "\uE6A2"
    },
    {
      "font_class": "medal-filled",
      "unicode": "\uE6C3"
    },
    {
      "font_class": "mic",
      "unicode": "\uE671"
    },
    {
      "font_class": "mic-filled",
      "unicode": "\uE677"
    },
    {
      "font_class": "micoff",
      "unicode": "\uE67E"
    },
    {
      "font_class": "micoff-filled",
      "unicode": "\uE6B0"
    },
    {
      "font_class": "minus",
      "unicode": "\uE66F"
    },
    {
      "font_class": "minus-filled",
      "unicode": "\uE67D"
    },
    {
      "font_class": "more",
      "unicode": "\uE64D"
    },
    {
      "font_class": "more-filled",
      "unicode": "\uE64E"
    },
    {
      "font_class": "navigate",
      "unicode": "\uE66E"
    },
    {
      "font_class": "navigate-filled",
      "unicode": "\uE67A"
    },
    {
      "font_class": "notification",
      "unicode": "\uE6A6"
    },
    {
      "font_class": "notification-filled",
      "unicode": "\uE6C1"
    },
    {
      "font_class": "paperclip",
      "unicode": "\uE652"
    },
    {
      "font_class": "paperplane",
      "unicode": "\uE672"
    },
    {
      "font_class": "paperplane-filled",
      "unicode": "\uE675"
    },
    {
      "font_class": "person",
      "unicode": "\uE699"
    },
    {
      "font_class": "person-filled",
      "unicode": "\uE69D"
    },
    {
      "font_class": "personadd",
      "unicode": "\uE69F"
    },
    {
      "font_class": "personadd-filled",
      "unicode": "\uE698"
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": "\uE6D1"
    },
    {
      "font_class": "phone",
      "unicode": "\uE69C"
    },
    {
      "font_class": "phone-filled",
      "unicode": "\uE69B"
    },
    {
      "font_class": "plus",
      "unicode": "\uE676"
    },
    {
      "font_class": "plus-filled",
      "unicode": "\uE6C7"
    },
    {
      "font_class": "plusempty",
      "unicode": "\uE67B"
    },
    {
      "font_class": "pulldown",
      "unicode": "\uE632"
    },
    {
      "font_class": "pyq",
      "unicode": "\uE682"
    },
    {
      "font_class": "qq",
      "unicode": "\uE680"
    },
    {
      "font_class": "redo",
      "unicode": "\uE64A"
    },
    {
      "font_class": "redo-filled",
      "unicode": "\uE655"
    },
    {
      "font_class": "refresh",
      "unicode": "\uE657"
    },
    {
      "font_class": "refresh-filled",
      "unicode": "\uE656"
    },
    {
      "font_class": "refreshempty",
      "unicode": "\uE6BF"
    },
    {
      "font_class": "reload",
      "unicode": "\uE6B2"
    },
    {
      "font_class": "right",
      "unicode": "\uE6B5"
    },
    {
      "font_class": "scan",
      "unicode": "\uE62A"
    },
    {
      "font_class": "search",
      "unicode": "\uE654"
    },
    {
      "font_class": "settings",
      "unicode": "\uE653"
    },
    {
      "font_class": "settings-filled",
      "unicode": "\uE6CE"
    },
    {
      "font_class": "shop",
      "unicode": "\uE62F"
    },
    {
      "font_class": "shop-filled",
      "unicode": "\uE6CD"
    },
    {
      "font_class": "smallcircle",
      "unicode": "\uE67C"
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": "\uE665"
    },
    {
      "font_class": "sound",
      "unicode": "\uE684"
    },
    {
      "font_class": "sound-filled",
      "unicode": "\uE686"
    },
    {
      "font_class": "spinner-cycle",
      "unicode": "\uE68A"
    },
    {
      "font_class": "staff",
      "unicode": "\uE6A7"
    },
    {
      "font_class": "staff-filled",
      "unicode": "\uE6CB"
    },
    {
      "font_class": "star",
      "unicode": "\uE688"
    },
    {
      "font_class": "star-filled",
      "unicode": "\uE68F"
    },
    {
      "font_class": "starhalf",
      "unicode": "\uE683"
    },
    {
      "font_class": "trash",
      "unicode": "\uE687"
    },
    {
      "font_class": "trash-filled",
      "unicode": "\uE685"
    },
    {
      "font_class": "tune",
      "unicode": "\uE6AA"
    },
    {
      "font_class": "tune-filled",
      "unicode": "\uE6CA"
    },
    {
      "font_class": "undo",
      "unicode": "\uE64F"
    },
    {
      "font_class": "undo-filled",
      "unicode": "\uE64C"
    },
    {
      "font_class": "up",
      "unicode": "\uE6B6"
    },
    {
      "font_class": "top",
      "unicode": "\uE6B6"
    },
    {
      "font_class": "upload",
      "unicode": "\uE690"
    },
    {
      "font_class": "upload-filled",
      "unicode": "\uE68E"
    },
    {
      "font_class": "videocam",
      "unicode": "\uE68C"
    },
    {
      "font_class": "videocam-filled",
      "unicode": "\uE689"
    },
    {
      "font_class": "vip",
      "unicode": "\uE6A8"
    },
    {
      "font_class": "vip-filled",
      "unicode": "\uE6C6"
    },
    {
      "font_class": "wallet",
      "unicode": "\uE6B1"
    },
    {
      "font_class": "wallet-filled",
      "unicode": "\uE6C2"
    },
    {
      "font_class": "weibo",
      "unicode": "\uE68B"
    },
    {
      "font_class": "weixin",
      "unicode": "\uE691"
    }
  ];
  var iconUrl = "/assets/uniicons.32e978a5.ttf";
  var _style_0$1 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
  var getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uniicons",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main$1 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "u-text",
      {
        style: (0, import_vue.normalizeStyle)($options.styleObj),
        class: "uni-icons",
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      (0, import_vue.toDisplayString)($options.unicode),
      5
      /* TEXT, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "D:/Download/CoHub/CoHub/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  var isObject = (val) => val !== null && typeof val === "object";
  var defaultDelimiters = ["{", "}"];
  var BaseFormatter = class {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  };
  var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  var LOCALE_ZH_HANS = "zh-Hans";
  var LOCALE_ZH_HANT = "zh-Hant";
  var LOCALE_EN = "en";
  var LOCALE_FR = "fr";
  var LOCALE_ES = "es";
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  var I18n = class {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  };
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  var en = {
    "uni-search-bar.cancel": "Cancel",
    "uni-search-bar.placeholder": "Quick Search"
  };
  var zhHans = {
    "uni-search-bar.cancel": "Cancel",
    "uni-search-bar.placeholder": "Quick Search"
  };
  var zhHant = {
    "uni-search-bar.cancel": "Cancel",
    "uni-search-bar.placeholder": "Quick Search"
  };
  var messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  var _style_0 = { "uni-searchbar": { "": { "flexDirection": "row", "position": "relative", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "uni-searchbar__box": { "": { "overflow": "hidden", "position": "relative", "flex": 1, "justifyContent": "center", "flexDirection": "row", "alignItems": "center", "height": 36, "paddingTop": 5, "paddingRight": 8, "paddingBottom": 5, "paddingLeft": 0 } }, "uni-searchbar__box-icon-search": { "": { "flexDirection": "row", "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "justifyContent": "center", "alignItems": "center", "color": "#E3E3E8" } }, "uni-searchbar__box-search-input": { "": { "flex": 1, "fontSize": 15, "color": "#333333" } }, "uni-searchbar__box-icon-clear": { "": { "alignItems": "center", "lineHeight": 24, "paddingLeft": 8 } }, "uni-searchbar__text-placeholder": { "": { "fontSize": 14, "color": "#ACACB6", "marginLeft": 5 } }, "uni-searchbar__cancel": { "": { "paddingLeft": 10, "lineHeight": 36, "fontSize": 14, "color": "#333333" } } };
  var {
    t
  } = initVueI18n(messages);
  var _sfc_main = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#e9e9e9"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.$emit("clear", {
          value: this.searchVal
        });
        this.searchVal = "";
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e2) {
        this.$emit("focus", e2.detail);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue.resolveDynamicComponent)("uni-icons"), __easycom_0);
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
      class: "uni-searchbar",
      renderWhole: true
    }, [
      (0, import_vue.createElementVNode)(
        "view",
        {
          style: (0, import_vue.normalizeStyle)({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          (0, import_vue.createElementVNode)("view", { class: "uni-searchbar__box-icon-search" }, [
            (0, import_vue.renderSlot)(_ctx.$slots, "searchIcon", {}, () => [
              (0, import_vue.createVNode)(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ])
          ]),
          $data.show || $data.searchVal ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            confirmType: "search",
            type: "text",
            modelValue: $data.searchVal,
            onInput: _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event.detail.value),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 40, ["focus", "disabled", "placeholder", "maxlength", "modelValue"])) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            "u-text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            (0, import_vue.toDisplayString)($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            (0, import_vue.renderSlot)(_ctx.$slots, "clearIcon", {}, () => [
              (0, import_vue.createVNode)(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ])
          ])) : (0, import_vue.createCommentVNode)("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
        "u-text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        (0, import_vue.toDisplayString)($options.cancelTextI18n),
        1
        /* TEXT */
      )) : (0, import_vue.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/Download/CoHub/CoHub/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);

  // ../../../../CoHub/CoHub/unpackage/dist/dev/.nvue/pages/list/list.js
  var import_vue2 = __toESM(require_vue());
  var import_vuex = __toESM(require_vuex());
  var _style_0$6 = { "cmd-icon": { "": { "fontFamily": "cmdicons", "fontWeight": "400", "fontVariant": "normal", "textTransform": "none", "textRendering": "auto", "textAlign": "center", "lineHeight": 1, "fontSize": 55, "WebkitFontSmoothing": "antialiased", "verticalAlign": "middle" } }, "cmd-icon-add": { "": { "content::before": '"\\e960"' } }, "cmd-icon-add-circle": { "": { "content::before": '"\\e901"' } }, "cmd-icon-subtract": { "": { "content::before": '"\\e962"' } }, "cmd-icon-subtract-circle": { "": { "content::before": '"\\e961"' } }, "cmd-icon-align-center": { "": { "content::before": '"\\e902"' } }, "cmd-icon-align-left": { "": { "content::before": '"\\e903"' } }, "cmd-icon-align-right": { "": { "content::before": '"\\e904"' } }, "cmd-icon-arrow-down": { "": { "content::before": '"\\e905"' } }, "cmd-icon-arrow-left": { "": { "content::before": '"\\e907"' } }, "cmd-icon-arrow-right": { "": { "content::before": '"\\e908"' } }, "cmd-icon-arrow-up": { "": { "content::before": '"\\e909"' } }, "cmd-icon-bell": { "": { "content::before": '"\\e90a"' } }, "cmd-icon-blocked": { "": { "content::before": '"\\e90b"' } }, "cmd-icon-bookmark": { "": { "content::before": '"\\e90c"' } }, "cmd-icon-bullet-list": { "": { "content::before": '"\\e90d"' } }, "cmd-icon-calendar": { "": { "content::before": '"\\e90e"' } }, "cmd-icon-camera": { "": { "content::before": '"\\e90f"' } }, "cmd-icon-check-circle": { "": { "content::before": '"\\e910"' } }, "cmd-icon-chevron-down": { "": { "content::before": '"\\e911"' } }, "cmd-icon-chevron-left": { "": { "content::before": '"\\e912"' } }, "cmd-icon-chevron-right": { "": { "content::before": '"\\e913"' } }, "cmd-icon-chevron-up": { "": { "content::before": '"\\e914"' } }, "cmd-icon-clock": { "": { "content::before": '"\\e915"' } }, "cmd-icon-close-circle": { "": { "content::before": '"\\e916"' } }, "cmd-icon-close": { "": { "content::before": '"\\e917"' } }, "cmd-icon-credit-card": { "": { "content::before": '"\\e918"' } }, "cmd-icon-download-cloud": { "": { "content::before": '"\\e919"' } }, "cmd-icon-download": { "": { "content::before": '"\\e91a"' } }, "cmd-icon-edit": { "": { "content::before": '"\\e91b"' } }, "cmd-icon-equalizer": { "": { "content::before": '"\\e91c"' } }, "cmd-icon-external-link": { "": { "content::before": '"\\e91d"' } }, "cmd-icon-eye": { "": { "content::before": '"\\e91e"' } }, "cmd-icon-file-audio": { "": { "content::before": '"\\e91f"' } }, "cmd-icon-file-code": { "": { "content::before": '"\\e920"' } }, "cmd-icon-file-generic": { "": { "content::before": '"\\e921"' } }, "cmd-icon-file-jpg": { "": { "content::before": '"\\e923"' } }, "cmd-icon-file-new": { "": { "content::before": '"\\e924"' } }, "cmd-icon-file-png": { "": { "content::before": '"\\e925"' } }, "cmd-icon-file-svg": { "": { "content::before": '"\\e926"' } }, "cmd-icon-file-video": { "": { "content::before": '"\\e927"' } }, "cmd-icon-filter": { "": { "content::before": '"\\e928"' } }, "cmd-icon-folder": { "": { "content::before": '"\\e929"' } }, "cmd-icon-font-color": { "": { "content::before": '"\\e92a"' } }, "cmd-icon-heart": { "": { "content::before": '"\\e92b"' } }, "cmd-icon-help": { "": { "content::before": '"\\e92c"' } }, "cmd-icon-home": { "": { "content::before": '"\\e92d"' } }, "cmd-icon-image": { "": { "content::before": '"\\e92e"' } }, "cmd-icon-iphone-x": { "": { "content::before": '"\\e92f"' } }, "cmd-icon-iphone": { "": { "content::before": '"\\e930"' } }, "cmd-icon-lightning-bolt": { "": { "content::before": '"\\e931"' } }, "cmd-icon-link": { "": { "content::before": '"\\e932"' } }, "cmd-icon-list": { "": { "content::before": '"\\e933"' } }, "cmd-icon-lock": { "": { "content::before": '"\\e934"' } }, "cmd-icon-mail": { "": { "content::before": '"\\e935"' } }, "cmd-icon-map-pin": { "": { "content::before": '"\\e936"' } }, "cmd-icon-menu": { "": { "content::before": '"\\e937"' } }, "cmd-icon-message": { "": { "content::before": '"\\e938"' } }, "cmd-icon-money": { "": { "content::before": '"\\e939"' } }, "cmd-icon-next": { "": { "content::before": '"\\e93a"' } }, "cmd-icon-numbered-list": { "": { "content::before": '"\\e93b"' } }, "cmd-icon-pause": { "": { "content::before": '"\\e93c"' } }, "cmd-icon-phone": { "": { "content::before": '"\\e93d"' } }, "cmd-icon-play": { "": { "content::before": '"\\e93e"' } }, "cmd-icon-playlist": { "": { "content::before": '"\\e93f"' } }, "cmd-icon-prev": { "": { "content::before": '"\\e940"' } }, "cmd-icon-reload": { "": { "content::before": '"\\e941"' } }, "cmd-icon-repecmd-play": { "": { "content::before": '"\\e942"' } }, "cmd-icon-search": { "": { "content::before": '"\\e943"' } }, "cmd-icon-settings": { "": { "content::before": '"\\e944"' } }, "cmd-icon-share-2": { "": { "content::before": '"\\e945"' } }, "cmd-icon-share": { "": { "content::before": '"\\e946"' } }, "cmd-icon-shopping-bag-2": { "": { "content::before": '"\\e947"' } }, "cmd-icon-shopping-bag": { "": { "content::before": '"\\e948"' } }, "cmd-icon-shopping-cart": { "": { "content::before": '"\\e949"' } }, "cmd-icon-shuffle-play": { "": { "content::before": '"\\e94a"' } }, "cmd-icon-sketch": { "": { "content::before": '"\\e94b"' } }, "cmd-icon-sound": { "": { "content::before": '"\\e94c"' } }, "cmd-icon-star": { "": { "content::before": '"\\e94d"' } }, "cmd-icon-stop": { "": { "content::before": '"\\e94e"' } }, "cmd-icon-streaming": { "": { "content::before": '"\\e94f"' } }, "cmd-icon-tag": { "": { "content::before": '"\\e950"' } }, "cmd-icon-tags": { "": { "content::before": '"\\e951"' } }, "cmd-icon-text-italic": { "": { "content::before": '"\\e952"' } }, "cmd-icon-text-strikethrough": { "": { "content::before": '"\\e953"' } }, "cmd-icon-text-underline": { "": { "content::before": '"\\e954"' } }, "cmd-icon-trash": { "": { "content::before": '"\\e955"' } }, "cmd-icon-upload": { "": { "content::before": '"\\e956"' } }, "cmd-icon-user": { "": { "content::before": '"\\e957"' } }, "cmd-icon-video": { "": { "content::before": '"\\e958"' } }, "cmd-icon-volume-minus": { "": { "content::before": '"\\e959"' } }, "cmd-icon-volume-off": { "": { "content::before": '"\\e95a"' } }, "cmd-icon-volume-plus": { "": { "content::before": '"\\e95b"' } }, "cmd-icon-analytics": { "": { "content::before": '"\\e95c"' } }, "cmd-icon-star-2": { "": { "content::before": '"\\e95d"' } }, "cmd-icon-check": { "": { "content::before": '"\\e95e"' } }, "cmd-icon-heart-2": { "": { "content::before": '"\\e95f"' } }, "cmd-icon-loading": { "": { "content::before": '"\\e967"' } }, "cmd-icon-loading-2": { "": { "content::before": '"\\e966"' } }, "cmd-icon-loading-3": { "": { "content::before": '"\\e963"' } }, "cmd-icon-alert-circle": { "": { "content::before": '"\\e964"' } }, "@FONT-FACE": [{ "fontFamily": "cmdicons", "src": 'url("data:application/x-font-woff;charset=utf-8;base64,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") format("woff")' }] };
  var _sfc_main$6 = {
    name: "cmd-icon",
    props: {
      /**
       * 自定义字体图标库前缀
       */
      prefixClass: {
        type: String,
        default: "cmd-icon"
      },
      /**
       * 图标类型
       */
      type: String,
      /**
       * 图标颜色
       */
      color: {
        type: String,
        default: "#fff"
      },
      /**
       * 图标大小
       */
      size: {
        type: [Number, String],
        default: "24"
      }
    },
    computed: {
      setStyle() {
        return `color:${this.color};
				font-size:${this.size}px;
				line-height:${this.size}px`;
      }
    },
    methods: {
      $_click(e2) {
        this.$emit("click", e2);
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)([$props.prefixClass, $props.prefixClass + "-" + $props.type]),
        style: (0, import_vue2.normalizeStyle)($options.setStyle),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.$_click && $options.$_click(...args)),
        renderWhole: true
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["styles", [_style_0$6]], ["__file", "D:/Download/CoHub/CoHub/components/cmd-icon/cmd-icon.vue"]]);
  var _style_0$5 = { "cmd-nav-bar-fixed": { "": { "position": "fixed", "top": 0, "left": 0, "right": 0, "zIndex": 1e3, "backgroundColor": "#ffffff" } }, "status-bar": { "": { "boxSizing": "border-box", "width": 80, "fontSize": 55, "marginBottom": "-3rpx", "backgroundColor": "rgba(0,0,0,0)" } }, "left-title": { "": { "fontWeight": "bold" } }, "cmd-nav-bar": { "": { "display": "flex", "alignItems": "center", "height": "120rpx", "lineHeight": "120rpx", "color": "#000000", "backgroundColor": "#ffffff", "boxShadow": "0 6rpx 6rpx -3rpx rgba(0, 0, 0, 0.2)" } }, "cmd-nav-bar-left": { "": { "flex": 1, "height": 100, "display": "flex", "fontSize": 55, "justifyContent": "flex-start", "fontWeight": "900", "paddingTop": 16, "paddingLeft": -150 } }, "cmd-nav-bar-title": { "": { "flex": 1, "height": 100, "display": "flex", "fontSize": 55, "justifyContent": "center", "fontWeight": "bold", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap" } }, "cmd-nav-bar-right": { "": { "flex": 1, "height": 100, "display": "flex", "fontSize": 55, "justifyContent": "flex-end", "marginRight": "30rpx" } }, "cmd-nav-bar-left-icon": { "": { "marginRight": "10rpx" } }, "cmd-nav-bar-left-title": { "": { "fontSize": 50, "fontWeight": "bold", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap" } }, "cmd-nav-bar-right-icon": { "": { "marginLeft": "20rpx", "fontWeight": "900" } }, "cmd-nav-bar-right-text": { "": { "marginLeft": "20rpx", "fontWeight": "900" } }, "cmd-nav-bar-avatar-container": { "": { "display": "flex" } }, "cmd-nav-bar-avatar": { "": { "width": "20rpx", "height": "20rpx", "borderRadius": 5, "marginLeft": "600rpx", "marginBottom": "20rpx" } } };
  var _sfc_main$5 = {
    name: "cmd-nav-bar",
    components: {
      cmdIcon: __easycom_0$1
    },
    props: {
      /**
       * 固定到页面顶部
       */
      fixed: {
        type: Boolean,
        default: true
      },
      fontWeight: {
        type: String,
        default: "bold"
        // 默认字体粗细
      },
      /**
       * 文字图标颜色
       */
      fontSize: {
        type: String,
        default: ""
      },
      fontColor: {
        type: String,
        default: ""
      },
      /**
       * 导航栏背景颜色
       */
      backgroundColor: {
        type: String,
        default: ""
      },
      /**
       * 导航栏标题
       */
      title: {
        type: String,
        default: ""
      },
      /**
       * 导航栏左侧返回按钮，默认点击返回上层
       */
      back: {
        type: Boolean,
        default: false
      },
      /**
       * 左侧文字可同显返回按钮
       */
      leftText: {
        type: String,
        default: ""
      },
      /**
       * 左侧显示标题，不可显示左侧文字图标
       */
      leftTitle: {
        type: String,
        default: ""
      },
      /**
       * 右侧文字
       */
      rightText: {
        type: String,
        default: ""
      },
      /**
       * 右侧文字颜色
       */
      rightColor: {
        type: String,
        default: ""
      },
      /**
       * 图标一，不可与返回按钮,左侧标题同显
       */
      iconOne: {
        type: String,
        default: ""
      },
      /**
       * 图标二
       */
      iconTwo: {
        type: String,
        default: ""
      },
      /**
       * 图标三，须显有图标二
       */
      iconThree: {
        type: String,
        default: ""
      },
      /**
       * 图标四，不可与右侧文字同显
       */
      iconFour: {
        type: String,
        default: ""
      },
      avatarUrl: {
        type: String,
        default: ""
      }
    },
    computed: {
      /**
       * 设置中心标题
       */
      setCenterTitle() {
        let centerTitle = "";
        if (this.title) {
          if (this.title.length > 8) {
            centerTitle = this.title.slice(0, 6) + "...";
          } else {
            centerTitle = this.title;
          }
        }
        return centerTitle;
      },
      /**
       * 设置标题图标颜色
       */
      setFontColor() {
        let fontColor = "#000";
        if (this.fontColor) {
          fontColor = this.fontColor;
        }
        return fontColor;
      },
      /**
       * 设置背景颜色
       */
      setBackgroundColor() {
        let backgroundColor = "#fff";
        if (this.backgroundColor) {
          backgroundColor = `background: ${this.backgroundColor};`;
        }
        return backgroundColor;
      }
    },
    methods: {
      /**
       * 图标一点击事件
       */
      $_iconOneClick() {
        if (this.back) {
          uni.navigateBack();
        } else {
          this.$emit("iconOne");
        }
      },
      /**
       * 图标二点击事件
       */
      $_iconTwoClick() {
        this.$emit("iconTwo");
      },
      /**
       * 图标三点击事件
       */
      $_iconThreeClick() {
        this.$emit("iconThree");
      },
      /**
       * 图标四点击事件
       */
      $_iconFourClick() {
        this.$emit("iconFour");
      },
      /**
       * 左侧文字点击事件
       */
      $_leftTextClick() {
        this.$emit("leftText");
      },
      /**
       * 右侧文字点击事件
       */
      $_rightTextClick() {
        this.$emit("rightText");
      },
      $_avatarClick() {
        uni.navigateTo({
          url: "/pages/ucenter/settings/settings"
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cmd_icon = resolveEasycom((0, import_vue2.resolveDynamicComponent)("cmd-icon"), __easycom_0$1);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)($props.fixed ? "cmd-nav-bar-fixed" : ""),
        style: (0, import_vue2.normalizeStyle)($options.setBackgroundColor),
        renderWhole: true
      },
      [
        (0, import_vue2.createElementVNode)("view", { class: "status-bar" }),
        (0, import_vue2.createElementVNode)("view", { class: "cmd-nav-bar" }, [
          (0, import_vue2.createElementVNode)("view", { class: "cmd-nav-bar-left" }, [
            $props.back && !$props.leftTitle || $props.iconOne && !$props.leftTitle ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
              key: 0,
              onClick: _cache[0] || (_cache[0] = (...args) => $options.$_iconOneClick && $options.$_iconOneClick(...args)),
              class: "cmd-nav-bar-left-icon"
            }, [
              (0, import_vue2.createVNode)(_component_cmd_icon, {
                type: $props.back ? "chevron-left" : $props.iconOne,
                size: "50",
                color: $options.setFontColor
              }, null, 8, ["type", "color"])
            ])) : (0, import_vue2.createCommentVNode)("v-if", true),
            (0, import_vue2.createElementVNode)(
              "u-text",
              {
                style: (0, import_vue2.normalizeStyle)({ fontWeight: $props.fontWeight })
              },
              (0, import_vue2.toDisplayString)($props.leftTitle),
              5
              /* TEXT, STYLE */
            )
          ]),
          !$props.leftTitle ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
            "view",
            {
              key: 0,
              class: "cmd-nav-bar-title",
              style: (0, import_vue2.normalizeStyle)("color:" + $options.setFontColor)
            },
            [
              (0, import_vue2.createElementVNode)(
                "u-text",
                null,
                (0, import_vue2.toDisplayString)($options.setCenterTitle),
                1
                /* TEXT */
              )
            ],
            4
            /* STYLE */
          )) : (0, import_vue2.createCommentVNode)("v-if", true),
          (0, import_vue2.createElementVNode)("view", { class: "cmd-nav-bar-right" }, [
            (0, import_vue2.createElementVNode)("view", {
              class: "avatar-container",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.$_avatarClick && $options.$_avatarClick(...args))
            }, [
              (0, import_vue2.createElementVNode)("u-image", {
                class: "avatar",
                src: $props.avatarUrl
              }, null, 8, ["src"])
            ]),
            $props.iconThree && $props.iconFour && !$props.rightText ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
              key: 0,
              onClick: _cache[2] || (_cache[2] = (...args) => $options.$_iconFourClick && $options.$_iconFourClick(...args)),
              class: "cmd-nav-bar-right-icon",
              style: { "margin-left": "0" }
            }, [
              (0, import_vue2.createVNode)(_component_cmd_icon, {
                type: $props.iconFour,
                size: "24",
                color: $options.setFontColor
              }, null, 8, ["type", "color"])
            ])) : (0, import_vue2.createCommentVNode)("v-if", true),
            $props.iconTwo && $props.iconThree ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
              key: 1,
              onClick: _cache[3] || (_cache[3] = (...args) => $options.$_iconThreeClick && $options.$_iconThreeClick(...args)),
              class: "cmd-nav-bar-right-icon"
            }, [
              (0, import_vue2.createVNode)(_component_cmd_icon, {
                type: $props.iconThree,
                size: "24",
                color: $options.setFontColor
              }, null, 8, ["type", "color"])
            ])) : (0, import_vue2.createCommentVNode)("v-if", true),
            $props.iconTwo ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
              key: 2,
              onClick: _cache[4] || (_cache[4] = (...args) => $options.$_iconTwoClick && $options.$_iconTwoClick(...args)),
              class: "cmd-nav-bar-right-icon"
            }, [
              (0, import_vue2.createVNode)(_component_cmd_icon, {
                type: $props.iconTwo,
                size: "24",
                color: $options.setFontColor
              }, null, 8, ["type", "color"])
            ])) : (0, import_vue2.createCommentVNode)("v-if", true),
            $props.rightText ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
              "u-text",
              {
                key: 3,
                onClick: _cache[5] || (_cache[5] = (...args) => $options.$_rightTextClick && $options.$_rightTextClick(...args)),
                class: "cmd-nav-bar-right-text",
                style: (0, import_vue2.normalizeStyle)($props.rightColor != "" ? "color:" + $props.rightColor : "color:" + $options.setFontColor)
              },
              (0, import_vue2.toDisplayString)($props.rightText),
              5
              /* TEXT, STYLE */
            )) : (0, import_vue2.createCommentVNode)("v-if", true)
          ])
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_02 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["styles", [_style_0$5]], ["__file", "D:/Download/CoHub/CoHub/components/cmd-nav-bar/cmd-nav-bar.vue"]]);
  var mpMixins = {};
  var bindIngXMixins = {};
  var BindingX = requireNativePlugin("bindingx");
  var dom$1 = requireNativePlugin("dom");
  var animation = requireNativePlugin("animation");
  bindIngXMixins = {
    data() {
      return {};
    },
    watch: {
      show(newVal) {
        if (this.autoClose)
          return;
        if (this.stop)
          return;
        this.stop = true;
        if (newVal) {
          this.open(newVal);
        } else {
          this.close();
        }
      },
      leftOptions() {
        this.getSelectorQuery();
        this.init();
      },
      rightOptions(newVal) {
        this.init();
      }
    },
    created() {
      this.swipeaction = this.getSwipeAction();
      if (this.swipeaction && Array.isArray(this.swipeaction.children)) {
        this.swipeaction.children.push(this);
      }
    },
    mounted() {
      this.box = this.getEl(this.$refs["selector-box--hock"]);
      this.selector = this.getEl(this.$refs["selector-content--hock"]);
      this.leftButton = this.getEl(this.$refs["selector-left-button--hock"]);
      this.rightButton = this.getEl(this.$refs["selector-right-button--hock"]);
      this.init();
    },
    // beforeDestroy() {
    // 	this.swipeaction.children.forEach((item, index) => {
    // 		if (item === this) {
    // 			this.swipeaction.children.splice(index, 1)
    // 		}
    // 	})
    // },
    methods: {
      init() {
        this.$nextTick(() => {
          this.x = 0;
          this.button = {
            show: false
          };
          setTimeout(() => {
            this.getSelectorQuery();
          }, 200);
        });
      },
      onClick(index, item, position) {
        this.$emit("click", {
          content: item,
          index,
          position
        });
      },
      touchstart(e2) {
        if (this.disabled)
          return;
        if (this.stop)
          return;
        this.stop = true;
        if (this.autoClose && this.swipeaction) {
          this.swipeaction.closeOther(this);
        }
        const leftWidth = this.button.left.width;
        const rightWidth = this.button.right.width;
        let expression = this.range(this.x, -rightWidth, leftWidth);
        let leftExpression = this.range(this.x - leftWidth, -leftWidth, 0);
        let rightExpression = this.range(this.x + rightWidth, 0, rightWidth);
        this.eventpan = BindingX.bind({
          anchor: this.box,
          eventType: "pan",
          props: [{
            element: this.selector,
            property: "transform.translateX",
            expression
          }, {
            element: this.leftButton,
            property: "transform.translateX",
            expression: leftExpression
          }, {
            element: this.rightButton,
            property: "transform.translateX",
            expression: rightExpression
          }]
        }, (e22) => {
          if (e22.state === "end") {
            this.x = e22.deltaX + this.x;
            this.isclick = true;
            this.bindTiming(e22.deltaX);
          }
        });
      },
      touchend(e2) {
        if (this.isopen !== "none" && !this.isclick) {
          this.open("none");
        }
      },
      bindTiming(x) {
        const left = this.x;
        const leftWidth = this.button.left.width;
        const rightWidth = this.button.right.width;
        const threshold = this.threshold;
        if (!this.isopen || this.isopen === "none") {
          if (left > threshold) {
            this.open("left");
          } else if (left < -threshold) {
            this.open("right");
          } else {
            this.open("none");
          }
        } else {
          if (x > -leftWidth && x < 0 || x > rightWidth) {
            if (x > -threshold && x < 0 || x - rightWidth > threshold) {
              this.open("left");
            } else {
              this.open("none");
            }
          } else {
            if (x < threshold && x > 0 || x + leftWidth < -threshold) {
              this.open("right");
            } else {
              this.open("none");
            }
          }
        }
      },
      /**
       * 移动范围
       * @param {Object} num
       * @param {Object} mix
       * @param {Object} max
       */
      range(num, mix, max) {
        return `min(max(x+${num}, ${mix}), ${max})`;
      },
      /**
       * 开启swipe
       */
      open(type) {
        this.animation(type);
      },
      /**
       * 关闭swipe
       */
      close() {
        this.animation("none");
      },
      /**
       * 开启关闭动画
       * @param {Object} type
       */
      animation(type) {
        const leftWidth = this.button.left.width;
        const rightWidth = this.button.right.width;
        if (this.eventpan && this.eventpan.token) {
          BindingX.unbind({
            token: this.eventpan.token,
            eventType: "pan"
          });
        }
        switch (type) {
          case "left":
            Promise.all([
              this.move(this.selector, leftWidth),
              this.move(this.leftButton, 0),
              this.move(this.rightButton, rightWidth * 2)
            ]).then(() => {
              this.setEmit(leftWidth, type);
            });
            break;
          case "right":
            Promise.all([
              this.move(this.selector, -rightWidth),
              this.move(this.leftButton, -leftWidth * 2),
              this.move(this.rightButton, 0)
            ]).then(() => {
              this.setEmit(-rightWidth, type);
            });
            break;
          default:
            Promise.all([
              this.move(this.selector, 0),
              this.move(this.leftButton, -leftWidth),
              this.move(this.rightButton, rightWidth)
            ]).then(() => {
              this.setEmit(0, type);
            });
        }
      },
      setEmit(x, type) {
        const leftWidth = this.button.left.width;
        const rightWidth = this.button.right.width;
        this.isopen = this.isopen || "none";
        this.stop = false;
        this.isclick = false;
        if (this.isopen !== type && this.x !== x) {
          if (type === "left" && leftWidth > 0) {
            this.$emit("change", "left");
          }
          if (type === "right" && rightWidth > 0) {
            this.$emit("change", "right");
          }
          if (type === "none") {
            this.$emit("change", "none");
          }
        }
        this.x = x;
        this.isopen = type;
      },
      move(ref2, value) {
        return new Promise((resolve, reject) => {
          animation.transition(ref2, {
            styles: {
              transform: `translateX(${value})`
            },
            duration: 150,
            //ms
            timingFunction: "linear",
            needLayout: false,
            delay: 0
            //ms
          }, function(res) {
            resolve(res);
          });
        });
      },
      /**
       * 获取ref
       * @param {Object} el
       */
      getEl(el) {
        return el.ref;
      },
      /**
       * 获取节点信息
       */
      getSelectorQuery() {
        Promise.all([
          this.getDom("left"),
          this.getDom("right")
        ]).then((data) => {
          let show = "none";
          if (this.autoClose) {
            show = "none";
          } else {
            show = this.show;
          }
          if (show === "none")
            ;
          else {
            this.open(show);
          }
        });
      },
      getDom(str) {
        return new Promise((resolve, reject) => {
          dom$1.getComponentRect(this.$refs[`selector-${str}-button--hock`], (data) => {
            if (data) {
              this.button[str] = data.size;
              resolve(data);
            } else {
              reject();
            }
          });
        });
      }
    }
  };
  var bindingx = bindIngXMixins;
  var otherMixins = {};
  var _style_0$4 = { "uni-swipe": { "": { "position": "relative" } }, "uni-swipe_box": { "": { "position": "relative" } }, "uni-swipe_text--center": { "": { "width": 100 } }, "uni-swipe_button-group": { "": { "flexDirection": "row", "position": "absolute", "top": 0, "bottom": 0 } }, "button-group--left": { "": { "left": 0, "transform": "translateX(-100%)" } }, "button-group--right": { "": { "right": 0, "transform": "translateX(100%)" } }, "uni-swipe_button": { "": { "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": 0, "paddingRight": 20, "paddingBottom": 0, "paddingLeft": 20 } }, "uni-swipe_button-text": { "": { "fontSize": 12 } }, "ani": { "": { "transitionProperty": "transform", "transitionDuration": 300, "transitionTimingFunction": "cubic-bezier(0.165,0.84,0.44,1)" } }, "@TRANSITION": { "ani": { "property": "transform", "duration": 300, "timingFunction": "cubic-bezier(0.165,0.84,0.44,1)" } } };
  var block0 = {};
  var block1 = {};
  var _sfc_main$4 = {
    mixins: [mpMixins, bindingx, otherMixins],
    emits: ["click", "change"],
    props: {
      // 控制开关
      show: {
        type: String,
        default: "none"
      },
      // 禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否自动关闭
      autoClose: {
        type: Boolean,
        default: true
      },
      // 滑动缺省距离
      threshold: {
        type: Number,
        default: 20
      },
      // 左侧按钮内容
      leftOptions: {
        type: Array,
        default() {
          return [];
        }
      },
      // 右侧按钮内容
      rightOptions: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    // TODO vue3
    unmounted() {
      this.__isUnmounted = true;
      this.uninstall();
    },
    methods: {
      uninstall() {
        if (this.swipeaction) {
          this.swipeaction.children.forEach((item, index) => {
            if (item === this) {
              this.swipeaction.children.splice(index, 1);
            }
          });
        }
      },
      /**
       * 获取父元素实例
       */
      getSwipeAction(name = "uniSwipeAction") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      import_vue2.Fragment,
      null,
      [
        (0, import_vue2.createCommentVNode)(" \u5728\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F app vue\u7AEF h5 \u4F7F\u7528wxs \u5B9E\u73B0"),
        (0, import_vue2.createCommentVNode)(" app nvue\u7AEF \u4F7F\u7528 bindingx "),
        (0, import_vue2.createElementVNode)(
          "view",
          {
            ref: "selector-box--hock",
            class: "uni-swipe",
            onHorizontalpan: _cache[0] || (_cache[0] = (...args) => _ctx.touchstart && _ctx.touchstart(...args)),
            onTouchend: _cache[1] || (_cache[1] = (...args) => _ctx.touchend && _ctx.touchend(...args))
          },
          [
            (0, import_vue2.createElementVNode)(
              "view",
              {
                ref: "selector-left-button--hock",
                class: "uni-swipe_button-group button-group--left"
              },
              [
                (0, import_vue2.renderSlot)(_ctx.$slots, "left", {}, () => [
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)($props.leftOptions, (item, index) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                        key: index,
                        style: (0, import_vue2.normalizeStyle)({
                          backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                        }),
                        class: "uni-swipe_button button-hock",
                        onClick: (0, import_vue2.withModifiers)(($event) => _ctx.onClick(index, item, "left"), ["stop"])
                      }, [
                        (0, import_vue2.createElementVNode)(
                          "u-text",
                          {
                            class: "uni-swipe_button-text",
                            style: (0, import_vue2.normalizeStyle)({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                          },
                          (0, import_vue2.toDisplayString)(item.text),
                          5
                          /* TEXT, STYLE */
                        )
                      ], 12, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ],
              512
              /* NEED_PATCH */
            ),
            (0, import_vue2.createElementVNode)(
              "view",
              {
                ref: "selector-right-button--hock",
                class: "uni-swipe_button-group button-group--right"
              },
              [
                (0, import_vue2.renderSlot)(_ctx.$slots, "right", {}, () => [
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)($props.rightOptions, (item, index) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                        key: index,
                        style: (0, import_vue2.normalizeStyle)({
                          backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                        }),
                        class: "uni-swipe_button button-hock",
                        onClick: (0, import_vue2.withModifiers)(($event) => _ctx.onClick(index, item, "right"), ["stop"])
                      }, [
                        (0, import_vue2.createElementVNode)(
                          "u-text",
                          {
                            class: "uni-swipe_button-text",
                            style: (0, import_vue2.normalizeStyle)({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                          },
                          (0, import_vue2.toDisplayString)(item.text),
                          5
                          /* TEXT, STYLE */
                        )
                      ], 12, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ],
              512
              /* NEED_PATCH */
            ),
            (0, import_vue2.createElementVNode)(
              "view",
              {
                ref: "selector-content--hock",
                class: "uni-swipe_box"
              },
              [
                (0, import_vue2.renderSlot)(_ctx.$slots, "default")
              ],
              512
              /* NEED_PATCH */
            )
          ],
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ),
        (0, import_vue2.createCommentVNode)(" \u5176\u4ED6\u5E73\u53F0\u4F7F\u7528 js \uFF0C\u957F\u5217\u8868\u6027\u80FD\u53EF\u80FD\u4F1A\u6709\u5F71\u54CD")
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  if (typeof block0 === "function")
    block0(_sfc_main$4);
  if (typeof block1 === "function")
    block1(_sfc_main$4);
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["styles", [_style_0$4]], ["__file", "D:/Download/CoHub/CoHub/uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue"]]);
  var _style_0$3 = { "uni-collapse-item__title": { "": { "flexDirection": "row", "alignItems": "center", "transitionProperty": "borderBottomColor", "transitionDuration": 300 }, ".uni-collapse-item-border": { "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#ebeef5" }, ".is-open": { "borderBottomColor": "rgba(0,0,0,0)" } }, "uni-collapse-item__title-wrap": { "": { "width": 100, "flex": 1 } }, "uni-collapse-item__title-box": { "": { "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15, "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center", "height": 48, "lineHeight": 48, "backgroundColor": "#ffffff", "color": "#303133", "fontSize": 13, "fontWeight": "500" } }, "uni-collapse-item__title-text": { ".uni-collapse-item__title-box.is-disabled ": { "color": "#999999" }, "": { "flex": 1, "fontSize": 14, "lines": 1, "overflow": "hidden", "textOverflow": "ellipsis" } }, "uni-collapse-item__title-img": { "": { "height": 22, "width": 22, "marginRight": 10 } }, "uni-collapse-item__title-arrow": { "": { "alignItems": "center", "justifyContent": "center", "width": 20, "height": 20, "marginRight": 10, "transform": "rotate(0deg)" } }, "uni-collapse-item__title-arrow-active": { "": { "transform": "rotate(-180deg)" } }, "uni-collapse-item__wrap": { "": { "backgroundColor": "#ffffff", "overflow": "hidden", "position": "relative", "height": 0 }, ".is--transition": { "transitionProperty": "height,borderBottomWidth", "transitionDuration": 300 } }, "uni-collapse-item__wrap-content": { "": { "position": "absolute", "fontSize": 13, "color": "#303133", "borderBottomColor": "rgba(0,0,0,0)", "borderBottomStyle": "solid", "borderBottomWidth": 0 }, ".uni-collapse-item--border": { "borderBottomWidth": 1, "borderBottomColor": "#ebeef5" }, ".open": { "position": "relative" } }, "uni-collapse-item--animation": { "": { "transitionProperty": "transform", "transitionDuration": 300, "transitionTimingFunction": "ease" } }, "@TRANSITION": { "uni-collapse-item__title": { "property": "borderBottomColor", "duration": 300 }, "uni-collapse-item__wrap": { "property": "height,borderBottomWidth", "duration": 300 }, "uni-collapse-item--animation": { "property": "transform", "duration": 300, "timingFunction": "ease" } } };
  var dom = weex.requireModule("dom");
  var _sfc_main$3 = {
    name: "uniCollapseItem",
    props: {
      // 列表标题
      title: {
        type: String,
        default: ""
      },
      name: {
        type: [Number, String],
        default: ""
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否显示动画,app 端默认不开启动画，卡顿严重
      showAnimation: {
        type: Boolean,
        default: false
      },
      // 是否展开
      open: {
        type: Boolean,
        default: false
      },
      // 缩略图
      thumb: {
        type: String,
        default: ""
      },
      // 标题分隔线显示类型
      titleBorder: {
        type: String,
        default: "auto"
      },
      border: {
        type: Boolean,
        default: true
      },
      showArrow: {
        type: Boolean,
        default: true
      }
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        isOpen: false,
        isheight: null,
        height: 0,
        elId,
        nameSync: 0
      };
    },
    watch: {
      open(val) {
        this.isOpen = val;
        this.onClick(val, "init");
      }
    },
    updated(e2) {
      this.$nextTick(() => {
        this.init(true);
      });
    },
    created() {
      this.collapse = this.getCollapse();
      this.oldHeight = 0;
      this.onClick(this.open, "init");
    },
    // TODO vue3
    unmounted() {
      this.__isUnmounted = true;
      this.uninstall();
    },
    mounted() {
      if (!this.collapse)
        return;
      if (this.name !== "") {
        this.nameSync = this.name;
      } else {
        this.nameSync = this.collapse.childrens.length + "";
      }
      if (this.collapse.names.indexOf(this.nameSync) === -1) {
        this.collapse.names.push(this.nameSync);
      } else {
        formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue:154", `name \u503C ${this.nameSync} \u91CD\u590D`);
      }
      if (this.collapse.childrens.indexOf(this) === -1) {
        this.collapse.childrens.push(this);
      }
      this.init();
    },
    methods: {
      init(type) {
        this.getNvueHwight(type);
      },
      uninstall() {
        if (this.collapse) {
          this.collapse.childrens.forEach((item, index) => {
            if (item === this) {
              this.collapse.childrens.splice(index, 1);
            }
          });
          this.collapse.names.forEach((item, index) => {
            if (item === this.nameSync) {
              this.collapse.names.splice(index, 1);
            }
          });
        }
      },
      onClick(isOpen, type) {
        if (this.disabled)
          return;
        this.isOpen = isOpen;
        if (this.isOpen && this.collapse) {
          this.collapse.setAccordion(this);
        }
        if (type !== "init") {
          this.collapse.onChange(isOpen, this);
        }
      },
      getCollapseHeight(type, index = 0) {
        const views = uni.createSelectorQuery().in(this);
        views.select(`#${this.elId}`).fields({
          size: true
        }, (data) => {
          if (index >= 10)
            return;
          if (!data) {
            index++;
            this.getCollapseHeight(false, index);
            return;
          }
          this.height = data.height + 1;
          this.isheight = true;
          if (type)
            return;
          this.onClick(this.isOpen, "init");
        }).exec();
      },
      getNvueHwight(type) {
        dom.getComponentRect(this.$refs["collapse--hook"], (option) => {
          if (option && option.result && option.size) {
            this.height = option.size.height + 1;
            this.isheight = true;
            if (type)
              return;
            this.onClick(this.open, "init");
          }
        });
      },
      /**
       * 获取父元素实例
       */
      getCollapse(name = "uniCollapse") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-icons"), __easycom_0);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
      class: "uni-collapse-item",
      renderWhole: true
    }, [
      (0, import_vue2.createCommentVNode)(" onClick(!isOpen) "),
      (0, import_vue2.createElementVNode)(
        "view",
        {
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick(!$data.isOpen)),
          class: (0, import_vue2.normalizeClass)(["uni-collapse-item__title", { "is-open": $data.isOpen && $props.titleBorder === "auto", "uni-collapse-item-border": $props.titleBorder !== "none" }])
        },
        [
          (0, import_vue2.createElementVNode)("view", { class: "uni-collapse-item__title-wrap" }, [
            (0, import_vue2.renderSlot)(_ctx.$slots, "title", {}, () => [
              (0, import_vue2.createElementVNode)(
                "view",
                {
                  class: (0, import_vue2.normalizeClass)(["uni-collapse-item__title-box", { "is-disabled": $props.disabled }])
                },
                [
                  $props.thumb ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-image", {
                    key: 0,
                    src: $props.thumb,
                    class: "uni-collapse-item__title-img"
                  }, null, 8, ["src"])) : (0, import_vue2.createCommentVNode)("v-if", true),
                  (0, import_vue2.createElementVNode)(
                    "u-text",
                    { class: "uni-collapse-item__title-text" },
                    (0, import_vue2.toDisplayString)($props.title),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ])
          ]),
          $props.showArrow ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
            "view",
            {
              key: 0,
              class: (0, import_vue2.normalizeClass)([{ "uni-collapse-item__title-arrow-active": $data.isOpen, "uni-collapse-item--animation": $props.showAnimation === true }, "uni-collapse-item__title-arrow"])
            },
            [
              (0, import_vue2.createVNode)(_component_uni_icons, {
                color: $props.disabled ? "#ddd" : "#bbb",
                size: "14",
                type: "bottom"
              }, null, 8, ["color"])
            ],
            2
            /* CLASS */
          )) : (0, import_vue2.createCommentVNode)("v-if", true)
        ],
        2
        /* CLASS */
      ),
      (0, import_vue2.createElementVNode)(
        "view",
        {
          class: (0, import_vue2.normalizeClass)(["uni-collapse-item__wrap", { "is--transition": $props.showAnimation }]),
          style: (0, import_vue2.normalizeStyle)({ height: ($data.isOpen ? $data.height : 0) + "px" })
        },
        [
          (0, import_vue2.createElementVNode)("view", {
            id: $data.elId,
            ref: "collapse--hook",
            class: (0, import_vue2.normalizeClass)(["uni-collapse-item__wrap-content", { open: $data.isheight, "uni-collapse-item--border": $props.border && $data.isOpen }])
          }, [
            (0, import_vue2.renderSlot)(_ctx.$slots, "default")
          ], 10, ["id"])
        ],
        6
        /* CLASS, STYLE */
      )
    ]);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["styles", [_style_0$3]], ["__file", "D:/Download/CoHub/CoHub/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue"]]);
  var _style_0$2 = { "uni-collapse": { "": { "flex": 1, "flexDirection": "column", "backgroundColor": "#ffffff" } } };
  var _sfc_main$2 = {
    name: "uniCollapse",
    emits: ["change", "activeItem", "input", "update:modelValue"],
    props: {
      value: {
        type: [String, Array],
        default: ""
      },
      modelValue: {
        type: [String, Array],
        default: ""
      },
      accordion: {
        // 是否开启手风琴效果
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      return {};
    },
    computed: {
      // TODO 兼容 vue2 和 vue3
      dataValue() {
        let value = typeof this.value === "string" && this.value === "" || Array.isArray(this.value) && this.value.length === 0;
        let modelValue = typeof this.modelValue === "string" && this.modelValue === "" || Array.isArray(this.modelValue) && this.modelValue.length === 0;
        if (value) {
          return this.modelValue;
        }
        if (modelValue) {
          return this.value;
        }
        return this.value;
      }
    },
    watch: {
      dataValue(val) {
        this.setOpen(val);
      }
    },
    created() {
      this.childrens = [];
      this.names = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.setOpen(this.dataValue);
      });
    },
    methods: {
      setOpen(val) {
        let str = typeof val === "string";
        let arr = Array.isArray(val);
        this.childrens.forEach((vm, index) => {
          if (str) {
            if (val === vm.nameSync) {
              if (!this.accordion) {
                formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue:75", "accordion \u5C5E\u6027\u4E3A false ,v-model \u7C7B\u578B\u5E94\u8BE5\u4E3A array");
                return;
              }
              vm.isOpen = true;
            }
          }
          if (arr) {
            val.forEach((v2) => {
              if (v2 === vm.nameSync) {
                if (this.accordion) {
                  formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue:85", "accordion \u5C5E\u6027\u4E3A true ,v-model \u7C7B\u578B\u5E94\u8BE5\u4E3A string");
                  return;
                }
                vm.isOpen = true;
              }
            });
          }
        });
        this.emit(val);
      },
      setAccordion(self) {
        if (!this.accordion)
          return;
        this.childrens.forEach((vm, index) => {
          if (self !== vm) {
            vm.isOpen = false;
          }
        });
      },
      resize() {
        this.childrens.forEach((vm, index) => {
          vm.getNvueHwight();
        });
      },
      onChange(isOpen, self) {
        let activeItem = [];
        if (this.accordion) {
          activeItem = isOpen ? self.nameSync : "";
        } else {
          this.childrens.forEach((vm, index) => {
            if (vm.isOpen) {
              activeItem.push(vm.nameSync);
            }
          });
        }
        this.$emit("change", activeItem);
        this.emit(activeItem);
      },
      emit(val) {
        this.$emit("input", val);
        this.$emit("update:modelValue", val);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
      class: "uni-collapse",
      renderWhole: true
    }, [
      (0, import_vue2.renderSlot)(_ctx.$slots, "default")
    ]);
  }
  var __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "D:/Download/CoHub/CoHub/uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue"]]);
  var _style_0$12 = { "uni-status-bar": { "": { "height": 20 } } };
  var _sfc_main$12 = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
      };
    }
  };
  function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        style: (0, import_vue2.normalizeStyle)({ height: $data.statusBarHeight }),
        class: "uni-status-bar",
        renderWhole: true
      },
      [
        (0, import_vue2.renderSlot)(_ctx.$slots, "default")
      ],
      4
      /* STYLE */
    );
  }
  var statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$12], ["styles", [_style_0$12]], ["__file", "D:/Download/CoHub/CoHub/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  var isIos;
  isIos = plus.os.name == "iOS";
  function judgeIosPermissionPush() {
    var result = false;
    var UIApplication = plus.ios.import("UIApplication");
    var app = UIApplication.sharedApplication();
    var enabledTypes = 0;
    if (app.currentUserNotificationSettings) {
      var settings = app.currentUserNotificationSettings();
      enabledTypes = settings.plusGetAttribute("types");
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:19", "enabledTypes1:" + enabledTypes);
      if (enabledTypes == 0) {
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:21", "\u63A8\u9001\u6743\u9650\u6CA1\u6709\u5F00\u542F");
      } else {
        result = true;
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:24", "\u5DF2\u7ECF\u5F00\u542F\u63A8\u9001\u529F\u80FD!");
      }
      plus.ios.deleteObject(settings);
    } else {
      enabledTypes = app.enabledRemoteNotificationTypes();
      if (enabledTypes == 0) {
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:30", "\u63A8\u9001\u6743\u9650\u6CA1\u6709\u5F00\u542F!");
      } else {
        result = true;
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:33", "\u5DF2\u7ECF\u5F00\u542F\u63A8\u9001\u529F\u80FD!");
      }
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:35", "enabledTypes2:" + enabledTypes);
    }
    plus.ios.deleteObject(app);
    plus.ios.deleteObject(UIApplication);
    return result;
  }
  function judgeIosPermissionLocation() {
    var result = false;
    var cllocationManger = plus.ios.import("CLLocationManager");
    var status = cllocationManger.authorizationStatus();
    result = status != 2;
    plus.ios.deleteObject(cllocationManger);
    return result;
  }
  function judgeIosPermissionRecord() {
    var result = false;
    var avaudiosession = plus.ios.import("AVAudioSession");
    var avaudio = avaudiosession.sharedInstance();
    var permissionStatus = avaudio.recordPermission();
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:70", "permissionStatus:" + permissionStatus);
    if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:72", "\u9EA6\u514B\u98CE\u6743\u9650\u6CA1\u6709\u5F00\u542F");
    } else {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:75", "\u9EA6\u514B\u98CE\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
    }
    plus.ios.deleteObject(avaudiosession);
    return result;
  }
  function judgeIosPermissionCamera() {
    var result = false;
    var AVCaptureDevice = plus.ios.import("AVCaptureDevice");
    var authStatus = AVCaptureDevice.authorizationStatusForMediaType("vide");
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:86", "authStatus:" + authStatus);
    if (authStatus == 3) {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:89", "\u76F8\u673A\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
    } else {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:91", "\u76F8\u673A\u6743\u9650\u6CA1\u6709\u5F00\u542F");
    }
    plus.ios.deleteObject(AVCaptureDevice);
    return result;
  }
  function judgeIosPermissionPhotoLibrary() {
    var result = false;
    var PHPhotoLibrary = plus.ios.import("PHPhotoLibrary");
    var authStatus = PHPhotoLibrary.authorizationStatus();
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:102", "authStatus:" + authStatus);
    if (authStatus == 3) {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:105", "\u76F8\u518C\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
    } else {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:107", "\u76F8\u518C\u6743\u9650\u6CA1\u6709\u5F00\u542F");
    }
    plus.ios.deleteObject(PHPhotoLibrary);
    return result;
  }
  function judgeIosPermissionContact() {
    var result = false;
    var CNContactStore = plus.ios.import("CNContactStore");
    var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);
    if (cnAuthStatus == 3) {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:120", "\u901A\u8BAF\u5F55\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
    } else {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:122", "\u901A\u8BAF\u5F55\u6743\u9650\u6CA1\u6709\u5F00\u542F");
    }
    plus.ios.deleteObject(CNContactStore);
    return result;
  }
  function judgeIosPermissionCalendar() {
    var result = false;
    var EKEventStore = plus.ios.import("EKEventStore");
    var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);
    if (ekAuthStatus == 3) {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:135", "\u65E5\u5386\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
    } else {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:137", "\u65E5\u5386\u6743\u9650\u6CA1\u6709\u5F00\u542F");
    }
    plus.ios.deleteObject(EKEventStore);
    return result;
  }
  function judgeIosPermissionMemo() {
    var result = false;
    var EKEventStore = plus.ios.import("EKEventStore");
    var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);
    if (ekAuthStatus == 3) {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:150", "\u5907\u5FD8\u5F55\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
    } else {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:152", "\u5907\u5FD8\u5F55\u6743\u9650\u6CA1\u6709\u5F00\u542F");
    }
    plus.ios.deleteObject(EKEventStore);
    return result;
  }
  function requestAndroidPermission(permissionID) {
    return new Promise((resolve, reject) => {
      plus.android.requestPermissions(
        [permissionID],
        // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装
        function(resultObj) {
          var result = 0;
          for (var i2 = 0; i2 < resultObj.granted.length; i2++) {
            var grantedPermission = resultObj.granted[i2];
            formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:167", "\u5DF2\u83B7\u53D6\u7684\u6743\u9650\uFF1A" + grantedPermission);
            result = 1;
          }
          for (var i2 = 0; i2 < resultObj.deniedPresent.length; i2++) {
            var deniedPresentPermission = resultObj.deniedPresent[i2];
            formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:172", "\u62D2\u7EDD\u672C\u6B21\u7533\u8BF7\u7684\u6743\u9650\uFF1A" + deniedPresentPermission);
            result = 0;
          }
          for (var i2 = 0; i2 < resultObj.deniedAlways.length; i2++) {
            var deniedAlwaysPermission = resultObj.deniedAlways[i2];
            formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:177", "\u6C38\u4E45\u62D2\u7EDD\u7533\u8BF7\u7684\u6743\u9650\uFF1A" + deniedAlwaysPermission);
            result = -1;
          }
          resolve(result);
        },
        function(error) {
          formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:187", "\u7533\u8BF7\u6743\u9650\u9519\u8BEF\uFF1A" + error.code + " = " + error.message);
          resolve({
            code: error.code,
            message: error.message
          });
        }
      );
    });
  }
  function judgeIosPermission(permissionID) {
    if (permissionID == "location") {
      return judgeIosPermissionLocation();
    } else if (permissionID == "camera") {
      return judgeIosPermissionCamera();
    } else if (permissionID == "photoLibrary") {
      return judgeIosPermissionPhotoLibrary();
    } else if (permissionID == "record") {
      return judgeIosPermissionRecord();
    } else if (permissionID == "push") {
      return judgeIosPermissionPush();
    } else if (permissionID == "contact") {
      return judgeIosPermissionContact();
    } else if (permissionID == "calendar") {
      return judgeIosPermissionCalendar();
    } else if (permissionID == "memo") {
      return judgeIosPermissionMemo();
    }
    return false;
  }
  function gotoAppPermissionSetting() {
    if (isIos) {
      var UIApplication = plus.ios.import("UIApplication");
      var application2 = UIApplication.sharedApplication();
      var NSURL2 = plus.ios.import("NSURL");
      var setting2 = NSURL2.URLWithString("app-settings:");
      application2.openURL(setting2);
      plus.ios.deleteObject(setting2);
      plus.ios.deleteObject(NSURL2);
      plus.ios.deleteObject(application2);
    } else {
      var Intent = plus.android.importClass("android.content.Intent");
      var Settings = plus.android.importClass("android.provider.Settings");
      var Uri = plus.android.importClass("android.net.Uri");
      var mainActivity = plus.android.runtimeMainActivity();
      var intent = new Intent();
      intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
      var uri = Uri.fromParts("package", mainActivity.getPackageName(), null);
      intent.setData(uri);
      mainActivity.startActivity(intent);
    }
  }
  function checkSystemEnableLocation() {
    if (isIos) {
      var result = false;
      var cllocationManger = plus.ios.import("CLLocationManager");
      var result = cllocationManger.locationServicesEnabled();
      plus.ios.deleteObject(cllocationManger);
      return result;
    } else {
      var context = plus.android.importClass("android.content.Context");
      var locationManager = plus.android.importClass("android.location.LocationManager");
      var main = plus.android.runtimeMainActivity();
      var mainSvr = main.getSystemService(context.LOCATION_SERVICE);
      var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:262", "\u7CFB\u7EDF\u5B9A\u4F4D\u5F00\u542F:" + result);
      return result;
    }
  }
  var permision = {
    judgeIosPermission,
    requestAndroidPermission,
    checkSystemEnableLocation,
    gotoAppPermissionSetting
  };
  var Gps = class {
    constructor(arg) {
      this.lock = false;
    }
    getLocation() {
      return __async(this, arguments, function* (param = {
        type: "wgs84"
      }) {
        return new Promise((callback2) => __async(this, null, function* () {
          if (this.lock) {
            callback2(false);
            return false;
          }
          this.lock = true;
          uni.getLocation(__spreadProps(__spreadValues({}, param), {
            success: (res) => {
              this.lock = false;
              callback2(res);
            },
            fail: (err) => __async(this, null, function* () {
              uni.showToast({
                title: "\u5B9A\u4F4D\u83B7\u53D6\u5931\u8D25",
                icon: "none"
              });
              formatAppLog("error", "at uni_modules/json-gps/js_sdk/gps.js:30", err);
              callback2(false);
              yield this.checkGpsIsOpen();
            })
          }));
        }));
      });
    }
    checkGpsIsOpen() {
      return __async(this, null, function* () {
        this.lock = true;
        if (!permision.checkSystemEnableLocation()) {
          plus.nativeUI.confirm("\u624B\u673A\u5B9A\u4F4D\u6743\u9650\u6CA1\u6709\u5F00\u542F\uFF0C\u662F\u5426\u53BB\u5F00\u542F\uFF1F", (e2) => {
            this.lock = false;
            if (e2.index == 0) {
              if (uni.getSystemInfoSync().platform == "ios") {
                plus.runtime.openURL("app-settings://");
              } else {
                var main = plus.android.runtimeMainActivity();
                var Intent = plus.android.importClass("android.content.Intent");
                var Settings = plus.android.importClass("android.provider.Settings");
                var intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
                main.startActivity(intent);
              }
            } else {
              uni.showToast({
                title: "\u8BBE\u5907\u65E0\u5B9A\u4F4D\u6743\u9650",
                icon: "none"
              });
              callback(false);
            }
          }, {
            "buttons": ["\u53BB\u8BBE\u7F6E", "\u4E0D\u5F00\u542F"],
            "verticalAlign": "center"
          });
          return false;
        }
        let checkAppGpsRes = yield this.checkAppGps();
        if (!checkAppGpsRes) {
          plus.nativeUI.confirm("\u5E94\u7528\u5B9A\u4F4D\u6743\u9650\u6CA1\u6709\u5F00\u542F\uFF0C\u662F\u5426\u53BB\u5F00\u542F\uFF1F", (e2) => {
            this.lock = false;
            if (e2.index == 0) {
              permision.gotoAppPermissionSetting();
              callback(false);
            } else {
              uni.showToast({
                title: "\u5E94\u7528\u65E0\u5B9A\u4F4D\u6743\u9650",
                icon: "none"
              });
              return false;
            }
          }, {
            "buttons": ["\u53BB\u8BBE\u7F6E", "\u4E0D\u5F00\u542F"],
            "verticalAlign": "center"
          });
        } else {
          this.lock = false;
        }
      });
    }
    checkAppGps() {
      return __async(this, null, function* () {
        if (uni.getSystemInfoSync().platform == "ios" && !permision.judgeIosPermission("location")) {
          return false;
        }
        if (uni.getSystemInfoSync().platform != "ios" && (yield permision.requestAndroidPermission(
          "android.permission.ACCESS_FINE_LOCATION"
        )) != 1) {
          return false;
        }
        return true;
      });
    }
  };
  var _style_02 = { "pages": { "": { "backgroundColor": "#F2F2F6" } }, "cmd-nav-bar-left-title": { "": { "fontWeight": "bold", "fontSize": 50 } }, "cmd-nav-bar": { "": { "fontSize": 50, "fontWeight": "bold" } }, "avatar": { "": { "width": "90rpx", "height": "90rpx", "marginLeft": "600rpx", "marginBottom": "20rpx" } }, "main": { "": { "justifyContent": "space-between", "flex": 1 } }, "title": { "": { "fontSize": 55, "fontWeight": "bold" } }, "info": { "": { "flexDirection": "row", "justifyContent": "space-between" } }, "author": { "": { "fontSize": 14, "color": "#ACACB6" } }, "last_modify_date": { "": { "fontSize": 14, "color": "#ACACB6" } }, "uni-search-box": { "": { "backgroundColor": "#F2F2F6", "position": "sticky", "height": 50, "top": 0, "left": 0 } }, "cover-search-bar": { "": { "height": 50, "position": "relative", "top": -50, "marginBottom": -50 } }, "button-container": { "": { "flexDirection": "row", "display": "flex", "justifyContent": "space-between", "paddingLeft": 13, "paddingRight": 13, "paddingBottom": 20, "paddingTop": 20, "flexWrap": "wrap", "position": "relative" } }, "big-button": { "": { "flex": 1, "width": 150, "height": 100, "backgroundColor": "#ffffff", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "justifyContent": "center", "borderRadius": 10, "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)", "marginTop": 0, "marginRight": 8, "marginBottom": 0, "marginLeft": 8 } }, "button-image": { "": { "width": 36, "height": 36, "marginBottom": 13, "marginLeft": 12 } }, "button-text": { "": { "fontSize": 18, "fontWeight": "bold", "color": "#8E8E92", "marginLeft": 16 } }, "button-number": { "": { "position": "absolute", "right": 13, "top": 22, "transform": "translateY(-50%)", "fontSize": 26, "fontWeight": "bold" } }, "swipe-item": { "": { "marginBottom": 10, "fontSize": 14, "height": 45, "marginLeft": -10 } }, "swipe-item-content": { "": { "width": 365, "height": 45, "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20, "backgroundColor": "#ffffff", "borderRadius": 8, "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)", "marginBottom": 10, "justifyContent": "center", "fontSize": 14, "overflow": "hidden", "display": "flex", "alignItems": "flex-start" } }, "uni-swipe_button-group": { "": { "display": "flex", "boxSizing": "border-box", "justifyContent": "space-between", "marginLeft": 10, "fontSize": 12 } }, "uni-swipe_button": { "": { "width": 85, "height": 50, "lineHeight": 100, "textAlign": "center", "backgroundColor": "#f1f1f1", "color": "#333333", "fontSize": 12, "paddingTop": 0, "paddingRight": 16, "paddingBottom": 0, "paddingLeft": 16, "display": "flex", "alignItems": "center", "justifyContent": "space-between" } }, "item-left": { "": { "flexDirection": "row", "display": "flex", "alignItems": "flex-start" } }, "circle-image": { "": { "width": "40rpx", "height": "40rpx", "borderRadius": 50, "backgroundColor": "#eeeeee", "marginRight": "10rpx", "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "circle-image-icon": { "": { "width": "30rpx", "height": "30rpx", "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "item-text": { "": { "flex": 1, "fontSize": 12, "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "folder-header": { "": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "backgroundColor": "#F2F2F6", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexDirection": "row" } }, "folder-title": { "": { "fontSize": 20, "fontWeight": "bold", "marginBottom": 8, "textAlign": "left", "flex": 1 } }, "add-button": { "": { "fontSize": 18, "color": "#007aff", "cursor": "pointer", "marginLeft": 10 } }, "folder-content": { "": { "backgroundColor": "#F2F2F6", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "borderRadius": 10, "boxShadow": "0 2px 8px rgba(0, 0, 0, 0.1)" } }, "collapse-wrapper": { "": { "marginLeft": 12, "width": 368, "borderRadius": 10 } }, "popup-container": { "": { "position": "fixed", "bottom": 0, "left": 0, "right": 0, "backgroundColor": "#F2F2F6", "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "boxShadow": "0 -2px 8px rgba(0, 0, 0, 0.1)", "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20, "display": "flex", "flexDirection": "column" } }, "popup-header": { "": { "display": "flex", "justifyContent": "space-between", "marginBottom": 20, "alignItems": "center", "flexDirection": "row", "color": "#ffffff" } }, "popup-title": { "": { "fontSize": 18, "fontWeight": "bold", "color": "#000000", "display": "flex", "alignItems": "center", "justifyContent": "space-between" } }, "popup-buttons": { "": { "width": 60, "display": "flex", "justifyContent": "space-between", "alignItems": "center", "color": "#ffffff", "flexDirection": "row", "fontSize": 11 } }, "popup-button": { "": { "marginLeft": 10, "paddingTop": 10, "paddingRight": 20, "paddingBottom": 10, "paddingLeft": 20, "fontSize": 11, "borderRadius": 5, "cursor": "pointer", "height": 35, "width": 60, "color": "#ffffff" } }, "popup-button-cancel": { "": { "backgroundColor": "#007aff", "fontSize": 11, "color": "#ffffff" } }, "popup-button-done": { "": { "backgroundColor": "#007aff", "fontSize": 11, "color": "#ffffff" } }, "in": { "": { "flex": 1, "height": 50, "width": 350, "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#cccccc", "borderRadius": 10, "backgroundColor": "#ffffff", "marginBottom": 25, "fontSize": 15 } }, "color-picker": { "": { "width": 40, "height": 40, "marginTop": 5, "marginLeft": 10, "marginRight": 10, "cursor": "pointer", "display": "flex", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#ffffff", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#dddddd", "borderRadius": 5 } }, "color-options": { "": { "display": "flex", "justifyContent": "space-around", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "backgroundColor": "#ffffff", "borderRadius": 5, "marginTop": 10, "flexDirection": "row" } }, "color-option": { "": { "width": 30, "height": 30, "borderRadius": 50, "cursor": "pointer" } }, "add-item-form": { "": { "flexDirection": "row" } } };
  var gps = new Gps();
  Ws.database();
  var _sfc_main2 = {
    components: {
      statusBar,
      cmdNavBar: __easycom_02
    },
    computed: {
      inputPlaceholder() {
        return uni.getStorageSync("CURRENT_LANG") === "en" ? "Please enter the search content" : "Quick Search";
      }
    },
    data() {
      return {
        where: '"article_status" == 1',
        keyword: "",
        showRefresh: false,
        listHight: 0,
        swipeOptions: [],
        rightOptionsTemplate: [
          {
            text: "Edit",
            style: {
              backgroundColor: "#0C79FE",
              backgroundImage: "/static/pic/edit.png",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              margin: "0"
            },
            click: "handleEdit"
          },
          {
            text: "Archived",
            style: {
              backgroundColor: "#979797",
              color: "#FFFFFF"
            },
            click: "handleArchived"
          },
          {
            text: "Delete",
            style: {
              backgroundColor: "#FF3B30",
              color: "#FFFFFF"
            },
            click: "handleDelete"
          }
        ],
        folders: [
          {
            name: "Folders",
            isExpanded: false,
            items: []
          }
        ],
        sharedFolders: [
          {
            name: "Shared Folders",
            isExpanded: false,
            items: [
              { name: "Shared Folder", icon: "/static/pic/10.png" },
              { name: "Shared Folder", icon: "/static/pic/10.png" }
            ]
          }
        ],
        utilities: [
          {
            name: "Utilities",
            isExpanded: false,
            items: [
              { name: "Recently Deleted", icon: "/static/pic/10.png" }
            ]
          }
        ],
        showPopup: false,
        newItemName: "",
        currentFolderType: "",
        currentFolderIndex: null,
        showColorPicker: false,
        selectedColor: "#F14C3C",
        colors: ["#F14C3C", "#FFA033", "#F7CE45", "#5DC466", "#0C79FE", "#B67AD5", "#998667"]
      };
    },
    watch: {
      keyword(keyword, oldValue) {
        let where = '"article_status" == 1 ';
        if (keyword) {
          this.where = where + `&& /${keyword}/.test(title)`;
        } else {
          this.where = where;
        }
      }
    },
    onReady() {
      return __async(this, null, function* () {
        this.listHight = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight - 50 + "px";
        cdbRef = this.$refs.udb;
      });
    },
    onShow() {
      return __async(this, null, function* () {
        this.keyword = getApp().globalData.searchText;
        getApp().globalData.searchText = "";
        yield gps.getLocation({
          geocode: true
        });
        this.getFolders();
      });
    },
    onLoad() {
      cdbRef = this;
      this.listHight = uni.getSystemInfoSync().windowHeight - uni.upx2px(440);
      this.getListData();
    },
    methods: {
      getFolders() {
        return __async(this, null, function* () {
          try {
            const { data } = yield uni.request({
              url: "https://172.20.10.14:8000/backend/profile/" + JSON.parse(uni.getStorageSync("uni_id")) + "/folders/",
              method: "GET",
              header: {
                "content-type": "application/json"
                // 默认值
              }
            });
            formatAppLog("log", "at pages/list/list.nvue:272", data);
            if (data && data.response) {
              this.folders[0].items = response.item;
            }
          } catch (error) {
            formatAppLog("error", "at pages/list/list.nvue:277", "\u767B\u5F55\u5931\u8D25:", error);
            uni.showToast({
              title: "\u7F51\u7EDC\u9519\u8BEF",
              icon: "none",
              duration: 2e3
            });
          }
        });
      },
      goToAllInfoPage() {
        uni.navigateTo({
          url: "/pages/list/all/all"
        });
      },
      goToArchivedInfoPage() {
        uni.navigateTo({
          url: "/pages/list/archived/archived"
        });
      },
      searchClick() {
        uni.hideKeyboard();
        uni.navigateTo({
          url: "/pages/list/search/search",
          animationType: "fade-in"
        });
      },
      retry() {
        this.refresh();
      },
      refresh() {
        cdbRef.loadData({
          clear: true
        }, () => {
          uni.stopPullDownRefresh();
          this.showRefresh = false;
        });
      },
      loadMore() {
        cdbRef.loadMore();
      },
      onqueryerror(e2) {
        formatAppLog("error", "at pages/list/list.nvue:319", e2);
      },
      onpullingdown(e2) {
        this.showRefresh = true;
        if (e2.pullingDistance > 100) {
          this.refresh();
        }
      },
      handleCollapseItemClick(item) {
        if (item.name === "Recently Deleted") {
          uni.navigateTo({
            url: "/pages/list/delete/delete"
          });
        }
      },
      handleCollapseItemClickone(item) {
        if (item.name === "Folder") {
          uni.navigateTo({
            url: "/pages/list/grid/grid"
          });
        }
      },
      handleCollapseItemClicktwo(item) {
        if (item.name === "Shared Folder") {
          uni.navigateTo({
            url: "/pages/list/gridmul/gridmul"
          });
        }
      },
      openAddItemDialog(folderType, index) {
        this.currentFolderType = folderType;
        this.currentFolderIndex = index;
        this.showPopup = true;
      },
      addItem() {
        return __async(this, null, function* () {
          if (this.newItemName.trim() !== "") {
            try {
              const { data } = yield uni.request({
                url: "http://127.0.0.1:8000/backend/profile/" + JSON.parse(uni.getStorageSync("uni_id")) + "/folder/create/",
                method: "POST",
                data: {
                  folderName: this.newItemName,
                  label: "Yellow"
                },
                header: {
                  "content-type": "application/json"
                  // 默认值
                }
              });
              formatAppLog("log", "at pages/list/list.nvue:372", data);
              if (data && data.response) {
                this.getFolders();
              }
            } catch (error) {
              uni.showToast({
                title: "\u7F51\u7EDC\u9519\u8BEF",
                icon: "none",
                duration: 2e3
              });
            }
            this.newItemName = "";
            this.selectedColor = this.colors[0];
            this.showPopup = false;
          }
        });
      },
      cancelAddItem() {
        this.newItemName = "";
        this.selectedColor = this.colors[0];
        this.showPopup = false;
      },
      toggleColorPicker() {
        this.showColorPicker = !this.showColorPicker;
      },
      selectColor(color) {
        this.selectedColor = color;
        this.showColorPicker = false;
      },
      getColorIcon(color) {
        return color;
      },
      getListData() {
        return __async(this, null, function* () {
          const [err, res] = yield Ws.database().collection("opendb-news-articles").where(this.where).field("avatar,title,last_modify_date,user_id").get();
          if (res) {
            this.swipeOptions = res.result.data;
          }
        });
      },
      getRightOptions(folderType, folderIndex, itemIndex) {
        return this.rightOptionsTemplate.map((option) => {
          return __spreadProps(__spreadValues({}, option), {
            click: () => this[option.click](folderType, folderIndex, itemIndex)
          });
        });
      },
      handleEdit(folderType, folderIndex, itemIndex) {
        formatAppLog("log", "at pages/list/list.nvue:420", "Edit:", folderType, folderIndex, itemIndex);
      },
      handleArchived(folderType, folderIndex, itemIndex) {
        formatAppLog("log", "at pages/list/list.nvue:424", "Archived:", folderType, folderIndex, itemIndex);
      },
      handleDelete(folderType, folderIndex, itemIndex) {
        formatAppLog("log", "at pages/list/list.nvue:428", "Delete:", folderType, folderIndex, itemIndex);
        this[folderType][folderIndex].items.splice(itemIndex, 1);
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_statusBar = (0, import_vue2.resolveComponent)("statusBar");
    const _component_cmd_nav_bar = resolveEasycom((0, import_vue2.resolveDynamicComponent)("cmd-nav-bar"), __easycom_02);
    const _component_uni_search_bar = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-search-bar"), __easycom_1);
    const _component_uni_icons = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-icons"), __easycom_0);
    const _component_uni_swipe_action_item = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-swipe-action-item"), __easycom_3);
    const _component_uni_collapse_item = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-collapse-item"), __easycom_4);
    const _component_uni_collapse = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-collapse"), __easycom_5);
    const _component_button = (0, import_vue2.resolveComponent)("button");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "pages font-style" }, [
        (0, import_vue2.createVNode)(_component_statusBar),
        (0, import_vue2.createCommentVNode)(" \u5BFC\u822A\u680F\u7EC4\u4EF6 "),
        (0, import_vue2.createVNode)(_component_cmd_nav_bar, {
          fixed: false,
          leftTitle: "My Collection",
          "font-size": "30cm",
          iconTwo: "add",
          "font-color": "#000",
          "background-color": "#fff",
          fontWeight: "bold",
          avatarUrl: "/static/pic/LeftAccessory.png"
        }),
        (0, import_vue2.createCommentVNode)(" \u641C\u7D22\u529F\u80FD "),
        (0, import_vue2.createElementVNode)("view", { class: "uni-search-box" }, [
          (0, import_vue2.createVNode)(_component_uni_search_bar, {
            modelValue: $data.keyword,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.keyword = $event),
            ref: "searchBar",
            radius: "20",
            cancelButton: "none",
            disabled: "",
            placeholder: $options.inputPlaceholder
          }, null, 8, ["modelValue", "placeholder"]),
          (0, import_vue2.createElementVNode)("view", {
            class: "cover-search-bar",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.searchClick && $options.searchClick(...args))
          })
        ]),
        (0, import_vue2.createCommentVNode)(" \u4E24\u4E2A\u5E76\u6392\u7684\u6309\u94AE "),
        (0, import_vue2.createElementVNode)("view", { class: "button-container" }, [
          (0, import_vue2.createElementVNode)("view", {
            class: "big-button",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.goToAllInfoPage && $options.goToAllInfoPage(...args))
          }, [
            (0, import_vue2.createElementVNode)("u-image", {
              src: "/static/pic/icnTray.png",
              class: "button-image"
            }),
            (0, import_vue2.createElementVNode)("u-text", { class: "button-text" }, "All"),
            (0, import_vue2.createElementVNode)("u-text", { class: "button-number" }, "3")
          ]),
          (0, import_vue2.createElementVNode)("view", {
            class: "big-button",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.goToArchivedInfoPage && $options.goToArchivedInfoPage(...args))
          }, [
            (0, import_vue2.createElementVNode)("u-image", {
              src: "/static/pic/icnTray2.png",
              class: "button-image"
            }),
            (0, import_vue2.createElementVNode)("u-text", { class: "button-text" }, "Archived"),
            (0, import_vue2.createElementVNode)("u-text", { class: "button-number" }, "0")
          ])
        ]),
        (0, import_vue2.createCommentVNode)(" \u6587\u4EF6\u5939\u6298\u53E0 "),
        (0, import_vue2.createElementVNode)("view", { class: "collapse-wrapper" }, [
          (0, import_vue2.createVNode)(_component_uni_collapse, null, {
            default: (0, import_vue2.withCtx)(() => [
              ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                import_vue2.Fragment,
                null,
                (0, import_vue2.renderList)($data.folders, (folder, index) => {
                  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", { key: index }, [
                    (0, import_vue2.createElementVNode)("view", { class: "folder-header" }, [
                      (0, import_vue2.createElementVNode)(
                        "u-text",
                        { class: "folder-title" },
                        (0, import_vue2.toDisplayString)(folder.folderName),
                        1
                        /* TEXT */
                      ),
                      (0, import_vue2.createVNode)(_component_uni_icons, {
                        type: "plus",
                        size: "30",
                        class: "add-button",
                        onClick: ($event) => $options.openAddItemDialog("folders", index)
                      }, null, 8, ["onClick"])
                    ]),
                    (0, import_vue2.createVNode)(_component_uni_collapse_item, {
                      title: folder.folderName
                    }, {
                      default: (0, import_vue2.withCtx)(() => [
                        (0, import_vue2.createElementVNode)("view", { class: "folder-content" }, [
                          ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                            import_vue2.Fragment,
                            null,
                            (0, import_vue2.renderList)(folder.items, (item, itemIndex) => {
                              return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                                key: itemIndex,
                                class: "swipe-item",
                                onClick: ($event) => $options.handleCollapseItemClickone(item)
                              }, [
                                (0, import_vue2.createVNode)(_component_uni_swipe_action_item, {
                                  "right-options": $options.getRightOptions("folders", index, itemIndex)
                                }, {
                                  default: (0, import_vue2.withCtx)(() => [
                                    (0, import_vue2.createElementVNode)("view", { class: "swipe-item-content" }, [
                                      (0, import_vue2.createElementVNode)("view", { class: "item-left" }, [
                                        (0, import_vue2.createElementVNode)("view", { class: "circle-image" }, [
                                          (0, import_vue2.createElementVNode)("u-image", {
                                            class: "circle-image-icon",
                                            src: item.icon
                                          }, null, 8, ["src"])
                                        ]),
                                        (0, import_vue2.createElementVNode)("view", { class: "item-text" }, [
                                          (0, import_vue2.createElementVNode)(
                                            "u-text",
                                            null,
                                            (0, import_vue2.toDisplayString)(item.name),
                                            1
                                            /* TEXT */
                                          )
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["right-options"])
                              ], 8, ["onClick"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["title"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "collapse-wrapper" }, [
          (0, import_vue2.createVNode)(_component_uni_collapse, null, {
            default: (0, import_vue2.withCtx)(() => [
              ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                import_vue2.Fragment,
                null,
                (0, import_vue2.renderList)($data.sharedFolders, (folder, index) => {
                  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", { key: index }, [
                    (0, import_vue2.createElementVNode)("view", { class: "folder-header" }, [
                      (0, import_vue2.createElementVNode)(
                        "u-text",
                        { class: "folder-title" },
                        (0, import_vue2.toDisplayString)(folder.name),
                        1
                        /* TEXT */
                      ),
                      (0, import_vue2.createVNode)(_component_uni_icons, {
                        type: "plus",
                        size: "30",
                        class: "add-button",
                        onClick: ($event) => $options.openAddItemDialog("sharedFolders", index)
                      }, null, 8, ["onClick"])
                    ]),
                    (0, import_vue2.createVNode)(_component_uni_collapse_item, {
                      title: folder.name
                    }, {
                      default: (0, import_vue2.withCtx)(() => [
                        (0, import_vue2.createElementVNode)("view", { class: "folder-content" }, [
                          ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                            import_vue2.Fragment,
                            null,
                            (0, import_vue2.renderList)(folder.items, (item, itemIndex) => {
                              return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                                key: itemIndex,
                                class: "swipe-item",
                                onClick: ($event) => $options.handleCollapseItemClicktwo(item)
                              }, [
                                (0, import_vue2.createVNode)(_component_uni_swipe_action_item, {
                                  "right-options": $options.getRightOptions("sharedFolders", index, itemIndex)
                                }, {
                                  default: (0, import_vue2.withCtx)(() => [
                                    (0, import_vue2.createElementVNode)("view", { class: "swipe-item-content" }, [
                                      (0, import_vue2.createElementVNode)("view", { class: "item-left" }, [
                                        (0, import_vue2.createElementVNode)("view", { class: "circle-image" }, [
                                          (0, import_vue2.createElementVNode)("u-image", {
                                            class: "circle-image-icon",
                                            src: item.icon
                                          }, null, 8, ["src"])
                                        ]),
                                        (0, import_vue2.createElementVNode)("view", { class: "item-text" }, [
                                          (0, import_vue2.createElementVNode)(
                                            "u-text",
                                            null,
                                            (0, import_vue2.toDisplayString)(item.name),
                                            1
                                            /* TEXT */
                                          )
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["right-options"])
                              ], 8, ["onClick"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["title"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "collapse-wrapper" }, [
          (0, import_vue2.createVNode)(_component_uni_collapse, null, {
            default: (0, import_vue2.withCtx)(() => [
              ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                import_vue2.Fragment,
                null,
                (0, import_vue2.renderList)($data.utilities, (folder, index) => {
                  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", { key: index }, [
                    (0, import_vue2.createElementVNode)("view", { class: "folder-header" }, [
                      (0, import_vue2.createElementVNode)(
                        "u-text",
                        { class: "folder-title" },
                        (0, import_vue2.toDisplayString)(folder.name),
                        1
                        /* TEXT */
                      )
                    ]),
                    (0, import_vue2.createVNode)(_component_uni_collapse_item, {
                      title: folder.name
                    }, {
                      default: (0, import_vue2.withCtx)(() => [
                        (0, import_vue2.createElementVNode)("view", { class: "folder-content" }, [
                          ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                            import_vue2.Fragment,
                            null,
                            (0, import_vue2.renderList)(folder.items, (item, itemIndex) => {
                              return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                                key: itemIndex,
                                class: "swipe-item",
                                onClick: ($event) => $options.handleCollapseItemClick(item)
                              }, [
                                (0, import_vue2.createVNode)(_component_uni_swipe_action_item, {
                                  "right-options": $options.getRightOptions("utilities", index, itemIndex)
                                }, {
                                  default: (0, import_vue2.withCtx)(() => [
                                    (0, import_vue2.createElementVNode)("view", { class: "swipe-item-content" }, [
                                      (0, import_vue2.createElementVNode)("view", { class: "item-left" }, [
                                        (0, import_vue2.createElementVNode)("view", { class: "circle-image" }, [
                                          (0, import_vue2.createElementVNode)("u-image", {
                                            class: "circle-image-icon",
                                            src: item.icon
                                          }, null, 8, ["src"])
                                        ]),
                                        (0, import_vue2.createElementVNode)("view", { class: "item-text" }, [
                                          (0, import_vue2.createElementVNode)(
                                            "u-text",
                                            null,
                                            (0, import_vue2.toDisplayString)(item.name),
                                            1
                                            /* TEXT */
                                          )
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["right-options"])
                              ], 8, ["onClick"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["title"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        $data.showPopup ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
          key: 0,
          class: "popup-container"
        }, [
          (0, import_vue2.createElementVNode)("view", { class: "popup-header" }, [
            (0, import_vue2.createVNode)(_component_button, {
              class: "popup-button popup-button-cancel",
              onClick: $options.cancelAddItem
            }, {
              default: (0, import_vue2.withCtx)(() => [
                (0, import_vue2.createTextVNode)("Cancel")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            (0, import_vue2.createElementVNode)("u-text", { class: "popup-title" }, "Add Item"),
            (0, import_vue2.createVNode)(_component_button, {
              class: "popup-button popup-button-done",
              onClick: $options.addItem
            }, {
              default: (0, import_vue2.withCtx)(() => [
                (0, import_vue2.createTextVNode)("Done")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"])
          ]),
          (0, import_vue2.createElementVNode)("view", { class: "add-item-form" }, [
            (0, import_vue2.createElementVNode)("view", {
              class: "color-picker",
              onClick: _cache[4] || (_cache[4] = (...args) => $options.toggleColorPicker && $options.toggleColorPicker(...args))
            }, [
              (0, import_vue2.createElementVNode)("u-text", null, "\u{1F3A8}")
            ]),
            (0, import_vue2.createElementVNode)("u-input", {
              modelValue: $data.newItemName,
              onInput: _cache[5] || (_cache[5] = ($event) => $data.newItemName = $event.detail.value),
              placeholder: "Enter item name",
              class: "in"
            }, null, 40, ["modelValue"])
          ]),
          $data.showColorPicker ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
            key: 0,
            class: "color-options"
          }, [
            ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
              import_vue2.Fragment,
              null,
              (0, import_vue2.renderList)($data.colors, (color) => {
                return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                  key: color,
                  style: (0, import_vue2.normalizeStyle)({ backgroundColor: color }),
                  class: "color-option",
                  onClick: ($event) => $options.selectColor(color)
                }, null, 12, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (0, import_vue2.createCommentVNode)("v-if", true)
        ])) : (0, import_vue2.createCommentVNode)("v-if", true)
      ])
    ]);
  }
  var list = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "D:/Download/CoHub/CoHub/pages/list/list.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/list/list";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e2) {
    }
    list.mpType = "page";
    const app = Vue.createPageApp(list, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...list.styles || []]));
    app.mount("#root");
  }
})();
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
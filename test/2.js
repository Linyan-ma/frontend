!(function (e) {
  var n = {};
  function t(o) {
    if (n[o]) return n[o].exports;
    var i = (n[o] = { i: o, l: !1, exports: {} });
    return e[o].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, o) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: o });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (t.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var i in e)
          t.d(
            o,
            i,
            function (n) {
              return e[n];
            }.bind(null, i)
          );
      return o;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ""),
    t((t.s = 19));
})([
  function (e, n, t) {
    function o(e) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var i = t(1);
    function a(e, n) {
      var t = n || window.location.search,
        o = new RegExp("(^|&)".concat(e, "=([^&]*)(&|$)")),
        i = t.substr(t.indexOf("?") + 1).match(o);
      return null !== i ? i[2] : "";
    }
    function r(e) {
      return null === e
        ? ""
        : String(e)
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }
    function s(e, n) {
      var t = String(e).split("."),
        o = String(n).split(".");
      try {
        for (var i = 0, a = Math.max(t.length, o.length); i < a; i++) {
          var r = (isFinite(t[i]) && Number(t[i])) || 0,
            s = (isFinite(o[i]) && Number(o[i])) || 0;
          if (r < s) return -1;
          if (r > s) return 1;
        }
      } catch (e) {
        return -1;
      }
      return 0;
    }
    var c = "a.cs0309.3g.qq.com" === location.host;
    e.exports = {
      ping: function (e) {
        var n = new Image(),
          t = function () {
            (n.onload = null), (n.onerror = null);
          };
        (n.onload = t),
          (n.onerror = t),
          setTimeout(function () {
            n.src = e;
          }, 0);
      },
      formatProtocol: function (e) {
        return /^(http|https):\/\//.test(e)
          ? e.replace(/^(http|https):\/\//, "//")
          : e;
      },
      loadScript: function (e, n) {
        var t = document.createElement("script");
        (t.type = "text/javascript"),
          t.readyState
            ? (t.onreadystatechange = function () {
                if ("loaded" === t.readyState || "complete" === t.readyState) {
                  if (((t.onreadystatechange = null), !n)) return;
                  n();
                }
              })
            : (t.onload = function () {
                n && n();
              }),
          (t.src = e),
          document.getElementsByTagName("head")[0].appendChild(t);
      },
      getQuery: a,
      greaterThanOrEqual: function (e, n) {
        var t = String(e).split("."),
          o = String(n).split(".");
        try {
          for (var i = 0, a = Math.max(e.length, n.length); i < a; i++) {
            var r = (isFinite(t[i]) && Number(t[i])) || 0,
              s = (isFinite(o[i]) && Number(o[i])) || 0;
            if (r < s) return !1;
            if (r > s) return !0;
          }
        } catch (e) {
          return !1;
        }
        return !0;
      },
      isUseHttpsForWX: function () {
        if (!window.localStorage) return !1;
        var e = window.localStorage.getItem("useHttpsUrl") || "",
          n = window.localStorage.getItem("setHttpsUrlTime") || 0;
        return !!(e && Date.now() - parseInt(n, 10) <= 6048e5);
      },
      setUseHttps: function () {
        window.localStorage &&
          (window.localStorage.setItem("useHttpsUrl", !0),
          window.localStorage.setItem("setHttpsUrlTime", Date.now()));
      },
      escHtml: r,
      getHtml: function (e, n) {
        return e.replace(/{([\w-]+)\}/g, function (e, t) {
          return void 0 !== o(n[t]) ? r(n[t]) : "";
        });
      },
      serializeParam: function (e, n) {
        var t = [];
        return (
          Object.keys(e).forEach(function (o) {
            n
              ? t.push("".concat(o, "=").concat(e[o]))
              : t.push(
                  ""
                    .concat(encodeURIComponent(o), "=")
                    .concat(encodeURIComponent(e[o]))
                );
          }),
          t.join("&")
        );
      },
      compareVersion: s,
      debug: function () {
        if (a("debug") || location.host.indexOf("cs0309") > -1) {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t];
          console.log(n);
        }
      },
      copyToClipboard: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function () {};
        if (e)
          try {
            if (
              document.execCommand &&
              "function" == typeof document.execCommand
            ) {
              var t = $("#copyhackinput");
              t.length ||
                ((t = $(
                  '<input id="copyhackinput"  readonly="readonly" type="text" style="position:absolute;top:0;left:0;height:1px;width:10px;opacity:0;"/>'
                )),
                $("body").append(t.get(0))),
                t.val(e),
                t.get(0).select(),
                document.execCommand("copy", !1, null)
                  ? (n(e, "0", ""), console.log("copy success"))
                  : (n(e, -1, ""), console.log("copy fail"));
            }
          } catch (t) {
            n(e, -2, "copy fail ".concat(JSON.stringify(t))), console.error(t);
          }
      },
      getCookie: function (e) {
        var n = document.cookie.match(
          RegExp("(?:^|;)\\s*".concat(e, "=([^;]*)"))
        );
        return n ? n[1] : "";
      },
      decode: function (e, n) {
        var t = "";
        try {
          t = decodeURIComponent(e);
        } catch (o) {
          if (
            (console.error("decodeURIComponent error: ".concat(e, "  ")),
            (t = ""),
            !n)
          )
            return;
          n();
        }
        return t;
      },
      firstCharacterToUpperCase: function (e) {
        return e.charAt(0).toUpperCase() + e.substring(1);
      },
      isDebugMode: c,
      monitorNoTbs: function () {
        return !!(location.host.indexOf("cs0309") > -1 && a("notbs"));
      },
      isAdScene: function () {
        return (
          !!i.os.android &&
          !i.browser.wechat &&
          !i.browser.mqq &&
          !!(
            (window.unjs &&
              "function" == typeof window.unjs.isInUnSdk &&
              window.unjs.isInUnSdk()) ||
            "1" === a("ad")
          )
        );
      },
      get: function (e, n) {
        return e.reduce(function (e, n) {
          return e && e[n] ? e[n] : null;
        }, n);
      },
      getWxDownLoadType: function () {
        return s(i.browser.version, "8.0.0") < 0
          ? 0
          : window.AppInfoData.downloadType || 0;
      },
    };
  },
  function (e, n) {
    var t,
      o,
      i,
      a,
      r,
      s,
      c,
      d,
      l,
      p,
      u,
      w,
      f = null;
    f ||
      ((t = navigator.userAgent),
      (o = {}),
      (i = {}),
      (a = ""),
      (r = t.match(/([a|A]ndroid)[\s/]*([\d.]+)/)),
      (s = t.match(/(iPad).*OS\s([\d_]+)/)),
      (c = !s && t.match(/(iPhone\sOS)\s([\d_]+)/)),
      (d = t.match(/MicroMessenger\/([\d.]+)/)),
      (l = window.browser && t.match(/MQQBrowser\/([\d.]+)/)),
      (p = t.match(/(?:V1_AND_SQ_|QQ\/)([\d.]+)/)),
      (u = t.match(/\/qqdownloader\/(\d+)(?:\/(appdetail|external))?/)),
      (w = t.match(/NetType\/([^\s]*)\s/)),
      /Windows NT/.test(t) && (o.pc = !0),
      (/android/i.test(t) ||
        (/UCBrowser/i.test(t) && /Adr[\s/]*([\d.]+)/.test(t))) &&
        ((o.android = !0), r && (o.version = r[2])),
      !o.android &&
        /(iPhone|iPad|iPod|iOS)/g.test(t) &&
        ((o.ios = !0),
        c && ((o.iphone = !0), (o.version = c[2].replace(/_/g, "."))),
        s && ((o.ipad = !0), (o.version = s[2].replace(/_/g, ".")))),
      d && ((i.wechat = !0), (i.version = d[1]), (i.pname = "com.tencent.mm")),
      p &&
        ((i.mqq = !0), (i.version = p[1]), (i.pname = "com.tencent.mobileqq")),
      u &&
        ((i.yyb = !0),
        (i.version = u[1]),
        (i.pname = "com.tencent.android.qqdownloader")),
      d ||
        p ||
        u ||
        !l ||
        ((i.qqbrowser = !0), (i.version = l[1]), (i.pname = "com.tencent.mtt")),
      w && (a = w[1]),
      (f = { os: o, browser: i, netType: a })),
      (e.exports = f);
  },
  function (e, n, t) {
    var o, i, a;
    function r(e, n, t) {
      return (
        n in e
          ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = t),
        e
      );
    }
    var s = t(1),
      c = t(33).UAParser,
      d = t(0),
      l = t(4),
      p = t(5),
      u = t(9),
      w = new c(),
      f = d.debug,
      m = (window.AppInfoData && window.AppInfoData.appDetail) || {},
      g = (window.AppInfoData && window.AppInfoData.baoPkg) || {},
      h =
        ((window.AppInfoData && window.AppInfoData.identityInfo) || {})
          .position || {},
      v = {};
    var _ = {
        project: "micro-download",
        osType: s.os.ios ? "ios" : s.os.android ? "android" : "other",
        globalUserId: d.getCookie("sd_userid"),
        envExtInfo: d.getCookie("sd_cookie_crttime"),
        uuid: l.actionTraceId,
        dataSource: l.getPageName(),
        mobileMode: w.getDevice().model,
        netType: s.netType,
        mediaName: s.browser.mqq
          ? "mqq"
          : s.browser.wechat
          ? "wechat"
          : s.browser.qqbrowser
          ? "qqbrowser"
          : s.browser.yyb
          ? "qqdownloader"
          : "other",
        mediaAppVersion: s.browser.version,
        mediaUseragent: navigator.userAgent,
        mediaOsType: "".concat(w.getOS().name, ", ").concat(w.getOS().version),
        mediaExtInfo: ""
          .concat(w.getEngine().name, ", ")
          .concat(w.getEngine().version),
        clientIp: h.clientIp || "",
        country: h.country || "",
        province: h.province || "",
        city: h.city || "",
        deviceExtInfo: u.isInTbs(),
        experimentId: p.experimentId,
        experimentContent: p.experimentContent,
        recommendId: p.recommendId,
        materialId: "".concat(window.templateId),
        locationUrl: location.href,
        callervia: "",
        flag1: l.getFromcase(),
        flag10: document.referrer,
        flag11: location.host,
        flag12: "0",
        flag15: "".concat(d.getWxDownLoadType()),
        flag16: d.isAdScene() ? "1" : "0",
      },
      b = {
        appId: m.appId,
        appName: m.appName,
        packageName: m.packageName,
        apkId: m.apkId,
        appVersion: m.versionCode,
        appChannel: m.channel,
        downloadUrl: m.apkUrl,
        fileSize: m.size,
        appExtInfo: "",
      },
      y = {
        flag2: g.channel,
        flag3: g.vercode,
        flag4: "",
        flag5: g.md5,
        flag8: "0",
        flag14: g.size,
      },
      D = { flag6: 0, flag7: 0, cpstatus: 0, flag13: 0 };
    var A = {
        DEFAULT: 0,
        CLICK_MAIN_BTN_TO_DOWNLOAD: 1,
        CLICK_NORMALDIALOG_FAST_DOWNLOAD: 2,
        CLICK_MAIN_BTN_TO_UPDATE: 3,
        CLICK_SMALL_MAIN_BTN_TO_DOWNLOAD: 4,
      },
      E = {
        eventScene: {
          cpApp: "cpApp",
          qqdownloader: "qqdownloader",
          qqbrowser: "qqbrowser",
        },
        eventNameMap:
          ((o = {}),
          r(o, JsBridge.Download.STATE_DOWNLOADING, "appDownloading"),
          r(o, JsBridge.Download.STATE_DOWNLOADED, "appDownloaded"),
          r(o, JsBridge.Download.STATE_INSTALLING, "appInstalling"),
          r(o, JsBridge.Download.STATE_INSTALLED, "appInstalled"),
          r(
            o,
            JsBridge.Download.STATE_FAILED_OF_SDCARD,
            "appDownloadFailOfSdcard"
          ),
          r(o, JsBridge.Download.STATE_REMOVED, "appDownloadRemoved"),
          r(o, JsBridge.Download.STATE_CANCAL, "appDownloadCancel"),
          r(o, JsBridge.Download.STATE_FAILED, "appDownloadFailed"),
          r(o, JsBridge.Download.STATE_READY, "appDownloadReady"),
          r(o, JsBridge.Download.STATE_PAUSED, "appDownloadPaused"),
          o),
        eventExtInfo:
          ((i = {}),
          r(i, A.DEFAULT, "default"),
          r(i, A.CLICK_MAIN_BTN_TO_DOWNLOAD, "clickMainBtnToDownload"),
          r(
            i,
            A.CLICK_NORMALDIALOG_FAST_DOWNLOAD,
            "clickNormalDialogFastDownloadBtn"
          ),
          r(i, A.CLICK_MAIN_BTN_TO_UPDATE, "clickMainBtnToUpdate"),
          r(
            i,
            A.CLICK_SMALL_MAIN_BTN_TO_DOWNLOAD,
            "clickSmallMainBtnToDownload"
          ),
          i),
      },
      k =
        (r((a = {}), E.eventScene.cpApp, !0),
        r(a, E.eventScene.qqdownloader, !0),
        r(a, E.eventScene.qqbrowser, !0),
        a),
      T = {
        report: function (e) {
          var n = $.extend({}, e, _, b, y, D);
          window.via && (n.callervia = window.via),
            e.eventStartTime &&
              e.eventEndTime &&
              (n.flag9 = e.eventEndTime - e.eventStartTime),
            0 === n.eventResult && (n.eventResult += ""),
            f(
              "[common/druidReport.js] report data: ".concat(JSON.stringify(n))
            ),
            $.ajax({
              type: "POST",
              url: "https://fbih5report.3g.qq.com/api/report",
              data: JSON.stringify(n),
              xhrFields: { withCredentials: !0 },
            });
        },
        reportSampleData: function (e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0.001;
          (!d.isDebugMode && Math.random() > n) || T.report(e);
        },
        reportKeyDownloadEvent: function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            t = arguments.length > 2 ? arguments[2] : void 0,
            o = arguments.length > 3 ? arguments[3] : void 0,
            i = "0";
          if (k[e] && t === JsBridge.Download.STATE_DOWNLOADING)
            return (
              (k[e] = !1),
              void T.report({
                eventName: E.eventNameMap[t],
                eventResult: i,
                eventScene: e,
                eventExtInfo: E.eventExtInfo[n],
              })
            );
          switch (
            (t === JsBridge.Download.STATE_FAILED &&
              (i = o && o.errCode ? o.errCode : -1e3),
            t)
          ) {
            case JsBridge.Download.STATE_FAILED:
            case JsBridge.Download.STATE_CANCAL:
            case JsBridge.Download.STATE_FAILED_OF_SDCARD:
            case JsBridge.Download.STATE_REMOVED:
            case JsBridge.Download.STATE_DOWNLOADED:
            case JsBridge.Download.STATE_INSTALLED:
              (k[e] = !0),
                T.report({
                  eventName: E.eventNameMap[t],
                  eventResult: i,
                  eventScene: e,
                  eventExtInfo: E.eventExtInfo[n],
                  eventStartTime: window.yybDownloadStartTime,
                  eventEndTime: Date.now(),
                });
          }
        },
        setQQDownloaderInfo: function (e, n) {
          var t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          f(
            "[common/setQQDownloadInfo.js] downloadUrl: "
              .concat(e, " , md5: ")
              .concat(n)
          ),
            (y.flag4 = e),
            (y.flag5 = n),
            (y.flag8 = "".concat(t));
        },
        setCallerVia: function (e) {
          f("[commmon/druidReport.js] setCallerVia: ".concat(e)),
            (_.callervia = e);
        },
        setInstallation: function (e) {
          var n = e.yybVersion,
            t = e.cpAppVersion;
          (D.flag6 = n), (D.flag7 = t);
        },
        CPSTATUS: { DOWN: 0, UPDATE: 1, OPEN: 2 },
        eventExtPostion: A,
        setCpStatus: function (e) {
          (D.cpstatus = e), (D.flag13 = e);
        },
        setAppExtInfo: function (e) {
          b.appExtInfo = e;
        },
        start: function (e) {
          v[e] = Date.now();
        },
        endAndReport: function (e) {
          var n = {};
          (n.eventStartTime = v[e.eventName]),
            (n.eventEndTime = Date.now()),
            (n.eventCostTime = n.eventEndTime - n.eventStartTime),
            T.report($.extend({}, e, n)),
            delete v[e.eventName];
        },
        endAndReportSampleData: function (e, n) {
          var t = {};
          (t.eventStartTime = v[e.eventName]),
            (t.eventEndTime = Date.now()),
            (t.eventCostTime = t.eventEndTime - t.eventStartTime),
            T.report($.extend({}, e, t)),
            T.reportSampleData($.extend({}, e, t), n),
            delete v[p.eventName];
        },
        setMediaAppVersion: function (e) {
          _.mediaAppVersion = e;
        },
        setQbVersion: function (e) {
          _.flag12 = e || "0";
        },
        downloadEvent: E,
        clientApiEventName: {
          onReady: "onReady",
          checkAppState: "checkAppState",
          callScheme: "callScheme",
          tbsGetStackInfo: "tbsGetStackInfo",
          onPageResume: "onPageResume",
          writeCommData: "writeCommData",
          setDownloaderFirstOpenPage: "setDownloaderFirstOpenPage",
          copyToClipboard: "copyToClipboard",
          startApp: "startApp",
          showBrowserListDialog: "showBrowserListDialog",
        },
        pageStartTime: window.gTimeStamps && window.gTimeStamps[0],
        cgiErrCode: -1e4,
        apiErrCode: -99999,
        clickActionEventResult: {
          openQQDownloader: "openQQDownloader",
          updateQQDownloader: "updateQQDownloader",
          openQQDownloaderForUpdateApp: "openQQDownloaderForUpdateApp",
          openQQDownloaderForDownloadApp: "openQQDownloaderForDownloadApp",
          downloadQQDownloader: "downloadQQDownloader",
          downloadQQDownloaderForUpdateApp: "downloadQQDownloaderForUpdateApp",
          downloadQQDownloaderForDownloadApp:
            "downloadQQDownloaderForDownloadApp",
          openCpApp: "openCpApp",
          updateCpApp: "updateCpApp",
          downloadCpApp: "downloadCpApp",
          stopDownloadCpApp: "stopDownloadCpApp",
          openAppStore: "openAppStore",
          showOpenGuide: "showOpenGuide",
          openAndDownloadQQDownloader: "openAndDownloadQQDownloader",
          alert: "alert",
          close: "close",
          openCpAppByQQDownloaderMidPage: "openCpAppByQQDownloaderMidPage",
          openTbsPopWindow: "openTbsPopWindow",
          jumpToOpenPage: "jumpToOpenPage",
          appSDKDownloaderInitNotFinish: "appSDKDownloaderInitNotFinish",
          qqdownloaderInitNotFinish: "qqdownloaderInitNotFinish",
          none: "none",
          showNormalDownloadConfirmWindow: "showNormalDownloadConfirmWindow",
          retryDownloadQQDownloaderWhenVerifyMd5Fail:
            "retryDownloadQQDownloaderWhenVerifyMd5Fail",
          reloadPage: "reloadPage",
          seeMore: "seeMore",
          useFastDownload: "useFastDownload",
          useNormalDownload: "useNormalDownload",
          openQQBrowser: "openQQBrowser",
          downloadQQBrowser: "downloadQQBrowser",
          showRcmdQbDialog: "showRcmdQbDialog",
        },
        cgiEventName: {
          newCdnInfo: "requestNewCdnInfo",
          microDownAppInfo: "requestMicroDownAppInfo",
        },
        pvEventName: {
          giftCard: "pvGiftCard",
          recommendCard: "pvRecommendCard",
          banner: "pvBanner",
          normalDownloadConfirmDialog: "pvNormalDownloadConfirmDialog",
          browserOpenAppTipsDialog: "pvBrowserOpenAppTipsDialog",
          iosOpenTips: "pvIOSOpenTips",
          iosTopTips: "pvIOSToptips",
          retryDownloadDialog: "pvRetryDownloadDialog",
          reloadConfirmDialog: "pvReloadConfirmDialog",
          reloadDialog: "pvReloadDialog",
          autoDownloadDialog: "pvAutoDownloadDialog",
          tbsPopWindow: "pvTBSPopWindow",
          commentPanel: "pvCommentPanel",
          rcmdQbDialog: "pvRcmdQbDialog",
          openAppPage: "pvOpenAppPage",
        },
        clickBtnEventName: {
          mainBtn: "clickFastDownloadBtn",
          normalBtn: "clickNormalBtn",
          smallMainBtn: "clickSmallFastDownloadBtn",
          downlownWayCheckbox: "clickDownlownWayCheckbox",
          iosOpenBtn: "clickIOSOpenBtn",
          giftCardMoreBtn: "clickGiftCardMoreBtn",
          giftCardReceiveBtn: "clickGiftCardReceiveBtn",
          recommendCardBtn: "clickRecommendCardBtn",
          bannerDownloadBtn: "clickBannerDownloadBtn",
          bannerCloseBtn: "clickBannerCloseBtn",
          normalDownloadConfirmDialogCloseBtn:
            "clickNormalDownloadConfirmDialogCloseBtn",
          normalDownloadConfirmDialogCloseOutTouch:
            "normalDownloadConfirmDialogCloseOutTouch",
          normalDownloadConfirmDialogOkBtn:
            "clickNormalDownloadConfirmDialogOkBtn",
          normalDownloadConfirmDialogFastDownloadBtn:
            "clickNormalDownloadConfirmDialogFastDownloadBtn",
          browserOpenAppTipsDialogOkBtn: "clickBrowserOpenAppTipsDialogOkBtn",
          browserOpenAppTipsDialogCloseBtn:
            "clickBrowserOpenAppTipsDialogCloseBtn",
          retryDownloadDialogCancelBtn: "clickRetryDownloadDialogCancelBtn",
          retryDownloadDialogOkBtn: "clickRetryDownloadDialogOkBtn",
          reloadConfirmDialogCancelBtn: "clickReloadConfirmDialogCancelBtn",
          reloadConfirmDialogOkBtn: "clickReloadConfirmDialogOkBtn",
          autoDownloadDialogCancelBtn: "clickAutoDownloadDialogCancelBtn",
          autoDownloadDialogOkBtn: "clickAutoDownloadDialogOkBtn",
          wechatSubPageDownloadBtn: "clickWechatSubPageDownloadBtn",
          wechatSubPageCancelBtn: "clickWechatSubPageCancelBtn",
          wechatSubPageBackBtn: "clickWechatSubPageBackBtn",
          mqqRemoveDownloadInstanceBtn: "clickMqqRemoveDownloadInstanceBtn",
          mqqCancelDownloadBtn: "clickMqqCancelDownloadBtn",
          appDetailMoreBtn: "clickAppDetailMoreBtn",
          rcmdQQBrowserBtn: "clickRcmdQQBrowserBtn",
          openPageOpenBtn: "clickOpenPageOpenBtn",
          activityBtn: "activityBtn",
        },
        autoEventName: {
          openCpApp: "autoOpenCpApp",
          openQQDownloader: "autoOpenQQDownloader",
          openQQDownloaderForUpdateApp: "autoOpenQQDownloaderForUpdateApp",
          openQQDownloaderForDownloadApp: "autoOpenQQDownloaderForDownloadApp",
          downloadQQDownloader: "auotDownloadQQDownloader",
          downloadCpApp: "autoDownloadCpApp",
          installQQDownloader: "autoInstallQQDownloader",
          installCpApp: "autoInstallCpApp",
          openAppStore: "autoOpenAppStore",
          jumpToOpenPage: "autoJumpToOpenPage",
          openCpAppByQQDownloaderMidPage: "autoOpenCpAppByQQDownloaderMidPage",
          openAndDownloadQQDownloader: "auotOpenAndDownloadQQDownloader",
          retryDownloadQQDownloaderWhenVerifyMd5Fail:
            "autoRetryDownloadQQDownloaderWhenVerifyMd5Fail",
          retryCreateDownloader: "autoRetryCreateDownloader",
          reloadPage: "autoReloadPage",
          showRcmdQbDialog: "autoShowRcmdQbDialog",
          openQQBrowser: "autoOpenQQBrowser",
          openTbsPopWindow: "openTbsPopWindow",
          showOpenGuide: "showOpenGuide",
        },
        keyEventName: {
          jsStartToExecute: "jsStartToExecute",
          pageFinishRender: "pageFinishRender",
          mainBtnFinishLoading: "mainBtnFinishLoading",
          cpAppDownloadInstanceCreated: "cpAppDownloadInstanceCreated",
          qqdownloaderDownloadInstanceCreated:
            "qqdownloaderDownloadInstanceCreated",
        },
        errorEventName: { decodeURIError: "decodeURIError" },
        abilityEventName: {
          pageVisibility: "pageVisibility",
          sendBeacon: "sendBeacon",
        },
        specialEventName: {
          noNormalDownloadConfirmDialog: "noNormalDownloadConfirmDialog",
          existOtherMarketPkg: "existOtherMarketPkg",
        },
        eventResult: {
          support: "0",
          notSupport: "-1",
          success: "0",
          fail: "-1",
        },
        eventExtInfo: {
          canUseTbsPopWin: "canUseTbsPopWin",
          showGuideDialog: "showGuideDialog",
          showRcmdQbDialog: "showRcmdQbDialog",
        },
      };
    e.exports = T;
  },
  function (e, n, t) {
    function o(e) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var i = t(4),
      a = t(5),
      r = t(2),
      s = t(0),
      c = t(34),
      d = t(1),
      l = i.report,
      p = i.reportWriteData,
      u = s.compareVersion,
      w = s.getQuery,
      f = s.serializeParam,
      m = s.debug,
      g = window.AppInfoData && window.AppInfoData.identityInfo,
      h = [];
    function v(e) {
      var n = s.decode(
        w("android_scheme") || w("android_schema") || "",
        function () {
          r.report({
            eventName: r.errorEventName.decodeURIError,
            eventExtInfo: w("android_scheme") || w("android_schema") || "",
          });
        }
      );
      return (
        window.cpschema && !window.mainBtnClick && (n = window.cpschema),
        (n && location.host.indexOf("cs0309") > -1) ||
        (n && 0 == n.indexOf("".concat(window.appLinkInfo, "://")))
          ? n
          : d.browser.wechat || e || n || !window.appExtObj.schema
          ? ""
          : ((n = window.appExtObj.schema) &&
              n.indexOf("://") < 0 &&
              (n = s.decode(n, function () {
                r.report({
                  eventName: r.errorEventName.decodeURIError,
                  eventExtInfo: window.appExtObj.schema,
                });
              })),
            n && /^[^:]+:\/\//.test(n)
              ? /^https?:/.test(n) && (n = "")
              : (n = ""),
            n)
      );
    }
    function _(e) {
      return "$"
        .concat(e, "&clipboard_start_time=")
        .concat(Date.now(), "&clipboard_expiry_time=")
        .concat(18e5, "$");
    }
    function b(e) {
      var n,
        t = e.onlyOpen,
        o =
          e.yybVersion ||
          (window.AppInfoData.baoPkg && window.AppInfoData.baoPkg.vercode) ||
          0,
        r = 0;
      return (
        u(o, a.AppbaoNoSkipAuthorizeVersion) < 0 && (r = 1),
        (n = (function (e, n, t, o, r) {
          var s = {
            traceId: i.actionTraceId,
            pname: e.packageName,
            via: o || "",
            downl_biz_id: r || "",
            skipAuthorize: JSON.stringify({
              explain: t,
              storage: 1,
              location: 1,
              phonestate: 1,
            }),
            r: Math.random(),
            applink_url: v(),
            recommendId: a.recommendId,
            start_time: Date.now(),
            expiry_time: Date.now() + 36e5,
          };
          e.appChannel && (s.channelid = e.appChannel);
          e.appId && (s.appid = e.appId);
          (d.browser.wechat || d.browser.mqq || d.browser.qqbrowser) &&
            ((s.hostpname = d.browser.pname || ""),
            (s.hostversioncode = d.browser.pversioncode || ""),
            (s.hostversion = d.browser.pversioncode || ""));
          window.qbExchangeToken &&
            (s.qbExchangeToken = window.qbExchangeToken);
          return "tmast://appdetails?".concat(f(s), "&oplist=").concat(n);
        })(
          window.APPCONFIG.app,
          t ? "0" : "1;2",
          r,
          e.via || window.via,
          window.APPCONFIG.appbao.g_f
        )),
        e.outerCall &&
          (n = ""
            .concat(n, "&outerCallTime=")
            .concat(Date.now(), "&outerCallType=1&outerCallMode=1")),
        m("[download/common.js] getTmast: ".concat(n)),
        n
      );
    }
    function y() {
      return (
        d.browser.mqq && d.browser.version && u(d.browser.version, "4.6") >= 0
      );
    }
    function D(e) {
      setTimeout(function () {
        r.start("".concat(r.clientApiEventName.callScheme)),
          JsBridge.callWithScheme(e, function (e) {
            var n = JSON.stringify(e);
            d.browser.wechat && e && (n = e.err_msg),
              r.endAndReportSampleData({
                eventName: "".concat(r.clientApiEventName.callScheme),
                eventExtInfo: n,
              }),
              i.reportWxCallScheme(e);
          });
      }, 350);
    }
    function A(e) {
      setTimeout(function () {
        location.href = e;
      }, 350);
    }
    d.os.android &&
      (d.browser.mqq && d.browser.version && u(d.browser.version, "4.7") >= 0
        ? document.addEventListener("qbrowserVisibilityChange", function (e) {
            e.hidden ||
              h.forEach(function (e) {
                e();
              });
          })
        : d.browser.wechat
        ? window.JsBridge &&
          (window.JsBridge.onResume = function () {
            h.forEach(function (e) {
              e();
            });
          })
        : UI.pageVisibility.isPageVisibilitySupport &&
          UI.pageVisibility.visibilitychange(function () {
            UI.pageVisibility.isHidden() ||
              h.forEach(function (e) {
                e();
              });
          })),
      (e.exports = {
        writeCommData: function (e) {
          var n = { starttime: e.starttime, endtime: e.endtime, url: e.url };
          r.start(r.clientApiEventName.writeCommData),
            window.WeixinJSBridge &&
              window.WeixinJSBridge.invoke(
                "writeCommData",
                { packageName: e.baoPkgName, data: JSON.stringify(n) },
                function (n) {
                  r.endAndReportSampleData({
                    eventName: r.clientApiEventName.writeCommData,
                    eventExtInfo: n && n.err_msg ? n.err_msg : "",
                  }),
                    e.callback && e.callback(n),
                    "object" !== o(n) || "write_comm_data:ok" !== n.err_msg
                      ? l("wx_android_write_commdata_fail")
                      : l("wx_android_write_commdata_suc"),
                    n && p(n.err_msg);
                }
              ),
            l("wx_android_write_commdata", { via: window.via });
        },
        onPageResume: function (e) {
          h.push(e);
        },
        getAppAndroidScheme: v,
        callYybMidPage: function (e, n, t) {
          var o = [],
            i = window.AppInfoData.appDetail;
          t || (t = ""),
            o.push("scene:40027"),
            o.push("".concat("via:ANDROIDWXZ.YYB.OPEN").concat(t)),
            o.push("pkgName:".concat(i.packageName)),
            o.push("appName:".concat(i.appName)),
            o.push("iconUrl:".concat(i.iconUrl.replace(/http:|https:/, ""))),
            e &&
              n &&
              (o.push("applink:".concat(c.encode(e))),
              o.push("versionCode:".concat(n))),
            o.push("autoOpen:true");
          var a = "tmast://appdemo?photonid=301539742450752&params="
            .concat(encodeURIComponent(o.join(",")), "&via=ANDROIDWXZ.YYB.OPEN")
            .concat(t, "&hostpname=com.tencent.mm");
          D(a), m("[download/common.js] appdemo(光子协议中间页): ".concat(a));
        },
        isYybSupportMidPage: function (e) {
          return e && String.prototype.slice.call(e, 0, 3) >= 715;
        },
        isAppNeedUpdate: function (e, n) {
          var t =
            e && (u(e, n) >= 0 || 1 === g.noNeedUpdate || a.isForKingCard);
          return (
            e > 0 && r.setCpStatus(t ? r.CPSTATUS.OPEN : r.CPSTATUS.UPDATE), !t
          );
        },
        getAppIOSScheme: function () {
          var e = s.decode(
            w("ios_scheme") || w("ios_schema") || "",
            function () {
              r.report({
                eventName: r.errorEventName.decodeURIError,
                eventExtInfo: w("ios_scheme") || w("ios_schema") || "",
              });
            }
          );
          return e &&
            0 == e.indexOf("".concat(window.appExtObj.iosAppLinkInfo, "://"))
            ? e
            : "";
        },
        getTmast: b,
        getAppBaoDownUrl: function (e, n) {
          var t = w("miscchannelid"),
            o = w("g_f") || window.APPCONFIG.appbao.g_f,
            i = "https://saweb.3g.qq.com/sourceCheckUrl/getSourceCheckUrl?data=".concat(
              encodeURIComponent(b({ onlyOpen: n }))
            );
          return "sourcecheck" == e && t
            ? "".concat(i, "&channel=").concat(t, "&fromcase=1")
            : "sourcecheck" == e &&
              o &&
              1 !== window.AppInfoData.identityInfo.isNewCdnUrlFlag
            ? "".concat(i, "&channel=").concat(o)
            : window.APPCONFIG.appbao.appbaoUrlgtk;
        },
        isSupportAppOperationInMtt: function () {
          var e,
            n = !1;
          try {
            (e =
              window.browser && window.browser.app
                ? window.browser.app
                : null) &&
              e.getApkInfo &&
              e.runApk &&
              (n = !0);
          } catch (e) {
            n = !1;
          }
          return n;
        },
        encodeTmastForClipBoard: _,
        getAppDownloadUrl: function () {
          var e = { r: Math.random() },
            n = "";
          if (
            window.AppInfoData &&
            window.AppInfoData.appDetail &&
            window.AppInfoData.appDetail.apkUrl
          ) {
            var t = window.AppInfoData.appDetail.apkUrl,
              o = a.sceneVia
                ? ""
                    .concat(t.indexOf("?") < 0 ? "?" : "&", "via=")
                    .concat(a.sceneVia)
                : "";
            return (
              m(
                "[download/common.js] getAppDownloadUrl|url=".concat(
                  (n = t + o)
                )
              ),
              n
            );
          }
          return (
            window.AppInfoData.appDetail.channel &&
              (e.channel = window.AppInfoData.appDetail.channel),
            window.AppInfoData.baoPkg.channel &&
              (e.g_f = window.AppInfoData.baoPkg.channel),
            window.APPCONFIG.g_tk && (e.g_tk = window.APPCONFIG.g_tk),
            (n = "https://"
              .concat(location.host, "/o/md-down/")
              .concat(window.APPCONFIG.app.packageName, "?")
              .concat(f(e))),
            m("[download/common.js] getAppDownloadUrl|url=".concat(n)),
            n
          );
        },
        tryCallYybInBrowser: function (e, n, t) {
          var o = Date.now();
          JsBridge.callWithScheme(e),
            setTimeout(function () {
              Date.now() - o > 1e3 ? n && n() : t && t();
            }, 800);
        },
        setShareInfo: function (e) {
          window.JsBridge &&
            JsBridge.onReady(function () {
              JsBridge.setShareInfo &&
                JsBridge.setShareInfo({
                  iconUrl: e.iconUrl,
                  jumpUrl: location.href,
                  title: e.appName,
                  summary: (e.description || "").slice(0, 100),
                });
            });
        },
        isWechatSupportVersion: function () {
          return (
            d.browser.wechat &&
            d.browser.version &&
            u(d.browser.version, "5.1") >= 0
          );
        },
        getTmastClipBoardData: function () {
          return _(b({ onlyOpen: !1 }));
        },
        isMqqSupportVersion: y,
        setJumpPageInMqq: function (e) {
          if (y()) {
            var n = r.eventResult.success;
            try {
              JsBridge._call("q_download/setDownloaderFirstOpenPage", {
                starttime: e.starttime,
                endtime: e.endtime,
                url: e.jumpUrl || b({ yybVersion: e.yybVersion }),
              });
            } catch (e) {
              (n = r.eventResult.fail), console.error(e);
            }
            r.reportSampleData({
              eventName: r.clientApiEventName.setDownloaderFirstOpenPage,
              eventResult: n,
            });
          }
        },
        openApp: function (e, n, t) {
          e
            ? d.browser.wechat || d.browser.mqq
              ? D(e)
              : A(e)
            : (d.browser.wechat ||
                d.browser.mqq ||
                d.browser.qqbrowser ||
                s.isAdScene()) &&
              setTimeout(function () {
                JsBridge.startApp({ scheme: e, packageName: n, signature: t });
              }, 350);
        },
        setLocationHref: A,
        callWithScheme: D,
        copyToClipboard: function (e) {
          s.copyToClipboard(e, function (e, n, t) {
            r.reportSampleData({
              eventName: r.clientApiEventName.copyToClipboard,
              eventResult: n,
              eventExtInfo: t || e,
            });
          });
        },
        getTmastAppDownByLink: function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "1;2",
            t = arguments.length > 2 ? arguments[2] : void 0,
            o = {
              via: t || window.via || "",
              oplist: n,
              applink_url: v(),
              recommendId: a.recommendId,
              start_time: Date.now(),
              expiry_time: Date.now() + 36e5,
              downl_url: e,
            };
          return "tmast://download?".concat(f(o));
        },
      });
  },
  function (e, n, t) {
    function o(e) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var i,
      a,
      r = t(0),
      s = t(1),
      c = r.ping,
      d = r.serializeParam,
      l = r.getQuery,
      p = {
        wx_android_pagepv: [1, 1012],
        wx_android_noyyb_pagepv: [1, 638],
        wx_android_noyyb_ndclick: [0, 753],
        wx_android_noyyb_fdclick: [0, 646],
        wx_android_noyyb_nuclick: [0, 656],
        wx_android_noyyb_fuclick: [0, 2150],
        wx_android_noyyb_opclick: [0, 647],
        wx_android_noyyb_poppv: [1, 2156],
        wx_android_noyyb_popndclick: [0, 2157],
        wx_android_noyyb_popfdclick: [0, 2158],
        wx_android_noyyb_popclsclick: [0, 2210],
        wx_android_noyyb_poposclick: [0, 2211],
        wx_android_noyyb_couponclick: [0, 2176],
        wx_android_noyyb_giftclick: [0, 2177],
        wx_android_noyyb_giftmoreclick: [0, 2178],
        wx_android_noyyb_commentmoreclick: [0, 2179],
        wx_android_yyb_pagepv: [1, 639],
        wx_android_yyb_fdclick: [0, 648],
        wx_android_yyb_fuclick: [0, 655],
        wx_android_yyb_opclick: [0, 649],
        wx_android_yyb_opsmallclick: [0, 981],
        wx_android_yyb_couponclick: [0, 2181],
        wx_android_yyb_giftclick: [0, 2182],
        wx_android_yyb_giftmoreclick: [0, 2183],
        wx_android_yyb_commentmoreclick: [0, 2184],
        wx_ios_pagepv: [1, 644],
        wx_ios_fastclick: [0, 998],
        wx_ios_browseropentips_pv: [1, 1003],
        wx_android_noyyb_hasapp_popsoclick: [0, 863],
        wx_android_noyyb_hasapp_popnoclick: [0, 857],
        wx_android_noyyb_hasapp_popnopv: [1, 864],
        wx_android_yyb_hasapp_pagepv: [1, 865],
        wx_android_noyyb_hasapp_pagepv: [1, 866],
        wx_android_yyb_noapp_pagepv: [1, 977],
        wx_android_noyyb_noapp_pagepv: [1, 978],
        wx_android_yyb_oldapp_pagepv: [1, 979],
        wx_android_noyyb_oldapp_pagepv: [1, 980],
        wx_android_noyyb_hasapp_soclick: [0, 858],
        wx_android_noyyb_hasapp_guideclick: [0, 961],
        wx_android_downyyb_cancelclick: [0, 854],
        wx_android_downyyb_cancelclick_safe: [0, 988],
        wx_android_downyyb_cancelclick_winsafe: [0, 989],
        wx_android_downyyb_cancelclick_update: [0, 990],
        wx_android_downyyb_beginclick: [0, 855],
        wx_android_downyyb_beginclick_safe: [0, 982],
        wx_android_downyyb_beginclick_winsafe: [0, 983],
        wx_android_downyyb_beginclick_update: [0, 984],
        wx_android_downyyb_removeclick: [0, 856],
        wx_android_downyyb_removeclick_safe: [0, 985],
        wx_android_downyyb_removeclick_winsafe: [0, 986],
        wx_android_downyyb_removeclick_update: [0, 987],
        wx_android_createdownyyb_fail_safe: [0, 1017],
        wx_android_createdownyyb_fail_winsafe: [0, 1018],
        wx_android_createdownyyb_fail_update: [0, 1019],
        wx_android_downyyb_fail: [0, 859],
        wx_android_downyyb_fail_safe: [0, 995],
        wx_android_downyyb_fail_winsafe: [0, 996],
        wx_android_downyyb_fail_update: [0, 997],
        wx_android_downyyb_finish: [0, 860],
        wx_android_downyyb_finish_safe: [0, 991],
        wx_android_downyyb_finish_winsafe: [0, 992],
        wx_android_downyyb_finish_update: [0, 994],
        wx_android_yyb_installing: [0, 861],
        wx_android_yyb_finish_install: [0, 862],
        wx_android_downapp_jumppagepv: [1, 964],
        wx_android_downapp_cancelclick: [0, 968],
        wx_android_downapp_beginclick: [0, 965],
        wx_android_downapp_removeclick: [0, 966],
        wx_android_downapp_finish: [0, 967],
        wx_android_downapp_fail: [0, 1011],
        wx_android_write_commdata: [0, 1005],
        wx_android_write_commdata_suc: [0, 1006],
        wx_android_write_commdata_fail: [0, 1007],
        wx_android_callscheme: [0, 1008],
        wx_android_callscheme_suc: [0, 1009],
        wx_android_callscheme_fail: [0, 1010],
        mqq_android_pagepv: [1, 1013],
        mqq_android_downapp_finish: [0, 971],
        mqq_android_noyyb_pagepv: [1, 744],
        mqq_android_noyyb_ndclick: [0, 754],
        mqq_android_noyyb_fdclick: [0, 745],
        mqq_android_noyyb_nuclick: [0, 747],
        mqq_android_noyyb_fuclick: [0, 2151],
        mqq_android_noyyb_opclick: [0, 746],
        mqq_android_noyyb_poppv: [1, 2159],
        mqq_android_noyyb_popndclick: [0, 2160],
        mqq_android_noyyb_popfdclick: [0, 2161],
        mqq_android_noyyb_poposclick: [0, 2263],
        mqq_android_noyyb_popclsclick: [0, 2262],
        mqq_android_noyyb_couponclick: [0, 2186],
        mqq_android_noyyb_giftclick: [0, 2187],
        mqq_android_noyyb_giftmoreclick: [0, 2188],
        mqq_android_noyyb_commentmoreclick: [0, 2189],
        mqq_android_yyb_pagepv: [1, 748],
        mqq_android_yyb_fdclick: [0, 749],
        mqq_android_yyb_fuclick: [0, 751],
        mqq_android_yyb_opclick: [0, 750],
        mqq_android_yyb_couponclick: [0, 2191],
        mqq_android_yyb_giftclick: [0, 2192],
        mqq_android_yyb_giftmoreclick: [0, 2193],
        mqq_android_yyb_commentmoreclick: [0, 2194],
        mqq_ios_pagepv: [1, 752],
        mqq_ios_fastclick: [0, 999],
        mqq_android_downyyb_beginclick: [0, 867],
        mqq_android_downyyb_finish: [0, 868],
        mqq_android_downyyb_fail: [0, 869],
        mqq_android_downyyb_removeclick: [0, 870],
        mqq_android_yyb_finish_install: [0, 871],
        mtt_android_pagepv: [1, 1014],
        mtt_android_noyyb_pagepv: [1, 640],
        mtt_android_noyyb_ndclick: [0, 650],
        mtt_android_noyyb_fdclick: [0, 2152],
        mtt_android_noyyb_nuclick: [0, 2153],
        mtt_android_noyyb_fuclick: [0, 658],
        mtt_android_noyyb_opclick: [0, 651],
        mtt_android_noyyb_poppv: [1, 2170],
        mtt_android_noyyb_popndclick: [0, 2171],
        mtt_android_noyyb_popfdclick: [0, 2172],
        mtt_android_noyyb_popclsclick: [0, 2173],
        mtt_android_noyyb_poposclick: [0, 2174],
        mtt_android_noyyb_couponclick: [0, 2196],
        mtt_android_noyyb_giftclick: [0, 2197],
        mtt_android_noyyb_giftmoreclick: [0, 2198],
        mtt_android_noyyb_commentmoreclick: [0, 2199],
        mtt_android_yyb_pagepv: [1, 641],
        mtt_android_yyb_fdclick: [0, 652],
        mtt_android_yyb_fuclick: [0, 657],
        mtt_android_yyb_opclick: [0, 653],
        mtt_android_yyb_couponclick: [0, 2201],
        mtt_android_yyb_giftclick: [0, 2202],
        mtt_android_yyb_giftmoreclick: [0, 2203],
        mtt_android_yyb_commentmoreclick: [0, 2204],
        mtt_bannerpv: [1, 2167],
        mtt_banner_ndclick: [0, 2168],
        mtt_ios_pagepv: [1, 645],
        mtt_ios_fastclick: [0, 1e3],
        other_browser_android_pagepv: [1, 1015],
        other_android_pagepv: [1, 642],
        other_android_noschema_pagepv: [1, 962],
        other_android_ndclick: [0, 2154],
        other_android_fdclick: [0, 2155],
        other_android_poppv: [1, 2162],
        other_android_popndclick: [0, 2163],
        other_android_popfdclick: [0, 2164],
        other_android_popclsclick: [0, 2265],
        other_android_poposclick: [0, 2266],
        other_android_couponclick: [0, 2206],
        other_android_giftclick: [0, 2207],
        other_android_giftmoreclick: [0, 2208],
        other_android_commentmoreclick: [0, 2209],
        other_ios_pagepv: [1, 643],
        other_ios_fastclick: [0, 1002],
        other_pc_pagepv: [1, 654],
        other_bannerpv: [1, 2165],
        other_banner_ndclick: [0, 2166],
        other_opendialog_pv: [1, 969],
        other_opendialog_okclick: [0, 970],
        yyb_app_reccard_click: [1, 885],
        yyb_noapp_reccard_click: [1, 884],
        noyyb_app_reccard_click: [1, 887],
        noyyb_noapp_reccard_click: [1, 886],
        yyb_app_reccard_pv: [0, 881],
        yyb_noapp_reccard_pv: [0, 880],
        noyyb_app_reccard_pv: [0, 883],
        noyyb_noapp_reccard_pv: [0, 882],
        ios_toptips_pv: [1, 1004],
        wx_android_noyyb_noapp_autodownloaddialog_pv: [0, 947],
        wx_android_noyyb_noapp_autodownloaddialog_okclick: [1, 948],
        wx_android_noyyb_noapp_autodownloaddialog_cancleclick: [1, 949],
        wx_android_noyyb_app_topenpage: [1, 963],
        wx_android_noyyb_app_update_tbspopwin_pv: [1, 974],
        wx_android_noyyb_app_update_guidepopwin_pv: [1, 975],
        openpage_wx_tbs_popwin_pv: [1, 973],
        openpage_wx_tbs_open_click: [0, 972],
        openpage_pv: [1, 976],
        android_noyyb_noapp_checkbox_click_ndclick: [0, 1025],
        wx_android_noyyb_noapp_small_btn_fdclick: [0, 1029],
        wx_android_noyyb_notbs_app_qb_pv: [1, 1034],
        wx_android_noyyb_notbs_app_noqb_dialog_pv: [1, 1035],
        wx_android_noyyb_notbs_app_noqb_dialog_click: [0, 1036],
        wx_android_noyyb_notbs_app_noqb_dclick: [0, 1037],
        wx_android_noyyb_tbs_app_qb_pv: [1, 1038],
        wx_android_noyyb_noapp_activitycard_pv: [1, 1030],
        wx_android_noyyb_noapp_activitycard_click: [0, 1031],
        wx_android_yyb_noapp_activitycard_pv: [1, 1032],
        wx_android_yyb_noapp_activitycard_click: [1, 1033],
      },
      u = "";
    function w() {
      if (i) return i;
      var e = l("fromcase");
      if (!e)
        switch (window.templateId) {
          case 0:
            e = 50001;
            break;
          case 1:
            e = 50002;
            break;
          case 2:
            e = 50003;
            break;
          case 3:
            e = 50004;
            break;
          default:
            e = 50005;
        }
      return (i = e), e;
    }
    function f() {
      if (a) return a;
      var e,
        n,
        t,
        o = location.pathname;
      return (
        (n = o.lastIndexOf("/")) || (n = 0),
        (n = o.lastIndexOf("/") + 1),
        (e = (t = o.lastIndexOf(".")) <= n ? o.slice(n) : o.slice(n, t)),
        (a = e),
        e
      );
    }
    function m(e, n) {
      var t = p[e];
      t &&
        (function (e, n, t) {
          var o,
            i,
            a = {};
          window.APPCONFIG && window.APPCONFIG.app
            ? ((a.appId = window.APPCONFIG.app.appId),
              (a.apkId = window.APPCONFIG.app.apkId),
              (a.appChannel = window.APPCONFIG.app.appChannel))
            : window.AppInfoData &&
              window.AppInfoData.appDetail &&
              ((a.appId = window.AppInfoData.appDetail.appId),
              (a.apkId = window.AppInfoData.appDetail.apkId),
              (a.appChannel = window.AppInfoData.appDetail.channel)),
            (i = {
              page: f(),
              fromcase: w(),
              type: e,
              id: n,
              appid: a.appId || "",
              apkid: a.apkId || "",
              channelId: a.appChannel || "",
              traceId: u,
              r: Math.random(),
            }),
            (i = $.extend(i, t || {})),
            (o = ""
              .concat(window.LC.BaseUrl, "/ajax/log/ActionLog?")
              .concat(d(i))),
            $.get(o, function () {});
        })(t[0], t[1], n);
    }
    function g(e, n) {
      c(
        "https://microdownloadreport.3g.qq.com/api/topCp?appid="
          .concat(n, "&msg=")
          .concat(e)
      );
    }
    function h(e) {
      c(
        "https://microdownloadreport.3g.qq.com/api/createDownload?msg=".concat(
          e
        )
      );
    }
    function v(e) {
      c("https://microdownloadreport.3g.qq.com/api/installApp?msg=".concat(e));
    }
    function _(e) {
      c("https://microdownloadreport.3g.qq.com/api/callScheme?msg=".concat(e));
    }
    function b() {
      m(
        s.browser.wechat
          ? "wx_android_pagepv"
          : s.browser.mqq
          ? "mqq_android_pagepv"
          : s.browser.qqbrowser
          ? "mtt_android_pagepv"
          : "other_browser_android_pagepv"
      );
    }
    function y() {
      s.browser.wechat
        ? m("wx_ios_pagepv")
        : s.browser.mqq
        ? m("mqq_ios_pagepv")
        : s.browser.qqbrowser
        ? m("mtt_ios_pagepv")
        : m("other_ios_pagepv");
    }
    u ||
      (u = ""
        .concat(Date.now())
        .concat(
          (Math.ceil(2147483647 * Math.random()) *
            new Date().getUTCMilliseconds()) %
            1e10
        )),
      (window.reportWxJsAPIErrMsg = function () {}),
      (window.reportTopCpCreateDownload = g),
      (window.reportCreateDownload = h),
      (window.reportInstallApp = v),
      (e.exports = {
        report: m,
        reportExtData: function (e) {
          var n = "",
            t = "";
          window.APPCONFIG && window.APPCONFIG.app
            ? (n = window.APPCONFIG.app.appId)
            : window.AppInfoData &&
              window.AppInfoData.appDetail &&
              (n = window.AppInfoData.appDetail.appId),
            window.APPCONFIG && window.APPCONFIG.appbao
              ? (t = window.APPCONFIG.appbao.g_f)
              : window.AppInfoData &&
                window.AppInfoData.baoPkg &&
                (t = window.AppInfoData.baoPkg.channel);
          var o = {
              traceId: u,
              appid: n || "",
              g_f: t || "",
              jsonStr: e,
              r: Math.random(),
            },
            i = ""
              .concat(window.LC.BaseUrl, "/ajax/log/CallExtLog?")
              .concat(d(o));
          $.get(i, function () {});
        },
        reportAppCheck: function (e, n) {
          c(
            "https://microdownloadreport.3g.qq.com/api/appCheck?msg="
              .concat(e, "&cost=")
              .concat(n)
          );
        },
        reportWriteData: function (e) {
          c(
            "https://microdownloadreport.3g.qq.com/api/writeData?msg=".concat(e)
          );
        },
        reportTopCpCreateDownload: g,
        reportCreateDownload: h,
        reportDownloadApp: function (e) {
          var n = s.browser.version;
          c(
            "https://microdownloadreport.3g.qq.com/api/downloadApp?code="
              .concat(e, "&version=")
              .concat(n)
          );
        },
        reportInstallApp: v,
        reportGetTbsStack: function (e, n) {
          c(
            "https://microdownloadreport.3g.qq.com/api/getTbsStackInfo?code="
              .concat(n, "&msg=")
              .concat(e)
          );
        },
        reportCallScheme: _,
        actionTraceId: u,
        reportPagePvInAndroid: b,
        reportPagePvInIos: y,
        reportPagePv: function () {
          s.os.android ? b() : s.os.ios ? y() : m("other_pc_pagepv");
        },
        reportWxCallScheme: function (e) {
          s.browser.wechat &&
            (m("wx_android_callscheme"),
            "object" !== o(e) || "launchApplication:ok" !== e.err_msg
              ? m("wx_android_callscheme_fail")
              : m("wx_android_callscheme_suc"),
            e && _(e.err_msg));
        },
        getPageName: f,
        getFromcase: w,
      });
  },
  function (e, n, t) {
    var o = t(0),
      i = o.isUseHttpsForWX,
      a = o.getQuery,
      r = o.greaterThanOrEqual,
      s = 20001 == a("fromcase"),
      c = a("isreload"),
      d = $.fn.cookie("scenevia") || a("scenevia").toUpperCase(),
      l = $.fn.cookie("skip");
    $.fn.cookie("scenevia", null, {
      path: "/",
      domain:
        location.host.indexOf("app.qq.com") > -1 ? "app.qq.com" : "3g.qq.com",
    }),
      $.fn.cookie("skip", null, {
        path: "/",
        domain:
          location.host.indexOf("app.qq.com") > -1 ? "app.qq.com" : "3g.qq.com",
      });
    var p = {
        isCpQQDownloader: !1,
        isCpInnerApp: !1,
        isCpQQDownloaderForKingCard: !1,
      },
      u = { text: "", logo: "" };
    e.exports = {
      isForKingCard: s,
      sceneVia: d,
      isAutoDownAndCloseWin: l,
      isPageReloaded: c,
      appExtInfo: p,
      wechatDownloadInfo: u,
      AppbaoNoSkipAuthorizeVersion: 743e4,
      qqdownloaderPkgName: "com.tencent.android.qqdownloader",
      recommendId: window.experimentInfo
        ? window.experimentInfo.recommendId
        : "0",
      experimentId: window.experimentInfo
        ? window.experimentInfo.experimentId
        : "0",
      experimentContent: window.experimentInfo
        ? window.experimentInfo.experimentContent
        : "",
      init: function (e) {
        var n,
          t,
          o,
          c,
          d,
          l = navigator.userAgent.match(/(?:V1_AND_SQ_|QQ\/)([\d.]+)/);
        l && l[1] && (d = r(void 0, "5.6.0")),
          (d = (a("usehttps") && d) || i()),
          e &&
            ((n = e.appDetail || null),
            (t = e.baoPkg || null),
            (o = e.appExt || {}),
            (c = e.identityInfo || {})),
          e &&
            n &&
            t &&
            ((p.isCpInnerApp = 1 == a("forinnersoft") && 1 == e.isInnerSoft),
            (p.isCpQQDownloader =
              "com.tencent.android.qqdownloader" == n.packageName),
            p.isCpQQDownloader &&
              (p.isCpQQDownloaderForKingCard = 20002 == a("fromcase")),
            u.text ||
              ((u.text = (
                c.yybConfirmPageText || "您需要先安装官方安全下载器（应用宝）"
              ).replace("{appName}", n.appName)),
              s && (u.text = "您需要先安装大王卡免流商店（应用宝）")),
            u.logo ||
              (u.logo = c.yybConfirmPageUseCpLogo
                ? n.iconUrl.replace(/96$/, "")
                : c.yybLogo),
            (window.APPCONFIG = {
              g_tk: e.g_tk,
              app: {
                appName: n.appName,
                appId: n.appId,
                apkId: n.apkId,
                appChannel: n.channel || "",
                packageName: n.packageName,
                sigMd5: [].concat(n.signatureMd5, o ? o.signatures : null),
                iosUrl: o.iosUrl,
                versionCode: n.versionCode,
                versionName: n.versionName,
                relatedPkgList: c.relatedPkgList || [],
              },
              appbao: {
                appbaoPkg: "com.tencent.android.qqdownloader",
                appbaoUrl: (d ? t.https_url : "") || t.url || "",
                appbaoMd5: t.md5,
                appbaoMd5ForHttps: t.md5,
                appbaoName: "应用宝",
                g_f: t.channel || "",
              },
              identityInfo: c || {},
            }));
      },
    };
  },
  function (e, n, t) {
    var o = t(1),
      i = t(0),
      a = t(4),
      r = t(5),
      s = t(2),
      c = a.reportAppCheck,
      d = i.debug,
      l = { yybVersion: 0, cpAppVersion: 0 };
    function p(e, n) {
      function t(e, t, o) {
        s.endAndReportSampleData({
          eventName: "".concat(s.clientApiEventName.checkAppState),
          eventExtInfo: t,
        }),
          n(e, t, o);
      }
      s.start("".concat(s.clientApiEventName.checkAppState)),
        o.os.android &&
        window.JsBridge &&
        window.JsBridge.getAppInstalledVersion
          ? (function (e, n) {
              var t = Date.now(),
                i = 0;
              window.JsBridge.getAppInstalledVersion(e, function (e, a) {
                if (
                  ((i = Date.now() - t),
                  d(
                    "[download/common.js] getAppInstalledVersion: "
                      .concat(JSON.stringify(e), ", msg: ")
                      .concat(JSON.stringify(a), ", costTime:")
                      .concat(i)
                  ),
                  a && o.browser.wechat)
                ) {
                  var r = "get_install_state:ok";
                  for (var s in a)
                    "get_install_state:ok" !== a[s] && (r = a[s]);
                  a = r;
                }
                n(e, a, i);
              });
            })(e, t)
          : o.os.android &&
            o.browser.qqbrowser &&
            o.browser.version &&
            i.compareVersion(o.browser.version, "5.0") >= 0
          ? (function (e, n) {
              for (
                var t,
                  o = {},
                  i = [],
                  a = Date.now(),
                  r = 0,
                  s = function (t) {
                    var s;
                    try {
                      "string" == typeof (s = JSON.parse(t || "{}")) &&
                        (s = JSON.parse(s || "{}"));
                    } catch (e) {
                      d(e);
                    }
                    if (
                      ((o[s.packagename] = s.versioncode),
                      i.push(s.packagename),
                      i.length >= e.length)
                    ) {
                      if (
                        ((r = Date.now() - a),
                        d(
                          "[download/common.js] getApkInfo: "
                            .concat(JSON.stringify(o), ", costTime: ")
                            .concat(r)
                        ),
                        !n)
                      )
                        return;
                      n(o, "", r);
                    }
                  },
                  c = 0,
                  l = e.length;
                c < l;
                c++
              ) {
                t = e[c];
                try {
                  if (!window.browser) return;
                  if (!window.browser.app) return;
                  window.browser.app.getApkInfo(s, t);
                } catch (e) {
                  d(
                    "[download/installation.js] error: ".concat(e.message),
                    e.stack
                  ),
                    s(JSON.stringify({ packagename: t }));
                }
              }
            })(e, t)
          : n({}, "", 0, Date.now(), Date.now());
    }
    e.exports = {
      check: function (e, n) {
        var t = [r.qqdownloaderPkgName];
        e !== r.qqdownloaderPkgName && t.push(e),
          d("[download/installation.js] pkgs: ".concat(JSON.stringify(t))),
          p(t, function (t, i, a) {
            (l.cpAppVersion = t[e] || 0),
              (l.yybVersion = t[r.qqdownloaderPkgName] || 0),
              d(
                "[download/installation.js] check result: ".concat(
                  JSON.stringify(l)
                )
              ),
              i && o.browser.wechat && c(i, a),
              n && n(l.yybVersion, l.cpAppVersion, i, a);
          });
      },
      getCache: function () {
        return l;
      },
      setYybVersion: function (e) {
        l.yybVersion = e;
      },
      setCpAppVersion: function (e) {
        l.cpAppVersion = e;
      },
      checkAppState: p,
    };
  },
  function (e, n, t) {
    var o = t(0).formatProtocol;
    e.exports = {
      initImgSlide: function (e) {
        var n = $(e.imgBoxSelector),
          t = n.find(e.imgScrollBarSelector || ".mod-scroll-bar .scroll"),
          o = n.children("ul");
        new UI.Slide(
          n[0],
          o[0],
          function (e, o, i, a) {
            var r = Math.floor((100 * i) / o) + "%",
              s = "translate3d(" + Math.round((100 * a) / i) + "%,0,0)";
            t.css({ width: r, transform: s, "-webkit-transform": s }),
              n.find(".lazyload").length &&
                setTimeout(function () {
                  n.find(".lazyload").scrollLoading({});
                }, 800);
          },
          !0
        );
      },
      setBlurBg: function (e) {
        e = o(e);
        var n = document.body.clientWidth,
          t = e,
          i = document.getElementById("headerPicBg");
        (i.style.width = n + "px"), (i.style.height = n + "px");
        var a = document.createElement("div"),
          r =
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" width="100%" height="100%"><defs><filter id="topBlur"><feGaussianBlur stdDeviation="12" /></filter></defs><image xlink:href="' +
            t +
            '" x="0" y="0" height="' +
            n +
            '" width="' +
            n +
            '" filter="url(#topBlur)" /></svg>';
        (a.innerHTML = r),
          i.appendChild(a),
          (i.style["background-image"] = "url(" + e + ")"),
          (i.style["-webkit-background-size"] = "cover"),
          (i.style["background-size"] = "cover");
      },
      resetHeaderPig: function () {
        var e = document.getElementById("headerWhiteBg"),
          n = document.getElementById("headerPicBg"),
          t = document.body.clientWidth;
        (e.style.width = t + "px"),
          (n.style.width = t + "px"),
          (n.style.height = t + "px");
      },
      drawCanvas: function () {
        var e = document.body.clientWidth,
          n = 166;
        window.AppInfoData &&
          window.AppInfoData.grayInfo &&
          (4 == window.AppInfoData.grayInfo.testId ||
            5 === window.AppInfoData.grayInfo.testId) &&
          (n = 195);
        var t = document.getElementById("headerWhiteBg");
        (t.style.width = e + "px"),
          (t.style.height = n + "px"),
          (t.width = e),
          (t.height = n);
        var o = t.getContext("2d");
        o.moveTo(0, 41),
          o.lineTo(parseInt(e / 2), 0),
          o.lineTo(e, 41),
          o.closePath(),
          (o.fillStyle = "#ffffff"),
          o.fill(),
          (o.lineWidth = 1),
          (o.strokeStyle = "#ffffff"),
          o.stroke(),
          o.beginPath(),
          o.moveTo(0, 41),
          o.lineTo(e, 41),
          o.lineTo(e, n),
          o.lineTo(0, n),
          o.closePath(),
          (o.fillStyle = "#ffffff"),
          o.fill(),
          (o.lineWidth = 1),
          (o.strokeStyle = "#ffffff"),
          o.stroke();
      },
      showWxGuide: function () {
        0 == $(".j-guide").length &&
          ($(document.body).append(
            '<div class="j-guide" style="position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.8);z-index: 99;">      <img style="width: 220px;position: absolute;top: 13px;right: 24px;"           src="https://cms.gtimg.com/android_cms/micro/openmasktip.png">      </div>'
          ),
          setTimeout(function () {
            $(".j-guide").on("touchmove", function (e) {
              e.stopPropagation(), e.preventDefault();
            });
          }, 0));
      },
    };
  },
  function (e, n) {
    e.exports = {
      updateDownBtn: function (e, n, t) {
        window.page &&
          (window.page.updateDownBtn(e, n, t),
          window.cp && window.cp.updateBtn(e));
      },
    };
  },
  function (e, n, t) {
    var o,
      i = t(0),
      a = t(1),
      r = i.getQuery,
      s = {};
    (s.winStyleType = -1),
      (s.useTbsPopWin = !(
        !(o = window.AppInfoData) ||
        !o.identityInfo ||
        1 != o.identityInfo.recmdQQBrowserFlag ||
        !(
          a.os.android &&
          a.browser.wechat &&
          window.tbs_bridge &&
          window.tbs_bridge.nativeExec
        )
      )),
      (s.isInTbs = function () {
        return !(!window.tbs_bridge || !window.tbs_bridge.nativeExec);
      }),
      (s.showPopWin = function (e, n, t, o) {
        if (s.useTbsPopWin) {
          var i,
            a = $.extend({ posId: e }, n);
          if (
            (i =
              location.host.indexOf("cs0309") > -1 && r("tbsfail")
                ? "{code: -1}"
                : window.tbs_bridge.nativeExec(
                    "ug",
                    "showBrowserListDialog",
                    -1,
                    JSON.stringify(a)
                  ))
          )
            try {
              i = JSON.parse(i);
            } catch (e) {
              console.error(e);
            }
          i && i.code >= 0
            ? ((s.winStyleType = i.type), t && t())
            : ((s.useTbsPopWin = !1), o && o());
        } else o && o();
      }),
      (e.exports = s);
  },
  function (e, n) {
    e.exports = { CP_CONTEXT: { YYB: "yyb", OTHER: "other" } };
  },
  function (e, n, t) {
    var o = t(5),
      i = t(2);
    function a() {
      $("#normaldialog").addClass("invisible"), $("#normaldialog").hide();
    }
    e.exports = {
      init: function () {
        o.isForKingCard &&
          ($("#normalDownDialogTips").text(
            "（如果您是大王卡用户，建议选择免流下载）"
          ),
          $("#normalOpenDialogFastDownBtn").text("免流下载"));
      },
      show: function (e) {
        (e = e || {}),
          $("#normaldialog .appname").text(e.appname || ""),
          $(".mod-dialog")
            .off("click")
            .on("click", function (e) {
              e.stopPropagation();
            }),
          $("#normaldialog .btn-ok")
            .off("click")
            .on(
              "click",
              e.ok ||
                function () {
                  a();
                }
            ),
          $("#normaldialog .btn-cancel")
            .off("click")
            .on(
              "click",
              e.cancel ||
                function () {
                  a();
                }
            ),
          $("#normaldialog .btn-close")
            .off("click")
            .on("click", function () {
              if (e.close && !e.close()) return;
              i.report({
                eventName:
                  i.clickBtnEventName.normalDownloadConfirmDialogCloseBtn,
                eventResult: i.clickActionEventResult.close,
              }),
                a();
            }),
          $("#normaldialog")
            .off("click")
            .on("click", function () {
              if (e.outSideTouch && !e.outSideTouch()) return;
              i.report({
                eventName:
                  i.clickBtnEventName.normalDownloadConfirmDialogCloseOutTouch,
                eventResult: i.clickActionEventResult.close,
              }),
                a();
            }),
          $("#normaldialog").removeClass("invisible"),
          $("#normaldialog").show();
      },
      hide: a,
    };
  },
  function (e, n, t) {
    var o;
    function i(e, n, t) {
      return (
        n in e
          ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = t),
        e
      );
    }
    var a = t(6),
      r = t(1),
      s = t(0),
      c = t(4),
      d = t(3),
      l = t(9),
      p = t(2),
      u = t(7),
      w = t(5),
      f = t(10),
      m = t(11),
      g = t(13),
      h = t(14),
      v = t(3),
      _ = v.isYybSupportMidPage,
      b = v.isAppNeedUpdate,
      y = window.AppInfoData && window.AppInfoData.appDetail,
      D = window.AppInfoData && window.AppInfoData.identityInfo,
      A = c.report,
      E = s.compareVersion,
      k = d.getAppAndroidScheme,
      T = d.getAppDownloadUrl,
      N = d.callYybMidPage,
      S = d.openApp,
      C = u.showWxGuide,
      I = s.getQuery,
      x = !0,
      B = [],
      O = !1;
    function R() {
      if ((!y && !y.apkUrl) || (!r.browser.wechat && !r.browser.mqq)) return !1;
      var e = a.getCache(),
        n = e.yybVerison,
        t = e.cpAppVersion;
      return (
        !n &&
        !(t && E(t, y.versionCode) >= 0) &&
        !(!r.browser.wechat && !D.directDownloadFlag)
      );
    }
    var L =
      (i(
        (o = {}),
        JsBridge.Download.STATE_DOWNLOADING,
        "wx_android_downapp_beginclick"
      ),
      i(o, JsBridge.Download.STATE_REMOVED, "wx_android_downapp_removeclick"),
      i(o, JsBridge.Download.STATE_CANCAL, "wx_android_downapp_cancelclick"),
      i(o, JsBridge.Download.STATE_FAILED, "wx_android_downapp_fail"),
      i(o, JsBridge.Download.STATE_DOWNLOADED, "wx_android_downapp_finish"),
      o);
    var q = {
      downloadInstance: null,
      curState: JsBridge.Download.STATE_READY,
      downloadInstanceCreated: !1,
      $normalBtn: $("#btn-normal-download"),
      autoOpenAppInWechatOnce: function () {
        O ||
          ((O = !0),
          d.isYybSupportMidPage(a.getCache().yybVersion)
            ? N(d.getAppAndroidScheme(), y.versionCode, "BBTN")
            : (!s.monitorNoTbs() && l.useTbsPopWin) || !g.whetherToShow()
            ? (A("wx_android_noyyb_app_topenpage"),
              p.report({ eventName: p.autoEventName.jumpToOpenPage }),
              setTimeout(function () {
                location.href = "/dom/micro/open.jsp" + location.search;
              }, 350))
            : g.getQbVersion()
            ? (p.report({ eventName: p.autoEventName.openQQBrowser }),
              g.openQQBrowser())
            : (p.report({ eventName: p.autoEventName.showRcmdQbDialog }),
              g.show()));
      },
      whetherHideNormalBtn: function (e) {
        var n = a.getCache(),
          t = n.yybVersion,
          o = n.cpAppVersion;
        return (
          !(!w.appExtInfo.isCpInnerApp && !w.appExtInfo.isCpQQDownloader) ||
          !!s.isAdScene() ||
          ("open" == e
            ? !(r.browser.wechat && o && !_(t))
            : "iosdown" == e ||
              "loading" == e ||
              ("update" != e && (!!I("hideNormalBtn") || t)))
        );
      },
      init: function () {
        this.updateBtn(), this.bind();
      },
      initDownload: function () {
        var e = this;
        if (R() && !this.downloadInstance) {
          var n = y.iconUrl;
          n && (n = n.replace(/\/96$/, "/128")),
            (this.downloadInstance = new JsBridge.Download(
              {
                sngAppId: D.openAppId,
                hnAppId: y.appId,
                versionCode: y.versionCode,
                url: y.apkUrl.replace("hsr=4d5s", "hsr=e6cf"),
                packageName: y.packageName,
                alias: y.appName,
                md5: y.apkMd5,
                thumb_url: n,
                title: y.appName,
              },
              function (n, t, o, i) {
                p.reportKeyDownloadEvent(
                  p.downloadEvent.eventScene.cpApp,
                  0,
                  n,
                  i
                ),
                  (e.curState = n),
                  e.downloadInstanceCreated ||
                    ((e.downloadInstanceCreated = !0),
                    p.report({
                      eventName: p.keyEventName.cpAppDownloadInstanceCreated,
                      eventStartTime: p.pageStartTime,
                      eventEndTime: Date.now(),
                    })),
                  e.updateBtn(),
                  n == JsBridge.Download.STATE_DOWNLOADED &&
                    setTimeout(function () {
                      e.downloadInstance.install();
                    }, 500);
              }
            ));
        }
      },
      getBtnText: function (e, n) {
        return n ? (e ? "安全打开" : "打开") : "其他下载方式";
      },
      singleNormalBtnInWechat: function () {
        this.$normalBtn.addClass("safe-open is-open").html("打开");
      },
      onUpdate: function (e, n) {
        return void 0 !== n && n >= 0 && n < B.length
          ? ((B[n] = e), n)
          : (B.push(e), B.length - 1);
      },
      updateBtn: function (e) {
        var n = this,
          t = this.$normalBtn,
          o = $("#btn-fast-download");
        e && (this.whetherHideNormalBtn(e) ? t.hide() : t.show());
        var i = a.getCache(),
          s = i.yybVersion,
          c = i.cpAppVersion,
          d = this.getBtnText(s, c);
        switch (
          (c && (this.curState = JsBridge.Download.STATE_INSTALLED),
          c ||
            this.curState != JsBridge.Download.STATE_INSTALLED ||
            (this.curState = JsBridge.Download.STATE_READY),
          !r.browser.wechat || b(c, y.versionCode) || _(s)
            ? t.removeClass("safe-open is-open")
            : this.singleNormalBtnInWechat(),
          this.curState)
        ) {
          case JsBridge.Download.STATE_DOWNLOADED:
            t.text(d).removeClass("downloading is-disable safe-open"), o.show();
            break;
          case JsBridge.Download.STATE_INSTALLING:
            t.text(d).removeClass("downloading is-disable safe-open");
            break;
          case JsBridge.Download.STATE_DOWNLOADING:
            t
              .addClass("downloading is-disable")
              .text("正在下载...")
              .removeClass("safe-open"),
              $(".d-btns-tips").hide(),
              o.hide();
            break;
          case JsBridge.Download.STATE_INSTALLED:
            t.text(d).removeClass("is-disable").addClass("safe-open");
            break;
          case JsBridge.Download.STATE_FAILED_OF_SDCARD:
          case JsBridge.Download.STATE_REMOVED:
          case JsBridge.Download.STATE_FAILED:
            t.text(d).removeClass("downloading is-disable"),
              o.show(),
              c ? t.addClass("safe-open") : t.removeClass("safe-open");
            break;
          case JsBridge.Download.STATE_CANCAL:
          case JsBridge.Download.STATE_READY:
          case JsBridge.Download.STATE_PAUSED:
          default:
            t.text(d).removeClass("downloading is-disable"),
              c ? t.addClass("safe-open") : t.removeClass("safe-open");
        }
        B.length > 0 &&
          B.forEach(function (t) {
            t(e, n.curState);
          });
      },
      doAction: function () {
        var e = this;
        try {
          d.copyToClipboard(d.getAppAndroidScheme());
        } catch (e) {
          s.debug(e);
        }
        if (r.browser.qqbrowser) {
          new h({ cpContext: f.CP_CONTEXT.OTHER }).startDownloadTask();
        } else {
          if (!this.downloadInstance) {
            var n = T();
            return (
              r.browser.wechat && n && (n = n.replace("hsr=4d5s", "hsr=e6cf")),
              p.report({
                eventName: p.clickBtnEventName.normalBtn,
                eventResult: p.clickActionEventResult.downloadCpApp,
                eventExtInfo: n,
              }),
              void setTimeout(function () {
                location.href = n;
              }, 500)
            );
          }
          switch (this.curState) {
            case JsBridge.Download.STATE_DOWNLOADED:
              setTimeout(function () {
                e.downloadInstance.install();
              }, 500);
              break;
            case JsBridge.Download.STATE_INSTALLING:
            case JsBridge.Download.STATE_DOWNLOADING:
            case JsBridge.Download.STATE_INSTALLED:
              break;
            case JsBridge.Download.STATE_FAILED_OF_SDCARD:
              alert(
                "下载失败，请关闭USB数据存储或者插入SD卡或者将手机与电脑断开连接。"
              );
              break;
            case JsBridge.Download.STATE_REMOVED:
            case JsBridge.Download.STATE_CANCAL:
            case JsBridge.Download.STATE_FAILED:
            case JsBridge.Download.STATE_READY:
            case JsBridge.Download.STATE_PAUSED:
            default:
              window.oneLog(function () {
                A("wx_android_downapp_jumppagepv");
              }, "wx_android_downapp_jumppagepv"),
                this.downloadInstance.start();
          }
        }
      },
      report: function () {
        this.curState != JsBridge.Download.STATE_DOWNLOADING
          ? ((x = !0),
            r.browser.wechat && L[this.curState] && A(L[this.curState]),
            r.browser.mqq &&
              this.curState == JsBridge.Download.STATE_DOWNLOADED &&
              A("mqq_android_downapp_finish"))
          : x && ((x = !1), r.browser.wechat && A(L[this.curState]));
      },
      bind: function () {
        var e = this;
        $("body").delegate("#btn-normal-download", "click", function () {
          var n = a.getCache().cpAppVersion;
          if (n || e.curState == JsBridge.Download.STATE_INSTALLED) {
            var t = k();
            return r.browser.wechat
              ? void (function (e) {
                  var n = a.getCache().yybVersion;
                  if (d.isYybSupportMidPage(n))
                    return (
                      A("wx_android_yyb_opsmallclick"),
                      p.report({
                        eventName: p.clickBtnEventName.normalBtn,
                        eventResult:
                          p.clickActionEventResult
                            .openCpAppByQQDownloaderMidPage,
                        eventExtInfo: e,
                      }),
                      void N(e, y.versionCode, "SBTN")
                    );
                  !s.monitorNoTbs() && l.useTbsPopWin
                    ? (A("wx_android_noyyb_hasapp_guideclick"),
                      p.report({
                        eventName: p.clickBtnEventName.normalBtn,
                        eventResult: p.clickActionEventResult.openTbsPopWindow,
                      }),
                      p.start(
                        "".concat(p.clientApiEventName.showBrowserListDialog)
                      ),
                      l.showPopWin(
                        1502,
                        {
                          checkInstall: !0,
                          openUrl: location.href,
                          pkgName: y.packageName,
                          appName: y.appName,
                          iconUrl: y.iconUrl,
                        },
                        function () {
                          p.endAndReportSampleData({
                            eventName: "".concat(
                              p.clientApiEventName.showBrowserListDialog
                            ),
                            eventResult: p.eventResult.success,
                          }),
                            p.report({ eventName: p.pvEventName.tbsPopWindow }),
                            A("wx_android_noyyb_app_update_tbspopwin_pv");
                        },
                        function () {
                          p.endAndReportSampleData({
                            eventName: "".concat(
                              p.clientApiEventName.showBrowserListDialog
                            ),
                            eventResult: p.eventResult.fail,
                          }),
                            g.whetherToShow()
                              ? g.getQbVersion()
                                ? g.openQQBrowser()
                                : g.show()
                              : (A(
                                  "wx_android_noyyb_app_update_guidepopwin_pv"
                                ),
                                C());
                        }
                      ))
                    : g.whetherToShow()
                    ? g.getQbVersion()
                      ? (p.report({
                          eventName: p.clickBtnEventName.normalBtn,
                          eventResult: p.clickActionEventResult.openQQBrowser,
                        }),
                        g.openQQBrowser())
                      : (p.report({
                          eventName: p.clickBtnEventName.normalBtn,
                          eventResult:
                            p.clickActionEventResult.showRcmdQbDialog,
                        }),
                        g.show())
                    : (A("wx_android_noyyb_hasapp_guideclick"),
                      p.report({
                        eventName: p.clickBtnEventName.normalBtn,
                        eventResult: p.clickActionEventResult.showOpenGuide,
                      }),
                      C(),
                      A("wx_android_noyyb_app_update_guidepopwin_pv"));
                })(t)
              : (p.report({
                  eventName: p.clickBtnEventName.normalBtn,
                  eventResult: p.clickActionEventResult.openCpApp,
                  eventExtInfo: t,
                }),
                void S(t, y.packageName));
          }
          if (!R() || e.downloadInstanceCreated) {
            var o = "other_android_ndclick";
            if (
              (r.browser.wechat
                ? (o =
                    E(n, y.versionCode) >= 0
                      ? "wx_android_noyyb_nuclick"
                      : "wx_android_noyyb_ndclick")
                : r.browser.mqq
                ? (o =
                    E(n, y.versionCode) >= 0
                      ? "mqq_android_noyyb_nuclick"
                      : "mqq_android_noyyb_ndclick")
                : r.browser.qqbrowser &&
                  (o =
                    E(n, y.versionCode) >= 0
                      ? "mtt_android_noyyb_nuclick"
                      : "mtt_android_noyyb_ndclick"),
              A(o),
              0 ==
                (1 != D.isIgnoreOpenWindow &&
                  !w.isAutoDownAndCloseWin &&
                  "com.tencent.news" != y.packageName &&
                  "com.tencent.reading" != y.packageName))
            )
              return (
                p.report({
                  eventName: p.specialEventName.noNormalDownloadConfirmDialog,
                  eventResult: ""
                    .concat(D.isIgnoreOpenWindow, "-")
                    .concat(w.isAutoDownAndCloseWin),
                }),
                p.report({
                  eventName: p.clickBtnEventName.normalBtn,
                  eventResult: p.clickActionEventResult.downloadCpApp,
                }),
                void q.doAction()
              );
            e.curState != JsBridge.Download.STATE_DOWNLOADING
              ? ((o = "other_android_poppv"),
                r.browser.wechat
                  ? (o = "wx_android_noyyb_poppv")
                  : r.browser.mqq
                  ? (o = "mqq_android_noyyb_poppv")
                  : r.browser.qqbrowser && (o = "mtt_android_noyyb_poppv"),
                A(o),
                p.report({
                  eventName: p.clickBtnEventName.normalBtn,
                  eventResult:
                    p.clickActionEventResult.showNormalDownloadConfirmWindow,
                }),
                m.show({
                  appname: y.appName,
                  ok: function () {
                    var n = "other_android_popndclick";
                    r.browser.wechat
                      ? (n = "wx_android_noyyb_popndclick")
                      : r.browser.mqq
                      ? (n = "mqq_android_noyyb_popndclick")
                      : r.browser.qqbrowser &&
                        (n = "mtt_android_noyyb_popndclick"),
                      A(n),
                      p.report({
                        eventName:
                          p.clickBtnEventName.normalDownloadConfirmDialogOkBtn,
                        eventResult: p.clickActionEventResult.downloadCpApp,
                      }),
                      m.hide(),
                      e.doAction();
                  },
                  cancel: function () {
                    var e = "other_android_popfdclick";
                    r.browser.wechat
                      ? (e = "wx_android_noyyb_popfdclick")
                      : r.browser.mqq
                      ? (e = "mqq_android_noyyb_popfdclick")
                      : r.browser.qqbrowser &&
                        (e = "mtt_android_noyyb_popfdclick"),
                      A(e),
                      p.report({
                        eventName:
                          p.clickBtnEventName
                            .normalDownloadConfirmDialogFastDownloadBtn,
                        eventResult:
                          p.clickActionEventResult.downloadQQDownloader,
                      }),
                      m.hide(),
                      (window.fastClickTrigger = !0),
                      r.os.android &&
                      (d.isWechatSupportVersion() || d.isMqqSupportVersion())
                        ? $(
                            "#btn-fast-download"
                          ).trigger(UI.EVENTS.touchstartEv(), [
                            "",
                            "",
                            p.eventExtPostion.CLICK_NORMALDIALOG_FAST_DOWNLOAD,
                          ])
                        : $("#btn-fast-download").trigger("click", [
                            p.eventExtPostion.CLICK_NORMALDIALOG_FAST_DOWNLOAD,
                          ]);
                  },
                  close: function () {
                    var e = "other_android_popclsclick";
                    return (
                      r.browser.wechat
                        ? (e = "wx_android_noyyb_popclsclick")
                        : r.browser.mqq
                        ? (e = "mqq_android_noyyb_popclsclick")
                        : r.browser.qqbrowser &&
                          (e = "mtt_android_noyyb_popclsclick"),
                      A(e),
                      !0
                    );
                  },
                  outSideTouch: function () {
                    var e = "other_android_poposclick";
                    return (
                      r.browser.wechat
                        ? (e = "wx_android_noyyb_poposclick")
                        : r.browser.mqq
                        ? (e = "mqq_android_noyyb_poposclick")
                        : r.browser.qqbrowser &&
                          (e = "mtt_android_noyyb_poposclick"),
                      A(e),
                      !0
                    );
                  },
                }))
              : p.report({
                  eventName: p.clickBtnEventName.normalBtn,
                  eventResult: p.clickActionEventResult.none,
                });
          } else p.report({ eventName: p.clickBtnEventName.normalBtn, eventResult: p.clickActionEventResult.appSDKDownloaderInitNotFinish });
        });
      },
    };
    (window.cp = q), (e.exports = q);
  },
  function (e, n, t) {
    var o = t(6),
      i = t(2),
      a = t(0),
      r = t(3),
      s = t(4),
      c = t(1),
      d = t(37),
      l = t(4).report,
      p = $("#rcmdQbDialog"),
      u = "com.tencent.mtt",
      w =
        window.AppInfoData &&
        window.AppInfoData.appDetail &&
        window.AppInfoData.appDetail.appName,
      f = window.AppInfoData && window.AppInfoData.qqbrowserConfig;
    (f && f.app.appId) || (f = { app: {}, proportionOfRcmdDialog: 0 });
    var m = Math.random(),
      g = null,
      h = !1,
      v = !1,
      _ = !1,
      b = JsBridge.Download.STATE_READY,
      y = 0;
    function D() {
      return (
        100 == f.proportionOfRcmdDialog ||
        (!(f.proportionOfRcmdDialog <= 0) &&
          100 * m <= f.proportionOfRcmdDialog)
      );
    }
    function A(e) {
      o.checkAppState([u], function (n) {
        (y = n[u]), i.setQbVersion(y), e && e(y, n);
      });
    }
    function E() {
      g ||
        (g = new JsBridge.Download(
          {
            hnAppId: f.app.appId,
            versionCode: f.app.versionCode,
            url: f.app.apkUrl.replace("hsr=4d5s", "hsr=e6cf"),
            packageName: f.app.packageName,
            alias: f.app.appName,
            md5: f.app.apkMd5,
            thumb_url: f.app.iconUrl.replace(/\/96$/, "/128"),
            title:
              f.downloadTextInWechat.replace("{appName}", w) || f.app.appName,
          },
          function (e, n, t, o) {
            switch (
              ((b = e),
              i.reportKeyDownloadEvent(
                i.downloadEvent.eventScene.qqbrowser,
                0,
                e,
                o
              ),
              h || (h = !0),
              e != JsBridge.Download.STATE_DOWNLOADING ||
                _ ||
                ((_ = !0), s.report("wx_android_noyyb_notbs_app_noqb_dclick")),
              e)
            ) {
              case JsBridge.Download.STATE_FAILED:
              case JsBridge.Download.STATE_CANCAL:
              case JsBridge.Download.STATE_FAILED_OF_SDCARD:
              case JsBridge.Download.STATE_REMOVED:
              case JsBridge.Download.STATE_DOWNLOADED:
              case JsBridge.Download.STATE_INSTALLED:
                _ = !1;
            }
            e == JsBridge.Download.STATE_INSTALLED && N();
          }
        ));
    }
    function k() {
      window.WeixinJSBridge.invoke(
        "launch3rdApp",
        {
          appid: "wx64f9cf5b17af074d",
          packageName: u,
          signature: "d8391a394d4a179e6fe7bdb8a301258b",
          param: location.href,
          type: 1,
        },
        function (e) {
          var n = 0;
          !0 !== /launch_3rdApp:ok/gi.test(JSON.stringify(e)) && (n = -1),
            i.reportSampleData({
              eventName: i.clientApiEventName.startApp,
              eventExtInfo: u,
              eventResult: n,
            });
        }
      );
    }
    function T() {
      p.on("click", function () {
        p.hide();
      }),
        p.find(".mod-qbrcmd-content").on("click", function (e) {
          e.stopPropagation();
        }),
        $("#rcmdQbBtn").on("click", function () {
          a.copyToClipboard(f.clipboardData, function (e, n, t) {
            i.reportSampleData({
              eventName: i.clientApiEventName.copyToClipboard,
              eventResult: n,
              eventExtInfo: t || e,
            });
          });
          var e = i.clickActionEventResult.downloadQQBrowser;
          if (g) {
            switch (
              (s.report("wx_android_noyyb_notbs_app_noqb_dialog_click"),
              p.hide(),
              b)
            ) {
              case JsBridge.Download.STATE_INSTALLED:
                (e = i.clickActionEventResult.openQQBrowser),
                  setTimeout(function () {
                    k();
                  }, 100);
                break;
              case JsBridge.Download.STATE_DOWNLOADING:
                d.show("等待QQ浏览器下载完成，即可打开应用");
                break;
              default:
                setTimeout(function () {
                  g.doAction();
                }, 0);
            }
            i.report({
              eventName: i.clickBtnEventName.rcmdQQBrowserBtn,
              eventResult: e,
            });
          } else i.report({ eventName: i.clickBtnEventName.rcmdQQBrowserBtn, eventResult: i.clickActionEventResult.none });
        });
    }
    function N() {
      if (
        (i.report({ eventName: i.pvEventName.rcmdQbDialog }),
        l("wx_android_noyyb_notbs_app_noqb_dialog_pv"),
        !v)
      )
        return (
          (v = !0),
          E(),
          setTimeout(function () {
            p.show();
          }, 100),
          void T()
        );
      p.show();
    }
    c.os.android &&
      c.browser.wechat &&
      window.JsBridge &&
      window.JsBridge.onReady(function () {
        r.onPageResume(function () {
          A(function () {
            y || g || !D() || E();
          });
        });
      }),
      (e.exports = {
        whetherToShow: D,
        show: N,
        checkQQbrowserInstallation: A,
        getQbVersion: function () {
          return y;
        },
        openQQBrowser: k,
      });
  },
  function (e, n, t) {
    function o(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var a,
      r,
      s,
      c = t(3),
      d = t(5),
      l = t(15),
      p = t(6),
      u = t(0),
      w = t(4),
      f = t(1),
      m = t(7),
      g = t(2),
      h = t(8),
      v = t(16),
      _ = t(17),
      b = t(10),
      y = u.getQuery,
      D = u.compareVersion,
      A = u.copyToClipboard,
      E = u.debug,
      k = w.report,
      T = m.showWxGuide,
      N = c.isAppNeedUpdate,
      S = !1,
      C = (function () {
        function e() {
          var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          o(this, e),
            window.APPCONFIG &&
              ((this.fastClickTrigger = !1),
              (this.JsBridgecount = 0),
              (this.jsBridgeloader = { obj: null, state: "" }),
              (this.opt = n),
              (this.$btn = n.btn || $("#btn-fast-download")),
              (this.checkAppStatusTimer = null),
              n.cpContext === b.CP_CONTEXT.OTHER || u.isAdScene()
                ? this.setOtherData()
                : ((this.downloadParam = {}), this.setYYBData()));
        }
        var n, t, w;
        return (
          (n = e),
          (t = [
            {
              key: "init",
              value: function () {
                var e = window.APPCONFIG;
                ((a = e.appbao).appbaoUrlgtk = a.appbaoUrl),
                  (r = e.app),
                  (s = e.identityInfo),
                  this.beforeCreate(),
                  this.created();
              },
            },
            {
              key: "setYYBData",
              value: function () {
                var e = window.AppInfoData.baoPkg,
                  n = e.url,
                  t = e.md5,
                  o = e.size;
                this.setData({
                  url: n,
                  md5: t,
                  size: o,
                  name: "应用宝",
                  packageName: "com.tencent.android.qqdownloader",
                });
              },
            },
            {
              key: "setOtherData",
              value: function () {
                var e = window.AppInfoData.appDetail,
                  n = e.apkUrl,
                  t = e.apkMd5,
                  o = e.fileSize,
                  i = e.appName,
                  a = e.packageName;
                this.setData({
                  url: n,
                  md5: t,
                  size: o.bytes,
                  name: i,
                  packageName: a,
                });
              },
            },
            {
              key: "setData",
              value: function (e) {
                var n = e.url,
                  t = e.md5,
                  o = e.size,
                  i = e.name,
                  a = e.packageName;
                this.downloadParam = {
                  url: n,
                  md5: t,
                  size: o,
                  name: i,
                  packageName: a,
                };
              },
            },
            {
              key: "beforeCreate",
              value: function () {
                d.isPageReloaded && this.showReloadDialog(),
                  f.browser.yyb
                    ? this.openInYYB()
                    : d.appExtInfo.isCpInnerApp
                    ? this.openInInnerCp()
                    : f.os.ios
                    ? this.openInIos()
                    : f.os.android
                    ? this.openInMain()
                    : this.openInOther();
              },
            },
            { key: "created", value: function () {} },
            { key: "mounted", value: function () {} },
            {
              key: "openInMain",
              value: function () {
                var e = this;
                if (c.isWechatSupportVersion() || c.isMqqSupportVersion()) {
                  if (!window.JsBridge) return;
                  window.JsBridge.onReady(function () {
                    e.jsbridgeDownload(), e.mounted();
                  });
                } else
                  f.browser.qqbrowser &&
                  f.browser.version &&
                  D(f.browser.version, "5.0") >= 0 &&
                  c.isSupportAppOperationInMtt()
                    ? (e.mttDownload(), e.mounted())
                    : e.mounted();
              },
            },
            {
              key: "openInYYB",
              value: function () {
                var e = c.getTmast({ yybVersion: p.getCache().yybVersion });
                g.report({
                  eventName: g.autoEventName.openQQDownloaderForDownloadApp,
                  eventExtInfo: e,
                }),
                  c.callWithScheme(e);
              },
            },
            {
              key: "openInInnerCp",
              value: function () {
                l.init();
              },
            },
            {
              key: "openInIos",
              value: function () {
                var e = c.getAppIOSScheme();
                if (
                  (((e && f.browser.wechat) || y("debug")) &&
                    ($("body").addClass("ios"),
                    $(".ios-open-tips").show(),
                    g.report({ eventName: g.pvEventName.iosOpenTips }),
                    window.oneLog(function () {
                      k("wx_ios_browseropentips_pv");
                    }, "wx_ios_browseropentips")),
                  $("#btn-fast-download")
                    .unbind("click")
                    .bind("click", function () {
                      f.browser.wechat
                        ? k("wx_ios_fastclick")
                        : f.browser.mqq
                        ? k("mqq_ios_fastclick")
                        : f.browser.qqbrowser
                        ? k("mtt_ios_fastclick")
                        : k("other_ios_fastclick"),
                        r.iosUrl
                          ? (g.report({
                              eventName: g.clickBtnEventName.mainBtn,
                              eventResult:
                                g.clickActionEventResult.openAppStore,
                              eventExtInfo: r.iosUrl,
                            }),
                            c.setLocationHref(r.iosUrl))
                          : (g.report({
                              eventName: g.clickBtnEventName.mainBtn,
                              eventResult: g.clickActionEventResult.alert,
                            }),
                            alert(
                              "\n抱歉，当前没有检测到iOS版本\n您可以尝试前往AppStore搜索查看"
                            ));
                    }),
                  $("#btn-ios-open")
                    .unbind(UI.EVENTS.touchstart)
                    .bind(UI.EVENTS.touchstart, function () {
                      if (f.browser.wechat)
                        return (
                          g.report({
                            eventName: g.clickBtnEventName.iosOpenBtn,
                            eventResult: g.clickActionEventResult.showOpenGuide,
                          }),
                          void T()
                        );
                      r.iosUrl
                        ? (g.report({
                            eventName: g.clickBtnEventName.iosOpenBtn,
                            eventResult: g.clickActionEventResult.openAppStore,
                            eventExtInfo: r.iosUrl,
                          }),
                          c.setLocationHref(r.iosUrl))
                        : e
                        ? (g.report({
                            eventName: g.clickBtnEventName.iosOpenBtn,
                            eventResult: g.clickActionEventResult.openCpApp,
                            eventExtInfo: e,
                          }),
                          c.setLocationHref(e))
                        : (g.report({
                            eventName: g.clickBtnEventName.iosOpenBtn,
                            eventResult: g.clickActionEventResult.alert,
                          }),
                          alert(
                            "\n抱歉，当前没有检测到iOS版本\n您可以尝试前往AppStore搜索查看"
                          ));
                    }),
                  e)
                ) {
                  if (f.browser.wechat) return;
                  g.report({
                    eventName: g.autoEventName.openCpApp,
                    eventExtInfo: e,
                  }),
                    c.setLocationHref(e);
                } else
                  r.iosUrl &&
                    (g.report({
                      eventName: g.autoEventName.openAppStore,
                      eventExtInfo: r.iosUrl,
                    }),
                    c.setLocationHref(r.iosUrl));
                if (window.isDownBase) {
                  if (
                    ((r.iosUrl && 1 != +s.showTips) ||
                      (s.gameFloatingWindowInfo &&
                        $(document.body).append(
                          '<div class="top-tips">'.concat(
                            s.gameFloatingWindowInfo,
                            "</div>"
                          )
                        ),
                      window.oneLog(function () {
                        k("ios_toptips_pv");
                      }, "ios_toptips"),
                      g.report({ eventName: g.pvEventName.iosTopTips })),
                    !r.iosUrl)
                  )
                    return (
                      $("#btn-fast-download")
                        .removeClass("is-b-blue")
                        .addClass("is-disable"),
                      void $("#btn-ios-open")
                        .parents(".btnwrapper")
                        .addClass("is-disable")
                    );
                  if (1 == +s.showTips) return;
                } else if (!r.iosUrl) return;
              },
            },
            {
              key: "openInOther",
              value: function () {
                var e = c.getAppAndroidScheme(),
                  n = c.getAppAndroidScheme(!0),
                  t = "1" === y("ntc"),
                  o = 0 === location.hash.indexOf("#fromopen");
                o &&
                  location.replace(
                    ""
                      .concat(location.protocol, "//")
                      .concat(location.hostname)
                      .concat(location.pathname)
                      .concat(location.search, "#")
                  ),
                  !t && (n || (e && o))
                    ? (k("other_android_pagepv"),
                      g.report({
                        eventName: g.autoEventName.openCpApp,
                        eventExtInfo: n || e,
                      }),
                      c.setLocationHref(n || e),
                      o && _.init(n || e))
                    : k("other_android_noschema_pagepv"),
                  (t = "1" === y("ntc")),
                  (window.via = "ANDROIDWXZ.YYB.".concat(
                    d.sceneVia ? d.sceneVia : "OTHERBROWSER"
                  )),
                  g.report({
                    eventName: g.keyEventName.mainBtnFinishLoading,
                    eventStartTime: g.pageStartTime,
                    eventEndTime: Date.now(),
                  });
                var i = function () {
                    window.oneLog(function () {
                      var e = "";
                      f.os.android && (e = "other_android_fdclick"), k(e);
                    }, "act_fastdownload");
                  },
                  a = function () {
                    var e = c.getTmast({
                      yybVersion: p.getCache().yybVersion,
                      outerCall: !0,
                    });
                    return "$"
                      .concat(e, "&clipboard_start_time=")
                      .concat(Date.now(), "&clipboard_expiry_time=")
                      .concat(18e5, "$");
                  };
                if (
                  (g.reportSampleData({
                    eventName: g.abilityEventName.pageVisibility,
                    eventResult: UI.pageVisibility.isPageVisibilitySupport
                      ? 0
                      : -1,
                  }),
                  d.isAutoDownAndCloseWin && !t)
                ) {
                  var l = c.getTmast({
                    yybVersion: p.getCache().yybVersion,
                    outerCall: !0,
                  });
                  g.report({
                    eventName: g.autoEventName.openQQDownloaderForDownloadApp,
                    eventExtInfo: l,
                  }),
                    c.callWithScheme(l);
                }
                if (UI.pageVisibility.isPageVisibilitySupport) {
                  var u = this;
                  this.$btn.unbind("click").bind("click", function () {
                    if (!u.$btn.hasClass("btn-unactive")) {
                      if ((i(), c.copyToClipboard(a()), t)) {
                        var e = c.getAppBaoDownUrl("sourcecheck");
                        return (
                          g.report({
                            eventName: g.clickBtnEventName.mainBtn,
                            eventResult:
                              g.clickActionEventResult.downloadQQDownloader,
                            eventExtInfo: e,
                          }),
                          void c.setLocationHref(e)
                        );
                      }
                      var n = new Date();
                      setTimeout(function () {
                        var e = new Date();
                        if (
                          parseInt(e.getTime(), 10) -
                            parseInt(n.getTime(), 10) <
                            3e3 &&
                          !UI.pageVisibility.isHidden()
                        ) {
                          window.via = window.via.replace(".YYB.", ".NEWYYB.");
                          var t = c.getAppBaoDownUrl("sourcecheck"),
                            o = c.getAppAndroidScheme();
                          if (o) {
                            var i = Date.now();
                            /chrome\/[\d.]+\s+mobile\s+safari\/[\d.]+$/i.test(
                              navigator.userAgent
                            )
                              ? setTimeout(function () {
                                  location.href = o;
                                }, 300)
                              : (location.href = o),
                              setTimeout(function () {
                                if (Date.now() - i < 1e3) {
                                  if (!t) return;
                                  location.href = t;
                                }
                              }, 800);
                          } else {
                            if (!t) return;
                            location.href = t;
                          }
                        }
                      }, 2e3),
                        g.report({
                          eventName: g.clickBtnEventName.mainBtn,
                          eventResult:
                            g.clickActionEventResult
                              .openAndDownloadQQDownloader,
                        }),
                        (window.via = window.via.replace(".NEWYYB.", ".YYB."));
                      var o = c.getTmast({ outerCall: !0 });
                      c.setLocationHref(o);
                    }
                  });
                } else
                  this.$btn.unbind("click").bind("click", function () {
                    if (
                      (i(),
                      A(a(), function (e, n, t) {
                        g.reportSampleData(
                          {
                            eventName: g.clientApiEventName.copyToClipboard,
                            eventResult: n,
                            eventExtInfo: t || e,
                          },
                          0.01
                        );
                      }),
                      t)
                    ) {
                      var e = c.getAppBaoDownUrl("sourcecheck");
                      return (
                        g.report({
                          eventName: g.clickBtnEventName.mainBtn,
                          eventResult:
                            g.clickActionEventResult.downloadQQDownloader,
                          eventExtInfo: e,
                        }),
                        void c.setLocationHref(e)
                      );
                    }
                    g.report({
                      eventName: g.clickBtnEventName.mainBtn,
                      eventResult:
                        g.clickActionEventResult.openAndDownloadQQDownloader,
                    }),
                      (window.via = window.via.replace(".NEWYYB.", ".YYB."));
                    var n = c.getTmast({ outerCall: !0 });
                    c.tryCallYybInBrowser(
                      n,
                      function () {},
                      function () {
                        window.via = window.via.replace(".YYB.", ".NEWYYB.");
                        var e = c.getAppBaoDownUrl("sourcecheck");
                        location.href = e;
                      }
                    );
                  });
                v.init(r, s.hideYYBBanner);
              },
            },
            {
              key: "mttDownload",
              value: function () {
                var e = this,
                  n = this.$btn,
                  t = this,
                  o = function (n) {
                    var o;
                    n.preventDefault(),
                      p.getCache().yybVersion ||
                        ((!p.getCache().cpAppVersion ||
                          D(r.versionCode, p.getCache().cpAppVersion) > 0) &&
                          c.copyToClipboard(
                            ((o = e.getFristOpenTmast()),
                            c.encodeTmastForClipBoard(o))
                          )),
                      p.check(
                        window.AppInfoData.appDetail.packageName,
                        function (e, n) {
                          var o;
                          g.setInstallation({ yybVersion: e, cpAppVersion: n });
                          var i = !1,
                            a = !window.fastClickTrigger;
                          if (((window.fastClickTrigger = !1), n))
                            if (N(n, r.versionCode))
                              if (((o = "update"), e)) {
                                i = !0;
                                var s = c.getTmast({
                                  yybVersion: e,
                                  outerCall: !0,
                                });
                                a &&
                                  (window.oneLog(function () {
                                    k("mtt_android_yyb_fuclick");
                                  }, "act_fastdownload"),
                                  g.report({
                                    eventName: g.clickBtnEventName.mainBtn,
                                    eventResult:
                                      g.clickActionEventResult
                                        .openQQDownloaderForUpdateApp,
                                    eventExtInfo: s,
                                  })),
                                  c.callWithScheme(s);
                              } else {
                                var d = c.getAppBaoDownUrl("sourcecheck");
                                a &&
                                  (window.oneLog(function () {
                                    k("mtt_android_noyyb_fuclick");
                                  }, "act_fastdownload"),
                                  g.report({
                                    eventName: g.clickBtnEventName.mainBtn,
                                    eventResult:
                                      g.clickActionEventResult
                                        .downloadQQDownloaderForUpdateApp,
                                    eventExtInfo: d,
                                  })),
                                  c.setLocationHref(d);
                              }
                            else {
                              o = "open";
                              var l = c.getAppAndroidScheme(!0);
                              a &&
                                (window.oneLog(function () {
                                  k(
                                    e
                                      ? "mtt_android_yyb_opclick"
                                      : "mtt_android_noyyb_opclick"
                                  );
                                }, "act_fastdownload"),
                                g.report({
                                  eventName: g.clickBtnEventName.mainBtn,
                                  eventResult:
                                    g.clickActionEventResult.openCpApp,
                                  eventExtInfo: c.getAppAndroidScheme(!0),
                                })),
                                c.openApp(l, r.packageName);
                            }
                          else if (((o = "down"), e)) {
                            i = !0;
                            var p = t.getFristOpenTmast();
                            a &&
                              (window.oneLog(function () {
                                k("mtt_android_yyb_fdclick");
                              }, "act_fastdownload"),
                              g.report({
                                eventName: g.clickBtnEventName.mainBtn,
                                eventResult:
                                  g.clickActionEventResult
                                    .openQQDownloaderForDownloadApp,
                                eventExtInfo: p,
                              })),
                              c.callWithScheme(p);
                          } else {
                            var u = c.getAppBaoDownUrl("sourcecheck");
                            a &&
                              (window.oneLog(function () {
                                k("mtt_android_noyyb_fdclick");
                              }, "act_fastdownload"),
                              g.report({
                                eventName: g.clickBtnEventName.mainBtn,
                                eventResult:
                                  g.clickActionEventResult
                                    .downloadQQDownloaderForDownloadApp,
                                eventExtInfo: u,
                              })),
                              c.setLocationHref(u);
                          }
                          h.updateDownBtn(o, i, void 0, e);
                        }
                      );
                  };
                try {
                  p.check(
                    window.AppInfoData.appDetail.packageName,
                    function (e, t) {
                      g.setInstallation({ yybVersion: e, cpAppVersion: t }),
                        (window.via = "ANDROIDWXZ."
                          .concat(e ? "YYB." : "NEWYYB.")
                          .concat(d.sceneVia ? d.sceneVia : "QQBROWSER")),
                        window.oneLog(function () {
                          k(
                            e
                              ? "mtt_android_yyb_pagepv"
                              : "mtt_android_noyyb_pagepv"
                          );
                        }, "pagepv"),
                        e || v.init(r, s.hideYYBBanner),
                        g.report({
                          eventName: g.keyEventName.mainBtnFinishLoading,
                          eventStartTime: g.pageStartTime,
                          eventEndTime: Date.now(),
                        }),
                        n
                          .unbind(UI.EVENTS.touchend)
                          .bind(UI.EVENTS.touchend, o),
                        c.onPageResume(function () {
                          p.check(
                            window.AppInfoData.appDetail.packageName,
                            function (e, n) {
                              g.setInstallation({
                                _yybVersion: e,
                                _cpAppVersion: n,
                              });
                            }
                          );
                        });
                    }
                  );
                } catch (e) {
                  this.openInOther();
                }
              },
            },
            {
              key: "jsbridgeDownload",
              value: function () {
                (S = !1),
                  this.jsbridge_bind(),
                  c.onPageResume(function () {
                    S = !1;
                  });
              },
            },
            {
              key: "showReloadDialog",
              value: function () {
                var e = $("#reloadDialog");
                g.report({ eventName: g.pvEventName.reloadDialog }),
                  e.find(".tips").text("小宝正在努力帮你连接中……"),
                  setTimeout(function () {
                    window.isDownBase ? e.show() : e.removeClass("invisible");
                  }, 4e3),
                  window.isDownBase ? e.show() : e.removeClass("invisible");
              },
            },
            {
              key: "jsbridge_bind",
              value: function () {
                var e = this,
                  n = this.jsBridgeloader,
                  t = p.getCache().yybVersion;
                t
                  ? ((window.nowInstallyybForJumpyyb = !0),
                    (window.isDownloadingYYB = !1))
                  : ((window.nowInstallyybForJumpyyb = !1),
                    (window.justNotInstallyybForJumpyyb = !0)),
                  n.obj || this.createJsbDownInstance(),
                  this.$btn
                    .unbind(UI.EVENTS.touchstart)
                    .bind(UI.EVENTS.touchstart, function () {
                      e.onBtnClick();
                      var o = e.getFristOpenTmast();
                      if (t) c.callWithScheme(o);
                      else {
                        var i = Date.now(),
                          r = i + 18e5;
                        switch (
                          (f.browser.wechat &&
                            !S &&
                            ((S = !0),
                            c.writeCommData({
                              starttime: i,
                              endtime: r,
                              url: o,
                              baoPkgName: a.appbaoPkg,
                            })),
                          c.setJumpPageInMqq({
                            starttime: i,
                            endtime: r,
                            jumpUrl: o,
                            yybVersion: p.getCache().yybVersion,
                          }),
                          (e.JsBridgecount += 1),
                          n.state)
                        ) {
                          case JsBridge.Download.STATE_INSTALLING:
                          case JsBridge.Download.STATE_DOWNLOADING:
                            break;
                          case JsBridge.Download.STATE_DOWNLOADED:
                            c.isMqqSupportVersion()
                              ? setTimeout(function () {
                                  n.obj.install();
                                }, 500)
                              : n.obj.install();
                            break;
                          case JsBridge.Download.STATE_INSTALLED:
                            c.callWithScheme(o);
                            break;
                          case JsBridge.Download.STATE_FAILED_OF_SDCARD:
                          case JsBridge.Download.STATE_FAILED:
                          case JsBridge.Download.STATE_PAUSED:
                          case JsBridge.Download.STATE_READY:
                          case JsBridge.Download.STATE_REMOVED:
                          case JsBridge.Download.STATE_CANCAL:
                            n.obj.start();
                        }
                      }
                    });
              },
            },
            {
              key: "getFristOpenTmast",
              value: function () {
                var e = p.getCache(),
                  n = e.yybVersion,
                  t = e.cpAppVersion;
                return c.getTmast({
                  onlyOpen: t && D(t, r.versionCode) >= 0,
                  yybVersion: n,
                });
              },
            },
            { key: "onBtnClick", value: function () {} },
            {
              key: "createJsbDownInstance",
              value: function () {
                var e = this.jsBridgeloader,
                  n = this.opt;
                (e.obj = new JsBridge.Download(
                  {
                    sngAppId: parseInt(1101070898, 10),
                    hnAppId: "5848",
                    versionCode: "",
                    url: a.appbaoUrlgtk,
                    packageName: a.appbaoPkg,
                    alias: a.appbaoName,
                    md5: a.appbaoMd5,
                    title: n.text || d.wechatDownloadInfo.text,
                    thumb_url: d.wechatDownloadInfo.logo,
                  },
                  this.handlerDownloadInstanceCallBack.bind(this)
                )),
                  this.downYYBTimes
                    ? (this.downYYBTimes += 1)
                    : (this.downYYBTimes = 0);
              },
            },
            {
              key: "handlerDownloadInstanceCallBack",
              value: function (e, n, t) {
                var o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
                E(
                  "[download/init.js] download callback args: ".concat(
                    JSON.stringify(o)
                  )
                ),
                  E("[download/init.js] YYB JsBridge.Download callback"),
                  E(
                    "[download/init.js] YYB JsBridge.Download window.JsBridgecount: ".concat(
                      this.JsBridgecount
                    )
                  );
                var i = this.jsBridgeloader;
                if (
                  ((i.state = e),
                  0 === this.JsBridgecount &&
                    (g.report({
                      eventName:
                        g.keyEventName.qqdownloaderDownloadInstanceCreated,
                      eventStartTime: g.pageStartTime,
                      eventEndTime: Date.now(),
                    }),
                    (this.JsBridgecount = 1)),
                  2 !== window.JsBridgecount ||
                    window.isDownloadingYYB ||
                    (window.yybDownloadStartTime = Date.now()),
                  this.JsBridgecount <= 1)
                )
                  i.state === JsBridge.Download.STATE_DOWNLOADING &&
                    ((window.isDownloadingYYB = !0),
                    (window.hasReportDownYYB = !0),
                    (this.JsBridgecount += 1),
                    h.updateDownBtn("loading", !1, n, p.getCache().yybVersion));
                else {
                  switch (e) {
                    case JsBridge.Download.STATE_DOWNLOADED:
                      (window.isDownloadingYYB = !1),
                        h.updateDownBtn(
                          p.getCache().cpAppVersion ? "update" : "down",
                          void 0,
                          void 0,
                          p.getCache().yybVersion
                        ),
                        this.startInstall();
                      break;
                    case JsBridge.Download.STATE_INSTALLING:
                    case JsBridge.Download.STATE_DOWNLOADING:
                      (window.isDownloadingYYB = !0),
                        h.updateDownBtn(
                          "loading",
                          !1,
                          n,
                          p.getCache().yybVersion
                        );
                      break;
                    case JsBridge.Download.STATE_INSTALLED:
                      (window.isDownloadingYYB = !1),
                        p.check(
                          window.AppInfoData.appDetail.packageName,
                          function (e, n) {
                            var t = c.getTmast({
                              yybVersion: e,
                              outerCall: !0,
                            });
                            g.report({
                              eventName: n
                                ? g.autoEventName.openQQDownloaderForUpdateApp
                                : g.autoEventName
                                    .openQQDownloaderForDownloadApp,
                              eventExtInfo: t,
                            }),
                              c.callWithScheme(t);
                          }
                        );
                      break;
                    case JsBridge.Download.STATE_FAILED_OF_SDCARD:
                      alert(
                        "下载失败，请关闭USB数据存储或者插入SD卡或者将手机与电脑断开连接。"
                      );
                      break;
                    case JsBridge.Download.STATE_REMOVED:
                    case JsBridge.Download.STATE_CANCAL:
                    case JsBridge.Download.STATE_FAILED:
                    case JsBridge.Download.STATE_READY:
                    case JsBridge.Download.STATE_PAUSED:
                    default:
                      (window.isDownloadingYYB = !1),
                        h.updateDownBtn(
                          p.getCache().cpAppVersion ? "update" : "down",
                          void 0,
                          void 0,
                          p.getCache().yybVersion
                        );
                  }
                  this.reportDownState(e, o, t),
                    (e !== JsBridge.Download.STATE_FAILED &&
                      -31415 !== o.errCode) ||
                      this.retryToDown();
                }
              },
            },
            {
              key: "tryToDownYYBAgain",
              value: function () {
                if (2 !== window.downYYBTimes) {
                  g.report({
                    eventName:
                      g.autoEventName
                        .retryDownloadQQDownloaderWhenVerifyMd5Fail,
                  }),
                    this.createJsbDownInstance();
                  var e = $("#downloadRetryDialog");
                  g.report({ eventName: g.pvEventName.retryDownloadDialog }),
                    e.find(".tips").text("网络不稳定导致您下载失败，建议重试"),
                    e
                      .find(".btn-close, .btn-cancel")
                      .unbind("click")
                      .bind("click", function () {
                        g.report({
                          eventName:
                            g.clickBtnEventName.retryDownloadDialogCancelBtn,
                          eventResult: g.clickActionEventResult.close,
                        }),
                          window.isDownBase
                            ? e.show()
                            : e.removeClass("invisible");
                      }),
                    e
                      .find(".btn-ok")
                      .unbind("click")
                      .bind("click", function () {
                        g.report({
                          eventName:
                            g.clickBtnEventName.retryDownloadDialogOkBtn,
                          eventResult:
                            g.clickActionEventResult
                              .retryDownloadQQDownloaderWhenVerifyMd5Fail,
                        }),
                          (window.isTryAgain = !0),
                          (window.fastClickTrigger = !0),
                          $("#btn-fast-download").trigger(
                            UI.EVENTS.touchstartEv()
                          ),
                          window.isDownBase
                            ? e.show()
                            : e.removeClass("invisible");
                      }),
                    window.isDownBase ? e.show() : e.removeClass("invisible");
                }
              },
            },
            {
              key: "reportDownState",
              value: function (e, n, t) {
                var o = g.downloadEvent.eventScene.cpApp;
                if (
                  (this.opt.cpContext === b.CP_CONTEXT.YYB &&
                    (o = g.downloadEvent.eventScene.qqdownloader),
                  g.reportKeyDownloadEvent(
                    o,
                    this.opt.position || g.eventExtPostion.DEFAULT,
                    e,
                    n
                  ),
                  f.browser.wechat)
                ) {
                  var i = (n && n.errCode) || -1e3;
                  switch (e) {
                    case JsBridge.Download.STATE_DOWNLOADING:
                      window.hasReportDownYYB ||
                        ((window.hasReportDownYYB = !0),
                        k("wx_android_downyyb_beginclick"),
                        t &&
                          t.actionChain &&
                          (1 === t.actionChain
                            ? k("wx_android_downyyb_beginclick_safe")
                            : 2 === t.actionChain
                            ? k("wx_android_downyyb_beginclick_winsafe")
                            : 3 === t.actionChain &&
                              k("wx_android_downyyb_beginclick_update")));
                      break;
                    case JsBridge.Download.STATE_REMOVED:
                      (window.hasReportDownYYB = !1),
                        k("wx_android_downyyb_removeclick"),
                        t &&
                          t.actionChain &&
                          (1 === t.actionChain
                            ? k("wx_android_downyyb_removeclick_safe")
                            : 2 === t.actionChain
                            ? k("wx_android_downyyb_removeclick_winsafe")
                            : 3 === t.actionChain &&
                              k("wx_android_downyyb_removeclick_update"));
                      break;
                    case JsBridge.Download.STATE_CANCAL:
                      (window.hasReportDownYYB = !1),
                        k("wx_android_downyyb_cancelclick"),
                        t &&
                          t.actionChain &&
                          (1 === t.actionChain
                            ? k("wx_android_downyyb_cancelclick_safe")
                            : 2 === t.actionChain
                            ? k("wx_android_downyyb_cancelclick_winsafe")
                            : 3 === t.actionChain &&
                              k("wx_android_downyyb_cancelclick_update"));
                      break;
                    case JsBridge.Download.STATE_FAILED:
                      (window.hasReportDownYYB = !1),
                        k("wx_android_downyyb_fail"),
                        t &&
                          t.actionChain &&
                          (1 === t.actionChain
                            ? (k("wx_android_downyyb_fail_safe"),
                              -31415 === i &&
                                k("wx_android_createdownyyb_fail_safe"))
                            : 2 === t.actionChain
                            ? (k("wx_android_downyyb_fail_winsafe"),
                              -31415 === i &&
                                k("wx_android_createdownyyb_fail_winsafe"))
                            : 3 === t.actionChain &&
                              (k("wx_android_downyyb_fail_update"),
                              -31415 === i &&
                                k("wx_android_createdownyyb_fail_update"))),
                        d.isPageReloaded &&
                          -31415 === i &&
                          (window.hasReport31415ForReload ||
                            (window.hasReport31415ForReload = !0)),
                        802 === i &&
                          ((window.reportScene = "retryFor802"),
                          (a.appbaoUrlgtk =
                            window.AppInfoData.baoPkg.https_url),
                          (a.appbaoMd5 =
                            window.APPCONFIG.appbao.appbaoMd5ForHttps),
                          g.setQQDownloaderInfo(a.appbaoUrlgtk, a.appbaoMd5),
                          u.setUseHttps(),
                          this.tryToDownYYBAgain()),
                        this.reportDownloadApp(i);
                      break;
                    case JsBridge.Download.STATE_DOWNLOADED:
                      (window.hasReportDownYYB = !1),
                        k("wx_android_downyyb_finish"),
                        t &&
                          t.actionChain &&
                          (1 === t.actionChain
                            ? k("wx_android_downyyb_finish_safe")
                            : 2 === t.actionChain
                            ? k("wx_android_downyyb_finish_winsafe")
                            : 3 === t.actionChain &&
                              k("wx_android_downyyb_finish_update")),
                        this.reportDownloadApp(0);
                      break;
                    default:
                      window.hasReportDownYYB = !1;
                  }
                } else if (f.browser.mqq)
                  switch (e) {
                    case JsBridge.Download.STATE_DOWNLOADING:
                      window.hasReportBeginDownYYB ||
                        ((window.hasReportBeginDownYYB = !0),
                        k("mqq_android_downyyb_beginclick"));
                      break;
                    case JsBridge.Download.STATE_REMOVED:
                      k("mqq_android_downyyb_removeclick");
                      break;
                    case JsBridge.Download.STATE_FAILED:
                      k("mqq_android_downyyb_fail");
                      break;
                    case JsBridge.Download.STATE_DOWNLOADED:
                      k("mqq_android_downyyb_finish");
                      break;
                    case JsBridge.Download.STATE_INSTALLED:
                      k("mqq_android_yyb_finish_install");
                  }
              },
            },
            {
              key: "retryToDown",
              value: function () {
                if (d.isPageReloaded)
                  g.report({
                    eventName: g.autoEventName.retryCreateDownloader,
                    eventExtInfo: -9999,
                  });
                else if (
                  (window.hasRetryFor31415
                    ? (window.hasRetryFor31415 += 1)
                    : ((window.hasRetryFor31415 = 1),
                      (window.reportScene = "retryFor31415")),
                  window.hasRetryFor31415 > 3)
                ) {
                  var e = $("#reloadDialog");
                  if (
                    (g.report({ eventName: g.pvEventName.reloadConfirmDialog }),
                    e.find(".tips").text("小宝正在努力帮你连接中……"),
                    e
                      .find(".btn-close, .btn-cancel")
                      .unbind("click")
                      .bind("click", function () {
                        g.report({
                          eventName:
                            g.clickBtnEventName.reloadConfirmDialogCancelBtn,
                          eventResult: g.clickActionEventResult.close,
                        }),
                          window.isDownBase
                            ? e.show()
                            : (e.addClass("invisible"),
                              (window.hasReloadCancelClick = !0));
                      }),
                    e
                      .find(".btn-ok")
                      .unbind("click")
                      .bind("click", function () {
                        g.report({
                          eventName:
                            g.clickBtnEventName.reloadConfirmDialogOkBtn,
                          eventResult: g.clickActionEventResult.reloadPage,
                        }),
                          c.setLocationHref(
                            "".concat(location.href, "&isreload=true")
                          );
                      }),
                    setTimeout(function () {
                      window.hasReloadCancelClick ||
                        (g.report({ eventName: g.autoEventName.reloadPage }),
                        c.setLocationHref(
                          "".concat(location.href, "&isreload=true")
                        ));
                    }, 1e3),
                    window.isDownBase)
                  )
                    return void e.show();
                  e.removeClass("invisible");
                } else
                  g.report({
                    eventName: g.autoEventName.retryCreateDownloader,
                    eventExtInfo: window.hasRetryFor31415,
                  }),
                    (f.browser.wechat || f.browser.mqq) &&
                      this.createJsbDownInstance(),
                    setTimeout(function () {
                      (window.fastClickTrigger = !0),
                        $("#btn-fast-download").trigger(
                          UI.EVENTS.touchstartEv()
                        );
                    }, 500);
              },
            },
            {
              key: "startDownloadTask",
              value: function () {
                var e = this;
                this.getDownStatus().then(function (n) {
                  n !== JsBridge.Download.STATE_DOWNLOADED
                    ? (JsBridge.Download.start(e.downloadParam),
                      e.handlerDownloadInstanceCallBack(
                        JsBridge.Download.STATE_DOWNLOADING,
                        0
                      ),
                      (e.checkDownStatusTimer = setInterval(
                        e.checkDownStatus.bind(e),
                        100
                      )))
                    : e.startInstall();
                });
              },
            },
            {
              key: "startInstall",
              value: function () {
                JsBridge.Download.install(this.downloadParam);
              },
            },
            {
              key: "checkDownStatus",
              value: function () {
                var e = this;
                this.getDownStatus().then(function (n) {
                  n === JsBridge.Download.STATE_DOWNLOADED &&
                    clearInterval(e.checkDownStatusTimer),
                    e.handlerDownloadInstanceCallBack(n, 0);
                });
              },
            },
            {
              key: "getDownStatus",
              value: function () {
                var e = this;
                return new Promise(function (n) {
                  JsBridge.Download.getDownloadStatus(
                    e.downloadParam,
                    function (e) {
                      n(e);
                    }
                  );
                });
              },
            },
          ]) && i(n.prototype, t),
          w && i(n, w),
          e
        );
      })();
    e.exports = C;
  },
  function (e, n, t) {
    var o,
      i,
      a,
      r,
      s = t(0),
      c = t(3),
      d = t(6),
      l = t(1),
      p = t(2),
      u = s.getQuery,
      w = s.compareVersion,
      f = 1 == u("opentype"),
      m = "down",
      g = {
        init: function () {
          (o = window.APPCONFIG && window.APPCONFIG.app),
            (i = window.APPCONFIG && window.APPCONFIG.identityInfo),
            (a = window.AppInfoData && window.AppInfoData.appDetail),
            (r = window.templateId),
            (window.via = u("via")),
            g.getVia(),
            l.os.ios
              ? g.iosDownload()
              : l.os.android
              ? g.androidDown()
              : g.browserDown();
        },
        iosDownload: function () {
          (m = "iosdown"),
            g.updateDownBtn(),
            $("#btn-fast-download")
              .unbind(UI.EVENTS.touchstart)
              .bind(UI.EVENTS.touchstart, function () {
                o.iosUrl
                  ? (p.report({
                      eventName: p.clickBtnEventName.mainBtn,
                      eventResult: p.clickActionEventResult.openAppStore,
                      eventExtInfo: o.iosUrl,
                    }),
                    c.setLocationHref(o.iosUrl))
                  : (p.report({
                      eventName: p.clickBtnEventName.mainBtn,
                      eventResult: p.clickActionEventResult.alert,
                    }),
                    alert(
                      "\n抱歉，当前没有检测到iOS版本\n您可以尝试前往AppStore搜索查看"
                    ));
              }),
            (o.iosUrl && 1 != i.showTips) ||
              (i.gameFloatingWindowInfo &&
                $(document.body).append(
                  '<div class="top-tips">' + i.gameFloatingWindowInfo + "</div>"
                )),
            o.iosUrl
              ? 1 != i.showTips &&
                o.iosUrl &&
                (p.report({
                  eventName: p.autoEventName.openAppStore,
                  eventExtInfo: o.iosUrl,
                }),
                c.setLocationHref(o.iosUrl))
              : $("#btn-fast-download")
                  .removeClass("is-b-blue")
                  .addClass("is-disable");
        },
        androidDown: function () {
          var e = d.getCache(),
            n = e.yybVersion,
            t = e.cpAppVersion;
          if (c.isWechatSupportVersion() || c.isMqqSupportVersion())
            window.JsBridge &&
              window.JsBridge.onReady(function () {
                if (
                  (g.downBind(),
                  p.report({
                    eventName: p.keyEventName.mainBtnFinishLoading,
                    eventStartTime: p.pageStartTime,
                    eventEndTime: Date.now(),
                  }),
                  c.onPageResume(function () {
                    d.check(
                      window.AppInfoData.appDetail.packageName,
                      function (e, n) {
                        g.getVia(),
                          p.setInstallation({ yybVersion: e, cpAppVersion: n }),
                          g.downBind();
                      }
                    );
                  }),
                  t)
                )
                  f && l.browser.wechat
                    ? !n || (n && String.prototype.slice.call(n, 0, 3) < 715)
                      ? (p.report({
                          eventName: p.autoEventName.jumpToOpenPage,
                          eventExtInfo: "/dom/micro/open.jsp" + location.search,
                        }),
                        c.setLocationHref(
                          "/dom/micro/open.jsp" + location.search
                        ))
                      : (p.report({
                          eventName:
                            p.autoEventName.openCpAppByQQDownloaderMidPage,
                          eventExtInfo: c.getAppAndroidScheme(),
                        }),
                        c.callYybMidPage(
                          c.getAppAndroidScheme(),
                          window.AppInfoData.appDetail.versionCode,
                          "BBTN"
                        ))
                    : (p.report({ eventName: p.autoEventName.openCpApp }),
                      c.openApp("", o.packageName));
                else if (n) {
                  var e = c.getTmast({
                    yybVersion: d.getCache().yybVersion,
                    outerCall: !0,
                  });
                  p.report({
                    eventName: p.autoEventName.openQQDownloaderForDownloadApp,
                    eventExtInfo: e,
                  }),
                    g.goYYBAndDown(e);
                } else
                  p.report({ eventName: p.autoEventName.downloadCpApp }),
                    window.jsBridgeloader.start();
              });
          else if (
            l.browser.qqbrowser &&
            l.browser.version &&
            w(l.browser.version, "5.0") >= 0 &&
            c.isSupportAppOperationInMtt()
          ) {
            if (t)
              p.report({ eventName: p.autoEventName.openCpApp }),
                c.openApp("", o.packageName);
            else if (n) {
              var i = c.getTmast({ yybVersion: n, outerCall: !0 });
              p.report({
                eventName: p.autoEventName.openQQDownloaderForDownloadApp,
                eventExtInfo: i,
              }),
                g.goYYBAndDown(i);
            } else {
              var a = c.getAppDownloadUrl();
              p.report({
                eventName: p.autoEventName.downloadCpApp,
                eventExtInfo: a,
              }),
                c.setLocationHref(a);
            }
            (m = d.getCache().cpAppVersion ? "open" : "down"),
              g.updateDownBtn(),
              p.report({
                eventName: p.keyEventName.mainBtnFinishLoading,
                eventStartTime: p.pageStartTime,
                eventEndTime: Date.now(),
              }),
              g.bindInQQBrowser();
          } else g.browserDown();
        },
        browserDown: function () {
          (m = "down"),
            g.updateDownBtn(),
            p.report({
              eventName: p.keyEventName.mainBtnFinishLoading,
              eventStartTime: p.pageStartTime,
              eventEndTime: Date.now(),
            });
          var e = c.getTmast({
            yybVersion: d.getCache().yybVersion,
            outerCall: !0,
          });
          p.report({
            eventName: p.autoEventName.openQQDownloaderForDownloadApp,
            eventExtInfo: e,
          }),
            setTimeout(function () {
              c.tryCallYybInBrowser(
                e,
                function () {},
                function () {
                  var e = c.getAppDownloadUrl();
                  p.report({
                    eventName: p.autoEventName.downloadCpApp,
                    eventExtInfo: e,
                  }),
                    c.setLocationHref(e);
                }
              );
            }, 350),
            g.bindInBrowser();
        },
        bindInQQBrowser: function () {
          $("body").delegate(
            "#btn-fast-download",
            UI.EVENTS.touchstart,
            function () {
              d.check(o.packageName, function (e, n) {
                if (
                  (g.getVia(), (m = n ? "open" : "down"), g.updateDownBtn(), n)
                )
                  return (
                    p.report({
                      eventName: p.clickBtnEventName.mainBtn,
                      eventResult: p.clickActionEventResult.openCpApp,
                    }),
                    void c.openApp("", o.packageName)
                  );
                if (d.getCache().yybVersion) {
                  var t = c.getTmast({
                    yybVersion: d.getCache().yybVersion,
                    outerCall: !0,
                  });
                  return (
                    p.report({
                      eventName: p.clickBtnEventName.mainBtn,
                      eventResult:
                        p.clickActionEventResult.openQQDownloaderForDownloadApp,
                      eventExtInfo: t,
                    }),
                    void g.goYYBAndDown(t)
                  );
                }
                var i = c.getAppDownloadUrl();
                p.report({
                  eventName: p.clickBtnEventName.mainBtn,
                  eventResult: p.clickActionEventResult.downloadCpApp,
                  eventExtInfo: i,
                }),
                  c.setLocationHref(i);
              });
            }
          );
        },
        bindInBrowser: function () {
          $("#btn-fast-download")
            .unbind(UI.EVENTS.touchstart)
            .bind(UI.EVENTS.touchstart, function () {
              (m = "loading"), g.updateDownBtn();
              var e = c.getAppDownloadUrl();
              p.report({
                eventName: p.clickBtnEventName.mainBtn,
                eventResult: p.clickActionEventResult.downloadCpApp,
                eventExtInfo: e,
              }),
                c.setLocationHref(e),
                setTimeout(function () {
                  (m = "down"), g.updateDownBtn();
                }, 2e3);
            });
        },
        downBind: function () {
          var e = d.getCache(),
            n = e.yybVersion,
            t = e.cpAppVersion,
            i = $("#btn-fast-download");
          (m = t ? "open" : window.hasFinshDownload ? "downloaded" : "down"),
            g.updateDownBtn(),
            t
              ? i
                  .unbind(UI.EVENTS.touchstart)
                  .bind(UI.EVENTS.touchstart, function () {
                    if (f && l.browser.wechat)
                      if (
                        !n ||
                        (n && String.prototype.slice.call(n, 0, 3) < 715)
                      ) {
                        var e = "/dom/micro/open.jsp".concat(location.search);
                        p.report({
                          eventName: p.clickBtnEventName.mainBtn,
                          eventResult: p.clickActionEventResult.jumpToOpenPage,
                          eventExtInfo: e,
                        }),
                          c.setLocationHref(e);
                      } else {
                        var t = c.getAppAndroidScheme();
                        p.report({
                          eventName: p.clickBtnEventName.mainBtn,
                          eventResult:
                            p.clickActionEventResult
                              .openCpAppByQQDownloaderMidPage,
                          eventExtInfo: t,
                        }),
                          c.callYybMidPage(
                            t,
                            window.AppInfoData.appDetail.versionCode,
                            "BBTN"
                          );
                      }
                    else
                      p.report({
                        eventName: p.clickBtnEventName.mainBtn,
                        eventResult: p.clickActionEventResult.openCpApp,
                        eventExtInfo: o.sigMd5,
                      }),
                        setTimeout(function () {
                          JsBridge.startApp(o.packageName, o.sigMd5);
                        }, 350);
                  })
              : n
              ? i
                  .unbind(UI.EVENTS.touchstart)
                  .bind(UI.EVENTS.touchstart, function () {
                    var e = c.getTmast({
                      yybVersion: d.getCache().yybVersion,
                      outerCall: !0,
                    });
                    p.report({
                      eventName: p.clickBtnEventName.mainBtn,
                      eventResult:
                        p.clickActionEventResult.openQQDownloaderForDownloadApp,
                      eventExtInfo: e,
                    }),
                      g.goYYBAndDown(e);
                  })
              : (window.jsBridgeloader ||
                  (window.jsBridgeloader = new JsBridge.Download(
                    {
                      sngAppId: window.AppInfoData.identityInfo.openAppId,
                      hnAppId: a.appId,
                      versionCode: a.versionCode,
                      url: a.apkUrl,
                      packageName: a.packageName,
                      alias: a.appName,
                      md5: a.apkMd5,
                      thumb_url: a.iconUrl,
                      title: a.appName,
                    },
                    g.stateChange
                  )),
                i
                  .unbind(UI.EVENTS.touchstart)
                  .bind(UI.EVENTS.touchstart, function () {
                    p.report({
                      eventName: p.clickBtnEventName.mainBtn,
                      eventResult: p.clickActionEventResult.downloadCpApp,
                    }),
                      window.jsBridgeloader.start();
                  }));
        },
        stateChange: function (e, n, t, o) {
          switch (
            (0 == window.JsBridgecount &&
              (p.report({
                eventName: p.keyEventName.cpAppDownloadInstanceCreated,
                eventStartTime: p.pageStartTime,
                eventEndTime: Date.now(),
              }),
              window.JsBridgecount++),
            p.reportKeyDownloadEvent(p.downloadEvent.eventScene.cpApp, 0, e, o),
            e)
          ) {
            case JsBridge.Download.STATE_DOWNLOADED:
              c.isMqqSupportVersion()
                ? setTimeout(function () {
                    window.jsBridgeloader.install();
                  }, 500)
                : window.jsBridgeloader.install(),
                (window.hasFinshDownload = !0),
                (m = "downloaded"),
                g.updateDownBtn();
              break;
            case JsBridge.Download.STATE_INSTALLING:
            case JsBridge.Download.STATE_DOWNLOADING:
              (m = "loading"), g.updateDownBtn(n);
              break;
            case JsBridge.Download.STATE_INSTALLED:
              (m = "open"), g.updateDownBtn();
              break;
            case JsBridge.Download.STATE_FAILED_OF_SDCARD:
              alert(
                "下载失败，请关闭USB数据存储或者插入SD卡或者将手机与电脑断开连接。"
              );
              break;
            case JsBridge.Download.STATE_READY:
            case JsBridge.Download.STATE_FAILED:
            case JsBridge.Download.STATE_PAUSED:
            case JsBridge.Download.STATE_CANCAL:
            case JsBridge.Download.STATE_REMOVED:
            default:
              g.updateDownBtn();
          }
        },
        updateDownBtn: function (e) {
          var n, t;
          if (
            ((n =
              "open" == m
                ? "立即打开"
                : "loading" == m
                ? "下载中"
                : "downloaded" == m
                ? "立即安装"
                : "iosdown" == m
                ? "去App Store下载 "
                : "立即下载"),
            3 == r)
          ) {
            var o = $("#btn-fast-download");
            "loading" == m
              ? ((t =
                  "<span class='ani-dot-txt'>" +
                  n +
                  "</span><span class='ani-dot'>...</span>"),
                o.removeClass("normal").addClass("downloading").html(t),
                o.find(".downloading .bar").css("width", e ? e + "%" : "0%"))
              : (o.find(".ani-dot").hide(),
                o.removeClass("downloading").addClass("normal").html(n));
          } else
            1 == r || 2 == r
              ? "loading" == m
                ? ((t =
                    "<span class='ani-dot-txt'>" +
                    n +
                    "</span><span class='ani-dot'>...</span>"),
                  o
                    .removeClass("normal")
                    .addClass("downloading")
                    .find("#downloading-text")
                    .html(t),
                  o.find(".downloading .bar").css("width", e ? e + "%" : "0%"))
                : (o.find(".ani-dot").hide(),
                  o
                    .removeClass("downloading")
                    .addClass("normal")
                    .find("#normal-text")
                    .text(n))
              : (($("#high-download-txt") &&
                  0 !== $("#high-download-txt").length) ||
                  $("#btn-fast-download").text(n),
                $("#high-download-loading").hide(),
                "loading" == m
                  ? ($("#high-download-txt").hide(),
                    $("#high-download-progress").show(),
                    $("#high-download-progress .mod-progress-bar").css(
                      "width",
                      e + "%"
                    ),
                    $("#high-download-progress .mod-progress-text").css(
                      "width",
                      1e4 / e + "%"
                    ))
                  : ($("#high-download-txt").show().text(n),
                    $("#high-download-progress").hide()));
        },
        getVia: function () {
          var e = d.getCache().cpAppVersion;
          return (
            window.via ||
              (l.browser.wechat
                ? ((window.via = "ANDROIDWXZ.YYB.WX"),
                  e
                    ? w(e, o.versionCode) < 0 && (window.via += ".SAFEUPGRATE")
                    : (window.via += ".SAFEDOWNLOAD"))
                : l.browser.mqq
                ? (window.via = "ANDROIDWXZ.YYB.QQ")
                : l.browser.qqbrowser
                ? (window.via = "ANDROIDWXZ.YYB.QQBROWSER")
                : (window.via = "ANDROIDWXZ.YYB.OTHERBROWSER")),
            window.via
          );
        },
        goYYBAndDown: function (e) {
          c.callWithScheme(e);
        },
      };
    e.exports = g;
  },
  function (e, n, t) {
    var o = t(1),
      i = t(0),
      a = t(2),
      r = t(3),
      s = t(4),
      c = i.getQuery,
      d = s.report,
      l = !1;
    function p() {
      if (1 == window.templateId || 2 == window.templateId)
        return (
          $(".main").addClass("showbanner"),
          void $("#appbao-download-banner").removeClass("invisible")
        );
      $("#appbao-download-banner").show();
    }
    function u() {
      if (3 != window.templateId)
        return 1 == window.templateId || 2 == window.templateId
          ? ($(".main").removeClass("showbanner"),
            void $("#appbao-download-banner").addClass("invisible"))
          : void $("#appbao-download-banner").hide();
    }
    e.exports = {
      init: function (e, n) {
        if (
          !(
            window.templateId >= 3 ||
            1e3 == c("fromcase") ||
            n ||
            "com.tencent.wework" == e.packageName ||
            0 == $("#appbao-download-banner").length ||
            o.browser.qqbrowser ||
            l
          )
        ) {
          l = !0;
          var t = $("#appbao-download-banner .btn-close");
          $("#appbao-download-banner .btn-appbao-download").bind(
            UI.EVENTS.touchstart,
            function (e) {
              var n = $("#btn-fast-download").hasClass("btn-unactive"),
                t = $(e.target);
              a.report({
                eventName: a.clickBtnEventName.bannerDownloadBtn,
                eventResult: a.clickActionEventResult.downloadQQDownloader,
              }),
                (function () {
                  var e = "";
                  e = o.browser.qqbrowser
                    ? "mtt_banner_ndclick"
                    : "other_banner_ndclick";
                  d(e);
                })(),
                n ||
                  (t.addClass("btn-unactive"),
                  setTimeout(function () {
                    t.removeClass("btn-unactive");
                  }, 500),
                  setTimeout(function () {
                    var e = r.getAppBaoDownUrl("sourcecheck");
                    e && (location.href = e);
                  }, 0));
            }
          ),
            t.bind("click", function () {
              a.report({
                eventName: a.clickBtnEventName.bannerCloseBtn,
                eventResult: a.clickActionEventResult.close,
              }),
                u();
            }),
            p(),
            a.report({ eventName: a.pvEventName.banner }),
            (function () {
              var e = "";
              e = o.browser.qqbrowser ? "mtt_bannerpv" : "other_bannerpv";
              d(e);
            })();
        }
      },
      show: p,
      hide: u,
    };
  },
  function (e, n, t) {
    var o = t(4),
      i = t(2),
      a = o.report;
    e.exports = {
      init: function (e) {
        2 == window.templateId || 1 == window.templateId
          ? (function (e) {
              $(
                '<section class="dialog-container" id="opentipsdialog">  <div class="dialog">  <div class="close btn-close"></div>    <div class="text">      <p>即将打开第三方应用。（部分浏览器存在打开限制，若打开失败，可前往桌面直接打开）</p>    </div>    <div class="action">      <a href="' +
                  e +
                  '" class="btn-apple btn-ok">打开</a>    </div>  </div></section>'
              ).appendTo("body>article");
            })(e)
          : (0 != window.templateId && 3 != window.templateId) ||
            (function (e) {
              $(
                '<div class="mod-mask" id="opentipsdialog">  <section class="mod-dialog">    <h2 class="mod-dialog-header">打开提示<i class="mod-close-btn btn-close"></i></h2>      <div class="mod-dialog-content">        <p>即将打开第三方应用。（部分浏览器存在打开限制，若打开失败，可前往桌面直接打开）</p>      </div>      <div class="mod-dialog-footer">        <a href="' +
                  e +
                  '" class="btn-ok w-btn btn-medium clickable is-blue">打开</a>      </div>  </section></div>'
              ).appendTo("body");
            })(e),
          a("other_opendialog_pv"),
          i.report({ eventName: i.pvEventName.browserOpenAppTipsDialog }),
          (function (e) {
            $("#opentipsdialog .btn-ok").on("click", function () {
              if (
                (a("other_opendialog_okclick"),
                i.report({
                  eventName: i.clickBtnEventName.browserOpenAppTipsDialogOkBtn,
                  eventResult: i.clickActionEventResult.openCpApp,
                  eventExtInfo: e,
                }),
                $("#opentipsdialog").hide(),
                UI.pageVisibility.isPageVisibilitySupport)
              ) {
                var n = new Date();
                setTimeout(function () {
                  var t;
                  (t = new Date()),
                    parseInt(t.getTime(), 10) - parseInt(n.getTime(), 10) <
                      3e3 &&
                      (UI.pageVisibility.isHidden() || (location.href = e));
                }, 2e3);
              }
            }),
              $("#opentipsdialog .btn-close").on("click", function () {
                i.report({
                  eventName:
                    i.clickBtnEventName.browserOpenAppTipsDialogCloseBtn,
                  eventResult: i.clickActionEventResult.close,
                }),
                  $("#opentipsdialog").hide();
              });
          })(e);
      },
    };
  },
  function (e, n, t) {
    var o = t(5),
      i = t(0),
      a = [],
      r = $("#btn-fast-download");
    function s(e, n) {
      var t = "";
      switch (e) {
        case "open":
        case "openwithoutyyb":
          t = "安全打开";
          break;
        case "update":
          (t = "安全更新"),
            n && o.appExtInfo.isCpQQDownloader && (t = "立即更新");
          break;
        case "loading":
          (t = "应用宝下载中"), i.isAdScene() && (t = "下载中");
          break;
        case "down":
          t = "安全下载";
          break;
        case "iosdown":
          t = "去App Store下载";
          break;
        default:
          (t = "安全下载"), o.appExtInfo.isCpQQDownloader && (t = "立即下载");
      }
      return t;
    }
    e.exports = {
      updateUI: function (e, n, t) {
        var o = s((e = $.trim(e || "").toLowerCase()), n);
        r.html(o),
          "loading" != e || n
            ? r.removeClass("is-disable")
            : r.addClass("is-disable"),
          a.length > 0 &&
            a.forEach(function (o) {
              o(e, n, t);
            });
      },
      getMainBtnText: s,
      onUpdateMainBtn: function (e) {
        a.push(e);
      },
      $mainBtn: r,
    };
  },
  function (e, n, t) {
    t(20), t(21), t(53), t(54);
    var o = t(7),
      i = t(0),
      a = t(18),
      r = i.formatProtocol,
      s = a.$mainBtn;
    function c() {
      var e, n;
      window.AppInfoData &&
        ((e = window.AppInfoData.appDetail || null),
        (n = window.AppInfoData.baoPkg || null)),
        1 == window.templateId
          ? (function (e, n) {
              var t = $("#appdetail-wrapper"),
                i = $("#tpl-appdetail").html();
              e && n
                ? ($("#detail-slide").html(
                    ejs.render(i, { app: e, formatProtocol: r })
                  ),
                  e.editorIntro &&
                    t.append(
                      '<div class="detail"><h3>小编推荐</h3><p class="text">' +
                        e.editorIntro +
                        "</p></div>"
                    ),
                  setTimeout(function () {
                    o.initImgSlide({
                      imgBoxSelector: ".mod-detail-slide",
                      imgScrollBarSelector: ".mod-scroll-bar .scroll",
                    }),
                      $(".mod-detail-slide .lazyload").scrollLoading({});
                  }, 0))
                : t.html(
                    '<p style="text-align: center;margin-top: 20px;font-size: 14px;">抱歉，您访问的页面地址有误！</p>'
                  );
            })(e, n)
          : (function (e, n) {
              var t = $("body");
              (e && n) ||
                t.html(
                  '<div style="text-align: center;margin-top: 20px;font-size: 14px;">抱歉，您访问的页面地址有误！</div>'
                );
            })(e, n);
    }
    var d = a.getMainBtnText;
    function l(e, n) {
      e = $.trim(e || "").toLowerCase();
      var t = a.getMainBtnText(e, n);
      if ("loading" != e || n)
        s.removeClass("downloading is-disable").addClass("normal"),
          s.find("#normal-text").text(t),
          $(".ani-dot").remove();
      else {
        var o =
          "<span class='ani-dot-txt'>" +
          t +
          "</span><span class='ani-dot'>...</span>";
        s.removeClass("normal")
          .addClass("downloading is-disable")
          .find("#downloading-text")
          .html(o);
      }
    }
    (a.getMainBtnText = function (e, n) {
      var t = d(e, n),
        o = "";
      switch (e) {
        case "open":
        case "openwithoutyyb":
          o = "安全打开";
          break;
        case "update":
          o = "高速更新";
          break;
        case "loading":
          o = "下载中";
          break;
        case "down":
          o = "安全下载";
          break;
        case "iosdown":
          o = "去App Store下载";
          break;
        default:
          o = "安全下载";
      }
      return o || (o = t), o;
    }),
      c(),
      (window.page = { updateDownBtn: l });
  },
  function (e, n, t) {},
  function (e, n, t) {
    t(22),
      t(23),
      t(24),
      t(25),
      t(26),
      t(27),
      t(28),
      t(29),
      t(30),
      t(31),
      t(32),
      t(35),
      t(36);
    var o = t(38),
      i = t(39),
      a = t(40),
      r = t(5),
      s = t(4),
      c = t(2),
      d = t(42),
      l = t(6);
    t(52),
      (function (e) {
        o.init(),
          a.init(),
          e.AppInfoData &&
            (r.init(e.AppInfoData),
            r.appExtInfo.isCpInnerApp && c.setAppExtInfo("innerApp"),
            r.appExtInfo.isCpQQDownloader && c.setAppExtInfo("qqdownloader"),
            c.report({
              eventName: c.keyEventName.pageFinishRender,
              eventStartTime: c.pageStartTime,
              eventEndTime: Date.now(),
            }),
            s.reportPagePv(),
            e.JsBridge &&
              (e.JsBridge.onReady(function () {
                l.check(e.AppInfoData.appDetail.packageName, function (e, n) {
                  c.setInstallation({ yybVersion: e, cpAppVersion: n }),
                    d.init();
                });
              }),
              i.loadAndInit()));
      })(window);
  },
  function (e, n) {
    function t(e) {
      return (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var o,
      i = (function () {
        function e(e) {
          return null == e ? String(e) : M[Y.call(e)] || "object";
        }
        function n(n) {
          return "function" == e(n);
        }
        function o(e) {
          return null != e && e == e.window;
        }
        function i(e) {
          return null != e && e.nodeType == e.DOCUMENT_NODE;
        }
        function a(n) {
          return "object" == e(n);
        }
        function r(e) {
          return a(e) && !o(e) && Object.getPrototypeOf(e) == Object.prototype;
        }
        function s(e) {
          return e instanceof Array;
        }
        function c(e) {
          return "number" == typeof e.length;
        }
        function d(e) {
          return e.length > 0 ? A.fn.concat.apply([], e) : e;
        }
        function l(e) {
          return e
            .replace(/::/g, "/")
            .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
            .replace(/([a-z\d])([A-Z])/g, "$1_$2")
            .replace(/_/g, "-")
            .toLowerCase();
        }
        function p(e) {
          return e in B ? B[e] : (B[e] = new RegExp("(^|\\s)" + e + "(\\s|$)"));
        }
        function u(e, n) {
          return "number" != typeof n || O[l(e)] ? n : n + "px";
        }
        function w(e) {
          return "children" in e
            ? S.call(e.children)
            : A.map(e.childNodes, function (e) {
                if (1 == e.nodeType) return e;
              });
        }
        function f(e, n, t) {
          for (D in n)
            t && (r(n[D]) || s(n[D]))
              ? (r(n[D]) && !r(e[D]) && (e[D] = {}),
                s(n[D]) && !s(e[D]) && (e[D] = []),
                f(e[D], n[D], t))
              : n[D] !== y && (e[D] = n[D]);
        }
        function m(e, n) {
          return null == n ? A(e) : A(e).filter(n);
        }
        function g(e, t, o, i) {
          return n(t) ? t.call(e, o, i) : t;
        }
        function h(e, n, t) {
          null == t ? e.removeAttribute(n) : e.setAttribute(n, t);
        }
        function v(e, n) {
          var t = e.className,
            o = t && t.baseVal !== y;
          if (n === y) return o ? t.baseVal : t;
          o ? (t.baseVal = n) : (e.className = n);
        }
        function _(e) {
          var n;
          try {
            return e
              ? "true" == e ||
                  ("false" != e &&
                    ("null" == e
                      ? null
                      : /^0/.test(e) || isNaN((n = Number(e)))
                      ? /^[\[\{]/.test(e)
                        ? A.parseJSON(e)
                        : e
                      : n))
              : e;
          } catch (n) {
            return e;
          }
        }
        function b(e, n) {
          for (var t in (n(e), e.childNodes)) b(e.childNodes[t], n);
        }
        var y,
          D,
          A,
          E,
          k,
          T,
          N = [],
          S = N.slice,
          C = N.filter,
          I = window.document,
          x = {},
          B = {},
          O = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1,
          },
          R = /^\s*<(\w+|!)[^>]*>/,
          L = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
          q = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
          P = /^(?:body|html)$/i,
          Q = /([A-Z])/g,
          U = [
            "val",
            "css",
            "html",
            "text",
            "data",
            "width",
            "height",
            "offset",
          ],
          F = I.createElement("table"),
          V = I.createElement("tr"),
          J = {
            tr: I.createElement("tbody"),
            tbody: F,
            thead: F,
            tfoot: F,
            td: V,
            th: V,
            "*": I.createElement("div"),
          },
          j = /complete|loaded|interactive/,
          W = /^[\w-]*$/,
          M = {},
          Y = M.toString,
          $ = {},
          G = I.createElement("div"),
          H = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable",
          };
        return (
          ($.matches = function (e, n) {
            if (!n || !e || 1 !== e.nodeType) return !1;
            var t =
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.oMatchesSelector ||
              e.matchesSelector;
            if (t) return t.call(e, n);
            var o,
              i = e.parentNode,
              a = !i;
            return (
              a && (i = G).appendChild(e),
              (o = ~$.qsa(i, n).indexOf(e)),
              a && G.removeChild(e),
              o
            );
          }),
          (k = function (e) {
            return e.replace(/-+(.)?/g, function (e, n) {
              return n ? n.toUpperCase() : "";
            });
          }),
          (T = function (e) {
            return C.call(e, function (n, t) {
              return e.indexOf(n) == t;
            });
          }),
          ($.fragment = function (e, n, t) {
            var o, i, a;
            return (
              L.test(e) && (o = A(I.createElement(RegExp.$1))),
              o ||
                (e.replace && (e = e.replace(q, "<$1></$2>")),
                n === y && (n = R.test(e) && RegExp.$1),
                n in J || (n = "*"),
                ((a = J[n]).innerHTML = "" + e),
                (o = A.each(S.call(a.childNodes), function () {
                  a.removeChild(this);
                }))),
              r(t) &&
                ((i = A(o)),
                A.each(t, function (e, n) {
                  U.indexOf(e) > -1 ? i[e](n) : i.attr(e, n);
                })),
              o
            );
          }),
          ($.Z = function (e, n) {
            return ((e = e || []).__proto__ = A.fn), (e.selector = n || ""), e;
          }),
          ($.isZ = function (e) {
            return e instanceof $.Z;
          }),
          ($.init = function (e, t) {
            var o;
            if (!e) return $.Z();
            if ("string" == typeof e)
              if ("<" == (e = e.trim())[0] && R.test(e))
                (o = $.fragment(e, RegExp.$1, t)), (e = null);
              else {
                if (t !== y) return A(t).find(e);
                o = $.qsa(I, e);
              }
            else {
              if (n(e)) return A(I).ready(e);
              if ($.isZ(e)) return e;
              if (s(e))
                o = (function (e) {
                  return C.call(e, function (e) {
                    return null != e;
                  });
                })(e);
              else if (a(e)) (o = [e]), (e = null);
              else if (R.test(e))
                (o = $.fragment(e.trim(), RegExp.$1, t)), (e = null);
              else {
                if (t !== y) return A(t).find(e);
                o = $.qsa(I, e);
              }
            }
            return $.Z(o, e);
          }),
          ((A = function (e, n) {
            return $.init(e, n);
          }).extend = function (e) {
            var n,
              t = S.call(arguments, 1);
            return (
              "boolean" == typeof e && ((n = e), (e = t.shift())),
              t.forEach(function (t) {
                f(e, t, n);
              }),
              e
            );
          }),
          ($.qsa = function (e, n) {
            var t,
              o = "#" == n[0],
              a = !o && "." == n[0],
              r = o || a ? n.slice(1) : n,
              s = W.test(r);
            return i(e) && s && o
              ? (t = e.getElementById(r))
                ? [t]
                : []
              : 1 !== e.nodeType && 9 !== e.nodeType
              ? []
              : S.call(
                  s && !o
                    ? a
                      ? e.getElementsByClassName(r)
                      : e.getElementsByTagName(n)
                    : e.querySelectorAll(n)
                );
          }),
          (A.contains = function (e, n) {
            return e !== n && e.contains(n);
          }),
          (A.type = e),
          (A.isFunction = n),
          (A.isWindow = o),
          (A.isArray = s),
          (A.isPlainObject = r),
          (A.isEmptyObject = function (e) {
            var n;
            for (n in e) return !1;
            return !0;
          }),
          (A.inArray = function (e, n, t) {
            return N.indexOf.call(n, e, t);
          }),
          (A.camelCase = k),
          (A.trim = function (e) {
            return null == e ? "" : String.prototype.trim.call(e);
          }),
          (A.uuid = 0),
          (A.support = {}),
          (A.expr = {}),
          (A.map = function (e, n) {
            var t,
              o,
              i,
              a = [];
            if (c(e))
              for (o = 0; o < e.length; o++)
                null != (t = n(e[o], o)) && a.push(t);
            else for (i in e) null != (t = n(e[i], i)) && a.push(t);
            return d(a);
          }),
          (A.each = function (e, n) {
            var t, o;
            if (c(e)) {
              for (t = 0; t < e.length; t++)
                if (!1 === n.call(e[t], t, e[t])) return e;
            } else for (o in e) if (!1 === n.call(e[o], o, e[o])) return e;
            return e;
          }),
          (A.grep = function (e, n) {
            return C.call(e, n);
          }),
          window.JSON && (A.parseJSON = JSON.parse),
          A.each(
            "Boolean Number String Function Array Date RegExp Object Error".split(
              " "
            ),
            function (e, n) {
              M["[object " + n + "]"] = n.toLowerCase();
            }
          ),
          (A.fn = {
            forEach: N.forEach,
            reduce: N.reduce,
            push: N.push,
            sort: N.sort,
            indexOf: N.indexOf,
            concat: N.concat,
            map: function (e) {
              return A(
                A.map(this, function (n, t) {
                  return e.call(n, t, n);
                })
              );
            },
            slice: function () {
              return A(S.apply(this, arguments));
            },
            ready: function (e) {
              return (
                j.test(I.readyState) && I.body
                  ? e(A)
                  : I.addEventListener(
                      "DOMContentLoaded",
                      function () {
                        e(A);
                      },
                      !1
                    ),
                this
              );
            },
            get: function (e) {
              return e === y
                ? S.call(this)
                : this[e >= 0 ? e : e + this.length];
            },
            toArray: function () {
              return this.get();
            },
            size: function () {
              return this.length;
            },
            remove: function () {
              return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this);
              });
            },
            each: function (e) {
              return (
                N.every.call(this, function (n, t) {
                  return !1 !== e.call(n, t, n);
                }),
                this
              );
            },
            filter: function (e) {
              return n(e)
                ? this.not(this.not(e))
                : A(
                    C.call(this, function (n) {
                      return $.matches(n, e);
                    })
                  );
            },
            add: function (e, n) {
              return A(T(this.concat(A(e, n))));
            },
            is: function (e) {
              return this.length > 0 && $.matches(this[0], e);
            },
            not: function (e) {
              var t = [];
              if (n(e) && e.call !== y)
                this.each(function (n) {
                  e.call(this, n) || t.push(this);
                });
              else {
                var o =
                  "string" == typeof e
                    ? this.filter(e)
                    : c(e) && n(e.item)
                    ? S.call(e)
                    : A(e);
                this.forEach(function (e) {
                  o.indexOf(e) < 0 && t.push(e);
                });
              }
              return A(t);
            },
            has: function (e) {
              return this.filter(function () {
                return a(e) ? A.contains(this, e) : A(this).find(e).size();
              });
            },
            eq: function (e) {
              return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
            },
            first: function () {
              var e = this[0];
              return e && !a(e) ? e : A(e);
            },
            last: function () {
              var e = this[this.length - 1];
              return e && !a(e) ? e : A(e);
            },
            find: function (e) {
              var n = this;
              return "object" == t(e)
                ? A(e).filter(function () {
                    var e = this;
                    return N.some.call(n, function (n) {
                      return A.contains(n, e);
                    });
                  })
                : 1 == this.length
                ? A($.qsa(this[0], e))
                : this.map(function () {
                    return $.qsa(this, e);
                  });
            },
            closest: function (e, n) {
              var o = this[0],
                a = !1;
              for (
                "object" == t(e) && (a = A(e));
                o && !(a ? a.indexOf(o) >= 0 : $.matches(o, e));

              )
                o = o !== n && !i(o) && o.parentNode;
              return A(o);
            },
            parents: function (e) {
              for (var n = [], t = this; t.length > 0; )
                t = A.map(t, function (e) {
                  if ((e = e.parentNode) && !i(e) && n.indexOf(e) < 0)
                    return n.push(e), e;
                });
              return m(n, e);
            },
            parent: function (e) {
              return m(T(this.pluck("parentNode")), e);
            },
            children: function (e) {
              return m(
                this.map(function () {
                  return w(this);
                }),
                e
              );
            },
            contents: function () {
              return this.map(function () {
                return S.call(this.childNodes);
              });
            },
            siblings: function (e) {
              return m(
                this.map(function (e, n) {
                  return C.call(w(n.parentNode), function (e) {
                    return e !== n;
                  });
                }),
                e
              );
            },
            empty: function () {
              return this.each(function () {
                this.innerHTML = "";
              });
            },
            pluck: function (e) {
              return A.map(this, function (n) {
                return n[e];
              });
            },
            show: function () {
              return this.each(function () {
                "none" == this.style.display && (this.style.display = ""),
                  "none" ==
                    getComputedStyle(this, "").getPropertyValue("display") &&
                    (this.style.display = (function (e) {
                      var n, t;
                      return (
                        x[e] ||
                          ((n = I.createElement(e)),
                          I.body.appendChild(n),
                          (t = getComputedStyle(n, "").getPropertyValue(
                            "display"
                          )),
                          n.parentNode.removeChild(n),
                          "none" == t && (t = "block"),
                          (x[e] = t)),
                        x[e]
                      );
                    })(this.nodeName));
              });
            },
            replaceWith: function (e) {
              return this.before(e).remove();
            },
            wrap: function (e) {
              var t = n(e);
              if (this[0] && !t)
                var o = A(e).get(0),
                  i = o.parentNode || this.length > 1;
              return this.each(function (n) {
                A(this).wrapAll(t ? e.call(this, n) : i ? o.cloneNode(!0) : o);
              });
            },
            wrapAll: function (e) {
              if (this[0]) {
                var n;
                for (A(this[0]).before((e = A(e))); (n = e.children()).length; )
                  e = n.first();
                A(e).append(this);
              }
              return this;
            },
            wrapInner: function (e) {
              var t = n(e);
              return this.each(function (n) {
                var o = A(this),
                  i = o.contents(),
                  a = t ? e.call(this, n) : e;
                i.length ? i.wrapAll(a) : o.append(a);
              });
            },
            unwrap: function () {
              return (
                this.parent().each(function () {
                  A(this).replaceWith(A(this).children());
                }),
                this
              );
            },
            clone: function () {
              return this.map(function () {
                return this.cloneNode(!0);
              });
            },
            hide: function () {
              return this.css("display", "none");
            },
            toggle: function (e) {
              return this.each(function () {
                var n = A(this);
                (e === y ? "none" == n.css("display") : e)
                  ? n.show()
                  : n.hide();
              });
            },
            prev: function (e) {
              return A(this.pluck("previousElementSibling")).filter(e || "*");
            },
            next: function (e) {
              return A(this.pluck("nextElementSibling")).filter(e || "*");
            },
            html: function (e) {
              return 0 === arguments.length
                ? this.length > 0
                  ? this[0].innerHTML
                  : null
                : this.each(function (n) {
                    var t = this.innerHTML;
                    A(this).empty().append(g(this, e, n, t));
                  });
            },
            text: function (e) {
              return 0 === arguments.length
                ? this.length > 0
                  ? this[0].textContent
                  : null
                : this.each(function () {
                    this.textContent = e === y ? "" : "" + e;
                  });
            },
            attr: function (e, n) {
              var t;
              return "string" == typeof e && n === y
                ? 0 == this.length || 1 !== this[0].nodeType
                  ? y
                  : "value" == e && "INPUT" == this[0].nodeName
                  ? this.val()
                  : !(t = this[0].getAttribute(e)) && e in this[0]
                  ? this[0][e]
                  : t
                : this.each(function (t) {
                    if (1 === this.nodeType)
                      if (a(e)) for (D in e) h(this, D, e[D]);
                      else h(this, e, g(this, n, t, this.getAttribute(e)));
                  });
            },
            removeAttr: function (e) {
              return this.each(function () {
                1 === this.nodeType && h(this, e);
              });
            },
            prop: function (e, n) {
              return (
                (e = H[e] || e),
                n === y
                  ? this[0] && this[0][e]
                  : this.each(function (t) {
                      this[e] = g(this, n, t, this[e]);
                    })
              );
            },
            data: function (e, n) {
              var t = this.attr("data-" + e.replace(Q, "-$1").toLowerCase(), n);
              return null !== t ? _(t) : y;
            },
            val: function (e) {
              return 0 === arguments.length
                ? this[0] &&
                    (this[0].multiple
                      ? A(this[0])
                          .find("option")
                          .filter(function () {
                            return this.selected;
                          })
                          .pluck("value")
                      : this[0].value)
                : this.each(function (n) {
                    this.value = g(this, e, n, this.value);
                  });
            },
            offset: function (e) {
              if (e)
                return this.each(function (n) {
                  var t = A(this),
                    o = g(this, e, n, t.offset()),
                    i = t.offsetParent().offset(),
                    a = { top: o.top - i.top, left: o.left - i.left };
                  "static" == t.css("position") && (a.position = "relative"),
                    t.css(a);
                });
              if (0 == this.length) return null;
              var n = this[0].getBoundingClientRect();
              return {
                left: n.left + window.pageXOffset,
                top: n.top + window.pageYOffset,
                width: Math.round(n.width),
                height: Math.round(n.height),
              };
            },
            css: function (n, t) {
              if (arguments.length < 2) {
                var o = this[0],
                  i = getComputedStyle(o, "");
                if (!o) return;
                if ("string" == typeof n)
                  return o.style[k(n)] || i.getPropertyValue(n);
                if (s(n)) {
                  var a = {};
                  return (
                    A.each(s(n) ? n : [n], function (e, n) {
                      a[n] = o.style[k(n)] || i.getPropertyValue(n);
                    }),
                    a
                  );
                }
              }
              var r = "";
              if ("string" == e(n))
                t || 0 === t
                  ? (r = l(n) + ":" + u(n, t))
                  : this.each(function () {
                      this.style.removeProperty(l(n));
                    });
              else
                for (D in n)
                  n[D] || 0 === n[D]
                    ? (r += l(D) + ":" + u(D, n[D]) + ";")
                    : this.each(function () {
                        this.style.removeProperty(l(D));
                      });
              return this.each(function () {
                this.style.cssText += ";" + r;
              });
            },
            index: function (e) {
              return e
                ? this.indexOf(A(e)[0])
                : this.parent().children().indexOf(this[0]);
            },
            hasClass: function (e) {
              return (
                !!e &&
                N.some.call(
                  this,
                  function (e) {
                    return this.test(v(e));
                  },
                  p(e)
                )
              );
            },
            addClass: function (e) {
              return e
                ? this.each(function (n) {
                    E = [];
                    var t = v(this);
                    g(this, e, n, t)
                      .split(/\s+/g)
                      .forEach(function (e) {
                        A(this).hasClass(e) || E.push(e);
                      }, this),
                      E.length && v(this, t + (t ? " " : "") + E.join(" "));
                  })
                : this;
            },
            removeClass: function (e) {
              return this.each(function (n) {
                if (e === y) return v(this, "");
                (E = v(this)),
                  g(this, e, n, E)
                    .split(/\s+/g)
                    .forEach(function (e) {
                      E = E.replace(p(e), " ");
                    }),
                  v(this, E.trim());
              });
            },
            toggleClass: function (e, n) {
              return e
                ? this.each(function (t) {
                    var o = A(this);
                    g(this, e, t, v(this))
                      .split(/\s+/g)
                      .forEach(function (e) {
                        (n === y ? !o.hasClass(e) : n)
                          ? o.addClass(e)
                          : o.removeClass(e);
                      });
                  })
                : this;
            },
            scrollTop: function (e) {
              if (this.length) {
                var n = "scrollTop" in this[0];
                return e === y
                  ? n
                    ? this[0].scrollTop
                    : this[0].pageYOffset
                  : this.each(
                      n
                        ? function () {
                            this.scrollTop = e;
                          }
                        : function () {
                            this.scrollTo(this.scrollX, e);
                          }
                    );
              }
            },
            scrollLeft: function (e) {
              if (this.length) {
                var n = "scrollLeft" in this[0];
                return e === y
                  ? n
                    ? this[0].scrollLeft
                    : this[0].pageXOffset
                  : this.each(
                      n
                        ? function () {
                            this.scrollLeft = e;
                          }
                        : function () {
                            this.scrollTo(e, this.scrollY);
                          }
                    );
              }
            },
            position: function () {
              if (this.length) {
                var e = this[0],
                  n = this.offsetParent(),
                  t = this.offset(),
                  o = P.test(n[0].nodeName) ? { top: 0, left: 0 } : n.offset();
                return (
                  (t.top -= parseFloat(A(e).css("margin-top")) || 0),
                  (t.left -= parseFloat(A(e).css("margin-left")) || 0),
                  (o.top += parseFloat(A(n[0]).css("border-top-width")) || 0),
                  (o.left += parseFloat(A(n[0]).css("border-left-width")) || 0),
                  { top: t.top - o.top, left: t.left - o.left }
                );
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent || I.body;
                  e && !P.test(e.nodeName) && "static" == A(e).css("position");

                )
                  e = e.offsetParent;
                return e;
              });
            },
          }),
          (A.fn.detach = A.fn.remove),
          ["width", "height"].forEach(function (e) {
            var n = e.replace(/./, function (e) {
              return e[0].toUpperCase();
            });
            A.fn[e] = function (t) {
              var a,
                r = this[0];
              return t === y
                ? o(r)
                  ? r["inner" + n]
                  : i(r)
                  ? r.documentElement["scroll" + n]
                  : (a = this.offset()) && a[e]
                : this.each(function (n) {
                    (r = A(this)).css(e, g(this, t, n, r[e]()));
                  });
            };
          }),
          ["after", "prepend", "before", "append"].forEach(function (n, t) {
            var o = t % 2;
            (A.fn[n] = function () {
              var n,
                i,
                a = A.map(arguments, function (t) {
                  return "object" == (n = e(t)) || "array" == n || null == t
                    ? t
                    : $.fragment(t);
                }),
                r = this.length > 1;
              return a.length < 1
                ? this
                : this.each(function (e, n) {
                    (i = o ? n : n.parentNode),
                      (n =
                        0 == t
                          ? n.nextSibling
                          : 1 == t
                          ? n.firstChild
                          : 2 == t
                          ? n
                          : null),
                      a.forEach(function (e) {
                        if (r) e = e.cloneNode(!0);
                        else if (!i) return A(e).remove();
                        b(i.insertBefore(e, n), function (e) {
                          null != e.nodeName &&
                            "SCRIPT" === e.nodeName.toUpperCase() &&
                            (!e.type || "text/javascript" === e.type) &&
                            !e.src &&
                            window.eval.call(window, e.innerHTML);
                        });
                      });
                  });
            }),
              (A.fn[
                o ? n + "To" : "insert" + (t ? "Before" : "After")
              ] = function (e) {
                return A(e)[n](this), this;
              });
          }),
          ($.Z.prototype = A.fn),
          ($.uniq = T),
          ($.deserializeValue = _),
          (A.zepto = $),
          A
        );
      })();
    (window.Zepto = i),
      void 0 === window.$ && (window.$ = i),
      (function (e) {
        function n(e) {
          return e._zid || (e._zid = p++);
        }
        function t(e, t, i, a) {
          if ((t = o(t)).ns)
            var r = (function (e) {
              return new RegExp(
                "(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)"
              );
            })(t.ns);
          return (m[n(e)] || []).filter(function (e) {
            return (
              e &&
              (!t.e || e.e == t.e) &&
              (!t.ns || r.test(e.ns)) &&
              (!i || n(e.fn) === n(i)) &&
              (!a || e.sel == a)
            );
          });
        }
        function o(e) {
          var n = ("" + e).split(".");
          return { e: n[0], ns: n.slice(1).sort().join(" ") };
        }
        function i(e, n) {
          return (e.del && !h && e.e in v) || !!n;
        }
        function a(e) {
          return _[e] || (h && v[e]) || e;
        }
        function r(t, r, s, d, p, u, w) {
          var f = n(t),
            g = m[f] || (m[f] = []);
          r.split(/\s/).forEach(function (n) {
            if ("ready" == n) return e(document).ready(s);
            var r = o(n);
            (r.fn = s),
              (r.sel = p),
              r.e in _ &&
                (s = function (n) {
                  var t = n.relatedTarget;
                  if (!t || (t !== this && !e.contains(this, t)))
                    return r.fn.apply(this, arguments);
                }),
              (r.del = u);
            var f = u || s;
            (r.proxy = function (e) {
              if (!(e = c(e)).isImmediatePropagationStopped()) {
                e.data = d;
                var n = f.apply(t, e._args == l ? [e] : [e].concat(e._args));
                return !1 === n && (e.preventDefault(), e.stopPropagation()), n;
              }
            }),
              (r.i = g.length),
              g.push(r),
              "addEventListener" in t &&
                t.addEventListener(a(r.e), r.proxy, i(r, w));
          });
        }
        function s(e, o, r, s, c) {
          var d = n(e);
          (o || "").split(/\s/).forEach(function (n) {
            t(e, n, r, s).forEach(function (n) {
              delete m[d][n.i],
                "removeEventListener" in e &&
                  e.removeEventListener(a(n.e), n.proxy, i(n, c));
            });
          });
        }
        function c(n, t) {
          return (
            (!t && n.isDefaultPrevented) ||
              (t || (t = n),
              e.each(A, function (e, o) {
                var i = t[e];
                (n[e] = function () {
                  return (this[o] = b), i && i.apply(t, arguments);
                }),
                  (n[o] = y);
              }),
              (t.defaultPrevented !== l
                ? t.defaultPrevented
                : "returnValue" in t
                ? !1 === t.returnValue
                : t.getPreventDefault && t.getPreventDefault()) &&
                (n.isDefaultPrevented = b)),
            n
          );
        }
        function d(e) {
          var n,
            t = { originalEvent: e };
          for (n in e) !D.test(n) && e[n] !== l && (t[n] = e[n]);
          return c(t, e);
        }
        e.zepto.qsa;
        var l,
          p = 1,
          u = Array.prototype.slice,
          w = e.isFunction,
          f = function (e) {
            return "string" == typeof e;
          },
          m = {},
          g = {},
          h = "onfocusin" in window,
          v = { focus: "focusin", blur: "focusout" },
          _ = { mouseenter: "mouseover", mouseleave: "mouseout" };
        (g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents"),
          (e.event = { add: r, remove: s }),
          (e.proxy = function (t, o) {
            if (w(t)) {
              var i = function () {
                return t.apply(o, arguments);
              };
              return (i._zid = n(t)), i;
            }
            if (f(o)) return e.proxy(t[o], t);
            throw new TypeError("expected function");
          }),
          (e.fn.bind = function (e, n, t) {
            return this.on(e, n, t);
          }),
          (e.fn.unbind = function (e, n) {
            return this.off(e, n);
          }),
          (e.fn.one = function (e, n, t, o) {
            return this.on(e, n, t, o, 1);
          });
        var b = function () {
            return !0;
          },
          y = function () {
            return !1;
          },
          D = /^([A-Z]|returnValue$|layer[XY]$)/,
          A = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped",
          };
        (e.fn.delegate = function (e, n, t) {
          return this.on(n, e, t);
        }),
          (e.fn.undelegate = function (e, n, t) {
            return this.off(n, e, t);
          }),
          (e.fn.live = function (n, t) {
            return e(document.body).delegate(this.selector, n, t), this;
          }),
          (e.fn.die = function (n, t) {
            return e(document.body).undelegate(this.selector, n, t), this;
          }),
          (e.fn.on = function (n, t, o, i, a) {
            var c,
              p,
              m = this;
            return n && !f(n)
              ? (e.each(n, function (e, n) {
                  m.on(e, t, o, n, a);
                }),
                m)
              : (!f(t) && !w(i) && !1 !== i && ((i = o), (o = t), (t = l)),
                (w(o) || !1 === o) && ((i = o), (o = l)),
                !1 === i && (i = y),
                m.each(function (l, w) {
                  a &&
                    (c = function (e) {
                      return s(w, e.type, i), i.apply(this, arguments);
                    }),
                    t &&
                      (p = function (n) {
                        var o,
                          a = e(n.target).closest(t, w).get(0);
                        if (a && a !== w)
                          return (
                            (o = e.extend(d(n), {
                              currentTarget: a,
                              liveFired: w,
                            })),
                            (c || i).apply(a, [o].concat(u.call(arguments, 1)))
                          );
                      }),
                    r(w, n, i, o, t, p || c);
                }));
          }),
          (e.fn.off = function (n, t, o) {
            var i = this;
            return n && !f(n)
              ? (e.each(n, function (e, n) {
                  i.off(e, t, n);
                }),
                i)
              : (!f(t) && !w(o) && !1 !== o && ((o = t), (t = l)),
                !1 === o && (o = y),
                i.each(function () {
                  s(this, n, o, t);
                }));
          }),
          (e.fn.trigger = function (n, t) {
            return (
              ((n = f(n) || e.isPlainObject(n) ? e.Event(n) : c(n))._args = t),
              this.each(function () {
                "dispatchEvent" in this
                  ? this.dispatchEvent(n)
                  : e(this).triggerHandler(n, t);
              })
            );
          }),
          (e.fn.triggerHandler = function (n, o) {
            var i, a;
            return (
              this.each(function (r, s) {
                ((i = d(f(n) ? e.Event(n) : n))._args = o),
                  (i.target = s),
                  e.each(t(s, n.type || n), function (e, n) {
                    if (((a = n.proxy(i)), i.isImmediatePropagationStopped()))
                      return !1;
                  });
              }),
              a
            );
          }),
          "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error"
            .split(" ")
            .forEach(function (n) {
              e.fn[n] = function (e) {
                return e ? this.bind(n, e) : this.trigger(n);
              };
            }),
          ["focus", "blur"].forEach(function (n) {
            e.fn[n] = function (e) {
              return (
                e
                  ? this.bind(n, e)
                  : this.each(function () {
                      try {
                        this[n]();
                      } catch (e) {}
                    }),
                this
              );
            };
          }),
          (e.Event = function (e, n) {
            f(e) || (e = (n = e).type);
            var t = document.createEvent(g[e] || "Events"),
              o = !0;
            if (n)
              for (var i in n) "bubbles" == i ? (o = !!n[i]) : (t[i] = n[i]);
            return t.initEvent(e, o, !0), c(t);
          });
      })(i),
      (function (e) {
        function n(n, t, o, i) {
          if (n.global)
            return (function (n, t, o) {
              var i = e.Event(t);
              return e(n).trigger(i, o), !i.isDefaultPrevented();
            })(t || u, o, i);
        }
        function t(e, t) {
          var o = t.context;
          if (
            !1 === t.beforeSend.call(o, e, t) ||
            !1 === n(t, o, "ajaxBeforeSend", [e, t])
          )
            return !1;
          n(t, o, "ajaxSend", [e, t]);
        }
        function o(e, t, o, i) {
          var r = o.context,
            s = "success";
          o.success.call(r, e, s, t),
            i && i.resolveWith(r, [e, s, t]),
            n(o, r, "ajaxSuccess", [t, o, e]),
            a(s, t, o);
        }
        function i(e, t, o, i, r) {
          var s = i.context;
          i.error.call(s, o, t, e),
            r && r.rejectWith(s, [o, t, e]),
            n(i, s, "ajaxError", [o, i, e || t]),
            a(t, o, i);
        }
        function a(t, o, i) {
          var a = i.context;
          i.complete.call(a, o, t),
            n(i, a, "ajaxComplete", [o, i]),
            (function (t) {
              t.global && !--e.active && n(t, null, "ajaxStop");
            })(i);
        }
        function r() {}
        function s(e, n) {
          return "" == n ? e : (e + "&" + n).replace(/[&?]{1,2}/, "?");
        }
        function c(n, t, o, i) {
          var a = !e.isFunction(t);
          return {
            url: n,
            data: a ? t : void 0,
            success: a ? (e.isFunction(o) ? o : void 0) : t,
            dataType: (a && i) || o,
          };
        }
        var d,
          l,
          p = 0,
          u = window.document,
          w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          f = /^(?:text|application)\/javascript/i,
          m = /^(?:text|application)\/xml/i,
          g = "application/json",
          h = "text/html",
          v = /^\s*$/;
        (e.active = 0),
          (e.ajaxJSONP = function (n, a) {
            if ("type" in n) {
              var r,
                s,
                c = n.jsonpCallback,
                d = (e.isFunction(c) ? c() : c) || "jsonp" + ++p,
                l = u.createElement("script"),
                w = window[d],
                f = function (n) {
                  e(l).triggerHandler("error", n || "abort");
                },
                m = { abort: f };
              return (
                a && a.promise(m),
                e(l).on("load error", function (t, c) {
                  clearTimeout(s),
                    e(l).off().remove(),
                    "error" != t.type && r
                      ? o(r[0], m, n, a)
                      : i(null, c || "error", m, n, a),
                    (window[d] = w),
                    r && e.isFunction(w) && w(r[0]),
                    (w = r = void 0);
                }),
                !1 === t(m, n)
                  ? (f("abort"), m)
                  : ((window[d] = function () {
                      r = arguments;
                    }),
                    (l.src = n.url.replace(/=\?/, "=" + d)),
                    u.head.appendChild(l),
                    n.timeout > 0 &&
                      (s = setTimeout(function () {
                        f("timeout");
                      }, n.timeout)),
                    m)
              );
            }
            return e.ajax(n);
          }),
          (e.ajaxSettings = {
            type: "GET",
            beforeSend: r,
            success: r,
            error: r,
            complete: r,
            context: null,
            global: !0,
            xhr: function () {
              return new window.XMLHttpRequest();
            },
            accepts: {
              script:
                "text/javascript, application/javascript, application/x-javascript",
              json: g,
              xml: "application/xml, text/xml",
              html: h,
              text: "text/plain",
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0,
          }),
          (e.ajax = function (a) {
            var c,
              p = e.extend({}, a || {}),
              u = e.Deferred && e.Deferred();
            for (d in e.ajaxSettings)
              void 0 === p[d] && (p[d] = e.ajaxSettings[d]);
            (c = p).global && 0 == e.active++ && n(c, null, "ajaxStart"),
              p.crossDomain ||
                (p.crossDomain =
                  /^([\w-]+:)?\/\/([^\/]+)/.test(p.url) &&
                  RegExp.$2 != window.location.host),
              p.url || (p.url = window.location.toString()),
              (function (n) {
                n.processData &&
                  n.data &&
                  "string" != e.type(n.data) &&
                  (n.data = e.param(n.data, n.traditional)),
                  n.data &&
                    (!n.type || "GET" == n.type.toUpperCase()) &&
                    ((n.url = s(n.url, n.data)), (n.data = void 0));
              })(p),
              !1 === p.cache && (p.url = s(p.url, "_=" + Date.now()));
            var w = p.dataType,
              _ = /=\?/.test(p.url);
            if ("jsonp" == w || _)
              return (
                _ ||
                  (p.url = s(
                    p.url,
                    p.jsonp
                      ? p.jsonp + "=?"
                      : !1 === p.jsonp
                      ? ""
                      : "callback=?"
                  )),
                e.ajaxJSONP(p, u)
              );
            var b,
              y = p.accepts[w],
              D = {},
              A = function (e, n) {
                D[e.toLowerCase()] = [e, n];
              },
              E = /^([\w-]+:)\/\//.test(p.url)
                ? RegExp.$1
                : window.location.protocol,
              k = p.xhr(),
              T = k.setRequestHeader;
            if (
              (u && u.promise(k),
              p.crossDomain || A("X-Requested-With", "XMLHttpRequest"),
              A("Accept", y || "*/*"),
              (y = p.mimeType || y) &&
                (y.indexOf(",") > -1 && (y = y.split(",", 2)[0]),
                k.overrideMimeType && k.overrideMimeType(y)),
              (p.contentType ||
                (!1 !== p.contentType &&
                  p.data &&
                  "GET" != p.type.toUpperCase())) &&
                A(
                  "Content-Type",
                  p.contentType || "application/x-www-form-urlencoded"
                ),
              p.headers)
            )
              for (l in p.headers) A(l, p.headers[l]);
            if (
              ((k.setRequestHeader = A),
              (k.onreadystatechange = function () {
                if (4 == k.readyState) {
                  (k.onreadystatechange = r), clearTimeout(b);
                  var n,
                    t = !1;
                  if (
                    (k.status >= 200 && k.status < 300) ||
                    304 == k.status ||
                    (0 == k.status && "file:" == E)
                  ) {
                    (w =
                      w ||
                      (function (e) {
                        return (
                          e && (e = e.split(";", 2)[0]),
                          (e &&
                            (e == h
                              ? "html"
                              : e == g
                              ? "json"
                              : f.test(e)
                              ? "script"
                              : m.test(e) && "xml")) ||
                            "text"
                        );
                      })(p.mimeType || k.getResponseHeader("content-type"))),
                      (n = k.responseText);
                    try {
                      "script" == w
                        ? (0, eval)(n)
                        : "xml" == w
                        ? (n = k.responseXML)
                        : "json" == w &&
                          (n = v.test(n) ? null : e.parseJSON(n));
                    } catch (e) {
                      t = e;
                    }
                    t ? i(t, "parsererror", k, p, u) : o(n, k, p, u);
                  } else
                    i(
                      k.statusText || null,
                      k.status ? "error" : "abort",
                      k,
                      p,
                      u
                    );
                }
              }),
              !1 === t(k, p))
            )
              return k.abort(), i(null, "abort", k, p, u), k;
            if (p.xhrFields) for (l in p.xhrFields) k[l] = p.xhrFields[l];
            var N = !("async" in p) || p.async;
            for (l in (k.open(p.type, p.url, N, p.username, p.password), D))
              T.apply(k, D[l]);
            return (
              p.timeout > 0 &&
                (b = setTimeout(function () {
                  (k.onreadystatechange = r),
                    k.abort(),
                    i(null, "timeout", k, p, u);
                }, p.timeout)),
              k.send(p.data ? p.data : null),
              k
            );
          }),
          (e.get = function (n, t, o, i) {
            return e.ajax(c.apply(null, arguments));
          }),
          (e.post = function (n, t, o, i) {
            var a = c.apply(null, arguments);
            return (a.type = "POST"), e.ajax(a);
          }),
          (e.getJSON = function (n, t, o) {
            var i = c.apply(null, arguments);
            return (i.dataType = "json"), e.ajax(i);
          }),
          (e.fn.load = function (n, t, o) {
            if (!this.length) return this;
            var i,
              a = this,
              r = n.split(/\s/),
              s = c(n, t, o),
              d = s.success;
            return (
              r.length > 1 && ((s.url = r[0]), (i = r[1])),
              (s.success = function (n) {
                a.html(i ? e("<div>").html(n.replace(w, "")).find(i) : n),
                  d && d.apply(a, arguments);
              }),
              e.ajax(s),
              this
            );
          });
        var _ = encodeURIComponent;
        e.param = function (n, t) {
          var o = [];
          return (
            (o.add = function (e, n) {
              this.push(_(e) + "=" + _(n));
            }),
            (function n(t, o, i, a) {
              var r,
                s = e.isArray(o),
                c = e.isPlainObject(o);
              e.each(o, function (o, d) {
                (r = e.type(d)),
                  a &&
                    (o = i
                      ? a
                      : a +
                        "[" +
                        (c || "object" == r || "array" == r ? o : "") +
                        "]"),
                  !a && s
                    ? t.add(d.name, d.value)
                    : "array" == r || (!i && "object" == r)
                    ? n(t, d, i, o)
                    : t.add(o, d);
              });
            })(o, n, t),
            o.join("&").replace(/%20/g, "+")
          );
        };
      })(i),
      ((o = i).fn.serializeArray = function () {
        var e,
          n = [];
        return (
          o([].slice.call(this.get(0).elements)).each(function () {
            var t = (e = o(this)).attr("type");
            "fieldset" != this.nodeName.toLowerCase() &&
              !this.disabled &&
              "submit" != t &&
              "reset" != t &&
              "button" != t &&
              (("radio" != t && "checkbox" != t) || this.checked) &&
              n.push({ name: e.attr("name"), value: e.val() });
          }),
          n
        );
      }),
      (o.fn.serialize = function () {
        var e = [];
        return (
          this.serializeArray().forEach(function (n) {
            e.push(
              encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value)
            );
          }),
          e.join("&")
        );
      }),
      (o.fn.submit = function (e) {
        if (e) this.bind("submit", e);
        else if (this.length) {
          var n = o.Event("submit");
          this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit();
        }
        return this;
      }),
      (function (e) {
        "__proto__" in {} ||
          e.extend(e.zepto, {
            Z: function (n, t) {
              return (
                (n = n || []),
                e.extend(n, e.fn),
                (n.selector = t || ""),
                (n.__Z = !0),
                n
              );
            },
            isZ: function (n) {
              return "array" === e.type(n) && "__Z" in n;
            },
          });
        try {
          getComputedStyle(void 0);
        } catch (e) {
          var n = getComputedStyle;
          window.getComputedStyle = function (e) {
            try {
              return n(e);
            } catch (e) {
              return null;
            }
          };
        }
      })(i);
  },
  function (e, n) {
    var t;
    (t = Zepto).extend(t.fn, {
      cookie: function (e, n, o) {
        var i, a, r, s;
        return arguments.length > 1 && "[object Object]" !== String(n)
          ? ((o = t.extend({}, o)),
            null == n && (o.expires = -1),
            "number" == typeof o.expires &&
              ((i = 24 * o.expires * 60 * 60 * 1e3),
              (a = o.expires = new Date()).setTime(a.getTime() + i)),
            (n = String(n)),
            (document.cookie = [
              encodeURIComponent(e),
              "=",
              o.raw ? n : encodeURIComponent(n),
              o.expires ? "; expires=" + o.expires.toUTCString() : "",
              o.path ? "; path=" + o.path : "",
              o.domain ? "; domain=" + o.domain : "",
              o.secure ? "; secure" : "",
            ].join("")))
          : ((s = (o = n || {}).raw
              ? function (e) {
                  return e;
                }
              : decodeURIComponent),
            (r = new RegExp(
              "(?:^|; )" + encodeURIComponent(e) + "=([^;]*)"
            ).exec(document.cookie))
              ? s(r[1])
              : null);
      },
    });
  },
  function (e, n) {
    window.JsBridge = (function (e, n, t) {
      ((e = e || {}).SCENE_NONE = 0),
        (e.SCENE_DOWNLOADER = 1),
        (e.SCENE_DOWNLOADER_DETAIL = 2 | e.SCENE_DOWNLOADER),
        (e.SCENE_DOWNLOADER_EXTERNAL = 4 | e.SCENE_DOWNLOADER),
        (e.SCENE_DOWNLOADER_SDK = 8 | e.SCENE_DOWNLOADER),
        (e.SCENE_MOBILEQ = 16),
        (e.SCENE_WECHAT = 32),
        (e.SCENE_QQBOWSER = 48),
        (e.SCENE_UNJS = 64),
        (e.SCENE_MTT = 4096),
        (e.SCENE = e.SCENE_NONE),
        (e._greaterThanOrEqual = function (e, n) {
          (e = String(e).split(".")), (n = String(n).split("."));
          try {
            for (var t = 0, o = Math.max(e.length, n.length); t < o; t++) {
              var i = (isFinite(e[t]) && Number(e[t])) || 0,
                a = (isFinite(n[t]) && Number(n[t])) || 0;
              if (i < a) return !1;
              if (i > a) return !0;
            }
          } catch (e) {
            return !1;
          }
          return !0;
        });
      var o = [],
        i = {};
      (e.callWithScheme = function (n) {
        e._callWithScheme(n);
      }),
        (e._callWithScheme = function (e, n) {
          if (/MQQBrowser/gi.test(navigator.userAgent)) location.href = e;
          else {
            for (var t, a = 0; (t = o[a]) && t._busy; a++);
            (t && !t._busy) ||
              (t = (function () {
                var e = document.createElement("iframe");
                return (
                  o.push(e),
                  (e.style.cssText =
                    "position:absolute;left:0;top:0;width:0;height:0;visibility:hidden;"),
                  (e.frameBorder = "0"),
                  document.body.appendChild(e),
                  e
                );
              })()),
              (t._busy = !0),
              (i[n] = t),
              (t.src = e);
          }
        }),
        (e._callback = function (e) {
          i[e] && ((i[e]._busy = !1), delete i[e]);
        }),
        (e.ready = !1);
      var a = [];
      (e.onReady = function (n) {
        e.ready ? n && n() : n && a.push(n);
      }),
        (e._readyCallback = function () {
          if (!e.ready) {
            e.ready = !0;
            for (var n, t = 0; (n = a[t]); t++) n();
          }
        });
      var r = function e(n, t, o) {
        (this.args = n || {}),
          (this.callback = t),
          (this.context = o),
          (this.identifier = 0),
          (this.state = 1),
          (this.percentage = 0),
          (e._instances[this.args.packageName] = this),
          this._init();
      };
      return (
        (r._instances = {}),
        (r.HAS_PERCENTAGE = !0),
        (r.STATE_READY = 1),
        (r.STATE_QUEUING = 2),
        (r.STATE_DOWNLOADING = 3),
        (r.STATE_PAUSED = 4),
        (r.STATE_DOWNLOADED = 5),
        (r.STATE_INSTALLING = 6),
        (r.STATE_INSTALLED = 7),
        (r.STATE_FAILED = 8),
        (r.STATE_FAILED_OF_SDCARD = 9),
        (r.STATE_REMOVED = 10),
        (r.STATE_CANCAL = 11),
        (r._getDownloadState = function (e, n) {
          return (
            (e = r._stateMap[e]),
            n && e == r.STATE_FAILED && (e = r.STATE_READY),
            e
          );
        }),
        (r.prototype._callback = function (e, n) {
          if (e)
            switch (((this.state = e), this.state)) {
              case r.STATE_READY:
              case r.STATE_FAILED:
              case r.STATE_FAILED_OF_SDCARD:
              case r.STATE_CANCAL:
              case r.STATE_REMOVED:
                this.percentage = 0;
                break;
              case r.STATE_DOWNLOADED:
              case r.STATE_INSTALLING:
              case r.STATE_INSTALLED:
                this.percentage = 100;
            }
          n &&
            ((this.state == r.STATE_DOWNLOADING ||
              this.state == r.STATE_PAUSED) &&
              r.HAS_PERCENTAGE &&
              isFinite(n.percentage) &&
              (this.percentage = n.percentage),
            n.identifier &&
              (this.identifier != n.identifier
                ? (delete r._instances[this.identifier],
                  (r._instances[(this.identifier = n.identifier)] = this))
                : r._instances[this.identifier] != this &&
                  (r._instances[this.identifier] = this))),
            this.callback &&
              this.callback.call(
                this,
                this.state,
                this.percentage,
                this.context,
                n
              );
        }),
        (r.prototype.doAction = function () {
          switch (this.state) {
            case r.STATE_QUEUING:
            case r.STATE_DOWNLOADING:
              this.stop();
              break;
            case r.STATE_DOWNLOADED:
              this.install();
              break;
            case r.STATE_INSTALLED:
              this.args.isUpdate
                ? this.start()
                : e.startApp(this.args.packageName);
              break;
            default:
              this.start();
          }
        }),
        (r.prototype.dispose = function () {
          return (
            delete r._instances[this.identifier],
            delete r._instances[this.args.packageName],
            !0
          );
        }),
        (e.Download = r),
        (e.SHARE_USER_SELECTION = 0),
        (e.SHARE_MOBILEQ = 1),
        (e.SAHRE_QZONE = 2),
        (e.SAHRE_WECHAT = 3),
        (e.SAHRE_WECHAT_TIMELINE = 4),
        (e.SHARE_USER_SELECTION_POPUP = 5),
        (e._shareInfo = {
          iconUrl: "",
          jumpUrl: location.href,
          title: document.title,
          summary: location.href,
          message: "",
          appBarInfo: "",
        }),
        (e.setShareInfo = function (n) {
          1 == (n = n || {}).allowShare || !0 === n.allowShare
            ? e._showShareButton && e._showShareButton()
            : (0 != n.allowShare && !1 !== n.allowShare) ||
              (e._hideShareButton && e._hideShareButton());
          var t = e._shareInfo;
          (t.iconUrl = n.iconUrl || t.iconUrl),
            (t.jumpUrl = n.jumpUrl || t.jumpUrl),
            (t.title = n.title || t.title),
            (t.summary = n.summary || t.summary),
            (t.message = n.message || t.message),
            (t.appBarInfo = n.appBarInfo || t.appBarInfo),
            e._setShareInfo && e._setShareInfo(n);
        }),
        e
      );
    })(window.JsBridge, window);
  },
  function (e, n, t) {
    var o = t(0);
    !(function (e) {
      if (e && e.SCENE === e.SCENE_NONE) {
        var n = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/);
        if (n && e._greaterThanOrEqual(n[1], "5.0")) {
          e.SCENE = e.SCENE_WECHAT;
          var t = e.Download;
          (t._stateMap = {
            downloading: t.STATE_DOWNLOADING,
            download_succ: t.STATE_DOWNLOADED,
            download_fail: t.STATE_FAILED,
            download_cancel: t.STATE_CANCAL,
            download_removed: t.STATE_REMOVED,
          }),
            (t.HAS_PERCENTAGE = !0),
            (t.prototype._init = function () {
              var e = (function (e) {
                if (window.localStorage) {
                  var n = localStorage.getItem("JsBridge-Download");
                  if (n)
                    try {
                      return JSON.parse(n)[e].downloadId || 0;
                    } catch (e) {}
                }
                return 0;
              })(this.args.md5);
              if (
                (debug("[wx_fix.js] queryDownloadTask downloadId: ".concat(e)),
                e)
              ) {
                var n = this;
                WeixinJSBridge.invoke(
                  "queryDownloadTask",
                  { download_id: e },
                  function (o) {
                    debug(
                      "[wx_fix.js] queryDownloadTask res: ".concat(
                        JSON.stringify(o)
                      )
                    ),
                      o.err_msg.indexOf("access_denied") >= 0 &&
                        reportWxJsAPIErrMsg(
                          "queryDownloadTask: ".concat(o.err_msg)
                        ),
                      n._callback(
                        o.err_msg.indexOf("query_download_task:ok") >= 0
                          ? t._getDownloadState(o.state, !0)
                          : t.STATE_READY,
                        { identifier: e }
                      );
                  }
                );
              } else this._callback(t.STATE_READY);
            }),
            (t.prototype.start = function () {
              debug(
                "[wx_fix.js] Download.prototype.start this.state: ".concat(
                  this.state
                )
              );
              var e = this;
              switch (this.state) {
                case t.STATE_READY:
                case t.STATE_PAUSED:
                case t.STATE_FAILED:
                case t.STATE_FAILED_OF_SDCARD:
                case t.STATE_REMOVED:
                case t.STATE_CANCAL:
                  WeixinJSBridge.invoke(
                    "addDownloadTask",
                    {
                      task_name: this.args.alias,
                      task_url: this.args.url,
                      file_md5: this.args.md5,
                      title: this.args.title,
                      thumb_url: this.args.thumb_url,
                      download_type: o.getWxDownLoadType(),
                    },
                    function (n) {
                      debug(
                        "[wx_fix.js] Download.prototype.start addDownloadTask res: ".concat(
                          JSON.stringify(n)
                        )
                      ),
                        n.err_msg.indexOf("add_download_task:ok") >= 0
                          ? (i(e.args.md5, n.download_id),
                            e._callback(t.STATE_DOWNLOADING, {
                              identifier: n.download_id,
                            }))
                          : n.err_msg.indexOf("fail_sdcard_not_ready") >= 0
                          ? e._callback(t.STATE_FAILED_OF_SDCARD)
                          : n.err_msg.indexOf("add_download_task:cancel") >= 0
                          ? e._callback(t.STATE_CANCAL)
                          : e._callback(t.STATE_FAILED, {
                              errCode: -31415,
                              errMsg: n.err_msg,
                            }),
                        window.reportCreateDownload &&
                          n.err_msg.indexOf("add_download_task:cancel") < 0 &&
                          window.APPCONFIG &&
                          APPCONFIG.appbao &&
                          APPCONFIG.appbao.appbaoName === e.args.alias &&
                          (reportCreateDownload(n.err_msg),
                          window.reportTopCpCreateDownload &&
                            APPCONFIG.app &&
                            APPCONFIG.app.appId &&
                            reportTopCpCreateDownload(
                              n.err_msg,
                              APPCONFIG.app.appId
                            ));
                    }
                  );
                  break;
                default:
                  debug("[wx_fix.js] Download.prototype.start default"),
                    this._callback();
              }
              return !0;
            }),
            (t.prototype.stop = function () {
              var e = this;
              return (
                debug("[wx_fix.js] Download.prototype.stop"),
                WeixinJSBridge.invoke(
                  "cancelDownloadTask",
                  { download_id: this.identifier },
                  function (n) {
                    n.err_msg.indexOf("access_denied") >= 0 &&
                      reportWxJsAPIErrMsg(
                        "cancelDownloadTask: ".concat(n.err_msg)
                      ),
                      debug(
                        "[wx_fix.js] Download.prototype.stop cancelDownloadTask res: ".concat(
                          JSON.stringify(n)
                        )
                      ),
                      i(e.args.md5),
                      e._callback(t.STATE_READY);
                  }
                ),
                !0
              );
            }),
            (t.prototype.install = function () {
              var e = this;
              return (
                debug("[wx_fix.js] Download.prototype.install"),
                WeixinJSBridge.invoke(
                  "installDownloadTask",
                  { download_id: this.identifier },
                  function (n) {
                    debug(
                      "[wx_fix.js] Download.prototype.install res: ".concat(
                        JSON.stringify(n)
                      )
                    ),
                      n.err_msg.indexOf("access_denied") >= 0 &&
                        reportWxJsAPIErrMsg(
                          "installDownloadTask: ".concat(n.err_msg)
                        ),
                      n.err_msg.indexOf("fail") >= 0 &&
                        (i(e.args.md5), e._callback(t.STATE_READY)),
                      reportInstallApp && reportInstallApp(n.err_msg);
                  }
                ),
                !0
              );
            }),
            e.onReady(function () {
              WeixinJSBridge.on("wxdownload:state_change", function (e) {
                debug(
                  "[wx_fix.js] wxdownload:state_change res: ".concat(
                    JSON.stringify(e)
                  )
                );
                var n = t._getDownloadState(e.state);
                if (e.download_id && n) {
                  var o = t._instances[e.download_id];
                  if (n === t.STATE_FAILED) {
                    if (!o) return;
                    o._callback(n, {
                      errCode: e.err_code,
                      identifier: e.download_id,
                    });
                  } else {
                    if (!o) return;
                    o._callback(n);
                  }
                }
              }),
                WeixinJSBridge.on("activity:state_change", function (n) {
                  if (n.state.indexOf("onResume") >= 0) {
                    if (!e.onResume) return;
                    e.onResume();
                  }
                  if (n.state.indexOf("onPause") >= 0) {
                    if (!e.onPause) return;
                    e.onPause();
                  }
                }),
                WeixinJSBridge.on("wxdownload:progress_change", function (e) {
                  if (e.download_id) {
                    var n = t._instances[e.download_id];
                    if (!n) return;
                    n._callback(t.STATE_DOWNLOADING, {
                      percentage: e.progress,
                      identifier: e.download_id,
                    });
                  }
                });
            }),
            (e.getAppInstalledVersion = function (e, n) {
              for (
                var t = e.length, o = {}, i = {}, a = 0, r = e.length;
                a < r;
                a++
              )
                WeixinJSBridge.invoke(
                  "getInstallState",
                  { packageName: e[a] },
                  (function (e) {
                    return function (a) {
                      if (
                        (debug(
                          "[wx_fix.js] getInstallState res: ".concat(
                            JSON.stringify(a)
                          )
                        ),
                        a.err_msg.indexOf("access_denied") >= 0 &&
                          reportWxJsAPIErrMsg(
                            "getInstallState: ".concat(a.err_msg)
                          ),
                        a.err_msg.indexOf("get_install_state:yes") >= 0)
                      ) {
                        var r = a.err_msg.split("_");
                        (r = r.length > 0 ? Number(r[r.length - 1]) : 0),
                          (o[e] = r),
                          (i[e] = "get_install_state:ok");
                      } else
                        a.err_msg.indexOf("get_install_state:no") >= 0
                          ? (i[e] = "get_install_state:ok")
                          : (i[e] = a.err_msg);
                      if (0 === (t -= 1)) {
                        if (!n) return;
                        n(o, i);
                      }
                    };
                  })(e[a])
                );
              return !0;
            }),
            (e.startApp = function (e) {
              var n = e.packageName,
                t = e.signature;
              return (
                (t = [].concat(t)),
                (function e() {
                  debug("[wx_fix.js] launch3rdApp"),
                    WeixinJSBridge.invoke(
                      "launch3rdApp",
                      { type: 1, packageName: n, signature: t.shift() },
                      function (n) {
                        debug(
                          "[wx_fix.js] launch3rdApp res: ".concat(
                            JSON.stringify(n)
                          )
                        ),
                          n.err_msg.indexOf("access_denied") >= 0 &&
                            reportWxJsAPIErrMsg(
                              "launch3rdApp: ".concat(n.err_msg)
                            ),
                          "launch_3rdApp:ok" !== n.err_msg && t[0] && e();
                      }
                    );
                })(),
                !0
              );
            }),
            (e._showShareButton = function () {
              WeixinJSBridge.call("showOptionMenu");
            }),
            (e._hideShareButton = function () {
              WeixinJSBridge.call("hideOptionMenu");
            }),
            (e._setShareInfo = function () {
              e.onReady(function () {
                WeixinJSBridge.on("menu:share:appmessage", function () {
                  e.share(e.SAHRE_WECHAT);
                }),
                  WeixinJSBridge.on("menu:share:timeline", function () {
                    e.share(e.SAHRE_WECHAT_TIMELINE);
                  });
              }),
                delete e._setShareInfo;
            }),
            (e.share = function (n) {
              var t = e._shareInfo;
              return (
                WeixinJSBridge.invoke(
                  n === e.SAHRE_WECHAT ? "sendAppMessage" : "shareTimeline",
                  {
                    appid: "wx3909f6add1206543",
                    img_url: t.iconUrl,
                    img_width: 72,
                    img_height: 72,
                    link: t.jumpUrl,
                    desc: t.summary,
                    title: t.title,
                  }
                ),
                !0
              );
            }),
            (e.showPictures = function (e, n) {
              return (
                WeixinJSBridge.invoke("imagePreview", {
                  current: e[isFinite(n) && n >= 0 && n < e.length ? n : 0],
                  urls: e,
                }),
                !0
              );
            }),
            (e.openNewWindow = function () {
              return !1;
            }),
            (e.login = function () {
              return !1;
            }),
            (e.getLoginTicket = function () {
              return null;
            }),
            (e.callWithScheme = function (n, t) {
              if (
                /MicroMessenger\/([0-5]\.|6\.[0-4]\.|6\.5\.[0-5]\.)/i.test(
                  navigator.userAgent
                )
              )
                e._callWithScheme(n);
              else {
                if (!WeixinJSBridge) return;
                WeixinJSBridge.invoke(
                  "launchApplication",
                  { schemeUrl: n },
                  function (o) {
                    o.err_msg.indexOf("access_denied") >= 0 &&
                      reportWxJsAPIErrMsg(
                        "launchApplication: ".concat(o.err_msg)
                      ),
                      "launchApplication:fail" === o.err_msg &&
                        e._callWithScheme(n),
                      "function" == typeof t && t(o);
                  }
                );
              }
            }),
            window.WeixinJSBridge
              ? e._readyCallback()
              : document.addEventListener(
                  "WeixinJSBridgeReady",
                  e._readyCallback,
                  !1
                );
        }
      }
      function i(e, n) {
        if (window.localStorage) {
          var t = localStorage.getItem("JsBridge-Download");
          if (t)
            try {
              var o = JSON.parse(t);
              (t = {}),
                Object.keys(o).forEach(function (e) {
                  i - o[e].timestamp < 604800 && (t[e] = o[e]);
                });
            } catch (e) {
              t = {};
            }
          else t = {};
          var i = Date.now();
          if (!n) return;
          return (
            (t[e] = { timestamp: i, downloadId: n }),
            localStorage.setItem("JsBridge-Download", JSON.stringify(t)),
            !0
          );
        }
        return !1;
      }
    })(window.JsBridge, window);
  },
  function (e, n) {
    function t(e, n, t) {
      return (
        n in e
          ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = t),
        e
      );
    }
    function o(e) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    !(function (e, n, i) {
      var a;
      if (e && e.SCENE == e.SCENE_NONE) {
        var r = navigator.userAgent.indexOf("V1_AND_SQ_") >= 0,
          s = navigator.userAgent.match(/(?:V1_AND_SQ_|QQ\/)([\d\.]+)/);
        if (s && e._greaterThanOrEqual(s[1], "4.6")) {
          e.SCENE = e.SCENE_MOBILEQ;
          var c = 1,
            d = {},
            l = (e._call = function (n) {
              var t,
                i = ["jsbridge:/", n];
              i.push(c);
              for (var a = 1, r = arguments.length; a < r; a++) {
                var s = arguments[a];
                if ("function" == typeof s) {
                  t = s;
                  break;
                }
                i.push(
                  encodeURIComponent(
                    "object" === o(s) ? JSON.stringify(s) : "".concat(s)
                  )
                );
              }
              return (d[c] = { cb: t }), e._callWithScheme(i.join("/"), c), c++;
            });
          (e.multiCall = function (n, t) {
            var o = 0,
              i = {},
              a = {},
              r = function (e) {
                e &&
                  e.guid &&
                  e.guid in i &&
                  ((a[i[e.guid]] = 0 == e.r ? e.data : null),
                  "function" == typeof cb && cb(key, e),
                  o--,
                  delete i[e.guid],
                  0 == o && "function" == typeof t && t(a));
              };
            for (var s in n) {
              var c = n[s],
                d = [c.name].concat(c.args || []);
              d.push(r), (i[e._call.apply(e, d)] = s), o++;
            }
          }),
            (e.onResume = function () {}),
            (e.callback = function (n, t) {
              "resume" != n
                ? t &&
                  (isFinite(n)
                    ? d[n] &&
                      (e._callback(n),
                      d[n].cb && d[n].cb(t.result),
                      delete d[n])
                    : 0 == t.r && "interface.getQueryDownloadAction" == n
                    ? m(t.data, !0, !0)
                    : t.guid &&
                      d[t.guid] &&
                      (e._callback(t.guid),
                      d[t.guid].cb && d[t.guid].cb(t.data),
                      delete d[t.guid]))
                : "function" == typeof e.onResume && e.onResume();
            }),
            (n.QzoneApp = {
              fire: function (n, t) {
                e.callback(n, t);
              },
            }),
            (n.publicAccountDownload = {
              queryProcess: function (e) {
                m(e, !0);
              },
            });
          var p = e.Download;
          (p._stateMap =
            (t(
              (a = {
                20: p.STATE_QUEUING,
                2: p.STATE_DOWNLOADING,
                12: p.STATE_DOWNLOADING,
                3: p.STATE_PAUSED,
                10: p.STATE_PAUSED,
                4: p.STATE_DOWNLOADED,
                5: p.STATE_INSTALLING,
                6: p.STATE_INSTALLED,
                13: p.STATE_INSTALLED,
                9: p.STATE_READY,
              }),
              "10",
              p.STATE_READY
            ),
            t(a, "-1", p.STATE_FAILED),
            t(a, "-2", p.STATE_FAILED),
            t(a, "-3", p.STATE_FAILED),
            t(a, "-4", p.STATE_FAILED),
            t(a, "-5", p.STATE_FAILED),
            t(a, "-6", p.STATE_FAILED),
            a)),
            (p.prototype._getDownloadParam = function (e) {
              return {
                myAppConfig: 0,
                appid: this.args.sngAppId,
                myAppId: this.args.hnAppId,
                versionCode: this.args.versionCode,
                url: this.args.url,
                packageName: this.args.packageName,
                actionCode: e,
                appName: this.args.alias,
                isAutoDownload: 1,
                isAutoInstall: 1,
                sourceType: "biz_src_yyb",
                via: this.args.via || "",
              };
            });
          var u = 0,
            w = [];
          (p._query = function (e) {
            w.push(e), u || (u = setTimeout(f));
          }),
            (p.prototype._init = function () {
              this._callback(p.STATE_READY, { identifier: this.args.sngAppId }),
                p._query(this);
            }),
            (p.prototype.start = function () {
              switch (this.state) {
                case p.STATE_READY:
                case p.STATE_FAILED:
                  l(
                    "q_download/doDownloadAction",
                    this._getDownloadParam(this.args.isUpdate ? 12 : 2)
                  );
                  break;
                case p.STATE_PAUSED:
                  l("q_download/doDownloadAction", this._getDownloadParam(2));
                  break;
                default:
                  this._callback();
              }
              return !0;
            }),
            (p.prototype.stop = function () {
              return (
                l("q_download/doDownloadAction", this._getDownloadParam(3)), !0
              );
            }),
            (p.prototype.install = function () {
              return (
                l("q_download/doDownloadAction", this._getDownloadParam(5)), !0
              );
            }),
            (p.onBatchCallback = function () {}),
            (p.callback = function (e) {
              debug(
                "[mqq.js] JsBridge.Download.callback res: ".concat(
                  JSON.stringify(e)
                )
              ),
                m(e);
            }),
            e.onReady(function () {
              l(
                "q_download/registerDownloadCallBackListener",
                "JsBridge.Download.callback"
              );
            }),
            (e.getAppInstalledVersion = function (e, n) {
              return (
                l(
                  "qzone_app/getAppInfoBatch",
                  e.join(","),
                  ",",
                  !1,
                  !1,
                  !1,
                  function (e) {
                    e = (e && JSON.parse(e.data || e)) || [];
                    for (var t, o = {}, i = 0; (t = e[i]); i++) o[t[0]] = t[1];
                    n && n(o);
                  }
                ),
                !0
              );
            }),
            (e.startApp = function (e) {
              var n = e.packageName;
              return l("qqZoneAppList/startApp", n, ""), !0;
            }),
            (e._setShareInfo = function () {
              var n = e._shareInfo;
              l("QQApi/setShareInfo", {
                share_url: n.jumpUrl,
                title: n.title,
                desc: n.summary,
                image_url: n.iconUrl,
              });
            }),
            (e.share = function () {
              return !1;
            }),
            (e.showPictures = function () {
              return !1;
            }),
            (e.openNewWindow = function (e) {
              return l("qbizApi/openLinkInNewWebView", e, 0), !0;
            }),
            (e.login = function () {
              return !1;
            }),
            (e.getLoginTicket = function () {
              return null;
            }),
            e._readyCallback();
        }
      }
      function f() {
        u = 0;
        for (var e, n = { guid: 1, infolist: [] }, t = 0; (e = w[t]); t++)
          n.infolist.push({
            appid: e.args.sngAppId,
            myAppId: e.args.hnAppId,
            packageName: e.args.packageName,
            versionCode: e.args.versionCode,
          });
        (w = []),
          r || (n = n.infolist),
          l("q_download/getQueryDownloadAction", n);
      }
      function m(e, n, t) {
        if ("[object Array]" != Object.prototype.toString.call(e)) {
          var o = p._getDownloadState(e.state, n);
          if ((e.appid || e.packagename) && o) {
            var i = p._instances[e.appid] || p._instances[e.packagename];
            i && i._callback(o, { percentage: e.pro });
          }
        } else {
          t && "function" == typeof p.onBatchCallback && p.onBatchCallback(e);
          for (var a, r = 0; (a = e[r]); r++) m(a, n);
        }
      }
    })(window.JsBridge, window);
  },
  function (e, n) {
    !(function (e) {
      if (
        e &&
        e.SCENE === e.SCENE_NONE &&
        window.browser &&
        navigator.userAgent.match(/MQQBrowser\/([\d.]+)/)
      ) {
        e.SCENE = e.SCENE_QQBOWSER;
        var n = e.Download;
        (n._stateMap = {
          TASK_STATUS_CREATED: n.STATE_READY,
          TASK_STATUS_STARTED: n.STATE_QUEUING,
          TASK_STATUS_PROGRESS: n.STATE_DOWNLOADING,
          TASK_STATUS_COMPLETED: n.STATE_DOWNLOADED,
          TASK_STATUS_TIMEOUT: n.STATE_FAILED,
          TASK_STATUS_FAILED: n.STATE_FAILED,
          TASK_STATUS_CANCELED: n.STATE_CANCAL,
          TASK_STATUS_NONE: n.STATE_FAILED,
          TASK_STATUS_DELETED: n.STATE_REMOVED,
          TASK_STATUS_FILE_HAS_DELETED: n.STATE_FAILED_OF_SDCARD,
        }),
          (n.start = function (e) {
            window.browser.download.startDownload({
              url: e.url,
              filesize: e.size,
              needautoinstall: "true",
              needdialog: "false",
              needtoast: "true",
            });
          }),
          (n.getDownloadStatus = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function () {},
              o = window.browser.download.getDownloadStatus({ url: e.url });
            t(n._stateMap[o]);
          }),
          (n.install = function (e) {
            window.browser.download.installApp({ url: e.url });
          }),
          (e.startApp = function (e) {
            var n = e.packageName;
            window.browser.app.runApk(n);
          });
      }
    })(window.JsBridge, window);
  },
  function (e, n, t) {
    "use strict";
    t.r(n);
    var o = t(0);
    !(function (e) {
      if (
        e &&
        e.SCENE === e.SCENE_NONE &&
        navigator.userAgent.match(/(?:GDTMobSDK\/)/)
      ) {
        e.SCENE = e.SCENE_UNJS;
        var n = e.Download;
        (n._stateMap = {
          3: n.STATE_DOWNLOADING,
          4: n.STATE_DOWNLOADED,
          5: n.STATE_FAILED,
          7: n.STATE_CANCAL,
          9: n.STATE_REMOVED,
        }),
          (n.start = function (e) {
            try {
              Object(o.debug)("[unjs] 开始下载", e);
              var n = unjs.download.startDownload({
                url: e.url,
                packageName: e.packageName,
                appName: e.name,
                md5: e.md5,
                filesize: e.size,
              });
              Object(o.debug)("[unjs] 下载返回信息", n);
            } catch (e) {
              Object(o.debug)("[unjs] 下载出错", e);
            }
          }),
          (n.install = function (e) {
            unjs.download.installApp({
              url: e.url,
              packageName: e.packageName,
            });
          }),
          (n.getDownloadStatus = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function () {};
            try {
              var i = unjs.download.getDownloadStatus({
                url: e.url,
                packageName: e.packageName,
              });
              Object(o.debug)("[unjs]查询下载状态", i), t(n._stateMap[i]);
            } catch (e) {
              Object(o.debug)("[unjs]查询下载状态出错", e);
            }
          }),
          (e.getAppInstalledVersion = function (e, n) {
            for (var t = e.length, i = {}, a = {}, r = 0, s = t; r < s; r++) {
              var c = unjs.package.isAppInstall({ packageName: e[r] });
              Object(o.debug)("[unjs.js] getInstallState res: ".concat(c)),
                (i[e[r]] = +c),
                (a[e[r]] = "get_install_state:ok"),
                0 === (t -= 1) && n && n(i, a);
            }
            return !0;
          }),
          (e.startApp = function (e) {
            var n = e.packageName,
              t = e.scheme;
            unjs.package.openApp({ packageName: n, url: t });
          });
      }
    })(window.JsBridge, window);
  },
  function (e, n) {
    function t(e) {
      return (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    !(function () {
      if (window.tbs_bridge) {
        var e = window.tbs_bridge;
        (e.callbackId = Date.now()),
          (e.callbacks = {}),
          (e.exec = function (n, o, i, a) {
            var r,
              s,
              c = t(i),
              d = t(a);
            if ("undefined" === c && "undefined" === d) i = "";
            else if ("function" === c) (a = i), (i = ""), (d = "function");
            else if ("object" !== c)
              throw new TypeError(
                "[" +
                  n +
                  "." +
                  o +
                  '] "options" parameter of the interface must be an Object or Function!'
              );
            return (
              (r = n + e.callbackId++),
              (i = "" === i ? "" : JSON.stringify(i)),
              "function" === d && (e.callbacks[r] = a),
              "true" === (s = e.nativeExec(n, o, r, i)) || ("false" !== s && s)
            );
          }),
          (e.callbackFromNative = function (n, t) {
            var o = e.callbacks[n];
            try {
              t = JSON.parse(t);
            } catch (e) {
              (t = {}), console.error(e);
            }
            o && (t.keep || delete e.callbacks[n], o(t.data));
          });
      }
    })();
  },
  function (e, n, t) {
    !(function () {
      var e,
        n,
        o,
        i,
        a,
        r,
        s,
        c,
        d = (window.UI = {});
      (window.load_script = t(0).loadScript),
        (window.UI.getQuery = t(0).getQuery),
        (d.EVENTS = {}),
        (e = d.EVENTS),
        (n = e.hastouch =
          (window.DocumentTouch && document instanceof window.DocumentTouch) ||
          "ontouchstart" in window),
        (e.touchstart = n ? "touchstart" : "mousedown"),
        (e.touchmove = n ? "touchmove" : "mousemove"),
        (e.touchend = n ? "touchend" : "mouseup"),
        (e.resize =
          "onorientationchange" in window ? "orientationchange" : "resize"),
        (e.touchstartEv = function () {
          var e = document.createEvent("Event");
          return (
            e.initEvent("touchstart", !0, !0),
            (e.touches = [
              { target: document.documentElement, pageX: 0, pageY: 0 },
            ]),
            e
          );
        }),
        (d.pageVisibility =
          ((a = function (e, n) {
            return "" !== e ? e + n.slice(0, 1).toUpperCase() + n.slice(1) : n;
          }),
          (i = !1),
          "number" == typeof window.screenX &&
            ["webkit", "moz", "ms", "o", ""].forEach(function (e) {
              0 == i && null != document[a(e, "hidden")] && ((o = e), (i = !0));
            }),
          {
            isPageVisibilitySupport: (r = i),
            isHidden: (s = function () {
              if (r) return document[a(o, "hidden")];
            }),
            visibilityState: (c = function () {
              if (r) return document[a(o, "visibilityState")];
            }),
            visibilitychange: function (e, n) {
              if (r && "function" == typeof e)
                return document.addEventListener(
                  o + "visibilitychange",
                  function (n) {
                    (this.hidden = s()),
                      (this.visibilityState = c()),
                      e.call(this, n);
                  }.bind(this),
                  !1
                );
            },
          })),
        (d.Slide = (function (e) {
          var n = /translate3d\((-?[\d.]+)(px)?,\s?0(px)?,\s?0(px)?\)/;
          function t() {}
          function o(e, n) {
            var t = document.createEvent("Events");
            t.initEvent(n, !1, !0), e.dispatchEvent(t);
          }
          function i(e, t) {
            if (
              ((t || null == e.moveable) &&
                (function (e) {
                  var t = e.list,
                    o = t.parentElement.getBoundingClientRect();
                  if (o.width && t.children && t.children.length > 0) {
                    var i = (e.offset = { viewWidth: o.width }),
                      a = n.test(t.style.webkitTransform)
                        ? parseInt(RegExp.$1)
                        : 0,
                      r = t.children[0].children[0].getBoundingClientRect(),
                      s = t.children[
                        e.length - 1
                      ].children[0].getBoundingClientRect(),
                      c = r.left,
                      d = s.right,
                      l = r.width;
                    (i.totalWidth = d - c + 2 * (c - o.left - a)),
                      (i.step =
                        1 == e.length ? l : (d - c - l) / (e.length - 1)),
                      (e.moveable = e.length > 0 && i.totalWidth > i.viewWidth),
                      e.moveable || (t.style.webkitTransform = "");
                  }
                })(e),
              e.moveable)
            ) {
              var o = e.offset,
                i = e.list,
                a = n.test(i.style.webkitTransform) ? parseInt(RegExp.$1) : 0,
                r = Math.max(
                  0,
                  Math.min(o.step * e.index, o.totalWidth - o.viewWidth)
                );
              Math.abs(a + r) > 3
                ? (i.style.webkitTransform = "translate3d(-" + r + "px,0,0)")
                : (e.index = Math.ceil(r / o.step)),
                e.callback(e.index, o.totalWidth, o.viewWidth, r);
            }
          }
          var a = function (n, a, r, s) {
            (this.container = n),
              (this.list = a),
              (this.index = 0),
              (this.callback = r || t),
              (this.length = a.childElementCount),
              (function (n, t, a) {
                var r, s, c, d;
                function l(e) {
                  if (null != c)
                    return (
                      c > 0
                        ? (n.index = Math.max(n.index - 1, 0))
                        : c < 0 &&
                          (n.index = Math.min(n.index + 1, n.length - 1)),
                      (r = s = c = void 0),
                      i(n),
                      e.preventDefault(),
                      !1
                    );
                }
                function p() {
                  d && clearTimeout(d),
                    (d = setTimeout(function () {
                      i(n, !0), (d = void 0);
                    }, 500));
                }
                t.addEventListener("touchstart", function (e) {
                  (r = e.touches[0].clientX), (s = e.touches[0].clientY);
                }),
                  t.addEventListener("touchmove", function (e) {
                    if (null != r) {
                      var n = e.touches[0].clientX - r,
                        t = e.touches[0].clientY - s;
                      if (Math.abs(n / t) > 1) c = n;
                      else if (1 == a) return;
                      return e.preventDefault(), !1;
                    }
                  }),
                  t.addEventListener("touchend", l),
                  t.addEventListener("touchcancel", l),
                  t.addEventListener("webkitTransitionEnd", function () {
                    o(e, "viewchange");
                  }),
                  e.addEventListener("orientationchange", p),
                  e.addEventListener("resize", p);
              })(this, n, s),
              i(this);
          };
          return (
            (a.prototype = {
              constructor: a,
              reset: function (e) {
                0 != e &&
                  ((this.index = 0),
                  (this.length = this.list.childElementCount)),
                  i(this, !0);
              },
              jump: function (n) {
                var t = this.list;
                (this.index = Math.max(Math.min(n, this.length - 1), 0)),
                  (t.style.webkitTransition = "-webkit-transform 0ms"),
                  i(this),
                  setTimeout(function () {
                    (t.style.webkitTransition = ""), o(e, "viewchange");
                  }, 0);
              },
            }),
            a
          );
        })(window));
    })(),
      (function (e) {
        e.isFunction(e.noop) || (e.noop = function () {});
        var n = { attr: "data-url", container: e(window), callback: e.noop };
        e.fn.scrollLoading = function (t) {
          var o = e.extend({}, n, t || {});
          (o.cache = []),
            e(this).each(function () {
              var n = this.nodeName.toLowerCase(),
                t = e(this).attr(o.attr),
                i = { obj: e(this), tag: n, url: t };
              o.cache.push(i);
            }),
            (o.length = o.cache.length);
          var i = function (n) {
              e.isFunction(o.callback) && o.callback.call(n.get(0));
            },
            a = function () {
              var n = e(window),
                t = n.scrollTop(),
                r = n.height(),
                s = n.width(),
                c = t,
                d = t + r;
              if (o.container.get(0) !== window) {
                var l = o.container,
                  p = l.offset().top,
                  u = l.height();
                (c = Math.max(c, p)), (d = Math.min(d, p + u));
              }
              e.each(o.cache, function (e, n) {
                var t,
                  r,
                  l,
                  p = n.obj,
                  u = n.tag,
                  w = n.url;
                p &&
                  ((r = (t = p.offset().top) + p.height()),
                  (l = p.offset().left),
                  ((t >= c && t <= d) || (r >= c && r <= d)) &&
                    l < s &&
                    (w
                      ? "img" === u
                        ? (i(p.attr("src", w)), p.removeClass("lazyload"))
                        : p.load(w, {}, function () {
                            i(p);
                          })
                      : i(p),
                    (n.obj = null),
                    (o.length = o.length - 1),
                    o.length || (o.container.unbind("scroll", a), (a = null))));
              });
            };
          if (o.container.get(0) !== window) {
            var r = function () {
              var n = e(window),
                t = n.scrollTop(),
                i = t,
                s = t + n.height(),
                c = o.container,
                d = c.offset().top,
                l = d + c.height();
              ((d >= i && d <= s) || (l >= i && l <= s)) &&
                (a && a(), e(window).unbind("scroll", r), (r = null));
            };
            e(window).bind("scroll", r);
          }
          o.container.bind("scroll", a), a();
        };
      })($);
  },
  function (e, n, t) {
    var o,
      i = t(1),
      a = [],
      r = null;
    (o = window.JsBridge),
      i.browser.mqq ||
        i.browser.wechat ||
        (o
          ? (window.JsBridge.onReady = function (e) {
              a.push(e),
                r ||
                  (r = setTimeout(function () {
                    for (var e = 0; e < a.length; e++) a[e]();
                    (a = []), clearTimeout(r), (r = null);
                  }, 0));
            })
          : console.error("window.JsBridge is undefined"));
  },
  function (e, n, t) {
    var o = t(0),
      i = t(3),
      a = !1;
    function r() {
      if (1 !== !+window.showMIIT) {
        if (i.isMqqSupportVersion()) {
          var e = $("#privacy"),
            n = e.attr("href");
          e.attr("href", "javascript:void(0);"),
            e.off("click").on("click", function () {
              window.JsBridge.openNewWindow(n);
            });
        }
        $("#permission-button").off("click").on("click", s);
      }
    }
    function s() {
      a ||
        ((a = !0),
        $("#permission-iframe").attr(
          "src",
          "/dom/micro/permission.jsp?permissions=".concat(
            o.get(["permissions"], window.AppInfoData)
          )
        )),
        $("#permissionDialog .btn-close")
          .off("click")
          .on("click", function () {
            c();
          }),
        $(".mod-card")
          .off("click")
          .on("click", function (e) {
            e.stopPropagation();
          }),
        $("#permissionDialog")
          .off("click")
          .on("click", function (e) {
            c();
          }),
        $("#permissionDialog").show(),
        ($("#permissionDialog .mod-dialog-content").get(0).scrollTop = 0),
        (function (e) {
          if (!e) return;
          e.onload = function () {
            var n = e.contentWindow || e.contentDocument.parentWindow;
            n.document.body &&
              (e.height =
                n.document.documentElement.scrollHeight ||
                n.document.body.scrollHeight);
          };
        })(document.querySelector("#permission-iframe"));
    }
    function c() {
      $("#permissionDialog").hide();
    }
    r(), (e.exports = { init: r });
  },
  function (e, n, t) {
    var o;
    /*!
     * UAParser.js v0.7.21
     * Lightweight JavaScript-based User-Agent string parser
     * https://github.com/faisalman/ua-parser-js
     *
     * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
     * Licensed under MIT License
     */ !(function (i, a) {
      "use strict";
      var r = "model",
        s = "name",
        c = "type",
        d = "vendor",
        l = "version",
        p = "mobile",
        u = "tablet",
        w = "smarttv",
        f = {
          extend: function (e, n) {
            var t = {};
            for (var o in e)
              n[o] && n[o].length % 2 == 0
                ? (t[o] = n[o].concat(e[o]))
                : (t[o] = e[o]);
            return t;
          },
          has: function (e, n) {
            return (
              "string" == typeof e &&
              -1 !== n.toLowerCase().indexOf(e.toLowerCase())
            );
          },
          lowerize: function (e) {
            return e.toLowerCase();
          },
          major: function (e) {
            return "string" == typeof e
              ? e.replace(/[^\d\.]/g, "").split(".")[0]
              : void 0;
          },
          trim: function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          },
        },
        m = {
          rgx: function (e, n) {
            for (var t, o, i, a, r, s, c = 0; c < n.length && !r; ) {
              var d = n[c],
                l = n[c + 1];
              for (t = o = 0; t < d.length && !r; )
                if ((r = d[t++].exec(e)))
                  for (i = 0; i < l.length; i++)
                    (s = r[++o]),
                      "object" == typeof (a = l[i]) && a.length > 0
                        ? 2 == a.length
                          ? "function" == typeof a[1]
                            ? (this[a[0]] = a[1].call(this, s))
                            : (this[a[0]] = a[1])
                          : 3 == a.length
                          ? "function" != typeof a[1] ||
                            (a[1].exec && a[1].test)
                            ? (this[a[0]] = s ? s.replace(a[1], a[2]) : void 0)
                            : (this[a[0]] = s
                                ? a[1].call(this, s, a[2])
                                : void 0)
                          : 4 == a.length &&
                            (this[a[0]] = s
                              ? a[3].call(this, s.replace(a[1], a[2]))
                              : void 0)
                        : (this[a] = s || void 0);
              c += 2;
            }
          },
          str: function (e, n) {
            for (var t in n)
              if ("object" == typeof n[t] && n[t].length > 0) {
                for (var o = 0; o < n[t].length; o++)
                  if (f.has(n[t][o], e)) return "?" === t ? void 0 : t;
              } else if (f.has(n[t], e)) return "?" === t ? void 0 : t;
            return e;
          },
        },
        g = {
          browser: {
            oldsafari: {
              version: {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/",
              },
            },
          },
          device: {
            amazon: { model: { "Fire Phone": ["SD", "KF"] } },
            sprint: {
              model: { "Evo Shift 4G": "7373KT" },
              vendor: { HTC: "APA", Sprint: "Sprint" },
            },
          },
          os: {
            windows: {
              version: {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM",
              },
            },
          },
        },
        h = {
          browser: [
            [
              /(opera\smini)\/([\w\.-]+)/i,
              /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
              /(opera).+version\/([\w\.]+)/i,
              /(opera)[\/\s]+([\w\.]+)/i,
            ],
            [s, l],
            [/(opios)[\/\s]+([\w\.]+)/i],
            [[s, "Opera Mini"], l],
            [/\s(opr)\/([\w\.]+)/i],
            [[s, "Opera"], l],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
              /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
              /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
              /(?:ms|\()(ie)\s([\w\.]+)/i,
              /(rekonq)\/([\w\.]*)/i,
              /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
            ],
            [s, l],
            [/(konqueror)\/([\w\.]+)/i],
            [[s, "Konqueror"], l],
            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
            [[s, "IE"], l],
            [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
            [[s, "Edge"], l],
            [/(yabrowser)\/([\w\.]+)/i],
            [[s, "Yandex"], l],
            [/(Avast)\/([\w\.]+)/i],
            [[s, "Avast Secure Browser"], l],
            [/(AVG)\/([\w\.]+)/i],
            [[s, "AVG Secure Browser"], l],
            [/(puffin)\/([\w\.]+)/i],
            [[s, "Puffin"], l],
            [/(focus)\/([\w\.]+)/i],
            [[s, "Firefox Focus"], l],
            [/(opt)\/([\w\.]+)/i],
            [[s, "Opera Touch"], l],
            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
            [[s, "UCBrowser"], l],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [[s, /_/g, " "], l],
            [/(windowswechat qbcore)\/([\w\.]+)/i],
            [[s, "WeChat(Win) Desktop"], l],
            [/(micromessenger)\/([\w\.]+)/i],
            [[s, "WeChat"], l],
            [/(brave)\/([\w\.]+)/i],
            [[s, "Brave"], l],
            [/(qqbrowserlite)\/([\w\.]+)/i],
            [s, l],
            [/(QQ)\/([\d\.]+)/i],
            [s, l],
            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
            [s, l],
            [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
            [s, l],
            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
            [s, l],
            [/(MetaSr)[\/\s]?([\w\.]+)/i],
            [s],
            [/(LBBROWSER)/i],
            [s],
            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
            [l, [s, "MIUI Browser"]],
            [/;fbav\/([\w\.]+);/i],
            [l, [s, "Facebook"]],
            [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
            [s, l],
            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
            [l, [s, "Chrome Headless"]],
            [/\swv\).+(chrome)\/([\w\.]+)/i],
            [[s, /(.+)/, "$1 WebView"], l],
            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
            [[s, /(.+(?:g|us))(.+)/, "$1 $2"], l],
            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
            [l, [s, "Android Browser"]],
            [/(sailfishbrowser)\/([\w\.]+)/i],
            [[s, "Sailfish Browser"], l],
            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
            [s, l],
            [/(dolfin)\/([\w\.]+)/i],
            [[s, "Dolphin"], l],
            [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
            [[s, "360 Browser"]],
            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
            [[s, "Chrome"], l],
            [/(coast)\/([\w\.]+)/i],
            [[s, "Opera Coast"], l],
            [/fxios\/([\w\.-]+)/i],
            [l, [s, "Firefox"]],
            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
            [l, [s, "Mobile Safari"]],
            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
            [l, s],
            [
              /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i,
            ],
            [[s, "GSA"], l],
            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
            [s, [l, m.str, g.browser.oldsafari.version]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [s, l],
            [/(navigator|netscape)\/([\w\.-]+)/i],
            [[s, "Netscape"], l],
            [
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
              /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
              /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
              /(links)\s\(([\w\.]+)/i,
              /(gobrowser)\/?([\w\.]*)/i,
              /(ice\s?browser)\/v?([\w\._]+)/i,
              /(mosaic)[\/\s]([\w\.]+)/i,
            ],
            [s, l],
          ],
          cpu: [
            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
            [["architecture", "amd64"]],
            [/(ia32(?=;))/i],
            [["architecture", f.lowerize]],
            [/((?:i[346]|x)86)[;\)]/i],
            [["architecture", "ia32"]],
            [/windows\s(ce|mobile);\sppc;/i],
            [["architecture", "arm"]],
            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
            [["architecture", /ower/, "", f.lowerize]],
            [/(sun4\w)[;\)]/i],
            [["architecture", "sparc"]],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
            ],
            [["architecture", f.lowerize]],
          ],
          device: [
            [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
            [r, d, [c, u]],
            [/applecoremedia\/[\w\.]+ \((ipad)/],
            [r, [d, "Apple"], [c, u]],
            [/(apple\s{0,1}tv)/i],
            [
              [r, "Apple TV"],
              [d, "Apple"],
              [c, w],
            ],
            [
              /(archos)\s(gamepad2?)/i,
              /(hp).+(touchpad)/i,
              /(hp).+(tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /\s(nook)[\w\s]+build\/(\w+)/i,
              /(dell)\s(strea[kpr\s\d]*[\dko])/i,
            ],
            [d, r, [c, u]],
            [/(kf[A-z]+)\sbuild\/.+silk\//i],
            [r, [d, "Amazon"], [c, u]],
            [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
            [
              [r, m.str, g.device.amazon.model],
              [d, "Amazon"],
              [c, p],
            ],
            [/android.+aft([bms])\sbuild/i],
            [r, [d, "Amazon"], [c, w]],
            [/\((ip[honed|\s\w*]+);.+(apple)/i],
            [r, d, [c, p]],
            [/\((ip[honed|\s\w*]+);/i],
            [r, [d, "Apple"], [c, p]],
            [
              /(blackberry)[\s-]?(\w+)/i,
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
              /(hp)\s([\w\s]+\w)/i,
              /(asus)-?(\w+)/i,
            ],
            [d, r, [c, p]],
            [/\(bb10;\s(\w+)/i],
            [r, [d, "BlackBerry"], [c, p]],
            [
              /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i,
            ],
            [r, [d, "Asus"], [c, u]],
            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
            [
              [d, "Sony"],
              [r, "Xperia Tablet"],
              [c, u],
            ],
            [
              /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [r, [d, "Sony"], [c, p]],
            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
            [d, r, [c, "console"]],
            [/android.+;\s(shield)\sbuild/i],
            [r, [d, "Nvidia"], [c, "console"]],
            [/(playstation\s[34portablevi]+)/i],
            [r, [d, "Sony"], [c, "console"]],
            [/(sprint\s(\w+))/i],
            [
              [d, m.str, g.device.sprint.vendor],
              [r, m.str, g.device.sprint.model],
              [c, p],
            ],
            [
              /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,
              /(zte)-(\w*)/i,
              /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
            ],
            [d, [r, /_/g, " "], [c, p]],
            [/(nexus\s9)/i],
            [r, [d, "HTC"], [c, u]],
            [
              /d\/huawei([\w\s-]+)[;\)]/i,
              /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i,
            ],
            [r, [d, "Huawei"], [c, p]],
            [/android.+(bah2?-a?[lw]\d{2})/i],
            [r, [d, "Huawei"], [c, u]],
            [/(microsoft);\s(lumia[\s\w]+)/i],
            [d, r, [c, p]],
            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
            [r, [d, "Microsoft"], [c, "console"]],
            [/(kin\.[onetw]{3})/i],
            [
              [r, /\./g, " "],
              [d, "Microsoft"],
              [c, p],
            ],
            [
              /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
              /mot[\s-]?(\w*)/i,
              /(XT\d{3,4}) build\//i,
              /(nexus\s6)/i,
            ],
            [r, [d, "Motorola"], [c, p]],
            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
            [r, [d, "Motorola"], [c, u]],
            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
            [
              [d, f.trim],
              [r, f.trim],
              [c, w],
            ],
            [/hbbtv.+maple;(\d+)/i],
            [
              [r, /^/, "SmartTV"],
              [d, "Samsung"],
              [c, w],
            ],
            [/\(dtv[\);].+(aquos)/i],
            [r, [d, "Sharp"], [c, w]],
            [
              /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
              /((SM-T\w+))/i,
            ],
            [[d, "Samsung"], r, [c, u]],
            [/smart-tv.+(samsung)/i],
            [d, [c, w], r],
            [
              /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
              /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
              /sec-((sgh\w+))/i,
            ],
            [[d, "Samsung"], r, [c, p]],
            [/sie-(\w*)/i],
            [r, [d, "Siemens"], [c, p]],
            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
            [[d, "Nokia"], r, [c, p]],
            [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
            [r, [d, "Acer"], [c, u]],
            [/android.+([vl]k\-?\d{3})\s+build/i],
            [r, [d, "LG"], [c, u]],
            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
            [[d, "LG"], r, [c, u]],
            [/(lg) netcast\.tv/i],
            [d, r, [c, w]],
            [
              /(nexus\s[45])/i,
              /lg[e;\s\/-]+(\w*)/i,
              /android.+lg(\-?[\d\w]+)\s+build/i,
            ],
            [r, [d, "LG"], [c, p]],
            [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
            [d, r, [c, u]],
            [/android.+(ideatab[a-z0-9\-\s]+)/i],
            [r, [d, "Lenovo"], [c, u]],
            [/(lenovo)[_\s-]?([\w-]+)/i],
            [d, r, [c, p]],
            [/linux;.+((jolla));/i],
            [d, r, [c, p]],
            [/((pebble))app\/[\d\.]+\s/i],
            [d, r, [c, "wearable"]],
            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
            [d, r, [c, p]],
            [/crkey/i],
            [
              [r, "Chromecast"],
              [d, "Google"],
              [c, w],
            ],
            [/android.+;\s(glass)\s\d/i],
            [r, [d, "Google"], [c, "wearable"]],
            [/android.+;\s(pixel c)[\s)]/i],
            [r, [d, "Google"], [c, u]],
            [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
            [r, [d, "Google"], [c, p]],
            [
              /android.+;\s(\w+)\s+build\/hm\1/i,
              /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
              /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
              /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
            ],
            [
              [r, /_/g, " "],
              [d, "Xiaomi"],
              [c, p],
            ],
            [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
            [
              [r, /_/g, " "],
              [d, "Xiaomi"],
              [c, u],
            ],
            [/android.+;\s(m[1-5]\snote)\sbuild/i],
            [r, [d, "Meizu"], [c, p]],
            [/(mz)-([\w-]{2,})/i],
            [[d, "Meizu"], r, [c, p]],
            [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
            [r, [d, "OnePlus"], [c, p]],
            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
            [r, [d, "RCA"], [c, u]],
            [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
            [r, [d, "Dell"], [c, u]],
            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
            [r, [d, "Verizon"], [c, u]],
            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
            [[d, "Barnes & Noble"], r, [c, u]],
            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
            [r, [d, "NuVision"], [c, u]],
            [/android.+;\s(k88)\sbuild/i],
            [r, [d, "ZTE"], [c, u]],
            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
            [r, [d, "Swiss"], [c, p]],
            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
            [r, [d, "Swiss"], [c, u]],
            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
            [r, [d, "Zeki"], [c, u]],
            [
              /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
              /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
            ],
            [[d, "Dragon Touch"], r, [c, u]],
            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
            [r, [d, "Insignia"], [c, u]],
            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
            [r, [d, "NextBook"], [c, u]],
            [
              /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
            ],
            [[d, "Voice"], r, [c, p]],
            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
            [[d, "LvTel"], r, [c, p]],
            [/android.+;\s(PH-1)\s/i],
            [r, [d, "Essential"], [c, p]],
            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
            [r, [d, "Envizen"], [c, u]],
            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
            [d, r, [c, u]],
            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
            [r, [d, "MachSpeed"], [c, u]],
            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
            [d, r, [c, u]],
            [/android.+[;\/]\s*TU_(1491)\s+build/i],
            [r, [d, "Rotor"], [c, u]],
            [/android.+(KS(.+))\s+build/i],
            [r, [d, "Amazon"], [c, u]],
            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
            [d, r, [c, u]],
            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
            [[c, f.lowerize], d, r],
            [/[\s\/\(](smart-?tv)[;\)]/i],
            [[c, w]],
            [/(android[\w\.\s\-]{0,9});.+build/i],
            [r, [d, "Generic"]],
          ],
          engine: [
            [/windows.+\sedge\/([\w\.]+)/i],
            [l, [s, "EdgeHTML"]],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [l, [s, "Blink"]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
              /(icab)[\/\s]([23]\.[\d\.]+)/i,
            ],
            [s, l],
            [/rv\:([\w\.]{1,9}).+(gecko)/i],
            [l, s],
          ],
          os: [
            [/microsoft\s(windows)\s(vista|xp)/i],
            [s, l],
            [
              /(windows)\snt\s6\.2;\s(arm)/i,
              /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
              /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
            ],
            [s, [l, m.str, g.os.windows.version]],
            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
            [
              [s, "Windows"],
              [l, m.str, g.os.windows.version],
            ],
            [/\((bb)(10);/i],
            [[s, "BlackBerry"], l],
            [
              /(blackberry)\w*\/?([\w\.]*)/i,
              /(tizen|kaios)[\/\s]([\w\.]+)/i,
              /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
            ],
            [s, l],
            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
            [[s, "Symbian"], l],
            [/\((series40);/i],
            [s],
            [/mozilla.+\(mobile;.+gecko.+firefox/i],
            [[s, "Firefox OS"], l],
            [
              /(nintendo|playstation)\s([wids34portablevu]+)/i,
              /(mint)[\/\s\(]?(\w*)/i,
              /(mageia|vectorlinux)[;\s]/i,
              /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
              /(hurd|linux)\s?([\w\.]*)/i,
              /(gnu)\s?([\w\.]*)/i,
            ],
            [s, l],
            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
            [[s, "Chromium OS"], l],
            [/(sunos)\s?([\w\.\d]*)/i],
            [[s, "Solaris"], l],
            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
            [s, l],
            [/(haiku)\s(\w+)/i],
            [s, l],
            [
              /cfnetwork\/.+darwin/i,
              /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
            ],
            [
              [l, /_/g, "."],
              [s, "iOS"],
            ],
            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
            [
              [s, "Mac OS"],
              [l, /_/g, "."],
            ],
            [
              /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
              /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
              /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
              /(unix)\s?([\w\.]*)/i,
            ],
            [s, l],
          ],
        },
        v = function (e, n) {
          if (
            ("object" == typeof e && ((n = e), (e = void 0)),
            !(this instanceof v))
          )
            return new v(e, n).getResult();
          var t =
              e ||
              (i && i.navigator && i.navigator.userAgent
                ? i.navigator.userAgent
                : ""),
            o = n ? f.extend(h, n) : h;
          return (
            (this.getBrowser = function () {
              var e = { name: void 0, version: void 0 };
              return (
                m.rgx.call(e, t, o.browser), (e.major = f.major(e.version)), e
              );
            }),
            (this.getCPU = function () {
              var e = { architecture: void 0 };
              return m.rgx.call(e, t, o.cpu), e;
            }),
            (this.getDevice = function () {
              var e = { vendor: void 0, model: void 0, type: void 0 };
              return m.rgx.call(e, t, o.device), e;
            }),
            (this.getEngine = function () {
              var e = { name: void 0, version: void 0 };
              return m.rgx.call(e, t, o.engine), e;
            }),
            (this.getOS = function () {
              var e = { name: void 0, version: void 0 };
              return m.rgx.call(e, t, o.os), e;
            }),
            (this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            }),
            (this.getUA = function () {
              return t;
            }),
            (this.setUA = function (e) {
              return (t = e), this;
            }),
            this
          );
        };
      (v.VERSION = "0.7.21"),
        (v.BROWSER = { NAME: s, MAJOR: "major", VERSION: l }),
        (v.CPU = { ARCHITECTURE: "architecture" }),
        (v.DEVICE = {
          MODEL: r,
          VENDOR: d,
          TYPE: c,
          CONSOLE: "console",
          MOBILE: p,
          SMARTTV: w,
          TABLET: u,
          WEARABLE: "wearable",
          EMBEDDED: "embedded",
        }),
        (v.ENGINE = { NAME: s, VERSION: l }),
        (v.OS = { NAME: s, VERSION: l }),
        void 0 !== n
          ? (void 0 !== e && e.exports && (n = e.exports = v), (n.UAParser = v))
          : void 0 ===
              (o = function () {
                return v;
              }.call(n, t, n, e)) || (e.exports = o);
      var _ = i && (i.jQuery || i.Zepto);
      if (_ && !_.ua) {
        var b = new v();
        (_.ua = b.getResult()),
          (_.ua.get = function () {
            return b.getUA();
          }),
          (_.ua.set = function (e) {
            b.setUA(e);
            var n = b.getResult();
            for (var t in n) _.ua[t] = n[t];
          });
      }
    })("object" == typeof window ? window : this);
  },
  function (e, n) {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      o = {};
    (o.encode = function (e) {
      var n,
        o,
        i,
        a,
        r,
        s,
        c,
        d = "",
        l = 0;
      for (
        e = (function (e) {
          e = e.replace(/\r\n/g, "\n");
          for (var n = "", t = 0; t < e.length; t++) {
            var o = e.charCodeAt(t);
            o < 128
              ? (n += String.fromCharCode(o))
              : o > 127 && o < 2048
              ? ((n += String.fromCharCode((o >> 6) | 192)),
                (n += String.fromCharCode((63 & o) | 128)))
              : ((n += String.fromCharCode((o >> 12) | 224)),
                (n += String.fromCharCode(((o >> 6) & 63) | 128)),
                (n += String.fromCharCode((63 & o) | 128)));
          }
          return n;
        })(e);
        l < e.length;

      )
        (a = (n = e.charCodeAt(l++)) >> 2),
          (r = ((3 & n) << 4) | ((o = e.charCodeAt(l++)) >> 4)),
          (s = ((15 & o) << 2) | ((i = e.charCodeAt(l++)) >> 6)),
          (c = 63 & i),
          isNaN(o) ? (s = c = 64) : isNaN(i) && (c = 64),
          (d = d + t.charAt(a) + t.charAt(r) + t.charAt(s) + t.charAt(c));
      return d;
    }),
      (o.decode = function (e) {
        var n,
          o,
          i,
          a,
          r,
          s,
          c = "",
          d = 0;
        for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); d < e.length; )
          (n =
            (t.indexOf(e.charAt(d++)) << 2) |
            ((a = t.indexOf(e.charAt(d++))) >> 4)),
            (o = ((15 & a) << 4) | ((r = t.indexOf(e.charAt(d++))) >> 2)),
            (i = ((3 & r) << 6) | (s = t.indexOf(e.charAt(d++)))),
            (c += String.fromCharCode(n)),
            64 != r && (c += String.fromCharCode(o)),
            64 != s && (c += String.fromCharCode(i));
        return (c = (function (e) {
          for (var n = "", t = 0, o = 0, i = 0, a = 0; t < e.length; )
            (o = e.charCodeAt(t)) < 128
              ? ((n += String.fromCharCode(o)), t++)
              : o > 191 && o < 224
              ? ((i = e.charCodeAt(t + 1)),
                (n += String.fromCharCode(((31 & o) << 6) | (63 & i))),
                (t += 2))
              : ((i = e.charCodeAt(t + 1)),
                (a = e.charCodeAt(t + 2)),
                (n += String.fromCharCode(
                  ((15 & o) << 12) | ((63 & i) << 6) | (63 & a)
                )),
                (t += 3));
          return n;
        })(c));
      }),
      (e.exports = o);
  },
  function (e, n, t) {
    var o = window.experimentInfo,
      i = window.AppInfoData && window.AppInfoData.appDetail,
      a = t(5);
    o &&
      o.params.wechatDownloadInfoText &&
      (a.wechatDownloadInfo.text = o.params.wechatDownloadInfoText.replace(
        "{appName}",
        i.appName
      )),
      o &&
        o.params.wechatDownloadLogo &&
        (a.wechatDownloadInfo.logo = o.params.wechatDownloadLogo);
  },
  function (e, n, t) {
    var o = t(12),
      i = window.experimentInfo;
    i &&
      i.params &&
      i.params.normalBtnTextWhenUninstallYybUninstallApp &&
      (o.getBtnText = function (e, n) {
        return n
          ? e
            ? "安全打开"
            : "打开"
          : i.params.normalBtnTextWhenUninstallYybUninstallApp;
      });
  },
  function (e, n) {
    e.exports = {
      show: function (e, n) {
        n || (n = 3e3),
          $("#toast").show().html("<p>".concat(e, "</p>")),
          setTimeout(function () {
            $("#toast").hide();
          }, n);
      },
    };
  },
  function (e, n) {
    e.exports = {
      init: function () {
        window.BJ_REPORT.init({
          id: 28818,
          combo: 1,
          delay: 1e3,
          url: "https://badjs.3g.qq.com/badjs",
          ignore: [],
          random: location.href.indexOf("debug") > 0 ? 1 : 0.001,
          repeat: 5,
          onReport: function (e, n) {
            console.error(e, n);
          },
          ext: {},
        });
      },
    };
  },
  function (e, n, t) {
    var o = t(0);
    e.exports = {
      loadAndInit: function () {
        o.loadScript(
          location.protocol +
            "//" +
            location.host +
            "/o/res/dist/js/tcss.min.js",
          function () {
            if (window.tcssPV) {
              var e = o.getQuery("pkgname") + o.getQuery("fromcase"),
                n = document.referrer || "",
                t =
                  n.match(
                    /(\w+):\/\/([^:|/]+)(:\d*)?(.*\/)([^#|?|\n]+)?(#.*)?(\?.*)?/i
                  ) || [];
              window.tcssPV.send("micro.a.app.com", e, {
                referURL: n || "-",
                referDomain: t[2] || "-",
                referPath: t[4] || "-",
              });
            }
          }
        );
      },
    };
  },
  function (e, n, t) {
    var o,
      i = t(41),
      a = t(0);
    e.exports = {
      init: function () {
        o = new i({
          id: 2285,
          uin: a.getCookie("sd_userid"),
          listenOnerror: !1,
          random: 0.5,
          reportAssetSpeed: !0,
          useAid: !1,
        });
      },
      aegis: o,
    };
  },
  function (e, n, t) {
    e.exports = (function () {
      "use strict";
      var e = function (n, t) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, n) {
              e.__proto__ = n;
            }) ||
          function (e, n) {
            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
          })(n, t);
      };
      function n(n, t) {
        function o() {
          this.constructor = n;
        }
        e(n, t),
          (n.prototype =
            null === t
              ? Object.create(t)
              : ((o.prototype = t.prototype), new o()));
      }
      var t,
        o,
        i,
        a,
        r = function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var n, t = 1, o = arguments.length; t < o; t++)
                for (var i in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              return e;
            }).apply(this, arguments);
        },
        s =
          ((c.prototype.indexOf = function (e, n) {
            for (var t = 0; t < e.length; t++)
              if (e[t].callback === n) return t;
            return -1;
          }),
          (c.prototype.on = function (e, n, t) {
            if ((void 0 === t && (t = 0), this)) {
              var o = this.__EventsList[e];
              if (
                ((o = o || (this.__EventsList[e] = [])),
                -1 !== this.indexOf(o, n))
              )
                return this;
              var i = { name: e, type: t || 0, callback: n };
              return o.push(i), this;
            }
          }),
          (c.prototype.one = function (e, n) {
            this.on(e, n, 1);
          }),
          (c.prototype.remove = function (e, n) {
            if (this) {
              var t = this.__EventsList[e];
              if (!t) return null;
              if (!n) {
                try {
                  delete this.__EventsList[e];
                } catch (e) {}
                return null;
              }
              if (t.length) {
                var o = this.indexOf(t, n);
                t.splice(o, 1);
              }
              return this;
            }
          }),
          c);
      function c() {
        var e = this;
        (this.emit = function (n, t) {
          if (e) {
            var o,
              i = e.__EventsList[n];
            if (i && i.length) {
              i = i.slice();
              for (var a = 0; a < i.length; a++) {
                o = i[a];
                try {
                  var r = o.callback.apply(e, [t]);
                  if ((1 === o.type && e.remove(n, o.callback), !1 === r))
                    break;
                } catch (n) {
                  throw n;
                }
              }
            }
            return e;
          }
        }),
          (this.__EventsList = {});
      }
      function d(e) {
        return (
          (e = Array.isArray(e) ? e : [e])
            .map(function (e, n) {
              return Object.getOwnPropertyNames(e)
                .map(function (t) {
                  return l(t) + "[" + n + "]=" + l(e[t]);
                })
                .join("&");
            })
            .join("&") + (e.length ? "&count=" + e.length : "")
        );
      }
      function l(e) {
        try {
          return encodeURIComponent(decodeURIComponent(e));
        } catch (e) {
          return "";
        }
      }
      function p(e, n) {
        return "number" == typeof e || "string" == typeof e
          ? e
          : n
          ? o.string
          : o.number;
      }
      function u(e, n) {
        return "string" == typeof e ? e.split("?")[n ? 1 : 0] || "" : e;
      }
      function w(e) {
        return /^https/.test(e);
      }
      function f() {
        return (
          void 0 !== window.performance &&
          "function" == typeof (e = window.Performance) &&
          /native code/.test(e.toString()) &&
          "function" == typeof performance.clearResourceTimings &&
          "function" == typeof performance.getEntriesByType &&
          "function" == typeof performance.now
        );
        var e;
      }
      ((a = t = t || {}).INFO_ALL = "-1"),
        (a.API_RESPONSE = "1"),
        (a.INFO = "2"),
        (a.ERROR = "4"),
        (a.PROMISE_ERROR = "8"),
        (a.AJAX_ERROR = "16"),
        (a.SCRIPT_ERROR = "32"),
        (a.IMAGE_ERROR = "64"),
        (a.CSS_ERROR = "128"),
        (a.CONSOLE_ERROR = "256"),
        (a.MEDIA_ERROR = "512"),
        (a.RET_ERROR = "1024"),
        (a.REPORT = "2048"),
        ((i = o = o || {})[(i.number = -1)] = "number"),
        (i.string = "");
      var m = [
        "application/octet-stream",
        "application/xhtml+xml",
        "application/xml",
        "application/pdf",
        "application/pkcs12",
        "application/javascript",
        "application/ecmascript",
        "application/vnd.mspowerpoint",
        "application/ogg",
        "text/html",
        "text/css",
        "text/javascript",
        "image",
        "audio",
        "video",
      ];
      function g(e) {
        return m.some(function (n) {
          return -1 !== e.indexOf(n);
        });
      }
      function h(e, n) {
        try {
          if (("string" == typeof e && (e = JSON.parse(e)), n && n.ret)) {
            var t = n.ret;
            _ = [].concat(t);
          }
          var o = Object.getOwnPropertyNames(e).filter(function (e) {
            return -1 !== _.indexOf(e.toLowerCase());
          });
          return o.length ? "" + e[o[0]] : "unknown";
        } catch (e) {
          return "unknown";
        }
      }
      function v(e) {
        try {
          return (
            JSON.stringify(
              e,
              ((n = []),
              (t = []),
              function (e, o) {
                if (o instanceof Error)
                  return (
                    "Error.message【 " +
                    o.message +
                    " 】;  Error.stack【 " +
                    o.stack +
                    " 】"
                  );
                if ("object" == typeof o && null !== o) {
                  var i = n.indexOf(o);
                  if (-1 !== i) return "[Circular " + t[i] + "]";
                  n.push(o), t.push(e || "root");
                }
                return o;
              }),
              4
            ) || "undefined"
          ).replace(/"/gim, "");
        } catch (e) {
          return (
            "error happen when aegis stringify: \n " +
            e.message +
            " \n " +
            e.stack
          );
        }
        var n, t;
      }
      var _ = ["ret", "retcode", "code"],
        b =
          (Object.defineProperty(E.prototype, "sourceURL", {
            get: function () {
              return this.data.responseURL;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(E.prototype, "status", {
            get: function () {
              return Number(this.data.status);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(E.prototype, "headers", {
            get: function () {
              var e = this.data.getAllResponseHeaders().split("\n"),
                n = {};
              return (
                e.forEach(function (e) {
                  if (e) {
                    var t = e.split(": "),
                      o = t[0],
                      i = t[1].trim();
                    n[o] = i;
                  }
                }),
                n
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          E),
        y =
          (Object.defineProperty(A.prototype, "sourceURL", {
            get: function () {
              return this.data.url;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(A.prototype, "status", {
            get: function () {
              return Number(this.data.status);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(A.prototype, "headers", {
            get: function () {
              var e = {};
              return (
                this.data.headers.forEach(function (n, t) {
                  e[t] = n;
                }),
                e
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          A),
        D = [];
      function A(e, n) {
        (this.type = "fetch"), (this.data = e || {}), (this.data.response = n);
      }
      function E(e) {
        (this.type = "xhr"), (this.data = e);
      }
      function k(e) {
        D.forEach(function (n) {
          n(e);
        });
      }
      var T = !1,
        N = !1,
        S = ["img", "css", "script", "link", "audio", "radio"],
        C = [];
      function I(e) {
        C.forEach(function (n) {
          n(e);
        });
      }
      var x = 0;
      function B() {
        var e,
          n = performance.getEntriesByType("resource"),
          t = n.slice(x);
        x = n.length;
        for (var i = 0, a = t.length; i < a; i++) {
          var r = t[i];
          -1 !== S.indexOf(r.initiatorType) &&
            I({
              url: u((e = r).name),
              method: "get",
              duration: Number(e.duration.toFixed(2)),
              status: 200,
              type: "static",
              isHttps: w(e.name),
              urlQuery: u(e.name, !0),
              x5ContentType: p(e.x5ContentType, !0),
              x5HttpStatusCode: p(e.x5HttpStatusCode),
              x5ImgDecodeStatus: p(e.x5ImgDecodeStatus),
              x5ErrorCode: p(e.x5ErrorCode),
              x5LoadFromLocalCache:
                void 0 === e.x5LoadFromLocalCache
                  ? o.number
                  : 0 | e.x5LoadFromLocalCache,
              x5ContentLength: e.encodedBodySize || p(e.x5ContentLength),
              domainLookup: p(e.domainLookupEnd - e.domainLookupStart),
              connectTime: p(e.connectEnd - e.connectStart),
            });
        }
      }
      var O,
        R = [];
      function L(e, n) {
        var t = [];
        for (var o in e) t.push(o + "=" + e[o]);
        R.forEach(function (e) {
          e({ url: n.config.performanceUrl + "?" + t.join("&") });
        }),
          (R.length = 0);
      }
      function q(e) {
        if (!e || !e.getBoundingClientRect) return !1;
        var n = e.getBoundingClientRect(),
          t = window.innerHeight,
          o = window.innerWidth;
        return 0 <= n.left && n.left < o && 0 <= n.top && n.top < t;
      }
      var P = !1,
        Q = [];
      function U(e) {
        Q.forEach(function (n) {
          n(e);
        });
      }
      var F = [];
      function V(e) {
        F.forEach(function (n) {
          n(e);
        });
      }
      var J = !1;
      function j(e) {
        return (
          window.btoa &&
          window.btoa(
            JSON.stringify({
              ids: {
                trace_id: { high: W(), low: W() },
                span_id: W(),
                parent_id: 0,
                flag: 2,
              },
              baggages: { aegis_session_id: e._sessionID },
            })
          )
        );
      }
      function W() {
        return parseInt(
          new Array(53)
            .fill(1)
            .map(function () {
              return 0.5 < Math.random() ? 1 : 0;
            })
            .join(""),
          2
        );
      }
      function M(e) {
        var n = document.createElement("a");
        return (n.href = e), location.origin === n.origin;
      }
      var Y,
        $,
        G,
        H,
        z,
        X,
        K = navigator.userAgent;
      function Z(e) {
        var n;
        e(
          ((n =
            navigator.connection && navigator.connection.type
              ? navigator.connection.type
              : "unknown"),
          0 <= (n = String(n).toLowerCase()).indexOf("2g")
            ? G.net2g
            : 0 <= n.indexOf("3g")
            ? G.net3g
            : 0 <= n.indexOf("4g")
            ? G.net4g
            : 0 <= n.indexOf("5g")
            ? G.net5g
            : 0 <= n.indexOf("6g")
            ? G.net6g
            : 0 <= n.indexOf("wifi")
            ? G.wifi
            : G.unknown)
        );
      }
      function ee(e, n) {
        var t;
        void 0 === e && (e = 0);
        var o = [];
        return function (i, a) {
          if ((o.push(i), n && o.length >= n))
            return a(o.splice(0, o.length)), void (t && clearTimeout(t));
          t && clearTimeout(t),
            (t = setTimeout(function () {
              (t = null), a(o.splice(0, o.length));
            }, e));
        };
      }
      function ne(e, n) {
        return Array.isArray(e)
          ? n(
              e.map(function (e) {
                return {
                  msg: "string" == typeof e.msg ? e.msg : v(e.msg),
                  level: e.level,
                };
              })
            )
          : n({
              msg: "string" == typeof e.msg ? e.msg : v(e.msg),
              level: e.level,
            });
      }
      ((X = Y = Y || {})[(X.android = 1)] = "android"),
        (X[(X.ios = 2)] = "ios"),
        (X[(X.other = 100)] = "other"),
        ((z = $ = $ || {})[(z.oldX5 = 1)] = "oldX5"),
        (z[(z.newX5 = 2)] = "newX5"),
        (z[(z.other = 3)] = "other"),
        ((H = G = G || {})[(H.unknown = 100)] = "unknown"),
        (H[(H.wifi = 1)] = "wifi"),
        (H[(H.net2g = 2)] = "net2g"),
        (H[(H.net3g = 3)] = "net3g"),
        (H[(H.net4g = 4)] = "net4g"),
        (H[(H.net5g = 5)] = "net5g"),
        (H[(H.net6g = 6)] = "net6g");
      var te = function () {};
      function oe(e) {
        if (!e || !e.reduce || !e.length)
          throw new TypeError(
            "createPipeline 方法需要传入至少有一个 pipe 的数组"
          );
        return 1 === e.length
          ? function (n, t) {
              e[0](n, t || te);
            }
          : e.reduce(function (e, n) {
              return function (t, o) {
                return (
                  void 0 === o && (o = te),
                  e(t, function (e) {
                    return n && n(e, o);
                  })
                );
              };
            });
      }
      var ie =
        ((ae.prototype.init = function (e, n) {
          var t = this;
          this.setConfig(e),
            ae.installedPlugins.forEach(function (e) {
              e.call(t, n);
            }),
            this.lifeCycle.emit("onInited");
        }),
        (ae.prototype.setConfig = function (e) {
          return (
            Object.assign(this.config, e),
            (this.bean.id = this.config.id || ""),
            (this.bean.uin = this.config.uin || ""),
            (this.bean.version = this.config.version || 0),
            this.lifeCycle.emit("onConfigChange", e),
            this.config
          );
        }),
        (ae.prototype.extendBean = function (e, n) {
          this.bean[e] = n;
        }),
        (ae.use = function (e) {
          -1 === ae.installedPlugins.indexOf(e) && ae.installedPlugins.push(e);
        }),
        (ae.prototype.send = function (e, n, t) {
          throw new Error('You need to override "send" method');
        }),
        (ae.prototype._sendSDKError = function (e) {
          this.send({
            url:
              "https://aegis.qq.com/collect?id=1085&msg[0]=" +
              encodeURIComponent(v(e)) +
              "&level[0]=2&from=" +
              this.config.id +
              "&count=1&version=" +
              this.config.id +
              "(1.14.0)",
            addBean: !1,
            method: "get",
          });
        }),
        (ae.prototype.info = function (e) {
          this._normalLogPipeline({ msg: e, level: t.INFO });
        }),
        (ae.prototype.infoAll = function (e) {
          this._normalLogPipeline({ msg: e, level: t.INFO_ALL });
        }),
        (ae.prototype.report = function (e) {
          this._normalLogPipeline({ msg: e, level: t.REPORT });
        }),
        (ae.prototype.reportPv = function (e) {
          e && this.send({ url: this.config.url + "/" + e, addBean: !1 });
        }),
        (ae.prototype.reportTime = function (e, n) {
          "string" == typeof e
            ? "number" == typeof n
              ? this._submitCustomTime(e, n)
              : console.warn("reportTime 的第二个参数必须为 number 类型哟")
            : console.warn(
                "reportTime 的第一个参数必须为开发者平台申请的 key 值"
              );
        }),
        (ae.prototype.time = function (e) {
          "string" == typeof e
            ? this._timeMap[e]
              ? console.warn("Timer " + e + " already exists")
              : (this._timeMap[e] = Date.now())
            : console.warn(
                "time 的第一个参数必须传入开发者平台申请到的 key 值"
              );
        }),
        (ae.prototype.timeEnd = function (e) {
          "string" == typeof e
            ? this._timeMap[e]
              ? (this._submitCustomTime(e, Date.now() - this._timeMap[e]),
                delete this._timeMap[e])
              : console.warn("Timer " + e + " does not exist")
            : console.warn(
                "timeEnd 的第一个参数必须传入开发者平台申请到的 key 值"
              );
        }),
        (ae.prototype._submitCustomTime = function (e, n) {
          this._customTimePipeline({ name: e, duration: n });
        }),
        (ae.installedPlugins = []),
        ae);
      function ae(e) {
        var n,
          o = this;
        (this.config = {
          version: 1,
          delay: 1500,
          repeat: 5,
          random: 1,
          url: "https://aegis.qq.com/collect",
          speedUrl: "https://aegis.qq.com/speed",
          customTimeUrl: "https://aegis.qq.com/speed/custom",
          whiteListUrl: "https://aegis.qq.com/aegis/whitelist",
          performanceUrl: "https://aegis.qq.com/speed/performance",
        }),
          (this.lifeCycle = new s()),
          (this.bean = {}),
          (this._normalLogPipeline = oe([
            ee(this.config.delay, 5),
            ((n = this.lifeCycle.emit),
            function (e, t) {
              return n("beforeWrite", e), t(e);
            }),
            (function (e) {
              var n = !1,
                o = !1;
              setTimeout(function () {
                e.send(
                  { url: e.config.whiteListUrl || "" },
                  function (e) {
                    try {
                      0 === (e = JSON.parse(e) || {}).retcode &&
                        (n = e.result.is_in_white_list);
                    } catch (e) {}
                    o = !0;
                  },
                  function () {
                    o = !0;
                  }
                );
              }, 50);
              var i = [];
              return function (e, a) {
                if (n)
                  a(
                    e.concat(i.splice(0)).map(function (e) {
                      return e.level === t.INFO_ALL && (e.level = t.INFO), e;
                    })
                  );
                else {
                  var r = e.filter(function (e) {
                    if (e.level !== t.INFO && e.level !== t.API_RESPONSE)
                      return e.level === t.INFO_ALL && (e.level = t.INFO), !0;
                    o || (i.push(e), 200 <= i.length && (i.length = 200));
                  });
                  r.length && a(r);
                }
              };
            })(this),
            ne,
            function (e, n) {
              var t = JSON.parse(JSON.stringify(e));
              o.lifeCycle.emit("beforeReport", t);
              var i = o.config.beforeReport;
              if (
                ("function" == typeof i &&
                  (e = e.filter(function (e) {
                    return !1 !== i(e);
                  })),
                e.length)
              )
                return n(e);
            },
            function (e) {
              o.send(
                {
                  url: o.config.url || "",
                  data: d(e),
                  method: "post",
                  contentType: "application/x-www-form-urlencoded",
                },
                function () {
                  var n = o.config.onReport;
                  "function" == typeof n &&
                    e.forEach(function (e) {
                      n(e);
                    });
                }
              );
            },
          ])),
          (this._timeMap = {}),
          (this._customTimePipeline = oe([
            ee(this.config.delay),
            function (e) {
              o.send({
                url:
                  o.config.customTimeUrl +
                  "?version=" +
                  o.config.version +
                  "&payload=" +
                  encodeURIComponent(JSON.stringify({ custom: e })),
              });
            },
          ]));
      }
      function re(e) {
        if (e.payload) {
          var n = {};
          return (
            Object.keys(e).forEach(function (t) {
              "payload" !== t && (n[t] = e[t]);
            }),
            n
          );
        }
        return e;
      }
      Object.assign ||
        Object.defineProperty(Object, "assign", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function (e) {
            if (null == e)
              throw new TypeError("Cannot convert first argument to object");
            for (var n = Object(e), t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              if (null != o) {
                o = Object(o);
                for (
                  var i = Object.keys(Object(o)), a = 0, r = i.length;
                  a < r;
                  a++
                ) {
                  var s = i[a],
                    c = Object.getOwnPropertyDescriptor(o, s);
                  void 0 !== c && c.enumerable && (n[s] = o[s]);
                }
              }
            }
            return n;
          },
        });
      var se,
        ce =
          (n(de, (se = ie)),
          Object.defineProperty(de.prototype, "_bean", {
            get: function () {
              var e = this;
              return (
                Object.getOwnPropertyNames(this.bean)
                  .map(function (n) {
                    return n + "=" + e.bean[n];
                  })
                  .join("&") +
                "&from=" +
                encodeURIComponent(location.href)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          (de.prototype._initOfflineLog = function () {
            !(function (e, n) {
              var o = [],
                i = null;
              function a(e) {
                o.push(e);
              }
              function s(e, n) {
                void 0 === e && (e = {}),
                  void 0 === n && (n = {}),
                  (i = { conds: e, params: n });
              }
              ce.useAsyncPlugin(e, {
                exportsConstructor: "Flog",
                onAegisInit: function (e) {
                  e.lifeCycle.on("beforeWrite", a),
                    e.lifeCycle.on("uploadLogs", s);
                },
                onAegisInitAndPluginLoaded: function (e, c) {
                  var l = n.dbConfig,
                    p = void 0 === l ? {} : l,
                    u = n.url,
                    w = void 0 === u ? ce.urls.aegisCollect : u,
                    f = n.offlineLogExp,
                    m = void 0 === f ? 3 : f,
                    g = n.id,
                    h = n.uin;
                  e.lifeCycle.remove("beforeWrite", a),
                    e.lifeCycle.remove("uploadLogs", s);
                  var _ = Object.assign(
                    {
                      lookupUrl: w + "/offlineAuto?id=" + g + "&uin=" + h,
                      uploadUrl: w + "/offlineLog",
                      preservedDay: m,
                      id: g,
                      uin: h,
                    },
                    p,
                    { sessionId: ce._sessionID }
                  );
                  try {
                    var b = new c(_);
                    o.forEach(function (e) {
                      b.add(e);
                    }),
                      e.lifeCycle.on("beforeWrite", function (e) {
                        void 0 === e && (e = []),
                          e.forEach(function (e) {
                            b.add(r({}, e));
                          });
                      }),
                      e.lifeCycle.on("uploadLogs", function (e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = {});
                        var o = Object.assign({ id: n.id, uin: n.uin }, e);
                        b.uploadLogs(o, t);
                      }),
                      e.lifeCycle.on("onConfigChange", function (e) {
                        b.setConfig(e);
                      }),
                      b.on("PERREVENT", function (o) {
                        e.send({
                          data: d({ msg: v(o), level: t.INFO }),
                          contentType: "application/x-www-form-urlencoded",
                          method: "post",
                          addBean: !1,
                          url:
                            n.url +
                            "?id=893&sessionId=" +
                            ce._sessionID +
                            "&uin=" +
                            n.uin +
                            "&from=" +
                            n.id +
                            "&count=1&version=1.14.0",
                        });
                      }),
                      i &&
                        (e.lifeCycle.emit("uploadLogs", i.conds, i.params),
                        (i = null));
                  } catch (e) {
                    console.log(e);
                  }
                },
              });
            })(de.urls.flog, this.config);
          }),
          (de.prototype._initShadowLog = function () {
            !(function (e, t) {
              var o = null,
                i = null,
                a = t.shadowLog.pluginUrl || e;
              function r(e) {
                if (o && i) {
                  var a = t.id,
                    r = t.uin,
                    s = ce.urls.aegisCollect;
                  try {
                    var c =
                      (n(d, (l = i)),
                      (d.prototype.init = function (e) {
                        var n = {
                            dbConfig: { name: e.namespace },
                            lookupUrl:
                              s + "/shadowLogAuto?id=" + a + "&uin=" + r,
                            uploadUrl: s + "/shadowLog",
                            preservedDay: 7,
                            id: a,
                            uin: r,
                            sessionId: ce._sessionID,
                          },
                          t = new o(n);
                        return (this.flog = t), l.prototype.init.call(this, e);
                      }),
                      (d.prototype.postMessage = function (e) {
                        var n = e.type,
                          t = e.data;
                        "write" === n && this.flog.add(t);
                      }),
                      (d.prototype.report = function () {
                        this.flog.uploadLogs();
                      }),
                      new d(t.shadowLog));
                    e.lifeCycle.emit("onShadowLogInit", c);
                  } catch (e) {
                    console.log(e);
                  }
                }
                function d() {
                  return (null !== l && l.apply(this, arguments)) || this;
                }
                var l;
              }
              ce.useAsyncPlugin(ce.urls.flog, {
                exportsConstructor: "Flog",
                onAegisInitAndPluginLoaded: function (e, n) {
                  (o = n), r(e);
                },
              }),
                ce.useAsyncPlugin(a, {
                  exportsConstructor: "ShadowLogAegisPlugin",
                  onAegisInitAndPluginLoaded: function (e, n) {
                    (i = n), r(e);
                  },
                });
            })(de.urls.shadowLog, this.config);
          }),
          (de.prototype.uploadLogs = function (e, n) {
            void 0 === e && (e = {}),
              void 0 === n && (n = {}),
              this.lifeCycle.emit("uploadLogs", e, n);
          }),
          (de.useAsyncPlugin = function (e, n) {
            void 0 === n && (n = {});
            var t = n.exportsConstructor,
              o = void 0 === t ? "aegis-plugin-" + this.asyncPluginIndex++ : t,
              i = n.onAegisInit,
              a = void 0 === i ? function () {} : i,
              r = n.onAegisInitAndPluginLoaded,
              s = void 0 === r ? function () {} : r;
            if ("string" != typeof e)
              throw new TypeError("异步插件的 url 必须是 string 类型");
            if ("function" != typeof a || "function" != typeof s)
              throw new TypeError(
                "onAegisInit、onAegisInitAndPluginLoaded都必须是函数"
              );
            this.use(function () {
              var n,
                t,
                i,
                r,
                c,
                d = this;
              try {
                a(this),
                  de._asyncPlugin[e]
                    ? s(this, window[de._asyncPlugin[e]])
                    : ((n = e),
                      (t = o),
                      (i = function (n) {
                        if (!n) {
                          de._asyncPlugin[e] = o;
                          var t = window[o];
                          s(d, t);
                        }
                      }),
                      (r = document.createElement("script")),
                      (c = document.head),
                      "function" == typeof t && ((i = t), (t = "")),
                      (r.src = n),
                      r.setAttribute("name", t),
                      (r.name = t),
                      (r.async = !0),
                      (r.onload = r.onreadystatechange = function () {
                        (r.readyState &&
                          "loaded" !== r.readyState &&
                          "complete" !== r.readyState) ||
                          ("function" == typeof i && i(!1), c.removeChild(r));
                      }),
                      (r.onerror = function () {
                        "function" == typeof i && i(!0), c.removeChild(r);
                      }),
                      c.appendChild(r));
              } catch (d) {
                console.log("在初始化插件 " + e + " 时发生以下错误："),
                  console.error(d);
              }
            });
          }),
          Object.defineProperty(de, "urls", {
            get: function () {
              return {
                aegisCollect: "https://aegis.qq.com/collect",
                flog:
                  "https://cdn-go.cn/vasdev/web_webpersistance_v2/latest/flog.core.min.js",
                shadowLog: "",
              };
            },
            enumerable: !0,
            configurable: !0,
          }),
          (de.__version__ = "1.14.0"),
          (de._sessionID = "session-" + Date.now()),
          (de.asyncPluginIndex = 0),
          (de._asyncPlugin = {}),
          de);
      function de(e) {
        var n,
          t = se.call(this, e) || this;
        (t.send = function (e, n, o) {
          if (e && "string" == typeof e.url && "" !== e.url && t.bean.id) {
            var i = e.url;
            !1 !== e.addBean &&
              (i = i + (-1 === i.indexOf("?") ? "?" : "&") + t._bean);
            var a = e.method || "get",
              r = new XMLHttpRequest();
            (r.__sendByAegis = !0),
              r.addEventListener("readystatechange", function () {
                4 === r.readyState &&
                  (400 <= r.status ? o && o(r.response) : n && n(r.response));
              }),
              "get" === a.toLocaleLowerCase()
                ? (r.open(
                    "get",
                    (function (e, n) {
                      if ("string" != typeof e) return "";
                      if ("object" == typeof n && n) {
                        var t = Object.getOwnPropertyNames(n)
                          .map(function (e) {
                            var t = n[e];
                            return (
                              e +
                              "=" +
                              ("string" == typeof t
                                ? encodeURIComponent(t)
                                : encodeURIComponent(JSON.stringify(t)))
                            );
                          })
                          .join("&")
                          .replace(/eval/gi, "evaI");
                        return e + (-1 === e.indexOf("?") ? "?" : "&") + t;
                      }
                      return e;
                    })(i, e.data)
                  ),
                  r.send())
                : (r.open("post", i),
                  e.contentType &&
                    r.setRequestHeader("Content-Type", e.contentType),
                  "string" == typeof e.data &&
                    (e.data = e.data.replace(/eval/gi, "evaI")),
                  r.send(e.data));
          }
        }),
          (t._speedLogPipeline = oe([
            ((n = {}),
            function (e, t) {
              if (Array.isArray(e)) {
                var o = e.filter(function (e) {
                  var t = !n[e.url];
                  return (n[e.url] = !0), t;
                });
                o.length && t(o);
              } else n[e.url] || t(e), (n[e.url] = !0);
            }),
            ee(t.config.delay),
            function (e, n) {
              t.lifeCycle.emit("beforeReportSpeed", e);
              var o = t.config.beforeReportSpeed;
              if (
                ("function" == typeof o &&
                  (e = e.filter(function (e) {
                    var n = !1 !== o(e);
                    return (
                      "fetch" === e.type &&
                        void 0 === e.ret &&
                        e.payload &&
                        (e.ret = h(e.payload.data.response, t.config.api)),
                      n
                    );
                  })),
                e.length)
              )
                return n(e);
            },
            function (e) {
              t.send({
                url: "" + t.config.speedUrl,
                method: "post",
                data: (function (e, n) {
                  var t = { fetch: [], static: [] },
                    o = new FormData();
                  if (Array.isArray(e))
                    e.forEach(function (e) {
                      var n = re(e);
                      t[e.type].push(n);
                    });
                  else {
                    var i = re(e);
                    t[e.type].push(i);
                  }
                  return (
                    o.append("payload", JSON.stringify(r({ duration: t }, n))),
                    o
                  );
                })(e, t.bean),
              });
            },
          ]));
        try {
          (e.uin =
            e.uin ||
            parseInt((document.cookie.match(/\buin=\D+(\d*)/) || [])[1], 10) ||
            parseInt(
              (document.cookie.match(/\bilive_uin=\D*(\d+)/) || [])[1],
              10
            ) ||
            ""),
            e.offlineLog && t._initOfflineLog(),
            e.shadowLog && t._initShadowLog(),
            t.init(e, de),
            t.extendBean("sessionId", de._sessionID);
        } catch (e) {
          console.warn(e),
            console.log(
              "%c以上错误发生在初始化 Aegis 的过程中，将会影响您正常使用 Aegis，\n建议您联系 aegis-helper，进行反馈，感谢您的支持。",
              "color: red"
            ),
            t._sendSDKError(e);
        }
        return t;
      }
      return (
        ce.use(function () {
          D.push(this._normalLogPipeline),
            (function () {
              if (!T) {
                T = !0;
                var e = window.onerror;
                (window.onerror = function () {
                  for (var n = [], o = 0; o < arguments.length; o++)
                    n[o] = arguments[o];
                  n[4] && k({ msg: n[4], level: t.ERROR }),
                    e &&
                      e.call.apply(
                        e,
                        (function () {
                          for (
                            var e = 0, n = 0, t = arguments.length;
                            n < t;
                            n++
                          )
                            e += arguments[n].length;
                          var o = Array(e),
                            i = 0;
                          for (n = 0; n < t; n++)
                            for (
                              var a = arguments[n], r = 0, s = a.length;
                              r < s;
                              r++, i++
                            )
                              o[i] = a[r];
                          return o;
                        })([window], n)
                      );
                }),
                  window.addEventListener("unhandledrejection", function (e) {
                    k({
                      msg: "PROMISE_ERROR: " + (e && v(e.reason)),
                      level: t.PROMISE_ERROR,
                    });
                  }),
                  window.document.addEventListener(
                    "error",
                    function (e) {
                      if (e && e.target && e.srcElement) {
                        var n = e.target || e.srcElement,
                          o = n.src || n.href,
                          i = n.tagName;
                        if (o && i) {
                          var a = {
                            msg: i + " load fail: " + o,
                            level: t.INFO,
                          };
                          switch (i.toLowerCase()) {
                            case "script":
                              a.level = t.SCRIPT_ERROR;
                              break;
                            case "link":
                              a.level = t.CSS_ERROR;
                              break;
                            case "audio":
                            case "video":
                              a.level = t.MEDIA_ERROR;
                              break;
                            default:
                              return;
                          }
                          k(a);
                        }
                      }
                    },
                    !0
                  );
                var n = window.XMLHttpRequest.prototype,
                  o = n.open,
                  i = n.send;
                (n.open = function () {
                  return (
                    (this.aegisMethod && this.aegisUrl) ||
                      ((this.aegisMethod = arguments[0]),
                      (this.aegisUrl = arguments[1])),
                    o.apply(this, arguments)
                  );
                }),
                  (n.send = function () {
                    return (
                      this.__sendByAegis ||
                        this.addEventListener("loadend", function () {
                          this.aegisTimeout
                            ? k({
                                msg:
                                  "AJAX_ERROR: request timeout. status: " +
                                  this.status +
                                  ". \n url: " +
                                  this.aegisUrl,
                                level: t.AJAX_ERROR,
                              })
                            : 0 === this.status
                            ? k({
                                msg:
                                  "AJAX_ERROR: request failed. status: " +
                                  this.status +
                                  ". \n url: " +
                                  this.aegisUrl,
                                level: t.AJAX_ERROR,
                              })
                            : 400 <= this.status &&
                              k({
                                msg:
                                  "AJAX_ERROR: request error. status: " +
                                  this.status +
                                  ". \n url: " +
                                  this.aegisUrl,
                                level: t.AJAX_ERROR,
                              });
                        }),
                      this.__sendByAegis ||
                        this.addEventListener("timeout", function () {
                          this.aegisTimeout = !0;
                        }),
                      i.apply(this, arguments)
                    );
                  });
              }
            })();
        }),
        ce.use(function () {
          var e, n, i, a;
          this.config.reportApiSpeed &&
            (Q.push(this._speedLogPipeline),
            F.push(this._normalLogPipeline),
            P ||
              ((P = !0),
              (function (e) {
                if ("function" == typeof window.fetch) {
                  var n = window.fetch;
                  window.fetch = function (i, a) {
                    var r = Date.now();
                    return n(i, a)
                      .then(function (n) {
                        try {
                          var s = n.headers
                            ? n.headers.get("content-type")
                            : "";
                          n.ok && "string" == typeof s && g(s)
                            ? U({
                                url: u(n.url),
                                isHttps: w(n.url),
                                method: (a && a.method) || "get",
                                duration: Date.now() - r,
                                type: "static",
                                status: n.status,
                                urlQuery: u(n.url, !0),
                                x5ContentType: o.string,
                                x5HttpStatusCode: o.number,
                                x5ImgDecodeStatus: o.number,
                                x5ErrorCode: o.number,
                                x5LoadFromLocalCache: o.number,
                                x5ContentLength: o.number,
                                domainLookup: o.number,
                                connectTime: o.number,
                              })
                            : n
                                .clone()
                                .text()
                                .then(function (o) {
                                  V({
                                    msg: i + " " + o,
                                    level: t.API_RESPONSE,
                                  });
                                  var s = h(o, e.api);
                                  U({
                                    url: u(n.url),
                                    isHttps: w(n.url),
                                    method: (a && a.method) || "get",
                                    duration: Date.now() - r,
                                    type: "fetch",
                                    ret: s || "unknown",
                                    status: n.status,
                                    payload: new y(n, o),
                                  });
                                  var c = e.api && e.api.errCode;
                                  c = c && [].concat(c);
                                  var d = e.api && e.api.code;
                                  (d = d && [].concat(d)),
                                    ((c && -1 !== c.indexOf(s)) ||
                                      (d && -1 === d.indexOf(s)) ||
                                      (!c &&
                                        !d &&
                                        "0" !== s &&
                                        "unknown" !== s)) &&
                                      V({
                                        msg:
                                          "request url: " +
                                          i +
                                          " \n response: " +
                                          o,
                                        level: t.RET_ERROR,
                                      });
                                });
                        } catch (s) {}
                        return n;
                      })
                      .catch(function (e) {
                        throw (
                          (U({
                            url: u(i),
                            isHttps: w(i),
                            method: (a && a.method) || "get",
                            duration: Date.now() - r,
                            type: "fetch",
                            status: 600,
                          }),
                          e)
                        );
                      });
                  };
                }
              })(this.config),
              (e = this.config),
              (n = window.XMLHttpRequest.prototype),
              (i = n.open),
              (a = n.send),
              (n.open = function () {
                return (
                  (this.aegisMethod && this.aegisUrl) ||
                    ((this.aegisMethod = arguments[0]),
                    (this.aegisUrl = arguments[1])),
                  i.apply(this, arguments)
                );
              }),
              (n.send = function () {
                var n = Date.now(),
                  i = 0;
                return (
                  this.__sendByAegis ||
                    this.addEventListener("loadend", function () {
                      var a = this.aegisUrl;
                      if (a) {
                        i = Date.now() - n;
                        var r = {
                            url: u(a),
                            isHttps: w(a),
                            status: this.status,
                            method: this.aegisMethod || "get",
                            type: "fetch",
                            duration: i,
                            payload: new b(this),
                          },
                          s = this.getResponseHeader("content-type");
                        if (400 <= this.status || "string" != typeof s || !g(s))
                          try {
                            V({
                              msg:
                                "req url: " +
                                a +
                                " \nres time: " +
                                i +
                                " \nres data: " +
                                this.response,
                              level: t.API_RESPONSE,
                            }),
                              (r.ret = h(this.response, e.api));
                            var c = e.api && e.api.errCode;
                            c = c && [].concat(c);
                            var d = e.api && e.api.code;
                            (d = d && [].concat(d)),
                              ((c && -1 !== c.indexOf(r.ret)) ||
                                (d && -1 === d.indexOf(r.ret)) ||
                                (!c &&
                                  !d &&
                                  "0" !== r.ret &&
                                  "unknown" !== r.ret)) &&
                                V({
                                  msg:
                                    "request url: " +
                                    a +
                                    " \n response: " +
                                    this.response,
                                  level: t.RET_ERROR,
                                });
                          } catch (a) {
                            r.ret = "unknown";
                          }
                        else
                          (r.type = "static"),
                            delete r.ret,
                            Object.assign(r, {
                              urlQuery: u(a, !0),
                              x5ContentType: o.string,
                              x5HttpStatusCode: o.number,
                              x5ImgDecodeStatus: o.number,
                              x5ErrorCode: o.number,
                              x5LoadFromLocalCache: o.number,
                              x5ContentLength: o.number,
                              domainLookup: o.number,
                              connectTime: o.number,
                            });
                        U(r);
                      }
                    }),
                  a.apply(this, arguments)
                );
              })));
        }),
        ce.use(function () {
          f() &&
            this.config.reportAssetSpeed &&
            (C.push(this._speedLogPipeline),
            N ||
              ((N = !0),
              setInterval(B, this.config.delay),
              (performance.onresourcetimingbufferfull = function () {
                (x = 0), performance.clearResourceTimings();
              }),
              window.document.addEventListener(
                "error",
                function (e) {
                  if (e && e.target && e.srcElement) {
                    var n = e.target || e.srcElement,
                      t = n.src || n.href;
                    t &&
                      I({
                        url: u(t),
                        status: 400,
                        method: "get",
                        type: "static",
                        isHttps: w(t),
                        urlQuery: u(t, !0),
                        x5ContentType: o.string,
                        x5HttpStatusCode: o.number,
                        x5ImgDecodeStatus: o.number,
                        x5ErrorCode: o.number,
                        x5LoadFromLocalCache: o.number,
                        x5ContentLength: o.number,
                        domainLookup: o.number,
                        connectTime: o.number,
                      });
                  }
                },
                !0
              )));
        }),
        ce.use(function () {
          var e,
            n,
            t,
            o,
            i = this;
          if (f())
            if ((R.push(this.send), O)) L(O, this);
            else
              try {
                (e = function (e) {
                  var n = performance.timing,
                    t = n.loadEventStart - n.domInteractive;
                  t < 0 && (t = 1070),
                    L(
                      (O = {
                        dnsLookup: n.domainLookupEnd - n.domainLookupStart,
                        tcp: n.connectEnd - n.connectStart,
                        ssl:
                          0 === n.secureConnectionStart
                            ? 0
                            : n.requestStart - n.secureConnectionStart,
                        ttfb: n.responseStart - n.requestStart,
                        contentDownload: n.responseEnd - n.responseStart,
                        domParse: n.domInteractive - n.domLoading,
                        resourceDownload: t,
                        firstScreenTiming: Math.floor(e),
                      }),
                      i
                    );
                }),
                  (n = ["script", "style", "link", "br"]),
                  (t = []),
                  (o = new MutationObserver(function (e) {
                    var o = {
                      roots: [],
                      rootsDomNum: [],
                      time: performance.now(),
                    };
                    e.forEach(function (e) {
                      e &&
                        e.addedNodes &&
                        e.addedNodes.forEach &&
                        e.addedNodes.forEach(function (e) {
                          1 !== e.nodeType ||
                            -1 !== n.indexOf(e.nodeName.toLocaleLowerCase()) ||
                            (function e(n, t) {
                              return (
                                !(!n || n === document.documentElement) &&
                                (-1 !== t.indexOf(n) || e(n.parentElement, t))
                              );
                            })(e, o.roots) ||
                            (o.roots.push(e),
                            o.rootsDomNum.push(
                              (function e(n) {
                                var t = 0;
                                if (n && 1 === n.nodeType) {
                                  t++;
                                  var o = n.children;
                                  if (o && o.length)
                                    for (var i = 0; i < o.length; i++)
                                      t += e(o[i]);
                                }
                                return t;
                              })(e) || 0
                            ));
                        });
                    }),
                      o.roots.length && t.push(o);
                  })).observe(document, { childList: !0, subtree: !0 }),
                  setTimeout(function () {
                    o.disconnect();
                    var n = 0,
                      i = 0,
                      a = !1;
                    t.forEach(function (e) {
                      for (var t = 0; t < e.roots.length; t++)
                        e.rootsDomNum[t] > n &&
                          q(e.roots[t]) &&
                          ((n = e.rootsDomNum[t]), (i = e.time));
                    });
                    for (
                      var r = document.querySelectorAll(".fp-check"),
                        s = [],
                        c = 0;
                      c < r.length;
                      c++
                    )
                      if (
                        "img" === r[c].tagName.toLowerCase() &&
                        "" !== r[c].src
                      )
                        s.push(r[c].src);
                      else {
                        var d = window.getComputedStyle(r[c]),
                          l = /url\([\'\"](.+)[\'\"]\)/gi.exec(
                            d.backgroundImage
                          );
                        l && 2 === l.length && s.push(l[1]);
                      }
                    var p = 0;
                    window.performance
                      .getEntriesByType("resource")
                      .some(function (e) {
                        return (
                          s.some(function (n, t) {
                            if (n === e.name)
                              return (
                                e.responseEnd > p && (p = e.responseEnd),
                                (e.fetchStart < i || e.startTime < i) &&
                                  e.responseEnd > i &&
                                  ((a = !0), (i = e.responseEnd)),
                                s.splice(t, 1),
                                !0
                              );
                          }),
                          0 === s.length
                        );
                      }),
                      0 === i && (i = p),
                      e(a ? i : i + 25);
                  }, 3e3);
              } catch (e) {}
        }),
        ce.use(function () {
          var e = this;
          !(function (e) {
            try {
              var n = window.localStorage.getItem("AEGIS_ID");
              n ||
                ((n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                  /[xy]/g,
                  function (e) {
                    var n = (16 * Math.random()) | 0;
                    return ("x" == e ? n : (3 & n) | 8).toString(16);
                  }
                )),
                window.localStorage.setItem("AEGIS_ID", n)),
                e(n || "");
            } catch (n) {
              e("");
            }
          })(function (n) {
            e.bean.aid = n;
          });
        }),
        ce.use(function (e) {
          var n;
          this.config.tjg &&
            ((n = e),
            J ||
              ((J = !0),
              (function (e) {
                if ("function" == typeof window.fetch) {
                  var n = window.fetch;
                  window.fetch = function (t, o) {
                    return (
                      M(t) &&
                        ("object" == typeof o && o
                          ? o.headers
                            ? o.headers instanceof Headers &&
                              o.headers.append("X-Tjg-Json-Span-Context", j(e))
                            : (o.headers = new Headers({
                                "X-Tjg-Json-Span-Context": j(e),
                              }))
                          : (o = {
                              headers: new Headers({
                                "X-Tjg-Json-Span-Context": j(e),
                              }),
                            })),
                      n(t, o)
                    );
                  };
                }
              })(n),
              (function (e) {
                if (window.XMLHttpRequest) {
                  var n = window.XMLHttpRequest.prototype.send,
                    t = window.XMLHttpRequest.prototype.open;
                  (window.XMLHttpRequest.prototype.open = function () {
                    return (
                      !this.__sendByAegis &&
                        M(arguments[1]) &&
                        (this.useTjg = !0),
                      t.apply(this, arguments)
                    );
                  }),
                    (window.XMLHttpRequest.prototype.send = function () {
                      return (
                        this.useTjg &&
                          this.setRequestHeader(
                            "X-Tjg-Json-Span-Context",
                            j(e)
                          ),
                        n.apply(this, arguments)
                      );
                    });
                }
              })(n)));
        }),
        ce.use(function () {
          var e;
          this.config.reportAssetSpeed &&
            (this.extendBean(
              "platform",
              ((e = Y.other),
              /\bAndroid\s*([^;]+)/.test(K)
                ? (e = Y.android)
                : /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/.test(K) &&
                  (e = Y.ios),
              e)
            ),
            this.extendBean(
              "x5Type",
              (function () {
                var e = $.other;
                if (0 <= K.indexOf("tbs")) {
                  var n = K.match(/tbs\/([\d\.]+)/);
                  e =
                    n && n[1] && 36541 <= parseInt(n[1], 10)
                      ? $.newX5
                      : $.oldX5;
                }
                return e;
              })()
            ),
            this.extendBean("netType", G.unknown),
            (function e(n) {
              var t = n.config,
                o = Z;
              "function" == typeof t.getNetworkType && (o = t.getNetworkType),
                o(function (t) {
                  G[t] || (t = G.unknown),
                    n.extendBean("netType", t),
                    setTimeout(function () {
                      e(n);
                    }, 3e3);
                });
            })(this));
        }),
        ce
      );
    })();
  },
  function (e, n, t) {
    var o = t(3),
      i = t(5),
      a = t(43),
      r = t(15),
      s = t(44),
      c = t(12),
      d = t(8),
      l = t(6),
      p = t(0),
      u = t(4),
      w = t(1),
      f = t(7),
      m = t(10),
      g = t(2),
      h = t(16),
      v = t(11),
      _ = t(45),
      b = t(17),
      y = t(46),
      D = t(47),
      A = t(13),
      E = t(9),
      k = t(48),
      T = t(3).isYybSupportMidPage,
      N = t(14);
    t(51);
    var S,
      C,
      I,
      x,
      B = p.getQuery,
      O = p.compareVersion,
      R = p.copyToClipboard,
      L = p.debug,
      q = u.report,
      P = u.reportExtData,
      Q = u.reportDownloadApp,
      U = f.showWxGuide,
      F = o.isAppNeedUpdate,
      V = !1,
      J = { obj: null, state: "" };
    function j() {
      window.via = "ANDROIDWXZ.YYB.".concat(
        i.sceneVia ? i.sceneVia : "OTHERBROWSER",
        "AD"
      );
      var e = function () {
        var e = l.getCache().yybVersion,
          n = l.getCache().cpAppVersion ? "open" : "down";
        d.updateDownBtn(n, !!e, void 0, e);
      };
      $("body").delegate("#btn-fast-download", "click", function () {
        var e = l.getCache(),
          n = e.cpAppVersion,
          t = e.yybVersion;
        if (n) {
          var i = o.getAppAndroidScheme(!0);
          return (
            g.report({
              eventName: g.clickBtnEventName.mainBtn,
              eventResult: g.clickActionEventResult.openCpApp,
              eventExtInfo: i,
            }),
            void o.openApp(i, C.packageName)
          );
        }
        if (t) {
          var a = o.getTmast({ yybVersion: t, outerCall: !0 });
          return (
            g.report({
              eventName: g.clickBtnEventName.mainBtn,
              eventResult:
                g.clickActionEventResult.openQQDownloaderForDownloadApp,
              eventExtInfo: a,
            }),
            void o.callWithScheme(a)
          );
        }
        g.report({
          eventName: g.clickBtnEventName.mainBtn,
          eventResult: g.clickActionEventResult.openQQDownloaderForDownloadApp,
        }),
          new N().startDownloadTask();
      }),
        g.report({
          eventName: g.keyEventName.mainBtnFinishLoading,
          eventStartTime: g.pageStartTime,
          eventEndTime: Date.now(),
        }),
        e(),
        o.onPageResume(function () {
          l.check(window.AppInfoData.appDetail.packageName, function (n, t) {
            g.setInstallation({ yybVersion: n, cpAppVersion: t }), e();
          });
        });
    }
    function W() {
      1e4 == +B("fromcase") &&
        window.AppInfoData &&
        window.AppInfoData.appExt &&
        0 === window.AppInfoData.appExt.templateId &&
        ($(
          '<p class="btn-explain" style="line-height:3;font-size: 12px;text-align:center;color: #939393;">该服务由腾讯应用宝提供，通过应用平台进行下载</p>'
        ).insertAfter(".wrapper .header .h-sem-btns"),
        $(".wrapper .header").height("247px"));
      var e = $("#btn-fast-download"),
        n = "1" === B("ntc");
      (window.via = "ANDROIDWXZ.YYB.".concat(
        i.sceneVia ? i.sceneVia : "OTHERBROWSER"
      )),
        d.updateDownBtn("down"),
        g.report({
          eventName: g.keyEventName.mainBtnFinishLoading,
          eventStartTime: g.pageStartTime,
          eventEndTime: Date.now(),
        });
      var t = function () {
          window.oneLog(function () {
            var e = "";
            w.os.android && (e = "other_android_fdclick"), q(e);
          }, "act_fastdownload");
        },
        a = function () {
          var e = o.getTmast({
            yybVersion: l.getCache().yybVersion,
            outerCall: !0,
          });
          return "$"
            .concat(e, "&clipboard_start_time=")
            .concat(Date.now(), "&clipboard_expiry_time=")
            .concat(18e5, "$");
        };
      if (
        (g.reportSampleData({
          eventName: g.abilityEventName.pageVisibility,
          eventResult: UI.pageVisibility.isPageVisibilitySupport ? 0 : -1,
        }),
        i.isAutoDownAndCloseWin && !n)
      ) {
        var r = o.getTmast({
          yybVersion: l.getCache().yybVersion,
          outerCall: !0,
        });
        g.report({
          eventName: g.autoEventName.openQQDownloaderForDownloadApp,
          eventExtInfo: r,
        }),
          o.callWithScheme(r);
      }
      UI.pageVisibility.isPageVisibilitySupport
        ? e.unbind("click").bind("click", function (e) {
            var i;
            if (!$(e.target).hasClass("btn-unactive")) {
              if ((t(), o.copyToClipboard(a()), n)) {
                var r = o.getAppBaoDownUrl("sourcecheck");
                return (
                  g.report({
                    eventName: g.clickBtnEventName.mainBtn,
                    eventResult: g.clickActionEventResult.downloadQQDownloader,
                    eventExtInfo: r,
                  }),
                  void o.setLocationHref(r)
                );
              }
              d.updateDownBtn("loading"),
                (i = new Date()),
                setTimeout(function () {
                  var e;
                  if (
                    ((e = new Date()),
                    parseInt(e.getTime(), 10) - parseInt(i.getTime(), 10) <
                      3e3 && !UI.pageVisibility.isHidden())
                  ) {
                    window.via = window.via.replace(".YYB.", ".NEWYYB.");
                    var n = o.getAppBaoDownUrl("sourcecheck"),
                      t = o.getAppAndroidScheme();
                    if (t) {
                      var a = Date.now();
                      /chrome\/[\d.]+\s+mobile\s+safari\/[\d.]+$/i.test(
                        navigator.userAgent
                      )
                        ? setTimeout(function () {
                            location.href = t;
                          }, 300)
                        : (location.href = t),
                        setTimeout(function () {
                          Date.now() - a < 1e3 && n && (location.href = n);
                        }, 800);
                    } else n && (location.href = n);
                  }
                  d.updateDownBtn("down");
                }, 2e3),
                g.report({
                  eventName: g.clickBtnEventName.mainBtn,
                  eventResult:
                    g.clickActionEventResult.openAndDownloadQQDownloader,
                }),
                (window.via = window.via.replace(".NEWYYB.", ".YYB."));
              var s = o.getTmast({ outerCall: !0 });
              o.setLocationHref(s);
            }
          })
        : e.unbind("click").bind("click", function () {
            if (
              (t(),
              R(a(), function (e, n, t) {
                g.reportSampleData(
                  {
                    eventName: g.clientApiEventName.copyToClipboard,
                    eventResult: n,
                    eventExtInfo: t || e,
                  },
                  0.01
                );
              }),
              n)
            ) {
              var e = o.getAppBaoDownUrl("sourcecheck");
              return (
                g.report({
                  eventName: g.clickBtnEventName.mainBtn,
                  eventResult: g.clickActionEventResult.downloadQQDownloader,
                  eventExtInfo: e,
                }),
                void o.setLocationHref(e)
              );
            }
            g.report({
              eventName: g.clickBtnEventName.mainBtn,
              eventResult: g.clickActionEventResult.openAndDownloadQQDownloader,
            }),
              (window.via = window.via.replace(".NEWYYB.", ".YYB."));
            var i = o.getTmast({ outerCall: !0 });
            o.tryCallYybInBrowser(
              i,
              function () {},
              function () {
                window.via = window.via.replace(".YYB.", ".NEWYYB.");
                var e = o.getAppBaoDownUrl("sourcecheck");
                location.href = e;
              }
            );
          }),
        h.init(C, I.hideYYBBanner);
    }
    function M(e, n, t) {
      if (
        (g.reportKeyDownloadEvent(
          g.downloadEvent.eventScene.qqdownloader,
          (t && t.actionChain) || 0,
          e,
          n
        ),
        w.browser.wechat)
      )
        switch (e) {
          case JsBridge.Download.STATE_DOWNLOADING:
            window.hasReportDownYYB ||
              ((window.hasReportDownYYB = !0),
              q("wx_android_downyyb_beginclick"),
              t &&
                t.actionChain &&
                (1 == t.actionChain
                  ? q("wx_android_downyyb_beginclick_safe")
                  : 2 == t.actionChain
                  ? q("wx_android_downyyb_beginclick_winsafe")
                  : 3 == t.actionChain &&
                    q("wx_android_downyyb_beginclick_update")));
            break;
          case JsBridge.Download.STATE_REMOVED:
            (window.hasReportDownYYB = !1),
              q("wx_android_downyyb_removeclick"),
              t &&
                t.actionChain &&
                (1 == t.actionChain
                  ? q("wx_android_downyyb_removeclick_safe")
                  : 2 == t.actionChain
                  ? q("wx_android_downyyb_removeclick_winsafe")
                  : 3 == t.actionChain &&
                    q("wx_android_downyyb_removeclick_update"));
            break;
          case JsBridge.Download.STATE_CANCAL:
            (window.hasReportDownYYB = !1),
              q("wx_android_downyyb_cancelclick"),
              t &&
                t.actionChain &&
                (1 == t.actionChain
                  ? q("wx_android_downyyb_cancelclick_safe")
                  : 2 == t.actionChain
                  ? q("wx_android_downyyb_cancelclick_winsafe")
                  : 3 == t.actionChain &&
                    q("wx_android_downyyb_cancelclick_update"));
            break;
          case JsBridge.Download.STATE_FAILED:
            window.hasReportDownYYB = !1;
            var o = n && n.errCode ? n.errCode : -1e3;
            q("wx_android_downyyb_fail"),
              t &&
                t.actionChain &&
                (1 == t.actionChain
                  ? (q("wx_android_downyyb_fail_safe"),
                    -31415 == o && q("wx_android_createdownyyb_fail_safe"))
                  : 2 == t.actionChain
                  ? (q("wx_android_downyyb_fail_winsafe"),
                    -31415 == o && q("wx_android_createdownyyb_fail_winsafe"))
                  : 3 == t.actionChain &&
                    (q("wx_android_downyyb_fail_update"),
                    -31415 == o && q("wx_android_createdownyyb_fail_update"))),
              i.isPageReloaded &&
                -31415 == o &&
                (window.hasReport31415ForReload ||
                  (window.hasReport31415ForReload = !0)),
              802 == o &&
                ((window.reportScene = "retryFor802"),
                (S.appbaoUrlgtk = window.AppInfoData.baoPkg.https_url),
                (S.appbaoMd5 = window.APPCONFIG.appbao.appbaoMd5ForHttps),
                g.setQQDownloaderInfo(S.appbaoUrlgtk, S.appbaoMd5),
                p.setUseHttps(),
                (function () {
                  if (2 == window.downYYBTimes) return;
                  g.report({
                    eventName:
                      g.autoEventName
                        .retryDownloadQQDownloaderWhenVerifyMd5Fail,
                  }),
                    Y();
                  var e = $("#downloadRetryDialog");
                  window.isDownBase ? e.show() : e.removeClass("invisible"),
                    g.report({ eventName: g.pvEventName.retryDownloadDialog }),
                    e.find(".tips").text("网络不稳定导致您下载失败，建议重试"),
                    e
                      .find(".btn-close, .btn-cancel")
                      .unbind("click")
                      .bind("click", function () {
                        g.report({
                          eventName:
                            g.clickBtnEventName.retryDownloadDialogCancelBtn,
                          eventResult: g.clickActionEventResult.close,
                        }),
                          window.isDownBase
                            ? e.hide()
                            : e.addClass("invisible");
                      }),
                    e
                      .find(".btn-ok")
                      .unbind("click")
                      .bind("click", function () {
                        g.report({
                          eventName:
                            g.clickBtnEventName.retryDownloadDialogOkBtn,
                          eventResult:
                            g.clickActionEventResult
                              .retryDownloadQQDownloaderWhenVerifyMd5Fail,
                        }),
                          (window.isTryAgain = !0),
                          (window.fastClickTrigger = !0),
                          $("#btn-fast-download").trigger(
                            UI.EVENTS.touchstartEv()
                          ),
                          window.isDownBase
                            ? e.hide()
                            : e.addClass("invisible");
                      });
                })()),
              Q(o);
            break;
          case JsBridge.Download.STATE_DOWNLOADED:
            (window.hasReportDownYYB = !1),
              q("wx_android_downyyb_finish"),
              t &&
                t.actionChain &&
                (1 == t.actionChain
                  ? q("wx_android_downyyb_finish_safe")
                  : 2 == t.actionChain
                  ? q("wx_android_downyyb_finish_winsafe")
                  : 3 == t.actionChain &&
                    q("wx_android_downyyb_finish_update")),
              Q(0);
            break;
          default:
            window.hasReportDownYYB = !1;
        }
      else if (w.browser.mqq)
        switch (e) {
          case JsBridge.Download.STATE_DOWNLOADING:
            window.hasReportBeginDownYYB ||
              ((window.hasReportBeginDownYYB = !0),
              q("mqq_android_downyyb_beginclick"));
            break;
          case JsBridge.Download.STATE_REMOVED:
            q("mqq_android_downyyb_removeclick");
            break;
          case JsBridge.Download.STATE_FAILED:
            q("mqq_android_downyyb_fail");
            break;
          case JsBridge.Download.STATE_DOWNLOADED:
            q("mqq_android_downyyb_finish");
            break;
          case JsBridge.Download.STATE_INSTALLED:
            q("mqq_android_yyb_finish_install");
        }
    }
    function Y() {
      window.downYYBTimes ? window.downYYBTimes++ : (window.downYYBTimes = 0),
        (J.obj = new JsBridge.Download(
          {
            sngAppId: parseInt(1101070898, 10),
            hnAppId: "5848",
            versionCode: "",
            url: S.appbaoUrlgtk,
            packageName: S.appbaoPkg,
            alias: S.appbaoName,
            md5: S.appbaoMd5,
            title: i.wechatDownloadInfo.text,
            thumb_url: i.wechatDownloadInfo.logo,
          },
          function (e, n, t, a) {
            if (
              (L(
                "[download/init.js] download callback args: ".concat(
                  JSON.stringify(a)
                )
              ),
              L("[download/init.js] YYB JsBridge.Download callback"),
              L(
                "[download/init.js] YYB JsBridge.Download window.JsBridgecount: ".concat(
                  window.JsBridgecount
                )
              ),
              (J.state = e),
              0 == window.JsBridgecount &&
                (g.report({
                  eventName: g.keyEventName.qqdownloaderDownloadInstanceCreated,
                  eventStartTime: g.pageStartTime,
                  eventEndTime: Date.now(),
                }),
                (window.JsBridgecount = 1)),
              2 !== window.JsBridgecount ||
                window.isDownloadingYYB ||
                (window.yybDownloadStartTime = Date.now()),
              window.JsBridgecount <= 1)
            )
              J.state === JsBridge.Download.STATE_DOWNLOADING &&
                ((window.isDownloadingYYB = !0),
                (window.hasReportDownYYB = !0),
                d.updateDownBtn("loading", !1, n, l.getCache().yybVersion),
                window.JsBridgecount++);
            else {
              switch (e) {
                case JsBridge.Download.STATE_DOWNLOADED:
                  (window.isDownloadingYYB = !1),
                    d.updateDownBtn(
                      l.getCache().cpAppVersion ? "update" : "down",
                      void 0,
                      void 0,
                      l.getCache().yybVersion
                    ),
                    o.isMqqSupportVersion()
                      ? setTimeout(function () {
                          J.obj.install();
                        }, 500)
                      : J.obj.install();
                  break;
                case JsBridge.Download.STATE_INSTALLING:
                case JsBridge.Download.STATE_DOWNLOADING:
                  (window.isDownloadingYYB = !0),
                    d.updateDownBtn("loading", !1, n, l.getCache().yybVersion);
                  break;
                case JsBridge.Download.STATE_INSTALLED:
                  (window.isDownloadingYYB = !1),
                    l.check(
                      window.AppInfoData.appDetail.packageName,
                      function (e, n) {
                        var t = o.getTmast({ yybVersion: e, outerCall: !0 });
                        g.report({
                          eventName: n
                            ? g.autoEventName.openQQDownloaderForUpdateApp
                            : g.autoEventName.openQQDownloaderForDownloadApp,
                          eventExtInfo: t,
                        }),
                          o.callWithScheme(t),
                          d.updateDownBtn(n ? "update" : "down", !0, void 0, e);
                      }
                    );
                  break;
                case JsBridge.Download.STATE_FAILED_OF_SDCARD:
                  alert(
                    "下载失败，请关闭USB数据存储或者插入SD卡或者将手机与电脑断开连接。"
                  );
                  break;
                case JsBridge.Download.STATE_REMOVED:
                case JsBridge.Download.STATE_CANCAL:
                case JsBridge.Download.STATE_FAILED:
                case JsBridge.Download.STATE_READY:
                case JsBridge.Download.STATE_PAUSED:
                default:
                  (window.isDownloadingYYB = !1),
                    d.updateDownBtn(
                      l.getCache().cpAppVersion ? "update" : "down",
                      void 0,
                      void 0,
                      l.getCache().yybVersion
                    );
              }
              M(e, a, t),
                e == JsBridge.Download.STATE_FAILED &&
                  -31415 == a.errCode &&
                  (function () {
                    if (i.isPageReloaded)
                      g.report({
                        eventName: g.autoEventName.retryCreateDownloader,
                        eventExtInfo: -9999,
                      });
                    else if (
                      (window.hasRetryFor31415
                        ? window.hasRetryFor31415++
                        : ((window.hasRetryFor31415 = 1),
                          (window.reportScene = "retryFor31415")),
                      window.hasRetryFor31415 > 3)
                    ) {
                      var e = $("#reloadDialog");
                      window.isDownBase ? e.show() : e.removeClass("invisible"),
                        g.report({
                          eventName: g.pvEventName.reloadConfirmDialog,
                        }),
                        e.find(".tips").text("小宝正在努力帮你连接中……"),
                        e
                          .find(".btn-close, .btn-cancel")
                          .unbind("click")
                          .bind("click", function () {
                            g.report({
                              eventName:
                                g.clickBtnEventName
                                  .reloadConfirmDialogCancelBtn,
                              eventResult: g.clickActionEventResult.close,
                            }),
                              window.isDownBase
                                ? e.hide()
                                : e.addClass("invisible"),
                              (window.hasReloadCancelClick = !0);
                          }),
                        e
                          .find(".btn-ok")
                          .unbind("click")
                          .bind("click", function () {
                            g.report({
                              eventName:
                                g.clickBtnEventName.reloadConfirmDialogOkBtn,
                              eventResult: g.clickActionEventResult.reloadPage,
                            }),
                              o.setLocationHref(
                                "".concat(location.href, "&isreload=true")
                              );
                          }),
                        setTimeout(function () {
                          window.hasReloadCancelClick ||
                            (g.report({
                              eventName: g.autoEventName.reloadPage,
                            }),
                            o.setLocationHref(
                              "".concat(location.href, "&isreload=true")
                            ));
                        }, 1e3);
                    } else
                      g.report({
                        eventName: g.autoEventName.retryCreateDownloader,
                        eventExtInfo: window.hasRetryFor31415,
                      }),
                        Y(),
                        setTimeout(function () {
                          (window.fastClickTrigger = !0),
                            $("#btn-fast-download").trigger(
                              UI.EVENTS.touchstartEv()
                            );
                        }, 500);
                  })();
            }
          }
        ));
    }
    function G(e) {
      var n,
        t = $("#btn-fast-download"),
        i = l.getCache(),
        a = i.yybVersion,
        r = i.cpAppVersion;
      !w.browser.wechat || F(r, C.versionCode) || T(a) ? t.show() : t.hide(),
        F(r, C.versionCode)
          ? a
            ? ((n = r ? "update" : "down"),
              (window.nowInstallyybForJumpyyb = !0),
              (window.isDownloadingYYB = !1))
            : ((n = r ? "update" : "down"),
              (window.nowInstallyybForJumpyyb = !1),
              (window.justNotInstallyybForJumpyyb = !0))
          : ((n = "open"),
            w.browser.wechat &&
              ((window.nowInstallyybForOpen = !0),
              c.autoOpenAppInWechatOnce())),
        J.obj ||
          (!r &&
            w.browser.wechat &&
            e &&
            (I.autoInstalledPopWindowFlag && a
              ? (g.report({
                  eventName: g.autoEventName.openQQDownloaderForDownloadApp,
                  eventExtInfo: o.getTmast({ yybVersion: a, outerCall: !0 }),
                }),
                setTimeout(function () {
                  (window.fastClickTrigger = !0),
                    $("#btn-fast-download").trigger(UI.EVENTS.touchstartEv());
                }, 500))
              : I.newAutoPopWindowFlag &&
                !a &&
                ($(
                  "#autodownloaddialog .btn-cancel,#autodownloaddialog .btn-close"
                ).bind("click", function () {
                  g.report({
                    eventName: g.clickBtnEventName.autoDownloadDialogCancelBtn,
                    eventResult: g.clickActionEventResult.close,
                  }),
                    q("wx_android_noyyb_noapp_autodownloaddialog_cancleclick"),
                    $("#autodownloaddialog").hide();
                }),
                $("#autodownloaddialog .btn-ok").bind("click", function () {
                  g.report({
                    eventName: g.clickBtnEventName.autoDownloadDialogOkBtn,
                    eventResult:
                      g.clickActionEventResult
                        .downloadQQDownloaderForDownloadApp,
                    eventExtInfo: o.getTmast({ yybVersion: a, outerCall: !0 }),
                  }),
                    q("wx_android_noyyb_noapp_autodownloaddialog_okclick"),
                    $("#autodownloaddialog").hide(),
                    (window.fastClickTrigger = !0),
                    $("#btn-fast-download").trigger(UI.EVENTS.touchstartEv());
                }),
                g.report({ eventName: g.pvEventName.autoDownloadDialog }),
                q("wx_android_noyyb_noapp_autodownloaddialog_pv"),
                $("#autodownloaddialog").show())),
          Y()),
        c.initDownload();
      var s = function (e, n, t, i) {
        var a = n;
        a || (a = t),
          a ||
            (a = o.getTmast({
              onlyOpen:
                l.getCache().cpAppVersion &&
                O(l.getCache().cpAppVersion, C.versionCode) >= 0,
              yybVersion: l.getCache().yybVersion,
            }));
        var r = Date.now(),
          s = r + 18e5;
        if (
          (w.browser.wechat &&
            !V &&
            ((V = !0),
            o.writeCommData({
              starttime: r,
              endtime: s,
              url: a,
              baoPkgName: S.appbaoPkg,
            })),
          o.setJumpPageInMqq({
            starttime: r,
            endtime: s,
            jumpUrl: a,
            yybVersion: l.getCache().yybVersion,
          }),
          (function () {
            if (
              w.browser.wechat &&
              !l.getCache().yybVersion &&
              l.getCache().cpAppVersion &&
              O(l.getCache().cpAppVersion, C.versionCode) >= 0
            )
              q("wx_android_noyyb_hasapp_soclick");
            else {
              var e = "";
              w.browser.wechat
                ? (e = l.getCache().cpAppVersion
                    ? "wx_android_noyyb_fuclick"
                    : "wx_android_noyyb_fdclick")
                : w.browser.mqq &&
                  (e = l.getCache().cpAppVersion
                    ? "mqq_android_noyyb_fuclick"
                    : "mqq_android_noyyb_fdclick"),
                q(e);
            }
          })(),
          window.JsBridgecount < 1)
        )
          i &&
            g.report({
              eventName: g.clickBtnEventName.mainBtn,
              eventResult: g.clickActionEventResult.qqdownloaderInitNotFinish,
            });
        else
          switch ((window.JsBridgecount++, J.state)) {
            case JsBridge.Download.STATE_INSTALLING:
            case JsBridge.Download.STATE_DOWNLOADING:
              break;
            case JsBridge.Download.STATE_DOWNLOADED:
              o.isMqqSupportVersion()
                ? (o.setJumpPageInMqq({
                    starttime: Date.now(),
                    endtime: Date.now() + 18e5,
                    jumpUrl: a,
                    yybVersion: l.getCache().yybVersion,
                  }),
                  setTimeout(function () {
                    J.obj.install();
                  }, 500))
                : J.obj.install();
              break;
            case JsBridge.Download.STATE_INSTALLED:
              l.check(
                window.AppInfoData.appDetail.packageName,
                function (e, n) {
                  var t = o.getTmast({ yybVersion: e, outerCall: !0 });
                  o.callWithScheme(t),
                    d.updateDownBtn(n ? "update" : "down", !0, void 0, e);
                }
              );
              break;
            case JsBridge.Download.STATE_FAILED_OF_SDCARD:
            case JsBridge.Download.STATE_FAILED:
            case JsBridge.Download.STATE_PAUSED:
            case JsBridge.Download.STATE_READY:
            case JsBridge.Download.STATE_REMOVED:
            case JsBridge.Download.STATE_CANCAL:
              J.obj.start();
          }
      };
      d.updateDownBtn(window.isDownloadingYYB ? "loading" : n, !!a, void 0, a),
        e &&
          g.report({
            eventName: g.keyEventName.mainBtnFinishLoading,
            eventStartTime: g.pageStartTime,
            eventEndTime: Date.now(),
          }),
        t
          .unbind(UI.EVENTS.touchstart)
          .bind(UI.EVENTS.touchstart, function (e, n, t, i) {
            J &&
              J.obj &&
              ((J.obj.context = J.obj.context || {}),
              i
                ? (J.obj.context.actionChain = i)
                : l.getCache().cpAppVersion
                ? (J.obj.context.actionChain = 3)
                : (J.obj.context.actionChain = 1)),
              (function (e, n, t) {
                window.mainBtnClick = !0;
                var i = !window.fastClickTrigger;
                if (n || t) s(0, n, t, i);
                else if (F(r, C.versionCode)) {
                  if (a) {
                    (p = ""),
                      w.browser.wechat
                        ? (p = r
                            ? "wx_android_yyb_fuclick"
                            : "wx_android_yyb_fdclick")
                        : w.browser.mqq &&
                          (p = r
                            ? "mqq_android_yyb_fuclick"
                            : "mqq_android_yyb_fdclick"),
                      q(p);
                    var c = o.getTmast({ yybVersion: a, outerCall: !0 });
                    return (
                      i &&
                        g.report({
                          eventName: g.clickBtnEventName.mainBtn,
                          eventResult: r
                            ? g.clickActionEventResult
                                .openQQDownloaderForUpdateApp
                            : g.clickActionEventResult
                                .openQQDownloaderForDownloadApp,
                          eventExtInfo: c,
                        }),
                      void o.callWithScheme(c)
                    );
                  }
                  i &&
                    g.report({
                      eventName: g.clickBtnEventName.mainBtn,
                      eventResult: r
                        ? g.clickActionEventResult
                            .downloadQQDownloaderForUpdateApp
                        : g.clickActionEventResult
                            .downloadQQDownloaderForDownloadApp,
                    }),
                    s();
                } else if (w.browser.wechat)
                  if (
                    l.getCache().yybVersion &&
                    String.prototype.slice.call(
                      l.getCache().yybVersion,
                      0,
                      3
                    ) >= 715
                  ) {
                    q("wx_android_yyb_opclick");
                    var d = o.getAppAndroidScheme();
                    i &&
                      g.report({
                        eventName: g.clickBtnEventName.mainBtn,
                        eventResult:
                          g.clickActionEventResult
                            .openCpAppByQQDownloaderMidPage,
                        eventExtInfo: d,
                      }),
                      o.callYybMidPage(d, C.versionCode, "BBTN");
                  } else
                    q("wx_android_noyyb_hasapp_guideclick"),
                      i &&
                        g.report({
                          eventName: g.clickBtnEventName.mainBtn,
                          eventResult: g.clickActionEventResult.showOpenGuide,
                        }),
                      U();
                else {
                  var p = a
                    ? "mqq_android_yyb_opclick"
                    : "mqq_android_noyyb_opclick";
                  q(p);
                  var u = o.getAppAndroidScheme();
                  i &&
                    g.report({
                      eventName: g.clickBtnEventName.mainBtn,
                      eventResult: g.clickActionEventResult.openCpApp,
                      eventExtInfo: u,
                    }),
                    o.openApp(u, C.packageName);
                }
              })(0, n, t);
          }),
        t.unbind(UI.EVENTS.touchend).bind(UI.EVENTS.touchend, function () {
          l.getCache().yybVersion ||
            o.copyToClipboard(o.getTmastClipBoardData());
        }),
        w.browser.wechat
          ? (((e && "open" == n && location.hash.indexOf("opened") < 0) ||
              (window.justNotInstallyybForOpen &&
                window.nowInstallyybForOpen)) &&
              ((window.justNotInstallyybForOpen = !1),
              (window.nowInstallyybForOpen = !1)),
            window.justNotInstallyybForJumpyyb &&
              window.nowInstallyybForJumpyyb &&
              ((window.justNotInstallyybForJumpyyb = !1),
              (window.nowInstallyybForJumpyyb = !1),
              (window.fastClickTrigger = !0),
              g.report({
                eventName: y.hadClick()
                  ? g.autoEventName.openQQDownloader
                  : g.autoEventName.openQQDownloaderForDownloadApp,
                eventExtInfo: y.hadClick()
                  ? y.recCardUrl
                  : o.getTmast({ yybVersion: a, outerCall: !0 }),
              }),
              t.trigger(UI.EVENTS.touchstartEv(), [
                "",
                y.hadClick() ? y.recCardUrl : "",
              ])))
          : e &&
            "open" == n &&
            location.hash.indexOf("opened") < 0 &&
            (location.replace(
              "".concat(
                location.href + (location.href.indexOf("#") > -1 ? "&" : "#"),
                "opened"
              )
            ),
            (window.fastClickTrigger = !0),
            g.report({
              eventName: y.hadClick()
                ? g.autoEventName.openQQDownloader
                : g.autoEventName.openQQDownloaderForDownloadApp,
              eventExtInfo: y.hadClick()
                ? y.recCardUrl
                : o.getTmast({ yybVersion: a, outerCall: !0 }),
            }),
            t.trigger(UI.EVENTS.touchstartEv(), [
              "",
              y.hadClick() ? y.recCardUrl : "",
            ]));
    }
    function H() {
      if ((c.init(), w.browser.yyb)) {
        var e = o.getTmast({ yybVersion: l.getCache().yybVersion });
        return (
          g.report({
            eventName: g.autoEventName.openQQDownloaderForDownloadApp,
            eventExtInfo: e,
          }),
          void o.callWithScheme(e)
        );
      }
      if (i.appExtInfo.isCpQQDownloader) s.init();
      else if (i.appExtInfo.isCpInnerApp) r.init();
      else if (w.os.ios)
        !(function () {
          d.updateDownBtn("iosdown");
          var e = o.getAppIOSScheme();
          if (
            (((e && w.browser.wechat) || B("debug")) &&
              ($("body").addClass("ios"),
              $(".ios-open-tips").show(),
              g.report({ eventName: g.pvEventName.iosOpenTips }),
              window.oneLog(function () {
                q("wx_ios_browseropentips_pv");
              }, "wx_ios_browseropentips")),
            $("#btn-fast-download")
              .unbind("click")
              .bind("click", function () {
                w.browser.wechat
                  ? q("wx_ios_fastclick")
                  : w.browser.mqq
                  ? q("mqq_ios_fastclick")
                  : w.browser.qqbrowser
                  ? q("mtt_ios_fastclick")
                  : q("other_ios_fastclick"),
                  C.iosUrl
                    ? (g.report({
                        eventName: g.clickBtnEventName.mainBtn,
                        eventResult: g.clickActionEventResult.openAppStore,
                        eventExtInfo: C.iosUrl,
                      }),
                      o.setLocationHref(C.iosUrl))
                    : (g.report({
                        eventName: g.clickBtnEventName.mainBtn,
                        eventResult: g.clickActionEventResult.alert,
                      }),
                      alert(
                        "\n抱歉，当前没有检测到iOS版本\n您可以尝试前往AppStore搜索查看"
                      ));
              }),
            $("#btn-ios-open")
              .unbind(UI.EVENTS.touchstart)
              .bind(UI.EVENTS.touchstart, function () {
                if (w.browser.wechat)
                  return (
                    g.report({
                      eventName: g.clickBtnEventName.iosOpenBtn,
                      eventResult: g.clickActionEventResult.showOpenGuide,
                    }),
                    void U()
                  );
                C.iosUrl
                  ? (g.report({
                      eventName: g.clickBtnEventName.iosOpenBtn,
                      eventResult: g.clickActionEventResult.openAppStore,
                      eventExtInfo: C.iosUrl,
                    }),
                    o.setLocationHref(C.iosUrl))
                  : e
                  ? (g.report({
                      eventName: g.clickBtnEventName.iosOpenBtn,
                      eventResult: g.clickActionEventResult.openCpApp,
                      eventExtInfo: e,
                    }),
                    o.setLocationHref(e))
                  : (g.report({
                      eventName: g.clickBtnEventName.iosOpenBtn,
                      eventResult: g.clickActionEventResult.alert,
                    }),
                    alert(
                      "\n抱歉，当前没有检测到iOS版本\n您可以尝试前往AppStore搜索查看"
                    ));
              }),
            e)
          ) {
            if (w.browser.wechat) return;
            g.report({ eventName: g.autoEventName.openCpApp, eventExtInfo: e }),
              o.setLocationHref(e);
          } else
            C.iosUrl &&
              (g.report({
                eventName: g.autoEventName.openAppStore,
                eventExtInfo: C.iosUrl,
              }),
              o.setLocationHref(C.iosUrl));
          if (window.isDownBase) {
            if (
              ((C.iosUrl && 1 != I.showTips) ||
                (I.gameFloatingWindowInfo &&
                  $(document.body).append(
                    '<div class="top-tips">'.concat(
                      I.gameFloatingWindowInfo,
                      "</div>"
                    )
                  ),
                window.oneLog(function () {
                  q("ios_toptips_pv");
                }, "ios_toptips"),
                g.report({ eventName: g.pvEventName.iosTopTips })),
              !C.iosUrl)
            )
              return (
                $("#btn-fast-download")
                  .removeClass("is-b-blue")
                  .addClass("is-disable"),
                void $("#btn-ios-open")
                  .parents(".btnwrapper")
                  .addClass("is-disable")
              );
            if (1 == I.showTips);
          } else if (!C.iosUrl);
        })();
      else if (w.os.android)
        if (o.isWechatSupportVersion() || o.isMqqSupportVersion()) {
          if (!window.JsBridge) return;
          window.JsBridge.onReady(function () {
            try {
              if (
                (w.browser.wechat &&
                  window.tbs_bridge &&
                  window.tbs_bridge.nativeExec &&
                  window.tbs_bridge.nativeExec("ug", "test", -1, "{}"),
                window.tbs_bridge && window.tbs_bridge.exec)
              ) {
                g.start("".concat(g.clientApiEventName.tbsGetStackInfo));
                try {
                  window.tbs_bridge.exec("ug", "getStackInfo", function (e) {
                    g.endAndReportSampleData({
                      eventName: "".concat(
                        g.clientApiEventName.tbsGetStackInfo
                      ),
                      eventResult: e ? "".concat(e.code) : g.apiErrCode,
                      eventExtInfo: e.message || "",
                    }),
                      e && 0 === e.code && e.stackInfo
                        ? ((window.qbExchangeToken = e.stackInfo),
                          P(window.qbExchangeToken),
                          u.reportGetTbsStack(e.message || "", 0))
                        : ((window.qbExchangeToken = ""),
                          u.reportGetTbsStack(
                            e && (e.message || ""),
                            e && (e.code || "")
                          ));
                  });
                } catch (e) {
                  g.endAndReportSampleData({
                    eventName: "".concat(g.clientApiEventName.tbsGetStackInfo),
                    eventResult: g.eventResult.fail,
                    eventExtInfo: "tbs_bridge error",
                  }),
                    u.reportGetTbsStack("tbs_bridge error", -10001);
                }
              } else g.endAndReportSampleData({ eventName: "".concat(g.clientApiEventName.tbsGetStackInfo), eventResult: g.eventResult.fail, eventExtInfo: "no tbs_bridge" }), u.reportGetTbsStack("no tbs_bridge", -1e4);
            } catch (e) {
              console.log(e);
            }
            l.checkAppState([w.browser.pname], function (e) {
              (w.browser.pversioncode = e[w.browser.pname] || null),
                g.setMediaAppVersion(w.browser.pversioncode),
                a.checkState(
                  window.AppInfoData.appDetail.packageName,
                  window.AppInfoData.relatedPkgList,
                  function (e) {
                    if (e)
                      a.init(
                        e,
                        l.getCache().yybVersion,
                        window.AppInfoData.appDetail.versionCode
                      );
                    else {
                      var n = l.getCache(),
                        t = n.yybVersion,
                        r = n.cpAppVersion;
                      if (
                        ((V = !1),
                        (window.via = "ANDROIDWXZ."
                          .concat(t ? "YYB." : "NEWYYB.")
                          .concat(
                            i.sceneVia
                              ? i.sceneVia
                              : w.browser.wechat
                              ? "WX"
                              : "QQ"
                          )),
                        w.browser.wechat &&
                          (r
                            ? O(r, C.versionCode) < 0
                              ? (window.via += ".SAFEUPGRATE")
                              : (window.via += ".OPEN")
                            : (window.via += ".SAFEDOWNLOAD")),
                        w.browser.wechat && r && !t
                          ? A.checkQQbrowserInstallation(function (e) {
                              e &&
                                q(
                                  !p.monitorNoTbs() && E.isInTbs()
                                    ? "wx_android_noyyb_tbs_app_qb_pv"
                                    : "wx_android_noyyb_notbs_app_qb_pv"
                                ),
                                G(!0);
                            })
                          : G(!0),
                        window.oneLog(function () {
                          var e = t;
                          (w.browser.wechat || w.browser.mqq) &&
                            q(
                              ""
                                .concat(w.browser.wechat ? "wx_" : "mqq_")
                                .concat(
                                  e
                                    ? "android_yyb_pagepv"
                                    : "android_noyyb_pagepv"
                                )
                            ),
                            w.browser.wechat &&
                              (r
                                ? O(r, C.versionCode) >= 0
                                  ? q(
                                      e
                                        ? "wx_android_yyb_hasapp_pagepv"
                                        : "wx_android_noyyb_hasapp_pagepv"
                                    )
                                  : q(
                                      e
                                        ? "wx_android_yyb_oldapp_pagepv"
                                        : "wx_android_noyyb_oldapp_pagepv"
                                    )
                                : q(
                                    e
                                      ? "wx_android_yyb_noapp_pagepv"
                                      : "wx_android_noyyb_noapp_pagepv"
                                  )),
                            i.isPageReloaded &&
                              ((window.reportScene = "reloadFor31415"),
                              setTimeout(function () {
                                $("#btn-fast-download").trigger(
                                  UI.EVENTS.touchstart
                                ),
                                  window.isDownBase
                                    ? $("#reloadDialog").hide()
                                    : $("#reloadDialog").addClass("invisible");
                              }, 500));
                        }, "pagepv"),
                        i.isAutoDownAndCloseWin && t && !r)
                      ) {
                        var s = y.getUrl();
                        s || (s = o.getTmast({ yybVersion: t, outerCall: !0 })),
                          g.report({
                            eventName:
                              g.autoEventName.openQQDownloaderForDownloadApp,
                            eventExtInfo: s,
                          }),
                          o.callWithScheme(s);
                      }
                    }
                  }
                ),
                o.onPageResume(function () {
                  a.checkState(
                    window.AppInfoData.appDetail.packageName,
                    window.AppInfoData.relatedPkgList,
                    function (e) {
                      e
                        ? a.init(
                            e,
                            l.getCache().yybVersion,
                            window.AppInfoData.appDetail.versionCode
                          )
                        : ((V = !1),
                          l.check(
                            window.AppInfoData.appDetail.packageName,
                            function (e, n) {
                              g.setInstallation({
                                yybVersion: e,
                                cpAppVersion: n,
                              }),
                                G(!1);
                            }
                          ));
                    }
                  );
                });
            });
          });
        } else if (
          w.browser.qqbrowser &&
          w.browser.version &&
          O(w.browser.version, "5.0") >= 0 &&
          o.isSupportAppOperationInMtt()
        )
          a.checkState(
            window.AppInfoData.appDetail.packageName,
            window.AppInfoData.relatedPkgList,
            function (e) {
              e
                ? a.init(
                    e,
                    l.getCache().yybVersion,
                    window.AppInfoData.appDetail.versionCode
                  )
                : (function () {
                    var e = function () {
                        var e = o.getTmast({
                          yybVersion: l.getCache().yybVersion,
                          outerCall: !0,
                        });
                        return "$"
                          .concat(e, "&clipboard_start_time=")
                          .concat(Date.now(), "&clipboard_expiry_time=")
                          .concat(18e5, "$");
                      },
                      n = function () {
                        var n =
                          arguments.length > 1
                            ? arguments[1]
                            : g.eventExtPostion.CLICK_MAIN_BTN_TO_DOWNLOAD;
                        (window.mainBtnClick = !0),
                          l.getCache().yybVersion ||
                            ((!l.getCache().cpAppVersion ||
                              O(C.versionCode, l.getCache().cpAppVersion) >
                                0) &&
                              o.copyToClipboard(e())),
                          l.check(
                            window.AppInfoData.appDetail.packageName,
                            function (e, t) {
                              var i;
                              g.setInstallation({
                                yybVersion: e,
                                cpAppVersion: t,
                              });
                              var a = !1,
                                r = !window.fastClickTrigger;
                              if (((window.fastClickTrigger = !1), t))
                                if (F(t, C.versionCode))
                                  if (((i = "update"), e)) {
                                    (a = !0),
                                      r &&
                                        window.oneLog(function () {
                                          q("mtt_android_yyb_fuclick");
                                        }, "act_fastdownload");
                                    var s = o.getTmast({
                                      yybVersion: e,
                                      outerCall: !0,
                                    });
                                    r &&
                                      g.report({
                                        eventName: g.clickBtnEventName.mainBtn,
                                        eventResult:
                                          g.clickActionEventResult
                                            .openQQDownloaderForUpdateApp,
                                        eventExtInfo: s,
                                      }),
                                      o.callWithScheme(s);
                                  } else {
                                    r &&
                                      window.oneLog(function () {
                                        q("mtt_android_noyyb_fuclick");
                                      }, "act_fastdownload");
                                    var c = o.getAppBaoDownUrl("sourcecheck");
                                    r &&
                                      g.report({
                                        eventName: g.clickBtnEventName.mainBtn,
                                        eventResult:
                                          g.clickActionEventResult
                                            .downloadQQDownloaderForUpdateApp,
                                        eventExtInfo: c,
                                      }),
                                      new N({
                                        cpContext: m.CP_CONTEXT.YYB,
                                        position:
                                          g.eventExtPostion
                                            .CLICK_MAIN_BTN_TO_UPDATE,
                                      }).startDownloadTask();
                                  }
                                else {
                                  i = "open";
                                  var l = o.getAppAndroidScheme(!0);
                                  r &&
                                    (window.oneLog(function () {
                                      q(
                                        e
                                          ? "mtt_android_yyb_opclick"
                                          : "mtt_android_noyyb_opclick"
                                      );
                                    }, "act_fastdownload"),
                                    g.report({
                                      eventName: g.clickBtnEventName.mainBtn,
                                      eventResult:
                                        g.clickActionEventResult.openCpApp,
                                      eventExtInfo: l,
                                    })),
                                    o.openApp(l, C.packageName);
                                }
                              else if (((i = "down"), e)) {
                                a = !0;
                                var p = o.getTmast({
                                  yybVersion: e,
                                  outerCall: !0,
                                });
                                r &&
                                  (window.oneLog(function () {
                                    q("mtt_android_yyb_fdclick");
                                  }, "act_fastdownload"),
                                  g.report({
                                    eventName: g.clickBtnEventName.mainBtn,
                                    eventResult:
                                      g.clickActionEventResult
                                        .openQQDownloaderForDownloadApp,
                                    eventExtInfo: p,
                                  })),
                                  o.callWithScheme(p);
                              } else {
                                var u = o.getAppBaoDownUrl("sourcecheck");
                                r &&
                                  (window.oneLog(function () {
                                    q("mtt_android_noyyb_fdclick");
                                  }, "act_fastdownload"),
                                  g.report({
                                    eventName: g.clickBtnEventName.mainBtn,
                                    eventResult:
                                      g.clickActionEventResult
                                        .downloadQQDownloaderForDownloadApp,
                                    eventExtInfo: u,
                                  })),
                                  new N({
                                    cpContext: m.CP_CONTEXT.YYB,
                                    position: n,
                                  }).startDownloadTask();
                              }
                              d.updateDownBtn(i, a, void 0, e);
                            }
                          );
                      };
                    try {
                      l.check(
                        window.AppInfoData.appDetail.packageName,
                        function (e, t) {
                          var a;
                          g.setInstallation({ yybVersion: e, cpAppVersion: t });
                          var r = !1;
                          if (
                            ((window.via = "ANDROIDWXZ."
                              .concat(e ? "YYB." : "NEWYYB.")
                              .concat(
                                i.sceneVia ||
                                  (p.isAdScene() ? "QQBROWSERAD" : "QQBROWSER")
                              )),
                            window.oneLog(function () {
                              q(
                                e
                                  ? "mtt_android_yyb_pagepv"
                                  : "mtt_android_noyyb_pagepv"
                              );
                            }, "pagepv"),
                            i.isAutoDownAndCloseWin && e && !t)
                          ) {
                            var s = o.getTmast({
                              yybVersion: e,
                              outerCall: !0,
                            });
                            g.report({
                              eventName:
                                g.autoEventName.openQQDownloaderForDownloadApp,
                              eventExtInfo: s,
                            }),
                              o.callWithScheme(s);
                          }
                          if (
                            ((a = t
                              ? F(t, C.versionCode)
                                ? "update"
                                : "open"
                              : "down"),
                            e ? (r = !0) : h.init(C, I.hideYYBBanner),
                            d.updateDownBtn(a, r, void 0, e),
                            g.report({
                              eventName: g.keyEventName.mainBtnFinishLoading,
                              eventStartTime: g.pageStartTime,
                              eventEndTime: Date.now(),
                            }),
                            $("body").delegate(
                              "#btn-fast-download",
                              "click",
                              n
                            ),
                            "open" === a && location.hash.indexOf("opened") < 0)
                          ) {
                            location.replace(
                              "".concat(
                                location.href +
                                  (location.href.indexOf("#") > -1 ? "&" : "#"),
                                "opened"
                              )
                            );
                            var c = o.getAppAndroidScheme(!0);
                            g.report({
                              eventName: g.autoEventName.openCpApp,
                              eventExtInfo: c,
                            }),
                              o.openApp(c, C.packageName);
                          }
                          o.onPageResume(function () {
                            l.check(
                              window.AppInfoData.appDetail.packageName,
                              function (e, n) {
                                g.setInstallation({
                                  yybVersion: e,
                                  cpAppVersion: n,
                                }),
                                  (a = n
                                    ? F(n, C.versionCode)
                                      ? "update"
                                      : "open"
                                    : "down"),
                                  d.updateDownBtn(a, !!e, void 0, e);
                              }
                            );
                          });
                        }
                      );
                    } catch (e) {
                      W();
                    }
                  })();
            }
          ),
            g.start("".concat(g.clientApiEventName.checkAppState)),
            l.checkAppState([w.browser.pname], function (e) {
              (w.browser.pversioncode = e[w.browser.pname]),
                g.setMediaAppVersion(w.browser.pversioncode),
                g.endAndReportSampleData({
                  eventName: "".concat(g.clientApiEventName.checkAppState),
                });
            });
        else if (p.isAdScene()) j();
        else {
          var n = o.getAppAndroidScheme(),
            t = o.getAppAndroidScheme(!0),
            f = "1" == B("ntc"),
            v = 0 == location.hash.indexOf("#fromopen");
          v &&
            location.replace(
              ""
                .concat(location.protocol, "//")
                .concat(location.hostname)
                .concat(location.pathname)
                .concat(location.search, "#")
            ),
            !f && (t || (n && v))
              ? (q("other_android_pagepv"),
                g.report({
                  eventName: g.autoEventName.openCpApp,
                  eventExtInfo: t || n,
                }),
                o.setLocationHref(t || n),
                v && b.init(t || n))
              : q("other_android_noschema_pagepv"),
            W();
        }
      else W();
    }
    e.exports = {
      init: function () {
        if (window.APPCONFIG) {
          if (
            ((x = window.APPCONFIG),
            (window.ua = w || {}),
            (window.mobileInfo = {}),
            (window.JsBridgecount = 0),
            (window.JsBridgeNormalcount = 0),
            (window.fastClickTrigger = !1),
            (window.via = ""),
            ((S = x.appbao).appbaoUrlgtk = S.appbaoUrl),
            (C = x.app),
            (I = x.identityInfo),
            _.init(),
            v.init(),
            D.init(),
            window.AppInfoData &&
              window.AppInfoData.appDetail &&
              window.AppInfoData.appDetail.rating &&
              0 == window.AppInfoData.appDetail.rating.averageRating &&
              2e4 == B("fromcase") &&
              $("#appScore").hide(),
            70017 == B("fromcase"))
          ) {
            var e =
              '<div class="top-tips">应用宝扫红码领红包活动已经结束，感谢您的参与！</div>';
            0 == $(".top-tips").length
              ? $(document.body).append(e)
              : $(".top-tips").html(e);
          }
          var n;
          2e4 != B("fromcase") && $(".myapp-logo").show(),
            i.isPageReloaded &&
              ((n = $("#reloadDialog")),
              window.isDownBase ? n.show() : n.removeClass("invisible"),
              g.report({ eventName: g.pvEventName.reloadDialog }),
              n.find(".tips").text("小宝正在努力帮你连接中……"),
              setTimeout(function () {
                window.isDownBase ? n.hide() : n.addClass("invisible");
              }, 4e3)),
            o.setShareInfo(window.AppInfoData && window.AppInfoData.appDetail),
            g.setQQDownloaderInfo(
              window.APPCONFIG.appbao.appbaoUrlgtk,
              window.APPCONFIG.appbao.appbaoMd5
            ),
            k.init(H);
        }
      },
      initDownload: H,
    };
  },
  function (e, n, t) {
    var o = t(7),
      i = t(1),
      a = t(2),
      r = t(6),
      s = t(3),
      c = t(8),
      d = !1;
    function l(e, n, t) {
      c.updateDownBtn("open", !0, void 0),
        d ||
          ((d = !0),
          a.report({
            eventName: a.keyEventName.mainBtnFinishLoading,
            eventStartTime: a.pageStartTime,
            eventEndTime: Date.now(),
          })),
        $("#btn-fast-download")
          .unbind(UI.EVENTS.touchstart)
          .bind(UI.EVENTS.touchstart, function () {
            if (e) {
              var r = s.getAppAndroidScheme();
              i.browser.wechat
                ? n && String.prototype.slice.call(n, 0, 3) >= 715
                  ? (a.report({
                      eventName: a.clickBtnEventName.mainBtn,
                      eventResult:
                        a.clickActionEventResult.openCpAppByQQDownloaderMidPage,
                      eventExtInfo: r,
                    }),
                    s.callYybMidPage(r, t, "BBTN"))
                  : (a.report({
                      eventName: a.clickBtnEventName.mainBtn,
                      eventResult: a.clickActionEventResult.showOpenGuide,
                      eventExtInfo: r,
                    }),
                    o.showWxGuide())
                : (a.report({
                    eventName: a.clickBtnEventName.mainBtn,
                    eventResult: a.clickActionEventResult.openCpApp,
                    eventExtInfo: r,
                  }),
                  s.openApp(r, e.packageName));
            }
          });
    }
    e.exports = {
      init: function (e, n, t) {
        a.report({
          eventName: a.specialEventName.existOtherMarketPkg,
          eventExtInfo: e.packageName,
        }),
          location.hash.indexOf("opened") < 0 &&
            (location.replace(
              location.href +
                (location.href.indexOf("#") > -1 ? "&" : "#") +
                "opened"
            ),
            (window.fastClickTrigger = !0),
            $("#btn-fast-download").trigger(UI.EVENTS.touchstartEv())),
          l(e, n, t);
      },
      checkState: function (e, n, t) {
        if (n && 0 != n.length) {
          for (var o = [], i = 0, a = n.length; i < a; i++)
            n[i].packageName != e && o.push(n[i].packageName);
          r.checkAppState(o, function (e) {
            for (var o = null, i = 0; i < n.length; i++)
              if (e[n[i].packageName]) {
                o = n[i];
                break;
              }
            t && t(o);
          });
        } else t && t(null);
      },
      bind: l,
    };
  },
  function (e, n, t) {
    var o,
      i,
      a,
      r = t(0),
      s = t(4),
      c = t(3),
      d = t(8),
      l = t(6),
      p = t(1),
      u = t(5),
      w = t(2),
      f = s.report,
      m = r.getQuery,
      g = r.compareVersion,
      h = r.debug,
      v = $("#btn-fast-download"),
      _ = m("rurl"),
      b = r.decode(m("android_scheme"), function () {
        w.report({
          eventName: w.errorEventName.decodeURIError,
          eventExtInfo: m("android_scheme"),
        });
      }),
      y = "",
      D = "";
    function A() {
      if (!_ && !b) return "";
      var e = "";
      return (
        (e =
          (e = _
            ? "tmast://webview?mode=0&url=" + _ + "&via=" + y
            : b + (b.indexOf("?") > 0 ? "&" : "?") + "via=" + y) +
          "&traceId=" +
          s.actionTraceId),
        D && (e += "&qbExchangeToken=" + D),
        h("[download/yybLogic.js] getTmast: ".concat(e)),
        e
      );
    }
    function E() {
      return (
        "$" +
        A() +
        "&clipboard_start_time=" +
        Date.now() +
        "&clipboard_expiry_time=1800000$"
      );
    }
    function k() {
      var e = l.getCache().yybVersion;
      return !e || !(g(e, o.versionCode) >= 0 || a.noNeedUpdate);
    }
    function T() {
      var e = "down";
      return l.getCache().yybVersion && (e = k() ? "update" : "open"), e;
    }
    var N = {
        init: function () {
          d.updateDownBtn("iosdown"),
            w.report({
              eventName: w.keyEventName.mainBtnFinishLoading,
              eventStartTime: w.pageStartTime,
              eventEndTime: Date.now(),
            }),
            v.removeClass("is-b-blue").addClass("is-disable"),
            $(document.body).append(
              '<div class="top-tips">应用宝iOS版暂未上线，可在安卓手机下载使用</div>'
            ),
            this.bind();
        },
        bind: function () {
          v.unbind(UI.EVENTS.touchstart).bind(
            UI.EVENTS.touchstart,
            function () {
              alert("应用宝iOS版暂未上线，\n可在安卓手机下载使用");
            }
          );
        },
      },
      S = {
        jsBridgeloader: null,
        setJumpPageFlag: !1,
        reportInstanceCreated: !1,
        init: function () {
          var e = l.getCache().yybVersion;
          window.oneLog(function () {
            (e && g(e, o.versionCode) >= 0) || a.noNeedUpdate
              ? (p.browser.wechat || p.browser.mqq) &&
                f((p.browser.wechat ? "wx_" : "mqq_") + "android_yyb_pagepv")
              : (p.browser.wechat || p.browser.mqq) &&
                f((p.browser.wechat ? "wx_" : "mqq_") + "android_noyyb_pagepv");
          }, "pagepv");
          var n = T();
          d.updateDownBtn(n),
            w.report({
              eventName: w.keyEventName.mainBtnFinishLoading,
              eventStartTime: w.pageStartTime,
              eventEndTime: Date.now(),
            }),
            "open" == n
              ? (window.nowInstallyybForOpen = !0)
              : (window.justNotInstallyybForOpen = !0),
            this.initDownload(),
            this.bind(),
            e &&
              (w.report({
                eventName: w.autoEventName.openQQDownloader,
                eventExtInfo: A(),
              }),
              c.openApp(A(), o.packageName, o.sigMd5)),
            e ||
              !p.browser.wechat ||
              /MicroMessenger\/([0-5]\.|6\.[0-4]\.|6\.5\.[0-6]\.)/i.test(
                navigator.userAgent
              ) ||
              setTimeout(function () {
                (window.fastClickTrigger = !0),
                  w.report({ eventName: w.autoEventName.downloadQQDownloader }),
                  $("#btn-fast-download").trigger(UI.EVENTS.touchstartEv());
              }, 100);
        },
        bind: function () {
          var e = this;
          v.unbind(UI.EVENTS.touchstart).bind(
            UI.EVENTS.touchstart,
            function () {
              var n = l.getCache().yybVersion,
                t = !window.fastClickTrigger;
              if (((window.fastClickTrigger = !1), n && !k()))
                return (
                  t &&
                    (window.oneLog(function () {
                      var e = "";
                      (e = p.browser.wechat
                        ? "wx_android_yyb_opclick"
                        : "mqq_android_yyb_opclick"),
                        f(e);
                    }, "act_fastopen"),
                    w.report({
                      eventName: w.clickBtnEventName.mainBtn,
                      eventResult: w.clickActionEventResult.openQQDownloader,
                      eventExtInfo: A(),
                    })),
                  void c.openApp(A(), o.packageName, o.sigMd5)
                );
              e.setJumpPage(),
                t &&
                  (w.report({
                    eventName: w.clickBtnEventName.mainBtn,
                    eventResult: n
                      ? w.clickActionEventResult.updateQQDownloader
                      : w.clickActionEventResult.downloadQQDownloader,
                  }),
                  window.oneLog(function () {
                    var e = "";
                    (e =
                      l.getCache().yybVersion &&
                      g(l.getCache().yybVersion, o.versionCode) < 0
                        ? p.browser.wechat
                          ? "wx_android_yyb_fuclick"
                          : "mqq_android_yyb_fuclick"
                        : p.browser.wechat
                        ? "wx_android_yyb_fdclick"
                        : "mqq_android_yyb_fdclick"),
                      f(e);
                  }, "act_fastdownload")),
                e.jsBridgeloader.doAction();
            }
          );
        },
        initDownload: function () {
          var e = this;
          this.jsBridgeloader ||
            (this.jsBridgeloader = new JsBridge.Download(
              {
                sngAppId: parseInt(1101070898, 10),
                hnAppId: "5848",
                versionCode: o.versionCode,
                url: i.appbaoUrlgtk,
                packageName: i.appbaoPkg,
                alias: i.appbaoName,
                md5: i.appbaoMd5,
                thumb_url: a.yybLogo || "",
                title: u.appExtInfo.isCpQQDownloaderForKingCard
                  ? "免流量应用商店-应用宝"
                  : "腾讯官方下载器-应用宝",
              },
              function (n, t, o, i) {
                e.onStateChange(n, t, o, i);
              }
            ));
        },
        onStateChange: function (e, n, t, i) {
          var a = this;
          this.reportInstanceCreated ||
            ((this.reportInstanceCreated = !0),
            w.report({
              eventName: w.keyEventName.qqdownloaderDownloadInstanceCreated,
              eventStartTime: w.pageStartTime,
              eventEndTime: Date.now(),
            })),
            w.reportKeyDownloadEvent(
              w.downloadEvent.eventScene.qqdownloader,
              0,
              e,
              i
            );
          var r = l.getCache().yybVersion;
          switch (e) {
            case JsBridge.Download.STATE_DOWNLOADED:
              w.report({ eventName: w.autoEventName.installQQDownloader }),
                c.isMqqSupportVersion()
                  ? setTimeout(function () {
                      a.jsBridgeloader.doAction();
                    }, 500)
                  : this.jsBridgeloader.doAction();
              break;
            case JsBridge.Download.STATE_INSTALLED:
              d.updateDownBtn(r ? "update" : "down", !0),
                w.setInstallation(o.versionCode, o.versionCode),
                w.report({
                  eventName: w.autoEventName.openQQDownloader,
                  eventExtInfo: A(),
                }),
                c.openApp(A(), o.packageName, o.sigMd5);
              break;
            case JsBridge.Download.STATE_INSTALLING:
            case JsBridge.Download.STATE_DOWNLOADING:
              d.updateDownBtn("loading", !1, n);
              break;
            case JsBridge.Download.STATE_FAILED_OF_SDCARD:
              alert(
                "下载失败，请关闭USB数据存储或者插入SD卡或者将手机与电脑断开连接。"
              );
              break;
            case JsBridge.Download.STATE_READY:
            case JsBridge.Download.STATE_FAILED:
            case JsBridge.Download.STATE_PAUSED:
            case JsBridge.Download.STATE_CANCAL:
            case JsBridge.Download.STATE_REMOVED:
            default:
              d.updateDownBtn(r ? (k() ? "udpate" : "open") : "down");
          }
        },
        onPageResume: function () {
          l.check(u.qqdownloaderPkgName, function (e, n) {
            w.setInstallation({ yybVersion: e, cpAppVersion: n });
            var t = T();
            d.updateDownBtn(t),
              "open" == t
                ? (window.nowInstallyybForOpen = !0)
                : (window.justNotInstallyybForOpen = !0),
              p.browser.wechat &&
                window.justNotInstallyybForOpen &&
                window.nowInstallyybForOpen &&
                ((window.justNotInstallyybForOpen = !1),
                (window.nowInstallyybForOpen = !1),
                c.openApp(A(), o.packageName, o.sigMd5));
          });
        },
        setJumpPage: function () {
          if (
            (_ || b) &&
            !this.setJumpPageFlag &&
            ((this.setJumpPageFlag = !0),
            p.browser.wechat &&
              c.writeCommData({
                starttime: new Date().getTime(),
                endtime: new Date().getTime() + 18e5,
                url: A(),
                baoPkgName: i.appbaoPkg,
              }),
            p.browser.mqq)
          )
            try {
              c.setJumpPageInMqq({
                starttime: Date.now(),
                endtime: Date.now() + 18e5,
                jumpUrl: A(),
              });
            } catch (e) {
              console.error(e);
            }
        },
      },
      C = {
        init: function () {
          var e = l.getCache().yybVersion,
            n = T();
          d.updateDownBtn(n),
            window.oneLog(function () {
              var n = "";
              (n = e
                ? k()
                  ? "mtt_android_noyyb_pagepv"
                  : "mtt_android_yyb_pagepv"
                : "mtt_android_noyyb_pagepv"),
                f(n);
            }, "pagepv"),
            w.report({
              eventName: w.keyEventName.mainBtnFinishLoading,
              eventStartTime: w.pageStartTime,
              eventEndTime: Date.now(),
            }),
            this.bind(),
            e &&
              (w.report({
                eventName: w.autoEventName.openQQDownloader,
                eventExtInfo: A(),
              }),
              c.openApp(A(), o.packageName, o.sigMd5));
        },
        bind: function () {
          v.bind("click", function () {
            l.check(u.qqdownloaderPkgName, function (e) {
              w.setInstallation(e, e);
              var n = T();
              if ((d.updateDownBtn(n), e && !k()))
                return (
                  w.report({
                    eventName: w.clickBtnEventName.mainBtn,
                    eventResult: w.clickActionEventResult.openQQDownloader,
                    eventExtInfo: A(),
                  }),
                  f("mtt_android_yyb_opclick"),
                  void c.openApp(A(), o.packageName, o.sigMd5)
                );
              c.copyToClipboard(E()),
                w.report({
                  eventName: w.clickBtnEventName.mainBtn,
                  eventResult: e
                    ? w.clickActionEventResult.updateQQDownloader
                    : w.clickActionEventResult.downloadQQDownloader,
                  eventExtInfo: i.appbaoUrlgtk,
                }),
                f(e ? "mtt_android_yyb_fuclick" : "mtt_android_noyyb_fdclick"),
                c.setLocationHref(i.appbaoUrlgtk);
            });
          });
        },
        onPageResume: function () {
          l.check(u.qqdownloaderPkgName, function (e) {
            w.setInstallation(e, e);
            var n = T();
            d.updateDownBtn(n);
          });
        },
      },
      I = {
        init: function () {
          f("other_android_pagepv"),
            d.updateDownBtn("down"),
            w.report({
              eventName: w.keyEventName.mainBtnFinishLoading,
              eventStartTime: w.pageStartTime,
              eventEndTime: Date.now(),
            }),
            this.bind();
        },
        bind: function () {
          v.bind("click", function () {
            if (
              (window.oneLog(function () {
                p.os.android && f("other_android_fdclick");
              }, "act_fastdownload"),
              _ || b)
            ) {
              if (v.hasClass("btn-unactive")) return;
              d.updateDownBtn("loading"), c.copyToClipboard(E());
              var e = Date.now();
              return (
                setTimeout(function () {
                  Date.now() - e < 3e3 &&
                    (UI.pageVisibility.isHidden() ||
                      c.setLocationHref(i.appbaoUrlgtk));
                  d.updateDownBtn("down");
                }, 2e3),
                w.report({
                  eventName: w.clickBtnEventName.mainBtn,
                  eventResult:
                    w.clickActionEventResult.openAndDownloadQQDownloader,
                }),
                void c.openApp(A())
              );
            }
            d.updateDownBtn("loading"),
              w.report({
                eventName: w.clickBtnEventName.mainBtn,
                eventResult: w.clickActionEventResult.downloadQQDownloader,
                eventExtInfo: i.appbaoUrlgtk,
              }),
              c.setLocationHref(i.appbaoUrlgtk),
              setTimeout(function () {
                d.updateDownBtn("down");
              }, 2e3);
          });
        },
      };
    e.exports = {
      init: function () {
        (o = window.APPCONFIG.app),
          (i = window.APPCONFIG.appbao),
          (a = window.APPCONFIG.identityInfo),
          u.appExtInfo.isCpQQDownloaderForKingCard &&
            (document.title = "免流量应用商店-应用宝"),
          (y = (function (e) {
            var n = m("scenevia").toUpperCase() || "",
              t = m("via").toUpperCase();
            return n
              ? "ANDROIDWXZ.".concat(e ? "YYB" : "NEWYYB", ".").concat(n)
              : t || "";
          })(l.getCache().yybVersion)),
          w.setCallerVia(y),
          p.os.ios
            ? N.init()
            : p.os.android
            ? (function () {
                if (
                  (w.start("".concat(w.clientApiEventName.tbsGetStackInfo)),
                  window.tbs_bridge &&
                    window.tbs_bridge.exec &&
                    window.tbs_bridge.exec("ug", "getStackInfo", function (e) {
                      w.endAndReportSampleData({
                        eventName: "".concat(
                          w.clientApiEventName.tbsGetStackInfo
                        ),
                        eventResult: e ? e.code : w.apiErrCode,
                        eventExtInfo: e ? e.stackInfo : "",
                      }),
                        (D =
                          e && 0 == e.code && e.stackInfo ? e.stackInfo : "");
                    }),
                  !c.isWechatSupportVersion() && !c.isMqqSupportVersion())
                )
                  return p.browser.qqbrowser &&
                    p.browser.version &&
                    g(p.browser.version, "5.0") >= 0 &&
                    c.isSupportAppOperationInMtt()
                    ? (C.init(),
                      void c.onPageResume(function () {
                        C.onPageResume();
                      }))
                    : void I.init();
                window.JsBridge &&
                  window.JsBridge.onReady(function () {
                    S.init(),
                      c.onPageResume(function () {
                        S.onPageResume();
                      });
                  });
              })()
            : I.init();
      },
    };
  },
  function (e, n) {
    function t() {
      $("#normalopendialog").hide();
    }
    e.exports = {
      init: function () {
        $("#normalopendialog .btn-close")
          .off("click")
          .on("click", function () {
            t();
          });
      },
      show: function (e) {
        (e = e || {}),
          $("#normalopendialog .appname").text(e.appname || ""),
          $("#normalopendialog .btn-ok")
            .off("click")
            .on(
              "click",
              e.ok ||
                function () {
                  t();
                }
            ),
          $("#normalopendialog .btn-cancel")
            .off("click")
            .on(
              "click",
              e.cancel ||
                function () {
                  t();
                }
            ),
          $("#normalopendialog").show();
      },
      hide: t,
    };
  },
  function (e, n, t) {
    var o = t(1),
      i = t(4),
      a = t(2),
      r = t(3),
      s = t(6),
      c = t(5),
      d = i.report,
      l = "",
      p = !1;
    e.exports = {
      init: function (e, n) {
        if (e && 0 != e.length)
          if (o.os.ios || (!o.browser.wechat && !o.browser.mqq))
            n(null, !1, {});
          else {
            for (var t = [], i = 0; i < e.length; i++) {
              for (
                var a = e[i],
                  r = (a.install_check && a.install_check.split("|")) || [],
                  d = (a.uninstall_check && a.uninstall_check.split("|")) || [],
                  p = 0;
                p < r.length;
                p++
              )
                t.push(r[p]);
              for (var u = 0; u < d.length; u++) t.push(d[u]);
            }
            t.push(),
              t.push(window.AppInfoData.appDetail.packageName),
              s.checkAppState(t, function (t) {
                for (
                  var o,
                    i = t[c.qqdownloaderPkgName],
                    a = t[window.AppInfoData.appDetail.packageName],
                    r = 0;
                  r < e.length;
                  r++
                ) {
                  for (
                    var s =
                        (e[r].install_check && e[r].install_check.split("|")) ||
                        [],
                      d =
                        (e[r].uninstall_check &&
                          e[r].uninstall_check.split("|")) ||
                        [],
                      p = !0,
                      u = 0;
                    u < s.length;
                    u++
                  )
                    if (t[s[u]]) {
                      p = !1;
                      break;
                    }
                  for (var w = 0; w < d.length; w++)
                    if (!t[d[w]]) {
                      p = !1;
                      break;
                    }
                  if (p) {
                    o = e[r];
                    break;
                  }
                }
                (l = o.act_url), n(o, !0, { yybVersion: i, cpAppVersion: a });
              });
          }
        else n(null, !1, {});
      },
      render: function (e) {
        if (e) {
          var n =
            '<div class="mod-appcard is-108-68 is-two-line-head is-center" data-src="' +
            e.act_url +
            '"><div class="mod-appcard-item is-pic"><img src="' +
            e.act_icon +
            '" alt="appcarditem"></div><div class="mod-appcard-item"><h2 class="mod-appcard-title">' +
            e.title +
            '</h2><div class="mod-appcard-describe">' +
            e.button_title +
            "</div></div></div>";
          $(".is-newcard1").html(n).show(), $(".is-newcard1").show();
        }
      },
      bind: function () {
        $(document.body).on("click", ".is-newcard1", function () {
          p = !0;
          var e = s.getCache().yybVersion,
            n = s.getCache().cpAppVersion;
          d(
            e
              ? n
                ? "yyb_app_reccard_click"
                : "yyb_noapp_reccard_click"
              : n
              ? "noyyb_app_reccard_click"
              : "noyyb_noapp_reccard_click"
          );
          var t = $(this).children("div").attr("data-src");
          if (e)
            return (
              a.report({
                eventName: a.clickBtnEventName.recommendCardBtn,
                eventResult: a.clickActionEventResult.openQQDownloader,
                eventExtInfo: t,
              }),
              void r.callWithScheme(t)
            );
          (window.fastClickTrigger = !0),
            a.report({
              eventName: a.clickBtnEventName.recommendCardBtn,
              eventResult: a.clickActionEventResult.downloadQQDownloader,
            }),
            $("#btn-fast-download").trigger(UI.EVENTS.touchstartEv(), ["", t]);
        });
      },
      reportPv: function (e, n) {
        d(
          e
            ? n
              ? "yyb_app_reccard_pv"
              : "yyb_noapp_reccard_pv"
            : n
            ? "noyyb_app_reccard_pv"
            : "noyyb_noapp_reccard_pv"
        );
      },
      mockData: {
        act_url: "https://qzs.qq.com",
        act_icon: "/o/res/micro/myapp-logo.png",
        title: "我是一张推荐卡",
        button_title: "了解",
      },
      recCardUrl: l,
      hadClick: function () {
        return p;
      },
    };
  },
  function (e, n, t) {
    var o = t(1);
    function i() {
      var e = document.createElement("div");
      return (
        (e.style.position = "fixed"),
        (e.style.right = "10px"),
        (e.style.bottom = "60px"),
        (e.style.width = "180px"),
        (e.style.borderRadius = "5px"),
        (e.style.backgroundColor = "#000000"),
        (e.innerHTML = "\n        <div style=\"\n            width: 160px;\n            height: 160px;\n            margin: 10px 10px;\n            background:url('//a.app.qq.com/o/image/microQr.png?pkgName=".concat(
          window.APPCONFIG.app.packageName,
          '\');\n            background-size:100% 100%;">\n        </div>\n        <p style="font-size: 12px; color: #ffffff; text-align:center; margin: 5px auto; width: 100%;">手机扫码下载</p>'
        )),
        e
      );
    }
    e.exports = {
      init: function () {
        if (o.os.pc)
          try {
            var e = i();
            document.body.appendChild(e);
          } catch (e) {}
      },
      createQrCode: i,
    };
  },
  function (e, n, t) {
    var o = t(3),
      i = t(6),
      a = t(0).debug,
      r = t(2),
      s = t(49),
      c = t(50);
    e.exports = {
      init: function (e) {
        if (1 == window.AppInfoData.identityInfo.isNewCdnUrlFlag) {
          var n = window.AppInfoData || {},
            t =
              1 == window.AppInfoData.identityInfo.isWriteSchemaToCdn
                ? o.getTmast({
                    yybVersion: i.getCache().yybVersion,
                    outerCall: !0,
                    via: c.get(),
                  })
                : "",
            d = {
              cdnUrl: n.baoPkg && n.baoPkg.http_url,
              channelId: n.baoPkg && n.baoPkg.channel,
              channelKey: n.identityInfo && n.identityInfo.channelKey,
              context: "",
              schema: t,
            };
          s.requestForNewCdnInfo(d, function (n, t) {
            a("[download/init.js] requestForNewCdnInfo", n, (t = t || {})),
              0 == t.ret &&
                "" != t.data.cdnUrl &&
                "" != t.data.cdnMd5 &&
                (r.setQQDownloaderInfo(t.data.cdnUrl, t.data.cdnMd5, 1),
                (window.APPCONFIG.appbao.appbaoUrl = t.data.cdnUrl),
                (window.APPCONFIG.appbao.appbaoUrlgtk = t.data.cdnUrl),
                (window.APPCONFIG.appbao.appbaoMd5 = t.data.cdnMd5)),
              r.endAndReportSampleData({
                eventName: r.cgiEventName.newCdnInfo,
                eventExtInfo: n || JSON.stringify(t.data),
                eventResult: n ? r.cgiErrCode : t.ret + "",
              }),
              e && e();
          });
        } else e && e();
      },
    };
  },
  function (e, n) {
    e.exports = {
      requestForNewCdnInfo: function (e, n) {
        $.ajax({
          url: "//" + location.host + "/o/ajax/micro/NewCdnInfo",
          data: e,
          type: "POST",
          dataType: "json",
          withFields: { withCredentials: !0 },
          success: function (e) {
            n(null, e);
          },
          error: function (e, t, o) {
            n(o, {});
          },
        });
      },
      requestForAppInfo: function (e, n) {
        $.ajax({
          url: "//" + location.host + "/o/ajax/micro/MicroDownAppInfo",
          data: e,
          type: "GET",
          dataType: "json",
          withFields: { withCredentials: !0 },
          success: function (e) {
            n(null, e);
          },
          error: function (e, t, o) {
            n(o, {});
          },
        });
      },
    };
  },
  function (e, n, t) {
    var o = t(5),
      i = t(0),
      a = t(1),
      r = t(6);
    function s(e) {
      var n = "OTHERBROWSER";
      return (
        a.browser.mqq && (n = "QQ"),
        a.browser.wechat &&
          ((n = "WX"),
          e
            ? i.compareVersion(e, window.AppInfoData.appDetail.versionCode) < 0
              ? (n += ".SAFEUPGRATE")
              : (n += ".OPEN")
            : (n += ".SAFEDOWNLOAD")),
        a.browser.qqbrowser && (n = "QQBROWSER"),
        n
      );
    }
    e.exports = {
      get: function () {
        if (window.via) return window.via;
        if (o.appExtInfo.isCpQQDownloader)
          return i.getQuery("via").toUpperCase();
        var e = r.getCache(),
          n = e.yybVersion,
          t = e.cpAppVersion,
          c = "";
        return o.appExtInfo.isCpInnerApp
          ? (c = i.getQuery("via") || "")
            ? c
            : (c = "ANDROIDWXZ."
                .concat(n ? "YYB" : "NEWYYB", ".")
                .concat(s(t))).toUpperCase()
          : o.sceneVia
          ? ((c = "ANDROIDWXZ."
              .concat(n ? "YYB" : "NEWYYB", ".")
              .concat(o.sceneVia)),
            a.browser.wechat &&
              (t
                ? i.compareVersion(
                    t,
                    window.AppInfoData.appDetail.versionCode
                  ) < 0
                  ? (c += ".SAFEUPGRATE")
                  : (c += ".OPEN")
                : (c += ".SAFEDOWNLOAD")),
            c.toUpperCase())
          : (c = "ANDROIDWXZ."
              .concat(n ? "YYB" : "NEWYYB", ".")
              .concat(s(t))).toUpperCase();
      },
    };
  },
  function (e, n, t) {
    function o(e, n) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, n) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var t = [],
            o = !0,
            i = !1,
            a = void 0;
          try {
            for (
              var r, s = e[Symbol.iterator]();
              !(o = (r = s.next()).done) &&
              (t.push(r.value), !n || t.length !== n);
              o = !0
            );
          } catch (e) {
            (i = !0), (a = e);
          } finally {
            try {
              o || null == s.return || s.return();
            } finally {
              if (i) throw a;
            }
          }
          return t;
        })(e, n) ||
        (function (e, n) {
          if (!e) return;
          if ("string" == typeof e) return i(e, n);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === t && e.constructor && (t = e.constructor.name);
          if ("Map" === t || "Set" === t) return Array.from(t);
          if (
            "Arguments" === t ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return i(e, n);
        })(e, n) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function i(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
      return o;
    }
    var a = t(11);
    if (window.experimentInfo && window.experimentInfo.params.cpDownPopTitle) {
      var r = function (e, n) {
          var t = o(n.split("|"), 2),
            i = t[0],
            a = t[1];
          e.text(i), a && e.css("color", a);
        },
        s = a.init;
      a.init = function () {
        s();
        var e = window.experimentInfo.params;
        r($("#normalDownDialogTitle"), e.cpDownPopTitle),
          e.cpDownPopContent &&
            r(
              $("#normalDownDialogContent"),
              e.cpDownPopContent.replace("{appName}", APPCONFIG.app.appName)
            ),
          e.cpDownPopSubContent &&
            r($("#normalDownDialogTips"), e.cpDownPopSubContent),
          e.cpDownPopCpBtnColor &&
            $("#normalOpenDialogNormalDownBtn").css({
              borderColor: e.cpDownPopCpBtnColor,
              color: e.cpDownPopCpBtnColor,
            }),
          e.cpDownPopCpBtnBgColor &&
            $("#normalOpenDialogNormalDownBtn").css({
              backgroundColor: e.cpDownPopCpBtnBgColor,
            }),
          e.cpDownPopCpBtnTitle &&
            r($("#normalOpenDialogNormalDownBtn"), e.cpDownPopCpBtnTitle),
          e.cpDownPopYybBtnColor &&
            $("#normalOpenDialogFastDownBtn").css({
              borderColor: e.cpDownPopYybBtnColor,
              color: e.cpDownPopYybBtnColor,
            }),
          e.cpDownPopYybBtnBgColor &&
            $("#normalOpenDialogFastDownBtn").css({
              backgroundColor: e.cpDownPopYybBtnBgColor,
            }),
          e.cpDownPopYybBtnTitle &&
            r($("#normalOpenDialogFastDownBtn"), e.cpDownPopYybBtnTitle);
      };
    }
  },
  function (e, n, t) {
    var o = t(0),
      i = {};
    (window.oneLog = function (e, n) {
      i[n] || (e && e(), (i[n] = !0));
    }),
      (window.debug = function () {
        (window.debugEnabled = window.debugEnabled || o.getQuery("debug")),
          window.debugEnabled && console.log.apply(console, arguments);
      });
  },
  function (e, n) {
    (window.ejs = (function () {
      function e(n) {
        if ("fs" == n) return {};
        var t = e.resolve(n),
          o = e.modules[t];
        if (!o) throw new Error('failed to require "' + n + '"');
        return (
          o.exports ||
            ((o.exports = {}), o.call(o.exports, o, o.exports, e.relative(t))),
          o.exports
        );
      }
      return (
        (e.modules = {}),
        (e.resolve = function (n) {
          var t = n,
            o = n + ".js",
            i = n + "/index.js";
          return (e.modules[o] && o) || (e.modules[i] && i) || t;
        }),
        (e.register = function (n, t) {
          e.modules[n] = t;
        }),
        (e.relative = function (n) {
          return function (t) {
            if ("." != t.substr(0, 1)) return e(t);
            var o = n.split("/"),
              i = t.split("/");
            o.pop();
            for (var a = 0; a < i.length; a++) {
              var r = i[a];
              ".." == r ? o.pop() : "." != r && o.push(r);
            }
            return e(o.join("/"));
          };
        }),
        e.register("ejs.js", function (e, n, t) {
          var o = t("./utils"),
            i = t("fs");
          n.version = "0.7.2";
          var a = (n.filters = t("./filters")),
            r = {};
          function s(e) {
            return e
              .substr(1)
              .split("|")
              .reduce(function (e, n) {
                var t = n.split(":"),
                  o = t.shift(),
                  i = t.shift() || "";
                return i && (i = ", " + i), "filters." + o + "(" + e + i + ")";
              });
          }
          function c(e, n, t, o) {
            var i = n.split("\n"),
              a = Math.max(o - 3, 0),
              r = Math.min(i.length, o + 3),
              s = i
                .slice(a, r)
                .map(function (e, n) {
                  var t = n + a + 1;
                  return (t == o ? " >> " : "    ") + t + "| " + e;
                })
                .join("\n");
            throw (
              ((e.path = t),
              (e.message =
                (t || "ejs") + ":" + o + "\n" + s + "\n\n" + e.message),
              e)
            );
          }
          n.clearCache = function () {
            r = {};
          };
          n.parse = function (e, t) {
            for (
              var o = (t = t || {}).open || n.open || "{%",
                i = t.close || n.close || "%}",
                a = ["var buf = [];", "\nwith (locals) {", "\n  buf.push('"],
                r = 1,
                c = !1,
                d = 0,
                l = e.length;
              d < l;
              ++d
            )
              if (e.slice(d, o.length + d) == o) {
                d += o.length;
                var p,
                  u,
                  w = "__stack.lineno=" + r;
                switch (e.substr(d, 1)) {
                  case "=":
                    (p = "', escape((" + w + ", "), (u = ")), '"), ++d;
                    break;
                  case "-":
                    (p = "', (" + w + ", "), (u = "), '"), ++d;
                    break;
                  default:
                    (p = "');" + w + ";"), (u = "; buf.push('");
                }
                var f = e.indexOf(i, d),
                  m = e.substring(d, f),
                  g = d,
                  h = 0;
                for (
                  "-" == m[m.length - 1] &&
                  ((m = m.substring(0, m.length - 2)), (c = !0));
                  ~(h = m.indexOf("\n", h));

                )
                  h++, r++;
                ":" == m.substr(0, 1) && (m = s(m)),
                  a.push(p, m, u),
                  (d += f - g + i.length - 1);
              } else
                "\\" == e.substr(d, 1)
                  ? a.push("\\\\")
                  : "'" == e.substr(d, 1)
                  ? a.push("\\'")
                  : "\r" == e.substr(d, 1)
                  ? a.push(" ")
                  : "\n" == e.substr(d, 1)
                  ? c
                    ? (c = !1)
                    : (a.push("\\n"), r++)
                  : a.push(e.substr(d, 1));
            return a.push("');\n}\nreturn buf.join('');"), a.join("");
          };
          var d = (n.compile = function (e, t) {
            (t = t || {}),
              (e = [
                "var __stack = { lineno: 1, input: " +
                  JSON.stringify(e) +
                  ", filename: " +
                  (t.filename ? JSON.stringify(t.filename) : "undefined") +
                  " };",
                c.toString(),
                "try {",
                n.parse(e, t),
                "} catch (err) {",
                "  rethrow(err, __stack.input, __stack.filename, __stack.lineno);",
                "}",
              ].join("\n")),
              t.debug && console.log(e);
            var i = new Function("locals, filters, escape", e);
            return function (e) {
              return i.call(this, e, a, o.escape);
            };
          });
          (n.render = function (e, n) {
            var t;
            if ((n = n || {}).cache) {
              if (!n.filename)
                throw new Error('"cache" option requires "filename".');
              t = r[n.filename] || (r[n.filename] = d(e, n));
            } else t = d(e, n);
            return (n.__proto__ = n.locals), t.call(n.scope, n);
          }),
            (n.renderFile = function (e, t, o) {
              var a = e + ":string";
              "function" == typeof t && ((o = t), (t = {})), (t.filename = e);
              try {
                var s = t.cache
                  ? r[a] || (r[a] = i.readFileSync(e, "utf8"))
                  : i.readFileSync(e, "utf8");
                o(null, n.render(s, t));
              } catch (e) {
                o(e);
              }
            }),
            (n.__express = n.renderFile),
            t.extensions
              ? (t.extensions[".ejs"] = function (e, n) {
                  (source = t("fs").readFileSync(n, "utf-8")),
                    e._compile(d(source, {}), n);
                })
              : t.registerExtension &&
                t.registerExtension(".ejs", function (e) {
                  return d(e, {});
                });
        }),
        e.register("filters.js", function (e, n, t) {
          (n.first = function (e) {
            return e[0];
          }),
            (n.last = function (e) {
              return e[e.length - 1];
            }),
            (n.capitalize = function (e) {
              return (e = String(e))[0].toUpperCase() + e.substr(1, e.length);
            }),
            (n.downcase = function (e) {
              return String(e).toLowerCase();
            }),
            (n.upcase = function (e) {
              return String(e).toUpperCase();
            }),
            (n.sort = function (e) {
              return Object.create(e).sort();
            }),
            (n.sort_by = function (e, n) {
              return Object.create(e).sort(function (e, t) {
                return (e = e[n]) > (t = t[n]) ? 1 : e < t ? -1 : 0;
              });
            }),
            (n.size = n.length = function (e) {
              return e.length;
            }),
            (n.plus = function (e, n) {
              return Number(e) + Number(n);
            }),
            (n.minus = function (e, n) {
              return Number(e) - Number(n);
            }),
            (n.times = function (e, n) {
              return Number(e) * Number(n);
            }),
            (n.divided_by = function (e, n) {
              return Number(e) / Number(n);
            }),
            (n.join = function (e, n) {
              return e.join(n || ", ");
            }),
            (n.truncate = function (e, n) {
              return (e = String(e)).substr(0, n);
            }),
            (n.truncate_words = function (e, n) {
              return (e = String(e)).split(/ +/).slice(0, n).join(" ");
            }),
            (n.replace = function (e, n, t) {
              return String(e).replace(n, t || "");
            }),
            (n.prepend = function (e, n) {
              return Array.isArray(e) ? [n].concat(e) : n + e;
            }),
            (n.append = function (e, n) {
              return Array.isArray(e) ? e.concat(n) : e + n;
            }),
            (n.map = function (e, n) {
              return e.map(function (e) {
                return e[n];
              });
            }),
            (n.reverse = function (e) {
              return Array.isArray(e)
                ? e.reverse()
                : String(e).split("").reverse().join("");
            }),
            (n.get = function (e, n) {
              return e[n];
            }),
            (n.json = function (e) {
              return JSON.stringify(e);
            });
        }),
        e.register("utils.js", function (e, n, t) {
          n.escape = function (e) {
            return String(e)
              .replace(/&(?!\w+;)/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;");
          };
        }),
        e("ejs")
      );
    })()),
      (ejs.open = "{%"),
      (ejs.close = "%}");
  },
  function (e, n, t) {
    var o = t(18),
      i = window.experimentInfo;
    i &&
      i.params &&
      i.params.mainBtnTextWhenNotInstallYybAndNotInstallApp &&
      setTimeout(function () {
        var e = i.params,
          n = o.getMainBtnText;
        o.getMainBtnText = function (t, o) {
          var i = n(t, o);
          switch (t) {
            case "down":
              o
                ? e.mainBtnTextWhenInstallYybAndNotInstallApp &&
                  (i = e.mainBtnTextWhenInstallYybAndNotInstallApp)
                : (i = e.mainBtnTextWhenNotInstallYybAndNotInstallApp);
              break;
            case "update":
              o
                ? e.mainBtnTextWhenInstallYybAndUpdateApp &&
                  (i = e.mainBtnTextWhenInstallYybAndUpdateApp)
                : e.mainBtnTextWhenNotInstallYybAndUpdateApp &&
                  (i = e.mainBtnTextWhenNotInstallYybAndUpdateApp);
          }
          return i;
        };
        var t = window.page.updateDownBtn;
        window.page = {
          updateDownBtn: function (e, n) {
            t(e, n);
          },
        };
      }, 0);
  },
]);

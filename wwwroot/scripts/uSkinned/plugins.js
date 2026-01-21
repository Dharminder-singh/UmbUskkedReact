// Author: uSkinned
// License: uSkinned Commercial License (https://uSkinned.net/license)

// Lazysizes
/*! lazysizes - v5.3.2 - lazysizes.min.js */
!function (e) { var t = function (u, D, f) { "use strict"; var k, H; if (function () { var e; var t = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", fastLoadedClass: "ls-is-cached", iframeLoadMode: 0, srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: true, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: true, ricTimeout: 0, throttleDelay: 125 }; H = u.lazySizesConfig || u.lazysizesConfig || {}; for (e in t) { if (!(e in H)) { H[e] = t[e] } } }(), !D || !D.getElementsByClassName) { return { init: function () { }, cfg: H, noSupport: true } } var O = D.documentElement, i = u.HTMLPictureElement, P = "addEventListener", $ = "getAttribute", q = u[P].bind(u), I = u.setTimeout, U = u.requestAnimationFrame || I, o = u.requestIdleCallback, j = /^picture$/i, r = ["load", "error", "lazyincluded", "_lazyloaded"], a = {}, G = Array.prototype.forEach, J = function (e, t) { if (!a[t]) { a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)") } return a[t].test(e[$]("class") || "") && a[t] }, K = function (e, t) { if (!J(e, t)) { e.setAttribute("class", (e[$]("class") || "").trim() + " " + t) } }, Q = function (e, t) { var a; if (a = J(e, t)) { e.setAttribute("class", (e[$]("class") || "").replace(a, " ")) } }, V = function (t, a, e) { var i = e ? P : "removeEventListener"; if (e) { V(t, a) } r.forEach(function (e) { t[i](e, a) }) }, X = function (e, t, a, i, r) { var n = D.createEvent("Event"); if (!a) { a = {} } a.instance = k; n.initEvent(t, !i, !r); n.detail = a; e.dispatchEvent(n); return n }, Y = function (e, t) { var a; if (!i && (a = u.picturefill || H.pf)) { if (t && t.src && !e[$]("srcset")) { e.setAttribute("srcset", t.src) } a({ reevaluate: true, elements: [e] }) } else if (t && t.src) { e.src = t.src } }, Z = function (e, t) { return (getComputedStyle(e, null) || {})[t] }, s = function (e, t, a) { a = a || e.offsetWidth; while (a < H.minSize && t && !e._lazysizesWidth) { a = t.offsetWidth; t = t.parentNode } return a }, ee = function () { var a, i; var t = []; var r = []; var n = t; var s = function () { var e = n; n = t.length ? r : t; a = true; i = false; while (e.length) { e.shift()() } a = false }; var e = function (e, t) { if (a && !t) { e.apply(this, arguments) } else { n.push(e); if (!i) { i = true; (D.hidden ? I : U)(s) } } }; e._lsFlush = s; return e }(), te = function (a, e) { return e ? function () { ee(a) } : function () { var e = this; var t = arguments; ee(function () { a.apply(e, t) }) } }, ae = function (e) { var a; var i = 0; var r = H.throttleDelay; var n = H.ricTimeout; var t = function () { a = false; i = f.now(); e() }; var s = o && n > 49 ? function () { o(t, { timeout: n }); if (n !== H.ricTimeout) { n = H.ricTimeout } } : te(function () { I(t) }, true); return function (e) { var t; if (e = e === true) { n = 33 } if (a) { return } a = true; t = r - (f.now() - i); if (t < 0) { t = 0 } if (e || t < 9) { s() } else { I(s, t) } } }, ie = function (e) { var t, a; var i = 99; var r = function () { t = null; e() }; var n = function () { var e = f.now() - a; if (e < i) { I(n, i - e) } else { (o || r)(r) } }; return function () { a = f.now(); if (!t) { t = I(n, i) } } }, e = function () { var v, m, c, h, e; var y, z, g, p, C, b, A; var n = /^img$/i; var d = /^iframe$/i; var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent); var _ = 0; var w = 0; var M = 0; var N = -1; var L = function (e) { M--; if (!e || M < 0 || !e.target) { M = 0 } }; var x = function (e) { if (A == null) { A = Z(D.body, "visibility") == "hidden" } return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden") }; var W = function (e, t) { var a; var i = e; var r = x(e); g -= t; b += t; p -= t; C += t; while (r && (i = i.offsetParent) && i != D.body && i != O) { r = (Z(i, "opacity") || 1) > 0; if (r && Z(i, "overflow") != "visible") { a = i.getBoundingClientRect(); r = C > a.left && p < a.right && b > a.top - 1 && g < a.bottom + 1 } } return r }; var t = function () { var e, t, a, i, r, n, s, o, l, u, f, c; var d = k.elements; if ((h = H.loadMode) && M < 8 && (e = d.length)) { t = 0; N++; for (; t < e; t++) { if (!d[t] || d[t]._lazyRace) { continue } if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) { R(d[t]); continue } if (!(o = d[t][$]("data-expand")) || !(n = o * 1)) { n = w } if (!u) { u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand; k._defEx = u; f = u * H.expFactor; c = H.hFac; A = null; if (w < f && M < 1 && N > 2 && h > 2 && !D.hidden) { w = f; N = 0 } else if (h > 1 && N > 1 && M < 6) { w = u } else { w = _ } } if (l !== n) { y = innerWidth + n * c; z = innerHeight + n; s = n * -1; l = n } a = d[t].getBoundingClientRect(); if ((b = a.bottom) >= s && (g = a.top) <= z && (C = a.right) >= s * c && (p = a.left) <= y && (b || C || p || g) && (H.loadHidden || x(d[t])) && (m && M < 3 && !o && (h < 3 || N < 4) || W(d[t], n))) { R(d[t]); r = true; if (M > 9) { break } } else if (!r && m && !i && M < 4 && N < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !o && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) { i = v[0] || d[t] } } if (i && !r) { R(i) } } }; var a = ae(t); var S = function (e) { var t = e.target; if (t._lazyCache) { delete t._lazyCache; return } L(e); K(t, H.loadedClass); Q(t, H.loadingClass); V(t, B); X(t, "lazyloaded") }; var i = te(S); var B = function (e) { i({ target: e.target }) }; var T = function (e, t) { var a = e.getAttribute("data-load-mode") || H.iframeLoadMode; if (a == 0) { e.contentWindow.location.replace(t) } else if (a == 1) { e.src = t } }; var F = function (e) { var t; var a = e[$](H.srcsetAttr); if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) { e.setAttribute("media", t) } if (a) { e.setAttribute("srcset", a) } }; var s = te(function (t, e, a, i, r) { var n, s, o, l, u, f; if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) { if (i) { if (a) { K(t, H.autosizesClass) } else { t.setAttribute("sizes", i) } } s = t[$](H.srcsetAttr); n = t[$](H.srcAttr); if (r) { o = t.parentNode; l = o && j.test(o.nodeName || "") } f = e.firesLoad || "src" in t && (s || n || l); u = { target: t }; K(t, H.loadingClass); if (f) { clearTimeout(c); c = I(L, 2500); V(t, B, true) } if (l) { G.call(o.getElementsByTagName("source"), F) } if (s) { t.setAttribute("srcset", s) } else if (n && !l) { if (d.test(t.nodeName)) { T(t, n) } else { t.src = n } } if (r && (s || l)) { Y(t, { src: n }) } } if (t._lazyRace) { delete t._lazyRace } Q(t, H.lazyClass); ee(function () { var e = t.complete && t.naturalWidth > 1; if (!f || e) { if (e) { K(t, H.fastLoadedClass) } S(u); t._lazyCache = true; I(function () { if ("_lazyCache" in t) { delete t._lazyCache } }, 9) } if (t.loading == "lazy") { M-- } }, true) }); var R = function (e) { if (e._lazyRace) { return } var t; var a = n.test(e.nodeName); var i = a && (e[$](H.sizesAttr) || e[$]("sizes")); var r = i == "auto"; if ((r || !m) && a && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) { return } t = X(e, "lazyunveilread").detail; if (r) { re.updateElem(e, true, e.offsetWidth) } e._lazyRace = true; M++; s(e, t, r, i, a) }; var r = ie(function () { H.loadMode = 3; a() }); var o = function () { if (H.loadMode == 3) { H.loadMode = 2 } r() }; var l = function () { if (m) { return } if (f.now() - e < 999) { I(l, 999); return } m = true; H.loadMode = 3; a(); q("scroll", o, true) }; return { _: function () { e = f.now(); k.elements = D.getElementsByClassName(H.lazyClass); v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass); q("scroll", a, true); q("resize", a, true); q("pageshow", function (e) { if (e.persisted) { var t = D.querySelectorAll("." + H.loadingClass); if (t.length && t.forEach) { U(function () { t.forEach(function (e) { if (e.complete) { R(e) } }) }) } } }); if (u.MutationObserver) { new MutationObserver(a).observe(O, { childList: true, subtree: true, attributes: true }) } else { O[P]("DOMNodeInserted", a, true); O[P]("DOMAttrModified", a, true); setInterval(a, 999) } q("hashchange", a, true);["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) { D[P](e, a, true) }); if (/d$|^c/.test(D.readyState)) { l() } else { q("load", l); D[P]("DOMContentLoaded", a); I(l, 2e4) } if (k.elements.length) { t(); ee._lsFlush() } else { a() } }, checkElems: a, unveil: R, _aLSL: o } }(), re = function () { var a; var n = te(function (e, t, a, i) { var r, n, s; e._lazysizesWidth = i; i += "px"; e.setAttribute("sizes", i); if (j.test(t.nodeName || "")) { r = t.getElementsByTagName("source"); for (n = 0, s = r.length; n < s; n++) { r[n].setAttribute("sizes", i) } } if (!a.detail.dataAttr) { Y(e, a.detail) } }); var i = function (e, t, a) { var i; var r = e.parentNode; if (r) { a = s(e, r, a); i = X(e, "lazybeforesizes", { width: a, dataAttr: !!t }); if (!i.defaultPrevented) { a = i.detail.width; if (a && a !== e._lazysizesWidth) { n(e, r, i, a) } } } }; var e = function () { var e; var t = a.length; if (t) { e = 0; for (; e < t; e++) { i(a[e]) } } }; var t = ie(e); return { _: function () { a = D.getElementsByClassName(H.autosizesClass); q("resize", t) }, checkElems: t, updateElem: i } }(), t = function () { if (!t.i && D.getElementsByClassName) { t.i = true; re._(); e._() } }; return I(function () { H.init && t() }), k = { cfg: H, autoSizer: re, loader: e, init: t, uP: Y, aC: K, rC: Q, hC: J, fire: X, gW: s, rAF: ee } }(e, e.document, Date); e.lazySizes = t, "object" == typeof module && module.exports && (module.exports = t) }("undefined" != typeof window ? window : {});

/*! lazysizes - v5.3.2 - ls.respimg.min.js */
!function (e, t) { var r; e && (r = function () { t(e.lazySizes), e.removeEventListener("lazyunveilread", r, !0) }, t = t.bind(null, e, e.document), "object" == typeof module && module.exports ? t(require("lazysizes")) : "function" == typeof define && define.amd ? define(["lazysizes"], t) : e.lazySizes ? r() : e.addEventListener("lazyunveilread", r, !0)) }("undefined" != typeof window ? window : 0, function (d, n, p) { "use strict"; var i, a, s, l, t, r, f, o, c, m, u, y = p.cfg, e = n.createElement("img"), g = "sizes" in e && "srcset" in e, h = /\s+\d+h/g, z = (a = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, s = Array.prototype.forEach, function () { function r(e) { var t, r, i = e.getAttribute(y.srcsetAttr); i && (r = i.match(a)) && ((t = "w" == r[2] ? r[1] / r[3] : r[3] / r[1]) && e.setAttribute("data-aspectratio", t), e.setAttribute(y.srcsetAttr, i.replace(h, ""))) } function e(e) { var t; e.detail.instance == p && ((t = e.target.parentNode) && "PICTURE" == t.nodeName && s.call(t.getElementsByTagName("source"), r), r(e.target)) } function t() { i.currentSrc && n.removeEventListener("lazybeforeunveil", e) } var i = n.createElement("img"); n.addEventListener("lazybeforeunveil", e), i.onload = t, i.onerror = t, i.srcset = "data:,a 1w 1h", i.complete && t() }); function v(e, t) { return e.w - t.w } function w(e, t, r, i) { l.push({ c: t, u: r, w: +i }) } function b(e, t) { var r, i = e.getAttribute("srcset") || e.getAttribute(y.srcsetAttr); !i && t && (i = e._lazypolyfill ? e._lazypolyfill._set : e.getAttribute(y.srcAttr) || e.getAttribute("src")), e._lazypolyfill && e._lazypolyfill._set == i || (r = o(i || ""), t && e.parentNode && (r.isPicture = "PICTURE" == e.parentNode.nodeName.toUpperCase(), r.isPicture && d.matchMedia && (p.aC(e, "lazymatchmedia"), c())), r._set = i, Object.defineProperty(e, "_lazypolyfill", { value: r, writable: !0 })) } function A(e) { var t, r, i, n, a, s, l, o, c, u = e; if (b(u, !0), (n = u._lazypolyfill).isPicture) for (r = 0, i = (t = e.parentNode.getElementsByTagName("source")).length; r < i; r++)if (y.supportsType(t[r].getAttribute("type"), e) && m(t[r].getAttribute("media"))) { u = t[r], b(u), n = u._lazypolyfill; break } return 1 < n.length ? (s = u.getAttribute("sizes") || "", s = f.test(s) && parseInt(s, 10) || p.gW(e, e.parentNode), n.d = (l = e, o = d.devicePixelRatio || 1, c = p.getX && p.getX(l), Math.min(c || o, 2.5, o)), !n.src || !n.w || n.w < s ? (n.w = s, a = function (e) { for (var t, r, i = e.length, n = e[i - 1], a = 0; a < i; a++)if ((n = e[a]).d = n.w / e.w, n.d >= e.d) { !n.cached && (t = e[a - 1]) && t.d > e.d - .13 * Math.pow(e.d, 2.2) && (r = Math.pow(t.d - .6, 1.6), t.cached && (t.d += .15 * r), t.d + (n.d - e.d) * r > e.d && (n = t)); break } return n }(n.sort(v)), n.src = a) : a = n.src) : a = n[0], a } function E(e) { var t; g && e.parentNode && "PICTURE" != e.parentNode.nodeName.toUpperCase() || (t = A(e)) && t.u && e._lazypolyfill.cur != t.u && (e._lazypolyfill.cur = t.u, t.cached = !0, e.setAttribute(y.srcAttr, t.u), e.setAttribute("src", t.u)) } y.supportsType || (y.supportsType = function (e) { return !e }), d.HTMLPictureElement && g ? !p.hasHDescriptorFix && n.msElementsFromPoint && (p.hasHDescriptorFix = !0, z()) : d.picturefill || y.pf || (y.pf = function (e) { var t, r; if (!d.picturefill) for (t = 0, r = e.elements.length; t < r; t++)i(e.elements[t]) }, f = /^\s*\d+\.*\d*px\s*$/, t = /(([^,\s].[^\s]+)\s+(\d+)w)/g, r = /\s/, c = function () { var e, r; function t() { for (var e = 0, t = r.length; e < t; e++)i(r[e]) } c.init || (c.init = !0, addEventListener("resize", (r = n.getElementsByClassName("lazymatchmedia"), function () { clearTimeout(e), e = setTimeout(t, 66) }))) }, m = function (e) { return d.matchMedia ? (m = function (e) { return !e || (matchMedia(e) || {}).matches })(e) : !e }, E.parse = o = function (e) { return l = [], (e = e.trim()).replace(h, "").replace(t, w), l.length || !e || r.test(e) || l.push({ c: e, u: e, w: 99 }), l }, i = E, y.loadedClass && y.loadingClass && (u = [], ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function (e) { u.push(e + y.loadedClass), u.push(e + y.loadingClass) }), y.pf({ elements: n.querySelectorAll(u.join(", ")) }))) });
/*! lazysizes - v5.3.2 - ls.bgset.min.js */
!function (e, t) { var a = function () { t(e.lazySizes), e.removeEventListener("lazyunveilread", a, !0) }; t = t.bind(null, e, e.document), "object" == typeof module && module.exports ? t(require("lazysizes")) : "function" == typeof define && define.amd ? define(["lazysizes"], t) : e.lazySizes ? a() : e.addEventListener("lazyunveilread", a, !0) }(window, function (e, z, c) { "use strict"; var g, y, b, f, r, l, s, v, m; e.addEventListener && (g = c.cfg, y = /\s+/g, b = /\s*\|\s+|\s+\|\s*/g, f = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/, r = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/, l = /\(|\)|'/, s = { contain: 1, cover: 1 }, v = function (e, t) { var a; t && ((a = t.match(r)) && a[1] ? e.setAttribute("type", a[1]) : e.setAttribute("media", g.customMedia[t] || t)) }, m = function (e) { var t, a, r, i, s; e.target._lazybgset && (a = (t = e.target)._lazybgset, (r = t.currentSrc || t.src) && (i = l.test(r) ? JSON.stringify(r) : r, (s = c.fire(a, "bgsetproxy", { src: r, useSrc: i, fullSrc: null })).defaultPrevented || (a.style.backgroundImage = s.detail.fullSrc || "url(" + s.detail.useSrc + ")")), t._lazybgsetLoading && (c.fire(a, "_lazyloaded", {}, !1, !0), delete t._lazybgsetLoading)) }, addEventListener("lazybeforeunveil", function (e) { var t, a, r, i, s, l, n, d, u, o; !e.defaultPrevented && (t = e.target.getAttribute("data-bgset")) && (u = e.target, (o = z.createElement("img")).alt = "", o._lazybgsetLoading = !0, e.detail.firesLoad = !0, a = t, r = u, i = o, s = z.createElement("picture"), l = r.getAttribute(g.sizesAttr), n = r.getAttribute("data-ratio"), d = r.getAttribute("data-optimumx"), r._lazybgset && r._lazybgset.parentNode == r && r.removeChild(r._lazybgset), Object.defineProperty(i, "_lazybgset", { value: r, writable: !0 }), Object.defineProperty(r, "_lazybgset", { value: s, writable: !0 }), a = a.replace(y, " ").split(b), s.style.display = "none", i.className = g.lazyClass, 1 != a.length || l || (l = "auto"), a.forEach(function (e) { var t, a = z.createElement("source"); l && "auto" != l && a.setAttribute("sizes", l), (t = e.match(f)) ? (a.setAttribute(g.srcsetAttr, t[1]), v(a, t[2]), v(a, t[3])) : a.setAttribute(g.srcsetAttr, e), s.appendChild(a) }), l && (i.setAttribute(g.sizesAttr, l), r.removeAttribute(g.sizesAttr), r.removeAttribute("sizes")), d && i.setAttribute("data-optimumx", d), n && i.setAttribute("data-ratio", n), s.appendChild(i), r.appendChild(s), setTimeout(function () { c.loader.unveil(o), c.rAF(function () { c.fire(o, "_lazyloaded", {}, !0, !0), o.complete && m({ target: o }) }) })) }), z.addEventListener("load", m, !0), e.addEventListener("lazybeforesizes", function (e) { var t, a, r, i; e.detail.instance == c && e.target._lazybgset && e.detail.dataAttr && (t = e.target._lazybgset, r = t, i = (getComputedStyle(r) || { getPropertyValue: function () { } }).getPropertyValue("background-size"), !s[i] && s[r.style.backgroundSize] && (i = r.style.backgroundSize), s[a = i] && (e.target._lazysizesParentFit = a, c.rAF(function () { e.target.setAttribute("data-parent-fit", a), e.target._lazysizesParentFit && delete e.target._lazysizesParentFit }))) }, !0), z.documentElement.addEventListener("lazybeforesizes", function (e) { var t, a; !e.defaultPrevented && e.target._lazybgset && e.detail.instance == c && (e.detail.width = (t = e.target._lazybgset, a = c.gW(t, t.parentNode), (!t._lazysizesWidth || a > t._lazysizesWidth) && (t._lazysizesWidth = a), t._lazysizesWidth)) })) });
/*! lazysizes - v5.3.2 - ls.unveilhooks.min.js */
!function (e, t) { var a = function () { t(e.lazySizes), e.removeEventListener("lazyunveilread", a, !0) }; t = t.bind(null, e, e.document), "object" == typeof module && module.exports ? t(require("lazysizes")) : "function" == typeof define && define.amd ? define(["lazysizes"], t) : e.lazySizes ? a() : e.addEventListener("lazyunveilread", a, !0) }(window, function (e, i, o) { "use strict"; var l, d, u = {}; function s(e, t, a) { var n, r; u[e] || (n = i.createElement(t ? "link" : "script"), r = i.getElementsByTagName("script")[0], t ? (n.rel = "stylesheet", n.href = e) : (n.onload = function () { n.onerror = null, n.onload = null, a() }, n.onerror = n.onload, n.src = e), u[e] = !0, u[n.src || n.href] = !0, r.parentNode.insertBefore(n, r)) } i.addEventListener && (l = function (e, t) { var a = i.createElement("img"); a.onload = function () { a.onload = null, a.onerror = null, a = null, t() }, a.onerror = a.onload, a.src = e, a && a.complete && a.onload && a.onload() }, addEventListener("lazybeforeunveil", function (e) { var t, a, n; if (e.detail.instance == o && !e.defaultPrevented) { var r = e.target; if ("none" == r.preload && (r.preload = r.getAttribute("data-preload") || "auto"), null != r.getAttribute("data-autoplay")) if (r.getAttribute("data-expand") && !r.autoplay) try { r.play() } catch (e) { } else requestAnimationFrame(function () { r.setAttribute("data-expand", "-10"), o.aC(r, o.cfg.lazyClass) }); (t = r.getAttribute("data-link")) && s(t, !0), (t = r.getAttribute("data-script")) && (e.detail.firesLoad = !0, s(t, null, function () { e.detail.firesLoad = !1, o.fire(r, "_lazyloaded", {}, !0, !0) })), (t = r.getAttribute("data-require")) && (o.cfg.requireJs ? o.cfg.requireJs([t]) : s(t)), (a = r.getAttribute("data-bg")) && (e.detail.firesLoad = !0, l(a, function () { r.style.backgroundImage = "url(" + (d.test(a) ? JSON.stringify(a) : a) + ")", e.detail.firesLoad = !1, o.fire(r, "_lazyloaded", {}, !0, !0) })), (n = r.getAttribute("data-poster")) && (e.detail.firesLoad = !0, l(n, function () { r.poster = n, e.detail.firesLoad = !1, o.fire(r, "_lazyloaded", {}, !0, !0) })) } }, !(d = /\(|\)|\s|'/))) });
// Lazysizes END  
// // // // // // // // // // // // // // // // // // // //

// Video fill area
// http://jsfiddle.net/4dgaurav/bZrWk/2/
// http://stackoverflow.com/questions/23248441/resizing-video-element-to-parent-div
var min_w = 1600; // minimum video width allowed
var vid_w_orig; // original video dimensions
var vid_h_orig;
jQuery(function() { // runs after DOM has loaded
    vid_w_orig = parseInt(jQuery('.component.usn_cmp_banner .item.item_takeover-banner .video .video-player, .component.usn_cmp_banner .item.item_medium-banner .video .video-player, .component.usn_cmp_banner .item.item_short-banner .video .video-player').attr('width'));
    vid_h_orig = parseInt(jQuery('.component.usn_cmp_banner .item.item_takeover-banner .video .video-player, .component.usn_cmp_banner .item.item_medium-banner .video .video-player, .component.usn_cmp_banner .item.item_short-banner .video .video-player').attr('height'));
    $('#debug').append("<p>DOM loaded</p>");
    jQuery(window).resize(function() { resizeToCover(); });
    jQuery(window).trigger('resize');
});
function resizeToCover() {
    // set the video viewport to the window size
    jQuery('.component.usn_cmp_banner .item.item_takeover-banner .video, .component.usn_cmp_banner .item.item_medium-banner .video, .component.usn_cmp_banner .item.item_short-banner .video').width(jQuery(window).width());
    jQuery('.component.usn_cmp_banner .item.item_takeover-banner .video, .component.usn_cmp_banner .item.item_medium-banner .video, .component.usn_cmp_banner .item.item_short-banner .video').height(jQuery(window).height());
    // use largest scale factor of horizontal/vertical
    var scale_h = jQuery(window).width() / vid_w_orig;
    var scale_v = jQuery(window).height() / vid_h_orig;
    var scale = scale_h > scale_v ? scale_h : scale_v;
    // don't allow scaled width < minimum video width
    if (scale * vid_w_orig < min_w) { scale = min_w / vid_w_orig; };
    // now scale the video
    jQuery('.component.usn_cmp_banner .item.item_takeover-banner .video .video-player, .component.usn_cmp_banner .item.item_medium-banner .video .video-player, .component.usn_cmp_banner .item.item_short-banner .video .video-player').width(scale * vid_w_orig);
    jQuery('.component.usn_cmp_banner .item.item_takeover-banner .video .video-player, .component.usn_cmp_banner .item.item_medium-banner .video .video-player, .component.usn_cmp_banner .item.item_short-banner .video .video-player').height(scale * vid_h_orig);
    // and center it by scrolling the video viewport
    jQuery('.component.usn_cmp_banner .item.item_takeover-banner .video, .component.usn_cmp_banner .item.item_medium-banner .video, .component.usn_cmp_banner .item.item_short-banner .video').scrollLeft((jQuery('video, iframe').width() - jQuery(window).width()) / 2);
    jQuery('.component.usn_cmp_banner .item.item_takeover-banner .video, .component.usn_cmp_banner .item.item_medium-banner .video, .component.usn_cmp_banner .item.item_short-banner .video').scrollTop((jQuery('video, iframe').height() - jQuery(window).height()) / 2);
};
// Video fill area END
// // // // // // // // // // // // // // // // // // // //


// Lazyframe for Videos
// https://github.com/vb/lazyframe
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.lazyframe = t());
})(this, function () {
    "use strict";
    var e =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        };
    return (function () {
        function t(t) {
            if (((d = e({}, m, arguments.length <= 1 ? void 0 : arguments[1])), "string" == typeof t)) for (var i = document.querySelectorAll(t), o = 0; o < i.length; o++) n(i[o]);
            else if (void 0 === t.length) n(t);
            else if (t.length > 1) for (var r = 0; r < t.length; r++) n(t[r]);
            else n(t[0]);
            d.lazyload && a();
        }
        function n(e) {
            var t = this;
            if (e instanceof HTMLElement != !1 && !e.classList.contains("lazyframe--loaded")) {
                var n = { el: e, settings: i(e) };
                n.el.addEventListener("click", function () {
                    n.el.appendChild(n.iframe);
                    var i = e.querySelectorAll("iframe");
                    n.settings.onAppend.call(t, i[0]);
                }),
                    d.lazyload ? l(n) : u(n, !!n.settings.thumbnail);
            }
        }
        function i(t) {
            var n = Array.prototype.slice
                    .apply(t.attributes)
                    .filter(function (e) {
                        return "" !== e.value;
                    })
                    .reduce(function (e, t) {
                        return (e[0 === t.name.indexOf("data-") ? t.name.split("data-")[1] : t.name] = t.value), e;
                    }, {}),
                i = e({}, d, n, { y: t.offsetTop, parameters: o(n.src) });
            if (i.vendor) {
                var r = i.src.match(p.regex[i.vendor]);
                i.id = p.condition[i.vendor](r);
            }
            return i;
        }
        function o(e) {
            var t = e.split("?");
            if (t[1]) {
                t = t[1];
                return -1 !== t.indexOf("autoplay") ? t : t + "&autoplay=1";
            }
            return "autoplay=1";
        }
        function r(e) {
            return !!e.vendor && (!e.title || !e.thumbnail) && (("youtube" !== e.vendor && "youtube_nocookie" !== e.vendor) || !!e.apikey);
        }
        function u(e) {
            var t = this;
            r(e.settings)
                ? s(e, function (n, i) {
                      if (!n) {
                          var o = i[0],
                              r = i[1];
                          if ((r.settings.title || (r.settings.title = p.response[r.settings.vendor].title(o)), !r.settings.thumbnail)) {
                              var u = p.response[r.settings.vendor].thumbnail(o);
                              (r.settings.thumbnail = u), e.settings.onThumbnailLoad.call(t, u);
                          }
                          l(r, !0);
                      }
                  })
                : l(e, !0);
        }
        function s(e, t) {
            var n = p.endpoints[e.settings.vendor](e.settings),
                i = new XMLHttpRequest();
            i.open("GET", n, !0),
                (i.onload = function () {
                    if (i.status >= 200 && i.status < 400) {
                        var n = JSON.parse(i.responseText);
                        t(null, [n, e]);
                    } else t(!0);
                }),
                (i.onerror = function () {
                    t(!0);
                }),
                i.send();
        }
        function a() {
            var e = this,
                t = window.innerHeight,
                n = f.length,
                i = function (t, i) {
                    (t.settings.initialized = !0), t.el.classList.add("lazyframe--loaded"), n--, u(t), t.settings.initinview && t.el.click(), t.settings.onLoad.call(e, t);
                };
            f.filter(function (e) {
                return e.settings.y < t;
            }).forEach(i);
            var o = (function (e, t, n) {
                    var i = void 0;
                    return function () {
                        var o = this,
                            r = arguments,
                            u = function () {
                                (i = null), n || e.apply(o, r);
                            },
                            s = n && !i;
                        clearTimeout(i), (i = setTimeout(u, t)), s && e.apply(o, r);
                    };
                })(function () {
                    (s = r < window.pageYOffset),
                        (r = window.pageYOffset),
                        s &&
                            f
                                .filter(function (e) {
                                    return e.settings.y < t + r && !1 === e.settings.initialized;
                                })
                                .forEach(i),
                        0 === n && window.removeEventListener("scroll", o, !1);
                }, d.debounce),
                r = 0,
                s = !1;
            window.addEventListener("scroll", o, !1);
        }
        function l(e, t) {
            if (((e.iframe = c(e.settings)), e.settings.thumbnail && t && (e.el.style.backgroundImage = "url(" + e.settings.thumbnail + ")"), e.settings.title && 0 === e.el.children.length)) {
                var n = document.createDocumentFragment(),
                    i = document.createElement("span");
                (i.className = "lazyframe__title"), (i.innerHTML = e.settings.title), n.appendChild(i), e.el.appendChild(n);
            }
            d.lazyload || (e.el.classList.add("lazyframe--loaded"), e.settings.onLoad.call(this, e), f.push(e)), e.settings.initialized || f.push(e);
        }
        function c(e) {
            var t = document.createDocumentFragment(),
                n = document.createElement("iframe");
            if (
                (e.vendor && (e.src = p.src[e.vendor](e)),
                n.setAttribute("id", "lazyframe-" + e.id),
                n.setAttribute("src", e.src),
                n.setAttribute("frameborder", 0),
                n.setAttribute("allow", "autoplay; encrypted-media; fullscreen; picture-in-picture"),
                n.setAttribute("mozallowfullscreen", ""),
                n.setAttribute("webkitallowfullscreen", ""),
                "vine" === e.vendor)
            ) {
                var i = document.createElement("script");
                i.setAttribute("src", "https://platform.vine.co/static/scripts/embed.js"), t.appendChild(i);
            }
            return t.appendChild(n), t;
        }
        var d = void 0,
            f = [],
            m = {
                vendor: void 0,
                id: void 0,
                src: void 0,
                thumbnail: void 0,
                title: void 0,
                apikey: void 0,
                initialized: !1,
                parameters: void 0,
                y: void 0,
                debounce: 250,
                lazyload: !0,
                initinview: !1,
                onLoad: function (e) {},
                onAppend: function (e) {},
                onThumbnailLoad: function (e) {},
            },
            p = {
                regex: {
                    youtube_nocookie: /(?:youtube-nocookie\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=)))([a-zA-Z0-9_-]{6,11})/,
                    youtube: /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/,
                    vimeo: /vimeo\.com\/(?:video\/)?([0-9]*)(?:\?|)/,
                    vine: /vine.co\/v\/(.*)/,
                },
                condition: {
                    youtube: function (e) {
                        return !(!e || 11 != e[1].length) && e[1];
                    },
                    youtube_nocookie: function (e) {
                        return !(!e || 11 != e[1].length) && e[1];
                    },
                    vimeo: function (e) {
                        return !!((e && 10 === e[1].length) || 9 === e[1].length || 8 === e[1].length) && e[1];
                    },
                    vine: function (e) {
                        return !(!e || 11 !== e[1].length) && e[1];
                    },
                },
                src: {
                    youtube: function (e) {
                        return "https://www.youtube.com/embed/" + e.id + "/?" + e.parameters;
                    },
                    youtube_nocookie: function (e) {
                        return "https://www.youtube-nocookie.com/embed/" + e.id + "/?" + e.parameters;
                    },
                    vimeo: function (e) {
                        return "https://player.vimeo.com/video/" + e.id + "/?" + e.parameters;
                    },
                    vine: function (e) {
                        return "https://vine.co/v/" + e.id + "/embed/simple";
                    },
                },
                endpoints: {
                    youtube: function (e) {
                        return "https://www.googleapis.com/youtube/v3/videos?id=" + e.id + "&key=" + e.apikey + "&fields=items(snippet(title,thumbnails))&part=snippet";
                    },
                    youtube_nocookie: function (e) {
                        return "https://www.googleapis.com/youtube/v3/videos?id=" + e.id + "&key=" + e.apikey + "&fields=items(snippet(title,thumbnails))&part=snippet";
                    },
                    vimeo: function (e) {
                        return "https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/" + e.id;
                    },
                    vine: function (e) {
                        return "https://vine.co/oembed.json?url=https%3A%2F%2Fvine.co%2Fv%2F" + e.id;
                    },
                },
                response: {
                    youtube: {
                        title: function (e) {
                            return e.items[0].snippet.title;
                        },
                        thumbnail: function (e) {
                            var t = e.items[0].snippet.thumbnails;
                            return (t.maxres || t.standard || t.high || t.medium || t.default).url;
                        },
                    },
                    youtube_nocookie: {
                        title: function (e) {
                            return e.items[0].snippet.title;
                        },
                        thumbnail: function (e) {
                            var t = e.items[0].snippet.thumbnails;
                            return (t.maxres || t.standard || t.high || t.medium || t.default).url;
                        },
                    },
                    vimeo: {
                        title: function (e) {
                            return e.title;
                        },
                        thumbnail: function (e) {
                            return e.thumbnail_url;
                        },
                    },
                    vine: {
                        title: function (e) {
                            return e.title;
                        },
                        thumbnail: function (e) {
                            return e.thumbnail_url;
                        },
                    },
                },
            };
        return t;
    })();
});
// Passing a selector
lazyframe('.lazyframe-video');
// Lazyframe for Videos END
// // // // // // // // // // // // // // // // // // // //

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
// Waypoints END 
// // // // // // // // // // // // // // // // // // // //

// Detect device & browser
$(window).bind('load resize', function() {

    // BROWSER CLASS
    if ( navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 ) {
        $("body").addClass("browser-safari");
    }
    if( navigator.userAgent.indexOf("Chrome") != -1 ) {
        $("body").addClass("browser-chrome");
    }
    if( navigator.userAgent.indexOf("Edg") != -1 && navigator.userAgent.indexOf("Chrome") != -1 ) {
        $("body").removeClass("browser-chrome");
        $("body").addClass("browser-edge");
    }
    if( navigator.userAgent.indexOf("Firefox") != -1 ) {
        $("body").addClass("browser-firefox");
    }
    if ( navigator.userAgent.match(/iP(hone|od|ad)/i)) {
        $("body").removeClass("browser-safari");
        $('body').addClass('browser-ios');
    }

    // Get browser 
    $.each($.browser, function(i) {
        $('html').addClass(i);
        return false;  
    });
    // Get OS
    var os = [
        'iphone',
        'ipad',
        'windows',
        'mac',
        'linux'
    ];
    var match = navigator.appVersion.toLowerCase().match(new RegExp(os.join('|')));
    if (match) {
        $('html').addClass(match[0]);
    };

});
//Check Mobile Devices
var checkTouch = function(){
    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);
    //Check Device //All Touch Devices
    if ( isTouch ) {
        $('html').addClass('touch');
    }
    else {
        $('html').addClass('no-touch');
    };
};
checkTouch();
// Detect device & browser END
// // // // // // // // // // // // // // // // // // // //


// Improve scroll performance of animation
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
var myEfficientScroll = debounce(function() {
    // Trigger animations
    // http://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
    function onScrollInit(items, trigger) {
        items.each(function() {
            var osElement = $(this),
                osAnimationClass = osElement.attr('data-os-animation'),
                osAnimationDelay = osElement.attr('data-os-animation-delay'),
                osAnimationDuration = osElement.attr('data-os-animation-duration');
            osElement.css({
                '-webkit-animation-delay': osAnimationDelay,
                'animation-delay': osAnimationDelay,
                '-webkit-animation-duration': osAnimationDuration,
                'animation-duration': osAnimationDuration
            });
            var osTrigger = (trigger) ? trigger : osElement;
            osTrigger.waypoint(function() {
                osElement.addClass('animated').addClass(osAnimationClass);
            }, {
                triggerOnce: true,
                offset: '90%'
            });
        });
    }
    onScrollInit($('.os-animation'));
}, 250);
window.addEventListener('load', myEfficientScroll);
// Improve scroll performance of animation END
// // // // // // // // // // // // // // // // // // // //


// Header on scroll
var didScroll;
var lastScrollTop = 0;
var delta = 60;
var navbarHeight = $('header#site-header').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
    var scroll = $(window).scrollTop();
    if (scroll >= 60) {
        $('html').removeClass('reached-top');
    } else {
        $('html').addClass('reached-top').removeClass('nav-down').removeClass('nav-up');
    }
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('html').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        $('html').addClass('nav-down').removeClass('nav-up');
    }
    lastScrollTop = st;
}
// Header on scroll END
// // // // // // // // // // // // // // // // // // // //


// Show password function
function showPasswordFunction(label) {
    var x = document.getElementById(label);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
// Show password function END
// // // // // // // // // // // // // // // // // // // //

// Lightbox
$(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
    var trigger = $(this)
    event.preventDefault();

    $('.lightbox.modal').on('hidden.bs.modal', function () {
        trigger.focus()
    })
});
// Cloned carousel items
document.addEventListener('click', event => {
    const target = event.target.closest(Lightbox.defaultSelector);

    // Check if the target is found and the closest parent has the 'slick-cloned' class
    if (target && target.closest('.slick-cloned')) {
        Lightbox.initialize.apply(target, [event]);
    }
});

// Reset lazyframe on modal close
// Function to pause YouTube video by modifying the iframe URL
function pauseYouTubeVideo(iframe) {
    var src = iframe.src;
    if (src.includes('youtube.com')) {
        // Create a new URL that stops the video
        var newSrc = src.split('?')[0] + '?autohide=1&showinfo=0&enablejsapi=1&version=3&autoplay=0&controls=1';
        iframe.src = newSrc; // Set the new URL to effectively "pause" the video
    }
}
// Function to pause Vimeo video by modifying the iframe URL
function pauseVimeoVideo(iframe) {
    var src = iframe.src;
    if (src.includes('vimeo.com')) {
        // Append autoplay=0 to stop the video when modal is closed
        var newSrc = src.split('?')[0] + '?autoplay=0';
        iframe.src = newSrc;
    }
}
// Function to pause MP4 video
function pauseMP4Video(video) {
    if (video.paused === false) {
        video.pause(); // Pause the video if it's playing
    }
}
// Event listener for when any modal is closed
document.addEventListener('hidden.bs.modal', function (event) {
    // Get the modal that was closed (event.target is the modal)
    var modal = event.target;
    // Find all iframe elements inside this specific modal
    var iframes = modal.getElementsByTagName('iframe');
    // Find all video elements inside this specific modal
    var videos = modal.getElementsByTagName('video');
    // Iterate through each iframe and pause the video based on its source
    Array.from(iframes).forEach(function (iframe) {
        var src = iframe.src;
        // Check if it's a YouTube video
        if (src.includes("youtube.com")) {
            pauseYouTubeVideo(iframe);
        }
        // Check if it's a Vimeo video
        if (src.includes("vimeo.com")) {
            pauseVimeoVideo(iframe);
        }
    });
    // Iterate through each <video> tag and pause the MP4 video
    Array.from(videos).forEach(function (video) {
        pauseMP4Video(video);
    });
});

// Lightbox END
// // // // // // // // // // // // // // // // // // // //

// Cookie Helpers

// Get cookie
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}
// Set cookie
function setCookie(c_name, value, expiresDays) {
    var exdate = new Date();
    if(expiresDays!=null)
        exdate.setDate(exdate.getDate() + expiresDays);
    var c_value = value + ((expiresDays == null) ? "" : "; path=/; expires=" + exdate.toUTCString());
    document.cookie = c_name + " =" + c_value; 
}
// Cookie Helpers END
// // // // // // // // // // // // // // // // // // // //

// Amount Scrolled function
function amountscrolled() {
    var winheight = $(window).height();
    var docheight = $(document).height();
    var scrollTop = $(window).scrollTop();
    var trackLength = docheight - winheight;
    var pctScrolled = Math.floor(scrollTop / trackLength * 100); // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
    return pctScrolled;
}
// Amount Scrolled function END
// // // // // // // // // // // // // // // // // // // //

// Skip links
var siteContent = document.getElementById('site-content');

if (skipToContentLink !== null) {
    var skipToContentLink = document.getElementById('skip-to-content-link');
    skipToContentLink.onclick = function (e) {
        e.preventDefault();
        siteContent.focus();
    }
}
var siteFooter = document.getElementById('site-footer');

if (siteFooter !== null) {
    var skipToFooterLink = document.getElementById('skip-to-footer-link');
    skipToFooterLink.onclick = function (e) {
        e.preventDefault();
        siteFooter.focus();
    }
}
// Skip links END
// // // // // // // // // // // // // // // // // // // //

// Close bootstrap collapse listing filters when anywhere else is clicked
document.addEventListener("click", function (e) {
    const sidebar = document.querySelector(".listing_filter-form_sidebar");
    if (sidebar && sidebar.offsetWidth > 0 && sidebar.offsetHeight > 0) return;
    const allFilters = document.querySelectorAll(".filters.collapse");
    const button = e.target.closest(".tab button");
    if (button) {
        // Find the filters related to this button (assumes each button's collapse is next sibling)
        const group = button.closest(".item_filter-group");
        const current = group.querySelector(".filters");
        const isOpen = current.classList.contains("show");
        // Close all
        allFilters.forEach(collapse => {
            const instance = bootstrap.Collapse.getInstance(collapse) ||
                new bootstrap.Collapse(collapse, { toggle: false });
            instance.hide();
        });
        // Open only if it wasn't already open
        if (!isOpen) {
            const instance = bootstrap.Collapse.getInstance(current) ||
                new bootstrap.Collapse(current, { toggle: false });
            instance.show();
        }
        return;
    }
    // Click outside — close any open filters
    if (!e.target.closest(".filters.show")) {
        allFilters.forEach(collapse => {
            const instance = bootstrap.Collapse.getInstance(collapse) ||
                new bootstrap.Collapse(collapse, { toggle: false });
            instance.hide();
        });
    }
});

// Close bootstrap collapse END
// // // // // // // // // // // // // // // // // // // //
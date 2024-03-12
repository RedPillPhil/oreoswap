(this["webpackJsonporeoswap-frontend"] = this["webpackJsonporeoswap-frontend"] || []).push([[7], {
    1253: function(e, t, n) {
        "use strict";
        n.r(t);
        var r, i = n(4), c = n(29), a = n(1), o = n.n(a), s = n(92), u = n(3), d = n(6), b = n(271), l = n(9), j = n(20), f = n.n(j), O = n(771), m = n(57), h = n(28), p = n(181), g = function() {
            var e = Object(a.useRef)(null)
              , t = Object(a.useState)(!1)
              , n = Object(l.a)(t, 2)
              , r = n[0]
              , i = n[1]
              , c = Object(a.useState)(!1)
              , o = Object(l.a)(c, 2)
              , s = o[0]
              , u = o[1];
            return Object(a.useEffect)((function() {
                r || (new IntersectionObserver((function(e) {
                    var t = Object(l.a)(e, 1)[0];
                    u(t.isIntersecting)
                }
                ),{
                    rootMargin: "0px",
                    threshold: 1
                }).observe(e.current),
                i(!0))
            }
            ), [r]),
            {
                observerRef: e,
                isIntersecting: s
            }
        }, x = n(458), v = n(334), w = n(225), k = n(34), S = n(250), T = n(2), C = n(5), E = n(17), y = n(159), D = n(133), F = n(148), A = n(390), B = n(160), L = n(105), V = n(24);
        !function(e) {
            e.NOT_FETCHED = "not-fetched",
            e.FETCHING = "fetching",
            e.SUCCESS = "success",
            e.FAILED = "failed"
        }(r || (r = {}));
        var H, I = function(e) {
            var t = Object(V.a)().chainId
              , n = Object(D.b)()
              , i = Object(y.c)().data
              , c = Object(a.useState)(r.NOT_FETCHED)
              , o = Object(l.a)(c, 2)
              , s = o[0]
              , u = o[1]
              , d = Object(a.useState)([null, null, null, null, null])
              , b = Object(l.a)(d, 2)
              , j = b[0]
              , O = b[1]
              , m = Object(y.h)()
              , p = i.filter((function(e) {
                return !e.isOG && ![h.d.weth.address[t], h.d.cake.address[t]].includes(e.pid)
            }
            ));
            return Object(a.useEffect)((function() {
                var t = function() {
                    var e = Object(E.a)(Object(C.a)().mark((function e() {
                        var t;
                        return Object(C.a)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return u(r.FETCHING),
                                    t = F.d.filter((function(e) {
                                        return e.pid !== L.a[0].pid && "0X" !== e.multiplier
                                    }
                                    )),
                                    e.prev = 2,
                                    e.next = 5,
                                    n(Object(F.c)(t.map((function(e) {
                                        return e.pid
                                    }
                                    ))));
                                case 5:
                                    u(r.SUCCESS),
                                    e.next = 12;
                                    break;
                                case 8:
                                    e.prev = 8,
                                    e.t0 = e.catch(2),
                                    console.error(e.t0),
                                    u(r.FAILED);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[2, 8]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                e && s === r.NOT_FETCHED && t()
            }
            ), [n, u, s, j, e]),
            Object(a.useEffect)((function() {
                s !== r.SUCCESS || j[0] || function(e) {
                    var n = e.filter((function(e) {
                        return e.lpTotalInQuoteToken && e.quoteToken.busdPrice
                    }
                    )).map((function(e) {
                        var n = new f.a(e.lpTotalInQuoteToken).times(e.quoteToken.busdPrice)
                          , r = Object(A.a)(new f.a(e.poolWeight), m, n, e.lpAddresses[t])
                          , i = r.cakeRewardsApr
                          , c = r.lpRewardsApr;
                        return Object(T.a)(Object(T.a)({}, e), {}, {
                            apr: i,
                            lpRewardsApr: c
                        })
                    }
                    ))
                      , r = Object(B.orderBy)(n, (function(e) {
                        return e.apr + e.lpRewardsApr
                    }
                    ), "desc");
                    O(r.slice(0, 5))
                }(p)
            }
            ), [O, p, s, m, j, t]),
            {
                topFarms: j
            }
        }, M = n(36), N = n(383), z = n(87), _ = n(32);
        !function(e) {
            e.NOT_FETCHED = "not-fetched",
            e.FETCHING = "fetching",
            e.SUCCESS = "success",
            e.FAILED = "failed"
        }(H || (H = {}));
        var R, P, U, q, G, W, Q, $, J, X, K, Y, Z, ee = function(e) {
            var t = Object(D.b)()
              , n = Object(_.d)((function(e) {
                return {
                    pools: e.pools.data,
                    userDataLoaded: e.pools.userDataLoaded
                }
            }
            )).pools
              , r = Object(a.useState)(H.NOT_FETCHED)
              , i = Object(l.a)(r, 2)
              , c = i[0]
              , o = i[1]
              , s = Object(a.useState)([null, null, null, null, null])
              , u = Object(l.a)(s, 2)
              , d = u[0]
              , b = u[1]
              , j = Object(a.useMemo)((function() {
                var e = n.filter((function(e) {
                    return !e.isFinished
                }
                ));
                return Object(M.a)(e)
            }
            ), [n])
              , f = Object(y.h)();
            return Object(a.useEffect)((function() {
                var n = function() {
                    var e = Object(E.a)(Object(C.a)().mark((function e() {
                        var n;
                        return Object(C.a)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o(H.FETCHING),
                                    e.next = 3,
                                    z.a.getBlockNumber();
                                case 3:
                                    return n = e.sent,
                                    e.prev = 4,
                                    e.next = 7,
                                    t(Object(N.b)(n));
                                case 7:
                                    o(H.SUCCESS),
                                    e.next = 14;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(4),
                                    console.error(e.t0),
                                    o(H.FAILED);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[4, 10]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                e && c === H.NOT_FETCHED && n()
            }
            ), [t, o, c, d, e]),
            Object(a.useEffect)((function() {
                c !== H.SUCCESS || d[0] || function(e) {
                    var t = Object(B.orderBy)(e, (function(e) {
                        return e.apr || 0
                    }
                    ), "desc");
                    b(t.slice(0, 5))
                }(j)
            }
            ), [b, j, c, f, d]),
            {
                topPools: d
            }
        }, te = n(80), ne = n(55), re = n(101), ie = n(59), ce = n(0), ae = Object(u.e)(d.V)(R || (R = Object(i.a)(["\n  width: 100%;\n  background:", "}\n\n  box-shadow: 0.6rem 0.6rem 1.87rem 0px #7876940d;\n  padding: 1.62rem 2rem;\n  height: 10.1rem;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 2px solid transparent;\n  border-radius: 1.56rem;\n"])), (function(e) {
            return e.theme.isDark ? "linear-gradient(-155deg, rgba(40, 91, 131, 0.5) 35%, rgb(23, 60, 85) 100%)" : "linear-gradient(108.54deg, rgba(226, 238, 241, 0.5) 1.86%, rgba(219, 227, 255, 0.5) 100%) padding-box, linear-gradient(95.1deg, rgb(73 167 245 / 77%) 0.55%, rgba(49, 124, 224, 0.3) 97.54%) border-box; "
        }
        )), oe = Object(u.e)(d.Tb)(P || (P = Object(i.a)(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"])), (function(e) {
            var t = e.isHighlight
              , n = e.subText
              , r = e.theme;
            return t ? "#3889eb;" : n ? "#A5A8BE" : r.isDark ? "#C9C4BD" : "#111651"
        }
        ), (function(e) {
            return e.isHighlight ? "2.25rem" : "1rem"
        }
        ), (function(e) {
            return e.isHighlight ? "700" : "500"
        }
        )), se = function(e) {
            var t = e.isLoaded
              , n = e.apr
              , r = Object(c.b)().t;
            return Object(ce.jsxs)(ae, {
                children: [Object(ce.jsx)(oe, {
                    children: r("Earn up to")
                }), t ? Object(ce.jsx)(oe, {
                    isHighlight: !0,
                    children: n
                }) : Object(ce.jsx)(d.Mb, {
                    height: 54,
                    width: 250,
                    animation: "waves",
                    mt: "0.93rem",
                    mb: "0.93rem"
                }), Object(ce.jsx)(oe, {
                    children: r("APR in Farms")
                })]
            })
        }, ue = Object(u.e)(d.V)(U || (U = Object(i.a)(["\n  & {\n    width: 100%;\n    background: ", ";\n    box-shadow: 10px 10px 30px rgba(120, 118, 148, 0.05);\n    border-radius: 25px;\n    // padding: 27px 33px;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 25px;\n  }\n  & > div {\n    justify-content: space-between;\n    margin-bottom: 14px;\n  }\n  & > div:nth-last-child(1) {\n    margin-bottom: 0;\n  }\n  padding: ", ";\n"])), (function(e) {
            return e.theme.isDark ? "#181A1B" : "#ffffff"
        }
        ), (function(e) {
            return e.padding
        }
        )), de = function(e) {
            var t = e.children
              , n = e.padding;
            return Object(ce.jsx)(ue, {
                padding: n,
                children: t
            })
        }, be = n(141), le = n(73), je = Object(u.e)("div")(q || (q = Object(i.a)(["\n  width: 100%;\n  box-shadow: 0.62rem 0.62rem 1.87rem rgba(120, 118, 148, 0.05);\n  border-radius: 1.56rem;\n  padding: 1.43rem 1.93rem 1.37rem 1.93rem;\n  height: 161.6px;\n  position: relative;\n  background: ", ";\n"])), (function(e) {
            return e.theme.isDark ? "#181A1B" : "#ffffff"
        }
        )), fe = Object(u.e)(d.Tb)(G || (G = Object(i.a)(["\n  font-weight: 500;\n  font-size: 2.25rem;\n  line-height: 2.93rem;\n  margin-top: 2.18rem;\n  position: relative;\n"]))), Oe = Object(u.e)(be.FeatureArrow)(W || (W = Object(i.a)(["\n  position: absolute;\n  left: 18.75rem;\n"]))), me = Object(u.e)("div")(Q || (Q = Object(i.a)(["\n  width: 6.5rem;\n  height: 6.68rem;\n  position: absolute;\n  background-image: url(", "/images/icon/oreo-blue-coin.png);\n  background-size: cover;\n  right: -0.81rem;\n  bottom: 1.87rem;\n  @media (max-width: 595px) {\n    right: 0;\n    top: -0.85rem;\n    bottom: 0;\n  }\n"])), window.location.origin), he = function() {
            var e = Object(c.b)().t
              , t = Object(s.useMediaQuery)({
                query: "(min-width: 975px)"
            })
              , n = Object(s.useMediaQuery)({
                query: "(max-width: 414px)"
            });
            return Object(ce.jsxs)(je, {
                children: [Object(ce.jsxs)(fe, {
                    children: [e("Start trading"), t ? Object(ce.jsx)(le.a, {
                        to: "/swap",
                        children: Object(ce.jsx)(Oe, {})
                    }) : Object(ce.jsx)(le.a, {
                        style: {
                            position: "absolute",
                            top: "5px",
                            left: "-45px"
                        },
                        to: "/swap",
                        children: Object(ce.jsx)(Oe, {
                            width: "35px",
                            height: "35px"
                        })
                    })]
                }), !n && Object(ce.jsx)(me, {})]
            })
        }, pe = Object(u.e)("div")($ || ($ = Object(i.a)(["\n  width: 100%;\n  background: linear-gradient(108.54deg, #3889eb 1.86%, #0058fe 100%);\n  box-shadow: 10px 10px 30px rgba(5, 89, 155, 0.15);\n  border-radius: 1.56rem;\n  padding: 2rem 1.93rem;\n  /* padding: 3.43rem 1.93rem; */\n  height: 14.43rem;\n  height: 164px;\n  position: relative;\n"]))), ge = (Object(u.e)("div")(J || (J = Object(i.a)(["\n  width: 8.43rem;\n  height: 8.62rem;\n  position: absolute;\n  background-image: url(", "/images/GoldWingCoin.png);\n  background-size: cover;\n  right: 1.18rem;\n  bottom: 2.44rem;\n"])), window.location.origin),
        Object(u.e)(d.Tb)(X || (X = Object(i.a)(["\n  color: white;\n  font-size: ", ";\n  font-weight: ", ";\n"])), (function(e) {
            return e.isHighlight ? "2.25rem" : "1rem"
        }
        ), (function(e) {
            return e.isHighlight ? "700" : "500"
        }
        ))), xe = function(e) {
            var t = e.isLoaded
              , n = e.valueLocked
              , r = Object(c.b)().t;
            return Object(ce.jsx)(pe, {
                children: Object(ce.jsxs)(d.V, {
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    children: [Object(ce.jsx)(ge, {
                        children: r("Total Value Locked (TVL)")
                    }), t ? Object(ce.jsx)(ge, {
                        isHighlight: !0,
                        children: n
                    }) : Object(ce.jsx)(d.Mb, {
                        height: 54,
                        width: 250,
                        animation: "waves",
                        mt: "0.93rem",
                        mb: "0.93rem"
                    }), Object(ce.jsx)(ge, {
                        children: r("Across all LPs and Stake")
                    })]
                })
            })
        }, ve = n(58), we = n(1238), ke = n(1172), Se = n(1169), Te = n.n(Se), Ce = [{
            address: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
            symbol: "ETH",
            order: 2,
            addressFtm: ""
        }, {
            address: "0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454",
            symbol: "BNB",
            order: 3
        }], Ee = [], ye = [{
            address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
            symbol: "BTC",
            order: 1
        }, {
            address: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
            symbol: "GMX",
            order: 4
        }, {
            address: "0x539bde0d7dbd336b79148aa742883198bbf60342",
            symbol: "MAGIC",
            order: 5
        }], De = Object(u.e)(d.r)(K || (K = Object(i.a)(["\n  white-space: nowrap;\n  transition: ease 1000ms;\n  background: ", ";\n"])), (function(e) {
            return e.theme.isDark ? "#181A1B" : "#ffffff"
        }
        )), Fe = u.e.div(Y || (Y = Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  padding-top: 10px;\n"]))), Ae = u.e.div(Z || (Z = Object(i.a)(["\n  white-space: nowrap;\n  transition: ease 1000ms;\n"]))), Be = function() {
            var e = Object(ke.a)()
              , t = e.width
              , n = e.ref
              , r = Object(a.useState)([])
              , i = Object(l.a)(r, 2)
              , c = i[0]
              , s = i[1]
              , u = o.a.useState(0)
              , b = Object(l.a)(u, 2)
              , j = b[0]
              , f = b[1]
              , O = o.a.useRef(null)
              , m = Object(d.nc)()
              , h = m.isMobile
              , p = m.isTablet
              , g = h || p
              , x = Object(a.useState)(0)
              , v = Object(l.a)(x, 2)
              , w = v[0]
              , k = v[1]
              , S = Object(a.useState)(0)
              , T = Object(l.a)(S, 2)
              , y = T[0]
              , D = T[1]
              , F = Object(a.useMemo)((function() {
                return Te()(c, y)
            }
            ), [c, y]);
            function A() {
                O.current && clearTimeout(O.current)
            }
            o.a.useEffect((function() {
                return A(),
                O.current = setTimeout((function() {
                    return f((function(e) {
                        return e === F.length - 1 ? 0 : e + 1
                    }
                    ))
                }
                ), 2500),
                function() {
                    A()
                }
            }
            ), [j, F.length]);
            var B = function() {
                var e = Object(E.a)(Object(C.a)().mark((function e(t, n) {
                    var r, i, c;
                    return Object(C.a)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                r = t.map((function(e) {
                                    return e.address
                                }
                                )).join(","),
                                e.next = 4,
                                we.a.get("https://api.coingecko.com/api/v3/simple/token_price/".concat(n, "?contract_addresses=").concat(r, "&vs_currencies=usd&include_24hr_change=true"));
                            case 4:
                                return i = e.sent,
                                c = Object.entries((null === i || void 0 === i ? void 0 : i.data) || {}).map((function(e) {
                                    var n = Object(l.a)(e, 2)
                                      , r = n[0]
                                      , i = n[1]
                                      , c = i.usd
                                      , a = i.usd_24h_change
                                      , o = t.find((function(e) {
                                        return e.address.toLocaleLowerCase() === r
                                    }
                                    ));
                                    return {
                                        address: (null === o || void 0 === o ? void 0 : o.addressFtm) || (null === o || void 0 === o ? void 0 : o.address) || "",
                                        usd: c,
                                        usd24hChange: a,
                                        symbol: (null === o || void 0 === o ? void 0 : o.symbol) || "",
                                        order: (null === o || void 0 === o ? void 0 : o.order) || 0
                                    }
                                }
                                )),
                                e.abrupt("return", c);
                            case 9:
                                return e.prev = 9,
                                e.t0 = e.catch(0),
                                console.error(e.t0),
                                e.abrupt("return", []);
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9]])
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }();
            function L(e) {
                var t = e.usd24hChange > 0;
                return Object(ce.jsxs)(d.V, {
                    minWidth: "140px",
                    width: w,
                    alignItems: "center",
                    mb: "30px",
                    justifyContent: "center",
                    flex: "1 1 auto",
                    children: [Object(ce.jsx)(ve.b, {
                        size: "35px",
                        address: e.address
                    }), Object(ce.jsxs)(d.r, {
                        ml: g ? "5px" : "15px",
                        children: [Object(ce.jsxs)(d.V, {
                            children: [Object(ce.jsx)(d.Tb, {
                                mr: g ? "5px" : "10px",
                                color: "#48A5F4",
                                fontSize: "12px",
                                children: e.symbol
                            }), Object(ce.jsxs)(d.Tb, {
                                color: t ? "green" : "#ff4567",
                                fontSize: "12px",
                                children: [e.usd24hChange.toLocaleString(void 0, {
                                    maximumFractionDigits: 2
                                }), "%"]
                            })]
                        }), Object(ce.jsxs)(d.Tb, {
                            fontWeight: 500,
                            fontSize: "16px",
                            children: ["$", e.usd.toLocaleString(void 0, {
                                maximumFractionDigits: 2
                            })]
                        })]
                    })]
                }, e.address)
            }
            return Object(a.useEffect)((function() {
                var e = function() {
                    return Promise.all([B(Ce, "fantom"), B(ye, "arbitrum-one"), B(Ee, "ethereum")]).then((function(e) {
                        var t = Object(l.a)(e, 2)
                          , n = t[0]
                          , r = t[1]
                          , i = [].concat(Object(M.a)(n), Object(M.a)(r));
                        s(i.sort((function(e, t) {
                            return e.order - t.order
                        }
                        )))
                    }
                    ))
                };
                e();
                var t = setInterval(e, 6e4);
                return function() {
                    clearInterval(t)
                }
            }
            ), []),
            Object(a.useEffect)((function() {
                var e = Math.round((t - 42) / 150);
                k((t - 42) / (e = e > 5 ? 5 : e)),
                D(e)
            }
            ), [t]),
            Object(ce.jsx)(De, {
                mx: g ? "0rem" : "1.3rem",
                mt: "1rem",
                borderRadius: "25px",
                mb: 10,
                pb: "50px",
                pt: "30px",
                pl: g ? "10px" : "70px",
                pr: g ? "0px" : "70px",
                background: "#ffffff",
                maxHeight: "110px",
                style: {
                    overflow: "hidden"
                },
                ref: n,
                children: Object(ce.jsx)(Ae, {
                    style: {
                        transform: "translateY(".concat(100 * -j / F.length, "%)"),
                        overflow: "hidden"
                    },
                    children: F.map((function(e, t) {
                        return Object(ce.jsx)(Fe, {
                            children: e.map(L)
                        }, t)
                    }
                    ))
                })
            })
        };
        function Le(e) {
            var t = function(e) {
                var t = Object(ie.a)(e.token0)
                  , n = Object(p.a)(t)
                  , r = Object(re.d)(e.liquidityToken.address, e.token0)
                  , i = n && r ? new f.a(n.toSignificant(6)).times(new f.a(r.toSignificant(6))).times(2) : void 0;
                return null === i || void 0 === i ? void 0 : i.toString()
            }(e.pair);
            return Object(ce.jsx)("div", {
                className: "singleValueLock",
                style: {
                    display: "none"
                },
                children: t
            })
        }
        var Ve, He, Ie, Me, Ne, ze, _e, Re, Pe, Ue, qe, Ge, We, Qe = n(44), $e = Object(u.e)(d.V)(Ve || (Ve = Object(i.a)(["\n  width: 100%;\n  flex-direction: ", ";\n"])), (function(e) {
            return e.isSmallScreen ? "column" : "row"
        }
        )), Je = Object(u.e)(d.V)(He || (He = Object(i.a)(["\n  flex-direction: column;\n  width: 100%;\n  margin: 0 1rem;\n  @media (max-width: 975px) {\n    margin: 0 0;\n  }\n"]))), Xe = Object(u.e)("div")(Ie || (Ie = Object(i.a)(["\n  width: 100%;\n  margin: 1rem 0;\n  height: ", ";\n"])), (function(e) {
            return e.height
        }
        )), Ke = Object(u.e)(d.Tb)(Me || (Me = Object(i.a)(["\n  font-weight: 500;\n  font-size: 1rem;\n  line-height: 1.25rem;\n  color: ", ";\n"])), (function(e) {
            return e.isValue ? "#111651" : "#A5A8BE"
        }
        )), Ye = function(e) {
            var t = e.isSmallerScreen
              , n = function() {
                var e = Object(V.a)().account
                  , t = Object(ne.k)()
                  , n = Object(a.useMemo)((function() {
                    return t.map((function(e) {
                        return {
                            liquidityToken: Object(ne.a)(e),
                            tokens: e
                        }
                    }
                    ))
                }
                ), [t])
                  , r = Object(a.useMemo)((function() {
                    return n.map((function(e) {
                        return e.liquidityToken
                    }
                    ))
                }
                ), [n])
                  , i = Object(re.f)(null !== e && void 0 !== e ? e : void 0, r)
                  , c = Object(l.a)(i, 2)
                  , o = (c[0],
                c[1])
                  , s = n
                  , u = Object(te.c)(s.map((function(e) {
                    return e.tokens
                }
                )));
                return o || (null === u || void 0 === u ? void 0 : u.length) < s.length || null === u || void 0 === u || u.some((function(e) {
                    return !e
                }
                )),
                u.map((function(e) {
                    return Object(l.a)(e, 2)[1]
                }
                )).filter((function(e) {
                    return Boolean(e)
                }
                ))
            }()
              , r = Object(c.b)().t
              , i = g()
              , s = i.observerRef
              , u = i.isIntersecting
              , b = I(u).topFarms
              , j = ee(u).topPools
              , T = (Object(v.d)(),
            Object(S.c)(Object(v.e)(), 18))
              , C = Object(w.a)(h.b[m.i])
              , E = Object(a.useMemo)((function() {
                if (C)
                    return +C.toSignificant(6)
            }
            ), [C, T])
              , y = Object(p.a)(h.b[m.i])
              , D = new f.a(null === y || void 0 === y ? void 0 : y.toSignificant(6))
              , F = !(!b[0] || !j[0])
              , A = F ? j.reduce((function(e, t) {
                return e.plus(t ? Object(S.c)(new f.a(t.totalStaked).multipliedBy(new f.a(t.stakingTokenPrice)), t.stakingToken.decimals) : new f.a(0))
            }
            ), k.c) : k.c
              , B = Object(x.a)(0, {
                localStorageKey: "wingswap_TPVLP"
            })
              , L = Object(l.a)(B, 2)
              , H = L[0]
              , M = L[1];
            Object(a.useEffect)((function() {
                var e = A.isNaN() ? 0 : null === A || void 0 === A ? void 0 : A.toNumber();
                e > 0 && M(e)
            }
            ), [A]);
            var N = F ? "".concat(b.concat(j).reduce((function(e, t) {
                return Math.max(e, t.apr)
            }
            ), 0).toLocaleString(void 0, {
                maximumFractionDigits: 0
            }), "%") : ""
              , z = Object(a.useMemo)((function() {
                var e = document.getElementsByClassName("singleValueLock")
                  , t = 0;
                if (e.length)
                    for (var n = 0; n < e.length; n++)
                        t += Number(e[n].innerHTML);
                return t > 0 ? "$".concat((t += H).toLocaleString(void 0, {
                    maximumFractionDigits: 0
                })) : 0
            }
            ), [n, H])
              , _ = Object(Qe.a)().isDark;
            return Object(ce.jsxs)("div", {
                ref: s,
                style: {
                    width: "100%"
                },
                children: [n.map((function(e) {
                    return Object(ce.jsx)(o.a.Fragment, {
                        children: Object(ce.jsx)(Le, {
                            pair: e
                        })
                    }, e.liquidityToken.address)
                }
                )), Object(ce.jsxs)($e, {
                    isSmallScreen: t,
                    children: [Object(ce.jsxs)(Je, {
                        children: [Object(ce.jsx)(Xe, {
                            children: Object(ce.jsx)(he, {})
                        }), Object(ce.jsx)(Xe, {
                            children: Object(ce.jsx)(xe, {
                                isLoaded: !!z,
                                valueLocked: z.toString()
                            })
                        })]
                    }), Object(ce.jsxs)(Je, {
                        children: [Object(ce.jsx)(Xe, {
                            children: Object(ce.jsx)(se, {
                                isLoaded: F,
                                apr: N
                            })
                        }), Object(ce.jsx)(Xe, {
                            children: Object(ce.jsxs)(de, {
                                padding: "2rem 2rem",
                                children: [Object(ce.jsxs)(d.V, {
                                    children: [Object(ce.jsx)(Ke, {
                                        children: r("OREO Price")
                                    }), D.gt(0) ? Object(ce.jsx)(O.a, {
                                        decimals: 3,
                                        prefix: "$",
                                        fontSize: "1rem",
                                        fontWeight: "500",
                                        color: "".concat(_ ? "#C9C4BD" : "#111651"),
                                        value: D.toNumber()
                                    }) : Object(ce.jsx)(d.Mb, {
                                        height: 24,
                                        width: 126,
                                        animation: "waves",
                                        my: "0.25rem"
                                    })]
                                }), Object(ce.jsxs)(d.V, {
                                    children: [Object(ce.jsx)(Ke, {
                                        children: r("Burned")
                                    }), Object(ce.jsx)(O.a, {
                                        decimals: 0,
                                        fontSize: "1rem",
                                        fontWeight: "500",
                                        color: "".concat(_ ? "#C9C4BD" : "#111651"),
                                        value: T,
                                        isUnit: !0
                                    })]
                                }), Object(ce.jsxs)(d.V, {
                                    children: [Object(ce.jsx)(Ke, {
                                        children: r("Circulating Supply")
                                    }), Object(ce.jsx)(O.a, {
                                        decimals: 0,
                                        fontSize: "1rem",
                                        fontWeight: "500",
                                        color: "".concat(_ ? "#C9C4BD" : "#111651"),
                                        value: E,
                                        isUnit: !0
                                    })]
                                })]
                            })
                        })]
                    })]
                }), Object(ce.jsx)(Be, {})]
            })
        }, Ze = Object(u.e)(d.V)(Ne || (Ne = Object(i.a)(["\n  justify-content: space-between;\n  padding: 0.5rem 2.5rem;\n  width: 100%;\n  flex-direction: column;\n"]))), et = Object(u.e)(d.V)(ze || (ze = Object(i.a)(["\n  width: 100%;\n  flex-direction: column;\n  padding: 0rem 1.3rem;\n"]))), tt = (Object(u.e)(d.Tb)(_e || (_e = Object(i.a)(["\n  color: ", ";\n  font-weight: 700;\n  font-size: 2.3rem;\n  line-height: 2.9rem;\n"])), (function(e) {
            var t = e.theme;
            return t.isDark ? t.colors.paleWhite : "#111651"
        }
        )),
        Object(u.e)(d.Tb)(Re || (Re = Object(i.a)(["\n  font-weight: 500;\n  font-size: 1.1rem;\n  line-height: 1.5rem;\n  color: #a5a8be;\n"]))),
        Object(u.e)(d.V)(Pe || (Pe = Object(i.a)(["\n  width: 100%;\n  flex-direction: ", ";\n"])), (function(e) {
            return e.isSmallScreen ? "column" : "row"
        }
        )),
        Object(u.e)(d.V)(Ue || (Ue = Object(i.a)(["\n  flex-direction: column;\n  width: 100%;\n  margin: 0 1rem;\n  @media (max-width: 975px) {\n    margin: 0 0;\n  }\n"]))),
        Object(u.e)("div")(qe || (qe = Object(i.a)(["\n  width: 100%;\n  margin: 1rem 0;\n  height: ", ";\n"])), (function(e) {
            return e.height
        }
        )),
        Object(u.e)(d.Tb)(Ge || (Ge = Object(i.a)(["\n  font-weight: 500;\n  font-size: 1rem;\n  line-height: 1.2rem;\n  color: ", ";\n"])), (function(e) {
            return e.isValue ? "#111651" : "#A5A8BE"
        }
        )),
        Object(u.e)("div")(We || (We = Object(i.a)(["\n  background: ", ";\n  background-position: center;\n  /* background-size: cover; */\n  min-height: 92vh;\n"])), (function(e) {
            var t = e.theme;
            return "url(images/main-background-white.svg) repeat ".concat(t.colors.backgroundImg)
        }
        )));
        t.default = function() {
            var e = Object(b.a)()
              , t = e.isMobile
              , n = e.isTablet
              , r = t || n;
            Object(c.b)().t,
            Object(s.useMediaQuery)({
                query: "(min-width: 975px)"
            });
            return Object(ce.jsxs)(tt, {
                children: [Object(ce.jsx)(Ze, {}), Object(ce.jsx)(et, {
                    children: Object(ce.jsx)(Ye, {
                        isSmallerScreen: r
                    })
                })]
            })
        }
    },
    771: function(e, t, n) {
        "use strict";
        var r = n(2)
          , i = n(18)
          , c = n(1)
          , a = n(791)
          , o = n.n(a)
          , s = n(6)
          , u = n(0)
          , d = ["value", "color", "decimals", "isDisabled", "isUnit", "unit", "prefix", "onClick"];
        t.a = function(e) {
            var t = e.value
              , n = e.color
              , a = void 0 === n ? "text" : n
              , b = e.decimals
              , l = void 0 === b ? 3 : b
              , j = e.isDisabled
              , f = void 0 !== j && j
              , O = e.isUnit
              , m = void 0 !== O && O
              , h = e.unit
              , p = e.prefix
              , g = e.onClick
              , x = Object(i.a)(e, d)
              , v = Object(c.useRef)(0);
            return Object(c.useEffect)((function() {
                v.current = t
            }
            ), [t]),
            Object(u.jsxs)(s.Tb, Object(r.a)(Object(r.a)({
                color: f ? "textDisabled" : a,
                onClick: g
            }, x), {}, {
                children: [Object(u.jsx)(o.a, {
                    start: v.current,
                    end: t || 0,
                    prefix: p,
                    suffix: h,
                    decimals: l,
                    duration: 1,
                    separator: ","
                }), m && " OREO"]
            }))
        }
    }
}]);

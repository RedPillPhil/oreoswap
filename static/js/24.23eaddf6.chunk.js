(this["webpackJsonporeoswap-frontend"] = this["webpackJsonporeoswap-frontend"] || []).push([[22], {
    1251: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "default", (function() {
            return Kt
        }
        ));
        var r, c, i, o, a = n(13), s = n(9), l = n(4), d = n(455), u = {}, b = n(29), j = n(241), p = n(1), x = n(92), h = n(10), O = n(3), f = n(6), m = n(30), g = n(126), v = n(407), y = n(24), w = n(39), T = n(37), k = n(41), P = n(0), C = O.e.div(r || (r = Object(l.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"])), (function(e) {
            return e.theme.colors.backgroundAlt
        }
        )), A = O.e.div(c || (c = Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"])), (function(e) {
            var t = e.error
              , n = e.theme;
            return t ? n.colors.failure : n.colors.background
        }
        ), (function(e) {
            return e.error ? "step-end" : "step-start"
        }
        ), (function(e) {
            return e.error ? "step-end" : "step-start"
        }
        ), (function(e) {
            return e.theme.colors.backgroundAlt
        }
        )), I = O.e.div(i || (i = Object(l.a)(["\n  flex: 1;\n  padding: 1rem;\n"]))), U = O.e.input(o || (o = Object(l.a)(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), (function(e) {
            return e.theme.colors.backgroundAlt
        }
        ), (function(e) {
            return e.error ? "step-end" : "step-start"
        }
        ), (function(e) {
            var t = e.error
              , n = e.theme;
            return t ? n.colors.failure : n.colors.primary
        }
        ), (function(e) {
            return e.theme.colors.textDisabled
        }
        ), (function(e) {
            return e.theme.colors.textDisabled
        }
        ));
        function S(e) {
            var t = e.id
              , n = e.value
              , r = e.onChange
              , c = Object(y.a)().chainId
              , i = Object(b.b)().t
              , o = Object(v.a)(n)
              , a = o.address
              , s = o.loading
              , l = o.name
              , d = Object(p.useCallback)((function(e) {
                var t = e.target.value.replace(/\s+/g, "");
                r(t)
            }
            ), [r])
              , u = Boolean(n.length > 0 && !s && !a);
            return Object(P.jsx)(C, {
                id: t,
                children: Object(P.jsx)(A, {
                    error: u,
                    children: Object(P.jsx)(I, {
                        children: Object(P.jsxs)(w.a, {
                            gap: "md",
                            children: [Object(P.jsxs)(T.b, {
                                children: [Object(P.jsx)(f.Tb, {
                                    children: i("Recipient")
                                }), a && c && Object(P.jsxs)(f.gb, {
                                    external: !0,
                                    small: !0,
                                    href: Object(k.e)(null !== l && void 0 !== l ? l : a, "address", c),
                                    children: ["(", i("View on Arbiscan"), ")"]
                                })]
                            }), Object(P.jsx)(U, {
                                className: "recipient-address-input",
                                type: "text",
                                autoComplete: "off",
                                autoCorrect: "off",
                                autoCapitalize: "off",
                                spellCheck: "false",
                                placeholder: i("Wallet Address or ENS name"),
                                error: u,
                                pattern: "^(0x[a-fA-F0-9]{40})$",
                                onChange: d,
                                value: n
                            })]
                        })
                    })
                })
            })
        }
        var E, N, D, z, F = n(190), M = n(361), L = O.e.div(E || (E = Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))), B = (Object(O.e)(L)(N || (N = Object(l.a)(["\n  width: 100%;\n  align-items: center;\n"]))),
        O.e.div(D || (D = Object(l.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  padding:  ", ";\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"])), (function(e) {
            var t = e.gap;
            return ("md" === t ? "9px 0px;" : "lg" === t && "15px 0px;") || t
        }
        ), (function(e) {
            var t = e.gap;
            return ("sm" === t ? "8px" : "md" === t && "12px") || "lg" === t && "24px" || t
        }
        ), (function(e) {
            var t = e.justify;
            return t && t
        }
        ))), R = L, W = n(2), V = n(188), H = O.e.p(z || (z = Object(l.a)(["\nleft: 37.7%;\nright: 37.7%;\ntop: 30.36%;\nbottom: 32.14%;\n\nfont-family: Plus Jakarta Display;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 16px;\nline-height: 21px;\n/* identical to box height */\n\ntext-align: center;\n\ncolor: #FFFFFF;\n\n"]))), _ = function(e) {
            var t = Object(b.b)().t
              , n = Object(V.a)()
              , r = n.login
              , c = n.logout
              , i = Object(f.sc)(r, c, t).onPresentConnectModal;
            return Object(P.jsxs)(f.t, Object(W.a)(Object(W.a)({
                height: "56px",
                width: "140px",
                paddingLeft: "15px",
                onClick: i
            }, e), {}, {
                children: [" ", Object(P.jsx)(H, {
                    children: "Unlock Wallet"
                })]
            }))
        }, q = n(18);
        function J(e) {
            return null !== e && void 0 !== e
        }
        var G, X, Y, $, K, Q, Z, ee, te, ne, re, ce = function(e) {
            return function(e, t) {
                var n = Object(p.useState)(t && t(e) ? e : void 0)
                  , r = Object(s.a)(n, 2)
                  , c = r[0]
                  , i = r[1];
                return Object(p.useEffect)((function() {
                    i((function(n) {
                        return !t || t(e) ? e : n
                    }
                    ))
                }
                ), [t, e]),
                c
            }(e, J)
        }, ie = n(40), oe = n(55), ae = n(252), se = n(152), le = n(33), de = n(45), ue = O.e.div(G || (G = Object(l.a)(["\n  position: relative;\n  padding: 1.5rem 1.87rem 1.5rem 1.87rem;\n"]))), be = O.e.div(X || (X = Object(l.a)(["\n  padding: 2px;\n\n  ", "\n"])), (function(e) {
            return e.clickable ? Object(O.d)(Y || (Y = Object(l.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]))) : null
        }
        )), je = Object(O.e)(f.Tb)($ || ($ = Object(l.a)(["\n  color: ", ";\n"])), (function(e) {
            var t = e.theme
              , n = e.severity;
            return 3 === n || 4 === n ? t.colors.failure : 2 === n ? "#FFC833" : 1 === n ? t.colors.text : t.colors.success
        }
        )), pe = O.e.button(K || (K = Object(l.a)(["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"])), (function(e) {
            return e.theme.colors.background
        }
        ), (function(e) {
            return e.theme.colors.text
        }
        ), (function(e) {
            return e.theme.colors.dropdown
        }
        ), (function(e) {
            return e.theme.colors.dropdown
        }
        )), xe = O.e.button(Q || (Q = Object(l.a)(["\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"])), (function(e) {
            return e.theme.isDark ? "#181A1B" : "#ffffff"
        }
        ), (function(e) {
            return e.theme.colors.text
        }
        ), (function(e) {
            return e.theme.colors.dropdown
        }
        ), (function(e) {
            return e.theme.colors.dropdown
        }
        )), he = (Object(O.e)(f.Tb).attrs({
            ellipsis: !0
        })(Z || (Z = Object(l.a)(["\n  width: 220px;\n"]))),
        Object(O.e)(f.Tb).attrs({
            ellipsis: !0
        })(ee || (ee = Object(l.a)(["\n  width: 121%;\n  height: 21px;\n  left: 583px;\n  top: 332px;\n\n  font-family: Plus Jakarta Display;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 21px;\n  /* identical to box height */\n\n  display: flex;\n  align-items: center;\n"])))), Oe = O.e.div(te || (te = Object(l.a)(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"])), (function(e) {
            var t = e.theme;
            return "".concat(t.colors.failure, "33")
        }
        ), (function(e) {
            return e.theme.colors.failure
        }
        )), fe = O.e.div(ne || (ne = Object(l.a)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"])), (function(e) {
            var t = e.theme;
            return "".concat(t.colors.failure, "33")
        }
        ));
        function me(e) {
            var t = e.error;
            return Object(P.jsxs)(Oe, {
                children: [Object(P.jsx)(fe, {
                    children: Object(P.jsx)(f.R, {
                        width: "24px"
                    })
                }), Object(P.jsx)("p", {
                    children: t
                })]
            })
        }
        var ge = Object(O.e)(w.a)(re || (re = Object(l.a)(["\n  background-color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"])), (function(e) {
            var t = e.theme;
            return "".concat(t.colors.warning, "33")
        }
        ));
        function ve(e) {
            var t = e.priceImpact;
            return Object(P.jsx)(je, {
                fontSize: "16px",
                fontWeight: "500",
                severity: Object(ae.d)(t),
                children: t ? t.lessThan(de.o) ? "< 0.01%" : "".concat(t.toFixed(2), "%") : "-"
            })
        }
        var ye = n(59)
          , we = Object(p.memo)((function(e) {
            var t = e.trade;
            return Object(P.jsx)(f.V, {
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "center",
                children: t.route.path.map((function(e, t, n) {
                    var r = t === n.length - 1
                      , c = Object(ye.a)(e);
                    return Object(P.jsxs)(p.Fragment, {
                        children: [Object(P.jsx)(f.V, {
                            alignItems: "end",
                            children: Object(P.jsx)(f.Tb, {
                                fontSize: "14px",
                                ml: "0.125rem",
                                mr: "0.125rem",
                                children: Object(le.a)(c.symbol)
                            })
                        }), !r && Object(P.jsx)(f.K, {
                            width: "12px"
                        })]
                    }, t)
                }
                ))
            })
        }
        ));
        function Te(e) {
            var t, n, r, c, i = e.trade, o = e.allowedSlippage, a = Object(ae.b)(i), s = a.priceImpactWithoutFee, l = a.realizedLPFee, d = i.tradeType === h.m.EXACT_INPUT, u = Object(ae.a)(i, o);
            return Object(P.jsxs)(w.a, {
                style: {
                    padding: "0 16px"
                },
                children: [Object(P.jsxs)(T.b, {
                    children: [Object(P.jsxs)(T.d, {
                        children: [Object(P.jsx)(f.Tb, {
                            fontSize: "14px",
                            color: "textSubtle",
                            children: d ? "Minimum received" : "Maximum sold"
                        }), Object(P.jsx)(se.a, {
                            text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",
                            ml: "4px"
                        })]
                    }), Object(P.jsx)(T.d, {
                        children: Object(P.jsx)(f.Tb, {
                            fontSize: "14px",
                            children: d ? null !== (t = "".concat(null === (n = u[ie.a.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4), " ").concat(Object(le.a)(i.outputAmount.currency.symbol))) && void 0 !== t ? t : "-" : null !== (r = "".concat(null === (c = u[ie.a.INPUT]) || void 0 === c ? void 0 : c.toSignificant(4), " ").concat(Object(le.a)(i.inputAmount.currency.symbol))) && void 0 !== r ? r : "-"
                        })
                    })]
                }), Object(P.jsxs)(T.b, {
                    children: [Object(P.jsxs)(T.d, {
                        children: [Object(P.jsx)(f.Tb, {
                            fontSize: "14px",
                            color: "textSubtle",
                            children: "Price Impact"
                        }), Object(P.jsx)(se.a, {
                            text: "The difference between the market price and estimated price due to trade size.",
                            ml: "4px"
                        })]
                    }), Object(P.jsx)(ve, {
                        priceImpact: s
                    })]
                }), Object(P.jsxs)(T.b, {
                    children: [Object(P.jsxs)(T.d, {
                        children: [Object(P.jsx)(f.Tb, {
                            fontSize: "14px",
                            color: "textSubtle",
                            children: "Liquidity Provider Fee"
                        }), Object(P.jsx)(se.a, {
                            text: Object(P.jsxs)(P.Fragment, {
                                children: [Object(P.jsx)(f.Tb, {
                                    mb: "12px",
                                    children: "For each trade a 0.25% fee is paid"
                                }), Object(P.jsx)(f.Tb, {
                                    children: "- 0.17% to LP token holders"
                                }), Object(P.jsx)(f.Tb, {
                                    children: "- 0.03% to the Treasury"
                                }), Object(P.jsx)(f.Tb, {
                                    children: "- 0.05% towards OREO buyback and burn"
                                })]
                            }),
                            ml: "4px"
                        })]
                    }), Object(P.jsx)(f.Tb, {
                        fontSize: "14px",
                        children: l ? "".concat(l.toSignificant(4), " ").concat(Object(le.a)(i.inputAmount.currency.symbol)) : "-"
                    })]
                })]
            })
        }
        function ke(e) {
            var t = e.trade
              , n = Object(oe.n)()
              , r = Object(s.a)(n, 1)[0]
              , c = Boolean(t && t.route.path.length > 2);
            return Object(P.jsx)(w.a, {
                gap: "0px",
                children: t && Object(P.jsxs)(P.Fragment, {
                    children: [Object(P.jsx)(Te, {
                        trade: t,
                        allowedSlippage: r
                    }), c && Object(P.jsx)(P.Fragment, {
                        children: Object(P.jsxs)(T.b, {
                            style: {
                                padding: "0 16px"
                            },
                            children: [Object(P.jsxs)("span", {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [Object(P.jsx)(f.Tb, {
                                    fontSize: "14px",
                                    color: "textSubtle",
                                    children: "Route"
                                }), Object(P.jsx)(se.a, {
                                    text: "Routing through these tokens resulted in the best price for your trade.",
                                    ml: "4px"
                                })]
                            }), Object(P.jsx)(we, {
                                trade: t
                            })]
                        })
                    })]
                })
            })
        }
        var Pe, Ce = ["trade"], Ae = O.e.div(Pe || (Pe = Object(l.a)(["\n  margin-top: ", ";\n  padding-top: 16px;\n  padding-bottom: 16px;\n  margin-right: 10px;\n  width: 100%;\n  max-width: 400px;\n  border-radius: 20px;\n  background-color: ", ";\n\n  transform: ", ";\n  transition: transform 300ms ease-in-out;\n"])), (function(e) {
            return e.show ? "16px" : 0
        }
        ), (function(e) {
            return e.theme.colors.invertedContrast
        }
        ), (function(e) {
            return e.show ? "translateY(0%)" : "translateY(-100%)"
        }
        ));
        function Ie(e) {
            var t, n = e.trade, r = Object(q.a)(e, Ce), c = ce(n);
            return Object(P.jsx)(P.Fragment, {
                children: !0 === Boolean(n) ? Object(P.jsx)(Ae, {
                    show: Boolean(n),
                    children: Object(P.jsx)(ke, Object(W.a)(Object(W.a)({}, r), {}, {
                        trade: null !== (t = null !== n && void 0 !== n ? n : c) && void 0 !== t ? t : void 0
                    }))
                }) : Object(P.jsx)(P.Fragment, {})
            })
        }
        var Ue, Se, Ee, Ne, De, ze, Fe, Me = n(360), Le = n(808), Be = (Object(O.e)(w.a)(Ue || (Ue = Object(l.a)(["\n  margin-top: 24px;\n  padding: 16px;\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n"])), (function(e) {
            return e.theme.radii.default
        }
        ), (function(e) {
            return e.theme.colors.cardBorder
        }
        ), (function(e) {
            return e.theme.colors.background
        }
        )),
        Object(O.e)(w.a)(Se || (Se = Object(l.a)(["\n  margin-top: 24px;\n"])))), Re = Object(O.e)(f.Tb)(Ee || (Ee = Object(l.a)(["\n  width: auto;\n  height: 21px;\n  left: 515px;\n  top: 574px;\n\n  font-family: Plus Jakarta Display;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 21px;\n  /* identical to box height */\n\n  display: flex;\n  align-items: center;\n\n  color: #a5a8be;\n"]))), We = (Object(O.e)(f.Tb)(Ne || (Ne = Object(l.a)(["\n  width: 83%;\n  height: 21px;\n  left: 743px;\n  top: 574px;\n  justify-content: flex-end;\n\n  font-family: Plus Jakarta Display;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 21px;\n  /* identical to box height */\n\n  display: flex;\n  align-items: center;\n  text-align: right;\n\n  color: ", ";\n"])), (function(e) {
            var t = e.theme;
            return t.isDark ? t.colors.paleWhite : "#111651"
        }
        )),
        Object(O.e)(f.Tb)(De || (De = Object(l.a)(["\n  height: 21px;\n  left: 743px;\n  top: 574px;\n  justify-content: flex-end;\n  font-family: Plus Jakarta Display;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 21px;\n  /* identical to box height */\n\n  display: flex;\n  align-items: center;\n  text-align: right;\n\n  color: ", ";\n"])), (function(e) {
            var t = e.theme;
            return t.isDark ? t.colors.paleWhite : "#111651"
        }
        ))), Ve = Object(O.e)(f.Tb)(ze || (ze = Object(l.a)(["\n  width: auto;\n  height: 21px;\n  left: 743px;\n  top: 574px;\n  justify-content: flex-end;\n\n  font-family: Plus Jakarta Display;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 21px;\n  /* identical to box height */\n\n  display: flex;\n  align-items: center;\n  text-align: right;\n\n  color: ", ";\n"])), (function(e) {
            var t = e.theme;
            return t.isDark ? t.colors.paleWhite : "#111651"
        }
        )), He = Object(O.e)(f.Tb)(Fe || (Fe = Object(l.a)(["\n  width: auto;\n  height: 21px;\n  left: 743px;\n  top: 574px;\n  justify-content: flex-end;\n  font-family: Plus Jakarta Display;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 21px;\n  /* identical to box height */\n\n  display: flex;\n  align-items: center;\n  text-align: right;\n\n  color: ", ";\n"])), (function(e) {
            var t = e.theme;
            return t.isDark ? t.colors.paleWhite : "#111651"
        }
        ));
        function _e(e) {
            var t, n, r, c, i = e.trade, o = e.onConfirm, a = e.allowedSlippage, l = e.swapErrorMessage, d = e.disabledConfirm, u = Object(p.useState)(!1), b = Object(s.a)(u, 2), j = b[0], x = b[1], O = Object(p.useMemo)((function() {
                return Object(ae.a)(i, a)
            }
            ), [a, i]), m = Object(p.useMemo)((function() {
                return Object(ae.b)(i)
            }
            ), [i]), g = m.priceImpactWithoutFee, v = m.realizedLPFee, y = Object(ae.d)(g);
            return Object(P.jsxs)(P.Fragment, {
                children: [Object(P.jsxs)(Be, {
                    children: [Object(P.jsxs)(T.b, {
                        align: "center",
                        padding: "0px 0px 20px 0px",
                        children: [Object(P.jsx)(Re, {
                            children: "Price"
                        }), Object(P.jsxs)(Ve, {
                            children: [Object(ae.c)(i, j), Object(P.jsx)(xe, {
                                onClick: function() {
                                    return x(!j)
                                },
                                children: Object(P.jsx)(f.l, {})
                            })]
                        })]
                    }), Object(P.jsxs)(T.b, {
                        padding: "0px 0px 20px 0px",
                        children: [Object(P.jsxs)(T.d, {
                            children: [Object(P.jsx)(Re, {
                                children: i.tradeType === h.m.EXACT_INPUT ? "Minimum received" : "Maximum sold"
                            }), Object(P.jsx)(se.a, {
                                text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",
                                ml: "7px",
                                color: "#A5A8BE"
                            })]
                        }), Object(P.jsxs)(T.d, {
                            children: [Object(P.jsx)(We, {
                                fontSize: "14px",
                                children: i.tradeType === h.m.EXACT_INPUT ? null !== (t = null === (n = O[ie.a.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4)) && void 0 !== t ? t : "-" : null !== (r = null === (c = O[ie.a.INPUT]) || void 0 === c ? void 0 : c.toSignificant(4)) && void 0 !== r ? r : "-"
                            }), Object(P.jsx)(We, {
                                fontSize: "14px",
                                marginLeft: "4px",
                                children: i.tradeType === h.m.EXACT_INPUT ? Object(le.a)(i.outputAmount.currency.symbol) : Object(le.a)(i.inputAmount.currency.symbol)
                            })]
                        })]
                    }), Object(P.jsxs)(T.b, {
                        padding: "0px 0px 20px 0px",
                        children: [Object(P.jsxs)(T.d, {
                            children: [Object(P.jsx)(Re, {
                                children: "Price Impact"
                            }), Object(P.jsx)(se.a, {
                                text: "The difference between the market price and your price due to trade size.",
                                ml: "7px",
                                color: "#A5A8BE"
                            })]
                        }), Object(P.jsx)(ve, {
                            priceImpact: g
                        })]
                    }), Object(P.jsxs)(T.b, {
                        padding: "0px 0px 20px 0px",
                        children: [Object(P.jsxs)(T.d, {
                            children: [Object(P.jsx)(Re, {
                                children: "Liquidity Provider Fee"
                            }), Object(P.jsx)(se.a, {
                                text: Object(P.jsxs)(P.Fragment, {
                                    children: [Object(P.jsx)(f.Tb, {
                                        mb: "12px",
                                        children: "For each trade a 0.25% fee is paid"
                                    }), Object(P.jsx)(f.Tb, {
                                        children: "- 0.17% to LP token holders"
                                    }), Object(P.jsx)(f.Tb, {
                                        children: "- 0.03% to the Treasury"
                                    }), Object(P.jsx)(f.Tb, {
                                        children: "- 0.05% towards OREO buyback and burn"
                                    })]
                                }),
                                ml: "7px",
                                color: "#A5A8BE"
                            })]
                        }), Object(P.jsx)(He, {
                            children: v ? "".concat(null === v || void 0 === v ? void 0 : v.toSignificant(6), " ").concat(Object(le.a)(i.inputAmount.currency.symbol)) : "-"
                        })]
                    })]
                }), Object(P.jsxs)(T.a, {
                    children: [Object(P.jsx)(Le.a, {
                        variant: y > 2 ? "danger" : "primary",
                        onClick: o,
                        disabled: d,
                        mt: "12px",
                        id: "confirm-swap-or-send",
                        width: "100%",
                        children: y > 2 ? "Swap Anyway" : "Confirm Swap"
                    }), l ? Object(P.jsx)(me, {
                        error: l
                    }) : null]
                })]
            })
        }
        var qe, Je, Ge, Xe, Ye = n(58), $e = Object(O.e)(f.Tb)(qe || (qe = Object(l.a)(["\n  width: 80px;\n  height: 21px;\n  left: 869px;\n  top: 332px;\n  padding-right: 10px;\n  font-family: Plus Jakarta Display;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 21px;\n  /* identical to box height */\n\n  display: flex;\n  align-items: center;\n  text-align: right;\n\n  color: ", ";\n"])), (function(e) {
            var t = e.theme;
            return t.isDark ? t.colors.paleWhite : "#111651"
        }
        )), Ke = Object(O.e)(f.Tb)(Je || (Je = Object(l.a)(["\n  font-family: Plus Jakarta Display;\n  font-style: italic;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 25px;\n  /* or 156% */\n\n  color: #a5a8be;\n"]))), Qe = O.e.b(Ge || (Ge = Object(l.a)(["\n  color: #3889eb;\n"]))), Ze = O.e.div(Xe || (Xe = Object(l.a)(["\n  position: relative;\n"])));
        function et(e) {
            var t, n, r = e.trade, c = e.allowedSlippage, i = e.recipient, o = e.showAcceptChanges, a = e.onAcceptChanges, s = Object(p.useMemo)((function() {
                return Object(ae.a)(r, c)
            }
            ), [r, c]), l = Object(f.nc)(), d = (l.isMobile,
            l.isTablet,
            Object(p.useMemo)((function() {
                return Object(ae.b)(r)
            }
            ), [r]).priceImpactWithoutFee), u = Object(ae.d)(d);
            return Object(P.jsx)(w.a, {
                gap: "md",
                children: Object(P.jsxs)(Ze, {
                    children: [Object(P.jsx)(T.b, {
                        align: "flex-end",
                        children: Object(P.jsxs)(T.c, {
                            style: {
                                width: "100%"
                            },
                            children: [Object(P.jsx)(Ye.a, {
                                currency: r.inputAmount.currency,
                                size: "24px",
                                style: {
                                    marginRight: "12px",
                                    marginLeft: "20px"
                                }
                            }), Object(P.jsx)(he, {
                                fontSize: "24px",
                                color: o && r.tradeType === h.m.EXACT_OUTPUT ? "primary" : "text",
                                children: r.inputAmount.toSignificant(6)
                            }), Object(P.jsx)($e, {
                                children: Object(le.a)(r.inputAmount.currency.symbol)
                            })]
                        })
                    }), Object(P.jsx)(T.b, {
                        align: "flex-end",
                        children: Object(P.jsxs)(T.c, {
                            style: {
                                width: "100%"
                            },
                            children: [Object(P.jsx)(Ye.a, {
                                currency: r.outputAmount.currency,
                                size: "24px",
                                style: {
                                    marginRight: "12px",
                                    marginLeft: "20px"
                                }
                            }), Object(P.jsx)(he, {
                                fontSize: "24px",
                                color: u > 2 ? "failure" : o && r.tradeType === h.m.EXACT_INPUT ? "primary" : "text",
                                children: r.outputAmount.toSignificant(6)
                            }), Object(P.jsx)($e, {
                                children: Object(le.a)(r.outputAmount.currency.symbol)
                            })]
                        })
                    }), o ? Object(P.jsx)(ge, {
                        justify: "flex-start",
                        gap: "0px",
                        children: Object(P.jsxs)(T.b, {
                            children: [Object(P.jsxs)(T.d, {
                                children: [Object(P.jsx)(f.R, {
                                    mr: "8px"
                                }), Object(P.jsx)(f.Tb, {
                                    bold: !0,
                                    children: " Price Updated"
                                })]
                            }), Object(P.jsx)(f.t, {
                                onClick: a,
                                children: "Accept"
                            })]
                        })
                    }) : null, Object(P.jsx)(w.a, {
                        justify: "flex-start",
                        gap: "sm",
                        children: r.tradeType === h.m.EXACT_INPUT ? Object(P.jsxs)(Ke, {
                            children: ["Output is estimated. You will receive at least ", Object(P.jsxs)(Qe, {
                                children: [null === (t = s[ie.a.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(6), " ", Object(le.a)(r.outputAmount.currency.symbol)]
                            }), " or the transaction will revert."]
                        }) : Object(P.jsxs)(Ke, {
                            children: ["Input is estimated. You will sell at most ", Object(P.jsxs)(Qe, {
                                children: [null === (n = s[ie.a.INPUT]) || void 0 === n ? void 0 : n.toSignificant(6), " ", Object(le.a)(r.inputAmount.currency.symbol)]
                            }), " or the transaction will revert."]
                        })
                    }), null !== i ? Object(P.jsx)(w.a, {
                        justify: "flex-start",
                        gap: "sm",
                        style: {
                            padding: "12px 0 0 0px"
                        },
                        children: Object(P.jsxs)(f.Tb, {
                            color: "textSubtle",
                            children: ["Output will be sent to", " ", Object(P.jsx)("b", {
                                title: i,
                                children: Object(k.h)(i) ? Object(k.i)(i) : i
                            })]
                        })
                    }) : null]
                })
            })
        }
        var tt, nt, rt, ct, it = function(e) {
            var t, n, r, c, i, o, a, s, l, d, u = e.trade, j = e.originalTrade, x = e.onAcceptChanges, O = e.allowedSlippage, f = e.onConfirm, m = e.onDismiss, g = e.customOnDismiss, v = e.recipient, y = e.swapErrorMessage, w = e.attemptingTxn, T = e.txHash, k = Object(p.useMemo)((function() {
                return Boolean(u && j && (t = j,
                (e = u).tradeType !== t.tradeType || !Object(h.o)(e.inputAmount.currency, t.inputAmount.currency) || !e.inputAmount.equalTo(t.inputAmount) || !Object(h.o)(e.outputAmount.currency, t.outputAmount.currency) || !e.outputAmount.equalTo(t.outputAmount)));
                var e, t
            }
            ), [j, u]), C = Object(b.b)().t, A = Object(p.useCallback)((function() {
                return u ? Object(P.jsx)(et, {
                    trade: u,
                    allowedSlippage: O,
                    recipient: v,
                    showAcceptChanges: k,
                    onAcceptChanges: x
                }) : null
            }
            ), [O, x, v, k, u]), I = Object(p.useCallback)((function() {
                return u ? Object(P.jsx)(_e, {
                    onConfirm: f,
                    trade: u,
                    disabledConfirm: k,
                    swapErrorMessage: y,
                    allowedSlippage: O
                }) : null
            }
            ), [O, f, k, y, u]), U = C("Swapping %amountA% %symbolA% for %amountB% %symbolB%", {
                amountA: null !== (t = null === u || void 0 === u || null === (n = u.inputAmount) || void 0 === n ? void 0 : n.toSignificant(6)) && void 0 !== t ? t : "",
                symbolA: null !== (r = Object(le.a)(null === u || void 0 === u || null === (c = u.inputAmount) || void 0 === c || null === (i = c.currency) || void 0 === i ? void 0 : i.symbol)) && void 0 !== r ? r : "",
                amountB: null !== (o = null === u || void 0 === u || null === (a = u.outputAmount) || void 0 === a ? void 0 : a.toSignificant(6)) && void 0 !== o ? o : "",
                symbolB: null !== (s = Object(le.a)(null === u || void 0 === u || null === (l = u.outputAmount) || void 0 === l || null === (d = l.currency) || void 0 === d ? void 0 : d.symbol)) && void 0 !== s ? s : ""
            }), S = Object(p.useCallback)((function() {
                return y ? Object(P.jsx)(Me.b, {
                    onDismiss: m,
                    message: y
                }) : Object(P.jsx)(Me.a, {
                    topContent: A,
                    bottomContent: I
                })
            }
            ), [m, I, A, y]);
            return Object(P.jsx)(Me.c, {
                title: y ? "Error" : C("Confirm Swap"),
                onDismiss: m,
                customOnDismiss: g,
                attemptingTxn: w,
                hash: T,
                content: S,
                pendingText: U,
                currencyToAdd: null === u || void 0 === u ? void 0 : u.outputAmount.currency
            })
        }, ot = n(456), at = function(e) {
            var t = e.tokens
              , n = e.onDismiss
              , r = e.onCancel;
            return Object(P.jsx)(f.nb, {
                title: "Import Token",
                onDismiss: function() {
                    n && n(),
                    r()
                },
                style: {
                    maxWidth: "420px"
                },
                children: Object(P.jsx)(ot.a, {
                    tokens: t,
                    handleCurrencySelect: n
                })
            })
        }, st = ["steps", "disabled"], lt = Object(O.e)(T.b)(tt || (tt = Object(l.a)(["\n  width: 50%;\n"]))), dt = O.e.div(nt || (nt = Object(l.a)(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n"])), (function(e) {
            var t = e.theme
              , n = e.confirmed;
            return e.disabled ? t.colors.backgroundDisabled : n ? t.colors.success : t.colors.primary
        }
        )), ut = O.e.div(rt || (rt = Object(l.a)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]))), bt = O.e.div(ct || (ct = Object(l.a)(["\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(\n    90deg,\n    ", "\n      0%,\n    ", "\n      80%\n  );\n  opacity: 0.6;\n"])), (function(e) {
            var t = e.theme
              , n = e.prevConfirmed;
            return e.disabled ? t.colors.backgroundDisabled : n ? t.colors.success : t.colors.primary
        }
        ), (function(e) {
            var t = e.theme
              , n = e.prevConfirmed;
            return e.disabled ? t.colors.backgroundDisabled : n ? t.colors.primary : t.colors.backgroundDisabled
        }
        ));
        function jt(e) {
            var t = e.steps
              , n = e.disabled
              , r = void 0 !== n && n
              , c = Object(q.a)(e, st);
            return Object(P.jsx)(w.a, Object(W.a)(Object(W.a)({
                justify: "center"
            }, c), {}, {
                children: Object(P.jsxs)(lt, {
                    children: [t.map((function(e, n) {
                        return Object(P.jsxs)(ut, {
                            children: [Object(P.jsx)(dt, {
                                confirmed: e,
                                disabled: r || !t[n - 1] && 0 !== n,
                                children: e ? "\u2713" : n + 1
                            }), Object(P.jsx)(bt, {
                                prevConfirmed: e,
                                disabled: r
                            })]
                        }, n)
                    }
                    )), Object(P.jsx)(dt, {
                        disabled: r || !t[t.length - 1],
                        children: t.length + 1
                    })]
                })
            }))
        }
        function pt(e) {
            var t, n, r, c, i, o = e.price, a = e.showInverted, s = e.setShowInverted, l = a ? null === o || void 0 === o ? void 0 : o.toSignificant(6) : null === o || void 0 === o || null === (t = o.invert()) || void 0 === t ? void 0 : t.toSignificant(6), d = Boolean((null === o || void 0 === o ? void 0 : o.baseCurrency) && (null === o || void 0 === o ? void 0 : o.quoteCurrency)), u = a ? "".concat(Object(le.a)(null === o || void 0 === o || null === (n = o.quoteCurrency) || void 0 === n ? void 0 : n.symbol), " per ").concat(Object(le.a)(null === o || void 0 === o || null === (r = o.baseCurrency) || void 0 === r ? void 0 : r.symbol)) : "".concat(Object(le.a)(null === o || void 0 === o || null === (c = o.baseCurrency) || void 0 === c ? void 0 : c.symbol), " per ").concat(Object(le.a)(null === o || void 0 === o || null === (i = o.quoteCurrency) || void 0 === i ? void 0 : i.symbol));
            return Object(P.jsx)(f.Tb, {
                style: {
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex"
                },
                children: d ? Object(P.jsxs)(P.Fragment, {
                    children: [null !== l && void 0 !== l ? l : "-", " ", u, Object(P.jsx)(pe, {
                        onClick: function() {
                            return s(!a)
                        },
                        children: Object(P.jsx)(f.l, {
                            width: "14px"
                        })
                    })]
                }) : "-"
            })
        }
        var xt, ht, Ot = ["size", "stroke"], ft = Object(O.f)(xt || (xt = Object(l.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))), mt = O.e.svg(ht || (ht = Object(l.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"])), ft, (function(e) {
            return e.size
        }
        ), (function(e) {
            return e.size
        }
        ), (function(e) {
            var t = e.stroke
              , n = e.theme;
            return null !== t && void 0 !== t ? t : n.colors.primary
        }
        ));
        function gt(e) {
            var t = e.size
              , n = void 0 === t ? "16px" : t
              , r = e.stroke
              , c = Object(q.a)(e, Ot);
            return Object(P.jsx)(mt, Object(W.a)(Object(W.a)({
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                size: n,
                stroke: r
            }, c), {}, {
                children: Object(P.jsx)("path", {
                    d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            }))
        }
        var vt, yt = n(63), wt = n(100), Tt = n(5), kt = n(36), Pt = n(17), Ct = n(146), At = n(195), It = n(408);
        function Ut(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : de.m
              , n = arguments.length > 2 ? arguments[2] : void 0
              , r = Object(y.a)()
              , c = r.account
              , i = r.chainId
              , o = r.library
              , a = Object(v.a)(n)
              , s = a.address
              , l = null === n ? c : s
              , d = Object(It.a)();
            return Object(p.useMemo)((function() {
                if (!e || !l || !o || !c || !i || !d)
                    return [];
                var n = Object(k.g)(i, o, c);
                if (!n)
                    return [];
                var r = [];
                return r.push(h.i.swapCallParameters(e, {
                    feeOnTransfer: !1,
                    allowedSlippage: new h.g(h.e.BigInt(t),de.i),
                    recipient: l,
                    deadline: d.toNumber()
                })),
                e.tradeType === h.m.EXACT_INPUT && r.push(h.i.swapCallParameters(e, {
                    feeOnTransfer: !0,
                    allowedSlippage: new h.g(h.e.BigInt(t),de.i),
                    recipient: l,
                    deadline: d.toNumber()
                })),
                r.map((function(e) {
                    return {
                        parameters: e,
                        contract: n
                    }
                }
                ))
            }
            ), [c, t, i, d, o, l, e])
        }
        !function(e) {
            e[e.INVALID = 0] = "INVALID",
            e[e.LOADING = 1] = "LOADING",
            e[e.VALID = 2] = "VALID"
        }(vt || (vt = {}));
        var St, Et = n(233), Nt = n(101), Dt = n(66), zt = n(382);
        !function(e) {
            e[e.NOT_APPLICABLE = 0] = "NOT_APPLICABLE",
            e[e.WRAP = 1] = "WRAP",
            e[e.UNWRAP = 2] = "UNWRAP"
        }(St || (St = {}));
        var Ft = {
            wrapType: St.NOT_APPLICABLE
        };
        var Mt, Lt, Bt, Rt = n(459), Wt = n(257), Vt = n(44), Ht = function() {
            var e = Object(b.b)().t;
            return Object(P.jsxs)(P.Fragment, {
                children: [Object(P.jsxs)(f.Tb, {
                    children: [e("To trade SAFEMOON, you must:"), " "]
                }), Object(P.jsxs)(f.Tb, {
                    children: ["\u2022 ", e("Click on the settings icon")]
                }), Object(P.jsxs)(f.Tb, {
                    mb: "24px",
                    children: ["\u2022 ", e("Set your slippage tolerance to 12%+")]
                }), Object(P.jsx)(f.Tb, {
                    children: e("This is because SafeMoon taxes a 10% fee on each transaction:")
                }), Object(P.jsxs)(f.Tb, {
                    children: ["\u2022 ", e("5% fee = redistributed to all existing holders")]
                }), Object(P.jsxs)(f.Tb, {
                    children: ["\u2022 ", e("5% fee = used to add liquidity")]
                })]
            })
        }, _t = function() {
            var e = Object(b.b)().t;
            return Object(P.jsx)(f.Tb, {
                children: e("Warning: BONDLY has been compromised. Please remove liqudity until further notice.")
            })
        }, qt = function(e) {
            var t = e.handleContinueClick
              , n = Object(b.b)().t
              , r = Object(p.useState)(!1)
              , c = Object(s.a)(r, 2)
              , i = c[0]
              , o = c[1];
            return Object(P.jsx)(P.Fragment, {
                children: Object(P.jsxs)(f.V, {
                    justifyContent: "space-between",
                    children: [Object(P.jsxs)(f.V, {
                        alignItems: "center",
                        children: [Object(P.jsx)(f.F, {
                            name: "confirmed",
                            type: "checkbox",
                            checked: i,
                            onChange: function() {
                                return o(!i)
                            },
                            scale: "sm"
                        }), Object(P.jsx)(f.Tb, {
                            ml: "10px",
                            style: {
                                userSelect: "none"
                            },
                            children: n("I understand")
                        })]
                    }), Object(P.jsx)(f.t, {
                        disabled: !i,
                        onClick: t,
                        children: n("Continue")
                    })]
                })
            })
        }, Jt = Object(O.e)(f.sb)(Mt || (Mt = Object(l.a)(["\n  max-width: 440px;\n"]))), Gt = Object(O.e)(f.lb)(Lt || (Lt = Object(l.a)(["\n  align-items: flex-start;\n  justify-content: flex-start;\n"]))), Xt = function(e) {
            var t, n = e.swapCurrency, r = e.onDismiss, c = Object(b.b)().t, i = Object(Vt.a)().theme;
            Object(p.useEffect)((function() {
                var e = function(e) {
                    return e.stopPropagation(),
                    e.preventDefault(),
                    !1
                };
                return document.querySelectorAll('[role="presentation"]').forEach((function(t) {
                    t.addEventListener("click", e, !0)
                }
                )),
                function() {
                    document.querySelectorAll('[role="presentation"]').forEach((function(t) {
                        t.removeEventListener("click", e, !0)
                    }
                    ))
                }
            }
            ), []);
            var o = (t = {},
            Object(a.a)(t, Object(m.b)(u.safemoon.address), {
                symbol: u.safemoon.symbol,
                component: Object(P.jsx)(Ht, {})
            }),
            Object(a.a)(t, Object(m.b)(u.bondly.address), {
                symbol: u.bondly.symbol,
                component: Object(P.jsx)(_t, {})
            }),
            t)[n.address];
            return Object(P.jsxs)(Jt, {
                minWidth: "280px",
                children: [Object(P.jsx)(f.ub, {
                    background: i.colors.gradients.cardHeader,
                    children: Object(P.jsx)(f.X, {
                        p: "12px 24px",
                        children: c("Notice for trading %symbol%", {
                            symbol: o.symbol
                        })
                    })
                }), Object(P.jsxs)(f.pb, {
                    p: "24px",
                    children: [Object(P.jsx)(Gt, {
                        variant: "warning",
                        mb: "24px",
                        children: Object(P.jsx)(f.r, {
                            children: o.component
                        })
                    }), Object(P.jsx)(qt, {
                        handleContinueClick: r
                    })]
                })]
            })
        }, Yt = n(28), $t = Object(O.e)(f.Tb)(Bt || (Bt = Object(l.a)(["\n  font-size: 12px;\n  font-weight: bold;\n  color: ", ";\n"])), (function(e) {
            return e.theme.colors.secondary
        }
        ));
        function Kt(e) {
            var t, n, r, c, i, o, l, O, w, C, A, I, U, E, N, D, z, L = e.history, V = Object(Et.b)(), H = Object(x.useMediaQuery)({
                query: "(min-width: 975px)"
            }), q = Object(b.b)().t, J = [Object(yt.c)(null === V || void 0 === V ? void 0 : V.inputCurrencyId), Object(yt.c)(null === V || void 0 === V ? void 0 : V.outputCurrencyId)], G = J[0], X = J[1], Y = Object(p.useMemo)((function() {
                var e, t;
                return null !== (e = null === (t = [G, X]) || void 0 === t ? void 0 : t.filter((function(e) {
                    return e instanceof h.j
                }
                ))) && void 0 !== e ? e : []
            }
            ), [G, X]), $ = Object(yt.b)(), K = Y && Y.filter((function(e) {
                return !(e.address in $)
            }
            )), Q = Object(y.a)().account, Z = Object(oe.d)(), ee = Object(s.a)(Z, 1)[0], te = Object(oe.n)(), ne = Object(s.a)(te, 1)[0], re = Object(Vt.a)(), ce = re.isDark, se = re.theme, je = Object(Et.e)(), pe = je.independentField, xe = je.typedValue, he = je.recipient, Oe = Object(Et.c)(), fe = Oe.v2Trade, ge = Oe.currencyBalances, ve = Oe.parsedAmount, ye = Oe.currencies, we = Oe.inputError, Te = function(e, t, n) {
                var r = Object(y.a)()
                  , c = r.chainId
                  , i = r.account
                  , o = Object(zt.a)().callWithGasPrice
                  , a = Object(Dt.w)()
                  , s = Object(Nt.b)(null !== i && void 0 !== i ? i : void 0, e)
                  , l = Object(p.useMemo)((function() {
                    return Object(Et.a)(n, e)
                }
                ), [e, n])
                  , d = Object(Ct.d)();
                return Object(p.useMemo)((function() {
                    if (!a || !c || !e || !t)
                        return Ft;
                    var n = l && s && !s.lessThan(l);
                    return e === h.d && Object(h.o)(h.n[c], t) ? {
                        wrapType: St.WRAP,
                        execute: n && l ? Object(Pt.a)(Object(Tt.a)().mark((function e() {
                            var t;
                            return Object(Tt.a)().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        e.next = 3,
                                        o(a, "deposit", void 0, {
                                            value: "0x".concat(l.raw.toString(16))
                                        });
                                    case 3:
                                        t = e.sent,
                                        d(t, {
                                            summary: "Wrap ".concat(l.toSignificant(6), " ETH to WETH")
                                        }),
                                        e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7,
                                        e.t0 = e.catch(0),
                                        console.error("Could not deposit", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, 7]])
                        }
                        ))) : void 0,
                        inputError: n ? void 0 : "Insufficient ETH balance"
                    } : Object(h.o)(h.n[c], e) && t === h.d ? {
                        wrapType: St.UNWRAP,
                        execute: n && l ? Object(Pt.a)(Object(Tt.a)().mark((function e() {
                            var t;
                            return Object(Tt.a)().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        e.next = 3,
                                        o(a, "withdraw", ["0x".concat(l.raw.toString(16))]);
                                    case 3:
                                        t = e.sent,
                                        d(t, {
                                            summary: "Unwrap ".concat(l.toSignificant(6), " WETH to ETH")
                                        }),
                                        e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7,
                                        e.t0 = e.catch(0),
                                        console.error("Could not withdraw", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, 7]])
                        }
                        ))) : void 0,
                        inputError: n ? void 0 : "Insufficient WETH balance"
                    } : Ft
                }
                ), [a, c, e, t, l, s, d, o])
            }(ye[ie.a.INPUT], ye[ie.a.OUTPUT], xe), ke = Te.wrapType, Pe = Te.execute, Ce = Te.inputError, Ae = ke !== St.NOT_APPLICABLE, Ue = Ae ? void 0 : fe, Se = Ae ? (t = {},
            Object(a.a)(t, ie.a.INPUT, ve),
            Object(a.a)(t, ie.a.OUTPUT, ve),
            t) : (n = {},
            Object(a.a)(n, ie.a.INPUT, pe === ie.a.INPUT ? ve : null === Ue || void 0 === Ue ? void 0 : Ue.inputAmount),
            Object(a.a)(n, ie.a.OUTPUT, pe === ie.a.OUTPUT ? ve : null === Ue || void 0 === Ue ? void 0 : Ue.outputAmount),
            n), Ee = Object(Et.d)(), Ne = Ee.onSwitchTokens, De = Ee.onCurrencySelection, ze = Ee.onUserInput, Fe = Ee.onChangeRecipient, Me = !we, Le = pe === ie.a.INPUT ? ie.a.OUTPUT : ie.a.INPUT, Be = Object(p.useCallback)((function(e) {
                ze(ie.a.INPUT, e)
            }
            ), [ze]), Re = Object(p.useCallback)((function(e) {
                ze(ie.a.OUTPUT, e)
            }
            ), [ze]), We = Object(p.useState)({
                tradeToConfirm: void 0,
                attemptingTxn: !1,
                swapErrorMessage: void 0,
                txHash: void 0
            }), Ve = Object(s.a)(We, 2), He = Ve[0], _e = He.tradeToConfirm, qe = He.swapErrorMessage, Je = He.attemptingTxn, Ge = He.txHash, Xe = Ve[1], Ye = (l = {},
            Object(a.a)(l, pe, xe),
            Object(a.a)(l, Le, Ae ? null !== (r = null === (c = Se[pe]) || void 0 === c ? void 0 : c.toExact()) && void 0 !== r ? r : "" : null !== (i = null === (o = Se[Le]) || void 0 === o ? void 0 : o.toSignificant(6)) && void 0 !== i ? i : ""),
            l), $e = null === Ue || void 0 === Ue ? void 0 : Ue.route, Ke = Boolean(ye[ie.a.INPUT] && ye[ie.a.OUTPUT] && (null === (O = Se[pe]) || void 0 === O ? void 0 : O.greaterThan(h.e.BigInt(0)))), Qe = !$e, Ze = Object(wt.c)(Ue, ne), et = Object(s.a)(Ze, 2), tt = et[0], nt = et[1], rt = Object(p.useState)(!1), ct = Object(s.a)(rt, 2), ot = ct[0], st = ct[1];
            Object(p.useEffect)((function() {
                tt === wt.a.PENDING && st(!0)
            }
            ), [tt, ot]);
            var lt = Object(Rt.a)(ge[ie.a.INPUT])
              , dt = Boolean(lt && (null === (w = Se[ie.a.INPUT]) || void 0 === w ? void 0 : w.equalTo(lt)))
              , ut = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : de.m
                  , n = arguments.length > 2 ? arguments[2] : void 0
                  , r = Object(y.a)()
                  , c = r.account
                  , i = r.chainId
                  , o = r.library
                  , a = Object(oe.e)()
                  , s = Ut(e, t, n)
                  , l = Object(Ct.d)()
                  , d = Object(v.a)(n).address
                  , u = null === n ? c : d;
                return Object(p.useMemo)((function() {
                    return e && o && c && i ? u ? {
                        state: vt.VALID,
                        callback: function() {
                            var t = Object(Pt.a)(Object(Tt.a)().mark((function t() {
                                var r, i, o, d, b, j, p, x, h, O;
                                return Object(Tt.a)().wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                            Promise.all(s.map((function(e) {
                                                var t, n = e.parameters, r = n.methodName, c = n.args, i = n.value, o = e.contract, a = !i || Object(At.a)(i) ? {} : {
                                                    value: i
                                                };
                                                return (t = o.estimateGas)[r].apply(t, Object(kt.a)(c).concat([a])).then((function(t) {
                                                    return {
                                                        call: e,
                                                        gasEstimate: t
                                                    }
                                                }
                                                )).catch((function(t) {
                                                    var n;
                                                    return console.error("Gas estimate failed, trying eth_call to extract error", e),
                                                    (n = o.callStatic)[r].apply(n, Object(kt.a)(c).concat([a])).then((function(n) {
                                                        return console.error("Unexpected successful call after failed estimate gas", e, t, n),
                                                        {
                                                            call: e,
                                                            error: new Error("Unexpected issue with estimating the gas. Please try again.")
                                                        }
                                                    }
                                                    )).catch((function(t) {
                                                        var n;
                                                        console.error("Call threw error", e, t);
                                                        var r = t.reason || (null === (n = t.data) || void 0 === n ? void 0 : n.message) || t.message
                                                          , c = "The transaction cannot succeed due to error: ".concat(null !== r && void 0 !== r ? r : "Unknown error, check the logs", ".");
                                                        return {
                                                            call: e,
                                                            error: new Error(c)
                                                        }
                                                    }
                                                    ))
                                                }
                                                ))
                                            }
                                            )));
                                        case 2:
                                            if (r = t.sent,
                                            i = r.find((function(e, t, n) {
                                                return "gasEstimate"in e && (t === n.length - 1 || "gasEstimate"in n[t + 1])
                                            }
                                            ))) {
                                                t.next = 9;
                                                break
                                            }
                                            if (!((o = r.filter((function(e) {
                                                return "error"in e
                                            }
                                            ))).length > 0)) {
                                                t.next = 8;
                                                break
                                            }
                                            throw o[o.length - 1].error;
                                        case 8:
                                            throw new Error("Unexpected error. Please contact support: none of the calls threw an error");
                                        case 9:
                                            return d = i.call,
                                            b = d.contract,
                                            j = d.parameters,
                                            p = j.methodName,
                                            x = j.args,
                                            h = j.value,
                                            O = i.gasEstimate,
                                            t.abrupt("return", b[p].apply(b, Object(kt.a)(x).concat([Object(W.a)({
                                                gasLimit: Object(k.b)(O),
                                                gasPrice: a
                                            }, h && !Object(At.a)(h) ? {
                                                value: h,
                                                from: c
                                            } : {
                                                from: c
                                            })])).then((function(t) {
                                                var r = e.inputAmount.currency.symbol
                                                  , i = e.outputAmount.currency.symbol
                                                  , o = e.inputAmount.toSignificant(3)
                                                  , a = e.outputAmount.toSignificant(3)
                                                  , s = "Swap ".concat(o, " ").concat(Object(le.a)(r), " for ").concat(a, " ").concat(Object(le.a)(i))
                                                  , d = u === c ? s : "".concat(s, " to ").concat(n && Object(k.h)(n) ? Object(k.i)(n) : n);
                                                return l(t, {
                                                    summary: d
                                                }),
                                                t.hash
                                            }
                                            )).catch((function(e) {
                                                throw 4001 === (null === e || void 0 === e ? void 0 : e.code) ? new Error("Transaction rejected.") : (console.error("Swap failed", e, p, x, h),
                                                new Error("Swap failed: ".concat(e.message)))
                                            }
                                            )));
                                        case 11:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t)
                            }
                            )));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        error: null
                    } : null !== n ? {
                        state: vt.INVALID,
                        callback: null,
                        error: "Invalid recipient"
                    } : {
                        state: vt.LOADING,
                        callback: null,
                        error: null
                    } : {
                        state: vt.INVALID,
                        callback: null,
                        error: "Missing dependencies"
                    }
                }
                ), [e, o, c, i, u, n, s, l, a])
            }(Ue, ne, he)
              , bt = ut.callback
              , xt = ut.error
              , ht = Object(ae.b)(Ue).priceImpactWithoutFee
              , Ot = Object(oe.m)()
              , ft = Object(s.a)(Ot, 1)[0]
              , mt = Object(p.useCallback)((function() {
                ht && !function(e) {
                    return e.lessThan(de.r) ? !!e.lessThan(de.b) || window.confirm("This swap has a price impact of at least ".concat(de.b.toFixed(0), "%. Please confirm that you would like to continue with this swap.")) : "confirm" === window.prompt("This swap has a price impact of at least ".concat(de.r.toFixed(0), '%. Please type the word "confirm" to continue with this swap.'))
                }(ht) || bt && (Xe({
                    attemptingTxn: !0,
                    tradeToConfirm: _e,
                    swapErrorMessage: void 0,
                    txHash: void 0
                }),
                bt().then((function(e) {
                    Xe({
                        attemptingTxn: !1,
                        tradeToConfirm: _e,
                        swapErrorMessage: void 0,
                        txHash: e
                    })
                }
                )).catch((function(e) {
                    var t = !1;
                    "INSUFFICIENT_OUTPUT_AMOUNT." == e.message.split("::").at(-1) && (t = "Insufficient output amount. Please set a higher slippage in settings."),
                    Xe({
                        attemptingTxn: !1,
                        tradeToConfirm: _e,
                        swapErrorMessage: t || e.message,
                        txHash: void 0
                    })
                }
                )))
            }
            ), [ht, bt, _e])
              , It = Object(p.useState)(!1)
              , Mt = Object(s.a)(It, 2)
              , Lt = Mt[0]
              , Bt = Mt[1]
              , Ht = Object(ae.d)(ht)
              , _t = !we && (tt === wt.a.NOT_APPROVED || tt === wt.a.PENDING || ot && tt === wt.a.APPROVED) && !(Ht > 3 && !ee)
              , qt = Object(p.useCallback)((function() {
                Xe({
                    tradeToConfirm: _e,
                    attemptingTxn: Je,
                    swapErrorMessage: qe,
                    txHash: Ge
                }),
                Ge && ze(ie.a.INPUT, "")
            }
            ), [Je, ze, qe, _e, Ge, De, G])
              , Jt = Object(p.useCallback)((function() {
                Xe({
                    tradeToConfirm: Ue,
                    swapErrorMessage: qe,
                    txHash: Ge,
                    attemptingTxn: Je
                })
            }
            ), [Je, qe, Ue, Ge])
              , Gt = Object(p.useState)(null)
              , Kt = Object(s.a)(Gt, 2)
              , Qt = Kt[0]
              , Zt = Kt[1]
              , en = Object(f.oc)(Object(P.jsx)(Xt, {
                swapCurrency: Qt
            }))
              , tn = Object(s.a)(en, 1)[0]
              , nn = function(e) {
                var t = Object.entries(u).find((function(t) {
                    var n = t[1]
                      , r = Object(m.b)(n.address);
                    return e.address === r
                }
                ));
                return Boolean(t)
            };
            Object(p.useEffect)((function() {
                Qt && tn()
            }
            ), [Qt]);
            var rn = Object(p.useCallback)((function(e) {
                st(!1),
                De(ie.a.INPUT, e);
                var t = nn(e);
                Zt(t ? e : null)
            }
            ), [De])
              , cn = Object(p.useCallback)((function() {
                lt && ze(ie.a.INPUT, lt.toExact())
            }
            ), [lt, ze])
              , on = Object(p.useCallback)((function(e) {
                De(ie.a.OUTPUT, e);
                var t = nn(e);
                Zt(t ? e : null)
            }
            ), [De])
              , an = Object(j.a)(null === ye || void 0 === ye ? void 0 : ye.INPUT, null === ye || void 0 === ye ? void 0 : ye.OUTPUT)
              , sn = Object(f.oc)(Object(P.jsx)(at, {
                tokens: K,
                onCancel: function() {
                    return L.push("/swap/")
                }
            }))
              , ln = Object(s.a)(sn, 1)[0];
            Object(p.useEffect)((function() {
                K.length > 0 && ln()
            }
            ), [K.length]);
            var dn = Object(f.oc)(Object(P.jsx)(it, {
                trade: Ue,
                originalTrade: _e,
                onAcceptChanges: Jt,
                attemptingTxn: Je,
                txHash: Ge,
                recipient: he,
                allowedSlippage: ne,
                onConfirm: mt,
                swapErrorMessage: qe,
                customOnDismiss: qt
            }), !0, !0, "confirmSwapModal")
              , un = Object(s.a)(dn, 1)[0]
              , bn = function(e) {
                var t = Object.values(Yt.d).find((function(t) {
                    return t.symbol === e
                }
                ));
                return !!t && (t.address ? Object(m.b)(t.address) : Yt.c.address)
            };
            return Object(P.jsxs)(Wt.a, {
                children: [Object(P.jsxs)("div", {
                    style: H ? {
                        display: "grid",
                        gridTemplateColumns: "1fr 2fr",
                        gridGap: "20px",
                        width: "100%"
                    } : {
                        width: "100%"
                    },
                    children: [Object(P.jsxs)("div", {
                        style: {
                            width: "100%"
                        },
                        children: [Object(P.jsxs)(F.a, {
                            width: "100%",
                            children: [Object(P.jsx)(F.b, {
                                title: "Exchange",
                                subtitle: q("Trade tokens in an instant")
                            }), Object(P.jsxs)(ue, {
                                id: "swap-page",
                                children: [Object(P.jsxs)(B, {
                                    gap: "md",
                                    children: [Object(P.jsx)(M.a, {
                                        label: pe === ie.a.OUTPUT && !Ae && Ue ? q("From (estimated)") : q("From"),
                                        value: Ye[ie.a.INPUT],
                                        showMaxButton: !dt,
                                        currency: ye[ie.a.INPUT],
                                        onUserInput: Be,
                                        onMax: cn,
                                        onCurrencySelect: rn,
                                        otherCurrency: ye[ie.a.OUTPUT],
                                        id: "swap-currency-input"
                                    }), Object(P.jsx)(B, {
                                        justify: "space-between",
                                        gap: "sm",
                                        children: Object(P.jsxs)(T.a, {
                                            justify: ee ? "space-between" : "center",
                                            style: {
                                                padding: "0 1rem"
                                            },
                                            children: [Object(P.jsx)(be, {
                                                clickable: !0,
                                                children: Object(P.jsx)(f.e, {
                                                    width: "35px",
                                                    onClick: function() {
                                                        st(!1),
                                                        Ne()
                                                    },
                                                    isDark: ce,
                                                    theme: se,
                                                    color: ye[ie.a.INPUT] && ye[ie.a.OUTPUT] ? "primary" : "text"
                                                })
                                            }), null === he && !Ae && ee ? Object(P.jsx)(f.t, {
                                                variant: "text",
                                                id: "add-recipient-button",
                                                onClick: function() {
                                                    return Fe("")
                                                },
                                                children: q("+ Add a send (optional)")
                                            }) : null]
                                        })
                                    }), Object(P.jsx)(M.a, {
                                        value: Ye[ie.a.OUTPUT],
                                        onUserInput: Re,
                                        label: pe === ie.a.INPUT && !Ae && Ue ? q("To (estimated)") : q("To"),
                                        showMaxButton: !1,
                                        currency: ye[ie.a.OUTPUT],
                                        onCurrencySelect: on,
                                        otherCurrency: ye[ie.a.INPUT],
                                        id: "swap-currency-output"
                                    }), ee && null !== he && !Ae ? Object(P.jsxs)(P.Fragment, {
                                        children: [Object(P.jsxs)(T.a, {
                                            justify: "space-between",
                                            style: {
                                                padding: "0 1rem"
                                            },
                                            children: [Object(P.jsx)(be, {
                                                clickable: !1,
                                                children: Object(P.jsx)(f.e, {
                                                    theme: se,
                                                    isDark: ce,
                                                    width: "16px"
                                                })
                                            }), Object(P.jsx)(f.t, {
                                                variant: "text",
                                                id: "remove-recipient-button",
                                                onClick: function() {
                                                    return Fe(null)
                                                },
                                                children: q("- Remove send")
                                            })]
                                        }), Object(P.jsx)(S, {
                                            id: "recipient",
                                            value: he,
                                            onChange: Fe
                                        })]
                                    }) : null, Ae ? null : Object(P.jsx)(B, {
                                        gap: "8px",
                                        style: {
                                            padding: "0 14px 0 0"
                                        },
                                        children: Boolean(Ue) && Object(P.jsxs)(T.b, {
                                            align: "center",
                                            children: [Object(P.jsx)($t, {
                                                style: {
                                                    fontSize: "0.875em"
                                                },
                                                children: q("Price")
                                            }), Object(P.jsx)(pt, {
                                                price: null === Ue || void 0 === Ue ? void 0 : Ue.executionPrice,
                                                showInverted: Lt,
                                                setShowInverted: Bt
                                            })]
                                        })
                                    })]
                                }), Object(P.jsxs)(f.r, {
                                    padding: "0px 15px 15px 0px",
                                    children: [an ? Object(P.jsx)(f.t, {
                                        width: "100%",
                                        disabled: !0,
                                        mb: "4px",
                                        children: q("Unsupported Asset")
                                    }) : Q ? Ae ? Object(P.jsx)(f.t, {
                                        width: "100%",
                                        disabled: Boolean(Ce),
                                        onClick: Pe,
                                        children: null !== Ce && void 0 !== Ce ? Ce : ke === St.WRAP ? "Wrap" : ke === St.UNWRAP ? "Unwrap" : null
                                    }) : Qe && Ke ? Object(P.jsxs)(g.a, {
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: [Object(P.jsx)(f.Tb, {
                                            color: "textSubtle",
                                            mb: "4px",
                                            children: q("Insufficient liquidity for this trade.")
                                        }), ft && Object(P.jsx)(f.Tb, {
                                            color: "textSubtle",
                                            mb: "4px",
                                            children: q("Try enabling multi-hop trades.")
                                        })]
                                    }) : _t ? Object(P.jsxs)(T.b, {
                                        children: [Object(P.jsx)(f.u, {
                                            variant: tt === wt.a.APPROVED ? "success" : "primary",
                                            onClick: nt,
                                            disabled: tt !== wt.a.NOT_APPROVED || ot,
                                            width: "48%",
                                            children: tt === wt.a.PENDING ? Object(P.jsxs)(T.a, {
                                                gap: "6px",
                                                justify: "center",
                                                children: [q("Enabling"), " ", Object(P.jsx)(gt, {
                                                    stroke: "white"
                                                })]
                                            }) : ot && tt === wt.a.APPROVED ? q("Enabled") : q("Enable %asset%", {
                                                asset: null !== (C = null === (A = ye[ie.a.INPUT]) || void 0 === A ? void 0 : A.symbol) && void 0 !== C ? C : ""
                                            })
                                        }), Object(P.jsx)(f.u, {
                                            variant: Me && Ht > 2 ? "danger" : "primary",
                                            onClick: function() {
                                                ee ? mt() : (Xe({
                                                    tradeToConfirm: Ue,
                                                    attemptingTxn: !1,
                                                    swapErrorMessage: void 0,
                                                    txHash: void 0
                                                }),
                                                un())
                                            },
                                            width: "48%",
                                            id: "swap-button",
                                            disabled: !Me || tt !== wt.a.APPROVED || Ht > 3 && !ee,
                                            style: !Me || tt !== wt.a.APPROVED || Ht > 3 && !ee ? {
                                                boxShadow: "0px 4px 10px rgba(115, 115, 115, 0.24)"
                                            } : {
                                                boxShadow: "0px 4px 10px rgba(225,106,106,0.24)"
                                            },
                                            children: q(Ht > 3 && !ee ? "Price Impact High" : Ht > 2 ? "Swap Anyway" : "Swap")
                                        })]
                                    }) : Object(P.jsx)(f.u, {
                                        variant: Me && Ht > 2 && !xt ? "danger" : "primary",
                                        onClick: function() {
                                            ee ? mt() : (Xe({
                                                tradeToConfirm: Ue,
                                                attemptingTxn: !1,
                                                swapErrorMessage: void 0,
                                                txHash: void 0
                                            }),
                                            un())
                                        },
                                        id: "swap-button",
                                        width: "100%",
                                        disabled: !Me || Ht > 3 && !ee || !!xt,
                                        style: !Me || Ht > 3 && !ee || xt ? {
                                            boxShadow: "0px 4px 10px rgba(115, 115, 115, 0.24)"
                                        } : {
                                            boxShadow: "0px 4px 10px rgba(225,106,106,0.24)"
                                        },
                                        children: we || (Ht > 3 && !ee ? "Price Impact Too High" : q(Ht > 2 ? "Swap Anyway" : "Swap"))
                                    }) : Object(P.jsx)(_, {
                                        width: "100%"
                                    }), _t && Object(P.jsx)(R, {
                                        style: {
                                            marginTop: "1rem"
                                        },
                                        children: Object(P.jsx)(jt, {
                                            steps: [tt === wt.a.APPROVED]
                                        })
                                    }), ee && qe ? Object(P.jsx)(me, {
                                        error: qe
                                    }) : null]
                                })]
                            })]
                        }), an ? Object(P.jsx)(d.a, {
                            currencies: [ye.INPUT, ye.OUTPUT]
                        }) : Object(P.jsx)(Ie, {
                            trade: Ue
                        })]
                    }), H && Object(P.jsx)("div", {
                        style: {
                            width: "100%"
                        },
                        children: ye.INPUT && bn(null === (I = ye.INPUT) || void 0 === I ? void 0 : I.symbol) && Object(P.jsx)("iframe", {
                            width: "100%",
                            height: "100%",
                            style: {
                                borderRadius: 25
                            },
                            src: "https://coinbrain.com/embed/arbi-".concat(bn(null === (U = ye.INPUT) || void 0 === U ? void 0 : U.symbol), "?theme=").concat(ce ? "custom&accent=3685ed&background=181a1b" : "custom&accent=3685ed&background=ffffff", "&padding=16&chart=1&trades=0")
                        })
                    })]
                }), H ? ye.INPUT && bn(null === (E = ye.INPUT) || void 0 === E ? void 0 : E.symbol) && Object(P.jsx)("iframe", {
                    width: "100%",
                    style: {
                        marginTop: 50,
                        borderRadius: 25
                    },
                    height: "415",
                    src: "https://coinbrain.com/embed/arbi-".concat(bn(null === (N = ye.INPUT) || void 0 === N ? void 0 : N.symbol), "?theme=").concat(ce ? "custom&accent=3685ed&background=181a1b" : "custom&accent=3685ed&background=ffffff", "&padding=16&chart=0&trades=1")
                }) : ye.INPUT && bn(null === (D = ye.INPUT) || void 0 === D ? void 0 : D.symbol) && Object(P.jsx)("iframe", {
                    width: "100%",
                    height: "1000",
                    style: {
                        marginTop: 24,
                        borderRadius: 25
                    },
                    src: "https://coinbrain.com/embed/arbi-".concat(bn(null === (z = ye.INPUT) || void 0 === z ? void 0 : z.symbol), "?theme=").concat(ce ? "custom&accent=3685ed&background=181a1b" : "custom&accent=3685ed&background=ffffff", "&padding=16&chart=1&trades=1&ratio=0.45")
                })]
            })
        }
    },
    808: function(e, t, n) {
        "use strict";
        var r, c = n(2), i = n(18), o = n(1), a = n(111), s = n(4), l = n(3), d = n(27), u = n(107), b = l.e.button(r || (r = Object(s.a)(["\n  align-items: center;\n  border: 0;\n  border-radius: 8px;\n  box-shadow: 0px 4px 10px rgba(255, 106, 106, 0.24);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 700;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), (function(e) {
            var t = e.$isLoading;
            return void 0 !== t && t ? ".5" : "1"
        }
        ), (function(e) {
            var t = e.$isLoading
              , n = e.theme;
            return !0 === t ? "\n\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n        \n      }\n    " : "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: ".concat(n.colors.backgroundDisabled, ";\n      border-color: ").concat(n.colors.backgroundDisabled, ";\n      background: #A5A8BE;\n      box-shadow: none;\n      color: ").concat(n.colors.textDisabled, ";\n      cursor: not-allowed;\n    }\n  ")
        }
        ), Object(d.k)({
            prop: "scale",
            variants: u.a
        }), Object(d.k)({
            variants: u.b
        }), d.g, d.i), j = n(43), p = n(0), x = ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"], h = function(e) {
            var t = e.startIcon
              , n = e.endIcon
              , r = e.external
              , s = e.className
              , l = e.isLoading
              , d = e.disabled
              , u = e.children
              , j = Object(i.a)(e, x)
              , h = r ? Object(a.a)() : {}
              , O = l || d
              , f = s ? [s] : [];
            return l && f.push("pancake-button--loading"),
            O && !l && f.push("pancake-button--disabled"),
            Object(p.jsx)(b, Object(c.a)(Object(c.a)(Object(c.a)({
                $isLoading: l,
                className: f.join(" "),
                disabled: O
            }, h), j), {}, {
                children: Object(p.jsxs)(p.Fragment, {
                    children: [Object(o.isValidElement)(t) && Object(o.cloneElement)(t, {
                        mr: "0.5rem"
                    }), u, Object(o.isValidElement)(n) && Object(o.cloneElement)(n, {
                        ml: "0.5rem"
                    })]
                })
            }))
        };
        h.defaultProps = {
            isLoading: !1,
            external: !1,
            variant: j.b.PRIMARY,
            scale: j.a.MD,
            disabled: !1
        };
        t.a = h
    }
}]);

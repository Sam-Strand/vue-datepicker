import { Fragment as e, Teleport as t, Transition as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createSlots as c, createTextVNode as l, createVNode as u, defineComponent as d, guardReactiveProps as f, h as p, inject as m, mergeDefaults as h, mergeProps as g, nextTick as _, normalizeClass as v, normalizeProps as y, normalizeStyle as b, onBeforeUpdate as x, onMounted as S, onUnmounted as C, openBlock as w, provide as T, reactive as E, readonly as D, ref as O, renderList as k, renderSlot as A, resolveDynamicComponent as j, toDisplayString as M, toRef as N, toValue as ee, unref as P, useSlots as F, useTemplateRef as I, vShow as te, watch as L, withCtx as R, withDirectives as z, withKeys as B, withModifiers as V } from "vue";
import { onClickOutside as ne, unrefElement as re, useSwipe as H, useTemplateRefsList as U } from "@vueuse/core";
import { arrow as W, autoUpdate as ie, flip as ae, offset as oe, shift as G, useFloating as se } from "@floating-ui/vue";
import { add as K, addDays as q, addMonths as ce, addYears as le, differenceInCalendarDays as ue, differenceInYears as de, eachDayOfInterval as fe, eachQuarterOfInterval as pe, endOfQuarter as me, endOfWeek as he, endOfYear as ge, format as _e, getDay as ve, getHours as ye, getISOWeek as be, getMinutes as xe, getMonth as J, getQuarter as Se, getSeconds as Ce, getWeek as we, getYear as Y, isAfter as Te, isBefore as Ee, isDate as De, isEqual as Oe, isSameQuarter as ke, isValid as Ae, parse as je, roundToNearestMinutes as Me, set as X, setMilliseconds as Ne, setMonth as Pe, setSeconds as Fe, setYear as Ie, startOfMonth as Le, startOfQuarter as Re, startOfWeek as ze, startOfYear as Be, sub as Ve, subDays as He, subMonths as Ue, subYears as We } from "date-fns";
import { TZDate as Ge, TZDate as Ke } from "@date-fns/tz";
//#region src/components/Icons/CalendarIcon.ts
function qe() {
	return p("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [
		p("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }),
		p("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		p("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		p("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" })
	]);
}
//#endregion
//#region src/components/Icons/CancelIcon.ts
function Je() {
	return p("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [p("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }), p("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
//#endregion
//#region src/components/Icons/ChevronLeftIcon.ts
function Ye() {
	return p("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [p("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
//#endregion
//#region src/components/Icons/ChevronRightIcon.ts
function Xe() {
	return p("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [p("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" })]);
}
//#endregion
//#region src/components/Icons/ClockIcon.ts
function Ze() {
	return p("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [p("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }), p("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" })]);
}
//#endregion
//#region src/components/Icons/ChevronUpIcon.ts
function Qe() {
	return p("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [p("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
//#endregion
//#region src/components/Icons/ChevronDownIcon.ts
function $e() {
	return p("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [p("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
//#endregion
//#region src/composables/useInjector.ts
var et = Symbol("ContextKey"), tt = (e, t) => {
	let { setTimeModelValue: n } = Gt(), i = Wt(e), a = O(null), o = E({
		menuFocused: !1,
		shiftKeyInMenu: !1,
		isInputFocused: !1,
		isTextInputDate: !1,
		arrowNavigationLevel: 0
	}), s = i.getDate(/* @__PURE__ */ new Date()), c = O(""), l = O([{
		month: J(s),
		year: Y(s)
	}]), u = E({
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	n(u, null, s, i.range.value.enabled);
	let d = r({
		get: () => a.value,
		set: (e) => {
			a.value = e;
		}
	}), f = r(() => (e) => l.value[e] ? l.value[e].month : 0), p = r(() => (e) => l.value[e] ? l.value[e].year : 0);
	T(et, {
		rootProps: e,
		defaults: i,
		modelValue: d,
		state: D(o),
		rootEmit: t,
		calendars: l,
		month: f,
		year: p,
		time: u,
		today: s,
		inputValue: c,
		setState: (e, t) => {
			o[e] = t;
		},
		updateTime: () => {
			n(u, d.value, s, i.range.value.enabled);
		},
		getDate: i.getDate,
		getDateFromParts: i.getDateFromParts
	});
}, nt = /* @__PURE__ */ function(e) {
	return e.month = "month", e.year = "year", e;
}({}), rt = /* @__PURE__ */ function(e) {
	return e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e;
}({}), it = /* @__PURE__ */ function(e) {
	return e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e;
}({}), at = [
	"timestamp",
	"date",
	"iso"
], ot = /* @__PURE__ */ function(e) {
	return e.up = "up", e.down = "down", e.left = "left", e.right = "right", e;
}({}), Z = /* @__PURE__ */ function(e) {
	return e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e;
}({}), st = /* @__PURE__ */ function(e) {
	return e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e;
}({}), ct = /* @__PURE__ */ function(e) {
	return e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e;
}({}), lt = Symbol("FlowKey"), ut = (e, t) => {
	let { rootEmit: n, rootProps: i, defaults: { timeConfig: a, flow: o } } = Q(), s = O(), c = E({
		[rt.timePicker]: !a.value.enableTimePicker || i.timePicker || i.monthPicker || i.quarterPicker,
		[rt.calendar]: !1,
		[rt.header]: !1
	}), l = r(() => i.monthPicker || i.timePicker || i.quarterPicker), u = (e) => {
		let t = o.value?.steps.at(0);
		if (o.value?.steps?.length) {
			if (!e && l.value) return p(t);
			e && (c[e] = !0), Object.keys(c).filter((e) => !c[e]).length || p(t);
		}
	}, d = (e) => {
		if (o.value?.steps?.length && s.value === e) {
			let e = o.value.steps.at(o.value.steps.indexOf(s.value) + 1);
			e ? (s.value = e, n("flow-step", s.value), p()) : i.autoApply && _().then(() => t("auto-apply"));
		}
	}, f = (t, n, ...r) => {
		s.value === t && e.value && e.value[n]?.(...r);
	}, p = (e) => {
		e && (s.value = e), f(it.month, "toggleMonthPicker", !0), f(it.year, "toggleYearPicker", !0), f(it.calendar, "toggleTimePicker", !1), f(it.time, "toggleTimePicker", !0), (s.value === it.hours || s.value === it.minutes || s.value === it.seconds) && f(s.value, "toggleTimePicker", !0, s.value);
	};
	return T(lt, {
		childMount: u,
		updateFlowStep: d,
		flowStep: D(s)
	}), { executeFlow: p };
}, Q = () => {
	let e = m(et);
	if (!e) throw Error("Can't use context");
	return e;
}, dt = () => {
	let e = m(lt);
	if (!e) throw Error("Can't use flow");
	return e;
}, ft = () => {
	let { rootProps: e, state: t, defaults: { textInput: n } } = Q(), i = r(() => t.arrowNavigationLevel), a = O(-1), o = O(-1);
	L(i, (e, t) => {
		b(n.value.enabled && n.value.selectOnFocus ? !0 : e === 0 && t > 0);
	});
	let s = O([]), c = O(/* @__PURE__ */ new Map()), l = () => {
		let e = Array.from(document.querySelectorAll(`[data-dp-action-element="${i.value}"]`)), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
		for (let r of e) {
			let e = r.getBoundingClientRect(), i = e.top, a = e.left;
			t.has(i) || t.set(i, []), t.get(i).push(r), n.set(r, {
				row: i,
				col: a
			});
		}
		s.value = Array.from(t.entries()).sort((e, t) => e[0] - t[0]).map(([e, t]) => u(t, n)), c.value = n;
	}, u = (e, t) => e.sort((e, n) => {
		let r = t.get(e), i = t.get(n);
		return r.col - i.col;
	}), d = (e, t) => {
		i.value === 0 && (a.value = e, o.value = t);
	}, f = (e) => {
		if (![
			Z.arrowUp,
			Z.arrowDown,
			Z.arrowLeft,
			Z.arrowRight
		].includes(e.key)) return;
		l(), e.preventDefault();
		let t = document.activeElement;
		if (!t?.hasAttribute("data-dp-action-element")) return;
		let n = -1, r = -1;
		for (let e = 0; e < s.value.length; e++) {
			let i = s.value[e].indexOf(t);
			if (i !== -1) {
				n = e, r = i;
				break;
			}
		}
		if (n !== -1) switch (e.key) {
			case Z.arrowLeft: return p(n, r);
			case Z.arrowRight: return m(n, r);
			case Z.arrowUp: return h(n, r);
			case Z.arrowDown: return g(n, r);
			default: return;
		}
	}, p = (e, t) => {
		if (t > 0) {
			let n = s.value[e][t - 1];
			d(e, t - 1), n && n.focus();
		}
	}, m = (e, t) => {
		if (t < s.value[e].length - 1) {
			let n = s.value[e][t + 1];
			d(e, t + 1), n && n.focus();
		}
	}, h = (e, t) => {
		if (e > 0) {
			let n = s.value[e - 1], r = Math.min(t, n.length - 1), i = n[r];
			d(e - 1, r), i && i.focus();
		}
	}, g = (e, t) => {
		if (e < s.value.length - 1) {
			let n = s.value[e + 1], r = Math.min(t, n.length - 1), i = n[r];
			d(e + 1, r), i && i.focus();
		}
	}, v = () => {
		_().then(() => {
			l();
			let e = s.value[a.value]?.[o.value];
			e && y(e);
		});
	}, y = (e) => {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				e.focus({ preventScroll: !0 });
			});
		});
	}, b = (e) => {
		if (e) return v();
		let t = document.querySelector(`[data-dp-element-active="${i.value}"]`);
		if (t && !e) y(t);
		else {
			let e = document.querySelector(`[data-dp-action-element="${i.value}"]`);
			e && y(e);
		}
	};
	S(() => {
		e.arrowNavigation && (b(!1), document.addEventListener("keydown", f));
	}), C(() => {
		e.arrowNavigation && document.removeEventListener("keydown", f);
	});
}, pt = () => {
	let { checkPartialRangeValue: e, checkRangeEnabled: t, isValidDate: n } = gt(), { convertType: r, errorMapper: i } = Gt(), { getDate: a, rootEmit: o, state: s, rootProps: c, inputValue: l, defaults: { textInput: u, range: d, multiDates: f, timeConfig: p, formats: m, weekStart: h }, modelValue: g, updateTime: _ } = Q(), { setTime: v, getWeekFromDate: y } = Kt(), { formatSelectedDate: b, formatForTextInput: x } = Jt();
	L(g, (e, t) => {
		o("internal-model-change", g.value), JSON.stringify(t ?? {}) !== JSON.stringify(e ?? {}) && _();
	}, { deep: !0 }), L(d, (e, t) => {
		e.enabled !== t.enabled && (g.value = null, _());
	}), L(() => m.value.input, () => {
		R();
	});
	let S = (e) => e ? c.modelType ? B(e) : {
		hours: ye(e),
		minutes: xe(e),
		seconds: p.value.enableSeconds ? Ce(e) : 0
	} : null, C = (e) => c.modelType ? B(e) : {
		month: J(e),
		year: Y(e)
	}, w = (n) => Array.isArray(n) ? f.value.enabled ? n.map((e) => T(e, Ie(a(), e))) : t(() => [Ie(a(), n[0]), n[1] ? Ie(a(), n[1]) : e(d.value.partialRange)], d.value.enabled) : Ie(a(), +n), T = (e, t) => (typeof e == "string" || typeof e == "number") && c.modelType ? z(e) : t, E = (e) => Array.isArray(e) ? [T(e[0], v(e[0])), T(e[1], v(e[1]))] : T(e, v(e)), D = (n) => {
		let r = X(a(), { date: 1 });
		return Array.isArray(n) ? f.value.enabled ? n.map((e) => T(e, X(r, {
			month: +e.month,
			year: +e.year
		}))) : t(() => [T(n[0], X(r, {
			month: +n[0].month,
			year: +n[0].year
		})), T(n[1], n[1] ? X(r, {
			month: +n[1].month,
			year: +n[1].year
		}) : e(d.value.partialRange))], d.value.enabled) : T(n, X(r, {
			month: +n.month,
			year: +n.year
		}));
	}, O = (e) => {
		if (Array.isArray(e)) return e.map((e) => z(e));
		throw Error(i.dateArr("multi-dates"));
	}, k = (e) => {
		if (Array.isArray(e) && d.value.enabled) {
			let t = e[0], n = e[1];
			return [a(Array.isArray(t) ? t[0] : null), Array.isArray(n) && n.length ? a(n[0]) : null];
		}
		return a(e[0]);
	}, A = (n) => c.modelAuto ? Array.isArray(n) ? [z(n[0]), z(n[1])] : c.autoApply ? [z(n)] : [z(n), null] : Array.isArray(n) ? t(() => n[1] ? [z(n[0]), n[1] ? z(n[1]) : e(d.value.partialRange)] : [z(n[0])], d.value.enabled) : z(n), j = () => {
		Array.isArray(g.value) && d.value.enabled && g.value.length === 1 && g.value.push(e(d.value.partialRange));
	}, M = () => {
		let t = g.value;
		return [B(t[0]), t[1] ? B(t[1]) : e(d.value.partialRange)];
	}, N = () => Array.isArray(g.value) ? g.value[1] ? M() : B(r(g.value[0])) : [], ee = () => (g.value || []).map((e) => B(e)), P = (e = !1) => (e || j(), c.modelAuto ? N() : f.value.enabled ? ee() : Array.isArray(g.value) ? t(() => M(), d.value.enabled) : B(r(g.value))), F = (e) => !e || Array.isArray(e) && !e.length ? null : c.timePicker ? E(r(e)) : c.monthPicker ? D(r(e)) : c.yearPicker ? w(r(e)) : f.value.enabled ? O(r(e)) : c.weekPicker ? k(r(e)) : A(r(e)), I = (e) => {
		if (s.isTextInputDate) return;
		let t = F(e);
		n(r(t)) ? (g.value = r(t), R()) : (g.value = null, l.value = "");
	}, te = () => g.value ? f.value.enabled ? g.value.map((e) => b(e)).join("; ") : u.value.enabled ? x() : b(g.value) : "", R = () => {
		l.value = te();
	}, z = (e) => c.modelType ? at.includes(c.modelType) ? a(e) : c.modelType === "format" && typeof m.value.input == "string" ? je(e, m.value.input, a(), { locale: c.locale }) : je(e, c.modelType, a(), { locale: c.locale }) : a(e), B = (e) => e ? c.modelType ? c.modelType === "timestamp" ? +e : c.modelType === "iso" ? e.toISOString() : c.modelType === "format" && typeof m.value.input == "string" ? b(e) : b(e, c.modelType) : e : null, V = (e) => {
		o("update:model-value", e);
	}, ne = (e) => Array.isArray(g.value) ? f.value.enabled ? g.value.map((t) => e(t)) : [e(g.value[0]), g.value[1] ? e(g.value[1]) : null] : e(r(g.value)), re = () => {
		if (Array.isArray(g.value)) {
			let e = y(g.value[0], h.value), t = g.value[1] ? y(g.value[1], h.value) : [];
			return [e.map((e) => a(e)), t.map((e) => a(e))];
		}
		return y(g.value, h.value).map((e) => a(e));
	}, H = (e) => V(r(ne(e))), U = () => o("update:model-value", re());
	return {
		checkBeforeEmit: () => g.value ? d.value.enabled ? d.value.partialRange ? g.value.length >= 1 : g.value.length === 2 : !!g.value : !1,
		parseExternalModelValue: I,
		formatInputValue: R,
		emitModelValue: () => (R(), c.monthPicker ? H(C) : c.timePicker ? H(S) : c.yearPicker ? H(Y) : c.weekPicker ? U() : V(P()))
	};
}, mt = () => {
	let { defaults: { transitions: e } } = Q(), t = r(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), n = r(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
	return {
		transitionName: t,
		showTransition: !!e.value,
		menuTransition: n
	};
}, ht = (e) => {
	let { modelValue: t } = Q();
	L(t, (t, n) => {
		e && JSON.stringify(t ?? {}) !== JSON.stringify(n ?? {}) && e();
	}, { deep: !0 });
}, gt = () => {
	let { defaults: { safeDates: e, range: t, multiDates: n, filters: i, timeConfig: a }, rootProps: o, getDate: s } = Q(), { getMapKeyType: c, getMapDate: l, errorMapper: u, convertType: d } = Gt(), { isDateBefore: f, isDateAfter: p, isDateEqual: m, resetDate: h, getDaysInBetween: g, setTimeValue: _, getTimeObj: v, setTime: y } = Kt(), b = (t) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(s(t)) : !!l(t, e.value.disabledDates) : !1, x = (t) => e.value.maxDate ? o.yearPicker ? Y(t) > Y(e.value.maxDate) : p(t, e.value.maxDate) : !1, S = (t) => e.value.minDate ? o.yearPicker ? Y(t) < Y(e.value.minDate) : f(t, e.value.minDate) : !1, C = (e) => {
		if (!e) return !1;
		let t = x(e), n = S(e), r = b(e), a = i.value.months.map((e) => +e).includes(J(e)), s = i.value.weekDays?.length ? i.value.weekDays.some((t) => +t === ve(e)) : !1, c = O(e), l = Y(e), u = l < +o.yearRange[0] || l > +o.yearRange[1];
		return !(t || n || r || a || u || s || c);
	}, w = (t, n) => f(...H(e.value.minDate, t, n)) || m(...H(e.value.minDate, t, n)), T = (t, n) => p(...H(e.value.maxDate, t, n)) || m(...H(e.value.maxDate, t, n)), E = (t, n, r) => {
		let i = !1;
		return e.value.maxDate && r && T(t, n) && (i = !0), e.value.minDate && !r && w(t, n) && (i = !0), i;
	}, D = (t, n, r, i) => {
		let a = !1;
		return i && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? a = E(t, n, r) : (e.value.minDate && w(t, n) || e.value.maxDate && T(t, n)) && (a = !0) : a = !0, a;
	}, O = (t) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !l(t, e.value.allowedDates, c(o.monthPicker, o.yearPicker)) : !1, k = (e) => !C(e), A = (e) => !t.value.noDisabledRange || !fe({
		start: e[0],
		end: e[1]
	}).some((e) => k(e)), j = (e) => {
		if (e) {
			let t = Y(e);
			return t >= +o.yearRange[0] && t <= o.yearRange[1];
		}
		return !0;
	}, M = (e, n) => !!(Array.isArray(e) && e[n] && (t.value.maxRange || t.value.minRange) && j(e[n])), N = (e, n, r = 0) => {
		if (M(n, r) && j(e)) {
			let i = ue(e, n[r]), a = g(n[r], e), o = a.length === 1 ? 0 : a.filter((e) => k(e)).length, s = Math.abs(i) - (t.value.minMaxRawRange ? 0 : o);
			if (t.value.minRange && t.value.maxRange) return s >= +t.value.minRange && s <= +t.value.maxRange;
			if (t.value.minRange) return s >= +t.value.minRange;
			if (t.value.maxRange) return s <= +t.value.maxRange;
		}
		return !0;
	}, ee = () => !a.value.enableTimePicker || o.monthPicker || o.yearPicker || a.value.ignoreTimeValidation, P = (e) => Array.isArray(e) ? [e[0] ? _(e[0]) : null, e[1] ? _(e[1]) : null] : _(e), F = (e, t, n) => t ? e.find((e) => +e.hours === ye(t) && e.minutes === "*" || +e.minutes === xe(t) && +e.hours === ye(t)) && n : !1, I = (e, t, n) => {
		let [r, i] = e, [a, o] = t;
		return !F(r, a, n) && !F(i, o, n) && n;
	}, te = (e, t) => {
		let n = Array.isArray(t) ? t : [t];
		return Array.isArray(o.disabledTimes) ? Array.isArray(o.disabledTimes[0]) ? I(o.disabledTimes, n, e) : !n.some((t) => F(o.disabledTimes, t, e)) : e;
	}, L = (e, t) => {
		let n = Array.isArray(t) ? [v(t[0]), t[1] ? v(t[1]) : void 0] : v(t), r = !o.disabledTimes(n);
		return e && r;
	}, R = (e, t) => o.disabledTimes ? Array.isArray(o.disabledTimes) ? te(t, e) : L(t, e) : t, z = (t) => {
		let n = !0;
		if (!t || ee()) return !0;
		let r = !e.value.minDate && !e.value.maxDate ? P(t) : t;
		return (o.maxTime || e.value.maxDate) && (n = W(o.maxTime, e.value.maxDate, "max", d(r), n)), (o.minTime || e.value.minDate) && (n = W(o.minTime, e.value.minDate, "min", d(r), n)), R(t, n);
	}, B = (t) => {
		if (!o.monthPicker) return !0;
		let n = !0, r = s(h(t));
		if (e.value.minDate && e.value.maxDate) {
			let t = s(h(e.value.minDate)), n = s(h(e.value.maxDate));
			return p(r, t) && f(r, n) || m(r, t) || m(r, n);
		}
		if (e.value.minDate) {
			let t = s(h(e.value.minDate));
			n = p(r, t) || m(r, t);
		}
		if (e.value.maxDate) {
			let t = s(h(e.value.maxDate));
			n = f(r, t) || m(r, t);
		}
		return n;
	}, V = r(() => (e) => !a.value.enableTimePicker || a.value.ignoreTimeValidation ? !0 : z(e)), ne = r(() => (e) => o.monthPicker ? Array.isArray(e) && (t.value.enabled || n.value.enabled) ? !e.filter((e) => !B(e)).length : B(e) : !0), re = (t, n, r) => {
		if (!n || r && !e.value.maxDate || !r && !e.value.minDate) return !1;
		let i = r ? ce(t, 1) : Ue(t, 1), a = [J(i), Y(i)];
		return r ? !T(...a) : !w(...a);
	}, H = (e, t, n) => [X(s(e), { date: 1 }), X(s(), {
		month: t,
		year: n,
		date: 1
	})], U = (e, t, n, r) => {
		if (!e) return !0;
		if (r) {
			let r = n === "max" ? Ee(e, t) : Te(e, t), i = {
				seconds: 0,
				milliseconds: 0
			};
			return r || Oe(X(e, i), X(t, i));
		}
		return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
	}, W = (e, t, n, r, i) => {
		if (Array.isArray(r)) {
			let a = ie(e, r[0], t), o = ie(e, r[1], t);
			return U(r[0], a, n, !!t) && U(r[1], o, n, !!t) && i;
		}
		let a = ie(e, r, t);
		return U(r, a, n, !!t) && i;
	}, ie = (e, t, n) => e ? y(e, t) : s(n ?? t);
	return {
		isDisabled: k,
		validateDate: C,
		validateMonthYearInRange: D,
		isDateRangeAllowed: A,
		checkMinMaxRange: N,
		isValidTime: z,
		validateMonthYear: re,
		validateMinDate: w,
		validateMaxDate: T,
		isValidDate: (e) => Array.isArray(e) ? Ae(e[0]) && (!e[1] || Ae(e[1])) : e ? Ae(e) : !1,
		checkPartialRangeValue: (e) => {
			if (e) return null;
			throw Error(u.prop("partial-range"));
		},
		checkRangeEnabled: (e, t) => {
			if (t) return e();
			throw Error(u.prop("range"));
		},
		checkMinMaxValue: (e, t, n) => {
			let r = n != null, i = t != null;
			if (!r && !i) return !1;
			let a = +n, o = +t;
			return r && i ? +e > a || +e < o : r ? +e > a : i ? +e < o : !1;
		},
		isTimeValid: V,
		isMonthValid: ne
	};
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function _t(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function vt(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchFn.js
function yt(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? xt(s, (e) => e.test(o)) : bt(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function bt(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function xt(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function St(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var Ct = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
}, wt = (e, t, n) => {
	let r, i = Ct[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, Tt = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, Et = (e, t, n, r) => Tt[e], Dt = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: vt({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: vt({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: vt({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			wide: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},
		defaultWidth: "wide"
	}),
	day: vt({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: vt({
		values: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		defaultFormattingWidth: "wide"
	})
}, Ot = {
	ordinalNumber: St({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (e) => parseInt(e, 10)
	}),
	era: yt({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: yt({
		matchPatterns: {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](th|st|nd|rd)? quarter/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] },
		defaultParseWidth: "any",
		valueCallback: (e) => e + 1
	}),
	month: yt({
		matchPatterns: {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
			wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: {
			narrow: [
				/^j/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^ja/i,
				/^f/i,
				/^mar/i,
				/^ap/i,
				/^may/i,
				/^jun/i,
				/^jul/i,
				/^au/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			]
		},
		defaultParseWidth: "any"
	}),
	day: yt({
		matchPatterns: {
			narrow: /^[smtwf]/i,
			short: /^(su|mo|tu|we|th|fr|sa)/i,
			abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
			wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: {
			narrow: [
				/^s/i,
				/^m/i,
				/^t/i,
				/^w/i,
				/^t/i,
				/^f/i,
				/^s/i
			],
			any: [
				/^su/i,
				/^m/i,
				/^tu/i,
				/^w/i,
				/^th/i,
				/^f/i,
				/^sa/i
			]
		},
		defaultParseWidth: "any"
	}),
	dayPeriod: yt({
		matchPatterns: {
			narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
			any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
		},
		defaultMatchWidth: "any",
		parsePatterns: { any: {
			am: /^a/i,
			pm: /^p/i,
			midnight: /^mi/i,
			noon: /^no/i,
			morning: /morning/i,
			afternoon: /afternoon/i,
			evening: /evening/i,
			night: /night/i
		} },
		defaultParseWidth: "any"
	})
}, kt = {
	code: "en-US",
	formatDistance: wt,
	formatLong: {
		date: _t({
			formats: {
				full: "EEEE, MMMM do, y",
				long: "MMMM do, y",
				medium: "MMM d, y",
				short: "MM/dd/yyyy"
			},
			defaultWidth: "full"
		}),
		time: _t({
			formats: {
				full: "h:mm:ss a zzzz",
				long: "h:mm:ss a z",
				medium: "h:mm:ss a",
				short: "h:mm a"
			},
			defaultWidth: "full"
		}),
		dateTime: _t({
			formats: {
				full: "{{date}} 'at' {{time}}",
				long: "{{date}} 'at' {{time}}",
				medium: "{{date}}, {{time}}",
				short: "{{date}}, {{time}}"
			},
			defaultWidth: "full"
		})
	},
	formatRelative: Et,
	localize: Dt,
	match: Ot,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
}, At = {
	noDisabledRange: !1,
	showLastInRange: !0,
	minMaxRawRange: !1,
	partialRange: !0,
	disableTimeRangeValidation: !1,
	maxRange: void 0,
	minRange: void 0,
	autoRange: void 0,
	fixedStart: !1,
	fixedEnd: !1,
	autoSwitchStartEnd: !0
}, jt = {
	allowStopPropagation: !0,
	closeOnScroll: !1,
	modeHeight: 255,
	allowPreventDefault: !1,
	closeOnClearValue: !0,
	closeOnAutoApply: !0,
	noSwipe: !1,
	keepActionRow: !1,
	onClickOutside: void 0,
	onInternalKeydown: void 0,
	tabOutClosesMenu: !0,
	arrowLeft: void 0,
	keepViewOnOffsetClick: !1,
	timeArrowHoldThreshold: 0,
	shadowDom: !1,
	mobileBreakpoint: 600,
	setDateOnMenuClose: !1,
	escClose: !0,
	spaceConfirm: !0,
	monthChangeOnArrows: !0,
	monthChangeOnScroll: !0
}, Mt = {
	enterSubmit: !0,
	tabSubmit: !0,
	openMenu: "open",
	selectOnFocus: !1,
	rangeSeparator: " - ",
	escClose: !0,
	format: void 0,
	maskFormat: void 0,
	applyOnBlur: !1,
	separators: void 0
}, Nt = {
	dates: [],
	years: [],
	months: [],
	quarters: [],
	weeks: [],
	weekdays: [],
	options: { highlightDisabled: !1 }
}, Pt = {
	showSelect: !0,
	showCancel: !0,
	showNow: !1,
	showPreview: !0,
	selectBtnLabel: "Select",
	cancelBtnLabel: "Cancel",
	nowBtnLabel: "Now",
	nowBtnRound: void 0
}, Ft = {
	toggleOverlay: "Toggle overlay",
	menu: "Datepicker menu",
	input: "Datepicker input",
	openTimePicker: "Open time picker",
	closeTimePicker: "Close time Picker",
	incrementValue: (e) => `Increment ${e}`,
	decrementValue: (e) => `Decrement ${e}`,
	openTpOverlay: (e) => `Open ${e} overlay`,
	amPmButton: "Switch AM/PM mode",
	openYearsOverlay: "Open years overlay",
	openMonthsOverlay: "Open months overlay",
	nextMonth: "Next month",
	prevMonth: "Previous month",
	nextYear: "Next year",
	prevYear: "Previous year",
	day: void 0,
	weekDay: void 0,
	clearInput: "Clear value",
	calendarIcon: "Calendar icon",
	timePicker: "Time picker",
	monthPicker: (e) => `Month picker${e ? " overlay" : ""}`,
	yearPicker: (e) => `Year picker${e ? " overlay" : ""}`,
	timeOverlay: (e) => `${e} overlay`
}, It = {
	menuAppearTop: "dp-menu-appear-top",
	menuAppearBottom: "dp-menu-appear-bottom",
	open: "dp-slide-down",
	close: "dp-slide-up",
	next: "calendar-next",
	previous: "calendar-prev",
	vNext: "dp-slide-up",
	vPrevious: "dp-slide-down"
}, Lt = {
	weekDays: [],
	months: [],
	years: [],
	times: {
		hours: [],
		minutes: [],
		seconds: []
	}
}, Rt = {
	month: "LLL",
	year: "yyyy",
	weekDay: "EEEEEE",
	quarter: "MMMM",
	day: "d",
	input: void 0,
	preview: void 0
}, zt = {
	enableTimePicker: !0,
	ignoreTimeValidation: !1,
	enableSeconds: !1,
	enableMinutes: !0,
	is24: !0,
	noHoursOverlay: !1,
	noMinutesOverlay: !1,
	noSecondsOverlay: !1,
	hoursGridIncrement: 1,
	minutesGridIncrement: 5,
	secondsGridIncrement: 5,
	hoursIncrement: 1,
	minutesIncrement: 1,
	secondsIncrement: 1,
	timePickerInline: !1,
	startTime: void 0
}, Bt = {
	menuWrapRef: null,
	collapse: !1
}, Vt = {
	yearRange: () => [1900, 2100],
	ui: () => ({}),
	locale: () => kt,
	dark: !1,
	transitions: !0,
	hideNavigation: () => [],
	vertical: !1,
	hideMonthYearSelect: !1,
	disableYearSelect: !1,
	autoApply: !1,
	disabledDates: () => [],
	hideOffsetDates: !1,
	noToday: !1,
	markers: () => [],
	presetDates: () => [],
	preventMinMaxNavigation: !1,
	reverseYears: !1,
	weekPicker: !1,
	arrowNavigation: !1,
	monthPicker: !1,
	yearPicker: !1,
	quarterPicker: !1,
	timePicker: !1,
	modelAuto: !1,
	multiDates: !1,
	range: !1,
	inline: !1,
	sixWeeks: !1,
	focusStartDate: !1,
	yearFirst: !1,
	loading: !1,
	centered: !1
}, Ht = {
	name: void 0,
	required: !1,
	autocomplete: "off",
	state: void 0,
	clearable: !0,
	alwaysClearable: !1,
	hideInputIcon: !1,
	id: void 0,
	inputmode: "none"
}, Ut = {
	type: "local",
	hideOnOffsetDates: !1,
	label: "W"
}, Wt = (e) => {
	let { getMapKey: t, getMapKeyType: n, getTimeObjFromCurrent: i } = Gt();
	function a(t, n) {
		let r;
		return r = e.timezone ? new Ke(t ?? /* @__PURE__ */ new Date(), e.timezone) : t ? new Date(t) : /* @__PURE__ */ new Date(), n ? X(r, {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		}) : r;
	}
	let o = (t, n, r = 1) => e.timezone ? new Ke(t, n, r, e.timezone) : new Date(t, n, r), s = () => {
		let e = j.value.enableSeconds ? ":ss" : "", t = j.value.enableMinutes ? ":mm" : "";
		return j.value.is24 ? `HH${t}${e}` : `hh${t}${e} aa`;
	}, c = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? s() : e.weekPicker ? `${w.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : j.value.enableTimePicker ? `MM/dd/yyyy, ${s()}` : "MM/dd/yyyy", l = (e) => i(a(), e, j.value.enableSeconds), u = () => D.value.enabled ? j.value.startTime && Array.isArray(j.value.startTime) ? [l(j.value.startTime[0]), l(j.value.startTime[1])] : null : j.value.startTime && !Array.isArray(j.value.startTime) ? l(j.value.startTime) : null, d = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : Math.max(+e, 2) : 0, f = (r) => {
		let i = n(e.monthPicker, e.yearPicker);
		return new Map(r.map((e) => {
			let n = a(e, p.value);
			return [t(n, i), n];
		}));
	}, p = r(() => e.monthPicker || e.yearPicker || e.quarterPicker), m = r(() => {
		let t = typeof e.multiCalendars == "object" && e.multiCalendars, n = {
			static: !0,
			solo: !1
		};
		if (!e.multiCalendars) return {
			...n,
			count: d(!1)
		};
		let r = t ? e.multiCalendars : {}, i = t ? r.count ?? !0 : e.multiCalendars, a = d(i);
		return Object.assign(n, r, { count: a });
	}), h = r(() => u()), g = r(() => ({
		...Ft,
		...e.ariaLabels
	})), _ = r(() => ({
		...Lt,
		...e.filters
	})), v = r(() => typeof e.transitions == "boolean" ? e.transitions ? It : !1 : {
		...It,
		...e.transitions
	}), y = r(() => ({
		...Pt,
		...e.actionRow
	})), b = r(() => typeof e.textInput == "object" ? {
		...Mt,
		...e.textInput,
		format: typeof e.textInput.format == "string" ? e.textInput.format : k.value.input,
		pattern: e.textInput.format ?? k.value.input,
		enabled: !0
	} : {
		...Mt,
		format: k.value.input,
		pattern: k.value.input,
		enabled: e.textInput
	}), x = r(() => {
		let t = { input: !1 };
		return typeof e.inline == "object" ? {
			...t,
			...e.inline,
			enabled: !0
		} : {
			enabled: e.inline,
			...t
		};
	}), S = r(() => ({
		...jt,
		...e.config
	})), C = r(() => typeof e.highlight == "function" ? e.highlight : {
		...Nt,
		...e.highlight
	}), w = r(() => typeof e.weekNumbers == "object" ? {
		type: e.weekNumbers?.type ?? Ut.type,
		hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? Ut.hideOnOffsetDates,
		label: e.weekNumbers.label ?? Ut.label
	} : e.weekNumbers ? Ut : void 0), T = r(() => typeof e.multiDates == "boolean" ? {
		enabled: e.multiDates,
		dragSelect: !0,
		limit: null
	} : {
		enabled: !!e.multiDates,
		limit: e.multiDates?.limit ? +e.multiDates.limit : null,
		dragSelect: e.multiDates?.dragSelect ?? !0
	}), E = r(() => ({
		minDate: e.minDate ? a(e.minDate) : null,
		maxDate: e.maxDate ? a(e.maxDate) : null,
		disabledDates: Array.isArray(e.disabledDates) ? f(e.disabledDates) : e.disabledDates,
		allowedDates: Array.isArray(e.allowedDates) ? f(e.allowedDates) : null,
		highlight: typeof C.value == "object" && Array.isArray(C.value.dates) ? f(C.value.dates) : C.value,
		markers: e.markers?.length ? new Map(e.markers.map((e) => {
			let n = a(e.date);
			return [t(n, st.DATE), e];
		})) : null
	})), D = r(() => typeof e.range == "object" ? {
		enabled: !0,
		...At,
		...e.range
	} : {
		enabled: e.range,
		...At
	}), O = r(() => Object.fromEntries(Object.keys(e.ui).map((t) => {
		let n = t, r = e.ui[n];
		return n === "dayClass" ? [n, e.ui[n]] : [t, typeof e.ui[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((e) => [e, !0]))];
	}))), k = r(() => ({
		...Rt,
		...e.formats,
		input: e.formats?.input ?? c(),
		preview: e.formats?.preview ?? e.formats?.input ?? c()
	})), A = r(() => {
		if (e.teleport) return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
	}), j = r(() => ({
		...zt,
		...e.timeConfig
	}));
	return {
		transitions: v,
		multiCalendars: m,
		startTime: h,
		ariaLabels: g,
		filters: _,
		actionRow: y,
		textInput: b,
		inline: x,
		config: S,
		highlight: C,
		weekNumbers: w,
		range: D,
		safeDates: E,
		multiDates: T,
		ui: O,
		formats: k,
		teleport: A,
		timeConfig: j,
		flow: r(() => {
			if (e.flow) return {
				steps: [],
				partial: !1,
				...e.flow
			};
		}),
		inputAttrs: r(() => {
			let t = b.value.enabled ? "text" : "none";
			return e.inputAttrs ? {
				...Ht,
				inputmode: t,
				...e.inputAttrs
			} : {
				...Ht,
				inputmode: t
			};
		}),
		floatingConfig: r(() => ({
			offset: e.floating?.offset ?? 10,
			arrow: e.floating?.arrow ?? !0,
			strategy: e.floating?.strategy ?? void 0,
			placement: e.floating?.placement ?? void 0,
			flip: e.floating?.flip ?? !0,
			shift: e.floating?.shift ?? !0
		})),
		weekStart: r(() => e.weekStart || e.weekStart === 0 || e.weekStart === "0" ? +e.weekStart : ve(ze(a(), { locale: e.locale }))),
		getDate: a,
		getDateFromParts: o
	};
}, Gt = () => {
	let e = (e, t) => _e(e, t ?? st.DATE), t = (e, t) => e ? st.MONTH_AND_YEAR : t ? st.YEAR : st.DATE, n = (t, n, r) => n.get(e(t, r)), r = (e) => e, i = (e) => e === 0 ? e : !e || Number.isNaN(+e) ? null : +e, a = () => [
		"a[href]",
		"area[href]",
		"input:not([disabled]):not([type='hidden'])",
		"select:not([disabled])",
		"textarea:not([disabled])",
		"button:not([disabled])",
		"[tabindex]:not([tabindex='-1'])",
		"[data-datepicker-instance]"
	].join(", "), o = (e, t) => {
		let n = [...document.querySelectorAll(a())];
		n = n.filter((t) => !e.contains(t) || "datepicker-instance" in t.dataset);
		let r = n.indexOf(e);
		if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length)) return n[r + (t ? -1 : 1)];
	}, s = (e) => String(e).padStart(2, "0"), c = (e, t) => e?.querySelector(`[data-dp-element="${t}"]`), l = (e, t, n = !1) => {
		e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
	}, u = (e, t, n = !1, r = !0, i) => {
		if (e.key === Z.enter || e.key === Z.space && r) return n && e.preventDefault(), t();
		if (i) return i(e);
	}, d = (e, t) => {
		t.allowStopPropagation && e.stopPropagation(), t.allowPreventDefault && e.preventDefault();
	}, f = (e) => {
		if (e) return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
	}, p = () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0, m = (e) => [
		12,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11
	][e], h = (e) => {
		let t = [], n = (e) => e.filter((e) => !!e);
		for (let r = 0; r < e.length; r += 3) {
			let i = [
				e[r],
				e[r + 1],
				e[r + 2]
			];
			t.push(n(i));
		}
		return t;
	}, g = {
		prop: (e) => `"${e}" prop must be enabled!`,
		dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
	}, _ = (e, t, n, r, i) => {
		let a = {
			hours: ye,
			minutes: xe,
			seconds: Ce
		};
		if (!t) return r ? [a[e](n), a[e](n)] : a[e](n);
		if (Array.isArray(t) && r) {
			let r = t[0] ?? n, o = t[1];
			return [a[e](r), o ? a[e](o) : i[e][1] ?? a[e](n)];
		}
		return Array.isArray(t) && !r ? a[e](t.at(-1) ?? n) : a[e](t);
	};
	return {
		getMapKey: e,
		getMapKeyType: t,
		getMapDate: n,
		convertType: r,
		getNumVal: i,
		findNextFocusableElement: o,
		padZero: s,
		getElWithin: c,
		checkStopPropagation: l,
		checkKeyDown: u,
		handleEventPropagation: d,
		findFocusableEl: f,
		isTouchDevice: p,
		hoursToAmPmHours: m,
		getGroupedList: h,
		setTimeModelValue: (e, t, n, r) => {
			e.hours = _("hours", t, n, r, e), e.minutes = _("minutes", t, n, r, e), e.seconds = _("seconds", t, n, r, e);
		},
		getTimeObjFromCurrent: (e, t, n) => {
			let r = {
				hours: ye(e),
				minutes: xe(e),
				seconds: n ? Ce(e) : 0
			};
			return Object.assign(r, t);
		},
		errorMapper: g
	};
}, Kt = () => {
	let { getDate: e } = Q(), { getMapDate: t, getGroupedList: n } = Gt(), r = (t, n) => {
		if (!t) return e();
		let r = e(t), i = X(r, {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		});
		return n ? Le(i) : i;
	}, i = (t, n) => {
		let r = e(n);
		return X(r, {
			hours: +(t.hours ?? ye(r)),
			minutes: +(t.minutes ?? xe(r)),
			seconds: +(t.seconds ?? Ce(r)),
			milliseconds: 0
		});
	}, a = (e, t) => [ze(e, { weekStartsOn: +t }), he(e, { weekStartsOn: +t })], o = (e, t) => !e || !t ? !1 : Ee(r(e), r(t)), s = (e, t) => !e || !t ? !1 : Oe(r(e), r(t)), c = (e, t) => !e || !t ? !1 : Te(r(e), r(t)), l = (e, t, n) => e?.[0] && e?.[1] ? c(n, e[0]) && o(n, e[1]) : e?.[0] && t ? c(n, e[0]) && o(n, t) || o(n, e[0]) && c(n, t) : !1, u = (e, t) => {
		let n = c(e, t) ? t : e, r = c(t, e) ? t : e;
		return fe({
			start: n,
			end: r
		});
	}, d = (e) => `dp-${_e(e, "yyyy-MM-dd")}`, f = (t) => r(X(e(t), { date: 1 })), p = (t, n) => {
		if (n) {
			let r = Y(e(n));
			if (r > t) return 12;
			if (r === t) return J(e(n));
		}
	}, m = (t, n) => {
		if (n) {
			let r = Y(e(n));
			return r < t ? -1 : r === t ? J(e(n)) : void 0;
		}
	}, h = (t) => {
		if (t) return Y(e(t));
	}, g = (e) => ({
		hours: ye(e),
		minutes: xe(e),
		seconds: Ce(e)
	});
	return {
		resetDateTime: r,
		groupListAndMap: (e, t) => n(e).map((e) => e.map((e) => {
			let { active: n, disabled: r, isBetween: i, highlighted: a } = t(e);
			return {
				...e,
				active: n,
				disabled: r,
				className: {
					"dp--active dp--overlay-cell-active": n,
					"dp--overlay-cell": !n,
					"dp--overlay-cell-disabled": r,
					"dp--overlay-cell-pad": !0,
					"dp--overlay-cell-active-disabled": r && n,
					"dp--cell-in-between": i,
					"dp--highlighted": a
				}
			};
		})),
		setTime: i,
		getWeekFromDate: a,
		isDateAfter: c,
		isDateBefore: o,
		isDateBetween: l,
		isDateEqual: s,
		getDaysInBetween: u,
		getCellId: d,
		resetDate: f,
		getMinMonth: p,
		getMaxMonth: m,
		getYearFromDate: h,
		getTimeObj: g,
		setTimeValue: (t) => X(e(), g(t)),
		sanitizeTime: (e, t, n) => t && (n || n === 0) ? Object.fromEntries([
			"hours",
			"minutes",
			"seconds"
		].map((r) => r === t ? [r, n] : [r, Number.isNaN(+e[r]) ? void 0 : +e[r]])) : {
			hours: Number.isNaN(+e.hours) ? void 0 : +e.hours,
			minutes: Number.isNaN(+e.minutes) ? void 0 : +e.minutes,
			seconds: Number.isNaN(+(e.seconds ?? "")) ? void 0 : +e.seconds
		},
		getBeforeAndAfterInRange: (e, t) => ({
			before: He(r(t), e),
			after: q(r(t), e)
		}),
		isModelAuto: (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1,
		matchDate: (n, r) => n ? r ? r instanceof Map ? !!t(n, r) : r(e(n)) : !1 : !0,
		checkHighlightMonth: (e, t, n) => typeof e == "function" ? e({
			month: t,
			year: n
		}) : e.months.some((e) => e.month === t && e.year === n),
		checkHighlightYear: (e, t) => typeof e == "function" ? e(t) : e.years.includes(t)
	};
}, qt = () => {
	let { defaults: { config: e } } = Q(), t = O(0);
	S(() => {
		n(), globalThis.addEventListener("resize", n, { passive: !0 });
	}), C(() => {
		globalThis.removeEventListener("resize", n);
	});
	let n = () => {
		t.value = globalThis.document.documentElement.clientWidth;
	};
	return { isMobile: r(() => t.value <= e.value.mobileBreakpoint || void 0) };
}, Jt = () => {
	let { getDate: e, state: t, modelValue: n, rootProps: r, defaults: { formats: i, textInput: a } } = Q(), o = (t) => _e(Ie(e(), t), i.value.year, { locale: r.locale }), s = (t) => _e(Pe(e(), t), i.value.month, { locale: r.locale }), c = (e) => _e(e, i.value.weekDay, { locale: r.locale }), l = (e) => _e(e, i.value.quarter, { locale: r.locale }), u = (e, t) => [e, t].map((e) => l(e)).join("-"), d = (e) => _e(e, i.value.day, { locale: r.locale }), f = (e, t, n) => {
		let o = n ? i.value.preview : i.value.input;
		if (!e) return "";
		if (typeof o == "function") return o(e);
		let s = t ?? o, c = { locale: r.locale };
		return Array.isArray(e) ? `${_e(e[0], s, c)}${r.modelAuto && !e[1] ? "" : a.value.rangeSeparator}${e[1] ? _e(e[1], s, c) : ""}` : _e(e, s, c);
	}, p = () => {
		let e = (e) => _e(e, a.value.format);
		return Array.isArray(n.value) ? `${e(n.value[0])}${a.value.rangeSeparator}${n.value[1] ? e(n.value[1]) : ""}` : "";
	};
	return {
		formatYear: o,
		formatMonth: s,
		formatWeekDay: c,
		formatQuarter: l,
		formatSelectedDate: f,
		formatForTextInput: () => t.isInputFocused && n.value ? Array.isArray(n.value) ? p() : typeof a.value.format == "function" ? a.value.format(n.value) : _e(n.value, a.value.format) : f(n.value),
		formatPreview: (e) => f(e, void 0, !0),
		formatQuarterText: u,
		formatDay: d
	};
}, Yt = () => {
	let { rootProps: e } = Q(), { formatYear: t, formatMonth: n } = Jt();
	return {
		getMonths: () => [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11
		].map((e) => ({
			text: n(e),
			value: e
		})),
		getYears: () => {
			let n = [];
			for (let r = +e.yearRange[0]; r <= +e.yearRange[1]; r++) n.push({
				value: +r,
				text: t(r)
			});
			return e.reverseYears ? n.reverse() : n;
		},
		isOutOfYearRange: (t) => t < +e.yearRange[0] || t > +e.yearRange[1]
	};
}, Xt = (e) => ({
	openMenu: () => e.value?.openMenu(),
	closeMenu: () => e.value?.closeMenu(),
	selectDate: () => e.value?.selectDate(),
	clearValue: () => e.value?.clearValue(),
	formatInputValue: () => e.value?.formatInputValue(),
	updateInternalModelValue: (t) => e.value?.updateInternalModelValue(t),
	setMonthYear: (t, n) => e.value?.setMonthYear(t, n),
	parseModel: () => e.value?.parseModel(),
	switchView: (t, n) => e.value?.switchView(t, n),
	executeFlow: (t) => e.value?.executeFlow(t),
	toggleMenu: () => e.value?.toggleMenu(),
	dpMenuRef: () => e.value?.dpMenuRef(),
	dpWrapMenuRef: () => e.value?.dpWrapMenuRef(),
	inputRef: () => e.value?.inputRef()
}), Zt = () => ({ boolHtmlAttribute: (e) => e ? !0 : void 0 }), Qt = () => {
	let { getDate: e, rootProps: t, defaults: { textInput: n, startTime: i, timeConfig: a } } = Q(), { getTimeObjFromCurrent: o } = Gt(), s = O(!1), c = r(() => Array.isArray(i.value) ? i.value[0] : i.value ?? o(e(), {}, a.value.enableSeconds)), l = (e, t) => {
		let n = /[^a-zA-Z0-9]+/g, r = t.split(n), i = e.split(n), a = e.match(n) || [], o = t.match(n) || [], s = "";
		for (let e = 0; e < r.length && e < i.length; e++) {
			e > 0 && o[e - 1] && (s += a[e - 1] || o[e - 1]);
			let t = r[e]?.length;
			s += i[e]?.slice(0, t);
		}
		return s;
	}, u = (n, r, i) => {
		let a = je(n, l(r, n), e(), { locale: t.locale });
		return Ae(a) && De(a) ? i || s.value || t.timePicker ? a : X(a, {
			hours: +c.value.hours,
			minutes: +c.value.minutes,
			seconds: +(c.value.seconds ?? 0),
			milliseconds: 0
		}) : null;
	};
	return {
		textPasted: s,
		parseFreeInput: (e, t) => {
			if (typeof n.value.pattern == "string") return u(e, n.value.pattern, t);
			if (Array.isArray(n.value.pattern)) {
				let r = null;
				for (let i of n.value.pattern) if (r = u(e, i, t), r) break;
				return r;
			}
			return typeof n.value.pattern == "function" ? n.value.pattern(e) : null;
		},
		applyMaxValues: (e, t) => {
			let n = {
				MM: 12,
				DD: 31,
				hh: 23,
				mm: 59,
				ss: 59
			}, r = "", i = 0;
			for (let a = 0; a < t.length; a++) {
				let o = t[a], s = o.length, c = e.slice(i, i + s);
				if (!c) break;
				if (c.length < s) r += c;
				else {
					let e = Number.parseInt(c, 10);
					n[o] && e > n[o] && (e = n[o]), r += e.toString().padStart(s, "0").slice(0, s);
				}
				i += s;
			}
			return r;
		},
		createMaskedValue: (e, t) => {
			let n = /(YYYY|MM|DD|hh|mm|ss)/g, r = [...t.matchAll(n)].map((e) => e[0]), i = t.replace(n, "|").split("|").filter(Boolean), a = r.map((e) => e.length), o = "", s = 0;
			for (let t = 0; t < r.length; t++) {
				let n = a[t], r = e.slice(s, s + n);
				if (!r) break;
				o += r, r.length === n && i[t] && (o += i[t]), s += n;
			}
			return o;
		}
	};
}, $t = {
	key: 1,
	class: "dp--input-wrap"
}, en = [
	"id",
	"name",
	"inputmode",
	"placeholder",
	"disabled",
	"readonly",
	"required",
	"value",
	"autocomplete",
	"aria-label",
	"aria-disabled",
	"aria-invalid",
	"aria-expanded",
	"aria-controls"
], tn = {
	key: 1,
	class: "dp--clear-btn"
}, nn = ["aria-label"], rn = /* @__PURE__ */ d({
	__name: "DatepickerInput",
	props: { isMenuOpen: {
		type: Boolean,
		default: !1
	} },
	emits: [
		"clear",
		"open",
		"set-input-date",
		"close",
		"select-date",
		"set-empty-date",
		"toggle",
		"focus",
		"blur",
		"real-blur"
	],
	setup(e, { expose: t, emit: n }) {
		let c = n, l = e, { rootEmit: d, inputValue: f, rootProps: p, defaults: { textInput: m, ariaLabels: h, inline: g, config: y, range: b, multiDates: x, ui: S, inputAttrs: C } } = Q(), { checkMinMaxRange: T, isValidDate: E } = gt(), { parseFreeInput: D, textPasted: k, createMaskedValue: j, applyMaxValues: M } = Qt(), { checkKeyDown: N, checkStopPropagation: ee } = Gt(), { boolHtmlAttribute: F } = Zt(), te = I("dp-input"), L = O(null), R = O(!1), z = r(() => ({
			"dp--pointer": !p.disabled && !p.readonly && !m.value.enabled,
			"dp--disabled": p.disabled,
			"dp--input-readonly": !m.value.enabled,
			"dp--input": !0,
			"dp--input-not-clearable": !C.value.clearable,
			"dp--input-icon-pad": !C.value.hideInputIcon,
			"dp--input-valid": typeof C.value.state == "boolean" && C.value.state,
			"dp--input-invalid": typeof C.value.state == "boolean" && !C.value.state,
			"dp--input-focus": R.value || l.isMenuOpen,
			"dp--input-reg": !m.value.enabled,
			...S.value.input
		})), B = () => {
			c("set-input-date", null), C && p.autoApply && (c("set-empty-date"), L.value = null);
		}, ne = (e) => {
			if (m.value.separators?.length) {
				let t = new RegExp(m.value.separators.map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"));
				return e.split(t);
			}
			return e.split(m.value.rangeSeparator);
		}, re = (e) => {
			let [t, n] = ne(e);
			if (t) {
				let e = D(t.trim(), f.value), r = n ? D(n.trim(), f.value) : void 0;
				if (Te(e, r)) return;
				let i = e && r ? [e, r] : [e];
				T(r, i, 0) && (L.value = e ? i : null);
			}
		}, H = () => {
			k.value = !0;
		}, U = (e) => {
			if (b.value.enabled) re(e);
			else if (x.value.enabled) {
				let t = e.split(";");
				L.value = t.map((e) => D(e.trim())).filter((e) => !!e);
			} else L.value = D(e, f.value);
		}, W = (e) => {
			let t = typeof e == "string" ? e : e.target?.value, n = m?.value?.maskFormat, r = t;
			if (typeof n == "string") {
				let e = [...n.matchAll(/(YYYY|MM|DD|hh|mm|ss)/g)].map((e) => e[0]), i = t.replace(/\D/g, ""), a = M(i, e);
				r = j(a, n);
			}
			r === "" ? B() : (m.value.openMenu && !l.isMenuOpen && c("open"), U(r), c("set-input-date", L.value)), k.value = !1, f.value = r, d("text-input", e, L.value);
		}, ie = (e) => {
			m.value.enabled ? (U(e.target.value), m.value.enterSubmit && E(L.value) && f.value !== "" ? (c("set-input-date", L.value, !0), L.value = null) : m.value.enterSubmit && f.value === "" && (L.value = null, c("clear"))) : G(e);
		}, ae = (e, t) => {
			m.value.enabled && m.value.tabSubmit && !t && U(e.target.value), m.value.tabSubmit && E(L.value) && f.value !== "" ? (c("set-input-date", L.value, !0, !0), L.value = null) : m.value.tabSubmit && f.value === "" && (L.value = null, c("clear"));
		}, oe = () => {
			R.value = !0, c("focus"), _().then(() => {
				m.value.enabled && m.value.selectOnFocus && te.value?.select();
			});
		}, G = (e) => {
			if (ee(e, y.value, !0), m.value.enabled && m.value.openMenu && !g.value.input) {
				if (m.value.openMenu === "open" && !l.isMenuOpen) return c("open");
				if (m.value.openMenu === "toggle") return c("toggle");
			} else m.value.enabled || c("toggle");
		}, se = () => {
			c("real-blur"), R.value = !1, (!l.isMenuOpen || g.value.enabled && g.value.input) && c("blur"), (p.autoApply && m.value.enabled && L.value && !l.isMenuOpen || m.value.applyOnBlur) && (c("set-input-date", L.value), c("select-date"), L.value = null);
		}, K = (e) => {
			ee(e, y.value, !0), c("clear");
		}, q = () => {
			c("close");
		}, ce = (e) => {
			if (e.key === "Tab" && ae(e), e.key === "Enter" && (ie(e), y.value.allowPreventDefault && (e.preventDefault(), ee(e, y.value, !0))), e.key === "Escape" && m.value.escClose && q(), !m.value.enabled) {
				if (e.code === "Tab") return;
				e.preventDefault();
			}
		}, le = () => {
			te.value?.focus({ preventScroll: !0 });
		}, ue = (e) => {
			L.value = e;
		}, de = (e) => {
			e.key === Z.tab && ae(e, !0);
		};
		return t({
			focusInput: le,
			setParsedDate: ue
		}), (t, n) => (w(), o("div", { onClick: G }, [!t.$slots["dp-input"] && !P(g).enabled ? A(t.$slots, "trigger", {}, void 0, void 0, 0) : a("", !0), !t.$slots.trigger && (!P(g).enabled || P(g).input) ? (w(), o("div", $t, [
			!t.$slots.trigger && (!P(g).enabled || P(g).enabled && P(g).input) ? A(t.$slots, "dp-input", {
				value: P(f),
				isMenuOpen: e.isMenuOpen,
				onInput: W,
				onEnter: ie,
				onTab: ae,
				onClear: K,
				onBlur: se,
				onKeypress: ce,
				onPaste: H,
				onFocus: oe,
				openMenu: () => t.$emit("open"),
				closeMenu: () => t.$emit("close"),
				toggleMenu: () => t.$emit("toggle")
			}, () => [s("input", {
				id: P(C).id,
				ref: "dp-input",
				"data-test-id": "dp-input",
				name: P(C).name,
				class: v(z.value),
				inputmode: P(C).inputmode,
				placeholder: P(p).placeholder,
				disabled: P(F)(P(p).disabled),
				readonly: P(F)(P(p).readonly),
				required: P(F)(P(C).required),
				value: P(f),
				autocomplete: P(C).autocomplete,
				"aria-label": P(h).input,
				"aria-disabled": P(p).disabled || void 0,
				"aria-invalid": P(C).state === !1 || void 0,
				role: "combobox",
				"aria-haspopup": "dialog",
				"aria-expanded": e.isMenuOpen,
				"aria-controls": P(p).menuId,
				onInput: W,
				onBlur: se,
				onFocus: oe,
				onKeypress: ce,
				onKeydown: n[0] ||= (e) => ce(e),
				onPaste: H,
				onInvalid: n[1] ||= (e) => P(d)("invalid", e)
			}, null, 42, en)], void 0, 0) : a("", !0),
			s("div", { onClick: n[4] ||= (e) => c("toggle") }, [t.$slots["input-icon"] && !P(C).hideInputIcon ? (w(), o("span", {
				key: 0,
				class: "dp--input-icon",
				onClick: n[2] ||= (e) => c("toggle")
			}, [A(t.$slots, "input-icon")])) : a("", !0), !t.$slots["input-icon"] && !P(C).hideInputIcon && !t.$slots["dp-input"] ? (w(), i(P(qe), {
				key: 1,
				"aria-label": P(h)?.calendarIcon,
				class: "dp--input-icon dp--input-icons",
				onClick: n[3] ||= (e) => c("toggle")
			}, null, 8, ["aria-label"])) : a("", !0)]),
			t.$slots["clear-icon"] && (P(C).alwaysClearable || P(f) && P(C).clearable && !P(p).disabled && !P(p).readonly) ? (w(), o("span", tn, [A(t.$slots, "clear-icon", { clear: K })])) : a("", !0),
			!t.$slots["clear-icon"] && (P(C).alwaysClearable || P(C).clearable && P(f) && !P(p).disabled && !P(p).readonly) ? (w(), o("button", {
				key: 2,
				"aria-label": P(h)?.clearInput,
				class: "dp--clear-btn",
				type: "button",
				"data-test-id": "clear-input-value-btn",
				onKeydown: n[5] ||= (e) => P(N)(e, () => K(e), !0, P(y).spaceConfirm, de),
				onClick: n[6] ||= V((e) => K(e), ["prevent"])
			}, [u(P(Je), { class: "dp--input-icons" })], 40, nn)) : a("", !0)
		])) : a("", !0)]));
	}
}), an = (e) => {
	let { rootProps: t, modelValue: n, getDate: r, defaults: { range: i, multiDates: a } } = Q(), { isDateBefore: o } = Kt(), s = () => {
		let e = r();
		return t.actionRow?.nowBtnRound && (e = Me(e, {
			roundingMethod: t.actionRow.nowBtnRound.rounding ?? "ceil",
			nearestTo: t.actionRow.nowBtnRound.roundTo ?? 15
		})), e;
	}, c = () => {
		let e = s();
		!i.value.enabled && !a.value.enabled ? n.value = e : n.value && Array.isArray(n.value) && n.value[0] ? a.value.enabled ? n.value = [...n.value, e] : n.value = o(e, n.value[0]) ? [e, n.value[0]] : [n.value[0], e] : n.value = [e], l();
	}, l = () => {
		t.autoApply && e && e("select-date");
	};
	return {
		selectCurrentDate: c,
		selectOnAutoApply: l
	};
}, on = {
	ref: "action-row",
	class: "dp--action-row"
}, sn = ["title"], cn = {
	ref: "action-buttons-container",
	class: "dp--action-buttons",
	"data-dp-element": "action-row"
}, ln = ["disabled"], un = /* @__PURE__ */ d({
	__name: "ActionRow",
	props: {
		menuMount: {
			type: Boolean,
			default: !1
		},
		calendarWidth: { default: 0 }
	},
	emits: [
		"close-picker",
		"select-date",
		"select-now"
	],
	setup(t, { emit: n }) {
		let i = n, c = t, { rootEmit: u, rootProps: d, modelValue: f, defaults: { actionRow: p, multiCalendars: m, inline: h, range: g, multiDates: _, formats: v } } = Q(), { selectCurrentDate: y } = an(i), { isTimeValid: x, isMonthValid: T } = gt(), { formatPreview: E } = Jt(), { checkKeyDown: D, convertType: k } = Gt(), { boolHtmlAttribute: j } = Zt(), N = I("action-buttons-container"), ee = I("action-row"), F = O(!1), te = O({});
		S(() => {
			L(), globalThis.addEventListener("resize", L);
		}), C(() => {
			globalThis.removeEventListener("resize", L);
		});
		let L = () => {
			F.value = !1, setTimeout(() => {
				let e = N.value?.getBoundingClientRect(), t = ee.value?.getBoundingClientRect();
				e && t && (te.value.maxWidth = `${t.width - e.width - 20}px`), F.value = !0;
			}, 0);
		}, R = r(() => g.value.enabled && !g.value.partialRange && f.value ? f.value.length === 2 : !0), z = r(() => !x.value(f.value) || !T.value(f.value) || !R.value), B = () => {
			let e = v.value.preview;
			return d.timePicker || d.monthPicker, e(k(f.value));
		}, V = () => {
			let e = f.value;
			return m.value.count > 0 ? `${E(e[0])} - ${E(e[1])}` : [E(e[0]), E(e[1])];
		}, ne = r(() => !f.value || !c.menuMount ? "" : typeof v.value.preview == "string" ? Array.isArray(f.value) ? f.value.length === 2 && f.value[1] ? V() : _.value.enabled ? f.value.map((e) => `${E(e)}`) : d.modelAuto ? `${E(f.value[0])}` : `${E(f.value[0])} -` : E(f.value) : B()), re = () => _.value.enabled ? "; " : " - ", H = r(() => Array.isArray(ne.value) ? ne.value.join(re()) : ne.value), U = () => {
			x.value(f.value) && T.value(f.value) && R.value ? i("select-date") : u("invalid-select");
		};
		return (t, n) => (w(), o("div", on, [t.$slots["action-row"] ? A(t.$slots, "action-row", {
			modelValue: P(f),
			disabled: z.value,
			selectDate: () => t.$emit("select-date"),
			closePicker: () => t.$emit("close-picker")
		}, void 0, void 0, 0) : (w(), o(e, { key: 1 }, [P(p).showPreview ? (w(), o("div", {
			key: 0,
			class: "dp--selection-preview",
			title: H.value || void 0,
			style: b(te.value)
		}, [t.$slots["action-preview"] && F.value ? A(t.$slots, "action-preview", {
			value: P(f),
			formatValue: H.value
		}, void 0, void 0, 0) : a("", !0), !t.$slots["action-preview"] && F.value ? (w(), o(e, { key: 1 }, [l(M(H.value), 1)], 64)) : a("", !0)], 12, sn)) : a("", !0), s("div", cn, [t.$slots["action-buttons"] ? A(t.$slots, "action-buttons", {
			value: P(f),
			selectDate: U,
			selectionDisabled: z.value
		}, void 0, void 0, 0) : a("", !0), t.$slots["action-buttons"] ? a("", !0) : (w(), o(e, { key: 1 }, [
			!P(h).enabled && P(p).showCancel ? (w(), o("button", {
				key: 0,
				ref: "cancel-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-cancel",
				onClick: n[0] ||= (e) => t.$emit("close-picker"),
				onKeydown: n[1] ||= (e) => P(D)(e, () => t.$emit("close-picker"))
			}, M(P(p).cancelBtnLabel), 545)) : a("", !0),
			P(p).showNow ? (w(), o("button", {
				key: 1,
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-cancel",
				onClick: n[2] ||= (...e) => P(y) && P(y)(...e),
				onKeydown: n[3] ||= (e) => P(D)(e, () => P(y)())
			}, M(P(p).nowBtnLabel), 33)) : a("", !0),
			P(p).showSelect ? (w(), o("button", {
				key: 2,
				ref: "select-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-select",
				disabled: P(j)(z.value),
				"data-test-id": "select-button",
				onKeydown: n[4] ||= (e) => P(D)(e, () => U()),
				onClick: U
			}, M(P(p).selectBtnLabel), 41, ln)) : a("", !0)
		], 64))], 512)], 64))], 512));
	}
}), dn = () => {
	let { rootProps: e, defaults: { multiCalendars: t } } = Q();
	return {
		hideNavigationButtons: r(() => (t) => e.hideNavigation?.includes(t)),
		showLeftIcon: r(() => (e) => t.value.count ? t.value.solo ? !0 : e === 0 : !0),
		showRightIcon: r(() => (e) => t.value.count ? t.value.solo ? !0 : e === t.value.count - 1 : !0)
	};
}, fn = ["role", "tabindex"], pn = {
	ref: "header",
	class: "dp--selection-grid-header"
}, mn = ["aria-label"], hn = [
	"aria-label",
	"aria-selected",
	"aria-disabled",
	"data-dp-action-element",
	"data-dp-element-active",
	"data-test-id",
	"onClick",
	"onKeydown",
	"onMouseover"
], gn = ["aria-label", "data-dp-action-element"], _n = /* @__PURE__ */ d({
	__name: "SelectionOverlay",
	props: {
		items: {},
		type: {},
		useRelative: { type: Boolean },
		height: {},
		overlayLabel: {},
		isLast: { type: Boolean },
		level: {}
	},
	emits: [
		"selected",
		"toggle",
		"hover-value"
	],
	setup(t, { emit: n }) {
		let i = n, c = t, { setState: u, defaults: { ariaLabels: d, config: f } } = Q(), { hideNavigationButtons: p } = dn(), { handleEventPropagation: m, checkKeyDown: h } = Gt(), g = I("toggle-button"), y = I("header"), T = I("overlay-container"), E = I("grid-wrap"), D = U(), j = O(!1), N = O(null), ee = O(), F = O(0);
		x(() => {
			N.value = null;
		}), S(async () => {
			await _(), ie(), u("arrowNavigationLevel", c.level ?? 1);
		}), C(() => {
			u("arrowNavigationLevel", (c.level ?? 1) - 1);
		});
		let R = r(() => ({
			"dp--overlay": !0,
			"dp--overlay-absolute": !c.useRelative,
			"dp--overlay-relative": c.useRelative
		})), B = r(() => c.useRelative ? {
			height: `${c.height}px`,
			width: "var(--dp-menu-min-width)"
		} : void 0), ne = r(() => ({ "dp--overlay-col": !0 })), H = r(() => ({
			"dp--btn-base dp--bg-none": !0,
			"dp--button": !0,
			"dp--overlay-action": !0,
			"dp--over-action-scroll": j.value,
			"dp--button-bottom": c.isLast
		})), W = r(() => ({
			"dp--overlay-container": !0,
			"dp--container-flex": c.items?.length <= 6,
			"dp--container-block": c.items?.length > 6
		}));
		L(() => c.items, () => ie(!1), { deep: !0 });
		let ie = (e = !0) => {
			_().then(() => {
				let t = re(E), n = re(g), r = re(T), i = re(y), a = n ? n.getBoundingClientRect().height : 0;
				t && (t.getBoundingClientRect().height ? F.value = t.getBoundingClientRect().height - a - (i?.getBoundingClientRect().height ?? 0) : F.value = f.value.modeHeight - a - (i?.getBoundingClientRect().height ?? 0));
				let o = D.value?.find((e) => {
					let { dpElementActive: t } = e.dataset;
					return t === `${c.level ?? 1}`;
				});
				o && r && e && (r.scrollTop = o.offsetTop - r.offsetTop - (F.value / 2 - o.getBoundingClientRect().height) - a);
			});
		}, ae = (e) => {
			e.disabled || i("selected", e.value);
		}, oe = () => {
			i("toggle");
		}, G = (e) => {
			f.value.escClose && (oe(), m(e, f.value));
		}, se = (e) => {
			ee.value = e, i("hover-value", e);
		}, K = (e) => {
			if (e.key === Z.esc) return G(e);
		}, q = (e) => {
			if (e.key === Z.enter) return oe();
		};
		return (n, r) => (w(), o("div", {
			ref: "grid-wrap",
			class: v(R.value),
			style: b(B.value),
			role: t.useRelative ? void 0 : "presentation",
			tabindex: t.useRelative ? void 0 : "0",
			onKeydown: K,
			onClick: r[0] ||= V(() => {}, ["prevent"])
		}, [
			s("div", pn, [A(n.$slots, "header")], 512),
			s("div", {
				ref: "overlay-container",
				"aria-label": t.overlayLabel,
				class: v(W.value),
				style: b({ "--dp-overlay-height": `${F.value}px` }),
				role: "listbox"
			}, [A(n.$slots, "overlay", {}, () => [(w(!0), o(e, null, k(t.items, (r, i) => (w(), o("div", {
				key: i,
				class: v(["dp--overlay-row", { "dp--flex-row": t.items.length >= 3 }]),
				role: "presentation"
			}, [(w(!0), o(e, null, k(r, (e) => (w(), o("div", {
				key: e.value,
				ref_for: !0,
				ref_key: "colRefs",
				ref: D,
				role: "option",
				class: v(ne.value),
				"aria-label": e.ariaLabel ?? e.text,
				"aria-selected": e.active || void 0,
				"aria-disabled": e.disabled || void 0,
				"data-dp-action-element": t.level ?? 1,
				"data-dp-element-active": e.active ? t.level ?? 1 : void 0,
				tabindex: "0",
				"data-test-id": e.text,
				onClick: V((t) => ae(e), ["prevent"]),
				onKeydown: (t) => P(h)(t, () => ae(e), !0),
				onMouseover: (t) => se(e.value)
			}, [s("div", { class: v(e.className) }, [A(n.$slots, "item", { item: e }, () => [l(M(e.text), 1)])], 2)], 42, hn))), 128))], 2))), 128))])], 14, mn),
			n.$slots["button-icon"] ? z((w(), o("button", {
				key: 0,
				ref: "toggle-button",
				type: "button",
				"aria-label": P(d)?.toggleOverlay,
				class: v(H.value),
				tabindex: "0",
				"data-dp-action-element": t.level ?? 1,
				onClick: oe,
				onKeydown: q
			}, [A(n.$slots, "button-icon")], 42, gn)), [[te, !P(p)(t.type)]]) : a("", !0)
		], 46, fn));
	}
}), vn = ["data-dp-mobile"], yn = /* @__PURE__ */ d({
	__name: "InstanceWrap",
	props: {
		stretch: { type: Boolean },
		collapse: { type: Boolean }
	},
	setup(e) {
		let { defaults: { multiCalendars: t } } = Q(), { isMobile: n } = qt(), i = r(() => t.value.count > 0 ? [...Array.from({ length: t.value.count }).keys()] : [0]);
		return (r, a) => (w(), o("div", {
			class: v({
				"dp--menu-inner": !e.stretch,
				"dp--menu--inner-stretched": e.stretch,
				"dp--flex-display": P(t).count > 0,
				"dp--flex-display-collapsed": e.collapse
			}),
			"data-dp-mobile": P(n)
		}, [A(r.$slots, "default", {
			instances: i.value,
			wrapClass: { "dp--instance-calendar": P(t).count > 0 }
		})], 10, vn));
	}
}), bn = [
	"data-dp-element",
	"tabindex",
	"inert",
	"aria-hidden",
	"disabled",
	"aria-label",
	"aria-disabled"
], xn = /* @__PURE__ */ d({
	__name: "ArrowBtn",
	props: {
		ariaLabel: {},
		elName: {},
		disabled: { type: Boolean },
		inactive: { type: Boolean }
	},
	emits: ["activate", "set-ref"],
	setup(e, { emit: t }) {
		let { boolHtmlAttribute: n } = Zt(), { checkKeyDown: r } = Gt(), i = t;
		return (t, a) => (w(), o("button", {
			ref: "arrow-btn",
			type: "button",
			"data-dp-element": e.elName,
			"data-dp-action-element": "0",
			class: "dp--btn-base dp--bg-none dp--arrow-btn-nav",
			tabindex: e.inactive ? -1 : 0,
			inert: e.inactive || void 0,
			"aria-hidden": e.inactive || void 0,
			disabled: P(n)(e.disabled),
			"aria-label": e.ariaLabel,
			"aria-disabled": P(n)(e.disabled),
			onClick: a[0] ||= (e) => i("activate"),
			onKeydown: a[1] ||= (e) => P(r)(e, () => i("activate"), !0)
		}, [s("span", { class: v(["dp--inner-nav", { "dp--inner-nav-disabled": e.disabled }]) }, [A(t.$slots, "default")], 2)], 40, bn));
	}
}), Sn = [
	"aria-label",
	"data-test-id",
	"aria-expanded"
], Cn = /* @__PURE__ */ d({
	__name: "YearModePicker",
	props: {
		items: {},
		instance: {},
		year: {},
		showYearPicker: {
			type: Boolean,
			default: !1
		},
		isDisabled: {}
	},
	emits: [
		"handle-year",
		"year-select",
		"toggle-year-picker"
	],
	setup(t, { emit: d }) {
		let f = d, p = t, { showRightIcon: m, showLeftIcon: h } = dn(), { rootProps: g, defaults: { config: _, ariaLabels: y, ui: b } } = Q(), { showTransition: x, transitionName: S } = mt(), { formatYear: C } = Jt(), { boolHtmlAttribute: T } = Zt(), E = O(!1), D = r(() => C(p.year)), k = (e) => {
			E.value = !E.value, f("toggle-year-picker", { show: e });
		}, j = (e) => {
			E.value = !1, f("year-select", e);
		}, N = (e = !1) => {
			f("handle-year", e);
		};
		return (r, d) => (w(), o(e, null, [s("div", { class: v(["dp--year-mode-picker", { "dp--hidden-el": E.value }]) }, [
			P(h)(t.instance) ? (w(), i(xn, {
				key: 0,
				ref: "mpPrevIconRef",
				"aria-label": P(y)?.prevYear,
				disabled: P(T)(t.isDisabled(!1)),
				class: v(P(b)?.navBtnPrev),
				onActivate: d[0] ||= (e) => N(!1)
			}, {
				default: R(() => [r.$slots["arrow-left"] ? A(r.$slots, "arrow-left", {}, void 0, void 0, 0) : a("", !0), r.$slots["arrow-left"] ? a("", !0) : (w(), i(P(Ye), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : a("", !0),
			s("button", {
				ref: "mpYearButtonRef",
				class: "dp--btn-base dp--bg-none dp--month-year-select-base dp--year-select",
				type: "button",
				"aria-label": `${t.year}-${P(y)?.openYearsOverlay}`,
				"data-test-id": `year-mode-btn-${t.instance}`,
				"aria-haspopup": "dialog",
				"aria-expanded": t.showYearPicker,
				"data-dp-action-element": "0",
				onClick: d[1] ||= () => k(),
				onKeydown: d[2] ||= B(V(() => k(), ["prevent"]), ["enter"])
			}, [r.$slots.year ? A(r.$slots, "year", {
				text: D.value,
				value: t.year
			}, void 0, void 0, 0) : a("", !0), r.$slots.year ? a("", !0) : (w(), o(e, { key: 1 }, [l(M(t.year), 1)], 64))], 40, Sn),
			P(m)(t.instance) ? (w(), i(xn, {
				key: 1,
				ref: "mpNextIconRef",
				"aria-label": P(y)?.nextYear,
				disabled: P(T)(t.isDisabled(!0)),
				class: v(P(b)?.navBtnNext),
				onActivate: d[3] ||= (e) => N(!0)
			}, {
				default: R(() => [r.$slots["arrow-right"] ? A(r.$slots, "arrow-right", {}, void 0, void 0, 0) : a("", !0), r.$slots["arrow-right"] ? a("", !0) : (w(), i(P(Xe), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : a("", !0)
		], 2), u(n, {
			name: P(S)(t.showYearPicker),
			css: P(x)
		}, {
			default: R(() => [t.showYearPicker ? (w(), i(_n, {
				key: 0,
				items: t.items,
				"is-last": P(g).autoApply && !P(_).keepActionRow,
				"overlay-label": P(y)?.yearPicker?.(!0),
				type: "year",
				onToggle: k,
				onSelected: d[4] ||= (e) => j(e)
			}, c({
				"button-icon": R(() => [r.$slots["calendar-icon"] ? A(r.$slots, "calendar-icon", {}, void 0, void 0, 0) : a("", !0), r.$slots["calendar-icon"] ? a("", !0) : (w(), i(P(qe), { key: 1 }))]),
				_: 2
			}, [r.$slots["year-overlay-value"] ? {
				name: "item",
				fn: R(({ item: e }) => [A(r.$slots, "year-overlay-value", {
					text: e.text,
					value: e.value
				})]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"is-last",
				"overlay-label"
			])) : a("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 64));
	}
}), wn = () => {
	let { getDate: e, rootEmit: t, state: n, month: i, year: a, modelValue: o, calendars: s, rootProps: c, defaults: { multiCalendars: l, range: u, safeDates: d, filters: f, highlight: p } } = Q(), { resetDate: m, getYearFromDate: h, checkHighlightYear: g, groupListAndMap: _ } = Kt(), { getYears: v } = Yt(), { validateMonthYear: y, checkMinMaxValue: b } = gt(), x = O([!1]), C = r(() => v()), w = r(() => (t, n) => {
		let r = X(m(e()), {
			month: i.value(t),
			year: a.value(t)
		}), o = n ? ge(r) : Be(r);
		return y(o, c.preventMinMaxNavigation, n);
	}), T = () => Array.isArray(o.value) && l.value.solo && o.value[1], E = () => {
		for (let t = 0; t < l.value.count; t++) if (t === 0) s.value[t] = s.value[0];
		else if (t === l.value.count - 1 && T()) s.value[t] = {
			month: J(o.value[1]),
			year: Y(o.value[1])
		};
		else {
			let n = X(e(), s.value[t - 1]);
			s.value[t] = {
				month: J(n),
				year: Y(le(n, 1))
			};
		}
	}, D = (t) => {
		if (!t) return E();
		let n = X(e(), s.value[t]);
		return s.value[0].year = Y(We(n, l.value.count - 1)), E();
	}, k = (e, t) => {
		let n = de(t, e);
		return u.value.showLastInRange && n > 1 ? t : e;
	}, A = (e) => c.focusStartDate || l.value.solo ? e[0] : e[1] ? k(e[0], e[1]) : e[0], j = () => {
		if (o.value) {
			let e = Array.isArray(o.value) ? A(o.value) : o.value;
			s.value[0] = {
				month: J(e),
				year: Y(e)
			};
		}
	}, M = () => {
		j(), l.value.count && E();
	};
	L(o, (e, t) => {
		n.isTextInputDate && JSON.stringify(e ?? {}) !== JSON.stringify(t ?? {}) && M();
	}), S(() => {
		M();
	});
	let N = (e, n) => {
		s.value[n].year = e, t("update-month-year", {
			instance: n,
			year: e,
			month: s.value[n].month
		}), l.value.count && !l.value.solo && D(n);
	}, ee = r(() => (e) => _(C.value, (t) => ({
		active: a.value(e) === t.value,
		disabled: b(t.value, h(d.value.minDate), h(d.value.maxDate)) || f.value.years?.includes(t.value),
		highlighted: g(p.value, t.value)
	}))), P = (e, t) => {
		N(e, t), I(t);
	}, F = (e, t = !1) => {
		if (!w.value(e, t)) {
			let n = t ? a.value(e) + 1 : a.value(e) - 1;
			N(n, e);
		}
	}, I = (e, n) => {
		n === void 0 ? x.value[e] = !x.value[e] : x.value[e] = n, x.value[e] ? t("overlay-toggle", {
			open: !0,
			overlay: it.year
		}) : t("overlay-toggle", {
			open: !1,
			overlay: it.year
		});
	};
	return {
		isDisabled: w,
		groupedYears: ee,
		showYearPicker: x,
		selectYear: N,
		setStartDate: () => {
			c.startDate && (o.value && c.focusStartDate || !o.value) && N(Y(e(c.startDate)), 0);
		},
		toggleYearPicker: I,
		handleYearSelect: P,
		handleYear: F
	};
}, Tn = () => {
	let { isDateAfter: e, isDateBefore: t, isDateEqual: n } = Kt(), { getDate: r, rootEmit: i, rootProps: a, modelValue: o, defaults: { range: s } } = Q();
	return {
		getRangeWithFixedDate: (r) => Array.isArray(o.value) && (o.value.length === 2 || o.value.length === 1 && s.value.partialRange) ? s.value.fixedStart && (e(r, o.value[0]) || n(r, o.value[0])) ? [o.value[0], r] : s.value.fixedEnd && (t(r, o.value[1]) || n(r, o.value[1])) ? [r, o.value[1]] : (i("invalid-fixed-range", r), o.value) : [],
		setPresetDate: (e) => {
			Array.isArray(e.value) && e.value.length <= 2 && s.value.enabled ? o.value = e.value.map((e) => r(e)) : Array.isArray(e.value) || (o.value = r(e.value));
		},
		checkRangeAutoApply: (e, t, n) => {
			s && (e[0] && e[1] && a.autoApply && t("auto-apply", n), e[0] && !e[1] && (a.modelAuto || s.value.partialRange) && a.autoApply && t("auto-apply", n));
		},
		setMonthOrYearRange: (e) => {
			let n = o.value ? o.value.slice() : [];
			return n.length === 2 && n[1] !== null && (n = []), n.length ? (t(e, n[0]) ? n.unshift(e) : n[1] = e, i("range-end", e)) : (n = [e], i("range-start", e)), n;
		},
		handleMultiDatesSelect: (e, t) => {
			if (o.value && Array.isArray(o.value)) {
				if (o.value.some((t) => n(e, t))) {
					let t = o.value.filter((t) => !n(t, e));
					o.value = t.length ? t : null;
				} else (t && +t > o.value.length || !t) && o.value.push(e);
			} else o.value = [e];
		}
	};
}, En = (e) => {
	let { getDate: t, rootEmit: n, state: i, calendars: a, year: o, modelValue: s, rootProps: c, defaults: { range: l, highlight: u, safeDates: d, filters: f, multiDates: p } } = Q();
	ht(() => {
		i.isTextInputDate && z(Y(t(c.startDate)), 0);
	});
	let { checkMinMaxRange: m, checkMinMaxValue: h } = gt(), { isDateBetween: g, resetDateTime: v, resetDate: y, getMinMonth: b, getMaxMonth: x, checkHighlightMonth: C, groupListAndMap: w } = Kt(), { checkRangeAutoApply: T, getRangeWithFixedDate: E, handleMultiDatesSelect: D, setMonthOrYearRange: k, setPresetDate: A } = Tn(), { padZero: j } = Gt(), { getMonths: M, isOutOfYearRange: N } = Yt(), { updateFlowStep: ee, childMount: P } = dt(), F = r(() => M()), I = O(null), { groupedYears: te, showYearPicker: L, isDisabled: R, selectYear: z, toggleYearPicker: B, handleYearSelect: V, handleYear: ne, setStartDate: re } = wn();
	S(() => {
		P(), re();
	});
	let H = (e) => e ? {
		month: J(e),
		year: Y(e)
	} : {
		month: null,
		year: null
	}, U = () => s.value ? Array.isArray(s.value) ? s.value.map((e) => H(e)) : H(s.value) : H(), W = (e, t) => {
		let n = a.value[e], r = U();
		return Array.isArray(r) ? r.some((e) => e.year === n?.year && e.month === t) : n?.year === r.year && t === r.month;
	}, ie = (e, t, n) => {
		let r = U();
		return Array.isArray(r) ? o.value(t) === r[n]?.year && e === r[n]?.month : !1;
	}, ae = (e, n) => {
		if (l.value.enabled) {
			let r = U();
			if (Array.isArray(s.value) && Array.isArray(r)) {
				let r = ie(e, n, 0) || ie(e, n, 1), i = X(y(t()), {
					month: e,
					year: o.value(n)
				});
				return g(s.value, I.value, i) && !r;
			}
			return !1;
		}
		return !1;
	}, oe = r(() => (e) => w(F.value, (t) => {
		let n = W(e, t.value), r = G(t.value, e), i = _e(r, "MMMM", { locale: c.locale });
		return {
			active: n,
			disabled: h(t.value, b(o.value(e), d.value.minDate), x(o.value(e), d.value.maxDate)) || pe(d.value.disabledDates, o.value(e), t.value) || f.value.months?.includes(t.value) || !me(d.value.allowedDates, o.value(e), t.value) || N(o.value(e)),
			isBetween: ae(t.value, e),
			highlighted: C(u.value, t.value, o.value(e)),
			ariaLabel: i
		};
	})), G = (e, n) => X(y(t()), {
		month: e,
		year: o.value(n)
	}), se = (n, r) => {
		let i = s.value ? s.value : y(t());
		s.value = X(i, {
			month: n,
			year: o.value(r)
		}), e("auto-apply"), ee("month");
	}, K = (t, n) => {
		let r = G(t, n);
		l.value.fixedEnd || l.value.fixedStart ? s.value = E(r) : s.value ? m(r, s.value) && (s.value = k(G(t, n))) : s.value = [G(t, n)], _().then(() => {
			T(s.value, e, s.value.length < 2);
		});
	}, q = (t, n) => {
		D(G(t, n), p.value.limit), e("auto-apply", !0);
	}, ce = (e, t) => (a.value[t].month = e, ue(t, a.value[t].year, e), p.value.enabled ? q(e, t) : l.value.enabled ? K(e, t) : se(e, t)), le = (e, t) => {
		z(e, t), ue(t, e, null);
	}, ue = (e, t, r) => {
		let i = r;
		if (!i && i !== 0) {
			let t = U();
			i = Array.isArray(t) ? t[e].month : t.month;
		}
		n("update-month-year", {
			instance: e,
			year: t,
			month: i
		});
	}, de = (e, t) => {
		I.value = G(e, t);
	}, fe = (t) => {
		A({ value: t }), e("auto-apply");
	}, pe = (e, n, r) => {
		if (e instanceof Map) {
			let t = `${j(r + 1)}-${n}`;
			return e.size ? e.has(t) : !1;
		}
		return typeof e == "function" && e(v(X(t(), {
			month: r,
			year: n
		}), !0));
	}, me = (e, t, n) => {
		if (e instanceof Map) {
			let r = `${j(n + 1)}-${t}`;
			return !e.size || e.has(r);
		}
		return !0;
	};
	return {
		groupedMonths: oe,
		groupedYears: te,
		year: o,
		isDisabled: R,
		showYearPicker: L,
		modelValue: s,
		toggleYearPicker: B,
		handleYearSelect: V,
		handleYear: ne,
		presetDate: fe,
		setHoverDate: de,
		selectMonth: ce,
		selectYear: le,
		getModelMonthYear: U
	};
}, $ = /* @__PURE__ */ function(e) {
	return e.Input = "input", e.DatePicker = "date-picker", e.Calendar = "calendar", e.DatePickerHeader = "date-picker-header", e.Menu = "menu", e.ActionRow = "action-row", e.TimePicker = "time-picker", e.TimeInput = "time-input", e.PassTrough = "pass-trough", e.MonthPicker = "month-picker", e.YearMode = "year-mode", e.QuarterPicker = "quarter-picker", e.YearPicker = "year-picker", e;
}({}), Dn = [
	$.TimeInput,
	$.TimePicker,
	$.PassTrough
], On = [
	{
		name: "trigger",
		use: [$.Input]
	},
	{
		name: "input-icon",
		use: [$.Input]
	},
	{
		name: "clear-icon",
		use: [$.Input]
	},
	{
		name: "dp-input",
		use: [$.Input]
	},
	{
		name: "clock-icon",
		use: [
			$.TimePicker,
			$.TimeInput,
			$.PassTrough
		]
	},
	{
		name: "arrow-left",
		use: [
			$.DatePickerHeader,
			$.PassTrough,
			$.YearMode
		]
	},
	{
		name: "arrow-right",
		use: [
			$.DatePickerHeader,
			$.PassTrough,
			$.YearMode
		]
	},
	{
		name: "arrow-up",
		use: [
			$.TimePicker,
			$.TimeInput,
			$.DatePickerHeader,
			$.PassTrough
		]
	},
	{
		name: "arrow-down",
		use: [
			$.TimePicker,
			$.TimeInput,
			$.DatePickerHeader,
			$.PassTrough
		]
	},
	{
		name: "calendar-icon",
		use: [
			$.DatePickerHeader,
			$.TimePicker,
			$.PassTrough,
			$.YearMode
		]
	},
	{
		name: "day",
		use: [$.Calendar, $.PassTrough]
	},
	{
		name: "month-overlay-value",
		use: [
			$.DatePickerHeader,
			$.PassTrough,
			$.MonthPicker
		]
	},
	{
		name: "year-overlay-value",
		use: [
			$.DatePickerHeader,
			$.PassTrough,
			$.YearMode,
			$.YearPicker
		]
	},
	{
		name: "year-overlay",
		use: [$.DatePickerHeader, $.PassTrough]
	},
	{
		name: "month-overlay",
		use: [$.DatePickerHeader, $.PassTrough]
	},
	{
		name: "month-overlay-header",
		use: [$.DatePickerHeader, $.PassTrough]
	},
	{
		name: "year-overlay-header",
		use: [$.DatePickerHeader, $.PassTrough]
	},
	{
		name: "hours-overlay-value",
		use: Dn
	},
	{
		name: "hours-overlay-header",
		use: Dn
	},
	{
		name: "minutes-overlay-value",
		use: Dn
	},
	{
		name: "minutes-overlay-header",
		use: Dn
	},
	{
		name: "seconds-overlay-value",
		use: Dn
	},
	{
		name: "seconds-overlay-header",
		use: Dn
	},
	{
		name: "hours",
		use: [
			$.TimeInput,
			$.TimePicker,
			$.PassTrough
		]
	},
	{
		name: "minutes",
		use: [
			$.TimeInput,
			$.TimePicker,
			$.PassTrough
		]
	},
	{
		name: "seconds",
		use: [
			$.TimeInput,
			$.TimePicker,
			$.PassTrough
		]
	},
	{
		name: "month",
		use: [
			$.DatePickerHeader,
			$.TimePicker,
			$.PassTrough
		]
	},
	{
		name: "year",
		use: [
			$.DatePickerHeader,
			$.TimePicker,
			$.PassTrough,
			$.YearMode
		]
	},
	{
		name: "action-buttons",
		use: [$.ActionRow]
	},
	{
		name: "action-preview",
		use: [$.ActionRow]
	},
	{
		name: "calendar-header",
		use: [$.Calendar, $.PassTrough]
	},
	{
		name: "marker-tooltip",
		use: [$.Calendar, $.PassTrough]
	},
	{
		name: "action-extra",
		use: [$.Menu]
	},
	{
		name: "time-picker-overlay",
		use: [
			$.TimePicker,
			$.TimePicker,
			$.PassTrough
		]
	},
	{
		name: "am-pm-button",
		use: [
			$.TimePicker,
			$.TimeInput,
			$.PassTrough
		]
	},
	{
		name: "left-sidebar",
		use: [$.Menu]
	},
	{
		name: "right-sidebar",
		use: [$.Menu]
	},
	{
		name: "month-year",
		use: [
			$.DatePickerHeader,
			$.PassTrough,
			$.MonthPicker,
			$.YearPicker
		]
	},
	{
		name: "time-picker",
		use: [$.DatePicker, $.PassTrough]
	},
	{
		name: "action-row",
		use: [$.ActionRow]
	},
	{
		name: "marker",
		use: [$.Calendar, $.PassTrough]
	},
	{
		name: "quarter",
		use: [$.QuarterPicker, $.PassTrough]
	},
	{
		name: "top-extra",
		use: [
			$.DatePickerHeader,
			$.PassTrough,
			$.MonthPicker,
			$.QuarterPicker,
			$.YearPicker
		]
	},
	{
		name: "tp-inline-arrow-up",
		use: [
			$.DatePicker,
			$.TimeInput,
			$.TimePicker,
			$.PassTrough
		]
	},
	{
		name: "tp-inline-arrow-down",
		use: [
			$.DatePicker,
			$.TimeInput,
			$.TimePicker,
			$.PassTrough
		]
	},
	{
		name: "arrow",
		use: [$.Menu]
	},
	{
		name: "menu-header",
		use: [$.Menu]
	}
], kn = (e, t) => On.filter((n) => e[n.name] && n.use.includes(t)).map((e) => e.name), An = (e, t) => On.map((e) => e.name).concat(t?.filter((e) => e.slot).map((e) => e.slot) ?? []).filter((t) => !!e[t]), jn = /* @__PURE__ */ d({
	__name: "MonthPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(t, { expose: n, emit: r }) {
		let s = r, l = F(), { rootProps: d, defaults: { config: f } } = Q(), p = kn(l, $.YearMode), { groupedMonths: m, groupedYears: h, year: _, isDisabled: y, showYearPicker: b, modelValue: x, presetDate: S, setHoverDate: C, selectMonth: T, selectYear: E, toggleYearPicker: D, handleYearSelect: O, handleYear: j, getModelMonthYear: M } = En(s);
		return n({
			getSidebarProps: () => ({
				modelValue: x,
				year: _,
				getModelMonthYear: M,
				selectMonth: T,
				selectYear: E,
				handleYear: j
			}),
			presetDate: S,
			toggleYearPicker: (e) => D(0, e)
		}), (n, r) => (w(), i(yn, {
			collapse: t.collapse,
			stretch: ""
		}, {
			default: R(({ instances: r, wrapClass: i }) => [(w(!0), o(e, null, k(r, (e) => (w(), o("div", {
				key: e,
				class: v(i)
			}, [n.$slots["top-extra"] ? A(n.$slots, "top-extra", { value: P(x) }, void 0, void 0, 0) : a("", !0), A(n.$slots, "month-year", g({ ref_for: !0 }, {
				mode: "month",
				year: P(_),
				months: P(m)(e),
				years: P(h)(e),
				selectMonth: P(T),
				selectYear: P(E),
				instance: e
			}), () => [u(_n, {
				items: P(m)(e),
				"is-last": P(d).autoApply && !P(f).keepActionRow,
				height: P(f).modeHeight,
				"no-overlay-focus": !!(t.noOverlayFocus || P(d).textInput),
				"use-relative": "",
				level: 0,
				type: "month",
				onSelected: (t) => P(T)(t, e),
				onHoverValue: (t) => P(C)(t, e)
			}, c({
				header: R(() => [u(Cn, {
					items: P(h)(e),
					instance: e,
					"show-year-picker": P(b)[e],
					year: P(_)(e),
					"is-disabled": (t) => P(y)(e, t),
					onHandleYear: (t) => P(j)(e, t),
					onYearSelect: (t) => P(O)(t, e),
					onToggleYearPicker: (t) => P(D)(e, t?.show)
				}, c({ _: 2 }, [k(P(p), (e) => ({
					name: e,
					fn: R((t) => [A(n.$slots, e, g({ ref_for: !0 }, t))])
				}))]), 1032, [
					"items",
					"instance",
					"show-year-picker",
					"year",
					"is-disabled",
					"onHandleYear",
					"onYearSelect",
					"onToggleYearPicker"
				])]),
				_: 2
			}, [n.$slots["month-overlay-value"] ? {
				name: "item",
				fn: R(({ item: e }) => [A(n.$slots, "month-overlay-value", {
					text: e.text,
					value: e.value
				})]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"is-last",
				"height",
				"no-overlay-focus",
				"onSelected",
				"onHoverValue"
			])])], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]));
	}
}), Mn = (e) => {
	let { rootEmit: t, getDate: n, state: i, modelValue: a, rootProps: o, defaults: { highlight: s, multiDates: c, filters: l, range: u, safeDates: d } } = Q(), { getYears: f } = Yt(), { isDateBetween: p, resetDate: m, resetDateTime: h, getYearFromDate: g, checkHighlightYear: v, groupListAndMap: y } = Kt(), { checkRangeAutoApply: b, setMonthOrYearRange: x } = Tn(), { checkMinMaxValue: C, checkMinMaxRange: w } = gt();
	ht(() => {
		i.isTextInputDate && (E.value = Y(n(o.startDate)));
	});
	let T = O(null), E = O();
	S(() => {
		o.startDate && (a.value && o.focusStartDate || !a.value) && (E.value = Y(n(o.startDate)));
	});
	let D = (e) => Array.isArray(a.value) ? a.value.some((t) => Y(t) === e) : a.value ? Y(a.value) === e : !1, k = (e) => u.value.enabled && Array.isArray(a.value) ? p(a.value, T.value, N(e)) : !1, A = (e) => !d.value.allowedDates?.size || d.value.allowedDates.has(`${e}`), j = (e) => d.value.disabledDates instanceof Map ? d.value.disabledDates.size ? d.value.disabledDates.has(`${e}`) : !1 : typeof d.value.disabledDates != "function" || d.value.disabledDates(Ie(h(Be(n())), e)), M = r(() => y(f(), (e) => {
		let t = D(e.value);
		return {
			active: t,
			disabled: C(e.value, g(d.value.minDate), g(d.value.maxDate)) || l.value.years.includes(e.value) || !A(e.value) || j(e.value),
			isBetween: k(e.value) && !t,
			highlighted: v(s.value, e.value)
		};
	})), N = (e) => Ie(m(Be(n())), e);
	return {
		groupedYears: M,
		focusYear: E,
		setHoverValue: (e) => {
			T.value = Ie(m(n()), e);
		},
		selectYear: (r) => {
			if (t("update-month-year", {
				instance: 0,
				year: r,
				month: NaN
			}), c.value.enabled) return a.value ? Array.isArray(a.value) && ((a.value?.map((e) => Y(e))).includes(r) ? a.value = a.value.filter((e) => Y(e) !== r) : a.value.push(Ie(h(n()), r))) : a.value = [Ie(h(Be(n())), r)], e("auto-apply", !0);
			u.value.enabled ? w(N(r), a.value) && (a.value = x(N(r)), _().then(() => {
				b(a.value, e, a.value.length < 2);
			})) : (a.value = N(r), e("auto-apply"));
		}
	};
}, Nn = /* @__PURE__ */ d({
	__name: "YearPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(e, { expose: t, emit: n }) {
		let r = n, { modelValue: s, defaults: { config: l }, rootProps: u } = Q(), { groupedYears: d, focusYear: p, selectYear: m, setHoverValue: h } = Mn(r);
		return t({ getSidebarProps: () => ({
			modelValue: s,
			selectYear: m
		}) }), (t, n) => (w(), o("div", null, [t.$slots["top-extra"] ? A(t.$slots, "top-extra", { value: P(s) }, void 0, void 0, 0) : a("", !0), t.$slots["month-year"] ? A(t.$slots, "month-year", y(f({
			mode: "year",
			years: P(d),
			selectYear: P(m)
		})), void 0, void 0, 1) : (w(), i(_n, {
			key: 2,
			items: P(d),
			"is-last": P(u).autoApply && !P(l).keepActionRow,
			height: P(l).modeHeight,
			"no-overlay-focus": !!(e.noOverlayFocus || P(u).textInput),
			"focus-value": P(p),
			type: "year",
			"use-relative": "",
			onSelected: P(m),
			onHoverValue: P(h)
		}, c({ _: 2 }, [t.$slots["year-overlay-value"] ? {
			name: "item",
			fn: R(({ item: e }) => [A(t.$slots, "year-overlay-value", {
				text: e.text,
				value: e.value
			})]),
			key: "0"
		} : void 0]), 1032, [
			"items",
			"is-last",
			"height",
			"no-overlay-focus",
			"focus-value",
			"onSelected",
			"onHoverValue"
		]))]));
	}
}), Pn = {
	key: 0,
	class: "dp--time-input"
}, Fn = ["data-compact", "data-collapsed"], In = [
	"data-test-id",
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"onKeydown",
	"onClick",
	"onMousedown"
], Ln = [
	"aria-label",
	"aria-expanded",
	"disabled",
	"data-dp-action-element",
	"data-test-id",
	"onKeydown",
	"onClick"
], Rn = [
	"data-test-id",
	"aria-label",
	"data-dp-action-element",
	"disabled",
	"onKeydown",
	"onClick",
	"onMousedown"
], zn = { key: 0 }, Bn = [
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"data-compact"
], Vn = /* @__PURE__ */ d({
	__name: "TimeInput",
	props: {
		hours: {},
		minutes: {},
		seconds: {},
		order: {},
		disabled: { type: Boolean },
		closeTimePickerBtn: {},
		disabledTimesConfig: {},
		validateTime: {}
	},
	emits: [
		"update:hours",
		"update:minutes",
		"update:seconds",
		"overlay-opened",
		"overlay-closed",
		"set-hours",
		"set-minutes",
		"mounted"
	],
	setup(t, { expose: d, emit: f }) {
		let p = f, m = t, { getDate: h, rootEmit: g, rootProps: _, defaults: { ariaLabels: y, filters: b, config: x, range: C, multiCalendars: T, timeConfig: D } } = Q(), { checkKeyDown: N, hoursToAmPmHours: ee } = Gt(), { boolHtmlAttribute: F } = Zt(), { sanitizeTime: I, groupListAndMap: te } = Kt(), { transitionName: L, showTransition: z } = mt(), B = E({
			hours: !1,
			minutes: !1,
			seconds: !1
		}), V = O("AM"), ne = O(null), re = O(), H = O(!1);
		S(() => {
			p("mounted");
		});
		let U = (e) => X(h(), {
			hours: e.hours,
			minutes: e.minutes,
			seconds: D.value.enableSeconds ? e.seconds : 0,
			milliseconds: 0
		}), W = r(() => _.timePicker || D.value.timePickerInline ? 0 : 1), ie = r(() => (e) => he(e, m[e]) || oe(e, m[e]) || m.disabled), ae = r(() => ({
			hours: m.hours,
			minutes: m.minutes,
			seconds: m.seconds
		})), oe = (e, t) => C.value.enabled && !C.value.disableTimeRangeValidation ? !m.validateTime(e, t) : !1, G = (e, t) => {
			if (C.value.enabled && !C.value.disableTimeRangeValidation) {
				let n = t ? +D.value[`${e}Increment`] : -+D.value[`${e}Increment`], r = m[e] + n;
				return !m.validateTime(e, r);
			}
			return !1;
		}, se = r(() => (e) => !J(+m[e] + +D.value[`${e}Increment`], e) || G(e, !0) || m.disabled), q = r(() => (e) => !J(+m[e] - D.value[`${e}Increment`], e) || G(e, !1) || m.disabled), ce = (e, t) => K(X(h(), e), t), le = (e, t) => Ve(X(h(), e), t), ue = r(() => ({
			"dp--time-col": !0,
			"dp--time-col-block": !D.value.timePickerInline,
			"dp--time-col-reg-block": !D.value.enableSeconds && D.value.is24 && !D.value.timePickerInline,
			"dp--time-col-reg-inline": !D.value.enableSeconds && D.value.is24 && D.value.timePickerInline,
			"dp--time-col-reg-with-button": !D.value.enableSeconds && !D.value.is24,
			"dp--time-col-sec": D.value.enableSeconds && D.value.is24,
			"dp--time-col-sec-with-button": D.value.enableSeconds && !D.value.is24
		})), de = r(() => D.value.timePickerInline && C.value.enabled && !T.value.count), fe = r(() => {
			let e = [{ type: "hours" }];
			return D.value.enableMinutes && e.push({
				type: "",
				separator: !0
			}, { type: "minutes" }), D.value.enableSeconds && e.push({
				type: "",
				separator: !0
			}, { type: "seconds" }), e;
		}), pe = r(() => fe.value.filter((e) => !e.separator)), me = r(() => (e) => {
			if (e === "hours") {
				let e = Ae(+m.hours);
				return {
					text: e < 10 ? `0${e}` : `${e}`,
					value: e
				};
			}
			return {
				text: m[e] < 10 ? `0${m[e]}` : `${m[e]}`,
				value: m[e]
			};
		}), he = (e, t) => {
			if (!m.disabledTimesConfig) return !1;
			let n = m.disabledTimesConfig(m.order, e === "hours" ? t : void 0);
			return !n[e] || !!n[e]?.includes(t);
		}, ge = (e, t) => t === "hours" ? V.value === "AM" ? e : e + 12 : e, _e = (e) => {
			let t = D.value.is24 ? 24 : 12, n = e === "hours" ? t : 60, r = +D.value[`${e}GridIncrement`], i = e === "hours" && !D.value.is24 ? r : 0, a = [];
			for (let t = i; t < n; t += r) a.push({
				value: D.value.is24 ? t : ge(t, e),
				text: t < 10 ? `0${t}` : `${t}`
			});
			return e === "hours" && !D.value.is24 && a.unshift({
				value: V.value === "PM" ? 12 : 0,
				text: "12"
			}), te(a, (t) => ({
				active: !1,
				disabled: b.value.times[e].includes(t.value) || !J(t.value, e) || he(e, t.value) || oe(e, t.value)
			}));
		}, ve = (e) => e >= 0 ? e : 59, be = (e) => e >= 0 ? e : 23, J = (e, t) => {
			let n = _.minTime ? U(I(_.minTime)) : null, r = _.maxTime ? U(I(_.maxTime)) : null, i = U(I(ae.value, t, t === "minutes" || t === "seconds" ? ve(e) : be(e)));
			return n && r ? (Ee(i, r) || Oe(i, r)) && (Te(i, n) || Oe(i, n)) : n ? Te(i, n) || Oe(i, n) : !r || Ee(i, r) || Oe(i, r);
		}, Se = (e) => D.value[`no${e[0].toUpperCase() + e.slice(1)}Overlay`] || m.disabled, we = (e) => {
			Se(e) || (B[e] = !B[e], B[e] ? (H.value = !0, p("overlay-opened", e)) : (H.value = !1, p("overlay-closed", e)));
		}, Y = (e) => e === "hours" ? ye : e === "minutes" ? xe : Ce, De = () => {
			re.value && clearTimeout(re.value);
		}, ke = (e, t = !0, n) => {
			let r = t ? ce : le, i = t ? +D.value[`${e}Increment`] : -+D.value[`${e}Increment`];
			J(+m[e] + i, e) && p(`update:${e}`, Y(e)(r({ [e]: +m[e] }, { [e]: +D.value[`${e}Increment`] }))), !n?.keyboard && x.value.timeArrowHoldThreshold && (re.value = setTimeout(() => {
				ke(e, t);
			}, x.value.timeArrowHoldThreshold));
		}, Ae = (e) => D.value.is24 ? e : (e >= 12 ? V.value = "PM" : V.value = "AM", ee(e)), je = () => {
			V.value === "PM" ? (V.value = "AM", p("update:hours", m.hours - 12)) : (V.value = "PM", p("update:hours", m.hours + 12)), g("am-pm-change", V.value);
		}, Me = (e) => {
			B[e] = !0;
		}, Ne = (e, t) => (we(e), p(`update:${e}`, t));
		return d({ openChildCmp: Me }), (r, d) => P(_).disabled ? a("", !0) : (w(), o("div", Pn, [
			(w(!0), o(e, null, k(fe.value, (n, i) => (w(), o("div", {
				key: i,
				class: v(ue.value),
				"data-compact": de.value && !P(D).enableSeconds,
				"data-collapsed": de.value && P(D).enableSeconds
			}, [n.separator ? (w(), o(e, { key: 0 }, [H.value ? a("", !0) : (w(), o(e, { key: 0 }, [l(":")], 64))], 64)) : (w(), o(e, { key: 1 }, [
				s("button", {
					type: "button",
					class: v({
						"dp--btn-base dp--bg-none": !0,
						"dp--inc-dec-button": !P(D).timePickerInline,
						"dp--inc-dec-button-inline": P(D).timePickerInline,
						"dp--tp-inline-btn-top": P(D).timePickerInline,
						"dp--inc-dec-button-disabled": se.value(n.type),
						"dp--hidden-el": H.value
					}),
					"data-test-id": `${n.type}-time-inc-btn-${m.order}`,
					"aria-label": P(y)?.incrementValue(n.type),
					tabindex: "0",
					disabled: P(F)(t.disabled),
					"data-dp-action-element": W.value,
					onKeydown: (e) => P(N)(e, () => ke(n.type, !0, { keyboard: !0 }), !0),
					onClick: (e) => P(x).timeArrowHoldThreshold ? void 0 : ke(n.type, !0),
					onMousedown: (e) => P(x).timeArrowHoldThreshold ? ke(n.type, !0) : void 0,
					onMouseup: De
				}, [P(D).timePickerInline ? A(r.$slots, "tp-inline-arrow-up", {}, () => [d[1] ||= s("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-l" }, null, -1), d[2] ||= s("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-r" }, null, -1)], void 0, 1) : A(r.$slots, "arrow-up", {}, () => [u(P(Qe))], void 0, 0)], 42, In),
				s("button", {
					type: "button",
					"aria-label": `${me.value(n.type).text}-${P(y)?.openTpOverlay(n.type)}`,
					"aria-haspopup": "dialog",
					"aria-expanded": B[n.type],
					class: v({
						"dp--time-display": !0,
						"dp--time-display-block": !P(D).timePickerInline,
						"dp--time-display-inline": P(D).timePickerInline,
						"dp--btn-base dp--time-invalid": ie.value(n.type),
						"dp--btn-base dp--time-overlay-btn": !ie.value(n.type),
						"dp--hidden-el": H.value
					}),
					disabled: P(F)(Se(n.type)),
					tabindex: "0",
					"data-dp-action-element": W.value,
					"data-test-id": `${n.type}-toggle-overlay-btn-${m.order}`,
					onKeydown: (e) => P(N)(e, () => we(n.type), !0),
					onClick: (e) => we(n.type)
				}, [A(r.$slots, n.type, {
					text: me.value(n.type).text,
					value: me.value(n.type).value
				}, () => [l(M(me.value(n.type).text), 1)])], 42, Ln),
				s("button", {
					type: "button",
					class: v({
						"dp--btn-base dp--bg-none": !0,
						"dp--inc-dec-button": !P(D).timePickerInline,
						"dp--inc-dec-button-inline": P(D).timePickerInline,
						"dp--tp-inline-btn-bottom": P(D).timePickerInline,
						"dp--inc-dec-button-disabled": q.value(n.type),
						"dp--hidden-el": H.value
					}),
					"data-test-id": `${n.type}-time-dec-btn-${m.order}`,
					"aria-label": P(y)?.decrementValue(n.type),
					tabindex: "0",
					"data-dp-action-element": W.value,
					disabled: P(F)(Se(n.type)),
					onKeydown: (e) => P(N)(e, () => ke(n.type, !1, { keyboard: !0 }), !0),
					onClick: (e) => P(x).timeArrowHoldThreshold ? void 0 : ke(n.type, !1),
					onMousedown: (e) => P(x).timeArrowHoldThreshold ? ke(n.type, !1) : void 0,
					onMouseup: De
				}, [P(D).timePickerInline ? A(r.$slots, "tp-inline-arrow-down", {}, () => [d[3] ||= s("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-l" }, null, -1), d[4] ||= s("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-r" }, null, -1)], void 0, 1) : A(r.$slots, "arrow-down", {}, () => [u(P($e))], void 0, 0)], 42, Rn)
			], 64))], 10, Fn))), 128)),
			P(D).is24 ? a("", !0) : (w(), o("div", zn, [A(r.$slots, "am-pm-button", {
				toggle: je,
				value: V.value
			}, () => [s("button", {
				ref_key: "amPmButton",
				ref: ne,
				type: "button",
				class: "dp--pm-am-button",
				"aria-label": P(y)?.amPmButton,
				tabindex: "0",
				disabled: P(F)(t.disabled),
				"data-dp-action-element": W.value,
				"data-compact": de.value,
				onClick: je,
				onKeydown: d[0] ||= (e) => P(N)(e, () => je(), !0)
			}, M(V.value), 41, Bn)])])),
			(w(!0), o(e, null, k(pe.value, (e) => (w(), i(n, {
				key: e,
				name: P(L)(B[e.type]),
				css: P(z)
			}, {
				default: R(() => [B[e.type] ? (w(), i(_n, {
					key: 0,
					items: _e(e.type),
					"is-last": P(_).autoApply && !P(x).keepActionRow,
					type: e.type,
					"aria-labels": P(y),
					level: P(D).timePickerInline || P(_).timePicker ? 1 : 2,
					"overlay-label": P(y).timeOverlay?.(e.type),
					onSelected: (t) => Ne(e.type, t),
					onToggle: (t) => we(e.type)
				}, c({
					"button-icon": R(() => [A(r.$slots, "clock-icon", {}, () => [r.$slots["clock-icon"] ? a("", !0) : (w(), i(j(P(D).timePickerInline ? P(qe) : P(Ze)), { key: 0 }))])]),
					_: 2
				}, [r.$slots[`${e.type}-overlay-value`] ? {
					name: "item",
					fn: R(({ item: t }) => [A(r.$slots, `${e.type}-overlay-value`, {
						text: t.text,
						value: t.value
					})]),
					key: "0"
				} : void 0, r.$slots[`${e.type}-overlay-header`] ? {
					name: "header",
					fn: R(() => [A(r.$slots, `${e.type}-overlay-header`, { toggle: () => we(e.type) })]),
					key: "1"
				} : void 0]), 1032, [
					"items",
					"is-last",
					"type",
					"aria-labels",
					"level",
					"overlay-label",
					"onSelected",
					"onToggle"
				])) : a("", !0)]),
				_: 2
			}, 1032, ["name", "css"]))), 128))
		]));
	}
}), Hn = ["data-dp-mobile"], Un = ["aria-label", "tabindex"], Wn = [
	"role",
	"aria-label",
	"tabindex"
], Gn = ["aria-label"], Kn = /* @__PURE__ */ d({
	__name: "TimePicker",
	props: {
		hours: {},
		minutes: {},
		seconds: {},
		disabledTimesConfig: { type: [Function, null] },
		noOverlayFocus: { type: Boolean },
		validateTime: { type: Function }
	},
	emits: [
		"update:hours",
		"update:minutes",
		"update:seconds"
	],
	setup(t, { expose: l, emit: d }) {
		let f = d, p = t, { rootEmit: m, setState: h, modelValue: y, rootProps: x, defaults: { ariaLabels: C, textInput: T, config: E, range: D, timeConfig: j } } = Q(), { isModelAuto: M } = Kt(), { checkKeyDown: N, findFocusableEl: ee } = Gt(), { transitionName: L, showTransition: B } = mt(), { hideNavigationButtons: V } = dn(), { isMobile: ne } = qt(), { childMount: re } = dt(), H = F(), U = I("overlay"), W = I("close-tp-btn"), ie = I("tp-input"), ae = O(!1);
		S(() => {
			re(x.timePicker ? void 0 : rt.timePicker);
		});
		let oe = r(() => D.value.enabled && x.modelAuto ? M(y.value) : !0), G = O(!1), se = (e) => ({
			hours: Array.isArray(p.hours) ? p.hours[e] : p.hours,
			minutes: Array.isArray(p.minutes) ? p.minutes[e] : p.minutes,
			seconds: Array.isArray(p.seconds) ? p.seconds[e] : p.seconds
		}), K = r(() => {
			let e = [];
			if (D.value.enabled) for (let t = 0; t < 2; t++) e.push(se(t));
			else e.push(se(0));
			return e;
		}), q = (e, t = "") => {
			let n = e !== G.value;
			G.value = e, h("arrowNavigationLevel", +!!e), n && m("overlay-toggle", {
				open: e,
				overlay: it.time
			}), _().then(() => {
				t !== "" && ie.value?.[0] && ie.value[0].openChildCmp(t);
			});
		}, ce = r(() => ({
			"dp--btn-base dp--bg-none": !0,
			"dp--button": !0,
			"dp--button-bottom": x.autoApply && !E.value.keepActionRow
		})), le = kn(H, $.TimeInput), ue = (e, t, n) => D.value.enabled ? t === 0 ? [e, K.value[1][n]] : [K.value[0][n], e] : e, de = (e) => {
			f("update:hours", e);
		}, fe = (e) => {
			f("update:minutes", e);
		}, pe = (e) => {
			f("update:seconds", e);
		}, me = () => {
			if (U.value && !T.value.enabled && !p.noOverlayFocus) {
				let e = ee(U.value);
				e && e.focus({ preventScroll: !0 });
			}
		}, he = (e) => {
			ae.value = !1, m("overlay-toggle", {
				open: !1,
				overlay: e
			});
		}, ge = (e) => {
			ae.value = !0, m("overlay-toggle", {
				open: !0,
				overlay: e
			});
		};
		return l({ toggleTimePicker: q }), (r, l) => (w(), o("div", {
			class: "dp--tp-wrap",
			"data-dp-mobile": P(ne)
		}, [!P(x).timePicker && !P(j).timePickerInline ? z((w(), o("button", {
			key: 0,
			ref: "open-tp-btn",
			type: "button",
			"data-dp-action-element": "0",
			class: v({
				...ce.value,
				"dp--hidden-el": G.value
			}),
			"aria-label": P(C)?.openTimePicker,
			tabindex: t.noOverlayFocus ? void 0 : 0,
			"data-test-id": "open-time-picker-btn",
			onKeydown: l[0] ||= (e) => P(N)(e, () => q(!0)),
			onClick: l[1] ||= (e) => q(!0)
		}, [A(r.$slots, "clock-icon", {}, () => [u(P(Ze))])], 42, Un)), [[te, !P(V)("time")]]) : a("", !0), u(n, {
			name: P(L)(G.value),
			css: P(B) && !P(j).timePickerInline
		}, {
			default: R(() => [G.value || P(x).timePicker || P(j).timePickerInline ? (w(), o("div", {
				key: 0,
				ref: "overlay",
				role: P(j).timePickerInline ? void 0 : "dialog",
				class: v({
					"dp--overlay": !P(j).timePickerInline,
					"dp--overlay-absolute": !P(x).timePicker && !P(j).timePickerInline,
					"dp--overlay-relative": P(x).timePicker
				}),
				style: b(P(x).timePicker ? { height: `${P(E).modeHeight}px` } : void 0),
				"aria-label": P(C)?.timePicker,
				tabindex: P(j).timePickerInline ? void 0 : 0
			}, [s("div", {
				class: v(P(j).timePickerInline ? "dp--time-picker-inline-container" : "dp--overlay-container dp--container-flex dp--time-picker-overlay-container"),
				style: { display: "flex" }
			}, [A(r.$slots, "time-picker-overlay", {
				hours: t.hours,
				minutes: t.minutes,
				seconds: t.seconds,
				setHours: de,
				setMinutes: fe,
				setSeconds: pe
			}, () => [s("div", { class: v(P(j).timePickerInline ? "dp--flex" : "dp--overlay-row dp--flex-row") }, [(w(!0), o(e, null, k(K.value, (e, n) => z((w(), i(Vn, {
				key: n,
				ref_for: !0,
				ref: "tp-input",
				hours: e.hours,
				minutes: e.minutes,
				seconds: e.seconds,
				order: n,
				"close-time-picker-btn": W.value,
				"disabled-times-config": t.disabledTimesConfig,
				disabled: n === 0 ? P(D).fixedStart : P(D).fixedEnd,
				"validate-time": (e, r) => t.validateTime(e, ue(r, n, e)),
				"onUpdate:hours": (e) => de(ue(e, n, "hours")),
				"onUpdate:minutes": (e) => fe(ue(e, n, "minutes")),
				"onUpdate:seconds": (e) => pe(ue(e, n, "seconds")),
				onMounted: me,
				onOverlayClosed: he,
				onOverlayOpened: ge
			}, c({ _: 2 }, [k(P(le), (e) => ({
				name: e,
				fn: R((t) => [A(r.$slots, e, g({ ref_for: !0 }, t))])
			}))]), 1032, [
				"hours",
				"minutes",
				"seconds",
				"order",
				"close-time-picker-btn",
				"disabled-times-config",
				"disabled",
				"validate-time",
				"onUpdate:hours",
				"onUpdate:minutes",
				"onUpdate:seconds"
			])), [[te, n === 0 || oe.value]])), 128))], 2)]), !P(x).timePicker && !P(j).timePickerInline ? z((w(), o("button", {
				key: 0,
				ref: "close-tp-btn",
				"data-dp-action-element": "1",
				type: "button",
				class: v({
					...ce.value,
					"dp--hidden-el": ae.value
				}),
				"aria-label": P(C)?.closeTimePicker,
				tabindex: "0",
				onKeydown: l[2] ||= (e) => P(N)(e, () => q(!1)),
				onClick: l[3] ||= (e) => q(!1)
			}, [A(r.$slots, "calendar-icon", {}, () => [u(P(qe))])], 42, Gn)), [[te, !P(V)("time")]]) : a("", !0)], 2)], 14, Wn)) : a("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 8, Hn));
	}
}), qn = () => {
	let { getDate: e, modelValue: t, time: n, rootProps: i, defaults: { range: a, timeConfig: o } } = Q(), { updateFlowStep: s } = dt(), { isDateEqual: c, setTime: l } = Kt(), u = (e, t) => Array.isArray(n[e]) ? n[e][t] : n[e], d = (e) => o.value.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[e] : n.seconds : 0, f = (t, r) => t ? l(r === void 0 ? {
		hours: n.hours,
		minutes: n.minutes,
		seconds: d()
	} : {
		hours: u("hours", r),
		minutes: u("minutes", r),
		seconds: d(r)
	}, t) : Fe(e(), d(r)), p = (e, t) => {
		n[e] = t;
	}, m = r(() => i.modelAuto && a.value.enabled ? Array.isArray(t.value) ? t.value.length > 1 : !1 : a.value.enabled), h = (e, r) => {
		let i = Object.fromEntries(Object.keys(n).map((t) => t === e ? [t, r] : [t, n[t]].slice()));
		if (m.value && !a.value.disableTimeRangeValidation) {
			let e = (e) => t.value ? l({
				hours: i.hours[e],
				minutes: i.minutes[e],
				seconds: i.seconds[e]
			}, t.value[e]) : null, n = (e) => Ne(t.value[e], 0);
			return !(c(e(0), e(1)) && (Te(e(0), n(1)) || Ee(e(1), n(0))));
		}
		return !0;
	}, g = (e, t) => {
		let r = n[e] === t ? void 0 : e;
		h(e, t) && (p(e, t), r && _().then(() => s(e)));
	}, v = (e) => {
		g("hours", e);
	}, y = (e) => {
		g("minutes", e);
	}, b = (e) => {
		g("seconds", e);
	}, x = (e, n) => {
		v(e.hours), y(e.minutes), b(e.seconds), t.value && n(t.value);
	}, S = (e) => {
		if (e) {
			let t = Array.isArray(e), n = t ? [+e[0].hours, +e[1].hours] : +e.hours, r = t ? [+e[0].minutes, +e[1].minutes] : +e.minutes, i = t ? [+(e[0].seconds ?? 0), +(e[1].seconds ?? 0)] : +(e.seconds ?? 0);
			p("hours", n), p("minutes", r), o.value.enableSeconds && p("seconds", i);
		}
	}, C = (e, t) => {
		let r = {
			hours: Array.isArray(n.hours) ? n.hours[e] : n.hours,
			disabledArr: []
		};
		return (t || t === 0) && (r.hours = t), Array.isArray(i.disabledTimes) && (r.disabledArr = a.value.enabled && Array.isArray(i.disabledTimes[e]) ? i.disabledTimes[e] : i.disabledTimes), r;
	};
	return {
		assignTime: p,
		updateHours: v,
		updateMinutes: y,
		updateSeconds: b,
		getSetDateTime: f,
		updateTimeValues: x,
		getSecondsValue: d,
		assignStartTime: S,
		validateTime: h,
		disabledTimesConfig: r(() => (e, t) => {
			if (Array.isArray(i.disabledTimes)) {
				let { disabledArr: n, hours: r } = C(e, t), i = n.filter((e) => +e.hours === r);
				return i[0]?.minutes === "*" ? {
					hours: [r],
					minutes: void 0,
					seconds: void 0
				} : {
					hours: [],
					minutes: i?.map((e) => +e.minutes) ?? [],
					seconds: i?.map((e) => e.seconds ? +e.seconds : void 0) ?? []
				};
			}
			return {
				hours: [],
				minutes: [],
				seconds: []
			};
		})
	};
}, Jn = (e) => {
	let { getDate: t, time: n, modelValue: r, state: i, defaults: { startTime: a, range: o, timeConfig: s } } = Q(), { getTimeObj: c } = Kt();
	ht(() => {
		i.isTextInputDate && b();
	});
	let { updateTimeValues: l, getSetDateTime: u, assignTime: d, assignStartTime: f, disabledTimesConfig: p, validateTime: m } = qn(), h = (e) => {
		let { hours: t, minutes: n, seconds: r } = e;
		return {
			hours: +t,
			minutes: +n,
			seconds: r ? +r : 0
		};
	}, g = () => {
		if (s.value.startTime) {
			if (Array.isArray(s.value.startTime)) {
				let e = h(s.value.startTime[0]), n = h(s.value.startTime[1]);
				return [X(t(), e), X(t(), n)];
			}
			let e = h(s.value.startTime);
			return X(t(), e);
		}
		return o.value.enabled ? [null, null] : null;
	}, _ = () => {
		if (o.value.enabled) {
			let [e, t] = g();
			r.value = [u(e, 0), u(t, 1)];
		} else r.value = u(g());
	}, v = (e) => Array.isArray(e) ? [c(t(e[0])), c(t(e[1]))] : [c(e ?? t())], y = (e, t, n) => {
		d("hours", e), d("minutes", t), d("seconds", s.value.enableSeconds ? n : 0);
	}, b = () => {
		let [e, t] = v(r.value);
		return o.value.enabled ? y([e.hours, t.hours], [e.minutes, t.minutes], [e.seconds, t.seconds]) : y(e.hours, e.minutes, e.seconds);
	};
	S(() => (f(a.value), r.value ? b() : _()));
	let x = () => {
		Array.isArray(r.value) ? r.value = r.value.map((e, t) => e && u(e, t)) : r.value = u(r.value), e("time-update");
	};
	return {
		modelValue: r,
		time: n,
		disabledTimesConfig: p,
		validateTime: m,
		updateTime: (e) => {
			l(e, x);
		}
	};
}, Yn = /* @__PURE__ */ d({
	__name: "TimePickerSolo",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: [
		"time-update",
		"mount",
		"update-flow-step"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, a = kn(F(), $.TimePicker), o = I("time-input"), { time: l, modelValue: d, disabledTimesConfig: p, updateTime: m, validateTime: h } = Jn(r);
		return S(() => {
			r("mount");
		}), t({
			getSidebarProps: () => ({
				modelValue: d,
				time: l,
				updateTime: m
			}),
			toggleTimePicker: (e, t = "") => {
				o.value?.toggleTimePicker(e, t);
			}
		}), (e, t) => (w(), i(yn, {
			"multi-calendars": 0,
			stretch: ""
		}, {
			default: R(({ wrapClass: n }) => [s("div", { class: v(n) }, [u(Kn, g({ ref: "time-input" }, e.$props, {
				hours: P(l).hours,
				minutes: P(l).minutes,
				seconds: P(l).seconds,
				"disabled-times-config": P(p),
				"validate-time": P(h),
				"onUpdate:hours": t[0] ||= (e) => P(m)({
					hours: e,
					minutes: P(l).minutes,
					seconds: P(l).seconds
				}),
				"onUpdate:minutes": t[1] ||= (e) => P(m)({
					hours: P(l).hours,
					minutes: e,
					seconds: P(l).seconds
				}),
				"onUpdate:seconds": t[2] ||= (e) => P(m)({
					hours: P(l).hours,
					minutes: P(l).minutes,
					seconds: e
				})
			}), c({ _: 2 }, [k(P(a), (t, n) => ({
				name: t,
				fn: R((n) => [A(e.$slots, t, y(f(n)))])
			}))]), 1040, [
				"hours",
				"minutes",
				"seconds",
				"disabled-times-config",
				"validate-time"
			])], 2)]),
			_: 3
		}));
	}
}), Xn = (e, t) => {
	let { getDate: n, rootProps: i, defaults: { filters: a } } = Q(), { validateMonthYearInRange: o, validateMonthYear: s } = gt(), c = (e, t) => {
		let n = e;
		return a.value.months.includes(J(n)) ? (n = t ? ce(e, 1) : Ue(e, 1), c(n, t)) : n;
	}, l = (e, t) => {
		let n = e;
		return a.value.years.includes(Y(n)) ? (n = t ? le(e, 1) : We(e, 1), l(n, t)) : n;
	}, u = (t, r = !1) => {
		let s = X(n(), {
			month: e.month,
			year: e.year
		}), u = t ? ce(s, 1) : Ue(s, 1);
		i.disableYearSelect && (u = Ie(u, e.year));
		let f = J(u), p = Y(u);
		a.value.months.includes(f) && (u = c(u, t), f = J(u), p = Y(u)), a.value.years.includes(p) && (u = l(u, t), p = Y(u)), o(f, p, t, i.preventMinMaxNavigation) && d(f, p, r);
	}, d = (e, n, r = !1) => {
		t("update-month-year", {
			month: e,
			year: n,
			fromNav: r
		});
	};
	return {
		handleMonthYearChange: u,
		isDisabled: r(() => (t) => s(X(n(), {
			month: e.month,
			year: e.year
		}), i.preventMinMaxNavigation, t)),
		updateMonthYear: d
	};
}, Zn = { class: "dp--header-wrap" }, Qn = {
	key: 0,
	class: "dp--month-year-wrap"
}, $n = { key: 0 }, er = { class: "dp--month-year-wrap" }, tr = [
	"data-dp-element",
	"aria-label",
	"aria-expanded",
	"data-test-id",
	"onClick",
	"onKeydown"
], nr = /* @__PURE__ */ d({
	__name: "DpHeader",
	props: {
		month: {},
		year: {},
		instance: {},
		years: {},
		months: {},
		menuWrapRef: {}
	},
	emits: ["update-month-year"],
	setup(t, { expose: d, emit: p }) {
		let m = p, h = t, { rootEmit: _, rootProps: b, modelValue: x, defaults: { ariaLabels: C, filters: T, config: E, highlight: D, safeDates: N, ui: ee } } = Q(), { transitionName: F, showTransition: I } = mt(), { showLeftIcon: te, showRightIcon: L } = dn(), { handleMonthYearChange: z, isDisabled: B, updateMonthYear: V } = Xn(h, m), { getMaxMonth: ne, getMinMonth: re, getYearFromDate: H, groupListAndMap: U, checkHighlightYear: W, checkHighlightMonth: ie } = Kt(), { checkKeyDown: ae } = Gt(), { formatYear: oe } = Jt(), { checkMinMaxValue: G } = gt(), { boolHtmlAttribute: se } = Zt(), { childMount: K } = dt(), q = O(!1), ce = O(!1), le = O(!1);
		S(() => {
			K(rt.header);
		});
		let ue = (e) => ({
			get: () => h[e],
			set: (t) => {
				let n = e === nt.month ? nt.year : nt.month;
				m("update-month-year", {
					[e]: t,
					[n]: h[n]
				}), e === nt.month ? ve() : ye();
			}
		}), de = r(ue(nt.month)), fe = r(ue(nt.year)), pe = r(() => (e) => ({
			month: h.month,
			year: h.year,
			items: e === nt.month ? h.months : h.years,
			instance: h.instance,
			updateMonthYear: V,
			toggle: e === nt.month ? ve : ye
		})), me = r(() => h.months.find((e) => e.value === h.month) || {
			text: "",
			value: 0
		}), he = r(() => U(h.months, (e) => ({
			active: h.month === e.value,
			disabled: G(e.value, re(h.year, N.value.minDate), ne(h.year, N.value.maxDate)) || T.value.months.includes(e.value),
			highlighted: ie(D.value, e.value, h.year)
		}))), ge = r(() => U(h.years, (e) => ({
			active: h.year === e.value,
			disabled: G(e.value, H(N.value.minDate), H(N.value.maxDate)) || T.value.years.includes(e.value),
			highlighted: W(D.value, e.value)
		}))), _e = (e, t, n) => {
			e.value = n === void 0 ? !e.value : n, e.value ? (le.value = !0, _("overlay-toggle", {
				open: !0,
				overlay: t
			})) : (le.value = !1, _("overlay-toggle", {
				open: !1,
				overlay: t
			}));
		}, ve = (e) => {
			_e(q, it.month, e);
		}, ye = (e) => {
			_e(ce, it.year, e);
		}, be = r(() => [{
			type: nt.month,
			index: 1,
			toggle: ve,
			modelValue: de.value,
			updateModelValue: (e) => de.value = e,
			text: me.value.text,
			showSelectionGrid: q.value,
			items: he.value,
			ariaLabel: C.value?.openMonthsOverlay,
			overlayLabel: C.value.monthPicker?.(!0) ?? void 0
		}, {
			type: nt.year,
			index: 2,
			toggle: ye,
			modelValue: fe.value,
			updateModelValue: (e) => fe.value = e,
			text: oe(h.year),
			showSelectionGrid: ce.value,
			items: ge.value,
			ariaLabel: C.value?.openYearsOverlay,
			overlayLabel: C.value.yearPicker?.(!0) ?? void 0
		}]), xe = r(() => b.disableYearSelect ? [be.value[0]] : b.yearFirst ? [...be.value].reverse() : be.value);
		return d({
			toggleMonthPicker: ve,
			toggleYearPicker: ye,
			handleMonthYearChange: z
		}), (r, d) => (w(), o("div", Zn, [r.$slots["month-year"] ? (w(), o("div", Qn, [A(r.$slots, "month-year", y(f({
			mode: "date",
			month: t.month,
			year: t.year,
			months: t.months,
			years: t.years,
			updateMonthYear: P(V),
			handleMonthYearChange: P(z),
			instance: t.instance,
			isDisabled: P(B)
		})))])) : (w(), o(e, { key: 1 }, [r.$slots["top-extra"] ? (w(), o("div", $n, [A(r.$slots, "top-extra", { value: P(x) })])) : a("", !0), s("div", er, [
			P(te)(t.instance) && !P(b).vertical ? (w(), i(xn, {
				key: 0,
				"aria-label": P(C)?.prevMonth,
				disabled: P(se)(P(B)(!1)),
				inactive: le.value,
				class: v(P(ee)?.navBtnPrev),
				"el-name": "action-prev",
				onActivate: d[0] ||= (e) => P(z)(!1, !0)
			}, {
				default: R(() => [r.$slots["arrow-left"] ? A(r.$slots, "arrow-left", {}, void 0, void 0, 0) : a("", !0), r.$slots["arrow-left"] ? a("", !0) : (w(), i(P(Ye), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"inactive",
				"class"
			])) : a("", !0),
			s("div", { class: v(["dp--month-year-wrap", { "dp--year-disable-select": P(b).disableYearSelect }]) }, [(w(!0), o(e, null, k(xe.value, (d) => (w(), o(e, { key: d.type }, [s("button", {
				type: "button",
				"data-dp-element": `overlay-${d.type}`,
				class: v(["dp--btn-base dp--bg-none dp--month-year-select-base dp--month-year-select", { "dp--hidden-el": le.value }]),
				"aria-label": `${d.text}-${d.ariaLabel}`,
				"aria-haspopup": "dialog",
				"aria-expanded": d.showSelectionGrid,
				"data-test-id": `${d.type}-toggle-overlay-${t.instance}`,
				tabindex: "0",
				"data-dp-action-element": "0",
				onClick: (e) => d.toggle(),
				onKeydown: (e) => P(ae)(e, () => d.toggle(), !0)
			}, [r.$slots[d.type] ? A(r.$slots, d.type, {
				text: d.text,
				value: h[d.type]
			}, void 0, void 0, 0) : a("", !0), r.$slots[d.type] ? a("", !0) : (w(), o(e, { key: 1 }, [l(M(d.text), 1)], 64))], 42, tr), u(n, {
				name: P(F)(d.showSelectionGrid),
				css: P(I)
			}, {
				default: R(() => [d.showSelectionGrid ? (w(), i(_n, {
					key: 0,
					items: d.items,
					"is-last": P(b).autoApply && !P(E).keepActionRow,
					"skip-button-ref": !1,
					type: d.type,
					"header-refs": [],
					"menu-wrap-ref": t.menuWrapRef,
					"overlay-label": d.overlayLabel,
					onSelected: d.updateModelValue,
					onToggle: d.toggle
				}, c({
					"button-icon": R(() => [r.$slots["calendar-icon"] ? A(r.$slots, "calendar-icon", {}, void 0, void 0, 0) : a("", !0), r.$slots["calendar-icon"] ? a("", !0) : (w(), i(P(qe), { key: 1 }))]),
					_: 2
				}, [
					r.$slots[`${d.type}-overlay-value`] ? {
						name: "item",
						fn: R(({ item: e }) => [A(r.$slots, `${d.type}-overlay-value`, {
							text: e.text,
							value: e.value
						})]),
						key: "0"
					} : void 0,
					r.$slots[`${d.type}-overlay`] ? {
						name: "overlay",
						fn: R(() => [A(r.$slots, `${d.type}-overlay`, g({ ref_for: !0 }, pe.value(d.type)))]),
						key: "1"
					} : void 0,
					r.$slots[`${d.type}-overlay-header`] ? {
						name: "header",
						fn: R(() => [A(r.$slots, `${d.type}-overlay-header`, { toggle: d.toggle })]),
						key: "2"
					} : void 0
				]), 1032, [
					"items",
					"is-last",
					"type",
					"menu-wrap-ref",
					"overlay-label",
					"onSelected",
					"onToggle"
				])) : a("", !0)]),
				_: 2
			}, 1032, ["name", "css"])], 64))), 128))], 2),
			P(te)(t.instance) && P(b).vertical ? (w(), i(xn, {
				key: 1,
				"aria-label": P(C)?.prevMonth,
				"el-name": "action-prev",
				disabled: P(se)(P(B)(!1)),
				inactive: le.value,
				class: v(P(ee)?.navBtnPrev),
				onActivate: d[1] ||= (e) => P(z)(!1, !0)
			}, {
				default: R(() => [r.$slots["arrow-up"] ? A(r.$slots, "arrow-up", {}, void 0, void 0, 0) : a("", !0), r.$slots["arrow-up"] ? a("", !0) : (w(), i(P(Qe), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"inactive",
				"class"
			])) : a("", !0),
			P(L)(t.instance) ? (w(), i(xn, {
				key: 2,
				ref: "rightIcon",
				"el-name": "action-next",
				disabled: P(se)(P(B)(!0)),
				"aria-label": P(C)?.nextMonth,
				inactive: le.value,
				class: v(P(ee)?.navBtnNext),
				onActivate: d[2] ||= (e) => P(z)(!0, !0)
			}, {
				default: R(() => [r.$slots[P(b).vertical ? "arrow-down" : "arrow-right"] ? A(r.$slots, P(b).vertical ? "arrow-down" : "arrow-right", {}, void 0, void 0, 0) : a("", !0), r.$slots[P(b).vertical ? "arrow-down" : "arrow-right"] ? a("", !0) : (w(), i(j(P(b).vertical ? P($e) : P(Xe)), { key: 1 }))]),
				_: 3
			}, 8, [
				"disabled",
				"aria-label",
				"inactive",
				"class"
			])) : a("", !0)
		])], 64))]));
	}
}), rr = ["inert", "aria-hidden"], ir = {
	class: "dp--calendar-header",
	role: "row"
}, ar = {
	key: 0,
	class: "dp--calendar-header-item",
	role: "gridcell"
}, or = ["aria-label"], sr = {
	key: 0,
	class: "dp--calendar-item dp--week-num",
	role: "gridcell"
}, cr = { class: "dp--cell-inner" }, lr = [
	"id",
	"aria-selected",
	"aria-disabled",
	"aria-label",
	"tabindex",
	"data-test-id",
	"data-dp-element-active",
	"onClick",
	"onTouchend",
	"onKeydown",
	"onMouseenter",
	"onMouseleave",
	"onMousedown"
], ur = /* @__PURE__ */ d({
	__name: "DpCalendar",
	props: {
		instance: {},
		mappedDates: {},
		month: {},
		year: {}
	},
	emits: [
		"select-date",
		"set-hover-date",
		"handle-scroll",
		"handle-swipe"
	],
	setup(t, { expose: i, emit: c }) {
		let d = c, f = t, { getDate: p, rootEmit: m, rootProps: h, state: g, defaults: { transitions: y, config: x, ariaLabels: T, multiCalendars: E, weekNumbers: D, multiDates: j, ui: N, weekStart: ee } } = Q(), { isDateAfter: F, isDateEqual: te, resetDateTime: L, getCellId: z } = Kt(), { checkKeyDown: B, checkStopPropagation: ne, isTouchDevice: U } = Gt(), { formatWeekDay: W } = Jt(), { childMount: ie } = dt(), ae = I("calendar-wrap"), oe = I("active-tooltip"), G = O([]), se = O(null), K = O(!0), q = O(!1), ce = O(""), le = O({
			bottom: "",
			left: "",
			transform: ""
		}), ue = O({ left: "50%" });
		H(ae, { onSwipeEnd: (e, t) => {
			x.value.noSwipe || (h.vertical ? (t === "up" || t === "down") && d("handle-swipe", t === "up" ? "left" : "right") : (t === "left" || t === "right") && d("handle-swipe", t === "right" ? "left" : "right"));
		} });
		let de = r(() => h.calendar ? h.calendar(f.mappedDates) : f.mappedDates), pe = r(() => h.dayNames ? Array.isArray(h.dayNames) ? h.dayNames : h.dayNames() : Ie());
		S(() => {
			ie(rt.calendar), x.value.monthChangeOnScroll && ae.value && ae.value.addEventListener("wheel", Ae, { passive: !1 });
		}), C(() => {
			x.value.monthChangeOnScroll && ae.value && ae.value.removeEventListener("wheel", Ae);
		});
		let me = (e) => e ? h.vertical ? "vNext" : "next" : h.vertical ? "vPrevious" : "previous", ge = (e, t) => {
			if (h.transitions) {
				let n = L(X(p(), {
					month: f.month,
					year: f.year
				}));
				ce.value = F(L(X(p(), {
					month: e,
					year: t
				})), n) ? y.value[me(!0)] : y.value[me(!1)], K.value = !1, _().then(() => K.value = !0);
			}
		}, ve = r(() => ({ ...N.value.calendar })), ye = (e) => ({
			type: "dot",
			...e
		}), xe = r(() => (e) => {
			let t = ye(e);
			return {
				"dp--marker-base": !0,
				"dp--marker-dot": t.type === "dot",
				"dp--marker-line": t.type === "line"
			};
		}), J = r(() => (e) => te(e, se.value)), Se = r(() => ({
			"dp--calendar": !0,
			"dp--calendar-next": E.value.count > 0 && f.instance !== 0
		})), Ce = r(() => g.arrowNavigationLevel > 0), Y = r(() => (e) => !h.hideOffsetDates || e.current), Te = async (e, t) => {
			let { width: n, height: r } = e.getBoundingClientRect();
			se.value = t.value;
			let i = { left: `${n / 2}px` }, a = -50;
			if (await _(), oe.value?.[0]) {
				let { left: e, width: t } = oe.value[0].getBoundingClientRect();
				e < 0 && (i = { left: "0" }, a = 0, ue.value.left = `${n / 2}px`), globalThis.innerWidth < e + t && (i = { right: "0" }, a = 0, ue.value.left = `${t - n / 2}px`);
			}
			le.value = {
				bottom: `${r}px`,
				...i,
				transform: `translateX(${a}%)`
			};
		}, Ee = async (e, t, n) => {
			let r = re(G.value?.[t]?.[n]);
			r && (e.marker?.customPosition && e.marker?.tooltip?.length ? le.value = e.marker.customPosition(r) : await Te(r, e), m("tooltip-open", e.marker));
		}, De = async (e, t, n) => {
			if (q.value && j.value.enabled && j.value.dragSelect) return d("select-date", e);
			if (d("set-hover-date", e), e.marker?.tooltip?.length) {
				if (h.hideOffsetDates && !e.current) return;
				await Ee(e, t, n);
			}
		}, Oe = (e) => {
			se.value && (se.value = null, le.value = structuredClone({
				bottom: "",
				left: "",
				transform: ""
			}), m("tooltip-close", e.marker));
		}, ke = (e, t, n) => {
			e && (Array.isArray(G.value[t]) ? G.value[t][n] = e : G.value[t] = [e]);
		}, Ae = (e) => {
			x.value.monthChangeOnScroll && (e.preventDefault(), d("handle-scroll", e));
		}, je = (e) => D.value ? D.value.type === "local" ? we(e.value, {
			weekStartsOn: ee.value,
			locale: h.locale
		}) : D.value.type === "iso" ? be(e.value) : typeof D.value.type == "function" ? D.value.type(e.value) : "" : "", Me = (e) => {
			let t = e[0];
			return D.value?.hideOnOffsetDates ? e.some((e) => e.current) ? je(t) : "" : je(t);
		}, Ne = (e, t, n = !0) => {
			(n || !U()) && (!j.value.enabled || x.value.allowPreventDefault) && (ne(e, x.value), d("select-date", t));
		}, Pe = (e) => {
			ne(e, x.value);
		}, Fe = (e) => {
			j.value.enabled && j.value.dragSelect ? (q.value = !0, d("select-date", e)) : j.value.enabled && d("select-date", e);
		}, Ie = () => {
			let e = p(), t = ze(e, {
				locale: h.locale,
				weekStartsOn: ee.value
			}), n = he(e, {
				locale: h.locale,
				weekStartsOn: ee.value
			});
			return fe({
				start: t,
				end: n
			}).map((e) => W(e));
		}, Le = (e) => T.value?.day?.(e) ?? _e(e.value, "MMMM do, yyyy", { locale: h.locale });
		return i({ triggerTransition: ge }), (t, r) => (w(), o("div", {
			class: v(Se.value),
			inert: Ce.value || void 0,
			"aria-hidden": Ce.value || void 0
		}, [s("div", {
			ref: "calendar-wrap",
			class: v(ve.value),
			role: "grid"
		}, [
			s("div", ir, [P(D) ? (w(), o("div", ar, M(P(D).label), 1)) : a("", !0), (w(!0), o(e, null, k(pe.value, (e, n) => (w(), o("div", {
				key: n,
				class: "dp--calendar-header-item",
				role: "gridcell",
				"data-test-id": "calendar-header",
				"aria-label": P(T)?.weekDay?.(n)
			}, [A(t.$slots, "calendar-header", {
				day: e,
				index: n
			}, () => [l(M(e), 1)])], 8, or))), 128))]),
			r[2] ||= s("div", { class: "dp--calendar-header-separator" }, null, -1),
			u(n, {
				name: ce.value,
				css: !!P(y)
			}, {
				default: R(() => [K.value ? (w(), o("div", {
					key: 0,
					class: "dp--calendar",
					role: "rowgroup",
					onMouseleave: r[1] ||= (e) => q.value = !1
				}, [(w(!0), o(e, null, k(de.value, (n, i) => (w(), o("div", {
					key: i,
					class: "dp--calendar-row",
					role: "row"
				}, [P(D) ? (w(), o("div", sr, [s("div", cr, M(Me(n.days)), 1)])) : a("", !0), (w(!0), o(e, null, k(n.days, (n, c) => (w(), o("div", {
					id: P(z)(n.value),
					ref_for: !0,
					ref: (e) => ke(e, i, c),
					key: c + i,
					role: "gridcell",
					class: "dp--calendar-item",
					"aria-selected": (n.classData["dp--active"] || n.classData["dp--range-border-start"] || n.classData["dp--range-border-end"]) ?? void 0,
					"aria-disabled": n.classData["dp--cell-disabled"] || void 0,
					"aria-label": Le(n),
					tabindex: !n.current && P(h).hideOffsetDates ? void 0 : 0,
					"data-test-id": P(z)(n.value),
					"data-dp-element-active": n.classData["dp--active"] ? 0 : void 0,
					"data-dp-action-element": "0",
					onClick: V((e) => Ne(e, n), ["prevent"]),
					onTouchend: (e) => Ne(e, n, !1),
					onKeydown: (e) => P(B)(e, () => t.$emit("select-date", n), !1, P(x).spaceConfirm, void 0),
					onMouseenter: (e) => De(n, i, c),
					onMouseleave: (e) => Oe(n),
					onMousedown: (e) => Fe(n),
					onMouseup: r[0] ||= (e) => q.value = !1
				}, [s("div", { class: v(["dp--cell-inner", n.classData]) }, [
					t.$slots.day && Y.value(n) ? A(t.$slots, "day", {
						day: +n.text,
						date: n.value
					}, void 0, void 0, 0) : a("", !0),
					t.$slots.day ? a("", !0) : (w(), o(e, { key: 1 }, [l(M(n.text), 1)], 64)),
					n.marker && Y.value(n) ? A(t.$slots, "marker", {
						marker: n.marker,
						day: +n.text,
						date: n.value
					}, () => [s("div", {
						class: v(xe.value(n.marker)),
						style: b(n.marker.color ? { backgroundColor: n.marker.color } : {})
					}, null, 6)], void 0, 2) : a("", !0),
					J.value(n.value) ? (w(), o("div", {
						key: 3,
						ref_for: !0,
						ref: "active-tooltip",
						class: "dp--marker-tooltip",
						style: b(le.value)
					}, [n.marker?.tooltip ? (w(), o("div", {
						key: 0,
						class: "dp--tooltip-content",
						onClick: Pe
					}, [(w(!0), o(e, null, k(n.marker.tooltip, (e, r) => (w(), o("div", {
						key: r,
						class: "dp--tooltip-text"
					}, [A(t.$slots, "marker-tooltip", {
						tooltip: e,
						day: n.value
					}, () => [s("div", {
						class: "dp--tooltip-mark",
						style: b(e.color ? { backgroundColor: e.color } : {})
					}, null, 4), s("div", null, M(e.text), 1)])]))), 128)), s("div", {
						class: "dp--arrow-bottom-tp",
						style: b(ue.value)
					}, null, 4)])) : a("", !0)], 4)) : a("", !0)
				], 2)], 40, lr))), 128))]))), 128))], 32)) : a("", !0)]),
				_: 3
			}, 8, ["name", "css"])
		], 2)], 10, rr));
	}
}), dr = (e, t) => {
	let n = O([]), i = O(/* @__PURE__ */ new Date()), a = O(), { getDate: o, getDateFromParts: s, rootEmit: c, calendars: l, month: u, year: d, time: f, modelValue: p, rootProps: m, today: h, state: g, defaults: { multiCalendars: v, startTime: y, range: b, config: x, safeDates: C, multiDates: w, timeConfig: T, flow: E, weekStart: D } } = Q(), { validateMonthYearInRange: k, isDisabled: A, isDateRangeAllowed: j, checkMinMaxRange: M } = gt(), { updateTimeValues: N, getSetDateTime: ee, assignTime: P, assignStartTime: F, validateTime: I, disabledTimesConfig: te } = qn(), { formatDay: L } = Jt(), { setTime: R, isDateBefore: z, getDaysInBetween: B } = Kt(), { checkRangeAutoApply: V, getRangeWithFixedDate: ne, handleMultiDatesSelect: re, setPresetDate: H } = Tn(), { getMapDate: U } = Gt(), { selectOnAutoApply: W } = an(e);
	ht(() => fe(g.isTextInputDate));
	let { updateFlowStep: ie, flowStep: ae } = dt(), oe = (e) => !x.value.keepViewOnOffsetClick || e ? !0 : !a.value, G = (e, t, n, r = !1, i = !1) => {
		oe(i) && (!r && t !== null && n !== null && se(e, t, n), l.value[e] ??= l.value[e] = {
			month: 0,
			year: 0
		}, l.value[e].month = t ?? l.value[e]?.month, l.value[e].year = n ?? l.value[e]?.year);
	}, se = (e, t, n) => {
		(l.value.at(e)?.month !== t || l.value.at(e)?.year !== n) && c("update-month-year", {
			month: t,
			year: n,
			instance: e
		});
	}, le = () => {
		y.value && F(y.value);
	};
	S(() => {
		p.value || (De(), le()), fe(!0), m.focusStartDate && m.startDate && De();
	});
	let ue = r(() => !E.value?.steps?.length || E.value.steps.at(-1) === ae.value), de = () => {
		m.autoApply && e("auto-apply", !ue.value);
	}, fe = (e = !1) => {
		if (p.value) return Array.isArray(p.value) ? (n.value = p.value, Se(e)) : ge(p.value, e);
		if (v.value.count && e && !m.startDate) return he(o(), e);
	}, pe = () => Array.isArray(p.value) && b.value.enabled ? J(p.value[0]) === J(p.value[1] ?? p.value[0]) : !1, me = (e) => {
		let t = ce(e, 1);
		return {
			month: J(t),
			year: Y(t)
		};
	}, he = (e = o(), t = !1) => {
		if ((!v.value.count || !v.value.static || t) && G(0, J(e), Y(e), t), v.value.count && (!p.value || pe() || !v.value.solo) && (!v.value.solo || t)) for (let e = 1; e < v.value.count; e++) {
			let t = X(o(), {
				month: u.value(e - 1),
				year: d.value(e - 1)
			}), n = K(t, { months: 1 });
			l.value[e] = {
				month: J(n),
				year: Y(n)
			};
		}
	}, ge = (e, t) => {
		he(e, t), P("hours", ye(e)), P("minutes", xe(e)), P("seconds", Ce(e)), v.value.count && t && Ee();
	}, _e = (e) => {
		if (v.value.count) {
			if (v.value.solo) return 0;
			let t = J(e[0]), n = J(e[1]);
			return Math.abs(n - t) < v.value.count ? 0 : 1;
		}
		return 1;
	}, ve = (e, t) => {
		e[1] && b.value.showLastInRange ? he(e[_e(e)], t) : he(e[0], t);
		let n = (t, n) => [t(e[0]), e?.[1] ? t(e[1]) : f[n][1]];
		P("hours", n(ye, "hours")), P("minutes", n(xe, "minutes")), P("seconds", n(Ce, "seconds"));
	}, be = (e, t) => {
		if ((b.value.enabled || m.weekPicker) && !w.value.enabled) return ve(e, t);
		if (w.value.enabled && t) {
			let n = e.at(-1);
			if (n) return ge(n, t);
		}
	}, Se = (e) => {
		let t = p.value;
		be(t, e), v.value.count && v.value.solo && Ee();
	}, we = (e, n) => {
		let r = X(o(), {
			month: u.value(n),
			year: d.value(n)
		}), i = e < 0 ? ce(r, 1) : Ue(r, 1);
		k(J(i), Y(i), e < 0, m.preventMinMaxNavigation) && (G(n, J(i), Y(i)), v.value.count && !v.value.solo && Te(n), t());
	}, Te = (e) => {
		for (let t = e - 1; t >= 0; t--) {
			let e = Ue(X(o(), {
				month: u.value(t + 1),
				year: d.value(t + 1)
			}), 1);
			G(t, J(e), Y(e));
		}
		for (let t = e + 1; t <= v.value.count - 1; t++) {
			let e = ce(X(o(), {
				month: u.value(t - 1),
				year: d.value(t - 1)
			}), 1);
			G(t, J(e), Y(e));
		}
	}, Ee = () => {
		if (Array.isArray(p.value) && p.value.length === 2) {
			let e = o(o(p.value[1] ?? ce(p.value[0], 1))), [t, n] = [J(p.value[0]), Y(p.value[0])], [r, i] = [J(p.value[1]), Y(p.value[1])];
			(t !== r || t === r && n !== i) && v.value.solo && G(1, J(e), Y(e));
		} else p.value && !Array.isArray(p.value) && (G(0, J(p.value), Y(p.value)), he(o()));
	}, De = () => {
		m.startDate && (G(0, J(o(m.startDate)), Y(o(m.startDate))), v.value.count && Te(0));
	}, Oe = (e, t) => {
		if (x.value.monthChangeOnScroll) {
			let n = Date.now() - i.value.getTime(), r = Math.abs(e.deltaY), a = 500;
			r > 1 && (a = 100), r > 100 && (a = 0), n > a && (i.value = /* @__PURE__ */ new Date(), we(x.value.monthChangeOnScroll === "inverse" ? e.deltaY : -e.deltaY, t));
		}
	}, ke = (e, t, n = !1) => {
		x.value.monthChangeOnArrows && m.vertical === n && Ae(e, t);
	}, Ae = (e, t) => {
		we(e === "right" ? -1 : 1, t);
	}, je = (e) => {
		if (C.value.markers) return U(e.value, C.value.markers);
	}, Me = (e, t) => {
		switch (m.sixWeeks === !0 ? "append" : m.sixWeeks) {
			case "prepend": return [!0, !1];
			case "center": return [e == 0, !0];
			case "fair": return [e == 0 || t > e, !0];
			case "append": return [!1, !1];
			default: return [!1, !1];
		}
	}, Ne = (e, t, n) => {
		if (n) {
			let r = n.days.at(-1);
			if (r) {
				let n = Fe(q(r.value, 1), J(t));
				e.push({ days: n });
			}
		}
	}, Pe = (e, t, n, r) => {
		if (m.sixWeeks && e.length < 6) {
			let i = 6 - e.length, a = (t.getDay() + 7 - r) % 7, o = 6 - (n.getDay() + 7 - r) % 7, [s, c] = Me(a, o);
			for (let n = 1; n <= i; n++) if (c ? !!(n % 2) == s : s) {
				let n = e[0].days[0], r = Fe(q(n.value, -7), J(t));
				e.unshift({ days: r });
			} else {
				let n = e.at(-1);
				Ne(e, t, n);
			}
		}
		return e;
	}, Fe = (e, t) => {
		let n = o(e), r = [];
		for (let e = 0; e < 7; e++) {
			let i = q(n, e), a = J(i) !== t;
			r.push({
				text: m.hideOffsetDates && a ? "" : L(i),
				value: i,
				current: !a,
				classData: {}
			});
		}
		return r;
	}, Ie = (e, t) => {
		let n = [], r = s(t, e), i = s(t, e + 1, 0), a = ze(r, { weekStartsOn: D.value }), o = (t) => {
			let r = Fe(t, e);
			n.push({ days: r });
			let a = r.at(-1)?.value;
			if (z(a, i)) {
				let e = q(t, 7);
				o(e);
			}
		};
		return o(a), Pe(n, r, i, D.value);
	}, Le = (e) => {
		let t = R({
			hours: f.hours,
			minutes: f.minutes,
			seconds: Ke()
		}, o(e.value));
		c("date-click", t), w.value.enabled ? re(t, w.value.limit) : p.value = t, ie("calendar"), _().then(() => {
			de();
		});
	}, Re = (e) => b.value.noDisabledRange ? B(n.value[0], e).some((e) => A(e)) : !1, Be = () => {
		n.value = p.value ? p.value.slice().filter((e) => !!e) : [], n.value.length === 2 && !(b.value.fixedStart || b.value.fixedEnd) && (n.value = []);
	}, Ve = (e, t) => {
		let r = [o(e.value), q(o(e.value), +b.value.autoRange)];
		j(r) ? (t && He(e.value), n.value = r) : c("invalid-date", e.value);
	}, He = (e) => {
		let t = J(o(e)), n = Y(o(e));
		if (G(0, t, n), v.value.count > 0) for (let t = 1; t < v.value.count; t++) {
			let n = me(X(o(e), {
				year: d.value(t - 1),
				month: u.value(t - 1)
			}));
			G(t, n.month, n.year);
		}
	}, We = (e) => {
		if (Re(e.value) || !M(e.value, p.value, +!b.value.fixedStart)) return c("invalid-date", e.value);
		n.value = ne(o(e.value));
	}, Ge = (e, t) => {
		if (Be(), b.value.autoRange) return Ve(e, t);
		if (b.value.fixedStart || b.value.fixedEnd) return We(e);
		n.value[0] ? M(o(e.value), p.value) && !Re(e.value) ? z(o(e.value), o(n.value[0])) ? b.value.autoSwitchStartEnd ? (n.value.unshift(o(e.value)), c("range-end", n.value[0])) : (n.value[0] = o(e.value), c("range-start", n.value[0])) : (n.value[1] = o(e.value), c("range-end", n.value[1])) : c("invalid-date", e.value) : (n.value[0] = o(e.value), c("range-start", n.value[0]));
	}, Ke = (e = !0) => T.value.enableSeconds ? Array.isArray(f.seconds) ? e ? f.seconds[0] : f.seconds[1] : f.seconds : 0, qe = (e) => {
		n.value[e] = R({
			hours: f.hours[e],
			minutes: f.minutes[e],
			seconds: Ke(e !== 1)
		}, n.value[e]);
	}, Je = () => {
		n.value[0] && n.value[1] && +n.value?.[0] > +n.value?.[1] && (n.value.reverse(), c("range-start", n.value[0]), c("range-end", n.value[1]));
	}, Ye = () => {
		n.value.length && (n.value[0] && !n.value[1] ? qe(0) : (qe(0), qe(1), ie("calendar")), Je(), p.value = n.value.slice(), V(n.value, e, n.value.length < 2 || E.value?.steps.length ? E.value?.steps.at(-1) !== ae.value : !1));
	}, Xe = (e, t = !1) => {
		if (A(e.value) || !e.current && m.hideOffsetDates) return c("invalid-date", e.value);
		if (a.value = structuredClone(e), !b.value.enabled) return Le(e);
		Array.isArray(f.hours) && Array.isArray(f.minutes) && !w.value.enabled && (Ge(e, t), Ye());
	}, Ze = (e, n) => {
		let r = u.value(e) !== n.month;
		G(e, n.month, n.year, !1, !0), v.value.count && !v.value.solo && Te(e), t(v.value.solo ? e : void 0), n.fromNav || ie(r ? "month" : "year");
	}, Qe = (e) => {
		H({ value: e }), W(), m.multiCalendars && _().then(() => fe(!0));
	}, $e = () => {
		if (Array.isArray(p.value)) {
			if (w.value.enabled) {
				let e = et();
				p.value[p.value.length - 1] = ee(e);
			} else p.value = p.value.map((e, t) => e && ee(e, t));
		} else p.value = ee(p.value);
		e("time-update");
	}, et = () => Array.isArray(p.value) && p.value.length ? p.value[p.value.length - 1] : null, tt = (e) => {
		let t = "";
		if (b.value.enabled && Array.isArray(p.value)) for (let n of Object.keys(e)) {
			let r = e[n];
			Array.isArray(r) && (f[n][0] !== r[0] && (t = "range-start"), f[n][1] !== r[1] && (t = "range-start"));
		}
		return t;
	};
	return {
		calendars: l,
		modelValue: p,
		month: u,
		year: d,
		time: f,
		disabledTimesConfig: te,
		today: h,
		validateTime: I,
		getCalendarDays: Ie,
		getMarker: je,
		handleScroll: Oe,
		handleSwipe: Ae,
		handleArrow: ke,
		selectDate: Xe,
		updateMonthYear: Ze,
		presetDate: Qe,
		updateTime: (e) => {
			let t = tt(e);
			N(e, $e), t && c(t, p.value[t === "range-start" ? 0 : 1]), E.value?.steps.length && de();
		},
		assignMonthAndYear: he,
		setStartTime: le
	};
}, fr = () => {
	let { isModelAuto: e, matchDate: t, isDateAfter: n, isDateBefore: r, isDateBetween: i, isDateEqual: a, getWeekFromDate: o, getBeforeAndAfterInRange: s } = Kt(), { getDate: c, today: l, rootProps: u, defaults: { multiCalendars: d, multiDates: f, ui: p, highlight: m, safeDates: h, range: g, weekStart: _ }, modelValue: v } = Q(), { isDisabled: y } = gt(), b = O(null), x = (e) => {
		(e.current || !u.hideOffsetDates) && (b.value = e.value);
	}, S = () => {
		b.value = null;
	}, C = (e) => Array.isArray(v.value) && g.value.enabled && v.value[0] && b.value ? e ? n(b.value, v.value[0]) : r(b.value, v.value[0]) : !0, w = (e, t) => {
		let n = v.value && Array.isArray(v.value) && v.value ? t ? v.value[0] || null : v.value[1] : null;
		return a(c(e.value), n);
	}, T = (e) => {
		let t = Array.isArray(v.value) ? v.value[0] : null;
		return !e || !r(b.value, t);
	}, E = (e, t = !0) => (g.value.enabled || u.weekPicker) && Array.isArray(v.value) && v.value.length === 2 ? u.hideOffsetDates && !e.current ? !1 : a(c(e.value), v.value[+!t]) : g.value.enabled ? w(e, t) && T(t) || a(e.value, Array.isArray(v.value) ? v.value[0] : null) && C(t) : !1, D = (e, t) => {
		if (Array.isArray(v.value) && v.value[0] && v.value.length === 1) {
			let i = a(e.value, b.value);
			return t ? n(v.value[0], e.value) && i : r(v.value[0], e.value) && i;
		}
		return !1;
	}, k = (e) => !v.value || u.hideOffsetDates && !e.current ? !1 : g.value.enabled ? u.modelAuto && Array.isArray(v.value) ? a(e.value, v.value[0] ?? l) : !1 : f.value.enabled && Array.isArray(v.value) ? v.value.some((t) => a(t, e.value)) : a(e.value, v.value ? v.value : l), A = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (b.value) {
				if (u.hideOffsetDates && !e.current) return !1;
				let t = q(b.value, +g.value.autoRange), n = o(c(b.value), _.value);
				return u.weekPicker ? a(n[1], c(e.value)) : a(t, c(e.value));
			}
			return !1;
		}
		return !1;
	}, j = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (b.value) {
				let t = q(b.value, +g.value.autoRange);
				if (u.hideOffsetDates && !e.current) return !1;
				let i = o(c(b.value), _.value);
				return u.weekPicker ? n(e.value, i[0]) && r(e.value, i[1]) : n(e.value, b.value) && r(e.value, t);
			}
			return !1;
		}
		return !1;
	}, M = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (b.value) {
				if (u.hideOffsetDates && !e.current) return !1;
				let t = o(c(b.value), _.value);
				return u.weekPicker ? a(t[0], e.value) : a(b.value, e.value);
			}
			return !1;
		}
		return !1;
	}, N = (e) => i(v.value, b.value, e.value), ee = () => u.modelAuto && Array.isArray(v.value) ? !!v.value[0] : !1, P = () => !u.modelAuto || e(v.value), F = (e) => {
		if (u.weekPicker) return !1;
		let t = !g.value.enabled || !E(e) && !E(e, !1);
		return !y(e.value) && !k(e) && !(!e.current && u.hideOffsetDates) && t;
	}, I = (e) => g.value.enabled ? u.modelAuto ? ee() && k(e) : !1 : k(e), te = (e) => m.value ? t(e.value, h.value.highlight) : !1, L = (e) => {
		let t = y(e.value);
		return t && (typeof m.value == "function" ? !m.value(e.value, t) : !m.value.options.highlightDisabled);
	}, R = (e) => typeof m.value == "function" ? m.value(e.value) : m.value.weekdays?.includes(e.value.getDay()), z = (e) => (g.value.enabled || u.weekPicker) && (!(d.value.count > 0) || e.current) && P() && (e.current || !u.hideOffsetDates) && !k(e) ? N(e) : !1, B = (e) => {
		if (Array.isArray(v.value) && v.value.length === 1) {
			let { before: t, after: n } = s(+g.value.maxRange, v.value[0]);
			return Ee(e.value, t) || Te(e.value, n);
		}
		return !1;
	}, V = (e) => {
		if (Array.isArray(v.value) && v.value.length === 1) {
			let { before: t, after: n } = s(+g.value.minRange, v.value[0]);
			return i([t, n], v.value[0], e.value);
		}
		return !1;
	}, ne = (e) => g.value.enabled && (g.value.maxRange || g.value.minRange) ? g.value.maxRange && g.value.minRange ? B(e) || V(e) : g.value.maxRange ? B(e) : V(e) : !1, re = (e) => {
		let { isRangeStart: t, isRangeEnd: i } = ie(e), o = g.value.enabled ? t || i : !1;
		return {
			"dp--cell-offset": !e.current,
			"dp--pointer": !u.disabled && !(!e.current && u.hideOffsetDates) && !y(e.value) && !ne(e),
			"dp--cell-disabled": y(e.value) || ne(e),
			"dp--cell-highlight": !L(e) && (te(e) || R(e)) && !I(e) && !o && !M(e) && !(z(e) && u.weekPicker) && !i,
			"dp--cell-highlight-active": !L(e) && (te(e) || R(e)) && I(e),
			"dp--today": !u.noToday && a(e.value, l) && e.current,
			"dp--past": r(e.value, l),
			"dp--future": n(e.value, l)
		};
	}, H = (e) => ({
		"dp--active": I(e),
		"dp--date-hoverable": F(e)
	}), U = (e) => {
		if (v.value && !Array.isArray(v.value)) {
			let t = o(v.value, _.value);
			return {
				...K(e),
				"dp--range-border-start dp--active": a(t[0], e.value),
				"dp--range-border-end dp--active": a(t[1], e.value),
				"dp--range-preview dp--range-between-week": n(e.value, t[0]) && r(e.value, t[1])
			};
		}
		return { ...K(e) };
	}, W = (e) => {
		if (v.value && Array.isArray(v.value)) {
			let t = o(v.value[0], _.value), i = v.value[1] ? o(v.value[1], _.value) : [];
			return {
				...K(e),
				"dp--range-border-start dp--active": a(t[0], e.value) || a(i[0], e.value),
				"dp--range-border-end dp--active": a(t[1], e.value) || a(i[1], e.value),
				"dp--range-preview dp--range-between-week": n(e.value, t[0]) && r(e.value, t[1]) || n(e.value, i[0]) && r(e.value, i[1]),
				"dp--range-between": n(e.value, t[1]) && r(e.value, i[0])
			};
		}
		return { ...K(e) };
	}, ie = (e) => ({
		isRangeStart: d.value.count > 0 ? e.current && E(e) && P() : E(e) && P(),
		isRangeEnd: d.value.count > 0 ? e.current && E(e, !1) && P() : E(e, !1) && P()
	}), ae = (e) => g.value.enabled && (g.value.fixedStart || g.value.fixedEnd) && Array.isArray(e) && e.length === 2, oe = (e, t, n, r) => !ae(v.value) || !b.value ? !1 : t ? g.value.fixedEnd && a(e.value, b.value) && Ee(e.value, v.value[0]) && !n : g.value.fixedStart && a(e.value, b.value) && Te(e.value, v.value[1]) && !r, G = (e, t) => !ae(v.value) || !b.value ? !1 : t ? g.value.fixedEnd && Te(e.value, b.value) && Ee(e.value, v.value[0]) : g.value.fixedStart && Ee(e.value, b.value) && Te(e.value, v.value[1]), se = (e) => {
		let { isRangeStart: t, isRangeEnd: n } = ie(e);
		return {
			"dp--range-border-start dp--active": t,
			"dp--range-border-end dp--active": n,
			"dp--range-between": z(e) || G(e, !0) || G(e, !1),
			"dp--date-hoverable": a(e.value, b.value) && !t && !n && !u.weekPicker,
			"dp--date-hoverable dp--date-hoverable-start": D(e, !0) || oe(e, !0, t, n),
			"dp--date-hoverable dp--date-hoverable-end": D(e, !1) || oe(e, !1, t, n)
		};
	}, K = (e) => ({
		...se(e),
		"dp--range-preview dp--cell-auto-range": j(e),
		"dp--range-preview dp--range-border-start dp--cell-auto-range-start": M(e),
		"dp--range-preview dp--range-border-end dp--cell-auto-range-end": A(e)
	}), ce = (e) => g.value.enabled ? g.value.autoRange ? K(e) : u.modelAuto ? {
		...H(e),
		...se(e)
	} : u.weekPicker ? W(e) : se(e) : u.weekPicker ? U(e) : H(e);
	return {
		setHoverDate: x,
		clearHoverDate: S,
		getDayClassData: (e) => u.hideOffsetDates && !e.current ? {} : {
			...re(e),
			...ce(e),
			[p.value.dayClass ? p.value.dayClass(e.value, v.value) : ""]: !0,
			...p.value.calendarCell
		}
	};
}, pr = { key: 0 }, mr = /* @__PURE__ */ d({
	__name: "DatePicker",
	props: /*@__PURE__*/ h({
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	}, Bt),
	emits: [
		"focus-menu",
		"select-date",
		"time-update",
		"auto-apply"
	],
	setup(t, { expose: n, emit: s }) {
		let l = s, { month: d, year: p, modelValue: m, time: h, disabledTimesConfig: _, today: b, validateTime: x, getCalendarDays: S, getMarker: C, handleArrow: T, handleScroll: E, handleSwipe: D, selectDate: O, updateMonthYear: j, presetDate: M, updateTime: N, assignMonthAndYear: ee, setStartTime: te } = dr(l, fe), z = F(), { setHoverDate: B, getDayClassData: V, clearHoverDate: ne } = fr(), { getDate: re, rootEmit: H, rootProps: U, defaults: { multiCalendars: W, timeConfig: ie } } = Q(), { getYears: ae, getMonths: oe } = Yt(), { getCellId: G } = Kt(), se = I("calendar-header"), K = I("calendar"), q = I("time-picker"), ce = kn(z, $.Calendar), le = kn(z, $.DatePickerHeader), ue = kn(z, $.TimePicker);
		L(W, (e, t) => {
			e.count - t.count > 0 && ee();
		}, { deep: !0 });
		let de = r(() => (e) => S(d.value(e), p.value(e)).map((e) => ({
			...e,
			days: e.days.map((e) => (e.marker = C(e), e.classData = V(e), e))
		})));
		function fe(e) {
			e || e === 0 ? K.value?.[e]?.triggerTransition(d.value(e), p.value(e)) : K.value?.forEach((e, t) => e?.triggerTransition(d.value(t), p.value(t)));
		}
		let pe = (e, t = 0) => {
			se.value?.[t]?.toggleMonthPicker(e);
		}, me = (e, t = 0) => {
			se.value?.[t]?.toggleYearPicker(e);
		}, ge = (e, t) => {
			q.value?.toggleTimePicker(e, t);
		}, _e = (e, t) => {
			if (!U.range) {
				let n = m.value ? m.value : b, r = t ? re(t) : n, i = e ? ze(r, { weekStartsOn: 1 }) : he(r, { weekStartsOn: 1 });
				O({
					value: i,
					current: J(r) === d.value(0),
					text: "",
					classData: {}
				}), document.getElementById(G(i))?.focus();
			}
		}, ve = (e) => {
			se.value?.[0]?.handleMonthYearChange(e, !0);
		}, ye = (e) => {
			j(0, {
				month: d.value(0),
				year: p.value(0) + (e ? 1 : -1),
				fromNav: !0
			});
		}, be = (e) => {
			H("overlay-toggle", {
				open: !1,
				overlay: e
			}), l("focus-menu");
		};
		return n({
			clearHoverDate: ne,
			presetDate: M,
			handleArrow: T,
			updateMonthYear: j,
			setStartTime: te,
			toggleMonthPicker: pe,
			toggleYearPicker: me,
			toggleTimePicker: ge,
			getSidebarProps: () => ({
				modelValue: m,
				month: d,
				year: p,
				time: h,
				updateTime: N,
				updateMonthYear: j,
				selectDate: O,
				presetDate: M
			}),
			changeMonth: ve,
			changeYear: ye,
			selectWeekDate: _e
		}), (n, r) => (w(), o(e, null, [u(yn, { collapse: t.collapse }, {
			default: R(({ instances: s, wrapClass: l }) => [(w(!0), o(e, null, k(s, (e) => (w(), o("div", {
				key: e,
				class: v(l)
			}, [P(U).hideMonthYearSelect ? a("", !0) : (w(), i(nr, {
				key: 0,
				ref_for: !0,
				ref: "calendar-header",
				months: P(oe)(),
				years: P(ae)(),
				month: P(d)(e),
				year: P(p)(e),
				instance: e,
				"menu-wrap-ref": t.menuWrapRef,
				onUpdateMonthYear: (t) => P(j)(e, t),
				onOverlayClosed: be
			}, c({ _: 2 }, [k(P(le), (e) => ({
				name: e,
				fn: R((t) => [A(n.$slots, e, g({ ref_for: !0 }, t))])
			}))]), 1032, [
				"months",
				"years",
				"month",
				"year",
				"instance",
				"menu-wrap-ref",
				"onUpdateMonthYear"
			])), u(ur, {
				ref_for: !0,
				ref: "calendar",
				"mapped-dates": de.value(e),
				instance: e,
				month: P(d)(e),
				year: P(p)(e),
				onSelectDate: (t) => P(O)(t, e !== 1),
				onSetHoverDate: r[0] ||= (e) => P(B)(e),
				onHandleScroll: (t) => P(E)(t, e),
				onHandleSwipe: (t) => P(D)(t, e)
			}, c({ _: 2 }, [k(P(ce), (e) => ({
				name: e,
				fn: R((t) => [A(n.$slots, e, g({ ref_for: !0 }, t))])
			}))]), 1032, [
				"mapped-dates",
				"instance",
				"month",
				"year",
				"onSelectDate",
				"onHandleScroll",
				"onHandleSwipe"
			])], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]), P(ie).enableTimePicker ? (w(), o("div", pr, [A(n.$slots, "time-picker", y(f({
			time: P(h),
			updateTime: P(N)
		})), () => [u(Kn, {
			ref: "time-picker",
			hours: P(h).hours,
			minutes: P(h).minutes,
			seconds: P(h).seconds,
			"disabled-times-config": P(_),
			"validate-time": P(x),
			"no-overlay-focus": t.noOverlayFocus,
			"onUpdate:hours": r[1] ||= (e) => P(N)({
				hours: e,
				minutes: P(h).minutes,
				seconds: P(h).seconds
			}),
			"onUpdate:minutes": r[2] ||= (e) => P(N)({
				hours: P(h).hours,
				minutes: e,
				seconds: P(h).seconds
			}),
			"onUpdate:seconds": r[3] ||= (e) => P(N)({
				hours: P(h).hours,
				minutes: P(h).minutes,
				seconds: e
			})
		}, c({ _: 2 }, [k(P(ue), (e) => ({
			name: e,
			fn: R((t) => [A(n.$slots, e, y(f(t)))])
		}))]), 1032, [
			"hours",
			"minutes",
			"seconds",
			"disabled-times-config",
			"validate-time",
			"no-overlay-focus"
		])])])) : a("", !0)], 64));
	}
}), hr = (e) => {
	let { getDate: t, modelValue: n, year: i, calendars: a, defaults: { highlight: o, range: s, multiDates: c } } = Q(), { isDateBetween: l, isDateEqual: u } = Kt(), { checkRangeAutoApply: d, handleMultiDatesSelect: f, setMonthOrYearRange: p } = Tn();
	ht();
	let { isDisabled: m } = gt(), { formatQuarterText: h } = Jt(), { childMount: g } = dt(), { groupedYears: _, showYearPicker: v, isDisabled: y, selectYear: b, toggleYearPicker: x, handleYearSelect: C, handleYear: w, setStartDate: T } = wn(), E = O();
	S(() => {
		g(), T();
	});
	let D = r(() => (e) => n.value ? Array.isArray(n.value) ? n.value.some((t) => ke(e, t)) : ke(n.value, e) : !1), k = (e) => {
		if (s.value.enabled) {
			if (Array.isArray(n.value)) {
				let t = u(e, n.value[0]) || u(e, n.value[1]);
				return l(n.value, E.value, e) && !t;
			}
			return !1;
		}
		return !1;
	}, A = (e, t) => e.quarter === Se(t) && e.year === Y(t), j = (e) => typeof o.value == "function" ? o.value({
		quarter: Se(e),
		year: Y(e)
	}) : o.value.quarters.some((t) => A(t, e)), M = r(() => (e) => {
		let n = X(t(), { year: i.value(e) });
		return pe({
			start: Be(n),
			end: ge(n)
		}).map((e) => {
			let t = Re(e), n = me(e), r = m(e), i = k(t), a = j(t);
			return {
				text: h(t, n),
				value: t,
				active: D.value(t),
				highlighted: a,
				disabled: r,
				isBetween: i
			};
		});
	}), N = (t) => {
		f(t, c.value.limit), e("auto-apply", !0);
	}, ee = (t) => {
		n.value = p(t), d(n.value, e, n.value.length < 2);
	}, P = (t) => {
		n.value = t, e("auto-apply");
	};
	return {
		groupedYears: _,
		year: i,
		isDisabled: y,
		quarters: M,
		showYearPicker: v,
		modelValue: n,
		selectYear: b,
		toggleYearPicker: x,
		handleYearSelect: C,
		handleYear: w,
		setHoverDate: (e) => {
			E.value = e;
		},
		selectQuarter: (e, t, n) => {
			if (!n) return a.value[t].month = J(me(e)), c.value.enabled ? N(e) : s.value.enabled ? ee(e) : P(e);
		}
	};
}, gr = { class: "dp--quarter-items" }, _r = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseover"
], vr = /* @__PURE__ */ d({
	__name: "QuarterPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(t, { expose: n, emit: r }) {
		let d = r, { defaults: { config: f } } = Q(), p = F(), { boolHtmlAttribute: m } = Zt(), h = kn(p, $.YearMode), { groupedYears: _, year: y, isDisabled: x, quarters: S, modelValue: C, showYearPicker: T, setHoverDate: E, selectQuarter: D, toggleYearPicker: O, handleYearSelect: j, handleYear: N } = hr(d);
		return n({
			getSidebarProps: () => ({
				modelValue: C,
				year: y,
				selectQuarter: D,
				handleYearSelect: j,
				handleYear: N
			}),
			toggleYearPicker: (e) => O(0, e)
		}), (n, r) => (w(), i(yn, {
			collapse: t.collapse,
			stretch: ""
		}, {
			default: R(({ instances: t, wrapClass: r }) => [(w(!0), o(e, null, k(t, (t) => (w(), o("div", {
				key: t,
				class: v(r)
			}, [s("div", {
				class: "dp-quarter-picker-wrap",
				style: b({ minHeight: `${P(f).modeHeight}px` })
			}, [
				n.$slots["top-extra"] ? A(n.$slots, "top-extra", { value: P(C) }, void 0, void 0, 0) : a("", !0),
				s("div", null, [u(Cn, {
					items: P(_)(t),
					instance: t,
					"show-year-picker": P(T)[t],
					year: P(y)(t),
					"is-disabled": (e) => P(x)(t, e),
					onHandleYear: (e) => P(N)(t, e),
					onYearSelect: (e) => P(j)(e, t),
					onToggleYearPicker: (e) => P(O)(t, e?.show)
				}, c({ _: 2 }, [k(P(h), (e) => ({
					name: e,
					fn: R((t) => [A(n.$slots, e, g({ ref_for: !0 }, t))])
				}))]), 1032, [
					"items",
					"instance",
					"show-year-picker",
					"year",
					"is-disabled",
					"onHandleYear",
					"onYearSelect",
					"onToggleYearPicker"
				])]),
				s("div", gr, [(w(!0), o(e, null, k(P(S)(t), (e, r) => (w(), o("div", { key: r }, [s("button", {
					type: "button",
					class: v(["dp--btn-base dp--qr-btn", {
						"dp--active": e.active,
						"dp--qr-btn-between": e.isBetween,
						"dp--qr-btn-disabled": e.disabled,
						"dp--highlighted": e.highlighted
					}]),
					"data-dp-action-element": "0",
					"data-test-id": e.value,
					disabled: P(m)(e.disabled),
					onClick: (n) => P(D)(e.value, t, e.disabled),
					onMouseover: (t) => P(E)(e.value)
				}, [A(n.$slots, "quarter", {
					value: e.value,
					text: e.text
				}, () => [l(M(e.text), 1)])], 42, _r)]))), 128))])
			], 4)], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]));
	}
}), yr = [
	"id",
	"tabindex",
	"role",
	"aria-label",
	"aria-modal"
], br = {
	key: 0,
	class: "dp--menu-load-container"
}, xr = {
	key: 1,
	class: "dp--menu-header"
}, Sr = ["data-dp-mobile"], Cr = {
	key: 0,
	class: "dp--sidebar-left"
}, wr = ["data-dp-mobile"], Tr = [
	"data-test-id",
	"data-dp-mobile",
	"onClick",
	"onKeydown"
], Er = { class: "dp--instance-calendar" }, Dr = {
	key: 2,
	class: "dp--sidebar-right"
}, Or = {
	key: 2,
	class: "dp--action-extra"
}, kr = /* @__PURE__ */ d({
	__name: "DatepickerMenu",
	props: {
		collapse: { type: Boolean },
		noOverlayFocus: { type: Boolean },
		getInputRect: { type: Function }
	},
	emits: [
		"close-picker",
		"select-date",
		"auto-apply",
		"time-update",
		"menu-blur"
	],
	setup(t, { expose: n, emit: l }) {
		let u = l, d = F(), { state: p, rootProps: m, defaults: { textInput: h, inline: g, config: _, ui: x, ariaLabels: T }, rootEmit: E, setState: D } = Q(), { isMobile: N } = qt(), { handleEventPropagation: te, getElWithin: L, checkStopPropagation: z, checkKeyDown: B } = Gt(), { selectCurrentDate: ne } = an();
		ft();
		let H = I("inner-menu"), U = I("dp-menu"), W = I("dyn-cmp"), ie = O(0), ae = O(!1), oe = O(!1), { executeFlow: G } = ut(W, u), se = (e) => {
			oe.value = !0, _.value.allowPreventDefault && e.preventDefault(), z(e, _.value, !0);
		};
		S(() => {
			ae.value = !0, K(), globalThis.addEventListener("resize", K);
			let e = re(U);
			e && !h.value.enabled && !g.value.enabled && D("menuFocused", !0), e && (e.addEventListener("pointerdown", se), e.addEventListener("mousedown", se), E("menu-mounted", e)), document.addEventListener("mousedown", Te);
		}), C(() => {
			globalThis.removeEventListener("resize", K), document.removeEventListener("mousedown", Te);
			let e = re(U);
			e && (e.removeEventListener("pointerdown", se), e.removeEventListener("mousedown", se), E("menu-unmounted", e));
		});
		let K = () => {
			let e = re(H);
			e && (ie.value = e.getBoundingClientRect().width);
		}, q = r(() => m.monthPicker ? jn : m.yearPicker ? Nn : m.timePicker ? Yn : m.quarterPicker ? vr : mr), ce = () => {
			let e = re(U);
			e && e.focus({ preventScroll: !0 });
		}, le = r(() => W.value?.getSidebarProps() || {}), ue = kn(d, $.ActionRow), de = kn(d, $.PassTrough), fe = r(() => ({
			"dp--menu-unclickable dp--menu-disabled": m.disabled,
			"dp--menu-unclickable dp--menu-readonly": m.readonly,
			"dp--menu-unclickable dp-menu-loading": m.loading
		})), pe = r(() => ({
			"dp--menu": !0,
			"dp--menu-index": !g.value.enabled,
			"dp--relative": g.value.enabled,
			...x.value.menu
		})), me = (e) => {
			z(e, _.value, !0);
		}, he = (e) => {
			_.value.escClose && (u("close-picker"), te(e, _.value));
		}, ge = (e) => {
			m.arrowNavigation || (e === ot.left || e === ot.up ? be("handleArrow", ot.left, 0, e === ot.up) : be("handleArrow", ot.right, 0, e === ot.down));
		}, _e = (e) => {
			D("shiftKeyInMenu", e.shiftKey), _.value.tabOutClosesMenu && !m.hideMonthYearSelect && e.code === Z.tab && e.target.classList.contains("dp--menu") && p.shiftKeyInMenu && (e.preventDefault(), z(e, _.value, !0), u("close-picker"));
		}, ve = (e) => {
			W.value?.toggleTimePicker(!1, !1), W.value?.toggleMonthPicker(!1, e), W.value?.toggleYearPicker(!1, e);
		}, ye = (e, t = 0) => e === "month" ? W.value?.toggleMonthPicker(!0, t) : e === "year" ? W.value?.toggleYearPicker(!0, t) : e === "time" ? W.value?.toggleTimePicker(!0) : ve(t), be = (e, ...t) => {
			W.value?.[e] && W.value?.[e](...t);
		}, xe = (e) => {
			be("presetDate", ee(e));
		}, J = () => {
			be("clearHoverDate");
		}, Se = (e, t) => {
			be("updateMonthYear", e, t);
		}, Ce = (e, t) => {
			e.preventDefault(), ge(t);
		}, we = (e) => {
			_.value.allowPreventDefault && (e.preventDefault(), z(e, _.value, !0));
		}, Y = (e) => {
			if (_.value.onInternalKeydown?.(e) !== !1) {
				if (_e(e), e.key === Z.home || e.key === Z.end) return be("selectWeekDate", e.key === Z.home, e.target.getAttribute("id"));
				switch ((e.key === Z.pageUp || e.key === Z.pageDown) && (e.shiftKey ? (be("changeYear", e.key === Z.pageUp), L(U.value, "overlay-year")?.focus()) : (be("changeMonth", e.key === Z.pageUp), L(U.value, e.key === Z.pageUp ? "action-prev" : "action-next")?.focus()), e.target.getAttribute("id") && U.value?.focus({ preventScroll: !0 })), e.key) {
					case Z.esc: return he(e);
					case Z.enter: return we(e);
					case Z.arrowLeft: return Ce(e, ot.left);
					case Z.arrowRight: return Ce(e, ot.right);
					case Z.arrowUp: return Ce(e, ot.up);
					case Z.arrowDown: return Ce(e, ot.down);
					default: return;
				}
			}
		}, Te = (e) => {
			g.value.enabled && !g.value.input && !U.value?.contains(e.target) && oe.value && (oe.value = !1, u("menu-blur"));
		};
		return n({
			updateMonthYear: Se,
			switchView: ye,
			onValueCleared: () => {
				W.value?.setStartTime?.();
			},
			executeFlow: G
		}), (n, r) => (w(), o("div", {
			id: P(m).menuId,
			ref: "dp-menu",
			tabindex: P(g).enabled ? void 0 : "0",
			role: P(g).enabled ? void 0 : "dialog",
			"aria-label": P(T)?.menu,
			"aria-modal": !P(g).enabled || void 0,
			class: v(pe.value),
			onMouseleave: J,
			onClick: me,
			onKeydown: Y
		}, [
			(P(m).disabled || P(m).readonly) && P(g).enabled || P(m).loading ? (w(), o("div", {
				key: 0,
				class: v(fe.value)
			}, [P(m).loading ? (w(), o("div", br, [...r[5] ||= [s("span", { class: "dp--menu-loader" }, null, -1)]])) : a("", !0)], 2)) : a("", !0),
			n.$slots["menu-header"] ? (w(), o("div", xr, [A(n.$slots, "menu-header")])) : a("", !0),
			A(n.$slots, "arrow"),
			s("div", {
				ref: "inner-menu",
				class: v({
					"dp--menu-content-wrapper": P(m).presetDates?.length || !!n.$slots["left-sidebar"] || !!n.$slots["right-sidebar"],
					"dp--menu-content-wrapper-collapsed": t.collapse && (P(m).presetDates?.length || !!n.$slots["left-sidebar"] || !!n.$slots["right-sidebar"])
				}),
				"data-dp-mobile": P(N),
				style: b({ "--dp-menu-width": `${ie.value}px` })
			}, [
				n.$slots["left-sidebar"] ? (w(), o("div", Cr, [A(n.$slots, "left-sidebar", y(f(le.value)))])) : a("", !0),
				P(m).presetDates.length ? (w(), o("div", {
					key: 1,
					class: v({
						"dp--preset-dates-collapsed": t.collapse,
						"dp--preset-dates": !0
					}),
					"data-dp-mobile": P(N)
				}, [(w(!0), o(e, null, k(P(m).presetDates, (r, i) => (w(), o(e, { key: i }, [r.slot ? A(n.$slots, r.slot, {
					presetDate: xe,
					label: r.label,
					value: r.value
				}, void 0, void 0, 0) : (w(), o("button", {
					key: 1,
					type: "button",
					style: b(r.style || {}),
					class: v(["dp--btn dp--preset-range", { "dp--preset-range-collapsed": t.collapse }]),
					"data-test-id": r.testId ?? void 0,
					"data-dp-mobile": P(N),
					onClick: V((e) => xe(r.value), ["prevent"]),
					onKeydown: (e) => P(B)(e, () => xe(r.value), !0)
				}, M(r.label), 47, Tr))], 64))), 128))], 10, wr)) : a("", !0),
				s("div", Er, [(w(), i(j(q.value), {
					ref: "dyn-cmp",
					collapse: t.collapse,
					"no-overlay-focus": t.noOverlayFocus,
					"menu-wrap-ref": U.value,
					onFocusMenu: ce,
					onSelectDate: r[0] ||= (e) => n.$emit("select-date"),
					onAutoApply: r[1] ||= (e) => n.$emit("auto-apply", e),
					onTimeUpdate: r[2] ||= (e) => n.$emit("time-update")
				}, c({ _: 2 }, [k(P(de), (e) => ({
					name: e,
					fn: R((t) => [A(n.$slots, e, y(f({ ...t })))])
				}))]), 1064, [
					"collapse",
					"no-overlay-focus",
					"menu-wrap-ref"
				]))]),
				n.$slots["right-sidebar"] ? (w(), o("div", Dr, [A(n.$slots, "right-sidebar", y(f(le.value)))])) : a("", !0)
			], 14, Sr),
			n.$slots["action-extra"] ? (w(), o("div", Or, [n.$slots["action-extra"] ? A(n.$slots, "action-extra", { selectCurrentDate: P(ne) }, void 0, void 0, 0) : a("", !0)])) : a("", !0),
			!P(m).autoApply || P(_).keepActionRow ? (w(), i(un, {
				key: 3,
				"menu-mount": ae.value,
				"calendar-width": ie.value,
				onClosePicker: r[3] ||= (e) => n.$emit("close-picker"),
				onSelectDate: r[4] ||= (e) => n.$emit("select-date"),
				onSelectNow: P(ne)
			}, c({ _: 2 }, [k(P(ue), (e) => ({
				name: e,
				fn: R((t) => [A(n.$slots, e, y(f(t)))])
			}))]), 1032, [
				"menu-mount",
				"calendar-width",
				"onSelectNow"
			])) : a("", !0)
		], 42, yr));
	}
}), Ar = d({
	name: "MaybeTeleport",
	props: {
		to: {
			type: [String, Object],
			default: void 0
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	setup(e, { slots: n }) {
		return () => {
			let r = n.default?.();
			return e.to && !e.disabled ? p(t, { to: e.to }, r) : r;
		};
	}
}), jr = ["data-dp-mobile"], Mr = /* @__PURE__ */ d({
	__name: "VueDatePicker",
	setup(e, { expose: t }) {
		let { rootEmit: l, setState: d, inputValue: p, modelValue: m, rootProps: h, defaults: { inline: g, config: x, textInput: T, range: E, multiDates: D, teleport: j, floatingConfig: M, flow: ee } } = Q(), { validateDate: te, isValidTime: z } = gt(), { menuTransition: B, showTransition: V } = mt(), { isMobile: re } = qt(), { findNextFocusableElement: H, getNumVal: U } = Gt(), K = F(), q = O(!1), ce = O(g.value.enabled), le = O(g.value.enabled || h.centered), ue = N(h, "modelValue"), de = N(h, "timezone"), fe = I("dp-menu-wrap"), pe = I("dp-menu"), me = I("input-cmp"), he = I("picker-wrapper"), ge = I("menu-arrow"), _e = O(!1), ve = O(!1), ye = O(!1), be = O(!0), { floatingStyles: xe, middlewareData: J, placement: Se, y: Ce } = se(me, fe, {
			strategy: M.value.strategy,
			placement: M.value.placement,
			middleware: ((e) => (M.value.flip && e.push(ae(typeof M.value.flip == "object" ? M.value.flip : {})), M.value.shift && e.push(G(typeof M.value.shift == "object" ? M.value.shift : {})), M.value.arrow && e.push(W({ element: M.value.arrow === !0 ? ge : M.value.arrow })), e))([oe(M.value.offset)]),
			whileElementsMounted: ie
		});
		S(() => {
			Te(h.modelValue), _().then(() => {
				g.value.enabled || globalThis.addEventListener("resize", Ne);
			}), g.value.enabled && (q.value = !0), globalThis.addEventListener("keyup", Pe), globalThis.addEventListener("keydown", Fe);
		}), C(() => {
			g.value.enabled || globalThis.removeEventListener("resize", Ne), globalThis.removeEventListener("keyup", Pe), globalThis.removeEventListener("keydown", Fe);
		});
		let we = An(K, h.presetDates), Y = kn(K, $.Input);
		L([ue, de], () => {
			Te(ue.value);
		}, { deep: !0 }), L([Se, Ce], () => {
			!g.value.enabled && !h.centered && be.value && (le.value = !1, _().then(() => {
				be.value = !1, le.value = !0;
			}));
		});
		let { parseExternalModelValue: Te, emitModelValue: Ee, formatInputValue: De, checkBeforeEmit: Oe } = pt(), ke = r(() => ({
			"dp--main": !0,
			"dp--theme-dark": h.dark,
			"dp--theme-light": !h.dark,
			"dp--flex-display": g.value.enabled,
			"dp--flex-display-collapsed": ye.value,
			"dp--flex-display-with-input": g.value.input
		})), Ae = r(() => h.dark ? "dp--theme-dark" : "dp--theme-light"), je = r(() => g.value.enabled && (h.timePicker || h.monthPicker || h.yearPicker || h.quarterPicker)), Me = () => me.value?.$el?.getBoundingClientRect() ?? {
			width: 0,
			left: 0,
			right: 0
		}, X = () => {
			q.value && x.value.closeOnScroll && We();
		}, Ne = () => {
			let e = pe.value?.$el.getBoundingClientRect().width ?? 0;
			ye.value = document.body.offsetWidth <= e;
		}, Pe = (e) => {
			if (e.key === "Tab" && !g.value.enabled && x.value.tabOutClosesMenu) {
				let e = he.value?.contains(document.activeElement), t = fe.value?.contains(document.activeElement);
				!e && !t && We();
			}
			ve.value = e.shiftKey;
		}, Fe = (e) => {
			ve.value = e.shiftKey;
		}, Ie = () => {
			!h.disabled && !h.readonly && (be.value = !0, ce.value = !0, q.value = !0, q.value && l("open"), q.value || Ue(), Te(h.modelValue));
		}, Le = () => {
			p.value = "", Ue(), pe.value?.onValueCleared(), me.value?.setParsedDate(null), l("update:model-value", null), l("cleared"), x.value.closeOnClearValue && We();
		}, Re = () => {
			let e = m.value;
			return !e || !Array.isArray(e) && te(e) ? !0 : Array.isArray(e) ? D.value.enabled || e.length === 2 && te(e[0]) && te(e[1]) ? !0 : E.value.partialRange && !h.timePicker ? te(e[0]) : !1 : !1;
		}, ze = () => {
			Oe() && Re() ? (Ee(), We()) : l("invalid-select");
		}, Be = (e) => {
			Ve(), Ee(), x.value.closeOnAutoApply && !e && We();
		}, Ve = () => {
			me.value && T.value.enabled && me.value.setParsedDate(m.value);
		}, He = (e = !1) => {
			h.autoApply && z(m.value) && Re() && (E.value.enabled && Array.isArray(m.value) ? (E.value.partialRange || m.value.length === 2) && Be(e) : Be(e));
		}, Ue = () => {
			T.value.enabled || (m.value = null);
		}, We = (e = !1) => {
			be.value = !0, e && m.value && x.value.setDateOnMenuClose && ze(), g.value.enabled || (q.value && (q.value = !1, d("menuFocused", !1), d("shiftKeyInMenu", !1), l("closed"), p.value && Te(ue.value)), Ue(), l("blur"));
		}, Ge = () => {
			!g.value.enabled && !q.value && (ce.value = !1);
		}, Ke = (e, t, n = !1) => {
			if (!e) {
				m.value = null;
				return;
			}
			let r = Array.isArray(e) ? e.every((e) => te(e)) : te(e), i = z(e);
			r && i ? (d("isTextInputDate", !0), m.value = e, t ? (_e.value = n, ze(), l("text-submit")) : h.autoApply && He(!0), _().then(() => {
				d("isTextInputDate", !1);
			})) : l("invalid-date", e);
		}, qe = () => {
			h.autoApply && z(m.value) && Ee(), Ve();
		}, Je = () => q.value ? We() : Ie(), Ye = (e) => {
			m.value = e;
		}, Xe = () => {
			T.value.enabled && (d("isInputFocused", !0), De()), l("focus");
		}, Ze = () => {
			T.value.enabled && (d("isInputFocused", !1), Te(h.modelValue), _e.value && H(he.value, ve.value)?.focus()), l("blur");
		}, Qe = (e, t) => {
			pe.value && pe.value.updateMonthYear(t ?? 0, {
				month: U(e.month),
				year: U(e.year)
			});
		}, $e = (e) => {
			Te(e ?? h.modelValue);
		}, et = (e, t) => {
			pe.value?.switchView(e, t);
		}, tt = (e, t) => {
			if (q.value) return x.value.onClickOutside ? x.value.onClickOutside(e, t) : We(!0);
		};
		return ne(fe, (e) => tt(Re, e), { ignore: [me] }), t({
			closeMenu: We,
			selectDate: ze,
			clearValue: Le,
			openMenu: Ie,
			onScroll: X,
			formatInputValue: De,
			updateInternalModelValue: Ye,
			setMonthYear: Qe,
			parseModel: $e,
			switchView: et,
			toggleMenu: Je,
			executeFlow: (e) => {
				pe.value?.executeFlow(e ?? ee.value?.steps?.at(0));
			},
			getDpWrapMenuRef: () => fe,
			dpMenuRef: () => pe,
			dpWrapMenuRef: () => fe,
			inputRef: () => me
		}), (e, t) => (w(), o("div", {
			ref: "picker-wrapper",
			class: v(ke.value),
			"data-datepicker-instance": "",
			"data-dp-mobile": P(re)
		}, [u(rn, {
			ref: "input-cmp",
			"is-menu-open": q.value,
			onClear: Le,
			onOpen: Ie,
			onSetInputDate: Ke,
			onSetEmptyDate: P(Ee),
			onSelectDate: ze,
			onToggle: Je,
			onClose: We,
			onFocus: Xe,
			onBlur: Ze,
			onRealBlur: t[0] ||= (e) => P(d)("isInputFocused", !1)
		}, c({ _: 2 }, [k(P(Y), (t) => ({
			name: t,
			fn: R((n) => [A(e.$slots, t, y(f(n)))])
		}))]), 1032, ["is-menu-open", "onSetEmptyDate"]), u(P(Ar), {
			to: P(j),
			disabled: !P(j)
		}, {
			default: R(() => [ce.value ? (w(), o("div", {
				key: 0,
				ref: "dp-menu-wrap",
				class: v({
					"dp--menu-wrapper": !P(g).enabled,
					"dp--outer-menu-wrap": !0,
					"dp--centered": P(h).centered
				}),
				style: b(!P(g).enabled && !P(h).centered ? P(xe) : void 0)
			}, [u(n, {
				name: P(B)(P(Se).startsWith("top")),
				css: P(V) && !P(g).enabled && !P(h).centered && le.value,
				appear: "",
				onAfterLeave: Ge
			}, {
				default: R(() => [q.value && le.value ? (w(), i(kr, {
					key: 0,
					ref: "dp-menu",
					class: v({ [Ae.value]: !0 }),
					"no-overlay-focus": je.value,
					collapse: ye.value,
					"get-input-rect": Me,
					onClosePicker: We,
					onSelectDate: ze,
					onAutoApply: He,
					onTimeUpdate: qe,
					onMenuBlur: t[1] ||= (e) => P(l)("blur")
				}, c({ _: 2 }, [k(P(we), (t) => ({
					name: t,
					fn: R((n) => [A(e.$slots, t, y(f({ ...n })))])
				})), !P(g).enabled && !P(h).centered && P(M).arrow === !0 ? {
					name: "arrow",
					fn: R(() => [s("div", {
						ref: "menu-arrow",
						class: v({
							"dp--arrow-top": P(Se).includes("bottom"),
							"dp--arrow-bottom": P(Se).includes("top")
						}),
						style: b({
							left: P(J).arrow?.x == null ? "" : `${P(J).arrow.x - P(J).arrow.centerOffset}px`,
							top: P(J).arrow?.y == null ? "" : `${P(J).arrow.y}px`
						})
					}, null, 6)]),
					key: "0"
				} : void 0]), 1032, [
					"class",
					"no-overlay-focus",
					"collapse"
				])) : a("", !0)]),
				_: 3
			}, 8, ["name", "css"])], 6)) : a("", !0)]),
			_: 3
		}, 8, ["to", "disabled"])], 10, jr));
	}
}), Nr = /* @__PURE__ */ d({
	__name: "VueDatePickerRoot",
	props: /*@__PURE__*/ h({
		multiCalendars: { type: [
			Boolean,
			Number,
			String,
			Object
		] },
		modelValue: {},
		modelType: {},
		dark: { type: Boolean },
		transitions: { type: [Boolean, Object] },
		ariaLabels: {},
		hideNavigation: {},
		timezone: {},
		vertical: { type: Boolean },
		hideMonthYearSelect: { type: Boolean },
		disableYearSelect: { type: Boolean },
		yearRange: {},
		autoApply: { type: Boolean },
		disabledDates: { type: [Array, Function] },
		startDate: {},
		hideOffsetDates: { type: Boolean },
		noToday: { type: Boolean },
		allowedDates: {},
		markers: {},
		presetDates: {},
		flow: {},
		preventMinMaxNavigation: { type: Boolean },
		reverseYears: { type: Boolean },
		weekPicker: { type: Boolean },
		filters: {},
		arrowNavigation: { type: Boolean },
		highlight: { type: [Function, Object] },
		teleport: { type: [Boolean, String] },
		centered: { type: Boolean },
		locale: {},
		weekStart: {},
		weekNumbers: { type: [Boolean, Object] },
		dayNames: { type: [Function, Array] },
		monthPicker: { type: Boolean },
		yearPicker: { type: Boolean },
		modelAuto: { type: Boolean },
		formats: {},
		multiDates: { type: [Boolean, Object] },
		minDate: {},
		maxDate: {},
		minTime: {},
		maxTime: {},
		inputAttrs: {},
		timeConfig: {},
		placeholder: {},
		timePicker: { type: Boolean },
		range: { type: [Boolean, Object] },
		menuId: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		inline: { type: [Boolean, Object] },
		textInput: { type: [Boolean, Object] },
		sixWeeks: { type: [Boolean, String] },
		actionRow: {},
		focusStartDate: { type: Boolean },
		disabledTimes: { type: [Function, Array] },
		calendar: { type: Function },
		config: {},
		quarterPicker: { type: Boolean },
		yearFirst: { type: Boolean },
		loading: { type: Boolean },
		ui: {},
		floating: {}
	}, Vt),
	emits: [
		"update:model-value",
		"internal-model-change",
		"text-submit",
		"text-input",
		"open",
		"closed",
		"focus",
		"blur",
		"cleared",
		"flow-step",
		"update-month-year",
		"invalid-select",
		"invalid-fixed-range",
		"invalid-date",
		"tooltip-open",
		"tooltip-close",
		"am-pm-change",
		"range-start",
		"range-end",
		"date-click",
		"overlay-toggle",
		"invalid",
		"menu-mounted",
		"menu-unmounted"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, a = e;
		tt(a, r);
		let o = An(F(), a.presetDates);
		return t(Xt(I("date-picker"))), (e, t) => (w(), i(Mr, { ref: "date-picker" }, c({ _: 2 }, [k(P(o), (t) => ({
			name: t,
			fn: R((n) => [A(e.$slots, t, y(f(n)))])
		}))]), 1536));
	}
});
//#endregion
export { Ge as TZDate, Nr as VueDatePicker, ct as WeekStart };

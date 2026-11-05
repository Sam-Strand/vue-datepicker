import { Fragment as e, Teleport as t, Transition as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createSlots as c, createTextVNode as l, createVNode as u, defineComponent as d, guardReactiveProps as f, h as p, inject as m, mergeDefaults as h, mergeProps as g, nextTick as _, normalizeClass as v, normalizeProps as y, normalizeStyle as b, onBeforeUpdate as x, onMounted as ee, onUnmounted as S, openBlock as C, provide as w, reactive as T, readonly as E, ref as D, renderList as O, renderSlot as k, resolveDynamicComponent as A, toDisplayString as j, toRaw as M, toRef as te, toValue as N, unref as P, useSlots as F, useTemplateRef as I, vShow as L, watch as R, withCtx as z, withDirectives as B, withKeys as V, withModifiers as ne } from "vue";
import { onClickOutside as re, unrefElement as H, useSwipe as U, useTemplateRefsList as W } from "@vueuse/core";
import { arrow as ie, autoUpdate as ae, flip as oe, offset as se, shift as G, useFloating as ce } from "@floating-ui/vue";
import { add as K, addDays as le, addMonths as q, addYears as ue, differenceInCalendarDays as de, differenceInMonths as fe, differenceInYears as pe, eachDayOfInterval as me, eachQuarterOfInterval as he, endOfQuarter as ge, endOfWeek as _e, endOfYear as ve, format as J, getDay as ye, getHours as be, getISOWeek as xe, getMinutes as Se, getMonth as Y, getQuarter as Ce, getSeconds as we, getWeek as Te, getYear as X, isAfter as Ee, isBefore as De, isDate as Oe, isEqual as ke, isSameDay as Ae, isSameQuarter as je, isValid as Me, parse as Ne, roundToNearestMinutes as Pe, set as Z, setMilliseconds as Fe, setMonth as Ie, setSeconds as Le, setYear as Re, startOfMonth as ze, startOfQuarter as Be, startOfWeek as Ve, startOfYear as He, subDays as Ue, subMonths as We, subYears as Ge } from "date-fns";
import { TZDate as Ke, TZDate as qe } from "@date-fns/tz";
//#region src/VueDatePicker/components/Icons/CalendarIcon.ts
function Je() {
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
//#region src/VueDatePicker/components/Icons/CancelIcon.ts
function Ye() {
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
//#region src/VueDatePicker/components/Icons/ChevronLeftIcon.ts
function Xe() {
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
//#region src/VueDatePicker/components/Icons/ChevronRightIcon.ts
function Ze() {
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
//#region src/VueDatePicker/components/Icons/ClockIcon.ts
function Qe() {
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
//#region src/VueDatePicker/components/Icons/ChevronUpIcon.ts
function $e() {
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
//#region src/VueDatePicker/components/Icons/ChevronDownIcon.ts
function et() {
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
//#region src/VueDatePicker/composables/useInjector.ts
var tt = Symbol("ContextKey"), nt = (e, t) => {
	let { setTimeModelValue: n } = Kt(), i = Gt(e), a = D(null), o = T({
		menuFocused: !1,
		shiftKeyInMenu: !1,
		isInputFocused: !1,
		isTextInputDate: !1,
		arrowNavigationLevel: 0
	}), s = i.getDate(/* @__PURE__ */ new Date()), c = D(""), l = () => {
		let e = i.startTime.value, t = Array.isArray(e) ? e[0] : e;
		return t ? Z(i.getDate(/* @__PURE__ */ new Date()), {
			hours: +t.hours,
			minutes: +t.minutes,
			seconds: +(t.seconds ?? 0),
			milliseconds: 0
		}) : s;
	}, u = D([{
		month: Y(s),
		year: X(s)
	}]), d = T({
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	n(d, null, l(), i.range.value.enabled);
	let f = r({
		get: () => a.value,
		set: (e) => {
			a.value = e;
		}
	}), p = r(() => (e) => u.value[e] ? u.value[e].month : 0), m = r(() => (e) => u.value[e] ? u.value[e].year : 0);
	w(tt, {
		rootProps: e,
		defaults: i,
		modelValue: f,
		state: E(o),
		rootEmit: t,
		calendars: u,
		month: p,
		year: m,
		time: d,
		today: s,
		inputValue: c,
		setState: (e, t) => {
			o[e] = t;
		},
		updateTime: () => {
			n(d, f.value, l(), i.range.value.enabled);
		},
		getDate: i.getDate,
		getDateFromParts: i.getDateFromParts
	});
}, rt = /* @__PURE__ */ function(e) {
	return e.month = "month", e.year = "year", e;
}({}), it = /* @__PURE__ */ function(e) {
	return e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e;
}({}), at = /* @__PURE__ */ function(e) {
	return e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e;
}({}), ot = [
	"timestamp",
	"date",
	"iso"
], st = /* @__PURE__ */ function(e) {
	return e.up = "up", e.down = "down", e.left = "left", e.right = "right", e;
}({}), Q = /* @__PURE__ */ function(e) {
	return e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e;
}({}), ct = /* @__PURE__ */ function(e) {
	return e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e;
}({}), lt = /* @__PURE__ */ function(e) {
	return e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e;
}({}), ut = Symbol("FlowKey"), dt = (e, t) => {
	let { rootEmit: n, rootProps: i, defaults: { timeConfig: a, flow: o } } = $(), s = D(), c = T({
		[it.timePicker]: !a.value.enableTimePicker || i.timePicker || i.monthPicker || i.quarterPicker,
		[it.calendar]: !1,
		[it.header]: !1
	}), l = r(() => i.monthPicker || i.timePicker || i.quarterPicker), u = (e) => {
		let t = o.value?.steps.at(0);
		if (o.value?.steps?.length) {
			if (!e && l.value) return p(t);
			e && (c[e] = !0), Object.keys(c).filter((e) => !c[e]).length || p(t);
		}
	}, d = (e, r = !1) => {
		if (o.value?.steps?.length && s.value === e) {
			let e = o.value.steps.at(o.value.steps.indexOf(s.value) + 1);
			e ? (s.value = e, n("flow-step", s.value), p()) : i.autoApply && !r && _().then(() => t("auto-apply"));
		}
	}, f = (t, n, ...r) => {
		s.value === t && e.value && e.value[n]?.(...r);
	}, p = (e) => {
		e && (s.value = e), f(at.month, "toggleMonthPicker", !0), f(at.year, "toggleYearPicker", !0), f(at.calendar, "toggleTimePicker", !1), f(at.time, "toggleTimePicker", !0), (s.value === at.hours || s.value === at.minutes || s.value === at.seconds) && f(s.value, "toggleTimePicker", !0, s.value);
	};
	return w(ut, {
		childMount: u,
		updateFlowStep: d,
		flowStep: E(s)
	}), { executeFlow: p };
}, $ = () => {
	let e = m(tt);
	if (!e) throw Error("Can't use context");
	return e;
}, ft = () => {
	let e = m(ut);
	if (!e) throw Error("Can't use flow");
	return e;
}, pt = () => {
	let { rootProps: e, state: t, defaults: { textInput: n } } = $(), i = r(() => t.arrowNavigationLevel), a = D(-1), o = D(-1);
	R(i, (e, t) => {
		b(n.value.enabled && n.value.selectOnFocus ? !0 : e === 0 && t > 0);
	});
	let s = D([]), c = D(/* @__PURE__ */ new Map()), l = () => {
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
			Q.arrowUp,
			Q.arrowDown,
			Q.arrowLeft,
			Q.arrowRight
		].includes(e.key)) return;
		let t = document.activeElement;
		if (!t?.hasAttribute("data-dp-action-element")) return;
		l(), e.preventDefault();
		let n = -1, r = -1;
		for (let e = 0; e < s.value.length; e++) {
			let i = s.value[e].indexOf(t);
			if (i !== -1) {
				n = e, r = i;
				break;
			}
		}
		if (n !== -1) switch (e.key) {
			case Q.arrowLeft: return p(n, r);
			case Q.arrowRight: return m(n, r);
			case Q.arrowUp: return h(n, r);
			case Q.arrowDown: return g(n, r);
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
			let e = document.querySelector(`[data-dp-focus-target="true"][data-dp-action-element="${i.value}"]`) ?? document.querySelector(`[data-dp-action-element="${i.value}"]`);
			e && y(e);
		}
	}, x = () => n.value.enabled && document.activeElement?.getAttribute("data-test-id") === "dp-input";
	ee(() => {
		e.arrowNavigation && (x() || b(!1), document.addEventListener("keydown", f));
	}), S(() => {
		e.arrowNavigation && document.removeEventListener("keydown", f);
	});
}, mt = () => {
	let { checkPartialRangeValue: e, checkRangeEnabled: t, isValidDate: n } = _t(), { convertType: r, errorMapper: i } = Kt(), { getDate: a, rootEmit: o, state: s, rootProps: c, inputValue: l, defaults: { textInput: u, range: d, multiDates: f, timeConfig: p, formats: m, weekStart: h }, modelValue: g, updateTime: _ } = $(), { setTime: v, getWeekFromDate: y } = qt(), { formatSelectedDate: b, formatForTextInput: x } = Yt();
	R(g, (e, t) => {
		o("internal-model-change", g.value), JSON.stringify(t ?? {}) !== JSON.stringify(e ?? {}) && _();
	}, { deep: !0 }), R(d, (e, t) => {
		e.enabled !== t.enabled && (g.value = null, _());
	}), R(() => m.value.input, () => {
		L();
	}), R(() => c.locale, () => {
		L();
	});
	let ee = (e) => e ? c.modelType ? B(e) : {
		hours: be(e),
		minutes: Se(e),
		seconds: p.value.enableSeconds ? we(e) : 0
	} : null, S = (e) => c.modelType ? B(e) : {
		month: Y(e),
		year: X(e)
	}, C = (n) => Array.isArray(n) ? f.value.enabled ? n.map((e) => w(e, Re(a(), e))) : t(() => [Re(a(), n[0]), n[1] ? Re(a(), n[1]) : e(d.value.partialRange)], d.value.enabled) : Re(a(), +n), w = (e, t) => (typeof e == "string" || typeof e == "number") && c.modelType ? z(e) : t, T = (e) => Array.isArray(e) ? [w(e[0], v(e[0])), w(e[1], v(e[1]))] : w(e, v(e)), E = (n) => {
		let r = Z(a(), { date: 1 });
		return Array.isArray(n) ? f.value.enabled ? n.map((e) => w(e, Z(r, {
			month: +e.month,
			year: +e.year
		}))) : t(() => [w(n[0], Z(r, {
			month: +n[0].month,
			year: +n[0].year
		})), w(n[1], n[1] ? Z(r, {
			month: +n[1].month,
			year: +n[1].year
		}) : e(d.value.partialRange))], d.value.enabled) : w(n, Z(r, {
			month: +n.month,
			year: +n.year
		}));
	}, D = (e) => {
		if (Array.isArray(e)) return e.map((e) => z(e));
		throw Error(i.dateArr("multi-dates"));
	}, O = (e) => {
		if (Array.isArray(e) && d.value.enabled) {
			let t = e[0], n = e[1];
			return [a(Array.isArray(t) ? t[0] : null), Array.isArray(n) && n.length ? a(n[0]) : null];
		}
		return a(e[0]);
	}, k = (n) => c.modelAuto ? Array.isArray(n) ? [z(n[0]), z(n[1])] : c.autoApply ? [z(n)] : [z(n), null] : Array.isArray(n) ? t(() => n[1] ? [z(n[0]), n[1] ? z(n[1]) : e(d.value.partialRange)] : [z(n[0])], d.value.enabled) : z(n), A = () => {
		Array.isArray(g.value) && d.value.enabled && g.value.length === 1 && g.value.push(e(d.value.partialRange));
	}, j = () => {
		let t = g.value;
		return [B(t[0]), t[1] ? B(t[1]) : e(d.value.partialRange)];
	}, M = () => Array.isArray(g.value) ? g.value[1] ? j() : B(r(g.value[0])) : [], te = () => (g.value || []).map((e) => B(e)), N = (e = !1) => (e || A(), c.modelAuto ? M() : f.value.enabled ? te() : Array.isArray(g.value) ? t(() => j(), d.value.enabled) : B(r(g.value))), P = (e) => !e || Array.isArray(e) && !e.length ? null : c.timePicker ? T(r(e)) : c.monthPicker ? E(r(e)) : c.yearPicker ? C(r(e)) : f.value.enabled ? D(r(e)) : c.weekPicker ? O(r(e)) : k(r(e)), F = (e) => {
		if (s.isTextInputDate) return;
		let t = P(e);
		n(r(t)) ? (g.value = r(t), L()) : (g.value = null, l.value = "");
	}, I = () => g.value ? f.value.enabled ? g.value.map((e) => b(e)).join("; ") : u.value.enabled ? x() : b(g.value) : "", L = () => {
		l.value = I();
	}, z = (e) => c.modelType ? ot.includes(c.modelType) ? a(e) : c.modelType === "format" && typeof m.value.input == "string" ? Ne(e, m.value.input, a(), { locale: c.locale }) : Ne(e, c.modelType, a(), { locale: c.locale }) : a(e), B = (e) => e ? c.modelType ? c.modelType === "timestamp" ? +e : c.modelType === "iso" ? e.toISOString() : c.modelType === "format" && typeof m.value.input == "string" ? b(e) : b(e, c.modelType) : e : null, V = (e) => {
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
		parseExternalModelValue: F,
		formatInputValue: L,
		emitModelValue: () => (L(), c.monthPicker ? H(S) : c.timePicker ? H(ee) : c.yearPicker ? H(X) : c.weekPicker ? U() : V(N()))
	};
}, ht = () => {
	let { defaults: { transitions: e } } = $(), t = r(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), n = r(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
	return {
		transitionName: t,
		showTransition: !!e.value,
		menuTransition: n
	};
}, gt = (e) => {
	let { modelValue: t } = $();
	R(t, (t, n) => {
		e && JSON.stringify(t ?? {}) !== JSON.stringify(n ?? {}) && e();
	}, { deep: !0 });
}, _t = () => {
	let { defaults: { safeDates: e, range: t, multiDates: n, filters: i, timeConfig: a }, rootProps: o, getDate: s } = $(), { getMapKeyType: c, getMapDate: l, errorMapper: u, convertType: d } = Kt(), { isDateBefore: f, isDateAfter: p, isDateEqual: m, resetDate: h, getDaysInBetween: g, setTimeValue: _, getTimeObj: v, setTime: y } = qt(), b = (t) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(s(t)) : !!l(t, e.value.disabledDates) : !1, x = (t) => e.value.maxDate ? o.yearPicker ? X(t) > X(e.value.maxDate) : p(t, e.value.maxDate) : !1, ee = (t) => e.value.minDate ? o.yearPicker ? X(t) < X(e.value.minDate) : f(t, e.value.minDate) : !1, S = (e) => {
		if (!e) return !1;
		let t = x(e), n = ee(e), r = b(e), a = i.value.months.map((e) => +e).includes(Y(e)), s = i.value.weekDays?.length ? i.value.weekDays.some((t) => +t === ye(e)) : !1, c = D(e), l = X(e), u = l < +o.yearRange[0] || l > +o.yearRange[1];
		return !(t || n || r || a || u || s || c);
	}, C = (t, n) => f(...H(e.value.minDate, t, n)) || m(...H(e.value.minDate, t, n)), w = (t, n) => p(...H(e.value.maxDate, t, n)) || m(...H(e.value.maxDate, t, n)), T = (t, n, r) => {
		let i = !1;
		return e.value.maxDate && r && w(t, n) && (i = !0), e.value.minDate && !r && C(t, n) && (i = !0), i;
	}, E = (t, n, r, i) => {
		let a = !1;
		return i && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? a = T(t, n, r) : (e.value.minDate && C(t, n) || e.value.maxDate && w(t, n)) && (a = !0) : a = !0, a;
	}, D = (t) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !l(t, e.value.allowedDates, c(o.monthPicker, o.yearPicker)) : !1, O = (e) => !S(e), k = (e) => t.value.noDisabledRange ? !me({
		start: e[0],
		end: e[1]
	}).some((e) => O(e)) : !0, A = (e) => {
		if (e) {
			let t = X(e);
			return t >= +o.yearRange[0] && t <= o.yearRange[1];
		}
		return !0;
	}, j = (e, n) => !!(Array.isArray(e) && e[n] && (t.value.maxRange || t.value.minRange) && A(e[n])), M = (e, n, r = 0) => {
		if (j(n, r) && A(e)) {
			let i = de(e, n[r]), a = g(n[r], e), o = a.length === 1 ? 0 : a.filter((e) => O(e)).length, s = Math.abs(i) - (t.value.minMaxRawRange ? 0 : o);
			if (t.value.minRange && t.value.maxRange) return s >= +t.value.minRange && s <= +t.value.maxRange;
			if (t.value.minRange) return s >= +t.value.minRange;
			if (t.value.maxRange) return s <= +t.value.maxRange;
		}
		return !0;
	}, te = () => !a.value.enableTimePicker || o.monthPicker || o.yearPicker || a.value.ignoreTimeValidation, N = (e) => Array.isArray(e) ? [e[0] ? _(e[0]) : null, e[1] ? _(e[1]) : null] : _(e), P = (e, t, n) => t ? e.find((e) => +e.hours === be(t) && e.minutes === "*" ? !0 : +e.minutes === Se(t) && +e.hours === be(t)) && n : !1, F = (e, t, n) => {
		let [r, i] = e, [a, o] = t;
		return !P(r, a, n) && !P(i, o, n) && n;
	}, I = (e, t) => {
		let n = Array.isArray(t) ? t : [t];
		return Array.isArray(o.disabledTimes) ? Array.isArray(o.disabledTimes[0]) ? F(o.disabledTimes, n, e) : !n.some((t) => P(o.disabledTimes, t, e)) : e;
	}, L = (e, t) => {
		let n = Array.isArray(t) ? [v(t[0]), t[1] ? v(t[1]) : void 0] : v(t), r = !o.disabledTimes(n);
		return e && r;
	}, R = (e, t) => o.disabledTimes ? Array.isArray(o.disabledTimes) ? I(t, e) : L(t, e) : t, z = (t) => {
		let n = !0;
		if (!t || te()) return !0;
		let r = !e.value.minDate && !e.value.maxDate ? N(t) : t;
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
		let i = r ? q(t, 1) : We(t, 1), a = [Y(i), X(i)];
		return r ? !w(...a) : !C(...a);
	}, H = (e, t, n) => [Z(s(e), { date: 1 }), Z(s(), {
		month: t,
		year: n,
		date: 1
	})], U = (e, t, n, r) => {
		if (!e) return !0;
		if (r) {
			let r = n === "max" ? De(e, t) : Ee(e, t), i = {
				seconds: 0,
				milliseconds: 0
			};
			return r || ke(Z(e, i), Z(t, i));
		}
		return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
	}, W = (e, t, n, r, i) => {
		if (Array.isArray(r)) {
			let a = ie(e, r[0], t), o = ie(e, r[1], t);
			return U(r[0], a, n, !!t) && U(r[1], o, n, !!t) && i;
		}
		return U(r, ie(e, r, t), n, !!t) && i;
	}, ie = (e, t, n) => e ? y(e, t) : s(n ?? t);
	return {
		isDisabled: O,
		validateDate: S,
		validateMonthYearInRange: E,
		isDateRangeAllowed: k,
		checkMinMaxRange: M,
		isValidTime: z,
		validateMonthYear: re,
		validateMinDate: C,
		validateMaxDate: w,
		isValidDate: (e) => Array.isArray(e) ? Me(e[0]) && (e[1] ? Me(e[1]) : !0) : e ? Me(e) : !1,
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
function vt(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function yt(e) {
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
function bt(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? St(s, (e) => e.test(o)) : xt(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function xt(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function St(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function Ct(e) {
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
var wt = {
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
}, Tt = (e, t, n) => {
	let r, i = wt[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, Et = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, Dt = (e, t, n, r) => Et[e], Ot = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: yt({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: yt({
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
	month: yt({
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
	day: yt({
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
	dayPeriod: yt({
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
}, kt = {
	ordinalNumber: Ct({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (e) => parseInt(e, 10)
	}),
	era: bt({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: bt({
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
	month: bt({
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
	day: bt({
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
	dayPeriod: bt({
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
}, At = {
	code: "en-US",
	formatDistance: Tt,
	formatLong: {
		date: vt({
			formats: {
				full: "EEEE, MMMM do, y",
				long: "MMMM do, y",
				medium: "MMM d, y",
				short: "MM/dd/yyyy"
			},
			defaultWidth: "full"
		}),
		time: vt({
			formats: {
				full: "h:mm:ss a zzzz",
				long: "h:mm:ss a z",
				medium: "h:mm:ss a",
				short: "h:mm a"
			},
			defaultWidth: "full"
		}),
		dateTime: vt({
			formats: {
				full: "{{date}} 'at' {{time}}",
				long: "{{date}} 'at' {{time}}",
				medium: "{{date}}, {{time}}",
				short: "{{date}}, {{time}}"
			},
			defaultWidth: "full"
		})
	},
	formatRelative: Dt,
	localize: Ot,
	match: kt,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
}, jt = {
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
	autoSwitchStartEnd: !0,
	requireEndTime: !1
}, Mt = {
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
}, Nt = {
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
}, Pt = {
	dates: [],
	years: [],
	months: [],
	quarters: [],
	weeks: [],
	weekdays: [],
	options: { highlightDisabled: !1 }
}, Ft = {
	showSelect: !0,
	showCancel: !0,
	showNow: !1,
	showPreview: !0,
	selectBtnLabel: "Select",
	cancelBtnLabel: "Cancel",
	nowBtnLabel: "Now",
	nowBtnRound: void 0
}, It = {
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
}, Lt = {
	menuAppearTop: "dp-menu-appear-top",
	menuAppearBottom: "dp-menu-appear-bottom",
	open: "dp-slide-down",
	close: "dp-slide-up",
	next: "calendar-next",
	previous: "calendar-prev",
	vNext: "dp-slide-up",
	vPrevious: "dp-slide-down"
}, Rt = {
	weekDays: [],
	months: [],
	years: [],
	times: {
		hours: [],
		minutes: [],
		seconds: []
	}
}, zt = {
	month: "LLL",
	year: "yyyy",
	weekDay: "EEEEEE",
	quarter: "MMMM",
	day: "d",
	input: void 0,
	preview: void 0
}, Bt = {
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
}, Vt = {
	menuWrapRef: null,
	collapse: !1
}, Ht = {
	yearRange: () => [1900, 2100],
	ui: () => ({}),
	locale: () => At,
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
}, Ut = {
	name: void 0,
	required: !1,
	autocomplete: "off",
	state: void 0,
	clearable: !0,
	alwaysClearable: !1,
	hideInputIcon: !1,
	id: void 0,
	inputmode: "none"
}, Wt = {
	type: "local",
	hideOnOffsetDates: !1,
	label: "W"
}, Gt = (e) => {
	let { getMapKey: t, getMapKeyType: n, getTimeObjFromCurrent: i } = Kt();
	function a(t, n) {
		let r;
		return r = e.timezone ? new qe(t ?? /* @__PURE__ */ new Date(), e.timezone) : t ? new Date(t) : /* @__PURE__ */ new Date(), n ? Z(r, {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		}) : r;
	}
	let o = (t, n, r = 1) => e.timezone ? new qe(t, n, r, e.timezone) : new Date(t, n, r), s = () => {
		let e = A.value.enableSeconds ? ":ss" : "", t = A.value.enableMinutes ? ":mm" : "";
		return A.value.is24 ? `HH${t}${e}` : `hh${t}${e} aa`;
	}, c = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? s() : e.weekPicker ? `${C.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : A.value.enableTimePicker ? `MM/dd/yyyy, ${s()}` : "MM/dd/yyyy", l = (e) => i(a(), e, A.value.enableSeconds), u = () => E.value.enabled ? A.value.startTime && Array.isArray(A.value.startTime) ? [l(A.value.startTime[0]), l(A.value.startTime[1])] : null : A.value.startTime && !Array.isArray(A.value.startTime) ? l(A.value.startTime) : null, d = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : Math.max(+e, 2) : 0, f = (r) => {
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
		let r = t ? e.multiCalendars : {}, i = d(t ? r.count ?? !0 : e.multiCalendars);
		return Object.assign(n, r, { count: i });
	}), h = r(() => u()), g = r(() => ({
		...It,
		...e.ariaLabels
	})), _ = r(() => ({
		...Rt,
		...e.filters
	})), v = r(() => typeof e.transitions == "boolean" ? e.transitions ? Lt : !1 : {
		...Lt,
		...e.transitions
	}), y = r(() => ({
		...Ft,
		...e.actionRow
	})), b = r(() => typeof e.textInput == "object" ? {
		...Nt,
		...e.textInput,
		format: typeof e.textInput.format == "string" ? e.textInput.format : O.value.input,
		pattern: e.textInput.format ?? O.value.input,
		enabled: !0
	} : {
		...Nt,
		format: O.value.input,
		pattern: O.value.input,
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
	}), ee = r(() => ({
		...Mt,
		...e.config
	})), S = r(() => typeof e.highlight == "function" ? e.highlight : {
		...Pt,
		...e.highlight
	}), C = r(() => typeof e.weekNumbers == "object" ? {
		type: e.weekNumbers?.type ?? Wt.type,
		hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? Wt.hideOnOffsetDates,
		label: e.weekNumbers.label ?? Wt.label
	} : e.weekNumbers ? Wt : void 0), w = r(() => typeof e.multiDates == "boolean" ? {
		enabled: e.multiDates,
		dragSelect: !0,
		limit: null
	} : {
		enabled: !!e.multiDates,
		limit: e.multiDates?.limit ? +e.multiDates.limit : null,
		dragSelect: e.multiDates?.dragSelect ?? !0
	}), T = r(() => ({
		minDate: e.minDate ? a(e.minDate) : null,
		maxDate: e.maxDate ? a(e.maxDate) : null,
		disabledDates: Array.isArray(e.disabledDates) ? f(e.disabledDates) : e.disabledDates,
		allowedDates: Array.isArray(e.allowedDates) ? f(e.allowedDates) : null,
		highlight: typeof S.value == "object" && Array.isArray(S.value.dates) ? f(S.value.dates) : S.value,
		markers: e.markers?.length ? new Map(e.markers.map((e) => [t(a(e.date), ct.DATE), M(e)])) : null
	})), E = r(() => typeof e.range == "object" ? {
		enabled: !0,
		...jt,
		...e.range
	} : {
		enabled: e.range,
		...jt
	}), D = r(() => Object.fromEntries(Object.keys(e.ui).map((t) => {
		let n = t, r = e.ui[n];
		return n === "dayClass" ? [n, e.ui[n]] : [t, typeof e.ui[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((e) => [e, !0]))];
	}))), O = r(() => ({
		...zt,
		...e.formats,
		input: e.formats?.input ?? c(),
		preview: e.formats?.preview ?? e.formats?.input ?? c()
	})), k = r(() => {
		if (e.teleport) return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
	}), A = r(() => ({
		...Bt,
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
		config: ee,
		highlight: S,
		weekNumbers: C,
		range: E,
		safeDates: T,
		multiDates: w,
		ui: D,
		formats: O,
		teleport: k,
		timeConfig: A,
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
				...Ut,
				inputmode: t,
				...e.inputAttrs
			} : {
				...Ut,
				inputmode: t
			};
		}),
		floatingConfig: r(() => ({
			offset: e.floating?.offset ?? 10,
			arrow: e.floating?.arrow ?? !0,
			strategy: e.floating?.strategy ?? void 0,
			placement: e.floating?.placement ?? void 0,
			flip: e.floating?.flip ?? !0,
			shift: e.floating?.shift ?? !0,
			autoUpdate: e.floating?.autoUpdate ?? !0
		})),
		weekStart: r(() => e.weekStart || e.weekStart === 0 || e.weekStart === "0" ? +e.weekStart : ye(Ve(a(), { locale: e.locale }))),
		getDate: a,
		getDateFromParts: o
	};
}, Kt = () => {
	let e = (e, t) => J(e, t ?? ct.DATE), t = (e, t) => e ? ct.MONTH_AND_YEAR : t ? ct.YEAR : ct.DATE, n = (t, n, r) => n.get(e(t, r)), r = (e) => e, i = (e) => e === 0 ? e : !e || Number.isNaN(+e) ? null : +e, a = () => [
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
		if (e.key === Q.enter || e.key === Q.space && r) return n && e.preventDefault(), t();
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
			hours: be,
			minutes: Se,
			seconds: we
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
				hours: be(e),
				minutes: Se(e),
				seconds: n ? we(e) : 0
			};
			return Object.assign(r, t);
		},
		errorMapper: g
	};
}, qt = () => {
	let { getDate: e } = $(), { getMapDate: t, getGroupedList: n } = Kt(), r = (t, n) => {
		if (!t) return e();
		let r = Z(e(t), {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		});
		return n ? ze(r) : r;
	}, i = (t, n) => {
		let r = e(n);
		return Z(r, {
			hours: +(t.hours ?? be(r)),
			minutes: +(t.minutes ?? Se(r)),
			seconds: +(t.seconds ?? we(r)),
			milliseconds: 0
		});
	}, a = (e, t) => [Ve(e, { weekStartsOn: +t }), _e(e, { weekStartsOn: +t })], o = (e, t) => !e || !t ? !1 : De(r(e), r(t)), s = (e, t) => !e || !t ? !1 : ke(r(e), r(t)), c = (e, t) => !e || !t ? !1 : Ee(r(e), r(t)), l = (e, t, n) => e?.[0] && e?.[1] ? c(n, e[0]) && o(n, e[1]) : e?.[0] && t ? c(n, e[0]) && o(n, t) || o(n, e[0]) && c(n, t) : !1, u = (e, t) => me({
		start: c(e, t) ? t : e,
		end: c(t, e) ? t : e
	}), d = (e) => `dp-${J(e, "yyyy-MM-dd")}`, f = (t) => r(Z(e(t), { date: 1 })), p = (t, n) => {
		if (n) {
			let r = X(e(n));
			if (r > t) return 12;
			if (r === t) return Y(e(n));
		}
	}, m = (t, n) => {
		if (n) {
			let r = X(e(n));
			return r < t ? -1 : r === t ? Y(e(n)) : void 0;
		}
	}, h = (t) => {
		if (t) return X(e(t));
	}, g = (e) => ({
		hours: be(e),
		minutes: Se(e),
		seconds: we(e)
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
		setTimeValue: (t) => Z(e(), g(t)),
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
			before: Ue(r(t), e),
			after: le(r(t), e)
		}),
		isModelAuto: (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1,
		matchDate: (n, r) => n ? r ? r instanceof Map ? !!t(n, r) : r(e(n)) : !1 : !0,
		checkHighlightMonth: (e, t, n) => typeof e == "function" ? e({
			month: t,
			year: n
		}) : e.months.some((e) => e.month === t && e.year === n),
		checkHighlightYear: (e, t) => typeof e == "function" ? e(t) : e.years.includes(t)
	};
}, Jt = () => {
	let { defaults: { config: e } } = $(), t = D(0);
	ee(() => {
		n(), globalThis.addEventListener("resize", n, { passive: !0 });
	}), S(() => {
		globalThis.removeEventListener("resize", n);
	});
	let n = () => {
		t.value = globalThis.document.documentElement.clientWidth;
	};
	return { isMobile: r(() => t.value <= e.value.mobileBreakpoint ? !0 : void 0) };
}, Yt = () => {
	let { getDate: e, state: t, modelValue: n, rootProps: r, defaults: { formats: i, textInput: a } } = $(), o = (t) => J(Re(e(), t), i.value.year, { locale: r.locale }), s = (t) => J(Ie(e(), t), i.value.month, { locale: r.locale }), c = (e) => J(e, i.value.weekDay, { locale: r.locale }), l = (e) => J(e, i.value.quarter, { locale: r.locale }), u = (e, t) => [e, t].map((e) => l(e)).join("-"), d = (e) => J(e, i.value.day, { locale: r.locale }), f = (e, t, n) => {
		let o = n ? i.value.preview : i.value.input;
		if (!e) return "";
		if (typeof o == "function") return o(e);
		let s = t ?? o, c = { locale: r.locale };
		return Array.isArray(e) ? `${J(e[0], s, c)}${r.modelAuto && !e[1] ? "" : a.value.rangeSeparator}${e[1] ? J(e[1], s, c) : ""}` : J(e, s, c);
	}, p = () => {
		let e = (e) => J(e, a.value.format, { locale: r.locale });
		return Array.isArray(n.value) ? `${e(n.value[0])}${a.value.rangeSeparator}${n.value[1] ? e(n.value[1]) : ""}` : "";
	};
	return {
		formatYear: o,
		formatMonth: s,
		formatWeekDay: c,
		formatQuarter: l,
		formatSelectedDate: f,
		formatForTextInput: () => t.isInputFocused && n.value ? Array.isArray(n.value) ? p() : typeof a.value.format == "function" ? a.value.format(n.value) : J(n.value, a.value.format, { locale: r.locale }) : f(n.value),
		formatPreview: (e) => f(e, void 0, !0),
		formatQuarterText: u,
		formatDay: d
	};
}, Xt = () => {
	let { rootProps: e } = $(), { formatYear: t, formatMonth: n } = Yt();
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
}, Zt = (e) => ({
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
}), Qt = () => ({ boolHtmlAttribute: (e) => e ? !0 : void 0 }), $t = () => {
	let { getDate: e, rootProps: t, defaults: { textInput: n, startTime: i, timeConfig: a } } = $(), { getTimeObjFromCurrent: o } = Kt(), s = D(!1), c = r(() => Array.isArray(i.value) ? i.value[0] : i.value ?? o(e(), {}, a.value.enableSeconds)), l = (e, t) => {
		let n = /[^a-zA-Z0-9]+/g, r = t.split(n), i = e.split(n), a = e.match(n) || [], o = t.match(n) || [], s = "";
		for (let e = 0; e < r.length && e < i.length; e++) {
			e > 0 && o[e - 1] && (s += a[e - 1] || o[e - 1]);
			let t = r[e]?.length;
			s += i[e]?.slice(0, t);
		}
		return s;
	}, u = (n, r, i) => {
		let a = Ne(n, l(r, n), e(), { locale: t.locale });
		return Me(a) && Oe(a) ? i || s.value || t.timePicker ? a : Z(a, {
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
		createMaskedValue: (e, t, n) => {
			let r = /(YYYY|MM|DD|hh|mm|ss)/g, i = [...t.matchAll(r)].map((e) => e[0]), a = t.replace(r, "|").split("|").filter(Boolean), o = i.map((e) => e.length), s = "", c = 0;
			for (let t = 0; t < i.length; t++) {
				let r = o[t], i = e.slice(c, c + r);
				if (!i) break;
				if (s += i, i.length === r && a[t]) {
					let i = e.length > c + r, o = s.length, l = n?.charAt(o) === a[t];
					(i || l) && (s += a[t]);
				}
				c += r;
			}
			return s;
		}
	};
}, en = /* @__PURE__ */ function(e) {
	return e.Input = "input", e.DatePicker = "date-picker", e.Calendar = "calendar", e.DatePickerHeader = "date-picker-header", e.Menu = "menu", e.ActionRow = "action-row", e.TimePicker = "time-picker", e.TimeInput = "time-input", e.PassTrough = "pass-trough", e.MonthPicker = "month-picker", e.YearMode = "year-mode", e.QuarterPicker = "quarter-picker", e.YearPicker = "year-picker", e;
}({}), tn = [
	"time-input",
	"time-picker",
	"pass-trough"
], nn = [
	{
		name: "trigger",
		use: ["input"]
	},
	{
		name: "input-icon",
		use: ["input"]
	},
	{
		name: "clear-icon",
		use: ["input"]
	},
	{
		name: "dp-input",
		use: ["input"]
	},
	{
		name: "clock-icon",
		use: [
			"time-picker",
			"time-input",
			"pass-trough"
		]
	},
	{
		name: "arrow-left",
		use: [
			"date-picker-header",
			"pass-trough",
			"year-mode"
		]
	},
	{
		name: "arrow-right",
		use: [
			"date-picker-header",
			"pass-trough",
			"year-mode"
		]
	},
	{
		name: "arrow-up",
		use: [
			"time-picker",
			"time-input",
			"date-picker-header",
			"pass-trough"
		]
	},
	{
		name: "arrow-down",
		use: [
			"time-picker",
			"time-input",
			"date-picker-header",
			"pass-trough"
		]
	},
	{
		name: "calendar-icon",
		use: [
			"date-picker-header",
			"time-picker",
			"pass-trough",
			"year-mode"
		]
	},
	{
		name: "day",
		use: ["calendar", "pass-trough"]
	},
	{
		name: "month-overlay-value",
		use: [
			"date-picker-header",
			"pass-trough",
			"month-picker"
		]
	},
	{
		name: "year-overlay-value",
		use: [
			"date-picker-header",
			"pass-trough",
			"year-mode",
			"year-picker"
		]
	},
	{
		name: "year-overlay",
		use: ["date-picker-header", "pass-trough"]
	},
	{
		name: "month-overlay",
		use: ["date-picker-header", "pass-trough"]
	},
	{
		name: "month-overlay-header",
		use: ["date-picker-header", "pass-trough"]
	},
	{
		name: "year-overlay-header",
		use: ["date-picker-header", "pass-trough"]
	},
	{
		name: "hours-overlay-value",
		use: tn
	},
	{
		name: "hours-overlay-header",
		use: tn
	},
	{
		name: "minutes-overlay-value",
		use: tn
	},
	{
		name: "minutes-overlay-header",
		use: tn
	},
	{
		name: "seconds-overlay-value",
		use: tn
	},
	{
		name: "seconds-overlay-header",
		use: tn
	},
	{
		name: "hours",
		use: [
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "minutes",
		use: [
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "seconds",
		use: [
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "month",
		use: [
			"date-picker-header",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "year",
		use: [
			"date-picker-header",
			"time-picker",
			"pass-trough",
			"year-mode"
		]
	},
	{
		name: "action-buttons",
		use: ["action-row"]
	},
	{
		name: "action-preview",
		use: ["action-row"]
	},
	{
		name: "calendar-header",
		use: ["calendar", "pass-trough"]
	},
	{
		name: "marker-tooltip",
		use: ["calendar", "pass-trough"]
	},
	{
		name: "action-extra",
		use: ["menu"]
	},
	{
		name: "time-picker-overlay",
		use: [
			"time-picker",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "am-pm-button",
		use: [
			"time-picker",
			"time-input",
			"pass-trough"
		]
	},
	{
		name: "left-sidebar",
		use: ["menu"]
	},
	{
		name: "right-sidebar",
		use: ["menu"]
	},
	{
		name: "month-year",
		use: [
			"date-picker-header",
			"pass-trough",
			"month-picker",
			"year-picker"
		]
	},
	{
		name: "time-picker",
		use: ["date-picker", "pass-trough"]
	},
	{
		name: "action-row",
		use: ["action-row"]
	},
	{
		name: "marker",
		use: ["calendar", "pass-trough"]
	},
	{
		name: "quarter",
		use: ["quarter-picker", "pass-trough"]
	},
	{
		name: "top-extra",
		use: [
			"date-picker-header",
			"pass-trough",
			"month-picker",
			"quarter-picker",
			"year-picker"
		]
	},
	{
		name: "tp-inline-arrow-up",
		use: [
			"date-picker",
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "tp-inline-arrow-down",
		use: [
			"date-picker",
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "arrow",
		use: ["menu"]
	},
	{
		name: "menu-header",
		use: ["menu"]
	}
], rn = (e, t) => nn.filter((n) => e[n.name] && n.use.includes(t)).map((e) => e.name), an = (e, t) => nn.map((e) => e.name).concat(t?.filter((e) => e.slot).map((e) => e.slot) ?? []).filter((t) => !!e[t]), on = {
	key: 1,
	class: "dp--input-wrap"
}, sn = [
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
], cn = {
	key: 1,
	class: "dp--clear-btn"
}, ln = ["aria-label"], un = /* @__PURE__ */ d({
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
		let c = n, l = e, { rootEmit: d, inputValue: f, rootProps: p, defaults: { textInput: m, ariaLabels: h, inline: g, config: y, range: b, multiDates: x, ui: ee, inputAttrs: S } } = $(), { checkMinMaxRange: w, isValidDate: T } = _t(), { parseFreeInput: E, textPasted: O, createMaskedValue: A, applyMaxValues: j } = $t(), { checkKeyDown: M, checkStopPropagation: te } = Kt(), { boolHtmlAttribute: N } = Qt(), F = I("dp-input"), L = D(null), R = D(!1), z = r(() => ({
			"dp--pointer": !p.disabled && !p.readonly && !m.value.enabled,
			"dp--disabled": p.disabled,
			"dp--input-readonly": !m.value.enabled,
			"dp--input": !0,
			"dp--input-not-clearable": !S.value.clearable,
			"dp--input-icon-pad": !S.value.hideInputIcon,
			"dp--input-valid": typeof S.value.state == "boolean" ? S.value.state : !1,
			"dp--input-invalid": typeof S.value.state == "boolean" ? !S.value.state : !1,
			"dp--input-focus": R.value || l.isMenuOpen,
			"dp--input-reg": !m.value.enabled,
			...ee.value.input
		})), B = () => {
			c("set-input-date", null), S && p.autoApply && (c("set-empty-date"), L.value = null);
		}, V = (e) => {
			if (m.value.separators?.length) {
				let t = new RegExp(m.value.separators.map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"));
				return e.split(t);
			}
			return e.split(m.value.rangeSeparator);
		}, re = (e) => {
			let [t, n] = V(e);
			if (t) {
				let e = E(t.trim(), f.value), r = n ? E(n.trim(), f.value) : void 0;
				if (Ee(e, r)) return;
				let i = e && r ? [e, r] : [e];
				w(r, i, 0) && (L.value = e ? i : null);
			}
		}, H = () => {
			O.value = !0;
		}, U = (e) => {
			b.value.enabled ? re(e) : x.value.enabled ? L.value = e.split(";").map((e) => E(e.trim())).filter((e) => !!e) : L.value = E(e, f.value);
		}, W = (e) => {
			let t = typeof e == "string" ? e : e.target?.value, n = m?.value?.maskFormat, r = t;
			if (typeof n == "string") {
				let e = [...n.matchAll(/(YYYY|MM|DD|hh|mm|ss)/g)].map((e) => e[0]);
				r = A(j(t.replace(/\D/g, ""), e), n, t);
			}
			r === "" ? B() : (m.value.openMenu && !l.isMenuOpen && c("open"), U(r), c("set-input-date", L.value)), O.value = !1, f.value = r, d("text-input", e, L.value);
		}, ie = (e) => {
			m.value.enabled ? (U(e.target.value), m.value.enterSubmit && T(L.value) && f.value !== "" ? (c("set-input-date", L.value, !0), L.value = null) : m.value.enterSubmit && f.value === "" && (L.value = null, c("clear"))) : se(e);
		}, ae = (e, t) => {
			m.value.enabled && m.value.tabSubmit && !t && U(e.target.value), m.value.enabled && m.value.tabSubmit && T(L.value) && f.value !== "" ? (c("set-input-date", L.value, !0, !0), L.value = null) : m.value.enabled && m.value.tabSubmit && f.value === "" && (L.value = null, c("clear"));
		}, oe = () => {
			R.value = !0, c("focus"), _().then(() => {
				m.value.enabled && m.value.selectOnFocus && F.value?.select();
			});
		}, se = (e) => {
			if (te(e, y.value, !0), m.value.enabled && m.value.openMenu && !g.value.input) {
				if (m.value.openMenu === "open" && !l.isMenuOpen) return c("open");
				if (m.value.openMenu === "toggle") return c("toggle");
			} else m.value.enabled || c("toggle");
		}, G = () => {
			c("real-blur"), R.value = !1, (!l.isMenuOpen || g.value.enabled && g.value.input) && c("blur"), L.value && (p.autoApply && m.value.enabled && !l.isMenuOpen || m.value.applyOnBlur) && (c("set-input-date", L.value), c("select-date"), L.value = null);
		}, ce = (e) => {
			te(e, y.value, !0), c("clear");
		}, K = () => {
			c("close");
		}, le = (e) => {
			if (e.key === "Tab" && ae(e), e.key === "Enter" && (ie(e), y.value.allowPreventDefault && (e.preventDefault(), te(e, y.value, !0))), e.key === "Escape" && m.value.escClose && K(), !m.value.enabled) {
				if (e.code === "Tab") return;
				e.preventDefault();
			}
		}, q = () => {
			F.value?.focus({ preventScroll: !0 });
		}, ue = (e) => {
			L.value = e;
		}, de = (e) => {
			e.key === Q.tab && ae(e, !0);
		};
		return t({
			focusInput: q,
			setParsedDate: ue
		}), (t, n) => (C(), o("div", { onClick: se }, [!t.$slots["dp-input"] && !P(g).enabled ? k(t.$slots, "trigger", { key: 0 }) : a("", !0), !t.$slots.trigger && (!P(g).enabled || P(g).input) ? (C(), o("div", on, [
			!t.$slots.trigger && (!P(g).enabled || P(g).enabled && P(g).input) ? k(t.$slots, "dp-input", {
				key: 0,
				value: P(f),
				isMenuOpen: e.isMenuOpen,
				onInput: W,
				onEnter: ie,
				onTab: ae,
				onClear: ce,
				onBlur: G,
				onKeypress: le,
				onPaste: H,
				onFocus: oe,
				openMenu: () => t.$emit("open"),
				closeMenu: () => t.$emit("close"),
				toggleMenu: () => t.$emit("toggle")
			}, () => [s("input", {
				id: P(S).id,
				ref: "dp-input",
				"data-test-id": "dp-input",
				name: P(S).name,
				class: v(z.value),
				inputmode: P(S).inputmode,
				placeholder: P(p).placeholder,
				disabled: P(N)(P(p).disabled),
				readonly: P(N)(P(p).readonly),
				required: P(N)(P(S).required),
				value: P(f),
				autocomplete: P(S).autocomplete,
				"aria-label": P(h).input,
				"aria-disabled": P(p).disabled || void 0,
				"aria-invalid": P(S).state === !1 ? !0 : void 0,
				role: "combobox",
				"aria-haspopup": "dialog",
				"aria-expanded": e.isMenuOpen,
				"aria-controls": P(p).menuId,
				onInput: W,
				onBlur: G,
				onFocus: oe,
				onKeypress: le,
				onKeydown: n[0] ||= (e) => le(e),
				onPaste: H,
				onInvalid: n[1] ||= (e) => P(d)("invalid", e)
			}, null, 42, sn)]) : a("", !0),
			s("div", { onClick: n[4] ||= (e) => c("toggle") }, [t.$slots["input-icon"] && !P(S).hideInputIcon ? (C(), o("span", {
				key: 0,
				class: "dp--input-icon",
				onClick: n[2] ||= (e) => c("toggle")
			}, [k(t.$slots, "input-icon")])) : a("", !0), !t.$slots["input-icon"] && !P(S).hideInputIcon && !t.$slots["dp-input"] ? (C(), i(P(Je), {
				key: 1,
				"aria-label": P(h)?.calendarIcon,
				class: "dp--input-icon dp--input-icons",
				onClick: n[3] ||= (e) => c("toggle")
			}, null, 8, ["aria-label"])) : a("", !0)]),
			t.$slots["clear-icon"] && (P(S).alwaysClearable || P(f) && P(S).clearable && !P(p).disabled && !P(p).readonly) ? (C(), o("span", cn, [k(t.$slots, "clear-icon", { clear: ce })])) : a("", !0),
			!t.$slots["clear-icon"] && (P(S).alwaysClearable || P(S).clearable && P(f) && !P(p).disabled && !P(p).readonly) ? (C(), o("button", {
				key: 2,
				"aria-label": P(h)?.clearInput,
				class: "dp--clear-btn",
				type: "button",
				"data-test-id": "clear-input-value-btn",
				onKeydown: n[5] ||= (e) => P(M)(e, () => ce(e), !0, P(y).spaceConfirm, de),
				onClick: n[6] ||= ne((e) => ce(e), ["prevent"])
			}, [u(P(Ye), { class: "dp--input-icons" })], 40, ln)) : a("", !0)
		])) : a("", !0)]));
	}
}), dn = (e) => {
	let { rootProps: t, modelValue: n, getDate: r, defaults: { range: i, multiDates: a } } = $(), { isDateBefore: o } = qt(), s = () => {
		let e = r();
		return t.actionRow?.nowBtnRound && (e = Pe(e, {
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
}, fn = {
	ref: "action-row",
	class: "dp--action-row"
}, pn = ["title"], mn = {
	ref: "action-buttons-container",
	class: "dp--action-buttons",
	"data-dp-element": "action-row"
}, hn = ["disabled"], gn = /* @__PURE__ */ d({
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
		let i = n, c = t, { rootEmit: u, rootProps: d, modelValue: f, defaults: { actionRow: p, multiCalendars: m, inline: h, range: g, multiDates: _, formats: v } } = $(), { selectCurrentDate: y } = dn(i), { isTimeValid: x, isMonthValid: w } = _t(), { formatPreview: T } = Yt(), { checkKeyDown: E, convertType: O } = Kt(), { boolHtmlAttribute: A } = Qt(), M = I("action-buttons-container"), te = I("action-row"), N = D(!1), F = D({});
		ee(() => {
			L(), globalThis.addEventListener("resize", L);
		}), S(() => {
			globalThis.removeEventListener("resize", L);
		});
		let L = () => {
			N.value = !1, setTimeout(() => {
				let e = M.value?.getBoundingClientRect(), t = te.value?.getBoundingClientRect();
				e && t && (F.value.maxWidth = `${t.width - e.width - 20}px`), N.value = !0;
			}, 0);
		}, R = r(() => g.value.enabled && !g.value.partialRange && f.value ? f.value.length === 2 : !0), z = r(() => !x.value(f.value) || !w.value(f.value) || !R.value), B = () => {
			let e = v.value.preview;
			return d.timePicker || d.monthPicker, e(O(f.value));
		}, V = () => {
			let e = f.value;
			return m.value.count > 0 ? `${T(e[0])} - ${T(e[1])}` : [T(e[0]), T(e[1])];
		}, ne = r(() => !f.value || !c.menuMount ? "" : typeof v.value.preview == "string" ? Array.isArray(f.value) ? f.value.length === 2 && f.value[1] ? V() : _.value.enabled ? f.value.map((e) => `${T(e)}`) : d.modelAuto ? `${T(f.value[0])}` : `${T(f.value[0])} -` : T(f.value) : B()), re = () => _.value.enabled ? "; " : " - ", H = r(() => Array.isArray(ne.value) ? ne.value.join(re()) : ne.value), U = () => {
			x.value(f.value) && w.value(f.value) && R.value ? i("select-date") : u("invalid-select");
		};
		return (t, n) => (C(), o("div", fn, [t.$slots["action-row"] ? k(t.$slots, "action-row", {
			key: 0,
			modelValue: P(f),
			disabled: z.value,
			selectDate: () => t.$emit("select-date"),
			closePicker: () => t.$emit("close-picker")
		}) : (C(), o(e, { key: 1 }, [P(p).showPreview ? (C(), o("div", {
			key: 0,
			class: "dp--selection-preview",
			title: H.value || void 0,
			style: b(F.value)
		}, [t.$slots["action-preview"] && N.value ? k(t.$slots, "action-preview", {
			key: 0,
			value: P(f),
			formatValue: H.value
		}) : a("", !0), !t.$slots["action-preview"] && N.value ? (C(), o(e, { key: 1 }, [l(j(H.value), 1)], 64)) : a("", !0)], 12, pn)) : a("", !0), s("div", mn, [t.$slots["action-buttons"] ? k(t.$slots, "action-buttons", {
			key: 0,
			value: P(f),
			selectDate: U,
			selectionDisabled: z.value
		}) : a("", !0), t.$slots["action-buttons"] ? a("", !0) : (C(), o(e, { key: 1 }, [
			!P(h).enabled && P(p).showCancel ? (C(), o("button", {
				key: 0,
				ref: "cancel-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-cancel",
				onClick: n[0] ||= (e) => t.$emit("close-picker"),
				onKeydown: n[1] ||= (e) => P(E)(e, () => t.$emit("close-picker"))
			}, j(P(p).cancelBtnLabel), 545)) : a("", !0),
			P(p).showNow ? (C(), o("button", {
				key: 1,
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-cancel",
				onClick: n[2] ||= (...e) => P(y) && P(y)(...e),
				onKeydown: n[3] ||= (e) => P(E)(e, () => P(y)())
			}, j(P(p).nowBtnLabel), 33)) : a("", !0),
			P(p).showSelect ? (C(), o("button", {
				key: 2,
				ref: "select-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-select",
				disabled: P(A)(z.value),
				"data-test-id": "select-button",
				onKeydown: n[4] ||= (e) => P(E)(e, () => U()),
				onClick: U
			}, j(P(p).selectBtnLabel), 41, hn)) : a("", !0)
		], 64))], 512)], 64))], 512));
	}
}), _n = () => {
	let { rootProps: e, defaults: { multiCalendars: t } } = $();
	return {
		hideNavigationButtons: r(() => (t) => e.hideNavigation?.includes(t)),
		showLeftIcon: r(() => (e) => t.value.count ? t.value.solo ? !0 : e === 0 : !0),
		showRightIcon: r(() => (e) => t.value.count ? t.value.solo ? !0 : e === t.value.count - 1 : !0)
	};
}, vn = ["role", "tabindex"], yn = {
	ref: "header",
	class: "dp--selection-grid-header"
}, bn = ["aria-label"], xn = [
	"aria-label",
	"aria-selected",
	"aria-disabled",
	"data-dp-action-element",
	"data-dp-element-active",
	"data-dp-focus-value",
	"data-dp-focus-target",
	"data-test-id",
	"onClick",
	"onKeydown",
	"onMouseover"
], Sn = ["aria-label", "data-dp-action-element"], Cn = /* @__PURE__ */ d({
	__name: "SelectionOverlay",
	props: {
		items: {},
		type: {},
		useRelative: { type: Boolean },
		height: {},
		overlayLabel: {},
		isLast: { type: Boolean },
		level: {},
		focusValue: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: [
		"selected",
		"toggle",
		"hover-value"
	],
	setup(t, { emit: n }) {
		let i = n, c = t, { setState: u, defaults: { ariaLabels: d, config: f } } = $(), { hideNavigationButtons: p } = _n(), { handleEventPropagation: m, checkKeyDown: h } = Kt(), g = I("toggle-button"), y = I("header"), w = I("overlay-container"), T = I("grid-wrap"), E = W(), A = D(!1), M = D(null), te = D(), N = D(0);
		x(() => {
			M.value = null;
		}), ee(async () => {
			await _(), ie(), u("arrowNavigationLevel", c.level ?? 1);
		}), S(() => {
			u("arrowNavigationLevel", (c.level ?? 1) - 1);
		});
		let F = r(() => ({
			"dp--overlay": !0,
			"dp--overlay-absolute": !c.useRelative,
			"dp--overlay-relative": c.useRelative
		})), z = r(() => c.useRelative ? {
			height: `${c.height}px`,
			width: "var(--dp-menu-min-width)"
		} : void 0), V = r(() => ({ "dp--overlay-col": !0 })), re = r(() => ({
			"dp--btn-base dp--bg-none": !0,
			"dp--button": !0,
			"dp--overlay-action": !0,
			"dp--over-action-scroll": A.value,
			"dp--button-bottom": c.isLast
		})), U = r(() => ({
			"dp--overlay-container": !0,
			"dp--container-flex": c.items?.length <= 6,
			"dp--container-block": c.items?.length > 6
		}));
		R(() => c.items, () => ie(!1), { deep: !0 });
		let ie = (e = !0) => {
			_().then(() => {
				let t = H(T), n = H(g), r = H(w), i = H(y), a = n ? n.getBoundingClientRect().height : 0;
				t && (t.getBoundingClientRect().height ? N.value = t.getBoundingClientRect().height - a - (i?.getBoundingClientRect().height ?? 0) : N.value = f.value.modeHeight - a - (i?.getBoundingClientRect().height ?? 0));
				let o = E.value?.find((e) => {
					let { dpElementActive: t } = e.dataset;
					return t === `${c.level ?? 1}`;
				}), s = c.focusValue !== void 0 && c.focusValue !== null ? E.value?.find((e) => Number(e.dataset.dpFocusValue) === c.focusValue) : void 0, l = o ?? s;
				l && r && e && (r.scrollTop = l.offsetTop - r.offsetTop - (N.value / 2 - l.getBoundingClientRect().height) - a), l && e && !c.noOverlayFocus && l.focus({ preventScroll: !0 });
			});
		}, ae = (e) => {
			e.disabled || i("selected", e.value);
		}, oe = () => {
			i("toggle");
		}, se = (e) => {
			f.value.escClose && (oe(), m(e, f.value));
		}, G = (e) => {
			te.value = e, i("hover-value", e);
		}, ce = (e) => {
			if (e.key === Q.esc) return se(e);
		}, K = (e) => {
			if (e.key === Q.enter) return oe();
		};
		return (n, r) => (C(), o("div", {
			ref: "grid-wrap",
			class: v(F.value),
			style: b(z.value),
			role: t.useRelative ? void 0 : "presentation",
			tabindex: t.useRelative ? void 0 : "0",
			onKeydown: ce,
			onClick: r[0] ||= ne(() => {}, ["prevent"])
		}, [
			s("div", yn, [k(n.$slots, "header")], 512),
			s("div", {
				ref: "overlay-container",
				"aria-label": t.overlayLabel,
				class: v(U.value),
				style: b({ "--dp-overlay-height": `${N.value}px` }),
				role: "listbox"
			}, [k(n.$slots, "overlay", {}, () => [(C(!0), o(e, null, O(t.items, (r, i) => (C(), o("div", {
				key: i,
				class: v(["dp--overlay-row", { "dp--flex-row": t.items.length >= 3 }]),
				role: "presentation"
			}, [(C(!0), o(e, null, O(r, (e) => (C(), o("div", {
				key: e.value,
				ref_for: !0,
				ref_key: "colRefs",
				ref: E,
				role: "option",
				class: v(V.value),
				"aria-label": e.ariaLabel ?? e.text,
				"aria-selected": e.active || void 0,
				"aria-disabled": e.disabled || void 0,
				"data-dp-action-element": t.level ?? 1,
				"data-dp-element-active": e.active ? t.level ?? 1 : void 0,
				"data-dp-focus-value": e.value,
				"data-dp-focus-target": t.focusValue !== void 0 && t.focusValue !== null && e.value === t.focusValue ? !0 : void 0,
				tabindex: "0",
				"data-test-id": e.text,
				onClick: ne((t) => ae(e), ["prevent"]),
				onKeydown: (t) => P(h)(t, () => ae(e), !0),
				onMouseover: (t) => G(e.value)
			}, [s("div", { class: v(e.className) }, [k(n.$slots, "item", { item: e }, () => [l(j(e.text), 1)])], 2)], 42, xn))), 128))], 2))), 128))])], 14, bn),
			n.$slots["button-icon"] ? B((C(), o("button", {
				key: 0,
				ref: "toggle-button",
				type: "button",
				"aria-label": P(d)?.toggleOverlay,
				class: v(re.value),
				tabindex: "0",
				"data-dp-action-element": t.level ?? 1,
				onClick: oe,
				onKeydown: K
			}, [k(n.$slots, "button-icon")], 42, Sn)), [[L, !P(p)(t.type)]]) : a("", !0)
		], 46, vn));
	}
}), wn = ["data-dp-mobile"], Tn = /* @__PURE__ */ d({
	__name: "InstanceWrap",
	props: {
		stretch: { type: Boolean },
		collapse: { type: Boolean }
	},
	setup(e) {
		let { defaults: { multiCalendars: t } } = $(), { isMobile: n } = Jt(), i = r(() => t.value.count > 0 ? [...Array.from({ length: t.value.count }).keys()] : [0]);
		return (r, a) => (C(), o("div", {
			class: v({
				"dp--menu-inner": !e.stretch,
				"dp--menu--inner-stretched": e.stretch,
				"dp--flex-display": P(t).count > 0,
				"dp--flex-display-collapsed": e.collapse
			}),
			"data-dp-mobile": P(n)
		}, [k(r.$slots, "default", {
			instances: i.value,
			wrapClass: { "dp--instance-calendar": P(t).count > 0 }
		})], 10, wn));
	}
}), En = [
	"data-dp-element",
	"tabindex",
	"inert",
	"aria-hidden",
	"disabled",
	"aria-label",
	"aria-disabled"
], Dn = /* @__PURE__ */ d({
	__name: "ArrowBtn",
	props: {
		ariaLabel: {},
		elName: {},
		disabled: { type: Boolean },
		inactive: { type: Boolean }
	},
	emits: ["activate", "set-ref"],
	setup(e, { emit: t }) {
		let { boolHtmlAttribute: n } = Qt(), { checkKeyDown: r } = Kt(), i = t;
		return (t, a) => (C(), o("button", {
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
		}, [s("span", { class: v(["dp--inner-nav", { "dp--inner-nav-disabled": e.disabled }]) }, [k(t.$slots, "default")], 2)], 40, En));
	}
}), On = [
	"aria-label",
	"data-test-id",
	"aria-expanded"
], kn = /* @__PURE__ */ d({
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
		let f = d, p = t, { showRightIcon: m, showLeftIcon: h } = _n(), { rootProps: g, defaults: { config: _, ariaLabels: y, ui: b } } = $(), { showTransition: x, transitionName: ee } = ht(), { formatYear: S } = Yt(), { boolHtmlAttribute: w } = Qt(), T = D(!1), E = r(() => S(p.year)), O = (e) => {
			T.value = !T.value, f("toggle-year-picker", { show: e });
		}, A = (e) => {
			T.value = !1, f("year-select", e);
		}, M = (e = !1) => {
			f("handle-year", e);
		};
		return (r, d) => (C(), o(e, null, [s("div", { class: v(["dp--year-mode-picker", { "dp--hidden-el": T.value }]) }, [
			P(h)(t.instance) ? (C(), i(Dn, {
				key: 0,
				ref: "mpPrevIconRef",
				"aria-label": P(y)?.prevYear,
				disabled: P(w)(t.isDisabled(!1)),
				class: v(P(b)?.navBtnPrev),
				onActivate: d[0] ||= (e) => M(!1)
			}, {
				default: z(() => [r.$slots["arrow-left"] ? k(r.$slots, "arrow-left", { key: 0 }) : a("", !0), r.$slots["arrow-left"] ? a("", !0) : (C(), i(P(Xe), { key: 1 }))]),
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
				onClick: d[1] ||= () => O(),
				onKeydown: d[2] ||= V(ne(() => O(), ["prevent"]), ["enter"])
			}, [r.$slots.year ? k(r.$slots, "year", {
				key: 0,
				text: E.value,
				value: t.year
			}) : a("", !0), r.$slots.year ? a("", !0) : (C(), o(e, { key: 1 }, [l(j(t.year), 1)], 64))], 40, On),
			P(m)(t.instance) ? (C(), i(Dn, {
				key: 1,
				ref: "mpNextIconRef",
				"aria-label": P(y)?.nextYear,
				disabled: P(w)(t.isDisabled(!0)),
				class: v(P(b)?.navBtnNext),
				onActivate: d[3] ||= (e) => M(!0)
			}, {
				default: z(() => [r.$slots["arrow-right"] ? k(r.$slots, "arrow-right", { key: 0 }) : a("", !0), r.$slots["arrow-right"] ? a("", !0) : (C(), i(P(Ze), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : a("", !0)
		], 2), u(n, {
			name: P(ee)(t.showYearPicker),
			css: P(x)
		}, {
			default: z(() => [t.showYearPicker ? (C(), i(Cn, {
				key: 0,
				items: t.items,
				"is-last": P(g).autoApply && !P(_).keepActionRow,
				"overlay-label": P(y)?.yearPicker?.(!0),
				type: "year",
				onToggle: O,
				onSelected: d[4] ||= (e) => A(e)
			}, c({
				"button-icon": z(() => [r.$slots["calendar-icon"] ? k(r.$slots, "calendar-icon", { key: 0 }) : a("", !0), r.$slots["calendar-icon"] ? a("", !0) : (C(), i(P(Je), { key: 1 }))]),
				_: 2
			}, [r.$slots["year-overlay-value"] ? {
				name: "item",
				fn: z(({ item: e }) => [k(r.$slots, "year-overlay-value", {
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
}), An = () => {
	let { getDate: e, rootEmit: t, state: n, month: i, year: a, modelValue: o, calendars: s, rootProps: c, defaults: { multiCalendars: l, range: u, safeDates: d, filters: f, highlight: p } } = $(), { resetDate: m, getYearFromDate: h, checkHighlightYear: g, groupListAndMap: _ } = qt(), { getYears: v } = Xt(), { validateMonthYear: y, checkMinMaxValue: b } = _t(), x = D([!1]), S = r(() => v()), C = r(() => (t, n) => {
		let r = Z(m(e()), {
			month: i.value(t),
			year: a.value(t)
		});
		return y(n ? ve(r) : He(r), c.preventMinMaxNavigation, n);
	}), w = () => Array.isArray(o.value) && l.value.solo && o.value[1], T = () => {
		for (let t = 0; t < l.value.count; t++) if (t === 0) s.value[t] = s.value[0];
		else if (t === l.value.count - 1 && w()) s.value[t] = {
			month: Y(o.value[1]),
			year: X(o.value[1])
		};
		else {
			let n = Z(e(), s.value[t - 1]);
			s.value[t] = {
				month: Y(n),
				year: X(ue(n, 1))
			};
		}
	}, E = (t) => {
		if (!t) return T();
		let n = Z(e(), s.value[t]);
		return s.value[0].year = X(Ge(n, l.value.count - 1)), T();
	}, O = (e, t) => {
		let n = pe(t, e);
		return u.value.showLastInRange && n > 1 ? t : e;
	}, k = (e) => c.focusStartDate || l.value.solo ? e[0] : e[1] ? O(e[0], e[1]) : e[0], A = () => {
		if (o.value) {
			let e = Array.isArray(o.value) ? k(o.value) : o.value;
			s.value[0] = {
				month: Y(e),
				year: X(e)
			};
		}
	}, j = () => {
		A(), l.value.count && T();
	};
	R(o, (e, t) => {
		n.isTextInputDate && JSON.stringify(e ?? {}) !== JSON.stringify(t ?? {}) && j();
	}), ee(() => {
		j();
	});
	let M = (e, n) => {
		s.value[n].year = e, t("update-month-year", {
			instance: n,
			year: e,
			month: s.value[n].month
		}), l.value.count && !l.value.solo && E(n);
	}, te = r(() => (e) => _(S.value, (t) => ({
		active: a.value(e) === t.value,
		disabled: b(t.value, h(d.value.minDate), h(d.value.maxDate)) || f.value.years?.includes(t.value),
		highlighted: g(p.value, t.value)
	}))), N = (e, t) => {
		M(e, t), F(t);
	}, P = (e, t = !1) => {
		C.value(e, t) || M(t ? a.value(e) + 1 : a.value(e) - 1, e);
	}, F = (e, n) => {
		n === void 0 ? x.value[e] = !x.value[e] : x.value[e] = n, x.value[e] ? t("overlay-toggle", {
			open: !0,
			overlay: at.year
		}) : t("overlay-toggle", {
			open: !1,
			overlay: at.year
		});
	};
	return {
		isDisabled: C,
		groupedYears: te,
		showYearPicker: x,
		selectYear: M,
		setStartDate: () => {
			c.startDate && (o.value && c.focusStartDate || !o.value) && M(X(e(c.startDate)), 0);
		},
		toggleYearPicker: F,
		handleYearSelect: N,
		handleYear: P
	};
}, jn = () => {
	let { isDateAfter: e, isDateBefore: t, isDateEqual: n } = qt(), { getDate: r, rootEmit: i, rootProps: a, modelValue: o, defaults: { range: s } } = $();
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
			if (o.value && Array.isArray(o.value)) if (o.value.some((t) => n(e, t))) {
				let t = o.value.filter((t) => !n(t, e));
				o.value = t.length ? t : null;
			} else (t && +t > o.value.length || !t) && o.value.push(e);
			else o.value = [e];
		}
	};
}, Mn = (e) => {
	let { getDate: t, rootEmit: n, state: i, calendars: a, year: o, modelValue: s, rootProps: c, defaults: { range: l, highlight: u, safeDates: d, filters: f, multiDates: p } } = $();
	gt(() => {
		i.isTextInputDate && z(X(t(c.startDate)), 0);
	});
	let { checkMinMaxRange: m, checkMinMaxValue: h } = _t(), { isDateBetween: g, resetDateTime: v, resetDate: y, getMinMonth: b, getMaxMonth: x, checkHighlightMonth: S, groupListAndMap: C } = qt(), { checkRangeAutoApply: w, getRangeWithFixedDate: T, handleMultiDatesSelect: E, setMonthOrYearRange: O, setPresetDate: k } = jn(), { padZero: A } = Kt(), { getMonths: j, isOutOfYearRange: M } = Xt(), { updateFlowStep: te, childMount: N } = ft(), P = r(() => j()), F = D(null), { groupedYears: I, showYearPicker: L, isDisabled: R, selectYear: z, toggleYearPicker: B, handleYearSelect: V, handleYear: ne, setStartDate: re } = An();
	ee(() => {
		N(), re();
	});
	let H = (e) => e ? {
		month: Y(e),
		year: X(e)
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
				let r = ie(e, n, 0) || ie(e, n, 1), i = Z(y(t()), {
					month: e,
					year: o.value(n)
				});
				return g(s.value, F.value, i) && !r;
			}
			return !1;
		}
		return !1;
	}, oe = r(() => (e) => C(P.value, (t) => {
		let n = W(e, t.value), r = J(se(t.value, e), "MMMM", { locale: c.locale });
		return {
			active: n,
			disabled: h(t.value, b(o.value(e), d.value.minDate), x(o.value(e), d.value.maxDate)) || pe(d.value.disabledDates, o.value(e), t.value) || f.value.months?.includes(t.value) || !me(d.value.allowedDates, o.value(e), t.value) || M(o.value(e)),
			isBetween: ae(t.value, e),
			highlighted: S(u.value, t.value, o.value(e)),
			ariaLabel: r
		};
	})), se = (e, n) => Z(y(t()), {
		month: e,
		year: o.value(n)
	}), G = (n, r) => {
		s.value = Z(s.value ? s.value : y(t()), {
			month: n,
			year: o.value(r)
		}), e("auto-apply"), te("month", !0);
	}, ce = (t, n) => {
		let r = se(t, n);
		l.value.fixedEnd || l.value.fixedStart ? s.value = T(r) : s.value ? m(r, s.value) && (s.value = O(se(t, n))) : s.value = [se(t, n)], _().then(() => {
			w(s.value, e, s.value.length < 2);
		});
	}, K = (t, n) => {
		E(se(t, n), p.value.limit), e("auto-apply", !0);
	}, le = (e, t) => (a.value[t].month = e, ue(t, a.value[t].year, e), p.value.enabled ? K(e, t) : l.value.enabled ? ce(e, t) : G(e, t)), q = (e, t) => {
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
		F.value = se(e, t);
	}, fe = (t) => {
		k({ value: t }), e("auto-apply");
	}, pe = (e, n, r) => {
		if (e instanceof Map) {
			let t = `${A(r + 1)}-${n}`;
			return e.size ? e.has(t) : !1;
		}
		return typeof e == "function" ? e(v(Z(t(), {
			month: r,
			year: n
		}), !0)) : !1;
	}, me = (e, t, n) => {
		if (e instanceof Map) {
			let r = `${A(n + 1)}-${t}`;
			return e.size ? e.has(r) : !0;
		}
		return !0;
	};
	return {
		groupedMonths: oe,
		groupedYears: I,
		year: o,
		isDisabled: R,
		showYearPicker: L,
		modelValue: s,
		toggleYearPicker: B,
		handleYearSelect: V,
		handleYear: ne,
		presetDate: fe,
		setHoverDate: de,
		selectMonth: le,
		selectYear: q,
		getModelMonthYear: U
	};
}, Nn = /* @__PURE__ */ d({
	__name: "MonthPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(t, { expose: n, emit: r }) {
		let s = r, l = F(), { rootProps: d, defaults: { config: f } } = $(), p = rn(l, en.YearMode), { groupedMonths: m, groupedYears: h, year: _, isDisabled: y, showYearPicker: b, modelValue: x, presetDate: ee, setHoverDate: S, selectMonth: w, selectYear: T, toggleYearPicker: E, handleYearSelect: D, handleYear: A, getModelMonthYear: j } = Mn(s);
		return n({
			getSidebarProps: () => ({
				modelValue: x,
				year: _,
				getModelMonthYear: j,
				selectMonth: w,
				selectYear: T,
				handleYear: A
			}),
			presetDate: ee,
			toggleYearPicker: (e) => E(0, e)
		}), (n, r) => (C(), i(Tn, {
			collapse: t.collapse,
			stretch: ""
		}, {
			default: z(({ instances: r, wrapClass: i }) => [(C(!0), o(e, null, O(r, (e) => (C(), o("div", {
				key: e,
				class: v(i)
			}, [n.$slots["top-extra"] ? k(n.$slots, "top-extra", {
				key: 0,
				value: P(x)
			}) : a("", !0), k(n.$slots, "month-year", g({ ref_for: !0 }, {
				mode: "month",
				year: P(_),
				months: P(m)(e),
				years: P(h)(e),
				selectMonth: P(w),
				selectYear: P(T),
				instance: e
			}), () => [u(Cn, {
				items: P(m)(e),
				"is-last": P(d).autoApply && !P(f).keepActionRow,
				height: P(f).modeHeight,
				"no-overlay-focus": !!(t.noOverlayFocus || P(d).textInput),
				"use-relative": "",
				level: 0,
				type: "month",
				onSelected: (t) => P(w)(t, e),
				onHoverValue: (t) => P(S)(t, e)
			}, c({
				header: z(() => [u(kn, {
					items: P(h)(e),
					instance: e,
					"show-year-picker": P(b)[e],
					year: P(_)(e),
					"is-disabled": (t) => P(y)(e, t),
					onHandleYear: (t) => P(A)(e, t),
					onYearSelect: (t) => P(D)(t, e),
					onToggleYearPicker: (t) => P(E)(e, t?.show)
				}, c({ _: 2 }, [O(P(p), (e) => ({
					name: e,
					fn: z((t) => [k(n.$slots, e, g({ ref_for: !0 }, t))])
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
				fn: z(({ item: e }) => [k(n.$slots, "month-overlay-value", {
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
}), Pn = (e) => {
	let { rootEmit: t, getDate: n, state: i, modelValue: a, rootProps: o, defaults: { highlight: s, multiDates: c, filters: l, range: u, safeDates: d } } = $(), { getYears: f } = Xt(), { isDateBetween: p, resetDate: m, resetDateTime: h, getYearFromDate: g, checkHighlightYear: v, groupListAndMap: y } = qt(), { checkRangeAutoApply: b, setMonthOrYearRange: x } = jn(), { checkMinMaxValue: S, checkMinMaxRange: C } = _t();
	gt(() => {
		i.isTextInputDate && (T.value = X(n(o.startDate)));
	});
	let w = D(null), T = D();
	ee(() => {
		o.startDate && (a.value && o.focusStartDate || !a.value) && (T.value = X(n(o.startDate)));
	});
	let E = (e) => Array.isArray(a.value) ? a.value.some((t) => X(t) === e) : a.value ? X(a.value) === e : !1, O = (e) => u.value.enabled && Array.isArray(a.value) ? p(a.value, w.value, M(e)) : !1, k = (e) => d.value.allowedDates?.size ? d.value.allowedDates.has(`${e}`) : !0, A = (e) => d.value.disabledDates instanceof Map ? d.value.disabledDates.size ? d.value.disabledDates.has(`${e}`) : !1 : typeof d.value.disabledDates == "function" ? d.value.disabledDates(Re(h(He(n())), e)) : !0, j = r(() => y(f(), (e) => {
		let t = E(e.value);
		return {
			active: t,
			disabled: S(e.value, g(d.value.minDate), g(d.value.maxDate)) || l.value.years.includes(e.value) || !k(e.value) || A(e.value),
			isBetween: O(e.value) && !t,
			highlighted: v(s.value, e.value)
		};
	})), M = (e) => Re(m(He(n())), e);
	return {
		groupedYears: j,
		focusYear: T,
		setHoverValue: (e) => {
			w.value = Re(m(n()), e);
		},
		selectYear: (r) => {
			if (t("update-month-year", {
				instance: 0,
				year: r,
				month: NaN
			}), c.value.enabled) return a.value ? Array.isArray(a.value) && ((a.value?.map((e) => X(e))).includes(r) ? a.value = a.value.filter((e) => X(e) !== r) : a.value.push(Re(h(n()), r))) : a.value = [Re(h(He(n())), r)], e("auto-apply", !0);
			u.value.enabled ? C(M(r), a.value) && (a.value = x(M(r)), _().then(() => {
				b(a.value, e, a.value.length < 2);
			})) : (a.value = M(r), e("auto-apply"));
		}
	};
}, Fn = /* @__PURE__ */ d({
	__name: "YearPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(e, { expose: t, emit: n }) {
		let r = n, { modelValue: s, defaults: { config: l }, rootProps: u } = $(), { groupedYears: d, focusYear: f, selectYear: p, setHoverValue: m } = Pn(r);
		return t({ getSidebarProps: () => ({
			modelValue: s,
			selectYear: p
		}) }), (t, n) => (C(), o("div", null, [t.$slots["top-extra"] ? k(t.$slots, "top-extra", {
			key: 0,
			value: P(s)
		}) : a("", !0), t.$slots["month-year"] ? k(t.$slots, "month-year", y(g({ key: 1 }, {
			mode: "year",
			years: P(d),
			selectYear: P(p)
		}))) : (C(), i(Cn, {
			key: 2,
			items: P(d),
			"is-last": P(u).autoApply && !P(l).keepActionRow,
			height: P(l).modeHeight,
			"no-overlay-focus": !!(e.noOverlayFocus || P(u).textInput),
			"focus-value": P(f),
			type: "year",
			"use-relative": "",
			onSelected: P(p),
			onHoverValue: P(m)
		}, c({ _: 2 }, [t.$slots["year-overlay-value"] ? {
			name: "item",
			fn: z(({ item: e }) => [k(t.$slots, "year-overlay-value", {
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
}), In = {
	key: 0,
	class: "dp--time-input"
}, Ln = ["data-compact", "data-collapsed"], Rn = [
	"data-test-id",
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"onKeydown",
	"onClick",
	"onMousedown"
], zn = [
	"aria-label",
	"aria-expanded",
	"disabled",
	"data-dp-action-element",
	"data-test-id",
	"onKeydown",
	"onClick"
], Bn = [
	"data-test-id",
	"aria-label",
	"data-dp-action-element",
	"disabled",
	"onKeydown",
	"onClick",
	"onMousedown"
], Vn = { key: 0 }, Hn = [
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"data-compact"
], Un = /* @__PURE__ */ d({
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
		let p = f, m = t, { getDate: h, rootEmit: g, rootProps: _, defaults: { ariaLabels: y, filters: b, config: x, range: S, multiCalendars: w, timeConfig: E } } = $(), { checkKeyDown: M, hoursToAmPmHours: te } = Kt(), { boolHtmlAttribute: N } = Qt(), { sanitizeTime: F, groupListAndMap: I } = qt(), { transitionName: L, showTransition: R } = ht(), B = T({
			hours: !1,
			minutes: !1,
			seconds: !1
		}), V = D("AM"), ne = D(null), re = D(), H = D(!1);
		ee(() => {
			p("mounted");
		});
		let U = (e) => Z(h(), {
			hours: e.hours,
			minutes: e.minutes,
			seconds: E.value.enableSeconds ? e.seconds : 0,
			milliseconds: 0
		}), W = r(() => _.timePicker || E.value.timePickerInline ? 0 : 1), ie = r(() => (e) => me(e, m[e]) || oe(e, m[e]) || m.disabled), ae = r(() => ({
			hours: m.hours,
			minutes: m.minutes,
			seconds: m.seconds
		})), oe = (e, t) => S.value.enabled && !S.value.disableTimeRangeValidation ? !m.validateTime(e, t) : !1, se = (e, t) => {
			if (S.value.enabled && !S.value.disableTimeRangeValidation) {
				let n = t ? +E.value[`${e}Increment`] : -+E.value[`${e}Increment`], r = m[e] + n;
				return !m.validateTime(e, r);
			}
			return !1;
		}, G = r(() => (e) => !J(+m[e] + +E.value[`${e}Increment`], e) || se(e, !0) || m.disabled), ce = r(() => (e) => !J(m[e] - +E.value[`${e}Increment`], e) || se(e, !1) || m.disabled), K = {
			hours: 36e5,
			minutes: 6e4,
			seconds: 1e3
		}, le = (e, t) => {
			let n = new Date(Date.UTC(2e3, 0, 1, 0, 0, 0) + (+m[e] + t) * K[e]);
			return e === "hours" ? n.getUTCHours() : e === "minutes" ? n.getUTCMinutes() : n.getUTCSeconds();
		}, q = r(() => ({
			"dp--time-col": !0,
			"dp--time-col-block": !E.value.timePickerInline,
			"dp--time-col-reg-block": !E.value.enableSeconds && E.value.is24 && !E.value.timePickerInline,
			"dp--time-col-reg-inline": !E.value.enableSeconds && E.value.is24 && E.value.timePickerInline,
			"dp--time-col-reg-with-button": !E.value.enableSeconds && !E.value.is24,
			"dp--time-col-sec": E.value.enableSeconds && E.value.is24,
			"dp--time-col-sec-with-button": E.value.enableSeconds && !E.value.is24
		})), ue = r(() => E.value.timePickerInline && S.value.enabled && !w.value.count), de = r(() => {
			let e = [{ type: "hours" }];
			return E.value.enableMinutes && e.push({
				type: "",
				separator: !0
			}, { type: "minutes" }), E.value.enableSeconds && e.push({
				type: "",
				separator: !0
			}, { type: "seconds" }), e;
		}), fe = r(() => de.value.filter((e) => !e.separator)), pe = r(() => (e) => {
			if (e === "hours") {
				let e = Y(+m.hours);
				return {
					text: e < 10 ? `0${e}` : `${e}`,
					value: e
				};
			}
			return {
				text: m[e] < 10 ? `0${m[e]}` : `${m[e]}`,
				value: m[e]
			};
		}), me = (e, t) => {
			if (!m.disabledTimesConfig) return !1;
			let n = m.disabledTimesConfig(m.order, e === "hours" ? t : void 0);
			return n[e] ? !!n[e]?.includes(t) : !0;
		}, he = (e, t) => t === "hours" ? V.value === "AM" ? e : e + 12 : e, ge = (e) => {
			let t = E.value.is24 ? 24 : 12, n = e === "hours" ? t : 60, r = +E.value[`${e}GridIncrement`], i = e === "hours" && !E.value.is24 ? r : 0, a = [];
			for (let t = i; t < n; t += r) a.push({
				value: E.value.is24 ? t : he(t, e),
				text: t < 10 ? `0${t}` : `${t}`
			});
			return e === "hours" && !E.value.is24 && a.unshift({
				value: V.value === "PM" ? 12 : 0,
				text: "12"
			}), I(a, (t) => ({
				active: !1,
				disabled: b.value.times[e].includes(t.value) || !J(t.value, e) || me(e, t.value) || oe(e, t.value)
			}));
		}, _e = (e) => e >= 0 ? e : 59, ve = (e) => e >= 0 ? e : 23, J = (e, t) => {
			let n = _.minTime ? U(F(_.minTime)) : null, r = _.maxTime ? U(F(_.maxTime)) : null, i = U(F(ae.value, t, t === "minutes" || t === "seconds" ? _e(e) : ve(e)));
			return n && r ? (De(i, r) || ke(i, r)) && (Ee(i, n) || ke(i, n)) : n ? Ee(i, n) || ke(i, n) : r ? De(i, r) || ke(i, r) : !0;
		}, ye = (e) => E.value[`no${e[0].toUpperCase() + e.slice(1)}Overlay`] || m.disabled, be = (e) => {
			ye(e) || (B[e] = !B[e], B[e] ? (H.value = !0, p("overlay-opened", e)) : (H.value = !1, p("overlay-closed", e)));
		}, xe = () => {
			re.value && clearTimeout(re.value);
		}, Se = (e, t = !0, n) => {
			let r = +E.value[`${e}Increment`], i = t ? r : -r;
			J(+m[e] + i, e) && p(`update:${e}`, le(e, i)), !n?.keyboard && x.value.timeArrowHoldThreshold && (re.value = setTimeout(() => {
				Se(e, t);
			}, x.value.timeArrowHoldThreshold));
		}, Y = (e) => E.value.is24 ? e : (e >= 12 ? V.value = "PM" : V.value = "AM", te(e)), Ce = () => {
			V.value === "PM" ? (V.value = "AM", p("update:hours", m.hours - 12)) : (V.value = "PM", p("update:hours", m.hours + 12)), g("am-pm-change", V.value);
		}, we = (e) => {
			B[e] = !0;
		}, Te = (e, t) => (be(e), p(`update:${e}`, t));
		return d({ openChildCmp: we }), (r, d) => P(_).disabled ? a("", !0) : (C(), o("div", In, [
			(C(!0), o(e, null, O(de.value, (n, i) => (C(), o("div", {
				key: i,
				class: v(q.value),
				"data-compact": ue.value && !P(E).enableSeconds,
				"data-collapsed": ue.value && P(E).enableSeconds
			}, [n.separator ? (C(), o(e, { key: 0 }, [H.value ? a("", !0) : (C(), o(e, { key: 0 }, [l(":")], 64))], 64)) : (C(), o(e, { key: 1 }, [
				s("button", {
					type: "button",
					class: v({
						"dp--btn-base dp--bg-none": !0,
						"dp--inc-dec-button": !P(E).timePickerInline,
						"dp--inc-dec-button-inline": P(E).timePickerInline,
						"dp--tp-inline-btn-top": P(E).timePickerInline,
						"dp--inc-dec-button-disabled": G.value(n.type),
						"dp--hidden-el": H.value
					}),
					"data-test-id": `${n.type}-time-inc-btn-${m.order}`,
					"aria-label": P(y)?.incrementValue(n.type),
					tabindex: "0",
					disabled: P(N)(t.disabled),
					"data-dp-action-element": W.value,
					onKeydown: (e) => P(M)(e, () => Se(n.type, !0, { keyboard: !0 }), !0),
					onClick: (e) => P(x).timeArrowHoldThreshold ? void 0 : Se(n.type, !0),
					onMousedown: (e) => P(x).timeArrowHoldThreshold ? Se(n.type, !0) : void 0,
					onMouseup: xe
				}, [P(E).timePickerInline ? k(r.$slots, "tp-inline-arrow-up", { key: 1 }, () => [d[1] ||= s("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-l" }, null, -1), d[2] ||= s("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-r" }, null, -1)]) : k(r.$slots, "arrow-up", { key: 0 }, () => [u(P($e))])], 42, Rn),
				s("button", {
					type: "button",
					"aria-label": `${pe.value(n.type).text}-${P(y)?.openTpOverlay(n.type)}`,
					"aria-haspopup": "dialog",
					"aria-expanded": B[n.type],
					class: v({
						"dp--time-display": !0,
						"dp--time-display-block": !P(E).timePickerInline,
						"dp--time-display-inline": P(E).timePickerInline,
						"dp--btn-base dp--time-invalid": ie.value(n.type),
						"dp--btn-base dp--time-overlay-btn": !ie.value(n.type),
						"dp--hidden-el": H.value
					}),
					disabled: P(N)(ye(n.type)),
					tabindex: "0",
					"data-dp-action-element": W.value,
					"data-test-id": `${n.type}-toggle-overlay-btn-${m.order}`,
					onKeydown: (e) => P(M)(e, () => be(n.type), !0),
					onClick: (e) => be(n.type)
				}, [k(r.$slots, n.type, {
					text: pe.value(n.type).text,
					value: pe.value(n.type).value
				}, () => [l(j(pe.value(n.type).text), 1)])], 42, zn),
				s("button", {
					type: "button",
					class: v({
						"dp--btn-base dp--bg-none": !0,
						"dp--inc-dec-button": !P(E).timePickerInline,
						"dp--inc-dec-button-inline": P(E).timePickerInline,
						"dp--tp-inline-btn-bottom": P(E).timePickerInline,
						"dp--inc-dec-button-disabled": ce.value(n.type),
						"dp--hidden-el": H.value
					}),
					"data-test-id": `${n.type}-time-dec-btn-${m.order}`,
					"aria-label": P(y)?.decrementValue(n.type),
					tabindex: "0",
					"data-dp-action-element": W.value,
					disabled: P(N)(t.disabled),
					onKeydown: (e) => P(M)(e, () => Se(n.type, !1, { keyboard: !0 }), !0),
					onClick: (e) => P(x).timeArrowHoldThreshold ? void 0 : Se(n.type, !1),
					onMousedown: (e) => P(x).timeArrowHoldThreshold ? Se(n.type, !1) : void 0,
					onMouseup: xe
				}, [P(E).timePickerInline ? k(r.$slots, "tp-inline-arrow-down", { key: 1 }, () => [d[3] ||= s("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-l" }, null, -1), d[4] ||= s("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-r" }, null, -1)]) : k(r.$slots, "arrow-down", { key: 0 }, () => [u(P(et))])], 42, Bn)
			], 64))], 10, Ln))), 128)),
			P(E).is24 ? a("", !0) : (C(), o("div", Vn, [k(r.$slots, "am-pm-button", {
				toggle: Ce,
				value: V.value
			}, () => [s("button", {
				ref_key: "amPmButton",
				ref: ne,
				type: "button",
				class: "dp--pm-am-button",
				"aria-label": P(y)?.amPmButton,
				tabindex: "0",
				disabled: P(N)(t.disabled),
				"data-dp-action-element": W.value,
				"data-compact": ue.value,
				onClick: Ce,
				onKeydown: d[0] ||= (e) => P(M)(e, () => Ce(), !0)
			}, j(V.value), 41, Hn)])])),
			(C(!0), o(e, null, O(fe.value, (e) => (C(), i(n, {
				key: e,
				name: P(L)(B[e.type]),
				css: P(R)
			}, {
				default: z(() => [B[e.type] ? (C(), i(Cn, {
					key: 0,
					items: ge(e.type),
					"is-last": P(_).autoApply && !P(x).keepActionRow,
					type: e.type,
					"aria-labels": P(y),
					level: P(E).timePickerInline || P(_).timePicker ? 1 : 2,
					"overlay-label": P(y).timeOverlay?.(e.type),
					onSelected: (t) => Te(e.type, t),
					onToggle: (t) => be(e.type)
				}, c({
					"button-icon": z(() => [k(r.$slots, "clock-icon", {}, () => [r.$slots["clock-icon"] ? a("", !0) : (C(), i(A(P(E).timePickerInline ? P(Je) : P(Qe)), { key: 0 }))])]),
					_: 2
				}, [r.$slots[`${e.type}-overlay-value`] ? {
					name: "item",
					fn: z(({ item: t }) => [k(r.$slots, `${e.type}-overlay-value`, {
						text: t.text,
						value: t.value
					})]),
					key: "0"
				} : void 0, r.$slots[`${e.type}-overlay-header`] ? {
					name: "header",
					fn: z(() => [k(r.$slots, `${e.type}-overlay-header`, { toggle: () => be(e.type) })]),
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
}), Wn = ["data-dp-mobile"], Gn = ["aria-label", "tabindex"], Kn = [
	"role",
	"aria-label",
	"tabindex"
], qn = ["aria-label"], Jn = /* @__PURE__ */ d({
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
		let f = d, p = t, { rootEmit: m, setState: h, modelValue: y, rootProps: x, defaults: { ariaLabels: w, textInput: T, config: E, range: A, timeConfig: j } } = $(), { isModelAuto: M } = qt(), { checkKeyDown: te, findFocusableEl: N } = Kt(), { transitionName: R, showTransition: V } = ht(), { hideNavigationButtons: ne } = _n(), { isMobile: re } = Jt(), { childMount: H } = ft(), U = F(), W = I("overlay"), ie = I("close-tp-btn"), ae = I("tp-input"), oe = D(!1);
		ee(() => {
			H(x.timePicker ? void 0 : it.timePicker);
		}), S(() => {
			G.value && h("arrowNavigationLevel", 0);
		});
		let se = r(() => A.value.enabled && x.modelAuto && !A.value.requireEndTime ? M(y.value) : !0), G = D(!1), ce = (e) => ({
			hours: Array.isArray(p.hours) ? p.hours[e] : p.hours,
			minutes: Array.isArray(p.minutes) ? p.minutes[e] : p.minutes,
			seconds: Array.isArray(p.seconds) ? p.seconds[e] : p.seconds
		}), K = r(() => {
			let e = [];
			if (A.value.enabled) for (let t = 0; t < 2; t++) e.push(ce(t));
			else e.push(ce(0));
			return e;
		}), le = (e, t = "") => {
			let n = e !== G.value;
			G.value = e, h("arrowNavigationLevel", +!!e), n && m("overlay-toggle", {
				open: e,
				overlay: at.time
			}), _().then(() => {
				t !== "" && ae.value?.[0] && ae.value[0].openChildCmp(t);
			});
		}, q = r(() => ({
			"dp--btn-base dp--bg-none": !0,
			"dp--button": !0,
			"dp--button-bottom": x.autoApply && !E.value.keepActionRow
		})), ue = rn(U, en.TimeInput), de = (e, t, n) => A.value.enabled ? t === 0 ? [e, K.value[1][n]] : [K.value[0][n], e] : e, fe = (e) => {
			f("update:hours", e);
		}, pe = (e) => {
			f("update:minutes", e);
		}, me = (e) => {
			f("update:seconds", e);
		}, he = () => {
			if (W.value && !T.value.enabled && !p.noOverlayFocus) {
				let e = N(W.value);
				e && e.focus({ preventScroll: !0 });
			}
		}, ge = (e) => {
			oe.value = !1, m("overlay-toggle", {
				open: !1,
				overlay: e
			});
		}, _e = (e) => {
			oe.value = !0, m("overlay-toggle", {
				open: !0,
				overlay: e
			});
		};
		return l({ toggleTimePicker: le }), (r, l) => (C(), o("div", {
			class: "dp--tp-wrap",
			"data-dp-mobile": P(re)
		}, [!P(x).timePicker && !P(j).timePickerInline ? B((C(), o("button", {
			key: 0,
			ref: "open-tp-btn",
			type: "button",
			"data-dp-action-element": "0",
			class: v({
				...q.value,
				"dp--hidden-el": G.value
			}),
			"aria-label": P(w)?.openTimePicker,
			tabindex: t.noOverlayFocus ? void 0 : 0,
			"data-test-id": "open-time-picker-btn",
			onKeydown: l[0] ||= (e) => P(te)(e, () => le(!0)),
			onClick: l[1] ||= (e) => le(!0)
		}, [k(r.$slots, "clock-icon", {}, () => [u(P(Qe))])], 42, Gn)), [[L, !P(ne)("time")]]) : a("", !0), u(n, {
			name: P(R)(G.value),
			css: P(V) && !P(j).timePickerInline
		}, {
			default: z(() => [G.value || P(x).timePicker || P(j).timePickerInline ? (C(), o("div", {
				key: 0,
				ref: "overlay",
				role: P(j).timePickerInline ? void 0 : "dialog",
				class: v({
					"dp--overlay": !P(j).timePickerInline,
					"dp--overlay-absolute": !P(x).timePicker && !P(j).timePickerInline,
					"dp--overlay-relative": P(x).timePicker
				}),
				style: b(P(x).timePicker ? { height: `${P(E).modeHeight}px` } : void 0),
				"aria-label": P(w)?.timePicker,
				tabindex: P(j).timePickerInline ? void 0 : 0
			}, [s("div", {
				class: v(P(j).timePickerInline ? "dp--time-picker-inline-container" : "dp--overlay-container dp--container-flex dp--time-picker-overlay-container"),
				style: { display: "flex" }
			}, [k(r.$slots, "time-picker-overlay", {
				hours: t.hours,
				minutes: t.minutes,
				seconds: t.seconds,
				setHours: fe,
				setMinutes: pe,
				setSeconds: me
			}, () => [s("div", { class: v(P(j).timePickerInline ? "dp--flex" : "dp--overlay-row dp--flex-row") }, [(C(!0), o(e, null, O(K.value, (e, n) => B((C(), i(Un, {
				key: n,
				ref_for: !0,
				ref: "tp-input",
				hours: e.hours,
				minutes: e.minutes,
				seconds: e.seconds,
				order: n,
				"close-time-picker-btn": ie.value,
				"disabled-times-config": t.disabledTimesConfig,
				disabled: n === 0 ? P(A).fixedStart : P(A).fixedEnd,
				"validate-time": (e, r) => t.validateTime(e, de(r, n, e)),
				"onUpdate:hours": (e) => fe(de(e, n, "hours")),
				"onUpdate:minutes": (e) => pe(de(e, n, "minutes")),
				"onUpdate:seconds": (e) => me(de(e, n, "seconds")),
				onMounted: he,
				onOverlayClosed: ge,
				onOverlayOpened: _e
			}, c({ _: 2 }, [O(P(ue), (e) => ({
				name: e,
				fn: z((t) => [k(r.$slots, e, g({ ref_for: !0 }, t))])
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
			])), [[L, n === 0 ? !0 : se.value]])), 128))], 2)]), !P(x).timePicker && !P(j).timePickerInline ? B((C(), o("button", {
				key: 0,
				ref: "close-tp-btn",
				"data-dp-action-element": "1",
				type: "button",
				class: v({
					...q.value,
					"dp--hidden-el": oe.value
				}),
				"aria-label": P(w)?.closeTimePicker,
				tabindex: "0",
				onKeydown: l[2] ||= (e) => P(te)(e, () => le(!1)),
				onClick: l[3] ||= (e) => le(!1)
			}, [k(r.$slots, "calendar-icon", {}, () => [u(P(Je))])], 42, qn)), [[L, !P(ne)("time")]]) : a("", !0)], 2)], 14, Kn)) : a("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 8, Wn));
	}
}), Yn = () => {
	let { getDate: e, modelValue: t, time: n, rootProps: i, defaults: { range: a, timeConfig: o, safeDates: s } } = $(), { updateFlowStep: c } = ft(), { isDateEqual: l, setTime: u } = qt(), d = (e, t) => Array.isArray(n[e]) ? n[e][t] : n[e], f = (e) => o.value.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[e] : n.seconds : 0, p = (t, r) => t ? u(r === void 0 ? {
		hours: n.hours,
		minutes: n.minutes,
		seconds: f()
	} : {
		hours: d("hours", r),
		minutes: d("minutes", r),
		seconds: f(r)
	}, t) : Le(e(), f(r)), m = (e, t) => {
		n[e] = t;
	}, h = r(() => i.modelAuto && a.value.enabled ? Array.isArray(t.value) ? t.value.length > 1 : !1 : a.value.enabled), g = (e, r) => {
		let i = Object.fromEntries(Object.keys(n).map((t) => t === e ? [t, r] : [t, n[t]].slice()));
		if (h.value && !a.value.disableTimeRangeValidation) {
			let e = (e) => t.value ? u({
				hours: i.hours[e],
				minutes: i.minutes[e],
				seconds: i.seconds[e]
			}, t.value[e]) : null, n = (e) => Fe(t.value[e], 0);
			return !(l(e(0), e(1)) && (Ee(e(0), n(1)) || De(e(1), n(0))));
		}
		return !0;
	}, v = (e, t) => {
		let r = n[e] === t ? void 0 : e;
		g(e, t) && (m(e, t), r && _().then(() => c(e)));
	}, y = (e) => {
		v("hours", e);
	}, b = (e) => {
		v("minutes", e);
	}, x = (e) => {
		v("seconds", e);
	}, ee = (e, n) => {
		y(e.hours), b(e.minutes), x(e.seconds), t.value && n(t.value);
	}, S = (e) => {
		if (e) {
			let t = Array.isArray(e), n = t ? [+e[0].hours, +e[1].hours] : +e.hours, r = t ? [+e[0].minutes, +e[1].minutes] : +e.minutes, i = t ? [+(e[0].seconds ?? 0), +(e[1].seconds ?? 0)] : +(e.seconds ?? 0);
			m("hours", n), m("minutes", r), o.value.enableSeconds && m("seconds", i);
		}
	}, C = (e, t) => {
		let r = {
			hours: Array.isArray(n.hours) ? n.hours[e] : n.hours,
			disabledArr: []
		};
		return (t || t === 0) && (r.hours = t), Array.isArray(i.disabledTimes) && (r.disabledArr = a.value.enabled && Array.isArray(i.disabledTimes[e]) ? i.disabledTimes[e] : i.disabledTimes), r;
	}, w = r(() => (e, t) => {
		let n = T(e, t);
		if (Array.isArray(i.disabledTimes)) {
			let { disabledArr: r, hours: i } = C(e, t), a = r.filter((e) => +e.hours === i);
			return a[0]?.minutes === "*" ? {
				hours: [i],
				minutes: void 0,
				seconds: void 0
			} : {
				hours: n.hours,
				minutes: [...a?.map((e) => +e.minutes) ?? [], ...n.minutes],
				seconds: [...a?.map((e) => e.seconds ? +e.seconds : void 0) ?? [], ...n.seconds]
			};
		}
		return n;
	}), T = (e, n) => {
		let r = {
			hours: [],
			minutes: [],
			seconds: []
		}, i = (a.value.enabled ? t.value?.[e] : t.value) ?? null;
		if (!i) return r;
		let { hours: c } = C(e, n);
		if (s.value.minDate && Ae(i, s.value.minDate)) {
			let e = be(s.value.minDate), t = Se(s.value.minDate), n = we(s.value.minDate);
			for (let t = 0; t < e; t += 1) r.hours.push(t);
			if (c === e) {
				for (let e = 0; e < t; e += 1) r.minutes.push(e);
				if (o.value.enableSeconds) for (let e = 0; e < n; e += 1) r.seconds.push(e);
			}
		}
		if (s.value.maxDate && Ae(i, s.value.maxDate)) {
			let e = be(s.value.maxDate), t = Se(s.value.maxDate), n = we(s.value.maxDate);
			for (let t = e + 1; t < 24; t += 1) r.hours.push(t);
			if (c === e) {
				for (let e = t + 1; e < 60; e += 1) r.minutes.push(e);
				if (o.value.enableSeconds) for (let e = n + 1; e < 60; e += 1) r.seconds.push(e);
			}
		}
		return r;
	};
	return {
		assignTime: m,
		updateHours: y,
		updateMinutes: b,
		updateSeconds: x,
		getSetDateTime: p,
		updateTimeValues: ee,
		getSecondsValue: f,
		assignStartTime: S,
		validateTime: g,
		disabledTimesConfig: w
	};
}, Xn = (e) => {
	let { getDate: t, time: n, modelValue: r, state: i, defaults: { startTime: a, range: o, timeConfig: s } } = $(), { getTimeObj: c } = qt();
	gt(() => {
		i.isTextInputDate && b();
	});
	let { updateTimeValues: l, getSetDateTime: u, assignTime: d, assignStartTime: f, disabledTimesConfig: p, validateTime: m } = Yn(), h = (e) => {
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
				return [Z(t(), e), Z(t(), n)];
			}
			let e = h(s.value.startTime);
			return Z(t(), e);
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
	ee(() => (f(a.value), r.value ? b() : _()));
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
}, Zn = /* @__PURE__ */ d({
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
		let r = n, a = rn(F(), en.TimePicker), o = I("time-input"), { time: l, modelValue: d, disabledTimesConfig: p, updateTime: m, validateTime: h } = Xn(r);
		return ee(() => {
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
		}), (e, t) => (C(), i(Tn, {
			"multi-calendars": 0,
			stretch: ""
		}, {
			default: z(({ wrapClass: n }) => [s("div", { class: v(n) }, [u(Jn, g({ ref: "time-input" }, e.$props, {
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
			}), c({ _: 2 }, [O(P(a), (t, n) => ({
				name: t,
				fn: z((n) => [k(e.$slots, t, y(f(n)))])
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
}), Qn = (e, t) => {
	let { getDate: n, rootProps: i, defaults: { filters: a } } = $(), { validateMonthYearInRange: o, validateMonthYear: s } = _t(), c = (e, t) => {
		let n = e;
		return a.value.months.includes(Y(n)) ? (n = t ? q(e, 1) : We(e, 1), c(n, t)) : n;
	}, l = (e, t) => {
		let n = e;
		return a.value.years.includes(X(n)) ? (n = t ? ue(e, 1) : Ge(e, 1), l(n, t)) : n;
	}, u = (t, r = !1) => {
		let s = Z(n(), {
			month: e.month,
			year: e.year
		}), u = t ? q(s, 1) : We(s, 1);
		i.disableYearSelect && (u = Re(u, e.year));
		let f = Y(u), p = X(u);
		a.value.months.includes(f) && (u = c(u, t), f = Y(u), p = X(u)), a.value.years.includes(p) && (u = l(u, t), p = X(u)), o(f, p, t, i.preventMinMaxNavigation) && d(f, p, r);
	}, d = (e, n, r = !1) => {
		t("update-month-year", {
			month: e,
			year: n,
			fromNav: r
		});
	};
	return {
		handleMonthYearChange: u,
		isDisabled: r(() => (t) => s(Z(n(), {
			month: e.month,
			year: e.year
		}), i.preventMinMaxNavigation, t)),
		updateMonthYear: d
	};
}, $n = { class: "dp--header-wrap" }, er = {
	key: 0,
	class: "dp--month-year-wrap"
}, tr = { key: 0 }, nr = { class: "dp--month-year-wrap" }, rr = [
	"data-dp-element",
	"aria-label",
	"aria-expanded",
	"data-test-id",
	"onClick",
	"onKeydown"
], ir = /* @__PURE__ */ d({
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
		let m = p, h = t, { rootEmit: _, rootProps: b, modelValue: x, defaults: { ariaLabels: S, filters: w, config: T, highlight: E, safeDates: M, ui: te } } = $(), { transitionName: N, showTransition: F } = ht(), { showLeftIcon: I, showRightIcon: L } = _n(), { handleMonthYearChange: R, isDisabled: B, updateMonthYear: V } = Qn(h, m), { getMaxMonth: ne, getMinMonth: re, getYearFromDate: H, groupListAndMap: U, checkHighlightYear: W, checkHighlightMonth: ie } = qt(), { checkKeyDown: ae } = Kt(), { formatYear: oe } = Yt(), { checkMinMaxValue: se } = _t(), { boolHtmlAttribute: G } = Qt(), { childMount: ce } = ft(), K = D(!1), le = D(!1), q = D(!1);
		ee(() => {
			ce(it.header);
		});
		let ue = (e) => ({
			get: () => h[e],
			set: (t) => {
				let n = e === rt.month ? rt.year : rt.month;
				m("update-month-year", {
					[e]: t,
					[n]: h[n]
				}), e === rt.month ? ve() : J();
			}
		}), de = r(ue(rt.month)), fe = r(ue(rt.year)), pe = r(() => (e) => ({
			month: h.month,
			year: h.year,
			items: e === rt.month ? h.months : h.years,
			instance: h.instance,
			updateMonthYear: V,
			toggle: e === rt.month ? ve : J
		})), me = r(() => h.months.find((e) => e.value === h.month) || {
			text: "",
			value: 0
		}), he = r(() => U(h.months, (e) => ({
			active: h.month === e.value,
			disabled: se(e.value, re(h.year, M.value.minDate), ne(h.year, M.value.maxDate)) || w.value.months.includes(e.value),
			highlighted: ie(E.value, e.value, h.year)
		}))), ge = r(() => U(h.years, (e) => ({
			active: h.year === e.value,
			disabled: se(e.value, H(M.value.minDate), H(M.value.maxDate)) || w.value.years.includes(e.value),
			highlighted: W(E.value, e.value)
		}))), _e = (e, t, n) => {
			n === void 0 ? e.value = !e.value : e.value = n, e.value ? (q.value = !0, _("overlay-toggle", {
				open: !0,
				overlay: t
			})) : (q.value = !1, _("overlay-toggle", {
				open: !1,
				overlay: t
			}));
		}, ve = (e) => {
			_e(K, at.month, e);
		}, J = (e) => {
			_e(le, at.year, e);
		}, ye = r(() => [{
			type: rt.month,
			index: 1,
			toggle: ve,
			modelValue: de.value,
			updateModelValue: (e) => de.value = e,
			text: me.value.text,
			showSelectionGrid: K.value,
			items: he.value,
			ariaLabel: S.value?.openMonthsOverlay,
			overlayLabel: S.value.monthPicker?.(!0) ?? void 0
		}, {
			type: rt.year,
			index: 2,
			toggle: J,
			modelValue: fe.value,
			updateModelValue: (e) => fe.value = e,
			text: oe(h.year),
			showSelectionGrid: le.value,
			items: ge.value,
			ariaLabel: S.value?.openYearsOverlay,
			overlayLabel: S.value.yearPicker?.(!0) ?? void 0
		}]), be = r(() => b.disableYearSelect ? [ye.value[0]] : b.yearFirst ? [...ye.value].reverse() : ye.value);
		return d({
			toggleMonthPicker: ve,
			toggleYearPicker: J,
			handleMonthYearChange: R
		}), (r, d) => (C(), o("div", $n, [r.$slots["month-year"] ? (C(), o("div", er, [k(r.$slots, "month-year", y(f({
			mode: "date",
			month: t.month,
			year: t.year,
			months: t.months,
			years: t.years,
			updateMonthYear: P(V),
			handleMonthYearChange: P(R),
			instance: t.instance,
			isDisabled: P(B)
		})))])) : (C(), o(e, { key: 1 }, [r.$slots["top-extra"] ? (C(), o("div", tr, [k(r.$slots, "top-extra", { value: P(x) })])) : a("", !0), s("div", nr, [
			P(I)(t.instance) && !P(b).vertical ? (C(), i(Dn, {
				key: 0,
				"aria-label": P(S)?.prevMonth,
				disabled: P(G)(P(B)(!1)),
				inactive: q.value,
				class: v(P(te)?.navBtnPrev),
				"el-name": "action-prev",
				onActivate: d[0] ||= (e) => P(R)(!1, !0)
			}, {
				default: z(() => [r.$slots["arrow-left"] ? k(r.$slots, "arrow-left", { key: 0 }) : a("", !0), r.$slots["arrow-left"] ? a("", !0) : (C(), i(P(Xe), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"inactive",
				"class"
			])) : a("", !0),
			s("div", { class: v(["dp--month-year-wrap", { "dp--year-disable-select": P(b).disableYearSelect }]) }, [(C(!0), o(e, null, O(be.value, (d) => (C(), o(e, { key: d.type }, [s("button", {
				type: "button",
				"data-dp-element": `overlay-${d.type}`,
				class: v(["dp--btn-base dp--bg-none dp--month-year-select-base dp--month-year-select", { "dp--hidden-el": q.value }]),
				"aria-label": `${d.text}-${d.ariaLabel}`,
				"aria-haspopup": "dialog",
				"aria-expanded": d.showSelectionGrid,
				"data-test-id": `${d.type}-toggle-overlay-${t.instance}`,
				tabindex: "0",
				"data-dp-action-element": "0",
				onClick: (e) => d.toggle(),
				onKeydown: (e) => P(ae)(e, () => d.toggle(), !0)
			}, [r.$slots[d.type] ? k(r.$slots, d.type, {
				key: 0,
				text: d.text,
				value: h[d.type]
			}) : a("", !0), r.$slots[d.type] ? a("", !0) : (C(), o(e, { key: 1 }, [l(j(d.text), 1)], 64))], 42, rr), u(n, {
				name: P(N)(d.showSelectionGrid),
				css: P(F)
			}, {
				default: z(() => [d.showSelectionGrid ? (C(), i(Cn, {
					key: 0,
					items: d.items,
					"is-last": P(b).autoApply && !P(T).keepActionRow,
					"skip-button-ref": !1,
					type: d.type,
					"header-refs": [],
					"menu-wrap-ref": t.menuWrapRef,
					"overlay-label": d.overlayLabel,
					onSelected: d.updateModelValue,
					onToggle: d.toggle
				}, c({
					"button-icon": z(() => [r.$slots["calendar-icon"] ? k(r.$slots, "calendar-icon", { key: 0 }) : a("", !0), r.$slots["calendar-icon"] ? a("", !0) : (C(), i(P(Je), { key: 1 }))]),
					_: 2
				}, [
					r.$slots[`${d.type}-overlay-value`] ? {
						name: "item",
						fn: z(({ item: e }) => [k(r.$slots, `${d.type}-overlay-value`, {
							text: e.text,
							value: e.value
						})]),
						key: "0"
					} : void 0,
					r.$slots[`${d.type}-overlay`] ? {
						name: "overlay",
						fn: z(() => [k(r.$slots, `${d.type}-overlay`, g({ ref_for: !0 }, pe.value(d.type)))]),
						key: "1"
					} : void 0,
					r.$slots[`${d.type}-overlay-header`] ? {
						name: "header",
						fn: z(() => [k(r.$slots, `${d.type}-overlay-header`, { toggle: d.toggle })]),
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
			P(I)(t.instance) && P(b).vertical ? (C(), i(Dn, {
				key: 1,
				"aria-label": P(S)?.prevMonth,
				"el-name": "action-prev",
				disabled: P(G)(P(B)(!1)),
				inactive: q.value,
				class: v(P(te)?.navBtnPrev),
				onActivate: d[1] ||= (e) => P(R)(!1, !0)
			}, {
				default: z(() => [r.$slots["arrow-up"] ? k(r.$slots, "arrow-up", { key: 0 }) : a("", !0), r.$slots["arrow-up"] ? a("", !0) : (C(), i(P($e), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"inactive",
				"class"
			])) : a("", !0),
			P(L)(t.instance) ? (C(), i(Dn, {
				key: 2,
				ref: "rightIcon",
				"el-name": "action-next",
				disabled: P(G)(P(B)(!0)),
				"aria-label": P(S)?.nextMonth,
				inactive: q.value,
				class: v(P(te)?.navBtnNext),
				onActivate: d[2] ||= (e) => P(R)(!0, !0)
			}, {
				default: z(() => [r.$slots[P(b).vertical ? "arrow-down" : "arrow-right"] ? k(r.$slots, P(b).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : a("", !0), r.$slots[P(b).vertical ? "arrow-down" : "arrow-right"] ? a("", !0) : (C(), i(A(P(b).vertical ? P(et) : P(Ze)), { key: 1 }))]),
				_: 3
			}, 8, [
				"disabled",
				"aria-label",
				"inactive",
				"class"
			])) : a("", !0)
		])], 64))]));
	}
}), ar = ["inert", "aria-hidden"], or = {
	class: "dp--calendar-header",
	role: "row"
}, sr = {
	key: 0,
	class: "dp--calendar-header-item",
	role: "gridcell"
}, cr = ["aria-label"], lr = {
	key: 0,
	class: "dp--calendar-item dp--week-num",
	role: "gridcell"
}, ur = { class: "dp--cell-inner" }, dr = [
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
], fr = /* @__PURE__ */ d({
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
		let d = c, f = t, { getDate: p, rootEmit: m, rootProps: h, state: g, defaults: { transitions: y, config: x, ariaLabels: w, multiCalendars: T, weekNumbers: E, multiDates: A, ui: M, weekStart: te } } = $(), { isDateAfter: N, isDateEqual: F, resetDateTime: L, getCellId: R } = qt(), { checkKeyDown: B, checkStopPropagation: V, isTouchDevice: re } = Kt(), { formatWeekDay: W } = Yt(), { childMount: ie } = ft(), ae = I("calendar-wrap"), oe = I("active-tooltip"), se = D([]), G = D(null), ce = D(!0), K = D(!1), le = D(""), q = D({
			bottom: "",
			left: "",
			transform: ""
		}), ue = D({ left: "50%" });
		U(ae, { onSwipeEnd: (e, t) => {
			x.value.noSwipe || (h.vertical ? (t === "up" || t === "down") && d("handle-swipe", t === "up" ? "left" : "right") : (t === "left" || t === "right") && d("handle-swipe", t === "right" ? "left" : "right"));
		} });
		let de = r(() => h.calendar ? h.calendar(f.mappedDates) : f.mappedDates), fe = r(() => h.dayNames ? Array.isArray(h.dayNames) ? h.dayNames : h.dayNames() : Fe());
		ee(() => {
			ie(it.calendar), x.value.monthChangeOnScroll && ae.value && ae.value.addEventListener("wheel", ke, { passive: !1 });
		}), S(() => {
			x.value.monthChangeOnScroll && ae.value && ae.value.removeEventListener("wheel", ke);
		});
		let pe = (e) => e ? h.vertical ? "vNext" : "next" : h.vertical ? "vPrevious" : "previous", he = (e, t) => {
			if (h.transitions) {
				let n = L(Z(p(), {
					month: f.month,
					year: f.year
				}));
				le.value = N(L(Z(p(), {
					month: e,
					year: t
				})), n) ? y.value[pe(!0)] : y.value[pe(!1)], ce.value = !1, _().then(() => ce.value = !0);
			}
		}, ge = r(() => ({ ...M.value.calendar })), ve = (e) => ({
			type: "dot",
			...e
		}), ye = r(() => (e) => {
			let t = ve(e);
			return {
				"dp--marker-base": !0,
				"dp--marker-dot": t.type === "dot",
				"dp--marker-line": t.type === "line"
			};
		}), be = r(() => (e) => F(e, G.value)), Se = r(() => ({
			"dp--calendar": !0,
			"dp--calendar-next": T.value.count > 0 && f.instance !== 0
		})), Y = r(() => g.arrowNavigationLevel > 0), Ce = r(() => (e) => h.hideOffsetDates ? e.current : !0), we = async (e, t) => {
			let { width: n, height: r } = e.getBoundingClientRect();
			G.value = t.value;
			let i = { left: `${n / 2}px` }, a = -50;
			if (await _(), oe.value?.[0]) {
				let { left: e, width: t } = oe.value[0].getBoundingClientRect();
				e < 0 && (i = { left: "0" }, a = 0, ue.value.left = `${n / 2}px`), globalThis.innerWidth < e + t && (i = { right: "0" }, a = 0, ue.value.left = `${t - n / 2}px`);
			}
			q.value = {
				bottom: `${r}px`,
				...i,
				transform: `translateX(${a}%)`
			};
		}, X = async (e, t, n) => {
			let r = H(se.value?.[t]?.[n]);
			r && (e.marker?.customPosition && e.marker?.tooltip?.length ? q.value = e.marker.customPosition(r) : await we(r, e), m("tooltip-open", e.marker));
		}, Ee = async (e, t, n) => {
			if (K.value && A.value.enabled && A.value.dragSelect) return d("select-date", e);
			if (d("set-hover-date", e), e.marker?.tooltip?.length) {
				if (h.hideOffsetDates && !e.current) return;
				await X(e, t, n);
			}
		}, De = (e) => {
			G.value && (G.value = null, q.value = structuredClone({
				bottom: "",
				left: "",
				transform: ""
			}), m("tooltip-close", e.marker));
		}, Oe = (e, t, n) => {
			e && (Array.isArray(se.value[t]) ? se.value[t][n] = e : se.value[t] = [e]);
		}, ke = (e) => {
			x.value.monthChangeOnScroll && (e.preventDefault(), d("handle-scroll", e));
		}, Ae = (e) => E.value ? E.value.type === "local" ? Te(e.value, {
			weekStartsOn: te.value,
			locale: h.locale
		}) : E.value.type === "iso" ? xe(e.value) : typeof E.value.type == "function" ? E.value.type(e.value) : "" : "", je = (e) => {
			let t = e[0];
			return E.value?.hideOnOffsetDates ? e.some((e) => e.current) ? Ae(t) : "" : Ae(t);
		}, Me = (e, t, n = !0) => {
			!n && re() || (!A.value.enabled || x.value.allowPreventDefault) && (V(e, x.value), d("select-date", t));
		}, Ne = (e) => {
			V(e, x.value);
		}, Pe = (e) => {
			A.value.enabled && A.value.dragSelect ? (K.value = !0, d("select-date", e)) : A.value.enabled && d("select-date", e);
		}, Fe = () => {
			let e = p();
			return me({
				start: Ve(e, {
					locale: h.locale,
					weekStartsOn: te.value
				}),
				end: _e(e, {
					locale: h.locale,
					weekStartsOn: te.value
				})
			}).map((e) => W(e));
		}, Ie = (e) => w.value?.day?.(e) ?? J(e.value, "MMMM do, yyyy", { locale: h.locale });
		return i({ triggerTransition: he }), (t, r) => (C(), o("div", {
			class: v(Se.value),
			inert: Y.value || void 0,
			"aria-hidden": Y.value || void 0
		}, [s("div", {
			ref: "calendar-wrap",
			class: v(ge.value),
			role: "grid"
		}, [
			s("div", or, [P(E) ? (C(), o("div", sr, j(P(E).label), 1)) : a("", !0), (C(!0), o(e, null, O(fe.value, (e, n) => (C(), o("div", {
				key: n,
				class: "dp--calendar-header-item",
				role: "gridcell",
				"data-test-id": "calendar-header",
				"aria-label": P(w)?.weekDay?.(n)
			}, [k(t.$slots, "calendar-header", {
				day: e,
				index: n
			}, () => [l(j(e), 1)])], 8, cr))), 128))]),
			r[2] ||= s("div", { class: "dp--calendar-header-separator" }, null, -1),
			u(n, {
				name: le.value,
				css: !!P(y)
			}, {
				default: z(() => [ce.value ? (C(), o("div", {
					key: 0,
					class: "dp--calendar",
					role: "rowgroup",
					onMouseleave: r[1] ||= (e) => K.value = !1
				}, [(C(!0), o(e, null, O(de.value, (n, i) => (C(), o("div", {
					key: i,
					class: "dp--calendar-row",
					role: "row"
				}, [P(E) ? (C(), o("div", lr, [s("div", ur, j(je(n.days)), 1)])) : a("", !0), (C(!0), o(e, null, O(n.days, (n, c) => (C(), o("div", {
					id: P(R)(n.value),
					ref_for: !0,
					ref: (e) => Oe(e, i, c),
					key: c + i,
					role: "gridcell",
					class: "dp--calendar-item",
					"aria-selected": (n.classData["dp--active"] || n.classData["dp--range-border-start"] || n.classData["dp--range-border-end"]) ?? void 0,
					"aria-disabled": n.classData["dp--cell-disabled"] || void 0,
					"aria-label": Ie(n),
					tabindex: !n.current && P(h).hideOffsetDates ? void 0 : 0,
					"data-test-id": P(R)(n.value),
					"data-dp-element-active": n.classData["dp--active"] ? 0 : void 0,
					"data-dp-action-element": "0",
					onClick: ne((e) => Me(e, n), ["prevent"]),
					onTouchend: (e) => Me(e, n, !1),
					onKeydown: (e) => P(B)(e, () => t.$emit("select-date", n), !1, P(x).spaceConfirm, void 0),
					onMouseenter: (e) => Ee(n, i, c),
					onMouseleave: (e) => De(n),
					onMousedown: (e) => Pe(n),
					onMouseup: r[0] ||= (e) => K.value = !1
				}, [s("div", { class: v(["dp--cell-inner", n.classData]) }, [
					t.$slots.day && Ce.value(n) ? k(t.$slots, "day", {
						key: 0,
						day: +n.text,
						date: n.value
					}) : a("", !0),
					t.$slots.day ? a("", !0) : (C(), o(e, { key: 1 }, [l(j(n.text), 1)], 64)),
					n.marker && Ce.value(n) ? k(t.$slots, "marker", {
						key: 2,
						marker: n.marker,
						day: +n.text,
						date: n.value
					}, () => [s("div", {
						class: v(ye.value(n.marker)),
						style: b(n.marker.color ? { backgroundColor: n.marker.color } : {})
					}, null, 6)]) : a("", !0),
					be.value(n.value) ? (C(), o("div", {
						key: 3,
						ref_for: !0,
						ref: "active-tooltip",
						class: "dp--marker-tooltip",
						style: b(q.value)
					}, [n.marker?.tooltip ? (C(), o("div", {
						key: 0,
						class: "dp--tooltip-content",
						onClick: Ne
					}, [(C(!0), o(e, null, O(n.marker.tooltip, (e, r) => (C(), o("div", {
						key: r,
						class: "dp--tooltip-text"
					}, [k(t.$slots, "marker-tooltip", {
						tooltip: e,
						day: n.value
					}, () => [s("div", {
						class: "dp--tooltip-mark",
						style: b(e.color ? { backgroundColor: e.color } : {})
					}, null, 4), s("div", null, j(e.text), 1)])]))), 128)), s("div", {
						class: "dp--arrow-bottom-tp",
						style: b(ue.value)
					}, null, 4)])) : a("", !0)], 4)) : a("", !0)
				], 2)], 40, dr))), 128))]))), 128))], 32)) : a("", !0)]),
				_: 3
			}, 8, ["name", "css"])
		], 2)], 10, ar));
	}
}), pr = (e, t) => {
	let n = D([]), i = D(/* @__PURE__ */ new Date()), a = D(), o = D(!1), { getDate: s, getDateFromParts: c, rootEmit: l, calendars: u, month: d, year: f, time: p, modelValue: m, rootProps: h, today: g, state: v, defaults: { multiCalendars: y, startTime: b, range: x, config: S, safeDates: C, multiDates: w, timeConfig: T, flow: E, weekStart: O } } = $(), { validateMonthYearInRange: k, isDisabled: A, isDateRangeAllowed: j, checkMinMaxRange: M } = _t(), { updateTimeValues: te, getSetDateTime: N, assignTime: P, assignStartTime: F, validateTime: I, disabledTimesConfig: L } = Yn(), { formatDay: R } = Yt(), { setTime: z, isDateBefore: B, getDaysInBetween: V } = qt(), { checkRangeAutoApply: ne, getRangeWithFixedDate: re, handleMultiDatesSelect: H, setPresetDate: U } = jn(), { getMapDate: W } = Kt(), { selectOnAutoApply: ie } = dn(e);
	gt(() => me(v.isTextInputDate));
	let { updateFlowStep: ae, flowStep: oe } = ft(), se = (e) => !S.value.keepViewOnOffsetClick || e ? !0 : !a.value, G = (e, t, n, r = !1, i = !1) => {
		se(i) && (!r && t !== null && n !== null && ce(e, t, n), u.value[e] ??= u.value[e] = {
			month: 0,
			year: 0
		}, u.value[e].month = t ?? u.value[e]?.month, u.value[e].year = n ?? u.value[e]?.year);
	}, ce = (e, t, n) => {
		(u.value.at(e)?.month !== t || u.value.at(e)?.year !== n) && l("update-month-year", {
			month: t,
			year: n,
			instance: e
		});
	}, ue = () => {
		b.value && F(b.value);
	};
	ee(() => {
		m.value || (Oe(), ue()), me(!0), h.focusStartDate && h.startDate && Oe();
	});
	let de = r(() => E.value?.steps?.length ? E.value.steps.at(-1) === oe.value : !0), pe = () => {
		h.autoApply && e("auto-apply", !de.value);
	}, me = (e = !1) => {
		if (m.value) return Array.isArray(m.value) ? (n.value = m.value, Ce(e)) : ve(m.value, e);
		if (y.value.count && e && !h.startDate) return _e(s(), e);
	}, he = () => Array.isArray(m.value) && x.value.enabled ? Y(m.value[0]) === Y(m.value[1] ?? m.value[0]) : !1, ge = (e) => {
		let t = q(e, 1);
		return {
			month: Y(t),
			year: X(t)
		};
	}, _e = (e = s(), t = !1) => {
		if ((!y.value.count || !y.value.static || t) && G(0, Y(e), X(e), t), y.value.count && (!m.value || he() || !y.value.solo) && (!y.value.solo || t)) for (let e = 1; e < y.value.count; e++) {
			let t = K(Z(s(), {
				month: d.value(e - 1),
				year: f.value(e - 1)
			}), { months: 1 });
			u.value[e] = {
				month: Y(t),
				year: X(t)
			};
		}
	}, ve = (e, t) => {
		_e(e, t), P("hours", be(e)), P("minutes", Se(e)), P("seconds", we(e)), y.value.count && t && De();
	}, J = (e) => {
		if (y.value.count) {
			if (y.value.solo) return 0;
			let t = fe(e[0], e[1]);
			return Math.abs(t) < y.value.count ? 0 : 1;
		}
		return 1;
	}, ye = (e, t) => {
		e[1] && x.value.showLastInRange ? _e(e[J(e)], t) : _e(e[0], t);
		let n = (t, n) => [t(e[0]), e?.[1] ? t(e[1]) : p[n][1]];
		P("hours", n(be, "hours")), P("minutes", n(Se, "minutes")), P("seconds", n(we, "seconds"));
	}, xe = (e, t) => {
		if ((x.value.enabled || h.weekPicker) && !w.value.enabled) return ye(e, t);
		if (w.value.enabled && t) {
			let n = e.at(-1);
			if (n) return ve(n, t);
		}
	}, Ce = (e) => {
		let t = m.value;
		xe(t, e), y.value.count && y.value.solo && De();
	}, Te = (e, n) => {
		let r = Z(s(), {
			month: d.value(n),
			year: f.value(n)
		}), i = e < 0 ? q(r, 1) : We(r, 1);
		k(Y(i), X(i), e < 0, h.preventMinMaxNavigation) && (G(n, Y(i), X(i)), y.value.count && !y.value.solo && Ee(n), t());
	}, Ee = (e) => {
		for (let t = e - 1; t >= 0; t--) {
			let e = We(Z(s(), {
				month: d.value(t + 1),
				year: f.value(t + 1)
			}), 1);
			G(t, Y(e), X(e));
		}
		for (let t = e + 1; t <= y.value.count - 1; t++) {
			let e = q(Z(s(), {
				month: d.value(t - 1),
				year: f.value(t - 1)
			}), 1);
			G(t, Y(e), X(e));
		}
	}, De = () => {
		if (Array.isArray(m.value) && m.value.length === 2) {
			let e = s(s(m.value[1] ?? q(m.value[0], 1))), [t, n] = [Y(m.value[0]), X(m.value[0])], [r, i] = [Y(m.value[1]), X(m.value[1])];
			(t !== r || t === r && n !== i) && y.value.solo && G(1, Y(e), X(e));
		} else m.value && !Array.isArray(m.value) && (G(0, Y(m.value), X(m.value)), _e(s()));
	}, Oe = () => {
		h.startDate && (G(0, Y(s(h.startDate)), X(s(h.startDate))), y.value.count && Ee(0));
	}, ke = (e, t) => {
		if (S.value.monthChangeOnScroll) {
			let n = Date.now() - i.value.getTime(), r = Math.abs(e.deltaY), a = 500;
			r > 1 && (a = 100), r > 100 && (a = 0), n > a && (i.value = /* @__PURE__ */ new Date(), Te(S.value.monthChangeOnScroll === "inverse" ? e.deltaY : -e.deltaY, t));
		}
	}, Ae = (e, t, n = !1) => {
		S.value.monthChangeOnArrows && h.vertical === n && je(e, t);
	}, je = (e, t) => {
		Te(e === "right" ? -1 : 1, t);
	}, Me = (e) => {
		if (C.value.markers) return W(e.value, C.value.markers);
	}, Ne = (e, t) => {
		switch (h.sixWeeks === !0 ? "append" : h.sixWeeks) {
			case "prepend": return [!0, !1];
			case "center": return [e == 0, !0];
			case "fair": return [e == 0 || t > e, !0];
			case "append": return [!1, !1];
			default: return [!1, !1];
		}
	}, Pe = (e, t, n) => {
		if (n) {
			let r = n.days.at(-1);
			if (r) {
				let n = Ie(le(r.value, 1), Y(t));
				e.push({ days: n });
			}
		}
	}, Fe = (e, t, n, r) => {
		if (h.sixWeeks && e.length < 6) {
			let i = 6 - e.length, [a, o] = Ne((t.getDay() + 7 - r) % 7, 6 - (n.getDay() + 7 - r) % 7);
			for (let n = 1; n <= i; n++) if (o ? !!(n % 2) == a : a) {
				let n = e[0].days[0], r = Ie(le(n.value, -7), Y(t));
				e.unshift({ days: r });
			} else Pe(e, t, e.at(-1));
		}
		return e;
	}, Ie = (e, t) => {
		let n = s(e), r = [];
		for (let e = 0; e < 7; e++) {
			let i = le(n, e), a = Y(i) !== t;
			r.push({
				text: h.hideOffsetDates && a ? "" : R(i),
				value: i,
				current: !a,
				classData: {}
			});
		}
		return r;
	}, Le = (e, t) => {
		let n = [], r = c(t, e), i = c(t, e + 1, 0), a = Ve(r, { weekStartsOn: O.value }), o = (t) => {
			let r = Ie(t, e);
			n.push({ days: r });
			let a = r.at(-1)?.value;
			B(a, i) && o(le(t, 7));
		};
		return o(a), Fe(n, r, i, O.value);
	}, Re = (e) => {
		let t = z({
			hours: p.hours,
			minutes: p.minutes,
			seconds: qe()
		}, s(e.value));
		l("date-click", t), w.value.enabled ? H(t, w.value.limit) : m.value = t, ae("calendar", !0), _().then(() => {
			pe();
		});
	}, ze = (e) => x.value.noDisabledRange ? V(n.value[0], e).some((e) => A(e)) : !1, Be = () => {
		n.value = m.value ? m.value.slice().filter((e) => !!e) : [], n.value.length === 2 && !(x.value.fixedStart || x.value.fixedEnd) && !o.value && (n.value = []);
	}, He = (e, t) => {
		let r = [s(e.value), le(s(e.value), +x.value.autoRange)];
		j(r) ? (t && Ue(e.value), n.value = r) : l("invalid-date", e.value);
	}, Ue = (e) => {
		if (G(0, Y(s(e)), X(s(e))), y.value.count > 0) for (let t = 1; t < y.value.count; t++) {
			let n = ge(Z(s(e), {
				year: f.value(t - 1),
				month: d.value(t - 1)
			}));
			G(t, n.month, n.year);
		}
	}, Ge = (e) => {
		if (ze(e.value) || !M(e.value, m.value, +!x.value.fixedStart)) return l("invalid-date", e.value);
		n.value = re(s(e.value));
	}, Ke = (e, t) => {
		if (Be(), x.value.autoRange) return He(e, t);
		if (x.value.fixedStart || x.value.fixedEnd) return Ge(e);
		n.value[0] ? M(s(e.value), m.value) && !ze(e.value) ? (o.value = !1, B(s(e.value), s(n.value[0])) ? x.value.autoSwitchStartEnd ? (n.value.unshift(s(e.value)), l("range-end", n.value[0])) : (n.value[0] = s(e.value), l("range-start", n.value[0])) : (n.value[1] = s(e.value), l("range-end", n.value[1]))) : l("invalid-date", e.value) : (n.value[0] = s(e.value), l("range-start", n.value[0]), x.value.requireEndTime && h.modelAuto && (n.value[1] = s(e.value), o.value = !0));
	}, qe = (e = !0) => T.value.enableSeconds ? Array.isArray(p.seconds) ? e ? p.seconds[0] : p.seconds[1] : p.seconds : 0, Je = (e) => {
		n.value[e] = z({
			hours: p.hours[e],
			minutes: p.minutes[e],
			seconds: qe(e !== 1)
		}, n.value[e]);
	}, Ye = () => {
		n.value[0] && n.value[1] && +n.value?.[0] > +n.value?.[1] && (n.value.reverse(), l("range-start", n.value[0]), l("range-end", n.value[1]));
	}, Xe = () => {
		n.value.length && (n.value[0] && !n.value[1] ? Je(0) : (Je(0), Je(1), ae("calendar", !0)), Ye(), m.value = n.value.slice(), ne(n.value, e, n.value.length < 2 || E.value?.steps.length ? E.value?.steps.at(-1) !== oe.value : !1));
	}, Ze = (e, t = !1) => {
		if (A(e.value) || !e.current && h.hideOffsetDates) return l("invalid-date", e.value);
		let { marker: n, ...r } = e;
		if (a.value = {
			...structuredClone(r),
			marker: n
		}, !x.value.enabled) return Re(e);
		Array.isArray(p.hours) && Array.isArray(p.minutes) && !w.value.enabled && (Ke(e, t), Xe());
	}, Qe = (e, n) => {
		G(e, n.month, n.year, !1, !0), y.value.count && !y.value.solo && Ee(e), t(y.value.solo ? e : void 0), !n.fromNav && oe.value && ae(oe.value);
	}, $e = (e) => {
		U({ value: e }), ie(), h.multiCalendars && _().then(() => me(!0));
	}, et = () => {
		if (Array.isArray(m.value)) if (w.value.enabled) {
			let e = tt();
			m.value[m.value.length - 1] = N(e);
		} else m.value = m.value.map((e, t) => e && N(e, t));
		else m.value = N(m.value);
		e("time-update");
	}, tt = () => Array.isArray(m.value) && m.value.length ? m.value[m.value.length - 1] : null, nt = (e) => {
		let t = "";
		if (x.value.enabled && Array.isArray(m.value)) for (let n of Object.keys(e)) {
			let r = e[n];
			Array.isArray(r) && (p[n][0] !== r[0] && (t = "range-start"), p[n][1] !== r[1] && (t = "range-start"));
		}
		return t;
	};
	return {
		calendars: u,
		modelValue: m,
		month: d,
		year: f,
		time: p,
		disabledTimesConfig: L,
		today: g,
		validateTime: I,
		getCalendarDays: Le,
		getMarker: Me,
		handleScroll: ke,
		handleSwipe: je,
		handleArrow: Ae,
		selectDate: Ze,
		updateMonthYear: Qe,
		presetDate: $e,
		updateTime: (e) => {
			let t = nt(e);
			te(e, et), t && l(t, m.value[t === "range-start" ? 0 : 1]), E.value?.steps.length && pe();
		},
		assignMonthAndYear: _e,
		setStartTime: ue
	};
}, mr = () => {
	let { isModelAuto: e, matchDate: t, isDateAfter: n, isDateBefore: r, isDateBetween: i, isDateEqual: a, getWeekFromDate: o, getBeforeAndAfterInRange: s } = qt(), { getDate: c, today: l, rootProps: u, defaults: { multiCalendars: d, multiDates: f, ui: p, highlight: m, safeDates: h, range: g, weekStart: _ }, modelValue: v } = $(), { isDisabled: y } = _t(), b = D(null), x = (e) => {
		!e.current && u.hideOffsetDates || (b.value = e.value);
	}, ee = () => {
		b.value = null;
	}, S = (e) => Array.isArray(v.value) && g.value.enabled && v.value[0] && b.value ? e ? n(b.value, v.value[0]) : r(b.value, v.value[0]) : !0, C = (e, t) => {
		let n = v.value && Array.isArray(v.value) && v.value ? t ? v.value[0] || null : v.value[1] : null;
		return a(c(e.value), n);
	}, w = (e) => {
		let t = Array.isArray(v.value) ? v.value[0] : null;
		return e ? !r(b.value, t) : !0;
	}, T = (e, t = !0) => (g.value.enabled || u.weekPicker) && Array.isArray(v.value) && v.value.length === 2 ? u.hideOffsetDates && !e.current ? !1 : a(c(e.value), v.value[+!t]) : g.value.enabled ? C(e, t) && w(t) || a(e.value, Array.isArray(v.value) ? v.value[0] : null) && S(t) : !1, E = (e, t) => {
		if (Array.isArray(v.value) && v.value[0] && v.value.length === 1) {
			let i = a(e.value, b.value);
			return t ? n(v.value[0], e.value) && i : r(v.value[0], e.value) && i;
		}
		return !1;
	}, O = (e) => !v.value || u.hideOffsetDates && !e.current ? !1 : g.value.enabled ? u.modelAuto && Array.isArray(v.value) ? a(e.value, v.value[0] ?? l) : !1 : f.value.enabled && Array.isArray(v.value) ? v.value.some((t) => a(t, e.value)) : a(e.value, v.value ? v.value : l), k = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (b.value) {
				if (u.hideOffsetDates && !e.current) return !1;
				let t = le(b.value, +g.value.autoRange), n = o(c(b.value), _.value);
				return u.weekPicker ? a(n[1], c(e.value)) : a(t, c(e.value));
			}
			return !1;
		}
		return !1;
	}, A = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (b.value) {
				let t = le(b.value, +g.value.autoRange);
				if (u.hideOffsetDates && !e.current) return !1;
				let i = o(c(b.value), _.value);
				return u.weekPicker ? n(e.value, i[0]) && r(e.value, i[1]) : n(e.value, b.value) && r(e.value, t);
			}
			return !1;
		}
		return !1;
	}, j = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (b.value) {
				if (u.hideOffsetDates && !e.current) return !1;
				let t = o(c(b.value), _.value);
				return u.weekPicker ? a(t[0], e.value) : a(b.value, e.value);
			}
			return !1;
		}
		return !1;
	}, M = (e) => i(v.value, b.value, e.value), te = () => u.modelAuto && Array.isArray(v.value) ? !!v.value[0] : !1, N = () => u.modelAuto ? e(v.value) : !0, P = (e) => {
		if (u.weekPicker) return !1;
		let t = g.value.enabled ? !T(e) && !T(e, !1) : !0;
		return !y(e.value) && !O(e) && !(!e.current && u.hideOffsetDates) && t;
	}, F = (e) => g.value.enabled ? u.modelAuto ? te() && O(e) : !1 : O(e), I = (e) => m.value ? t(e.value, h.value.highlight) : !1, L = (e) => {
		let t = y(e.value);
		return t && (typeof m.value == "function" ? !m.value(e.value, t) : !m.value.options.highlightDisabled);
	}, R = (e) => typeof m.value == "function" ? m.value(e.value) : m.value.weekdays?.includes(e.value.getDay()), z = (e) => (g.value.enabled || u.weekPicker) && (!(d.value.count > 0) || e.current) && N() && !(!e.current && u.hideOffsetDates) && !O(e) ? M(e) : !1, B = (e) => {
		if (Array.isArray(v.value) && v.value.length === 1) {
			let { before: t, after: n } = s(+g.value.maxRange, v.value[0]);
			return De(e.value, t) || Ee(e.value, n);
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
			"dp--cell-highlight": !L(e) && (I(e) || R(e)) && !F(e) && !o && !j(e) && !(z(e) && u.weekPicker) && !i,
			"dp--cell-highlight-active": !L(e) && (I(e) || R(e)) && F(e),
			"dp--today": !u.noToday && a(e.value, l) && e.current,
			"dp--past": r(e.value, l),
			"dp--future": n(e.value, l)
		};
	}, H = (e) => ({
		"dp--active": F(e),
		"dp--date-hoverable": P(e)
	}), U = (e) => {
		if (v.value && !Array.isArray(v.value)) {
			let t = o(v.value, _.value);
			return {
				...ce(e),
				"dp--range-border-start dp--active": a(t[0], e.value),
				"dp--range-border-end dp--active": a(t[1], e.value),
				"dp--range-preview dp--range-between-week": n(e.value, t[0]) && r(e.value, t[1])
			};
		}
		return { ...ce(e) };
	}, W = (e) => {
		if (v.value && Array.isArray(v.value)) {
			let t = o(v.value[0], _.value), i = v.value[1] ? o(v.value[1], _.value) : [];
			return {
				...ce(e),
				"dp--range-border-start dp--active": a(t[0], e.value) || a(i[0], e.value),
				"dp--range-border-end dp--active": a(t[1], e.value) || a(i[1], e.value),
				"dp--range-preview dp--range-between-week": n(e.value, t[0]) && r(e.value, t[1]) || n(e.value, i[0]) && r(e.value, i[1]),
				"dp--range-between": n(e.value, t[1]) && r(e.value, i[0])
			};
		}
		return { ...ce(e) };
	}, ie = (e) => ({
		isRangeStart: d.value.count > 0 ? e.current && T(e) && N() : T(e) && N(),
		isRangeEnd: d.value.count > 0 ? e.current && T(e, !1) && N() : T(e, !1) && N()
	}), ae = (e) => g.value.enabled && (g.value.fixedStart || g.value.fixedEnd) && Array.isArray(e) && e.length === 2, oe = (e, t, n, r) => !ae(v.value) || !b.value ? !1 : t ? g.value.fixedEnd && a(e.value, b.value) && De(e.value, v.value[0]) && !n : g.value.fixedStart && a(e.value, b.value) && Ee(e.value, v.value[1]) && !r, se = (e, t) => !ae(v.value) || !b.value ? !1 : t ? g.value.fixedEnd && Ee(e.value, b.value) && De(e.value, v.value[0]) : g.value.fixedStart && De(e.value, b.value) && Ee(e.value, v.value[1]), G = (e) => {
		let { isRangeStart: t, isRangeEnd: n } = ie(e);
		return {
			"dp--range-border-start dp--active": t,
			"dp--range-border-end dp--active": n,
			"dp--range-between": z(e) || se(e, !0) || se(e, !1),
			"dp--date-hoverable": a(e.value, b.value) && !t && !n && !u.weekPicker,
			"dp--date-hoverable dp--date-hoverable-start": E(e, !0) || oe(e, !0, t, n),
			"dp--date-hoverable dp--date-hoverable-end": E(e, !1) || oe(e, !1, t, n)
		};
	}, ce = (e) => ({
		...G(e),
		"dp--range-preview dp--cell-auto-range": A(e),
		"dp--range-preview dp--range-border-start dp--cell-auto-range-start": j(e),
		"dp--range-preview dp--range-border-end dp--cell-auto-range-end": k(e)
	}), K = (e) => g.value.enabled ? g.value.autoRange ? ce(e) : u.modelAuto ? {
		...H(e),
		...G(e)
	} : u.weekPicker ? W(e) : G(e) : u.weekPicker ? U(e) : H(e);
	return {
		setHoverDate: x,
		clearHoverDate: ee,
		getDayClassData: (e) => u.hideOffsetDates && !e.current ? {} : {
			...re(e),
			...K(e),
			[p.value.dayClass ? p.value.dayClass(e.value, v.value) : ""]: !0,
			...p.value.calendarCell
		}
	};
}, hr = { key: 0 }, gr = /* @__PURE__ */ d({
	__name: "DatePicker",
	props: /*@__PURE__*/ h({
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	}, Vt),
	emits: [
		"focus-menu",
		"select-date",
		"time-update",
		"auto-apply"
	],
	setup(t, { expose: n, emit: s }) {
		let l = s, { month: d, year: p, modelValue: m, time: h, disabledTimesConfig: _, today: b, validateTime: x, getCalendarDays: ee, getMarker: S, handleArrow: w, handleScroll: T, handleSwipe: E, selectDate: D, updateMonthYear: A, presetDate: j, updateTime: M, assignMonthAndYear: te, setStartTime: N } = pr(l, fe), L = F(), { setHoverDate: B, getDayClassData: V, clearHoverDate: ne } = mr(), { getDate: re, rootEmit: H, rootProps: U, defaults: { multiCalendars: W, timeConfig: ie } } = $(), { getYears: ae, getMonths: oe } = Xt(), { getCellId: se } = qt(), G = I("calendar-header"), ce = I("calendar"), K = I("time-picker"), le = rn(L, en.Calendar), q = rn(L, en.DatePickerHeader), ue = rn(L, en.TimePicker);
		R(W, (e, t) => {
			e.count - t.count > 0 && te();
		}, { deep: !0 });
		let de = r(() => (e) => ee(d.value(e), p.value(e)).map((e) => ({
			...e,
			days: e.days.map((e) => (e.marker = S(e), e.classData = V(e), e))
		})));
		function fe(e) {
			e || e === 0 ? ce.value?.[e]?.triggerTransition(d.value(e), p.value(e)) : ce.value?.forEach((e, t) => e?.triggerTransition(d.value(t), p.value(t)));
		}
		let pe = (e, t = 0) => {
			G.value?.[t]?.toggleMonthPicker(e);
		}, me = (e, t = 0) => {
			G.value?.[t]?.toggleYearPicker(e);
		}, he = (e, t) => {
			K.value?.toggleTimePicker(e, t);
		}, ge = (e, t) => {
			if (!U.range) {
				let n = m.value ? m.value : b, r = t ? re(t) : n, i = e ? Ve(r, { weekStartsOn: 1 }) : _e(r, { weekStartsOn: 1 });
				D({
					value: i,
					current: Y(r) === d.value(0),
					text: "",
					classData: {}
				}), document.getElementById(se(i))?.focus();
			}
		}, ve = (e) => {
			G.value?.[0]?.handleMonthYearChange(e, !0);
		}, J = (e) => {
			A(0, {
				month: d.value(0),
				year: p.value(0) + (e ? 1 : -1),
				fromNav: !0
			});
		}, ye = (e) => {
			H("overlay-toggle", {
				open: !1,
				overlay: e
			}), l("focus-menu");
		};
		return n({
			clearHoverDate: ne,
			presetDate: j,
			handleArrow: w,
			updateMonthYear: A,
			setStartTime: N,
			toggleMonthPicker: pe,
			toggleYearPicker: me,
			toggleTimePicker: he,
			getSidebarProps: () => ({
				modelValue: m,
				month: d,
				year: p,
				time: h,
				updateTime: M,
				updateMonthYear: A,
				selectDate: D,
				presetDate: j
			}),
			changeMonth: ve,
			changeYear: J,
			selectWeekDate: ge
		}), (n, r) => (C(), o(e, null, [u(Tn, { collapse: t.collapse }, {
			default: z(({ instances: s, wrapClass: l }) => [(C(!0), o(e, null, O(s, (e) => (C(), o("div", {
				key: e,
				class: v(l)
			}, [P(U).hideMonthYearSelect ? a("", !0) : (C(), i(ir, {
				key: 0,
				ref_for: !0,
				ref: "calendar-header",
				months: P(oe)(),
				years: P(ae)(),
				month: P(d)(e),
				year: P(p)(e),
				instance: e,
				"menu-wrap-ref": t.menuWrapRef,
				onUpdateMonthYear: (t) => P(A)(e, t),
				onOverlayClosed: ye
			}, c({ _: 2 }, [O(P(q), (e) => ({
				name: e,
				fn: z((t) => [k(n.$slots, e, g({ ref_for: !0 }, t))])
			}))]), 1032, [
				"months",
				"years",
				"month",
				"year",
				"instance",
				"menu-wrap-ref",
				"onUpdateMonthYear"
			])), u(fr, {
				ref_for: !0,
				ref: "calendar",
				"mapped-dates": de.value(e),
				instance: e,
				month: P(d)(e),
				year: P(p)(e),
				onSelectDate: (t) => P(D)(t, e !== 1),
				onSetHoverDate: r[0] ||= (e) => P(B)(e),
				onHandleScroll: (t) => P(T)(t, e),
				onHandleSwipe: (t) => P(E)(t, e)
			}, c({ _: 2 }, [O(P(le), (e) => ({
				name: e,
				fn: z((t) => [k(n.$slots, e, g({ ref_for: !0 }, t))])
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
		}, 8, ["collapse"]), P(ie).enableTimePicker ? (C(), o("div", hr, [k(n.$slots, "time-picker", y(f({
			time: P(h),
			updateTime: P(M)
		})), () => [u(Jn, {
			ref: "time-picker",
			hours: P(h).hours,
			minutes: P(h).minutes,
			seconds: P(h).seconds,
			"disabled-times-config": P(_),
			"validate-time": P(x),
			"no-overlay-focus": t.noOverlayFocus,
			"onUpdate:hours": r[1] ||= (e) => P(M)({
				hours: e,
				minutes: P(h).minutes,
				seconds: P(h).seconds
			}),
			"onUpdate:minutes": r[2] ||= (e) => P(M)({
				hours: P(h).hours,
				minutes: e,
				seconds: P(h).seconds
			}),
			"onUpdate:seconds": r[3] ||= (e) => P(M)({
				hours: P(h).hours,
				minutes: P(h).minutes,
				seconds: e
			})
		}, c({ _: 2 }, [O(P(ue), (e) => ({
			name: e,
			fn: z((t) => [k(n.$slots, e, y(f(t)))])
		}))]), 1032, [
			"hours",
			"minutes",
			"seconds",
			"disabled-times-config",
			"validate-time",
			"no-overlay-focus"
		])])])) : a("", !0)], 64));
	}
}), _r = (e) => {
	let { getDate: t, modelValue: n, year: i, calendars: a, defaults: { highlight: o, range: s, multiDates: c } } = $(), { isDateBetween: l, isDateEqual: u } = qt(), { checkRangeAutoApply: d, handleMultiDatesSelect: f, setMonthOrYearRange: p } = jn();
	gt();
	let { isDisabled: m } = _t(), { formatQuarterText: h } = Yt(), { childMount: g } = ft(), { groupedYears: _, showYearPicker: v, isDisabled: y, selectYear: b, toggleYearPicker: x, handleYearSelect: S, handleYear: C, setStartDate: w } = An(), T = D();
	ee(() => {
		g(), w();
	});
	let E = r(() => (e) => n.value ? Array.isArray(n.value) ? n.value.some((t) => je(e, t)) : je(n.value, e) : !1), O = (e) => {
		if (s.value.enabled) {
			if (Array.isArray(n.value)) {
				let t = u(e, n.value[0]) || u(e, n.value[1]);
				return l(n.value, T.value, e) && !t;
			}
			return !1;
		}
		return !1;
	}, k = (e, t) => e.quarter === Ce(t) && e.year === X(t), A = (e) => typeof o.value == "function" ? o.value({
		quarter: Ce(e),
		year: X(e)
	}) : o.value.quarters.some((t) => k(t, e)), j = r(() => (e) => {
		let n = Z(t(), { year: i.value(e) });
		return he({
			start: He(n),
			end: ve(n)
		}).map((e) => {
			let t = Be(e), n = ge(e), r = m(e), i = O(t), a = A(t);
			return {
				text: h(t, n),
				value: t,
				active: E.value(t),
				highlighted: a,
				disabled: r,
				isBetween: i
			};
		});
	}), M = (t) => {
		f(t, c.value.limit), e("auto-apply", !0);
	}, te = (t) => {
		n.value = p(t), d(n.value, e, n.value.length < 2);
	}, N = (t) => {
		n.value = t, e("auto-apply");
	};
	return {
		groupedYears: _,
		year: i,
		isDisabled: y,
		quarters: j,
		showYearPicker: v,
		modelValue: n,
		selectYear: b,
		toggleYearPicker: x,
		handleYearSelect: S,
		handleYear: C,
		setHoverDate: (e) => {
			T.value = e;
		},
		selectQuarter: (e, t, n) => {
			if (!n) return a.value[t].month = Y(ge(e)), c.value.enabled ? M(e) : s.value.enabled ? te(e) : N(e);
		}
	};
}, vr = { class: "dp--quarter-items" }, yr = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseover"
], br = /* @__PURE__ */ d({
	__name: "QuarterPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(t, { expose: n, emit: r }) {
		let d = r, { defaults: { config: f } } = $(), p = F(), { boolHtmlAttribute: m } = Qt(), h = rn(p, en.YearMode), { groupedYears: _, year: y, isDisabled: x, quarters: ee, modelValue: S, showYearPicker: w, setHoverDate: T, selectQuarter: E, toggleYearPicker: D, handleYearSelect: A, handleYear: M } = _r(d);
		return n({
			getSidebarProps: () => ({
				modelValue: S,
				year: y,
				selectQuarter: E,
				handleYearSelect: A,
				handleYear: M
			}),
			toggleYearPicker: (e) => D(0, e)
		}), (n, r) => (C(), i(Tn, {
			collapse: t.collapse,
			stretch: ""
		}, {
			default: z(({ instances: t, wrapClass: r }) => [(C(!0), o(e, null, O(t, (t) => (C(), o("div", {
				key: t,
				class: v(r)
			}, [s("div", {
				class: "dp-quarter-picker-wrap",
				style: b({ minHeight: `${P(f).modeHeight}px` })
			}, [
				n.$slots["top-extra"] ? k(n.$slots, "top-extra", {
					key: 0,
					value: P(S)
				}) : a("", !0),
				s("div", null, [u(kn, {
					items: P(_)(t),
					instance: t,
					"show-year-picker": P(w)[t],
					year: P(y)(t),
					"is-disabled": (e) => P(x)(t, e),
					onHandleYear: (e) => P(M)(t, e),
					onYearSelect: (e) => P(A)(e, t),
					onToggleYearPicker: (e) => P(D)(t, e?.show)
				}, c({ _: 2 }, [O(P(h), (e) => ({
					name: e,
					fn: z((t) => [k(n.$slots, e, g({ ref_for: !0 }, t))])
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
				s("div", vr, [(C(!0), o(e, null, O(P(ee)(t), (e, r) => (C(), o("div", { key: r }, [s("button", {
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
					onClick: (n) => P(E)(e.value, t, e.disabled),
					onMouseover: (t) => P(T)(e.value)
				}, [k(n.$slots, "quarter", {
					value: e.value,
					text: e.text
				}, () => [l(j(e.text), 1)])], 42, yr)]))), 128))])
			], 4)], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]));
	}
}), xr = [
	"id",
	"tabindex",
	"role",
	"aria-label",
	"aria-modal"
], Sr = {
	key: 0,
	class: "dp--menu-load-container"
}, Cr = {
	key: 1,
	class: "dp--menu-header"
}, wr = ["data-dp-mobile"], Tr = {
	key: 0,
	class: "dp--sidebar-left"
}, Er = ["data-dp-mobile"], Dr = [
	"data-test-id",
	"data-dp-mobile",
	"onClick",
	"onKeydown"
], Or = { class: "dp--instance-calendar" }, kr = {
	key: 2,
	class: "dp--sidebar-right"
}, Ar = {
	key: 2,
	class: "dp--action-extra"
}, jr = /* @__PURE__ */ d({
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
		let u = l, d = F(), { state: p, rootProps: m, defaults: { textInput: h, inline: g, config: _, ui: x, ariaLabels: w }, rootEmit: T, setState: E } = $(), { isMobile: M } = Jt(), { handleEventPropagation: te, getElWithin: L, checkStopPropagation: R, checkKeyDown: B } = Kt(), { selectCurrentDate: V } = dn(u);
		pt();
		let re = I("inner-menu"), U = I("dp-menu"), W = I("dyn-cmp"), ie = D(0), ae = D(!1), oe = D(!1), { executeFlow: se } = dt(W, u), G = (e) => {
			oe.value = !0, _.value.allowPreventDefault && e.preventDefault(), R(e, _.value, !0);
		};
		ee(() => {
			ae.value = !0, ce(), globalThis.addEventListener("resize", ce);
			let e = H(U);
			e && !h.value.enabled && !g.value.enabled && E("menuFocused", !0), e && (e.addEventListener("pointerdown", G), e.addEventListener("mousedown", G), T("menu-mounted", e)), document.addEventListener("mousedown", Te);
		}), S(() => {
			globalThis.removeEventListener("resize", ce), document.removeEventListener("mousedown", Te);
			let e = H(U);
			e && (e.removeEventListener("pointerdown", G), e.removeEventListener("mousedown", G), T("menu-unmounted", e));
		});
		let ce = () => {
			let e = H(re);
			e && (ie.value = e.getBoundingClientRect().width);
		}, K = r(() => m.monthPicker ? Nn : m.yearPicker ? Fn : m.timePicker ? Zn : m.quarterPicker ? br : gr), le = () => {
			let e = H(U);
			e && e.focus({ preventScroll: !0 });
		}, q = r(() => W.value?.getSidebarProps() || {}), ue = rn(d, en.ActionRow), de = rn(d, en.PassTrough), fe = r(() => ({
			"dp--menu-unclickable dp--menu-disabled": m.disabled,
			"dp--menu-unclickable dp--menu-readonly": m.readonly,
			"dp--menu-unclickable dp-menu-loading": m.loading
		})), pe = r(() => ({
			"dp--menu": !0,
			"dp--menu-index": !g.value.enabled,
			"dp--relative": g.value.enabled,
			...x.value.menu
		})), me = (e) => {
			R(e, _.value, !0);
		}, he = (e) => {
			_.value.escClose && (u("close-picker"), te(e, _.value));
		}, ge = (e) => {
			m.arrowNavigation || (e === st.left || e === st.up ? ye("handleArrow", st.left, 0, e === st.up) : ye("handleArrow", st.right, 0, e === st.down));
		}, _e = (e) => {
			E("shiftKeyInMenu", e.shiftKey), _.value.tabOutClosesMenu && !m.hideMonthYearSelect && e.code === Q.tab && e.target.classList.contains("dp--menu") && p.shiftKeyInMenu && (e.preventDefault(), R(e, _.value, !0), u("close-picker"));
		}, ve = (e) => {
			W.value?.toggleTimePicker(!1, !1), W.value?.toggleMonthPicker(!1, e), W.value?.toggleYearPicker(!1, e);
		}, J = (e, t = 0) => e === "month" ? W.value?.toggleMonthPicker(!0, t) : e === "year" ? W.value?.toggleYearPicker(!0, t) : e === "time" ? W.value?.toggleTimePicker(!0) : ve(t), ye = (e, ...t) => {
			W.value?.[e] && W.value?.[e](...t);
		}, be = (e) => {
			ye("presetDate", N(e));
		}, xe = () => {
			ye("clearHoverDate");
		}, Se = (e, t) => {
			ye("updateMonthYear", e, t);
		}, Y = (e, t) => {
			e.preventDefault(), ge(t);
		}, Ce = (e) => {
			_.value.allowPreventDefault && (e.preventDefault(), R(e, _.value, !0));
		}, we = (e) => {
			if (_.value.onInternalKeydown?.(e) !== !1) {
				if (_e(e), e.key === Q.home || e.key === Q.end) return ye("selectWeekDate", e.key === Q.home, e.target.getAttribute("id"));
				switch ((e.key === Q.pageUp || e.key === Q.pageDown) && (e.shiftKey ? (ye("changeYear", e.key === Q.pageUp), L(U.value, "overlay-year")?.focus()) : (ye("changeMonth", e.key === Q.pageUp), L(U.value, e.key === Q.pageUp ? "action-prev" : "action-next")?.focus()), e.target.getAttribute("id") && U.value?.focus({ preventScroll: !0 })), e.key) {
					case Q.esc: return he(e);
					case Q.enter: return Ce(e);
					case Q.arrowLeft: return Y(e, st.left);
					case Q.arrowRight: return Y(e, st.right);
					case Q.arrowUp: return Y(e, st.up);
					case Q.arrowDown: return Y(e, st.down);
					default: return;
				}
			}
		}, Te = (e) => {
			g.value.enabled && !g.value.input && !U.value?.contains(e.target) && oe.value && (oe.value = !1, u("menu-blur"));
		};
		return n({
			updateMonthYear: Se,
			switchView: J,
			onValueCleared: () => {
				W.value?.setStartTime?.();
			},
			executeFlow: se
		}), (n, r) => (C(), o("div", {
			id: P(m).menuId,
			ref: "dp-menu",
			tabindex: P(g).enabled ? void 0 : "0",
			role: P(g).enabled ? void 0 : "dialog",
			"aria-label": P(w)?.menu,
			"aria-modal": P(g).enabled ? void 0 : !0,
			class: v(pe.value),
			onMouseleave: xe,
			onClick: me,
			onKeydown: we
		}, [
			(P(m).disabled || P(m).readonly) && P(g).enabled || P(m).loading ? (C(), o("div", {
				key: 0,
				class: v(fe.value)
			}, [P(m).loading ? (C(), o("div", Sr, [...r[5] ||= [s("span", { class: "dp--menu-loader" }, null, -1)]])) : a("", !0)], 2)) : a("", !0),
			n.$slots["menu-header"] ? (C(), o("div", Cr, [k(n.$slots, "menu-header")])) : a("", !0),
			k(n.$slots, "arrow"),
			s("div", {
				ref: "inner-menu",
				class: v({
					"dp--menu-content-wrapper": P(m).presetDates?.length || !!n.$slots["left-sidebar"] || !!n.$slots["right-sidebar"],
					"dp--menu-content-wrapper-collapsed": t.collapse && (P(m).presetDates?.length || !!n.$slots["left-sidebar"] || !!n.$slots["right-sidebar"])
				}),
				"data-dp-mobile": P(M),
				style: b({ "--dp-menu-width": `${ie.value}px` })
			}, [
				n.$slots["left-sidebar"] ? (C(), o("div", Tr, [k(n.$slots, "left-sidebar", y(f(q.value)))])) : a("", !0),
				P(m).presetDates.length ? (C(), o("div", {
					key: 1,
					class: v({
						"dp--preset-dates-collapsed": t.collapse,
						"dp--preset-dates": !0
					}),
					"data-dp-mobile": P(M)
				}, [(C(!0), o(e, null, O(P(m).presetDates, (r, i) => (C(), o(e, { key: i }, [r.slot ? k(n.$slots, r.slot, {
					key: 0,
					presetDate: be,
					label: r.label,
					value: r.value
				}) : (C(), o("button", {
					key: 1,
					type: "button",
					style: b(r.style || {}),
					class: v(["dp--btn dp--preset-range", { "dp--preset-range-collapsed": t.collapse }]),
					"data-test-id": r.testId ?? void 0,
					"data-dp-mobile": P(M),
					onClick: ne((e) => be(r.value), ["prevent"]),
					onKeydown: (e) => P(B)(e, () => be(r.value), !0)
				}, j(r.label), 47, Dr))], 64))), 128))], 10, Er)) : a("", !0),
				s("div", Or, [(C(), i(A(K.value), {
					ref: "dyn-cmp",
					collapse: t.collapse,
					"no-overlay-focus": t.noOverlayFocus,
					"menu-wrap-ref": U.value,
					onFocusMenu: le,
					onSelectDate: r[0] ||= (e) => n.$emit("select-date"),
					onAutoApply: r[1] ||= (e) => n.$emit("auto-apply", e),
					onTimeUpdate: r[2] ||= (e) => n.$emit("time-update")
				}, c({ _: 2 }, [O(P(de), (e) => ({
					name: e,
					fn: z((t) => [k(n.$slots, e, y(f({ ...t })))])
				}))]), 1064, [
					"collapse",
					"no-overlay-focus",
					"menu-wrap-ref"
				]))]),
				n.$slots["right-sidebar"] ? (C(), o("div", kr, [k(n.$slots, "right-sidebar", y(f(q.value)))])) : a("", !0)
			], 14, wr),
			n.$slots["action-extra"] ? (C(), o("div", Ar, [n.$slots["action-extra"] ? k(n.$slots, "action-extra", {
				key: 0,
				selectCurrentDate: P(V)
			}) : a("", !0)])) : a("", !0),
			!P(m).autoApply || P(_).keepActionRow ? (C(), i(gn, {
				key: 3,
				"menu-mount": ae.value,
				"calendar-width": ie.value,
				onClosePicker: r[3] ||= (e) => n.$emit("close-picker"),
				onSelectDate: r[4] ||= (e) => n.$emit("select-date"),
				onSelectNow: P(V)
			}, c({ _: 2 }, [O(P(ue), (e) => ({
				name: e,
				fn: z((t) => [k(n.$slots, e, y(f(t)))])
			}))]), 1032, [
				"menu-mount",
				"calendar-width",
				"onSelectNow"
			])) : a("", !0)
		], 42, xr));
	}
}), Mr = d({
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
}), Nr = ["data-dp-mobile"], Pr = /* @__PURE__ */ d({
	__name: "VueDatePicker",
	setup(e, { expose: t }) {
		let { rootEmit: l, setState: d, inputValue: p, modelValue: m, rootProps: h, defaults: { inline: g, config: x, textInput: w, range: T, multiDates: E, teleport: A, floatingConfig: j, flow: M } } = $(), { validateDate: N, isValidTime: L } = _t(), { menuTransition: B, showTransition: V } = ht(), { isMobile: ne } = Jt(), { findNextFocusableElement: H, getNumVal: U } = Kt(), W = F(), K = D(!1), le = D(g.value.enabled), q = D(g.value.enabled || h.centered), ue = te(h, "modelValue"), de = te(h, "timezone"), fe = I("dp-menu-wrap"), pe = I("dp-menu"), me = I("input-cmp"), he = I("picker-wrapper"), ge = I("menu-arrow"), _e = D(!1), ve = D(!1), J = D(!1), ye = D(!0), { floatingStyles: be, middlewareData: xe, placement: Se, y: Y } = ce(me, fe, {
			strategy: j.value.strategy,
			placement: j.value.placement,
			middleware: ((e) => (j.value.flip && e.push(oe(typeof j.value.flip == "object" ? j.value.flip : {})), j.value.shift && e.push(G(typeof j.value.shift == "object" ? j.value.shift : {})), j.value.arrow && e.push(ie({ element: j.value.arrow === !0 ? ge : j.value.arrow })), e))([se(j.value.offset)]),
			whileElementsMounted: j.value.autoUpdate === !1 ? void 0 : ae
		});
		ee(() => {
			Te(h.modelValue), _().then(() => {
				g.value.enabled || globalThis.addEventListener("resize", Ne);
			}), g.value.enabled && (K.value = !0), globalThis.addEventListener("keyup", Pe), globalThis.addEventListener("keydown", Z);
		}), S(() => {
			g.value.enabled || globalThis.removeEventListener("resize", Ne), globalThis.removeEventListener("keyup", Pe), globalThis.removeEventListener("keydown", Z);
		});
		let Ce = an(W, h.presetDates), we = rn(W, en.Input);
		R([ue, de], () => {
			Te(ue.value);
		}, { deep: !0 }), R([Se, Y], () => {
			!g.value.enabled && !h.centered && ye.value && (q.value = !1, _().then(() => {
				ye.value = !1, q.value = !0;
			}));
		});
		let { parseExternalModelValue: Te, emitModelValue: X, formatInputValue: Ee, checkBeforeEmit: De } = mt(), Oe = r(() => ({
			"dp--main": !0,
			"dp--theme-dark": h.dark,
			"dp--theme-light": !h.dark,
			"dp--flex-display": g.value.enabled,
			"dp--flex-display-collapsed": J.value,
			"dp--flex-display-with-input": g.value.input
		})), ke = r(() => h.dark ? "dp--theme-dark" : "dp--theme-light"), Ae = r(() => g.value.enabled && (h.timePicker || h.monthPicker || h.yearPicker || h.quarterPicker)), je = () => me.value?.$el?.getBoundingClientRect() ?? {
			width: 0,
			left: 0,
			right: 0
		}, Me = () => {
			K.value && x.value.closeOnScroll && Ue();
		}, Ne = () => {
			let e = pe.value?.$el.getBoundingClientRect().width ?? 0;
			J.value = document.body.offsetWidth <= e;
		}, Pe = (e) => {
			if (e.key === "Tab" && !g.value.enabled && x.value.tabOutClosesMenu) {
				let e = he.value?.contains(document.activeElement), t = fe.value?.contains(document.activeElement);
				!e && !t && Ue();
			}
			ve.value = e.shiftKey;
		}, Z = (e) => {
			ve.value = e.shiftKey;
		}, Fe = () => {
			!h.disabled && !h.readonly && (ye.value = !0, le.value = !0, K.value = !0, K.value && l("open"), K.value || He(), Te(h.modelValue));
		}, Ie = () => {
			p.value = "", He(), pe.value?.onValueCleared(), me.value?.setParsedDate(null), l("update:model-value", null), l("cleared"), x.value.closeOnClearValue && Ue();
		}, Le = () => {
			let e = m.value;
			return !e || !Array.isArray(e) && N(e) ? !0 : Array.isArray(e) ? E.value.enabled || e.length === 2 && N(e[0]) && N(e[1]) ? !0 : T.value.partialRange && !h.timePicker ? N(e[0]) : !1 : !1;
		}, Re = () => {
			De() && Le() ? (X(), Ue(!1, !0)) : l("invalid-select");
		}, ze = (e) => {
			Be(), X(), x.value.closeOnAutoApply && !e && Ue(!1, !0);
		}, Be = () => {
			me.value && w.value.enabled && me.value.setParsedDate(m.value);
		}, Ve = (e = !1) => {
			h.autoApply && L(m.value) && Le() && (T.value.enabled && Array.isArray(m.value) ? (T.value.partialRange || m.value.length === 2) && ze(e) : ze(e));
		}, He = () => {
			w.value.enabled || (m.value = null);
		}, Ue = (e = !1, t = !1) => {
			ye.value = !0, e && m.value && x.value.setDateOnMenuClose && Re(), g.value.enabled || (K.value && (K.value = !1, d("menuFocused", !1), d("shiftKeyInMenu", !1), l("closed"), !t && p.value && Te(ue.value)), He(), l("blur"));
		}, We = () => {
			!g.value.enabled && !K.value && (le.value = !1);
		}, Ge = (e, t, n = !1) => {
			if (!e) {
				m.value = null;
				return;
			}
			let r = Array.isArray(e) ? e.every((e) => N(e)) : N(e), i = L(e);
			r && i ? (d("isTextInputDate", !0), m.value = e, t ? (_e.value = n, Re(), l("text-submit")) : h.autoApply && Ve(!0), _().then(() => {
				d("isTextInputDate", !1);
			})) : l("invalid-date", e);
		}, Ke = () => {
			h.autoApply && L(m.value) && X(), Be();
		}, qe = () => K.value ? Ue() : Fe(), Je = (e) => {
			m.value = e;
		}, Ye = () => {
			w.value.enabled && (d("isInputFocused", !0), Ee()), l("focus");
		}, Xe = () => {
			w.value.enabled && (d("isInputFocused", !1), Te(h.modelValue), _e.value && H(he.value, ve.value)?.focus()), l("blur");
		}, Ze = (e, t) => {
			pe.value && pe.value.updateMonthYear(t ?? 0, {
				month: U(e.month),
				year: U(e.year)
			});
		}, Qe = (e) => {
			Te(e ?? h.modelValue);
		}, $e = (e, t) => {
			pe.value?.switchView(e, t);
		}, et = (e, t) => {
			if (K.value) return x.value.onClickOutside ? x.value.onClickOutside(e, t) : Ue(!0);
		};
		return re(fe, (e) => et(Le, e), { ignore: [me] }), t({
			closeMenu: Ue,
			selectDate: Re,
			clearValue: Ie,
			openMenu: Fe,
			onScroll: Me,
			formatInputValue: Ee,
			updateInternalModelValue: Je,
			setMonthYear: Ze,
			parseModel: Qe,
			switchView: $e,
			toggleMenu: qe,
			executeFlow: (e) => {
				pe.value?.executeFlow(e ?? M.value?.steps?.at(0));
			},
			getDpWrapMenuRef: () => fe,
			dpMenuRef: () => pe,
			dpWrapMenuRef: () => fe,
			inputRef: () => me
		}), (e, t) => (C(), o("div", {
			ref: "picker-wrapper",
			class: v(Oe.value),
			"data-datepicker-instance": "",
			"data-dp-mobile": P(ne)
		}, [u(un, {
			ref: "input-cmp",
			"is-menu-open": K.value,
			onClear: Ie,
			onOpen: Fe,
			onSetInputDate: Ge,
			onSetEmptyDate: P(X),
			onSelectDate: Re,
			onToggle: qe,
			onClose: Ue,
			onFocus: Ye,
			onBlur: Xe,
			onRealBlur: t[0] ||= (e) => P(d)("isInputFocused", !1)
		}, c({ _: 2 }, [O(P(we), (t) => ({
			name: t,
			fn: z((n) => [k(e.$slots, t, y(f(n)))])
		}))]), 1032, ["is-menu-open", "onSetEmptyDate"]), u(P(Mr), {
			to: P(A),
			disabled: !P(A)
		}, {
			default: z(() => [le.value ? (C(), o("div", {
				key: 0,
				ref: "dp-menu-wrap",
				class: v({
					"dp--menu-wrapper": !P(g).enabled,
					"dp--outer-menu-wrap": !0,
					"dp--centered": P(h).centered
				}),
				style: b(!P(g).enabled && !P(h).centered ? P(be) : void 0)
			}, [u(n, {
				name: P(B)(P(Se).startsWith("top")),
				css: P(V) && !P(g).enabled && !P(h).centered && q.value,
				appear: "",
				onAfterLeave: We
			}, {
				default: z(() => [K.value && q.value ? (C(), i(jr, {
					key: 0,
					ref: "dp-menu",
					class: v({ [ke.value]: !0 }),
					"no-overlay-focus": Ae.value,
					collapse: J.value,
					"get-input-rect": je,
					onClosePicker: Ue,
					onSelectDate: Re,
					onAutoApply: Ve,
					onTimeUpdate: Ke,
					onMenuBlur: t[1] ||= (e) => P(l)("blur")
				}, c({ _: 2 }, [O(P(Ce), (t) => ({
					name: t,
					fn: z((n) => [k(e.$slots, t, y(f({ ...n })))])
				})), !P(g).enabled && !P(h).centered && P(j).arrow === !0 ? {
					name: "arrow",
					fn: z(() => [s("div", {
						ref: "menu-arrow",
						class: v({
							"dp--arrow-top": P(Se).includes("bottom"),
							"dp--arrow-bottom": P(Se).includes("top")
						}),
						style: b({
							left: P(xe).arrow?.x == null ? "" : `${P(xe).arrow.x - P(xe).arrow.centerOffset}px`,
							top: P(xe).arrow?.y == null ? "" : `${P(xe).arrow.y}px`
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
		}, 8, ["to", "disabled"])], 10, Nr));
	}
}), Fr = /* @__PURE__ */ d({
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
	}, Ht),
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
		nt(a, r);
		let o = an(F(), a.presetDates);
		return t(Zt(I("date-picker"))), (e, t) => (C(), i(Pr, { ref: "date-picker" }, c({ _: 2 }, [O(P(o), (t) => ({
			name: t,
			fn: z((n) => [k(e.$slots, t, y(f(n)))])
		}))]), 1536));
	}
});
//#endregion
export { Ke as TZDate, Fr as VueDatePicker, lt as WeekStart };

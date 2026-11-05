import { Fragment as e, Teleport as t, Transition as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createSlots as c, createTextVNode as l, createVNode as u, defineComponent as d, guardReactiveProps as f, h as p, inject as m, mergeDefaults as h, mergeProps as g, nextTick as _, normalizeClass as v, normalizeProps as y, normalizeStyle as b, onBeforeUpdate as x, onMounted as ee, onUnmounted as S, openBlock as C, provide as w, reactive as T, readonly as E, ref as D, renderList as O, renderSlot as k, resolveDynamicComponent as A, toDisplayString as j, toRaw as M, toRef as te, toValue as N, unref as P, useSlots as F, useTemplateRef as I, vShow as L, watch as R, withCtx as z, withDirectives as B, withKeys as V, withModifiers as ne } from "vue";
import { onClickOutside as re, unrefElement as H, useSwipe as U, useTemplateRefsList as W } from "@vueuse/core";
import { arrow as ie, autoUpdate as ae, flip as oe, offset as G, shift as K, useFloating as se } from "@floating-ui/vue";
import { add as q, addDays as ce, addMonths as J, addYears as le, differenceInCalendarDays as ue, differenceInMonths as de, differenceInYears as fe, eachDayOfInterval as pe, eachQuarterOfInterval as me, endOfQuarter as he, endOfWeek as ge, endOfYear as _e, format as ve, getDay as ye, getHours as be, getISOWeek as xe, getMinutes as Se, getMonth as Y, getQuarter as Ce, getSeconds as we, getWeek as Te, getYear as X, isAfter as Ee, isBefore as De, isDate as Oe, isEqual as ke, isSameDay as Ae, isSameQuarter as je, isValid as Me, parse as Ne, roundToNearestMinutes as Pe, set as Z, setMilliseconds as Fe, setMonth as Ie, setSeconds as Le, setYear as Re, startOfMonth as ze, startOfQuarter as Be, startOfWeek as Ve, startOfYear as He, sub as Ue, subDays as We, subMonths as Ge, subYears as Ke } from "date-fns";
import { TZDate as qe, TZDate as Je } from "@date-fns/tz";
//#region src/VueDatePicker/components/Icons/CalendarIcon.ts
function Ye() {
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
function Xe() {
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
function Ze() {
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
function Qe() {
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
function $e() {
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
function et() {
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
function tt() {
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
var nt = Symbol("ContextKey"), rt = (e, t) => {
	let { setTimeModelValue: n } = qt(), i = Kt(e), a = D(null), o = T({
		menuFocused: !1,
		shiftKeyInMenu: !1,
		isInputFocused: !1,
		isTextInputDate: !1,
		arrowNavigationLevel: 0
	}), s = i.getDate(/* @__PURE__ */ new Date()), c = D(""), l = D([{
		month: Y(s),
		year: X(s)
	}]), u = T({
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
	w(nt, {
		rootProps: e,
		defaults: i,
		modelValue: d,
		state: E(o),
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
}, it = /* @__PURE__ */ function(e) {
	return e.month = "month", e.year = "year", e;
}({}), at = /* @__PURE__ */ function(e) {
	return e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e;
}({}), ot = /* @__PURE__ */ function(e) {
	return e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e;
}({}), st = [
	"timestamp",
	"date",
	"iso"
], ct = /* @__PURE__ */ function(e) {
	return e.up = "up", e.down = "down", e.left = "left", e.right = "right", e;
}({}), Q = /* @__PURE__ */ function(e) {
	return e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e;
}({}), lt = /* @__PURE__ */ function(e) {
	return e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e;
}({}), ut = /* @__PURE__ */ function(e) {
	return e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e;
}({}), dt = Symbol("FlowKey"), ft = (e, t) => {
	let { rootEmit: n, rootProps: i, defaults: { timeConfig: a, flow: o } } = $(), s = D(), c = T({
		[at.timePicker]: !a.value.enableTimePicker || i.timePicker || i.monthPicker || i.quarterPicker,
		[at.calendar]: !1,
		[at.header]: !1
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
		e && (s.value = e), f(ot.month, "toggleMonthPicker", !0), f(ot.year, "toggleYearPicker", !0), f(ot.calendar, "toggleTimePicker", !1), f(ot.time, "toggleTimePicker", !0), (s.value === ot.hours || s.value === ot.minutes || s.value === ot.seconds) && f(s.value, "toggleTimePicker", !0, s.value);
	};
	return w(dt, {
		childMount: u,
		updateFlowStep: d,
		flowStep: E(s)
	}), { executeFlow: p };
}, $ = () => {
	let e = m(nt);
	if (!e) throw Error("Can't use context");
	return e;
}, pt = () => {
	let e = m(dt);
	if (!e) throw Error("Can't use flow");
	return e;
}, mt = () => {
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
}, ht = () => {
	let { checkPartialRangeValue: e, checkRangeEnabled: t, isValidDate: n } = vt(), { convertType: r, errorMapper: i } = qt(), { getDate: a, rootEmit: o, state: s, rootProps: c, inputValue: l, defaults: { textInput: u, range: d, multiDates: f, timeConfig: p, formats: m, weekStart: h }, modelValue: g, updateTime: _ } = $(), { setTime: v, getWeekFromDate: y } = Jt(), { formatSelectedDate: b, formatForTextInput: x } = Xt();
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
	}, z = (e) => c.modelType ? st.includes(c.modelType) ? a(e) : c.modelType === "format" && typeof m.value.input == "string" ? Ne(e, m.value.input, a(), { locale: c.locale }) : Ne(e, c.modelType, a(), { locale: c.locale }) : a(e), B = (e) => e ? c.modelType ? c.modelType === "timestamp" ? +e : c.modelType === "iso" ? e.toISOString() : c.modelType === "format" && typeof m.value.input == "string" ? b(e) : b(e, c.modelType) : e : null, V = (e) => {
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
}, gt = () => {
	let { defaults: { transitions: e } } = $(), t = r(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), n = r(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
	return {
		transitionName: t,
		showTransition: !!e.value,
		menuTransition: n
	};
}, _t = (e) => {
	let { modelValue: t } = $();
	R(t, (t, n) => {
		e && JSON.stringify(t ?? {}) !== JSON.stringify(n ?? {}) && e();
	}, { deep: !0 });
}, vt = () => {
	let { defaults: { safeDates: e, range: t, multiDates: n, filters: i, timeConfig: a }, rootProps: o, getDate: s } = $(), { getMapKeyType: c, getMapDate: l, errorMapper: u, convertType: d } = qt(), { isDateBefore: f, isDateAfter: p, isDateEqual: m, resetDate: h, getDaysInBetween: g, setTimeValue: _, getTimeObj: v, setTime: y } = Jt(), b = (t) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(s(t)) : !!l(t, e.value.disabledDates) : !1, x = (t) => e.value.maxDate ? o.yearPicker ? X(t) > X(e.value.maxDate) : p(t, e.value.maxDate) : !1, ee = (t) => e.value.minDate ? o.yearPicker ? X(t) < X(e.value.minDate) : f(t, e.value.minDate) : !1, S = (e) => {
		if (!e) return !1;
		let t = x(e), n = ee(e), r = b(e), a = i.value.months.map((e) => +e).includes(Y(e)), s = i.value.weekDays?.length ? i.value.weekDays.some((t) => +t === ye(e)) : !1, c = D(e), l = X(e), u = l < +o.yearRange[0] || l > +o.yearRange[1];
		return !(t || n || r || a || u || s || c);
	}, C = (t, n) => f(...H(e.value.minDate, t, n)) || m(...H(e.value.minDate, t, n)), w = (t, n) => p(...H(e.value.maxDate, t, n)) || m(...H(e.value.maxDate, t, n)), T = (t, n, r) => {
		let i = !1;
		return e.value.maxDate && r && w(t, n) && (i = !0), e.value.minDate && !r && C(t, n) && (i = !0), i;
	}, E = (t, n, r, i) => {
		let a = !1;
		return i && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? a = T(t, n, r) : (e.value.minDate && C(t, n) || e.value.maxDate && w(t, n)) && (a = !0) : a = !0, a;
	}, D = (t) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !l(t, e.value.allowedDates, c(o.monthPicker, o.yearPicker)) : !1, O = (e) => !S(e), k = (e) => t.value.noDisabledRange ? !pe({
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
			let i = ue(e, n[r]), a = g(n[r], e), o = a.length === 1 ? 0 : a.filter((e) => O(e)).length, s = Math.abs(i) - (t.value.minMaxRawRange ? 0 : o);
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
		let i = r ? J(t, 1) : Ge(t, 1), a = [Y(i), X(i)];
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
function yt(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function bt(e) {
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
function xt(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Ct(s, (e) => e.test(o)) : St(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function St(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Ct(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function wt(e) {
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
var Tt = {
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
}, Et = (e, t, n) => {
	let r, i = Tt[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, Dt = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, Ot = (e, t, n, r) => Dt[e], kt = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: bt({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: bt({
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
	month: bt({
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
	day: bt({
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
	dayPeriod: bt({
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
}, At = {
	ordinalNumber: wt({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (e) => parseInt(e, 10)
	}),
	era: xt({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: xt({
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
	month: xt({
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
	day: xt({
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
	dayPeriod: xt({
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
}, jt = {
	code: "en-US",
	formatDistance: Et,
	formatLong: {
		date: yt({
			formats: {
				full: "EEEE, MMMM do, y",
				long: "MMMM do, y",
				medium: "MMM d, y",
				short: "MM/dd/yyyy"
			},
			defaultWidth: "full"
		}),
		time: yt({
			formats: {
				full: "h:mm:ss a zzzz",
				long: "h:mm:ss a z",
				medium: "h:mm:ss a",
				short: "h:mm a"
			},
			defaultWidth: "full"
		}),
		dateTime: yt({
			formats: {
				full: "{{date}} 'at' {{time}}",
				long: "{{date}} 'at' {{time}}",
				medium: "{{date}}, {{time}}",
				short: "{{date}}, {{time}}"
			},
			defaultWidth: "full"
		})
	},
	formatRelative: Ot,
	localize: kt,
	match: At,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
}, Mt = {
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
}, Nt = {
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
}, Pt = {
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
}, Ft = {
	dates: [],
	years: [],
	months: [],
	quarters: [],
	weeks: [],
	weekdays: [],
	options: { highlightDisabled: !1 }
}, It = {
	showSelect: !0,
	showCancel: !0,
	showNow: !1,
	showPreview: !0,
	selectBtnLabel: "Select",
	cancelBtnLabel: "Cancel",
	nowBtnLabel: "Now",
	nowBtnRound: void 0
}, Lt = {
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
}, Rt = {
	menuAppearTop: "dp-menu-appear-top",
	menuAppearBottom: "dp-menu-appear-bottom",
	open: "dp-slide-down",
	close: "dp-slide-up",
	next: "calendar-next",
	previous: "calendar-prev",
	vNext: "dp-slide-up",
	vPrevious: "dp-slide-down"
}, zt = {
	weekDays: [],
	months: [],
	years: [],
	times: {
		hours: [],
		minutes: [],
		seconds: []
	}
}, Bt = {
	month: "LLL",
	year: "yyyy",
	weekDay: "EEEEEE",
	quarter: "MMMM",
	day: "d",
	input: void 0,
	preview: void 0
}, Vt = {
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
}, Ht = {
	menuWrapRef: null,
	collapse: !1
}, Ut = {
	yearRange: () => [1900, 2100],
	ui: () => ({}),
	locale: () => jt,
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
}, Wt = {
	name: void 0,
	required: !1,
	autocomplete: "off",
	state: void 0,
	clearable: !0,
	alwaysClearable: !1,
	hideInputIcon: !1,
	id: void 0,
	inputmode: "none"
}, Gt = {
	type: "local",
	hideOnOffsetDates: !1,
	label: "W"
}, Kt = (e) => {
	let { getMapKey: t, getMapKeyType: n, getTimeObjFromCurrent: i } = qt();
	function a(t, n) {
		let r;
		return r = e.timezone ? new Je(t ?? /* @__PURE__ */ new Date(), e.timezone) : t ? new Date(t) : /* @__PURE__ */ new Date(), n ? Z(r, {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		}) : r;
	}
	let o = (t, n, r = 1) => e.timezone ? new Je(t, n, r, e.timezone) : new Date(t, n, r), s = () => {
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
		...Lt,
		...e.ariaLabels
	})), _ = r(() => ({
		...zt,
		...e.filters
	})), v = r(() => typeof e.transitions == "boolean" ? e.transitions ? Rt : !1 : {
		...Rt,
		...e.transitions
	}), y = r(() => ({
		...It,
		...e.actionRow
	})), b = r(() => typeof e.textInput == "object" ? {
		...Pt,
		...e.textInput,
		format: typeof e.textInput.format == "string" ? e.textInput.format : O.value.input,
		pattern: e.textInput.format ?? O.value.input,
		enabled: !0
	} : {
		...Pt,
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
		...Nt,
		...e.config
	})), S = r(() => typeof e.highlight == "function" ? e.highlight : {
		...Ft,
		...e.highlight
	}), C = r(() => typeof e.weekNumbers == "object" ? {
		type: e.weekNumbers?.type ?? Gt.type,
		hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? Gt.hideOnOffsetDates,
		label: e.weekNumbers.label ?? Gt.label
	} : e.weekNumbers ? Gt : void 0), w = r(() => typeof e.multiDates == "boolean" ? {
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
		markers: e.markers?.length ? new Map(e.markers.map((e) => [t(a(e.date), lt.DATE), M(e)])) : null
	})), E = r(() => typeof e.range == "object" ? {
		enabled: !0,
		...Mt,
		...e.range
	} : {
		enabled: e.range,
		...Mt
	}), D = r(() => Object.fromEntries(Object.keys(e.ui).map((t) => {
		let n = t, r = e.ui[n];
		return n === "dayClass" ? [n, e.ui[n]] : [t, typeof e.ui[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((e) => [e, !0]))];
	}))), O = r(() => ({
		...Bt,
		...e.formats,
		input: e.formats?.input ?? c(),
		preview: e.formats?.preview ?? e.formats?.input ?? c()
	})), k = r(() => {
		if (e.teleport) return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
	}), A = r(() => ({
		...Vt,
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
				...Wt,
				inputmode: t,
				...e.inputAttrs
			} : {
				...Wt,
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
		weekStart: r(() => e.weekStart || e.weekStart === 0 || e.weekStart === "0" ? +e.weekStart : ye(Ve(a(), { locale: e.locale }))),
		getDate: a,
		getDateFromParts: o
	};
}, qt = () => {
	let e = (e, t) => ve(e, t ?? lt.DATE), t = (e, t) => e ? lt.MONTH_AND_YEAR : t ? lt.YEAR : lt.DATE, n = (t, n, r) => n.get(e(t, r)), r = (e) => e, i = (e) => e === 0 ? e : !e || Number.isNaN(+e) ? null : +e, a = () => [
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
}, Jt = () => {
	let { getDate: e } = $(), { getMapDate: t, getGroupedList: n } = qt(), r = (t, n) => {
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
	}, a = (e, t) => [Ve(e, { weekStartsOn: +t }), ge(e, { weekStartsOn: +t })], o = (e, t) => !e || !t ? !1 : De(r(e), r(t)), s = (e, t) => !e || !t ? !1 : ke(r(e), r(t)), c = (e, t) => !e || !t ? !1 : Ee(r(e), r(t)), l = (e, t, n) => e?.[0] && e?.[1] ? c(n, e[0]) && o(n, e[1]) : e?.[0] && t ? c(n, e[0]) && o(n, t) || o(n, e[0]) && c(n, t) : !1, u = (e, t) => pe({
		start: c(e, t) ? t : e,
		end: c(t, e) ? t : e
	}), d = (e) => `dp-${ve(e, "yyyy-MM-dd")}`, f = (t) => r(Z(e(t), { date: 1 })), p = (t, n) => {
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
			before: We(r(t), e),
			after: ce(r(t), e)
		}),
		isModelAuto: (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1,
		matchDate: (n, r) => n ? r ? r instanceof Map ? !!t(n, r) : r(e(n)) : !1 : !0,
		checkHighlightMonth: (e, t, n) => typeof e == "function" ? e({
			month: t,
			year: n
		}) : e.months.some((e) => e.month === t && e.year === n),
		checkHighlightYear: (e, t) => typeof e == "function" ? e(t) : e.years.includes(t)
	};
}, Yt = () => {
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
}, Xt = () => {
	let { getDate: e, state: t, modelValue: n, rootProps: r, defaults: { formats: i, textInput: a } } = $(), o = (t) => ve(Re(e(), t), i.value.year, { locale: r.locale }), s = (t) => ve(Ie(e(), t), i.value.month, { locale: r.locale }), c = (e) => ve(e, i.value.weekDay, { locale: r.locale }), l = (e) => ve(e, i.value.quarter, { locale: r.locale }), u = (e, t) => [e, t].map((e) => l(e)).join("-"), d = (e) => ve(e, i.value.day, { locale: r.locale }), f = (e, t, n) => {
		let o = n ? i.value.preview : i.value.input;
		if (!e) return "";
		if (typeof o == "function") return o(e);
		let s = t ?? o, c = { locale: r.locale };
		return Array.isArray(e) ? `${ve(e[0], s, c)}${r.modelAuto && !e[1] ? "" : a.value.rangeSeparator}${e[1] ? ve(e[1], s, c) : ""}` : ve(e, s, c);
	}, p = () => {
		let e = (e) => ve(e, a.value.format, { locale: r.locale });
		return Array.isArray(n.value) ? `${e(n.value[0])}${a.value.rangeSeparator}${n.value[1] ? e(n.value[1]) : ""}` : "";
	};
	return {
		formatYear: o,
		formatMonth: s,
		formatWeekDay: c,
		formatQuarter: l,
		formatSelectedDate: f,
		formatForTextInput: () => t.isInputFocused && n.value ? Array.isArray(n.value) ? p() : typeof a.value.format == "function" ? a.value.format(n.value) : ve(n.value, a.value.format, { locale: r.locale }) : f(n.value),
		formatPreview: (e) => f(e, void 0, !0),
		formatQuarterText: u,
		formatDay: d
	};
}, Zt = () => {
	let { rootProps: e } = $(), { formatYear: t, formatMonth: n } = Xt();
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
}, Qt = (e) => ({
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
}), $t = () => ({ boolHtmlAttribute: (e) => e ? !0 : void 0 }), en = () => {
	let { getDate: e, rootProps: t, defaults: { textInput: n, startTime: i, timeConfig: a } } = $(), { getTimeObjFromCurrent: o } = qt(), s = D(!1), c = r(() => Array.isArray(i.value) ? i.value[0] : i.value ?? o(e(), {}, a.value.enableSeconds)), l = (e, t) => {
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
}, tn = /* @__PURE__ */ function(e) {
	return e.Input = "input", e.DatePicker = "date-picker", e.Calendar = "calendar", e.DatePickerHeader = "date-picker-header", e.Menu = "menu", e.ActionRow = "action-row", e.TimePicker = "time-picker", e.TimeInput = "time-input", e.PassTrough = "pass-trough", e.MonthPicker = "month-picker", e.YearMode = "year-mode", e.QuarterPicker = "quarter-picker", e.YearPicker = "year-picker", e;
}({}), nn = [
	"time-input",
	"time-picker",
	"pass-trough"
], rn = [
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
		use: nn
	},
	{
		name: "hours-overlay-header",
		use: nn
	},
	{
		name: "minutes-overlay-value",
		use: nn
	},
	{
		name: "minutes-overlay-header",
		use: nn
	},
	{
		name: "seconds-overlay-value",
		use: nn
	},
	{
		name: "seconds-overlay-header",
		use: nn
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
], an = (e, t) => rn.filter((n) => e[n.name] && n.use.includes(t)).map((e) => e.name), on = (e, t) => rn.map((e) => e.name).concat(t?.filter((e) => e.slot).map((e) => e.slot) ?? []).filter((t) => !!e[t]), sn = {
	key: 1,
	class: "dp--input-wrap"
}, cn = [
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
], ln = {
	key: 1,
	class: "dp--clear-btn"
}, un = ["aria-label"], dn = /* @__PURE__ */ d({
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
		let c = n, l = e, { rootEmit: d, inputValue: f, rootProps: p, defaults: { textInput: m, ariaLabels: h, inline: g, config: y, range: b, multiDates: x, ui: ee, inputAttrs: S } } = $(), { checkMinMaxRange: w, isValidDate: T } = vt(), { parseFreeInput: E, textPasted: O, createMaskedValue: A, applyMaxValues: j } = en(), { checkKeyDown: M, checkStopPropagation: te } = qt(), { boolHtmlAttribute: N } = $t(), F = I("dp-input"), L = D(null), R = D(!1), z = r(() => ({
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
			m.value.enabled ? (U(e.target.value), m.value.enterSubmit && T(L.value) && f.value !== "" ? (c("set-input-date", L.value, !0), L.value = null) : m.value.enterSubmit && f.value === "" && (L.value = null, c("clear"))) : G(e);
		}, ae = (e, t) => {
			m.value.enabled && m.value.tabSubmit && !t && U(e.target.value), m.value.enabled && m.value.tabSubmit && T(L.value) && f.value !== "" ? (c("set-input-date", L.value, !0, !0), L.value = null) : m.value.enabled && m.value.tabSubmit && f.value === "" && (L.value = null, c("clear"));
		}, oe = () => {
			R.value = !0, c("focus"), _().then(() => {
				m.value.enabled && m.value.selectOnFocus && F.value?.select();
			});
		}, G = (e) => {
			if (te(e, y.value, !0), m.value.enabled && m.value.openMenu && !g.value.input) {
				if (m.value.openMenu === "open" && !l.isMenuOpen) return c("open");
				if (m.value.openMenu === "toggle") return c("toggle");
			} else m.value.enabled || c("toggle");
		}, K = () => {
			c("real-blur"), R.value = !1, (!l.isMenuOpen || g.value.enabled && g.value.input) && c("blur"), (p.autoApply && m.value.enabled && L.value && !l.isMenuOpen || m.value.applyOnBlur) && (c("set-input-date", L.value), c("select-date"), L.value = null);
		}, se = (e) => {
			te(e, y.value, !0), c("clear");
		}, q = () => {
			c("close");
		}, ce = (e) => {
			if (e.key === "Tab" && ae(e), e.key === "Enter" && (ie(e), y.value.allowPreventDefault && (e.preventDefault(), te(e, y.value, !0))), e.key === "Escape" && m.value.escClose && q(), !m.value.enabled) {
				if (e.code === "Tab") return;
				e.preventDefault();
			}
		}, J = () => {
			F.value?.focus({ preventScroll: !0 });
		}, le = (e) => {
			L.value = e;
		}, ue = (e) => {
			e.key === Q.tab && ae(e, !0);
		};
		return t({
			focusInput: J,
			setParsedDate: le
		}), (t, n) => (C(), o("div", { onClick: G }, [!t.$slots["dp-input"] && !P(g).enabled ? k(t.$slots, "trigger", { key: 0 }) : a("", !0), !t.$slots.trigger && (!P(g).enabled || P(g).input) ? (C(), o("div", sn, [
			!t.$slots.trigger && (!P(g).enabled || P(g).enabled && P(g).input) ? k(t.$slots, "dp-input", {
				key: 0,
				value: P(f),
				isMenuOpen: e.isMenuOpen,
				onInput: W,
				onEnter: ie,
				onTab: ae,
				onClear: se,
				onBlur: K,
				onKeypress: ce,
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
				onBlur: K,
				onFocus: oe,
				onKeypress: ce,
				onKeydown: n[0] ||= (e) => ce(e),
				onPaste: H,
				onInvalid: n[1] ||= (e) => P(d)("invalid", e)
			}, null, 42, cn)]) : a("", !0),
			s("div", { onClick: n[4] ||= (e) => c("toggle") }, [t.$slots["input-icon"] && !P(S).hideInputIcon ? (C(), o("span", {
				key: 0,
				class: "dp--input-icon",
				onClick: n[2] ||= (e) => c("toggle")
			}, [k(t.$slots, "input-icon")])) : a("", !0), !t.$slots["input-icon"] && !P(S).hideInputIcon && !t.$slots["dp-input"] ? (C(), i(P(Ye), {
				key: 1,
				"aria-label": P(h)?.calendarIcon,
				class: "dp--input-icon dp--input-icons",
				onClick: n[3] ||= (e) => c("toggle")
			}, null, 8, ["aria-label"])) : a("", !0)]),
			t.$slots["clear-icon"] && (P(S).alwaysClearable || P(f) && P(S).clearable && !P(p).disabled && !P(p).readonly) ? (C(), o("span", ln, [k(t.$slots, "clear-icon", { clear: se })])) : a("", !0),
			!t.$slots["clear-icon"] && (P(S).alwaysClearable || P(S).clearable && P(f) && !P(p).disabled && !P(p).readonly) ? (C(), o("button", {
				key: 2,
				"aria-label": P(h)?.clearInput,
				class: "dp--clear-btn",
				type: "button",
				"data-test-id": "clear-input-value-btn",
				onKeydown: n[5] ||= (e) => P(M)(e, () => se(e), !0, P(y).spaceConfirm, ue),
				onClick: n[6] ||= ne((e) => se(e), ["prevent"])
			}, [u(P(Xe), { class: "dp--input-icons" })], 40, un)) : a("", !0)
		])) : a("", !0)]));
	}
}), fn = (e) => {
	let { rootProps: t, modelValue: n, getDate: r, defaults: { range: i, multiDates: a } } = $(), { isDateBefore: o } = Jt(), s = () => {
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
}, pn = {
	ref: "action-row",
	class: "dp--action-row"
}, mn = ["title"], hn = {
	ref: "action-buttons-container",
	class: "dp--action-buttons",
	"data-dp-element": "action-row"
}, gn = ["disabled"], _n = /* @__PURE__ */ d({
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
		let i = n, c = t, { rootEmit: u, rootProps: d, modelValue: f, defaults: { actionRow: p, multiCalendars: m, inline: h, range: g, multiDates: _, formats: v } } = $(), { selectCurrentDate: y } = fn(i), { isTimeValid: x, isMonthValid: w } = vt(), { formatPreview: T } = Xt(), { checkKeyDown: E, convertType: O } = qt(), { boolHtmlAttribute: A } = $t(), M = I("action-buttons-container"), te = I("action-row"), N = D(!1), F = D({});
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
		return (t, n) => (C(), o("div", pn, [t.$slots["action-row"] ? k(t.$slots, "action-row", {
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
		}) : a("", !0), !t.$slots["action-preview"] && N.value ? (C(), o(e, { key: 1 }, [l(j(H.value), 1)], 64)) : a("", !0)], 12, mn)) : a("", !0), s("div", hn, [t.$slots["action-buttons"] ? k(t.$slots, "action-buttons", {
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
			}, j(P(p).selectBtnLabel), 41, gn)) : a("", !0)
		], 64))], 512)], 64))], 512));
	}
}), vn = () => {
	let { rootProps: e, defaults: { multiCalendars: t } } = $();
	return {
		hideNavigationButtons: r(() => (t) => e.hideNavigation?.includes(t)),
		showLeftIcon: r(() => (e) => t.value.count ? t.value.solo ? !0 : e === 0 : !0),
		showRightIcon: r(() => (e) => t.value.count ? t.value.solo ? !0 : e === t.value.count - 1 : !0)
	};
}, yn = ["role", "tabindex"], bn = {
	ref: "header",
	class: "dp--selection-grid-header"
}, xn = ["aria-label"], Sn = [
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
], Cn = ["aria-label", "data-dp-action-element"], wn = /* @__PURE__ */ d({
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
		let i = n, c = t, { setState: u, defaults: { ariaLabels: d, config: f } } = $(), { hideNavigationButtons: p } = vn(), { handleEventPropagation: m, checkKeyDown: h } = qt(), g = I("toggle-button"), y = I("header"), w = I("overlay-container"), T = I("grid-wrap"), E = W(), A = D(!1), M = D(null), te = D(), N = D(0);
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
		}, G = (e) => {
			f.value.escClose && (oe(), m(e, f.value));
		}, K = (e) => {
			te.value = e, i("hover-value", e);
		}, se = (e) => {
			if (e.key === Q.esc) return G(e);
		}, q = (e) => {
			if (e.key === Q.enter) return oe();
		};
		return (n, r) => (C(), o("div", {
			ref: "grid-wrap",
			class: v(F.value),
			style: b(z.value),
			role: t.useRelative ? void 0 : "presentation",
			tabindex: t.useRelative ? void 0 : "0",
			onKeydown: se,
			onClick: r[0] ||= ne(() => {}, ["prevent"])
		}, [
			s("div", bn, [k(n.$slots, "header")], 512),
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
				onMouseover: (t) => K(e.value)
			}, [s("div", { class: v(e.className) }, [k(n.$slots, "item", { item: e }, () => [l(j(e.text), 1)])], 2)], 42, Sn))), 128))], 2))), 128))])], 14, xn),
			n.$slots["button-icon"] ? B((C(), o("button", {
				key: 0,
				ref: "toggle-button",
				type: "button",
				"aria-label": P(d)?.toggleOverlay,
				class: v(re.value),
				tabindex: "0",
				"data-dp-action-element": t.level ?? 1,
				onClick: oe,
				onKeydown: q
			}, [k(n.$slots, "button-icon")], 42, Cn)), [[L, !P(p)(t.type)]]) : a("", !0)
		], 46, yn));
	}
}), Tn = ["data-dp-mobile"], En = /* @__PURE__ */ d({
	__name: "InstanceWrap",
	props: {
		stretch: { type: Boolean },
		collapse: { type: Boolean }
	},
	setup(e) {
		let { defaults: { multiCalendars: t } } = $(), { isMobile: n } = Yt(), i = r(() => t.value.count > 0 ? [...Array.from({ length: t.value.count }).keys()] : [0]);
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
		})], 10, Tn));
	}
}), Dn = [
	"data-dp-element",
	"tabindex",
	"inert",
	"aria-hidden",
	"disabled",
	"aria-label",
	"aria-disabled"
], On = /* @__PURE__ */ d({
	__name: "ArrowBtn",
	props: {
		ariaLabel: {},
		elName: {},
		disabled: { type: Boolean },
		inactive: { type: Boolean }
	},
	emits: ["activate", "set-ref"],
	setup(e, { emit: t }) {
		let { boolHtmlAttribute: n } = $t(), { checkKeyDown: r } = qt(), i = t;
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
		}, [s("span", { class: v(["dp--inner-nav", { "dp--inner-nav-disabled": e.disabled }]) }, [k(t.$slots, "default")], 2)], 40, Dn));
	}
}), kn = [
	"aria-label",
	"data-test-id",
	"aria-expanded"
], An = /* @__PURE__ */ d({
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
		let f = d, p = t, { showRightIcon: m, showLeftIcon: h } = vn(), { rootProps: g, defaults: { config: _, ariaLabels: y, ui: b } } = $(), { showTransition: x, transitionName: ee } = gt(), { formatYear: S } = Xt(), { boolHtmlAttribute: w } = $t(), T = D(!1), E = r(() => S(p.year)), O = (e) => {
			T.value = !T.value, f("toggle-year-picker", { show: e });
		}, A = (e) => {
			T.value = !1, f("year-select", e);
		}, M = (e = !1) => {
			f("handle-year", e);
		};
		return (r, d) => (C(), o(e, null, [s("div", { class: v(["dp--year-mode-picker", { "dp--hidden-el": T.value }]) }, [
			P(h)(t.instance) ? (C(), i(On, {
				key: 0,
				ref: "mpPrevIconRef",
				"aria-label": P(y)?.prevYear,
				disabled: P(w)(t.isDisabled(!1)),
				class: v(P(b)?.navBtnPrev),
				onActivate: d[0] ||= (e) => M(!1)
			}, {
				default: z(() => [r.$slots["arrow-left"] ? k(r.$slots, "arrow-left", { key: 0 }) : a("", !0), r.$slots["arrow-left"] ? a("", !0) : (C(), i(P(Ze), { key: 1 }))]),
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
			}) : a("", !0), r.$slots.year ? a("", !0) : (C(), o(e, { key: 1 }, [l(j(t.year), 1)], 64))], 40, kn),
			P(m)(t.instance) ? (C(), i(On, {
				key: 1,
				ref: "mpNextIconRef",
				"aria-label": P(y)?.nextYear,
				disabled: P(w)(t.isDisabled(!0)),
				class: v(P(b)?.navBtnNext),
				onActivate: d[3] ||= (e) => M(!0)
			}, {
				default: z(() => [r.$slots["arrow-right"] ? k(r.$slots, "arrow-right", { key: 0 }) : a("", !0), r.$slots["arrow-right"] ? a("", !0) : (C(), i(P(Qe), { key: 1 }))]),
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
			default: z(() => [t.showYearPicker ? (C(), i(wn, {
				key: 0,
				items: t.items,
				"is-last": P(g).autoApply && !P(_).keepActionRow,
				"overlay-label": P(y)?.yearPicker?.(!0),
				type: "year",
				onToggle: O,
				onSelected: d[4] ||= (e) => A(e)
			}, c({
				"button-icon": z(() => [r.$slots["calendar-icon"] ? k(r.$slots, "calendar-icon", { key: 0 }) : a("", !0), r.$slots["calendar-icon"] ? a("", !0) : (C(), i(P(Ye), { key: 1 }))]),
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
}), jn = () => {
	let { getDate: e, rootEmit: t, state: n, month: i, year: a, modelValue: o, calendars: s, rootProps: c, defaults: { multiCalendars: l, range: u, safeDates: d, filters: f, highlight: p } } = $(), { resetDate: m, getYearFromDate: h, checkHighlightYear: g, groupListAndMap: _ } = Jt(), { getYears: v } = Zt(), { validateMonthYear: y, checkMinMaxValue: b } = vt(), x = D([!1]), S = r(() => v()), C = r(() => (t, n) => {
		let r = Z(m(e()), {
			month: i.value(t),
			year: a.value(t)
		});
		return y(n ? _e(r) : He(r), c.preventMinMaxNavigation, n);
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
				year: X(le(n, 1))
			};
		}
	}, E = (t) => {
		if (!t) return T();
		let n = Z(e(), s.value[t]);
		return s.value[0].year = X(Ke(n, l.value.count - 1)), T();
	}, O = (e, t) => {
		let n = fe(t, e);
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
			overlay: ot.year
		}) : t("overlay-toggle", {
			open: !1,
			overlay: ot.year
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
}, Mn = () => {
	let { isDateAfter: e, isDateBefore: t, isDateEqual: n } = Jt(), { getDate: r, rootEmit: i, rootProps: a, modelValue: o, defaults: { range: s } } = $();
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
}, Nn = (e) => {
	let { getDate: t, rootEmit: n, state: i, calendars: a, year: o, modelValue: s, rootProps: c, defaults: { range: l, highlight: u, safeDates: d, filters: f, multiDates: p } } = $();
	_t(() => {
		i.isTextInputDate && z(X(t(c.startDate)), 0);
	});
	let { checkMinMaxRange: m, checkMinMaxValue: h } = vt(), { isDateBetween: g, resetDateTime: v, resetDate: y, getMinMonth: b, getMaxMonth: x, checkHighlightMonth: S, groupListAndMap: C } = Jt(), { checkRangeAutoApply: w, getRangeWithFixedDate: T, handleMultiDatesSelect: E, setMonthOrYearRange: O, setPresetDate: k } = Mn(), { padZero: A } = qt(), { getMonths: j, isOutOfYearRange: M } = Zt(), { updateFlowStep: te, childMount: N } = pt(), P = r(() => j()), F = D(null), { groupedYears: I, showYearPicker: L, isDisabled: R, selectYear: z, toggleYearPicker: B, handleYearSelect: V, handleYear: ne, setStartDate: re } = jn();
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
		let n = W(e, t.value), r = ve(G(t.value, e), "MMMM", { locale: c.locale });
		return {
			active: n,
			disabled: h(t.value, b(o.value(e), d.value.minDate), x(o.value(e), d.value.maxDate)) || fe(d.value.disabledDates, o.value(e), t.value) || f.value.months?.includes(t.value) || !pe(d.value.allowedDates, o.value(e), t.value) || M(o.value(e)),
			isBetween: ae(t.value, e),
			highlighted: S(u.value, t.value, o.value(e)),
			ariaLabel: r
		};
	})), G = (e, n) => Z(y(t()), {
		month: e,
		year: o.value(n)
	}), K = (n, r) => {
		s.value = Z(s.value ? s.value : y(t()), {
			month: n,
			year: o.value(r)
		}), e("auto-apply"), te("month", !0);
	}, se = (t, n) => {
		let r = G(t, n);
		l.value.fixedEnd || l.value.fixedStart ? s.value = T(r) : s.value ? m(r, s.value) && (s.value = O(G(t, n))) : s.value = [G(t, n)], _().then(() => {
			w(s.value, e, s.value.length < 2);
		});
	}, q = (t, n) => {
		E(G(t, n), p.value.limit), e("auto-apply", !0);
	}, ce = (e, t) => (a.value[t].month = e, le(t, a.value[t].year, e), p.value.enabled ? q(e, t) : l.value.enabled ? se(e, t) : K(e, t)), J = (e, t) => {
		z(e, t), le(t, e, null);
	}, le = (e, t, r) => {
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
	}, ue = (e, t) => {
		F.value = G(e, t);
	}, de = (t) => {
		k({ value: t }), e("auto-apply");
	}, fe = (e, n, r) => {
		if (e instanceof Map) {
			let t = `${A(r + 1)}-${n}`;
			return e.size ? e.has(t) : !1;
		}
		return typeof e == "function" ? e(v(Z(t(), {
			month: r,
			year: n
		}), !0)) : !1;
	}, pe = (e, t, n) => {
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
		presetDate: de,
		setHoverDate: ue,
		selectMonth: ce,
		selectYear: J,
		getModelMonthYear: U
	};
}, Pn = /* @__PURE__ */ d({
	__name: "MonthPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(t, { expose: n, emit: r }) {
		let s = r, l = F(), { rootProps: d, defaults: { config: f } } = $(), p = an(l, tn.YearMode), { groupedMonths: m, groupedYears: h, year: _, isDisabled: y, showYearPicker: b, modelValue: x, presetDate: ee, setHoverDate: S, selectMonth: w, selectYear: T, toggleYearPicker: E, handleYearSelect: D, handleYear: A, getModelMonthYear: j } = Nn(s);
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
		}), (n, r) => (C(), i(En, {
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
			}), () => [u(wn, {
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
				header: z(() => [u(An, {
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
}), Fn = (e) => {
	let { rootEmit: t, getDate: n, state: i, modelValue: a, rootProps: o, defaults: { highlight: s, multiDates: c, filters: l, range: u, safeDates: d } } = $(), { getYears: f } = Zt(), { isDateBetween: p, resetDate: m, resetDateTime: h, getYearFromDate: g, checkHighlightYear: v, groupListAndMap: y } = Jt(), { checkRangeAutoApply: b, setMonthOrYearRange: x } = Mn(), { checkMinMaxValue: S, checkMinMaxRange: C } = vt();
	_t(() => {
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
}, In = /* @__PURE__ */ d({
	__name: "YearPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(e, { expose: t, emit: n }) {
		let r = n, { modelValue: s, defaults: { config: l }, rootProps: u } = $(), { groupedYears: d, focusYear: f, selectYear: p, setHoverValue: m } = Fn(r);
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
		}))) : (C(), i(wn, {
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
}), Ln = {
	key: 0,
	class: "dp--time-input"
}, Rn = ["data-compact", "data-collapsed"], zn = [
	"data-test-id",
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"onKeydown",
	"onClick",
	"onMousedown"
], Bn = [
	"aria-label",
	"aria-expanded",
	"disabled",
	"data-dp-action-element",
	"data-test-id",
	"onKeydown",
	"onClick"
], Vn = [
	"data-test-id",
	"aria-label",
	"data-dp-action-element",
	"disabled",
	"onKeydown",
	"onClick",
	"onMousedown"
], Hn = { key: 0 }, Un = [
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"data-compact"
], Wn = /* @__PURE__ */ d({
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
		let p = f, m = t, { getDate: h, rootEmit: g, rootProps: _, defaults: { ariaLabels: y, filters: b, config: x, range: S, multiCalendars: w, timeConfig: E } } = $(), { checkKeyDown: M, hoursToAmPmHours: te } = qt(), { boolHtmlAttribute: N } = $t(), { sanitizeTime: F, groupListAndMap: I } = Jt(), { transitionName: L, showTransition: R } = gt(), B = T({
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
		})), oe = (e, t) => S.value.enabled && !S.value.disableTimeRangeValidation ? !m.validateTime(e, t) : !1, G = (e, t) => {
			if (S.value.enabled && !S.value.disableTimeRangeValidation) {
				let n = t ? +E.value[`${e}Increment`] : -+E.value[`${e}Increment`], r = m[e] + n;
				return !m.validateTime(e, r);
			}
			return !1;
		}, K = r(() => (e) => !ye(+m[e] + +E.value[`${e}Increment`], e) || G(e, !0) || m.disabled), se = r(() => (e) => !ye(m[e] - +E.value[`${e}Increment`], e) || G(e, !1) || m.disabled), ce = (e, t) => q(Z(h(), e), t), J = (e, t) => Ue(Z(h(), e), t), le = r(() => ({
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
				let e = Oe(+m.hours);
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
				disabled: b.value.times[e].includes(t.value) || !ye(t.value, e) || me(e, t.value) || oe(e, t.value)
			}));
		}, _e = (e) => e >= 0 ? e : 59, ve = (e) => e >= 0 ? e : 23, ye = (e, t) => {
			let n = _.minTime ? U(F(_.minTime)) : null, r = _.maxTime ? U(F(_.maxTime)) : null, i = U(F(ae.value, t, t === "minutes" || t === "seconds" ? _e(e) : ve(e)));
			return n && r ? (De(i, r) || ke(i, r)) && (Ee(i, n) || ke(i, n)) : n ? Ee(i, n) || ke(i, n) : r ? De(i, r) || ke(i, r) : !0;
		}, xe = (e) => E.value[`no${e[0].toUpperCase() + e.slice(1)}Overlay`] || m.disabled, Y = (e) => {
			xe(e) || (B[e] = !B[e], B[e] ? (H.value = !0, p("overlay-opened", e)) : (H.value = !1, p("overlay-closed", e)));
		}, Ce = (e) => e === "hours" ? be : e === "minutes" ? Se : we, Te = () => {
			re.value && clearTimeout(re.value);
		}, X = (e, t = !0, n) => {
			let r = t ? ce : J, i = t ? +E.value[`${e}Increment`] : -+E.value[`${e}Increment`];
			ye(+m[e] + i, e) && p(`update:${e}`, Ce(e)(r({ [e]: +m[e] }, { [e]: +E.value[`${e}Increment`] }))), !n?.keyboard && x.value.timeArrowHoldThreshold && (re.value = setTimeout(() => {
				X(e, t);
			}, x.value.timeArrowHoldThreshold));
		}, Oe = (e) => E.value.is24 ? e : (e >= 12 ? V.value = "PM" : V.value = "AM", te(e)), Ae = () => {
			V.value === "PM" ? (V.value = "AM", p("update:hours", m.hours - 12)) : (V.value = "PM", p("update:hours", m.hours + 12)), g("am-pm-change", V.value);
		}, je = (e) => {
			B[e] = !0;
		}, Me = (e, t) => (Y(e), p(`update:${e}`, t));
		return d({ openChildCmp: je }), (r, d) => P(_).disabled ? a("", !0) : (C(), o("div", Ln, [
			(C(!0), o(e, null, O(de.value, (n, i) => (C(), o("div", {
				key: i,
				class: v(le.value),
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
						"dp--inc-dec-button-disabled": K.value(n.type),
						"dp--hidden-el": H.value
					}),
					"data-test-id": `${n.type}-time-inc-btn-${m.order}`,
					"aria-label": P(y)?.incrementValue(n.type),
					tabindex: "0",
					disabled: P(N)(t.disabled),
					"data-dp-action-element": W.value,
					onKeydown: (e) => P(M)(e, () => X(n.type, !0, { keyboard: !0 }), !0),
					onClick: (e) => P(x).timeArrowHoldThreshold ? void 0 : X(n.type, !0),
					onMousedown: (e) => P(x).timeArrowHoldThreshold ? X(n.type, !0) : void 0,
					onMouseup: Te
				}, [P(E).timePickerInline ? k(r.$slots, "tp-inline-arrow-up", { key: 1 }, () => [d[1] ||= s("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-l" }, null, -1), d[2] ||= s("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-r" }, null, -1)]) : k(r.$slots, "arrow-up", { key: 0 }, () => [u(P(et))])], 42, zn),
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
					disabled: P(N)(xe(n.type)),
					tabindex: "0",
					"data-dp-action-element": W.value,
					"data-test-id": `${n.type}-toggle-overlay-btn-${m.order}`,
					onKeydown: (e) => P(M)(e, () => Y(n.type), !0),
					onClick: (e) => Y(n.type)
				}, [k(r.$slots, n.type, {
					text: pe.value(n.type).text,
					value: pe.value(n.type).value
				}, () => [l(j(pe.value(n.type).text), 1)])], 42, Bn),
				s("button", {
					type: "button",
					class: v({
						"dp--btn-base dp--bg-none": !0,
						"dp--inc-dec-button": !P(E).timePickerInline,
						"dp--inc-dec-button-inline": P(E).timePickerInline,
						"dp--tp-inline-btn-bottom": P(E).timePickerInline,
						"dp--inc-dec-button-disabled": se.value(n.type),
						"dp--hidden-el": H.value
					}),
					"data-test-id": `${n.type}-time-dec-btn-${m.order}`,
					"aria-label": P(y)?.decrementValue(n.type),
					tabindex: "0",
					"data-dp-action-element": W.value,
					disabled: P(N)(t.disabled),
					onKeydown: (e) => P(M)(e, () => X(n.type, !1, { keyboard: !0 }), !0),
					onClick: (e) => P(x).timeArrowHoldThreshold ? void 0 : X(n.type, !1),
					onMousedown: (e) => P(x).timeArrowHoldThreshold ? X(n.type, !1) : void 0,
					onMouseup: Te
				}, [P(E).timePickerInline ? k(r.$slots, "tp-inline-arrow-down", { key: 1 }, () => [d[3] ||= s("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-l" }, null, -1), d[4] ||= s("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-r" }, null, -1)]) : k(r.$slots, "arrow-down", { key: 0 }, () => [u(P(tt))])], 42, Vn)
			], 64))], 10, Rn))), 128)),
			P(E).is24 ? a("", !0) : (C(), o("div", Hn, [k(r.$slots, "am-pm-button", {
				toggle: Ae,
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
				onClick: Ae,
				onKeydown: d[0] ||= (e) => P(M)(e, () => Ae(), !0)
			}, j(V.value), 41, Un)])])),
			(C(!0), o(e, null, O(fe.value, (e) => (C(), i(n, {
				key: e,
				name: P(L)(B[e.type]),
				css: P(R)
			}, {
				default: z(() => [B[e.type] ? (C(), i(wn, {
					key: 0,
					items: ge(e.type),
					"is-last": P(_).autoApply && !P(x).keepActionRow,
					type: e.type,
					"aria-labels": P(y),
					level: P(E).timePickerInline || P(_).timePicker ? 1 : 2,
					"overlay-label": P(y).timeOverlay?.(e.type),
					onSelected: (t) => Me(e.type, t),
					onToggle: (t) => Y(e.type)
				}, c({
					"button-icon": z(() => [k(r.$slots, "clock-icon", {}, () => [r.$slots["clock-icon"] ? a("", !0) : (C(), i(A(P(E).timePickerInline ? P(Ye) : P($e)), { key: 0 }))])]),
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
					fn: z(() => [k(r.$slots, `${e.type}-overlay-header`, { toggle: () => Y(e.type) })]),
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
}), Gn = ["data-dp-mobile"], Kn = ["aria-label", "tabindex"], qn = [
	"role",
	"aria-label",
	"tabindex"
], Jn = ["aria-label"], Yn = /* @__PURE__ */ d({
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
		let f = d, p = t, { rootEmit: m, setState: h, modelValue: y, rootProps: x, defaults: { ariaLabels: w, textInput: T, config: E, range: A, timeConfig: j } } = $(), { isModelAuto: M } = Jt(), { checkKeyDown: te, findFocusableEl: N } = qt(), { transitionName: R, showTransition: V } = gt(), { hideNavigationButtons: ne } = vn(), { isMobile: re } = Yt(), { childMount: H } = pt(), U = F(), W = I("overlay"), ie = I("close-tp-btn"), ae = I("tp-input"), oe = D(!1);
		ee(() => {
			H(x.timePicker ? void 0 : at.timePicker);
		}), S(() => {
			K.value && h("arrowNavigationLevel", 0);
		});
		let G = r(() => A.value.enabled && x.modelAuto ? M(y.value) : !0), K = D(!1), se = (e) => ({
			hours: Array.isArray(p.hours) ? p.hours[e] : p.hours,
			minutes: Array.isArray(p.minutes) ? p.minutes[e] : p.minutes,
			seconds: Array.isArray(p.seconds) ? p.seconds[e] : p.seconds
		}), q = r(() => {
			let e = [];
			if (A.value.enabled) for (let t = 0; t < 2; t++) e.push(se(t));
			else e.push(se(0));
			return e;
		}), ce = (e, t = "") => {
			let n = e !== K.value;
			K.value = e, h("arrowNavigationLevel", +!!e), n && m("overlay-toggle", {
				open: e,
				overlay: ot.time
			}), _().then(() => {
				t !== "" && ae.value?.[0] && ae.value[0].openChildCmp(t);
			});
		}, J = r(() => ({
			"dp--btn-base dp--bg-none": !0,
			"dp--button": !0,
			"dp--button-bottom": x.autoApply && !E.value.keepActionRow
		})), le = an(U, tn.TimeInput), ue = (e, t, n) => A.value.enabled ? t === 0 ? [e, q.value[1][n]] : [q.value[0][n], e] : e, de = (e) => {
			f("update:hours", e);
		}, fe = (e) => {
			f("update:minutes", e);
		}, pe = (e) => {
			f("update:seconds", e);
		}, me = () => {
			if (W.value && !T.value.enabled && !p.noOverlayFocus) {
				let e = N(W.value);
				e && e.focus({ preventScroll: !0 });
			}
		}, he = (e) => {
			oe.value = !1, m("overlay-toggle", {
				open: !1,
				overlay: e
			});
		}, ge = (e) => {
			oe.value = !0, m("overlay-toggle", {
				open: !0,
				overlay: e
			});
		};
		return l({ toggleTimePicker: ce }), (r, l) => (C(), o("div", {
			class: "dp--tp-wrap",
			"data-dp-mobile": P(re)
		}, [!P(x).timePicker && !P(j).timePickerInline ? B((C(), o("button", {
			key: 0,
			ref: "open-tp-btn",
			type: "button",
			"data-dp-action-element": "0",
			class: v({
				...J.value,
				"dp--hidden-el": K.value
			}),
			"aria-label": P(w)?.openTimePicker,
			tabindex: t.noOverlayFocus ? void 0 : 0,
			"data-test-id": "open-time-picker-btn",
			onKeydown: l[0] ||= (e) => P(te)(e, () => ce(!0)),
			onClick: l[1] ||= (e) => ce(!0)
		}, [k(r.$slots, "clock-icon", {}, () => [u(P($e))])], 42, Kn)), [[L, !P(ne)("time")]]) : a("", !0), u(n, {
			name: P(R)(K.value),
			css: P(V) && !P(j).timePickerInline
		}, {
			default: z(() => [K.value || P(x).timePicker || P(j).timePickerInline ? (C(), o("div", {
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
				setHours: de,
				setMinutes: fe,
				setSeconds: pe
			}, () => [s("div", { class: v(P(j).timePickerInline ? "dp--flex" : "dp--overlay-row dp--flex-row") }, [(C(!0), o(e, null, O(q.value, (e, n) => B((C(), i(Wn, {
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
				"validate-time": (e, r) => t.validateTime(e, ue(r, n, e)),
				"onUpdate:hours": (e) => de(ue(e, n, "hours")),
				"onUpdate:minutes": (e) => fe(ue(e, n, "minutes")),
				"onUpdate:seconds": (e) => pe(ue(e, n, "seconds")),
				onMounted: me,
				onOverlayClosed: he,
				onOverlayOpened: ge
			}, c({ _: 2 }, [O(P(le), (e) => ({
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
			])), [[L, n === 0 ? !0 : G.value]])), 128))], 2)]), !P(x).timePicker && !P(j).timePickerInline ? B((C(), o("button", {
				key: 0,
				ref: "close-tp-btn",
				"data-dp-action-element": "1",
				type: "button",
				class: v({
					...J.value,
					"dp--hidden-el": oe.value
				}),
				"aria-label": P(w)?.closeTimePicker,
				tabindex: "0",
				onKeydown: l[2] ||= (e) => P(te)(e, () => ce(!1)),
				onClick: l[3] ||= (e) => ce(!1)
			}, [k(r.$slots, "calendar-icon", {}, () => [u(P(Ye))])], 42, Jn)), [[L, !P(ne)("time")]]) : a("", !0)], 2)], 14, qn)) : a("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 8, Gn));
	}
}), Xn = () => {
	let { getDate: e, modelValue: t, time: n, rootProps: i, defaults: { range: a, timeConfig: o, safeDates: s } } = $(), { updateFlowStep: c } = pt(), { isDateEqual: l, setTime: u } = Jt(), d = (e, t) => Array.isArray(n[e]) ? n[e][t] : n[e], f = (e) => o.value.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[e] : n.seconds : 0, p = (t, r) => t ? u(r === void 0 ? {
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
}, Zn = (e) => {
	let { getDate: t, time: n, modelValue: r, state: i, defaults: { startTime: a, range: o, timeConfig: s } } = $(), { getTimeObj: c } = Jt();
	_t(() => {
		i.isTextInputDate && b();
	});
	let { updateTimeValues: l, getSetDateTime: u, assignTime: d, assignStartTime: f, disabledTimesConfig: p, validateTime: m } = Xn(), h = (e) => {
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
}, Qn = /* @__PURE__ */ d({
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
		let r = n, a = an(F(), tn.TimePicker), o = I("time-input"), { time: l, modelValue: d, disabledTimesConfig: p, updateTime: m, validateTime: h } = Zn(r);
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
		}), (e, t) => (C(), i(En, {
			"multi-calendars": 0,
			stretch: ""
		}, {
			default: z(({ wrapClass: n }) => [s("div", { class: v(n) }, [u(Yn, g({ ref: "time-input" }, e.$props, {
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
}), $n = (e, t) => {
	let { getDate: n, rootProps: i, defaults: { filters: a } } = $(), { validateMonthYearInRange: o, validateMonthYear: s } = vt(), c = (e, t) => {
		let n = e;
		return a.value.months.includes(Y(n)) ? (n = t ? J(e, 1) : Ge(e, 1), c(n, t)) : n;
	}, l = (e, t) => {
		let n = e;
		return a.value.years.includes(X(n)) ? (n = t ? le(e, 1) : Ke(e, 1), l(n, t)) : n;
	}, u = (t, r = !1) => {
		let s = Z(n(), {
			month: e.month,
			year: e.year
		}), u = t ? J(s, 1) : Ge(s, 1);
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
}, er = { class: "dp--header-wrap" }, tr = {
	key: 0,
	class: "dp--month-year-wrap"
}, nr = { key: 0 }, rr = { class: "dp--month-year-wrap" }, ir = [
	"data-dp-element",
	"aria-label",
	"aria-expanded",
	"data-test-id",
	"onClick",
	"onKeydown"
], ar = /* @__PURE__ */ d({
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
		let m = p, h = t, { rootEmit: _, rootProps: b, modelValue: x, defaults: { ariaLabels: S, filters: w, config: T, highlight: E, safeDates: M, ui: te } } = $(), { transitionName: N, showTransition: F } = gt(), { showLeftIcon: I, showRightIcon: L } = vn(), { handleMonthYearChange: R, isDisabled: B, updateMonthYear: V } = $n(h, m), { getMaxMonth: ne, getMinMonth: re, getYearFromDate: H, groupListAndMap: U, checkHighlightYear: W, checkHighlightMonth: ie } = Jt(), { checkKeyDown: ae } = qt(), { formatYear: oe } = Xt(), { checkMinMaxValue: G } = vt(), { boolHtmlAttribute: K } = $t(), { childMount: se } = pt(), q = D(!1), ce = D(!1), J = D(!1);
		ee(() => {
			se(at.header);
		});
		let le = (e) => ({
			get: () => h[e],
			set: (t) => {
				let n = e === it.month ? it.year : it.month;
				m("update-month-year", {
					[e]: t,
					[n]: h[n]
				}), e === it.month ? _e() : ve();
			}
		}), ue = r(le(it.month)), de = r(le(it.year)), fe = r(() => (e) => ({
			month: h.month,
			year: h.year,
			items: e === it.month ? h.months : h.years,
			instance: h.instance,
			updateMonthYear: V,
			toggle: e === it.month ? _e : ve
		})), pe = r(() => h.months.find((e) => e.value === h.month) || {
			text: "",
			value: 0
		}), me = r(() => U(h.months, (e) => ({
			active: h.month === e.value,
			disabled: G(e.value, re(h.year, M.value.minDate), ne(h.year, M.value.maxDate)) || w.value.months.includes(e.value),
			highlighted: ie(E.value, e.value, h.year)
		}))), he = r(() => U(h.years, (e) => ({
			active: h.year === e.value,
			disabled: G(e.value, H(M.value.minDate), H(M.value.maxDate)) || w.value.years.includes(e.value),
			highlighted: W(E.value, e.value)
		}))), ge = (e, t, n) => {
			n === void 0 ? e.value = !e.value : e.value = n, e.value ? (J.value = !0, _("overlay-toggle", {
				open: !0,
				overlay: t
			})) : (J.value = !1, _("overlay-toggle", {
				open: !1,
				overlay: t
			}));
		}, _e = (e) => {
			ge(q, ot.month, e);
		}, ve = (e) => {
			ge(ce, ot.year, e);
		}, ye = r(() => [{
			type: it.month,
			index: 1,
			toggle: _e,
			modelValue: ue.value,
			updateModelValue: (e) => ue.value = e,
			text: pe.value.text,
			showSelectionGrid: q.value,
			items: me.value,
			ariaLabel: S.value?.openMonthsOverlay,
			overlayLabel: S.value.monthPicker?.(!0) ?? void 0
		}, {
			type: it.year,
			index: 2,
			toggle: ve,
			modelValue: de.value,
			updateModelValue: (e) => de.value = e,
			text: oe(h.year),
			showSelectionGrid: ce.value,
			items: he.value,
			ariaLabel: S.value?.openYearsOverlay,
			overlayLabel: S.value.yearPicker?.(!0) ?? void 0
		}]), be = r(() => b.disableYearSelect ? [ye.value[0]] : b.yearFirst ? [...ye.value].reverse() : ye.value);
		return d({
			toggleMonthPicker: _e,
			toggleYearPicker: ve,
			handleMonthYearChange: R
		}), (r, d) => (C(), o("div", er, [r.$slots["month-year"] ? (C(), o("div", tr, [k(r.$slots, "month-year", y(f({
			mode: "date",
			month: t.month,
			year: t.year,
			months: t.months,
			years: t.years,
			updateMonthYear: P(V),
			handleMonthYearChange: P(R),
			instance: t.instance,
			isDisabled: P(B)
		})))])) : (C(), o(e, { key: 1 }, [r.$slots["top-extra"] ? (C(), o("div", nr, [k(r.$slots, "top-extra", { value: P(x) })])) : a("", !0), s("div", rr, [
			P(I)(t.instance) && !P(b).vertical ? (C(), i(On, {
				key: 0,
				"aria-label": P(S)?.prevMonth,
				disabled: P(K)(P(B)(!1)),
				inactive: J.value,
				class: v(P(te)?.navBtnPrev),
				"el-name": "action-prev",
				onActivate: d[0] ||= (e) => P(R)(!1, !0)
			}, {
				default: z(() => [r.$slots["arrow-left"] ? k(r.$slots, "arrow-left", { key: 0 }) : a("", !0), r.$slots["arrow-left"] ? a("", !0) : (C(), i(P(Ze), { key: 1 }))]),
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
				class: v(["dp--btn-base dp--bg-none dp--month-year-select-base dp--month-year-select", { "dp--hidden-el": J.value }]),
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
			}) : a("", !0), r.$slots[d.type] ? a("", !0) : (C(), o(e, { key: 1 }, [l(j(d.text), 1)], 64))], 42, ir), u(n, {
				name: P(N)(d.showSelectionGrid),
				css: P(F)
			}, {
				default: z(() => [d.showSelectionGrid ? (C(), i(wn, {
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
					"button-icon": z(() => [r.$slots["calendar-icon"] ? k(r.$slots, "calendar-icon", { key: 0 }) : a("", !0), r.$slots["calendar-icon"] ? a("", !0) : (C(), i(P(Ye), { key: 1 }))]),
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
						fn: z(() => [k(r.$slots, `${d.type}-overlay`, g({ ref_for: !0 }, fe.value(d.type)))]),
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
			P(I)(t.instance) && P(b).vertical ? (C(), i(On, {
				key: 1,
				"aria-label": P(S)?.prevMonth,
				"el-name": "action-prev",
				disabled: P(K)(P(B)(!1)),
				inactive: J.value,
				class: v(P(te)?.navBtnPrev),
				onActivate: d[1] ||= (e) => P(R)(!1, !0)
			}, {
				default: z(() => [r.$slots["arrow-up"] ? k(r.$slots, "arrow-up", { key: 0 }) : a("", !0), r.$slots["arrow-up"] ? a("", !0) : (C(), i(P(et), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"inactive",
				"class"
			])) : a("", !0),
			P(L)(t.instance) ? (C(), i(On, {
				key: 2,
				ref: "rightIcon",
				"el-name": "action-next",
				disabled: P(K)(P(B)(!0)),
				"aria-label": P(S)?.nextMonth,
				inactive: J.value,
				class: v(P(te)?.navBtnNext),
				onActivate: d[2] ||= (e) => P(R)(!0, !0)
			}, {
				default: z(() => [r.$slots[P(b).vertical ? "arrow-down" : "arrow-right"] ? k(r.$slots, P(b).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : a("", !0), r.$slots[P(b).vertical ? "arrow-down" : "arrow-right"] ? a("", !0) : (C(), i(A(P(b).vertical ? P(tt) : P(Qe)), { key: 1 }))]),
				_: 3
			}, 8, [
				"disabled",
				"aria-label",
				"inactive",
				"class"
			])) : a("", !0)
		])], 64))]));
	}
}), or = ["inert", "aria-hidden"], sr = {
	class: "dp--calendar-header",
	role: "row"
}, cr = {
	key: 0,
	class: "dp--calendar-header-item",
	role: "gridcell"
}, lr = ["aria-label"], ur = {
	key: 0,
	class: "dp--calendar-item dp--week-num",
	role: "gridcell"
}, dr = { class: "dp--cell-inner" }, fr = [
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
], pr = /* @__PURE__ */ d({
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
		let d = c, f = t, { getDate: p, rootEmit: m, rootProps: h, state: g, defaults: { transitions: y, config: x, ariaLabels: w, multiCalendars: T, weekNumbers: E, multiDates: A, ui: M, weekStart: te } } = $(), { isDateAfter: N, isDateEqual: F, resetDateTime: L, getCellId: R } = Jt(), { checkKeyDown: B, checkStopPropagation: V, isTouchDevice: re } = qt(), { formatWeekDay: W } = Xt(), { childMount: ie } = pt(), ae = I("calendar-wrap"), oe = I("active-tooltip"), G = D([]), K = D(null), se = D(!0), q = D(!1), ce = D(""), J = D({
			bottom: "",
			left: "",
			transform: ""
		}), le = D({ left: "50%" });
		U(ae, { onSwipeEnd: (e, t) => {
			x.value.noSwipe || (h.vertical ? (t === "up" || t === "down") && d("handle-swipe", t === "up" ? "left" : "right") : (t === "left" || t === "right") && d("handle-swipe", t === "right" ? "left" : "right"));
		} });
		let ue = r(() => h.calendar ? h.calendar(f.mappedDates) : f.mappedDates), de = r(() => h.dayNames ? Array.isArray(h.dayNames) ? h.dayNames : h.dayNames() : Fe());
		ee(() => {
			ie(at.calendar), x.value.monthChangeOnScroll && ae.value && ae.value.addEventListener("wheel", ke, { passive: !1 });
		}), S(() => {
			x.value.monthChangeOnScroll && ae.value && ae.value.removeEventListener("wheel", ke);
		});
		let fe = (e) => e ? h.vertical ? "vNext" : "next" : h.vertical ? "vPrevious" : "previous", me = (e, t) => {
			if (h.transitions) {
				let n = L(Z(p(), {
					month: f.month,
					year: f.year
				}));
				ce.value = N(L(Z(p(), {
					month: e,
					year: t
				})), n) ? y.value[fe(!0)] : y.value[fe(!1)], se.value = !1, _().then(() => se.value = !0);
			}
		}, he = r(() => ({ ...M.value.calendar })), _e = (e) => ({
			type: "dot",
			...e
		}), ye = r(() => (e) => {
			let t = _e(e);
			return {
				"dp--marker-base": !0,
				"dp--marker-dot": t.type === "dot",
				"dp--marker-line": t.type === "line"
			};
		}), be = r(() => (e) => F(e, K.value)), Se = r(() => ({
			"dp--calendar": !0,
			"dp--calendar-next": T.value.count > 0 && f.instance !== 0
		})), Y = r(() => g.arrowNavigationLevel > 0), Ce = r(() => (e) => h.hideOffsetDates ? e.current : !0), we = async (e, t) => {
			let { width: n, height: r } = e.getBoundingClientRect();
			K.value = t.value;
			let i = { left: `${n / 2}px` }, a = -50;
			if (await _(), oe.value?.[0]) {
				let { left: e, width: t } = oe.value[0].getBoundingClientRect();
				e < 0 && (i = { left: "0" }, a = 0, le.value.left = `${n / 2}px`), globalThis.innerWidth < e + t && (i = { right: "0" }, a = 0, le.value.left = `${t - n / 2}px`);
			}
			J.value = {
				bottom: `${r}px`,
				...i,
				transform: `translateX(${a}%)`
			};
		}, X = async (e, t, n) => {
			let r = H(G.value?.[t]?.[n]);
			r && (e.marker?.customPosition && e.marker?.tooltip?.length ? J.value = e.marker.customPosition(r) : await we(r, e), m("tooltip-open", e.marker));
		}, Ee = async (e, t, n) => {
			if (q.value && A.value.enabled && A.value.dragSelect) return d("select-date", e);
			if (d("set-hover-date", e), e.marker?.tooltip?.length) {
				if (h.hideOffsetDates && !e.current) return;
				await X(e, t, n);
			}
		}, De = (e) => {
			K.value && (K.value = null, J.value = structuredClone({
				bottom: "",
				left: "",
				transform: ""
			}), m("tooltip-close", e.marker));
		}, Oe = (e, t, n) => {
			e && (Array.isArray(G.value[t]) ? G.value[t][n] = e : G.value[t] = [e]);
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
			A.value.enabled && A.value.dragSelect ? (q.value = !0, d("select-date", e)) : A.value.enabled && d("select-date", e);
		}, Fe = () => {
			let e = p();
			return pe({
				start: Ve(e, {
					locale: h.locale,
					weekStartsOn: te.value
				}),
				end: ge(e, {
					locale: h.locale,
					weekStartsOn: te.value
				})
			}).map((e) => W(e));
		}, Ie = (e) => w.value?.day?.(e) ?? ve(e.value, "MMMM do, yyyy", { locale: h.locale });
		return i({ triggerTransition: me }), (t, r) => (C(), o("div", {
			class: v(Se.value),
			inert: Y.value || void 0,
			"aria-hidden": Y.value || void 0
		}, [s("div", {
			ref: "calendar-wrap",
			class: v(he.value),
			role: "grid"
		}, [
			s("div", sr, [P(E) ? (C(), o("div", cr, j(P(E).label), 1)) : a("", !0), (C(!0), o(e, null, O(de.value, (e, n) => (C(), o("div", {
				key: n,
				class: "dp--calendar-header-item",
				role: "gridcell",
				"data-test-id": "calendar-header",
				"aria-label": P(w)?.weekDay?.(n)
			}, [k(t.$slots, "calendar-header", {
				day: e,
				index: n
			}, () => [l(j(e), 1)])], 8, lr))), 128))]),
			r[2] ||= s("div", { class: "dp--calendar-header-separator" }, null, -1),
			u(n, {
				name: ce.value,
				css: !!P(y)
			}, {
				default: z(() => [se.value ? (C(), o("div", {
					key: 0,
					class: "dp--calendar",
					role: "rowgroup",
					onMouseleave: r[1] ||= (e) => q.value = !1
				}, [(C(!0), o(e, null, O(ue.value, (n, i) => (C(), o("div", {
					key: i,
					class: "dp--calendar-row",
					role: "row"
				}, [P(E) ? (C(), o("div", ur, [s("div", dr, j(je(n.days)), 1)])) : a("", !0), (C(!0), o(e, null, O(n.days, (n, c) => (C(), o("div", {
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
					onMouseup: r[0] ||= (e) => q.value = !1
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
						style: b(J.value)
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
						style: b(le.value)
					}, null, 4)])) : a("", !0)], 4)) : a("", !0)
				], 2)], 40, fr))), 128))]))), 128))], 32)) : a("", !0)]),
				_: 3
			}, 8, ["name", "css"])
		], 2)], 10, or));
	}
}), mr = (e, t) => {
	let n = D([]), i = D(/* @__PURE__ */ new Date()), a = D(), { getDate: o, getDateFromParts: s, rootEmit: c, calendars: l, month: u, year: d, time: f, modelValue: p, rootProps: m, today: h, state: g, defaults: { multiCalendars: v, startTime: y, range: b, config: x, safeDates: S, multiDates: C, timeConfig: w, flow: T, weekStart: E } } = $(), { validateMonthYearInRange: O, isDisabled: k, isDateRangeAllowed: A, checkMinMaxRange: j } = vt(), { updateTimeValues: M, getSetDateTime: te, assignTime: N, assignStartTime: P, validateTime: F, disabledTimesConfig: I } = Xn(), { formatDay: L } = Xt(), { setTime: R, isDateBefore: z, getDaysInBetween: B } = Jt(), { checkRangeAutoApply: V, getRangeWithFixedDate: ne, handleMultiDatesSelect: re, setPresetDate: H } = Mn(), { getMapDate: U } = qt(), { selectOnAutoApply: W } = fn(e);
	_t(() => fe(g.isTextInputDate));
	let { updateFlowStep: ie, flowStep: ae } = pt(), oe = (e) => !x.value.keepViewOnOffsetClick || e ? !0 : !a.value, G = (e, t, n, r = !1, i = !1) => {
		oe(i) && (!r && t !== null && n !== null && K(e, t, n), l.value[e] ??= l.value[e] = {
			month: 0,
			year: 0
		}, l.value[e].month = t ?? l.value[e]?.month, l.value[e].year = n ?? l.value[e]?.year);
	}, K = (e, t, n) => {
		(l.value.at(e)?.month !== t || l.value.at(e)?.year !== n) && c("update-month-year", {
			month: t,
			year: n,
			instance: e
		});
	}, se = () => {
		y.value && P(y.value);
	};
	ee(() => {
		p.value || (De(), se()), fe(!0), m.focusStartDate && m.startDate && De();
	});
	let le = r(() => T.value?.steps?.length ? T.value.steps.at(-1) === ae.value : !0), ue = () => {
		m.autoApply && e("auto-apply", !le.value);
	}, fe = (e = !1) => {
		if (p.value) return Array.isArray(p.value) ? (n.value = p.value, xe(e)) : ge(p.value, e);
		if (v.value.count && e && !m.startDate) return he(o(), e);
	}, pe = () => Array.isArray(p.value) && b.value.enabled ? Y(p.value[0]) === Y(p.value[1] ?? p.value[0]) : !1, me = (e) => {
		let t = J(e, 1);
		return {
			month: Y(t),
			year: X(t)
		};
	}, he = (e = o(), t = !1) => {
		if ((!v.value.count || !v.value.static || t) && G(0, Y(e), X(e), t), v.value.count && (!p.value || pe() || !v.value.solo) && (!v.value.solo || t)) for (let e = 1; e < v.value.count; e++) {
			let t = q(Z(o(), {
				month: u.value(e - 1),
				year: d.value(e - 1)
			}), { months: 1 });
			l.value[e] = {
				month: Y(t),
				year: X(t)
			};
		}
	}, ge = (e, t) => {
		he(e, t), N("hours", be(e)), N("minutes", Se(e)), N("seconds", we(e)), v.value.count && t && Ee();
	}, _e = (e) => {
		if (v.value.count) {
			if (v.value.solo) return 0;
			let t = de(e[0], e[1]);
			return Math.abs(t) < v.value.count ? 0 : 1;
		}
		return 1;
	}, ve = (e, t) => {
		e[1] && b.value.showLastInRange ? he(e[_e(e)], t) : he(e[0], t);
		let n = (t, n) => [t(e[0]), e?.[1] ? t(e[1]) : f[n][1]];
		N("hours", n(be, "hours")), N("minutes", n(Se, "minutes")), N("seconds", n(we, "seconds"));
	}, ye = (e, t) => {
		if ((b.value.enabled || m.weekPicker) && !C.value.enabled) return ve(e, t);
		if (C.value.enabled && t) {
			let n = e.at(-1);
			if (n) return ge(n, t);
		}
	}, xe = (e) => {
		let t = p.value;
		ye(t, e), v.value.count && v.value.solo && Ee();
	}, Ce = (e, n) => {
		let r = Z(o(), {
			month: u.value(n),
			year: d.value(n)
		}), i = e < 0 ? J(r, 1) : Ge(r, 1);
		O(Y(i), X(i), e < 0, m.preventMinMaxNavigation) && (G(n, Y(i), X(i)), v.value.count && !v.value.solo && Te(n), t());
	}, Te = (e) => {
		for (let t = e - 1; t >= 0; t--) {
			let e = Ge(Z(o(), {
				month: u.value(t + 1),
				year: d.value(t + 1)
			}), 1);
			G(t, Y(e), X(e));
		}
		for (let t = e + 1; t <= v.value.count - 1; t++) {
			let e = J(Z(o(), {
				month: u.value(t - 1),
				year: d.value(t - 1)
			}), 1);
			G(t, Y(e), X(e));
		}
	}, Ee = () => {
		if (Array.isArray(p.value) && p.value.length === 2) {
			let e = o(o(p.value[1] ?? J(p.value[0], 1))), [t, n] = [Y(p.value[0]), X(p.value[0])], [r, i] = [Y(p.value[1]), X(p.value[1])];
			(t !== r || t === r && n !== i) && v.value.solo && G(1, Y(e), X(e));
		} else p.value && !Array.isArray(p.value) && (G(0, Y(p.value), X(p.value)), he(o()));
	}, De = () => {
		m.startDate && (G(0, Y(o(m.startDate)), X(o(m.startDate))), v.value.count && Te(0));
	}, Oe = (e, t) => {
		if (x.value.monthChangeOnScroll) {
			let n = Date.now() - i.value.getTime(), r = Math.abs(e.deltaY), a = 500;
			r > 1 && (a = 100), r > 100 && (a = 0), n > a && (i.value = /* @__PURE__ */ new Date(), Ce(x.value.monthChangeOnScroll === "inverse" ? e.deltaY : -e.deltaY, t));
		}
	}, ke = (e, t, n = !1) => {
		x.value.monthChangeOnArrows && m.vertical === n && Ae(e, t);
	}, Ae = (e, t) => {
		Ce(e === "right" ? -1 : 1, t);
	}, je = (e) => {
		if (S.value.markers) return U(e.value, S.value.markers);
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
				let n = Fe(ce(r.value, 1), Y(t));
				e.push({ days: n });
			}
		}
	}, Pe = (e, t, n, r) => {
		if (m.sixWeeks && e.length < 6) {
			let i = 6 - e.length, [a, o] = Me((t.getDay() + 7 - r) % 7, 6 - (n.getDay() + 7 - r) % 7);
			for (let n = 1; n <= i; n++) if (o ? !!(n % 2) == a : a) {
				let n = e[0].days[0], r = Fe(ce(n.value, -7), Y(t));
				e.unshift({ days: r });
			} else Ne(e, t, e.at(-1));
		}
		return e;
	}, Fe = (e, t) => {
		let n = o(e), r = [];
		for (let e = 0; e < 7; e++) {
			let i = ce(n, e), a = Y(i) !== t;
			r.push({
				text: m.hideOffsetDates && a ? "" : L(i),
				value: i,
				current: !a,
				classData: {}
			});
		}
		return r;
	}, Ie = (e, t) => {
		let n = [], r = s(t, e), i = s(t, e + 1, 0), a = Ve(r, { weekStartsOn: E.value }), o = (t) => {
			let r = Fe(t, e);
			n.push({ days: r });
			let a = r.at(-1)?.value;
			z(a, i) && o(ce(t, 7));
		};
		return o(a), Pe(n, r, i, E.value);
	}, Le = (e) => {
		let t = R({
			hours: f.hours,
			minutes: f.minutes,
			seconds: Ke()
		}, o(e.value));
		c("date-click", t), C.value.enabled ? re(t, C.value.limit) : p.value = t, ie("calendar", !0), _().then(() => {
			ue();
		});
	}, Re = (e) => b.value.noDisabledRange ? B(n.value[0], e).some((e) => k(e)) : !1, ze = () => {
		n.value = p.value ? p.value.slice().filter((e) => !!e) : [], n.value.length === 2 && !(b.value.fixedStart || b.value.fixedEnd) && (n.value = []);
	}, Be = (e, t) => {
		let r = [o(e.value), ce(o(e.value), +b.value.autoRange)];
		A(r) ? (t && He(e.value), n.value = r) : c("invalid-date", e.value);
	}, He = (e) => {
		if (G(0, Y(o(e)), X(o(e))), v.value.count > 0) for (let t = 1; t < v.value.count; t++) {
			let n = me(Z(o(e), {
				year: d.value(t - 1),
				month: u.value(t - 1)
			}));
			G(t, n.month, n.year);
		}
	}, Ue = (e) => {
		if (Re(e.value) || !j(e.value, p.value, +!b.value.fixedStart)) return c("invalid-date", e.value);
		n.value = ne(o(e.value));
	}, We = (e, t) => {
		if (ze(), b.value.autoRange) return Be(e, t);
		if (b.value.fixedStart || b.value.fixedEnd) return Ue(e);
		n.value[0] ? j(o(e.value), p.value) && !Re(e.value) ? z(o(e.value), o(n.value[0])) ? b.value.autoSwitchStartEnd ? (n.value.unshift(o(e.value)), c("range-end", n.value[0])) : (n.value[0] = o(e.value), c("range-start", n.value[0])) : (n.value[1] = o(e.value), c("range-end", n.value[1])) : c("invalid-date", e.value) : (n.value[0] = o(e.value), c("range-start", n.value[0]));
	}, Ke = (e = !0) => w.value.enableSeconds ? Array.isArray(f.seconds) ? e ? f.seconds[0] : f.seconds[1] : f.seconds : 0, qe = (e) => {
		n.value[e] = R({
			hours: f.hours[e],
			minutes: f.minutes[e],
			seconds: Ke(e !== 1)
		}, n.value[e]);
	}, Je = () => {
		n.value[0] && n.value[1] && +n.value?.[0] > +n.value?.[1] && (n.value.reverse(), c("range-start", n.value[0]), c("range-end", n.value[1]));
	}, Ye = () => {
		n.value.length && (n.value[0] && !n.value[1] ? qe(0) : (qe(0), qe(1), ie("calendar", !0)), Je(), p.value = n.value.slice(), V(n.value, e, n.value.length < 2 || T.value?.steps.length ? T.value?.steps.at(-1) !== ae.value : !1));
	}, Xe = (e, t = !1) => {
		if (k(e.value) || !e.current && m.hideOffsetDates) return c("invalid-date", e.value);
		let { marker: n, ...r } = e;
		if (a.value = {
			...structuredClone(r),
			marker: n
		}, !b.value.enabled) return Le(e);
		Array.isArray(f.hours) && Array.isArray(f.minutes) && !C.value.enabled && (We(e, t), Ye());
	}, Ze = (e, n) => {
		G(e, n.month, n.year, !1, !0), v.value.count && !v.value.solo && Te(e), t(v.value.solo ? e : void 0), !n.fromNav && ae.value && ie(ae.value);
	}, Qe = (e) => {
		H({ value: e }), W(), m.multiCalendars && _().then(() => fe(!0));
	}, $e = () => {
		if (Array.isArray(p.value)) if (C.value.enabled) {
			let e = et();
			p.value[p.value.length - 1] = te(e);
		} else p.value = p.value.map((e, t) => e && te(e, t));
		else p.value = te(p.value);
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
		disabledTimesConfig: I,
		today: h,
		validateTime: F,
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
			M(e, $e), t && c(t, p.value[t === "range-start" ? 0 : 1]), T.value?.steps.length && ue();
		},
		assignMonthAndYear: he,
		setStartTime: se
	};
}, hr = () => {
	let { isModelAuto: e, matchDate: t, isDateAfter: n, isDateBefore: r, isDateBetween: i, isDateEqual: a, getWeekFromDate: o, getBeforeAndAfterInRange: s } = Jt(), { getDate: c, today: l, rootProps: u, defaults: { multiCalendars: d, multiDates: f, ui: p, highlight: m, safeDates: h, range: g, weekStart: _ }, modelValue: v } = $(), { isDisabled: y } = vt(), b = D(null), x = (e) => {
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
				let t = ce(b.value, +g.value.autoRange), n = o(c(b.value), _.value);
				return u.weekPicker ? a(n[1], c(e.value)) : a(t, c(e.value));
			}
			return !1;
		}
		return !1;
	}, A = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (b.value) {
				let t = ce(b.value, +g.value.autoRange);
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
				...se(e),
				"dp--range-border-start dp--active": a(t[0], e.value),
				"dp--range-border-end dp--active": a(t[1], e.value),
				"dp--range-preview dp--range-between-week": n(e.value, t[0]) && r(e.value, t[1])
			};
		}
		return { ...se(e) };
	}, W = (e) => {
		if (v.value && Array.isArray(v.value)) {
			let t = o(v.value[0], _.value), i = v.value[1] ? o(v.value[1], _.value) : [];
			return {
				...se(e),
				"dp--range-border-start dp--active": a(t[0], e.value) || a(i[0], e.value),
				"dp--range-border-end dp--active": a(t[1], e.value) || a(i[1], e.value),
				"dp--range-preview dp--range-between-week": n(e.value, t[0]) && r(e.value, t[1]) || n(e.value, i[0]) && r(e.value, i[1]),
				"dp--range-between": n(e.value, t[1]) && r(e.value, i[0])
			};
		}
		return { ...se(e) };
	}, ie = (e) => ({
		isRangeStart: d.value.count > 0 ? e.current && T(e) && N() : T(e) && N(),
		isRangeEnd: d.value.count > 0 ? e.current && T(e, !1) && N() : T(e, !1) && N()
	}), ae = (e) => g.value.enabled && (g.value.fixedStart || g.value.fixedEnd) && Array.isArray(e) && e.length === 2, oe = (e, t, n, r) => !ae(v.value) || !b.value ? !1 : t ? g.value.fixedEnd && a(e.value, b.value) && De(e.value, v.value[0]) && !n : g.value.fixedStart && a(e.value, b.value) && Ee(e.value, v.value[1]) && !r, G = (e, t) => !ae(v.value) || !b.value ? !1 : t ? g.value.fixedEnd && Ee(e.value, b.value) && De(e.value, v.value[0]) : g.value.fixedStart && De(e.value, b.value) && Ee(e.value, v.value[1]), K = (e) => {
		let { isRangeStart: t, isRangeEnd: n } = ie(e);
		return {
			"dp--range-border-start dp--active": t,
			"dp--range-border-end dp--active": n,
			"dp--range-between": z(e) || G(e, !0) || G(e, !1),
			"dp--date-hoverable": a(e.value, b.value) && !t && !n && !u.weekPicker,
			"dp--date-hoverable dp--date-hoverable-start": E(e, !0) || oe(e, !0, t, n),
			"dp--date-hoverable dp--date-hoverable-end": E(e, !1) || oe(e, !1, t, n)
		};
	}, se = (e) => ({
		...K(e),
		"dp--range-preview dp--cell-auto-range": A(e),
		"dp--range-preview dp--range-border-start dp--cell-auto-range-start": j(e),
		"dp--range-preview dp--range-border-end dp--cell-auto-range-end": k(e)
	}), q = (e) => g.value.enabled ? g.value.autoRange ? se(e) : u.modelAuto ? {
		...H(e),
		...K(e)
	} : u.weekPicker ? W(e) : K(e) : u.weekPicker ? U(e) : H(e);
	return {
		setHoverDate: x,
		clearHoverDate: ee,
		getDayClassData: (e) => u.hideOffsetDates && !e.current ? {} : {
			...re(e),
			...q(e),
			[p.value.dayClass ? p.value.dayClass(e.value, v.value) : ""]: !0,
			...p.value.calendarCell
		}
	};
}, gr = { key: 0 }, _r = /* @__PURE__ */ d({
	__name: "DatePicker",
	props: /*@__PURE__*/ h({
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	}, Ht),
	emits: [
		"focus-menu",
		"select-date",
		"time-update",
		"auto-apply"
	],
	setup(t, { expose: n, emit: s }) {
		let l = s, { month: d, year: p, modelValue: m, time: h, disabledTimesConfig: _, today: b, validateTime: x, getCalendarDays: ee, getMarker: S, handleArrow: w, handleScroll: T, handleSwipe: E, selectDate: D, updateMonthYear: A, presetDate: j, updateTime: M, assignMonthAndYear: te, setStartTime: N } = mr(l, de), L = F(), { setHoverDate: B, getDayClassData: V, clearHoverDate: ne } = hr(), { getDate: re, rootEmit: H, rootProps: U, defaults: { multiCalendars: W, timeConfig: ie } } = $(), { getYears: ae, getMonths: oe } = Zt(), { getCellId: G } = Jt(), K = I("calendar-header"), se = I("calendar"), q = I("time-picker"), ce = an(L, tn.Calendar), J = an(L, tn.DatePickerHeader), le = an(L, tn.TimePicker);
		R(W, (e, t) => {
			e.count - t.count > 0 && te();
		}, { deep: !0 });
		let ue = r(() => (e) => ee(d.value(e), p.value(e)).map((e) => ({
			...e,
			days: e.days.map((e) => (e.marker = S(e), e.classData = V(e), e))
		})));
		function de(e) {
			e || e === 0 ? se.value?.[e]?.triggerTransition(d.value(e), p.value(e)) : se.value?.forEach((e, t) => e?.triggerTransition(d.value(t), p.value(t)));
		}
		let fe = (e, t = 0) => {
			K.value?.[t]?.toggleMonthPicker(e);
		}, pe = (e, t = 0) => {
			K.value?.[t]?.toggleYearPicker(e);
		}, me = (e, t) => {
			q.value?.toggleTimePicker(e, t);
		}, he = (e, t) => {
			if (!U.range) {
				let n = m.value ? m.value : b, r = t ? re(t) : n, i = e ? Ve(r, { weekStartsOn: 1 }) : ge(r, { weekStartsOn: 1 });
				D({
					value: i,
					current: Y(r) === d.value(0),
					text: "",
					classData: {}
				}), document.getElementById(G(i))?.focus();
			}
		}, _e = (e) => {
			K.value?.[0]?.handleMonthYearChange(e, !0);
		}, ve = (e) => {
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
			toggleMonthPicker: fe,
			toggleYearPicker: pe,
			toggleTimePicker: me,
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
			changeMonth: _e,
			changeYear: ve,
			selectWeekDate: he
		}), (n, r) => (C(), o(e, null, [u(En, { collapse: t.collapse }, {
			default: z(({ instances: s, wrapClass: l }) => [(C(!0), o(e, null, O(s, (e) => (C(), o("div", {
				key: e,
				class: v(l)
			}, [P(U).hideMonthYearSelect ? a("", !0) : (C(), i(ar, {
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
			}, c({ _: 2 }, [O(P(J), (e) => ({
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
			])), u(pr, {
				ref_for: !0,
				ref: "calendar",
				"mapped-dates": ue.value(e),
				instance: e,
				month: P(d)(e),
				year: P(p)(e),
				onSelectDate: (t) => P(D)(t, e !== 1),
				onSetHoverDate: r[0] ||= (e) => P(B)(e),
				onHandleScroll: (t) => P(T)(t, e),
				onHandleSwipe: (t) => P(E)(t, e)
			}, c({ _: 2 }, [O(P(ce), (e) => ({
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
		}, 8, ["collapse"]), P(ie).enableTimePicker ? (C(), o("div", gr, [k(n.$slots, "time-picker", y(f({
			time: P(h),
			updateTime: P(M)
		})), () => [u(Yn, {
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
		}, c({ _: 2 }, [O(P(le), (e) => ({
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
}), vr = (e) => {
	let { getDate: t, modelValue: n, year: i, calendars: a, defaults: { highlight: o, range: s, multiDates: c } } = $(), { isDateBetween: l, isDateEqual: u } = Jt(), { checkRangeAutoApply: d, handleMultiDatesSelect: f, setMonthOrYearRange: p } = Mn();
	_t();
	let { isDisabled: m } = vt(), { formatQuarterText: h } = Xt(), { childMount: g } = pt(), { groupedYears: _, showYearPicker: v, isDisabled: y, selectYear: b, toggleYearPicker: x, handleYearSelect: S, handleYear: C, setStartDate: w } = jn(), T = D();
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
		return me({
			start: He(n),
			end: _e(n)
		}).map((e) => {
			let t = Be(e), n = he(e), r = m(e), i = O(t), a = A(t);
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
			if (!n) return a.value[t].month = Y(he(e)), c.value.enabled ? M(e) : s.value.enabled ? te(e) : N(e);
		}
	};
}, yr = { class: "dp--quarter-items" }, br = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseover"
], xr = /* @__PURE__ */ d({
	__name: "QuarterPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(t, { expose: n, emit: r }) {
		let d = r, { defaults: { config: f } } = $(), p = F(), { boolHtmlAttribute: m } = $t(), h = an(p, tn.YearMode), { groupedYears: _, year: y, isDisabled: x, quarters: ee, modelValue: S, showYearPicker: w, setHoverDate: T, selectQuarter: E, toggleYearPicker: D, handleYearSelect: A, handleYear: M } = vr(d);
		return n({
			getSidebarProps: () => ({
				modelValue: S,
				year: y,
				selectQuarter: E,
				handleYearSelect: A,
				handleYear: M
			}),
			toggleYearPicker: (e) => D(0, e)
		}), (n, r) => (C(), i(En, {
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
				s("div", null, [u(An, {
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
				s("div", yr, [(C(!0), o(e, null, O(P(ee)(t), (e, r) => (C(), o("div", { key: r }, [s("button", {
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
				}, () => [l(j(e.text), 1)])], 42, br)]))), 128))])
			], 4)], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]));
	}
}), Sr = [
	"id",
	"tabindex",
	"role",
	"aria-label",
	"aria-modal"
], Cr = {
	key: 0,
	class: "dp--menu-load-container"
}, wr = {
	key: 1,
	class: "dp--menu-header"
}, Tr = ["data-dp-mobile"], Er = {
	key: 0,
	class: "dp--sidebar-left"
}, Dr = ["data-dp-mobile"], Or = [
	"data-test-id",
	"data-dp-mobile",
	"onClick",
	"onKeydown"
], kr = { class: "dp--instance-calendar" }, Ar = {
	key: 2,
	class: "dp--sidebar-right"
}, jr = {
	key: 2,
	class: "dp--action-extra"
}, Mr = /* @__PURE__ */ d({
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
		let u = l, d = F(), { state: p, rootProps: m, defaults: { textInput: h, inline: g, config: _, ui: x, ariaLabels: w }, rootEmit: T, setState: E } = $(), { isMobile: M } = Yt(), { handleEventPropagation: te, getElWithin: L, checkStopPropagation: R, checkKeyDown: B } = qt(), { selectCurrentDate: V } = fn();
		mt();
		let re = I("inner-menu"), U = I("dp-menu"), W = I("dyn-cmp"), ie = D(0), ae = D(!1), oe = D(!1), { executeFlow: G } = ft(W, u), K = (e) => {
			oe.value = !0, _.value.allowPreventDefault && e.preventDefault(), R(e, _.value, !0);
		};
		ee(() => {
			ae.value = !0, se(), globalThis.addEventListener("resize", se);
			let e = H(U);
			e && !h.value.enabled && !g.value.enabled && E("menuFocused", !0), e && (e.addEventListener("pointerdown", K), e.addEventListener("mousedown", K), T("menu-mounted", e)), document.addEventListener("mousedown", Te);
		}), S(() => {
			globalThis.removeEventListener("resize", se), document.removeEventListener("mousedown", Te);
			let e = H(U);
			e && (e.removeEventListener("pointerdown", K), e.removeEventListener("mousedown", K), T("menu-unmounted", e));
		});
		let se = () => {
			let e = H(re);
			e && (ie.value = e.getBoundingClientRect().width);
		}, q = r(() => m.monthPicker ? Pn : m.yearPicker ? In : m.timePicker ? Qn : m.quarterPicker ? xr : _r), ce = () => {
			let e = H(U);
			e && e.focus({ preventScroll: !0 });
		}, J = r(() => W.value?.getSidebarProps() || {}), le = an(d, tn.ActionRow), ue = an(d, tn.PassTrough), de = r(() => ({
			"dp--menu-unclickable dp--menu-disabled": m.disabled,
			"dp--menu-unclickable dp--menu-readonly": m.readonly,
			"dp--menu-unclickable dp-menu-loading": m.loading
		})), fe = r(() => ({
			"dp--menu": !0,
			"dp--menu-index": !g.value.enabled,
			"dp--relative": g.value.enabled,
			...x.value.menu
		})), pe = (e) => {
			R(e, _.value, !0);
		}, me = (e) => {
			_.value.escClose && (u("close-picker"), te(e, _.value));
		}, he = (e) => {
			m.arrowNavigation || (e === ct.left || e === ct.up ? ye("handleArrow", ct.left, 0, e === ct.up) : ye("handleArrow", ct.right, 0, e === ct.down));
		}, ge = (e) => {
			E("shiftKeyInMenu", e.shiftKey), _.value.tabOutClosesMenu && !m.hideMonthYearSelect && e.code === Q.tab && e.target.classList.contains("dp--menu") && p.shiftKeyInMenu && (e.preventDefault(), R(e, _.value, !0), u("close-picker"));
		}, _e = (e) => {
			W.value?.toggleTimePicker(!1, !1), W.value?.toggleMonthPicker(!1, e), W.value?.toggleYearPicker(!1, e);
		}, ve = (e, t = 0) => e === "month" ? W.value?.toggleMonthPicker(!0, t) : e === "year" ? W.value?.toggleYearPicker(!0, t) : e === "time" ? W.value?.toggleTimePicker(!0) : _e(t), ye = (e, ...t) => {
			W.value?.[e] && W.value?.[e](...t);
		}, be = (e) => {
			ye("presetDate", N(e));
		}, xe = () => {
			ye("clearHoverDate");
		}, Se = (e, t) => {
			ye("updateMonthYear", e, t);
		}, Y = (e, t) => {
			e.preventDefault(), he(t);
		}, Ce = (e) => {
			_.value.allowPreventDefault && (e.preventDefault(), R(e, _.value, !0));
		}, we = (e) => {
			if (_.value.onInternalKeydown?.(e) !== !1) {
				if (ge(e), e.key === Q.home || e.key === Q.end) return ye("selectWeekDate", e.key === Q.home, e.target.getAttribute("id"));
				switch ((e.key === Q.pageUp || e.key === Q.pageDown) && (e.shiftKey ? (ye("changeYear", e.key === Q.pageUp), L(U.value, "overlay-year")?.focus()) : (ye("changeMonth", e.key === Q.pageUp), L(U.value, e.key === Q.pageUp ? "action-prev" : "action-next")?.focus()), e.target.getAttribute("id") && U.value?.focus({ preventScroll: !0 })), e.key) {
					case Q.esc: return me(e);
					case Q.enter: return Ce(e);
					case Q.arrowLeft: return Y(e, ct.left);
					case Q.arrowRight: return Y(e, ct.right);
					case Q.arrowUp: return Y(e, ct.up);
					case Q.arrowDown: return Y(e, ct.down);
					default: return;
				}
			}
		}, Te = (e) => {
			g.value.enabled && !g.value.input && !U.value?.contains(e.target) && oe.value && (oe.value = !1, u("menu-blur"));
		};
		return n({
			updateMonthYear: Se,
			switchView: ve,
			onValueCleared: () => {
				W.value?.setStartTime?.();
			},
			executeFlow: G
		}), (n, r) => (C(), o("div", {
			id: P(m).menuId,
			ref: "dp-menu",
			tabindex: P(g).enabled ? void 0 : "0",
			role: P(g).enabled ? void 0 : "dialog",
			"aria-label": P(w)?.menu,
			"aria-modal": P(g).enabled ? void 0 : !0,
			class: v(fe.value),
			onMouseleave: xe,
			onClick: pe,
			onKeydown: we
		}, [
			(P(m).disabled || P(m).readonly) && P(g).enabled || P(m).loading ? (C(), o("div", {
				key: 0,
				class: v(de.value)
			}, [P(m).loading ? (C(), o("div", Cr, [...r[5] ||= [s("span", { class: "dp--menu-loader" }, null, -1)]])) : a("", !0)], 2)) : a("", !0),
			n.$slots["menu-header"] ? (C(), o("div", wr, [k(n.$slots, "menu-header")])) : a("", !0),
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
				n.$slots["left-sidebar"] ? (C(), o("div", Er, [k(n.$slots, "left-sidebar", y(f(J.value)))])) : a("", !0),
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
				}, j(r.label), 47, Or))], 64))), 128))], 10, Dr)) : a("", !0),
				s("div", kr, [(C(), i(A(q.value), {
					ref: "dyn-cmp",
					collapse: t.collapse,
					"no-overlay-focus": t.noOverlayFocus,
					"menu-wrap-ref": U.value,
					onFocusMenu: ce,
					onSelectDate: r[0] ||= (e) => n.$emit("select-date"),
					onAutoApply: r[1] ||= (e) => n.$emit("auto-apply", e),
					onTimeUpdate: r[2] ||= (e) => n.$emit("time-update")
				}, c({ _: 2 }, [O(P(ue), (e) => ({
					name: e,
					fn: z((t) => [k(n.$slots, e, y(f({ ...t })))])
				}))]), 1064, [
					"collapse",
					"no-overlay-focus",
					"menu-wrap-ref"
				]))]),
				n.$slots["right-sidebar"] ? (C(), o("div", Ar, [k(n.$slots, "right-sidebar", y(f(J.value)))])) : a("", !0)
			], 14, Tr),
			n.$slots["action-extra"] ? (C(), o("div", jr, [n.$slots["action-extra"] ? k(n.$slots, "action-extra", {
				key: 0,
				selectCurrentDate: P(V)
			}) : a("", !0)])) : a("", !0),
			!P(m).autoApply || P(_).keepActionRow ? (C(), i(_n, {
				key: 3,
				"menu-mount": ae.value,
				"calendar-width": ie.value,
				onClosePicker: r[3] ||= (e) => n.$emit("close-picker"),
				onSelectDate: r[4] ||= (e) => n.$emit("select-date"),
				onSelectNow: P(V)
			}, c({ _: 2 }, [O(P(le), (e) => ({
				name: e,
				fn: z((t) => [k(n.$slots, e, y(f(t)))])
			}))]), 1032, [
				"menu-mount",
				"calendar-width",
				"onSelectNow"
			])) : a("", !0)
		], 42, Sr));
	}
}), Nr = d({
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
}), Pr = ["data-dp-mobile"], Fr = /* @__PURE__ */ d({
	__name: "VueDatePicker",
	setup(e, { expose: t }) {
		let { rootEmit: l, setState: d, inputValue: p, modelValue: m, rootProps: h, defaults: { inline: g, config: x, textInput: w, range: T, multiDates: E, teleport: A, floatingConfig: j, flow: M } } = $(), { validateDate: N, isValidTime: L } = vt(), { menuTransition: B, showTransition: V } = gt(), { isMobile: ne } = Yt(), { findNextFocusableElement: H, getNumVal: U } = qt(), W = F(), q = D(!1), ce = D(g.value.enabled), J = D(g.value.enabled || h.centered), le = te(h, "modelValue"), ue = te(h, "timezone"), de = I("dp-menu-wrap"), fe = I("dp-menu"), pe = I("input-cmp"), me = I("picker-wrapper"), he = I("menu-arrow"), ge = D(!1), _e = D(!1), ve = D(!1), ye = D(!0), { floatingStyles: be, middlewareData: xe, placement: Se, y: Y } = se(pe, de, {
			strategy: j.value.strategy,
			placement: j.value.placement,
			middleware: ((e) => (j.value.flip && e.push(oe(typeof j.value.flip == "object" ? j.value.flip : {})), j.value.shift && e.push(K(typeof j.value.shift == "object" ? j.value.shift : {})), j.value.arrow && e.push(ie({ element: j.value.arrow === !0 ? he : j.value.arrow })), e))([G(j.value.offset)]),
			whileElementsMounted: ae
		});
		ee(() => {
			Te(h.modelValue), _().then(() => {
				g.value.enabled || globalThis.addEventListener("resize", Ne);
			}), g.value.enabled && (q.value = !0), globalThis.addEventListener("keyup", Pe), globalThis.addEventListener("keydown", Z);
		}), S(() => {
			g.value.enabled || globalThis.removeEventListener("resize", Ne), globalThis.removeEventListener("keyup", Pe), globalThis.removeEventListener("keydown", Z);
		});
		let Ce = on(W, h.presetDates), we = an(W, tn.Input);
		R([le, ue], () => {
			Te(le.value);
		}, { deep: !0 }), R([Se, Y], () => {
			!g.value.enabled && !h.centered && ye.value && (J.value = !1, _().then(() => {
				ye.value = !1, J.value = !0;
			}));
		});
		let { parseExternalModelValue: Te, emitModelValue: X, formatInputValue: Ee, checkBeforeEmit: De } = ht(), Oe = r(() => ({
			"dp--main": !0,
			"dp--theme-dark": h.dark,
			"dp--theme-light": !h.dark,
			"dp--flex-display": g.value.enabled,
			"dp--flex-display-collapsed": ve.value,
			"dp--flex-display-with-input": g.value.input
		})), ke = r(() => h.dark ? "dp--theme-dark" : "dp--theme-light"), Ae = r(() => g.value.enabled && (h.timePicker || h.monthPicker || h.yearPicker || h.quarterPicker)), je = () => pe.value?.$el?.getBoundingClientRect() ?? {
			width: 0,
			left: 0,
			right: 0
		}, Me = () => {
			q.value && x.value.closeOnScroll && Ue();
		}, Ne = () => {
			let e = fe.value?.$el.getBoundingClientRect().width ?? 0;
			ve.value = document.body.offsetWidth <= e;
		}, Pe = (e) => {
			if (e.key === "Tab" && !g.value.enabled && x.value.tabOutClosesMenu) {
				let e = me.value?.contains(document.activeElement), t = de.value?.contains(document.activeElement);
				!e && !t && Ue();
			}
			_e.value = e.shiftKey;
		}, Z = (e) => {
			_e.value = e.shiftKey;
		}, Fe = () => {
			!h.disabled && !h.readonly && (ye.value = !0, ce.value = !0, q.value = !0, q.value && l("open"), q.value || He(), Te(h.modelValue));
		}, Ie = () => {
			p.value = "", He(), fe.value?.onValueCleared(), pe.value?.setParsedDate(null), l("update:model-value", null), l("cleared"), x.value.closeOnClearValue && Ue();
		}, Le = () => {
			let e = m.value;
			return !e || !Array.isArray(e) && N(e) ? !0 : Array.isArray(e) ? E.value.enabled || e.length === 2 && N(e[0]) && N(e[1]) ? !0 : T.value.partialRange && !h.timePicker ? N(e[0]) : !1 : !1;
		}, Re = () => {
			De() && Le() ? (X(), Ue(!1, !0)) : l("invalid-select");
		}, ze = (e) => {
			Be(), X(), x.value.closeOnAutoApply && !e && Ue(!1, !0);
		}, Be = () => {
			pe.value && w.value.enabled && pe.value.setParsedDate(m.value);
		}, Ve = (e = !1) => {
			h.autoApply && L(m.value) && Le() && (T.value.enabled && Array.isArray(m.value) ? (T.value.partialRange || m.value.length === 2) && ze(e) : ze(e));
		}, He = () => {
			w.value.enabled || (m.value = null);
		}, Ue = (e = !1, t = !1) => {
			ye.value = !0, e && m.value && x.value.setDateOnMenuClose && Re(), g.value.enabled || (q.value && (q.value = !1, d("menuFocused", !1), d("shiftKeyInMenu", !1), l("closed"), !t && p.value && Te(le.value)), He(), l("blur"));
		}, We = () => {
			!g.value.enabled && !q.value && (ce.value = !1);
		}, Ge = (e, t, n = !1) => {
			if (!e) {
				m.value = null;
				return;
			}
			let r = Array.isArray(e) ? e.every((e) => N(e)) : N(e), i = L(e);
			r && i ? (d("isTextInputDate", !0), m.value = e, t ? (ge.value = n, Re(), l("text-submit")) : h.autoApply && Ve(!0), _().then(() => {
				d("isTextInputDate", !1);
			})) : l("invalid-date", e);
		}, Ke = () => {
			h.autoApply && L(m.value) && X(), Be();
		}, qe = () => q.value ? Ue() : Fe(), Je = (e) => {
			m.value = e;
		}, Ye = () => {
			w.value.enabled && (d("isInputFocused", !0), Ee()), l("focus");
		}, Xe = () => {
			w.value.enabled && (d("isInputFocused", !1), Te(h.modelValue), ge.value && H(me.value, _e.value)?.focus()), l("blur");
		}, Ze = (e, t) => {
			fe.value && fe.value.updateMonthYear(t ?? 0, {
				month: U(e.month),
				year: U(e.year)
			});
		}, Qe = (e) => {
			Te(e ?? h.modelValue);
		}, $e = (e, t) => {
			fe.value?.switchView(e, t);
		}, et = (e, t) => {
			if (q.value) return x.value.onClickOutside ? x.value.onClickOutside(e, t) : Ue(!0);
		};
		return re(de, (e) => et(Le, e), { ignore: [pe] }), t({
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
				fe.value?.executeFlow(e ?? M.value?.steps?.at(0));
			},
			getDpWrapMenuRef: () => de,
			dpMenuRef: () => fe,
			dpWrapMenuRef: () => de,
			inputRef: () => pe
		}), (e, t) => (C(), o("div", {
			ref: "picker-wrapper",
			class: v(Oe.value),
			"data-datepicker-instance": "",
			"data-dp-mobile": P(ne)
		}, [u(dn, {
			ref: "input-cmp",
			"is-menu-open": q.value,
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
		}))]), 1032, ["is-menu-open", "onSetEmptyDate"]), u(P(Nr), {
			to: P(A),
			disabled: !P(A)
		}, {
			default: z(() => [ce.value ? (C(), o("div", {
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
				css: P(V) && !P(g).enabled && !P(h).centered && J.value,
				appear: "",
				onAfterLeave: We
			}, {
				default: z(() => [q.value && J.value ? (C(), i(Mr, {
					key: 0,
					ref: "dp-menu",
					class: v({ [ke.value]: !0 }),
					"no-overlay-focus": Ae.value,
					collapse: ve.value,
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
		}, 8, ["to", "disabled"])], 10, Pr));
	}
}), Ir = /* @__PURE__ */ d({
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
	}, Ut),
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
		rt(a, r);
		let o = on(F(), a.presetDates);
		return t(Qt(I("date-picker"))), (e, t) => (C(), i(Fr, { ref: "date-picker" }, c({ _: 2 }, [O(P(o), (t) => ({
			name: t,
			fn: z((n) => [k(e.$slots, t, y(f(n)))])
		}))]), 1536));
	}
});
//#endregion
export { qe as TZDate, Ir as VueDatePicker, ut as WeekStart };

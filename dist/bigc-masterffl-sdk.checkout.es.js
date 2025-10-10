import require$$0, { createContext, useContext, useMemo, useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=require$$0,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = require$$0;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self) ;
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	var didWarnAboutKeySpread = {};
	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum();

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    {
	      if (hasOwnProperty.call(props, 'key')) {
	        var componentName = getComponentNameFromType(type);
	        var keys = Object.keys(props).filter(function (k) {
	          return k !== 'key';
	        });
	        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

	        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
	          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

	          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

	          didWarnAboutKeySpread[componentName + beforeExample] = true;
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}

var jsxRuntimeExports = jsxRuntime.exports;

const CONFIG_BASE_URL = {
  qa: "https://fflselect-qa.masterffl.com",
  production: "https://fflselect.masterffl.com"
};
const CONFIG_APP_URL = {
  qa: "https://api-qa.masterffl.com/ffl/bigcommerce/app",
  production: "https://ffl-api.masterffl.com/ffl/bigcommerce/app"
};
const CONFIG_SDK_URL = {
  qa: "https://libs.masterffl.com/ffl-select/select-sdk/9.0.0/ffl-select-sdk.js",
  production: "https://libs.masterffl.com/ffl-select/select-sdk/9.0.0/ffl-select-sdk.js"
};
const DEFAULT_LANGUAGE = {
  heading: "Select an FFL Dealer",
  subheading: "Your purchase requires the choice of an FFL Dealer where you will pickup the items. Please enter your postal code to find a Dealer near you.",
  postalCodeLabel: "Postal Code",
  buttonText: "Choose Dealer",
  termsLabel: "I understand that this item will be shipped to the FFL dealer I have selected above. I agree that it is my sole responsibility to coordinate with the FFL dealer for the fulfillment of this item.",
  selectedDealerLabel: "Selected Dealer"
};

const init = async () => {
  const [mapping, cart] = await Promise.all([getMappingData(), getCart()]);
  let isFFL = false;
  let isSuppressor = false;
  const ffAttr = mapping?.ffl_custom_attribute_name.trim().toLowerCase();
  const ffValue = mapping?.ffl_custom_attribute_value.trim().toLowerCase();
  const fflFirearmAttr = mapping?.ffl_firearm_custom_attribute_name.trim().toLowerCase();
  const fflFirearmValue = mapping?.ffl_firearm_custom_attribute_value;
  const productIds = cart?.lineItems.physicalItems.map((item) => item.productEntityId);
  const products = await SDK.getProducts(productIds);
  isFFL = products.some((product) => {
    return product.customFields.some((field) => field.name.trim().toLowerCase() === ffAttr && field.value.trim().toLowerCase() === ffValue);
  });
  isSuppressor = products.some((product) => {
    return product.customFields.some(
      (field) => field.name.trim().toLowerCase() === fflFirearmAttr && field.value.trim().toLowerCase() === fflFirearmValue?.[3]?.toLowerCase()
    );
  });
  if (isFFL || isSuppressor) {
    return {
      isFFL,
      isSuppressor
    };
  }
  if (mapping && mapping?.category_mapping.length > 0) {
    const productsWithCategoryMapping = products.map((product) => {
      let lowestPriority = null;
      const matchedFFLCategories = mapping.category_mapping.filter(
        (c) => product.categoryIds.some((ci) => c.categoryId === ci.entityId)
      );
      if (matchedFFLCategories.length > 0) {
        const lowestPriorityFFl = matchedFFLCategories.reduce(
          (min, fflCat) => parseInt(fflCat.priority, 10) < parseInt(min.priority, 10) ? fflCat : min
        );
        lowestPriority = lowestPriorityFFl.fflMapping ? lowestPriorityFFl : null;
      }
      return { ...product, fflFirearmType: lowestPriority ? lowestPriority.fflMapping : null };
    });
    isFFL = productsWithCategoryMapping.some((product) => product.fflFirearmType);
    isSuppressor = productsWithCategoryMapping.some(
      (product) => product.fflFirearmType && product.fflFirearmType.trim().toLowerCase() === fflFirearmValue?.[3]
    );
  }
  return {
    isFFL,
    isSuppressor
  };
};
const getConfig = () => {
  return {
    ...window.masterFFLConfig || {},
    env: window.masterFFLConfig?.env || "production",
    baseUrl: CONFIG_BASE_URL[window.masterFFLConfig?.env || "production"],
    appUrl: CONFIG_APP_URL[window.masterFFLConfig?.env || "production"],
    sdkUrl: CONFIG_SDK_URL[window.masterFFLConfig?.env || "production"],
    storeDomain: window.location.hostname.replace("www.", ""),
    storefrontApiToken: window.masterFFLConfig?.storefrontApiToken || window.storefrontAPIToken,
    lang: {
      heading: window.masterFFLConfig?.lang?.heading || DEFAULT_LANGUAGE.heading,
      subheading: window.masterFFLConfig?.lang?.subheading || DEFAULT_LANGUAGE.subheading,
      postalCodeLabel: window.masterFFLConfig?.lang?.postalCodeLabel || DEFAULT_LANGUAGE.postalCodeLabel,
      buttonText: window.masterFFLConfig?.lang?.buttonText || DEFAULT_LANGUAGE.buttonText,
      termsLabel: window.masterFFLConfig?.lang?.termsLabel || DEFAULT_LANGUAGE.termsLabel,
      selectedDealerLabel: window.masterFFLConfig?.lang?.selectedDealerLabel || DEFAULT_LANGUAGE.selectedDealerLabel
    }
  };
};
const getMappingData = async () => {
  const cacheKey = `mapping-${getConfig().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const cachedMapping = window.masterFFLCache[cacheKey];
  if (cachedMapping) {
    return cachedMapping;
  }
  const response = await fetch(`${getConfig().appUrl}/api/internal/mappingdata`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      storeHash: getConfig().storeHash ?? ""
    })
  });
  const data = await response.json();
  const mapping = data;
  window.masterFFLCache[cacheKey] = mapping;
  return mapping;
};
const saveDealer = async (checkoutId, dealer, isCustomCheckout = false) => {
  removeSession(checkoutId, "selectedDealer");
  const cart = await getCart();
  const lineItems = cart?.lineItems.physicalItems.map((item) => ({
    itemId: item.entityId,
    quantity: item.quantity
  }));
  const shippingData = {
    address: {
      firstName: dealer.name,
      lastName: "n/a",
      phone: dealer.contact.primaryPhone ? dealer.contact.primaryPhone : "0000000000",
      company: dealer.name,
      address1: dealer.contact.address.street1,
      address2: "",
      city: dealer.contact.address.city,
      stateOrProvinceCode: dealer.contact.address.state,
      stateOrProvince: "",
      shouldSaveAddress: false,
      postalCode: dealer.contact.address.zip,
      localizedCountry: "United States",
      countryCode: "US",
      customFields: []
    },
    lineItems
  };
  const response = await fetch(`${getConfig().appUrl}/api/internal/dealer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dealerId: dealer.id.match(/\d+/g)?.join("") || "",
      cartId: checkoutId ?? "",
      storeHash: getConfig().storeHash ?? ""
    })
  });
  const dealerData = await response.json();
  if (dealerData.status === false) {
    throw new Error("An error occurred while saving the dealer. Please try again.");
  }
  if (isCustomCheckout) {
    await fetch(
      `/api/storefront/checkouts/${getConfig().checkoutId}/consignments?include=consignments.availableShippingOptions%2Ccart.lineItems.physicalItems.options%2Ccart.lineItems.digitalItems.options%2Ccustomer%2Cpromotions.banners`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([{ address: shippingData.address, lineItems: shippingData.lineItems }])
      }
    );
  }
  setSession(checkoutId, { selectedDealer: JSON.stringify(dealer) });
  return {
    dealer,
    shippingData
  };
};
const getCart = async () => {
  const cacheKey = `cart-${getConfig().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const cachedCart = window.masterFFLCache[cacheKey];
  if (cachedCart) {
    return cachedCart;
  }
  const response = await fetch(`/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${getConfig().storefrontApiToken}` },
    body: JSON.stringify({
      query: `
        query Cart {
        site {
          cart {
            entityId
            lineItems {
              physicalItems {
                entityId
                productEntityId
                quantity
              }
            }
          }
        }
        }
      `
    })
  });
  const data = await response.json();
  window.masterFFLCache[cacheKey] = data.data.site.cart;
  return data.data.site.cart;
};
const getProducts = async (ids) => {
  if (!ids) return [];
  const productsResponse = await fetch(`/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getConfig().storefrontApiToken}`
    },
    body: JSON.stringify({
      query: `
            query Products($ids: [Int!]) {
                site {
                    products(entityIds: $ids) {
                        edges {
                            node {
                                entityId
                                categories{
                                  edges{
                                    node{
                                      entityId
                                      name
                                    }
                                  }
                                }
                                customFields {
                                    edges {
                                        node {
                                            name
                                            value
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
      variables: { ids }
    })
  });
  const result = await productsResponse.json();
  const products = result.data.site.products.edges.map((edge) => ({
    entityId: edge.node.entityId,
    customFields: edge.node.customFields.edges.map((fieldEdge) => fieldEdge.node),
    categoryIds: edge.node.categories.edges.map((fieldEdge) => fieldEdge.node)
  }));
  return products;
};
const getSession = (checkoutId) => {
  return {
    postalCode: sessionStorage.getItem(`${checkoutId}-postalCode`),
    acceptTerms: sessionStorage.getItem(`${checkoutId}-acceptTerms`) === "true" ? true : sessionStorage.getItem(`${checkoutId}-acceptTerms`) === "false" ? false : void 0,
    selectedDealer: sessionStorage.getItem(`${checkoutId}-selectedDealer`)
  };
};
const setSession = (checkoutId, options) => {
  const { postalCode, acceptTerms, selectedDealer } = options;
  sessionStorage.setItem(`${checkoutId}-postalCode`, postalCode || sessionStorage.getItem(`${checkoutId}-postalCode`) || "");
  sessionStorage.setItem(`${checkoutId}-acceptTerms`, acceptTerms || sessionStorage.getItem(`${checkoutId}-acceptTerms`) || "");
  sessionStorage.setItem(`${checkoutId}-selectedDealer`, selectedDealer || sessionStorage.getItem(`${checkoutId}-selectedDealer`) || "");
};
const removeSession = (checkoutId, key) => {
  sessionStorage.removeItem(`${checkoutId}-${key}`);
};
const SDK = {
  init,
  getConfig,
  getSession,
  setSession,
  removeSession,
  saveDealer,
  getMappingData,
  getProducts
};

var CheckoutStepType = /* @__PURE__ */ ((CheckoutStepType2) => {
  CheckoutStepType2["Billing"] = "billing";
  CheckoutStepType2["Customer"] = "customer";
  CheckoutStepType2["Payment"] = "payment";
  CheckoutStepType2["Shipping"] = "shipping";
  return CheckoutStepType2;
})(CheckoutStepType || {});

const MasterFFLContext = createContext({});
const useMasterFFL = () => {
  const context = useContext(MasterFFLContext);
  if (!context) {
    throw new Error("useMasterFFL must be used within a MasterFFLProvider");
  }
  return context;
};
const MasterFFL = ({ checkoutContext, getCheckoutStepStatuses }) => {
  const { checkoutService, checkoutState } = useContext(checkoutContext);
  const storeProfile = useMemo(() => checkoutState.data.getConfig()?.storeProfile, [checkoutState]);
  const checkoutId = useMemo(() => checkoutState.data.getCheckout()?.id, [checkoutState]);
  const storeHash = useMemo(() => storeProfile?.storeHash, [storeProfile]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values, setValues] = useState({
    postalCode: "",
    acceptTerms: false
  });
  const [error, setError] = useState(null);
  const [selectedDealer, setSelectedDealer] = useState(null);
  const [isFFL, setIsFFL] = useState(false);
  const [isSuppressor, setIsSuppressor] = useState(false);
  useEffect(() => {
    if (!checkoutId) return;
    const { postalCode, acceptTerms, selectedDealer: selectedDealer2 } = SDK.getSession(checkoutId);
    if (postalCode) setValues((p) => ({ ...p, postalCode }));
    if (acceptTerms) setValues((p) => ({ ...p, acceptTerms }));
    if (selectedDealer2 && selectedDealer2 !== "null") setSelectedDealer(JSON.parse(selectedDealer2));
  }, [checkoutId]);
  const config = useMemo(
    () => ({
      ...SDK.getConfig(),
      storeHash,
      checkoutId: checkoutState.data.getCheckout()?.id
    }),
    [storeHash, checkoutState]
  );
  const handleSaveDealer = useCallback(
    async (dealer) => {
      setSelectedDealer(null);
      setError(null);
      try {
        await SDK.saveDealer(checkoutId, dealer, true);
        await checkoutService.loadCheckout(checkoutId);
        setSelectedDealer(dealer);
      } catch (error2) {
        setError("An error occurred while saving the dealer. Please try again.");
      }
    },
    [checkoutState, config, checkoutId, setSelectedDealer, setError, checkoutService]
  );
  const steps = useMemo(() => getCheckoutStepStatuses(checkoutState), [checkoutState]);
  useEffect(() => {
    const activeStep = steps.find((step) => step.isActive);
    if (activeStep?.type !== CheckoutStepType.Shipping && (!selectedDealer || !values.acceptTerms)) {
      const button = document.querySelector('.checkout-step--shipping [data-test="step-edit-button"]');
      if (button) {
        button.click();
      }
    }
  }, [steps, selectedDealer, values.acceptTerms]);
  const handleInit = useCallback(async () => {
    if (!config.storeHash || !checkoutState.data.getCart()) return;
    const { isFFL: isFFL2, isSuppressor: isSuppressor2 } = await SDK.init();
    setIsFFL(isFFL2);
    setIsSuppressor(isSuppressor2);
  }, [config.storeHash, checkoutState.data.getCart()]);
  useEffect(() => {
    handleInit();
  }, [handleInit]);
  const contextValue = useMemo(
    () => ({
      checkoutService,
      checkoutState,
      config,
      isModalOpen,
      setIsModalOpen,
      values,
      setValues,
      handleSaveDealer,
      selectedDealer,
      error,
      isFFL,
      isSuppressor
    }),
    [
      checkoutService,
      checkoutState,
      config,
      isModalOpen,
      setIsModalOpen,
      values,
      setValues,
      handleSaveDealer,
      selectedDealer,
      error,
      isFFL,
      isSuppressor
    ]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MasterFFLContext.Provider, { value: contextValue, children: (isFFL || isSuppressor) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MasterFFLForm, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MasterFFlScript, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MasterFFLModal, {})
  ] }) });
};
const MasterFFLForm = () => {
  const { setIsModalOpen, values, setValues, selectedDealer, config, error } = useMasterFFL();
  const [errors, setErrors] = useState({ postalCode: "", acceptTerms: "" });
  const observerRef = useRef(null);
  const buttonRef = useRef(null);
  const acceptTermsRef = useRef(false);
  const selectedDealerRef = useRef(false);
  useEffect(() => {
    acceptTermsRef.current = values.acceptTerms;
  }, [values.acceptTerms]);
  useEffect(() => {
    selectedDealerRef.current = !!selectedDealer;
  }, [selectedDealer]);
  const applyDisabledState = useCallback(() => {
    const button = document.getElementById("checkout-shipping-continue");
    if (!button) return;
    buttonRef.current = button;
    const isDisabled = !acceptTermsRef.current || !selectedDealerRef.current;
    if (button.disabled !== isDisabled) {
      button.disabled = isDisabled;
    }
  }, []);
  useEffect(() => {
    const parent = document.getElementById("checkout-shipping-continue")?.parentElement;
    if (!parent) return;
    const handleMutations = () => applyDisabledState();
    observerRef.current = new MutationObserver(handleMutations);
    observerRef.current.observe(parent, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["disabled", "class"]
    });
    applyDisabledState();
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [applyDisabledState]);
  useEffect(() => {
    applyDisabledState();
  }, [applyDisabledState, values.acceptTerms, selectedDealer]);
  const handleInputChange = (e) => {
    setErrors({ postalCode: "", acceptTerms: "" });
    if (e.target.name === "postalCode") {
      setValues({ ...values, postalCode: e.target.value });
      sessionStorage.setItem(`${config.checkoutId}-postalCode`, e.target.value);
    } else {
      setValues({ ...values, acceptTerms: e.target.checked });
      sessionStorage.setItem(`${config.checkoutId}-acceptTerms`, e.target.checked.toString());
    }
  };
  const handleSubmit = () => {
    setErrors({ postalCode: "", acceptTerms: "" });
    if (!values.postalCode) {
      setErrors({ ...errors, postalCode: `${config.lang.postalCodeLabel} is required` });
      return;
    }
    setIsModalOpen(true);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "form-body",
      style: {
        border: "1px solid #ebebeb",
        padding: "1.5rem",
        marginBottom: "15px",
        borderRadius: "4px"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "15px"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `form-field ${errors.postalCode ? "form-field--error" : ""}`, style: { flex: 1, marginBottom: 0 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontSize: 18, margin: "0 0 15px 0" }, children: config.lang.heading }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontWeight: 600 }, children: config.lang.subheading }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "postalCode", children: [
                config.lang.postalCodeLabel,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "red" }, children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: "form-input optimizedCheckout-form-input",
                    id: "postalCode",
                    name: "postalCode",
                    onChange: handleInputChange,
                    onKeyDown: handleKeyDown,
                    placeholder: "",
                    type: "text",
                    value: values.postalCode
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flexShrink: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSubmit, style: { margin: 0 }, className: "button button--primary optimizedCheckout-buttonPrimary", children: config.lang.buttonText }) })
              ] }),
              errors.postalCode && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ jsxRuntimeExports.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "postalCode", role: "alert", children: errors.postalCode }) }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `form-field-agreement form-field ${errors.acceptTerms ? "form-field--error" : ""}`, style: { marginTop: 15 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              checked: values.acceptTerms,
              className: "form-checkbox optimizedCheckout-form-checkbox",
              id: "accept-agreement",
              name: "acceptTerms",
              onChange: handleInputChange,
              type: "checkbox"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "accept-agreement", children: config.lang.termsLabel }),
          errors.acceptTerms && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ jsxRuntimeExports.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "acceptTerms", role: "alert", children: errors.acceptTerms }) }) })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-field form-field--error", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ jsxRuntimeExports.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "error", role: "alert", children: error }) }) }) }),
        selectedDealer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 15 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-body", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: config.lang.selectedDealerLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-pretty", children: selectedDealer?.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-pretty", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block", children: [
                selectedDealer?.contact.address.street1,
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                selectedDealer?.contact.address.city,
                ", ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedDealer?.contact.address.state })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                " ",
                selectedDealer?.contact.address.zip
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
                #checkoutShippingAddress, #sameAsBilling, #sameAsBilling + label { display: none; }
                `
              }
            }
          )
        ] })
      ]
    }
  );
};
const MasterFFlScript = () => {
  const { config } = useMasterFFL();
  useEffect(() => {
    const hasScript = document.querySelector(`script[src^="${config.sdkUrl}"]`);
    if (hasScript) {
      return;
    }
    const script = document.createElement("script");
    script.src = config.sdkUrl;
    document.body.appendChild(script);
  }, [config.sdkUrl]);
  return null;
};
const MasterFFLModal = () => {
  const { isModalOpen, setIsModalOpen, config, values, handleSaveDealer, isSuppressor } = useMasterFFL();
  const SELECTOR_ID = "ffSelectFrame";
  const dealerSelectionCallback = useCallback(
    async (dealer) => {
      if (!dealer) return;
      await handleSaveDealer(dealer);
      setIsModalOpen(false);
    },
    [handleSaveDealer, setIsModalOpen]
  );
  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        const fflSelect = new window.FFLSelectSDK.FFLDealerSelector(
          values.postalCode,
          SELECTOR_ID,
          { url: config.baseUrl },
          {
            storeDomain: config.storeDomain,
            envMode: config.env,
            filters: isSuppressor ? "exclude_non_sot_dealer=true" : "",
            dealerSelectionCallback
          }
        );
        fflSelect.show();
      }, 200);
    }
  }, [isModalOpen, values.postalCode, config.baseUrl, config.storeDomain, config.env, dealerSelectionCallback, isSuppressor]);
  if (!isModalOpen) {
    return null;
  }
  const modalContent = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `.ffl-modal-body { height: 100%; overflow: auto !important; padding: 0 !important; }`
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1e3
        },
        onClick: () => setIsModalOpen(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              maxWidth: "95%",
              width: "100%",
              height: "80dvh",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              position: "relative"
            },
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setIsModalOpen(false),
                  style: {
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "none",
                    border: "none",
                    fontSize: "24px",
                    cursor: "pointer",
                    zIndex: 1001
                  },
                  children: "×"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: SELECTOR_ID, className: "ffl-modal-body", style: { height: "100%", flex: 1 } })
            ]
          }
        )
      }
    )
  ] });
  return createPortal(modalContent, document.body);
};

export { MasterFFL, useMasterFFL };
//# sourceMappingURL=bigc-masterffl-sdk.checkout.es.js.map

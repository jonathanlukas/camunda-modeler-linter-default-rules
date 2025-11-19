/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./.bpmnlintrc":
/*!*********************!*\
  !*** ./.bpmnlintrc ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   resolver: () => (/* binding */ resolver)
/* harmony export */ });
/* harmony import */ var bpmnlint_rules_ad_hoc_sub_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bpmnlint/rules/ad-hoc-sub-process */ "./node_modules/bpmnlint/rules/ad-hoc-sub-process.js");
/* harmony import */ var bpmnlint_rules_ad_hoc_sub_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_ad_hoc_sub_process__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bpmnlint_rules_conditional_flows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bpmnlint/rules/conditional-flows */ "./node_modules/bpmnlint/rules/conditional-flows.js");
/* harmony import */ var bpmnlint_rules_conditional_flows__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_conditional_flows__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bpmnlint_rules_end_event_required__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bpmnlint/rules/end-event-required */ "./node_modules/bpmnlint/rules/end-event-required.js");
/* harmony import */ var bpmnlint_rules_end_event_required__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_end_event_required__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bpmnlint_rules_event_based_gateway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bpmnlint/rules/event-based-gateway */ "./node_modules/bpmnlint/rules/event-based-gateway.js");
/* harmony import */ var bpmnlint_rules_event_based_gateway__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_event_based_gateway__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bpmnlint_rules_event_sub_process_typed_start_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bpmnlint/rules/event-sub-process-typed-start-event */ "./node_modules/bpmnlint/rules/event-sub-process-typed-start-event.js");
/* harmony import */ var bpmnlint_rules_event_sub_process_typed_start_event__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_event_sub_process_typed_start_event__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bpmnlint_rules_fake_join__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bpmnlint/rules/fake-join */ "./node_modules/bpmnlint/rules/fake-join.js");
/* harmony import */ var bpmnlint_rules_fake_join__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_fake_join__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bpmnlint_rules_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bpmnlint/rules/global */ "./node_modules/bpmnlint/rules/global.js");
/* harmony import */ var bpmnlint_rules_global__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_global__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bpmnlint_rules_label_required__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bpmnlint/rules/label-required */ "./node_modules/bpmnlint/rules/label-required.js");
/* harmony import */ var bpmnlint_rules_label_required__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_label_required__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bpmnlint_rules_link_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bpmnlint/rules/link-event */ "./node_modules/bpmnlint/rules/link-event.js");
/* harmony import */ var bpmnlint_rules_link_event__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_link_event__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bpmnlint_rules_no_bpmndi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bpmnlint/rules/no-bpmndi */ "./node_modules/bpmnlint/rules/no-bpmndi.js");
/* harmony import */ var bpmnlint_rules_no_bpmndi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_bpmndi__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bpmnlint/rules/no-complex-gateway */ "./node_modules/bpmnlint/rules/no-complex-gateway.js");
/* harmony import */ var bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bpmnlint/rules/no-disconnected */ "./node_modules/bpmnlint/rules/no-disconnected.js");
/* harmony import */ var bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bpmnlint/rules/no-duplicate-sequence-flows */ "./node_modules/bpmnlint/rules/no-duplicate-sequence-flows.js");
/* harmony import */ var bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bpmnlint/rules/no-gateway-join-fork */ "./node_modules/bpmnlint/rules/no-gateway-join-fork.js");
/* harmony import */ var bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bpmnlint/rules/no-implicit-split */ "./node_modules/bpmnlint/rules/no-implicit-split.js");
/* harmony import */ var bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bpmnlint_rules_no_implicit_end__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! bpmnlint/rules/no-implicit-end */ "./node_modules/bpmnlint/rules/no-implicit-end.js");
/* harmony import */ var bpmnlint_rules_no_implicit_end__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_implicit_end__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bpmnlint_rules_no_implicit_start__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! bpmnlint/rules/no-implicit-start */ "./node_modules/bpmnlint/rules/no-implicit-start.js");
/* harmony import */ var bpmnlint_rules_no_implicit_start__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_implicit_start__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! bpmnlint/rules/no-inclusive-gateway */ "./node_modules/bpmnlint/rules/no-inclusive-gateway.js");
/* harmony import */ var bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var bpmnlint_rules_no_overlapping_elements__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! bpmnlint/rules/no-overlapping-elements */ "./node_modules/bpmnlint/rules/no-overlapping-elements.js");
/* harmony import */ var bpmnlint_rules_no_overlapping_elements__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_overlapping_elements__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! bpmnlint/rules/single-blank-start-event */ "./node_modules/bpmnlint/rules/single-blank-start-event.js");
/* harmony import */ var bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! bpmnlint/rules/single-event-definition */ "./node_modules/bpmnlint/rules/single-event-definition.js");
/* harmony import */ var bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! bpmnlint/rules/start-event-required */ "./node_modules/bpmnlint/rules/start-event-required.js");
/* harmony import */ var bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! bpmnlint/rules/sub-process-blank-start-event */ "./node_modules/bpmnlint/rules/sub-process-blank-start-event.js");
/* harmony import */ var bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var bpmnlint_rules_superfluous_gateway__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! bpmnlint/rules/superfluous-gateway */ "./node_modules/bpmnlint/rules/superfluous-gateway.js");
/* harmony import */ var bpmnlint_rules_superfluous_gateway__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_superfluous_gateway__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var bpmnlint_rules_superfluous_termination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! bpmnlint/rules/superfluous-termination */ "./node_modules/bpmnlint/rules/superfluous-termination.js");
/* harmony import */ var bpmnlint_rules_superfluous_termination__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_superfluous_termination__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var bpmnlint_plugin_camunda_rules_avoid_lanes__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! bpmnlint-plugin-camunda/rules/avoid-lanes */ "./node_modules/bpmnlint-plugin-camunda/rules/avoid-lanes.js");
/* harmony import */ var bpmnlint_plugin_camunda_rules_avoid_lanes__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_plugin_camunda_rules_avoid_lanes__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var bpmnlint_plugin_camunda_rules_forking_conditions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! bpmnlint-plugin-camunda/rules/forking-conditions */ "./node_modules/bpmnlint-plugin-camunda/rules/forking-conditions.js");
/* harmony import */ var bpmnlint_plugin_camunda_rules_forking_conditions__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_plugin_camunda_rules_forking_conditions__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var bpmnlint_plugin_camunda_rules_implementation__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! bpmnlint-plugin-camunda/rules/implementation */ "./node_modules/bpmnlint-plugin-camunda/rules/implementation.js");
/* harmony import */ var bpmnlint_plugin_camunda_rules_implementation__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_plugin_camunda_rules_implementation__WEBPACK_IMPORTED_MODULE_27__);

const cache = {};

/**
 * A resolver that caches rules and configuration as part of the bundle,
 * making them accessible in the browser.
 *
 * @param {Object} cache
 */
function Resolver() {}

Resolver.prototype.resolveRule = function(pkg, ruleName) {

  const rule = cache[pkg + '/' + ruleName];

  if (!rule) {
    throw new Error('cannot resolve rule <' + pkg + '/' + ruleName + '>: not bundled');
  }

  return rule;
};

Resolver.prototype.resolveConfig = function(pkg, configName) {
  throw new Error(
    'cannot resolve config <' + configName + '> in <' + pkg +'>: not bundled'
  );
};

const resolver = new Resolver();

const rules = {
  "ad-hoc-sub-process": "error",
  "conditional-flows": "error",
  "end-event-required": "error",
  "event-based-gateway": "error",
  "event-sub-process-typed-start-event": "error",
  "fake-join": "warn",
  "global": "warn",
  "label-required": "error",
  "link-event": "error",
  "no-bpmndi": "error",
  "no-complex-gateway": "error",
  "no-disconnected": "error",
  "no-duplicate-sequence-flows": "error",
  "no-gateway-join-fork": "error",
  "no-implicit-split": "error",
  "no-implicit-end": "error",
  "no-implicit-start": "error",
  "no-inclusive-gateway": "error",
  "no-overlapping-elements": "warn",
  "single-blank-start-event": "error",
  "single-event-definition": "error",
  "start-event-required": "error",
  "sub-process-blank-start-event": "error",
  "superfluous-gateway": "warn",
  "superfluous-termination": "warn",
  "camunda/avoid-lanes": "warn",
  "camunda/forking-conditions": "error",
  "camunda/implementation": "warning"
};

const config = {
  rules: rules
};

const bundle = {
  resolver: resolver,
  config: config
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bundle);



cache['bpmnlint/ad-hoc-sub-process'] = (bpmnlint_rules_ad_hoc_sub_process__WEBPACK_IMPORTED_MODULE_0___default());



cache['bpmnlint/conditional-flows'] = (bpmnlint_rules_conditional_flows__WEBPACK_IMPORTED_MODULE_1___default());



cache['bpmnlint/end-event-required'] = (bpmnlint_rules_end_event_required__WEBPACK_IMPORTED_MODULE_2___default());



cache['bpmnlint/event-based-gateway'] = (bpmnlint_rules_event_based_gateway__WEBPACK_IMPORTED_MODULE_3___default());



cache['bpmnlint/event-sub-process-typed-start-event'] = (bpmnlint_rules_event_sub_process_typed_start_event__WEBPACK_IMPORTED_MODULE_4___default());



cache['bpmnlint/fake-join'] = (bpmnlint_rules_fake_join__WEBPACK_IMPORTED_MODULE_5___default());



cache['bpmnlint/global'] = (bpmnlint_rules_global__WEBPACK_IMPORTED_MODULE_6___default());



cache['bpmnlint/label-required'] = (bpmnlint_rules_label_required__WEBPACK_IMPORTED_MODULE_7___default());



cache['bpmnlint/link-event'] = (bpmnlint_rules_link_event__WEBPACK_IMPORTED_MODULE_8___default());



cache['bpmnlint/no-bpmndi'] = (bpmnlint_rules_no_bpmndi__WEBPACK_IMPORTED_MODULE_9___default());



cache['bpmnlint/no-complex-gateway'] = (bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_10___default());



cache['bpmnlint/no-disconnected'] = (bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_11___default());



cache['bpmnlint/no-duplicate-sequence-flows'] = (bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_12___default());



cache['bpmnlint/no-gateway-join-fork'] = (bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_13___default());



cache['bpmnlint/no-implicit-split'] = (bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_14___default());



cache['bpmnlint/no-implicit-end'] = (bpmnlint_rules_no_implicit_end__WEBPACK_IMPORTED_MODULE_15___default());



cache['bpmnlint/no-implicit-start'] = (bpmnlint_rules_no_implicit_start__WEBPACK_IMPORTED_MODULE_16___default());



cache['bpmnlint/no-inclusive-gateway'] = (bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_17___default());



cache['bpmnlint/no-overlapping-elements'] = (bpmnlint_rules_no_overlapping_elements__WEBPACK_IMPORTED_MODULE_18___default());



cache['bpmnlint/single-blank-start-event'] = (bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_19___default());



cache['bpmnlint/single-event-definition'] = (bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_20___default());



cache['bpmnlint/start-event-required'] = (bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_21___default());



cache['bpmnlint/sub-process-blank-start-event'] = (bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_22___default());



cache['bpmnlint/superfluous-gateway'] = (bpmnlint_rules_superfluous_gateway__WEBPACK_IMPORTED_MODULE_23___default());



cache['bpmnlint/superfluous-termination'] = (bpmnlint_rules_superfluous_termination__WEBPACK_IMPORTED_MODULE_24___default());



cache['bpmnlint-plugin-camunda/avoid-lanes'] = (bpmnlint_plugin_camunda_rules_avoid_lanes__WEBPACK_IMPORTED_MODULE_25___default());



cache['bpmnlint-plugin-camunda/forking-conditions'] = (bpmnlint_plugin_camunda_rules_forking_conditions__WEBPACK_IMPORTED_MODULE_26___default());



cache['bpmnlint-plugin-camunda/implementation'] = (bpmnlint_plugin_camunda_rules_implementation__WEBPACK_IMPORTED_MODULE_27___default());

/***/ }),

/***/ "./node_modules/bpmnlint-plugin-camunda/rules/avoid-lanes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bpmnlint-plugin-camunda/rules/avoid-lanes.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * Rule that reports the usage of lanes.
 */
module.exports = function() {

  function check(node, reporter) {
    if (is(node, 'bpmn:Lane')) {
      reporter.report(node.id, 'lanes should be avoided');
    }
  }

  return {
    check: check
  };
};


/***/ }),

/***/ "./node_modules/bpmnlint-plugin-camunda/rules/forking-conditions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bpmnlint-plugin-camunda/rules/forking-conditions.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * A rule that checks that sequence flows after
 * an exclusive forking gateway have conditions
 * attached.
 */
module.exports = function() {

  function check(node, reporter) {

    const outgoing = node.outgoing || [];

    if (!is(node, 'bpmn:ExclusiveGateway') || outgoing.length < 2) {
      return;
    }

    outgoing.forEach((flow) => {
      const missingCondition = (
        !hasCondition(flow) &&
        !isDefaultFlow(node, flow)
      );

      if (missingCondition) {
        reporter.report(flow.id, 'Sequence flow is missing condition');
      }
    });
  }

  return {
    check
  };

};


// helpers /////////////////////////////

function hasCondition(flow) {
  return !!flow.conditionExpression;
}

function isDefaultFlow(node, flow) {
  return node['default'] === flow;
}

/***/ }),

/***/ "./node_modules/bpmnlint-plugin-camunda/rules/implementation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bpmnlint-plugin-camunda/rules/implementation.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const implementationAttributes = [
  'camunda:expression',
  'camunda:delegateExpression',
  'camunda:class',
  'camunda:type'
];

/**
 * Rule that reports the usage of collapsed sub-processes.
 */
module.exports = function() {

  function check(node, reporter) {
    if (is(node, 'camunda:ServiceTaskLike')) {

      const process = findNodeProcess(node);

      if (!process || !process.get('isExecutable')) {
        return;
      }

      if (
        hasConnector(node) ||
        hasAnyAttribute(node, implementationAttributes)
      ) {
        return;
      }

      if (is(node, 'bpmn:BusinessRuleTask') && hasAttribute(node, 'camunda:decisionRef')) {
        return;
      }

      reporter.report(node.id, 'Implementation is missing');
    }
  }

  return {
    check: check
  };
};

function findNodeProcess(node) {
  let parent = node.$parent;

  while (parent && !is(parent, 'bpmn:Process')) {
    parent = parent.$parent;
  }

  return parent;
}

function hasConnector(bpmnElement) {
  const extensionElements = bpmnElement.get('extensionElements');

  if (!extensionElements) {
    return false;
  }

  return extensionElements.get('values').some(function(extension) {
    return is(extension, 'camunda:Connector');
  });
}

function hasAnyAttribute(bpmnElement, attributes) {
  return attributes.some(function(attribute) {
    return hasAttribute(bpmnElement, attribute);
  });
}

function hasAttribute(bpmnElement, attribute) {
  return bpmnElement.get(attribute) !== undefined;
}


/***/ }),

/***/ "./node_modules/bpmnlint-utils/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/bpmnlint-utils/dist/index.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   isAny: () => (/* binding */ isAny)
/* harmony export */ });
/**
 * Checks whether node is of specific bpmn type.
 *
 * @param {ModdleElement} node
 * @param {String} type
 *
 * @return {Boolean}
 */
function is(node, type) {

  if (type.indexOf(':') === -1) {
    type = 'bpmn:' + type;
  }

  return (
    (typeof node.$instanceOf === 'function')
      ? node.$instanceOf(type)
      : node.$type === type
  );
}

/**
 * Checks whether node has any of the specified types.
 *
 * @param {ModdleElement} node
 * @param {Array<String>} types
 *
 * @return {Boolean}
 */
function isAny(node, types) {
  return types.some(function(type) {
    return is(node, type);
  });
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/bpmnlint/rules/ad-hoc-sub-process.js":
/*!***********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/ad-hoc-sub-process.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that ensures that an Ad Hoc Sub Process is valid according to the BPMN spec:
 *
 * - No start or end events
 * - Every intermediate event has an outgoing sequence flow
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:AdHocSubProcess')) {
      return;
    }

    const flowElements = node.flowElements || [];

    flowElements.forEach(function(flowElement) {

      if (is(flowElement, 'bpmn:StartEvent')) {
        reporter.report(flowElement.id, 'A <Start Event> is not allowed in <Ad Hoc Sub Process>');
      }

      if (is(flowElement, 'bpmn:EndEvent')) {
        reporter.report(flowElement.id, 'An <End Event> is not allowed in <Ad Hoc Sub Process>');
      }
    });
  }

  return annotateRule('ad-hoc-sub-process', {
    check
  });

};


/***/ }),

/***/ "./node_modules/bpmnlint/rules/conditional-flows.js":
/*!**********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/conditional-flows.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks that sequence flows outgoing from a
 * conditional forking gateway or activity are
 * either default flows _or_ have a condition attached
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isConditionalForking(node)) {
      return;
    }

    const outgoing = node.outgoing || [];

    outgoing.forEach((flow) => {
      const missingCondition = (
        !hasCondition(flow) &&
        !isDefaultFlow(node, flow)
      );

      if (missingCondition) {
        reporter.report(flow.id, 'Sequence flow is missing condition', [ 'conditionExpression' ]);
      }
    });
  }

  return annotateRule('conditional-flows', {
    check
  });

};


// helpers /////////////////////////////

function isConditionalForking(node) {

  const defaultFlow = node['default'];
  const outgoing = node.outgoing || [];

  return defaultFlow || outgoing.find(hasCondition);
}

function hasCondition(flow) {
  return !!flow.conditionExpression;
}

function isDefaultFlow(node, flow) {
  return node['default'] === flow;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/end-event-required.js":
/*!***********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/end-event-required.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is,
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks the presence of an end event per scope.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function hasEndEvent(node) {
    const flowElements = node.flowElements || [];

    return (
      flowElements.some(node => is(node, 'bpmn:EndEvent'))
    );
  }

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Process',
      'bpmn:SubProcess'
    ]) || is(node, 'bpmn:AdHocSubProcess')) {
      return;
    }

    if (!hasEndEvent(node)) {
      const type = is(node, 'bpmn:SubProcess') ? 'Sub process' : 'Process';

      reporter.report(node.id, type + ' is missing end event');
    }
  }

  return annotateRule('end-event-required', {
    check
  });
};


/***/ }),

/***/ "./node_modules/bpmnlint/rules/event-based-gateway.js":
/*!************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/event-based-gateway.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks, whether an event-based gateway:
 * - has at least two outgoing sequence flows
 * - the outgoing sequence flows are not conditional
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:EventBasedGateway')) {
      return;
    }

    const outgoing = node.outgoing || [];

    if (outgoing.length < 2) {
      reporter.report(node.id, 'An <Event-based Gateway> must have at least 2 outgoing <Sequence Flow>');
    }

    outgoing.forEach((flow) => {
      if (hasCondition(flow)) {
        reporter.report(flow.id, 'A <Sequence Flow> outgoing from an <Event-based Gateway> must not be conditional');
      }
    });
  }

  return annotateRule('event-based-gateway', {
    check
  });
};

function hasCondition(flow) {
  return !!flow.conditionExpression;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/event-sub-process-typed-start-event.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/event-sub-process-typed-start-event.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks that start events inside an event sub-process
 * are typed.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:SubProcess') || !node.triggeredByEvent) {
      return;
    }

    const flowElements = node.flowElements || [];

    flowElements.forEach(function(flowElement) {

      if (!is(flowElement, 'bpmn:StartEvent')) {
        return false;
      }

      const eventDefinitions = flowElement.eventDefinitions || [];

      if (eventDefinitions.length === 0) {
        reporter.report(flowElement.id, 'Start event is missing event definition', [ 'eventDefinitions' ]);
      }
    });
  }

  return annotateRule('event-sub-process-typed-start-event', {
    check
  });

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/fake-join.js":
/*!**************************************************!*\
  !*** ./node_modules/bpmnlint/rules/fake-join.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks that no fake join is modeled by attempting
 * to give a task or event join semantics.
 *
 * Users should model a parallel joining gateway
 * to achieve the desired behavior.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Activity',
      'bpmn:Event'
    ])) {
      return;
    }

    const incoming = node.incoming || [];

    if (incoming.length > 1) {
      reporter.report(node.id, 'Incoming flows do not join');
    }
  }

  return annotateRule('fake-join', {
    check
  });

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/global.js":
/*!***********************************************!*\
  !*** ./node_modules/bpmnlint/rules/global.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is,
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that verifies that global elements are properly used.
 *
 * Currently recognized global elements are:
 *
 *   * `bpmn:Error`
 *   * `bpmn:Escalation`
 *   * `bpmn:Message`
 *   * `bpmn:Signal`
 *
 * For each of these elements proper usage implies:
 *
 *   * element must have a name
 *   * element is referenced by at least one element
 *   * there exists only a single element per type with a given name
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:Definitions')) {
      return false;
    }

    const rootElements = getRootElements(node);

    const referencingElements = getReferencingElements(node);

    rootElements.forEach(rootElement => {
      if (!hasName(rootElement)) {
        reporter.report(rootElement.id, 'Element is missing name');
      }

      if (!isReferenced(rootElement, referencingElements)) {
        reporter.report(rootElement.id, 'Element is unused');
      }

      if (!isUnique(rootElement, rootElements)) {
        reporter.report(rootElement.id, 'Element name is not unique');
      }
    });

  }

  return annotateRule('global', {
    check
  });

  // helpers /////////////////////////////

  function getRootElements(definitions) {
    return definitions.rootElements.filter(node => isAny(node, [ 'bpmn:Error', 'bpmn:Escalation', 'bpmn:Message', 'bpmn:Signal' ]));
  }

  function getReferencingElements(definitions) {
    const referencingElements = [];

    function traverse(element) {
      if (is(element, 'bpmn:Definitions') && element.get('rootElements').length) {
        element.get('rootElements').forEach(traverse);
      }

      if (is(element, 'bpmn:FlowElementsContainer') && element.get('flowElements').length) {
        element.get('flowElements').forEach(traverse);
      }

      if (is(element, 'bpmn:Event') && element.get('eventDefinitions').length) {
        element.get('eventDefinitions').forEach(eventDefinition => referencingElements.push(eventDefinition));
      }

      if (is(element, 'bpmn:Collaboration') && element.get('messageFlows').length) {
        element.get('messageFlows').forEach(traverse);
      }

      if (isAny(element, [
        'bpmn:MessageFlow',
        'bpmn:ReceiveTask',
        'bpmn:SendTask'
      ])) {
        referencingElements.push(element);
      }
    }

    traverse(definitions);

    return referencingElements;
  }

  function hasName(event) {
    return (
      event.name?.trim() !== ''
    );
  }

  function isReferenced(rootElement, referencingElements) {
    if (is(rootElement, 'bpmn:Error')) {
      return referencingElements.some(referencingElement => {
        return is(referencingElement, 'bpmn:ErrorEventDefinition')
          && rootElement.get('id') === referencingElement.get('errorRef')?.get('id');
      });
    }

    if (is(rootElement, 'bpmn:Escalation')) {
      return referencingElements.some(referencingElement => {
        return is(referencingElement, 'bpmn:EscalationEventDefinition')
          && rootElement.get('id') === referencingElement.get('escalationRef')?.get('id');
      });
    }

    if (is(rootElement, 'bpmn:Message')) {
      return referencingElements.some(referencingElement => {
        return isAny(referencingElement, [
          'bpmn:MessageEventDefinition',
          'bpmn:MessageFlow',
          'bpmn:ReceiveTask',
          'bpmn:SendTask'
        ]) && rootElement.get('id') === referencingElement.get('messageRef')?.get('id');
      });
    }

    if (is(rootElement, 'bpmn:Signal')) {
      return referencingElements.some(referencingElement => {
        return is(referencingElement, 'bpmn:SignalEventDefinition')
          && rootElement.get('id') === referencingElement.get('signalRef')?.get('id');
      });
    }
  }

  function isUnique(rootElement, rootElements) {
    return (
      rootElements.filter(otherRootElement => is(otherRootElement, rootElement.$type) && rootElement.name === otherRootElement.name).length === 1
    );
  }
};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/helper.js":
/*!***********************************************!*\
  !*** ./node_modules/bpmnlint/rules/helper.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * @typedef { import('../lib/types.js').ModdleElement } ModdleElement
 *
 * @typedef { import('../lib/types.js').RuleFactory } RuleFactory
 * @typedef { import('../lib/types.js').RuleDefinition } RuleDefinition
 */


/**
 * Create a checker that disallows the given element type.
 *
 * @param { string } type
 *
 * @return { RuleFactory } ruleFactory
 */
function checkDiscouragedNodeType(type, ruleName) {

  /**
   * @type { RuleFactory }
   */
  return function() {

    function check(node, reporter) {

      if (is(node, type)) {
        reporter.report(node.id, 'Element type <' + type + '> is discouraged');
      }
    }

    return annotateRule(ruleName, {
      check
    });

  };

}

module.exports.checkDiscouragedNodeType = checkDiscouragedNodeType;


/**
 * Find a parent for the given element
 *
 * @param { ModdleElement } node
 * @param { string } type
 *
 * @return { ModdleElement } element
 */
function findParent(node, type) {
  if (!node) {
    return null;
  }

  const parent = node.$parent;

  if (!parent) {
    return node;
  }

  if (is(parent, type)) {
    return parent;
  }

  return findParent(parent, type);
}

module.exports.findParent = findParent;


const documentationBaseUrl = 'https://github.com/bpmn-io/bpmnlint/blob/main/docs/rules';

/**
 * Annotate a rule with core information, such as the documentation url.
 *
 * @param {string} ruleName
 * @param {RuleDefinition} options
 *
 * @return {RuleDefinition}
 */
function annotateRule(ruleName, options) {

  const {
    meta: {
      documentation = {},
      ...restMeta
    } = {},
    ...restOptions
  } = options;

  const documentationUrl = `${documentationBaseUrl}/${ruleName}.md`;

  return {
    meta: {
      documentation: {
        url: documentationUrl,
        ...documentation
      },
      ...restMeta
    },
    ...restOptions
  };
}

module.exports.annotateRule = annotateRule;

/***/ }),

/***/ "./node_modules/bpmnlint/rules/label-required.js":
/*!*******************************************************!*\
  !*** ./node_modules/bpmnlint/rules/label-required.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is,
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks the presence of a label.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (isAny(node, [
      'bpmn:ParallelGateway',
      'bpmn:EventBasedGateway'
    ])) {
      return;
    }

    // ignore joining gateways
    if (is(node, 'bpmn:Gateway') && !isForking(node)) {
      return;
    }

    // ignore sub-processes
    if (is(node, 'bpmn:SubProcess')) {

      // TODO(nikku): better ignore expanded sub-processes only
      return;
    }

    // ignore sequence flow without condition
    if (is(node, 'bpmn:SequenceFlow') && !hasCondition(node)) {
      return;
    }

    // ignore data objects and artifacts for now
    if (isAny(node, [
      'bpmn:FlowNode',
      'bpmn:SequenceFlow',
      'bpmn:Participant',
      'bpmn:Lane'
    ])) {

      const name = (node.name || '').trim();

      if (name.length === 0) {
        reporter.report(node.id, 'Element is missing label/name', [ 'name' ]);
      }
    }
  }

  return annotateRule('label-required', {
    check
  });
};


// helpers ////////////////////////

function isForking(node) {
  const outgoing = node.outgoing || [];

  return outgoing.length > 1;
}

function hasCondition(node) {
  return node.conditionExpression;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/link-event.js":
/*!***************************************************!*\
  !*** ./node_modules/bpmnlint/rules/link-event.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  groupBy
} = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.cjs");

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that verifies that link events are properly used.
 *
 * This implies:
 *
 *   * for every link throw there exists a link catch within
 *     the same scope, and vice versa
 *   * there exists only a single pair of [ throw, catch ] links
 *     with a given name, per scope
 *   * link events have a name
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:FlowElementsContainer')) {
      return;
    }

    const links = (node.flowElements || []).filter(isLinkEvent);

    for (const link of links) {
      if (!getLinkName(link)) {
        reporter.report(link.id, 'Link event is missing link name');
      }
    }

    const names = groupBy(links, link => getLinkName(link));

    for (const [ name, events ] of Object.entries(names)) {

      // ignore unnamed (validated earlier)
      if (!name) {
        continue;
      }

      // missing catch or throw event
      if (events.length === 1) {
        const event = events[0];

        reporter.report(event.id, `Link ${isThrowEvent(event) ? 'catch' : 'throw' } event with link name <${ name }> missing in scope`);
        continue;
      }

      const catchEvents = events.filter(isCatchEvent);
      if (catchEvents.length > 1) {
        for (const event of catchEvents) {
          reporter.report(event.id, `Duplicate link catch event with link name <${name}> in scope`);
        }
      } else if (catchEvents.length === 0) {

        // all events in scope are throw events
        for (const event of events) {
          reporter.report(event.id, `Link catch event with link name <${ name }> missing in scope`);
        }
      }
    }

  }

  return annotateRule('link-event', {
    check
  });
};


// helpers /////////////////

function isLinkEvent(node) {

  var eventDefinitions = node.eventDefinitions || [];

  if (!is(node, 'bpmn:Event')) {
    return false;
  }

  return eventDefinitions.some(
    definition => is(definition, 'bpmn:LinkEventDefinition')
  );
}

function getLinkName(linkEvent) {
  return linkEvent.get('eventDefinitions').find(def => is(def, 'bpmn:LinkEventDefinition')).name;
}

function isThrowEvent(node) {
  return is(node, 'bpmn:ThrowEvent');
}

function isCatchEvent(node) {
  return is(node, 'bpmn:CatchEvent');
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-bpmndi.js":
/*!**************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-bpmndi.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  flatten
} = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.cjs");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");

/**
 * @typedef { import('../lib/types.js').ModdleElement } ModdleElement
 */


/**
 * A rule that checks that there is no BPMNDI information missing for elements,
 * which require BPMNDI.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:Definitions')) {
      return false;
    }

    // (1) Construct array of all BPMN elements
    const bpmnElements = getAllBpmnElements(node.rootElements);

    // (2) Filter BPMN elements without visual representation
    const visualBpmnElements = bpmnElements.filter(hasVisualRepresentation);

    // (3) Construct array of BPMNDI references
    const diBpmnReferences = getAllDiBpmnReferences(node);

    // (4) Report elements without BPMNDI
    visualBpmnElements.forEach((element) => {
      if (diBpmnReferences.indexOf(element.id) === -1) {
        reporter.report(element.id, 'Element is missing bpmndi');
      }
    });
  }

  return annotateRule('no-bpmndi', {
    check
  });

};


// helpers /////////////////////////////

/**
 * Get all BPMN elements within a bpmn:Definitions node
 *
 * @param { ModdleElement[] } rootElements - An array of Moddle rootElements
 *
 * @return { { id: string, $type: string }[] } A flat array with all BPMN elements, each represented with { id: elementId, $type: elementType }
 */
function getAllBpmnElements(rootElements) {

  return flatten(rootElements.map((rootElement) => {
    const laneSet =
      rootElement.laneSets && rootElement.laneSets[0] || rootElement.childLaneSet;

    // Include
    // * flowElements (e.g., tasks, sequenceFlows),
    // * nested flowElements,
    // * participants,
    // * artifacts (groups),
    // * laneSets
    // * nested laneSets
    // * childLaneSets
    // * nested childLaneSets
    // * messageFlows
    const elements = flatten([
      rootElement.flowElements || [],
      (rootElement.flowElements && getAllBpmnElements(rootElement.flowElements.filter(hasFlowElements))) || [],
      rootElement.participants || [],
      rootElement.artifacts || [],
      laneSet && laneSet.lanes || [],
      laneSet && laneSet.lanes && getAllBpmnElements(laneSet.lanes.filter(hasChildLaneSet)) || [],
      rootElement.messageFlows || []
    ]);

    if (elements.length > 0) {
      return elements.map((element) => {

        return {
          id: element.id,
          $type: element.$type
        };
      });
    } else {

      // We are not interested in the rest here (DI)
      return [];
    }
  }));
}

/**
 * Get all BPMN elements within a bpmn:Definitions node
 *
 * @param {ModdleElement} definitionsNode - A moddleElement representing the
 *   bpmn:Definitions element
 *
 * @return {string[]} ids of all BPMNDI element part of
 *   this bpmn:Definitions node
 */
function getAllDiBpmnReferences(definitionsNode) {
  return flatten(
    definitionsNode.get('diagrams').map((diagram) => {

      const diElements = diagram.plane.planeElement || [];

      return diElements.map((element) => {

        return element.bpmnElement?.id;
      });
    })
  );
}

/**
 * @param { ModdleElement } element
 *
 * @return {boolean}
 */
function hasVisualRepresentation(element) {
  const noVisRepresentation = [ 'bpmn:DataObject' ];

  return noVisRepresentation.includes(element.$type) ? false : true;
}

/**
 * @param { ModdleElement } element
 *
 * @return {boolean}
 */
function hasFlowElements(element) {
  return element.flowElements ? true : false;
}

/**
 * @param { ModdleElement } element
 *
 * @return {boolean}
 */
function hasChildLaneSet(element) {
  return element.childLaneSet ? true : false;
}


/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-complex-gateway.js":
/*!***********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-complex-gateway.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const checkDiscouragedNodeType = (__webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js").checkDiscouragedNodeType);

module.exports = checkDiscouragedNodeType('bpmn:ComplexGateway', 'no-complex-gateway');

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-disconnected.js":
/*!********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-disconnected.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  isAny,
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that verifies that there exists no disconnected
 * flow elements, i.e. elements without incoming or outgoing sequence flows.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Task',
      'bpmn:Gateway',
      'bpmn:SubProcess',
      'bpmn:Event'
    ]) || node.triggeredByEvent) {
      return;
    }

    // compensation activity and boundary events are
    // linked visually via associations. If these associations
    // exist we are fine, too
    if (isCompensationLinked(node)) {
      return;
    }

    // adhoc subprocesses can have disconnected activities
    if (is(node.$parent, 'bpmn:AdHocSubProcess')) {
      return;
    }

    const incoming = node.incoming || [];
    const outgoing = node.outgoing || [];

    if (!incoming.length && !outgoing.length) {
      reporter.report(node.id, 'Element is not connected');
    }
  }

  return annotateRule('no-disconnected', {
    check
  });
};


// helpers /////////////////

function isCompensationBoundary(node) {

  var eventDefinitions = node.eventDefinitions;

  if (!is(node, 'bpmn:BoundaryEvent')) {
    return false;
  }

  if (!eventDefinitions || eventDefinitions.length !== 1) {
    return false;
  }

  return is(eventDefinitions[0], 'bpmn:CompensateEventDefinition');
}

function isCompensationActivity(node) {
  return node.isForCompensation;
}

function isCompensationLinked(node) {
  var source = isCompensationBoundary(node);
  var target = isCompensationActivity(node);

  // TODO(nikku): check, whether compensation association exists
  return source || target;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-duplicate-sequence-flows.js":
/*!********************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-duplicate-sequence-flows.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that verifies that there are no disconnected
 * flow elements, i.e. elements without incoming or outgoing sequence flows.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  const keyed = {};

  const outgoingReported = {};
  const incomingReported = {};

  function check(node, reporter) {

    if (!is(node, 'bpmn:SequenceFlow')) {
      return;
    }

    const key = flowKey(node);

    if (key in keyed) {
      reporter.report(node.id, 'SequenceFlow is a duplicate');

      const sourceId = node.sourceRef.id;
      const targetId = node.targetRef.id;

      if (!outgoingReported[sourceId]) {
        reporter.report(sourceId, 'Duplicate outgoing sequence flows');

        outgoingReported[sourceId] = true;
      }

      if (!incomingReported[targetId]) {
        reporter.report(targetId, 'Duplicate incoming sequence flows');

        incomingReported[targetId] = true;
      }
    } else {
      keyed[key] = node;
    }
  }

  return annotateRule('no-duplicate-sequence-flows', {
    check
  });

};


// helpers /////////////////

function flowKey(flow) {
  const conditionExpression = flow.conditionExpression;

  const condition = conditionExpression ? conditionExpression.body : '';
  const source = flow.sourceRef ? flow.sourceRef.id : flow.id;
  const target = flow.targetRef ? flow.targetRef.id : flow.id;

  return source + '#' + target + '#' + condition;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-gateway-join-fork.js":
/*!*************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-gateway-join-fork.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks, whether a gateway forks and joins
 * at the same time.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:Gateway')) {
      return;
    }

    const incoming = node.incoming || [];
    const outgoing = node.outgoing || [];

    if (incoming.length > 1 && outgoing.length > 1) {
      reporter.report(node.id, 'Gateway forks and joins');
    }
  }

  return annotateRule('no-gateway-join-fork', {
    check
  });

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-implicit-end.js":
/*!********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-implicit-end.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is,
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  findParent,
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks that an element is not an implicit end (token sink).
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function isLinkEvent(node) {
    const eventDefinitions = node.eventDefinitions || [];

    return eventDefinitions.length && eventDefinitions.every(
      definition => is(definition, 'bpmn:LinkEventDefinition')
    );
  }

  function isCompensationEvent(node) {
    const eventDefinitions = node.eventDefinitions || [];

    return eventDefinitions.length && eventDefinitions.every(
      definition => is(definition, 'bpmn:CompensateEventDefinition')
    );
  }

  function hasCompensationActivity(node) {
    const parent = findParent(node, 'bpmn:Process');

    const artifacts = parent.artifacts || [];

    return artifacts.some((element) => {
      if (!is(element, 'bpmn:Association')) {
        return false;
      }

      const source = element.sourceRef;

      return source.id === node.id;
    });
  }

  function isForCompensation(node) {
    return node.isForCompensation;
  }

  function isImplicitEnd(node) {
    const outgoing = node.outgoing || [];

    if (is(node, 'bpmn:SubProcess') && node.triggeredByEvent) {
      return false;
    }

    if (is(node, 'bpmn:IntermediateThrowEvent') && isLinkEvent(node)) {
      return false;
    }

    if (is(node.$parent, 'bpmn:AdHocSubProcess')) {
      return false;
    }

    if (is(node, 'bpmn:EndEvent')) {
      return false;
    }

    if (is(node, 'bpmn:BoundaryEvent') && isCompensationEvent(node) && hasCompensationActivity(node)) {
      return false;
    }

    if (is(node, 'bpmn:Task') && isForCompensation(node)) {
      return false;
    }

    return outgoing.length === 0;
  }

  function check(node, reporter) {

    if (!isAny(node, [ 'bpmn:Event', 'bpmn:Activity', 'bpmn:Gateway' ])) {
      return;
    }

    if (isImplicitEnd(node)) {
      reporter.report(node.id, 'Element is an implicit end');
    }
  }

  return annotateRule('no-implicit-end', {
    check
  });
};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-implicit-split.js":
/*!**********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-implicit-split.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks that no implicit split is modeled
 * starting from a task.
 *
 * Users should model the parallel splitting gateway
 * explicitly instead.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Activity',
      'bpmn:Event'
    ])) {
      return;
    }

    const outgoing = node.outgoing || [];

    const outgoingWithoutCondition = outgoing.filter((flow) => {
      return !hasCondition(flow) && !isDefaultFlow(node, flow);
    });

    if (outgoingWithoutCondition.length > 1) {
      reporter.report(node.id, 'Flow splits implicitly');
    }
  }

  return annotateRule('no-implicit-split', {
    check
  });

};


// helpers /////////////////////////////

function hasCondition(flow) {
  return !!flow.conditionExpression;
}

function isDefaultFlow(node, flow) {
  return node['default'] === flow;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-implicit-start.js":
/*!**********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-implicit-start.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is,
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");

/**
 * A rule that checks that an element is not an implicit start (token spawn).
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function isLinkEvent(node) {
    const eventDefinitions = node.eventDefinitions || [];

    return eventDefinitions.length && eventDefinitions.every(
      definition => is(definition, 'bpmn:LinkEventDefinition')
    );
  }

  function isImplicitStart(node) {
    const incoming = node.incoming || [];

    if (is(node, 'bpmn:Activity') && node.isForCompensation) {
      return false;
    }

    if (is(node.$parent, 'bpmn:AdHocSubProcess')) {
      return false;
    }

    if (is(node, 'bpmn:SubProcess') && node.triggeredByEvent) {
      return false;
    }

    if (is(node, 'bpmn:IntermediateCatchEvent') && isLinkEvent(node)) {
      return false;
    }

    if (isAny(node, [ 'bpmn:StartEvent', 'bpmn:BoundaryEvent' ])) {
      return false;
    }

    return incoming.length === 0;
  }

  function check(node, reporter) {

    if (!isAny(node, [ 'bpmn:Event', 'bpmn:Activity', 'bpmn:Gateway' ])) {
      return;
    }

    if (isImplicitStart(node)) {
      reporter.report(node.id, 'Element is an implicit start');
    }
  }

  return annotateRule('no-implicit-start', {
    check
  });
};


/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-inclusive-gateway.js":
/*!*************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-inclusive-gateway.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const checkDiscouragedNodeType = (__webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js").checkDiscouragedNodeType);

module.exports = checkDiscouragedNodeType('bpmn:InclusiveGateway', 'no-inclusive-gateway');

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-overlapping-elements.js":
/*!****************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-overlapping-elements.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * Rule that checks if two elements overlap except:
 *
 * - Boundary events overlap their host
 * - Child elements overlap / are on top of their parent (e.g., elements within a subProcess)
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {
    if (!is(node, 'bpmn:Definitions')) {
      return;
    }

    const rootElements = node.rootElements || [];
    const elementsToReport = new Set();
    const elementsOutsideToReport = new Set();
    const diObjects = getAllDiObjects(node);
    const processElementsParentDiMap = new Map(); // map with sub/process as key and its parent boundary di object

    rootElements
      .filter(element => is(element, 'bpmn:Collaboration'))
      .forEach(collaboration => {
        const participants = collaboration.participants || [];
        checkElementsArray(participants, elementsToReport, diObjects);

        participants.forEach(participant => {
          processElementsParentDiMap.set(participant.processRef, diObjects.get(participant));
        });
      });

    rootElements
      .filter(element => is(element, 'bpmn:Process'))
      .forEach(process => {
        const parentDi = processElementsParentDiMap.get(process) || {};
        checkProcess(process, elementsToReport, elementsOutsideToReport, diObjects, parentDi);
      });

    // report elements
    elementsToReport.forEach(element => reporter.report(element.id, 'Element overlaps with other element'));
    elementsOutsideToReport.forEach(element => reporter.report(element.id, 'Element is outside of parent boundary'));
  }

  return annotateRule('no-overlapping-elements', {
    check
  });
};

// helpers /////////////////

/**
 * Recursively check subprocesses in a process
 * @param {Object} node Process or SubProcess
 * @param {Set} elementsToReport
 * @param {Set} elementsOutsideToReport
 * @param {Map} diObjects
 */
function checkProcess(node, elementsToReport, elementsOutsideToReport, diObjects, parentDi) {

  const flowElements = node.flowElements || [];

  const flowElementsWithDi = flowElements.filter(element => diObjects.has(element));

  // check child elements for overlap
  checkElementsArray(flowElementsWithDi, elementsToReport, diObjects);

  // check child elements outside parent boundary
  //
  //   * data objects do not have a visual representation
  //   * for historical reasons data store references may be
  //     outside of parent boundaries
  //
  flowElementsWithDi.forEach(element => {
    if (
      !is(element, 'bpmn:DataStoreReference') &&
      isOutsideParentBoundary(diObjects.get(element).bounds, parentDi.bounds)
    ) {
      elementsOutsideToReport.add(element);
    }
  });

  // recurse into subprocesses
  const subProcesses = flowElements.filter(element => is(element, 'bpmn:SubProcess'));
  subProcesses.forEach(subProcess => {
    const subProcessDi = diObjects.get(subProcess) || {};
    const subProcessParentBoundary = subProcessDi.isExpanded ? subProcessDi : {};
    checkProcess(subProcess, elementsToReport, elementsOutsideToReport, diObjects, subProcessParentBoundary);
  });
}

/**
 * @param {Array} elements
 * @param {Set} elementsToReport
 */
function checkElementsArray(elements, elementsToReport, diObjects) {
  for (let i = 0; i < elements.length - 1; i++) {
    const element = elements[i];

    for (let j = i + 1; j < elements.length; j++) {
      const element2 = elements[j];

      // ignore if Boundary events overlap their host
      // but still check if they overlap other elements
      if (element.attachedToRef === element2 || element2.attachedToRef === element) {
        continue;
      }

      const bounds1 = diObjects.get(element)?.bounds;
      const bounds2 = diObjects.get(element2)?.bounds;

      // ignore if an element doesn't have bounds
      if (!bounds1 || !bounds2) {
        continue;
      }

      if (isCollision(bounds1, bounds2)) {
        elementsToReport.add(element);
        elementsToReport.add(element2);
      }
    }
  }
}

/**
 * Check if child element is outside of parent boundary
 */
function isOutsideParentBoundary(childBounds, parentBounds) {
  if (!isValidShapeElement(childBounds) || !isValidShapeElement(parentBounds)) {
    return false;
  }

  const isTopLeftCornerInside = childBounds.x >= parentBounds.x && childBounds.y >= parentBounds.y;
  const isBottomRightCornerInside = childBounds.x + childBounds.width <= parentBounds.x + parentBounds.width && childBounds.y + childBounds.height <= parentBounds.y + parentBounds.height;
  const isInside = isTopLeftCornerInside && isBottomRightCornerInside;

  return !isInside;
}

/**
 * Check if two rectangle shapes collides
 */
function isCollision(firstBounds, secondBounds) {
  if (!isValidShapeElement(firstBounds) || !isValidShapeElement(secondBounds)) {
    return false;
  }

  const collisionX = firstBounds.x + firstBounds.width >= secondBounds.x && secondBounds.x + secondBounds.width >= firstBounds.x;
  const collisionY = firstBounds.y + firstBounds.height >= secondBounds.y && secondBounds.y + secondBounds.height >= firstBounds.y;

  // collision on both axis
  return collisionX && collisionY;
}

/**
 * Checks if shape bounds has all necessary values for collision check
 */
function isValidShapeElement(bounds) {
  return !!bounds && is(bounds, 'dc:Bounds') &&
    typeof (bounds.x) === 'number' &&
    typeof (bounds.y) === 'number' &&
    typeof (bounds.width) === 'number' &&
    typeof (bounds.height) === 'number';
}

/**
 * Get all di object as one map object
 * @param {Object} node bpmn:Definitions
 * @returns {Map<Object, Object>} map of di objects with element as key
 */
function getAllDiObjects(node) {
  const diObjects = new Map();
  const diagrams = node.diagrams || [];

  diagrams
    .filter(diagram => !!diagram.plane)
    .forEach(diagram => {
      const planeElements = diagram.plane.planeElement || [];
      planeElements
        .filter(planeElement => !!planeElement.bpmnElement)
        .forEach(planeElement => {
          diObjects.set(planeElement.bpmnElement, planeElement);
        });
    });

  return diObjects;
}


/***/ }),

/***/ "./node_modules/bpmnlint/rules/single-blank-start-event.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/single-blank-start-event.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks whether not more than one blank start event
 * exists per scope.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:FlowElementsContainer')) {
      return;
    }

    const flowElements = node.flowElements || [];

    const blankStartEvents = flowElements.filter(function(flowElement) {

      if (!is(flowElement, 'bpmn:StartEvent')) {
        return false;
      }

      const eventDefinitions = flowElement.eventDefinitions || [];

      return eventDefinitions.length === 0;
    });

    if (blankStartEvents.length > 1) {
      const type = is(node, 'bpmn:SubProcess') ? 'Sub process' : 'Process';

      reporter.report(node.id, type + ' has multiple blank start events');
    }
  }

  return annotateRule('single-blank-start-event', {
    check
  });

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/single-event-definition.js":
/*!****************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/single-event-definition.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that verifies that an event contains maximum one event definition.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:Event')) {
      return;
    }

    const eventDefinitions = node.eventDefinitions || [];

    if (eventDefinitions.length > 1) {
      reporter.report(node.id, 'Event has multiple event definitions', [ 'eventDefinitions' ]);
    }
  }

  return annotateRule('single-event-definition', {
    check
  });

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/start-event-required.js":
/*!*************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/start-event-required.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is,
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks for the presence of a start event per scope.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function hasStartEvent(node) {
    const flowElements = node.flowElements || [];

    return (
      flowElements.some(node => is(node, 'bpmn:StartEvent'))
    );
  }

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Process',
      'bpmn:SubProcess'
    ]) || is(node, 'bpmn:AdHocSubProcess')) {
      return;
    }

    if (!hasStartEvent(node)) {
      const type = is(node, 'bpmn:SubProcess') ? 'Sub process' : 'Process';

      reporter.report(node.id, type + ' is missing start event');
    }
  }

  return annotateRule('start-event-required', {
    check
  });
};


/***/ }),

/***/ "./node_modules/bpmnlint/rules/sub-process-blank-start-event.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/sub-process-blank-start-event.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks that start events inside a normal sub-processes
 * are blank (do not have an event definition).
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:SubProcess') || node.triggeredByEvent) {
      return;
    }

    const flowElements = node.flowElements || [];

    flowElements.forEach(function(flowElement) {

      if (!is(flowElement, 'bpmn:StartEvent')) {
        return false;
      }

      const eventDefinitions = flowElement.eventDefinitions || [];

      if (eventDefinitions.length > 0) {
        reporter.report(flowElement.id, 'Start event must be blank', [ 'eventDefinitions' ]);
      }
    });
  }

  return annotateRule('sub-process-blank-start-event', {
    check
  });

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/superfluous-gateway.js":
/*!************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/superfluous-gateway.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks, whether a gateway has only one source and target.
 *
 * Those gateways are superfluous since they don't do anything.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:Gateway')) {
      return;
    }

    const incoming = node.incoming || [];
    const outgoing = node.outgoing || [];

    if (incoming.length === 1 && outgoing.length === 1) {
      reporter.report(node.id, 'Gateway is superfluous. It only has one source and target.');
    }
  }

  return annotateRule('superfluous-gateway', {
    check
  });

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/superfluous-termination.js":
/*!****************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/superfluous-termination.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is,
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  annotateRule
} = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js");


/**
 * A rule that checks, whether a gateway has only one source and target.
 *
 * Those gateways are superfluous since they don't do anything.
 *
 * @type { import('../lib/types.js').RuleFactory }
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isAny(node, [ 'bpmn:Process', 'bpmn:SubProcess' ])) {
      return;
    }

    const flowElements = node.flowElements || [];

    const ends = flowElements.filter(
      element => is(element, 'bpmn:FlowNode') && (element.outgoing || []).length === 0
    );

    const terminateEnds = ends.filter(isTerminateEnd);

    if (terminateEnds.length !== 1) {

      // TODO(nikku): only detect basic cases, do not
      // do any kinds of elaborate flow analysis
      return;
    }

    const superfluous = ends.every(
      (end) => isInterruptingEventSub(end) || isTerminateEnd(end)
    );

    if (superfluous) {

      for (const node of terminateEnds) {
        reporter.report(node.id, 'Termination is superfluous.');
      }
    }
  }

  return annotateRule('superfluous-termination', {
    check
  });

};

function isTerminateEnd(element) {
  return is(element, 'bpmn:EndEvent') && (element.eventDefinitions || []).some(
    eventDefinition => is(eventDefinition, 'bpmn:TerminateEventDefinition')
  );
}

function isInterruptingEventSub(element) {
  const isEventSub = is(element, 'bpmn:SubProcess') && element.triggeredByEvent;

  return isEventSub && (element.flowElements || []).some(
    element => is(element, 'bpmn:StartEvent') && element.isInterrupting
  );
}

/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getModelerDirectory: () => (/* binding */ getModelerDirectory),
/* harmony export */   getPluginsDirectory: () => (/* binding */ getPluginsDirectory),
/* harmony export */   registerBpmnJSModdleExtension: () => (/* binding */ registerBpmnJSModdleExtension),
/* harmony export */   registerBpmnJSPlugin: () => (/* binding */ registerBpmnJSPlugin),
/* harmony export */   registerClientExtension: () => (/* binding */ registerClientExtension),
/* harmony export */   registerClientPlugin: () => (/* binding */ registerClientPlugin),
/* harmony export */   registerCloudBpmnJSModdleExtension: () => (/* binding */ registerCloudBpmnJSModdleExtension),
/* harmony export */   registerCloudBpmnJSPlugin: () => (/* binding */ registerCloudBpmnJSPlugin),
/* harmony export */   registerCloudDmnJSModdleExtension: () => (/* binding */ registerCloudDmnJSModdleExtension),
/* harmony export */   registerCloudDmnJSPlugin: () => (/* binding */ registerCloudDmnJSPlugin),
/* harmony export */   registerDmnJSModdleExtension: () => (/* binding */ registerDmnJSModdleExtension),
/* harmony export */   registerDmnJSPlugin: () => (/* binding */ registerDmnJSPlugin),
/* harmony export */   registerPlatformBpmnJSModdleExtension: () => (/* binding */ registerPlatformBpmnJSModdleExtension),
/* harmony export */   registerPlatformBpmnJSPlugin: () => (/* binding */ registerPlatformBpmnJSPlugin),
/* harmony export */   registerPlatformDmnJSModdleExtension: () => (/* binding */ registerPlatformDmnJSModdleExtension),
/* harmony export */   registerPlatformDmnJSPlugin: () => (/* binding */ registerPlatformDmnJSPlugin)
/* harmony export */ });
/**
 * Validate and register a client plugin.
 *
 * @param {Object} plugin
 * @param {String} type
 */
function registerClientPlugin(plugin, type) {
  var plugins = window.plugins || [];
  window.plugins = plugins;

  if (!plugin) {
    throw new Error('plugin not specified');
  }

  if (!type) {
    throw new Error('type not specified');
  }

  plugins.push({
    plugin: plugin,
    type: type
  });
}

/**
 * Validate and register a client plugin.
 *
 * @param {import('react').ComponentType} extension
 *
 * @example
 *
 * import MyExtensionComponent from './MyExtensionComponent';
 *
 * registerClientExtension(MyExtensionComponent);
 */
function registerClientExtension(component) {
  registerClientPlugin(component, 'client');
}

/**
 * Validate and register a bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerBpmnJSPlugin(BpmnJSModule);
 */
function registerBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.modeler.additionalModules');
}

/**
 * Validate and register a platform specific bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerPlatformBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerPlatformBpmnJSPlugin(BpmnJSModule);
 */
function registerPlatformBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.platform.modeler.additionalModules');
}

/**
 * Validate and register a cloud specific bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerCloudBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerCloudBpmnJSPlugin(BpmnJSModule);
 */
function registerCloudBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.cloud.modeler.additionalModules');
}

/**
 * Validate and register a bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerBpmnJSModdleExtension(moddleDescriptor);
 */
function registerBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.modeler.moddleExtension');
}

/**
 * Validate and register a platform specific bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerPlatformBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerPlatformBpmnJSModdleExtension(moddleDescriptor);
 */
function registerPlatformBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.platform.modeler.moddleExtension');
}

/**
 * Validate and register a cloud specific bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerCloudBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerCloudBpmnJSModdleExtension(moddleDescriptor);
 */
function registerCloudBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.cloud.modeler.moddleExtension');
}

/**
 * Validate and register a dmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerDmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerDmnJSModdleExtension(moddleDescriptor);
 */
function registerDmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'dmn.modeler.moddleExtension');
}

/**
 * Validate and register a cloud specific dmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerCloudDmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerCloudDmnJSModdleExtension(moddleDescriptor);
 */
function registerCloudDmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'dmn.cloud.modeler.moddleExtension');
}

/**
 * Validate and register a platform specific dmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerPlatformDmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerPlatformDmnJSModdleExtension(moddleDescriptor);
 */
function registerPlatformDmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'dmn.platform.modeler.moddleExtension');
}

/**
 * Validate and register a dmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerDmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const DmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerDmnJSPlugin(DmnJSModule, [ 'drd', 'literalExpression' ]);
 * registerDmnJSPlugin(DmnJSModule, 'drd')
 */
function registerDmnJSPlugin(module, components) {

  if (!Array.isArray(components)) {
    components = [ components ]
  }

  components.forEach(c => registerClientPlugin(module, `dmn.modeler.${c}.additionalModules`));
}

/**
 * Validate and register a cloud specific dmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerCloudDmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const DmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerCloudDmnJSPlugin(DmnJSModule, [ 'drd', 'literalExpression' ]);
 * registerCloudDmnJSPlugin(DmnJSModule, 'drd')
 */
function registerCloudDmnJSPlugin(module, components) {

  if (!Array.isArray(components)) {
    components = [ components ]
  }

  components.forEach(c => registerClientPlugin(module, `dmn.cloud.modeler.${c}.additionalModules`));
}

/**
 * Validate and register a platform specific dmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerPlatformDmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const DmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerPlatformDmnJSPlugin(DmnJSModule, [ 'drd', 'literalExpression' ]);
 * registerPlatformDmnJSPlugin(DmnJSModule, 'drd')
 */
function registerPlatformDmnJSPlugin(module, components) {

  if (!Array.isArray(components)) {
    components = [ components ]
  }

  components.forEach(c => registerClientPlugin(module, `dmn.platform.modeler.${c}.additionalModules`));
}

/**
 * Return the modeler directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getModelerDirectory() {
  return window.getModelerDirectory();
}

/**
 * Return the modeler plugin directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getPluginsDirectory() {
  return window.getPluginsDirectory();
}

/***/ }),

/***/ "./node_modules/min-dash/dist/index.cjs":
/*!**********************************************!*\
  !*** ./node_modules/min-dash/dist/index.cjs ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * Flatten array, one level deep.
 *
 * @template T
 *
 * @param {T[][] | T[] | null} [arr]
 *
 * @return {T[]}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
  return obj === undefined;
}

function isDefined(obj) {
  return obj !== undefined;
}

function isNil(obj) {
  return obj == null;
}

function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}

function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}

function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}

/**
 * @param {any} obj
 *
 * @return {boolean}
 */
function isFunction(obj) {
  const tag = nativeToString.call(obj);

  return (
    tag === '[object Function]' ||
    tag === '[object AsyncFunction]' ||
    tag === '[object GeneratorFunction]' ||
    tag === '[object AsyncGeneratorFunction]' ||
    tag === '[object Proxy]'
  );
}

function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}


/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */
function ensureArray(obj) {

  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}

/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
function has(target, key) {
  return !isNil(target) && nativeHasOwnProperty.call(target, key);
}

/**
 * @template T
 * @typedef { (
 *   ((e: T) => boolean) |
 *   ((e: T, idx: number) => boolean) |
 *   ((e: T, key: string) => boolean) |
 *   string |
 *   number
 * ) } Matcher
 */

/**
 * @template T
 * @template U
 *
 * @typedef { (
 *   ((e: T) => U) | string | number
 * ) } Extractor
 */


/**
 * @template T
 * @typedef { (val: T, key: any) => boolean } MatchFn
 */

/**
 * @template T
 * @typedef { T[] } ArrayCollection
 */

/**
 * @template T
 * @typedef { { [key: string]: T } } StringKeyValueCollection
 */

/**
 * @template T
 * @typedef { { [key: number]: T } } NumberKeyValueCollection
 */

/**
 * @template T
 * @typedef { StringKeyValueCollection<T> | NumberKeyValueCollection<T> } KeyValueCollection
 */

/**
 * @template T
 * @typedef { KeyValueCollection<T> | ArrayCollection<T> } Collection
 */

/**
 * Find element in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {Object}
 */
function find(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let match;

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      match = val;

      return false;
    }
  });

  return match;

}


/**
 * Find element index in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {number | string | undefined}
 */
function findIndex(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let idx = isArray(collection) ? -1 : undefined;

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      idx = key;

      return false;
    }
  });

  return idx;
}


/**
 * Filter elements in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {T[]} result
 */
function filter(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let result = [];

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      result.push(val);
    }
  });

  return result;
}


/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param { ((item: T, idx: number) => (boolean|void)) | ((item: T, key: string) => (boolean|void)) } iterator
 *
 * @return {T} return result that stopped the iteration
 */
function forEach(collection, iterator) {

  let val,
      result;

  if (isUndefined(collection)) {
    return;
  }

  const convertKey = isArray(collection) ? toNum : identity;

  for (let key in collection) {

    if (has(collection, key)) {
      val = collection[key];

      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}

/**
 * Return collection without element.
 *
 * @template T
 * @param {ArrayCollection<T>} arr
 * @param {Matcher<T>} matcher
 *
 * @return {T[]}
 */
function without(arr, matcher) {

  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);

  const matchFn = toMatcher(matcher);

  return arr.filter(function(el, idx) {
    return !matchFn(el, idx);
  });

}


/**
 * Reduce collection, returning a single result.
 *
 * @template T
 * @template V
 *
 * @param {Collection<T>} collection
 * @param {(result: V, entry: T, index: any) => V} iterator
 * @param {V} result
 *
 * @return {V} result returned from last iterator
 */
function reduce(collection, iterator, result) {

  forEach(collection, function(value, idx) {
    result = iterator(result, value, idx);
  });

  return result;
}


/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function every(collection, matcher) {

  return !!reduce(collection, function(matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}


/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function some(collection, matcher) {

  return !!find(collection, matcher);
}


/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */
function map(collection, fn) {

  let result = [];

  forEach(collection, function(val, key) {
    result.push(fn(val, key));
  });

  return result;
}


/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function keys(collection) {
  return collection && Object.keys(collection) || [];
}


/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */
function size(collection) {
  return keys(collection).length;
}


/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function values(collection) {
  return map(collection, (val) => val);
}


/**
 * Group collection members by attribute.
 *
 * @param {Object|Array} collection
 * @param {Extractor} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */
function groupBy(collection, extractor, grouped = {}) {

  extractor = toExtractor(extractor);

  forEach(collection, function(val) {
    let discriminator = extractor(val) || '_';

    let group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });

  return grouped;
}


function uniqueBy(extractor, ...collections) {

  extractor = toExtractor(extractor);

  let grouped = {};

  forEach(collections, (c) => groupBy(c, extractor, grouped));

  let result = map(grouped, function(val, key) {
    return val[0];
  });

  return result;
}


const unionBy = uniqueBy;



/**
 * Sort collection by criteria.
 *
 * @template T
 *
 * @param {Collection<T>} collection
 * @param {Extractor<T, number | string>} extractor
 *
 * @return {Array}
 */
function sortBy(collection, extractor) {

  extractor = toExtractor(extractor);

  let sorted = [];

  forEach(collection, function(value, key) {
    let disc = extractor(value, key);

    let entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      let { d } = sorted[idx];

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    }

    // not inserted, append (!)
    sorted.push(entry);
  });

  return map(sorted, (e) => e.v);
}


/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * ```javascript
 * const matcher = matchPattern({ id: 1 });
 *
 * let element = find(elements, matcher);
 * ```
 *
 * @template T
 *
 * @param {T} pattern
 *
 * @return { (el: any) =>  boolean } matcherFn
 */
function matchPattern(pattern) {

  return function(el) {

    return every(pattern, function(val, key) {
      return el[key] === val;
    });

  };
}


/**
 * @param {string | ((e: any) => any) } extractor
 *
 * @return { (e: any) => any }
 */
function toExtractor(extractor) {

  /**
   * @satisfies { (e: any) => any }
   */
  return isFunction(extractor) ? extractor : (e) => {

    // @ts-ignore: just works
    return e[extractor];
  };
}


/**
 * @template T
 * @param {Matcher<T>} matcher
 *
 * @return {MatchFn<T>}
 */
function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : (e) => {
    return e === matcher;
  };
}


function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/* global setTimeout clearTimeout */

/**
 * @typedef { {
 *   (...args: any[]): any;
 *   flush: () => void;
 *   cancel: () => void;
 * } } DebouncedFunction
 */

/**
 * Debounce fn, calling it only once if the given time
 * elapsed between calls.
 *
 * Lodash-style the function exposes methods to `#clear`
 * and `#flush` to control internal behavior.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {DebouncedFunction} debounced function
 */
function debounce(fn, timeout) {

  let timer;

  let lastArgs;
  let lastThis;

  let lastNow;

  function fire(force) {

    let now = Date.now();

    let scheduledDiff = force ? 0 : (lastNow + timeout) - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);

    clear();
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  function clear() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function flush() {
    if (timer) {
      fire(true);
    }

    clear();
  }

  /**
   * @type { DebouncedFunction }
   */
  function callback(...args) {
    lastNow = Date.now();

    lastArgs = args;
    lastThis = this;

    // ensure an execution is scheduled
    if (!timer) {
      schedule(timeout);
    }
  }

  callback.flush = flush;
  callback.cancel = clear;

  return callback;
}

/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */
function throttle(fn, interval) {
  let throttling = false;

  return function(...args) {

    if (throttling) {
      return;
    }

    fn(...args);
    throttling = true;

    setTimeout(() => {
      throttling = false;
    }, interval);
  };
}

/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */
function bind(fn, target) {
  return fn.bind(target);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */
function assign(target, ...others) {
  return Object.assign(target, ...others);
}

/**
 * Sets a nested property of a given object to the specified value.
 *
 * This mutates the object and returns it.
 *
 * @template T
 *
 * @param {T} target The target of the set operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} value The value to set.
 *
 * @return {T}
 */
function set(target, path, value) {

  let currentTarget = target;

  forEach(path, function(key, idx) {

    if (typeof key !== 'number' && typeof key !== 'string') {
      throw new Error('illegal key type: ' + typeof key + '. Key should be of type number or string.');
    }

    if (key === 'constructor') {
      throw new Error('illegal key: constructor');
    }

    if (key === '__proto__') {
      throw new Error('illegal key: __proto__');
    }

    let nextKey = path[idx + 1];
    let nextTarget = currentTarget[key];

    if (isDefined(nextKey) && isNil(nextTarget)) {
      nextTarget = currentTarget[key] = isNaN(+nextKey) ? {} : [];
    }

    if (isUndefined(nextKey)) {
      if (isUndefined(value)) {
        delete currentTarget[key];
      } else {
        currentTarget[key] = value;
      }
    } else {
      currentTarget = nextTarget;
    }
  });

  return target;
}


/**
 * Gets a nested property of a given object.
 *
 * @param {Object} target The target of the get operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} [defaultValue] The value to return if no value exists.
 *
 * @return {any}
 */
function get(target, path, defaultValue) {

  let currentTarget = target;

  forEach(path, function(key) {

    // accessing nil property yields <undefined>
    if (isNil(currentTarget)) {
      currentTarget = undefined;

      return false;
    }

    currentTarget = currentTarget[key];
  });

  return isUndefined(currentTarget) ? defaultValue : currentTarget;
}

/**
 * Pick properties from the given target.
 *
 * @template T
 * @template {any[]} V
 *
 * @param {T} target
 * @param {V} properties
 *
 * @return Pick<T, V>
 */
function pick(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(properties, function(prop) {

    if (prop in obj) {
      result[prop] = target[prop];
    }
  });

  return result;
}

/**
 * Pick all target properties, excluding the given ones.
 *
 * @template T
 * @template {any[]} V
 *
 * @param {T} target
 * @param {V} properties
 *
 * @return {Omit<T, V>} target
 */
function omit(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(obj, function(prop, key) {

    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });

  return result;
}

/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */
function merge(target, ...sources) {

  if (!sources.length) {
    return target;
  }

  forEach(sources, function(source) {

    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function(sourceVal, key) {

      if (key === '__proto__') {
        return;
      }

      let targetVal = target[key];

      if (isObject(sourceVal)) {

        if (!isObject(targetVal)) {

          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }

    });
  });

  return target;
}

exports.assign = assign;
exports.bind = bind;
exports.debounce = debounce;
exports.ensureArray = ensureArray;
exports.every = every;
exports.filter = filter;
exports.find = find;
exports.findIndex = findIndex;
exports.flatten = flatten;
exports.forEach = forEach;
exports.get = get;
exports.groupBy = groupBy;
exports.has = has;
exports.isArray = isArray;
exports.isDefined = isDefined;
exports.isFunction = isFunction;
exports.isNil = isNil;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.keys = keys;
exports.map = map;
exports.matchPattern = matchPattern;
exports.merge = merge;
exports.omit = omit;
exports.pick = pick;
exports.reduce = reduce;
exports.set = set;
exports.size = size;
exports.some = some;
exports.sortBy = sortBy;
exports.throttle = throttle;
exports.unionBy = unionBy;
exports.uniqueBy = uniqueBy;
exports.values = values;
exports.without = without;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers */ "./node_modules/camunda-modeler-plugin-helpers/index.js");
/* harmony import */ var _bpmnlintrc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.bpmnlintrc */ "./.bpmnlintrc");




// provide { config, resolver } as a `lintRules.${tabType}` plug-in
(0,camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__.registerClientPlugin)({ config: _bpmnlintrc__WEBPACK_IMPORTED_MODULE_1__.config, resolver: _bpmnlintrc__WEBPACK_IMPORTED_MODULE_1__.resolver }, 'lintRules.cloud-bpmn');
(0,camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__.registerClientPlugin)({ config: _bpmnlintrc__WEBPACK_IMPORTED_MODULE_1__.config, resolver: _bpmnlintrc__WEBPACK_IMPORTED_MODULE_1__.resolver }, 'lintRules.bpmn');

})();

/******/ })()
;
//# sourceMappingURL=client.js.map
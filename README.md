# Default Linter Rules Plugin

This plugin aims to offer the default rule set the Camunda Modeler had before it had the linter embedded.

For the first overview, have a look into the dependencies part of the [package.json file](package.json)

This plugin bundles given repositories to add them to the modeler

## bpmnlint

https://github.com/bpmn-io/bpmnlint

> Validate your BPMN diagrams based on configurable lint rules.

Contains the BPMN rules themselves in the `rules` folder.

## bpmnlint-loader

https://github.com/nikku/bpmnlint-loader

> Consume bpmnlint config files with webpack

## bpmnlint-plugin-camunda

https://github.com/camunda/bpmnlint-plugin-camunda

> Camunda model guidelines, packed as a bpmnlint plug-in.

Contains more Camunda 8 specific rules in the `rules` folder

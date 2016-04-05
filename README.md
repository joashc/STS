# STS - Sequential Trial Simulator for Health Hack 2015

http://joashc.github.io/STS

About Sequential Trial Simulator
--------------------------------

Sequential study designs are an important approach in pioneer (first-in-human) drug safety and effectiveness research.
A sequential trial typically includes a number of stages, defined by a pre-specified number of individuals who are exposed to a new medication or a next higher dose-level of the medication under investigation. Depending on the number of individuals who experience a certain critical (or beneficial) event at the end of a stage, the trial is either stopped for futility or proceeds with the next stage (inclusion of further individuals and re-evaluation of pre-defined stopping criteria).

If a substance (or dose) successfully passes all predefined stages of the sequential trial, the medication (or dose) is claimed to be acceptably safe and/or efficient.

This application allows the visualisation of the stochastic properties of an arbitrary sequential study, helping investigators design and plan first-in-human trials whilst balancing patient safety and overall cost-effectiveness.

Implementation
--------------

This application was initially implemented over three days for Health Hack 2015 by Alex, Joash, Louis, Nathalia, and Nathan for the problem owner Dr. Tibor Schuster of the Murdoch Childrens Research Institute, Melbourne Children's Trials Centre. The initial implementation used nvd3, d3.js, Bootstrap, AngularJS, and jstat.

It was later completely reimplemented by [Joash](https://github.com/joashc) using React, Redux, reselect, redux-undo, nvd3, Material UI, jstat and react-number-editor.

Instructions
------------

### Number inputs

This application uses number editors that obey the following rules:

- Adjust value by dragging up or down
- Hold Shift to increase adjustment sensitivity by 10x
- Hold Control/Command to reduce adjustment sensitivity by 10x
- On desktop, double click the input to type in a value
- On touchscreens, tap the input to type in a value
- Entering a value outside the min/max bounds will default to the min/max value, whichever is closest.

### Undo/ redo

Any action that affects the results can be undone or redone by using the buttons on the main toolbar.

### Prior Distribution

The prior distribution can be adjusted by selecting the appropriate distribution type and setting the parameters. Reset the distribution to return to the default values.

### Stages

A stage is defined by a number of participants and a pass threshold. Each stage has a stacked bar graph that graphs these properties relative to the total participant number, which is equivalent to the participant number of the final stage.
You can add/ remove stages, and adjust their values within certain constraints:

### Stage constraints

There are a number of constraints on the stage values. For a given stage _n_:

- The threshold must be at least one greater than the threshold of stage _n_ - 1
- The threshold must be at most the number of participants in stage _n_ or the threshold of stage _n_ + 1, whichever is smallest
- The participant number must be at least the number of participants in stage _n_ - 1, or the threshold of stage _n_, whichever is greatest
- The participant number must be at most the number of participants in stage _n_ + 1

Additionally,

- The minimum participant and threshold value for any stage is 1
- The minimum number of stages is 1

import React, { Component } from 'react';
import InfoBox from './InfoBox';
import DebouncedNumberEditor from './DebouncedNumberEditor';

export default class HowToUseBox extends Component {
  render() {
    const { open, onRequestClose } = this.props;
  return (<InfoBox title="Instructions" open={open} onRequestClose={onRequestClose}>
    <h3>Number inputs</h3>
    This application uses number editors that look like this:
    <p style={{marginBottom: "-1em"}}/>
    <DebouncedNumberEditor
        step={1}
        onValueChange={() => {}}
        value={10}
        style={{fontWeight: 400}}
        min={0}
        max={100}
        label="Demo" />
      <p/>
    They all obey these rules:
    <ul>
      <li>Adjust value by dragging up or down</li>
      <li>Hold Shift to increase adjustment sensitivity by 10x</li>
      <li>Hold Control/Command to reduce adjustment sensitivity by 10x</li>
      <li>On desktop, double click the input to type in a value</li>
      <li>On touchscreens, tap the input to type in a value</li>
      <li>Entering a value outside the min/max bounds will default to the min/max value, whichever is closest.</li>
    </ul>
    <h3>Undo/ redo</h3>
    Any action that affects the results can be undone or redone by using the buttons on the main toolbar.
    <h3>Prior Distribution</h3>
    The prior distribution can be adjusted by selecting the appropriate distribution type and setting the parameters. Reset the distribution to return to the default values.
    <h3>Stages</h3>
    A stage is defined by a number of participants and a pass threshold.
    Each stage has a stacked bar graph that graphs these properties relative to the total participant number, which is equivalent to the participant number of the final stage.
    <p />
    You can add/ remove stages, and adjust their values within certain constraints:
    <h3>Stage constraints</h3>
    There are a number of constraints on the stage values. For a given stage <i>n</i>:
    <ul>
      <li>The threshold must be at least one greater than the threshold of stage <i>n - 1</i></li>
      <li>The threshold must be at most the number of participants in stage <i>n</i> or one less than the threshold of stage <i>n + 1</i>, whichever is smallest</li>
      <li>The participant number must be at least the number of participants in stage <i>n - 1</i>, or the threshold of stage <i>n</i>, whichever is greatest</li>
      <li>The participant number must be at most the number of participants in stage <i>n + 1</i></li>
    </ul>
    Additionally,
    <ul>
      <li>The minimum participant and threshold value for any stage is 1</li>
      <li>The minimum number of stages is 1</li>
    </ul>
  </InfoBox>
  );
  }
}


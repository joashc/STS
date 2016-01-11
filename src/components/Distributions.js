/* @flow */
import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import DistributionParameter from './DistributionParameter';
import DistributionGraph from './DistributionGraph';
import { prop, find, compose, equals } from 'ramda';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/flat-button';

export default class Distributions extends Component {
  // $FlowIssue
  static propTypes = {
    updateDistribution: PropTypes.func.isRequired,
    resetDistribution: PropTypes.func.isRequired,
    distributions: PropTypes.array.isRequired,
    distributionNames: PropTypes.array.isRequired,
    currentDistribution: PropTypes.object.isRequired
  };

  render(): any {
    const { resetDistribution, weights, distributions, currentDistribution, updateDistribution } = this.props;
    const distGraphData = [ { values: weights, key: "Weighting", color: "#2196F3" } ];

    return (
      <Card style={{ margin: "1em" }} initiallyExpanded={true}>
        <Tabs value={currentDistribution} onChange={dist => updateDistribution(dist)}>
          {distributions.map((dist, index) => (
            <Tab label={dist.type} value={dist} key={index}/>
          ))}
        </Tabs>
        <CardHeader
          avatar={ <div></div> }
          subtitle={"True response probability distribution"}
          actAsExpander={true}
          showExpandableButton={true}
        >
       </CardHeader>
       <div style={{padding: "1em", paddingTop: "-3em", marginTop: "-3em"}}>
         {currentDistribution.paramDefinitions.map(def => (
          <DistributionParameter
            paramDefinition={def}
            distribution={currentDistribution}
            updateDistribution={updateDistribution}
            key={`${currentDistribution.type}:${def.paramProp}`}
          />))}
        </div>
        <CardText expandable={true}>
        <div style={{marginLeft: "-3em", marginTop: "-2.5em"}}>
          <DistributionGraph weights={weights} currentDistribution={currentDistribution} />
        </div>

        </CardText>
        <CardActions>
            <FlatButton label="Reset" onClick={() => resetDistribution(currentDistribution)} />
        </CardActions>
      </Card>
    );
  }
}

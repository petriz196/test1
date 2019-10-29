import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.renderMethod.bind(this);
  }

  renderMethod () {
    const pelements = [
      { "id": 1, "label": "element1", "status": "status1" },
      { "id": 2, "label": "element2","status": "status2" },
      { "id": 3, "label": "element3", "status": "status1" },
      { "id": 4, "label": "element4", "status": "status2" },
      { "id": 5, "label": "element5", "status": "status3" },
      { "id": 6, "label": "element6", "status": "status3" },
      { "id": 7, "label": "element7", "status": null },
      { "id": 8, "label": "element8", "status": "status1" },
      { "id": 9, "label": "element9", "status": "status2" },
      { "id": 10, "label": "element10", "status": null },
    ];

    const pgroups = [
      { "name": "group1", "status" : ["status1"] },
      { "name": "group2", "status" : ["status2"] },
      { "name": "group3", "status" : ["status3"] }
    ];


    return React.createElement('div', {}, pgroups.map(
      group => pelements.filter(element => group.status.includes(element.status)).map((element, index) => (
        React.createElement('div', { key: 'p_' + index }, [
          React.createElement('h1', { key: 'p_h1_' + index }, [element.label]),
          React.createElement('p', { key: 'p_p_' + index }, [element.status])
        ])
      ))
    ));
  }


  render () {
    return this.renderMethod();
  }
}

export default App;
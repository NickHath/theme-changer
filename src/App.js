import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super();

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'Arial',
      allowEdit: 'true'
    }
    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
  }

  // updateColor
  updateColor(newColor) {
    this.setState({
      fontColor: newColor
    })
  }

  // updateSize
  updateSize(newSize) {
    this.setState({
      fontSize: newSize
    })
  }

  // updateFamily
  updateFamily(newFont) {
    this.setState({
      fontFamily: newFont
    })
  }

  // updateEditStatus
  updateEditStatus(newEditStatus) {
    this.setState({
      allowEdit: newEditStatus
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          { /* Render ColorChanger */ }
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
        </div>
        <div className="textArea">
          { /* Render TextContainer */ }
        </div>
      </div>
    )
  }
}

export default App;

import React from 'react';
import './sort.scss'
import BubbleSort from './bubbleSort'
import SelectionSort from './selectionSort'

class Sort extends React.Component {
  state = {
    arr: null,
    sort: 'Bubble Sort',
  }

  componentDidMount() {
    this.random()
  }

  random() {
    const arr = [...Array(12)].map(() => (Math.floor(Math.random() * 9) + 1));
    this.setState({ arr })
  }

  changeSort(sort) {
    this.setState({ sort })
  }

  renderSwich() {
    switch (this.state.sort) {
      case 'Bubble Sort':
        return <BubbleSort arr={this.state.arr} />
      case 'Selection Sort':
        return <SelectionSort arr={this.state.arr} />
      default:
        return <div/>
    }
  }

  render() {
    return (
      this.state.arr ? <div>
        <div> <h1> {this.state.sort} </h1></div>
        {this.renderSwich()}
        <div className= "footer">
          <button onClick={() => this.random()}> Shuffle </button>
          <button onClick={() => this.changeSort('Bubble Sort')}> Bubble Sort </button>
          <button onClick={() => this.changeSort('Selection Sort')}> Selection Sort </button>
        </div>
      </div> : <div />
    );
  }
}
export default Sort


import React from 'react';
import './sort.scss'
import BubbleSort from './bubbleSort'
import SelectionSort from './selectionSort'
import InsertionSort from './insertionSort'

class Sort extends React.Component {
  state = {
    arr: null,
    sort: 'Bubble Sort',
    sortingTypes: ['Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Merge Sort', 'Quick sort']
  }

  componentDidMount() {
    this.random()
  }

  random() {
    const arr = [...Array(25)].map(() => (Math.floor(Math.random() * 9) + 1));
    this.setState({ arr })
  }

  changeSort(sort) {
    this.setState({ sort })
  }

  renderSwich() {
    switch (this.state.sort) {
      case 'Bubble Sort':
        return <BubbleSort arr={this.state.arr} shuffle={() => this.random()} />
      case 'Selection Sort':
        return <SelectionSort arr={this.state.arr} shuffle={() => this.random()} />
      case 'Insertion Sort':
        return <InsertionSort arr={this.state.arr} shuffle={() => this.random()} />
      default:
        return <div />
    }
  }

  render() {
    return (
      this.state.arr ? <div>
        <ul className="top-nav">
          {this.state.sortingTypes.map((item, key) => {
            return this.state.sort === item ?
              <li key={key}><a className="active" onClick={() => this.changeSort(item)}>{item}</a></li> :
              <li key={key}><a onClick={() => this.changeSort(item)}>{item}</a></li>
          })}
          <li className="homePage"><a href="/">Home</a></li>
        </ul>
        {this.renderSwich()}
      </div> : <div />
    );
  }
}
export default Sort


import React from 'react';
import './sort.scss'

class Sort extends React.Component {
  state = {
    arr: null,
    sort: 'Bubble Sort',
    comp: [],
    sorted: []
  }
  componentDidMount() {
    this.random()
  }
  random() {
    const arr = [...Array(12)].map(() => (Math.floor(Math.random() * 9) + 1));
    // const arr = [12,11,10,9,8,7,6,5,4,3,2,1]
    this.setState({ arr })
  }
  changeArr(arr, comp) {
    this.setState({ arr, comp })
  }
  changeSort(sort) {
    this.setState({ sort })
  }
  changeSorted(x) {
    let sorted = [...this.state.sorted]
    sorted.push(x)
    this.setState({ sorted })
    console.log(this.state.sorted)
  }
  sorting() {
    let arr = [...this.state.arr]
    let sampleArr = []
    let sampleComp = []
    let count = 0
    let xxx = 1

    switch (this.state.sort) {
      case 'Bubble Sort':
        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
              let temp = arr[i];
              arr[i] = arr[j]
              arr[j] = temp
            }
            sampleArr.push([...arr])
            sampleComp.push([i, j])
            setTimeout(() => { this.changeArr(sampleArr[count], sampleComp[count++]) }, xxx * 1000);
            xxx = xxx + 0.1
          }
          setTimeout(() => { this.changeSorted(i) }, xxx * 1000);
        }

        // let i, j, min_idx;
        // for (i = 0; i < arr.length - 1; i++) {
        //   min_idx = i;
        //   for (j = i + 1; j < arr.length; j++) {
        //     if (arr[j] < arr[min_idx])
        //       min_idx = j;
        //     sampleArr.push([...arr])
        //     sampleComp.push([j, j + 1])
        //     setTimeout(() => { this.changeArr(sampleArr[count], sampleComp[count++]) }, xxx * 1000);
        //     xxx = xxx + 0.1
        //   }
        //   arr[min_idx] = [arr[i], arr[i] = arr[min_idx]][0];

        // }
      case 'Insertion Sort':
        let i, j
        for (i = 0; i < arr.length - 1; i++) {
          for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j + 1]
              arr[j + 1] = temp
            }
            sampleArr.push([...arr])
            sampleComp.push([j, j + 1])
            setTimeout(() => { this.changeArr(sampleArr[count], sampleComp[count++]) }, xxx * 1000);
            xxx = xxx + 0.1
          }
          setTimeout(() => { this.changeSorted(arr.length - i - 1) }, xxx * 1000);
          console.log(arr.length - i - 1)
        }

    }
  }
  render() {
    return (
      this.state.arr ? <div>
        <div>{this.state.sort}</div>
        <div className="main-div" >
          {this.state.arr.map((item, key) => {
            return (<div key={key} className="div2" >
              {this.state.sorted.includes(key) ?
                <div className="sorted" style={{ height: item * 60 + 'px' }}><h1>{item}</h1></div>
                : this.state.comp.includes(key) ?
                  <div className="selected" style={{ height: item * 60 + 'px' }}><h1>{item}</h1></div>
                  : <div className="unsorted" style={{ height: item * 60 + 'px' }}><h1>{item}</h1></div>}</div>)
          })}
        </div>
        <button style={{ marginLeft: '20%' }} onClick={() => this.sorting()}> Sort</button>
        {/* <button onClick={() => this.random()}> change </button> */}
        <button onClick={() => this.changeSort('Bubble Sort')}> Bubble Sort</button>
        <button onClick={() => this.changeSort('Insertion Sort')}> Insertion Sort</button>
      </div> : <div />
    );
  }
}
export default Sort


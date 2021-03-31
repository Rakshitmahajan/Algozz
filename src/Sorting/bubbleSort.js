import React from 'react';
import './sort.scss'

class BubbleSort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: props.arr,
            comp: [],
            sorted: []
        };
    }
    componentWillReceiveProps() {
        this.setState({
            arr: this.props.arr,
            comp: [],
            sorted: []
        })
    }

    changeArr(arr, comp) {
        this.setState({ arr, comp })
    }

    changeSorted(x) {
        let sorted = [...this.state.sorted]
        sorted.push(x)
        this.setState({ sorted })
    }

    sorting() {
        let arr = [...this.state.arr]
        let sampleArr = []
        let sampleComp = []
        let ss = arr.length
        let count = 0
        let xxx = 1

        let i, j
        for (i = 0; i < arr.length ; i++) {
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
            setTimeout(() => { this.changeSorted(--ss) }, xxx * 1000);
        }

    }

    render() {
        return (
            this.state.arr ? <div>
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
                <div className= "footer">
                    <div onClick={() => this.sorting()}> <p>Sort</p></div>
                    <div onClick={this.props.shuffle}> <p>Shuffle</p> </div>
                </div>
            </div> : <div />
        );
    }
}
export default BubbleSort


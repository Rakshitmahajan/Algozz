import React from 'react';
import './sort.scss'

class InsertionSort extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: props.arr,
            current: -1,
            comp: [],
            sorted: false
        }
    }

    componentWillReceiveProps() {
        this.setState({
            arr: this.props.arr,
            comp: [],
            sorted: false
        })
    }

    changeArr(arr) {
        this.setState({ arr })
    }

    changeComp(comp) {
        this.setState({ comp })
    }

    changeCurrent(current) {
        this.setState({ current })
    }

    changeSorted(sorted) {
        this.setState({ sorted })
    }

    sorting() {
        let arr = [...this.state.arr]
        let sampleArr = []
        let sampleComp = []
        let testComp = []
        let arrCount = 0
        let currentCount = 0
        let compCount = 0
        let xxx = 1

        let i, key, j;
        setTimeout(() => { this.changeCurrent(currentCount++) }, xxx * 1000);
        xxx += 0.1
        for (i = 1; i < arr.length; i++) {
            key = arr[i];
            j = i - 1;
            setTimeout(() => { this.changeCurrent(currentCount++) }, xxx * 1000);
            xxx += 0.2

            testComp.push([])
            while (j >= 0 && arr[j] > key) {
                testComp[testComp.length - 1].push(j)
                j = j - 1;
            }
            sampleComp.push([])
            for (let x = 0; x < testComp[testComp.length - 1].length; x++) {
                sampleComp[testComp.length - 1].push(testComp[testComp.length - 1][x])
            }

            arr.splice(i, 1);
            arr.splice(j + 1, 0, key);
            sampleArr.push([...arr])
            setTimeout(() => { this.changeComp(sampleComp[compCount++]) }, xxx * 1000);
            xxx += 0.5
            setTimeout(() => { this.changeArr(sampleArr[arrCount++]); this.changeComp([]) }, xxx * 1000);
        }
        setTimeout(() => { this.changeCurrent(-1); this.changeSorted(true) }, xxx * 1000);
    }

    render() {
        return (
            this.state.arr ? <div>
                <div className="main-div" >
                    {this.state.arr.map((item, key) => {
                        return (<div key={key} className="div2" >
                            {this.state.sorted ?
                                <div className="sorted" style={{ height: item * 60 + 'px' }}><h1>{item}</h1></div>
                                : this.state.current === key ?
                                    <div className="selected" style={{ height: item * 60 + 'px' }}><h1>{item}</h1></div>
                                    : this.state.comp.includes(key) ?
                                        <div className="insComp" style={{ height: item * 60 + 'px' }}><h1>{item}</h1></div>
                                        : this.state.current < (key) ?
                                            <div className="unsorted" style={{ height: item * 60 + 'px' }}><h1>{item}</h1></div>
                                            : <div className="tempSorted" style={{ height: item * 60 + 'px' }}><h1>{item}</h1></div>}</div>)
                    })}
                </div>
                <div className="footer">
                    <div onClick={() => this.sorting()}> <p>Sort</p></div>
                    <div onClick={this.props.shuffle}> <p>Shuffle</p> </div>
                </div>
            </div> : <div />
        );
    }
}
export default InsertionSort


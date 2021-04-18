import React from 'react';
import './sort.scss'

class MergeSort extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [...props.arr],
            comp: [],
            tempSorted: [],
            sorted: false
        }
    }

    componentWillReceiveProps() {
        this.setState({
            arr: this.props.arr,
            comp: [],
            tempSorted: [],
            sorted: false
        })
    }

    changeArr(arr) {
        this.setState({ arr })
    }

    changeComp(comp) {
        this.setState({ comp })
    }

    changetempSorted(temp1) {
        let temp2 = [...this.state.tempSorted]
        let tempSorted = [...new Set([...temp1, ...temp2])];
        console.log(tempSorted, temp1, temp2)
        this.setState({ tempSorted })
    }

    changeSorted(sorted) {
        this.setState({ sorted })
    }

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    merge = async (left, right, a, b, c, d) => {
        let arr = []
        let comp = [a,c]

        while (left.length && right.length) {
            this.changeComp(comp)
            await this.sleep(100)

            if (left[0] < right[0]) {
                arr.push(left.shift())
                comp[0]+=1
            } else {
                arr.push(right.shift())
                comp[1]+=1
            }
        }
        let origArr = [...this.state.arr]
        let newArr = [...arr, ...left, ...right]
        let count = 0
        let temp = []
        for (let i = a; i < d; i++) {
            origArr[i] = newArr[count++]
            temp.push(i)
        }
        this.changeArr(origArr)
        this.changetempSorted(temp)
        return newArr
    }

    mergeSort = async (array, start, end) => {
        const half = Math.floor(array.length / 2)

        let a = start,
            b = start + Math.floor((end - start) / 2),
            c = start + Math.floor((end - start) / 2),
            d = end

        if (array.length < 2) {
            return array
        }
        const left = array.splice(0, half)
        return await this.merge(await this.mergeSort(left, a, b), await this.mergeSort(array, c, d), a, b, c, d)
    }

    sorting = async () => {
        let arr = await this.mergeSort([...this.state.arr], 0, this.state.arr.length)
        this.changeArr(arr)
        this.changeSorted(true)
    }

    render() {
        return (
            this.state.arr ? <div>
                <div className="main-div" >
                    {this.state.arr.map((item, key) => {
                        return (<div key={key} className="div2" >
                            {this.state.sorted ?
                                <div className="sorted" style={{ height: item * 60 + 'px' }}><h1>{item}</h1></div>
                                : this.state.comp.includes(key) ?
                                    <div className="selected" style={{ height: item * 60 + 'px' }}><h1>{item}</h1></div>
                                    : this.state.tempSorted.includes(key) ?
                                        <div className="tempSorted" style={{ height: item * 60 + 'px' }}><h1>{item}</h1></div>
                                        : <div className="unsorted" style={{ height: item * 60 + 'px' }}><h1>{item}</h1></div>}</div>)
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
export default MergeSort


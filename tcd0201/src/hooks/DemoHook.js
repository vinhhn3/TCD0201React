import React, {useState} from 'react';

const DemoHook = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  }
  return(
    <div>
      Count: {count}
      <button onClick={increaseCounter}>
        Click me
      </button>
    </div>
  )
}


// class DemoHook extends Component {
//   state = {
//     count: 0
//   }
//   render() {
//     return (
//       <div>
//       <p>Count: {this.state.count}</p>
//       </div>
//     );
//   }
// }


export default DemoHook;
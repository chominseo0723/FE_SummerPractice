import React from 'react'

const MyComponent = () => {
  return(
    <div>
      <h1>Hello, I'm a functional component!</h1>
      <p>This is my content</p>
    </div>
  )
}

function CustomComponent(){
  return (
    <div>
      <p>This is a custom component</p>
    </div>
  )
}

const App = () => { /*실제러 실행되는 컴포넌트는 App 하나 */
  return (
    <div>
      <h1>Welcome to My App</h1>
      <CustomComponent/>
      <MyComponent/>
    </div>
  )
}

export default App
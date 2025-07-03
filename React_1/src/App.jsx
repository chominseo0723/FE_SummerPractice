import React from 'react'

const App = () => {
  const user = { //user 객체 생성
    firstName: "조",
    lastName: "민서",
    major: "컴퓨터공학과"
  }

 const formatName = (user) => {
    return user.firstName + user.lastName
 }

  return (
    <div>
      {/* formatName 사용X : <h1>안녕하세요, {user.firstName + user.lastName}님!</h1> */}
      <h1>안녕하세요 {formatName(user)}님!</h1>
      <p> 전공: {user.major}</p>
      <h3>Thank you for visiting my Web Site</h3>
    </div>
  )
}

export default App
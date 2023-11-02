import { useState } from "react"

const Dashboard = () =>{  
  const [opened,setOpened] = useState(false)
  const toggleNav = ()=>{
    setOpened(!opened)
  }
  return (
    <div>
      <div id="mySidenav" className={`sidenav + ${opened? 'opened-nav' : ''}`}>
        <a href="/">Home</a>
        <a href="/">Courses</a>
        <a href="/">About</a>
        <a href="">Contact</a>
      </div>
      <div id="main">
        <nav className="flex justify-between">
           <span className={`menu-span + ${opened? 'opened-menu-span' : ''}`} onClick={toggleNav}>&#9776;</span>
        </nav>
      </div>
    </div>
  )
}
export default Dashboard

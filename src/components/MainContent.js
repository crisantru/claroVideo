import React from "react"

function MainContent() {

  const greeting = "Hello"
  const name = "Dart Vader"

  const styles = {
    color: "white",
    //backgroundColor: "blue",
    fontSize: "24px"
  }

  //styles.color= "orange"
  //JSX
  //includes javascript between in curly braces
  return (
      <main style={styles}>{`${greeting} ${name}`} This is the main section...</main>
      //<main>{greeting + " " + name} This is the main section...</main>
  )
}

export default MainContent

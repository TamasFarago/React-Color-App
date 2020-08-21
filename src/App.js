import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import Palette from "./Palette"
import seedColors from "./seedColors"
import { generatePalette } from "./ColorHelpers"

export default class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]))
    return (
      <Switch>
      <Route exact path="/" render={() => <h1>Palette</h1>}/>
      <Route exact path="/palette/:id" render={() => <h1>Palette2</h1>}/>
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    )
  }
}

import React, {Component, PropTypes } from 'react'
import ReactTooltip from 'react-tooltip'
import Preview from './preview'
import Wechatform from './wechatform'

class Editor extends Component {
  static propTypes= {

  }

  render() {
    return (
      <div>
        <Preview />
        <Wechatform />
      </div>

    )
  }


}
export default Editor

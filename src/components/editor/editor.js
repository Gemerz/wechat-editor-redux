import React, {Component, PropTypes } from 'react'
import ReactTooltip from 'react-tooltip'
import Preview from './preview'
import Wechatform from './wechatform'

class Editor extends Component {
  static propTypes = {

  }

  //const {} =this.props;

  render() {
    return (
      <div className='row'>
        <div className='col-8'>
          <Preview />
        </div>
        <div className='col-16'>
          <Wechatform />
        </div>
      </div>

    )
  }


}
export default Editor

import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactQuill from 'react-quill'
import { richtextEditing} from '../../redux/modules/richtext'

import "quill/dist/quill.snow.css"

const quillMixin = ReactQuill.Mixin


class richtext extends Component {

  static propTypes = {
    content: React.PropTypes.object,
    onChange: React.PropTypes.func
  }


  render() {

    const {content,onTextChange} = this.props;
    console.log(content);


    return (
      <div>
        <ReactQuill theme='snow'  onChange={this.onTextChange}/>
      </div>
    )
  }


}
export default richtext

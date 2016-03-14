import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactQuill from 'react-quill'
import { richtextEditing} from '../../redux/modules/richtext'

import "quill/dist/quill.snow.css"

const quillMixin = ReactQuill.Mixin


class richtext extends Component {
  //mixins = [ReactQuill.Mixin]

  static propTypes = {
    richText: React.PropTypes.string,
    onChange: React.PropTypes.func
  }


  onTextChange = function () {
    console.log()
  }


  render() {

    const {richText,onTextChange} = this.props;


    return (
      <div>
        <ReactQuill theme='snow'
                    defaultValue='dkdkdk' value={this.props.richText}
                    onChange={this.onTextChange}/>
      </div>
    )
  }


}
export default richtext

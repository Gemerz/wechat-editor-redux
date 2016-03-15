import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactQuill from 'react-quill'
import { richtextEditing} from '../../redux/modules/richtext'


class richtext extends Component {

  static propTypes = {
    richtext: PropTypes.string.isRequired,
    richtextEditing: PropTypes.func.isRequired,
  }

  render() {

    const {richtext,richtextEditing} = this.props;

    return (
      <div>
        <ReactQuill theme='snow' value={richtext}  onChange={richtextEditing}/>
      </div>
    )
  }

}
const mapStateToProps = (state) => ({
  richtext: state.richtext
})
export default connect((mapStateToProps), {
  richtextEditing: () => richtextEditing('')
})(richtext)

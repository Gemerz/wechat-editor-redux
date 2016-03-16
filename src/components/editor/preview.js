import React, {Component, PropTypes } from 'react'
import ReactTooltip from 'react-tooltip'
import {reduxForm} from 'redux-form'
import { connect } from 'react-redux'
import {addArticle} from '../../redux/modules/article'

class Preview extends Component {

  static propTypes = {
    articles: PropTypes.object.isRequired,
    addArticle: PropTypes.func.isRequired
  }

  render() {
    const {articles,addArticle}= this.props;

    return (
      <div className='wechat-editor-wrap'>
        <div className='wechat-editor'>
          <div className='editor'>
            <div className='editor-item'>
              <div className='cover'>
                <img className='cover-img'/>
                <span className='thumbnail-holder'></span>
                <h4 className='title'></h4>
                <div className='editor-item-edit' onClick={addArticle}>
                  <a data-tip data-for='icon-preview'><i className='fa fa-eye'></i></a>
                  <a data-tip data-for='icon-edit' href='javascript:void(0)'>
                    <i className='fa fa-pencil'></i></a>
                  <a data-tip data-for='icon-delete' href='javascript:void(0)'>
                    <i className='fa fa-trash'></i></a>
                  <ReactTooltip id='icon-preview' type='warning' effect='solid'>
                    <span>瀏覽</span>
                  </ReactTooltip>
                  <ReactTooltip id='icon-edit' type='warning' effect='solid'>
                    <span>編輯</span>
                  </ReactTooltip>
                  <ReactTooltip id='icon-delete' type='warning' effect='solid'>
                    <span>刪改</span>
                  </ReactTooltip>
                </div>
              </div>
            </div>
            <div className='editor-item'>
                <span className='thumbnail'>
                </span>
              <div className='editor-item-edit'>
                <a data-tip data-for='icon-preview'><i className='fa fa-eye'></i></a>
                <a data-tip data-for='icon-edit' href='javascript:void(0)'>
                  <i className='fa fa-pencil'></i></a>
                <a data-tip data-for='icon-delete' href='javascript:void(0)'>
                  <i className='fa fa-trash'></i></a>
                <div className=''>

                </div>
                <ReactTooltip id='icon-preview' type='warning' effect='solid'>
                  <span>瀏覽</span>
                </ReactTooltip>
                <ReactTooltip id='icon-edit' type='warning' effect='solid'>
                  <span>編輯</span>
                </ReactTooltip>
                <ReactTooltip id='icon-delete' type='warning' effect='solid'>
                  <span>刪改</span>
                </ReactTooltip>
              </div>
            </div>

          </div>

        </div>
      </div>

    )
  }


}
const mapStateToProps = (state) => ({
  articles: state.articles
})
export default connect((mapStateToProps), {
  addArticle: () => addArticle()
})(Preview)

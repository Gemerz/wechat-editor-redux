import React, {Component, PropTypes } from 'react'
import ReactTooltip from 'react-tooltip'
import { Form, Select,Input, InputNumber, Textarea,DatePicker, TimePicker, Switch, Radio,
  Slider, Button, Row, Col, Upload, Icon } from 'antd'
import RichText from './richtext'
import {reduxForm} from 'redux-form';


@reduxForm({
  form: 'wechat',
  fields: ['wcTittle', 'wcAuthor', 'wcCover', 'wcContent', 'wcSummary']
})
class Wechatform extends Component {


  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,


  }

  render() {

    const FormItem = Form.Item;
    const RadioGroup = Radio.Group;
    const RangePicker = DatePicker.RangePicker;
    const Dragger = Upload.Dragger;
    //const DraggerProps = {
    //  name: 'file',
    //  showUploadList: false,
    //  action: '/upload.do'
    //};
    const {fields: {wcTittle, wcAuthor,wcCover,wcSummary, wcContent}, handleSubmit} = this.props;


    return (
      <div className='wechat-editor-from'>

        <Form horizontal onSubmit={handleSubmit}>
          <FormItem
            id='wcTittle'
            label='标题：'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}>
            <Input id='wcc-user' placeholder='' {...wcTittle}/>
          </FormItem>

          <FormItem
            id='wcc-user'
            label='作者：'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}>
            <Input id='wcc-author' placeholder=' 選填'{...wcAuthor}/>
          </FormItem>

          <FormItem
            label='封面图片：'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            help='图片建议尺寸：850像素*350像素，大小不超过2M。上传'>
            <Upload name='logo' action='/upload.do' listType='picture' {...wcCover}>
              <Button type='ghost'>
                <Icon type='upload'/> 点击上传
              </Button>
            </Upload>
          </FormItem>


          <FormItem
            id='wcSummary'
            label='摘要：'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}>
            <Input type='textarea' id='wcSummary' rows='3' {...wcSummary}/>
          </FormItem>
          <FormItem
            id='control-textarea'
            label='&nbsp;'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 18 }}>

            <RichText />

          </FormItem>


          <Row style={{ marginTop: 24 }}>
            <Col span='16' offset='8'>
              <Button type='primary' htmlType='submit'>确定</Button>
            </Col>
          </Row>
          <div>

          </div>
        </Form>

      </div>

    )
  }


}

//Wechatform = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
//  form: 'Wechat',                           // a unique name for this form
//  fields: ['wcTittle', 'wcAuthor', 'wcCover', 'wcContent'] // all the fields in your form
//})(Wechatform);

export default Wechatform

import {
  Modal,
  Form,
  InputNumber,
} from 'antd'

const FormItem = Form.Item

class ModalEdit extends React.Component {
  render() {
    // props collect
    const {
      form,
      visible,
      handleHide,
      handleChange,
      baseValue,
    } = this.props
    const {
      getFieldDecorator,
    } = form

    // props definition
    const propsOfModal = {
      title: '编辑预算阈值',
      visible,
      width: 220,
      onOk: handleSubmit,
      onCancel: handleHide,
      destroyOnClose: true,
    }

    // function definition
    const handleSubmit = () => {
      form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          handleChange(values)
        }
      })
    }

    return (
      <Modal {...propsOfModal}>
        <Form>
          <FormItem>
            {getFieldDecorator('value', {
              initiValue: baseValue,
              rules: [{ type: 'number', min: 0, message: 'value is a non-zero value' }],
            })(
              <InputNumber
                placeholder='value'
                precision={0}
              />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(ModalEdit)

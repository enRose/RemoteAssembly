import React, { useState } from 'react'
import { DatePicker, Divider, Card, Affix, InputNumber, Form, Input, Button, Collapse } from 'antd'
import {
  StarFilled,
} from '@ant-design/icons'
import css from './booking-calendar-style.module.css'


const { RangePicker } = DatePicker
const { Panel } = Collapse

export const BookingCalendar = (props) => {
  const [form] = Form.useForm()
  const [numOfStudents, setNumOfStudents] = useState({
    age2To5: 0,
    age6To10: 0,
    age11To16: 0
  })

  const layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 10 },
    },
    tail: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
    rangePickerCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  }

  const onAge2To5InputChange = (value) => {
    console.log('changed', value)

    setNumOfStudents({...numOfStudents, age2To5: value})

    console.dir(numOfStudents, {colors: true, depth: null})
  }

  const onAge6To10InputChange = (value) => {
    console.log('changed', value)

    setNumOfStudents({...numOfStudents, age6To10: value})

    console.dir(numOfStudents, {colors: true, depth: null})
  }

  const onAge11To16InputChange = (value) => {
    console.log('changed', value)

    setNumOfStudents({...numOfStudents, age11To16: value})

    console.dir(numOfStudents, {colors: true, depth: null})
  }

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  function callback(key) {
    console.log(key)
  }

  return (
    <Affix offsetTop={90}>
      <Card
        title={props.title}
        extra={
          <a onClick={() => props.onHeaderExtraClick()} href="#">
            <StarFilled style={{ color: "rgb(255, 56, 92)", marginRight: '.2rem' }} />
            <span>{props.headerExtra}</span></a>
        }>
        <Form form={form} name="booking-calendar-form" onFinish={onFinish} {...layout}>
          <Form.Item wrapperCol={{ ...layout.rangePickerCol }} label="">
            <RangePicker />
          </Form.Item>

          <Collapse className={css['small-margin-bottom']} defaultActiveKey={['1']} onChange={callback}>
            <Panel header={`Total students: ${numOfStudents.age2To5 + numOfStudents.age6To10 + numOfStudents.age11To16}`} key="1">
              <Form.Item label="Age 2 - 5">
                <InputNumber min={1} max={10} defaultValue={0} onChange={onAge2To5InputChange} />
              </Form.Item>

              <Form.Item label="Age 6 - 10">
                <InputNumber min={1} max={10} defaultValue={0} onChange={onAge6To10InputChange} />
              </Form.Item>

              <Form.Item className={css['no-margin-bottom']} label="Age 11 - 16">
                <InputNumber min={1} max={10} defaultValue={0} onChange={onAge11To16InputChange} />
              </Form.Item>
            </Panel>
          </Collapse>

          <Form.Item className={css['no-margin-bottom']} wrapperCol={{ ...layout.tail }}>
            <Button type="primary" htmlType="submit" block>
              Reserve
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Affix>
  )
}

export default BookingCalendar
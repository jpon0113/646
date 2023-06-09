import React, { FC, useState } from 'react'
import { Empty, Typography, Table, Tag, Button, Space, Modal } from 'antd'
import { useTitle } from 'ahooks'
import styles from './common.module.scss'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { Title } = Typography
const { confirm } = Modal

const rawQuestionList = [
  {
    _id: 'q1',
    title: '問卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '3月10日 13:23',
  },
  {
    _id: 'q2',
    title: '問卷2',
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: '3月10日 13:23',
  },
  {
    _id: 'q3',
    title: '問卷3',
    isPublished: false,
    isStar: false,
    answerCount: 2,
    createdAt: '3月13日 09:19',
  },
]

const Trash: FC = () => {
  useTitle('垃圾桶')
  const [questionList, setQuestionList] = useState(rawQuestionList)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  function del() {
    confirm({
      title: '確定刪除問卷',
      icon: <ExclamationCircleOutlined />,
      content: '刪除後資料將無法復原',
      onOk: () => alert('刪除'),
    })
  }
  const tableColumns = [
    {
      title: '標題',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '是否發布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? <Tag color="processing">已發佈</Tag> : <Tag>未發布</Tag>
      },
    },
    {
      title: '答案',
      dataIndex: 'answerCount',
    },
    {
      title: '建立時間',
      dataIndex: 'createdAt',
    },
  ]
  // JSX片段定義為變量
  const TableElem = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            恢復
          </Button>
          <Button danger disabled={selectedIds.length === 0} onClick={del}>
            刪除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={questionList}
        columns={tableColumns}
        pagination={false}
        rowKey={q => q._id}
        rowSelection={{
          type: 'checkbox',
          onChange: selectedRowKeys => {
            setSelectedIds(selectedRowKeys as string[])
          },
        }}
      ></Table>
    </>
  )
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>垃圾桶</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暫無數據" />}
        {questionList.length > 0 && TableElem}
      </div>
      <div className={styles.footer}>分頁</div>
    </>
  )
}

export default Trash

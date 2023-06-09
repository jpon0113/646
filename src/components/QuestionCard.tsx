import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from 'antd'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import styles from './QuestionCard.module.scss'

const { confirm } = Modal

type PropsType = {
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const nav = useNavigate()
  const { _id, title, isStar, isPublished, answerCount, createdAt } = props

  function duplicate() {
    message.info('執行複製')
  }

  function del() {
    confirm({
      title: '確定刪除問卷',
      icon: <ExclamationCircleOutlined />,
      onOk: () => alert('刪除'),
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? <Tag color="processing">已發佈</Tag> : <Tag>未發布</Tag>}
            <span>回覆:{answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '12px' }}></Divider>
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              問卷編輯
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/stat/${_id}`)}
              disabled={!isPublished}
            >
              數據統計
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button
              icon={<StarOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/stat/${_id}`)}
            >
              {isStar ? '取消珍藏' : '珍藏'}
            </Button>
            <Popconfirm
              title="確定複製該問卷"
              okText="確定"
              cancelText="取消"
              onConfirm={duplicate}
            >
              <Button icon={<CopyOutlined />} type="text" size="small">
                複製
              </Button>
            </Popconfirm>
            <Button icon={<DeleteOutlined />} type="text" size="small" onClick={del}>
              刪除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard

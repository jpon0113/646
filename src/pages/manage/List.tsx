import React, { FC, useState } from 'react'
import { Typography } from 'antd'
import { useTitle } from 'ahooks'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'

const { Title } = Typography

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
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '3月10日 13:23',
  },
  {
    _id: 'q3',
    title: '問卷3',
    isPublished: true,
    isStar: false,
    answerCount: 2,
    createdAt: '3月13日 09:19',
  },
  {
    _id: 'q4',
    title: '問卷4',
    isPublished: true,
    isStar: true,
    answerCount: 20,
    createdAt: '3月13日 18:45',
  },
]

const List: FC = () => {
  useTitle('J胖愛問卷')
  const [questionList, setQuestionList] = useState(rawQuestionList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的問卷</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questionList.length > 0 &&
          questionList.map(q => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>上滑</div>
    </>
  )
}

export default List

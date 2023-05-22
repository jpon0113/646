import { spawn } from 'child_process'
import React, { FC } from 'react'
import styles from './QuestionCard.module.scss'

type PropsType = {
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, isPublished, answerCount, createdAt } = props
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="#">{title}</a>
        </div>
        <div className={styles.right}>
          {isPublished ? <span style={{ color: 'green ' }}>已發佈</span> : <span>未發布</span>}
          &nbsp;
          <span>回覆:{answerCount}</span>
          &nbsp;
          <span>{createdAt}</span>
        </div>
      </div>
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <button>問卷編輯</button>
          <button>數據統計</button>
        </div>
        <div className={styles.right}>
          <button>珍藏</button>
          <button>複製</button>
          <button>刪除</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard

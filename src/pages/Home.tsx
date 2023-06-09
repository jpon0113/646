import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { MANAGE_INDEX_PATHNAME } from '../router'
import styles from './Home.module.scss'

const { Title, Paragraph } = Typography

const Home: FC = () => {
  const nav = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>問卷調查 | 在線投票</Title>
        <Paragraph>已累計建立問卷 100 份, 發布問卷 90份, 收到問卷 999 份</Paragraph>
        <div>
          <Button
            type="primary"
            onClick={() => {
              nav(MANAGE_INDEX_PATHNAME)
            }}
          >
            開始使用
          </Button>
        </div>
      </div>
      {/* <p>Home</p>
      <div>
        <Button onClick={clickHandler}>登入</Button>
        &nbsp;
        <Link to="/register?a=10">註冊</Link>
      </div> */}
    </div>
  )
}

export default Home

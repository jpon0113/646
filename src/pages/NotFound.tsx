import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Result, Button } from 'antd'
import { MANAGE_INDEX_PATHNAME } from '../router'
const NotFound: FC = () => {
  const nav = useNavigate()

  return (
    <Result
      status="404"
      title="404"
      subTitle="頁面不存在"
      extra={
        <Button
          type="primary"
          onClick={() => {
            nav(MANAGE_INDEX_PATHNAME)
          }}
        >
          返回首頁
        </Button>
      }
    ></Result>
  )
}

export default NotFound

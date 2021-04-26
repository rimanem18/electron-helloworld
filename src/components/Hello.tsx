import React from 'react'

// Hello コンポーネントの属性（プロパティ）
export interface HelloProps {
  lastName?: string
}

// Hello コンポーネントの定義
const Hello = (props: HelloProps): JSX.Element => {
  const { lastName } = props
  return <h1>Hello {lastName} in Electron</h1>
}

export default Hello

import React from 'react'

// Hello コンポーネントの属性（プロパティ）
type Props = {
  lastName?: string
}

// Hello コンポーネントの定義
const Hello = (props: Props): JSX.Element => {
  const { lastName } = props
  return <h1>Hello {lastName ? lastName : 'Mr. Unknown'} in Electron</h1>
}

export default Hello

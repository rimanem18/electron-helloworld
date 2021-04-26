import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [date, setDate] = useState(new Date())

  // 現在日時を取得
  let datetime: string = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

  // 一秒ごとに時間更新
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date())
      console.log(datetime)
    }, 1000)
  }, [datetime])

  if (datetime === '15:59:20') {
    const myNotification = new Notification('Title', {
      body: 'Notification from the Renderer process',
    })

    myNotification.onclick = () => {
      console.log('Notification clicked')
    }
  }

  return <h1>{datetime}</h1>
}

export default Timer

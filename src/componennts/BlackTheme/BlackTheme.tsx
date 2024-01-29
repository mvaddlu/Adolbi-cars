import { ConfigProvider } from 'antd'
import React from 'react'

interface Props{
    children: React.ReactNode
}

export const BlackTheme:React.FC<Props> = ({children}) => {
  return (
    <ConfigProvider theme={{
            components:{
            Select:{
                colorBgContainer:'#12120e',
                colorText:'#f1f1f6',
                colorTextPlaceholder:'#f1f1f6',
                colorPrimaryHover:'#740706',
            },
            Slider:{
                colorPrimary:"#740806b5",
                colorBgElevated:'#740706',
                colorFillAlter:'#740706',
                trackBg:'#740706',
                trackHoverBg:'#740706',
                handleColor:'#f1f1f6',
            },
            Checkbox:{
            }
            },token:{
              colorPrimary:"#740706",
            }}}>
    {children}
    </ConfigProvider>
  )
}

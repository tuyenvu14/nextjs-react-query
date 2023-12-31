'use client'

import Scrollbars from 'react-custom-scrollbars'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { SlideShow } from './components/SlideShow'
import { ConfigProvider } from 'antd'
import { usePathname } from 'next/navigation'
import { profile } from '@/src/constants/routes'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#F59E0B',
          // colorBgTextHover: "#F59E0B",/
          wireframe: true,
          fontFamily: 'Inter, sans-serif',
        },
        components: {
          Button: {
            colorBorderBg: 'red',
          },
          Tag: {
            colorBorder: '#FEDF89',
            colorText: '#B54708',
          },
          Pagination: {
            // colorBorder: '#F59E0B',
            // colorBorderBg: '#F59E0B',
            // colorPrimary: '#F59E0B',
          },
        },
      }}
    >
      <div className="h-[100vh]">
        <Scrollbars style={{ height: '100%' }}>
          <Header />
          <div className="m-auto w-3/5 py-8">
            <div className="grid grid-cols-1 gap-x-1 gap-y-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6">
              {pathname.includes(profile) ? null : <SlideShow />}
              {children}
            </div>
          </div>
          <Footer />
        </Scrollbars>
      </div>
    </ConfigProvider>
  )
}

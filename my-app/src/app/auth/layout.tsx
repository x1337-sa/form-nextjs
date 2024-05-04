import React from 'react'

const AuthLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
      <section className='w-full'>
        <div className='h-screen flex items-center justify-center'>
            {children}
        </div>
      </section>
    </div>
  )
}

export default AuthLayout

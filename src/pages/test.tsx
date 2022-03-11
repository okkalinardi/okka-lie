import * as React from "react"
import * as style from '@/styles/test.module.scss'
import DefaultLayout from '@/components/layouts/default'

export default function HomePage () {
    return (
        <DefaultLayout>
        <div className={style.mainContainer}>
        <div className={style.mainTest}>TEST PAGES</div>
        </div>
        </DefaultLayout>
    )
}
import { ReactNode } from 'react'
import { Media } from '@app/shared/ui/media'
import { Header } from '@app/widgets/header'
import styles from './styles.module.css'

export interface Props {
  header?: ReactNode
  title: string
  content: ReactNode
}

export function BaseLayout({ header = <Header />, title, content }: Props) {
  return (
    <>
      {header}
      <h2 className={styles.title}>{title}</h2>
      <main className={styles.content}>{content}</main>
      <div>
        loool
        <Media lessThan="md">less than md content inner</Media>
      </div>
    </>
  )
}

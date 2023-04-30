import Head from 'next/head'
import classes from '@/sass/pages/todo_page.module.scss'
import Header from "@/components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>Todo app</title>
                <meta name="description" content="Todo app built with nextjs"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Header/>
                <p>Test fontu</p>
            </main>
        </>
)
}

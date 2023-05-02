import Head from 'next/head'
import classes from '@/sass/pages/todo_page.module.scss'
import Header from "@/components/Header";
import TodoList from "@/components/TodoList/TodoList";
import ThemeProvider from "@/context/ThemeProvider";
import MainApp from "@/components/MainApp";
import {MongoClient} from "mongodb";

export default function Home(props) {
    console.log(props.myTodos);
    return (
        <ThemeProvider>
            <Head>
                <title>Todo app</title>
                <meta name="description" content="Todo app built with nextjs"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <MainApp/>
        </ThemeProvider>
)
}
export const getStaticProps = async () => {
    try{
        const client = await MongoClient.connect("mongodb+srv://test_user:CyIxNuOeNZX4xzmf@mycluster.tw0suos.mongodb.net/?retryWrites=true&w=majority")
        const db = await client.db('todos')
        const todosCollection = await db.collection('todos');
        const allTodos = await todosCollection.find({}).toArray();
        return{
            props: {
                myTodos: allTodos.map(myTodo => {
                    return{
                        name: myTodo.name,
                        status: myTodo.status,
                        id: myTodo._id.toString()
                    }
                })
            },
            revalidate: 10
        }
    }
    catch (e){
        console.error(e);
    }
}

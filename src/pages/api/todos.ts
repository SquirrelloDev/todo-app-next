import {MongoClient} from "mongodb";

export default async function handler(req,res){
    if(req.method === 'POST'){
        const client = await MongoClient.connect("mongodb+srv://test_user:CyIxNuOeNZX4xzmf@mycluster.tw0suos.mongodb.net/?retryWrites=true&w=majority")
        const db = await client.db('todos')
        const todosCollection = await db.collection('todos');
        await todosCollection.insertOne(req.body)
        await client.close();
        res.status(201).json({message: "Todo created!"})
    }
    if (req.method === 'GET'){
        const client = await MongoClient.connect("mongodb+srv://test_user:CyIxNuOeNZX4xzmf@mycluster.tw0suos.mongodb.net/?retryWrites=true&w=majority")
        const db = await client.db('todos')
        const todosCollection = await db.collection('todos');
        const allTodos = await todosCollection.find({}).toArray();
        await client.close();
        const processedTodos = allTodos.map(todo =>{
            return {
                name: todo.name,
                status: todo.status,
                id: todo._id.toString()
            }
        })
        res.status(200).json(processedTodos);
    }

}
import {MongoClient, ObjectId} from "mongodb";

export default async function handler (req, res){
    if(req.method === 'DELETE'){
        try{
            const client = await MongoClient.connect("mongodb+srv://test_user:CyIxNuOeNZX4xzmf@mycluster.tw0suos.mongodb.net/?retryWrites=true&w=majority")
            const db = await client.db('todos')
            const todosCollection = await db.collection('todos');
            await todosCollection.deleteOne({_id: new ObjectId(req.query.id!)});
            await client.close();
            res.status(200).json({message: "Item deleted sucessfully"})
        }
        catch (e) {
            console.error(e)
        }
    }
}
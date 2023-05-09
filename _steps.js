/**
 * MongoDB connection
 * -------------------
 * 1.Create account 
 * 2. create an user with password
 * 3. whitelist ip address
 * 4.database > connect > driver > Node > view full code
 * 5. change the password the ui
 * ---------------------------------
 * 
 * 1 Create --- post
 * 2. app.post('/users'/ async (req, res) => {})
 * 3. Make the function async to use await inside it
 * 4. Make sure you use th express.json() middleware
 * 5. access data from the body: const user = res.body
 * 6. const result = await userCollection insertOne(user);
 * 7. res.send(result)
 * 
 * 
 * CLIENT
 * ---------
 * 1.create fetch
 * 2. add second parameter as an object
 * 3. provide method: 'POST' 
 * 4. add headers: {'content-type': 'application/json}
 * 5. add body: JSON.Stringify(user)
 * 
 * 
 * ------
 * READ MANY
 * ------
 * 1. create a cursor = useCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * 
 * 
 * ---------
 * DELETE
 * --------
 * 1. create app.delete('/users/:id', async(req, res) => {})
 * 2. specify unique ObjectId to delete the right user
 * 3. const query = {_id: new ObjectId (ID)}
 * 4. const result = await movies.deleteOne(query);
 * 
 * ----------
 * Clint
 * ---------
 * 1. create dynamic url with id
 * 2. mention the DELETE Method 
 * * */ 
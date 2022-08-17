const {createClient} = require('@astrajs/collections')


exports.handler = async function (event, context, callback) {

    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    })

    const postsCollection = astraClient
        .namespace(process.env.ASTRA_DB_KEYSPACE)
        .collection(process.env.COLLECTION_POSTS)

    try {
        const res = await postsCollection.create("a post", {
            title: "First post"
        })
        return {
            statusCode: 200,
        }
    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify(e)
        }
    }

}

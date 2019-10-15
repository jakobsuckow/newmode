import axios from 'axios'
exports.handler = function (event, context, callback) {
    const url = `https://api.airtable.com/v0/app4hMmdSl39Bd2Iv/Clothes?api_key=keycZExl0AEV9g3vb`

    // Send Response 

    const send = body => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(body)
        })
    }
    // Perform API Call
    const getApi = () => {
        axios.get(url)
        .then(res => send(res.data))
        .catch(err => send(err))
    }

    // Make sure Method is "GET"
    if(event.httpMethod == 'GET') {
        getApi()
    }
}
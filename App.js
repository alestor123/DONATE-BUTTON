var axios = require('axios'),
api = [];
module.exports =  async name => {
if(!name) throw Error('Name not found')
var data = await axios.get(`https://registry.npmjs.org/${name}`)
Object.entries(data.data.versions).map(names => api.push({version : names[1].version , license: names[1].license || 'No Licence'}))
return api
}
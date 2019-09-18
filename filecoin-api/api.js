const Filecoin = require('filecoin-api-client')

const fc = Filecoin({
  apiAddr: '/ip4/127.0.0.1/tcp/3453/http'
})

exports.getDefalutAddress = async function() { 
        const addr = await fc.address.default()
        console.log(addr)
        return addr
}; 

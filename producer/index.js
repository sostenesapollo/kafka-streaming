import Kafka from 'node-rdkafka'

const stream = Kafka.Producer.createWriteStream(
    {'metadata.broker.list': 'localhost:9092'}, 
{}, { topic: 'test' })

function queueMessage() {
    const event = { category: 'DOG', noise: 'bark' }
    const success = stream.write(JSON.stringify(event))
    
    if(success) {
        console.log('Message wrote to stream');
    } else {
        console.log('Error to write message');
    }
}

setInterval(()=>{ queueMessage() }, 3000)

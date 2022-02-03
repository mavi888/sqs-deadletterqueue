exports.myFunction = async (event) => {
    console.log(event);

    const body = event.Records[0].body;

    const random = Math.random();
    console.log(random)

    if (random > 0.5) {
        const err = new Error('Im an error!')
        throw err
    }
    
    console.log(body);
    return;
}
  
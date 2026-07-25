import {test} from '@playwright/test'
//to run tests serially
test.describe.configure({ mode: 'serial' })

// Sharding : nothing but splits the tescases. after test name in CLI put --shard=1/4

test('@smoke test 1 ', async ({page})=> {
console.log("test 1")

})

test('test 2', async ({page})=> {
console.log("test 2")

})
test('@smoke test 3 ', async ({page})=> {
console.log("test 3")

})
test('test 4', async ({page})=> {
console.log("test 4")

})

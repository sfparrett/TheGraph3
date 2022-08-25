import { BigInt } from "@graphprotocol/graph-ts"
import { Swappa_Test, Swap } from "../generated/Swappa_Test/Swappa_Test"
import { ExampleEntity, SwapEntity } from "../generated/schema"


export function handleSwap(event: Swap): void {
  let swapentity = SwapEntity.load(event.transaction.from.toHex())

  if (!swapentity){
    swapentity = new SwapEntity(event.transaction.from.toHex())
  } 

  // QUESTION: WHY ISNT THE GRAPH UPDATING IN WEBSITE ?? 
  swapentity.id = "hello" // REMOVE THIS 
  // swapentity.sender = (event.params.sender).toHexString()
  // swapentity.input =  (event.params.input).toHexString()
  // swapentity.output = (event.params.output).toHexString()
  // swapentity.inputAmount =  event.params.inputAmount
  // swapentity.outputAmount =  event.params.outputAmount
  swapentity.save()



}
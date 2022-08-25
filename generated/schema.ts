// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExampleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ExampleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ExampleEntity", id.toString(), this);
    }
  }

  static load(id: string): ExampleEntity | null {
    return changetype<ExampleEntity | null>(store.get("ExampleEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }
}

export class SwapEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SwapEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SwapEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SwapEntity", id.toString(), this);
    }
  }

  static load(id: string): SwapEntity | null {
    return changetype<SwapEntity | null>(store.get("SwapEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    return value!.toString();
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get input(): string {
    let value = this.get("input");
    return value!.toString();
  }

  set input(value: string) {
    this.set("input", Value.fromString(value));
  }

  get output(): string {
    let value = this.get("output");
    return value!.toString();
  }

  set output(value: string) {
    this.set("output", Value.fromString(value));
  }

  get inputAmount(): BigInt {
    let value = this.get("inputAmount");
    return value!.toBigInt();
  }

  set inputAmount(value: BigInt) {
    this.set("inputAmount", Value.fromBigInt(value));
  }

  get outputAmount(): BigInt {
    let value = this.get("outputAmount");
    return value!.toBigInt();
  }

  set outputAmount(value: BigInt) {
    this.set("outputAmount", Value.fromBigInt(value));
  }

  get tenantId(): BigInt {
    let value = this.get("tenantId");
    return value!.toBigInt();
  }

  set tenantId(value: BigInt) {
    this.set("tenantId", Value.fromBigInt(value));
  }
}

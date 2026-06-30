import { get_encoding } from "tiktoken";

const encoding = get_encoding("gpt2");

const encoded = encoding.encode("I love AI");

console.log(encoded);
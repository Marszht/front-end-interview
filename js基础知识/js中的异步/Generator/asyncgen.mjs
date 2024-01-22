import { open } from 'node:fs/promises';

let filehandle;
try {
  filehandle = await open('./numbers.txt', 'r');
  console.log(filehandle)
} finally {
  await filehandle?.close();
}


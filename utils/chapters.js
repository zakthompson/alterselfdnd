import fs from 'fs';
import path from 'path';

export const chaptersDirectory = path.join(process.cwd(), 'chapters');

export function getAllChapterIDs() {
  const fileNames = fs.readdirSync(chaptersDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ''),
      },
    };
  });
}

export function stripMessage(message) {
  return {
    author: message.author.name,
  };
}

export function getChapterData(id) {
  const fullPath = path.join(chaptersDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return {
    id,
    messages: JSON.parse(fileContents).messages.map(stripMessage),
  };
}

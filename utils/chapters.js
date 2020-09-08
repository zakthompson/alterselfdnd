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
    id: message.id,
    author: message.author.name,
    content: message.content,
    embed: message.embeds[0] || null,
  };
}

export function getChapterData(id) {
  const fullPath = path.join(chaptersDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const chapterJson = JSON.parse(fileContents);
  const { title } = chapterJson.messages.find((message) => {
    const embedTitle = message.embeds.length && message.embeds[0].title;
    return (
      embedTitle &&
      (embedTitle.includes('Chapter') || embedTitle.includes('Prologue'))
    );
  }).embeds[0];

  return {
    id,
    title,
    messages: chapterJson.messages.map(stripMessage),
  };
}

export function getChapters() {
  const fileNames = fs.readdirSync(chaptersDirectory);
  return fileNames.map((fileName) => {
    const fullPath = path.join(chaptersDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const chapterJson = JSON.parse(fileContents);
    const { title } = chapterJson.messages.find((message) => {
      const embedTitle = message.embeds.length && message.embeds[0].title;
      return (
        embedTitle &&
        (embedTitle.includes('Chapter') || embedTitle.includes('Prologue'))
      );
    }).embeds[0];

    return {
      id: fileName.replace(/\.json$/, ''),
      title,
    };
  });
}

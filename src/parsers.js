import { load } from 'js-yaml';

export default (content, type) => {
  switch (type) {
    case 'json':
      return JSON.parse(content);
    case 'yaml':
      return load(content);
    case 'yml':
      return load(content);
    default:
      throw new Error(`UNKNOWN FORMAT: ${type}`);
  }
};

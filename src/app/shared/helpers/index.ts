const removeStrings = (name: string) => {

  let result = name ? name.replace(/\s+/g, '') : null;
  return result;
};
export {removeStrings};

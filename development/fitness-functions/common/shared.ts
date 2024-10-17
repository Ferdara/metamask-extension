function filterDiffByFilePath(diff: string, regex: RegExp): string {
      let shouldCheckBlock = false;
          if (!regex.test(path)) {
            // Not excluded, include in check
            shouldCheckBlock = true;
      return shouldCheckBlock;
function restrictedFilePresent(diff: string, regex: RegExp): boolean {
  // split by `diff --git` and remove the first element which is empty
  const diffBlocks = diff.split(`diff --git`).slice(1);
  let jsOrJsxFilePresent = false;
  diffBlocks
    .map((block) => block.trim())
    .filter((block) => {
      block
        // get the first line of the block which has the paths
        .split('\n')[0]
        .trim()
        // split the two paths
        .split(' ')
        // remove `a/` and `b/` from the paths
        .map((path) => path.substring(2))
        // if at least one of the two paths matches the regex, filter the
        // corresponding diff block in
        .forEach((path) => {
          if (regex.test(path)) {
            // Not excluded, include in check
            jsOrJsxFilePresent = true;
          }
        });
      return jsOrJsxFilePresent;
    });
  return jsOrJsxFilePresent;
}

    const trimmedLine = line.trim();
    const isAdditionLine =
      trimmedLine.startsWith('+') && !trimmedLine.startsWith('+++');
  restrictedFilePresent,
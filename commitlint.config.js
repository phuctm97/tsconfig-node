module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [(commit) => /^build\((deps|deps-dev)\): bump/.test(commit)],
};

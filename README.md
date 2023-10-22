# Unofficial UFC Stats Tracker
This website uses MMAv2 API from [Sportsradar](https://developer.sportradar.com/)

---
## To Run Locally:
1. Create .env file with the following variables:

```bash
  API_KEY=<your_api_key>
  BASE_URL=https://api.sportradar.com/mma/trial/v2
```
2. Start the app

```bash
  yarn dev
```
---

## For Contributors:
- Follow Semantic commit rules
- Commit to seperate branch, example: features/new-feature
- Create a pull request

```
feat: add image slider
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

Commit rules:
- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

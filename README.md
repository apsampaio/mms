# 🐀 Micromouse Simulator

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/apsampaio/mms">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/apsampaio/mms">
  
  <a href="https://github.com/apsampaio/mms/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/apsampaio/mms">
  </a>
</p>

## 🧱 Maze Generator using Recursive backtracker algorithm

<img src="./.github/maze.gif" />

### 📚 References

- [Maze generation algorithm](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_backtracker)
- [Coding Challenge #10.1](https://thecodingtrain.com/CodingChallenges/010.1-maze-dfs-p5.html)

### 🚦 Algorithm

1. Choose the initial cell, mark it as visited and push it to the stack
2. While the stack is not empty

   1. Pop a cell from the stack and make it a current cell
   2. If the current cell has any neighbours which have not been visited

      1. Push the current cell to the stack
      2. Choose one of the unvisited neighbours
      3. Remove the wall between the current cell and the chosen cell
      4. Mark the chosen cell as visited and push it to the stack

## 🚀 Run App

1. `git clone` this repo.
2. Acess the cloned folder.
3. Run `yarn` or `npm install`
4. Run `yarn start` or `npm start`

---

Feito com ♥ by Andre Sampaio <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">

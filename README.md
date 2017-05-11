# SDWI Group Project
Software Development Workshop I(For Y1 Student) **Group Project － Whac-A-Mole**

[Final Game Link](https://ecwuuuuu.com/wam/)

## Menber
- Zhenghao Wu
- Guozhen Wang
- Xianggao Gu

## Potential Option
### Whac-A-Mole `SELETED`
![Whac-A-Mole](https://cdn.ecwuuuuu.com/17-2-24/75420786-file_1487907410071_178d3.png)

[First Design & Simple Interface](https://www.fluidui.com/editor/live/preview/p_zyPc2q51vx9mUX7aroxFltwEnfcDpynD.1489041513142)

![User Interface](https://cdn.ecwuuuuu.com/17-3-19/78587216-file_1489915344907_10c69.jpg)

![Logic Design](https://cdn.ecwuuuuu.com/17-3-19/5282605-file_1489915472893_160d.png)
#### Basic Rules
1. Duration of one round: **60 seconds** (The game will last for 60 seconds before it is over.)
2. Number of holes: **9**
3. Number of moles showing up **at a time**: **3**
4. Duration of moles showing up at a time: **1 second**
5. Position of a mole (Which hole?): **randomly decided**
6. When a mole is stricken, the **score will increase by 1**.
7. Information displayed during the game:
  a. data: **remaining time**, **number of strikes**, **scores**.
  b. functions: **replay** and **exit** buttons for player to replay or exit the game.
8. Expected information shown when game is over: **number of strikes**, **scores**.

#### Extra points
1. Add one “bad guy” that randomly appears in the game. If the player strikes it, the score will decrease by 1. **Once the scores are decreased to 0, game is over.**
2. Accelerate the game every 20 seconds by reducing the current duration of moles showing up to half.

@echo off
FOR %%i IN (ZZA ZZB ZZC ZZD ZZE ZZF ZZG ZZH ZZI ZZJ ZZK ZZL ZZM ZZN ZZO ZZP ZZQ ZZR ZZS ZZT ZZU ZZV ZZW ZZX ZZY ZZZ) DO (
  md D:\WISSEN\learn2022-23\3D\tutorials-babylon\%%i%\images
  echo NUL > D:\WISSEN\learn2022-23\3D\tutorials-babylon\%%i%\index.html
  TIMEOUT /T 1
)
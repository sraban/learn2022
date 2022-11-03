@echo off
FOR %%i IN (ZA ZB ZC ZD ZE ZF ZG ZH ZI ZJ ZK ZL ZM ZN ZO ZP ZQ ZR ZS ZT ZU ZV ZW ZX ZY ZZ) DO (
  md D:\WISSEN\learn2022-23\3D\tutorials-babylon\%%i%\images
  echo NUL > D:\WISSEN\learn2022-23\3D\tutorials-babylon\%%i%\index.html
  TIMEOUT /T 1
)